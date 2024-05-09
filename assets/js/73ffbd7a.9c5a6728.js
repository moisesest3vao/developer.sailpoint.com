"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[49447],{72306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>y,frontMatter:()=>b,metadata:()=>v,toc:()=>f});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const b={id:"webservices-after-provisioning-rule",title:"Web Services After Operation Rule",pagination_label:"Web Services After Operation Rule",sidebar_label:"Web Services After Operation Rule",sidebar_class_name:"webServicesAfterOperationRule",keywords:["cloud","rules","webservices"],description:"This rule calculates attributes after a web-service operation call.",slug:"/extensibility/rules/connector-rules/webservices-after-provisioning-rule",tags:["Rules"]},g=void 0,v={unversionedId:"extensibility/rules/connector-rules/webservices-after-provisioning-rule",id:"extensibility/rules/connector-rules/webservices-after-provisioning-rule",title:"Web Services After Operation Rule",description:"This rule calculates attributes after a web-service operation call.",source:"@site/docs/extensibility/rules/connector-rules/web_services_after_operation_rule.md",sourceDirName:"extensibility/rules/connector-rules",slug:"/extensibility/rules/connector-rules/webservices-after-provisioning-rule",permalink:"/docs/extensibility/rules/connector-rules/webservices-after-provisioning-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/connector-rules/web_services_after_operation_rule.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"webservices-after-provisioning-rule",title:"Web Services After Operation Rule",pagination_label:"Web Services After Operation Rule",sidebar_label:"Web Services After Operation Rule",sidebar_class_name:"webServicesAfterOperationRule",keywords:["cloud","rules","webservices"],description:"This rule calculates attributes after a web-service operation call.",slug:"/extensibility/rules/connector-rules/webservices-after-provisioning-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"SAP HR Provisioning Modify Rule",permalink:"/docs/extensibility/rules/connector-rules/sap-provisioning-modify-rule"},next:{title:"Web Services Before Operation Rule",permalink:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule"}},k={},f=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}],h={toc:f},w="wrapper";function y(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,a.kt)(w,d(c(c({},h),i),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",c({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"This rule calculates attributes after a web-service operation call."),(0,a.kt)("h2",c({},{id:"execution"}),"Execution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rule Execution",src:n(88763).Z,width:"1525",height:"618"})),(0,a.kt)("h2",c({},{id:"input"}),"Input"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Argument"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"application"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"sailpoint.object.Application"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Application whose data file is being processed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"processedResponseObject"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"List<Map<String, Object>>"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"List of map (account/group). The map contains a key, the identityAttribute of the application schema, and a value, all the account/group attributes (schema) passed by the connector after parsing the respective API response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"requestEndPoint"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"sailpoint.connector.webservices.EndPoint"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Current request information. It contains the header, body, context url, method type, response attribute map, successful response code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"restClient"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"sailpoint.connector.webservices.WebServicesClient"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"WebServicesClient (HttpClient) object that enables the user to call the Web Services API target system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"rawResponseObject"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"String object that holds the raw response returned from the target system, which can be in JSON or XML form.")))),(0,a.kt)("h2",c({},{id:"output"}),"Output"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Argument"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"updatedAccountOrGroupList"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"java.util.Map"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Map")," object returned from the After Operation Rule. It may contain any or all of the following: an updated list of account / group resource objects, identified by key ",(0,a.kt)("inlineCode",{parentName:"td"},"data"),"/ attribute values to be updated into application by the connector state map identified by key ",(0,a.kt)("inlineCode",{parentName:"td"},"connectorStateMap"),". Each resource (account/group) object is of type ",(0,a.kt)("inlineCode",{parentName:"td"},"Map"),", which contains the ",(0,a.kt)("strong",{parentName:"td"},"key-value")," pair. The ",(0,a.kt)("strong",{parentName:"td"},"key")," represents the schema attribute name, and the ",(0,a.kt)("strong",{parentName:"td"},"value")," represents the account/group attribute value.")))),(0,a.kt)("h2",c({},{id:"template"}),"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-xml"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="WebServiceAfterOperationRule">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h2",c({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="WebServiceAfterOperationRule">\n  <Description>This rule is used by the  Web Services connector after performing any operation like testconnection, aggregation etc.</Description>\n  <Source><![CDATA[\nimport connector.common.JsonUtil;\n    import java.util.HashMap;\n    import java.util.Map.Entry;\n    import java.util.Map;\n    import java.util.List;\n    import java.util.ArrayList;\n    import javax.net.ssl.HttpsURLConnection;\n    import java.io.BufferedReader;\n    import java.io.PrintStream;\n    import java.io.StringWriter;\n    import java.text.SimpleDateFormat;\n    import sailpoint.tools.GeneralException;\n\nMap updatedMapInfo = new HashMap();\nList list = new ArrayList();\nArrayList<String> Roles = new ArrayList<String>();\nMap response = (Map) JsonUtil.toMap(rawResponseObject);\nint RoleSize = 0;\nString newName;\nList Finallist = new ArrayList();\nList workspace = new ArrayList();\n\nlog.error("RULES response at start" + response);\nif (response.get("data") != null) {\n\n     list = (ArrayList) response.get("data");\n\n     for(int d = 0; d < list.size(); d++ ){\n\n         Map responseMap = (Map) list.get(d);\n\n         if (responseMap.get("attributes") != null) {\n            Map newmap = new HashMap();\n             Map data = (Map) responseMap.get("attributes");\n             newmap.put("firstName", data.get("firstName"));\n             newmap.put("lastName",data.get("lastName"));\n             newmap.put("displayName",data.get("displayName"));\n             newmap.put("userName",data.get("userName"));\n             newmap.put("email",data.get("email"));\n\n             if (data.get("workspaceMemberships") != null) {\n\n                 ArrayList Workspacedetail = (ArrayList) data.get("workspaceMemberships");\n\n                 for (int i = 0; i < Workspacedetail.size(); i++) {\n\n                     Map work = (Map) Workspacedetail.get(i);\n\n                     for (int w = 0; w < work.size(); w++) {\n\n                         if (work.get("workspaceName") != null) {\n\n                            workspace.add(work.get("workspaceName"));\n\n                             Roles = (ArrayList) work.get("workspaceRoles");\n\n                             for (int r = 0; r < Roles.size(); r++) {\n\n                                 if (Roles.get(r) != null) {\n                                     newName = Roles.get(r).toString() + " - " + work.get("workspaceName");\n\n                                     if(newName != null) {\n                                         Roles.set(r, newName);\n                                         newmap.put("workspaceRoles", Roles);\n\n                                     }\n\n                                 }\n                             }\n                         }\n                         break;\n                     }\n                 }\n             }\n\n             Finallist.add(newmap);\n\n         }\n    }\n\n}\nlog.error("RULES newmap at end" + newmap);\nlog.error("RULES Finallist at end" + Finallist);\n\nlog.error("RULES processedResponseObject Before is " + processedResponseObject);\n\nupdatedMapInfo.put("data", Finallist);\nlog.error("RULES updatedMapInfo is " + updatedMapInfo);\n\nreturn updatedMapInfo;\nlog.error("RULES processedResponseObject after is " + processedResponseObject);\u200b\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h2",c({},{id:"attach-to-source"}),"Attach to Source"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/extensibility/rules/connector-rules#webserviceafteroperation-rule"}),"Attaching Connector-Related Rules to Sources")," for details on how to attach your rule to your source."))}y.isMDXComponent=!0},88763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);