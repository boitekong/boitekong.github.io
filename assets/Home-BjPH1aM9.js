import{R as e,i as m,c as u,r as n,u as d}from"./vendor-DasOq3Un.js";import{u as o}from"./index-Bau1fA2-.js";/* empty css             */const w=["/assets/agency_icons/1.png","/assets/agency_icons/2.png","/assets/agency_icons/3.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-office-of-the-premier_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-economic-development-environment-conservation-and-tourism_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/ccma_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/nemisa_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/nhls_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/ports-reglator-of-south-africa_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/psira_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/quality-council-for-trades-occupations-qcto_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/sabc_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/samsa_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/sasria_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/saws_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/special-investigating-unit-siu_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/sita_orig.jpg"],h={imageUrls:w};function v(){const[t]=o(1e3);return e.createElement(e.Fragment,null,t?e.createElement("div",{className:"about-container"},e.createElement("section",{id:"about"},e.createElement("h1",null,"About Us"),e.createElement("p",null,"We're all about connecting you with job opportunities from various sectors. Our board features vacancies from:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("strong",null,"Public sector departments & entities")),e.createElement("li",null,e.createElement("strong",null,"Private sector companies")),e.createElement("li",null,e.createElement("strong",null,"Job posts from job agencies"))),e.createElement("p",null,"Whether you're a fresh graduate 🎓 or an experienced professional 👩‍💼👨‍💼, we're here to help you navigate your career path. Dive in and explore the multitude of opportunities waiting for you! 🚀💼"))):e.createElement("div",{className:"placeholder about-container-placeholder"}))}function E(){const[t]=o(1e3);return e.createElement(e.Fragment,null,t?e.createElement("div",{id:"contact"},e.createElement("hr",null),e.createElement("p",{className:"i"},"Contacts"),e.createElement("p",{className:"contacts"},e.createElement("a",{className:"contact",href:"https://t.me/Kebalepile_1",target:"_blank",rel:"noopener noreferrer",title:"https://t.me/Kebalepile_1"},e.createElement(m,null)),e.createElement("a",{className:"contact",href:"mailto:boitkongcommunity@gmail.com",title:"boitkongcommunity@gmail.com"},e.createElement(u,null))),e.createElement("h6",{className:"i"},"© 2024 Boitekong Community Job Board")):e.createElement("div",{className:"placeholder contact-placeholder"}))}function N(){const[t,l]=n.useState(0),[s]=o(1e3),[r]=o(1e3),c=d(),a=h.imageUrls;n.useEffect(()=>{const p=setInterval(()=>{l(g=>(g+1)%a.length)},5e3);return()=>clearInterval(p)},[a.length]);const i=()=>{c("/vacancies")};return e.createElement(e.Fragment,null,r?e.createElement("div",{className:"slider-container"},s&&a.length>0?e.createElement(e.Fragment,null,e.createElement("img",{src:a[t],alt:"Agency Icon",className:"slide-image"}),e.createElement("p",{className:"slider-message"},"Companies & Entities Job Posts")):e.createElement("div",{className:"placeholder loading-placeholder"}),e.createElement("button",{className:"vacancies-button",onClick:i},"View Vacancies")):e.createElement("div",{className:"placeholder slider-container-placeholder"}),e.createElement(v,null),e.createElement(E,null))}export{N as default};
