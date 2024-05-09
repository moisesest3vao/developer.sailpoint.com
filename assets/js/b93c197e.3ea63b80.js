"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[1866],{21111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>w,frontMatter:()=>h,metadata:()=>k,toc:()=>f});var i=o(3905),n=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&u(e,o,t[o]);if(a)for(var o of a(t))p.call(t,o)&&u(e,o,t[o]);return e},c=(e,t)=>l(e,r(t)),m=(e,t)=>{var o={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&p.call(e,i)&&(o[i]=e[i]);return o};const h={id:"udk",title:"UI Development Kit",pagination_label:"UDK",sidebar_label:"UI Development Kit",sidebar_position:4,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit",tags:["UI"]},v=void 0,k={unversionedId:"tools/ui-development-kit/udk",id:"tools/ui-development-kit/udk",title:"UI Development Kit",description:"Develop custom user interfaces.",source:"@site/docs/tools/ui-development-kit/index.md",sourceDirName:"tools/ui-development-kit",slug:"/tools/ui-development-kit",permalink:"/docs/tools/ui-development-kit",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/index.md",tags:[{label:"UI",permalink:"/docs/tags/ui"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",sidebarPosition:4,frontMatter:{id:"udk",title:"UI Development Kit",pagination_label:"UDK",sidebar_label:"UI Development Kit",sidebar_position:4,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit",tags:["UI"]},sidebar:"openApiSidebar",previous:{title:"RDK",permalink:"/docs/tools/rule-development-kit"},next:{title:"UDK",permalink:"/docs/tools/ui-development-kit/getting-started"}},g={},f=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Clone the project",id:"clone-the-project",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Run the application for local development",id:"run-the-application-for-local-development",level:2},{value:"Get started",id:"get-started",level:2},{value:"Discuss",id:"discuss",level:2}],b={toc:f},y="wrapper";function w(e){var t=e,{components:o}=t,n=m(t,["components"]);return(0,i.kt)(y,c(d(d({},b),n),{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",d({},{id:"overview"}),"Overview"),(0,i.kt)("p",null,"The SailPoint UI Development Kit is a project you can use to quickly develop custom user interfaces that interact with Identity Security Cloud (ISC)."),(0,i.kt)("p",null,"The UI Development Kit provides you with a framework you can use to build your own applications or processes on the ISC platform."),(0,i.kt)("p",null,"Read this guide to learn how to use the SailPoint UI Development Kit."),(0,i.kt)("div",{class:"text--center"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bloIVw1-NzU?si=m7SRpu62WSciyiOr",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,i.kt)("h2",d({},{id:"requirements"}),"Requirements"),(0,i.kt)("p",null,"These are the requirements to use the UI Development Kit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Node"),": To learn how to download Node and set it up, go ",(0,i.kt)("a",d({parentName:"p"},{href:"https://nodejs.org/en/download"}),"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Your ISC tenant name"),". To learn how to find it, refer to ",(0,i.kt)("a",d({parentName:"p"},{href:"/docs/api/getting-started#find-your-tenant-name"}),"Getting Started"),". The SDK will use this tenant name to connect to your ISC instance."))),(0,i.kt)("h2",d({},{id:"clone-the-project"}),"Clone the project"),(0,i.kt)("p",null,"The first step to setting up the UI Development Kit is to clone the project from its GitHub repository. You can find the UI Development Kit and its examples in the Github repository ",(0,i.kt)("a",d({parentName:"p"},{href:"https://github.com/sailpoint-oss/ui-development-kit"}),"here"),"."),(0,i.kt)("p",null,"To clone the project, you can run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:sailpoint-oss/ui-development-kit.git\n")),(0,i.kt)("h2",d({},{id:"project-structure"}),"Project structure"),(0,i.kt)("p",null,"This project is built on ",(0,i.kt)("a",d({parentName:"p"},{href:"https://kit.svelte.dev/"}),"Svelte-Kit")," and ultimately builds an ",(0,i.kt)("a",d({parentName:"p"},{href:"https://www.electronjs.org/"}),"Electron")," application."),(0,i.kt)("p",null,"Setting up the project is simple. The environment and application building process are configured so you can start creating custom UIs immediately. However, it is still helpful to understand the project structure."),(0,i.kt)("p",null,"Most of your activity will involve the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder, such as adding new pages, routes, and sidebar items. You can learn more about these processes in ",(0,i.kt)("a",d({parentName:"p"},{href:"/docs/tools/ui-development-kit/getting-started"}),"Getting Started"),"."),(0,i.kt)("p",null,"This is the project structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),".\n\u251c\u2500\u2500 electron-builder.yaml\n\u251c\u2500\u2500 electron.vite.config.ts\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 postcss.config.cjs\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app.d.ts\n\u2502   \u251c\u2500\u2500 app.html\n\u2502   \u251c\u2500\u2500 app.postcss\n\u2502   \u251c\u2500\u2500 error.html\n\u2502   \u251c\u2500\u2500 hooks.server.ts\n\u2502   \u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 main\n\u2502   \u251c\u2500\u2500 preload\n\u2502   \u2514\u2500\u2500 routes\n\u251c\u2500\u2500 svelte.config.js\n\u251c\u2500\u2500 tailwind.config.ts\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 vite.config.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,i.kt)("h2",d({},{id:"run-the-application-for-local-development"}),"Run the application for local development"),(0,i.kt)("p",null,"To run and develop the project locally, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the root of the project run this command to install dependencies:")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm install\n")),(0,i.kt)("ol",d({},{start:2}),(0,i.kt)("li",{parentName:"ol"},"To start the application, run this command:")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),(0,i.kt)("h2",d({},{id:"get-started"}),"Get started"),(0,i.kt)("p",null,"To start learning how to use the UI Development Kit and explore its possibilities, refer to ",(0,i.kt)("a",d({parentName:"p"},{href:"/docs/tools/ui-development-kit/getting-started"}),"Getting Started"),"."),(0,i.kt)("h2",d({},{id:"discuss"}),"Discuss"),(0,i.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."),(0,i.kt)("p",null,"To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,i.kt)("a",d({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6"}),"SailPoint Developer Community Forum"),"."))}w.isMDXComponent=!0}}]);