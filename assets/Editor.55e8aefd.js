import{_ as e}from"./index.5e157f19.js";import{a as i}from"./index.81c7e8d3.js";import{d as t,bP as s,g as r,h as o,o as d,i as a,w as n,j as m}from"./index.31a6bf2e.js";import{M as p}from"./index.6f6ab84c.js";import{_ as l}from"./index.1656dc96.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./SearchOutlined.0d9f3d80.js";import"./EyeOutlined.1bac4c18.js";import"./index.2bbd1659.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./index.38622004.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";const j=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>s(p,{value:e[i],onChange:t=>{e[i]=t}})}];var f=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const{createMessage:e}=r();return{schemas:j,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,t,s,r,p){const l=o("BasicForm"),j=o("CollapseContainer"),f=o("PageWrapper");return d(),a(f,{title:"MarkDown组件嵌入Form示例"},{default:n((()=>[m(j,{title:"MarkDown表单"},{default:n((()=>[m(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
