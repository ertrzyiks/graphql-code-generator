(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[8567],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52820:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(29603),i=n(50120),o=(n(27378),n(35318)),a=["components"],l={id:"require-field",title:"`require` field"},p={unversionedId:"getting-started/require-field",id:"getting-started/require-field",isDocsHomePage:!1,title:"`require` field",description:"The require field allows you to load any external files without the need to transpile them before.",source:"@site/docs/getting-started/require-field.md",sourceDirName:"getting-started",slug:"/getting-started/require-field",permalink:"/docs/getting-started/require-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/require-field.md",version:"current",frontMatter:{id:"require-field",title:"`require` field"},sidebar:"sidebar",previous:{title:"`config` field",permalink:"/docs/getting-started/config-field"},next:{title:"Naming Convention",permalink:"/docs/getting-started/naming-convention"}},d=[{value:"How to use it?",id:"how-to-use-it",children:[]},{value:"TypeScript Support",id:"typescript-support",children:[]},{value:"Specifying from the command line",id:"specifying-from-the-command-line",children:[{value:"<code>dotenv</code> Integration",id:"dotenv-integration",children:[]}]}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," field allows you to load any external files without the need to transpile them before."),(0,o.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,o.kt)("p",null,"To use it, install the extensions you wish to use from npm and then specify a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," extensions in your root config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"require:\n  - extension1\n  - extension2\n")),(0,o.kt)("p",null,"Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," extension is useful if you are loading your ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," or GraphQL documents from a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/schema-field#javascript-export"},"code file"),", if you wish to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/custom-codegen/write-your-plugin"},"custom plugins"),", or use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/schema-field#custom-schema-loader"},"custom schema loader")," or a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/documents-field#custom-document-loader"},"custom document loader"),"."),(0,o.kt)("h2",{id:"typescript-support"},"TypeScript Support"),(0,o.kt)("p",null,"If you wish to use TypeScript, just add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-node"))," from npm and specify its register export in your config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"require:\n  - ts-node/register\n")),(0,o.kt)("h2",{id:"specifying-from-the-command-line"},"Specifying from the command line"),(0,o.kt)("p",null,"You can also specify ",(0,o.kt)("inlineCode",{parentName:"p"},"require.extensions")," as a cli flag using ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),"."),(0,o.kt)("p",null,"Specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," using a CLI flag will load your ",(0,o.kt)("inlineCode",{parentName:"p"},"require.extension")," ",(0,o.kt)("em",{parentName:"p"},"before")," loading the ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," file, and this way you can load environment variables using ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," and use those environment variables in your ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," config file."),(0,o.kt)("h3",{id:"dotenv-integration"},(0,o.kt)("inlineCode",{parentName:"h3"},"dotenv")," Integration"),(0,o.kt)("p",null,"If you wish to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},"dotenv")," to load environment variables, you can install ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," from npm and then to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," cli flag to preload the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," require extensions: ",(0,o.kt)("inlineCode",{parentName:"p"},"-r dotenv/config"),"."),(0,o.kt)("p",null,"It will make sure to load your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file before executing the codegen and loading your ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," file, so environment variables that are used in your config file will be replaced with the correct value."),(0,o.kt)("p",null,"To get started with this integration, make sure you have ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with variables, ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," installed, and codegen is being executed like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"graphql-codegen --require dotenv/config --config codegen.yml\n")),(0,o.kt)("h4",{id:"customize-loaded-env-file"},"Customize loaded env file"),(0,o.kt)("p",null,"If you wish to load a file different than ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, please follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv#dotenv"},(0,o.kt)("inlineCode",{parentName:"a"},"dotenv")," library documentation"),"."),(0,o.kt)("p",null,"It allows you to specify a custom file path using 2 methods."),(0,o.kt)("p",null,"You can either set an environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"DOTENV_CONFIG_PATH")," with the path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DOTENV_CONFIG_PATH="./my.env" graphql-codegen --require dotenv/config --config codegen.yml\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"cross-env")," library if you are using Windows.")),(0,o.kt)("p",null,"Or, you can specify it using codegen cli, like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"graphql-codegen --require dotenv/config --config codegen.yml dotenv_config_path=my.env\n")),(0,o.kt)("h4",{id:"dotenv-example"},(0,o.kt)("inlineCode",{parentName:"h4"},"dotenv")," Example"),(0,o.kt)("p",null,".env:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SCHEMAURL=https://example.com/graphql\nAPIKEY=ABC123\n")),(0,o.kt)("p",null,"codegen.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"schema: \n  - ${SCHEMAURL}:\n    headers:\n      apikey: ${APIKEY}\n  \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The env values might be saved in the generated code output.  Be careful not to commit code with sensitive keys.")))}c.isMDXComponent=!0}}]);