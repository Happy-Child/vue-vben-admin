import{a as e,M as s,aL as i,h as o,i as t,o as r,j as a,k as n,w as d}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import{s as p}from"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./RightOutlined.f897cf51.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.7d4fdf7c.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import{a as l}from"./index.05f15b52.js";import"./LoadingOutlined.443e49ec.js";import"./RightOutlined.be55439d.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import{u as m}from"./useForm.4a900a75.js";const u=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var c=e({components:{BasicForm:p,CollapseContainer:l},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:s,schemas:u,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const f={class:"m-4"};c.render=function(e,s,i,o,p,l){const m=t("a-input"),u=t("BasicForm"),c=t("CollapseContainer");return r(),a("div",f,[n(c,{title:"自定义表单"},{default:d((()=>[n(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:s})=>[n(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default c;