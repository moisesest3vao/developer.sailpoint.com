"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[66441],{95599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>g,metadata:()=>v,toc:()=>f});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>r(e,o(t)),m=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const g={id:"native-change-account-updated",title:"Native Change Account Updated",pagination_label:"Native Change Account Updated",sidebar_label:"Native Change Account Updated",sidebar_class_name:"nativeChangeAccountUpdated",keywords:["account","updated","available"],description:"Fires after an account is updated outside of Identity Security Platform",slug:"/extensibility/event-triggers/triggers/native-change-account-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},h=void 0,v={unversionedId:"extensibility/event-triggers/available/native-change-account-updated",id:"extensibility/event-triggers/available/native-change-account-updated",title:"Native Change Account Updated",description:"Fires after an account is updated outside of Identity Security Platform",source:"@site/docs/extensibility/event-triggers/available/native-change-account-updated.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/native-change-account-updated",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-updated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/native-change-account-updated.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"native-change-account-updated",title:"Native Change Account Updated",pagination_label:"Native Change Account Updated",sidebar_label:"Native Change Account Updated",sidebar_class_name:"nativeChangeAccountUpdated",keywords:["account","updated","available"],description:"Fires after an account is updated outside of Identity Security Platform",slug:"/extensibility/event-triggers/triggers/native-change-account-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Native Change Account Deleted",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-deleted"},next:{title:"Outlier Detected",permalink:"/docs/extensibility/event-triggers/triggers/outlier-detected"}},b={},f=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],N={toc:f},y="wrapper";function k(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,a.kt)(y,p(u(u({},N),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",u({},{id:"event-context"}),"Event Context"),(0,a.kt)("admonition",u({},{title:"Important Setup Steps",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"You must have at least one source configured for Native Change Detection (NCD) before you will receive events from this trigger. There are two ways you can configure a source for NCD:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Invoke the ",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.sailpoint.com/docs/api/beta/put-native-change-detection-config"}),"update native change detection configuration")," for each source you want to receive events for NCD."),(0,a.kt)("li",{parentName:"ol"},"Configure the NCD options on the source in the source configuration UI."))),(0,a.kt)("p",null,"The Native Change Account Updated trigger fires after Account Aggregations detects that an account is updated external to Identity Security Platform on sources where:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Native Change Detection is enabled"),(0,a.kt)("li",{parentName:"ol"},"Account Update operations are monitored"),(0,a.kt)("li",{parentName:"ol"},"at least one attribute that is selected for monitoring changed.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("mermaid",u({},{value:"flowchart TD\n    A[Account updated on source] --\x3e B\n    B[Account aggregation\\ndetected account updates] --\x3e C\n    C[Trigger Native Change Account Updated]"}))),(0,a.kt)("p",null,"This event trigger can be used to immediately notify interested parties and remediate accounts that are updated directly on the source. Some examples of how this trigger can be used are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notify the identity's manager and the source owner of the new account"),(0,a.kt)("li",{parentName:"ul"},"Create a micro-certification for the identity to review their new account attributes and entitlements"),(0,a.kt)("li",{parentName:"ul"},"Automatically disable or lock accounts updated directly on a source")),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "identity": {\n    "manager": {\n      "name": "Martena Heath",\n      "id": "2c91808378eb9fa30178fb8caf90097f",\n      "type": "IDENTITY",\n      "email": "martena.heath@sample_email.com"\n    },\n    "name": "Ann English",\n    "alias": "Ann.English",\n    "id": "2c91808978eb9fab0178fb8ca6d308fb",\n    "type": "IDENTITY",\n    "email": "ann.english@sample_email.com"\n  },\n  "singleValueAttributeChanges": [\n    {\n      "newValue": "Call Center Representative",\n      "name": "title",\n      "oldValue": "Call Center Manager"\n    }\n  ],\n  "entitlementChanges": [\n    {\n      "removed": [\n        {\n          "owner": null,\n          "name": "AccountsReceivable",\n          "id": "d0470502d73d4c2e8c7543c712f518ca",\n          "value": "CN=AccountsReceivable,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        }\n      ],\n      "added": [\n        {\n          "owner": null,\n          "name": "Accounts Payable",\n          "id": "2c91808978eb9fab0178fb9482620b71",\n          "value": "CN=AccountsPayable,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        }\n      ],\n      "attributeName": "memberOf"\n    }\n  ],\n  "eventType": "ACCOUNT_UPDATED",\n  "source": {\n    "owner": {\n      "name": "Aaron Andrew",\n      "id": "2c9180867a7c46d0017a7ca099d50531",\n      "type": "IDENTITY",\n      "email": "aaron.andrew@sample_email.com"\n    },\n    "name": "Active Directory",\n    "alias": "Active Directory [source]",\n    "id": "2c91808a78efc63e0178fb8624b248c5",\n    "type": "SOURCE",\n    "governanceGroup": {\n      "id": "fd0d1393-35fb-47d8-9809-0e385b73f25e",\n      "name": "Active Directory Owners",\n      "type": "GOVERNANCE_GROUP"\n    }\n  },\n  "accountChangeTypes": [\n    "ATTRIBUTES_CHANGED",\n    "ENTITLEMENTS_ADDED",\n    "ENTITLEMENTS_REMOVED"\n  ],\n  "multiValueAttributeChanges": [\n    {\n      "removedValues": [],\n      "addedValues": ["User Account is Disabled"],\n      "name": "accountFlags"\n    }\n  ],\n  "account": {\n    "name": "Ann.English",\n    "id": "2c91808378eb9fa30178fb9481a30afa",\n    "type": "ACCOUNT",\n    "uuid": "{08ee6c6d-7d02-4978-9417-d92ba6a5ed50}",\n    "correlated": true,\n    "nativeIdentity": "CN=Ann English,OU=Call Center,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity")," The identity correlated to this account. If ",(0,a.kt)("inlineCode",{parentName:"li"},"account.correlated")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", then this will be a system generated identity, not a real identity. For uncorrelated accounts, this system generated identity can be used to revoke entitlements on the account, or in any other API request that requires an identity ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"singleValueAttributeChanges")," Contains a list of account attributes that have changed. During an account updated event, only account attributes that were modified will be listed, and their ",(0,a.kt)("inlineCode",{parentName:"li"},"oldValue")," will contain the previous value before the change.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it will include ALL account attributes if the config is ",(0,a.kt)("inlineCode",{parentName:"li"},'"allNonEntitlementAttributes": true')),(0,a.kt)("li",{parentName:"ul"},"it will include the enumerated list of attributes contained in ",(0,a.kt)("inlineCode",{parentName:"li"},'"selectedNonEntitlementAttributes": []')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entitlementChanges")," Contains a list of entitlements that have been added and/or removed on the account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eventType")," Will always be ",(0,a.kt)("inlineCode",{parentName:"li"},"ACCOUNT_UPDATED")," for account updated events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source")," The source where this account originated from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accountChangeTypes")," A list of change types you can expect to see in the event input.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"ATTRIBUTES_CHANGED"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ENTITLEMENTS_ADDED"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"ENTITLEMENTS_REMOVED"),"."),(0,a.kt)("li",{parentName:"ul"},"The above example lists all three change types since attributes were changed and entitlements were added and removed. If an event payload only contains changed attributes, then this list will only contain the ",(0,a.kt)("inlineCode",{parentName:"li"},"ATTRIBUTES_CHANGED")," value. This can be useful when filtering events based on change types, or quickly checking what types of objects changed in the account before continuing to process the input."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"multiValueAttributeChanges")," List of multivalued attributes that were added and/or removed on the account.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it will include ALL account attributes if the config is ",(0,a.kt)("inlineCode",{parentName:"li"},'"allNonEntitlementAttributes": true')),(0,a.kt)("li",{parentName:"ul"},"it will include the enumerated list of attributes contained in ",(0,a.kt)("inlineCode",{parentName:"li"},'"selectedNonEntitlementAttributes": []')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"account")," The details of the account as it appears in Identity Security Cloud. This information can be used to query the account API for more information.")),(0,a.kt)("h2",u({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}k.isMDXComponent=!0}}]);