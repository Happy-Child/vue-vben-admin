import{a as e,i as t,o as a,j as s,k as r,w as i}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import{a as o}from"./index.05f15b52.js";import"./RightOutlined.be55439d.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import{B as l,t as d}from"./data.888a9b67.js";var p=e({components:{BasicTree:l,CollapseContainer:o},setup:()=>({treeData:d})});const m={class:"flex p-4"};p.render=function(e,o,l,d,p,n){const c=t("BasicTree"),f=t("CollapseContainer");return a(),s("div",m,[r(f,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:i((()=>[r(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),r(f,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:i((()=>[r(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),r(f,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:i((()=>[r(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default p;