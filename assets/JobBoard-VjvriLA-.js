import{r as N,R as t,I as v,u as f}from"./vendor-AJt8eDY0.js";import{i as b}from"./isObject-FVN2IN1r.js";import{J as k}from"./index-rWggqqZ0.js";function C(){const l=f();function n(s){l(s)}return n}function j(){const{PublicJobs:l,PrivateJobs:n,OtherPrivateJobs:s,AgencyIcons:g,ReadMore:h}=N.useContext(k),u=C(),o=(e,a)=>{e.preventDefault(),h(a),u("/post_information")},E=e=>t.createElement("section",{className:"scroll-posts"},e.map((a,r)=>t.createElement("article",{className:"job-post",id:a==null?void 0:a.uuid,key:r,title:a.title,onClick:c=>{o(c,a)}},t.createElement("div",{className:"company-logo"},t.createElement("img",{loading:"lazy",src:a.imgSrc,alt:"company logo"})),t.createElement("p",{className:"title"},a.title)))),i=e=>t.createElement(t.Fragment,null,t.createElement("hr",null),t.createElement("h3",{className:"i"},e),t.createElement("hr",null),t.createElement("br",null));return t.createElement("dialog",{open:!0,id:"board"},t.createElement("form",null,l().blogPosts.length>0&&t.createElement(t.Fragment,null,i("Government Departments / Entites with Vacancies"),E(l().blogPosts)),n().blogPosts.length>0&&t.createElement(t.Fragment,null,t.createElement("br",null),i("Private Companies Hiring"),E(n().blogPosts)),i("Private Jobs from other companies (which may be smaller or not that famous)"),t.createElement("section",{className:"icons i"},g.map((e,a)=>t.createElement("img",{key:a,src:e.src,title:e.title,alt:e.title,className:"agency-icon"}))),t.createElement("h3",null),t.createElement("hr",null),t.createElement("section",{className:"posts"},s().map((e,a)=>{var r,c,d,y;return e!=null&&e.summary?t.createElement("article",{id:e==null?void 0:e.uuid,className:"sa-youth",key:a},e==null?void 0:e.jobTitle,t.createElement("img",{src:"./assets/"+e.iconLink,alt:"agency icon",className:"icon",title:"agency icon",style:{boarderRadius:"4px"}}),(e==null?void 0:e.summary)&&t.createElement("span",{dangerouslySetInnerHTML:{__html:e.summary}}),t.createElement("hr",null),t.createElement("br",null),t.createElement("button",{className:"read-more",onClick:m=>{o(m,e)}},"Read More")):t.createElement("article",{className:"post",key:a},t.createElement("h3",{className:"title"}," ",e==null?void 0:e.jobTitle),t.createElement("br",null)," ",t.createElement("hr",null),t.createElement("section",{className:"post-summary"},t.createElement("img",{src:"./assets/"+e.iconLink,alt:"agency icon",className:"icon",title:"agency icon"}),t.createElement("br",null),(e==null?void 0:e.jobSpecFields)&&t.createElement("p",{className:"job-field",title:e.jobSpecFields},e.jobSpecFields),t.createElement("br",null),(e==null?void 0:e.province)&&t.createElement("h5",{className:"province"},"Province: ",e.province),(e==null?void 0:e.location)&&b(e.location)&&t.createElement("span",null,t.createElement("h5",{className:"location"},"Region: ",(c=(r=e.location)==null?void 0:r.region)==null?void 0:c.replace(",","")),t.createElement("h5",{className:"location"},"City: ",(y=(d=e.location)==null?void 0:d.city)==null?void 0:y.replace(",",""))),(e==null?void 0:e.location)&&!b(e.location)&&t.createElement("h5",{className:"location"},"Location: ",e.location),(e==null?void 0:e.expiryDate)&&t.createElement("h5",null,e.expiryDate),(e==null?void 0:e.startDate)&&t.createElement("h5",null," Start Date: ",e.startDate),(e==null?void 0:e.publishedDate)&&t.createElement("h5",null,e.publishedDate),(e==null?void 0:e.vacancyType)&&t.createElement("h5",null,"Vacancy type : ",e.vacancyType),t.createElement("br",null),t.createElement("section",{className:"details"},Array.isArray(e.details)&&t.createElement("div",{className:"short-detail",dangerouslySetInnerHTML:{__html:e.details[1]}}),!Array.isArray(e.details)&&t.createElement("div",{className:"snippet",dangerouslySetInnerHTML:{__html:e.details}}))),t.createElement("br",null),t.createElement("hr",null),t.createElement("br",null),t.createElement("button",{className:"read-more",onClick:m=>{o(m,e)}},"Read More"))})),t.createElement("br",null),t.createElement("nav",{className:"sm-nav"},t.createElement(v,{style:{color:"white",width:"40px",height:"40px",cursor:"pointer"},onClick:e=>{e.preventDefault(),u("/")}}))))}export{j as default};
