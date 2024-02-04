"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[86716],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>g});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),y=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=y(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=y(t),c=r,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var y=2;y<i;y++)o[y]=t[y];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},45460:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(45072),r=(t(11504),t(95788));const i={sidebar_position:7,title:"Cluster Deployment",keywords:["Gateway Cluster Enviroment","Cluster Enviroment"],description:"Cluster Delopyment"},o=void 0,p={unversionedId:"deployment/deployment-cluster",id:"version-2.4.2/deployment/deployment-cluster",isDocsHomePage:!1,title:"Cluster Deployment",description:"Cluster Delopyment",source:"@site/versioned_docs/version-2.4.2/deployment/deployment-cluster.md",sourceDirName:"deployment",slug:"/deployment/deployment-cluster",permalink:"/docs/2.4.2/deployment/deployment-cluster",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/deployment/deployment-cluster.md",version:"2.4.2",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Cluster Deployment",keywords:["Gateway Cluster Enviroment","Cluster Enviroment"],description:"Cluster Delopyment"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Custom Deployment",permalink:"/docs/2.4.2/deployment/deployment-custom"},next:{title:"Quick start with Dubbo",permalink:"/docs/2.4.2/quick-start/quick-start-dubbo"}},l=[{value:"Enviromental Preparation",id:"enviromental-preparation",children:[]},{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Boostrap",id:"start-apache-shenyu-boostrap",children:[]},{value:"Start Nginx",id:"start-nginx",children:[]}],y={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.c)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This aritcle introduces how to delopy the ",(0,r.yg)("inlineCode",{parentName:"p"},"Shenyu")," gateway in cluster enviroment."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In this part, you can see  ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/deployment/deployment-package"},"ShenYu Binary Packages Deployment")," before deploying.")),(0,r.yg)("h3",{id:"enviromental-preparation"},"Enviromental Preparation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Two or more Gateway Boostrap servers, these servers must install JDK1.8+."),(0,r.yg)("li",{parentName:"ul"},"A server for Gateway Admin, this server must install mysql/pgsql/h2 and JDK1.8+."),(0,r.yg)("li",{parentName:"ul"},"A server for nginx.")),(0,r.yg)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download and unzip ",(0,r.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz"},"apache-shenyu-incubating-2.4.2-admin-bin.tar.gz")," in your Gateway Admin server.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"config your database, go to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/conf")," directory, and  modify ",(0,r.yg)("inlineCode",{parentName:"p"},"spring.profiles.active")," of the configuration in ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"pg")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"h2"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"config your way of synchronization, go to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/conf")," directory, and modify ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu.sync")," of configuration in ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"websocket"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"http"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"etcd"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"consul")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"nacos"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"start Apache ShenYu Admin in ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,r.yg)("h3",{id:"start-apache-shenyu-boostrap"},"Start Apache ShenYu Boostrap"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download and unzip ",(0,r.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz"},"apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz")," in your Gateway Boostrap server.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"config your synchronization, go to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/conf")," directory, and modify ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu.sync")," of configuration in ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"websocket"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"http"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"etcd"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"consul")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"nacos"),", this configuaration must remain the same of ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyYu Admin"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"repeat above-mentioned operations in each ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenYu Bootstrap")," server.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"start Apache ShenYu Bootstrap in ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"After completing these operations, you will deploy ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenYu Boostrap")," Cluster."),(0,r.yg)("p",{parentName:"blockquote"},"For example. you will deploy ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenYu Bootstrap")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"10.1.1.1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"10.1.1.2")," and deploy nginx in ",(0,r.yg)("inlineCode",{parentName:"p"},"10.1.1.3"),".")),(0,r.yg)("h3",{id:"start-nginx"},"Start Nginx"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download and install ",(0,r.yg)("inlineCode",{parentName:"p"},"nginx"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"modify ",(0,r.yg)("inlineCode",{parentName:"p"},"upstream")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"server")," of configuration in ",(0,r.yg)("inlineCode",{parentName:"p"},"nginx.conf"),"."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-nginx"},"upstream shenyu_gateway_cluster {\n  ip_hash;\n  server 10.1.1.1:9195 max_fails=3 fail_timeout=10s weight=50;\n  server 10.1.1.2:9195 max_fails=3 fail_timeout=10s weight=50;\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-nginx"},"server {\n  location / {\n        proxy_pass http://shenyu_gateway_cluster;\n        proxy_set_header HOST $host;\n        proxy_read_timeout 10s;\n        proxy_connect_timeout 10s;\n  }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"start nginx.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"> windows: ./nginx.exe\n\n> linux: /usr/local/nginx/sbin/nginx \n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"verify nginx, looking at your ",(0,r.yg)("inlineCode",{parentName:"li"},"ShenYu Bootstrap")," log or ",(0,r.yg)("inlineCode",{parentName:"li"},"Nginx")," log, Where will the verification request go.")))}u.isMDXComponent=!0}}]);