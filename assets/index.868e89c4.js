import{d as e,h as i,o as t,i as r,bw as o,j as s}from"./index.31a6bf2e.js";import{D as d}from"./index.5db0d006.js";import{D as a}from"./index.78e083d3.js";import{_ as m}from"./index.24079ee8.js";import{_ as n}from"./index.1656dc96.js";import{refundSchema as p,refundData as j,personSchema as c,personData as l,refundTableData as f,refundTableSchema as u,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.e9d1dd86.js";import{u as g}from"./useTable.a4fd8e2b.js";import"./vendor.3b1829c7.js";import"./index.86d2d945.js";import"./responsiveObserve.c545f1cc.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./RightOutlined.98400bb6.js";/* empty css              */import"./useTimeout.d1efb3cd.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./get.7abf870e.js";import"./index.2bbd1659.js";import"./SearchOutlined.0d9f3d80.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.5e157f19.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./EyeOutlined.1bac4c18.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useWindowSizeFn.a92604ed.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./index.a107ffc5.js";import"./DoubleLeftOutlined.d85e33ee.js";import"./DoubleRightOutlined.def848d7.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4f753738.js";import"./CaretDownFilled.69102767.js";import"./clickOutside.06955467.js";import"./useSortable.3482cfd3.js";import"./SettingOutlined.192ef0e3.js";import"./useExpose.12cfcd07.js";import"./useForm.9cf29718.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./ArrowLeftOutlined.74abacd3.js";import"./index.7841cde8.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:a,BasicTable:m,PageWrapper:n,[d.name]:d},setup(){const[e]=g({title:"退货商品",dataSource:f,columns:u,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:j,personSchema:c,personData:l}}});const O=o("data-v-ada482fc"),T=O(((e,o,d,a,m,n)=>{const p=i("Description"),j=i("a-divider"),c=i("BasicTable"),l=i("PageWrapper");return t(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(j),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(j),s(c,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(j),s(c,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;
