"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8993],{8458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(4848),s=t(8453);const i={slug:"compose",title:"Eventum Compose",authors:["rnv812"],tags:["feature","cli"]},r=void 0,a={permalink:"/Website/blog/compose",source:"@site/blog/2024-06-08-compose/index.md",title:"Eventum Compose",description:"Since version 1.0.10 of Eventum CLI it's available to run multiple generators at once using compose files via eventum-compose tool!",date:"2024-06-08T00:00:00.000Z",tags:[{label:"feature",permalink:"/Website/blog/tags/feature"},{label:"cli",permalink:"/Website/blog/tags/cli"}],readingTime:.36,hasTruncateMarker:!1,authors:[{name:"Nikita Reznikov",title:"Maintainer of Eventum",url:"https://github.com/rnv812",imageURL:"https://github.com/rnv812.png",key:"rnv812"}],frontMatter:{slug:"compose",title:"Eventum Compose",authors:["rnv812"],tags:["feature","cli"]},unlisted:!1,nextItem:{title:"Multi inputs",permalink:"/Website/blog/multi-inputs"}},c={authorsImageUrls:[void 0]},l=[];function u(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Since version 1.0.10 of Eventum CLI it's available to run multiple generators at once using compose files via ",(0,o.jsx)(n.code,{children:"eventum-compose"})," tool!"]}),"\n",(0,o.jsx)(n.p,{children:"Example compose config:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'generators:\n  winlog_auth:\n    config: winlog_auth.yml\n    time_mode: live\n    params: { "success_ratio": 0.92 }\n    settings: { "timezone": "Europe/Moscow" }\n\n  winlog_iam:\n    config: winlog_auth.yml\n    time_mode: live\n    params: { "new_accounts_count": 7 }\n    settings: { }\n'})}),"\n",(0,o.jsx)(n.p,{children:"and run it with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"eventum-compose -c winlog-generators.yml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Read more about Eventum Compose in the ",(0,o.jsx)(n.strong,{children:"Configuring"})," part."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);