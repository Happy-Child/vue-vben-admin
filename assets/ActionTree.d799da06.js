import{B as e,t}from"./data.7e4a97a4.js";import{d as a}from"./ScrollContainer.fb3d9df8.js";import{d as n,h as s,n as l,j as o,r as d,o as r,f as i,p as c,g as p,q as u}from"./index.98f65128.js";import{_ as f}from"./index.b3ac334d.js";import"./index.b14ab26b.js";import"./domUtils.9825b29a.js";import"./_stringToArray.0643a12e.js";import"./RightOutlined.12d522bd.js";/* empty css              */import"./useTimeout.9702bb5d.js";import"./useScrollTo.173986be.js";import"./vendor.3b1829c7.js";import"./index.c40f04d9.js";import"./index.f0f59d2b.js";import"./EllipsisOutlined.8715adfc.js";import"./types.46cb97b2.js";import"./isEqual.b3fe022f.js";import"./toInteger.ef4b7cc6.js";import"./DownOutlined.6a53b2d7.js";import"./index.41adfa42.js";import"./usePageContext.9368e609.js";import"./transButton.0ef3baa4.js";import"./ArrowLeftOutlined.fe401b97.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u(" 显示到第2级 "),h=u(" 显示到第1级 "),k=u(" 设置勾选数据 "),b=u(" 获取勾选数据 "),j=u(" 设置选中数据 "),D=u(" 获取选中数据 "),K=u(" 设置展开数据 "),S=u(" 获取展开数据 "),x={class:"mb-4"},B=u(" 添加根节点 "),_=u(" 添加在parent3内添加节点 "),g=u(" 删除parent3节点 "),N=u(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const o=d("a-button"),u=d("BasicTree"),f=d("CollapseContainer"),m=d("PageWrapper");return r(),i(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:c((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:c((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:c((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:c((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:c((()=>[b])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:c((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:c((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:c((()=>[S])),_:1},8,["onClick"])]),p("div",x,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:c((()=>[B])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[_])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[g])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:c((()=>[N])),_:1})]),p(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:c((()=>[p(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
