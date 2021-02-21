import{g as e,m as t,I as i,d as n,b2 as o,a as s,i as r,bO as a,r as l,o as d,f as p,p as c,t as m}from"./index.8ee268f5.js";/* empty css              */import{D as u,M as f}from"./index.704d9bda.js";import{u as j}from"./BasicForm.4ee3e781.js";import"./Dropdown.be4507ac.js";import"./vendor.3b1829c7.js";import"./RightOutlined.8408a911.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./isEqual.bd3c511a.js";import"./toInteger.f9a43c77.js";import"./index.ace90ad4.js";import"./index.0c18e139.js";import"./responsiveObserve.c545f1cc.js";import"./_baseIteratee.61382218.js";import"./get.0479aa65.js";import"./_baseProperty.74f89655.js";import"./findIndex.a12e0f15.js";import"./index.0d0c93f8.js";import"./index.5cb73b71.js";import"./SearchOutlined.fadfdeec.js";import"./EyeOutlined.438e5550.js";import"./index.ed9f4e7d.js";import"./CheckOutlined.6e3ff980.js";import"./DownOutlined.e4764c63.js";import"./index.31a2b7d8.js";import"./index.5b69606c.js";import"./index.c62fa8ed.js";import"./UpOutlined.b53d5bc5.js";import"./index.b8699f3f.js";import"./RedoOutlined.db3025b9.js";import"./Tree.bf2dd908.js";import"./util.0bced5d1.js";import"./useFormItem.8d3cf537.js";import"./uuid.8bfac6dc.js";import"./uniqBy.a0ccb3b6.js";import"./index.3886869f.js";import"./DeleteOutlined.ea4eefb6.js";import"./index.a92108e7.js";import"./useModal.e810cfd8.js";import"./useTimeout.72f9750e.js";import"./useWindowSizeFn.4452f4f1.js";import"./ScrollContainer.9446e27c.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./useScrollTo.da0b1c1d.js";import"./FullscreenOutlined.fa6777c1.js";import"./index.8a231396.js";import"./index.e5f2441c.js";import"./LeftOutlined.3e62adc3.js";import"./download.49d447d5.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y=function(n,o){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}({},n,o.attrs);return e(i,t(s,{icon:b}),null)};y.displayName="ColumnHeightOutlined",y.inheritAttrs=!1;var O=n({name:"SizeSetting",components:{ColumnHeightOutlined:y,Tooltip:o,Dropdown:u,Menu:f,MenuItem:f.Item},setup(){const e=j(),{t:t}=s(),i=r([e.getSize()]);return{handleTitleClick:function({key:t}){i.value=[t],e.setProps({size:t})},selectedKeysRef:i,getPopupContainer:a,t:t}}});O.render=function(t,i,n,o,s,r){const a=l("ColumnHeightOutlined"),u=l("MenuItem"),f=l("Menu"),j=l("Dropdown"),b=l("Tooltip");return d(),p(b,{placement:"top"},{title:c((()=>[e("span",null,m(t.t("component.table.settingDens")),1)])),default:c((()=>[e(j,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:c((()=>[e(f,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":i[1]||(i[1]=e=>t.selectedKeysRef=e)},{default:c((()=>[e(u,{key:"default"},{default:c((()=>[e("span",null,m(t.t("component.table.settingDensDefault")),1)])),_:1}),e(u,{key:"middle"},{default:c((()=>[e("span",null,m(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(u,{key:"small"},{default:c((()=>[e("span",null,m(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:c((()=>[e(a)])),_:1},8,["getPopupContainer"])])),_:1})};export default O;
