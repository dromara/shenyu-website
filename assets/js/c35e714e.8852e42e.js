"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[71417],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>m});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(l,".").concat(g)]||p[g]||y[g]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43112:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(45072),r=(n(11504),n(95788));const a={title:"Quick start with Websocket",description:"Websocket quick start"},s=void 0,i={unversionedId:"quick-start/quick-start-websocket",id:"version-2.4.3/quick-start/quick-start-websocket",isDocsHomePage:!1,title:"Quick start with Websocket",description:"Websocket quick start",source:"@site/versioned_docs/version-2.4.3/quick-start/quick-start-websocket.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-websocket",permalink:"/docs/2.4.3/quick-start/quick-start-websocket",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/quick-start/quick-start-websocket.md",version:"2.4.3",frontMatter:{title:"Quick start with Websocket",description:"Websocket quick start"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Quick start with Tars",permalink:"/docs/2.4.3/quick-start/quick-start-tars"},next:{title:"Data Permission Management",permalink:"/docs/2.4.3/user-guide/admin-usage/data-permission"}},l=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-websocket project",id:"run-the-shenyu-examples-websocket-project",children:[]},{value:"Test",id:"test",children:[]},{value:"Annexes",id:"annexes",children:[]}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Websocket."),(0,r.yg)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Refer to ",(0,r.yg)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," to deploy the Shenyu gateway.")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Deploy the ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," service.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"After successful launch, you need to set the ",(0,r.yg)("inlineCode",{parentName:"li"},"Websocket")," plugin to be enabled in the page's basic configuration ",(0,r.yg)("inlineCode",{parentName:"li"},"->"),"Plugin Management.")),(0,r.yg)("img",{src:"/img/shenyu/plugin/websocket/enable_websocket_en.png",width:"60%",height:"50%"}),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Deploy the ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap")," service.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"After starting, ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap")," will synchronize the data via the ",(0,r.yg)("inlineCode",{parentName:"li"},"websocket")," protocol according to the address configured in ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu.sync.websocket.url"),".")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: Before starting, make sure that the gateway has introduced the relevant dependency, which is introduced by default.")),(0,r.yg)("p",null,"Import the gateway proxy plugin for ",(0,r.yg)("inlineCode",{parentName:"p"},"Websocket")," and add the following dependencies to the gateway's ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--shenyu websocket plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.yg)("h2",{id:"run-the-shenyu-examples-websocket-project"},"Run the shenyu-examples-websocket project"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/2.4.3-release/shenyu-examples/shenyu-examples-websocket/shenyu-example-spring-annotation-websocket"},"shenyu-examples-websocket")," (",(0,r.yg)("inlineCode",{parentName:"p"},"native-websocket")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"reactive-websocket")," can refer to the subprojects under ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/2.4.3-release/shenyu-examples/shenyu-examples-websocket"},"shenyu-examples-websocket"),").")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run main method of ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.websocket.TestAnnotationWebsocketApplication")," to start this project."))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The examples project will synchronize the websocket service information to ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," via the ",(0,r.yg)("inlineCode",{parentName:"li"},"http")," protocol according to the address configured in ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu.register.serverLists"),", and then to ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-bootstrap")," by ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),".")),(0,r.yg)("p",null,"log info as follows after starting:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'2022-08-09 23:37:34.994  INFO 61398 --- [or_consumer_-21] o.a.s.r.client.http.utils.RegisterUtils  : metadata client register success: {"appName":"ws-annotation","contextPath":"/ws-annotation","path":"/ws-annotation/myWs","rpcType":"websocket","ruleName":"/ws-annotation/myWs","enabled":true,"pluginNames":[],"registerMetaData":false,"timeMillis":1660059454701} \n2022-08-09 23:37:35.019  INFO 61398 --- [or_consumer_-18] o.a.s.r.client.http.utils.RegisterUtils  : uri client register success: {"protocol":"ws://","appName":"ws-annotation","contextPath":"/ws-annotation","rpcType":"websocket","host":"192.168.1.3","port":8001} \n')),(0,r.yg)("h2",{id:"test"},"Test"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-examples-websocket")," project will automatically register the interface methods annotated with ",(0,r.yg)("inlineCode",{parentName:"li"},"@ShenyuSpringWebSocketClient")," to the gateway and add selectors and rules after successful start, you can see the information of ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-examples-websocket")," service registration by visiting ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," page -> PluginList -> Proxy -> Websocket to see the ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-examples-websocket")," service registration information, if not, you can refer to ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.4.3/plugin-center/proxy/websocket-plugin"},"Websocket plugin")," to add the configuration manually.")),(0,r.yg)("img",{src:"/img/shenyu/plugin/websocket/auto_register_en.png",width:"60%",height:"50%"}),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"The following test code (see attachment) simulates the request method of the ",(0,r.yg)("inlineCode",{parentName:"li"},"Websocket")," protocol to request your ",(0,r.yg)("inlineCode",{parentName:"li"},"Websocket")," service.")),(0,r.yg)("img",{src:"/img/shenyu/plugin/websocket/test_result_en.png",width:"60%",height:"50%"}),(0,r.yg)("h2",{id:"annexes"},"Annexes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"websocket debugging code")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a file called websocket.html and copy the following code into the file."),(0,r.yg)("li",{parentName:"ul"},"Open websocket.html with Chrome.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE HTML>\n<html>\n<head>\n    <meta http-equiv="content-type" content="text/html" />\n    <title>Shenyu WebSocket Test</title>\n    <script>\n        var websocket;\n        function connect() {\n            try {\n                websocket = new WebSocket(document.getElementById("url").value);\n                websocket.onopen = onOpen;\n                websocket.onerror = onError;\n                websocket.onmessage = onReceive;\n                websocket.onclose = onClose;\n            } catch (e) {\n                alert(\'[websocket] establish connection error.\');\n            }\n        }\n        function onOpen() {\n            alert(\'[websocket] connect success.\');\n        }\n        function onError(e) {\n            alert("[websocket] connect error. code: " + e.code);\n        }\n        function onReceive(msg) {\n            var show = document.getElementById("show");\n            show.innerHTML += "[Server Response] => " + msg.data + "<br/>";\n            show.scrollTop = show.scrollHeight;\n        }\n        function onClose(e) {\n            console.log("[websocket] connect closed. code: " + e.code)\n            alert("[websocket] connect closed.");\n            document.getElementById("show").innerHTML = "";\n            document.getElementById("msg").value = "";\n            websocket = null;\n        }\n        function buttonClose() {\n            if (websocket == null) {\n                console.log("Please establish a connection first.")\n            } else {\n                websocket.close(1000);\n                document.getElementById("show").innerHTML = "";\n                document.getElementById("msg").value = "";\n            }\n        }\n        function send() {\n            if (websocket == null) {\n                alert("Please establish a connection first.")\n            } else {\n                var msg = document.getElementById("msg").value;\n                show.innerHTML += "[Client Request] => " + msg + "<br/>";\n                websocket.send(msg);\n            }\n        }\n    <\/script>\n</head>\n<body>\n    <input id="url" type="text" value="ws://localhost:9195/ws-annotation/myWs"><br />\n    <input id="msg" type="text"><br />\n    <button id="connect" onclick="connect();">Connect</button>\n    <button id="send" onclick="send();">Send</button>\n    <button id="close" onclick="buttonClose();">Close</button></br>\n    <div id="show" class="show"></div>\n</body>\n</html>\n<style>\n    input {\n        width: 400px;\n        margin-bottom: 10px;\n    }\n    .show {\n        width: 600px;\n        height: 400px;\n        overflow-y: auto;\n        border: 1px solid #333;\n        margin-top: 10px;\n    }\n</style>\n')))}p.isMDXComponent=!0}}]);