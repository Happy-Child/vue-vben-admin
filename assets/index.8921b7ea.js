import{f as e}from"./BasicForm.4ee3e781.js";import{u as o}from"./useForm.2453984c.js";import{d as t,n as i,r,o as s,f as n,bv as p,g as a}from"./index.8ee268f5.js";import{_ as l}from"./index.588fa705.js";import"./index.ace90ad4.js";import"./index.0c18e139.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./_baseIteratee.61382218.js";import"./isEqual.bd3c511a.js";import"./get.0479aa65.js";import"./_baseProperty.74f89655.js";import"./findIndex.a12e0f15.js";import"./toInteger.f9a43c77.js";import"./index.0d0c93f8.js";import"./index.5cb73b71.js";import"./SearchOutlined.fadfdeec.js";import"./EyeOutlined.438e5550.js";import"./index.ed9f4e7d.js";import"./CheckOutlined.6e3ff980.js";import"./DownOutlined.e4764c63.js";import"./index.31a2b7d8.js";import"./index.5b69606c.js";import"./index.c62fa8ed.js";import"./UpOutlined.b53d5bc5.js";import"./index.b8699f3f.js";import"./RightOutlined.8408a911.js";import"./RedoOutlined.db3025b9.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./Tree.bf2dd908.js";import"./util.0bced5d1.js";import"./useFormItem.8d3cf537.js";/* empty css              */import"./uuid.8bfac6dc.js";import"./uniqBy.a0ccb3b6.js";import"./index.3886869f.js";import"./DeleteOutlined.ea4eefb6.js";import"./index.a92108e7.js";import"./useModal.e810cfd8.js";import"./useTimeout.72f9750e.js";import"./useWindowSizeFn.4452f4f1.js";import"./ScrollContainer.9446e27c.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./useScrollTo.da0b1c1d.js";import"./FullscreenOutlined.fa6777c1.js";import"./index.8a231396.js";import"./Dropdown.be4507ac.js";import"./index.e5f2441c.js";import"./LeftOutlined.3e62adc3.js";import"./download.49d447d5.js";import"./index.745441c2.js";import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:l},setup(){const{createMessage:e}=i(),[t,{validate:r,setProps:s}]=o({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await r(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}}});return{register:t}}});const c=p("data-v-5cbaa0f1"),u=c(((e,o,t,i,p,l)=>{const d=r("BasicForm"),m=r("PageWrapper");return s(),n(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[a(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;
