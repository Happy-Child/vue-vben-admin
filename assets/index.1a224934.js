import{d as e,r as a,cp as s,cq as t,h as i,o,i as r,j as n,bs as l,a3 as d,b8 as p,bw as c,m}from"./index.31a6bf2e.js";import{a as u}from"./index.2bbd1659.js";import{_ as f}from"./index.1656dc96.js";import{F as v,S as j,a as S,b,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.38622004.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.0d9f3d80.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.775a650d.js";import"./index.73c084f5.js";import"./RightOutlined.98400bb6.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./isEqual.fe28526e.js";import"./toInteger.619adbee.js";/* empty css              */import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:f,FadeTransition:v,ScaleTransition:j,SlideYTransition:S,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=a("Fade"),s=a(!0);return{options:w,value:e,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const O=c("data-v-51fb1392");s("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,a,s,t,c,m)=>{const u=i("Select"),f=i("a-button"),v=i("PageWrapper");return o(),r(v,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(f,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[p,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;
