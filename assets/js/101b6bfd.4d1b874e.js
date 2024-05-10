"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[6547],{4216:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=r(4848),s=r(8453),a=(r(3498),r(4444)),l=r(1470),i=r(9365);const o={title:"\u5feb\u901f\u5f00\u59cb",hide_title:!0,hide_table_of_contents:!1,slug:"/quick-start"},c=void 0,d={id:"\u5feb\u901f\u5f00\u59cb/index",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u6559\u7a0b\u57fa\u4e8edocker\u642d\u5efanginx\uff0c\u8bf7\u786e\u4fdddocker\u6b63\u786e\u5b89\u88c5~",source:"@site/docs/nginx/10.\u5feb\u901f\u5f00\u59cb/index.mdx",sourceDirName:"10.\u5feb\u901f\u5f00\u59cb",slug:"/quick-start",permalink:"/orange-ang/docs/nginx/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/nginx/10.\u5feb\u901f\u5f00\u59cb/index.mdx",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",hide_title:!0,hide_table_of_contents:!1,slug:"/quick-start"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u8a00",permalink:"/orange-ang/docs/nginx/"}},u={},h=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. \u542f\u52a8\u670d\u52a1",id:"1-\u542f\u52a8\u670d\u52a1",level:3},{value:"2. \u9a8c\u8bc1\u670d\u52a1",id:"2-\u9a8c\u8bc1\u670d\u52a1",level:3},{value:"\u81ea\u5b9a\u4e49\u670d\u52a1\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u670d\u52a1\u914d\u7f6e",level:2},{value:"1. \u51c6\u5907\u6587\u4ef6",id:"1-\u51c6\u5907\u6587\u4ef6",level:3},{value:"2. \u542f\u52a8\u670d\u52a1",id:"2-\u542f\u52a8\u670d\u52a1",level:3},{value:"3. \u9a8c\u8bc1\u670d\u52a1",id:"3-\u9a8c\u8bc1\u670d\u52a1",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"note",children:(0,t.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u57fa\u4e8edocker\u642d\u5efanginx\uff0c\u8bf7\u786e\u4fdddocker\u6b63\u786e\u5b89\u88c5~"})}),"\n",(0,t.jsx)(n.p,{children:"\u542f\u52a8 Nginx \u670d\u52a1\u540e\uff0c\u5b83\u5185\u90e8\u4f1a\u542f\u52a8\u4e00\u4e2a\u4e3b\u8fdb\u7a0b\u548c\u591a\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u5176\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e3b\u8fdb\u7a0b\uff1a\u8d1f\u8d23\u542f\u52a8\u3001\u505c\u6b62\u3001\u7ba1\u7406\u5b50\u8fdb\u7a0b\uff0c\u5e76\u63a5\u6536\u5916\u90e8\u4fe1\u53f7\uff0c\u5305\u62ec\u91cd\u8f7d\u914d\u7f6e\u3001\u670d\u52a1\u505c\u6b62\u7b49\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5b50\u8fdb\u7a0b\uff1a\u5904\u7406\u8fde\u63a5\u4e0e\u8bf7\u6c42\uff0c\u76f8\u4e92\u4e4b\u95f4\u72ec\u7acb\uff0c\u67d0\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u5f02\u5e38\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u5b50\u8fdb\u7a0b\u670d\u52a1\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u542f\u52a8\u670d\u52a1",children:"1. \u542f\u52a8\u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 docker \u4e00\u952e\u542f\u52a8 nginx \u670d\u52a1\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ docker run -it --rm -p 80:80 nginx\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0a\u8ff0\u6307\u4ee4\u4e2d\uff0c\u6211\u4eec\u542f\u52a8\u4e86 nginx \u670d\u52a1\uff0c\u5e76\u5bf9\u5916\u66b4\u9732\u4e86 8080 \u7aef\u53e3\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u672c\u5730 8080 \u7aef\u53e3\u6765\u9a8c\u8bc1 nginx \u53ef\u7528\u6027\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"2-\u9a8c\u8bc1\u670d\u52a1",children:"2. \u9a8c\u8bc1\u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u5730\u5740 ",(0,t.jsx)(n.a,{href:"#",children:"http://localhost/"})," \u6211\u4eec\u53ef\u4ee5\u770b\u5230 ",(0,t.jsx)(n.strong,{children:"Welcome yo ngixn"})," \u9875\u9762\u3002"]}),"\n",(0,t.jsx)(a.A,{url:"http://localhost/",children:(0,t.jsxs)("div",{align:"center",children:[(0,t.jsx)("h1",{children:"Welcome to nginx!"}),(0,t.jsx)("p",{children:"If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required."}),(0,t.jsxs)("p",{children:["For online documentation and support please refer to\n",(0,t.jsx)("a",{href:"http://nginx.org/",children:"nginx.org"}),". ",(0,t.jsx)("br",{}),"\nCommercial support is available at\n",(0,t.jsx)("a",{href:"http://nginx.com/",children:"nginx.com"}),"."]}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Thank you for using nginx."})})]})}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u670d\u52a1\u914d\u7f6e",children:"\u81ea\u5b9a\u4e49\u670d\u52a1\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5feb\u901f\u5f00\u59cb\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u9ed8\u8ba4\u7684nginx\u914d\u7f6e\u3002\u9ed8\u8ba4\u7684\u914d\u7f6e\u5185\u5bb9\u89c1\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="/etc/nginx/conf.d/default.conf"',children:"server {\n    listen       80;\n    server_name  localhost;\n\n    #access_log  /var/log/nginx/host.access.log  main;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    #error_page  404              /404.html;\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n    # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n    #\n    #location ~ \\.php$ {\n    #    proxy_pass   http://127.0.0.1;\n    #}\n\n    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n    #\n    #location ~ \\.php$ {\n    #    root           html;\n    #    fastcgi_pass   127.0.0.1:9000;\n    #    fastcgi_index  index.php;\n    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n    #    include        fastcgi_params;\n    #}\n\n    # deny access to .htaccess files, if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht {\n    #    deny  all;\n    #}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u5230",(0,t.jsx)(n.code,{children:"location"}),"\u5173\u952e\u5b57\uff0c\u5b83\u7528\u4e8e\u5b9a\u4e49\u8bf7\u6c42\u7684\u5339\u914d\u89c4\u5219\uff0c\u4ee5\u53ca\u5339\u914d\u4e4b\u540e\u7684\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u8282\u5c06\u81ea\u5b9a\u4e49\u4e00\u4e9b\u7b80\u5355\u5339\u914d\u89c4\u5219\uff0c\u5e76\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,t.jsx)(n.code,{children:"/index"})," \u65f6\u8fd4\u56de\u81ea\u5b9a\u4e49\u9759\u6001\u6587\u4ef6 index.html"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,t.jsx)(n.code,{children:"/hello/{name}"})," \u65f6\u8fd4\u56de hello XXX"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1-\u51c6\u5907\u6587\u4ef6",children:"1. \u51c6\u5907\u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5b9e\u73b0\u9700\u6c42\uff0c\u6211\u4eec\u9700\u8981\u51c6\u5907\u4e24\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"default.conf"}),"\uff1a\u8868\u793a nginx \u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"index.html"}),"\uff1a\u8868\u793a\u9759\u6001\u9875\u9762\u6587\u4ef6"]}),"\n"]}),"\n",(0,t.jsx)(a.A,{children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"apple",label:"/workspace/default.conf",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'server {\n    listen       80;\n    server_name  _;\n\n    # \u5339\u914d\u4ee5 /index \u5f00\u5934\u7684\u8bf7\u6c42\n    location /index {\n        # \u6307\u5b9a\u6839\u76ee\u5f55\n        alias  /workspace;\n        # \u6307\u5b9a\u9ed8\u8ba4\u8fd4\u56de\u7684\u6587\u4ef6\n        index  index.html;\n    }\n\n    # \u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6355\u83b7 URL \u4e2d\u7684 {name} \u53c2\u6570\n    location ~ /hello/(?<name>\\w+) {\n        # \u8bbe\u7f6e\u54cd\u5e94\u5934\n        add_header Content-Type text/plain;\n        # \u8fd4\u56de\u54cd\u5e94\n        return 200 "Hello $name";\n    }\n}\n'})})}),(0,t.jsx)(i.A,{value:"orange",label:"/workspace/index.html",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<h1>Welcome to Nginx!</h1>\n"})})})]})}),"\n",(0,t.jsx)(n.h3,{id:"2-\u542f\u52a8\u670d\u52a1",children:"2. \u542f\u52a8\u670d\u52a1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ docker run -it --rm -p 80:80 \\\n    -v /workspace/default.conf:/etc/nginx/conf.d/default.conf \\\n    -v /workspace/index.html:/workspace/index.html \\\n    nginx\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-\u9a8c\u8bc1\u670d\u52a1",children:"3. \u9a8c\u8bc1\u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbf\u95ee",(0,t.jsx)(n.code,{children:"http://localhost/index"})]}),"\n",(0,t.jsx)(a.A,{url:"http://localhost/index",children:(0,t.jsx)("h1",{children:"Welcome to nginx!"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbf\u95ee",(0,t.jsx)(n.code,{children:"http://localhost/hello/orange-ang"})]}),"\n",(0,t.jsx)(a.A,{url:"http://localhost/hello/orange-ang",children:(0,t.jsx)(n.p,{children:"hello orange-ang"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.admonition,{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u672c\u6587\u4f5c\u8005:"})," \u6a59\u5b50\u6602 ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:"\u7248\u6743\u58f0\u660e:"})," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),s=r(4164),a=r(3104),l=r(6347),i=r(205),o=r(7485),c=r(1682),d=r(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:r,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=c??g;return x({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),s=i[r].value;s!==t&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},4444:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var t=r(4164);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=r(4848);function l(e){let{children:n,minHeight:r,url:l="http://localhost:3000",style:i,bodyStyle:o}=e;return(0,a.jsxs)("div",{className:s.browserWindow,style:{...i,minHeight:r},children:[(0,a.jsxs)("div",{className:s.browserWindowHeader,children:[(0,a.jsxs)("div",{className:s.buttons,children:[(0,a.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,t.A)(s.browserWindowAddressBar,"text--truncate"),children:l}),(0,a.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar})]})})]}),(0,a.jsx)("div",{className:s.browserWindowBody,style:o,children:n})]})}},3498:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(6540);const s={"image-bg":"image-bg_e0Zz",image:"image_FkF6",fullscreen:"fullscreen_Hs_n"};var a=r(4848);const l=e=>{let{src:n}=e;const r=(0,t.useRef)(null),[l,i]=(0,t.useState)(!1),o=()=>i(!l);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:l?`${s.imageBg} ${s.fullscreen}`:`${s.imageBg}`,onWheel:e=>{l&&o()},onClick:o}),(0,a.jsx)("img",{src:n,className:s.image,style:l?{transform:(()=>{if(r.current&&l){const e=r.current.getBoundingClientRect(),n=window.innerWidth/2-(e.left+e.right)/2,t=window.innerHeight/2-(e.top+e.bottom)/2,s=window.innerWidth/e.width,a=window.innerHeight/e.height;return`translate(${n}px, ${t}px) scale(${Math.min(s,a)-.1})`}return"none"})(),cursor:"zoom-out",zIndex:"9999"}:{},onClick:o,ref:r,alt:"Image"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);