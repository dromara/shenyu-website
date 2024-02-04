"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90240],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>d});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,d=m["".concat(i,".").concat(u)]||m[u]||y[u]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38944:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(45072),a=(r(11504),r(95788));const o={sidebar_position:0,title:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6",keywords:["Prerequisites"],description:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"},l=void 0,p={unversionedId:"deployment/deployment-before",id:"version-2.5.0/deployment/deployment-before",isDocsHomePage:!1,title:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6",description:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/deployment/deployment-before.md",sourceDirName:"deployment",slug:"/deployment/deployment-before",permalink:"/zh/docs/2.5.0/deployment/deployment-before",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/deployment/deployment-before.md",version:"2.5.0",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6",keywords:["Prerequisites"],description:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"SPI\u6269\u5c55\u8bbe\u8ba1",permalink:"/zh/docs/2.5.0/design/spi-design"},next:{title:"\u672c\u5730\u90e8\u7f72",permalink:"/zh/docs/2.5.0/deployment/deployment-local"}},i=[{value:"\u6570\u636e\u5e93\u73af\u5883\u51c6\u5907",id:"\u6570\u636e\u5e93\u73af\u5883\u51c6\u5907",children:[{value:"Mysql",id:"mysql",children:[]},{value:"PostgreSql",id:"postgresql",children:[]},{value:"Oracle",id:"oracle",children:[]}]}],s={toc:i},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5728\u90e8\u7f72 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u524d, \u6240\u9700\u8981\u51c6\u5907\u7684\u4e00\u4e9b\u5148\u51b3\u6761\u4ef6\u3002"),(0,a.yg)("h2",{id:"\u6570\u636e\u5e93\u73af\u5883\u51c6\u5907"},"\u6570\u636e\u5e93\u73af\u5883\u51c6\u5907"),(0,a.yg)("p",null,"\u5728\u90e8\u7f72",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u9879\u76ee\u524d, \u9700\u521d\u59cb\u5316\u5176\u6240\u4f7f\u7528\u7684\u6570\u636e\u5e93\uff08\u6570\u636e\u5e93\u76ee\u524d\u652f\u6301: Mysql\u3001PostgreSql\u3001Oracle\uff09, \u5176\u4e2d\u6240\u7528\u5230\u7684\u811a\u672c\u6587\u4ef6\u90fd\u5b58\u653e\u5728 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/db"},"\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684db\u76ee\u5f55")," \u4e2d, \u4ee5\u4e0b\u4ecb\u7ecd\u4e86\u5404\u6570\u636e\u5e93\u7684\u521d\u59cb\u6b65\u9aa4."),(0,a.yg)("h3",{id:"mysql"},"Mysql"),(0,a.yg)("p",null,"\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/db/init/mysql"},"\u9879\u76eemysql\u521d\u59cb\u5316\u811a\u672c\u76ee\u5f55")," \u4e2d\u627e\u5230\u521d\u59cb\u5316\u811a\u672c",(0,a.yg)("inlineCode",{parentName:"p"},"schema.sql"),", \u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177\u8fde\u63a5\u60a8\u7684Mysql\u670d\u52a1\u5e76\u6267\u884c, \u7531\u6b64\u60a8\u4f1a\u5f97\u5230\u4e00\u4e2a\u540d\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu"),"\u7684\u6570\u636e\u5e93, \u5b83\u4e4b\u540e\u53ef\u4f5c\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u9879\u76ee\u7684\u6570\u636e\u5e93\u4f7f\u7528."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"sql\u811a\u672c: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db/init/mysql"},"https://github.com/apache/shenyu/tree/master/db/init/mysql"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9a71\u52a8:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"maven repository: ",(0,a.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/"},"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.30/")),(0,a.yg)("li",{parentName:"ul"},"homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://www.mysql.com/products/connector/"},"https://www.mysql.com/products/connector/"))))),(0,a.yg)("h3",{id:"postgresql"},"PostgreSql"),(0,a.yg)("p",null,"\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/db/init/pg"},"\u9879\u76eepg\u521d\u59cb\u5316\u811a\u672c\u76ee\u5f55")," \u4e2d\u627e\u5230\u521d\u59cb\u5316\u811a\u672c",(0,a.yg)("inlineCode",{parentName:"p"},"create-database.sql"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"create-table.sql"),", \u5e76\u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177\u8fde\u63a5\u60a8\u7684PostgreSql\u670d\u52a1\u4f9d\u6b21\u6267\u884c\uff0c\u7531\u6b64\u60a8\u4f1a\u5f97\u5230\u4e00\u4e2a\u540d\u4e3ashenyu\u7684\u6570\u636e\u5e93, \u5b83\u4e4b\u540e\u53ef\u4f5c\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u9879\u76ee\u7684\u6570\u636e\u5e93\u4f7f\u7528."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"sql\u811a\u672c: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/db/init/pg"},"https://github.com/apache/shenyu/tree/master/db/init/pg"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9a71\u52a8:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"maven repository: ",(0,a.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql/42.5.0"},"https://mvnrepository.com/artifact/org.postgresql/postgresql/42.5.0")),(0,a.yg)("li",{parentName:"ul"},"homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://jdbc.postgresql.org/download/"},"https://jdbc.postgresql.org/download/"))))),(0,a.yg)("h3",{id:"oracle"},"Oracle"),(0,a.yg)("p",null,"\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/db/init/oracle"},"\u9879\u76eeoracle\u521d\u59cb\u5316\u811a\u672c\u76ee\u5f55")," \u4e2d\u627e\u5230\u521d\u59cb\u5316\u811a\u672c",(0,a.yg)("inlineCode",{parentName:"p"},"schema.sql"),", \u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177\u8fde\u63a5\u60a8\u7684Oracle\u670d\u52a1\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93, \u5728\u6b64\u6570\u636e\u5e93\u4e0a\u6267\u884c",(0,a.yg)("inlineCode",{parentName:"p"},"schema.sql"),"\u811a\u672c, \u7531\u6b64\u60a8\u4fbf\u521d\u59cb\u5316\u4e86",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u7684\u6570\u636e\u5e93, \u4e4b\u540e\u53ef\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/application-oracle.yml"},"\u9879\u76ee\u914d\u7f6e\u6587\u4ef6")," \u4e2d\u8c03\u6574\u60a8\u7684oracle\u73af\u5883\u914d\u7f6e."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"sql\u811a\u672c: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/db/init/oracle"},"https://github.com/apache/shenyu/blob/master/db/init/oracle"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9a71\u52a8:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"maven repository: ",(0,a.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8/19.3.0.0"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8/19.3.0.0")),(0,a.yg)("li",{parentName:"ul"},"homepage:  ",(0,a.yg)("a",{parentName:"li",href:"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html"},"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html"))))))}m.isMDXComponent=!0}}]);