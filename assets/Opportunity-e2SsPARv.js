import{r as E,R as a,I as v,u as x}from"./vendor-AJt8eDY0.js";import{S as D}from"./share-GLoeCvUs.js";import{J as S}from"./index-rWggqqZ0.js";import{i as y}from"./isObject-FVN2IN1r.js";function A(){const r=x();function e(c){r(c)}return e}function _(){var i,n,m,s,u,o,p;const r=A(),{PostInfo:e}=E.useContext(S);E.useEffect(()=>{e||r("/")});const c=()=>{if(e!=null&&e.title||e!=null&&e.jobTitle)return a.createElement("hr",{className:"line"})},b=()=>{var h,g;const l=t=>a.createElement("iframe",{className:"documentFrame",src:t},a.createElement("p",null,"😞 sorry Document won't load, you can access it directly here"," ",e.href," or click the source button")),d=t=>a.createElement("div",{className:"full-details"},t);if(Array.isArray(e==null?void 0:e.iframe)&&((h=e==null?void 0:e.iframe)!=null&&h.length))return d(e==null?void 0:e.iframe.map((t,N)=>a.createElement("div",{key:N},l(t))));if((g=e==null?void 0:e.iframe)!=null&&g.length)return d(l(e.iframe))};return a.createElement("dialog",{open:!0,id:"info-card"},a.createElement("form",{method:"dialog"},e&&a.createElement("article",{className:"more-info"},(e==null?void 0:e.iconLink)&&a.createElement("img",{src:"./assets/"+e.iconLink,alt:"agency icon",className:"icon",title:"agency icon"}),(e==null?void 0:e.imgSrc)&&a.createElement("img",{className:"logo",src:e.imgSrc,alt:"entity logo",loading:"lazy"}),a.createElement("h3",{className:"title"}," ",e.jobTitle),a.createElement("div",{className:"header"},(e==null?void 0:e.title)&&a.createElement("h3",null," ",e.title.replaceAll(/is hiring/gi,"")),a.createElement("button",{onClick:l=>{l.preventDefault(),D({title:`${(e==null?void 0:e.title)||(e==null?void 0:e.jobTitle)||"Sa Youth Job Post"}, more info @ Boitekong Job Board`,text:"available job vacancy, might be suitable for you!",url:`${location.origin}/${e.uuid}`})}},"Share")),c(),a.createElement("br",null),e.jobSpecFields&&a.createElement("p",{className:"job-field",title:e.jobSpecFields},e.jobSpecFields),e.province&&a.createElement("h5",{className:"province"},"Province: ",e.province),e.location&&y(e.location)&&a.createElement("span",null,a.createElement("h5",{className:"location"},"Region: ",(n=(i=e.location)==null?void 0:i.region)==null?void 0:n.replace(",","")),a.createElement("h5",{className:"location"},"City: ",(s=(m=e.location)==null?void 0:m.city)==null?void 0:s.replace(",",""))),e.location&&!y(e.location)&&a.createElement("h5",{className:"location"},"Location: ",e.location),e.expiryDate&&a.createElement("h5",null,e.expiryDate),e.startDate&&a.createElement("h5",null," Start Date: ",e.startDate),e.publishedDate&&a.createElement("h5",null,e.publishedDate),e.vacancyType&&a.createElement("h5",null,"Vacancy type : ",e.vacancyType),(e==null?void 0:e.postedDate)&&a.createElement(a.Fragment,null,a.createElement("h5",null,"Date posted: ",e.postedDate),a.createElement("button",{className:"source"},a.createElement("a",{href:e==null?void 0:e.href,target:"_blank",rel:"noopener noreferrer",style:{color:"white"}},"original source"))),(e==null?void 0:e.apply)&&a.createElement("a",{href:e==null?void 0:e.apply,target:"_blank",rel:"noopener noreferrer",className:"source",style:{backgroundColor:"goldenrod",width:"100px",height:"20px",lineHeight:"20px",textAlign:"center",color:"white"}},"apply"),a.createElement("hr",{className:"line"}),((u=e==null?void 0:e.content)==null?void 0:u.length)>0&&a.createElement(a.Fragment,null,a.createElement("div",{className:"full-details",dangerouslySetInnerHTML:{__html:e==null?void 0:e.content.map(l=>l.replaceAll(/\.(?=[A-Z0-9 ])/g,".<br/><br/>"))}}),a.createElement("hr",{className:"line"})),b(),Array.isArray(e==null?void 0:e.details)&&a.createElement("div",{className:"full-details",dangerouslySetInnerHTML:{__html:(o=e==null?void 0:e.details)==null?void 0:o.map(l=>l)}}),!Array.isArray(e==null?void 0:e.details)&&a.createElement(a.Fragment,null,a.createElement("div",{className:e!=null&&e.summary?"small full-details":"full-details",dangerouslySetInnerHTML:{__html:(p=e==null?void 0:e.details)==null?void 0:p.replaceAll(/\.(?=[A-Z0-9 ])/g,".<br/><br/>")}}),c())),a.createElement("br",null),a.createElement("nav",{className:"sm-nav"},a.createElement(v,{style:{color:"white",width:"40px",height:"40px",cursor:"pointer",margin:"0"},onClick:l=>{l.preventDefault(),r(`/#${e==null?void 0:e.uuid}`)}}))))}export{_ as default};
