"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[8312],{4177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=r(4848),t=r(8453);r(3498),r(4444),r(1470),r(9365);const s={title:"\u5207\u7247",slug:"/basics/slice"},l=void 0,i={id:"go\u57fa\u7840/\u5207\u7247",title:"\u5207\u7247",description:"\u5728 Go \u4e2d\uff0c\u5207\u7247\uff08slice\uff09\u662f\u4e00\u79cd\u52a8\u6001\u6570\u7ec4\uff0c\u5176\u957f\u5ea6\u5927\u5c0f\u53ef\u4ee5\u52a8\u6001\u53d8\u5316\uff0c\u5f53\u5207\u7247\u7684\u957f\u5ea6\u8d85\u51fa\u4e86\u5176\u5bb9\u91cf\u65f6\uff0c\u5207\u7247\u4f1a\u81ea\u52a8\u6269\u5bb9\u3002\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5bf9\u5207\u7247\u8fdb\u884c\u8ffd\u52a0\u3001\u622a\u53d6\u7b49\u64cd\u4f5c\u3002",source:"@site/docs/golang/40.go\u57fa\u7840/10.\u5207\u7247.mdx",sourceDirName:"40.go\u57fa\u7840",slug:"/basics/slice",permalink:"/orange-ang/docs/golang/basics/slice",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/40.go\u57fa\u7840/10.\u5207\u7247.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5207\u7247",slug:"/basics/slice"},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u4e0e\u57fa\u7840\u7c7b\u578b",permalink:"/orange-ang/docs/golang/basics/variable-and-data-type"},next:{title:"Map",permalink:"/orange-ang/docs/golang/basics/map"}},c={},o=[{value:"\u5207\u7247\u521d\u59cb\u5316",id:"\u5207\u7247\u521d\u59cb\u5316",level:2},{value:"\u76f4\u63a5\u58f0\u660e",id:"\u76f4\u63a5\u58f0\u660e",level:3},{value:"make",id:"make",level:3},{value:"new\u4e0emake\u533a\u522b",id:"new\u4e0emake\u533a\u522b",level:3},{value:"\u5207\u7247\u64cd\u4f5c",id:"\u5207\u7247\u64cd\u4f5c",level:2},{value:"\u4e0b\u6807",id:"\u4e0b\u6807",level:3},{value:"\u8ffd\u52a0",id:"\u8ffd\u52a0",level:3},{value:"\u622a\u53d6",id:"\u622a\u53d6",level:3},{value:"\u904d\u5386",id:"\u904d\u5386",level:3},{value:"\u8fdb\u9636-\u5207\u7247\u6269\u5bb9\u539f\u7406",id:"\u8fdb\u9636-\u5207\u7247\u6269\u5bb9\u539f\u7406",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u5728 Go \u4e2d\uff0c\u5207\u7247\uff08slice\uff09\u662f\u4e00\u79cd\u52a8\u6001\u6570\u7ec4\uff0c\u5176\u957f\u5ea6\u5927\u5c0f\u53ef\u4ee5\u52a8\u6001\u53d8\u5316\uff0c\u5f53\u5207\u7247\u7684\u957f\u5ea6\u8d85\u51fa\u4e86\u5176\u5bb9\u91cf\u65f6\uff0c\u5207\u7247\u4f1a\u81ea\u52a8\u6269\u5bb9\u3002\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5bf9\u5207\u7247\u8fdb\u884c\u8ffd\u52a0\u3001\u622a\u53d6\u7b49\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u5207\u7247\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'var strSlice  = []string{"Alice", "Bob", "Carry", "Dada"}\nintSlice := []int{10, 11, 12, 13, 14, 15, 16, 17, 18, 19}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u521d\u59cb\u5316\u4e86",(0,a.jsx)(n.code,{children:"strSlice"}),"\u3001",(0,a.jsx)(n.code,{children:"intSlice"}),"\u4e24\u4e2a\u5207\u7247\u3002\uff08\u8fd9\u91cc\u5206\u522b\u4f7f\u7528\u4e86",(0,a.jsx)(n.code,{children:"var"}),"\u548c\u7b80\u77ed\u58f0\u660e\u4e24\u79cd\u65b9\u5f0f\u3002\uff09"]}),"\n",(0,a.jsxs)(n.p,{children:["\u9664\u4e86\u4e0a\u8ff0\u8fd9\u79cd\u76f4\u63a5\u58f0\u660e\u7684\u65b9\u5f0f\u4e4b\u5916\uff0c\u5207\u7247\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(n.strong,{children:"make"}),"\u3001",(0,a.jsx)(n.strong,{children:"new"}),"\u7684\u65b9\u5f0f\u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5927\u591a\u6570\u573a\u666f\u4e0b\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u58f0\u660e\u4f7f\u7528\uff0c\u6709\u4e9b\u7279\u6b8a\u4f18\u5316\u7684\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(n.code,{children:"make"}),"\u8fdb\u884c\u521d\u59cb\u5316\uff0c",(0,a.jsx)(n.code,{children:"new"}),"\u4e00\u822c\u4e0d\u7528\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5207\u7247\u521d\u59cb\u5316",children:"\u5207\u7247\u521d\u59cb\u5316"}),"\n",(0,a.jsx)(n.h3,{id:"\u76f4\u63a5\u58f0\u660e",children:"\u76f4\u63a5\u58f0\u660e"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 Go \u4e2d\uff0c\u5207\u7247\u7684\u57fa\u672c\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"[]\u4e2d\u62ec\u53f7 + \u6570\u636e\u7c7b\u578b + {}\u5927\u62ec\u53f7\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5207\u7247\u7ed3\u6784\u8f83\u4e3a\u7b80\u5355\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u58f0\u660e\u4f7f\u7528\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"intSlice := []int{1, 2, 3}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"make",children:"make"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c\u5207\u7247\u62e5\u6709",(0,a.jsx)(n.strong,{children:"\u957f\u5ea6"}),"\u548c",(0,a.jsx)(n.strong,{children:"\u5bb9\u91cf"}),"\u4e24\u4e2a\u91cd\u8981\u5c5e\u6027\u3002\u5176\u4e2d\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u957f\u5ea6\uff1a\u8868\u793a\u5f53\u524d\u5207\u7247\u7684\u5b9e\u9645\u957f\u5ea6\u3002\u53ef\u4ee5\u901a\u8fc7\u5185\u7f6e\u51fd\u6570",(0,a.jsx)(n.code,{children:"len"}),"\u67e5\u770b\u5207\u7247\u5b9e\u9645\u957f\u5ea6\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5bb9\u91cf\uff1a\u8868\u793a\u5f53\u524d\u5207\u7247\u7684\u6700\u5927\u957f\u5ea6\u3002\u53ef\u4ee5\u901a\u8fc7\u5185\u7f6e\u51fd\u6570",(0,a.jsx)(n.code,{children:"cap"}),"\u67e5\u770b\u5207\u7247\u5b9e\u9645\u5bb9\u91cf\u3002\u5f53\u5207\u7247\u957f\u5ea6\u8fbe\u5230\u6700\u5927\u5bb9\u91cf\u65f6\uff0c\u7ee7\u7eed\u5f80\u5207\u7247\u8ffd\u52a0\u5143\u7d20\u5219\u4f1a\u89e6\u53d1\u6269\u5bb9\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"intSlice := []int{1, 2, 3}\nfmt.Println(len(intSlice), cap(intSlice)) // 3 3\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e0a\u8ff0\u5207\u7247\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u7684\u63a8\u65ad\u8be5\u5207\u7247\u957f\u5ea6\u4e3a3\u3002\u90a3\u5207\u7247\u7684\u5bb9\u91cf\u662f\u591a\u5c11\u5462\uff1f"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9\u4e8e\u76f4\u63a5\u58f0\u660e\u7684\u5207\u7247\u800c\u8a00\uff0c\u5207\u7247\u957f\u5ea6\u548c\u5bb9\u91cf\u5728\u58f0\u660e\u65f6\u5c31\u786e\u5b9a\uff0c\u5e76\u4e14\u662f\u76f8\u7b49\u7684\u3002\u56e0\u6b64\u4e0a\u8ff0\u5207\u7247\u7684\u957f\u5ea6\u548c\u5bb9\u91cf\u90fd\u662f3\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c\u63d0\u4f9b\u5185\u7f6e\u51fd\u6570",(0,a.jsx)(n.code,{children:"make"}),"\u6765\u521d\u59cb\u5316\u5207\u7247\u3002make\u7684\u57fa\u672c\u7ed3\u6784\u5982\u4e0b"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"make([]int, \u957f\u5ea6\u503c, \u5bb9\u91cf\u503c)\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528make\u521d\u59cb\u5316\u5207\u7247\u65f6\u9700\u8981\u6307\u5b9a\u5207\u7247\u7c7b\u578b\uff0c\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e24\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u786e\u8ba4\u5207\u7247\u7684\u957f\u5ea6\u548c\u5bb9\u91cf\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u521d\u59cb\u5316\u4e0d\u540c\u7684\u957f\u5ea6\u548c\u5bb9\u91cf\uff1f\u76f4\u63a5\u4f7f\u7528\u7b80\u77ed\u58f0\u660e\u4e0d\u597d\u5417\uff1f"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u5927\u591a\u6570\u65f6\u5019\u786e\u5b9e\u5982\u5b9e\uff0c\u4f46\u662f\u5728\u8ba1\u7b97\u673a\u4e2d\uff0c\u9884\u5148\u5206\u914d\u8d44\u6e90\u4f1a\u6bd4\u4e34\u65f6\u5206\u914d\u8d44\u6e90\u66f4\u9ad8\u6548\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5df2\u77e5\u67091\u4e07\u4e2a\u5143\u7d20\u3002\u90a3\u4e48\u76f4\u63a5\u521d\u59cb\u5316\u5bb9\u91cf\u4e3a1\u4e07\uff0c\u5c31\u53ef\u4ee5\u786e\u4fdd\u5207\u7247\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u89e6\u53d1\u6269\u5bb9\u3002\u76f8\u53cd\uff0c\u5982\u679c\u8ba9\u5207\u7247\u4ece0\u5f00\u59cb\u4f7f\u7528\uff0c\u90a3\u4e48\u5728\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u89e6\u53d1\u591a\u6b21\u6269\u5bb9\uff0c\u8fdb\u800c\u5f71\u54cd\u7a0b\u5e8f\u6548\u7387\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"new\u4e0emake\u533a\u522b",children:"new\u4e0emake\u533a\u522b"}),"\n",(0,a.jsx)(n.p,{children:"\u7565"}),"\n",(0,a.jsx)(n.h2,{id:"\u5207\u7247\u64cd\u4f5c",children:"\u5207\u7247\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.h3,{id:"\u4e0b\u6807",children:"\u4e0b\u6807"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u6807\u53ef\u4ee5\u5728\u5207\u7247\u4e2d\u552f\u4e00\u6307\u5b9a\u4e00\u4e2a\u5143\u7d20\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"age := []int{10, 11, 12, 13}\nindex := 0\n// \u8bfb\u53d6\nindexValue := age[index]\nfmt.Println(indexValue)\n// \u66f4\u65b0\nage[0] = 123 // \u6b64\u65f6\u503c\u53d8\u4e3a {123, 13, 15, 11}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u4e0b\u6807\u83b7\u53d6\u6307\u5b9a\u4f4d\u7f6e\u7684\u503c\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u867d\u7136\u5207\u7247\u7684\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u5728\u4f7f\u7528\u5207\u7247\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u7279\u522b\u6ce8\u610f",(0,a.jsx)(n.strong,{children:"\u4e0b\u6807\u8d8a\u754c\u95ee\u9898"}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u6807\u8d8a\u754c\u5373\u5f53\u8bbf\u95ee\u7684\u4e0b\u6807\u5927\u4e8e\u7b49\u4e8e\u5207\u7247\u957f\u5ea6\u7684\u65f6\u5019\uff0c\u7a0b\u5e8f\u4f1apanic\uff08\u5d29\u6e83\uff09\u3002\u4f60\u53ef\u80fd\u4f1a\u597d\u5947\u4e3a\u4ec0\u4e48\u7b49\u4e8e\u5207\u7247\u957f\u5ea6\u7684\u65f6\u5019\u4e5f\u4f1apanic\u5462\uff1f\u56e0\u4e3a\u5207\u7247\u7684\u4e0b\u6807\u662f\u4ece0\u5f00\u59cb\u8ba1\u7b97\u7684\uff0c\u56e0\u6b64\u6700\u5927\u4e0b\u6807\u662f\u5b9e\u9645\u957f\u5ea6\u51cf\u4e00\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"age := []int{10, 11, 12, 13}\nage[3] // \u8f93\u51fa11\nage[4] // \u4e0b\u6807\u8d8a\u754c\uff0c\u7a0b\u5e8fpanic\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8ffd\u52a0",children:"\u8ffd\u52a0"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528",(0,a.jsx)(n.code,{children:"append"}),"\u53ef\u4ee5\u5728\u5207\u7247\u4e2d\u8ffd\u52a0\u5143\u7d20\u3002\u4f7f\u7528\u7684\u65b9\u5f0f\u4e3a",(0,a.jsx)(n.code,{children:"append(\u539f\u5207\u7247, \u5143\u7d201, \u5143\u7d202...)"}),"\uff0c\u7136\u540e\u8fd4\u56de\u65b0\u7684\u5207\u7247\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"age := []int{10, 11, 12, 13}\nage = append(age, 123, 123)\nfmt.Println(age) // {12, 13, 15, 11, 123, 123}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u622a\u53d6",children:"\u622a\u53d6"}),"\n",(0,a.jsx)(n.p,{children:"\u622a\u53d6\u662f\u5207\u7247\u7684\u7279\u8272\u529f\u80fd\uff0c\u5b83\u652f\u6301\u5728\u4e00\u4e2a\u5207\u7247\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u8fdb\u884c\u88c1\u526a\u622a\u65ad\uff0c\u4ece\u800c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5207\u7247\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u622a\u53d6\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u4e0b\u6807\u8fdb\u884c\u622a\u53d6\u7684\u3002\u683c\u5f0f\u4e3a",(0,a.jsx)(n.code,{children:"[\u8d77\u59cb\u4e0b\u6807(\u5305\u542b):\u7ed3\u675f\u4e0b\u6807(\u4e0d\u5305\u542b):\u5bb9\u91cf]"}),"\uff0c\u5176\u4e2d\u9700\u8981\u6ce8\u610f\u8d77\u59cb\u4e0b\u6807\u548c\u7ed3\u675f\u4e0b\u6807\u4e4b\u95f4\u7684\u5305\u542b\u533a\u522b\uff0c\u6b64\u5916\u8fd8\u6709\u7b2c\u4e09\u4e2a\u53c2\u6570\u5bb9\u91cf\uff0c\u8fd9\u4f1a\u5728\u6559\u7a0b\u5e95\u90e8\u7684\u8fdb\u9636\u4e2d\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u6682\u65f6\u4e0d\u5173\u6ce8\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"age := []int{10, 11, 12, 13}\narr1 := age[0:2] // {12, 13}\narr2 := age[1:3] // {13, 13}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u904d\u5386",children:"\u904d\u5386"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'for index, name := range home {\n    fmt.Printf("\u5e8f\u53f7\uff1a%d/\u59d3\u540d\uff1a%s", index, name)\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u8fdb\u9636-\u5207\u7247\u6269\u5bb9\u539f\u7406",children:"\u8fdb\u9636-\u5207\u7247\u6269\u5bb9\u539f\u7406"}),"\n",(0,a.jsx)(n.p,{children:"\u5207\u7247\u5bb9\u91cf\u5c0f\u4e8e 1024 \u76f4\u63a5\u7ffb\u500d\uff0c\u5927\u4e8e 1024 \u5219\u6269\u5bb9 1/4\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="src/runtime/slice.go"',children:"func growslice(et *_type, old slice, cap int) slice {\n    ...\n\tnewcap = old.cap\n\tdoublecap := newcap + newcap\n\tif cap > doublecap {\n\t\tnewcap = cap\n\t} else {\n\t\tif old.cap < 1024 { // \u5c0f\u4e8e 1024 \u76f4\u63a5\u7ffb\u500d\n\t\t\tnewcap = doublecap\n\t\t} else {\n\t\t\tfor 0 < newcap && newcap < cap { // \u5927\u4e8e 1024 \u5219\u6269\u5bb9 1/4\n\t\t\t\tnewcap += newcap / 4\n\t\t\t}\n\t\t\tif newcap <= 0 {\n\t\t\t\tnewcap = cap\n\t\t\t}\n\t\t}\n\t}\n\t...\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var a=r(4164);const t={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var a=r(6540),t=r(4164),s=r(3104),l=r(6347),i=r(205),c=r(7485),o=r(1682),d=r(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,u]=g({queryString:r,groupId:t}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=o??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function f(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),t=i[r].value;t!==a&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},4444:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var a=r(4164);const t={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=r(4848);function l(e){let{children:n,minHeight:r,url:l="http://localhost:3000",style:i,bodyStyle:c}=e;return(0,s.jsxs)("div",{className:t.browserWindow,style:{...i,minHeight:r},children:[(0,s.jsxs)("div",{className:t.browserWindowHeader,children:[(0,s.jsxs)("div",{className:t.buttons,children:[(0,s.jsx)("span",{className:t.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:t.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:t.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,a.A)(t.browserWindowAddressBar,"text--truncate"),children:l}),(0,s.jsx)("div",{className:t.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:t.bar}),(0,s.jsx)("span",{className:t.bar}),(0,s.jsx)("span",{className:t.bar})]})})]}),(0,s.jsx)("div",{className:t.browserWindowBody,style:c,children:n})]})}},3498:(e,n,r)=>{r.d(n,{A:()=>l});var a=r(6540);const t={"image-bg":"image-bg_e0Zz",image:"image_FkF6",fullscreen:"fullscreen_Hs_n"};var s=r(4848);const l=e=>{let{src:n}=e;const r=(0,a.useRef)(null),[l,i]=(0,a.useState)(!1),c=()=>i(!l);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:l?`${t.imageBg} ${t.fullscreen}`:`${t.imageBg}`,onWheel:e=>{l&&c()},onClick:c}),(0,s.jsx)("img",{src:n,className:t.image,style:l?{transform:(()=>{if(r.current&&l){const e=r.current.getBoundingClientRect(),n=window.innerWidth/2-(e.left+e.right)/2,a=window.innerHeight/2-(e.top+e.bottom)/2,t=window.innerWidth/e.width,s=window.innerHeight/e.height;return`translate(${n}px, ${a}px) scale(${Math.min(t,s)-.1})`}return"none"})(),cursor:"zoom-out",zIndex:"9999"}:{},onClick:c,ref:r,alt:"Image"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var a=r(6540);const t={},s=a.createContext(t);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);