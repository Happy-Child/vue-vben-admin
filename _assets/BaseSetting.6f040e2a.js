let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{de as t,a as s,F as a,X as i,h as o,d0 as r,d1 as d,i as n,o as m,j as p,bi as c,k as l,p as f}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import{s as j}from"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./RightOutlined.f897cf51.js";import"./types.0fb93fc3.js";import{U as u}from"./index.bf77790e.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./_baseFor.f4e5f03f.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.7d4fdf7c.js";import"./index.d6ea0011.js";import"./index.e243024e.js";import"./index.677e8b2a.js";import"./FileOutlined.ff537835.js";import{a as b}from"./index.05f15b52.js";import"./LoadingOutlined.443e49ec.js";import"./RightOutlined.be55439d.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import{_ as x}from"./header.0299ae16.js";import"./useAttrs.54875f54.js";import{s as g}from"./index.657fb116.js";import{u as h}from"./useForm.4a900a75.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var O=s({components:{BasicForm:j,CollapseContainer:b,Button:a,Upload:u,Icon:g},setup(){const{createMessage:e}=o(),[s,{setFieldsValue:a}]=h({labelWidth:120,schemas:_,showActionButtonGroup:!1});return i((async()=>{const e=await t.request({url:C.ACCOUNT_INFO,method:"GET"});a(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const v=c("data-v-c0c2b920");r("data-v-c0c2b920");const F={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=f("更换头像 "),T=f("更新基本信息");d();const U=v(((e,t,s,a,i,o)=>{const r=n("BasicForm"),d=n("a-col"),c=n("Icon"),f=n("Button"),j=n("Upload"),u=n("a-row"),b=n("CollapseContainer");return m(),p(b,{title:"基本设置",canExpan:!1},{default:v((()=>[l(u,{gutter:24},{default:v((()=>[l(d,{span:14},{default:v((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:v((()=>[l("div",F,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(j,{showUploadList:!1},{default:v((()=>[l(f,{type:"ghost",class:"ml-5"},{default:v((()=>[l(c,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(f,{type:"primary",onClick:e.handleSubmit},{default:v((()=>[T])),_:1},8,["onClick"])])),_:1})}));O.render=U,O.__scopeId="data-v-c0c2b920";export default O;