import{d as e,u as s,r as i,o as r,f as t,g as a,p as l,h as n,aS as o,aT as p}from"./index.8ee268f5.js";import{I as u}from"./index.e5f2441c.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.3e62adc3.js";import"./RightOutlined.8408a911.js";var m=e({name:"TableImage",components:{Image:u,PreviewGroup:u.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=s("basic-table-img");return{prefixCls:e}}});m.render=function(e,s,u,m,d,f){const c=i("Image"),g=i("PreviewGroup");return e.imgList&&e.imgList.length?(r(),t("div",{key:0,class:e.prefixCls},[a(g,null,{default:l((()=>[(r(!0),t(o,null,p(e.imgList,(s=>(r(),t(c,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default m;
