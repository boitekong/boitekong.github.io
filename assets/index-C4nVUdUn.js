const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DaqvJCB5.js","assets/vendor-DasOq3Un.js","assets/Home-3QXtWV2F.css","assets/home-D6lSClLY.css","assets/HomePage-Bb8Q7wKU.js","assets/HomePage-KUm0T64R.css","assets/NotFound-CANDI4w-.js","assets/NotFound-BvH9bfx_.css"])))=>i.map(i=>d[i]);
import{r as m,u as w,a as N,R as e,B as _,F as k,b as C,c as F,d as I,P as O,e as S,f as A,g as v,h as R}from"./vendor-DasOq3Un.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const $="modulepreload",T=function(t){return"/"+t},P={},y=function(s,a,c){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.all(a.map(l=>{if(l=T(l),l in P)return;P[l]=!0;const p=l.endsWith(".css"),E=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${E}`))return;const i=document.createElement("link");if(i.rel=p?"stylesheet":$,p||(i.as="script",i.crossOrigin=""),i.href=l,o&&i.setAttribute("nonce",o),document.head.appendChild(i),p)return new Promise((f,g)=>{i.addEventListener("load",f),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>s()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})};function V(t,s="smooth"){const a=document.querySelector(t);a.scrollIntoView({behaviour:s}),a.focus()}const M=t=>Array.isArray(t)&&t.length>0?t.map(s=>s.replace(/\./g,".<br/><br/>").replace(/\n\n/g,"</p><p>")).join(""):"";function U(t,s,a,c,r,n){return[...a.blogPosts.length>0?a.blogPosts.map((o,l)=>({...o,type:"post",id:`govpublic-${l}`})):[],...s.blogPosts.length>0?s.blogPosts.map((o,l)=>({...o,type:"post",id:`minopex-${l}`})):[],...t.length>0?t.map((o,l)=>({type:"pdf",id:`pdf-${l}`,pdfImages:o.images})):[],...c.blogPosts.length>0?c.blogPosts.map((o,l)=>({...o,type:"post",id:`sayouth-${l}`})):[],...n.blogPosts.length>0?n.blogPosts.map((o,l)=>({...o,type:"post",id:`govprivate-${l}`})):[],...r.blogPosts.length>0?r.blogPosts.map((o,l)=>({...o,type:"post",id:`propersonnel-${l}`})):[]]}function d(t=1e3){const[s,a]=m.useState(!1);return m.useEffect(()=>{const c=setTimeout(()=>a(!0),t);return()=>clearTimeout(c)},[t]),[s,a]}function x(){const[t,s]=m.useState(!1),[a]=d(1e3),[c]=d(1200),[r]=d(1400),[n]=d(2200),[o]=d(1600),[l]=d(1800),[p]=d(2e3),E=w(),i=N(),f=()=>{s(!t)},g=u=>{V(u),f()},h=u=>{i.pathname!==u&&E(u)};return m.useEffect(()=>{const u=b=>{t&&!b.target.closest(".dropdown-menu")&&!b.target.closest(".hamburger")&&s(!1)};return document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}},[t]),e.createElement("nav",{className:"menu"},e.createElement("div",{className:"hamburger",onClick:f},c?e.createElement(_,{className:"icon"}):e.createElement("div",{className:"placeholder placeholder-icon"})),e.createElement("div",{className:"logo",onClick:()=>h("/")},a?e.createElement("img",{src:"/assets/images/logo.png",alt:"Logo"}):e.createElement("div",{className:"placeholder placeholder-logo"})),e.createElement("div",{className:`dropdown-menu ${t?"open":""}`},e.createElement("ul",null,e.createElement("li",{onClick:()=>h("/")},r?e.createElement(e.Fragment,null,"Home",e.createElement(k,{className:"menu-icon"})):e.createElement("div",{className:"placeholder placeholder-text"})),e.createElement("li",{onClick:()=>h("/vacancies")},n?e.createElement(e.Fragment,null,"Vacancies",e.createElement(C,{className:"menu-icon"})):e.createElement("div",{className:"placeholder placeholder-text"})),e.createElement("li",{onClick:()=>g("#contact")},l?e.createElement(e.Fragment,null,"Contact ",e.createElement(F,{className:"menu-icon"})):e.createElement("div",{className:"placeholder placeholder-text"})),e.createElement("li",{onClick:()=>g("#login")},p?e.createElement(e.Fragment,null,"Login",e.createElement(I,{className:"menu-icon"})):e.createElement("div",{className:"placeholder placeholder-text"})),e.createElement("li",{onClick:()=>g("#about")},o?e.createElement(e.Fragment,null,"About"):e.createElement("div",{className:"placeholder placeholder-text"})))))}function L({children:t}){const s=N(),c=["/","/vacancies"].includes(s.pathname);return e.createElement(e.Fragment,null,c&&e.createElement(x,null),e.createElement(m.Suspense,{fallback:e.createElement("div",{className:"loadingDiv"})},t))}L.propTypes={children:O.node.isRequired};const B=m.lazy(()=>y(()=>import("./Home-DaqvJCB5.js"),__vite__mapDeps([0,1,2,3]))),q=m.lazy(()=>y(()=>import("./HomePage-Bb8Q7wKU.js"),__vite__mapDeps([4,1,5,3]))),H=m.lazy(()=>y(()=>import("./NotFound-CANDI4w-.js"),__vite__mapDeps([6,1,7])));function W(){return e.createElement(S,null,e.createElement(A,null,e.createElement(v,{path:"/",element:e.createElement(L,null,e.createElement(B,null))}),e.createElement(v,{path:"/vacancies",element:e.createElement(L,null,e.createElement(q,null))}),e.createElement(v,{path:"*",element:e.createElement(H,null)})))}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./serviceWorker.js").then(t=>{console.log("service worker registered as: ",t.scope)}).catch(t=>console.error("service worker registration: ",t))});R.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(W,null)));export{U as c,M as f,d as u};
