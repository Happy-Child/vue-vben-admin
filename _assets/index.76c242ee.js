let e=document.createElement("style");e.innerHTML=".demo[data-v-c13dcea4]{background:#fff}",document.head.appendChild(e);import{a as s,ds as a,dt as n,d0 as d,d1 as t,i as o,o as c,j as r,k as i,bi as m,p as u}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import{A as l}from"./index.d0df79f5.js";import"./index.d42c47fc.js";import f from"./CurrentPermissionMode.d546f5d1.js";var p=s({components:{Alert:l,CurrentPermissionMode:f},setup(){const{changeMenu:e}=n();return{RoleEnum:a,changeMenu:e}}});const g=m("data-v-c13dcea4");d("data-v-c13dcea4");const h={class:"p-4 m-4 demo"},M={class:"mt-4"},v=u(" 权限切换(请先切换权限模式为后台权限模式): "),j=u(" 获取用户id为1的菜单 "),k=u(" 获取用户id为2的菜单 ");t();const x=g(((e,s,a,n,d,t)=>{const m=o("Alert"),u=o("CurrentPermissionMode"),l=o("a-button"),f=o("a-button-group");return c(),r("div",h,[i(m,{message:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看","show-icon":""}),i(u),i(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),i("div",M,[v,i(f,null,{default:g((()=>[i(l,{onClick:s[1]||(s[1]=s=>e.changeMenu("1"))},{default:g((()=>[j])),_:1}),i(l,{onClick:s[2]||(s[2]=s=>e.changeMenu("2"))},{default:g((()=>[k])),_:1})])),_:1})])])}));p.render=x,p.__scopeId="data-v-c13dcea4";export default p;