/* empty css                      */(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const u=document.querySelector(".menu-button"),o=document.querySelector(".mobile-menu"),a=document.querySelector(".close-button"),s=document.querySelector(".backdrop");u.addEventListener("click",()=>{o.classList.toggle("hidden"),s.classList.toggle("is-hidden")});a.addEventListener("click",()=>{o.classList.toggle("hidden"),s.classList.toggle("is-hidden")});o.addEventListener("click",r=>{r.target.nodeName==="A"&&(o.classList.toggle("hidden"),s.classList.toggle("is-hidden"))});s.addEventListener("click",r=>{r.target.classList.contains("backdrop")&&(o.classList.toggle("hidden"),s.classList.toggle("is-hidden"))});const l=document.querySelector(".header");window.addEventListener("scroll",()=>{console.log(window.scrollY),window.scrollY?l.classList.add("scrolled"):l.classList.remove("scrolled")});
//# sourceMappingURL=commonHelpers.js.map
