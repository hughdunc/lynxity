(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(r,o=null,n=0){let s=r;for(;s>0;){let e=document.createElement("div");e.className="flake fa fa-snowflake",document.getElementById("snow").appendChild(e),o==null?e.style.left=`${Math.random()*window.innerWidth}px`:e.style.left=`${o}px`;let t=Math.floor(Math.random()*21)-10;e.animate([{top:`${n}px`,opacity:"100%",transform:"rotateX(0deg) rotateY(0deg) translateX(0vw)"},{top:"100vh",opacity:"0%",transform:`rotateX(-360deg) rotateY(360deg) translateX(${t}vw)`}],{duration:Math.floor(Math.random()*5001+2e3),fill:"forwards",easing:"ease-out"}),e.addEventListener("animationend",a=>{a.target.remove}),s--}}function i(){const r=new Date,o=new Date(r.getFullYear(),11,25);r.getMonth()===11&&r.getDate()>25&&o.setFullYear(o.getFullYear()+1);const n=o-r,s=Math.floor(n/(1e3*60*60*24)),e=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(n%(1e3*60*60)/(1e3*60)),a=Math.floor(n%(1e3*60)/1e3);document.getElementById("days").textContent=s,document.getElementById("hours").textContent=e,document.getElementById("minutes").textContent=t,document.getElementById("seconds").textContent=a}setInterval(i,1e3);setInterval(()=>l(1),300);