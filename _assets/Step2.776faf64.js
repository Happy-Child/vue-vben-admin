let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,d0 as s,d1 as i,i as a,o,j as r,k as n,bi as d,p as m}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import{s as p}from"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./RightOutlined.f897cf51.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.7d4fdf7c.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import"./LoadingOutlined.443e49ec.js";import"./RightOutlined.be55439d.js";import"./tsxHelper.906f93e2.js";import"./index.020c2033.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import{u as c}from"./useForm.4a900a75.js";import{step2Schemas as l}from"./data.a7fb758d.js";var u=e({components:{BasicForm:p},emits:["next","prev"],setup(t,{emit:e}){const[s,{validate:i,setProps:a}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await i();a({submitButtonOptions:{loading:!0}}),setTimeout((()=>{a({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:s}}});const j=d("data-v-3e6a7e30");s("data-v-3e6a7e30");const f={class:"step2"},b=m(" ant-design@alipay.com "),x=m(" test@example.com "),g=m(" Vben "),O=m(" 500元 ");i();const h=j(((t,e,s,i,d,m)=>{const p=a("a-alert"),c=a("a-descriptions-item"),l=a("a-descriptions"),u=a("a-divider"),h=a("BasicForm");return o(),r("div",f,[n(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),n(l,{column:1,class:"mt-5"},{default:j((()=>[n(c,{label:"付款账户"},{default:j((()=>[b])),_:1}),n(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),n(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),n(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),n(u),n(h,{onRegister:t.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-3e6a7e30";export default u;