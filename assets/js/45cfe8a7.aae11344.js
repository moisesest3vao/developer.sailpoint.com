"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32280],{46399:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>R,frontMatter:()=>h,metadata:()=>b,toc:()=>f});var a=i(3905),n=i(25108),r=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))u.call(t,i)&&d(e,i,t[i]);if(l)for(var i of l(t))p.call(t,i)&&d(e,i,t[i]);return e},g=(e,t)=>s(e,o(t)),m=(e,t)=>{var i={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(i[a]=e[a]);return i};const h={id:"plugin-java-rest-resources",title:"Java Classes - Rest Resources",pagination_label:"Java Classes - Rest Resources",sidebar_label:"Java Classes - Rest Resources",sidebar_position:7,sidebar_class_name:"plugin_developer_guide_java_rest_resources",keywords:["plugin"],description:"IdentityIQ Plugin Java Classes REST Resources",slug:"/iiq/plugin-developer-guide/java-classes-rest-resources",tags:["plugin","guide","identityiq"]},v="Java Classes - REST Resources",b={unversionedId:"iiq/plugin-developer-guide/chapter-7/plugin-java-rest-resources",id:"iiq/plugin-developer-guide/chapter-7/plugin-java-rest-resources",title:"Java Classes - Rest Resources",description:"IdentityIQ Plugin Java Classes REST Resources",source:"@site/docs/iiq/plugin-developer-guide/chapter-7/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-7",slug:"/iiq/plugin-developer-guide/java-classes-rest-resources",permalink:"/docs/iiq/plugin-developer-guide/java-classes-rest-resources",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-7/index.md",tags:[{label:"plugin",permalink:"/docs/tags/plugin"},{label:"guide",permalink:"/docs/tags/guide"},{label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1715245293,formattedLastUpdatedAt:"May 9, 2024",sidebarPosition:7,frontMatter:{id:"plugin-java-rest-resources",title:"Java Classes - Rest Resources",pagination_label:"Java Classes - Rest Resources",sidebar_label:"Java Classes - Rest Resources",sidebar_position:7,sidebar_class_name:"plugin_developer_guide_java_rest_resources",keywords:["plugin"],description:"IdentityIQ Plugin Java Classes REST Resources",slug:"/iiq/plugin-developer-guide/java-classes-rest-resources",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"XML Artifacts",permalink:"/docs/iiq/plugin-developer-guide/xml-artifacts"},next:{title:"Java Classes - Executors",permalink:"/docs/iiq/plugin-developer-guide/java-classes-executors"}},k={},f=[{value:"Extend BasePluginResource",id:"extend-basepluginresource",level:2},{value:"Secure endpoints",id:"secure-endpoints",level:2}],C=(y="SPRight",function(e){return n.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",c({},e))});var y;const N={toc:f},P="wrapper";function R(e){var t=e,{components:i}=t,n=m(t,["components"]);return(0,a.kt)(P,g(c(c({},N),n),{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"java-classes---rest-resources"}),"Java Classes - REST Resources"),(0,a.kt)("p",null,"The plugin framework relies heavily on REST web services integration for the majority of CRUD (create, read, update, and delete) operations. To create a custom REST resource, there are a couple requirements. This guide will cover those requirements."),(0,a.kt)("h2",c({},{id:"extend-basepluginresource"}),"Extend BasePluginResource"),(0,a.kt)("p",null,"The first step to creating a custom REST resource is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"BasePluginResource")," class as the base class for all resources. It provides access to utility methods for accessing plugin settings, getting database connections and more."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getConnection")," - Gets connection to the datasource specified in the iiq.properties file for the plugins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getPluginName")," - This method should be overriden to return the plugin's correct name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getSettingBool")," - Gets value of boolean plugin setting for plugin name returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"getPluginName()"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getSettingInt")," - Gets value of int plugin setting for plugin name returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"getPluginName()"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getSettingString")," - Gets value of String plugin setting for plugin name returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"getPluginName()"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prepareStatement")," - Convenience security method for getting Java ",(0,a.kt)("inlineCode",{parentName:"li"},"PreparedStatement")," object for any required database queries - signature is ",(0,a.kt)("inlineCode",{parentName:"li"},"prepareStatement"),"(Connection, String, Object...) where the string would be the SQL statement you wish to execute and the object would be a list of the parameters values, if any, to be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authorize")," - This should be overridden by implementers, but by default it only ensures that SystemAdministrator can see everything. Additional methods should be introduced to handle the various endpoints required by the plugin.")),(0,a.kt)("h2",c({},{id:"secure-endpoints"}),"Secure endpoints"),(0,a.kt)("p",null,"The next step to creating a custom REST resource is to prevent unauthorized access to your new endpoints. To do so, you should guard each with an authorization mechanism. The simplest way to do so in the plugin framework is through 'Annotations'. In Java, an annotation is a syntactic metadata that is added, often before a method signature, to describe the parameters used in that method. Here is an example from the 'Todo' plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'@GET\n@Path("customplugin/{param}")\n@Deferred\n\npublic CustomPluginObject getCustomPluginObject(@PathParam("param") String objectName) throws GeneralException{\n    CustomPluginObject cpo = getCustomPluginService().getCustomPluginObject(objectName);\n    authorize(new CustomPluginAuthorizer(cpo));\n    return cpo;\n}\n')),(0,a.kt)("p",null,"An annotation should have at least three parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Line 1")," - The HTTP method (GET, POST, PUT, DELETE, etc)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Line 2"),' - The path or endpoint - this can be parameterized, which is useful for pulling back a single record. The earlier example uses parameterization by adding the variable within {} tags to the end of the URL and also declaring the @PathParam "appName" in the input arguments of the method signature.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Line 3")," - The authorization of the method. The following values are allowed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@AllowAll")," - Allows anyone to interrogate the endpoint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'@RequiredRight("',(0,a.kt)(C,{mdxType:"SPRight"}),'")')," - Allows users with the named SPRight to access the endpoint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@SystemAdmin")," - System administrator access only."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@Deferred")," - Authorization is deferred to the method. When this option is selected, the implementer must also create an ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorizer")," class that implements the ",(0,a.kt)("inlineCode",{parentName:"li"},"sailpoint.authorization.Authorize"),"r interface. The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorizer")," class should override the ",(0,a.kt)("inlineCode",{parentName:"li"},"authorize(UserContext)")," method of the base ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorizer")," interface. Inside the REST resource method, the author would then call ",(0,a.kt)("inlineCode",{parentName:"li"},"authorize()"),". Here is a simple example:")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'import sailpoint.authorization.Authorizer;\nimport sailpoint.authorization.UnauthorizedAccessException;\nimport sailpoint.tools.GeneralException;\nimport sailpoint.web.UserContext;\n\n/**\n* Created by adam.creaney on 2/6/17.\n*/\n\nclass CustomPluginAuthorizer implements Authorizer{\n    /**\n     * The CustomPluginObject to check.\n     */\n\n    private CustomPluginObject cpo;\n    /**\n     * Constructor.\n     *\n     * @param CustomPluginObject the custom plugin object\n     */\n    public CustomPluginAuthorizer(CustomPluginObject cpo) {\n        this.cpo = cpo\n    }\n\n    /**\n     * {@inheritDoc}\n     */\n    @Override\n    public void authorize(UserContext userContext) throws GeneralException {\n        if (!(userContext.getLoggedInUser().getCapabilityManager().hasCapability("SystemAdministrator") || userContext.getLoggedInUser().getCapabilityManager().hasCapability("CustomAdmin"))) {\n            throw new UnauthorizedAccessException("User does not have access to Custom Plugin");\n        }\n    }\n\n}\n')))}R.isMDXComponent=!0}}]);