import{d as e,h as t,j as o,n as a,r as s,o as r,f as i,p as n,g as p,q as d}from"./index.98f65128.js";import{I as l}from"./index.f53810ec.js";import{d as m}from"./ScrollContainer.fb3d9df8.js";import{u}from"./useCopyToClipboard.4e01fe1d.js";import{_ as f}from"./index.b3ac334d.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.73b14c1c.js";import"./EyeOutlined.c8470b0f.js";import"./index.b14ab26b.js";import"./domUtils.9825b29a.js";import"./_stringToArray.0643a12e.js";import"./RightOutlined.12d522bd.js";/* empty css              */import"./useTimeout.9702bb5d.js";import"./useScrollTo.173986be.js";import"./index.c40f04d9.js";import"./index.f0f59d2b.js";import"./EllipsisOutlined.8715adfc.js";import"./types.46cb97b2.js";import"./isEqual.b3fe022f.js";import"./toInteger.ef4b7cc6.js";import"./DownOutlined.6a53b2d7.js";import"./index.41adfa42.js";import"./usePageContext.9368e609.js";import"./transButton.0ef3baa4.js";import"./ArrowLeftOutlined.fe401b97.js";var c=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:f,[l.name]:l},setup(){const e=t(""),{createMessage:s}=a(),{clipboardRef:r,copiedRef:i}=u();return{handleCopy:function(){const t=o(e);t?(r.value=t,o(i)&&s.warning("copy success！")):s.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},b=d(" Copy ");c.render=function(e,t,o,a,d,l){const m=s("a-input"),u=s("a-button"),f=s("CollapseContainer"),c=s("PageWrapper");return r(),i(c,{title:"文本复制示例"},{default:n((()=>[p(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n((()=>[p("div",j,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":t[1]||(t[1]=t=>e.value=t)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default c;
