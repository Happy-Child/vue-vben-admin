var e,t,s=Object.assign;import{h as o,c as r,a as n,j as a,d as i,o as l,f as c,t as g}from"./index.98f65128.js";(t=e||(e={}))[t.LOGIN=0]="LOGIN",t[t.REGISTER=1]="REGISTER",t[t.RESET_PASSWORD=2]="RESET_PASSWORD",t[t.MOBILE=3]="MOBILE",t[t.QR_CODE=4]="QR_CODE";const u=o(0);function d(){function e(e){u.value=e}return{setLoginState:e,getLoginState:r((()=>u.value)),handleBackLogin:function(){e(0)}}}function m(e){return{validForm:async function(){const t=a(e);if(!t)return;return await t.validate()}}}function f(e){const{t:t}=n(),o=r((()=>S(t("sys.login.accountPlaceholder")))),i=r((()=>S(t("sys.login.passwordPlaceholder")))),l=r((()=>S(t("sys.login.smsPlaceholder")))),c=r((()=>S(t("sys.login.mobilePlaceholder")))),g=async(e,s)=>s?Promise.resolve():Promise.reject(t("sys.login.policyPlaceholder"));return{getFormRules:r((()=>{const r=a(o),n=a(i),d={sms:a(l),mobile:a(c)};switch(a(u)){case 1:return s({account:r,password:n,confirmPassword:[{validator:(m=null==e?void 0:e.password,async(e,s)=>s?s!==m?Promise.reject(t("sys.login.diffPwd")):Promise.resolve():Promise.reject(t("sys.login.passwordPlaceholder"))),trigger:"change"}],policy:[{validator:g,trigger:"change"}]},d);case 2:return s({account:r},d);case 3:return d;default:return{account:r,password:n}}var m}))}}function S(e){return[{required:!0,message:e,trigger:"change"}]}var y=i({name:"LoginFormTitle",setup(){const{t:t}=n(),{getLoginState:s}=d();return{getFormTitle:r((()=>({[e.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[e.LOGIN]:t("sys.login.signInFormTitle"),[e.REGISTER]:t("sys.login.signUpFormTitle"),[e.MOBILE]:t("sys.login.mobileSignInFormTitle"),[e.QR_CODE]:t("sys.login.qrSignInFormTitle")}[a(s)])))}}});const E={class:"font-bold text-2xl xl:text-3xl enter-x text-center xl:text-left mb-6"};y.render=function(e,t,s,o,r,n){return l(),c("h2",E,g(e.getFormTitle),1)};var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});export{e as L,y as _,f as a,m as b,P as c,d as u};
