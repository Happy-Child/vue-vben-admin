import{d as e,dl as t,dm as i,r as s,o,f as a,g as r,bv as p,q as d}from"./index.98f65128.js";import{S as n}from"./index.4df340b9.js";import{I as m}from"./index.f53810ec.js";import{D as c}from"./index.3c5bbe6b.js";import{f as l}from"./BasicForm.6e8339bb.js";import{u}from"./useForm.1842293e.js";import{step1Schemas as j}from"./data.2505cb7f.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.73b14c1c.js";import"./CheckOutlined.97dbe75d.js";import"./DownOutlined.6a53b2d7.js";import"./EyeOutlined.c8470b0f.js";import"./index.48e51512.js";import"./index.f6a53c24.js";import"./responsiveObserve.c545f1cc.js";import"./_baseIteratee.8199b287.js";import"./isEqual.b3fe022f.js";import"./get.b875aea3.js";import"./_baseProperty.74f89655.js";import"./findIndex.dc0eb683.js";import"./toInteger.ef4b7cc6.js";import"./index.7ec07eb6.js";import"./index.19c2029c.js";import"./index.c1df8a7e.js";import"./index.034ca1ec.js";import"./UpOutlined.1c6df201.js";import"./index.ada1ec45.js";import"./RightOutlined.12d522bd.js";import"./RedoOutlined.873f1270.js";import"./index.f0f59d2b.js";import"./EllipsisOutlined.8715adfc.js";import"./types.46cb97b2.js";import"./Tree.9691b963.js";import"./util.0a167aad.js";import"./useFormItem.7b2a5d72.js";/* empty css              */import"./uuid.cf646836.js";import"./uniqBy.1b426d4d.js";import"./index.60e6cc60.js";import"./DeleteOutlined.43233e23.js";import"./index.60ee170c.js";import"./useModal.a56c9c6a.js";import"./useTimeout.9702bb5d.js";import"./useWindowSizeFn.1f12601f.js";import"./ScrollContainer.fb3d9df8.js";import"./index.b14ab26b.js";import"./domUtils.9825b29a.js";import"./_stringToArray.0643a12e.js";import"./useScrollTo.173986be.js";import"./FullscreenOutlined.7d4e02d3.js";import"./Dropdown.491d1e24.js";import"./index.86e90c96.js";import"./LeftOutlined.cf19af62.js";import"./download.8503c962.js";var f=e({components:{BasicForm:l,[n.name]:n,ASelectOption:n.Option,[m.name]:m,[m.Group.name]:m.Group,[c.name]:c},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=u({labelWidth:100,schemas:j,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=p("data-v-c22ef27a");t("data-v-c22ef27a");const v={class:"step1"},x={class:"step1-form"},O=d(" 支付宝 "),y=d(" 银联 "),g=r("h3",null,"说明",-1),h=r("h4",null,"转账到支付宝账户",-1),_=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),F=r("h4",null,"转账到银行卡",-1),w=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const B=b(((e,t,i,p,d,n)=>{const m=s("a-select-option"),c=s("a-select"),l=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return o(),a("div",v,[r("div",x,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(c,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[y])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(l,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),g,h,_,F,w])}));f.render=B,f.__scopeId="data-v-c22ef27a";export default f;
