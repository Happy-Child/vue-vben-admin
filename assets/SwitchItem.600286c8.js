import{d as e,aK as t,u as i,K as s,h as a,o as d,i as n,j as o,l as r,a7 as l,bw as p}from"./index.31a6bf2e.js";import{S as c}from"./index.02b72559.js";import{b as m}from"./index.11f65cac.js";import"./vendor.3b1829c7.js";import"./index.5db0d006.js";import"./index.39de9779.js";import"./index.13f3ec4a.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./RightOutlined.98400bb6.js";/* empty css              */import"./useTimeout.d1efb3cd.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./ArrowLeftOutlined.74abacd3.js";import"./isEqual.fe28526e.js";import"./useHeaderSetting.9124fbba.js";import"./SettingOutlined.192ef0e3.js";var f=e({name:"SwitchItem",components:{Switch:c},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:a}=t("setting-switch-item"),{t:d}=i();return{prefixCls:a,t:d,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const u=p("data-v-3a858942")(((e,t,i,s,p,c)=>{const m=a("Switch");return d(),n("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(m,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-3a858942";export default f;
