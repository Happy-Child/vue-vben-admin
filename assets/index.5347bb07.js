import{d as e,af as s,u as t,c as i,bP as r,r as a,o,f as p,g as m,p as n,b1 as d,F as l,aT as f,m as c,bw as u}from"./index.98f65128.js";import{I as g}from"./index.86e90c96.js";import{_ as j}from"./index.b3ac334d.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.cf19af62.js";import"./RightOutlined.12d522bd.js";import"./index.c40f04d9.js";import"./index.f0f59d2b.js";import"./EllipsisOutlined.8715adfc.js";import"./types.46cb97b2.js";import"./isEqual.b3fe022f.js";import"./toInteger.ef4b7cc6.js";import"./DownOutlined.6a53b2d7.js";/* empty css              */import"./index.41adfa42.js";import"./usePageContext.9368e609.js";import"./transButton.0ef3baa4.js";import"./ArrowLeftOutlined.fe401b97.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>r(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,r,g){const j=a("Image"),b=a("PreviewGroup");return o(),p("div",{class:e.prefixCls},[m(b,null,{default:n((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},f(e.getImageList,(e=>(o(),p(j,c({key:e.src},e),u({_:2},[e.placeholder?{name:"placeholder",fn:n((()=>[m(j,c(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,r,d){const l=a("ImagePreview"),f=a("PageWrapper");return o(),p(f,{title:"图片预览示例"},{default:n((()=>[m(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;
