"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8795],{72719:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>S,contentTitle:()=>y,default:()=>v,frontMatter:()=>g,metadata:()=>m,toc:()=>x});var o=e(3905),c=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,n,e)=>n in t?c(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,d=(t,n)=>{for(var e in n||(n={}))a.call(n,e)&&p(t,e,n[e]);if(r)for(var e of r(n))s.call(n,e)&&p(t,e,n[e]);return t},l=(t,n)=>u(t,i(n)),f=(t,n)=>{var e={};for(var o in t)a.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&r)for(var o of r(t))n.indexOf(o)<0&&s.call(t,o)&&(e[o]=t[o]);return e};const g={id:"connectivity-customizers-example",title:"Example customizer code",pagination_label:"Full Example",sidebar_label:"Full Example",sidebar_position:7,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Full connectivity customizer example.",slug:"/connectivity/saas-connectivity/customizers/example",tags:["Connectivity"]},y="Full Example",m={unversionedId:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-example",id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-example",title:"Example customizer code",description:"Full connectivity customizer example.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/full-example.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/example",permalink:"/docs/connectivity/saas-connectivity/customizers/example",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/full-example.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",sidebarPosition:7,frontMatter:{id:"connectivity-customizers-example",title:"Example customizer code",pagination_label:"Full Example",sidebar_label:"Full Example",sidebar_position:7,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Full connectivity customizer example.",slug:"/connectivity/saas-connectivity/customizers/example",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Test Connection",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/test-connection"},next:{title:"API Calls",permalink:"/docs/connectivity/saas-connectivity/in-depth/api-calls"}},S={},x=[],b={toc:x},C="wrapper";function v(t){var n=t,{components:e}=n,c=f(n,["components"]);return(0,o.kt)(C,l(d(d({},b),c),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",d({},{id:"full-example"}),"Full Example"),(0,o.kt)("p",null,"This is a full example of a customizer with all commands provisioned:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"import {\n    Context,\n    createConnectorCustomizer,\n    readConfig,\n    logger,\n    StdAccountReadInput,\n    StdAccountReadOutput,\n    StdTestConnectionOutput,\n    StdAccountCreateInput,\n    StdAccountCreateOutput,\n    StdAccountUpdateInput,\n    StdAccountUpdateOutput,\n    StdAccountDeleteInput,\n    StdAccountDeleteOutput,\n    StdAccountEnableInput,\n    StdAccountEnableOutput,\n    StdAccountDisableInput,\n    StdAccountDisableOutput,\n    StdAccountUnlockInput,\n    StdAccountUnlockOutput,\n    StdAccountListInput,\n    StdEntitlementReadInput,\n    StdEntitlementReadOutput,\n    StdEntitlementListInput,\n    StdChangePasswordInput,\n    StdChangePasswordOutput,\n    StdSourceDataDiscoverInput,\n    StdSourceDataDiscoverOutput,\n    StdSourceDataReadInput,\n    StdSourceDataReadOutput,\n} from '@sailpoint/connector-sdk'\n\n// Connector customizer must be exported as module property named connectorCustomizer\nexport const connectorCustomizer = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    return createConnectorCustomizer()\n        .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n            logger.info('Running after test connection')\n            return output\n        })\n        .beforeStdTestConnection(async (context: Context, input: undefined) => {\n            logger.info('Running before test connection')\n        })\n        .beforeStdAccountCreate(async (context: Context, input: StdAccountCreateInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountCreate(async (context: Context, output: StdAccountCreateOutput) => {\n            logger.info(`Running after account create for account ${output.identity}`)\n            return output\n        })\n        .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {\n            logger.info(`Running after account read for account ${output.identity}`)\n            return output\n        })\n        .beforeStdAccountUpdate(async (context: Context, input: StdAccountUpdateInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountUpdate(async (context: Context, output: StdAccountUpdateOutput) => {\n            logger.info(`Running after account update for account ${output.identity}}`)\n            return output\n        })\n        .beforeStdAccountDelete(async (context: Context, input: StdAccountDeleteInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountDelete(async (context: Context, output: StdAccountDeleteOutput) => {\n            logger.info(`Running after account delete`)\n            return output\n        })\n        .beforeStdAccountEnable(async (context: Context, input: StdAccountEnableInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountEnable(async (context: Context, output: StdAccountEnableOutput) => {\n            logger.info(`Running after account enable for account ${output.identity}`)\n            return output\n        })\n        .beforeStdAccountDisable(async (context: Context, input: StdAccountDisableInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountDisable(async (context: Context, output: StdAccountDisableOutput) => {\n            logger.info(`Running after account disable for account ${output.identity}`)\n            return output\n        })\n        .beforeStdAccountUnlock(async (context: Context, input: StdAccountUnlockInput) => {\n            logger.info(`Running before account, for account ${input.identity}`)\n            return input\n        })\n        .afterStdAccountUnlock(async (context: Context, output: StdAccountUnlockOutput) => {\n            logger.info(`Running after account unlock for account ${output.identity}`)\n            return output\n        })\n        .beforeStdAccountList(async (context: Context, input: StdAccountListInput) => {\n            logger.info(`Running before account list for account. State: ${input.state}`)\n            return input\n        })\n        .beforeStdEntitlementRead(async (context: Context, input: StdEntitlementReadInput) => {\n            logger.info(`Running before entitlement read for account ${input.identity}`)\n            return input\n        })\n        .afterStdEntitlementRead(async (context: Context, output: StdEntitlementReadOutput) => {\n            logger.info(`Running after entitlement read for account ${output.identity}`)\n            return output\n        })\n        .beforeStdEntitlementList(async (context: Context, input: StdEntitlementListInput) => {\n            logger.info(`Running before entitlement list for account. State ${input.state}`)\n            return input\n        })\n        .beforeStdChangePassword(async (context: Context, input: StdChangePasswordInput) => {\n            logger.info(`Running before change password for account ${input.identity}`)\n            return input\n        })\n        .afterStdChangePassword(async (context: Context, output: StdChangePasswordOutput) => {\n            logger.info(`Running after change password`)\n            return output\n        })\n        .beforeStdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput) => {\n            logger.info(`Running before source data discover. Query: ${input.queryInput?.query}`)\n            return input\n        })\n        .afterStdSourceDataDiscover(async (context: Context, output: StdSourceDataDiscoverOutput) => {\n            logger.info(`Running after source data discover first record key: ${output[0].key}`)\n            return output\n        })\n        .beforeStdSourceDataRead(async (context: Context, input: StdSourceDataReadInput) => {\n            logger.info(`Running before source data read. Query: ${input.queryInput?.query}`)\n            return input\n        })\n        .afterStdSourceDataRead(async (context: Context, output: StdSourceDataReadOutput) => {\n            logger.info(`Running after source data read first query record key: ${output[0].key}`)\n            return output\n        })\n}\n\n")))}v.isMDXComponent=!0}}]);