import{B as e,t}from"./data.601d3818.js";import{d as a}from"./ScrollContainer.9446e27c.js";import{_ as r}from"./index.588fa705.js";import{d as s,r as i,o,f as d,p as l,g as n}from"./index.8ee268f5.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./RightOutlined.8408a911.js";/* empty css              */import"./useTimeout.72f9750e.js";import"./useScrollTo.da0b1c1d.js";import"./index.745441c2.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./isEqual.bd3c511a.js";import"./toInteger.f9a43c77.js";import"./DownOutlined.e4764c63.js";import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";import"./vendor.3b1829c7.js";var p=s({components:{BasicTree:e,CollapseContainer:a,PageWrapper:r},setup:()=>({treeData:t})});const m={class:"flex"};p.render=function(e,t,a,r,s,p){const c=i("BasicTree"),j=i("CollapseContainer"),u=i("PageWrapper");return o(),d(u,{title:"Tree基础示例"},{default:l((()=>[n("div",m,[n(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:l((()=>[n(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),n(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:l((()=>[n(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),n(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:l((()=>[n(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])])),_:1})};export default p;
