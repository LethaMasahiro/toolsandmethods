import{q as f,h as p,e as v,j as g,u as d}from"./query.91a3e7f2.js";import{e as l,_ as h,a as _,t as y,f as w,i as C,b as P,h as r}from"./entry.78456e6a.js";import{_ as $}from"./nuxt-link.38e1c305.js";import{w as c,s as N,u as j}from"./utils.c5bb3baa.js";import{u as T}from"./preview.45850a66.js";const D=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await h(()=>import("./client-db.da792f7b.js"),["./client-db.da792f7b.js","./entry.78456e6a.js","./query.91a3e7f2.js","./utils.c5bb3baa.js","./preview.45850a66.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},Q=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=w(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{Q as default};
