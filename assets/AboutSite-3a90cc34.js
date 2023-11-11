import{r as n,j as e}from"./index-870cfc07.js";const c=["#fca5a5","#ef4444","#b91c1c","#7f1d1d","#7c2d12","#c2410c","#f97316","#fdba74","#fcd34d","#f59e0b","#b45309","#78350f","#713f12","#a16207","#eab308","#fde047","#bef264","#84cc16","#4d7c0f","#365314","#14532d","#15803d","#22c55e","#86efac","#6ee7b7","#10b981","#047857","#064e3b","#134e4a","#0f766e","#14b8a6","#5eead4","#67e8f9","#06b6d4","#0e7490","#164e63","#0c4a6e","#0369a1","#0ea5e9","#7dd3fc","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a","#312e81","#4338ca","#6366f1","#a5b4fc","#c4b5fd","#8b5cf6","#6d28d9","#4c1d95","#581c87","#7e22ce","#a855f7","#d8b4fe","#f0abfc","#d946ef","#a21caf","#701a75","#831843","#be185d","#ec4899","#f9a8d4","#fda4af","#f43f5e","#be123c","#881337"],g=()=>{const[t,s]=n.useState(5),[o,r]=n.useState([c[t-2],c[t-1],c[t]]);function l(){s(a=>a===c.length-1?2:a+1)}return n.useEffect(()=>{let a=setInterval(l,100);return()=>clearInterval(a)},[]),n.useEffect(()=>{r([c[t-2],c[t-1],c[t]])},[t]),e.jsx("h1",{style:{backgroundImage:`linear-gradient(to right, ${o[0]}, ${o[1]}, ${o[2]})`},className:"text-center w-fit pt-12 text-5xl font-bold text-gradient",children:"Об этом сайте"})},h=[{id:1,text:`
    Vite - это современный инструмент для разработки веб-приложений, который предоставляет быструю среду разработки (development server) и сборки проектов JavaScript и веб-приложений.
    #Я активно использую его в своих приложениях!
    `,link:"https://vitejs.dev/",img:"./vite2.svg",color:"from-blue-500 via-amber-400 to-violet-700"},{id:2,text:`
    React - это библиотека JavaScript для разработки пользовательских интерфейсов (UI) и создания одностраничных веб-приложений.
    #У меня определенно неплохо получается, но еще есть куда расти!
    `,link:"https://react.dev/",img:"./react.svg",color:"from-cyan-400 via-sky-400 to-blue-400"},{id:3,text:`
    Tailwind CSS - это фреймворк для создания пользовательского интерфейса (UI) веб-приложений с использованием CSS, который был разработан с акцентом на простоту и гибкость в стилизации веб-приложений.
    #Ныне это популярно, а потому и я использую его!
    `,link:"https://tailwindcss.com/docs/installation/framework-guides",img:"./tailwind.svg",color:"from-emerald-400 via-teal-500 to-cyan-500"},{id:4,text:`
    React-query (он же Tanstack-query) - это библиотека для управления состоянием и запросами данных в React-приложениях. Она предоставляет множество инструментов и хуков, которые упрощают работу с данными, включая запросы к серверу, управление кэшированием и обработку состояния загрузки.
    #И без него тут тоже не обошлось!
    `,link:"https://tanstack.com/query/latest/",img:"./react-query.svg",color:"from-red-500 via-orange-500 to-amber-500"},{id:5,text:`
    React-router-dom - это библиотека для маршрутизации (routing) в React-приложениях. Она позволяет определять, какие компоненты должны отображаться на экране при изменении URL, что позволяет создавать одностраничные веб-приложения (Single Page Applications) и управлять навигацией пользователя.
    #Вещь, на мой взгляд, просто необходимая!
    `,link:"https://reactrouter.com/en/main",img:"./react-router.svg",color:"from-pink-500 via-emerald-400 to-indigo-700"}],x=n.createContext(),u=({technologyChosed:t})=>{const[,s,o]=t.text.split(`
`),[r,l]=s.split(" - ");return e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:" text-xl ",children:[e.jsx("span",{className:`font-extrabold tracking-wider bg-gradient-to-r text-gradient ${t.color}`,children:r})," - ",l]}),e.jsx("p",{className:" text-neutral-500 font-light italic",children:o}),e.jsx("a",{className:" self-end mt-auto underline tracking-wider hover:text-red-600 transition-all ease-in-out duration-300",target:"_blank",href:t.link,rel:"noreferrer",children:"узнать больше о технологии...📎"})]})},f=({data:t,someTechnologyChosed:s,technologyChosed:o})=>{const{id:r,img:l}=t;let a=["w-28","border-4","p-5","hover:p-4","border-rose-400"];return o&&(a=["justify-self-start","w-20","border-2","p-3","hover:p-2","border-stone-300","hover:w-24","bg-slate-700"]),e.jsx("div",{onClick:()=>s(r),className:a.reduce((i,d)=>i+d+" ","")+" border-solid rounded-full hover:border-red-600 transition-all ease-in-out duration-300 hover:cursor-help self-center",children:e.jsx("img",{className:"",src:l,alt:""})})},m=()=>{const{technologyChosed:t,someTechnologyChosed:s,datas:o}=n.useContext(x);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-center pt-12 text-2xl font-bold text-neutral-600 ",children:"Использовались следующие технологии:"}),e.jsx("section",{className:t?"max-h-technologies h-technologies justify-self-center grid grid-cols-[1fr_3fr_5fr] grid-rows-4 mx-auto p-technologies2 py-8 gap-y-4 max-w-technologies2":`max-h-technologies h-technologies p-technologies
            flex flex-wrap flex-row justify-center content-start gap-16 gap-x-32 pt-24
             `,children:t?e.jsxs(e.Fragment,{children:[o.map(r=>r.id!==t.id&&e.jsx(f,{data:r,someTechnologyChosed:s,technologyChosed:t},r.id)),e.jsxs("div",{onClick:s,className:`group row-start-1 row-end-5 col-start-2 col-end-3 lg:w-56 lg:h-56 md:w-44 md:h-44
                self-center justify-self-center border-solid border-4 rounded-full p-5 border-stone-300 hover:border-red-600
                hover:p-4 transition-all ease-in-out duration-300 cursor-none`,children:[e.jsx("img",{src:t.img,className:"",alt:""}),e.jsx("button",{className:` group-hover:border-red-600 transition-all ease-in-out duration-300
                   bg-slate-50 border-4 border-stone-300 w-12 h-12 rounded-full relative lg:left-40 lg:bottom-56 md:left-32 md:bottom-44`,children:"❌"})]}),e.jsx("div",{className:"w-4/5 h-4/5 row-start-1 row-end-5 col-start-3 col-end-4 bg-slate-50 shadow-xl rounded-2xl self-center justify-self-end p-5 flex flex-col justify-start text-neutral-600 max-h-description_card gap-5",children:e.jsx(u,{technologyChosed:t})})]}):o.map(r=>e.jsx(f,{data:r,someTechnologyChosed:s},r.id))})]})},p=()=>{const[t,s]=n.useState(h),[o,r]=n.useState(null),l=(a=null)=>{const i=t.findIndex(d=>d.id===a);r(t[i])};return e.jsxs(x.Provider,{value:{datas:t,setDatas:s,technologyChosed:o,setTechnologyChosed:r,someTechnologyChosed:l},children:[e.jsx(g,{}),e.jsx(m,{})]})};export{p as default};