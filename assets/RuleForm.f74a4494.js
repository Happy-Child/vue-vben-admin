import{_ as e}from"./index.5e157f19.js";import{a as i}from"./index.81c7e8d3.js";import{d as s,g as o,h as t,o as r,i as a,w as l,j as n,m as d}from"./index.31a6bf2e.js";import{_ as p}from"./index.1656dc96.js";import{u as m}from"./useForm.9cf29718.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./SearchOutlined.0d9f3d80.js";import"./EyeOutlined.1bac4c18.js";import"./index.2bbd1659.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./index.38622004.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,i)=>i?"1"===i?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var u=s({components:{BasicForm:e,CollapseContainer:i,PageWrapper:p},setup(){const{createMessage:e}=o(),[i,{validateFields:s,clearValidate:t,getFieldsValue:r,setFieldsValue:a}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:i,schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},getFormValues:function(){const i=r();e.success("values:"+JSON.stringify(i))},setFormValues:function(){a({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await s()}catch(e){}},resetValidate:async function(){t()}}}});const f={class:"mb-4"},j=d(" 手动校验表单 "),b=d(" 清空校验信息 "),x=d(" 获取表单值 "),g=d(" 设置表单值 ");u.render=function(e,i,s,o,d,p){const m=t("a-button"),c=t("BasicForm"),u=t("CollapseContainer"),v=t("PageWrapper");return r(),a(v,{title:"表单校验示例"},{default:l((()=>[n("div",f,[n(m,{onClick:e.validateForm,class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"]),n(m,{onClick:e.resetValidate,class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),n(m,{onClick:e.getFormValues,class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"]),n(m,{onClick:e.setFormValues,class:"mr-2"},{default:l((()=>[g])),_:1},8,["onClick"])]),n(u,{title:"表单校验"},{default:l((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
