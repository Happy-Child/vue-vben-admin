import{d as e,bP as i,g as t,h as s,o,i as r,w as d,j as n}from"./index.31a6bf2e.js";import{I as a}from"./index.e23ba3a4.js";import{_ as p}from"./index.5e157f19.js";import{a as m}from"./index.81c7e8d3.js";import{_ as l}from"./index.1656dc96.js";import{u as f}from"./useForm.9cf29718.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.0d9f3d80.js";import"./EyeOutlined.1bac4c18.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.2bbd1659.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./index.38622004.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";const j=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(a,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:p,CollapseContainer:m,PageWrapper:l,[a.name]:a},setup(){const{createMessage:e}=t(),[i,{setProps:s}]=f({labelWidth:120,schemas:j,actionColOptions:{span:24}});return{register:i,schemas:j,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});u.render=function(e,i,t,a,p,m){const l=s("a-input"),f=s("BasicForm"),j=s("CollapseContainer"),u=s("PageWrapper");return o(),r(u,{title:"自定义组件示例"},{default:d((()=>[n(j,{title:"自定义表单"},{default:d((()=>[n(f,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:i})=>[n(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
