import{a as s,I as e,bw as o,dt as i,bv as n,i as r,o as t,j as a,k as d,w as m,p as c,n as l}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import{D as p}from"./index.d42c47fc.js";var u=s({name:"CurrentPermissionMode",components:{Divider:p},setup(){const s=e((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:s,PermissionModeEnum:o,togglePermissionMode:r}}});const M={class:"mt-2"},f=c(" 当前权限模式： "),g=c(" 切换权限模式 ");u.render=function(s,e,o,i,n,p){const u=r("a-button"),P=r("Divider");return t(),a("div",M,[f,d(u,{type:"link"},{default:m((()=>[c(l(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:m((()=>[g])),_:1},8,["onClick"]),d(P)])};export default u;