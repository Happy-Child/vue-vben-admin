import{f as e}from"./BasicForm.4ee3e781.js";import{u as o}from"./useForm.2453984c.js";import{d as t}from"./ScrollContainer.9446e27c.js";import{_ as i}from"./index.588fa705.js";import{d as s,r as p,o as l,f as n,p as r,g as a}from"./index.8ee268f5.js";import"./index.ace90ad4.js";import"./index.0c18e139.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./_baseIteratee.61382218.js";import"./isEqual.bd3c511a.js";import"./get.0479aa65.js";import"./_baseProperty.74f89655.js";import"./findIndex.a12e0f15.js";import"./toInteger.f9a43c77.js";import"./index.0d0c93f8.js";import"./index.5cb73b71.js";import"./SearchOutlined.fadfdeec.js";import"./EyeOutlined.438e5550.js";import"./index.ed9f4e7d.js";import"./CheckOutlined.6e3ff980.js";import"./DownOutlined.e4764c63.js";import"./index.31a2b7d8.js";import"./index.5b69606c.js";import"./index.c62fa8ed.js";import"./UpOutlined.b53d5bc5.js";import"./index.b8699f3f.js";import"./RightOutlined.8408a911.js";import"./RedoOutlined.db3025b9.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./Tree.bf2dd908.js";import"./util.0bced5d1.js";import"./useFormItem.8d3cf537.js";/* empty css              */import"./uuid.8bfac6dc.js";import"./uniqBy.a0ccb3b6.js";import"./index.3886869f.js";import"./DeleteOutlined.ea4eefb6.js";import"./index.a92108e7.js";import"./useModal.e810cfd8.js";import"./useTimeout.72f9750e.js";import"./useWindowSizeFn.4452f4f1.js";import"./FullscreenOutlined.fa6777c1.js";import"./index.8a231396.js";import"./Dropdown.be4507ac.js";import"./index.e5f2441c.js";import"./LeftOutlined.3e62adc3.js";import"./download.49d447d5.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./index.f462a389.js";import"./useScrollTo.da0b1c1d.js";import"./index.745441c2.js";import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";var d=s({components:{BasicForm:e,CollapseContainer:t,PageWrapper:i},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[t]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:t}}});d.render=function(e,o,t,i,s,d){const m=p("BasicForm"),c=p("CollapseContainer"),f=p("PageWrapper");return l(),n(f,{title:"可折叠表单示例"},{default:r((()=>[a(c,{title:"基础收缩示例"},{default:r((()=>[a(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(c,{title:"超过3行自动收起",class:"mt-4"},{default:r((()=>[a(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;
