import{_ as i,o as t,c as o,a as s,r as c,F as l,g as p,h as b,w as n,d as r,t as d,e as k,p as u,f as h,b as y}from"./index.5ab84a64.js";import"./axios.91e25212.js";const $={},j={class:"card"},S={class:"card-side card-side-back"},I={class:"card-cover"},P={class:"card-heading"},C={class:"card-details"},A={class:"iconLink"},L={class:"card-side card-side-front"},M={class:"card-theme"},V={class:"card-theme-box"},w={class:"card-subject"},B={class:"card-title"};function F(e,_){return t(),o("div",j,[s("div",S,[s("div",I,[s("h4",P,[c(e.$slots,"heading",{},void 0,!0)])]),s("div",C,[s("ul",null,[c(e.$slots,"list",{},void 0,!0)]),s("div",A,[c(e.$slots,"iconLink",{},void 0,!0)])])]),s("div",L,[s("div",M,[s("div",V,[s("p",w,[c(e.$slots,"subject",{},void 0,!0)]),s("p",B,[c(e.$slots,"title",{},void 0,!0)])])])])])}const x=i($,[["render",F],["__scopeId","data-v-876ce014"]]);const D={components:{ProjectCard:x},data(){return{userData:{name:"Victor",projects:[{name:"Fonet",type:"Mobile",url:"https://github.com/vaorozco/App-Web-Ingles-Fonet/tree/App",skills:[{name:"Android Studio"},{name:"Android UI"},{name:"Java"},{name:"SQL"}]},{name:"Employee Manager",type:"Backend",url:"https://github.com/vaorozco/Employee-Manager",skills:[{name:"Spring Boot"},{name:"Angular"},{name:"MySql"},{name:"API"}]},{name:"Rick & Morty",type:"Frontend",url:"https://github.com/vaorozco/Rick-Morty-CardsAPI",skills:[{name:"HTML"},{name:"CSS"},{name:"Javascript"},{name:"API"}]},{name:"Todo App",type:"Frontend",url:"https://github.com/vaorozco/todo-app-vuejs",skills:[{name:"HTML"},{name:"CSS"},{name:"Vue Js"}]}]}}}},T=e=>(u("data-v-96350ced"),e=e(),h(),e),z={class:"cards-container"},E={class:"special"},J=["href"],N=T(()=>s("i",{class:"fa-brands fa-github"},null,-1)),H=[N];function R(e,_,m,G,v,O){const f=k("ProjectCard");return t(),o("div",z,[(t(!0),o(l,null,p(v.userData.projects,a=>(t(),b(f,{key:e.name,userData:a.skills},{heading:n(()=>[r("SKILL SET")]),list:n(()=>[(t(!0),o(l,null,p(a.skills,g=>(t(),o("li",E,d(g.name),1))),256))]),iconLink:n(()=>[s("a",{href:a.url,target:"_blank",rel:"noopener noreferrer"},H,8,J)]),subject:n(()=>[r(d(a.type),1)]),title:n(()=>[r(d(a.name),1)]),_:2},1032,["userData"]))),128))])}const q=i(D,[["render",R],["__scopeId","data-v-96350ced"]]);const K=e=>(u("data-v-1eabc68e"),e=e(),h(),e),Q={class:"section",id:"projects",style:{background:"#111111"}},U=K(()=>s("h1",null,"Projects",-1)),W={__name:"ProjectView",setup(e){return(_,m)=>(t(),o("section",Q,[U,y(q)]))}},Z=i(W,[["__scopeId","data-v-1eabc68e"]]);export{Z as default};
