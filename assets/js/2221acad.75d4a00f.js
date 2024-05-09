"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52878],{76090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>w,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const h={id:"rules",title:"Rules",pagination_label:"Rules",sidebar_label:"Rules",sidebar_position:2,sidebar_class_name:"rules",keywords:["rules"],description:"Advanced configurations with custom logic.",slug:"/extensibility/rules",tags:["Rules"]},k=void 0,y={unversionedId:"extensibility/rules/rules",id:"extensibility/rules/rules",title:"Rules",description:"Advanced configurations with custom logic.",source:"@site/docs/extensibility/rules/index.md",sourceDirName:"extensibility/rules",slug:"/extensibility/rules",permalink:"/docs/extensibility/rules",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/index.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",sidebarPosition:2,frontMatter:{id:"rules",title:"Rules",pagination_label:"Rules",sidebar_label:"Rules",sidebar_position:2,sidebar_class_name:"rules",keywords:["rules"],description:"Advanced configurations with custom logic.",slug:"/extensibility/rules",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"UUID Generator",permalink:"/docs/extensibility/transforms/operations/uuid-generator"},next:{title:"Guides",permalink:"/docs/extensibility/rules/guides"}},g={},f=[{value:"Overview",id:"overview",level:2},{value:"Java Beanshell",id:"java-beanshell",level:2},{value:"Rule Execution",id:"rule-execution",level:2},{value:"Support Considerations",id:"support-considerations",level:2},{value:"Best Practices for Rule deployments",id:"best-practices-for-rule-deployments",level:2},{value:"SLAs for Rule Review",id:"slas-for-rule-review",level:3},{value:"Go Live expectations",id:"go-live-expectations",level:3},{value:"Rule Deployments",id:"rule-deployments",level:3},{value:"Promote Rules from Sandbox to Production",id:"promote-rules-from-sandbox-to-production",level:2},{value:"Rule Guidelines",id:"rule-guidelines",level:2},{value:"Rule Code Restrictions",id:"rule-code-restrictions",level:2},{value:"Other Rules",id:"other-rules",level:2},{value:"Deprecated Rules",id:"deprecated-rules",level:2}],v={toc:f},b="wrapper";function w(e){var t=e,{components:o}=t,i=m(t,["components"]);return(0,r.kt)(b,d(p(p({},v),i),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",p({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"In SailPoint solutions, rules serve as a flexible configuration framework implementers can leverage to preform complex or advanced configurations. Though rules allow some advanced flexibility, you must take special considerations when you are deciding to implement rules."),(0,r.kt)("h2",p({},{id:"java-beanshell"}),"Java Beanshell"),(0,r.kt)("p",null,"Rules in Identity Security Cloud are written in Java Beanshell, a lightweight scripting language that allows you to define custom logic and behavior within the rules. Java Beanshell provides a familiar syntax similar to Java, making it easier for implementers to create and maintain rule configurations."),(0,r.kt)("p",null,"For more information about Java Beanshell, you can refer to the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/beanshell/beanshell/wiki"}),"Java Beanshell Documentation"),"."),(0,r.kt)("h2",p({},{id:"rule-execution"}),"Rule Execution"),(0,r.kt)("p",null,"Identity Security Cloud (ISC) is a multi-tenant cloud solution, and its architecture varies differently from other SailPoint products like IdentityIQ (IIQ). Therefore, the way rules execute within ISC reflects the architectural design considerations the platform was built on. These considerations determine the rule's limitations."),(0,r.kt)("p",null,"There are two primary places where you can execute rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Execution")," - These rules are executed in the ISC multi-tenant cloud."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connector Execution")," - These rules are executed on the on-premise ISC virtual appliance.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Execution",src:n(65675).Z,width:"1705",height:"706"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cloud-Executed Rules")," or ",(0,r.kt)("strong",{parentName:"p"},"Cloud Rules")," typically only perform a specific function, such as calculating attribute values. Many of these rules may be able to query the ISC data-model in a read-only fashion, but they do not have the ability to commit transactions, save objects, etc."),(0,r.kt)("p",null,"Because these rules execute in a multi-tenant cloud environment, they have a restricted context, and they are closely scrutinized to ensure that they execute in an efficient and secure manner."),(0,r.kt)("p",null,"For more details, see ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules"}),"Cloud Rules"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connector-Executed Rules")," or ",(0,r.kt)("strong",{parentName:"p"},"Connector Rules")," are rules executed in the ISC virtual appliance, and they are often an extension connector itself. The rules are commonly used for performing complex connector-related functions, so they are specific to only certain connectors. Because these rules execute in the virtual appliance, they do not have access to query the ISC data model or fetch information from ISC. They rely instead on contextual information sent from ISC. Connector-executed rules may also have managed connections supplied in their contexts to support querying end systems or sources. Though you may use these managed connections, you cannot make making additional connections or call-outs."),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/connector-rules"}),"Connector Rules"),"."),(0,r.kt)("h2",p({},{id:"support-considerations"}),"Support Considerations"),(0,r.kt)("p",null,"Though ISC shares some common functionality with other SailPoint products like IIQ, the same rules are not necessarily supported, nor do they necessarily execute the same way or with the same context and variables. SailPoint recommends that you become familiar with which rules execute with which products, as well as the nuances in their execution contexts."),(0,r.kt)("p",null,"From a SailPoint support perspective, rules are considered configurations. SailPoint supports the underlying platform but not the rule configurations themselves. Any problems with the way rules are implemented or run over time are the responsibilities the customer or implementer must manage. SailPoint's ISC Expert Services need hours to cover any rule configuration work (e.g., creating rules, best practices reviews, application to your ISC environment, and promotion between sandbox & prod environments). Contact your Customer Success Manager with any questions. While rules allow some advanced flexibility, you must consider these support implications when you are deciding whether to implement rules. Consider rule usage a last resort, and use Identity Security Cloud features instead whenever you can."),(0,r.kt)("h2",p({},{id:"best-practices-for-rule-deployments"}),"Best Practices for Rule deployments"),(0,r.kt)("p",null,"SailPoint ISC deployments often require the deployment of rules to the client\u2019s ISC tenants. Because ISC is a multi-tenant solution, rules that are poorly written can have negative performance implications on other tenants in the same cloud. As such, SailPoint requires all rules to be reviewed prior to deployment. The time to complete these reviews requires an expert services contract to leverage billable hours."),(0,r.kt)("p",null,"This article covers common topics around this process including best practices, rule review expectations, and more."),(0,r.kt)("h3",p({},{id:"slas-for-rule-review"}),"SLAs for Rule Review"),(0,r.kt)("p",null,"SailPoint has a 24 hour SLA on rule deployments for rules submitted over weekdays and next business day for rules submitted over the weekend."),(0,r.kt)("p",null,"However, around 65% of rule reviews are completed in less 4 business hours, with the average turnaround time of 3-6 hours after ticket has been assigned. If a specific deployment window is required, you must alert SailPoint at least 48 hours in advance so that the time for the reviewer and deployment expert may be reserved."),(0,r.kt)("h3",p({},{id:"go-live-expectations"}),"Go Live expectations"),(0,r.kt)("p",null,"SailPoint rule review team members work from 9am-5pm Monday-Friday in their local time zones, excluding holidays. For clients planning to go live on a weekend, we recommend having rules deployed in the sandbox environment prior to go live so that they can be promoted to production without SailPoint involvement. See the section below entitled ",(0,r.kt)("a",p({parentName:"p"},{href:"#promoting-rules-from-sandbox-to-production"}),"Promoting Rules from Sandbox to Production"),"."),(0,r.kt)("p",null,"Note that even for clients who purchase Weekend Go-Live Support, rule deploys are not covered in the Weekend Go Live service as there are multiple teams involved in the rule deploy process."),(0,r.kt)("h3",p({},{id:"rule-deployments"}),"Rule Deployments"),(0,r.kt)("p",null,"SailPoint recommends only submitting one rule at a time or only rules that should be deployed together."),(0,r.kt)("p",null,"Typical rule reviews are billed at 15-30 minutes per rule. However, this can vary based on the complexity of the rule or if the rule is rejected and must be resubmitted for review."),(0,r.kt)("p",null,"In the case of rejection, we recommend submitting a new ticket to avoid a scenario where a case owner is out of the office."),(0,r.kt)("h2",p({},{id:"promote-rules-from-sandbox-to-production"}),"Promote Rules from Sandbox to Production"),(0,r.kt)("p",null,"A rule that has been approved in a sandbox tenant through the SailPoint rule review process, like an IdentityAttribute, Correlation or ManagerCorrelation rule or any other rule type, for example, can be migrated to the production ISC tenant."),(0,r.kt)("p",null,"This applies to all rule types, as the signature has been approved/verified during the SailPoint rule review process, the sp-config API allows you to import ANY \u2018approved\u2019 tenant rules. (this includes cloud rules!)"),(0,r.kt)("p",null,"For more details on the sp-config API see ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/api/beta/export-sp-config"}),"sp-config")),(0,r.kt)("h2",p({},{id:"rule-guidelines"}),"Rule Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Rules")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must use one of the Supported Rules defined in ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules#supported-cloud-rules"}),"Supported Cloud Rules")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/connector-rules#supported-connector-rules"}),"Supported Connector Rules"),". You must also annotate the rule with the correct type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adhere to the rule's purpose as defined in Supported Rules. Don't use the rule differently from its intended purpose.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The rules must use only available SailPoint product features, and they must not make unsupported API calls.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Logging")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use logging statements sparingly but informatively. Do not make unnecessary logging calls.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"System.out")," statements to output data. Internal log aggregators don't pick up these statements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want rules to log statements, use ",(0,r.kt)("inlineCode",{parentName:"p"},"log.debug()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"log.info()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"log.warn()"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"log.error()")," statements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you are logging, do not log full object serialization to logs. Calls to ",(0,r.kt)("inlineCode",{parentName:"p"},".toXml()")," or similar methods are prohibited.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Logging of sensitive data is prohibited.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not declare your own loggers in the rule.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Execution")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not spawn any additional threads in the rule.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connections to systems other than through provided connection contexts are strictly prohibited.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not call out to external sources, files, services, APIs, etc. unless that is a connector\u2019s purpose. Avoid using file system object manipulation like opening temp files or spooling to text or CSV files. This can cause unforeseen issues when connections are leaked or improperly used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you are using conditional execution, do not leave any dead or inaccessible code. All methods that return values should be able to return a value.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Error Handling")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use proper error handling including ",(0,r.kt)("inlineCode",{parentName:"li"},"try { ... }")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"catch { ... }")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"finally { ... }")," blocks to allow exceptions to propagate as intended. This is especially true of connector-executed rules."),(0,r.kt)("li",{parentName:"ul"},"Do not assume that objects are always available. They can be null. Make sure that you have proper null checks to prevent Null Pointer Exceptions (NPEs)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Security")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implement appropriate security measures in rules to ensure proper handling of user information and prevent its unauthorized use, disclosure, or access by third parties."),(0,r.kt)("li",{parentName:"ul"},"Logging of sensitive data is prohibited, and it will cause the rule to be rejected."),(0,r.kt)("li",{parentName:"ul"},"Do not include test values, passwords, keys, or sensitive values in the rule code."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rules should be as performant as possible to achieve the task at hand."),(0,r.kt)("li",{parentName:"ul"},"Be careful with iterative rules execution. Heavily iterative rules will have greater performance scrutiny."),(0,r.kt)("li",{parentName:"ul"},"Do not iterate over lists of objects like accounts or identities. Doing so causes cache bloat. Use a projection query wherever possible to find the data you need, and then return the values you want. If you are unsure, ask ",(0,r.kt)("a",p({parentName:"li"},{href:"https://www.sailpoint.com/services/professional/#contact-form"}),"SailPoint Expert Services"),".")))),(0,r.kt)("h2",p({},{id:"rule-code-restrictions"}),"Rule Code Restrictions"),(0,r.kt)("p",null,"The following code fragments are not allowed in any SailPoint ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules"}),"Cloud Rules")," or ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/connector-rules"}),"Connector Rules"),". Any usage of these will be blocked in the system."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),"context.\n.prepare()\n.getJdbcConnection()\n.getConnection()\n.isClosed()\n.setUserName()\n.getUserName()\n.impersonate()\n.setScopeResults()\n.getScopeResults()\n.getConfiguration()\n.encrypt()\n.decrypt()\n.authenticate()\n.sendEmailNotification()\n.runRule()\n.runScript()\n.startTransaction()\n.commitTransaction()\n.rollbackTransaction()\n.getObjectById()\n.getObjectByName()\n.getObject()\n.lockObjectById()\n.lockObjectByName()\n.lockObject()\n.unlockObject()\n.getUniqueObject()\n.getObjects()\n.search()\n.update()\n.countObjects()\n.removeObjects()\n.attach()\n.decache()\n.clearHighLevelCache()\n.getReferencedObject()\n.enableStatistics()\n.printStatistics()\n.reconnect()\n.setPersistenceOptions()\n.getPersistenceOptions()\n.setProperty()\n.importObject()\n.notify()\n.notifyAll()\n.reconnect()\n.removeObject()\nSailpointFactory\n.toXml()\nSystem.out.\nSystem.err.\nRunnable\nThread\npublic static\n.printStackTrace\nXMLObjectFactory\nLog4j\nLogger.getLogger\u200b\n")),(0,r.kt)("p",null,"Note that the earlier code fragments are not allowed within ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/connector-rules#supported-connector-rules"}),"connector-executed rules")," because they are not valid at the connector level. They will, for a short time, still be allowed for pre-existing ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules"}),"cloud-executed rules")," as a review exception. However, any new rules using these constructs will be returned to the submitter, and the submitter will be asked to rewrite the rule, using the ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/extensibility/rules/rule-utility"}),"ISC Rule Utility")," helper methods instead:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"context"),(0,r.kt)("li",{parentName:"ul"},".getObjectById()"),(0,r.kt)("li",{parentName:"ul"},".getObjectByName()"),(0,r.kt)("li",{parentName:"ul"},".getObject()"),(0,r.kt)("li",{parentName:"ul"},".search()"),(0,r.kt)("li",{parentName:"ul"},".countObjects()")),(0,r.kt)("h2",p({},{id:"other-rules"}),"Other Rules"),(0,r.kt)("p",null,"While ISC shares some common functionality with other SailPoint products like IIQ, the same rules are not necessarily supported, nor do they necessarily execute the same way. SailPoint recommends that you become familiar with which rules execute with which products, as well as the nuances in their execution contexts. ISC considers any other rules not mentioned in the Cloud-Executed Rules or Connector-Executed Rules sections to be unsupported."),(0,r.kt)("h2",p({},{id:"deprecated-rules"}),"Deprecated Rules"),(0,r.kt)("p",null,"The following rules have been deprecated in ISC. SailPoint recommends using supported product functionality instead of these rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Certification Exclusion Rules")," - Use configurable certification campaign filters instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Identity Selector Rules")," - Use role standard assignment criteria instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integration Rules")," - Use ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/extensibility/rules/cloud-rules/before-provisioning-rule"}),"Before Provisioning")," rules instead.")))}w.isMDXComponent=!0},65675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rule_execution-c876e317c84be0f73d8d6b3c15dc586c.png"}}]);