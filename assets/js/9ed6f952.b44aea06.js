"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42654],{36252:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>f,contentTitle:()=>y,default:()=>T,frontMatter:()=>d,metadata:()=>b,toc:()=>k});var i=o(3905),n=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(t,e,o)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))l.call(e,o)&&h(t,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&h(t,o,e[o]);return t},p=(t,e)=>a(t,s(e)),c=(t,e)=>{var o={};for(var i in t)l.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&r)for(var i of r(t))e.indexOf(i)<0&&u.call(t,i)&&(o[i]=t[i]);return o};const d={id:"community-toolbox",title:"Community Toolbox",pagination_label:"ADMIN",sidebar_label:"Community Toolbox",sidebar_position:5,sidebar_class_name:"rudk",keywords:["UI","admin","console"],description:"The Admin's toolbox.",slug:"/tools/community-toolbox",tags:["UI"]},y=void 0,b={unversionedId:"tools/community-toolbox/community-toolbox",id:"tools/community-toolbox/community-toolbox",title:"Community Toolbox",description:"The Admin's toolbox.",source:"@site/docs/tools/community-toolbox/index.md",sourceDirName:"tools/community-toolbox",slug:"/tools/community-toolbox",permalink:"/docs/tools/community-toolbox",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/community-toolbox/index.md",tags:[{label:"UI",permalink:"/docs/tags/ui"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",sidebarPosition:5,frontMatter:{id:"community-toolbox",title:"Community Toolbox",pagination_label:"ADMIN",sidebar_label:"Community Toolbox",sidebar_position:5,sidebar_class_name:"rudk",keywords:["UI","admin","console"],description:"The Admin's toolbox.",slug:"/tools/community-toolbox",tags:["UI"]},sidebar:"openApiSidebar",previous:{title:"UDK",permalink:"/docs/tools/ui-development-kit/error-handling"},next:{title:"Reporting",permalink:"/docs/reporting"}},f={},k=[{value:"Overview",id:"overview",level:2},{value:"Log in to the Community Toolbox",id:"log-in-to-the-community-toolbox",level:2},{value:"Community Toolbox home page features",id:"community-toolbox-home-page-features",level:2},{value:"Community Toolbox side tab features",id:"community-toolbox-side-tab-features",level:2},{value:"Sources",id:"sources",level:3},{value:"Identities",id:"identities",level:3},{value:"Reports",id:"reports",level:3},{value:"Courier",id:"courier",level:3},{value:"Discuss",id:"discuss",level:2}],w={toc:k},g="wrapper";function T(t){var e=t,{components:o}=e,n=c(e,["components"]);return(0,i.kt)(g,p(m(m({},w),n),{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",m({},{id:"overview"}),"Overview"),(0,i.kt)("p",null,"The Identity Security Cloud (ISC) Community Toolbox is a desktop application you can use to administer and troubleshoot ISC. The ISC Community Toolbox is built using Electron and Sveltekit, and it's developed and maintained by the SailPoint Developer Relations team. "),(0,i.kt)("p",null,"Use the Community Toolbox to perform common administrative tasks and troubleshoot issues in your ISC tenant. "),(0,i.kt)("p",null,"This document provides an overview of the Community Toolbox and its setup. "),(0,i.kt)("p",null,"You can find all the project's code in the Community Toolbox's GitHub repository ",(0,i.kt)("a",m({parentName:"p"},{href:"https://github.com/sailpoint-oss/isc-community-toolbox"}),"here"),". "),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Set up Community Toolbox from release"),(0,i.kt)("p",null,"The only requirement to use the Community Toolbox from a release is access to the ISC tenant you want to administer and troubleshoot."),(0,i.kt)("p",null,"The easiest way to set up the Community Toolbox is to download the latest release ",(0,i.kt)("a",m({parentName:"p"},{href:"https://github.com/sailpoint-oss/isc-community-toolbox/releases"}),"here"),". "),(0,i.kt)("p",null,"The Community Toolbox application will be named something like 'isc-community-toolbox-svelte-0.0.4-setup.exe' (0.0.4 refers to the release version)."),(0,i.kt)("p",null,"You can then launch the Community Toolbox application. ")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Build the Community Toolbox from source"),(0,i.kt)("p",null,"You may want to build the application from source, which allows you to get the latest changes directly from the repository, rather than wait for a new release. "),(0,i.kt)("p",null,"These are the requirements to build the Community Toolbox from source. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must have the ",(0,i.kt)("a",m({parentName:"li"},{href:"https://docs.npmjs.com/about-npm"}),"Node.js package manager (npm)")," installed. You can find instructions about how to install npm ",(0,i.kt)("a",m({parentName:"li"},{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"}),"here"),"."),(0,i.kt)("li",{parentName:"ul"},"You must clone the ",(0,i.kt)("a",m({parentName:"li"},{href:"https://github.com/sailpoint-oss/isc-community-toolbox"}),"Community Toolbox's GitHub repository"),". You can find instructions about how to clone a GitHub repository ",(0,i.kt)("a",m({parentName:"li"},{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"}),"here"),".")),(0,i.kt)("p",null,"Once you have ensured that you have npm installed and you have cloned the Community Toolbox's GitHub repository, you can build the Community Toolbox from source. "),(0,i.kt)("p",null,"Follow these steps to build the Community Toolbox from source: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install npm. ")),(0,i.kt)("p",null,"To install npm, run this command:  "),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm install\n")),(0,i.kt)("ol",m({},{start:2}),(0,i.kt)("li",{parentName:"ol"},"Build the application. ")),(0,i.kt)("p",null,"There is a different command for each OS. You can find these commands in the 'package.json' file. Run these commands to build the application for your OS: "),(0,i.kt)("p",null,"To build the application for Windows, run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run build:win\n")),(0,i.kt)("p",null,"To build the application for Mac, run this command: "),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run build:mac\n")),(0,i.kt)("p",null,"To build the application for Linux, run this command: "),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run build:linux\n")),(0,i.kt)("p",null,"Any one of these commands creates a 'dist' folder that contains the application. "),(0,i.kt)("ol",m({},{start:3}),(0,i.kt)("li",{parentName:"ol"},"Run the application. ")),(0,i.kt)("p",null,"These are the two different ways to run the application: "),(0,i.kt)("p",null,"The first way to run the application is to open the 'dist' folder in your file explorer and then open the Community Toolbox executable file. The file will be called something like 'isc-community-toolbox-svelte-0.0.4-setup.exe' (0.0.0.4 refers to the release version)."),(0,i.kt)("p",null,"The second way to run the application is to run this command: "),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run dev\n"))),(0,i.kt)("h2",m({},{id:"log-in-to-the-community-toolbox"}),"Log in to the Community Toolbox"),(0,i.kt)("p",null,"When you launch the Community Toolbox, it prompts you to provide your tenant information. "),(0,i.kt)("p",null,"You must provide this tenant information to be able to log in: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tenant"),": This is your organization's tenant name. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Domain"),": This is usually 'identitynow'. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base URL"),": This is the API URL - it is 'https://{tenant}.{domain}.com', like 'https:acme.identitynow.com', for example."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tenant URL"),": This is the tenant URL - it is often the same as the API URL. ")),(0,i.kt)("p",null,"Once you have provided your tenant information, the Community Toolbox prompts you to log in to your tenant the same way you would from the browser. You must provide a password and possibly some additional form of authentication. "),(0,i.kt)("h2",m({},{id:"community-toolbox-home-page-features"}),"Community Toolbox home page features"),(0,i.kt)("p",null,"Once you log in, the Community Toolbox's home page displays. The home page has four panels with different links. You can access these different Community Toolbox functionalities from the home page panels: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status"),': The Status panel shows you the platform\'s status, such as "All Systems Operational". Click the status to open ',(0,i.kt)("a",m({parentName:"li"},{href:"https://status.sailpoint.com"}),"https://status.sailpoint.com")," in an Community Toolbox window. You will see the latest status updates for the platform there. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tenant Links"),": Use these links for direct access to some areas of your tenant common for administrative functions. Click these links to open your ISC tenant UI within an Community Toolbox window. From the Community Toolbox window, you can also access the entirety of your tenant. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resources"),": Use these links to access common SailPoint resources, such as the ",(0,i.kt)("a",m({parentName:"li"},{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6"}),"SailPoint Developer Community")," and the different forms of SailPoint documentation. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support"),": Use these links to access ",(0,i.kt)("a",m({parentName:"li"},{href:"https://support.sailpoint.com/csm"}),"SailPoint Customer Support")," and submit support tickets. ")),(0,i.kt)("h2",m({},{id:"community-toolbox-side-tab-features"}),"Community Toolbox side tab features"),(0,i.kt)("p",null,"The Community Toolbox's side bar has five different tabs. The first tab, 'Home', displays the Community Toolbox's home page. The other four provide unique admin access within the Community Toolbox: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"#sources"}),"Sources"),": Use this tab to see your tenant's list of sources, with the raw JSON object for each source exposed. This tab makes it easier for administrators to find relevant information about sources, such as IDs, when they or others (Support, Services) troubleshoot your environment. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"#identities"}),"Identities"),": Use this tab to see your tenant's list of identities, with the raw JSON object for each identity exposed. This tab makes it easier for administrators to find relevant information about identities, such as IDs, when they or others (Support, Services) troubleshoot your environment. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"#reports"}),"Reports"),": Use this tab to find common queries, with the raw JSON object for each report exposed, that administrators may need to run to understand the health and current situation of your tenant. This tab makes it easier for administrators to run common queries to help them or others (Support, Services) troubleshoot your environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"#courier"}),"Courier"),": Use the Courier to send API requests from the Community Toolbox, without needing to manage authentication and authorization in a separate tool. You can copy the JSON objects from the other tabs into the courier to make quick and easy changes. The courier makes it easier for administrators to use the APIs to get additional information and make changes from within the Community Toolbox when they troubleshoot your environment. ")),(0,i.kt)("h3",m({},{id:"sources"}),"Sources"),(0,i.kt)("p",null,"When you open the Sources tab, the Community Toolbox displays a list of your tenant's sources, along with their IDs, which don't display in the ISC UI. This is helpful because you need a source's ID to manage it with the API. "),(0,i.kt)("p",null,"Each source provides the options to either 'Open' or 'View it. If you 'Open' a source, the Community Toolbox displays a page with some additional useful information about the source, such as its Virtual Appliance (VA) Cluster and its most recent account and entitlement aggregations. At the end of the source's page, the Community Toolbox displays both the raw JSON for the source's connector attributes, which can be extensive and detailed, and the raw JSON for the full source. You can copy these JSONs and paste them in the Courier or an external tool to make changes with the API. "),(0,i.kt)("p",null,"If you 'View' a source, the Community Toolbox displays the raw JSON for the full source in a window within the list, without the additional information shown when you 'Open' the source. You can copy this JSON and paste it in the Courier or an external tool to make changes with the API. "),(0,i.kt)("h3",m({},{id:"identities"}),"Identities"),(0,i.kt)("p",null,"When you open the Identities tab, the Community Toolbox displays a list of your tenant's identities, along with their IDs, which don't display in the ISC UI. This is helpful because you need an identity's ID to manage it with the API. "),(0,i.kt)("p",null,"Each identity provides the options to either 'Open' or 'View' it. If you 'Open' an identity, the Community Toolbox displays a page with some additional information about the identity, such as its current lifecycle state. The Community Toolbox also displays the identity's raw JSON, which you can copy and paste in the Courier or an external tool to make changes with the API. At the end of the identity's page, the Community Toolbox displays the identity's recent events, such as a changed identity state or an updated identity attribute value, along with their raw JSONs. These events can help administrators or others (Support, Services) troubleshoot the identity's issues or potential issues. "),(0,i.kt)("p",null,"If you 'View' an identity, the Community Toolbox displays the raw JSON for the identity in a window within the list, without the additional information shown when you 'Open' the identity. You can copy this JSON and paste it in the Courier or an external tool to make changes with the API. "),(0,i.kt)("h3",m({},{id:"reports"}),"Reports"),(0,i.kt)("p",null,"When you open the Reports tab, the Community Toolbox displays a list of common queries administrators may need to run to understand your tenant's health and current situation. Each report contains a different summary, depending on the report. "),(0,i.kt)("p",null,"The Community Toolbox offers these five reports: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source Account Create Error"),": This report displays a list of all source accounts with associated account create errors, along with the raw JSONs for the errors. Click an error in the list to view its raw JSON. You can copy these JSONs and provide them to Support or Services so they can better help you troubleshoot. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inactive Identities with Access"),": This report displays a list of all identities that are inactive but still have access to sources, along with the sources they can access. You can either 'Open' an identity or 'View' it. If you 'Open' an identity, the Community Toolbox displays a page with some additional information about the identity, as well as the identity's raw JSON, and its recent identity events (and their raw JSONs). If you 'View' an identity, the Community Toolbox displays the raw JSON for the identity in a window within the list. You can copy either of these JSONs into the Courier or an external tool to make changes to the identity's access. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Missing Cloud Life Cycle State"),": This report displays a list of all identities that are missing the cloud life cycle state attribute. You can either 'Open' an identity or 'View' it. If you 'Open' an identity, the Community Toolbox displays a page with some additional information about the identity, such as its current missing lifecycle state, as well as the identity's raw JSON, and its recent identity events (and their raw JSONs). If you 'View' an identity, the Community Toolbox displays the raw JSON for the identity in a window within the list. You can copy either of these JSONs into the Courier or an external tool to make changes to the identity's missing lifecycle state. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source Owner Configured"),": This report displays a list of all sources and their configured owners. Each source provides the options to either 'Open' or 'View it. If you 'Open' a source, the Community Toolbox displays a page with some additional useful information about the source, as well as a raw JSON for its connector attributes and a raw JSON for the full source itself. If you 'View' a source, the Community Toolbox displays the raw JSON for the full source in a window within the list. You can copy these JSONs and paste them in the Courier or an external tool to make changes with the API. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source Aggregations"),": This report displays all sources and their most recent account and entitlement aggregation events, along with their raw JSONs. You can view the JSONs of account and entitlement aggregations for both 'started' and 'passed' aggregation events. You can copy these JSONs and provide them to Support or Services so they can better help you troubleshoot. ")),(0,i.kt)("h3",m({},{id:"courier"}),"Courier"),(0,i.kt)("p",null,"Use the Courier to send API requests from the Community Toolbox without needing to manage authentication and authorization in a separate tool. You can copy the JSON objects from the other tabs into the courier to make quick and easy changes. The courier makes it easier for administrators to use the APIs to get additional information and make changes from within the Community Toolbox when they or others (Support, Services) troubleshoot your environment. "),(0,i.kt)("p",null,"When you open the Courier tab, the Community Toolbox displays its Courier tool. The Courier tool comprises four parts: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Details"),": Use this dropdown menu to first select the type of API you want to call. You can either call V3 ISC APIs, the Beta ISC APIs, or Custom APIs. Once you have selected an API type, you can select the endpoint you want to call from a list, such as beta/access-profiles. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Call"),": Use this dropdown menu to select the type of request you want to send to the endpoint, such as a GET, POST, PUT, PATCH, or DELETE. Then use the 'Call' button to send your request. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Request Body"),": Use this section to specify your API request's body. You can copy a raw JSON into this area, or you can manually create an object or an array. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Response Body"),": This section displays the API response to your request. You can copy this raw JSON and use it for additional troubleshooting. ")),(0,i.kt)("h2",m({},{id:"discuss"}),"Discuss"),(0,i.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,i.kt)("p",null,"To learn more about the ISC Community Toolbox and discuss it with SailPoint Developer Community members, go to the ",(0,i.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6"}),"SailPoint Developer Community Forum"),"."))}T.isMDXComponent=!0}}]);