"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2763],{9792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const a={},r="Tags",o={id:"configuring/tags/index",title:"Tags",description:"For any input plugin you can optionally set tags. If tags field is provided with the list of tags, then it can be accessed in template using tags variable (by default).",source:"@site/versioned_docs/version-1.1/configuring/tags/index.md",sourceDirName:"configuring/tags",slug:"/configuring/tags/",permalink:"/Website/docs/configuring/tags/",draft:!1,unlisted:!1,tags:[],version:"1.1",frontMatter:{},sidebar:"configuringSidebar",previous:{title:"Configuration file",permalink:"/Website/docs/configuring/config_file/"},next:{title:"Files and locations",permalink:"/Website/docs/configuring/files_and_locations/"}},l={},c=[{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tags",children:"Tags"}),"\n",(0,s.jsxs)(n.p,{children:["For any input plugin you can optionally set tags. If ",(0,s.jsx)(n.code,{children:"tags"})," field is provided with the list of tags, then it can be accessed in template using ",(0,s.jsx)(n.code,{children:"tags"})," variable (by default)."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["In below configuration there are two Timer input plugins with different value of ",(0,s.jsx)(n.code,{children:"seconds"})," parameter and tags list."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'input:\n  - timer:\n      seconds: 1\n      count: 1\n      repeat: true\n// highlight-next-line\n      tags: ["timer1"]\n  - timer:\n      seconds: 3\n      count: 1\n      repeat: true\n// highlight-next-line\n      tags: ["timer2", "yet another tag"]\n\nevent:\n  params: { }\n  samples: { }\n\n  mode: all\n  templates:\n    - test:\n        template: test.jinja\n\noutput:\n  - stdout: { }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Content of template ",(0,s.jsx)(n.code,{children:"test.jinja"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Tags values is: {{ tags }}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Expected output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Tags values is: ['timer1']\nTags values is: ['timer1']\nTags values is: ['timer1']\nTags values is: ['timer2', 'yet another tag']\nTags values is: ['timer1']\nTags values is: ['timer1']\nTags values is: ['timer1']\nTags values is: ['timer2', 'yet another tag']\n...\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);