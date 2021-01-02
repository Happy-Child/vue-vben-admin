let e=document.createElement("style");e.innerHTML=".high-form[data-v-0d2bde26]{padding-bottom:48px}",document.head.appendChild(e);import{aR as o,a as t,r as i,d0 as s,d1 as r,i as d,o as n,j as a,k as l,bi as p,p as m}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./useSortable.40ed20ac.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import{s as c}from"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./index.9c8fc8dd.js";import"./RightOutlined.f897cf51.js";import"./index.676d1c13.js";import"./types.0fb93fc3.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./_baseFor.f4e5f03f.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./LeftOutlined.0a6527a3.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.d42c47fc.js";import"./index.7d4fdf7c.js";import"./index.8e9f097d.js";import"./zh_CN.0242bd16.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import"./CaretDownFilled.708ae9b6.js";import"./index.05f15b52.js";import"./CheckOutlined.f283e048.js";import"./CloseOutlined.9f910fbc.js";import"./index.fb04c872.js";import"./FullscreenOutlined.be319401.js";import"./LeftOutlined.a260af09.js";import"./LoadingOutlined.443e49ec.js";import"./TableAction.39c6a9e7.js";import"./RightOutlined.be55439d.js";import"./SettingOutlined.9a31b847.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import{u as f}from"./useForm.4a900a75.js";import"./index.de57128c.js";import"./useWindowSizeFn.8c096a0b.js";import"./uuid.40269c00.js";import"./useExpose.31b978ca.js";import"./useTable.d16c38dc.js";import u from"./PersonTable.67ac6d8f.js";const b=o((()=>import("./PageFooter.7b8a14a5.js"))),j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],g=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}];var h=t({components:{BasicForm:c,PersonTable:u,PageFooter:b},setup(){const e=i(null),[o,{validate:t}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:r}]=f({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1});return{register:o,registerTask:s,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),r()])}catch(e){}},tableRef:e}}});const v=p("data-v-0d2bde26");s("data-v-0d2bde26");const T={class:"high-form"},q=m(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),O={class:"m-5"},_=m("提交");r();const F=v(((e,o,t,i,s,r)=>{const p=d("a-page-header"),m=d("BasicForm"),c=d("a-card"),f=d("PersonTable"),u=d("a-button"),b=d("PageFooter");return n(),a("div",T,[l(p,{title:"高级表单",ghost:!1},{default:v((()=>[q])),_:1}),l("div",O,[l(c,{title:"仓库管理",bordered:!1},{default:v((()=>[l(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[l(m,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[l(f,{ref:"tableRef"},null,512)])),_:1})]),l(b,null,{right:v((()=>[l(u,{type:"primary",onClick:e.submitAll},{default:v((()=>[_])),_:1},8,["onClick"])])),_:1})])}));h.render=F,h.__scopeId="data-v-0d2bde26";export default h;