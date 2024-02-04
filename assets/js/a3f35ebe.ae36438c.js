"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[91188],{95788:(e,t,n)=>{n.d(t,{Iu:()=>h,yg:()=>y});var a=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=u(e,["components","mdxType","originalType","parentName"]),l=s(n),p=o,y=l["".concat(c,".").concat(p)]||l[p]||m[p]||r;return n?a.createElement(y,i(i({ref:t},h),{},{components:n})):a.createElement(y,i({ref:t},h))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43880:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(45072),o=(n(11504),n(95788));const r={title:"\u3010From company gateway framework selection to Apache ShenYu Committer\u3011",author:"Shuo Li",description:"From company gateway framework selection to Apache ShenYu Committer",categories:"Apache ShenYu Committers",tags:["Apache ShenYu"],date:new Date("2022-08-08T00:00:00.000Z")},i=void 0,u={permalink:"/news/Apache-ShenYu-Committer-2022-08-08",source:"@site/news/Apache-ShenYu-Committer-2022-08-08.md",title:"\u3010From company gateway framework selection to Apache ShenYu Committer\u3011",description:"From company gateway framework selection to Apache ShenYu Committer",date:"2022-08-08T00:00:00.000Z",formattedDate:"August 8, 2022",tags:[{label:"Apache ShenYu",permalink:"/news/tags/apache-shen-yu"}],readingTime:2.7,truncated:!1,prevItem:{title:"[Google Summer of Code & Apache ShenYu task is coming | Invite you to explore the high performance gateway]",permalink:"/news/Apache-ShenYu-GSOC2023-2023-04-18"},nextItem:{title:"[From Apache ShenYu User to Apache ShenYu Committer]",permalink:"/news/Apache-ShenYu-Committer-2022-08-04"}},c=[{value:"Introduction of new Committer",id:"introduction-of-new-committer",children:[]},{value:"Meet the Apache Shenyu community for the first time",id:"meet-the-apache-shenyu-community-for-the-first-time",children:[]},{value:"Start submitting PR",id:"start-submitting-pr",children:[]},{value:"Ongoing open source contributions and gains",id:"ongoing-open-source-contributions-and-gains",children:[]},{value:"Thanks to the community",id:"thanks-to-the-community",children:[]},{value:"A little advice for newcomers",id:"a-little-advice-for-newcomers",children:[]},{value:"How to join Apache ShenYu",id:"how-to-join-apache-shenyu",children:[]}],s={toc:c},h="wrapper";function l(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,a.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"introduction-of-new-committer"},"Introduction of new Committer"),(0,o.yg)("p",null,"Hello everyone, my name is ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/lishuo5263"},"Shuo Li")," , java architect, currently engaged in  a big-sized Internet company,  It is my honor to be invited by the Apache ShenYu community as the Committer. Let me share with you my first meet, acquaintance, understanding, growth and suggestions with the Apache ShenYu community."),(0,o.yg)("h3",{id:"meet-the-apache-shenyu-community-for-the-first-time"},"Meet the Apache Shenyu community for the first time"),(0,o.yg)("p",null,"The story starts from 2020. In the early stage, I used SpringCloud Gateway + Nacos Config Event to realize the dynamic routing of gateway by myself. Because there was no dashboard of Gateway at that time, it was very painful. My team made a dashboard based on Micro Enterprise, which has a lot of functionality and limitations. From then on, I started to pursue a good gateway. One day, I found ShenYu, and saw that ShenYu's overall architecture was in sharper contrast to SpringCloud Gateway. ShenYu outperforms Gateway in terms of overall architecture design, function design, plug-in design, etc. ShenYu can be said to be the next generation gateway product. After that, I started to have a certain understanding of Apache ShenYu from building environment to running example project, and then to read plug-in chain and data synchronization, SPI mechanism and other source code."),(0,o.yg)("h3",{id:"start-submitting-pr"},"Start submitting PR"),(0,o.yg)("p",null,"It was not until January 2022 that I started to submit my first PR, which was to fix a problem that caused null Pointers when the Admin module started the default load instance. The function was small, but its significance was remarkable. It meant that I had a good start on the open source road from learning to contributing."),(0,o.yg)("h3",{id:"ongoing-open-source-contributions-and-gains"},"Ongoing open source contributions and gains"),(0,o.yg)("p",null,"So far, I have participated in the open source of Apache ShenYu community for more than half a year, contributing a lot and growing and harvesting a lot. The details are as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Witnessed Shenyu graduate from Apache Incubator and become a top Apache project."),(0,o.yg)("li",{parentName:"ul"},"Fixed ShenYu admin starting null pointer problem."),(0,o.yg)("li",{parentName:"ul"},"Added ShenYu Rewrite plugin support for PathVariable functionality."),(0,o.yg)("li",{parentName:"ul"},"Responsible for the functional support of the entire Shenyu-Client-Golang project."),(0,o.yg)("li",{parentName:"ul"},"Participated in the repair of some discovered problems, integration test writing, code of other CR contributors, corresponding functional documentation writing, etc.")),(0,o.yg)("h3",{id:"thanks-to-the-community"},"Thanks to the community"),(0,o.yg)("p",null,"Thanks to my friends who helped me or inspired me for free (in no particular order): yu199195\uff0cyonglun\uff0cluoxiaolong\uff0clianjunwei\uff0cgaohan."),(0,o.yg)("h3",{id:"a-little-advice-for-newcomers"},"A little advice for newcomers"),(0,o.yg)("p",null,"1.Be sure to check out the website or Github first\n2.Follow the official website or project documents to try to run the relevant functional modules of Example\n3.Feel free to submit an issue to the community if you have any ideas"),(0,o.yg)("p",null,"Attend ShenYu biweekly meetings to keep up with the community and meet with developers one-on-one to ask questions"),(0,o.yg)("h3",{id:"how-to-join-apache-shenyu"},"How to join Apache ShenYu"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"How to become a Contributor"),(0,o.yg)("p",{parentName:"li"},"The Apache ShenYu community has purposely written a very comprehensive ",(0,o.yg)("a",{parentName:"p",href:"https://ShenYu.apache.org/community/contributor-guide/"},"Contributor Guide"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Github ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/ShenYu/issues"},"Issues"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Subscribe emails"),(0,o.yg)("p",{parentName:"li"},"Email ",(0,o.yg)("a",{parentName:"p",href:"mailto:dev-subscribe@ShenYu.apache.org"},"dev-subscribe@ShenYu.apache.org"),";"),(0,o.yg)("p",{parentName:"li"},"After the sending is successful, you will receive a reply from ",(0,o.yg)("a",{parentName:"p",href:"mailto:dev-subscribe@ShenYu.apache.org"},"dev-subscribe@ShenYu.apache.org"),", please reply to this email according to the prompt of the email to confirm the subscription;"),(0,o.yg)("p",{parentName:"li"},"After replying to confirm, you will receive a welcome email indicating that you have successfully subscribed to emails."))))}l.isMDXComponent=!0}}]);