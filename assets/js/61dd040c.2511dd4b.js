"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[3007],{1520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(4848),a=r(8453);r(3498),r(4444),r(1470),r(9365);const s={title:"\u901a\u9053",slug:"/basics/chan"},o=void 0,l={id:"go\u57fa\u7840/chan",title:"\u901a\u9053",description:"\u5728 Go \u4e2d\uff0c\u901a\u9053\uff08chan\uff09\u662f\u4e00\u79cd\u7c7b\u4f3c\u961f\u5217\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u7528\u4e8e\u4e0d\u540c Go \u534f\u7a0b\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u3002",source:"@site/docs/golang/40.go\u57fa\u7840/20.chan.mdx",sourceDirName:"40.go\u57fa\u7840",slug:"/basics/chan",permalink:"/orange-ang/docs/golang/basics/chan",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/40.go\u57fa\u7840/20.chan.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u901a\u9053",slug:"/basics/chan"},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/orange-ang/docs/golang/basics/map"},next:{title:"\u6d41\u7a0b\u63a7\u5236",permalink:"/orange-ang/docs/golang/basics/control-flow"}},i={},c=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:2},{value:"\u63a8\u9001",id:"\u63a8\u9001",level:3},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5728 Go \u4e2d\uff0c\u901a\u9053\uff08chan\uff09\u662f\u4e00\u79cd\u7c7b\u4f3c\u961f\u5217\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u7528\u4e8e\u4e0d\u540c Go \u534f\u7a0b\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u9053\u53ef\u4ee5\u5206\u4e3a\u65e0\u7f13\u51b2\u901a\u9053\u548c\u6709\u7f13\u51b2\u901a\u9053\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u65e0\u7f13\u51b2\u901a\u9053\u6765\u8bf4\uff0c\u5b83\u9700\u8981\u901a\u9053\u4e24\u7aef\u540c\u65f6\u8bfb\u53d6\u548c\u63a8\u9001\uff0c\u624d\u80fd\u8fdb\u884c\u901a\u4fe1\u3002\u5982\u679c\u53ea\u6709\u4e00\u7aef\u8bfb\u53d6\u6216\u8005\u63a8\u9001\uff0c\u90a3\u4e48\u5c06\u4f1a\u963b\u585e\u76f4\u81f3\u53e6\u4e00\u7aef\u6709\u534f\u7a0b\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u6709\u7f13\u5b58\u901a\u9053\u6765\u8bf4\uff0c\u5b83\u6709\u4e00\u5b9a\u7684\u7f13\u51b2\u533a\uff0c\u56e0\u6b64\u5b83\u652f\u6301\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u7684\u5355\u5411\u64cd\u4f5c\u3002\u6bd4\u5982\u63a8\u9001\uff0c\u53ef\u4ee5\u4e0d\u540c\u53e6\u4e00\u7aef\u5b9e\u65f6\u8bfb\u53d6\uff0c\u800c\u662f\u5c06\u6570\u636e\u653e\u5230\u7f13\u51b2\u533a\u4e2d\u3002\n\u5f53\u7f13\u51b2\u533a\u6ee1\u4e86\u7684\u65f6\u5019\uff0c\u6709\u7f13\u51b2\u901a\u9053\u8868\u73b0\u7684\u5c31\u50cf\u65e0\u7f13\u51b2\u901a\u9053\u4e00\u6837\u4e86\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(n.p,{children:"chan \u53ea\u80fd\u4f7f\u7528 make \u8fdb\u884c\u521d\u59cb\u5316\u3002\u5e76\u53ef\u4ee5\u901a\u8fc7 make \u6307\u5b9a\u662f\u5426\u6709\u7f13\u51b2\u533a\u4ee5\u53ca\u7f13\u51b2\u533a\u7684\u5927\u5c0f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="\u65e0\u7f13\u51b2\u901a\u9053"',children:"ch := make(chan int)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="\u6709\u7f13\u51b2\u901a\u9053"',children:"ch := make(chan int, 10)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u64cd\u4f5c",children:"\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Go \u4e2d\uff0c\u901a\u9053\u7684\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7\u5de6\u7bad\u5934\u5b9e\u73b0\u7684\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u63a8\u9001",children:"\u63a8\u9001"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"chan <- data"})," \u7684\u65b9\u5f0f\u5b9e\u73b0\u6570\u636e\u63a8\u9001\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="\u6709\u7f13\u51b2\u901a\u9053"',children:"ch := make(chan int, 10)\nch <- 1 // \u975e\u963b\u585e\nch <- 1 // \u975e\u963b\u585e\nch <- 1 // \u975e\u963b\u585e\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bfb\u53d6",children:"\u8bfb\u53d6"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"data := <- chan"})," \u7684\u65b9\u5f0f\u5b9e\u73b0\u6570\u636e\u8bfb\u53d6\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="\u6709\u7f13\u51b2\u901a\u9053"',children:"ch := make(chan int, 10)\nch <- 1 // \u975e\u963b\u585e\nch <- 1 // \u975e\u963b\u585e\nch <- 1 // \u975e\u963b\u585e\n\nv1 := <- ch\nv2 := <- ch\nv3 := <- ch\nfmt.Println(v1, v2, v3)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),a=r(4164),s=r(3104),o=r(6347),l=r(205),i=r(7485),c=r(1682),u=r(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:r,groupId:a}),[b,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=c??b;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function x(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),a=l[r].value;a!==t&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function y(e){const n=(0,p.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},4444:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=r(4848);function o(e){let{children:n,minHeight:r,url:o="http://localhost:3000",style:l,bodyStyle:i}=e;return(0,s.jsxs)("div",{className:a.browserWindow,style:{...l,minHeight:r},children:[(0,s.jsxs)("div",{className:a.browserWindowHeader,children:[(0,s.jsxs)("div",{className:a.buttons,children:[(0,s.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,t.A)(a.browserWindowAddressBar,"text--truncate"),children:o}),(0,s.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:a.bar}),(0,s.jsx)("span",{className:a.bar}),(0,s.jsx)("span",{className:a.bar})]})})]}),(0,s.jsx)("div",{className:a.browserWindowBody,style:i,children:n})]})}},3498:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(6540);const a={"image-bg":"image-bg_e0Zz",image:"image_FkF6",fullscreen:"fullscreen_Hs_n"};var s=r(4848);const o=e=>{let{src:n}=e;const r=(0,t.useRef)(null),[o,l]=(0,t.useState)(!1),i=()=>l(!o);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:o?`${a.imageBg} ${a.fullscreen}`:`${a.imageBg}`,onWheel:e=>{o&&i()},onClick:i}),(0,s.jsx)("img",{src:n,className:a.image,style:o?{transform:(()=>{if(r.current&&o){const e=r.current.getBoundingClientRect(),n=window.innerWidth/2-(e.left+e.right)/2,t=window.innerHeight/2-(e.top+e.bottom)/2,a=window.innerWidth/e.width,s=window.innerHeight/e.height;return`translate(${n}px, ${t}px) scale(${Math.min(a,s)-.1})`}return"none"})(),cursor:"zoom-out",zIndex:"9999"}:{},onClick:i,ref:r,alt:"Image"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);