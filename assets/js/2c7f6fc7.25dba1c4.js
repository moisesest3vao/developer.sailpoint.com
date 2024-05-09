"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[31042],{35558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>x,frontMatter:()=>v,metadata:()=>m,toc:()=>y});var i=r(3905),a=Object.defineProperty,n=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>n(e,s(t)),p=(e,t)=>{var r={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&c.call(e,i)&&(r[i]=e[i]);return r};const v={id:"source-created",title:"Source Created",pagination_label:"Source Created",sidebar_label:"Source Created",sidebar_class_name:"sourceCreated",keywords:["event","trigger","source","created","available"],description:"Fires after a source is created.",slug:"/extensibility/event-triggers/triggers/source-created",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},b=void 0,m={unversionedId:"extensibility/event-triggers/available/source-created",id:"extensibility/event-triggers/available/source-created",title:"Source Created",description:"Fires after a source is created.",source:"@site/docs/extensibility/event-triggers/available/source-created.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/source-created",permalink:"/docs/extensibility/event-triggers/triggers/source-created",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/source-created.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"source-created",title:"Source Created",pagination_label:"Source Created",sidebar_label:"Source Created",sidebar_class_name:"sourceCreated",keywords:["event","trigger","source","created","available"],description:"Fires after a source is created.",slug:"/extensibility/event-triggers/triggers/source-created",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Scheduled Search",permalink:"/docs/extensibility/event-triggers/triggers/scheduled-search"},next:{title:"Source Deleted",permalink:"/docs/extensibility/event-triggers/triggers/source-deleted"}},f={},y=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],k={toc:y},h="wrapper";function x(e){var t=e,{components:r}=t,a=p(t,["components"]);return(0,i.kt)(h,u(g(g({},k),a),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",g({},{id:"event-context"}),"Event Context"),(0,i.kt)("p",null,"Source Created events occur when a new source is successfully created via the API or the Admin UI. Some uses cases for this trigger include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide evidence to show auditors connector logic and sources are not manipulated outside of proper change control processes."),(0,i.kt)("li",{parentName:"ul"},"Auto-configure new sources with proper owners using external data sources.")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-json"}),'{\n  "id": "2c9180866166b5b0016167c32ef31a66",\n  "name": "Test source",\n  "type": "DIRECT_CONNECT",\n  "created": "2021-03-29T22:01:50.474Z",\n  "connector": "active-directory",\n  "actor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n')),(0,i.kt)("h2",g({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",g({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}x.isMDXComponent=!0}}]);