import{a as i,i as e,o as t,j as s,k as o,w as r,p as a}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./useSortable.40ed20ac.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./index.9c8fc8dd.js";import"./RightOutlined.f897cf51.js";import"./index.676d1c13.js";import"./types.0fb93fc3.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./_baseFor.f4e5f03f.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./LeftOutlined.0a6527a3.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.d42c47fc.js";import"./index.7d4fdf7c.js";import"./index.8e9f097d.js";import"./zh_CN.0242bd16.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import"./CaretDownFilled.708ae9b6.js";import"./index.05f15b52.js";import"./CheckOutlined.f283e048.js";import"./CloseOutlined.9f910fbc.js";import{s as d}from"./index.fb04c872.js";import"./FullscreenOutlined.be319401.js";import"./LeftOutlined.a260af09.js";import"./LoadingOutlined.443e49ec.js";import"./TableAction.39c6a9e7.js";import"./RightOutlined.be55439d.js";import"./SettingOutlined.9a31b847.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import"./useForm.4a900a75.js";import"./index.de57128c.js";import"./useWindowSizeFn.8c096a0b.js";import"./uuid.40269c00.js";import"./useExpose.31b978ca.js";import{c as m,d as p,a as n,b as j,e as c}from"./data.7596f14f.js";import"./index.bc62e777.js";var f=i({components:{BasicTable:d},setup:()=>({aoaToExcel:function(){n({data:j,header:c,filename:"二维数组方式导出excel.xlsx"})},columns:m,data:p})});const l={class:"m-4"},u=a("导出");f.render=function(i,a,d,m,p,n){const j=e("a-button"),c=e("BasicTable");return t(),s("div",l,[o(c,{title:"基础表格",columns:i.columns,dataSource:i.data},{toolbar:r((()=>[o(j,{onClick:i.aoaToExcel},{default:r((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default f;