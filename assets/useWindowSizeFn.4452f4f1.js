import{bt as e,bW as t,ac as n}from"./index.8ee268f5.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},c=()=>{window.removeEventListener("resize",o),d()};return t((()=>{m()})),n((()=>{c()})),[m,c]}export{i as u};
