let e=document.createElement("style");e.innerHTML=".demo[data-v-1db28e9c]{background:#fff}",document.head.appendChild(e);import{a as s,g as t,ds as a,I as l,dt as o,d0 as r,d1 as u,i as n,bl as d,o as m,j as i,k as c,n as p,p as f,m as E,ap as R,bi as S}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import{A as T}from"./index.d0df79f5.js";import{D as y}from"./index.d42c47fc.js";import"./tsxHelper.906f93e2.js";import _ from"./CurrentPermissionMode.d546f5d1.js";import{s as v}from"./index.cc7a7bcc.js";var x=s({components:{Alert:T,CurrentPermissionMode:_,Divider:y,Authority:v},setup(){const{changeRole:e,hasPermission:s}=o();return{userStore:t,RoleEnum:a,isSuper:l((()=>t.getRoleListState.includes(a.SUPER))),isTest:l((()=>t.getRoleListState.includes(a.TEST))),changeRole:e,hasPermission:s}}});const P=S("data-v-1db28e9c");r("data-v-1db28e9c");const h={class:"demo p-4 m-4"},g=f(" 当前角色: "),b={class:"mt-4"},U=f(" 权限切换(请先切换权限模式为前端角色权限模式): "),j=f("组件方式判断权限(有需要可以自行全局注册)"),k=f("拥有super角色权限可见"),C=f("拥有test角色权限可见"),A=f("拥有[test,super]角色权限可见"),L=f("函数方式方式判断权限(适用于函数内部过滤)"),M=f(" 拥有super角色权限可见 "),D=f(" 拥有test角色权限可见 "),w=f(" 拥有[test,super]角色权限可见 "),H=f("指令方式方式判断权限(该方式不能动态修改权限.)"),I=f(" 拥有super角色权限可见 "),q=f(" 拥有test角色权限可见 "),z=f(" 拥有[test,super]角色权限可见 ");u();const B=P(((e,s,t,a,l,o)=>{const r=n("Alert"),u=n("CurrentPermissionMode"),S=n("a-button"),T=n("a-button-group"),y=n("Divider"),_=n("Authority"),v=d("auth");return m(),i("div",h,[c(r,{message:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口","show-icon":""}),c(u),c("p",null,[g,c("a",null,p(e.userStore.getRoleListState),1)]),c(r,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),c("div",b,[U,c(T,null,{default:P((()=>[c(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:P((()=>[f(p(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),c(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:P((()=>[f(p(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),c(y,null,{default:P((()=>[j])),_:1}),c(_,{value:e.RoleEnum.SUPER},{default:P((()=>[c(S,{type:"primary",class:"mx-4"},{default:P((()=>[k])),_:1})])),_:1},8,["value"]),c(_,{value:e.RoleEnum.TEST},{default:P((()=>[c(S,{color:"success",class:"mx-4"},{default:P((()=>[C])),_:1})])),_:1},8,["value"]),c(_,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:P((()=>[c(S,{color:"error",class:"mx-4"},{default:P((()=>[A])),_:1})])),_:1},8,["value"]),c(y,null,{default:P((()=>[L])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(m(),i(S,{key:0,type:"primary",class:"mx-4"},{default:P((()=>[M])),_:1})):E("v-if",!0),e.hasPermission(e.RoleEnum.TEST)?(m(),i(S,{key:1,color:"success",class:"mx-4"},{default:P((()=>[D])),_:1})):E("v-if",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(m(),i(S,{key:2,color:"error",class:"mx-4"},{default:P((()=>[w])),_:1})):E("v-if",!0),c(y,null,{default:P((()=>[H])),_:1}),R(c(S,{type:"primary",class:"mx-4"},{default:P((()=>[I])),_:1},512),[[v,e.RoleEnum.SUPER]]),R(c(S,{color:"success",class:"mx-4"},{default:P((()=>[q])),_:1},512),[[v,e.RoleEnum.TEST]]),R(c(S,{color:"error",class:"mx-4"},{default:P((()=>[z])),_:1},512),[[v,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])}));x.render=B,x.__scopeId="data-v-1db28e9c";export default x;