import{R as e,i as u,c as m,r as s,u as w}from"./vendor-DasOq3Un.js";import{u as o}from"./index-DRcarOL0.js";/* empty css             */const d=["/assets/agency_icons/1.png","/assets/agency_icons/2.png","/assets/agency_icons/3.png","/assets/agency_icons/4.png","/assets/agency_icons/5.jpg","/assets/agency_icons/6.png","/assets/agency_icons/7.jpg","/assets/agency_icons/8.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/kwazulu-natal-transport_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-department-of-health_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-joburg_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-tshwane_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/national-credit-regulator-ncr_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/ecdc_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/eastern-cape-liquor-board_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/mega-logo_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/tikzn_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/johannesburg-water_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/agriseta_orig.gif","https://www.govpage.co.za/uploads/2/4/0/5/24052997/agriseta_orig.gif","https://www.govpage.co.za/uploads/2/4/0/5/24052997/hwseta_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/sasseta.png?1723664842","https://www.govpage.co.za/uploads/2/4/0/5/24052997/afrimat_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/old-khaki_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/four-seasons-hotels-resorts_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/271850758-950050092318914-1039599084442007153-n.jpg?1721709808","https://www.govpage.co.za/uploads/2/4/0/5/24052997/screenshot-2024-07-22-at-04-45-17_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/woolworths_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/vw-group-sa_orig.gif","https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/gold-fields-logo-svg.png?1716762063","https://www.govpage.co.za/uploads/2/4/0/5/24052997/glencore_orig.jpg","https://www.govpage.co.za/uploads/2/4/0/5/24052997/de-beers-group_orig.png","https://www.govpage.co.za/uploads/2/4/0/5/24052997/clicks-group-limited_orig.png"],h={imageUrls:d};function v(){const[a]=o(1e3);return e.createElement(e.Fragment,null,a?e.createElement("div",{className:"about-container"},e.createElement("section",{id:"about"},e.createElement("h1",null,"About Us"),e.createElement("p",null,"We're all about connecting you with job opportunities from various sectors. Our board features vacancies from:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("strong",null,"Public sector departments & entities")),e.createElement("li",null,e.createElement("strong",null,"Private sector companies")),e.createElement("li",null,e.createElement("strong",null,"Job posts from job agencies"))),e.createElement("p",null,"Whether you're a fresh graduate 🎓 or an experienced professional 👩‍💼👨‍💼, we're here to help you navigate your career path. Dive in and explore the multitude of opportunities waiting for you! 🚀💼"))):e.createElement("div",{className:"placeholder about-container-placeholder"}))}function E(){const[a]=o(1e3);return e.createElement(e.Fragment,null,a?e.createElement("div",{id:"contact"},e.createElement("hr",null),e.createElement("p",{className:"i"},"Contacts"),e.createElement("p",{className:"contacts"},e.createElement("a",{className:"contact",href:"https://t.me/Kebalepile_1",target:"_blank",rel:"noopener noreferrer",title:"https://t.me/Kebalepile_1"},e.createElement(u,null)),e.createElement("a",{className:"contact",href:"mailto:boitkongcommunity@gmail.com",title:"boitkongcommunity@gmail.com"},e.createElement(m,null))),e.createElement("h6",{className:"i"},"© 2024 Boitekong Community Job Board")):e.createElement("div",{className:"placeholder contact-placeholder"}))}function z(){const[a,n]=s.useState(0),[l]=o(1e3),[r]=o(1e3),c=w(),t=h.imageUrls;s.useEffect(()=>{const p=setInterval(()=>{n(i=>(i+1)%t.length)},5e3);return()=>clearInterval(p)},[t.length]);const g=()=>{c("/vacancies")};return e.createElement(e.Fragment,null,r?e.createElement("div",{className:"slider-container"},l&&t.length>0?e.createElement(e.Fragment,null,e.createElement("img",{src:t[a],alt:"Agency Icon",className:"slide-image"}),e.createElement("p",{className:"slider-message"},"Companies & Entities Job Posts")):e.createElement("div",{className:"placeholder loading-placeholder"}),e.createElement("button",{className:"vacancies-button",onClick:g},"View Vacancies")):e.createElement("div",{className:"placeholder slider-container-placeholder"}),e.createElement(v,null),e.createElement(E,null))}export{z as default};
