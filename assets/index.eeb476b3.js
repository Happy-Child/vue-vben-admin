import{d as e,r as t,o as i,f as r,bv as o,g as s}from"./index.98f65128.js";import{D as d}from"./index.3c5bbe6b.js";import{D as a}from"./index.62918289.js";import{_ as m}from"./index.344e5518.js";import{_ as n}from"./index.b3ac334d.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.3f63b14d.js";import{u as g}from"./useTable.cadadfe0.js";import"./vendor.3b1829c7.js";import"./index.4dd3726b.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.fb3d9df8.js";import"./index.b14ab26b.js";import"./domUtils.9825b29a.js";import"./_stringToArray.0643a12e.js";import"./RightOutlined.12d522bd.js";/* empty css              */import"./useTimeout.9702bb5d.js";import"./useScrollTo.173986be.js";import"./get.b875aea3.js";import"./index.4df340b9.js";import"./SearchOutlined.73b14c1c.js";import"./CheckOutlined.97dbe75d.js";import"./DownOutlined.6a53b2d7.js";import"./BasicForm.6e8339bb.js";import"./index.48e51512.js";import"./index.f6a53c24.js";import"./_baseIteratee.8199b287.js";import"./isEqual.b3fe022f.js";import"./_baseProperty.74f89655.js";import"./findIndex.dc0eb683.js";import"./toInteger.ef4b7cc6.js";import"./index.7ec07eb6.js";import"./index.f53810ec.js";import"./EyeOutlined.c8470b0f.js";import"./index.19c2029c.js";import"./index.c1df8a7e.js";import"./index.034ca1ec.js";import"./UpOutlined.1c6df201.js";import"./index.ada1ec45.js";import"./RedoOutlined.873f1270.js";import"./index.f0f59d2b.js";import"./EllipsisOutlined.8715adfc.js";import"./types.46cb97b2.js";import"./Tree.9691b963.js";import"./util.0a167aad.js";import"./useFormItem.7b2a5d72.js";import"./uuid.cf646836.js";import"./uniqBy.1b426d4d.js";import"./index.60e6cc60.js";import"./DeleteOutlined.43233e23.js";import"./index.60ee170c.js";import"./useModal.a56c9c6a.js";import"./useWindowSizeFn.1f12601f.js";import"./FullscreenOutlined.7d4e02d3.js";import"./Dropdown.491d1e24.js";import"./index.86e90c96.js";import"./LeftOutlined.cf19af62.js";import"./download.8503c962.js";import"./index.d99c5242.js";import"./DoubleLeftOutlined.5b41e558.js";import"./DoubleRightOutlined.d7e7affc.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.0ef3baa4.js";import"./CaretDownFilled.3f51d2d4.js";import"./useForm.1842293e.js";import"./useSortable.83f19663.js";import"./clickOutside.17e0ff5f.js";import"./useExpose.67be815c.js";import"./index.c40f04d9.js";import"./index.41adfa42.js";import"./usePageContext.9368e609.js";import"./ArrowLeftOutlined.fe401b97.js";import"./index.326d63e7.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:a,BasicTable:m,PageWrapper:n,[d.name]:d},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=o("data-v-ada482fc"),D=O(((e,o,d,a,m,n)=>{const p=t("Description"),c=t("a-divider"),j=t("BasicTable"),l=t("PageWrapper");return i(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=D,h.__scopeId="data-v-ada482fc";export default h;
