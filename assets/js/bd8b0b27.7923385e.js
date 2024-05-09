"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[35039],{68849:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>A,frontMatter:()=>k,metadata:()=>y,toc:()=>f});var c=e(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,n,e)=>n in t?o(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||(n={}))l.call(n,e)&&s(t,e,n[e]);if(u)for(var e of u(n))r.call(n,e)&&s(t,e,n[e]);return t},d=(t,n)=>a(t,i(n)),p=(t,n)=>{var e={};for(var c in t)l.call(t,c)&&n.indexOf(c)<0&&(e[c]=t[c]);if(null!=t&&u)for(var c of u(t))n.indexOf(c)<0&&r.call(t,c)&&(e[c]=t[c]);return e};const k={id:"account-unlock-customizer",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","Account Unlock"],description:"Intercept the account unlock command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-unlock",tags:["Connectivity","Connector Command"]},v=void 0,y={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock-customizer",title:"Account Unlock",description:"Intercept the account unlock command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-unlock",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-unlock",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"account-unlock-customizer",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","Account Unlock"],description:"Intercept the account unlock command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-unlock",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-read"},next:{title:"Account Update",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-update"}},b={},f=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountUnlockInput",id:"example-stdaccountunlockinput",level:3},{value:"Example StdAccountUnlockOutput",id:"example-stdaccountunlockoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-unlock command",id:"before-account-unlock-command",level:3},{value:"After account-unlock command",id:"after-account-unlock-command",level:3}],g={toc:f},h="wrapper";function A(t){var n=t,{components:e}=n,o=p(n,["components"]);return(0,c.kt)(h,d(m(m({},g),o),{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h2",m({},{id:"overview"}),"Overview"),(0,c.kt)("p",null,"Use these commands to intercept the ",(0,c.kt)("a",m({parentName:"p"},{href:"../../commands/account-unlock"}),"account-unlock")," command."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",m({parentName:"tr"},{align:"left"}),"Input/Output"),(0,c.kt)("th",m({parentName:"tr"},{align:"center"}),"Data Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",m({parentName:"tr"},{align:"left"}),"Input"),(0,c.kt)("td",m({parentName:"tr"},{align:"center"}),"StdAccountUnlockInput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",m({parentName:"tr"},{align:"left"}),"Output"),(0,c.kt)("td",m({parentName:"tr"},{align:"center"}),"StdAccountUnlockOutput")))),(0,c.kt)("h3",m({},{id:"example-stdaccountunlockinput"}),"Example StdAccountUnlockInput"),(0,c.kt)("pre",null,(0,c.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,c.kt)("h3",m({},{id:"example-stdaccountunlockoutput"}),"Example StdAccountUnlockOutput"),(0,c.kt)("pre",null,(0,c.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,c.kt)("h2",m({},{id:"implementation"}),"Implementation"),(0,c.kt)("h3",m({},{id:"before-account-unlock-command"}),"Before account-unlock command"),(0,c.kt)("p",null,"Use this logic to implement the command:"),(0,c.kt)("pre",null,(0,c.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"    .beforeStdAccountUnlock(async (context: Context, input: StdAccountUnlockInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,c.kt)("h3",m({},{id:"after-account-unlock-command"}),"After account-unlock command"),(0,c.kt)("p",null,"Use this logic to implement the command:"),(0,c.kt)("pre",null,(0,c.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"    .afterStdAccountUnlock(async (context: Context, output: StdAccountUnlockOutput) => {\n        logger.info(`Running after account unlock for account ${output.identity}`)\n        return output\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}A.isMDXComponent=!0}}]);