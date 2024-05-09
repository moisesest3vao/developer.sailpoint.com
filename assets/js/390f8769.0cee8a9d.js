"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[70209],{65949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>f,frontMatter:()=>g,metadata:()=>k,toc:()=>y});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>l(e,i(t)),c=(e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const g={id:"manager-correlation-rule",title:"Manager Correlation Rule",pagination_label:"Manager Correlation Rule",sidebar_label:"Manager Correlation Rule",sidebar_class_name:"managerCorrelationRule",keywords:["cloud","rules","manager correlation"],description:"This rule calculates a manager relationship between identities.",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",tags:["Rules"]},b=void 0,k={unversionedId:"extensibility/rules/cloud-rules/manager-correlation-rule",id:"extensibility/rules/cloud-rules/manager-correlation-rule",title:"Manager Correlation Rule",description:"This rule calculates a manager relationship between identities.",source:"@site/docs/extensibility/rules/cloud-rules/manager_correlation_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",permalink:"/docs/extensibility/rules/cloud-rules/manager-correlation-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/manager_correlation_rule.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"manager-correlation-rule",title:"Manager Correlation Rule",pagination_label:"Manager Correlation Rule",sidebar_label:"Manager Correlation Rule",sidebar_class_name:"managerCorrelationRule",keywords:["cloud","rules","manager correlation"],description:"This rule calculates a manager relationship between identities.",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Identity Attribute Rule",permalink:"/docs/extensibility/rules/cloud-rules/identity-attribute-rule"},next:{title:"Connector Executed Rules",permalink:"/docs/extensibility/rules/connector-rules"}},h={},y=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Find a manager based on the manager.email attribute",id:"example---find-a-manager-based-on-the-manageremail-attribute",level:2}],N={toc:y},v="wrapper";function f(e){var t=e,{components:r}=t,l=c(t,["components"]);return(0,n.kt)(v,m(p(p({},N),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",p({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"This rule calculates a manager relationship between identities."),(0,n.kt)("p",null,"Use this rule to correlate an identity's manager for the following scenarios:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The authoritative source has multiple accounts for an identity and you must pick the manager data from the ",(0,n.kt)("inlineCode",{parentName:"li"},"active")," account."),(0,n.kt)("li",{parentName:"ul"},"You need to do a lookup from an employee number to other data."),(0,n.kt)("li",{parentName:"ul"},"The identity changes types, for example, from consultant to employee with the manager coming from a different authoritative source.")),(0,n.kt)("p",null,"The manager correlation rule runs before configured manager account correlation."),(0,n.kt)("h2",p({},{id:"execution"}),"Execution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rule Execution",src:a(44490).Z,width:"1594",height:"635"})),(0,n.kt)("h2",p({},{id:"input"}),"Input"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Argument"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"log"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"org.apache.log4j.Logger"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Logger to log statements. ",(0,n.kt)("em",{parentName:"td"},"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"idn"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"sailpoint.server.IdnRuleUtil"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,n.kt)("a",p({parentName:"td"},{href:"/docs/extensibility/rules/rule-utility"}),"IdnRuleUtil"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"link"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"sailpoint.object.Link"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Read-only representation of account data that has been aggregated. Use this as a basis to determine manager linkages to a specific manager identity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"managerAttributeValue"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"java.lang.Object"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Attribute value stored in the manager attribute.")))),(0,n.kt)("h2",p({},{id:"output"}),"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Argument"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"returnMap"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"java.util.Map"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Map object containing a reference to the identity attributes to identify the manager's identity. These should contain both ",(0,n.kt)("inlineCode",{parentName:"td"},"identityAttributeName")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"identityAttributeValue")," as keys.")))),(0,n.kt)("h2",p({},{id:"template"}),"Template"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-xml"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="ManagerCorrelation">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,n.kt)("h2",p({},{id:"example---find-a-manager-based-on-the-manageremail-attribute"}),"Example - Find a manager based on the manager.email attribute"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-java"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Manager Email Correlation" type="ManagerCorrelation">\n  <Description>Finds a manager based on the manager.email attribute.</Description>\n  <Source><![CDATA[\n\nMap returnMap = new HashMap();\n\nString managerEmail = link.getAttribute( "manager.email" );\nreturnMap.put( "identityAttributeName", "email");\nreturnMap.put( "identityAttributeValue", managerEmail );\n\nreturn returnMap;\n\n  ]]></Source>\n</Rule>\n')))}f.isMDXComponent=!0},44490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);