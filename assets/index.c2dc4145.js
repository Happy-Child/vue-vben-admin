import{cW as e,b as i,d as s,g as o,h as t,o as r,i as a,w as d,j as n}from"./index.31a6bf2e.js";import{A as p}from"./index.ca43b57f.js";import{h as m,_ as j}from"./index.5e157f19.js";import{_ as l}from"./index.1656dc96.js";import{u as f}from"./useForm.9cf29718.js";import"./vendor.3b1829c7.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./SearchOutlined.0d9f3d80.js";import"./EyeOutlined.1bac4c18.js";import"./index.2bbd1659.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";const{uploadUrl:c=""}=i();function u(i,s){return e.uploadFile({url:c,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:u}}];var x=s({components:{BasicUpload:m,BasicForm:j,PageWrapper:l,[p.name]:p},setup(){const{createMessage:e}=o(),[i]=f({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:u,register:i}}});x.render=function(e,i,s,o,p,m){const j=t("a-alert"),l=t("BasicUpload"),f=t("BasicForm"),c=t("PageWrapper");return r(),a(c,{title:"上传组件示例"},{default:d((()=>[n(j,{message:"基础示例"}),n(l,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),n(j,{message:"嵌入表单,加入表单校验"}),n(f,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;
