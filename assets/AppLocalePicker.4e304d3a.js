import{_ as e}from"./Dropdown.be4507ac.js";import{d as a,aR as s,ae as t,i as o,u as n,c as l,av as r,bh as i,s as d,di as p,r as c,o as u,f as v,bv as f,g as m,t as x,h as g}from"./index.8ee268f5.js";import"./index.704d9bda.js";import"./RightOutlined.8408a911.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./isEqual.bd3c511a.js";import"./toInteger.f9a43c77.js";/* empty css              */import"./vendor.3b1829c7.js";var b=a({name:"AppLocalPicker",components:{Dropdown:e,Icon:s},props:{showText:t.bool.def(!0),reload:t.bool},setup(e){const a=o([]),{prefixCls:s}=n("app-locale-picker"),{localeList:t}=i(),{changeLocale:c,getLang:u}=p(),v=l((()=>{var e;const s=a.value[0];return s?null==(e=t.find((e=>e.event===s)))?void 0:e.text:""}));return r((()=>{a.value=[d(u)]})),{localeList:t,handleMenuEvent:function(s){var t;d(u)!==s.event&&(t=s.event,c(t),a.value=[t],e.reload&&location.reload())},selectedKeys:a,getLangText:v,prefixCls:s}}});const j=f("data-v-d721ff86"),L=j(((e,a,s,t,o,n)=>{const l=c("Icon"),r=c("Dropdown");return u(),v(r,{placement:"bottomCenter",trigger:["click"],dropMenuList:e.localeList,selectedKeys:e.selectedKeys,onMenuEvent:e.handleMenuEvent,overlayClassName:`${e.prefixCls}-overlay`},{default:j((()=>[m("span",{class:e.prefixCls},[m(l,{icon:"ion:language"}),e.showText?(u(),v("span",{key:0,class:`${e.prefixCls}__text`},x(e.getLangText),3)):g("",!0)],2)])),_:1},8,["dropMenuList","selectedKeys","onMenuEvent","overlayClassName"])}));b.render=L,b.__scopeId="data-v-d721ff86";export default b;
