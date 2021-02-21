import{cj as e,b as i,d as s,n as o,r,o as t,f as a,p,g as d}from"./index.8ee268f5.js";import{A as n}from"./index.a92108e7.js";import{h as m,f as j}from"./BasicForm.4ee3e781.js";import{u as l}from"./useForm.2453984c.js";import{_ as c}from"./index.588fa705.js";import"./vendor.3b1829c7.js";import"./index.ace90ad4.js";import"./index.0c18e139.js";import"./responsiveObserve.c545f1cc.js";import"./_baseIteratee.61382218.js";import"./isEqual.bd3c511a.js";import"./get.0479aa65.js";import"./_baseProperty.74f89655.js";import"./findIndex.a12e0f15.js";import"./toInteger.f9a43c77.js";import"./index.0d0c93f8.js";import"./index.5cb73b71.js";import"./SearchOutlined.fadfdeec.js";import"./EyeOutlined.438e5550.js";import"./index.ed9f4e7d.js";import"./CheckOutlined.6e3ff980.js";import"./DownOutlined.e4764c63.js";import"./index.31a2b7d8.js";import"./index.5b69606c.js";import"./index.c62fa8ed.js";import"./UpOutlined.b53d5bc5.js";import"./index.b8699f3f.js";import"./RightOutlined.8408a911.js";import"./RedoOutlined.db3025b9.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./Tree.bf2dd908.js";import"./util.0bced5d1.js";import"./useFormItem.8d3cf537.js";/* empty css              */import"./uuid.8bfac6dc.js";import"./uniqBy.a0ccb3b6.js";import"./index.3886869f.js";import"./DeleteOutlined.ea4eefb6.js";import"./useModal.e810cfd8.js";import"./useTimeout.72f9750e.js";import"./useWindowSizeFn.4452f4f1.js";import"./ScrollContainer.9446e27c.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./useScrollTo.da0b1c1d.js";import"./FullscreenOutlined.fa6777c1.js";import"./index.8a231396.js";import"./Dropdown.be4507ac.js";import"./index.e5f2441c.js";import"./LeftOutlined.3e62adc3.js";import"./download.49d447d5.js";import"./index.745441c2.js";import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";const{uploadUrl:f=""}=i();function u(i,s){return e.uploadFile({url:f,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:u}}];var x=s({components:{BasicUpload:m,BasicForm:j,PageWrapper:c,[n.name]:n},setup(){const{createMessage:e}=o(),[i]=l({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:u,register:i}}});x.render=function(e,i,s,o,n,m){const j=r("a-alert"),l=r("BasicUpload"),c=r("BasicForm"),f=r("PageWrapper");return t(),a(f,{title:"上传组件示例"},{default:p((()=>[d(j,{message:"基础示例"}),d(l,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),d(j,{message:"嵌入表单,加入表单校验"}),d(c,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;
