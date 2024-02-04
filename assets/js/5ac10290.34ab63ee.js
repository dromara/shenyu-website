"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70556],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>m});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,m=c["".concat(u,".").concat(d)]||c[d]||y[d]||a;return r?t.createElement(m,p(p({ref:n},s),{},{components:r})):t.createElement(m,p({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50452:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(45072),o=(r(11504),r(95788));const a={sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},p=void 0,i={unversionedId:"deployment/deployment-docker",id:"version-2.4.1/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker Deployment",description:"Docker Deployment",source:"@site/versioned_docs/version-2.4.1/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/docs/2.4.1/deployment/deployment-docker",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/deployment/deployment-docker.md",version:"2.4.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/2.4.1/deployment/deployment-package"},next:{title:"K8s Deployment",permalink:"/docs/2.4.1/deployment/deployment-k8s"}},u=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],l={toc:u},s="wrapper";function c(e){let{components:n,...r}=e;return(0,o.yg)(s,(0,t.c)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This article introduces the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"docker")," to deploy the ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,o.yg)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker pull apache/shenyu-admin:2.4.1\ndocker network create shenyu\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"h2")," to store data:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL")," to store data, copy ",(0,o.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," to ",(0,o.yg)("inlineCode",{parentName:"li"},"/$(your_work_dir)/ext-lib"),"\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n')),(0,o.yg)("p",null,"another way is to put the ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-mysql.yml")," configuration in  ${your_work_dir}/conf from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"Configure address")," , and then execute the following statement\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, execute the following statement\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n')),(0,o.yg)("p",null,"another way is to put the ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml")," configuration in ${your_work_dir}/conf, and then execute the following statement\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, execute the following statement\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n')),(0,o.yg)("p",null,"another way is to put the ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml")," configuration in ${your_work_dir}/conf, and then execute the following statement\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:2.4.1\n")),(0,o.yg)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create shenyu\ndocker pull apache/shenyu-bootstrap:2.4.1\ndocker run -d -p 9195:9195 --net shenyu apache/shenyu-bootstrap:2.4.1\n")))}c.isMDXComponent=!0}}]);