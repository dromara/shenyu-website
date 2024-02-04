"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61376],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>m});var o=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return r?o.createElement(m,p(p({ref:n},s),{},{components:r})):o.createElement(m,p({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:t,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50744:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(45072),t=(r(11504),r(95788));const a={sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},p=void 0,i={unversionedId:"deployment/deployment-docker",id:"version-2.5.0/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker\u90e8\u7f72",description:"docker\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/zh/docs/2.5.0/deployment/deployment-docker",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/deployment/deployment-docker.md",version:"2.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Docker-compose \u90e8\u7f72",permalink:"/zh/docs/2.5.0/deployment/deployment-docker-compose"},next:{title:"K8s\u90e8\u7f72",permalink:"/zh/docs/2.5.0/deployment/deployment-k8s"}},l=[{value:"\u542f\u52a8Apache ShenYu Admin",id:"\u542f\u52a8apache-shenyu-admin",children:[]},{value:"\u542f\u52a8Apache ShenYu Bootstrap",id:"\u542f\u52a8apache-shenyu-bootstrap",children:[]}],c={toc:l},s="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(s,(0,o.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"docker")," \u6765\u90e8\u7f72 ",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,t.yg)("a",{parentName:"p",href:"/zh/docs/2.5.0/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,t.yg)("h3",{id:"\u542f\u52a8apache-shenyu-admin"},"\u542f\u52a8Apache ShenYu Admin"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker pull apache/shenyu-admin:${current.version}\ndocker network create shenyu\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker run -d -p 9095:9095 \\\n--net shenyu apache/shenyu-admin:${current.version}\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6309\u7167 ",(0,t.yg)("a",{parentName:"li",href:"/zh/docs/2.5.0/deployment/deployment-before#mysql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93, \u5c06 ",(0,t.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.29/mysql-connector-java-8.0.29.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,t.yg)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib \\\n-e "SPRING_PROFILES_ACTIVE=mysql" \\\n-e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf8 \\\n&useSSL=false&serverTimezone=Asia/Shanghai&zeroDateTimeBehavior=convertToNull" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,t.yg)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,t.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u914d\u7f6e\u653e\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"${your_work_dir}/conf")," \uff0c \u8c03\u6574",(0,t.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u7684\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = mysql"),"\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6309\u7167 ",(0,t.yg)("a",{parentName:"li",href:"/zh/docs/2.5.0/deployment/deployment-before#postgresql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93, \u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" \\\n-e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,t.yg)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,t.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"application-pg.yml"),"\u914d\u7f6e\u653e\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"${your_work_dir}/conf"),"\uff0c \u8c03\u6574",(0,t.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u7684\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = pg"),"\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"Oracle")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6309\u7167 ",(0,t.yg)("a",{parentName:"li",href:"/zh/docs/2.5.0/deployment/deployment-before#oracle"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93, \u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=oracle" \\\n-e "spring.datasource.url=jdbc:oracle:thin:@localhost:1521/shenyu" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,t.yg)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,t.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"application-oracle.yml")," \u914d\u7f6e\u653e\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"${your_work_dir}/conf"),"\uff0c \u8c03\u6574",(0,t.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u7684\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = oracle"),"\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,t.yg)("h3",{id:"\u542f\u52a8apache-shenyu-bootstrap"},"\u542f\u52a8Apache ShenYu Bootstrap"),(0,t.yg)("p",null,"\u5bbf\u4e3b\u673a\u4e2d\uff0cbootstrap\u7684",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-bootstrap/src/main/resources"},"\u914d\u7f6e\u6587\u4ef6"),"\u6240\u5728\u76ee\u5f55\u8bb0\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"$BOOTSTRAP_CONF"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  -p 9195:9195 \\\n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  --name shenyu-bootstrap \\\n  --net shenyu \\\n  --env SHENYU_SYNC_WEBSOCKET_URLS=ws://shenyu-admin:9095/websocket \\\n  apache/shenyu-bootstrap:${current.version}\n")))}u.isMDXComponent=!0}}]);