(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const o={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),burgerMenu:document.querySelector(".mob-nav-menu")};o.openMenuBtn.addEventListener("click",n),o.closeMenuBtn.addEventListener("click",n),o.burgerMenu.addEventListener("click",c);function n(){o.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function c(r){r.target.nodeName==="A"&&(o.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))}})();const l=document.querySelector(".go-top");window.addEventListener("scroll",d);l.addEventListener("click",u);function d(){const o=window.scrollY,n=document.documentElement.clientHeight;o>n?l.classList.add("go-top--show"):l.classList.remove("go-top--show")}function u(){window.scrollY>0&&(window.scrollBy(0,-20),setTimeout(u,0))}let i=document.querySelector(".hamburger");i.addEventListener("click",function(){i.classList.toggle("is-active")});