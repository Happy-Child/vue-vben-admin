import{_ as e,a as i}from"./useDrawer.f5b63d83.js";import{f as t}from"./BasicForm.4ee3e781.js";import{u as r}from"./useForm.2453984c.js";import{d as s,r as o,o as d,f as p,p as m,g as n,m as a}from"./index.8ee268f5.js";import"./index.a29c0c50.js";import"./ScrollContainer.9446e27c.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./RightOutlined.8408a911.js";/* empty css              */import"./useTimeout.72f9750e.js";import"./useScrollTo.da0b1c1d.js";import"./ArrowLeftOutlined.20117012.js";import"./isEqual.bd3c511a.js";import"./index.ace90ad4.js";import"./index.0c18e139.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./_baseIteratee.61382218.js";import"./get.0479aa65.js";import"./_baseProperty.74f89655.js";import"./findIndex.a12e0f15.js";import"./toInteger.f9a43c77.js";import"./index.0d0c93f8.js";import"./index.5cb73b71.js";import"./SearchOutlined.fadfdeec.js";import"./EyeOutlined.438e5550.js";import"./index.ed9f4e7d.js";import"./CheckOutlined.6e3ff980.js";import"./DownOutlined.e4764c63.js";import"./index.31a2b7d8.js";import"./index.5b69606c.js";import"./index.c62fa8ed.js";import"./UpOutlined.b53d5bc5.js";import"./index.b8699f3f.js";import"./RedoOutlined.db3025b9.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./Tree.bf2dd908.js";import"./util.0bced5d1.js";import"./useFormItem.8d3cf537.js";import"./uuid.8bfac6dc.js";import"./uniqBy.a0ccb3b6.js";import"./index.3886869f.js";import"./DeleteOutlined.ea4eefb6.js";import"./index.a92108e7.js";import"./useModal.e810cfd8.js";import"./useWindowSizeFn.4452f4f1.js";import"./FullscreenOutlined.fa6777c1.js";import"./index.8a231396.js";import"./Dropdown.be4507ac.js";import"./index.e5f2441c.js";import"./LeftOutlined.3e62adc3.js";import"./download.49d447d5.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=s({components:{BasicDrawer:e,BasicForm:t},setup(){const[e,{setFieldsValue:t}]=r({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((e=>{t({field2:e.data,field1:e.info})}));return{register:s,schemas:j,registerForm:e}}});c.render=function(e,i,t,r,s,j){const c=o("BasicForm"),l=o("BasicDrawer");return d(),p(l,a(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:m((()=>[n("div",null,[n(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;
