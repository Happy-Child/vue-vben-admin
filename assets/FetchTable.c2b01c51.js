import{_ as e}from"./index.24079ee8.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.9f42af39.js";import{d as o,h as r,o as s,i as d,j as n,w as p,m}from"./index.31a6bf2e.js";import{u as a}from"./useTable.a4fd8e2b.js";import"./index.2bbd1659.js";import"./SearchOutlined.0d9f3d80.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.5e157f19.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./EyeOutlined.1bac4c18.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./index.a107ffc5.js";import"./DoubleLeftOutlined.d85e33ee.js";import"./DoubleRightOutlined.def848d7.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4f753738.js";import"./CaretDownFilled.69102767.js";import"./clickOutside.06955467.js";import"./useSortable.3482cfd3.js";import"./SettingOutlined.192ef0e3.js";import"./useExpose.12cfcd07.js";import"./useForm.9cf29718.js";var j=o({components:{BasicTable:e},setup(){const[e,{reload:o}]=a({title:"远程加载示例",api:t,columns:i()});return{registerTable:e,handleReloadCurrent:function(){o()},handleReload:function(){o({page:1})}}}});const l={class:"p-4"},f=m(" 刷新当前页 "),c=m(" 刷新并返回第一页 ");j.render=function(e,i,t,o,m,a){const j=r("a-button"),u=r("BasicTable");return s(),d("div",l,[n(u,{onRegister:e.registerTable},{toolbar:p((()=>[n(j,{type:"primary",onClick:e.handleReloadCurrent},{default:p((()=>[f])),_:1},8,["onClick"]),n(j,{type:"primary",onClick:e.handleReload},{default:p((()=>[c])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default j;
