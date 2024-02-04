"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[44588],{95788:(e,n,t)=>{t.d(n,{Iu:()=>y,yg:()=>d});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return t?r.createElement(d,o(o({ref:n},y),{},{components:t})):r.createElement(d,o({ref:n},y))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},21264:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const i={sidebar_position:7,title:"Cluster Deployment",keywords:["Gateway Cluster Enviroment","Cluster Enviroment"],description:"Cluster Delopyment"},o=void 0,l={unversionedId:"deployment/deployment-cluster",id:"version-2.5.0/deployment/deployment-cluster",isDocsHomePage:!1,title:"Cluster Deployment",description:"Cluster Delopyment",source:"@site/versioned_docs/version-2.5.0/deployment/deployment-cluster.md",sourceDirName:"deployment",slug:"/deployment/deployment-cluster",permalink:"/docs/2.5.0/deployment/deployment-cluster",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/deployment/deployment-cluster.md",version:"2.5.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Cluster Deployment",keywords:["Gateway Cluster Enviroment","Cluster Enviroment"],description:"Cluster Delopyment"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Custom Deployment",permalink:"/docs/2.5.0/deployment/deployment-custom"},next:{title:"Quick start with Dubbo",permalink:"/docs/2.5.0/quick-start/quick-start-dubbo"}},p=[{value:"Enviromental Preparation",id:"enviromental-preparation",children:[]},{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Boostrap",id:"start-apache-shenyu-boostrap",children:[]},{value:"Start Nginx",id:"start-nginx",children:[]},{value:"Apache ShenYu Nginx Module",id:"apache-shenyu-nginx-module",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Build from source",id:"build-from-source",children:[]},{value:"Greeting ETCD",id:"greeting-etcd",children:[]},{value:"Greeting Nacos",id:"greeting-nacos",children:[]}]},{value:"Greeting Zookeeper",id:"greeting-zookeeper",children:[]}],s={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.5.0/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,a.yg)("p",null,"This aritcle introduces how to delopy the ",(0,a.yg)("inlineCode",{parentName:"p"},"Shenyu")," gateway in cluster enviroment."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"In this part, you can see  ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.5.0/deployment/deployment-package"},"ShenYu Binary Packages Deployment")," before deploying.")),(0,a.yg)("h3",{id:"enviromental-preparation"},"Enviromental Preparation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Two or more Gateway Boostrap servers, these servers must install JDK1.8+."),(0,a.yg)("li",{parentName:"ul"},"A server for Gateway Admin, this server must install mysql/pgsql/h2 and JDK1.8+."),(0,a.yg)("li",{parentName:"ul"},"A server for nginx.")),(0,a.yg)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"download and unzip ",(0,a.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz"},"apache-shenyu-${current.version}-admin-bin.tar.gz")," in your Gateway Admin server.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"config your database, go to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/conf")," directory, and  modify ",(0,a.yg)("inlineCode",{parentName:"p"},"spring.profiles.active")," of the configuration in ",(0,a.yg)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"pg")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"h2"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"config your way of synchronization, go to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/conf")," directory, and modify ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu.sync")," of configuration in ",(0,a.yg)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"websocket"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"http"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"consul")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"nacos"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"start Apache ShenYu Admin in ",(0,a.yg)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,a.yg)("h3",{id:"start-apache-shenyu-boostrap"},"Start Apache ShenYu Boostrap"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"download and unzip ",(0,a.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz")," in your Gateway Boostrap server.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"config your synchronization, go to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/conf")," directory, and modify ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu.sync")," of configuration in ",(0,a.yg)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"websocket"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"http"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"consul")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"nacos"),", this configuaration must remain the same of ",(0,a.yg)("inlineCode",{parentName:"p"},"ShenyYu Admin"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"repeat above-mentioned operations in each ",(0,a.yg)("inlineCode",{parentName:"p"},"ShenYu Bootstrap")," server.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"start Apache ShenYu Bootstrap in ",(0,a.yg)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"After completing these operations, you will deploy ",(0,a.yg)("inlineCode",{parentName:"p"},"ShenYu Boostrap")," Cluster."),(0,a.yg)("p",{parentName:"blockquote"},"For example. you will deploy ",(0,a.yg)("inlineCode",{parentName:"p"},"ShenYu Bootstrap")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"10.1.1.1")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"10.1.1.2")," and deploy nginx in ",(0,a.yg)("inlineCode",{parentName:"p"},"10.1.1.3"),".")),(0,a.yg)("h3",{id:"start-nginx"},"Start Nginx"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"download and install ",(0,a.yg)("inlineCode",{parentName:"p"},"nginx"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"modify ",(0,a.yg)("inlineCode",{parentName:"p"},"upstream")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"server")," of configuration in ",(0,a.yg)("inlineCode",{parentName:"p"},"nginx.conf"),"."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-nginx"},"upstream shenyu_gateway_cluster {\n  ip_hash;\n  server 10.1.1.1:9195 max_fails=3 fail_timeout=10s weight=50;\n  server 10.1.1.2:9195 max_fails=3 fail_timeout=10s weight=50;\n}\n\nserver {\n  listen 9195;\n  location / {\n        proxy_pass http://shenyu_gateway_cluster;\n        proxy_set_header HOST $host;\n        proxy_read_timeout 10s;\n        proxy_connect_timeout 10s;\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"start nginx.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"> windows: ./nginx.exe\n\n> linux: /usr/local/nginx/sbin/nginx \n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"verify nginx, looking at your ",(0,a.yg)("inlineCode",{parentName:"li"},"ShenYu Bootstrap")," log or ",(0,a.yg)("inlineCode",{parentName:"li"},"Nginx")," log, Where will the verification request go.")),(0,a.yg)("h2",{id:"apache-shenyu-nginx-module"},"Apache ShenYu Nginx Module"),(0,a.yg)("p",null,"This module provided SDK to watch available ShenYu instance list as upstream nodes by Service Register Center for OpenResty."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#greeting-etcd"},"ETCD")," (Supported)"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#greeting-nacos"},"Nacos")," (Supported)"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#greeting-zookeeper"},"Zookeeper")," (Supported)"),(0,a.yg)("li",{parentName:"ol"},"Consul (TODO)")),(0,a.yg)("p",null,"In the cluster mode, Apache ShenYu supports the deployment of multiple ShenYu instances, which may have new instances joining or leaving at any time.\nHence, Apache ShenYu introduces Service Discovery modules to help client to detect the available instances.\nCurrently, Apache ShenYu Bootstrap already supports Apache Zookeeper, Nacos, Etcd, and consul. Client or LoadBalancer can get the available ShenYu instances by those Service register center."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Prerequisite:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Luarocks"),(0,a.yg)("li",{parentName:"ol"},"OpenResty")),(0,a.yg)("h3",{id:"build-from-source"},"Build from source"),(0,a.yg)("p",null,"The first, clone the source from GitHub."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git clone https://github.com/apache/shenyu-nginx\n")),(0,a.yg)("p",null,"Then, build from source and install."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cd shenyu-nginx\nluarocks make rockspec/shenyu-nginx-main-0.rockspec\n")),(0,a.yg)("h3",{id:"greeting-etcd"},"Greeting ETCD"),(0,a.yg)("p",null,"Modify the Nginx configure, create and initialize the ShenYu Register to connect to the target register center.\nThe module will fetch the all of ShenYu instances which are registered to Etcd in the same cluster.\nIt works like Etcd client to watch(based on long polling) ShenYu instance lists."),(0,a.yg)("p",null,"Here is an example for Etcd."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'init_worker_by_lua_block {\n    local register = require("shenyu.register.etcd")\n    register.init({\n        balancer_type = "chash",\n        etcd_base_url = "http://127.0.0.1:2379",\n    })\n}\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.yg)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"round robin"),"."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"etcd_base_url")," specify the Etcd server.(Currently, authentication is not supported.)")),(0,a.yg)("p",null,"Add an ",(0,a.yg)("inlineCode",{parentName:"p"},"upstream block")," for ShenYu and enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center.\nAnd then pick one up for handling the request."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'upstream shenyu {\n    server 0.0.0.1; -- bad \n    \n    balancer_by_lua_block {\n        require("shenyu.register.etcd").pick_and_set_peer()\n    }\n}\n')),(0,a.yg)("p",null,"Finally, restart OpenResty."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"openresty -s reload\n")),(0,a.yg)("p",null,"Here is a completed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/etcd/nginx.conf"},"example")," working with ETCD."),(0,a.yg)("h3",{id:"greeting-nacos"},"Greeting Nacos"),(0,a.yg)("p",null,"Modify the Nginx configure, create and initialize the ShenYu Register to connect to target register center.  Here is an example for Nacos."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'init_worker_by_lua_block {\n    local register = require("shenyu.register.nacos")\n    register.init({\n        shenyu_storage = ngx.shared.shenyu_storage,\n        balancer_type = "chash",\n        nacos_base_url = "http://127.0.0.1:8848",\n        username = "nacos",\n        password = "naocs",\n    })\n}\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.yg)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"round robin"),"."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"nacos_base_url")," specify the Nacos server address."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"username")," specify the username to log in Nacos. (it is only required when Nacos auth enable)"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"password")," specify the password to log in Nacos.")),(0,a.yg)("p",null,"Modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"upstream")," to enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center.\nAnd then pick one up for handling the request."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'upstream shenyu {\n    server 0.0.0.1; -- bad \n    \n    balancer_by_lua_block {\n        require("shenyu.register.nacos").pick_and_set_peer()\n    }\n}\n')),(0,a.yg)("p",null,"Finally, restart OpenResty."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"openresty -s reload\n")),(0,a.yg)("p",null,"Here is a completed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/nacos/nginx.conf"},"example")," working with Nacos."),(0,a.yg)("h2",{id:"greeting-zookeeper"},"Greeting Zookeeper"),(0,a.yg)("p",null,"Modify the Nginx configure, create and initialize the ShenYu register to connect to target register center.\nListen for changes to the node via the zookeeper watch event. Here is an example of the zookeeper configuration."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'init_worker_by_lua_block {\n        local register = require("shenyu.register.zookeeper")\n        register.init({\n           servers = {"127.0.0.1:2181","127.0.0.1:2182"},\n           shenyu_storage = ngx.shared.shenyu_storage,\n           balancer_type = "roundrobin"\n        });\n    }\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"servers")," zookeeper cluster address."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"balancer_type")," specify the balancer. It has supported ",(0,a.yg)("inlineCode",{parentName:"li"},"chash")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"round robin"),".")),(0,a.yg)("p",null,"Modify the upstream to enable to update upstream servers dynamically. This case will synchronize the ShenYu instance list with register center. And then pick one up for handling the request."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},' upstream shenyu {\n        server 0.0.0.1;\n        balancer_by_lua_block {\n            require("shenyu.register.zookeeper").pick_and_set_peer()\n        }\n    }\n')),(0,a.yg)("p",null,"Finally, restart OpenResty."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"openresty -s reload\n")),(0,a.yg)("p",null,"Here is a completed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-nginx/blob/main/example/zookeeper/nginx.conf"},"example")," working with Zookeeper."))}u.isMDXComponent=!0}}]);