import{R as e,P as t,r as h,A as q,j as x,k as L}from"./vendor-DasOq3Un.js";import{u as U,c as F,f as H}from"./index-qA9riuw7.js";/* empty css             */function E({currentPage:i,totalPages:r,onPageChange:a}){const s=()=>{const o=[],l=Math.max(1,i-1),d=Math.min(r,l+3);for(let g=l;g<=d;g++)o.push(g);return o},n=o=>{a(o);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return e.createElement("div",{className:"pagination"},e.createElement("button",{onClick:()=>n(i-1),disabled:i===1},"Previous"),s().map(o=>e.createElement("button",{key:o,className:o===i?"active":"",onClick:()=>n(o)},o)),e.createElement("button",{onClick:()=>n(i+1),disabled:i===r},"Next"))}E.propTypes={currentPage:t.number.isRequired,totalPages:t.number.isRequired,onPageChange:t.func.isRequired};const S=({pdfImages:i})=>{const[r,a]=h.useState(1),[s,n]=h.useState(!1),[o,l]=h.useState(1),d=h.useRef(null),g=()=>{const u=new Image;u.src=i[o-1],u.onload=()=>{const m=d.current,f=m.getContext("2d"),v=window.devicePixelRatio||1,D=s?window.innerWidth:m.parentElement.clientWidth,O=Math.min(D/u.width,1),A=r*O,y=u.width*A,b=u.height*A;m.width=y*v,m.height=b*v,m.style.width=`${y}px`,m.style.height=`${b}px`,f.clearRect(0,0,m.width,m.height),f.scale(v,v),f.drawImage(u,0,0,y,b)},u.onerror=()=>{console.error("Failed to load image:",u.src);const m=d.current,f=m.getContext("2d");f.clearRect(0,0,m.width,m.height),f.font="20px Arial",f.fillStyle="red",f.fillText("Failed to load page",10,50)}};h.useEffect(()=>{g()},[r,s,o]);const c=()=>a(u=>Math.min(u+.1,2)),p=()=>a(u=>Math.max(u-.1,.5)),R=()=>n(!0),M=()=>n(!1),I=()=>{o<i.length&&l(o+1)},N=()=>{o>1&&l(o-1)};return e.createElement("div",{className:`pdf-viewer-container ${s?"full-view":"min-view"}`},s&&e.createElement("div",{className:"pdf-navbar"},e.createElement("button",{className:"minimize-view-btn",onClick:M},e.createElement(q,null)),e.createElement("div",{className:"zoom"},e.createElement("button",{onClick:c},e.createElement(x,null)),e.createElement("button",{onClick:p,disabled:r<=.5},e.createElement(L,null))),e.createElement("div",{className:"pdf-pagination"},e.createElement("button",{onClick:N,disabled:o<=1},"Prev"),e.createElement("span",null,"Page ",o," of ",i.length),e.createElement("button",{onClick:I,disabled:o>=i.length},"Next"))),e.createElement("canvas",{onClick:R,ref:d,className:"pdf-viewer-canvas"}))};S.propTypes={pdfImages:t.array.isRequired};function T({pdfImages:i,isLoaded:r}){return e.createElement("section",{className:"pdf-post"},r?e.createElement("div",{className:"pdf-container"},e.createElement(S,{pdfImages:i})):e.createElement("div",{className:"placeholder pdf-container-placeholder"}))}T.propTypes={pdfImages:t.array.isRequired,isLoaded:t.bool.isRequired};function C({iframeUrls:i}){const[r,a]=h.useState(!1),[s,n]=h.useState(0),o=c=>{c.stopPropagation(),a(p=>!p)},l=()=>{n(c=>c<i.length-1?c+1:c)},d=()=>{n(c=>c>0?c-1:c)},g=Array.isArray(i)?i[s]:i;return e.createElement("div",{className:`google-doc-viewer ${r?"fullscreen":""}`},e.createElement("iframe",{src:g,allowFullScreen:!0,className:"google-doc-iframe"}),e.createElement("div",{className:"navigation-buttons"},Array.isArray(i)&&e.createElement(e.Fragment,null,e.createElement("button",{className:"prev-doc-button",onClick:d,disabled:s===0},"Previous"),e.createElement("button",{className:"next-doc-button",onClick:l,disabled:s===i.length-1},"Next"))),e.createElement("button",{className:"toggle-fullscreen",onClick:o},r?"Exit Full Screen":"Full Screen"))}C.propTypes={iframeUrls:t.oneOfType([t.string,t.arrayOf(t.string)]).isRequired};function B(i,r){return e.useMemo(()=>{if(i.length===0)return e.createElement(e.Fragment,null);const s=({innerHTML:n})=>e.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:n}});return s.propTypes={innerHTML:t.string.isRequired},e.createElement("section",null,i.map((n,o)=>{var l,d;return e.createElement("article",{className:"job-post",key:o,onClick:()=>r(n)},n.imgSrc||n.iconLink?e.createElement("div",{className:"company-logo"},e.createElement("img",{loading:"lazy",src:n.imgSrc||n.iconLink,alt:"company logo"})):null,e.createElement("p",{className:"title"},(n==null?void 0:n.title)||(n==null?void 0:n.jobTitle)),((l=n==null?void 0:n.content)==null?void 0:l.length)>0?e.createElement(s,{innerHTML:n.content}):((d=n==null?void 0:n.details)==null?void 0:d.length)>0?e.createElement(s,{innerHTML:n.details}):n!=null&&n.iframe?e.createElement(C,{iframeUrls:n.iframe}):null,!(n!=null&&n.iframe)&&e.createElement("button",{className:"read-more-button",onClick:()=>r(n)},"Read More"))}))},[i,r])}function P({paginatedData:i,onPostClick:r}){const[a]=U(5e3);return e.createElement("div",{id:"posts"},i.map(s=>s.type==="pdf"?e.createElement(T,{key:s.id,pdfImages:s.pdfImages,isLoaded:a}):e.createElement(k,{key:s.id,post:s,onPostClick:r})))}P.propTypes={paginatedData:t.arrayOf(t.shape({id:t.string.isRequired,type:t.string.isRequired,pdfImages:t.array,imgSrc:t.string,iconLink:t.string,title:t.string,jobTitle:t.string,details:t.string,content:t.string,apply:t.string,href:t.string})).isRequired,onPostClick:t.func.isRequired};function k({post:i,onPostClick:r}){return B([i],r)}k.propTypes={post:t.shape({id:t.string.isRequired,type:t.string.isRequired,pdfImages:t.array,imgSrc:t.string,iconLink:t.string,title:t.string,jobTitle:t.string,details:t.string,content:t.string,apply:t.string,href:t.string}).isRequired,onPostClick:t.func.isRequired};const j=[{file:"1.pdf",images:["./assets/pdf_images/1/1_page_1.png","./assets/pdf_images/1/1_page_2.png"]},{file:"10.pdf",images:["./assets/pdf_images/10/10_page_1.png","./assets/pdf_images/10/10_page_2.png"]},{file:"11.pdf",images:["./assets/pdf_images/11/11_page_1.png","./assets/pdf_images/11/11_page_2.png"]},{file:"12.pdf",images:["./assets/pdf_images/12/12_page_1.png"]},{file:"13.pdf",images:["./assets/pdf_images/13/13_page_1.png"]},{file:"14.pdf",images:["./assets/pdf_images/14/14_page_1.png","./assets/pdf_images/14/14_page_2.png"]},{file:"15.pdf",images:["./assets/pdf_images/15/15_page_1.png","./assets/pdf_images/15/15_page_2.png"]},{file:"16.pdf",images:["./assets/pdf_images/16/16_page_1.png","./assets/pdf_images/16/16_page_2.png"]},{file:"17.pdf",images:["./assets/pdf_images/17/17_page_1.png","./assets/pdf_images/17/17_page_2.png"]},{file:"18.pdf",images:["./assets/pdf_images/18/18_page_1.png"]},{file:"19.pdf",images:["./assets/pdf_images/19/19_page_1.png"]},{file:"2.pdf",images:["./assets/pdf_images/2/2_page_1.png","./assets/pdf_images/2/2_page_2.png"]},{file:"20.pdf",images:["./assets/pdf_images/20/20_page_1.png","./assets/pdf_images/20/20_page_2.png","./assets/pdf_images/20/20_page_3.png","./assets/pdf_images/20/20_page_4.png"]},{file:"21.pdf",images:["./assets/pdf_images/21/21_page_1.png","./assets/pdf_images/21/21_page_2.png","./assets/pdf_images/21/21_page_3.png"]},{file:"22.pdf",images:["./assets/pdf_images/22/22_page_1.png","./assets/pdf_images/22/22_page_2.png"]},{file:"23.pdf",images:["./assets/pdf_images/23/23_page_1.png","./assets/pdf_images/23/23_page_2.png"]},{file:"24.pdf",images:["./assets/pdf_images/24/24_page_1.png","./assets/pdf_images/24/24_page_2.png"]},{file:"25.pdf",images:["./assets/pdf_images/25/25_page_1.png"]},{file:"26.pdf",images:["./assets/pdf_images/26/26_page_1.png","./assets/pdf_images/26/26_page_2.png","./assets/pdf_images/26/26_page_3.png","./assets/pdf_images/26/26_page_4.png","./assets/pdf_images/26/26_page_5.png","./assets/pdf_images/26/26_page_6.png","./assets/pdf_images/26/26_page_7.png","./assets/pdf_images/26/26_page_8.png","./assets/pdf_images/26/26_page_9.png","./assets/pdf_images/26/26_page_10.png","./assets/pdf_images/26/26_page_11.png","./assets/pdf_images/26/26_page_12.png","./assets/pdf_images/26/26_page_13.png","./assets/pdf_images/26/26_page_14.png","./assets/pdf_images/26/26_page_15.png","./assets/pdf_images/26/26_page_16.png","./assets/pdf_images/26/26_page_17.png","./assets/pdf_images/26/26_page_18.png","./assets/pdf_images/26/26_page_19.png","./assets/pdf_images/26/26_page_20.png","./assets/pdf_images/26/26_page_21.png","./assets/pdf_images/26/26_page_22.png","./assets/pdf_images/26/26_page_23.png","./assets/pdf_images/26/26_page_24.png","./assets/pdf_images/26/26_page_25.png","./assets/pdf_images/26/26_page_26.png","./assets/pdf_images/26/26_page_27.png","./assets/pdf_images/26/26_page_28.png","./assets/pdf_images/26/26_page_29.png","./assets/pdf_images/26/26_page_30.png","./assets/pdf_images/26/26_page_31.png","./assets/pdf_images/26/26_page_32.png","./assets/pdf_images/26/26_page_33.png","./assets/pdf_images/26/26_page_34.png","./assets/pdf_images/26/26_page_35.png","./assets/pdf_images/26/26_page_36.png","./assets/pdf_images/26/26_page_37.png","./assets/pdf_images/26/26_page_38.png","./assets/pdf_images/26/26_page_39.png","./assets/pdf_images/26/26_page_40.png","./assets/pdf_images/26/26_page_41.png","./assets/pdf_images/26/26_page_42.png","./assets/pdf_images/26/26_page_43.png","./assets/pdf_images/26/26_page_44.png","./assets/pdf_images/26/26_page_45.png","./assets/pdf_images/26/26_page_46.png","./assets/pdf_images/26/26_page_47.png","./assets/pdf_images/26/26_page_48.png","./assets/pdf_images/26/26_page_49.png","./assets/pdf_images/26/26_page_50.png","./assets/pdf_images/26/26_page_51.png","./assets/pdf_images/26/26_page_52.png","./assets/pdf_images/26/26_page_53.png","./assets/pdf_images/26/26_page_54.png","./assets/pdf_images/26/26_page_55.png","./assets/pdf_images/26/26_page_56.png","./assets/pdf_images/26/26_page_57.png","./assets/pdf_images/26/26_page_58.png","./assets/pdf_images/26/26_page_59.png","./assets/pdf_images/26/26_page_60.png","./assets/pdf_images/26/26_page_61.png","./assets/pdf_images/26/26_page_62.png","./assets/pdf_images/26/26_page_63.png","./assets/pdf_images/26/26_page_64.png","./assets/pdf_images/26/26_page_65.png","./assets/pdf_images/26/26_page_66.png","./assets/pdf_images/26/26_page_67.png"]},{file:"3.pdf",images:["./assets/pdf_images/3/3_page_1.png","./assets/pdf_images/3/3_page_2.png"]},{file:"4.pdf",images:["./assets/pdf_images/4/4_page_1.png","./assets/pdf_images/4/4_page_2.png"]},{file:"5.pdf",images:["./assets/pdf_images/5/5_page_1.png","./assets/pdf_images/5/5_page_2.png"]},{file:"6.pdf",images:["./assets/pdf_images/6/6_page_1.png","./assets/pdf_images/6/6_page_2.png"]},{file:"7.pdf",images:["./assets/pdf_images/7/7_page_1.png","./assets/pdf_images/7/7_page_2.png"]},{file:"8.pdf",images:["./assets/pdf_images/8/8_page_1.png"]},{file:"9.pdf",images:["./assets/pdf_images/9/9_page_1.png","./assets/pdf_images/9/9_page_2.png"]}],G="/assets/agency_icons/minopex.png",_="minopex",z=[{jobTitle:"Engineering Artisan – Millwright (Shift)",publishedDate:"Published 13 August 2024",expiryDate:"Closing Date: 20 August 2024",location:"Remote",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Ensersa (Pty) Ltd</label>
                    </div>



                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="MinimumExperience">Minimum experience</label>
                    <span><label for="Associate">Associate</label></span>
                </div>
                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="CompanyPrimaryIndustry">Company primary industry</label>
                    <span></span><label for="Mining_and_Metals">Mining and Metals</label>
                </div>
                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="FunctionalAreaName">Job functional area</label>
                    <span><label for="Mining">Mining</label></span>
                </div>

            </div>
            <div class="col-md-6">
                                            </div>
        </div>


    `,`
        <div class="heading-blue">
            <h1>Job Description</h1>
        </div>
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This post will be based at various Rustenburg sites.<br><br><strong>Description</strong> <br><br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to the maintenance requirements, standards and specifications</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and company standards to report all defects and breakdowns on equipment and machinery to the Supervisor</li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment</li><li>Ensure that all installations and equipment are safe and in good working order after task completion</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems</li><li>Consult with production teams on maintenance activities that effects production</li><li>Supports the achievement of engineering availability and production performance levels</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the maintenance of the planned/asset maintenance system</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent</li><li>Valid section 13 Trade test / Section 26(D) certificate required</li><li>Valid driver’s license code B, EB or C1</li></ul><strong>Experience and Skills&nbsp;Requirements</strong><br><ul><li>Minimum of 5 years’ experience as a qualified Millwright</li><li>English language proficiency&nbsp;</li><li>Time management skills<br><br></li></ul><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/i00aet" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/i00aet",iconLink:"/assets/agency_icons/minopex.png",uuid:"pb7faa3d6-433b-4c75-9c13-ec703fa0ef51"}],Y={iconLink:G,title:_,blogPosts:z},V="/assets/agency_icons/SA-Youth.png",W="SA-Youth",Q=[{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">PEP South Africa</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Mahikeng, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 07 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">PEP South Africa</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Mahikeng, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 07 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 2a2674f5-8442-4495-8e59-f2dc356ca04a</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA4ADkAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p2c99276d-43f8-4197-9757-22da03394caa"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">In - Store Brand Ambassador: Rustenburg</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Edge</h3>
                    </div>
                </div>
            
            
                <div class="row verified mb-3">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle"></i>Partner Opportunity</p>
                    </div>
                </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Rustenburg, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 16 July 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">In - Store Brand Ambassador: Rustenburg</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Edge</h2>
                </div>
            </div>
                <div class="row verified mb-3 mt-0">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle" style="margin-right:2px;"></i><span>Partner Opportunity</span></p>
                    </div>
                </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Rustenburg, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 16 July 2024</p>
                            </div>
                            <div class="meta-item">
                                <i class="icon icon-calendar-x"></i>
                                <p class="mb-0"><strong>Closing date:</strong> 15 August 2024 </p>
                            </div>
                                    <div class="meta-item">
                                        <i class="icon icon-cash"></i>
                                        <p class="mb-0"><strong>Salary: </strong>R 5,000.00 per month - Base pay on fixed amount only</p>
                                    </div>
                            <div class="meta-item">
                                <i class="icon icon-briefcase"></i>
                                <p class="mb-0"><strong>Job type: </strong>Fixed-term</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 1521482</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>What is this job all about?</strong></p><p></p><p>As a Client Brand Ambassador, employed by Edge Field Marketing (the Company) you will be assigned to work within a selected retail store. &nbsp;Your main focus is to provide our Client product information to potential customers and to achieve daily targets.</p><p></p><p><strong>Responsibilities include, but are not limited to:</strong></p><p></p><ul><li><p>Actively promoting the Client's brand to customers.</p></li><li><p>Providing customers with information or assistance on the use of the Clients’ channels.</p></li></ul><p></p>
                            <h2>Role requirement</h2>
                            <p class="text-break white-space-pre-line"></p><p>Are you someone who thrives on the thrill of connecting with potential customers? Do you find the world of sales exciting, and are you always eager to push the boundaries to achieve your targets? If you answered "yes" to these questions, then we have an exciting opportunity waiting for you!</p><p></p><p><strong>Why Choose Us?</strong> At Edge Field Marketing, we believe in fostering a dynamic and supportive sales environment that encourages growth, creativity, and success. We're on the lookout for enthusiastic individuals who are ready to embark on a rewarding journey with us.</p><p></p><p><strong>What We Offer:</strong></p><p></p><ul><li><p>Extensive Training</p></li><li><p>Supportive Team</p></li><li><p>Fun and Inclusive Culture</p><p></p></li></ul><p><strong>Here's what we're looking for in our ideal candidate:</strong></p><p></p><ul><li><p><strong>Education:</strong> A matric qualification is required to demonstrate your commitment to personal growth and development.</p></li><li><p><strong>Unemployed:</strong> We're looking for dedicated individuals who are ready to commit their full energy and focus to this role.</p></li><li><p><strong>Availability:</strong> You must be available to work 5 days a week, ensuring your commitment to achieving our sales targets.</p></li><li><p><strong>Educational Commitments: </strong>We understand the importance of your education, so we require candidates who are not currently involved in any study or learnership programs that may require you to take extended leave.</p></li><li><p><strong>Physical Stamina:</strong> This role requires you to be on your feet all day, every day, so physical fitness is essential.</p></li><li><p><strong>Location:</strong> You should reside within 15km of the area advertised, allowing for easy access to our workplace.</p><p></p></li></ul><p>Ready to elevate your sales career? <strong>Apply now by completing the following steps:&nbsp;</strong></p><ul><li><p>Apply here through SAYouth</p></li><li><p>Complete the relevant assessments </p></li><li><p>Complete a video/telephonic interview with one of our recruiters</p></li><li><p>If successful, attend a 2 day bridge/training programme&nbsp;</p><p></p></li></ul><p><strong>IMPORTANT NOTE: Due to the high volumes of applications, kindly consider your application as unsuccessful if you have not been contacted within 4 weeks.&nbsp;</strong></p><p><strong><em>                               Edge Field Marketing is an Equal Opportunity Employer.</em></strong></p><p></p><p><em>Disclaimer: By supplying Edge Field Marketing your personal information, you agree that your information will be stored according to the requirements of the POPIA Act.</em></p><p></p>
                            <h2>Benefits</h2>
                            <p class="text-break white-space-pre-line"></p><ul><li><p>Group Life Cover.</p></li><li><p>Employee Assistance Programme.</p></li><li><p>Training and development.</p></li></ul><p></p>
                </div>
            </div>
            
                                    <yth-navbar zindex="1030" variant="bottom" class="hydrated" style="z-index: 1030;">
                                        <yth-button expanded="" variant="outline" onclick="onClickAction" href="/Search/SearchIndex?c=Jobs&amp;sl=Tlhabane%20Unit%201,%20Tlhabane,%200299&amp;sli=2062972&amp;ld=5&amp;pn=1&amp;ac=Revert%20to%20search%20results" class="hydrated">
                                            Cancel
                                        </yth-button>                                                
                                            <yth-button expanded="" auto-click-loader="" href="/View/OpportunityApplyInternal?tracker=MQA2ADIANgA3ADcAMAA0ADMAMgA" variant="fill" class="hydrated">
                                                Apply now
                                            </yth-button>
                                    </yth-navbar>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAMQA0ADgAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p9c913d74-a6a9-4c24-bd35-3ec7151a6721"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">In - Store Brand Ambassador: Rustenburg</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Edge</h3>
                    </div>
                </div>
            
            
                <div class="row verified mb-3">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle"></i>Partner Opportunity</p>
                    </div>
                </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Rustenburg, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 16 July 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">In - Store Brand Ambassador: Rustenburg</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Edge</h2>
                </div>
            </div>
                <div class="row verified mb-3 mt-0">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle" style="margin-right:2px;"></i><span>Partner Opportunity</span></p>
                    </div>
                </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Rustenburg, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 16 July 2024</p>
                            </div>
                            <div class="meta-item">
                                <i class="icon icon-calendar-x"></i>
                                <p class="mb-0"><strong>Closing date:</strong> 15 August 2024 </p>
                            </div>
                                    <div class="meta-item">
                                        <i class="icon icon-cash"></i>
                                        <p class="mb-0"><strong>Salary: </strong>R 5,000.00 per month - Base pay on fixed amount only</p>
                                    </div>
                            <div class="meta-item">
                                <i class="icon icon-briefcase"></i>
                                <p class="mb-0"><strong>Job type: </strong>Fixed-term</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 1521488</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>What is this job all about?</strong></p><p></p><p>As a Client Brand Ambassador, employed by Edge Field Marketing (the Company) you will be assigned to work within a selected retail store. &nbsp;Your main focus is to provide our Client product information to potential customers and to achieve daily targets.</p><p></p><p><strong>Responsibilities include, but are not limited to:</strong></p><p></p><ul><li><p>Actively promoting the Client's brand to customers.</p></li><li><p>Providing customers with information or assistance on the use of the Clients’ channels.</p></li></ul><p></p>
                            <h2>Role requirement</h2>
                            <p class="text-break white-space-pre-line"></p><p>Are you someone who thrives on the thrill of connecting with potential customers? Do you find the world of sales exciting, and are you always eager to push the boundaries to achieve your targets? If you answered "yes" to these questions, then we have an exciting opportunity waiting for you!</p><p></p><p><strong>Why Choose Us?</strong> At Edge Field Marketing, we believe in fostering a dynamic and supportive sales environment that encourages growth, creativity, and success. We're on the lookout for enthusiastic individuals who are ready to embark on a rewarding journey with us.</p><p></p><p><strong>What We Offer:</strong></p><p></p><ul><li><p>Extensive Training</p></li><li><p>Supportive Team</p></li><li><p>Fun and Inclusive Culture</p><p></p></li></ul><p><strong>Here's what we're looking for in our ideal candidate:</strong></p><p></p><ul><li><p><strong>Education:</strong> A matric qualification is required to demonstrate your commitment to personal growth and development.</p></li><li><p><strong>Unemployed:</strong> We're looking for dedicated individuals who are ready to commit their full energy and focus to this role.</p></li><li><p><strong>Availability:</strong> You must be available to work 5 days a week, ensuring your commitment to achieving our sales targets.</p></li><li><p><strong>Educational Commitments: </strong>We understand the importance of your education, so we require candidates who are not currently involved in any study or learnership programs that may require you to take extended leave.</p></li><li><p><strong>Physical Stamina:</strong> This role requires you to be on your feet all day, every day, so physical fitness is essential.</p></li><li><p><strong>Location:</strong> You should reside within 15km of the area advertised, allowing for easy access to our workplace.</p><p></p></li></ul><p>Ready to elevate your sales career? <strong>Apply now by completing the following steps:&nbsp;</strong></p><ul><li><p>Apply here through SAYouth</p></li><li><p>Complete the relevant assessments </p></li><li><p>Complete a video/telephonic interview with one of our recruiters</p></li><li><p>If successful, attend a 2 day bridge/training programme&nbsp;</p><p></p></li></ul><p><strong>IMPORTANT NOTE: Due to the high volumes of applications, kindly consider your application as unsuccessful if you have not been contacted within 4 weeks.&nbsp;</strong></p><p><strong><em>                               Edge Field Marketing is an Equal Opportunity Employer.</em></strong></p><p></p><p><em>Disclaimer: By supplying Edge Field Marketing your personal information, you agree that your information will be stored according to the requirements of the POPIA Act.</em></p><p></p>
                            <h2>Benefits</h2>
                            <p class="text-break white-space-pre-line"></p><ul><li><p>Group Life Cover.</p></li><li><p>Employee Assistance Programme.</p></li><li><p>Training and development.</p></li></ul><p></p>
                </div>
            </div>
            
                                    <yth-navbar zindex="1030" variant="bottom" class="hydrated" style="z-index: 1030;">
                                        <yth-button expanded="" variant="outline" onclick="onClickAction" href="/Search/SearchIndex?c=Jobs&amp;sl=Tlhabane%20Unit%201,%20Tlhabane,%200299&amp;sli=2062972&amp;ld=5&amp;pn=1&amp;ac=Revert%20to%20search%20results" class="hydrated">
                                            Cancel
                                        </yth-button>                                                
                                            <yth-button expanded="" auto-click-loader="" href="/View/OpportunityApplyInternal?tracker=MQA2ADIANgA3ADcAMAA0ADgAOAA" variant="fill" class="hydrated">
                                                Apply now
                                            </yth-button>
                                    </yth-navbar>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAMQA0ADgAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pe14bdfcc-6be8-4a0f-9c15-bab87c95720b"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Barista - 12 month Learnership Opportunity - Rustenburg</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Famous Brands</h3>
                    </div>
                </div>
            
            
                <div class="row verified mb-3">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle"></i>Partner Opportunity</p>
                    </div>
                </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Rustenburg, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 14 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Barista - 12 month Learnership Opportunity - Rustenburg</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Famous Brands</h2>
                </div>
            </div>
                <div class="row verified mb-3 mt-0">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle" style="margin-right:2px;"></i><span>Partner Opportunity</span></p>
                    </div>
                </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Rustenburg, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 14 August 2024</p>
                            </div>
                            <div class="meta-item">
                                <i class="icon icon-calendar-x"></i>
                                <p class="mb-0"><strong>Closing date:</strong> 20 August 2024 </p>
                            </div>
                                    <div class="meta-item">
                                        <i class="icon icon-cash"></i>
                                        <p class="mb-0"><strong>Salary: </strong>R 4,407.00 per month - Base pay on fixed amount only</p>
                                    </div>
                            <div class="meta-item">
                                <i class="icon icon-briefcase"></i>
                                <p class="mb-0"><strong>Job type: </strong>Fixed-term</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 1529848</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>Are you passionate about Coffee?</strong></p>
<p><strong>Do you want to become the next Barista?</strong></p>
<p>We are looking for enthusiastic young people interested in joining our 12 month learnership programme for Baristas. Trainiees will gain an understanding of everything about Coffee. We will upskill you to a Barista and train/upskill you in Food Safety and Customer Service. Furthermore, you will learn about various coffee and relevant product preparation and presentation techniques.</p>
<p><strong>Position Description:</strong></p>
<ul>
<li>Preparation and presentation of all Coffee and relevant products.</li>
<li>To be responsible for the Barista area for the duration of the shift</li>
<li>Correct cleaning, sterilisation, utilisation of all equipment.</li>
<li>Adhering to the company’s hygiene and safety standards.</li>
</ul>
<p><strong>Coffee/Beverage Preparations:</strong></p>
<ul>
<li>To receive and check all raw materials/ ingredients received from the store/fridges daily in accordance with procedures.</li>
<li>To prepare the following daily in accordance with the procedures and recipes .</li>
<li>To clean/sterilise/fill/connect the following machinery/equipment prior to preparing orders in accordance with procedures.</li>
</ul>
<p><strong>Cleaning Functions:&nbsp;</strong></p>
<ul>
<li>To adhere strictly to all hygiene and housekeeping standards always relating to the soft serve area including the cleaning schedules for the following (but not exhaustive of): -Walls -Fridges -Cupboards -Floors -Windows -Work surfaces, etc.</li>
<li>To empty, clean with water, sterilise and disconnect all machinery/equipment at the end of the day in accordance with procedures.</li>
<li>To store any excess ingredients/stocks in Tupperware in the fridge at the end of the day in accordance with procedures.</li>
</ul>
<p><strong>General Functions:&nbsp; </strong></p>
<ul>
<li>To always adhere to the company’s standards regarding customer relations where contact with customers may be made.</li>
<li>To assist in any other areas of the business as requested and in accordance with procedures/standards.</li>
<li>To adhere to the company’s safety standards and to report any accident that may occur timorously in accordance with procedures/standards.</li>
<li>To be always punctual and keep absenteeism to a minimum in accordance with company policy.</li>
<li>To adhere strictly to the standards of dress code as communicated by the company, ensuring that uniforms are always maintained in a neat and clean condition.</li>
<li>To perform any other reasonable tasks that may be assigned at the discretion of Management.</li>
<li>This role is in Gauteng</li>
</ul><p></p>
                            <h2>Role requirement</h2>
                            <p class="text-break white-space-pre-line"></p><p>&nbsp;</p>
<p><strong>Minimum Requirements:</strong></p>
<p>Please note that for this opportunity you will need to share your vaccination status<br>Grade 12<br>No criminal record<br>Unemployed<br>Basic computer literacy skills, e.g. MS Word, Excel, PowerPoint<br>Age criteria 18-28 years old.<br>Have not been in a YES Programme in the past<br>· Should not be studying full-time in the year of employment (1 October 2024 – 30 September 2025)</p>
<p>· Ability to walk, bend, and stand for extended periods</p>
<p>Availability to work around peak hours, including nights, early mornings, weekends, and holidays.</p>
<p><strong>Skills</strong>.</p>
<ul>
<li>Willingness to continue training &amp; learning about coffee preparation.</li>
<li>Exceptional listening and communication skills. &nbsp;A good grasp of English.</li>
<li>Ability to walk, bend, and stand for extended periods.</li>
<li>Availability to work shifts and around peak hours, including nights, early mornings, weekends, and holidays.</li>
<li>A polite, engaging personality.</li>
<li>Commitment to customer satisfaction and service excellence.</li>
<li>Willingness to work as part of a high-energy, efficient team in a fast-paced environment.</li>
<li>Computer Literate advantageous (ease to complete online training and Assessments).</li>
</ul>
<p><strong>*We encourage people with disabilities to apply for this job.</strong></p><p></p>
                            <h2>Benefits</h2>
                            <p class="text-break white-space-pre-line"></p><ul>
<li>A transport stipend will be provided for the first month.</li>
</ul><p></p>
                </div>
            </div>
            
                                    <yth-navbar zindex="1030" variant="bottom" class="hydrated" style="z-index: 1030;">
                                        <yth-button expanded="" variant="outline" onclick="onClickAction" href="/Search/SearchIndex?c=Jobs&amp;sl=Tlhabane%20Unit%201,%20Tlhabane,%200299&amp;sli=2062972&amp;ld=5&amp;pn=1&amp;ac=Revert%20to%20search%20results" class="hydrated">
                                            Cancel
                                        </yth-button>                                                
                                            <yth-button expanded="" auto-click-loader="" href="/View/OpportunityApplyInternal?tracker=MQA2ADIANgA3ADcAMAA3ADQAMgA" variant="fill" class="hydrated">
                                                Apply now
                                            </yth-button>
                                    </yth-navbar>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOQA4ADQAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p4f5dc07f-37d4-46a4-b0b6-f7bf51f8372b"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">In - Store Brand Ambassador: Bafokeng Mall</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Edge</h3>
                    </div>
                </div>
            
            
                <div class="row verified mb-3">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle"></i>Partner Opportunity</p>
                    </div>
                </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Phokeng, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 15 July 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">In - Store Brand Ambassador: Bafokeng Mall</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Edge</h2>
                </div>
            </div>
                <div class="row verified mb-3 mt-0">
                    <div class="col">
                        <p class="verified-text"><i class="icon icon-check2-circle" style="margin-right:2px;"></i><span>Partner Opportunity</span></p>
                    </div>
                </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Phokeng, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 15 July 2024</p>
                            </div>
                            <div class="meta-item">
                                <i class="icon icon-calendar-x"></i>
                                <p class="mb-0"><strong>Closing date:</strong> 15 August 2024 </p>
                            </div>
                                    <div class="meta-item">
                                        <i class="icon icon-cash"></i>
                                        <p class="mb-0"><strong>Salary: </strong>R 5,000.00 per month - Base pay on fixed amount only</p>
                                    </div>
                            <div class="meta-item">
                                <i class="icon icon-briefcase"></i>
                                <p class="mb-0"><strong>Job type: </strong>Fixed-term</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 1521199</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>What is this job all about?</strong></p><p></p><p>As a Client Brand Ambassador, employed by Edge Field Marketing (the Company) you will be assigned to work within a selected retail store. &nbsp;Your main focus is to provide our Client product information to potential customers and to achieve daily targets.</p><p></p><p><strong>Responsibilities include, but are not limited to:</strong></p><p></p><ul><li><p>Actively promoting the Client's brand to customers.</p></li><li><p>Providing customers with information or assistance on the use of the Clients’ channels.</p></li></ul><p></p>
                            <h2>Role requirement</h2>
                            <p class="text-break white-space-pre-line"></p><p>Are you someone who thrives on the thrill of connecting with potential customers? Do you find the world of sales exciting, and are you always eager to push the boundaries to achieve your targets? If you answered "yes" to these questions, then we have an exciting opportunity waiting for you!</p><p></p><p><strong>Why Choose Us?</strong> At Edge Field Marketing, we believe in fostering a dynamic and supportive sales environment that encourages growth, creativity, and success. We're on the lookout for enthusiastic individuals who are ready to embark on a rewarding journey with us.</p><p></p><p><strong>What We Offer:</strong></p><p></p><ul><li><p>Extensive Training</p></li><li><p>Supportive Team</p></li><li><p>Fun and Inclusive Culture</p><p></p></li></ul><p><strong>Here's what we're looking for in our ideal candidate:</strong></p><p></p><ul><li><p><strong>Education:</strong> A matric qualification is required to demonstrate your commitment to personal growth and development.</p></li><li><p><strong>Unemployed:</strong> We're looking for dedicated individuals who are ready to commit their full energy and focus to this role.</p></li><li><p><strong>Availability:</strong> You must be available to work 5 days a week, ensuring your commitment to achieving our sales targets.</p></li><li><p><strong>Educational Commitments: </strong>We understand the importance of your education, so we require candidates who are not currently involved in any study or learnership programs that may require you to take extended leave.</p></li><li><p><strong>Physical Stamina:</strong> This role requires you to be on your feet all day, every day, so physical fitness is essential.</p></li><li><p><strong>Location:</strong> You should reside within 15km of the area advertised, allowing for easy access to our workplace.</p><p></p></li></ul><p>Ready to elevate your sales career? <strong>Apply now by completing the following steps:&nbsp;</strong></p><ul><li><p>Apply here through SAYouth</p></li><li><p>Complete the relevant assessments </p></li><li><p>Complete a video/telephonic interview with one of our recruiters</p></li><li><p>If successful, attend a 2 day bridge/training programme&nbsp;</p><p></p></li></ul><p><strong>IMPORTANT NOTE: Due to the high volumes of applications, kindly consider your application as unsuccessful if you have not been contacted within 4 weeks.&nbsp;</strong></p><p><strong><em>                               Edge Field Marketing is an Equal Opportunity Employer.</em></strong></p><p></p><p><em>Disclaimer: By supplying Edge Field Marketing your personal information, you agree that your information will be stored according to the requirements of the POPIA Act.</em></p><p></p>
                            <h2>Benefits</h2>
                            <p class="text-break white-space-pre-line"></p><ul><li><p>Group Life Cover.</p></li><li><p>Employee Assistance Programme.</p></li><li><p>Training and development.</p></li></ul><p></p>
                </div>
            </div>
            
                                    <yth-navbar zindex="1030" variant="bottom" class="hydrated" style="z-index: 1030;">
                                        <yth-button expanded="" variant="outline" onclick="onClickAction" href="/Search/SearchIndex?c=Jobs&amp;sl=Tlhabane%20Unit%201,%20Tlhabane,%200299&amp;sli=2062972&amp;ld=5&amp;pn=1&amp;ac=Revert%20to%20search%20results" class="hydrated">
                                            Cancel
                                        </yth-button>                                                
                                            <yth-button expanded="" auto-click-loader="" href="/View/OpportunityApplyInternal?tracker=MQA2ADIANgA3ADcAMQAwADMAOQA" variant="fill" class="hydrated">
                                                Apply now
                                            </yth-button>
                                    </yth-navbar>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAMQAxADkAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pdc7d5175-69fe-437d-b644-947eae96de3b"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">In-Store Associate</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Smollan</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Rustenburg, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 05 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">In-Store Associate</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Smollan</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Rustenburg, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 05 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 760ec4eb-0c95-45b0-a52a-05c7afc7a16c</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>We are looking for a In-Store Associate to join our team! </strong></p><p><br></p><p>As an In-Store Associate, your main role is to make sure Heineken products are always available in stores, displayed correctly, and attractively. This helps increase sales, build customer loyalty, and maintain good relationships with store staff and customers.</p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAAwADkANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p060567aa-65ad-47c2-90e2-2b99726e5905"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">PEP South Africa</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Rustenburg, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 08 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">PEP South Africa</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Rustenburg, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 08 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: cc08833b-e8d2-4a96-bd56-57269b9176c0</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOQAyADAAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p86dafe7b-07e1-4d8d-8d0b-02b6e6f5a0ca"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">PEP South Africa</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Rustenburg, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 13 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">PEP South Africa</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Rustenburg, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 13 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: f0ddbeb0-33b8-471f-b7a7-e81e6a7fc40a</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADcANAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p0789afe5-65b1-465c-9fcf-d20e381f21e2"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Merchandiser - Marikana SA35</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Smollan</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Marikana, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 06 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Merchandiser - Marikana SA35</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Smollan</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Marikana, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 06 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: ee09c544-7767-448c-b207-ef81ed48e3fb</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA0ADQAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p47d732e7-b39f-4e20-96e2-420f7484c222"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Merchandiser</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Smollan</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Marikana, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 12 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Merchandiser</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Smollan</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Marikana, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 12 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 03b03aea-dc56-45b3-a055-4c892b11489e</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOQA3ADIAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p44ec13d7-56f0-413c-ae18-96fdf18fec21"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">PEP South Africa</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Moruleng, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 06 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Part-Time Sales Assistant</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">PEP South Africa</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Moruleng, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 06 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: bf0859ef-bed6-49f2-8259-1af6e58c616c</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA2ADEANgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p60875bba-87af-4cd9-a386-ff16c2d58d63"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Merchandiser - MFS40</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Smollan</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Modderspruit, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 07 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Merchandiser - MFS40</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Smollan</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Modderspruit, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 07 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 5af37b1a-847c-4bab-9054-95cfe264dc22</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA4ADYAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p6f9dafd1-728f-44d3-ae76-bf00a68ee131"},{summary:`
            <div class="row">
                <div class="col">
                    <h2 class="card-title mb-1 pb-1">Merchandiser</h2>
                </div>
            </div>
            
                <div class="row">
                    <div class="col">
                        <h3 class="opportunity-company mb-1 pb-1">Smollan</h3>
                    </div>
                </div>
            
            
            
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-geo-pin-solid"></i>
                        <h5 class="mb-0"><strong>Location:</strong> Modderspruit, North West</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-header-item">
                        <i class="icon icon-calendar-event-solid"></i>
                        <h5 class="mb-0"><strong>Date posted:</strong> 13 August 2024</h5>
                    </div>
                </div>
            </div>
        `,details:`
            
        <div class="card-detail-body">
            <div class="row hpt-3 hmr-6">
                <div class="col-12 mt-2">
                    <h2 class="jobtitle mb-1 pb-1">Merchandiser</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="opportunity-company mb-1 pb-1">Smollan</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card-detail-meta mt-0">
                            <div class="meta-item">
                                <i class="icon icon-geo-pin-solid"></i>
                                <p class="mb-0"><strong>Location: </strong>Modderspruit, North West</p>
                            </div>

                            <div class="meta-item">
                                <i class="icon icon-calendar-event-solid"></i>
                                <p class="mb-0"><strong>Date posted:</strong> 13 August 2024</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6 class="opportunity-reference mb-3 mt-3">Reference number: 81eb487b-08a6-4c6a-b336-cbb1a59b32b5</h6>
                </div>
            </div>
        </div>
        <div class="card-detail-body hmb-8">
            <div class="row">
                <div class="col text-break">
                            <h2>Role description</h2>
                            <p class="text-break white-space-pre-line"></p><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul><p></p>
                </div>
            </div>
            
                            <div class="row hpb-10">
                                <div class="col">
                                    <div class="alert alert-custom-warning pb-0 mb-1 text-left">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_991_965)">
                                                    <path d="M9.92249 2.51994C9.947 2.50651 9.97455 2.49962 10.0025 2.49994C10.03 2.49983 10.0571 2.50671 10.0812 2.51994C10.1098 2.53708 10.1332 2.56172 10.1487 2.59119L18.72 17.1749C18.765 17.2499 18.7637 17.3299 18.7225 17.4037C18.7066 17.434 18.6834 17.4597 18.655 17.4787C18.6302 17.4939 18.6015 17.5013 18.5725 17.4999H1.43249C1.40348 17.5014 1.37471 17.4939 1.34999 17.4787C1.32156 17.4597 1.29835 17.434 1.28249 17.4037C1.26189 17.369 1.25123 17.3293 1.25167 17.289C1.25211 17.2486 1.26364 17.2092 1.28499 17.1749L9.85499 2.59119C9.87062 2.56176 9.89395 2.53713 9.92249 2.51994ZM11.2275 1.95744C11.1038 1.74189 10.9253 1.56281 10.7103 1.43828C10.4952 1.31375 10.251 1.24817 10.0025 1.24817C9.75396 1.24817 9.50982 1.31375 9.29474 1.43828C9.07965 1.56281 8.90123 1.74189 8.77749 1.95744L0.206243 16.5412C-0.365007 17.5137 0.319993 18.7499 1.43124 18.7499H18.5725C19.6837 18.7499 20.37 17.5124 19.7975 16.5412L11.2275 1.95744Z" fill="black"></path>
                                                    <path d="M8.75244 15C8.75244 14.8359 8.78477 14.6733 8.84759 14.5217C8.91041 14.37 9.00248 14.2322 9.11856 14.1161C9.23463 14.0001 9.37243 13.908 9.52409 13.8452C9.67574 13.7824 9.83829 13.75 10.0024 13.75C10.1666 13.75 10.3291 13.7824 10.4808 13.8452C10.6325 13.908 10.7703 14.0001 10.8863 14.1161C11.0024 14.2322 11.0945 14.37 11.1573 14.5217C11.2201 14.6733 11.2524 14.8359 11.2524 15C11.2524 15.3315 11.1207 15.6495 10.8863 15.8839C10.6519 16.1183 10.334 16.25 10.0024 16.25C9.67092 16.25 9.35298 16.1183 9.11856 15.8839C8.88414 15.6495 8.75244 15.3315 8.75244 15ZM8.87494 7.49377C8.8583 7.33608 8.87499 7.17664 8.92394 7.02581C8.97289 6.87498 9.05301 6.73613 9.15909 6.61826C9.26517 6.50039 9.39485 6.40614 9.53971 6.34163C9.68456 6.27711 9.84137 6.24377 9.99994 6.24377C10.1585 6.24377 10.3153 6.27711 10.4602 6.34163C10.605 6.40614 10.7347 6.50039 10.8408 6.61826C10.9469 6.73613 11.027 6.87498 11.0759 7.02581C11.1249 7.17664 11.1416 7.33608 11.1249 7.49377L10.6874 11.8775C10.6727 12.0497 10.5939 12.2102 10.4666 12.3271C10.3393 12.444 10.1728 12.5088 9.99994 12.5088C9.8271 12.5088 9.66055 12.444 9.53325 12.3271C9.40594 12.2102 9.32714 12.0497 9.31244 11.8775L8.87494 7.49377Z" fill="black"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_991_965">
                                                        <rect width="20" height="20" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="hpl-2">
                                            <h5 class="font-weight-bold hmb-0">
                                                You'll be using your data to apply.
                                            </h5>
                                            <h5 class="hp-0">
                                                This application will take you to another website.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

     
                            </div>
        </div>
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADYAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p746852bc-24a0-4a80-a0d8-537d6449afb8"}],K={iconLink:V,title:W,blogPosts:Q},J="./assets/agency_icons/pro-personnel.jpg",Z="pro-personnel",X=[{jobTitle:"Counter Salesman",startDate:"2024-07-29 - 2024-08-31",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Midrand",region:"Gauteng"},details:`As a counter salesman, you'll play a crucial role in our operations, assisting customers with their parts needs, providing expert advice, and ensuring they find exactly what they're looking for. If you have a passion for vehicles and a knack for customer service, we want to hear from you!Key Requirements:

Proven experience in truck and bus parts sales.
Expertise in Scania, Volvo, and Mercedes parts.
Strong communication and interpersonal skills.
Ability to thrive in a fast-paced environment.
Excellent customer service skills.

Join our team and become a valued member of our growing company. Apply now and take the next step in your career!Offering a Competitive salary, medical aid and pension`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002400-WHN",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p2d5dec08-1572-4551-abfa-e4558be53f70"},{jobTitle:"Admin Assistant",startDate:"2024-07-29 - 2024-08-28",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Rustenburg",region:"North West"},details:`Requirements

Matric (Maths &amp; Accountancy will be an added advantage)
2-3 years of proven administrative experience.
Proficient in MS Office (Word, Excel, PowerPoint, Outlook) and other relevant software.
Must be bilingual (Afrikaans &amp; English)
Strong organizational skills with the ability to multitask and prioritize work.
Excellent written and verbal communication skills.
Attention to detail and problem-solving skills.
High level of professionalism and confidentiality.
Ability to work independently and as part of a team.
Strong interpersonal skills and a friendly, professional demeanor

Working hours:&nbsp;&nbsp;Mond - Friday7:30 - 5pmEvery second Saturday &amp; Public Holidays 8- 13pm`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002505-R",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p61dd570e-368b-494b-8892-cb4526d63fc0"},{jobTitle:"Junior HR Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications and Experience:* Appropriate qualification in Human Resource* Minimum of 5 years' experience as a HR generalist in a retail or similar environment* Proficient knowledge of employment laws such as BCEA, LRA, EE, SDA and Health and Safety regulationsPrimary Responsibilities:* Employee relations* Talent acquisition* Talent Management* Training and development* BBBEE &amp; employment equity* HR Administration",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002501-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p20ffc3ff-1937-4f22-9c11-46a91db024eb"},{jobTitle:"Assistant Software Development Manager (Information Technology)",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Ladybrand",region:"Freestate"},details:"Qualifications:* Appropriate bachelor's degree or similar tertiary qualification or experience in IT software development* Proficiency in MS Project or similar project management tools* Minimum of 10 years of experience in software development* Minimum of 5 years management experience regarding IT Software development projectsPrimary Responsibilities:* Instigation and management of IT Software development projects through the evaluation and monitoring of business priorities, the determination of IT priorities and allocation thereof to IT programmers, as well as the productive sand effective utilizations of IT resources* Co-ordinate and planning of IT software development projects, including the approval and finalization of technical specifications* Coordinate and monitoring of testing the implementation of IT Software development projects* Liaising with business regarding IT software projectsSkills:* Excellent communications and language skills in Afrikaans and English* Excellent organizational and project management skills* Experience regarding software development in COBOL and the IDM-i operating systems* Previous experience in a agri-business environemental would be beneficial* Excellent people skills and the ability to lead and manage a team and work together in a team* Strong analytical skills and the ability to function independently",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002496-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p31f4e928-8763-40ad-a747-1cf43ce221be"},{jobTitle:"IT Support Technician",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Bedfordview",region:"Gauteng"},details:"Qualifications:* Minimum of 4 years of practical experience in IT Support* Valid driver's license is a mandatory requirement* Relevant technical certification and qualifications* Willingness to travel occasiobnally to meet the needs of our diverse client base.Skills and Comptenencies:* Strong problem solving and troubleshooting skills* Excellent communication and interpersonal skills* Ability to work independently sand collaborator with a team* Familiarity with various operating systems and software applicationsResponsibilities:* Provide first level technical support to end users, ensuring prompt issue resolution* Install, configure and maintaine hardware and software components* Collabroate with the IT team to implement and support IT support* Troublshoot and resolve hardware, software and network issues* Ensure the smooth operation of computer systems within the organization",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002497-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p092ec9c0-992e-4bc7-9150-0e86e6043b61"},{jobTitle:"Grain Marketing Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Agricultural &amp; Farming",location:{city:", Bloemfontein",region:"Freestate"},details:`Primary Responsibility

Marketing and management of grain against set targets.
Management of staff.
Negotiation with client.
Innovative marketing strategies.

Qualifications and Experience

Appropriate Degree or Diploma in Agriculture.
5 years management experience.
5 years’ experience in grain marketing (trading.
Registered Safex Trader with SAIFM.
Valid driver’s license.

Skills

Excellent communication skills in English and Afrikaans.
Computer literate (MS Office).
Strong customer service orientation and Excellent numerical skills.
Strong sales and marketing skills.
Strong negotiation skills.

Salary - R70 000 - R80 000 per month`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002498-D",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p75bc5b15-cecb-4786-a718-4c5866a59f38"},{jobTitle:"Grain Marketing Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Agricultural &amp; Farming",location:{city:", Bloemfontein",region:"Freestate"},details:"Qualifications:* Appropriate degree or diploma in Agriculture* 5 Years management experience* 5 years' experience in grain marketing* Registered safex trader with SAIFM* Valid driver's licenseSkills:* Excellent communications skills in Afrikaans and English* Computer literacy (MS Office)* Strong customer service orientation and excellent numerical skills* Strong sales and marketing skills* Strong negotiation skillsPrimary Responsibilities:* Marketing and management of grain against set targets* Management of staff* Negotiation with clients* Innovative marketing strategies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002499-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p97b4f243-9576-4271-b72a-c5c7df617a30"},{jobTitle:"Quality Assurance Generalist",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Services",location:{city:", Midrand",region:"Gauteng"},details:`Primary ResponsibilitiesMaintain The Quality Management System (QMS)

Develop and maintain QMS documents: typing, layout, format, pagination, database compilation, editing, review(amendments) and maintenance, revision control and status, draw complex diagrams, attachments, scanning and converting documents.
Develop, implement and validate quality standards, processes and procedures within the organisation in accordance with the organisations QMS based on ISO 9001.
Provide the organisations QMS training (induction and refresher) to all staff to increase awareness and understanding.
Ensure that all company processes and procedures include process controls based on segregation rules and requirements.
Assist staff with any queries in respect of the QMS.
Regularly update the BarnOwl system with the latest audit information.

Monitor Compliance With Quality Standards

To audit the business unit’s conformance for conformance with organisations QMS, by:
Auditing that all standards, processes and procedures have been documented and the adherence of all organisations staff a to the requirements, standards, processes and procedures.
Ensuring that any corrective and follow up actions addresses findings in full.
Collecting data on corrective and preventive action and analyse trends to improve QMS.
Tracking and following up on outstanding corrective actions to verify closure based on objective evidence.
Submitting statistical activity reports to the M: QA

Promote Continous Improvement

Develop implement and maintain a continuous improvement mechanism which is in line with the international standard.
Promote the quality management system and continuous improvement through training, workshops and mentoring.

Development Of QMS Templates

Develop organisational templates for: policy, procedures, work Instructions (including TGM and MOPs), forms and checklists and other pertinent documents.
Enhance QMS documents: typesetting, incorporate external (national/international) and internal formatting requirements, consult and disseminate information into new/amended requirements and control external and internal formatting requirements.

Risk Identification

Relevant risks are identified at an operational level utilising appropriate tools and techniques taking cognisance of changes in the risk environment.
Report on identified risks and inform the EWRM function accordingly.
Assist Risk Specialists to develop mitigation plan to address identified risks.

Design and Redesign of Processes (BRP)

Design and Redesign of Processes (BPR) within the organisation to improve the organisations business process efficacy (efficiency and effectiveness).
Ensure optimum internal and external processes resulting in customer service excellence both within the organisation and to our external clients.

Qualifications and Experience

A National Diploma or Degree in Quality Management or a related qualification at an NQF 6/7 level
2 years Quality Management or Quality Assurance and/or Business Process Redesign
1 year Risk Management (advantageous)
1 year Aviation (advantageous)

People with Disabilities will be prioritized`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002500-D",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p5467caf8-f561-4098-9e87-d5515a8f34a0"},{jobTitle:"Quality Assurance Generalist",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Services",location:{city:", Midrand",region:"Gauteng"},details:"Qualifications:* A national diploma or degree in Quality Management or a related qualification at an NQF 6/7 level.* 2 Years quality management or Quality Assurance and /or Business Process Redesign* 1 Year Risk Management (advantageous)* 1 Year aviation (advantageous)Primary Responsibilities:Maintain the Quality management System (QMS)* Develop and maintain QMS documents* Develop, implement and validate quality standards, processes and procedures withing the organization in accordance with the organizational QMS based on ISO 9001* Provide the organizations QMS training (induction and refresher) to all staff to increase awareness and understanding* Regular update the Bam Owl system with the latest audit informationMonitor Compliance with Quality Standards:* To audit business units' conformances* Auditing that all standards, processes and procedures have been documented and the adherences of all organizations staff to requirements* Tracking and following up on outstanding corrective actions*Submitting statical activity reportsPromote Continuous Improvement:* Develop implement and maintain a continuous improvement mechanism* Promote the quality management systemsDevelopment of QMS Templates* Develop organizational templates for policy, procedures work instructions (including TGM and MOP's) forms and checklistsRisk Identification:* Relevant risks are identified at an operational level* Report on identifies risks and inform EWRM function accordinglyDesign and Redesign of Processes (BPR)* Design and redesign of processes (BPR) within the organization to improve the organizations business process efficacy.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002502-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pfc3ffc85-5f93-454d-a4f4-fd7f7f36cdb1"},{jobTitle:"Junior HR Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"QUALIFICATIONS AND EXPERIENCE:Appropriate qualification in Human Resources.Minimum of 5 years’ experience as a HR Generalist in a retail or similar environment.Proficient knowledge of employment laws such as BCEA, LRA, EE, SDA, and Health and Safety regulationPRIMARY RESPONSIBILITIES:Employee RelationsProvide advice to line managers regarding the conduct and misconduct management processes.Provide advice to line managers and investigate/process disciplinary cases.Participate in consultations with organised labour.Coach Line Managers on effective delivery of Disciplinary hearings.Represent the organisation at CCMA (Conciliation and Arbitration).Talent AcquisitionEnsure that the Resourcing process is adhered to and jobs are timeously advertised and tracked on the&nbsp; Social Media channels externally and via hand delivered applications internally.Manage, coordinate and conduct interviews with Line Managers and make recommendations.Utilize various sourcing methods, including job boards, social media, and networking, to identify and engage with potential candidates.Evaluate candidates' skills, experience, and cultural fit during the interview process.Manage communication with candidates, ensuring a positive candidate experience.Assist with onboarding and orientation processes as needed.Talent ManagementCoach Line Managers on Performance Management Process and Talent &amp; Org Review process.Coordinate the performance appraisal documents and consolidate performance ratingsDrive the succession planning.Facilitate employment equity target setting and monitor profile.Organisational DesignLiaise with Line Managers to get rationale for proposed positions, draw up new proposed org and submit to HR Manager for sign off.Drive change management initiatives in line with the business and organisational objectivesTraining &amp; DevelopmentConduct training needs and skills gap analysis for business and assist with the compiling of training&nbsp;budget/plan.Plan, coordinate and organise relevant training initiativesFacilitate HR training including adhoc refresher for employees and Line Managers.Assist with reporting, analysis and submission of the Workplace Skills Plan and the Annual Training Report for relevant SETAFacilitate the implementation and tracking of all related Skills Development legislative requirements. This includes (but is not limited to) Skills Development Plans, Annual Training Reports, Learnerships.BBBEE &amp; Employment EquityDrawing quarterly reports and discuss at EE meeting also using the same reports of appointmentsAssist with the compilation of EE and BBBEE info for Skills DevelopmentSupport and facilitate BBBEE Skills Development initiativesHR AdministrationManage new employee on-boarding process.Manage terminations and exit interviews.Manage the capturing of HR information and data into the relevant systems and assure the integrity of the data.Provide advice and information to management and employees on HR policies and proceduresAdvise management on work matters, career development, personal problems and industrial matters.Counsel employees on policies and rules relating to employment policies and programmes, and on the&nbsp; company’s rules and regulations.Prepare and analyse HR reports for HR Manager",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002503-R",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p9daf2064-8657-4efd-a0c8-7762061e3a21"},{jobTitle:"Key Accounts Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Midrand",region:"Gauteng"},details:"Qualifications and Experience:* Valid grade 12 Certificate* Diploma in Marketing or business-related field* Previous experience in Account Management or territory sales* Experience managing major national accounts at head office level* Excellent understanding of FTTx networks and products* Solid track record of meeting targets* Working in close collaboration with an international OEM (Product mix, strategy, sales process) such as CommScope or similar would-be advantage)Primary Responsibilities:* Developing and sustaining solid relationships with key clients that bring in the most revenue for the company*&nbsp; Addressing and resolving key clients' complaints* Acting as the main point of contact between key clients and internal teams* Communicating and collaborating with logistics departments to ensure that the key clients' needs are met* Compiling reports on account progress, goals and forecasts for account teams and stakeholders* Developing a thorough understanding of key clients' needs and requirements and preparing customized solutions* Negotiations contracts with key clients and meeting established deadlines for the fulfillment of each client's long term goals",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002504-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p6c099266-4e93-4423-95be-9c5d2eda3693"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-07-24 - 2024-08-23",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in Web development, graphic design or related field* Proficiency in Adobe creative suite (photoshop, Illustrator, In design)* Basic understanding of web development&nbsp; beneficial* Knowledge of SEO best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail orientated with s string focus on quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast phased environment* Project management skills and adaptability to changing project requirements",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002493-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p486fd550-d963-4c0b-b752-af6843743285"},{jobTitle:"Web Analyst (Web Developer)",startDate:"2024-07-24 - 2024-08-23",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in web development, graphic design or related field.* Proficiency in HTML, CSS, JavaScript, PHP, JSE, Jason, WordPress and SEO* Design/Creative experience - beneficial* Basic understanding of Adobe Creative suite (Photoshop, Illustrator, InDesign)* Ability to create wireframes, mockups and prototypes* Basic understanding of UX/UI principals and best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail-orientated with strong focus and quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast-paced environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002494-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p63b7c762-1457-4913-bb46-cb0c5c0f4e43"},{jobTitle:"Application Developer",startDate:"2024-07-24 - 2024-08-23",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Proficiency in programming languages such as MS Mausi, Visual Studio, C Angular and React* Strong understanding of mobile and web application development* Ability to manage multiple projects simultaneously with effective project and time management skills.* Excellent problem-solving skills and attention to detail* Experience in creating visually appealing and user-friendly interfaces* Motivation to continuously learn and implement the latest software technologies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002495-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pfcedf322-dd7c-44b3-b266-736841375bd7"},{jobTitle:"Internal Sales",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Valid matric certificate* Excellent communications skills* Previous technical sales experience, to your advantage* Be able to start immediately* Have valid driver's license and own transport",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002490-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pd2443ef4-8eb5-4d9b-b3aa-7515b360e711"},{jobTitle:"Accountant",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Qualifications &amp; Experience:* Bachelor's degree in accounting, finance or related field* Articles in financial accounting* Minimum 3-5 years of experience in accounting or financial management, preferably in the real estate or property management sector* Experience with budgeting, financial analysis and reporting* Proficiency in accounting software and MS ExcelSkills and Competencies:* Strong analytical and problem-solving skills* Excellent attention to detail and accuracy* Ability to work independently and collaboratively in a team environment* Effective communication and interpersonal skills* Proactive and adaptable to changing priorities* Knowledge of South African Real Estate regulations and compliance requirements* Position based in Rustenburg and may requires occasional travel to properties within portfolio* Have a valid driver's licenseResponsibilities:* Budget Management* Payment Allocations* 10-year maintenance plan* Levy increase* Financial Reporting* Audit Procedures* Compliance and regulations* Collaboration and communication",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002491-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pe400e076-c2cb-40be-a140-038c284eefd6"},{jobTitle:"Section Manager (U/G)",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Mining",location:{city:", Rustenburg",region:"North West"},details:`Responsibilities:
Assist in controlling, managing, and directing underground mining operations per regulations.
Minimum Requirements:
Grade 12 or NQF 4 EquivalentMine Manager's Certificate of Competency3-5 years’ experience as a Mine Manager (MHSA 2.6.1 or 3.1 appointment)Degree or NQF 7 Equivalent in Mining Engineering
Preferred Qualifications:
Management Programme / MDP / MAP3-4 years Trackless Mining experience
Skills and Knowledge:
Strong interpersonal skillsKnowledge of HR systems and related legislationProficient in MS Office and SAP System
Physical/Legal Requirements:
Medical fitness certificateClear criminal recordValid driving license`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002492-R",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p5d3f2a71-e416-4022-9f31-fb73197222bf"},{jobTitle:"Real Estate Agent",startDate:"2024-07-19 - 2024-08-18",vacancyType:"Permanent",jobSpecFields:"Property &amp; Estates",location:{city:", Roodepoort",region:"Gauteng"},details:"Requirements:* Grade 12* Experience as a real estate agent&nbsp;* Proven track record of successful sales* Ability to work independent* Strong sales, negotiation and communication skills* MS Office familiarityThe successful candidate should have:* A valid fund certificate (FFC) as issued by PPRA*Access to Wi-Fi (teams)* Reliable own transport and valid driver's licenseMust be:* Well spoken* Friendly* Trustworthy* PunctualResponsibilities:* Performing comparative market analysis to estimate property values&nbsp;* Provide guidance and assist sellers and purchases in marketing and purchasing property for the right price under best terms* Determine clients' needs for financial abilities to propose solutions that suit them* Intermediate negotiation processes, consult clients on market conditions, prices, mortgages, legal requirements and related matters, ensuring a fair and honest dealing* Display and market property to potential purchases* Prepare and complete required documentation* Maintain and update listings of available properties* Cooperated with appraisers, escrow companies, lender and home inspectors.* Promote sales through advertisements, open houses and listing services* Remain knowledgeable about real estate market and best practices* Attend and arrange viewings for prospective purchasers* Keeping sellers informed regarding any queries and viewings* Reply to and follow up on correspondence and telephone enquiries&nbsp;* Source new business",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002488-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p11786ec6-7ad9-44ec-b28e-86eaf1327d82"},{jobTitle:"Real Estate Agents",startDate:"2024-07-19 - 2024-08-18",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Roodepoort",region:"Gauteng"},details:`Responsibilities

Sourcing and marketing listings and providing guidance to buyers and sellers.
Performing comparative market analysis to estimate property values
Provide guidance and assist sellers and purchasers in marketing and purchasing property for the right price under the best terms
Determine clients’ needs and financials abilities to propose solutions that suit them
Intermediate negotiation processes, consult clients on market conditions, prices, mortgages, legal requirements and related matters, ensuring a fair and honest dealing
Display and market property to potential purchasers
Prepare and complete required documentation
Maintain and update listings of available properties
Cooperate with appraisers, escrow companies, lenders and home

Requirements:

A valid Fidelity Fund Certificate (FFC) as issued by PPRA,
Access to Wi-Fi (Teams),
Must be well spoken, friendly, trustworthy and punctual.
Matriculation
Experience as a Real Estate Agent preferred but not a must
Proven track record of successful sales
Valid driver’s license and own reliable vehicle
Ability to work independently combined with excellent interpersonal skills
Strong sales, negotiation and communication skills
MS Office familiarity

Salary - Commission based ONLY`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002489-D",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pf20d7b94-6b0f-49d6-b7b5-fe9c6522efdc"},{jobTitle:"Safety Officer",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"SHEQ",location:{city:", Boshoek",region:"North West"},details:"Requirements / Qualifications:* Must have 5 years working experience within the mining environment.* Comsoc 1 &amp; 2 essential, with all safety related certificates* Valid grade 12 certificate* Must have valid driver's license* No criminal record* Must be medically fit.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002483-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p52f56f5a-59a6-4f62-879b-dbee5475e9e4"},{jobTitle:"Mechanic",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Boshoek",region:"North West"},details:"Requirements / Qualifications:* Valid trade certificate* Must have 5 years working experience* Have a valid grade 12 certificate* Have valid driver's license* Mining experience essential* No criminal record",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002484-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p6c626b03-7175-4c1d-8d99-e0252929508f"},{jobTitle:"Electrician",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Boshoek",region:"North West"},details:"Requirement / Qualifications:* Must have 5 years working experience as an Electrician* Valid trade certificate essential* Previous mining experience* No criminal record* Valid grade 12 certificate* Valid driver's license",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002485-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p32b42ed2-894c-4d90-8a01-ed8496fb61d7"},{jobTitle:"Boilermaker",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Boshoek",region:"North West"},details:"Requirements / Qualifications:* Must have 5 years working experience as a Boilermaker* Previous mining experience essential* No criminal record* Valid driver's license* Valid grade 12 certificate* Valid drivers license",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002486-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p93205cb1-4a39-4ccd-a05a-81830c4695cd"},{jobTitle:"RESEARCH PHYSICIAN / PRINCIPAL INVESTIGATOR",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Medical",location:{city:", Brits",region:"North West"},details:`Required / Expected Competencies:

Registered doctor with MBChB and 2+ years’ clinical research experience.
Current HPCSA registration and medical malpractice insurance.
Strong knowledge and skills in general medical practice.
Effective decision-making and collaboration skills.
Thorough knowledge of ICH GCP.
Meticulous attention to detail in patient data recording.
Completion and management of study documentation.
Professional attitude and proactive communication with colleagues.
Commitment to professional development.
Proficiency in MS Word, Excel, PowerPoint.
Advantageous: previous clinical research experience, proficiency in Tswana and/or Zulu.

Core Functions will include but not limited to:

Direct and oversee research activities, ensuring research integrity and compliance.
Manage research projects administratively.
Conduct unbiased research in line with regulations.
Ensure accurate, ethical, and efficient clinical trial processes.
Conduct clinical trials and provide medical oversight.
Liaise with stakeholders and clients.
Ensure adherence to ICH GCP and local guidelines.
Apply clinical knowledge per protocol.
Participate in and initiate trial data publications.
Oversee regulatory processes, participant recruitment, quality assurance, and laboratory/pharmacy tasks.
Facilitate participant recruitment and informed consent.
Manage participants clinically as per protocols.
Conduct and attend relevant training.
Review and action laboratory results.
Interpret ECGs, CXRs, etc.
Address monitoring and data queries.
Review and draft SOPs.
Prepare source documents.
Report adverse events.
Engage in community education and clinic patient care.
Train and develop staff and students in clinical research.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002487-R",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pbb060b78-b786-4a45-a750-012dac6297e6"},{jobTitle:"Area Supervisor",startDate:"2024-07-11 - 2024-08-10",vacancyType:"Permanent",jobSpecFields:"Mining",location:{city:", Rustenburg",region:"North West"},details:"Duties would be but not limited to:* Managing teams and operations* Responsible for shift scheduling &amp; ensuring all employees are on site.* Administration duties will be required* Problem solverQualifications &amp; Requirements must be met:* Have a valid driver* Computer literate in MS Word &amp; Excel* Grade 12",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002481-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pdf08869c-b99b-46a0-9941-6ead78640706"},{jobTitle:"Area Supervisor",startDate:"2024-07-11 - 2024-08-10",vacancyType:"Permanent",jobSpecFields:"Other",location:{city:", Carletonville",region:"Gauteng"},details:`Duties

Managing operations and Teams
Shift scheduling and ensuring all employers on site
Administration
Problem Solving
People Management
Problem Solving

Requirements

Must have Grade 12
Must be computer literate
Must have valid Driver's License
Flexi working hours

Salary - R7000`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002482-D",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p64cf6f6d-ffb7-4895-86e2-8d7f43c8724c"},{jobTitle:"Generator Service / Technical Sales",startDate:"2024-07-05 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications required:* Matric with Mathematics C symbol or higher (NO LITERACY)Experience:* 0-5 Years related working experience* Solar, electrical, mechanical or technical interest, would be an advantageComputer Literacy:* MS Office - Excel Advanced (will be tested)Responsibilities:* Present and sell products using solid arguments to perspective and existing customers* Supplying customer with support* Establish, develop and maintain positive business and customer relationships* Prioritize and or escalate client questions and concerns to increase client satisfaction* Supply management with reports on customer needs, problems, interests, completive activities and potential for new products and services* Meet or exceed monthly sales targets / goals",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002479-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pcf78d0f6-a41b-42bd-a558-a07757c98c9f"},{jobTitle:"Sales Representative",startDate:"2024-07-05 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Middelburg",region:"Mpumalanga"},details:`Required Education / Experience / Skills:

Matric (Technical/Mechanical qualification advantageous).
3+ years' experience in the Electrical/Mechanical sector.
Understanding of the mining industry.
Problem-solving skills and consultative sales approach.
Ability to work independently and in a team.
Excellent verbal and written communication skills.
Proficiency in Microsoft Office and contact management software.
Market knowledge of the identified area.
Valid driver's license.

Travel Requirements:

Extensive travel to customer sites, including mining plants.
Flexible hours, including after hours and weekends.
Occasional out-of-town travel.

Salary &amp; Benefits:

Monthly Base Salary: R25,000.00 – R30,000.00.
Standby Allowance: R2,500.00 per month.
Medical Aid: 50% employer contribution.
Pension Fund and Risk Benefits: 10.8% employer contribution.
13th Check and performance-based annual incentive bonus.
Company car and petrol card.
Cell phone.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002480-R",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p5059ab3f-cffd-4ed5-b617-c8b71df2ac2b"},{jobTitle:"Generator Service / Technical Sales",startDate:"2024-07-04 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"The position is based both in the Lanseria and Brits area.The following is needed to apply for the position:Qualifications required:* Matric with Mathematics C Symbol or Higher a MUST HAVE (must send through with CV)Experience Required:* 0-5 years related working experience within the field.* Solar, electrical, mechanical or technical interestComputer Literacy:* MS Office - EXCEL ADVANCED A MUST (will be tested)Responsibilities &amp; Duties:* Present and sell products using solid arguments to prospective and existing customers* Supplying customer with support when necessary* Establish, develop and maintain positive business and customer relationshipsPerform cost benefit and needs analysis of new existing customers* Develop strategies for more effective sales and products* Supply management with reports on customer needs, problems, interests, competitive activities and potential for new products and servicesMeet or exceed monthly sales targets.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002240-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p8d3168b6-cbeb-47ad-892a-d4694b441607"},{jobTitle:"Management Trainee",startDate:"2024-07-04 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications and some experience required:* Matric normal mathematics with C Symbol or higher (NO LITERACY)&nbsp;Experience:* 0-5 years' experienceComputer Literacy:* MS Office package* Excel essential (will be tested)Competencies Required:* High IQ and EQ* Hardworking&nbsp;* Attention to detail* Able to work well under pressure* Common sense* Honest and trustworthy* Good time management skills* Excellent people skills",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002433-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pc96cfc1a-28d6-4eb6-88a6-ff74c3646328"},{jobTitle:"Counter / Part Sales",startDate:"2024-07-04 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications Required:* Matric with Mathematics, C symbol and higher (NO Math's Literacy)Experience required:* 0-5 years related working experience* Solar, electrical, mechanical or technical interestComputer Literacy:* MS Office - Excel AdvancedResponsibilities:* Greeting customers as when they enter the store* Understanding customer requirements* Participating in accepting shipments od parts, sending orders to customers, and documenting all inventory that enters and exits* Offering excellent customer service* Updating customer information",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002473-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p214c40d0-298d-4462-9c4d-dd362b73a2d4"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Middelburg",region:"Mpumalanga"},details:"Required Education / Experience / Skills:* Minimum qualification - matric - technical and or mechanical qualification will be an added advantage.* Must have 3 years' experience in the electrical / mechanical sector* Good solid understanding of the mining industry* Demonstrative aptitude for problem solving* Ability to determine solutions for customers&nbsp;* Must be results orientated and able to work both independently and within a team* Must possess excellent verbal and written communication skills* Proficiency in using MS Office Suite applications* Must have market knowledge of the market and customer base in the identified area* Must have a valid driver's licenseMajor Responsibilities (not limited to):* Establish, develop and maintain business relationships with current customers and prospective customers in the assigned territory/market segments, to generate new business for the organization's products/services.* Research of market segments &amp; territories in a view to identify prospective customer and their potential*Coordinate sales effort with marketing, sales management, accounting, logistics and technical service groups* Participate in trade shows and conventions* Follow up of all enquiries and quotations.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002474-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pc61b076b-d4df-4e71-b37a-6eafa4d5aae9"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Meadowdale",region:"Gauteng"},details:"Required Education / Experience / Skills:* Minimum qualification - matric - technical and or mechanical qualification is seen as an added advantage.* Must possess 3 years' experience in the electrical/mechanical sector.* Understanding of the OEM market will be seen as a added advantage* Demonstrate aptitude for problem solving* Ability to determine solutions for customers* Must be results orientated and able to work both independently and within a team* Have excellent verbal and written communications skills* MS Office suite applications experience* Must have market knowledge* Have a valid driver's licenseTravel:* Extensive travel will be required* Flexible hours&nbsp;Responsibilities (not limited to):* Plan and organize personalize sales strategy* Keep abreast of product applications, technical services, market conditions, completive activities, advertising and promotional trends* Participate in trade shows and conventions* Keeping in contact with management and keep them inform of all aspects of the company",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002477-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p3db42033-7b56-43fd-a164-4e83db4f7c67"},{jobTitle:"Receptionist",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Middelburg",region:"Mpumalanga"},details:"The suitable candidate needs to have the following requirements:Qualifications:* Grade 12* Studying towards accounting degree would be to your advantage.* Drivers license essentialDuties and experience would be but not limited to the following:* SARS, WCC, UIF follow ups* Registrations and deregistration's* Typing of formal letters, answering the phone* Basic admin duties like, filing, ordering monthly office supplies etc.* Corresponding with clients in a professional manner, and nay other related duties given by management&nbsp;Computer programmes:* Pastel* MS Word* MS Excel* Vanilla Payroll",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002478-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p3b0fa968-c8fd-4d65-bd3f-b76b8a89b725"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Germiston",region:"Gauteng"},details:`Major Responsibilities:

Establish, develop and maintain business relationships with current customers and prospective customers in the assigned territory/market segments, to generate new business for the organizations products/services.
Make telephone calls and in person visits and presentations to existing and prospective customers.
Research of market segments &amp; territories, in a view to identify prospective customers and their potential.
Develop clear and effective written proposals/quotations for current and prospective customers.
Expedite the resolution of customer problems and complaints.
Coordinate sales effort with marketing, sales management, accounting, logistics and technical service groups.
Create and manages a customer value plan for existing customers highlighting profile, share and value opportunities.
Identify advantages and compare organization’s product/services.
Plan and organize personal sales strategy by maximizing the return of time investment for the territory/segment.
Supply management with oral and written reports on customer needs, problems, interests, competitive activities, and potential for new products and services.
Keep abreast of product applications, technical services, market conditions, competitive activities, advertising and promotional trends through the reading of pertinent literature and consulting with marketing and technical areas.
Participate in trade shows and conventions.
Contribute to team efforts by accomplishing related results as needed.
Monthly and weekly reports on sales,
Checking orders and booking reports to ensure all invoicing has been done.
Follow up of all enquiries and quotations.
Keeping in contact with management of Marathon and keeping them informed of all aspects of our company, positive or negative.
Familiarize yourself with the IT operating system

&nbsp;Required Education / Experience / Skills: 

Minimum Qualification – Matric – Technical and or Mechanical qualification is seen as an added advantage
Must possess 3+Years’ experience in the Electrical/Mechanical sector.
Understanding of the OEM market will be seen as an advantage
Demonstrate aptitude for problem-solving.
Ability to determine solutions for customers (consultative sales approach).
Must be results-orientated and able to work both independently and within a team environment.
Must possess excellent verbal and written communication skills.
Proficiency in using Microsoft Office Suite applications and contact management software.
Must have market knowledge of the market and customer base in the identified area.
Valid driver’s license

&nbsp;Travel: 

Extensive travel - Works predominately out of the office.&nbsp; Required to visit customers on site.
Works flexible hours.
After hour and weekend standby required
Is subject to work beyond normal working hours, evenings, weekends and holidays should the need arise.
Attends and participates in continuing educational programs designed to keep you abreast of changes in your profession.
Position may require out of town travel.

&nbsp;Salary 

 Monthly Base Salary R25&nbsp;000.00 – R30&nbsp;000.00. 
 Medical aid – 50% Employer contribution and 50% employee contribution 
 Pension fund and Risk benefits 10.8% Employer contribution and 7.2% Employee contribution 
 13TH Check
 Annual Incentive Bonus – Sales Performance based can be up to 14 and 15th Cheque depending on sales.
 Company car and petrol card
 Cell phone 
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002475-D",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pa7da6cd9-dc38-4d0c-824d-6aa148fcd216"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Middelburg",region:"Mpumalanga"},details:`Major Responsibilities:

Establish, develop and maintain business relationships with current customers and prospective customers in the assigned territory/market segments, to generate new business for the organizations products/services.
Make telephone calls and in person visits and presentations to existing and prospective customers.
Research of market segments &amp; territories, in a view to identify prospective customers and their potential.
Develop clear and effective written proposals/quotations for current and prospective customers.
Expedite the resolution of customer problems and complaints.
Coordinate sales effort with marketing, sales management, accounting, logistics and technical service groups.
Create and manages a customer value plan for existing customers highlighting profile, share and value opportunities.
Identify advantages and compare organization’s product/services.
Plan and organize personal sales strategy by maximizing the return of time investment for the territory/segment.
Supply management with oral and written reports on customer needs, problems, interests, competitive activities, and potential for new products and services.
Keep abreast of product applications, technical services, market conditions, competitive activities, advertising and promotional trends through the reading of pertinent literature and consulting with marketing and technical areas.
Participate in trade shows and conventions.
Contribute to team efforts by accomplishing related results as needed.
Monthly and weekly reports on sales,
Checking orders and booking reports to ensure all invoicing has been done.
Follow up of all enquiries and quotations.
Keeping in contact with management of Marathon and keeping them informed of all aspects of our company, positive or negative.
Familiarize yourself with the IT operating system

&nbsp;Required Education / Experience / Skills: 

Minimum Qualification – Matric – Technical and or Mechanical qualification is seen as an added advantage
Must possess 3+Years’ experience in the Electrical/Mechanical sector.
Good solid understanding of the mining industry
Demonstrate aptitude for problem-solving.
Ability to determine solutions for customers (consultative sales approach).
Must be results-orientated and able to work both independently and within a team environment.
Must possess excellent verbal and written communication skills.
Proficiency in using Microsoft Office Suite applications and contact management software.
Must have market knowledge of the market and customer base in the identified area.
Valid driver’s license

&nbsp;Travel: 

Extensive travel - Works predominately out of the office.&nbsp; Required to visit customers on site e.g. mining plants.
Works flexible hours.
After hour and weekend standby required
Is subject to work beyond normal working hours, evenings, weekends and holidays should the need arise.
Attends and participates in continuing educational programs designed to keep you abreast of changes in your profession.
Position may require out of town travel.

&nbsp;Salary 

 Monthly Base Salary R25&nbsp;000.00 – R30&nbsp;000.00. 
 Standby allowance R2&nbsp;500.00 per month 
 Medical aid – 50% Employer contribution and 50% employee contribution 
 Pension fund and Risk benefits 10.8% Employer contribution and 7.2% Employee contribution 
 13TH Check
 Annual Incentive Bonus – Sales Performance based can be up to 14 and 15th Cheque depending on sales.
 Company car and petrol card
 Cell phone 
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002476-D",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"pbd0d922c-34e8-44da-bfd9-00a52afac260"},{jobTitle:"Graduate Trainee",startDate:"2024-07-02 - 2024-08-02",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications:* Matric with Normal Mathematics C Symbol or higher (No Math's Literacy)Experience Required:* 0-5 years working experienceComputer Literacy:* MS Office package* Excel advanced (will be tested)Competencies Required:* High IQ and EQ* Hard working with good ethic* Attention to detail and high level of accuracy* Able to work under extreme pressure* Able to use imitative* Common sense* Honest and trustworthy* Good time management skills* Excellent people skills* Logical reasoning",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002434-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"peb113a70-396f-44fa-b700-868214f2a55d"},{jobTitle:"Financial Manager",startDate:"2024-06-11 - 2024-08-11",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Middelburg",region:"Mpumalanga"},details:"Qualifications:* Accounting BCom Financial Management* Grade 12 certificatePrevious experience and qualifications needed:* Previous financial management experience essential.* Experience in financial planning, evaluate figures, prepare business activity reports.* In depth knowledge of business admin* Strong mathematical skills* Plan finances, predict future finances* Advise on financial activities* Oversee operations of finance department* Be in possession of a valid driver's licenseComputer programmes:* Pastel* MS Excel* MS Word&nbsp;* Powerpoint* VIP Payroll",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002449-YDG",iconLink:"./assets/agency_icons/pro-personnel.jpg",uuid:"p9687f1b2-c2e1-487a-a740-5e72419c1efd"}],$={iconLink:J,title:Z,blogPosts:X},ee="govpage-public-sector",ne=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/dut_orig.png",href:"https://www.govpage.co.za/durban-university-of-technology-dut-vacancies-blog/durban-university-of-technology-dut-vacancies6561966",title:"DURBAN UNIVERSITY OF TECHNOLOGY (DUT) VACANCIES",content:[` 
DURBAN UNIVERSITY OF TECHNOLOGY (DUT) 
 `,` 
 
 
WEBSITE MAINTENANCE SPECIALIST
Durban University of Technology
Durban, KwaZulu-Natal
Permanent
APPLY
 
Closing Date 30 August 2024
 
Job Details
Division: ICTS
Business Unit: IT Infrastructure & Operations
Minimum experience: Associate
Company primary industry: Higher Education
Job functional area: Information Technology
 
Job Description
ICTS: ENTERPRISE IT INFRASTRUCTURE AND OPERATIONS
Post: Website Maintenance Specialist
REF: C546
 
Minimum Requirements:
NQF Level 6 qualification in information technology/computer science
3 years’ experience in the maintenance and design of websites including optimization of websites.
2 years’ experience in the design of website databases
Website tools and instruments
Website security
Infrastructure requirements
Database administration
 
Summary of Duties:
Receive a job order to upgrade a website and analyse the extent of the work.
Determine the scope of the upgrade in accordance with the job order requirements.
Raise the necessary job order in accordance with the scope of the work.
Analyse the received job order to determine the scope of work.
Inform the relevant role players of the intended upgrade.
Submit the necessary change management requests in accordance with procedures.
Execute the upgrade in accordance with procedures and work instructions.
Conduct the testing in accordance with the testing plan.
Close the job order in accordance with procedures.
Receive an order for fault analysis and analyse to determine the extent and the nature of the analysis.
Fault analysis is initiated due to system audit results.
Identify the type of fault analysis required.
Identify and secure the appropriate resources in accordance with sound management principles where multiple members are required.
Provide/develop a solution in accordance with the identified problem.
Implement the solution in accordance with procedures and ensure that the problem is resolved.
Receive reports and statistics and analyse for correctness.
Run the website to ensure that it is functional.
Refer problems to the originating programmer for rectification.
Determine the required administration actions in accordance with the schedule/request.
Ensure that the necessary change requests are authorised in accordance with procedures.
Receive a request for business analyses from business driver / client and analyse for correct understanding.
Arrange business analyses intervention according set guidelines and criteria.
The availability of the database is verified and ensured.
The user is created/modified in accordance with the request.
The database table space is checked utilising database administration tools.
Escalate the problem to the best possible person for resolution • Provide/develop a solution.
Test the solution to ensure that the diagnosed problem is resolved.
Submit the resolution document to the document management system for future reference purposes.
Receive and analyse a request for the development of functionality to determine the nature of the functionality.
Conduct an impact study to determine the possible effect on the current- and associated systems.
Implement the functionality on the live system in accordance with policies and procedures.
 
Salary: Market related
Contact Person: Miss. ZJ Ngcobo
Status of Position: Permanent


To apply:
Please complete an official application for employment form and send a detailed CV, copies of ID, qualifications and a covering letter with the exact name of the post you are applying for to
 
Kindly note:
Communication will be entered into with short-listed candidates only. Only applications made on our application for employment form would be considered.
 
“While DUT strives for equal opportunities, preference will be given to suitable candidates in terms of the University’s equity policy” The University reserves the right NOT to make an appointment.
 
APPLY
 
 
 
 
 
 `,`ERP SPECIALIST
Durban University of Technology
Durban, KwaZulu-Natal
Permanent
APPLY
 
Closing Date 30 August 2024
 
Job Details
Division: ICTS
Business Unit: IT Infrastructure & Operations
Minimum experience: Associate
Company primary industry: Higher Education
Job functional area: Information Technology
Job Description
Durban University of Technology (DUT) is located on the warm east coast of South Africa. It sprawls over seven (7) campuses in tropical and picturesque Durban, and in Pietermaritzburg, with its undulating hills that flow over from the Drakensberg Mountain.
According to our ENVISION2030 strategy, DUT’s DNA has two strands, namely ‘people-centred and engaged’ and ‘innovative and entrepreneurial’. These are interwoven intrinsically by a number of double pairs consisting of ‘values and principles’ that bind our double-helix together. The extrinsic expression of our DNA is via The DUT-Way; which demonstrates our collective character and behaviour.
The University’s ultimate goal is to contribute towards improving the lives and livelihoods of all its people, both internal and external. DUT consistently strives towards excellence and greatness in teaching-learning and in research-innovation; something that has been recognized recently when The Times Higher Education’s World University Rankings placed DUT within the top 500 of universities in the world and within the top 5 universities in South Africa. The enactment of these internationally recognized strengths is demonstrated in our impactful engagement internally and externally in service of our localities, the region and the country at large.
 
Information and Communication Technologies Services (ICTS)
Post – ERP Specialist (Ref C539)
 
Minimum Requirements:
An NQF level 7 qualification in Information Technology / Computer Science / Software Development or equivalent relevant qualification in ICTS
3 years’ experience as an ERP Specialist
2 years’ experience dealing with business analysis
Certification in ERP systems and applications.
ERP development tools
ERP coding languages
Business process development
 
Duties (but not limited to):
Receive a request for functionality and analyze to determine the type of requirement.
Facilitate the meeting/workshop in accordance with the business requirements inclusive of all relevant role players.
Analyze the impact of the possible implementation of functionality to ensure that system inter-dependence is considered.
Document the deliverables in the prescribed format for business needs.
Check the current status of systems, applications, licenses and skills to determine future requirements in terms of scalability and capacity; or monitor the systems to determine the performance
analyse the future requirements to determine capacity
Compare the current capacity to the future
Contribute to the compilation of the optimization plan in accordance with the requirements:
Licenses
Capacity on Platforms
Applications
Systems
Resources
Implement the optimization plan to ensure optimal
Monitor the systems to ensure that the business targets are met.
Receive and analyse a request to determine the nature and extent of the support to be provided; or
The need for provision of support is identified during the execution of output.
Diagnose the problem to determine the appropriate action:
Provide information
Provide possible solutions
Conduct research to develop a solution
Test the solution to ensure that the diagnosed problem is
Implement the solution in accordance with procedures and test to ensure that the solution is functional.
Monitor the implemented solution for a period in accordance with the impact on the system.
Receive and analyse a request for the development of functionality to determine the nature of the functionality; or Identify the need for new functionality during operational
Conduct an impact study to determine the possible effect on the current- and associated systems.
Conduct a feasibility study to determine the cost of the implementation of the functionality.
 
Contact Person: Miss ZJ Ngcobo
Status of Position: Permanent
Salary: Market Related
 
 
To Apply:
Please complete application form downloadable from DUT careers portal and send together with detailed CV, copies of ID, qualifications and a covering letter. Please note that you do not have to use more than one method of applying.
 
Kindly note:
Communication will be entered into with short-listed candidates only. Only applications made on our application for employment form would be considered.
 
“While DUT strives for equal opportunities, preference will be given to suitable candidates in terms of the University’s equity policy” The University reserves the right NOT to make an appointment.
 
APPLY`,`DIRECTOR: LOGISTICAL SERVICES
Durban University of Technology
Durban, KwaZulu-Natal
Contract
APPLY
 
Closing Date 23 August 2024
 
Job Details
Division: Real Estate Management
Business Unit: Transport & Logistics
Minimum experience: Not Applicable
Company primary industry: Higher Education
Job functional area: Engineering
Contract term: 60
Job Description
Durban University of Technology (DUT) is located on the warm east coast of South Africa. It sprawls over seven (7) campuses in tropical and picturesque Durban, and in Pietermaritzburg, with its undulating hills that flow over from the Drakensberg Mountain.
According to our ENVISION2030 strategy, DUT’s DNA has two strands, namely ‘people-centred and engaged’ and ‘innovative and entrepreneurial’. These are interwoven intrinsically by a number of double pairs consisting of ‘values and principles’ that bind our double-helix together. The extrinsic expression of our DNA is via The DUT-Way; which demonstrates our collective character and behaviour.
The University’s ultimate goal is to contribute towards improving the lives and livelihoods of all its people, both internal and external. DUT consistently strives towards excellence and greatness in teaching-learning and in research-innovation; something that has been recognized recently when The Times Higher Education’s World University Rankings placed DUT within the top 500 of universities in the world and within the top 5 universities in South Africa. The enactment of these internationally recognized strengths is demonstrated in our impactful engagement internally and externally in service of our localities, the region and the country at large.
 
Real Estate Management
Post: Director: Logistical Services
(5-year renewable contract)
 
Minimum Requirements:
An Honour’s Degree (NQF Level 8) in Logistics Management OR Business Management OR related field.
6 to 10 years’ experience as a senior manager responsible for logistics and/or transport, fleet services.
Prior experience in managing transport, fleet, logistics
Experience in management of routes scheduling and maintenance of insourced/outsourced services
Strategic planning background in relation to all facets of logistical services area of operation.
Exposure to the development of budgets, cost control, and related budgetary management.
Management of human capital, performance management, absenteeism, and disciplinary processes.
Outstanding analytical, problem-solving, and organisational abilities
 
Summary of Duties:
Develop and implement an integrated logistics management systems / strategy to support Institutional strategy/objectives.
Direct logistics plans which ensure proper coordination to connect business services across the board to maximise returns while providing strong support to operations in adherence to performance standards.
Strategically plan and manage logistics, transportation and fleet services.
Ensure Integrated Planning amongst all Logistics Infrastructure and Operational Stakeholders.
Manage the planning and/or implementation of logistics projects and improvement of processes.
Ensure that all logistics solutions are fully integrated.
Develop and implement strategies and best practices within the function for purposes of enhancing service delivery and efficiencies.
Investigate and introduce/implement new and automated or digital ways of delivering the logistics function in line with required labour, service levels, costs and customer needs.
Advise on the development of a logistics operating model and value chain that enhances the logistics function and optimizes productivity of the human capital.
Facilitate the ability of logistical services to remain technologically competitive.
Implement a centralised transport/fleet management system.
Oversee the continuous development and implementation of Logistical Information System, maintenance and functionality of the system.
Plan driver resource strategically, tactically and operationally to utilise fleet to its maximum capacity.
Deploy appropriate controls and procedures to effectively and efficiently manage all aspects of customer service and communication.
Oversee cost control and performance, actively seeking to improve efficiency, reduce operating costs, increasing margin whilst meeting budget.
Manage the lease or outsource process and other logistics functions.
Ensure fleet, transport and logistical services are managed in accordance with the policies of the University, by rendering the following operational services.
Ensure availability of vehicles (internal or outsourced) through effective servicing programme and other means.
Manage the costs of running the fleet to the advantage of the university.
Allocate vehicles according to requirements ensuring best fit of vehicle to task.
Ensure proper maintenance of the fleet in accordance with standard operating procedure as agreed to with the service providers.
Direct the various functions of printing operations including graphic arts, photocopy, offset press, and bindery to achieve quality printing in a timely, efficient, and cost-effective manner.
Promotes preventative maintenance as a strategy thus extending the operational life of printing and postal equipment.
Operate an independent mail service by ensuring that the University's mail service complies with rules and regulations in the receipt, handling and distribution of all classes of mail.
Analyse the HR plan, determine the relevant deliverables and set performance targets for the own team in the department.
Develop and implement performance management targets.
Manage the department in accordance with policies, procedures and legal requirements.
Complete management actions within the required time frames.
Monitor and evaluate the impact of own repartees development interventions on performance.
 
Salary: Market related
Contact Person: Miss. ZJ Ngcobo
Status of contract: 5-year contract (Renewable)
 
 
To Apply:
Please complete an official application for employment form and send a detailed CV, copies of ID, qualifications and a covering letter.
 
Kindly note:
Communication will be entered into with short-listed candidates only. Only applications made on our application for employment form would be considered.
 
“While DUT strives for equal opportunities, preference will be given to suitable candidates in terms of the University’s equity policy” The University reserves the right NOT to make an appointment.
 
APPLY`],postedDate:"15/8/2024",iframe:"",uuid:"p31d5d5be-0549-4f07-9c48-721a85a10c0b"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/mangosuthu-university-of-technology_orig.png",href:"https://www.govpage.co.za/mangosuthu-university-of-technology-vacancies-blog/mangosuthu-university-of-technology-vacancies3982390",title:"MANGOSUTHU UNIVERSITY OF TECHNOLOGY VACANCIES",content:[` 
MANGOSUTHU UNIVERSITY OF TECHNOLOGY
 
VISION
Shape and own the future 
To be a transforming, equitable, sustainable, and academically excellent University of Technology anchored in its communities. 
 
MISSION
To offer technological, career-directed educational programmes focussing on the innovative problem-solving research and engage with government, business, industries and communities as end-users.
 `,` 
 
 
TEACHING AND LEARNING DEVELOPMENT CENTRE 
FYE STUDENT COORDINATOR – Ref: TDL8 
 
Key Performance Areas: 
• Coordination of FYE activities 
• Holistically support first-year student development and Administration 
• Online support 
• Marketing and awareness of FYE programmes 
• Personal/professional development 
• Support FYE Project leader 
 
Minimum Requirements: 
• Essential: Completed any NQF level 7 qualification 
• At least 2 years’ experience in any student leadership position 
• Evidence of active participation in student support interventions in higher education
• An advantage: Evidence of competence in the administration of support programmes 
 
Recommendations:
• Prior engagement with any First-year Experience Programme 
 
Competencies:
• Essential competencies: 
• Academic Performance above 60% 
• Excellent knowledge of working with technology and computer skills 
• Excellent communication skills 
 
 
Benefits: None 
 
Interested applicants should send (a) a motivation detailing the extent to which they meet the requirements of the position; (b) an application form (downloadable from www.mut.ac.za); (c) a Curriculum Vitae; (d) certified copies of academic qualifications plus academic records, proof of professional registration with a relevant professional body where applicable and copy of a valid driver’s license. (Please provide academic transcripts and SAQA evaluation certificate, if qualifications were obtained outside South Africa); and (e) names of three contactable referees to: Department of Human Resources and Development, via  email: hr@mut.ac.za.
 
Enquiries: Tel: (031) 907 7328 / 7560 / 7565. 
 
Closing Date: 23 August 2024 
 
Mangosuthu University of Technology is committed to meeting the objectives of Employment Equity to improve representivity within the institution. Preference will be given to applicants from designated groups in accordance with our Employment Equity targets including people with disabilities.
 
 
 
 
 
 `,` 
 
 
 
 
 
FACULTY OF MANAGEMENT SCIENCES
DEPARTMENT OF HUMAN RESOURCE MANAGEMENT
POSTDOCTORAL RESEARCH FELLOWSHIP
(HUMAN RESOURCE MANAGEMENT, STRATEGIC MANAGEMENT AND ENTREPRENEURSHIP)
One-Year Fixed Contract
 
Key Performance Areas:
1. Engage in collaborative research projects alongside academic staff members, leveraging your expertise in Human Resource management, Business management, Strategic management, and Entrepreneurship.
2. Contribute to the preparation of research papers for publication in prestigious journals (peer-reviewed journals) and presentations at leading academic conferences.
3. Participate in departmental seminars, workshops, and interdisciplinary research initiatives to foster intellectual exchange and cross-disciplinary collaboration.
4. Assist in mentoring and guiding graduate and undergraduate students, sharing your knowledge and experience to nurture the next generation of Human resource professionals.
5. Pursue independent research projects that align with the department's focus areas and contribute to its academic reputation.
6. Draft grant applications in this broad research area.
 
Minimum Requirements:
1. The candidate must possess a relevant doctoral degree PhD (Human resource management) obtained within the past 5 years.
2. South African citizens and permanent residents will have priority.
3. International Postdoctoral Research Fellows must have a long-term visitor’s visa endorsed for academic activities affiliated with MUT (Section 11(1)(b) Visitors Visa)
4. At least 3 published journal papers in the last 24 months.
5. Self-directed and ability to lead projects and learn new skills.
6. Mature, organized, professional and courteous.
7. Has not held full-time permanent academic or professional employment.
8. Established track record of publications and conference contributions related to the outlined research areas.
9. Strong background in human resource management theory, quantitative methods, and data analysis.
10. Demonstrated expertise in using statistical software.
11. Proven track record of scholarly achievements, including publications in reputable journals.
12. Excellent communication skills and the ability to work collaboratively within interdisciplinary teams.
13. Has not held full-time permanent academic or professional employment.
14. Established track record of publications and conference contributions related to the outlined research areas.
15. Experience in postgraduate student mentorship.
 
Competencies:
1. Excellent oral and written communication skills.
2. Coherent use of multiple computational approaches, such as use of Statistical Package for Social Sciences (SPSS) and STATA and many other analysis applications in humanities.
 
 
Stipend: R300 000.00 per annum (tax-exempt)
 
Interested applicants should send (a) a motivation detailing the extent to which they meet the requirements of the position; (b) an application form (downloadable from www.mut.ac.za); (c)a Curriculum Vitae including a list of research publication, conference papers, and other scholarly outputs; (d) certified copies of academic qualifications plus academic records and proof of professional registration with a relevant professional body where applicable. (Please provide academic transcripts and SAQA evaluation certificate, if qualifications were obtained outside South Africa); and (e) names of three contactable referees at  email: hr@mut.ac.za copied ptduma@mut.ac.za
 
Enquiries: Tel: (031) 907 7374
 
Closing Date: 23 August 2024
 
 
 
 
 
 `,`FACULTY OF MANAGEMENT SCIENCES
POSTDOCTORAL RESEARCH FELLOWSHIP
(Public Affairs and Governance)
One-Year Fixed Contract
 
Key Performance Areas:
• Conduct innovative research focusing broadly on Public Affairs and Governance.
• Co-author at least three publications output in DHET accredited journals.
• Present at national and international conferences.
• Ability to co-supervise relevant postgraduate research projects and/or collaborating with other postdoctoral fellows.
• Assist in mentoring junior staff and students through the sharing of knowledge.
• Initiate research-based projects within the department and write proposals for external funding opportunities.
• Assisting in overall management and contribute to the various activities of the Research projects.
 
Minimum Requirements:
• Doctor of Public Affairs, Governance, or related discipline with background in local government and leadership and must be obtained within the past 5 years.
• International Postdoctoral Research Fellows must have a long-term visitor’s visa endorsed for academic activities affiliated with MUT (Section 11(1)(b) Visitors Visa).
• Published at least 4 journal papers (DHET) in public administration discipline in the last 24 months.
• The candidate has not held full-time permanent academic or professional employment.
 
Recommendations:
• Experience in writing quality funding proposals.
• Postgraduate student supervision.
 
 
Stipend: R300 000.00 per annum (tax-exempt)
 
Interested applicants should send (a) a motivation detailing the extent to which they meet the requirements of the position; (b) an application form (downloadable from www.mut.ac.za); (c)a Curriculum Vitae including a list of research publication, conference papers, and other scholarly outputs; (d) certified copies of academic qualifications plus academic records and proof of professional registration with a relevant professional body where applicable. (Please provide academic transcripts and SAQA evaluation certificate, if qualifications were obtained outside South Africa); and (e) names of three contactable referees at hr@mut.ac.za copied to ntshangase.alson@mut.ac.za
 
Enquiries: Tel: (031) 907 7216
 
Closing Date: 23 August 2024
 
Mangosuthu University of Technology is committed to meeting the objectives of Employment Equity to improve representivity within the institution. Preference will be given to applicants from designated groups in accordance with our Employment Equity targets including people with disabilities.`,`FACULTY OF NATURAL SCIENCES

POSTDOCTORAL RESEARCH FELLOWSHIP
(Combating the effect of Ionising Radiation Exposure in South African Mining)
One-Year Fixed Contract
 
Key Performance Areas:
• Forge the construction of interdisciplinary links between medical geologists and medical staff of existing public health clinics in selected gold and uranium mines of South Africa, through the institution of maternal and health care programmes and strengthening of existing ones. Through these links we would educate postpartum and pregnant women and children in their homes, providing them with mentoring and simple, user-friendly radiation detection devices.
• Examine the relationship between neonatal death rate for the ten-year period, 2015 - 2024 and our revised estimates of natural or background radiation exposure (taken as an indication of a higher than normal environmental radiation level) in the gold and uranium mining industries of South Africa;
• Contribute towards the design of simple, efficient, cheap and affordable dosimeters for use by residents around uranium tailings disposal facilities in the study areas; 
• Write relevant and reliable radiation monitoring programmes for gold and uranium mines in our study areas capable of reducing ionising radiation exposure levels to below 50 mSv/a.
• Use data from routinely and universally registered birth and death certificates for developing statistical methods of ionising radiation hazard estimation where such populations are subject to predictable or measurable radiation in the study areas.
• Draft project proposal applications in the broad research area of “Medical Geochemistry”.
• To prepare and publish manuscripts of high quality in DHET journals.
• Ability to co-supervise relevant postgraduate research and/or collaborating with other postdoctoral fellows.
• Involvement in initiating and managing research projects.
• Assisting in overall management and contribute to the various activities of the Research projects.
• Initiating, developing and/or being involved in research networks, collaborations (i.e. formulating spin-offs, and joint ventures), institutional partnerships, and the organisation of research events.
• Maintain a continuous and progressive risk assessment of radiation exposure after the study is completed; and seek to further reduce exposure below 20 mSv over five consecutive years.
• To explore methods best suited to the surface remediation of most of the uranium and gold mill tailings sites in the study localities of South Africa.
 
Minimum Requirements:
• A recently earned PhD in Medical Physics/Radiology, Environmental Geochemistry and Health, Medical Geology, Public Health or Epidemiology. At the time of the award, the candidate should have graduated with his/her doctorate degree no longer than within the previous five years.
• South African citizens and permanent residents will have priority.
• International Postdoctoral Research Fellows must have a long-term visitor’s visa endorsed for academic activities affiliated with MUT (Section 11(1)(b) Visitors Visa).
• A thorough knowledge of fieldwork techniques, including health and safety issues in difficult terrains.
• At least 4 published journal papers (DHET) in the above-stated specialist areas in the last 24 months.
• Working knowledge and experience with statistical software such as SPSS.
• Has not held full-time permanent academic or professional employment.
• Experience in postgraduate student mentorship.
 
Competencies:
• Excellent oral and written communication skills.
• High ethical standards; Innovative and conscionable.
 
 
Stipend: R300 000.00 per annum (tax-exempt)
 
Interested applicants should send (a) a motivation detailing the extent to which they meet the requirements of the position; (b) an application form (downloadable from www.mut.ac.za); (c)a Curriculum Vitae including a list of research publication, conference papers, and other scholarly outputs; (d) certified copies of academic qualifications plus academic records and proof of professional registration with a relevant professional body where applicable. (Please provide academic transcripts and SAQA evaluation certificate, if qualifications were obtained outside South Africa); and (e) names of three contactable referees at hr@mut.ac.za copied to: davies.theophilus@mut.ac.za
 
Enquiries: Tel: (031) 907 9294
 
Closing Date: 23 August 2024
 
Mangosuthu University of Technology is committed to meeting the objectives of Employment Equity to improve representivity within the institution. Preference will be given to applicants from designated groups in accordance with our Employment Equity targets including people with disabilities.`],postedDate:"15/8/2024",iframe:"",uuid:"p01ea23c6-42bc-4112-81f3-547d30c03e84"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/rhodes-logo_orig.jpg",href:"https://www.govpage.co.za/rhodes-university-vacancies-blog/rhodes-university-vacancies7060617",title:"RHODES UNIVERSITY VACANCIES",content:[` 
RHODES UNIVERSITY`,` 
 
 
LEAD LECTURE VENUE AV TECHNICIAN
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 30 August 2024
 
Job Details
Division: 2401 - Information & Technology Services
Minimum experience: Mid-Senior
Company primary industry: Computer Networking
Job functional area: Information Technology
 
Job Description
Lead Lecture Venue AV Technician (Grade 15)
Information and Technology Services
The Department of Information and Technology Services invites suitably qualified candidates to join their team. 
 
Main Objectives
To lead the lecture venue AV refurbishments and day to day operations. This requires an above average knowledge of AV and its use within a teaching and learning environment as well as technical aspects of a network of the same size and complexity as the Rhodes network. To change strategy, communicate strategy and manage the roll out of the strategy and refurbishments in central lecture venues, as well as participate proactively in discussions with Teaching & Learning, Lecture Venue Committee and Facilities Division. 
 
The Requirements
A relevant NQF level 6 plus approximately 6 years relevant experience where such experience includes: -
 
At least three years in an IT or AV environment in a teaching and learning environment of similar complexity/scale to Rhodes
At least two years supervising staff
At least two years project management experience
At least one year experience specifically in AV
 
Application Process
It is essential that prospective candidates read the job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements. 
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.

Any questions or enquiries regarding the submission of an application please contact 046 603 8249.
 
Selection Process (provisional date, subject to change):
Short-listing meeting date to be confirmed.
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 15):
Basic Pensionable Salary per annum:  R657 592
Cost to Company per annum (Approximately): R853 569
 
All applications will be treated in strict confidence. This post is advertised as a permanent post, but the University may opt to appoint on a fixed-term contract of not less than three years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates. 
 
Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
Closing Date: 30th August 2024
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies. 

Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission. 
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY
 
 
 
 
 
 `,` 
 
 
 
 
PROJECT LEAD (EDUCATIONAL TECHNOLOGY)
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 28 August 2024
 
Job Details
Division: 2201 - CHERTL
Minimum experience: Mid-Senior
Company primary industry: Higher Education
Job functional area: Education
 
Job Description
Project Lead (Educational Technology)
CHERTL
CHERTL invite suitably qualified candidates to join their team. 



Main Objectives
The purpose of this role is to support the operational work of the Educational Technology team in CHERTL. The incumbent will be required to support all LMS users’ (staff and students) needs for technical support.
 
The Requirements
A Bachelor’s Degree (preferably Honors Degree) with at least two years’ experience where such experience includes:
Working in a team environment 
Experience in supporting Educational Technologies for teaching and learning in higher education.
Experience using Moodle at a Systems Administrator/Advanced level 
Track record of administration, management and/or leadership roles in a support environment
Excellent diagnostic, troubleshooting and computer problem-solving skills
Can work independently and does not require training to perform this role
Excellent communication and relationship building capabilities with internal and external stakeholders
Project Management skills and prior experience with Systems Change Management would be an advantage.
 
Application Process
It is essential that prospective candidates read the job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements. 
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.

Any questions or enquiries regarding the submission of an application, please contact hrrecruitment@ru.ac.za
 
Selection Process (provisional date, subject to change):
Short-listing meeting scheduled TBC.
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 11):
Basic Pensionable Salary per annum: R380,997.00
Cost to Company per annum (Approximately): R510,672.00
 
All applications will be treated in strict confidence. This post is advertised as a permanent post, but the University may opt to appoint on a fixed-term contract of not less than three years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates. 

Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
Closing Date: 28 August 2024
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies. 

Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission. 
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY
 
 
 
 
 `,` 
 
 
 
 
MULTIMEDIA AND LEARNING DESIGN SPECIALIST
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 28 August 2024
 
Job Details
Division: 2201 - CHERTL
Minimum experience: Mid-Senior
Company primary industry: Higher Education
Job functional area: Design
Salary: R380 997 - R510 672 per annum
 
Job Description
Multimedia and Learning Design Specialist (Grade 11)
Centre for Higher Education Research, Teaching and Learning (CHERTL)


CHERTL invites suitably qualified candidates to join their team. 


Main Objectives
To provide support to and advise lecturers and course teams on designing pedagogically sound and high-quality blended and online course sites, activities, and materials. 
This includes the full production process of multimedia content (video, podcast, newsletter, websites, blogs, etc) and learning design as part of a team working on multiple projects simultaneously.
The incumbent will contribute to the EdTech team’s professional development offerings for the RU community. Such offerings may include workshops, short courses, and resources to develop and expand lecturers’ digital pedagogies by designing quality blended and online learning experiences for students.
 
The Requirements
A Bachelor’s Degree (preferably Honours Degree) with at least two years’ experience where such experience includes:
Experience in supporting learning design in higher education.
Experience in supporting multimedia content development for teaching and learning in higher education.
Understanding of multimedia design considerations to support blended and online learning.
Experience using Adobe Creative Suite, Camtasia, Moodle content creation tools, etc.
Track record and portfolio of multimedia projects.
Previous experience creating multimedia using content authoring tools such as iSpring, Adobe Captivate or H5P and knowledge of Universal Design Learning (UDL) principles would be a distinct advantage,
Project Management skills and knowledge of Creative Commons licensing would be beneficial.
 
Application Process
It is essential that prospective candidates read the job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements. 
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.

Any questions or enquiries regarding the submission of an application please contact 046 603 8249.
 
Selection Process (provisional date, subject to change):
Short-listing date TBC
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 11):
Basic Pensionable Salary per annum: R380 997
Cost to Company per annum (Approximately): R510 672
 
All applications will be treated in strict confidence. This post is advertised as a permanent post, but the University may opt to appoint on a fixed-term contract of not less than three years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates. 

Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
Closing Date: 28 August 2024
 
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies. 

Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission. 
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY
 
 
 
 
 
 `,` 
 
 
 
 
 
ASSISTANT MANAGER ELECTRICAL
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 28 August 2024
 
Job Details
Division: 2301 - Infrastructure and Operations
Business Unit: 2301_03 - Infrastructure Facilities Services
Minimum experience: Associate
Company primary industry: Higher Education
Job functional area: Other
Salary: R672 381 - R672 381 per annum
 
Job Description
Assistant Manager Electrical (Grade 13)
Facilities and Infrastructure:  Electrical Services Section
 
Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. 
The Department of Facilities and Infrastructure invite suitably qualified candidates to join their team. 
 
Main Objectives
To support the operations of Rhodes University by managing a diverse group of electrical maintenance staff; assume ownership of and commit to accountability for meeting all the objectives of electrical maintenance responsibilities; the maintenance of electrical systems and appliances of varying sizes and complexities by providing electrical power and equipment, offering electrical engineering support and delegating tasks to appropriate staff members. It also ensures that all the electrical systems comply with the appropriate statutory and regulatory electrical and Health and Safety standards.
 
The Requirements
 
Grade 12 or equivalent (NQF level 4) and a Qualified Electrician (i.e. has passed the electrician trade test – NQF level 3) and registered as an Installation Electrician with the Department of Labour plus approximately 6 years’ relevant experience where such experience includes: -
3 years previous management experience of a large team
Previous LV experience
Previous MV installation, maintenance and switching experience will be an advantage. Within 12 months of appointment, the appointed candidate will have to pass the HV Regs course and test and be declared competent to do maintenance and switching on the RU MV network by an independent assessor.
Previous kitchen and laundry equipment experience including lighting repair work will be an advantage
Previous experience in general electrical repair work including the use of electrical instrumentation
Must be able to work at heights, off ladders, scaffolding, and aerial platforms. Consequently, the incumbent cannot be afraid of heights.
Must be in possession of a valid code 08 driver’s license
Must have an up-to-date Occupational Medical Health Certificate or be prepared to undergo the examination prior to an offer being extended (the Occupational Medical Health Certificate is a legislative requirement and is therefore also a job requirement on an ongoing basis)
Renewable energy and standby power systems experience will be an advantage
Working in a Higher Education environment will be an advantage
A Supervision qualification will be an advantage
Registration as a Master Installation Electrician with the Department of Labour will be a distinct advantage.
 
Application Process
It is essential that prospective candidates read the Job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements. 
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.
 
Any questions or enquiries regarding the submission of an application please contact 046 603 8249.
 
Selection Process (provisional date, subject to change):
Short-listing meeting date TBC.
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 13):
Basic Pensionable Salary per annum: R511 439
Cost to Company per annum (Approximately): R672 381
 
All applications will be treated in strict confidence. This post is advertised as a permanent post, but the University may opt to appoint on a fixed-term contract of not less than three years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates. 
 
Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
Closing Date: 28th August 2024
 
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies. 
 
Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission. 
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY
 
 
 
 
 
 `,` 
 
 
 
 
MANAGER: POSTGRADUATE FUNDING
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 27 August 2024
 
Job Details
Division: 1601 - Research and Innovation
Business Unit: 1601_01 - Postgraduate Financial Aid
Minimum experience: Mid-Senior
Company primary industry: Higher Education
Job functional area: Management
Salary: R657 592 - R853 569 per annum
 
Job Description
Manager: Postgraduate Funding (Grade 15)
Research Office
The Research Office invites suitably qualified candidates to join their team. 


Main Objectives
The Manager: Postgraduate Funding assists the Director: Research Office by managing all Postgraduate Funding (Scholarships, Bursaries & Loans) through the processes and budgets available.  A key component of the position involves developing and managing external funders and donors and attracting and retaining funders and donors so that Postgraduate students can be more fully supported. 
 
The Requirements
A Postgraduate Degree (NQF level 8) and approximately 5 years’ relevant experience where such experience includes: 
Experience in funding management, including financial controls and financial planning
Previous experience in working with computerised accounts and setting up computerized and administrative systems and processes
Management of large datasets
Experience in working with funders and donors
Experience supervising/managing others
Previous experience in a higher-education environment is essential.
 
Application Process
It is essential that prospective candidates read the job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements. 
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.

Any questions or enquiries regarding the submission of an application please contact 046 603 8249.
 
Selection Process (provisional date, subject to change):
Short-listing meeting: TBC.
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 15):
Basic Pensionable Salary per annum: R657 592
Cost to Company per annum (Approximately): R853 569
 
All applications will be treated in strict confidence. This post is advertised as a permanent post, but the University may opt to appoint on a fixed-term contract of not less than three years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates. 

Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
Closing Date: 27 August 2024
 
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies. 

Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission. 
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY
 
 
 
 
 `,`MANAGER STUDENT WELLNESS
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 27 August 2024
 
Job Details
Division: 1101 - Student Services and Development
Business Unit: 1101_02 - Student Affairs Student Wellness
Minimum experience: Mid-Senior
Company primary industry: Higher Education
Job functional area: Health Care Provider
 
Job Description
Manager:  Student Wellness (Grade 17)
Division of Student Services and Development
The Division of Student Services and Development invites suitably qualified candidates to join their team. 
 
Main Objectives
Overall responsibility for driving student wellness through the management of the Student Counselling Centre, Careers Centre, Wellness and Health Care Centre (HCC) to ensure the provision of a holistic wellness support service to the students of the University and to provide a high standard of health care facilities to students and staff


The Requirements
The job incumbent must be a Counselling Psychologist, registered with the Health Professional Council of South Africa (HPCSA), with approximately 7 years’ relevant work experience over and above their internship where such experience includes: - 
 Previous experience working with adolescents or individuals in early adulthood. The greater diversity of the experience with adolescents the better. Those individuals with specific experience of working with University students will also be at an advantage.
Previous experience supervising interns with a good track record of having done so
Previous experience working at a strategic level (at least middle management)
At least 5 years’ management experience
Previous experience in developing new policies, practices and processes that will improve the overall quality of the well-being of students
Previous experience in being part of initiatives to introduce new ways of thinking where the individual has worked with individuals to change their current way of thinking and functioning
Application Process
It is essential that prospective candidates read the Job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements. 
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.
 
Any questions or enquiries regarding the submission of an application please contact 046 603 8249.
 
Selection Process (provisional date, subject to change):
Short-listing meeting date to be confirmed.
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 17):
Basic Pensionable Salary per annum: R886 899
Cost to Company per annum (Approximately): R1 137 843
 
 All applications will be treated in strict confidence. This post is advertised as a permanent post, but the University may opt to appoint on a fixed-term contract of not less than three years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates. 
 
Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
 Closing Date: 27th August 2024
 
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies. 

Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission. 
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY`,`MULTIMEDIA AND WEB DEVELOPER (GRADE 12)
Rhodes University
Makhanda, Eastern Cape
Permanent
APPLY
 
Closing Date 26 August 2024
 
Job Details
Division: 0107 - Journalism and Media Studies
Minimum experience: Mid-Senior
Company primary industry: Higher Education
Job functional area: Information Technology
Salary: R440 529 - R584 474 per annum
 
Job Description
Multimedia and Web Developer
School of Journalism and Media Studies
The School of Journalism and Media Studies invite suitably qualified candidates to join their team. 
 
Main Objectives
To ensure the effective conceptualization, implementation and management of websites and social media content hosted by the School of JMS, in support of the schools teaching and learning activities as well as its professional engagement with stakeholders and communities of practice. As part of this, to collaborate with academic staff in the design, development, maintenance and enhancement of all JMS websites and oversee the implementation of new websites. Also, to work with academic staff in designing and managing the schools marketing and social media material. To provide necessary support and maintenance on all websites and webservers while ensuring adequate security measures are in place.
 
The Requirements
3-year degree/Diploma or equivalent (NQF Level 7) in Computer Science, Web Development, Graphic Design, Programming or IT with approximately 4 years’ experience (does not have to be concurrent and can be made up of in-house training, internship, project work whilst studying etc.), where such experience includes: -
Previous experience in website development.
Experience in multimedia design, Graphic design and editing (Video and animation).
Experience with MySQL server.
Proficiency in Adobe Creative Cloud suite (Photoshop, Illustrator, InDesign, PremierPro).
Previous experience in working with ICT systems, particularly web servers, security and maintenance.
Development of web policy, systems and standards will be considered a distinct advantage.
Previous experience managing small to medium-sized projects or having managed parts of large projects.
Experience working in a Media Technology industry is an advantage.
Experience in social media marketing will be an advantage.
 
Application Process
It is essential that prospective candidates read the job profile for further information and ensure that all relevant documentation is submitted.
 
The following documents are required:
A comprehensive CV and relevant qualifications which should include the following: -
Reasons for leaving your current and previous jobs.
Referees who are and/or were your direct line manager, their title, name, designation and contact information which should be at least their contact number and  email address.
A strong and succinct motivation which tells us your interest in the post and suitability relative to the job requirements.
 
Please note, no hand-written applications will be considered. Failure to submit all documentation will result in an application being disqualified.

Any questions or enquiries regarding the submission of an application can be submitted to hrrecruitment@ru.ac.za. 


Selection Process:
The selection process that will be followed for this post will include an assessment and/or presentation and an interview.
Shortlisted candidates will be informed of the interview date.
 
Remuneration per annum (Grade 12):
Basic Pensionable Salary per annum: R440,529.00
Cost to Company per annum (Approximately): R584,474.00
 
All applications will be treated in strict confidence. This post is advertised as permanent post, but the University may opt to appoint on a fixed-term contract of not less than three-years. The University reserves the right not to proceed with the filling of the post. An application in itself does not entitle the applicant to an interview.  Employment checks will be conducted on recommended candidates.

Rhodes University has a vaccination mandate as part of its Conditions of Service.  The implementation of the vaccine mandate has been held in abeyance from 01 January 2023.  Should the COVID-19 situation change in a way that the number of cases of COVID-19 pose a threat to the University, the implementation of the Vaccine Mandate will be re-activated and all staff would be required to be fully vaccinated.
 
Closing Date: 26 August 2024
If you are not contacted within 30 days from the closing date, please consider your application unsuccessful.

Recognising that diversity is important in achieving excellence. Rhodes University strongly encourages South African members of underrepresented designated groups as well as persons with disabilities to apply. Spouses and partners of existing staff members are also encouraged to apply. Please note all appointments are made in line with the requirements of the Employment Equity Act of 55 of 1998, as amended, the Immigration Act No. 13 of 2022 and the University's Recruitment and Selection policies.

Our core values and principles are the foundation of our commitment to creating a positive, supportive, and enabling environment. These values guide our decisions, actions, and how we engage with each other as we work to achieve our vision and mission.
 
These values are: Diversity; Integrity; Respect; Excellence; Collegiality and Compassion
 
APPLY`],postedDate:"15/8/2024",iframe:"",uuid:"pde6f3d3a-8561-467d-a666-602e915214dd"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sefako-makgatho-university_orig.png",href:"https://www.govpage.co.za/sefako-makgatho-health-sciences-university-smu-vacancies-blog/sefako-makgatho-health-sciences-university-smu-vacancies2248204",title:"SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY (SMU) VACANCIES",content:[` 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY (SMU)
 `,` 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY SCHOOL OF DENTISTRY 
DEPARTMENT OF DENTAL THERAPY AND ORAL HYGIENE 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below: 
 
SECRETARY (1 POST) 
Ref: 78/2024/KM/P12 
 
The University is looking for a dynamic and energetic individual who will perform the day-to- day activities required for the smooth running of the Department of Dental Therapy and Oral Hygiene through the provision of proactive secretarial and administrative services. He /She will perform various duties such as receptionist, diary management, filling, directing student queries to the relevant department structures, organizing departmental meetings, taking minutes, liaising with service providers, ordering of equipment, administering petty cash, logistical arrangement and other administrative duties. The incumbent reports to the HOD: Dental Therapy and Oral Hygiene, and must furthermore meet the requirements and competencies and be responsible for the key performance areas listed below: 
 
REQUIREMENTS
• Matric/Grade 12 with a three (3) year Secretarial or Office Administration qualification 
• At least three (3) years secretarial or related experience 
• Experience in compiling agendas, recording minutes and action lists to monitor and ensure follow- up of actions 
• Relevant experience in the higher education environment within an academic department dealing with academic programmes administration, student records and procurement administration will be an added advantage 
• Computer literate (Word-processing, PowerPoint, Excel, Internet & Email and E-learning Systems) 
• Ability to navigate online learning management systems such as Blackboard, Zoom and Microsoft Teams 
 
COMPETENCIES
• Technical/professional knowledge and skill 
• Good communication and interpersonal skills 
• Good writing and presentation skills 
• Ability to maintain strict confidentiality 
• Client service orientation 
• Meticulous attention to detail 
• Ability to work under pressure 
• Problem-solving Skills 
• Professional and ethical standards, personal impact, stature, and credibility 
• A team player 
 
KEY PERFORMANCE AREAS 
• Provide administrative support to the department 
• Financial Administration of the office (budget tracking, stationery orders, etc.) 
• Planning and organizing departmental meetings 
• Assist Module Coordinator and lecturers with organising academic activities 
• Typing all correspondence and reports including test/exam papers and timetables, as well as PowerPoint slides for lectures and conferences 
• Manage the procurement of items necessary for the effective running of the academic and service duties of the department 
• Handling all incoming mail and other materials, including coordinating the maintenance of office equipment 
• Maintain a secure system for storing/filling and retrieving information 
• Administration of leave forms and transport claims in the Department 
• Recording and entering student marks on the ITS system 
• Assist in the front office/reception as required and manage front office calls, etc. 
• Contribute to the overall development of SMU and actively promote institutional culture 
• Any other duties assigned by the HOD/ Line Manager 
 
 
Closing date: 5 September 2024 
 
Applications from Employment Agency will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr AK Mothabela, by e-mail to hr.recruitment7@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4433 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 `,` 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF MEDICINE 
 
DEPARTMENT OF OBSTETRICS AND GYNAECOLOGY 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
ADMINISTRATIVE OFFICER (1 POST)
Ref: 79/2024/JSMP12
 
The University is looking for a dynamic and energetic individual with meticulous attention to detail who will support/assist the Department with the daily administration, maintenance and coordination of the department’s functions and responsibilities, for high performance and student support. The incumbent in this position will be responsible for providing office, academic, administrative and ITS functions within the Department of Obstetrics and Gynaecology in the School of Medicine. The candidate will report to the HOD: Obstetrics and Gynaecology and will furthermore meet the requirement and be responsible for the key performance areas and competencies listed below: 
 
REQUIREMENTS
• Matric/Grade 12 
• Three (3) year diploma or degree in Office Management/ Office Administration or Records Management and Archiving 
• At least three (3) years relevant experience in office or committee administration 
• Must have a good working knowledge of the ITS system for entering student assessment marks 
• Experience in compiling agendas, recording minutes and action lists to monitor and ensure follow-up of actions 
• Computer literate (Ms Word, Excel, Power Point, Internet, Email) 
• Experience in navigating online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams 
 
COMPETENCIES
• Technical / professional knowledge and skills 
• Ability to pay attention to detail 
• Good interpersonal and communication skills 
• Good report writing skills 
• Planning and organizational skills 
• Integrity and ability to keep information confidential 
• Problem solving and analytical skills 
• Client and student service orientation 
• Teamwork 
• Committed and dedicated work ethos 
• Ability to work under pressure and meet deadlines 
 
KEY PERFORMANCE AREAS 
• Responsible for compiling class list, compare with official lists and supply staff with updated list 
• Monitor changes in student movement during the year 
• Coordinate and ensure the smooth running of academic programmes and accommodation of students in the program including arranging lecturer venues 
• Administration and input academic information (undergraduate assessment marks) into ITS and prepare management reports 
• Conduct student registration in the department and monitor performance (identifying poor performing students) 
• Administration of exemptions and recognition of prior learning 
• Administration and typing of undergraduate student exam reports 
• Administration of student records and files 
• Quality assurance for official university results (tests/examination) 
• Contribute to the overall development of SMU and actively improve institutional culture 
• Attend to student queries and conduct other duties as shall be allocated by the HOD 
 
 
Closing date: 5 September 2024 
 
Applications through Employment Agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vita, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr JS Mahlaola by  email to hr.recruitment3@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3906. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
BUILT ENVIRONMENT 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below: 
 
HEAD: CAMPUS CLEANING (1 POST) 
Ref:65/2024/KM/P8
 
Sefako Makgatho Health Sciences University seeks to employ a Head: Campus Cleaning within the Department of Built Environment. The incumbent will be responsible for the planning, development and implementation of campus cleaning plans and schedules, policy and procedure development, health and safety management, people management and risk management. He/She will report to the Director: Built Environment and must meet the job requirements, competencies and be responsible for the key performance areas below: 
 
REQUIREMENTS
• A three-year Degree/Diploma in either Hospitality Management / Facility Management /Business Management or relevant qualification 
• A minimum of four (4) to six (6) years’ experience in diverse cleaning and hygiene services, with three (3) years’ experience being at a managerial level 
• Managerial experience (having monitored and checked the work of employees and provided training or guidance to team leaders or supervisors 
• Ability to interact in a pleasant manner with employee/students at all levels and to encourage and motivate a diverse group of cleaning employees 
• Experience and knowledge relating to health and safety management and relevant legislation within cleaning environment 
• Computer literate (Word-processing, PowerPoint, Excel, Internet & Email) 
• A valid South African Driver’s license 
 
COMPETENCIES
• Excellent management and administrative skills: 
• Ability to develop and implement strategy, and maintain systems 
• Strong leadership skills 
• Good planning and organizational skills 
 
• Good interpersonal and communication skills 
• Good report writing skills 
• Good presentation skills 
• Client service orientation 
• Professional and Technical skills 
• Problem solving and analytical skills 
 
KEY PERFORMANCE AREAS 
• Drafting, implementing and monitoring of divisional budget 
• Identify and adapt to changing operational situation in order to remain within budget 
• Participate in the establishment and implementation of contingency plans to reduce financial risk 
• Cost-effective procurement of service related to area of responsibility 
• Ensure a higher standard of service delivery within the University in line with the service department’s Strategic goals 
• Collaborate with internal customers and manage external contracts of service providers to achieve teamwork 
• Development of Standard Operating Procedures (SOPs) in your area of responsibility 
• Enforce high level of cleanliness and hygienic environment in the University campus 
• Management of cleaning and hygiene employees in line with the University’s HR policies and processes 
• Set out performance outputs and measurements for each direct report 
• Effective management of disciplinary issues in line with the University’s Disciplinary Code/Code of Conduct 
• Planning, development and implementation of campus cleaning plans/schedules and ensure fair allocation of workloads 
• Ensure maintenance and service of equipment/machinery 
• Ensures continuous training of team members especially on cleaning techniques 
• Ensure compliance with the SHE policies and procedures 
• Promote diversity and teamwork within your area of responsibility 
• Support, facilitate and assist with the implementation of new innovations, initiatives, and service delivery 
• Contribute to the overall development of SMU, and actively improve institutional culture 
• Any other duties as assigned by the Line Manager 
 
 
Closing date: 30 August 2024 
 
Applications through Employment Agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vita, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr AK Mothabela, by e-mail to hr.recruitment7@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4433. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 `,` 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
OFFICE OF THE DEPUTY VICE-CHANCELLOR: ACADEMIC AND RESEARCH 
 
CENTRE FOR UNIVERSITY TEACHING AND LEARNING (CUTL) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below. 
 
TEACHING DEVELOPMENT CONSULTANT (1 POST) 
(re-advert)
Ref: 34/2024/BGM/P8 
 
The University is looking for an energetic and knowledgeable individual who will be responsible for the academic staff development activities within the institution with respect to teaching and learning, curriculum practices including monitoring and evaluation of curriculum implementation, academic and program evaluation as well as the scholarship of teaching and learning. The incumbents will report to the Manager: Teaching Development Unit and must meet the requirements and competencies, and be responsible for the following key performance areas below: 
 
REQUIREMENTS
• Master’s degree in Health Professions/Sciences Education/ Education or equivalent 
• At least two (2) years previous experience as an academic development practitioner in the higher education sector 
• Experience of teaching within the higher education sector 
• Expert knowledge of teaching and learning, curriculum development, assessment and reflective practice within the higher education sector with a focus on conceptualizing, designing and delivering professional learning opportunities to academic staff 
• Experience with e-learning and learning management systems 
 
COMPETENCIES
• Technical/ professional knowledge and skill 
• Communication and presentation skills 
• Coaching and mentoring 
• Continuous learning 
• Decision making and problem solving 
• Building strategic alliances and partnerships 
• Interpersonal skills 
• Professional and ethical standards 
• Quality assurance management 
• Client/student service orientation 
 
KEY PERFORMANCE AREAS 
• Develop, implement & evaluate teaching and learning development initiatives for academic staff 
• Conceptualise and coordinate peer and student evaluation of teaching and learning 
• Initiate and coordinate teaching portfolio development and peer review 
• Contribute to curriculum development, delivery as well as monitoring and evaluation in schools 
• Provide reflective and reflexive practitioner engagements with academic staff and contribute to capacity building related to educational development within academic departments 
• Act as a School liaison for all teaching and learning matters including accreditation preparation, reviews and report 
• Active involvement towards scholarship of teaching and learning and higher education research 
• Teaching and learning and educational leadership and management 
• Compile and contribute to relevant strategic and operational reports as and when required 
• Communicate and consult with teaching and learning relevant stakeholders institutionally and nationally 
• Contribute to the overall development of SMU and actively improve institutional culture 
• Perform any other duties assigned by Line Manager 
 
 
Closing date: 30 August 2024 
 
Applications through Employment Agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Ms BG Mbanjwa, by e-mail at hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful.
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
HUMAN RESOURCES 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below
 
SPECIALIST: GENDER BASED VIOLENCE (1 POST)
Ref:62/2024/BGM/P8
 
The University is seeking an energetic and dedicated individual to support its Gender Based Violence (GBV) function, bringing expertise in law, gender, power relations, and social justice. The ideal candidate will demonstrate a strong commitment to fostering a safe and inclusive environment and possess the skills to effectively coordinate GBV-related initiatives, provide expert leadership, and engage with diverse stakeholders to drive meaningful change. The incumbent will report to the Deputy Director: ER, Legal and Wellness, and must meet the requirements and competencies, and be responsible for the following key performance areas below: 
 
REQUIREMENTS
• Bachelor’s degree (NQF 7) in Social Sciences, Law, Humanities or equivalent qualification 
• At least four (4) years of related experience in handling matters related to gender, including activities such as research, advocacy and litigation 
• Demonstrated experience in social justice, law or an equivalent field, as well as an understanding of the psychosocial impact of GBV and/or violence 
• Sound understanding of the appropriate policies governing the field 
• Proven ability to run and/or oversee litigation and disciplinary processes 
• Experience in advocacy 
• High levels of independent thinking, as well as demonstrated communication and conflict resolution 
• An understanding of the higher education landscape regulating social cohesion and university governance, will be an advantage 
• Willingness to work out of normal working hours is non-negotiable 
• Computer literacy, with a sound knowledge of MS Word, MS Excel, PowerPoint and Internet 
 
COMPETENCIES
• Technical/ professional knowledge and skill 
• Strongly self-motivated bringing gravitas, credibility, and unquestionable integrity and confidentiality 
• Excellent interpersonal skills and strong stakeholder relations, with the ability to function within various teams • High level communication skills, both oral and written with and ability to act as a representative of the themed area 
• Ability to work positively with stakeholders to achieve outcomes and deliver change through people 
• Possess a positive ‘can do’ attitude and approach and ability to work at pace 
• Display above average communication skills (written and spoken), with solid report writing skills 
• Decision-making and problem solving 
• Strong project management skills 
 
KEY PERFORMANCE AREAS 
• Actively support the Deputy Director: ER, Legal and Wellness in the achievement of the University’s HR strategic goals by developing, and implementing GBV strategies and initiatives aligned with the overall business strategy 
• Provide regular consultation and advice to senior management on GBV-related issues and policy adherence 
• Act as the custodian and advocate for relevant University policies and procedures related to combatting GBV 
• Maintain and update the institution’s GBV policies and procedures 
• Arrange for training sessions and workshops to educate staff and students on GBV issues and policies 
• Represent the University at various meetings and forums, providing regular reports on GBV work to all relevant University structures, including Senior Management and other Committees 
• Engage stakeholders to optimize proactive and current GBV-related interventions
• Develop and implement GBV awareness programmes 
• Coordinate culture surveys and monitor the impact of programmes 
• Craft communications and arrange events to raise awareness on GBV issues 
• Manage GBV-related complaints and cases on behalf of complainants with sensitivity and confidentiality 
• Maintain a detailed and contemporary database of GBV complaints and cases 
• Work collaboratively with relevant Executive Management members to track GBV-related outcomes in their areas 
• Collaborate with internal and external stakeholders for effective case management and proactive interventions 
• Compile quality monthly management reports with clear tracking, insights, and recommendations 
• Ensure compliance with the University’s safety and health policies and procedures
• Contribute to the overall development of SMU, and actively improve institutional culture 
• Perform any other duties assigned by the Line Manager 
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Ms BG Mbanjwa, by  email to hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA) Failure to submit the requested documents/information will result in your application not being considered 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer 
 
Correspondence will be limited to short-listed candidates only Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF PHARMACY 
 
OFFICE OF THE DEAN 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
SCHOOL OPERATIONS MANAGER (1 POST)
Ref: 59/2024/BGM/P7
 
The University seeks an energetic and professional individual to lead the strategic development, implementation of resources, and integration of operations within the School of Pharmacy at Sefako Makgatho Health Sciences University. Key responsibilities include managing financial and human resources, overseeing academic planning and administration, liaising with stakeholders and health professional bodies, and conducting monitoring, evaluation, and reporting activities. He/She will report to the Dean and must meet the requirements and competencies, and be responsible for the key performance areas listed below. 
 
REQUIREMENTS
•Master’s degree in Business Administration (MBA), Public Administration/Management, or any Business related disciplines
•At least six (6) years related experience, preferably within a tertiary environment
•At least two (2) years in a supervisory responsibility in an administrative position, managing complex operations
•Experience in academic planning and administration
•Experience in committee administration and report writing.
•Proven record in interacting with stakeholders e.g., Students, Professional Bodies, Funders etc.
•Experience in sourcing funds or sponsorships and managing large budgets
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency
•Knowledge of higher education sector and an understanding of the operations and affairs of a university environment in academic administration will be an added advantage
•Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint)
 
COMPETENCIES
•Technical/ professional knowledge and skill
•Excellent management and administrative skills
•Ability to develop and implement strategy, and maintain systems
•Strong leadership skills
•Good organizational and planning skills
•Good interpersonal skills
•Good communication (written and spoken) skills
•Research and presentation skills
•Client service orientation
 
KEY PERFORMANCE AREAS 
•Strategic development, implementation of School resources, and integration of operations
•Oversee academic planning and administrative processes to ensure alignment with the School’s objectives
•Organize and manage various committee meetings, such as disciplinary hearing committees and student selection committees. This includes preparing agendas, distributing minutes, and providing reports for these committees
•Prepare and present reports to the School EXCO, Dean, and other relevant forums on a timely basis
•Manage human, infrastructure, and financial resources efficiently and ensure accurate and timely reporting on resource usage
•Work closely with the HR department to ensure smooth and efficient handling of all human resources matters
•Maintain communication and ensure compliance with health professional standards
•Manage relationships with stakeholders and develop partnerships to support the School’s mission
•Implement monitoring and evaluation systems to assess the effectiveness of programs and initiatives
•Prepare detailed reports based on evaluations and analyses
•Manage projects assigned by the executive team, demonstrating excellent project management skills
•Ensure compliance with the University’s safety and health policies and procedures
•Contribute to the overall development of SMU, and actively improve institutional culture
•Perform any other duties assigned by the line manager
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees in MS Word and PDF format, should be forwarded to the attention of Ms BG Mbanjwa, on e-mail to hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment.
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY
 
HUMAN RESOURCES
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below.
 
DEPUTY DIRECTOR: HR SPECIALISED SUPPORT SERVICES (1 POST)
Ref: 61/2024/BGM/P6
 
The University is seeking a strategic, transformational, and experienced individual to oversee the delivery of its specialized HR support services. This role encompasses, key areas such as Organizational Development, Talent Development, Performance Management, Human Resource Management Information Systems and Institutional Change Management, amongst others. The incumbent should have a deep pride in the HR discipline and fully appreciate the significant impact that HR services have on the University’s employees and its overall transformational agenda. He/She will report to the Senior Director: Human Resources, and must meet the requirements and competencies, and be responsible for the following key performance areas below.
 
REQUIREMENTS
•Master’s degree in either Industrial Psychology, Organisational Development, Human Resources Management, or equivalent qualification
•At least seven (7) years of related experience managing a broad range of HR disciplines
•Three (3) years managerial/ leadership experience, leading people across multipleorganizational units, including experience with organizational change
•Experience in translating strategy into delivery through plans, programmes, people, and culture
•HR experience in a Higher Education Environment will be advantage
•Membership with the relevant professional body will be an added advantage
•Computer literacy, with a sound knowledge of MS Word, MS Excel, PowerPoint and Internet
 
COMPETENCIES
•Technical/ professional knowledge and skills
•Excellent interpersonal skills and strong stakeholder relations, with the ability to function within various teams
•Strong project management skills
•Must have strong leadership qualities and skills to develop and motivate both teams and individuals to inspire to high performance
•Strongly self-motivated with the requisite gravitas and credibility
•Above average communication skills, both oral and written, with the ability to act as a
Sunday Times, 11 August 2024
representative of the themed area and to facilitate processes/workshops •High level negotiation and influencing skills
•Ability to work positively with stakeholders to achieve outcomes and deliver change through people
•Possess a positive ‘can do’ attitude with the necessary energy, resilience and commitment
•Must embody a change management paradigm
KEY PERFORMANCE AREAS
•Actively support the Senior Director: HR in the achievement of the University’s HR strategic goals by developing, and implementing HR strategies and initiatives aligned with the overall business strategy
•Oversee the delivery of specialized HR support services, including organisational development, talent development (training and development), performance management and human resource management information systems
•Develop, implement, monitor, and review HR policies and procedures, while identifying and mitigating all HR-related risks
•Manage and maintain institutional foundation (organisation structure; job profiles; post structure) ensuring they support the institution's goals and service levels programme,
•Manage the Employment Equity programme, policies and plan of the University, including statutory reporting
•Implement change and communication methodologies to influence institutional culture, climate and goals in support of a wide range of initiatives
•Gather and analyse historical data to determine budget values and manage the budget in terms of skills levy
•Assess the impact of projects and initiatives on institutional change, implement change and communication methodologies, and monitor institutional change culture and climate issues
•Devolves institutional goals into tactical development plans (inclusive of budgets), and manages the implementation and roll-out of development cycles for the institution
•Assess skills shortages and gaps among staff, and compile a Human Resources plan aligned with the skills risk strategy
•Ensure the Institutional On boarding Plan is vetted and approved in line with policies and goals, supervise the plans, deadlines, and quality of the on boarding program, and establish a comprehensive on boarding experience
•Manage special IT projects (document management technologies, process automation, etc)ensure data integrity and system security, monitor and improve the efficiency and support services of HR systems
•Stay abreast of legislation (SHE compliance, etc), regulations, codes, and best practices related to all HR functions, prepare statutory reports, and serve as an advisor to senior management
•Contribute to the overall development of SMU, and actively improve institutional culture
•Perform any other duties assigned by the line manager
 
Closing date: 30 August 2024
 
Applications from Employment Agency will not be considered.
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded for the attention of Ms BG Mbanjwa, in MS Word and PDF format, to hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521-3071
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer.
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful.
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
BUILT ENVIRONMENT 
Sefako Makgatho Health Sciences University (SMU) is seeking a highly skilled and motivated Project Manager to join our dynamic Built Environment team. The ideal candidate will play a crucial role in managing the project cost aspects of our construction and refurbishment projects, ensuring cost efficiency, financial sustainability, and operational excellence. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below: 
 
PROJECT MANAGER 
(3 Year Contract Fixed Term Contract) 
Ref: 64/2024/RM/P6
 
The incumbent will work with external architects, project managers and engineers to supervise and implement the design, planning, commercial management of complex engineering, construction, and facilities engineering projects or programs. Manages the implementation and development phases necessary to complete the University facilities construction, renovation, and major maintenance projects within the controlled constraints of scope, time and budget while ensuring adherence to quality, legal and cost requirements and ensuring a basis for benefits realisation is set. He/She will report to the Director: Built Environment and must meet the requirements and competencies and be responsible for the key performance areas below. 
 
REQUIREMENTS
•Relevant Bachelor’s Degree / Advanced Diploma NQF level 7 qualification in the Quantity Surveying/ Construction Economics
•A minimum of eight (8) years’ relevant work experience in consulting firm within the construction industry.
•Experience in managing large-scale construction and refurbishment project commercial management from inception to close out.
•Experience in the Higher Education Sector, including comprehension of the DHET Macro Infrastructure Framework will be an added advantage.
•SACQSP professional registration or any equivalent professional certification (i.e., RICS)
•High level of proficiency in utilising different software solutions including MS Excel, MS Project and other common software packages is essential
 
COMPETENCIES
•Knowledge and demonstrable experience of implementing public procurement for construction and design team appointments
•Comprehensive understanding of the building regulatory environment and experience in dealing with statutory requirements and approvals
•Experience working within a broader team to a high degree of professional effectiveness
•Ability to use technology associated with infrastructure planning, development, and reporting, i.e., experience utilising WinQS, DIMX software and other tools is required
•Extensive knowledge of project cost management principles and practices
•Proficient in cost estimation, budgeting, and financial reporting
•Familiarity with procurement processes and contract administration.
•Understanding of construction methods, materials, and regulations.
•Ability to use quantity surveying software and tools effectively
•A flexible and responsive approach to work and stakeholder management
•Excellent verbal and written communication skills and an ability to positively interact with both internal and external stakeholders
•Good interpersonal and verbal and written communication skills
•Ability to work within a team
•Ability to organize and plan own work
•Attention to detail with the ability to maintain a high level of accuracy
•A flexible, pro-active approach to work, including the ability to prioritize
•Ability to work on own initiative and with minimum supervision
•Ability to deal with sensitive information with discretion and to maintain confidentiality
 
KEY PERFORMANCE AREAS 
•Prepare detailed cost estimates and budgets for construction projects
•Conduct cost analysis and cost control throughout the project lifecycle
•Manage procurement processes, including the preparation of tender documents and contract administration
•Perform risk management and value engineering to optimize project costs
•Ensure compliance with all relevant regulations, standards, and best practices
•Prepare and present regular financial reports to stakeholders
•Collaborate with architects, engineers, and other project team members to ensure project success
•Maintain and update cost databases and records
•Conduct post-project evaluations to identify areas for improvement
•Project Coordination management
•Stakeholder management
•Contribute to the overall development of SMU and actively improve institutional culture
•Perform any other duties as assigned by the Director
 
 
Closing date: 30 August 2024 
 
Applications from the employment agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr TR Moletsane, by e-mail to hr.recruitment4@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4774. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. 
 
Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
DEPARTMENT OF HIGHER EDUCATION AND TRAINING (DHET) 
 
INSTITUTIONAL SUPPORT PROGRAMME (ISP) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below:
 
HETMIS PROJECT MANAGER (1 POST)
(re-advert)
(fixed-term contract appointment until 31 March 2027)
Ref:43/2024/MJM/DHET
 
The incumbent will be responsible for overseeing the integration of systems to facilitate real-time data exchange and synchronization across various platforms within the Department of Higher Education and Training (DHET). The role requires expertise in system architecture, Application Programming Interface (API) integration and data management to ensure seamless communication between different systems. The successful incumbent will report to the Chief Director: Policy, Planning, Monitoring and Evaluation (DHET), and must meet the requirements, competencies and be responsible for the following key performance areas below.
 
REQUIREMENTS
• Bachelor’s Degree or National Diploma with Computer Science or Information Systems as a major subject 
• A minimum of seven (7) years’ experience in database management and system development, of which three (3) years should be working on high-level information systems such as Enterprise Resource Planning (ERP) or Customer Relationship Management (CRM) 
• At least 3 years supervisory experience 
• Understanding of the education and training systems will be an added advantage 
• Advanced experience with Oracle systems 
• Proven experience in system integration and API development 
• Knowledge of programming in object-orientated languages, with Open-Source development tools and platforms 
• The ability to create innovative solutions to complex information management challenges and practical experience in business process analysis 
• Highly proficient in the development and use of databases such as MS Access, SQL Server, and Oracle 
• Advanced level of programming skills in .NET environment; Java, C#, .NET core 
• Experience with managing ICT projects 
• Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency 
• Proficient in the use of Microsoft Office Suite, specifically Microsoft Excel, Word, and PowerPoint 
 
COMPETENCIES
• Technical/ professional knowledge and skill 
• Strong project management skills 
• Organisational skills 
• Ability to work well under pressure 
• Excellent communication skills in writing, speaking and preparing presentations
• Excellent problem-solving skills 
• Attention to detail 
• Ability to work independently and collaborate effectively within a team 
• Resource management 
• Building interpersonal relationships and partnerships 
• Decision-making and problem solving 
• Mentoring and coaching 
• Professional and ethical standards 
• Facilitating change 
 
KEY PERFORMANCE AREAS 
• Lead the Information Systems Management strategy of DHET and develop a credible mechanism for skills planning 
• Develop and implement the system integration strategy for the Post-School Education and Training (PSET) Sector 
• Develop a comprehensive design for the integrated information management system, including architecture, data models, user interfaces, and integration points with existing systems 
• Manage the Higher Education and Training Management Information System (HETMIS)
• Provide support in the implementation of the developed management information system for the post-school sectors (TVETMIS, SETMIS, CETMIS, Survey Capturing Tools, Survey Hubs etc.), which will form part of the integrated system of DHET
• Develop and maintain databases 
• Develop and maintain validation tools and applications for data collection and integration across the post-school system and related external partner databases 
• Develop and maintain processes, standards and system specifications for all sub-sectors in the post-school system 
• Provide support to the line functions in the development of management information systems and the development, management and maintenance of the central warehouse and reporting portal for DHET 
• Perform any other duties assigned by the Chief Director 
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered. 
 
All applicants who previously applied are encouraged to re-apply 
 
Typed applications (quoting the reference number) which should contain a comprehensive 
curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr MJ Mopai by e-mail to hr.recruitment6@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3624 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 
 
 `,` 
 
 
 
 
 SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
OFFICE THE DVC: ACADEMIC AND RESEARCH 
 
CENTRE FOR UNIVERSITY TEACHING AND LEARNING (CUTL) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
MANAGER: COMMUNITY ENGAGEMENT (1 POST) (RE-ADVERT)
Ref: 51/2023/BGM//P7
 
 
 MANAGER: COMMUNITY ENGAGEMENT (1 POST) (RE-ADVERT)
Ref: 51/2023/BGM//P7 
 
The University is looking for an energetic individual who will be responsible for coordinating the community engagement activities of the university to ensure the achievement of its mission, vision and strategic objectives in relation to community engagement. The incumbent will support the university in building and maintaining collaborations and partnerships with the wider community, as well as facilitates the delivery of the university’s community-based initiatives in collaboration with the schools and other relevant institutional stakeholders. Other responsibilities include the promotion of awareness of and participation in community engagement by staff and students across all schools and ensuring that all community engagement projects/activities are aligned to the institution’s strategic goals and objectives. The incumbent will report to the Director: CUTL, and must meet the requirements and competencies, and be responsible for the following key performance areas below: 
 
REQUIREMENTS
•Master’s degree in Health Sciences, Social Sciences, Social Science Education, Sustainability, Community Development, Entrepreneurship or any related field
•A Doctoral degree will be an added advantage
•At least three (3) years’ exposure to or experience in the higher education sector, including management and supervision
•At least five (5) years’ experience in curriculum-related community engagement in the higher education sector
•Computer literacy, with a sound knowledge of MS Word, MS Excel, and Internet Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet and competency of ITS
 
COMPETENCIES
•Technical/professional knowledge and skill
•Good writing and presentation skills
•Good communication and interpersonal skills
•Ability to maintain strict confidentiality
•Client service orientation
•Meticulous attention to detail
•Ability to work under pressure
•Problem solving
•Personal impact, stature and credibility
•Building strategic alliances and partnerships
•Aligning performance to success
•Facilitating change
•A team player
 
KEY PERFORMANCE AREAS 
•Coordinate the development of the community engagement strategy, plans, monitor and evaluate the implementation thereof across the university
•Manage community engagement related projects and activities
•Provide support in curriculum development for community engagement
•People management, financial management and health and safety management
•Facilitate training to staff and students in relation to the delivery of community engagement, including, service learning, community-engaged research and community outreach and volunteerism.
•Develop and review community engagement related policies and procedures, guidelines
•Promote community engagement strategy for institution-wide awareness
•Collaborate with schools, support units and students to facilitate delivery of community engagement
•Establish and maintain institutional community engagement database and associated information and records
•Coordinate institutional reporting by schools on community engagement related activities
•Interact with external community stakeholders (local communities, government, non- governmental organisations, businesses, etc.)
•Assist schools and support services units to establish and maintain community engagement partnerships and projects with the local communities, government, non-governmental organisations, businesses and other strategic community service providers.
•Produce and disseminate community engagement related media and communication, including newsletters and updates, social media, flyers and other promotional material
•Support schools, departments, staff and students to identify engaged research niche areas and projects/activities
•Support research related directorates and committees, schools, departments and staff to align engaged research to identified needs and imperatives
•Facilitate impact measurement of engaged research projects/activities
•Explore opportunities to establish and grow engaged research publications in accredited journals
•Exploring opportunities to establish and grow scholarship of engaged teaching and learning publications in accredited journals
•Ensure compliance with the University’s safety and health policies and procedures
•Contribute to the overall development of SMU, and actively improve institutional culture
•Perform any other duties assigned by the HOD and/or DVC
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Ms BG Mbanjwa, by e-mail to hr.recruitment5@smu.ac.za  
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 
 `,` 
 
 
 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
HUMAN RESOURCES 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below
 
PRACTITIONER: EMPLOYEE WELLNESS (1 POST)
Ref: 63/2024/BGM/P8
 
The University is looking for a dynamic and experienced individual who will provide lifestyle management and wellness intervention programmes for the institution by developing, facilitating, coordinating, and monitoring support programmes, ensuring impactful outcomes. The incumbent will report to the Deputy Director: ER, Legal and Wellness, and must meet the requirements and competencies, and be responsible for the following key performance areas below: 
 
REQUIREMENTS
•A Bachelor’s degree (NQF 7) in Human Resources Management with speciality in Organisational and Industrial Psychology, or a related Social Sciences field with speciality in Employee Wellness or any equivalent qualification
•At least four (4) years’ experience in managing the Employee Wellness function in an organisation
•Demonstrated experience in implementing and coordinating employee wellness interventions and programmes, including administering an Employee Assistance Programme (EAP)
•Proven ability to evaluate the effectiveness of employee wellness initiatives
•Registration with the relevant professional body
•Experience in translating strategy into delivery through plans, programmes, people, and culture
•Experience in a Higher Education Environment will be an added advantage
•Computer literacy, with a sound knowledge of MS Word, MS Excel, PowerPoint and Internet
 
COMPETENCIES
•Technical/ professional knowledge and skill
•Strong project management skills
•Strong leadership qualities
•Strongly self-motivated with the requisite gravitas and credibility
•Uphold confidentiality
•Above average communication skills, both oral and written, with the ability to act as representative of the themed area and to facilitate processes/workshops
•High level negotiation, influencing and enabling skills to ensure priorities are met
•Ability to work positively with stakeholders to achieve outcomes and deliver change through people 
•Possess a positive ‘can do’ attitude and approach and ability to work at pace
 
KEY PERFORMANCE AREAS 
•Actively support the Deputy Director: ER, Legal and Wellness in the achievement of the University’s HR strategic goals by developing, implementing employee wellness strategies and initiatives aligned with the overall business strategy
•Develop and execute comprehensive wellness programmes tailored to the needs of the institution
•Assess the wellness culture and requirements within the institution
•Develop and manage the wellness programme budget and ensure wellness programmes operate within the allocated budget and provide financial feedback
•Provide support through the Employee Assistance Programme, managing contracts and liaising with service providers to deliver necessary services.
•Work with internal and external stakeholders for programme roll-out and event organization
•Engage staff in wellness programmes and provide necessary support and follow-ups
•Plan and execute wellness activities, including screenings, events and workshops
•Liaise with University’s prescribed medical aids in respect of identifying factors impacting employee wellness
•Track and assess the impact of wellness interventions on staff health and well-being
•Prepare and submit monthly reports on wellness programme status and outcomes
•Provide or source support and counselling services to employees to address health and wellness concerns such as coping with stress, bereavement, HIV, substance abuse, chronic absenteeism, and work-related issues
•Implement strategies for effective change management in wellness initiatives
•Write and distribute articles on employee wellness for institutional platforms
•Ensure compliance with the University’s safety and health policies and procedures
•Contribute to the overall development of SMU, and actively improve institutional culture
•Perform any other duties assigned by the Line Manager
 
 
Closing date: 30 August 2024 
Applications from Employment Agency will not be considered 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded for the attention of Ms BG Mbanjwa by  email to hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA) Failure to submit the requested documents/information will result in your application not being considered 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer 
 
Correspondence will be limited to short-listed candidates only Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
DEVELOPMENT GRANTS DEPARTMENT 
 
NEW GENERATION OF ACADEMICS PROGRAMME (nGAP) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below: 
 
NGAP MANAGER (1 POST) 
(5-year fixed term contract) 
Ref: 69/2024/MJM/P7 
 
The incumbent will be responsible for managing SMU’s participation in DHET’s New Generation of Academics Programme (nGAP) and facilitating the integration of early career academics into the University. The successful incumbent will report to the Deputy Director: Development Grants and must meet the requirements, competencies and be responsible for the following key performance areas below. 
 
REQUIREMENTS
• Bachelor’s Degree in Education or Social Sciences 
• Postgraduate qualification will serve as an added advantage 
• A minimum of five (5) years’ experience in higher education, preferably academic staff development 
• At least three (3) years’ experience in a supervisory role 
• Knowledge of the Department of Higher Education and Training (DHET)’s University Capacity Development and nGAP programmes and the underpinning frameworks 
• Proficiency in programme design, development, implementation, and evaluation, including skills in project planning, budgeting, monitoring, and reporting 
• Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency 
• Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet and competency of ITS 
 
COMPETENCIES
• Technical/ professional knowledge and skill 
• Relationship Management 
• Communication and interpersonal skills 
• Presentation and facilitation skills 
• Coaching and mentoring skills 
• Decision Making 
• Work Management 
• Change Management 
• Conceptual Thinking 
• Quality Management 
• Standards & legislative compliance 
• Persuasive 
• Goal Setting 
• Stakeholder management 
• Information Analysis 
 
 
KEY PERFORMANCE AREAS 
• Develop internal processes to compile applications for nGAP positions in response to DHET’s Calls for Applications 
• Liaise with relevant departments to manage the recruitment and selection process for early-career academics eligible for the nGAP and submit recruitment reports to DHET 
• Design an induction programme for newly appointed nGAP academics and ensure that they understand the programme and applicable University policies 
• Develop a framework to support and monitor the professional development of nGAP participants 
• Provide guidance and support to nGAP participants during their tenure in the programme, including pairing them with mentors 
• Monitor the performance and progress of nGAP participants and evaluate the effectiveness of the programme in achieving its objectives for SMU and participants 
• Facilitate networking opportunities and foster collaboration among nGAP participants, established academics, researchers, and other relevant stakeholders 
• Advocate for the importance of supporting early-career academics and promote the value of the nGAP programme to internal and external stakeholders 
• Manage financial and administrative tasks related to the nGAP programme, such as budgeting, financial reporting, record-keeping, and compliance with relevant policies and regulations 
• Establish an effective monitoring and reporting system to ensure nGAP participants follow through with their work plans, including the development of annual narrative reports 
• Contribute to the overall development of SMU, and actively promote institutional culture 
• Any other duties assigned by the Line Manager 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive 
 
curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr MJ Mopai by e-mail to hr.recruitment6@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3624 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
DEVELOPMENT GRANTS DEPARTMENT 
 
SIBUSISO BENGU DEVELOPMENT GRANT (SB-DP) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below: 
 
MONITORING AND EVALUATION OFFICER (1 POST) 
(5-year fixed term contract) 
Ref: 68/2024/MJM/P9 
 
The University is looking for an incumbent who will be responsible for ensuring the effective management, oversight, and impact assessment of earmarked grants awarded by the Department of Higher Education and Training (DHET) to SMU. The successful incumbent will report to the Director: Development Grants and must meet the requirements, competencies and be responsible for the following key performance areas below. 
 
REQUIREMENTS
• A Bachelor's Degree in Business Administration, Economics, Finance, International Development, Public Administration 
• A Completed Qualification or Short-Learning Programme in Monitoring and Evaluation (M&E), Project Management, Grants Management or Financial Management 
• A minimum of four (4) years of experience in grants management, monitoring and evaluation, project management 
• Ability to analyze data, identify trends, and draw insights from complex datasets 
• Familiarity with financial management principles and practices, including budgeting, expenditure tracking, and financial reporting 
• Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency 
• Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet and competency of ITS 
 
COMPETENCIES
• Technical/ professional knowledge and skill 
• Relationship management 
• Communication and interpersonal skills 
• Project management skills 
• Planning, organisation and coordination skills 
• Presentation and facilitation skills 
• Decision Making 
• Problem solving 
• Work Management 
• Mentoring and evaluation 
• Development and implementation 
• Change Management 
• Quality Management 
• Standards & Legislative Compliance 
• Goal Setting 
• Stakeholder management 
• Information Analysis 
 
KEY PERFORMANCE AREAS 
• Monitoring the implementation of grant-funded projects or programmes to ensure compliance with grant agreements, timelines, and objectives 
• Develop and implement monitoring and evaluation framework to assess the performance and effectiveness of grant-funded projects 
• Design data collection tools, such as surveys, interviews, and focus group discussions, to gather qualitative and quantitative data on project activities, outputs, and outcomes 
• Prepare regular reports on the progress, achievements and challenges of grant-funded projects for internal stakeholders, donors, and other relevant parties 
• Identify and mitigate risks associated with grant-funded projects, such as financial mismanagement, implementation delays, and unforeseen challenges 
• Provide technical assistance and capacity-building support to grant recipients to strengthen their monitoring and evaluation capacities 
• Facilitate learning and knowledge-sharing activities to promote best practices, lessons learned, and innovation in grant-funded projects 
• Ensure compliance with grant guidelines, regulations, and reporting requirements set by funding bodies 
• Conduct periodic evaluations and impact assessments to assess the effectiveness, sustainability, and long-term impact of grant-funded projects 
• Use monitoring and evaluation findings to inform decision-making and improve the design, implementation and management of future grant-funded projects 
• Contribute to the overall development of SMU, and actively promote institutional culture 
• Any other duties assigned by the Line Manager 
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr MJ Mopai by e-mail to hr.recruitment6@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3624 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
The university reserves the right to make or not to make an appointment.
 
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
OFFICE OF THE DEPUTY VICE-CHANCELLOR: ACADEMIC AND RESEARCH 
 
CENTER FOR UNIVERSITY TEACHING AND LEARNING (CUTL) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below. 
 
MANAGER: TEACHING DEVELOPMENT (1 POST) 
Ref: 60/2024/BGM /P7 
 
The University is seeking a dynamic individual to manage the development of curriculum, teaching and learning, and assessment practices within schools. The incumbent will lead teaching development initiatives, ensure quality assurance, and effectively manage stakeholder relationships. Additional responsibilities include overseeing people management and financial management. The incumbent reports to Director: CUTL and must meet the requirements and competencies, and be responsible for the key performance areas listed below. 
REQUIREMENTS
•PhD degree in Health Professions Education /Health Science Education /Education/Science Education or related field
•Relevant basic degree in Health Sciences/Professional Disciplines/ Education/Science Education or related field
•At least five (5) years exposure to or experience in the higher education sector, including management and supervision
•Postgraduate Diploma in Higher Education will be an added advantage
•Experience in curriculum development and expert knowledge of literacy instruction, research-based instructional practices, adult learning theory, elements of effective professional development and best practices in facilitation
 
COMPETENCIES
•Technical/ professional knowledge and skill •Resource management •People management including performance management •Building strategic alliances and partnerships •Quality assurance and risk management •Corporate governance •Health and safety management •Decision-making and problem solving •Communication and presentation skills
 
 
•Client/student service orientation
•Good analytical skills
•Good report writing skills
 
KEY PERFORMANCE AREAS 
•Assist the Director in achieving the strategic objectives and goals of CUTL by developing the curriculum and enhancing learning, teaching, and assessment practices within Schools
•Lead and plan teaching development initiatives, engage with external stakeholders, and ensure quality assurance and risk management
•Oversee the development of curricula and the improvement of learning, teaching, and assessment practices, including:Organizing courses, workshops, conferences, and consultations
Evaluating learning, teaching, and assessments
Facilitating curriculum development, review, renewal, and transformation
Managing curriculum mapping, recording, and reporting through the LOOOP system
Coordinating the development of e-learning instructional designs
•Enhance academic staff competencies in pedagogy and teaching methodologies
•Coordinate and initiate peer and staff evaluations of teaching and learning
•Lead portfolio reviews for academic staff promotions and rewards in collaboration with HR and Line managers
•Assess the impact of all teacher education projects
•Develop and review new teaching development policies and procedures
•Oversee HR management tasks, including job descriptions, performance management, leave management, and personnel development
•Manage financial aspects, including budgeting, asset control, and reporting
•Ensure quality assurance and manage risks effectively
•Ensure compliance with the University’s safety and health policies and procedures
•Contribute to the overall development of SMU, and actively improve institutional culture
•Perform any other duties assigned by the line manager
 
 
Closing date: 30 August 2024 
Applications through Employment Agencies will not be considered 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded for the attention of Ms BG Mbanjwa, by emai to hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA) Failure to submit the requested documents/information will result in your application not being considered 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer 
 
Correspondence will be limited to short-listed candidates only Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful 
 
The university reserves the right to make or not to make an appointment 
 
 
 
 
 
 `,` 
 
 
 
 
 SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
HUMAN RESOURCES 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below.
 
MANAGER: REMUNERATION AND BENEFITS (1 POST)
(Re-advert)
Ref: 4/2024/BGM/P7
 
The University is looking for an energetic and knowledgeable individual who will actively support the Human Resources department in overseeing and guiding the remuneration and benefits function. This role involves meticulous creation, analysis, and maintenance of remuneration data ensuring alignment with market standards and adheres to the guidelines set by REMCO. A key responsibility includes managing the institution's total reward and benefits strategy. This entails the continuous development, implementation, reporting and monitoring of remuneration policies, systems, and procedures. The role also demands active engagement in relevant forums and participation in benchmarking surveys to keep the University's rewards and benefits competitive and in line with market standards. He/She will report to the Senior Director: Human Resources, and must meet the requirements and competencies, and be responsible for the following key performance areas below: 
 
REQUIREMENTS
•Bachelor of Commerce Degree in Business Management/ Financial Management/ Human Resource or equivalent qualification
•Global Remuneration Professional (GRP) certification
•South African Rewards Association (SARA) Professional Designation
•Must have at least five (5) years’ experience in a Remuneration function
•Working knowledge of REM Channel will be an advantage
•Detailed understanding of change management strategies, techniques, and programmes
•Computer literacy, with a sound knowledge of Microsoft Office (Word, Excel and PowerPoint)
 
COMPETENCIES
•Technical/ professional knowledge and skill
•Possess a strong financial acumen
•Strong leadership qualities and skills appropriate to a management position including the management, development and motivation of both teams and individuals to inspire and secure high performance
•Strongly self-motivated bringing gravitas, credibility, energy, resilience, and commitment
•High level communication skills both oral and written with and ability to act as a representative of the themed area and University in a wide range of situations, both internally and externally, nationally, and internationally
•Ability to interpret information and to draw sound conclusions.
•Ability to work positively with stakeholders to achieve outcomes and deliver change through people
•Possess a positive ‘can do’ attitude and approach and ability to work at pace.
 
KEY PERFORMANCE AREAS 
•Actively support the Senior Director: HR in the achievement of the University’s remuneration and benefit strategy
•Conduct comprehensive compensation analyses, including market research on salary trends and economic indicators
•Develop and recommend compensation strategies and structures aligned with best practices and market trends
•Analyse and make recommendations on employee benefits, ensuring they are competitive and benchmarked against relevant market data
•Execute remuneration analysis for new employees, ensuring accurate compensation data alignment
•Manage and maintain the integrity of compensation data, including updates on control sheets and master records
•Conduct statistical analysis comparing employee data with market benchmarks to ensure competitive positioning
•Stay abreast of institutional remuneration policies and legislative requirements, ensuring full compliance
•Compile and submit legislative compensation-related reports and recommendations on compensation and employee benefits
•Plan, monitor, and coordinate team outputs, ensuring adherence to deadlines and quality standards
•Provide guidance, coaching, and training to team members, fostering a collaborative and effective work environment
•Communicate goals and expectations clearly, ensuring team alignment with organizational objectives
•Collaborate with internal stakeholders, HR business partners, and external service providers together requirements and deliver optimal solutions
•Regularly report to leadership on progress, plan adherence, and reasons for any deviations
•Address and escalate complex queries and issues, ensuring timely resolution and continuous communication
•Lead special compensation projects, planning and executing within agreed timeframe
•Manage the implementation of salary increases, including the compilation of salary increase letters and schedules
•Drive continuous improvement in remuneration and benefits practices, adapting to changing market conditions and organizational needs
•Ensure compliance with the University’s safety and health policies and procedures
•Contribute to the overall development of SMU, and actively improve institutional culture
•Perform any other duties assigned by the line manager
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agency will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded for the attention of Ms BG Mbanjwa, by  email to hr.recruitment5@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3071 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment
 
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF MEDICINE 
 
DEPARTMENT OF PHYSIOLOGY 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below.
 
SENIOR LECTURER (1 POST)
(re-advert)
Ref: 91/2023/JSM/P7
 
 
 The University is looking for an energetic individual who will be responsible for teaching, learning and research within the Physiology in line with university’s teaching and research strategy. He/She will report to the Head of Department: Physiology and must meet the requirements, competencies and be responsible for the following key performance areas below. 
 
REQUIREMENTS
•PhD/Doctorate in Physiology
•Module leader or established teaching experience
•Successful supervision or co- supervision of a Postgraduate student at Masters level
•Three (3) publications in accredited scientific journals
•A developed research area that is (or has the potential to be) institutionally/ regionally impactful
•Demonstration of innovation in the discipline will be an added advantage
•Established scholarship or specialist role in community engagement
•Participation in leadership and administration at departmental or School or programme level
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet and competency of ITS
 
COMPETENCIES
•Technical/professional knowledge and skill
•Good writing, communication and presentation skills
•Ability to maintain strict confidentiality
•Good interpersonal and relationship building skills
•Clients service orientation
•Meticulous attention to details
•Ability to work under pressure
•Coaching and mentoring
•Learner focus
•Decision-making and problem solving skills
•Professional and ethical standards
•Managing work standards
 
KEY PERFORMANCE AREAS 
•Formal instruction in the undergraduate and postgraduate courses
•Co-ordinate undergraduate and postgraduate programmes
•Mentoring and coaching of junior and new academic staff members
•Acts as a Research project leader and conduct appropriate research independently or in collaboration with colleagues within the university in line with University’s strategic objectives
•Be involved strategic plan and development of departmental policies and guidelines
•Produce scientifically supported reports for both internal and external stakeholders
•Write articles for peer-reviewed journals and present papers at scientific conferences
•Contribute to the overall development of SMU and actively improve institutional culture
•Any other duties as assigned by the HOD
 
 
Closing date: 30 August 2024 
 
Applications from employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr JS Mahlaola, by  email to hr.recruitment3@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521-3906. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF MEDICINE
 
PHARMACOLOGY AND THERAPEUTICS DEPARTMENT 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
LECTURER (1 POST)
Ref: 51/2024/JSM/P8
 
The University is looking for an energetic individual who will be responsible for teaching, learning and research within the Department of Pharmacology and Therapeutics. He/She will report to the HOD, and must meet the requirements and be responsible for the following key areas and competencies below. 
 
REQUIREMENTS
•Master’s degree in Pharmacology
•Registration with the Health Professional Council of South Africa
•Teaching experience at a tertiary institution, or five (5) years professional experience in the relevant field or experience in student supervision in an academic environment
•At least teaching experience in one of the following fields: Pharmacology or the allied health sciences (Nursing, Dietetics, Dentists, Microbiology)
•Experience in different laboratory techniques, current laboratory work, and involvement in pharmacology research
•At least publication in accredited journals will be an added advantage
•Supervision of at least honours students to completion will be an added advantage
•Ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams
•Computer literacy, with a sound knowledge of MS Word, MS Excel and Internet
 
COMPETENCIES
•Technical/professional knowledge and skill
•Good writing, communication and presentation skills
•Ability to maintain strict confidentiality
•Client service orientation
•Meticulous attention to detail
•Ability to work under pressure
•Coaching and mentoring
•Strategic decision-making and problem solving
•Professional and ethical standards
•Managing work standards
•Personal impact, stature and credibility
•Building strategic alliances and partnerships
•Aligning performance to success
•Facilitating change
•A team player
 
KEY PERFORMANCE AREAS 
•Formal instruction/teaching to the undergraduate and postgraduate courses
•Co-ordinate undergraduates Programmes
•Mentoring and coaching of junior and new academic staff members
•Apply appropriate assessment methods
•Write articles for peer-reviewed journals and present papers at scientific conferences
•Supervise at Honours level and co supervise at Masters level
•Serve on departmental, School, and University activities and Committees
•Undertake associated administrative duties with regard to attendance registers, student registration and results, supervision of tests and examinations
•Ensure compliance with SHE policies and procedures
•Contribute to the overall development of SMU and actively improve institutional culture
•Any other duties assigned by the HOD and/or Dean of the School
 
 
 
Closing date: 30 August 2024 
 
Applications from employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr JS Mahlaola, by  email to hr.recruitment3@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-3906. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY
 
SCHOOL OF MEDICINE
 
PHARMACOLOGY AND THERAPEUTICS DEPARTMENT
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
LECTURER (PROFESSIONAL NURSE) (1 POST)
Ref: 52/2024/JSM/P8
 
The University is looking for an energetic individual who will be responsible for teaching, learning and research within the Department of Pharmacology and Therapeutics. He/She will report to the HOD, and must meet the requirements and be responsible for the following key areas and competencies below.
 
REQUIREMENTS
• Master’s degree in Nursing Science (preferably in a pharmacology clinical speciality)
• Registration with the South African Nursing Council (SANC)
• Teaching experience at a tertiary institution, or five (5) years professional experience in the relevant field or experience in student supervision in an academic environment
• Teaching experience in one of the following fields: Pharmacology or Pharmacy, Clinical Pharmacology
• Experience in different laboratory techniques, current laboratory work, and involvement in pharmacology research will be an advantage
• Publication in accredited journals will be a strong recommendation
• Supervision of at least honors students to completion will be an added advantage
• Ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams
• Computer literacy, with a sound knowledge of MS Word, MS Excel and Internet
 
COMPETENCIES
• Technical/professional knowledge and skill
• Good writing, communication and presentation skills
• Ability to maintain strict confidentiality
• Client service orientation
• Meticulous attention to detail
• Ability to work under pressure
• Coaching and mentoring
• Strategic decision-making and problem solving
• Professional and ethical standards
• Managing work standards
• Personal impact, stature and credibility
• Building strategic alliances and partnerships
• Aligning performance to success
• Facilitating change
• A team player
 
KEY PERFORMANCE AREAS
• Formal instruction/teaching to the undergraduate and postgraduate courses
• Co-ordinate undergraduates and postgraduate programmes
• Mentoring and coaching of academic staff members
• Apply appropriate assessment methods
• Involved in academic and administration services
• Involvement in patient care, clinical trials and clinical statistics
• Write articles for peer-reviewed journals and present papers at scientific conferences
• Supervise at Honours level and co supervise at Masters level
• Serve on departmental, School, and University activities and Committees
• Undertake associated administrative duties with regard to attendance registers, student registration and results, supervision of tests and examinations
• Ensure compliance with SHE policies and procedures
• Contribute to the overall development of SMU and actively improve institutional culture
• Any other duties assigned by the HOD and/or Dean of the School
 
 
Closing date: 30 August 2024
 
Applications from employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr JS Mahlaola, by  email to hr.recruitment3@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521-3906.
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer.
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF DENTISTRY
 
DEPARTMENT OF DENTAL THERAPHY AND ORAL HYGIENE
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below: 
SMU currently participates in the “New Generation of Academics” Programme (nGAP) funded by the Department of Higher Education and Training and is aimed at producing the next generation of academics for South Africa’s universities. nGAP is transformative in nature, therefore 80% of the positions must be allocated to Black/or women South African citizens.
 
LECTURER (NGAP): ORAL HYGIENE (1 POST)
Ref no: 53/2024/KM/P8
 
The University is looking for an energetic individual to be given the opportunity to fully participate in the Implementation of the “Staffing South Africa’s Universities” Framework. The incumbent reports to the Head of Dental Therapy and Oral Hygiene and will be appointed permanently on a substantive position as Lecturer. The incumbent must meet the job requirements, competencies and be responsible for the following key performance areas: 
 
REQUIREMENTS
•An appropriate Master’s degree or an equivalent qualification with a focus in any of the Oral Health Care Sciences disciplines
•Current registration with the HPCSA
•Prospective candidates should have achieved an average of 70% or above in their Masters Qualification
•Has no or limited experience in an academic career, but has a demonstrated passion for an academic career
•Must be forty (40) years or younger
•Be a South African citizen
•Commit to the completion of Doctoral studies, within a prescribed period, where the applicant only has a Master’s degree, or commit to the completion of post-doctoral studies, within a prescribed period, where the applicant already has a doctoral degree
•Be prepared to sign a contract of employment committing to the full duration of training in the “Staffing South Africa’s University’s Framework” Development Programme over six years
•Proven ability to navigate online learning management systems such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel, and Internet
 
COMPETENCIES
•Technical/professional knowledge and skills
•Good writing, communication, and presentation skills
•Ability to work in a team
•Good interpersonal skills
•Problem solving skills
•Organising and planning skills
•Sound knowledge of MS, Word, Excel and Internet
•Client service orientation
•Meticulous attention to detail
•Strategic decision making and problem solving
 
KEY PERFORMANCE AREAS (KPAs) 
•Successfully participate in the “Staffing South Africa’s University’s Framework “Development Programme over six years
•Undertake Teaching and learning, Research within the Department, on a reduced workload for the first three years and thereafter gradually increasing to a full workload
•Register and complete PhD studies within the prescribed period
•Commit to working with an appointed mentor and ensure an effective mentor-mentee relationship
•Attend agreed upon short courses on research and teaching and development over the duration of the programme
•Submit a detailed annual report on participation and progress in the Development Programme over the first six years
•Contribute to the overall development of SMU and actively improve institutional culture
•Any other duties assigned by the HOD and/or Dean of the School
 
 
Closing date: 30 August 2024 
 
Applications from Employment Agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, full academic records, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr AK Mothabela by e-mail to hr.recruitment7@smu.ac.za. 
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4433. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF DENTISTRY
 
DEPARTMENT OF DENTAL THERAPHY AND ORAL HYGIENE 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below: 
SMU currently participates in the “New Generation of Academics” Programme (nGAP) funded by the Department of Higher Education and Training and is aimed at producing the next generation of academics for South Africa’s universities. nGAP is transformative in nature, therefore 80% of the positions must be allocated to Black/or women South African citizens.
 
LECTURER (NGAP): DENTAL THERAPY (1 POST)
Ref no: 72/2024/KM/P8
 
The University is looking for an energetic individual to be given the opportunity to fully participate in the Implementation of the “Staffing South Africa’s Universities” Framework. The incumbent reports to the Head of Dental Therapy and Oral Hygiene and will be appointed permanently on a substantive position as Lecturer. The incumbent must meet the job requirements, competencies and be responsible for the following key performance areas: 
 
REQUIREMENTS
•An appropriate Master’s degree or an equivalent qualification with a focus in any of the Oral Health Care Sciences disciplines
•Current registration with the HPCSA
•Prospective candidates should have achieved an average of 70% or above in their Masters Qualification
•Has no or limited experience in an academic career, but has a demonstrated passion for an academic career
•Must be forty (40) years or younger
•Be a South African citizen
•Commit to the completion of Doctoral studies, within a prescribed period, where the applicant only has a Master’s degree, or commit to the completion of post-doctoral studies, within a prescribed period, where the applicant already has a doctoral degree
•Be prepared to sign a contract of employment committing to the full duration of training in the “Staffing South Africa’s University’s Framework” Development Programme over six years
•Proven ability to navigate online learning management systems such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel, and Internet
 
COMPETENCIES
•Technical/professional knowledge and skills
•Good writing, communication, and presentation skills
•Ability to work in a team
•Good interpersonal skills
•Problem solving skills
•Organising and planning skills
•Sound knowledge of MS, Word, Excel and Internet
•Client service orientation
•Meticulous attention to detail
•Strategic decision making and problem solving
 
KEY PERFORMANCE AREAS (KPAs) 
•Successfully participate in the “Staffing South Africa’s University’s Framework “Development Programme over six years
•Undertake Teaching and learning, Research within the Department, on a reduced workload for the first three years and thereafter gradually increasing to a full workload
•Register and complete PhD studies within the prescribed period
•Commit to working with an appointed mentor and ensure an effective mentor-mentee relationship
•Attend agreed upon short courses on research and teaching and development over the duration of the programme
•Submit a detailed annual report on participation and progress in the Development Programme over the first six years
 
 
Closing Date: 30 August 2024 
 
Applications from Employment Agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, full academic records, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr AK Mothabela by e-mail to hr.recruitment7@smu.ac.za. 
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4433.
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF MEDICINE 
 
DEPARTMENT OF CLINICAL PSYCHOLOGY 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below.
 
ASSOCIATE PROFESSOR/ SENIOR LECTURER/LECTURER (1 POST)
(re-advert)
Ref: 81/2022/JSM/P6/P7/8
 
The University is looking for an energetic individual who will be responsible for teaching, learning and research within the Department of Clinical Psychology in line with university’s teaching and research strategy. He/She will report to the Head of Department (HOD), and must meet the requirements, competencies and be responsible for the key performance areas below. 
 
REQUIREMENTS
Associate Professor 
•PhD/Doctorate or Professional Masters degree in Clinical Psychology
•Three (3) years’ teaching experience in an academic environment
•Registration with the HPCSA
•At least fifteen (15) related publication in accredited journals
•Supervision of five (5) Masters students to completion
•Proven track record of lecturing at both undergraduate and postgraduate levels
•Proven track record of involvement in curriculum development
•Demonstration of innovation in the discipline will be an added advantage
•Substantial scholarship or leadership in community engagement
•Participation in leadership and administration at school level
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel and Internet
 
Senior Lecturer 
•PhD/Doctorate in Clinical Psychology
•Module leader or established teaching experience in an academic environment
•HPCSA registration
•At least three (3) related publication in accredited journals
•Successful supervision or co- supervision of a PG student at Masters level
•A developed research area that is (or has the potential to be) institutionally/ regionally impactful
•Evidence of successful curriculum development and course coordination
•Experience in postgraduate student clinical case supervision
•Experience in development and reviewing of research proposals
•Experience in online teaching, utilizing new and emerging approaches and technology
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel and Internet
 
Lecturer
•Master’s degree in Clinical Psychology
•Registration with the Health Professional Council of South Africa
•At least three teaching experience in one of Clinical Psychology course or module
•Publication in accredited journal will be an added advantage
•Supervision of at least honours students to completion will be an advantage
•Ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams
•Computer literacy, with a sound knowledge of MS Word, MS Excel and Internet
 
COMPETENCIES
•Technical/professional knowledge and skill
•Good writing, communication and presentation skills
•Ability to maintain strict confidentiality
•Client service orientation
•Meticulous attention to detail
•Ability to work under pressure
•Knowledge and skills
•Strategic decision-making and problem solving skills
•Adherence to professional and ethical standards
•Managing work standards
•Personal impact, stature and credibility
•Building strategic alliances and partnerships
•Aligning performance to success of the department
•Facilitating change
•A team player 
 
KEY PERFORMANCE AREAS 
•Formal instruction in the undergraduate and postgraduate courses
•Co-ordinate undergraduate and postgraduate programmes
•Mentoring and coaching of junior and new academic staff members
•Act as a Research project leader and conduct appropriate research independently or in collaboration with colleagues within the university in line with University’s strategic objectives
•Produce scientifically supported reports for both internal and external stakeholders
•Write scientific articles for peer-reviewed journals and present papers at conferences
•Supervise and co supervise postgraduate research at the Master’s and doctoral level
•Serve on departmental, school, and university activities and committees
•Undertake associated administrative duties with regard to attendance registers, student registration and results, supervision of tests and examinations
•Ensure compliance with HPCSA policies and procedures
•Contribute to the overall development of SMU and actively improve institutional culture
•Any other duties assigned by the HOD and/or Dean of the School
 
 
Closing Date: 30 August 2024
 
Applications from employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr JS Mahlaola, by  email to hr.recruitment3@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521-3906.
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer.
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful.
 
The University reserves the right not to make an appointment.
 
 
 
 
 
 `,` 
 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SKILLS CENTRE 
 
CLINICAL TRAINING GRANT (CTG) 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below. 
 
CLINICAL SKILLS FACILITATOR (1 POST) 
(5-year Fixed Term Contract) 
Ref: 71/2024/MJM/P9 
 
The incumbent will be responsible for the provision and effective facilitation of skills teaching and training for undergraduate and postgraduate for Skills centre at SMU Skills Centre, as well as assisting with development of clinical skills straining programmes and emergency short courses. The incumbent reports to the Director: Skills Centre and will furthermore meet the requirements and competencies as indicated and be responsible for the key performance areas listed below. 
 
REQUIREMENTS
• Bachelor’s Degree in Emergency Care 
• Additional qualification in health professions training or education will be advantageous 
• A minimum of two (2) years’ experience in clinical teaching and training of health professionals within skills and simulation centre environment, preferably in the Higher Education Sector or related fields 
• At least three (3) years’ experience in Prehospital Care, Trauma and Emergency Care and ICU will be an added advantage 
• Registration with Health Professional Council of South Africa 
• Knowledge of good clinical practice and demonstration of innovation and consistency during clinical teaching and assessment 
• Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency 
• Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet and competency of ITS 
 
COMPETENCIES
• Technical/professional knowledge and skills 
• Good interpersonal and communication skills (written and spoken) 
• Presentation and facilitation skills 
• Good report writing skills 
• Integrity and confidentiality 
• Problem solving and analytical skills 
• Client service orientation 
• Teamwork 
• Planning and organizational skills 
• Committed and dedicated work ethos 
• Excellent facilitation skills 
• Administrative capabilities 
• Ability to work under pressure and meet deadlines 
 
KEY PERFORMANCE AREAS 
• Teaching of clinical skills and simulation activities 
• Provide opportunities for and act on individual and group feedback 
• Assessment of students proficiency 
• Planning and coordination of clinical and simulation programs 
• Preparation of clinical teaching materials 
• Preparation of venues and tidying up after skills and simulation performances 
• Ensure neatness of venues and orderly conduct of users 
• Ensure a safe and ethical clinical teaching and learning environment for all users 
• Safekeeping and maintenance of simulation equipment, manikins and stock 
• Develop and maintain good knowledge of simulation equipment 
• Participate in Simulation-Based Education (SBE) curriculum development initiatives 
• Develop new short clinical courses and course materials, and manage accreditation process 
• Interact with students and staff cordially and professionally during clinical teaching sessions 
• Establish and maintain supportive and professional relationships with staff and students 
• Participate in other administrative requirements pertaining to clinical teaching supervision as directed by the Director of Skills Centre 
• Handling/channelling of enquiries or requests 
• Participate in educational research activities of Skills Centre 
• Acquaint self and implement relevant SMU and other health care professional bodies’ policies and clinical training accreditation requirements 
• Establish and maintain supportive and professional relationships with staff and students 
• Participate in CE activities by the University 
• Participate in ongoing educational activities, such as Interprofessional Education and Collaborative Practice (IPECP) 
• Engage in educational opportunities (e.g. professional conferences, courses, programs, certifications 
• Maintain proper recordkeeping 
• Contribute to the overall development of SMU, and actively promote institutional culture 
• Any other duties assigned by the Director 
 
 
Closing date: 30 August 2024 
 
Applications from the employment agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr MJ Mopai, to the Human Resources Department, P.O Box 68, Medunsa, 0204 or by e-mail at hr.recruitment6@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521 3624. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The University reserves the right not to make an appointment.
 
 
 
 
 
 `,` 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
SCHOOL OF HEALTH CARE SCIENCES
 
DEPARTMENT OF NURSING SCIENCE
 
CLINICAL TRAINING GRANT (CTG)
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunity below:
 
CLINICAL FACILITATOR (1 POST)
(5-year Fixed Term Contract)
Ref:70/202/MJM/P8
 
The incumbent will be responsible for coordinating and overseeing the clinical placements of nursing students across various specialties, ensuring alignment with the South African Nursing Council requirements. This role involves liaising with clinical coordinators and facilities to arrange schedules, maintain records, and manage logistics, while also teaching and assessing students’ clinical skills. The incumbent will play a key role in developing study materials, supporting clinical staff, and fostering strong relationships with stakeholders to enhance the students' practical learning experience. The incumbent will report to Clinical Coordinator, the Head of Department: Department of Nursing Science and will furthermore meet the requirements and competencies as indicated and be responsible for the key performance areas listed below.
 
REQUIREMENTS
• Master’s Degree in Nursing Sciences
• At least five (5) years’ experience as a registered Nurse Practitioner and two (2) years instructor of clinical skills facilitation or educator in a nursing education institution
• Current registered with the South African Nursing Council (SANC)
• Additional qualification in Nursing Education
• In-depth knowledge of the current Nursing legal and ethical framework
• Knowledge of current Nursing curriculum
• Experience in using simulation facilities
• Experience in the supervision of students in clinical fields
• Understanding and experience in record keeping as required by SANC
• Computer literate (Word-processing, Power Point, Excel, Internet & E-mail)
• Experience with teaching online, using electronic software/e-learning packages
• A valid driver’s license
 
COMPETENCIES
• Technical/professional knowledge and skill
• Technical/professional knowledge and skills
• Good interpersonal, presentation and communication skills (written and spoken)
• Good report writing skills
• Personal impact, stature, and credibility with unquestionable integrity
• Problem solving and analytical skills
• Client service orientation
• Ability to work in various teams
• Ability to keep information confidential
• Planning and organizational skills
• Ability to work under pressure and meet deadlines
• Committed and dedicated work ethos
 
KEY PERFORMANCE AREAS
• Liaise with the clinical Coordinator regarding activities for the clinical placement of students in the four areas of Nursing, (e.g. General Nursing, Community Health Nursing, Psychiatric Nursing and Midwifery) as well as postgraduate diploma students in their areas of specialty
• Liaise with the clinical Coordinator in arranging placement schedules for all the students in the facility as outlined by the clinical placement areas
• Attend all placement meetings in the facilities and in the province where nursing students are placed
• Assist with students’ registration at the University and at the South African Nursing Council at all stages of the students’ training
• Lead the placement timetable of students to ensure that this complies with the South African Nursing Council requirements
• Develop the study material and workbook for students’ skills training
• Keep a viable, collegial and professional relationship with preceptors in the clinical facilities
• Liaise with clinical coordinators and facilities in between the meetings should this be necessary
• Liaise with clinical coordinators in the arrangement and booking of transport for all the students and staff members
• Keep a record of all clinical practice trips undertaken by students and staff and secure a quarterly expense record for the Clinical Training Grant reports
• Ensure that each clinical facility receives correct clinical placement schedules with accompanying documents on time, e.g. learning outcomes, learning guides, workbooks and hour schedules
• Ensure that students have adequate PPEs for practice at all times as well as ensuring a constant reservoir of required PPE
• Manage and resolve clinical accompaniment related issues as raised by staff, students and facilities
• Teach/demonstrate/simulate clinical skills to students at all relevant levels when required
• Follow up and supervise students every time they are in the practice areas to comply with the Gauteng Department of Health stipulations and the South African Nursing Council requirements
• Keep records of students’ activities and movements while in the clinical areas
• Prepare for and conduct formative and summative assessments for all levels relating to clinical skills
• Continuously maintain and upload students’ information relating to clinical skills including:
o Record of placements
o Record of attendance
o Record of time spent at clinical
o Any record that impacts on the student’s clinical practice
• Support staff appointed specifically for clinical facilitation
• Establish good relations with SMU and external stakeholders
• Develop relevant reports and consult/communicate with relevant stakeholders on all matters relating to clinical facilitation/training in the department
• Actively improve the departmental image internally and externally
• Contribute to the overall development of SMU, and actively promote institutional culture
• Any other duties assigned by the HOD and/or Dean
 
Closing date: 30 August 2024
 
Applications from the employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr MJ Mopai by e-mail to hr.recruitment6@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521 3624.
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer.
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful.
 
The University reserves the right not to make an appointment
 
 
 
 
 
 `,` 
 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF MEDICINE 
 
DEPARTMENT OF PHYSIOLOGY 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below.
 
ASSOCIATE PROFESSOR (1 POST)
Ref:50/2024/JSM/P6
 
The University is looking for an energetic individual who will be responsible for teaching, learning and research within the Department of Physiology in line with university’s teaching and research strategy. He/She will report to the Head of Department (HOD), and must meet the requirements, competencies and be responsible for the key performance areas below. 
 
REQUIREMENTS
•PhD in Physiology
•Three (3) years’ teaching experience at a tertiary institution or five (5) years’ experience from a Science Council
•At least fifteen (15) related publication in accredited journals
•Supervision of five (5) Masters students to completion
•A developed research area that is (or has the potential to be) institutionally/ regionally impactful
•Proven track record of lecturing at both undergraduate and postgraduate levels
•Proven track record of involvement in curriculum development
•Substantial participation in leadership and administration at school level
•Substantial scholarship or leadership in community engagement
•Demonstration of innovation in the discipline will be an added advantage
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel and Internet
 
COMPETENCIES
•Technical/professional knowledge and skill
•Good writing, communication and presentation skills
•Ability to maintain strict confidentiality
•Client service orientation
•Meticulous attention to detail
•Ability to work under pressure
•Knowledge and skills
•Strategic decision-making and problem solving skills
•Adherence to professional and ethical standards
•Managing work standards
•Personal impact, stature and credibility
•Building strategic alliances and partnerships
•Aligning performance to success
•Facilitating change
•A team player 
 
KEY PERFORMANCE AREAS 
•Formal instruction in the undergraduate and postgraduate courses
•Co-ordinate undergraduate and postgraduate programmes
•Mentoring and coaching of junior and new academic staff members
•Act as a Research project leader and conduct appropriate research independently or in collaboration with colleagues within the university in line with University’s strategic objectives
•Produce scientifically supported reports for both internal and external stakeholders
•Write scientific articles for peer-reviewed journals and present papers at conferences
•Supervise and co supervise postgraduate research at the Master’s and doctoral level
•Serve on departmental, school, and university activities and committees
•Undertake associated administrative duties with regard to attendance registers, student registration and results, supervision of tests and examinations
•Ensure compliance with HPCSA policies and procedures
•Contribute to the overall development of SMU and actively improve institutional culture
•Any other duties assigned by the HOD and/or Dean of the School
 
 
Closing Date: 30 August 2024
 
Applications from employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain a comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr JS Mahlaola, by  email to hr.recruitment3@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521-3906.
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer.
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful.
 
The University reserves the right not to make an appointment.
 
 
 
 
 `,` 
 
 
 
SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF HEALTH CARE SCIENCES 
 
DEPARTMENT OF PHYSIOTHERAPY 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
SENIOR LECTURER (1 POST)
(re-advert)
Ref: 5 /2024/RM/P7
 
The University is looking for an energetic individual who will be responsible for Teaching, Learning, Research and Community Engagement in the Department of Physiotherapy at the Sefako Makgatho Health Sciences University. He/she will report to the Head of Department (HOD) and must meet the requirements and competencies and be responsible for the key performance areas below. 
 
REQUIREMENTS
•A PhD in Physiotherapy with specialization in Adult Neurology Rehabilitation
•Must be registered with the Health Professions Council of South Africa (HPCSA) as a Physiotherapist
•At least three (3) years teaching and learning experience
•A minimum of three (3) publications in accredited scientific journals
•Module leader or have an established teaching and learning experience
•Successful supervision/co-supervision of a postgraduate student at Masters level
•A developed area of research that is (has the potential to be) institutionally or regionally impactful
•Established scholarship or specialist role in community engagement
•Substantial participation in leadership and administration at departmental or school or programme level
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet and competency of ITS
 
COMPETENCIES
• Technical/professional knowledge and skill 
• Good writing and presentation skills 
• Good communication and interpersonal skills 
• Ability to maintain strict confidentiality 
• Client service orientation 
• Meticulous attention to detail 
• Ability to work under pressure 
• Coaching and mentoring 
• Problem solving 
• Professional and ethical standards 
• Managing work standards 
• Personal impact, stature, and credibility 
 
KEY PERFORMANCE AREAS 
• Teaching and Learning, Research and Community Engagement (Theoretical and Clinical for both under and postgraduate students) 
• Conduct evidence-based clinical practice 
• Publish research outcomes in accredited journals 
• Supervise undergraduate and post-graduate research 
• Play an active role in community engagement 
• Physiotherapy module management 
• Develop and participate in curriculum development 
• Student educational support and correspondence related to the programme 
• Generate original and current student lists from the university enrolment platform as well as other required documents 
• Capture student results on the ITS System 
• Submission of student records to Health Professions Council of South Africa (HPCSA) and address related enquiries 
• Ensure proper record keeping 
• Undertake associated administrative duties with regard to attendance registers, student registration and results, supervision of tests and examinations 
• Contribute to the overall development of SMU and actively improve institutional culture 
• Any other duties assigned by the HOD and/or Dean of the School 
 
 
Closing Date: 30 August 2024 
 
Applications from the employment agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr TR Moletsane by e-mail to hr.recruitment4@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4774. 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
The University reserves the right not to make an appointment.
 
 
 
 
 `,`SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF HEALTH CARE SCIENCES
 
DEPARTMENT OF PHYSIOTHERAPY
 
Sefako Makgatho Health Sciences University (SMU) offers professional health sciences training and education in a range of fields through excellence in teaching, learning, innovative research and community engagement. SMU is situated in Ga- Rankuwa (North of Pretoria) and the following position(s) is/are currently available:
 
LECTURER
(With Special Interest in Community Physiotherapy) (1 Post)
Ref:55/2024/RM/P8
 
The University is looking for an energetic individual with the requisite academic stature who will be responsible for Teaching, Learning, Research and Community Engagement in the Department of Physiotherapy. He/she will report to the Head of Department (HOD): Physiotherapy and must meet the requirements and competencies and be responsible for the key performance areas below.
REQUIREMENTS
•A Master’s degree in Physiotherapy or Public health (with special interest in Community Physiotherapy)
•At least two (2) years’ teaching experience in higher education or working in a clinical setting, in the Community physiotherapy environment
•Registration with the HPCSA as a Physiotherapist
•Ability to manage multiple Physiotherapy modules at all levels of study
•Willingness to travel to areas where students are placed for clinical experience
•Successful student research supervision will be an advantage
•Publication/s in an accredited journal will be a strong recommendation
•Proven ability to navigate online platforms such as Blackboard Collaborate, Zoom and Microsoft Teams with requisite proficiency
•Computer literacy, with a sound knowledge of MS Word, MS Excel, Internet, and competency of ITS
•Must be keen to improve post graduate qualification
 
COMPETENCIES
•Technical/professional knowledge and skills
•Good writing, communication and presentation skills
•Ability to work in a team
•Good interpersonal skills and the ethics of team
•Good Problem solving skills
•Good Organizing and Planning Skills
•Client service orientated
•Meticulous attention to details
•Experienced clinical skills supported by evidence through research
•E-Teaching & Learning training
 
KEY PERFORMANCE AREAS
•Undertake Teaching and Learning, Research and Community Engagement applied to Physiotherapy (Theoretical and Clinical to undergraduate and postgraduate students)
•Keep abreast of developments (evidence based) within own field of study and its implications for teaching and learning
•Ability to use various Community Physiotherapy Outcome Measurement tools
•Participate in Community-Based projects which are utilized for students’ clinical training
•Provide clinical supervision to under graduate and postgraduate students
•Participate in departmental research projects, including supervision of Postgraduate studies ‘research
•Ensure proper Physiotherapy module management
•Manage student educational support and correspondence related to the programme
•Generate original and current student lists from the University enrolment platform as well as other required documents
•Capture student results on the ITS System timeously and accurately
•Submission of student records to HPCSA and address related enquiries
•Ensure proper record keeping
•Compile relevant reports, and communicate and consult with relevant stakeholders
•Undertake associated administrative duties with regard to attendance registers, student registration and results, supervision of tests and examinations
•Participation in departmental, school and University committees
•Ensure compliance with the University’s safety and health policies and procedures
•Contribute to the overall development of SMU, and actively improve institutional culture
•Skills training and workshops for clinical staff at clinical sites, improve departmental collaboration in Community Physiotherapy Practice
•Personal growth in the areas of Teaching and Learning, Research and Publication in Community Physiotherapy and public health
•Contribute to the overall development of SMU and actively improve institutional culture
•Any other duties assigned by the HOD and/or Dean
 
Closing date: 30 August 2024
 
Applications from the employment agencies will not be considered.
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr TR Moletsane by e-mail at hr.recruitment4@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered.
 
Telephonic enquiries regarding conditions of service: (012) 521-4774.
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer.
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful.
 
The University reserves the right not to make an appointment.`,`SEFAKO MAKGATHO HEALTH SCIENCES UNIVERSITY 
 
SCHOOL OF DENTISTRY 
 
DEPARTMENT OF DENTAL THERAPY & ORAL HYGIENE 
 
Sefako Makgatho Health Sciences University (SMU) is on a renewal path with exciting and unique opportunities to shape the training of medical and other health professionals, and scientists in general. We are on a vigorous campaign to attract top talent to join our exciting journey, as reflected in the opportunities below:
 
SENIOR LECTURER/ASSOCIATE PROFESSOR/ PROFESSOR
AND
HEAD OF DEPARTMENT (1 POST)
Ref: 73/2024/KM/HOD
 
The University is looking for a dynamic individual as Head of Department (HOD) to provide academic leadership and organizational management to the department in respect of overall teaching and learning, research, community engagement and administrative management. The incumbent will report to the Dean of the School.
 
The incumbent will be appointed permanently on a substantive position as either a Professor/Associate Professor or Senior Lecturer and on a 3-year term appointment as an HOD. He/She must meet the requirements and competencies and be responsible for the key performance areas listed below. 
 
REQUIREMENTS
Senior Lecturer 
•PhD in Dental Therapy/Oral Hygiene or a Master’s Degree in Dental Therapy/Oral Hygiene with evidence of registration for a PhD
•Proof of registration with the HPCSA
•Successful supervision or co-supervision of postgraduate students at Masters level
•Module leader or established teaching experience
•At least three (3) publications in accredited journals
•Established scholarship or specialist role in community engagement
•Substantial participation in leadership and administration at department or school or programme level
•A developed research area that is (or has the potential to be) institutionally or regionally impactful
•Evidence of successful curriculum development and academic management
•Sound research background
 
Associate Professor 
•PhD in Dental Therapy/Oral Hygiene
•Proof of registration with the HPCSA
•Three (3) years teaching experience or five (5) years research experience from a Science Council
•Successful supervision or co-supervision of five (5) post graduate student at Masters level
•Evidence of at least Fifteen (15) publications in accredited scientific journals
•Have an established research area that is (or has the potential to be) nationally impactful
•Research Leader
•Generate external funding for research projects
•Substantial scholarship that is recognised at a national level or leadership in community engagement that is nationally recognised
•Understanding of the challenges facing the Higher Education Sector in general
•Ability to exhibit effective leadership style and a commitment to higher academic standards
•Commitment and ability to promote the Department’s mission and position to internal University constituencies and external stakeholders
 
Professor
•A PhD in Dental Therapy/Oral Hygiene
•Proof of registration with the HPCSA
•Minimum of Eight (8) to Ten (10) years’ experience in a managerial and leadership position at department or school or programme level.
•Evidence of at least twenty (20) publications in accredited scientific journals (cumulative)
•Successful supervision or co-supervision of ten (10) Masters or PhD students
•Have an internationally recognised research area that is (or has the potential to be) internationally impactful
•Research Leader and Mentor
•Generate significant external funding for research projects
•Substantial scholarship that is recognised at national level or leadership in community engagement that is nationally recognised
•Understanding of the challenges facing the Higher Education Sector
•Proof of exposure as team leader
•Ability to exhibit effective leadership style and a commitment to higher academic standards.
•Commitment and ability to promote the Department’s mission and position to internal University constituencies and external stakeholder
 
COMPETENCIES
•Technical/ professional knowledge and skill Strategic decision making and problem solving Resource management •People management, including performance management Building strategic alliances and partnerships Commitment and ability to promote the Department’s vision and mission to internal University constituencies and external stakeholders Personal impact, Stature and Credibility Emotional intelligence and political sensitivity Management of complexity and ambiguity 
•Action orientated
•Facilitating change
•Team player
 
KEY PERFORMANCE AREAS
•Academic and Research Leadership
Teach courses/modules according to the needs of the department
Maintain and continuously strive to improve personal academic standing
Admit students into offerings in the department and ensure that examinations are of acceptable quality and are properly administered
Encourage the pursuit of excellence and innovation in teaching and learning
Encourage the pursuit of scholarship by ensuring that academic staff members are encouraged and supported to embark on research and community engagement activities which respond to SMU’s vision and mission
Seek new opportunities for enhancing the national and international standing of the University and Department
Promote collaboration with other Departments or Centres
Develop a culture of evaluation and benchmarking and striving for continuous improvement
Represent the interests and needs of the Department and University to the external community
Represent the interests and needs of the Department within the University through active engagement with the School Board, School, Senate and all its Committees
Create and maintain a visionary research strategy for the department; and an environment that encourages research, leading to strong active research habits and a culture of inquiry
 
•Department Governance
Establish and maintain suitable Departmental Organisational and Committee structures
Develop and maintain operational and academic planning functions of the Department including setting goals and targets
Implement quality assurance processes in general and particularly in relation to teaching, research and the supervision of students
Ensure optimal utilization of staff
Ensure that University policies are implemented within the Department
Communicate timeously information and decisions to and from various University committees and authorities
 
•Staff Guidance and Management for Performance
Foster the development of staff, including induction of new staff by ensuring that appropriate career development and guidance support are available for staff on probation within the department
Ensure that personnel issues in the Department are managed fairly and equitably, including but not limited to, recruitment and selection of staff, annual staff performance assessment and staff discipline and grievances
Establish mechanisms to ensure that health and safety policies are observed throughout the department, including activities (e.g. fieldwork) conducted outside University premises
Ensure that the Code of Ethics and Conduct of the University is adhered to
Builds an effective team of scholars through:
Planning and implementing a fair and reasonable dispensation regarding the workload of staff members in the department;
Planning and implementing a clear and reasonable career path for every staff member in the department, taking account of the strategic plans of the University, School and Department;
Appropriate mentoring interventions where and whenever it is needed;
Managing staff member’s performance including joint appointees in accordance with existing university policies and procedures;
Recruitment and selection of scholars in the case of vacancies and/or specific strategic needs, whenever strategic repositioning requires expansion of academic endeavours;
Creating and maintaining a scholarship-friendly environment in the department;
Planning and overseeing effective and relevant staff development
 
•Financial and Infrastructure Management
Take responsibility for financial management of the Department, including establishment of budgets and planning departmental infrastructure needs including relevant equipment and monitoring expenditure patterns against allocations/budget
Actively pursue opportunities to increase revenue for the department
Manage and maintain departmental space and infrastructure resources
Create conducive work environment including staff and student training
Ensure compliance with legislation and University policies and regulations
•Contribute to the overall development of SMU and actively improve institutional culture
•Carry out other functions as may be required by the Dean of School
 
 
Closing date: 30 August 2024 
 
Applications from the employment agencies will not be considered. 
 
Typed applications (quoting the reference number) which should contain comprehensive curriculum vitae, certified copies of all qualifications and contact details of three referees, should be forwarded, for the attention of Mr. AK Mothabela, by e-mail to hr.recruitment7@smu.ac.za
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit the requested documents/information will result in your application not being considered. 
 
Telephonic enquiries regarding conditions of service: (012) 521-4433 
 
The Sefako Makgatho Health Sciences University is an Equal Opportunity and Affirmative Action Employer. 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applications as unsuccessful. 
 
The university reserves the right to make or not to make an appointment`],postedDate:"15/8/2024",iframe:"",uuid:"p49ebe166-c091-490e-b33e-af28182b63e4"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/tut-logo_orig.jpg",href:"https://www.govpage.co.za/tshwane-university-of-technology-tut-vacancies-blog/tshwane-university-of-technology-tut-vacancies4390102",title:"TSHWANE UNIVERSITY OF TECHNOLOGY (TUT) VACANCIES",content:[` 
TSHWANE UNIVERSITY OF TECHNOLOGY (TUT)
 `,`4X COUNSELLING PSYCHOLOGY INTERNSHIP
(12 months)
DIRECTORATE OF STUDENT DEVELOPMENT AND SUPPORT
Pretoria Campus
Ref: 24/148
OFO Code:
The Directorate of Student Development and Support (SDS) has two internship vacancies at the Pretoria Campus. The internship spans one year and is in Counselling Psychology. It will start on 2 January 2025. 
The Directorate of Student Development and Support (SDS) in Higher Education and Development has four internship vacancies at the Pretoria Campus. The internship spans one year and is in Counselling Psychology only. 
 
INSTRUCTIONS: Applicants are required to submit together with the CVs, a standardized application form available from the university intranet as well as recently certified copies of qualifications and identity documents. Failure to comply with this instruction will disqualify the candidate. Further note that candidates may be expected to make a presentation or undergo competency testing. 
 
Critical Performance Areas: 
• Offer a professional and competent counselling services to registered TUT students 
• To help foster and develop both the academic and personal skills of TUT students 
• Take part in various psycho-educative programmes/presentations/training 
• Present psycho-educative Life Skills classes 
• Offer individual and group counselling services to children at a local children’s home 
• Comply with the administrative requirements at SDS 
• To be able to work within a team and contribute to effective team functioning 
 
Minimum Requirements (Qualification): 
• Currently registered as an MA (Counselling Psychology) student at a recognized University 
 
Personal competencies: 
• Ability to work with people individually or in groups 
• Ability to manage stress and time effectively 
• Ability to apply and facilitate effective communication. 
• Ability to counsel, mentor and provide guidance. 
• Ability to prioritize and organize, function independently and take responsibility for tasks. 
• Ability to operate effectively in team context. 
• Ability to take initiative and to be creative and innovative. 
• Effective presentation, lecturing and facilitation skills (individuals, group, facilitation, etc.) 
• Ability to apply a professional code of ethics and maintain confidentiality.`,`Send the following documents to Malanl@tut.ac.za  
• A CV 
• A certified copy of your ID 
• A reference letter from a current lecturer/supervisor 
• All relevant certified registration documents from the HPCSA 
• A certified academic record 
 
Enquiries: Lynne Malan (malanl@tut.ac.za)
 
Closing date: 30 August 2024
 
If we have not responded within a month of the closing date, you should regard your application as unsuccessful. Correspondence will be entered into only with short-listed candidates. The University reserves the right not to make an appointment.
 
Women and people with disabilities are encouraged to apply.`],postedDate:"15/8/2024",iframe:"",uuid:"p3b62280f-a092-45fd-afb8-d20bd625f527"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ufs_orig.jpg",href:"https://www.govpage.co.za/university-of-the-free-state-ufs-vacancies-blog/university-of-the-free-state-ufs-vacancies2334411",title:"UNIVERSITY OF THE FREE STATE (UFS) VACANCIES",content:[` 
UNIVERSITY OF THE FREE STATE (UFS)
 `,` 
 

PROGRAMME DIRECTOR (2 POSITIONS) (CONTRACT APPOINTMENT: 5 YEARS) (JOB ID: 5855)
Organizational Unit University of the Free State -> Faculty of Natural and Agricultural Sciences -> Department Soil, Crop and Climate Sciences
Contract Type Contract
Occupational Level Middle Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 25/8/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
This post was previously advertised as Job ID: 5814.  All applications received in response to the previous advertisement, will automatically be considered again. Previous applicants therefore do not need to reapply.
 
PLEASE NOTE THAT ONLY FULL-TIME PERMANENT ACADEMIC PERSONNEL FROM THE DEPARTMENT OF SOIL, CROP AND CLIMATE SCIENCES WILL BE CONSIDERED FOR THIS POST.
 
Duties and responsibilities:
In consultation with the Academic Head of Department (AHD); undertake the following:
•    Manage the curriculum processes of the department.
•    Develop new learning programmes in consultation with stakeholders.
•    Ensure frequent and continuous development and management of the operational plan of the programme.
•    Provide general leadership in the programme and ensure academic coherence across all various modules of the programme.
•    Ensure that the activities of the Programme are undertaken in accordance with the governance, policy, and regulatory frameworks of the University.
•    Assume responsibility for the academic quality of the Programme.
•    Manage the academic administration of the Programme.
•    Ensure scholarship of high quality.
•    Manage matters relating to teaching, learning, and students in the Programme.
•    Conduct own research.
•    Provide academic advice in terms of academic inquiries, amendments of yearbooks, schedules, timetables, etc. related to the Programme.
•    Serve on the marketing committee of the faculty as necessary.
•    Assist with marketing pamphlets or any suitable marketing material.
 
Inherent requirements:
•    Doctoral degree on NQF level 10 in Soil, Crop and Climate Sciences or closely related field. 
•    A full-time, permanent member of the academic staff of the Department of Soil, Crop and Climate Sciences at the University of the Free State.

Recommendations:
•    Good management skills.
•    Good interpersonal and communication skills (verbal and written).
•    Ability to function with ease in the university’s richly diverse working environment. 
•    Strategic thinking.
•    Good organisational skills and administrative skills.
•    Good computer skills (skilled use of Microsoft Office software).
 
Competencies
Required competencies: 
•    Results oriented.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
-    The ability to be reliable, responsible, dependable and to fulfil obligations.
•    Strategic thinking.
-    The ability to deal with several activities at a time.
-    The ability to plan work and to follow plans.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to lead, take charge of situations, and offer opinions and directions to others. 
-    The ability to be cooperative with others, display a good-natured attitude, and encourage people to work together.
•    Building coalitions
-    The ability to negotiate, sell, influence and to persuade others.
-    The ability to interact with others and establish personal connections with people.
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).

Assumption of duties: 01 October 2024.
 
Closing date:  25 August 2024.
 
Allowance: The Programme Director allowance is payable, which is calculated according to a transparent formula approved by the relevant decision-making structures of the UFS.  The value of the allowance is available on request. 
 
Enquiries: For enquiries, please feel free to contact me at 051 401 7659 or email at SejanamaneP@ufs.ac.zaor Recruit@ufs.ac.za. Additionally, kindly contact 051 401 2979/ 9810/ 9813/ 9814/ 9848 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at :   EEA13_EE Plan UFS 1 March 2022 (003).pdf

The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

Additional Information
 Programme Director (2 positions) (Contract appointment: 5 years) (Job ID: 5855)

APPLY FOR THIS JOB

 
 
 
 
 `,` 
 
 
 
 

LECTURER/SENIOR LECTURER - CENTRE FOR DEVELOPMENT SUPPORT (2-YEAR CONTRACT APPOINTMENT) (JOB ID: 5845)
Organizational Unit University of the Free State -> Faculty of Economic and Management Sciences -> Centre for Development Support
Contract Type Contract
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 1/9/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities: 
•    Finalise the curriculum for the restructured master's degree.
•    Oversee the development of study guides.
•    Integrate conceptual ideas across all modules/curriculum coherence.
•    Integrate relevant graduate attributes into modules.
•    Ensure pedagogical alignment across modules.
•    Monitor the quality of teaching and learning across all modules.
•    Develop and teach in at least one module.
•    Day-to-day management of research projects on universities and sustainable development:  administration, budgeting, managing post-doctoral fellows on the project, designing and conducting fieldwork interviews and participatory research, drafting papers, organising webinars and other public engagement events, developing project websites. 
 
Inherent requirements:
Lecturer
•    A PhD on NQF Level 10 in Development Studies related to human development and higher education.
•    A minimum of 5 years relevant experience in curriculum development and alignment of courses with the guidelines from authorities (for example, SAQA).
•    Proven experience in the delivery of poster or oral presentations at conferences or equivalent activities.
•    Evidence of manuscripts produced that have the potential to be converted or submitted for publication in accredited journals.
•    A good academic record.
Senior Lecturer
•    PhD on NQF Level 10 in Development Studies related to human development and higher education.
•    A minimum of 5 years relevant experience in curriculum development and alignment of courses with the guidelines from authorities (for example, SAQA).
•    Proven experience in the presentation of papers/posters at national scholarly conferences.
•    Proven national recognition for specialist expertise and research in a specific area of scholarship.
•    An NRF rating or demonstrated potential for obtaining an NRF rating.
•    Proven experience in supervision of graduated master’s degree students.
•    A proven research record of relevant publication/s in peer reviewed national and international accredited scientific journals. 
•    Proven experience of service as an active member of a national or international scholarly society or committee or agency concerned with research at higher-education levels.
Recommendations:
•    Familiarity with higher education research and debates and sustainable development debates.
•    Experience working on a funded research project.
•    Able to work in a teaching team and a research project team.
•    A publications record
 
Competencies
Required competencies:  
•    Results oriented.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
-    The ability to stick with tasks, not give up, and overcome obstacles in completing one’s task.
•    Strategic thinking.
-    The ability to focus on details, work towards perfection, and approach work in a neat and organised manner.
-    The ability to plan work and to follow plans.
•    Business Acumen:
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy and enthusiasm.
-    The ability to lead, take charge of situations, and offer opinions and directions to others. 
•    Building coalitions
-    The ability to negotiate, sell, influence and to persuade others.
-    The ability to interact with others and establish personal connections with people.

Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    Copies of all academic records (applicable where inherently required).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).

 
Assumption of duties: As soon as possible.
 
Closing date:  01 September 2024
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact me at 051 401 9814 or email at MakolaCM@ufs.ac.zaor Recruit@ufs.ac.za. Additionally, kindly contact 051 401 2979/ 9810/ 9813/ 9848 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at :   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.
 
Additional Information
 Lecturer/Senior Lecturer (2-Year Contract Appointment)
 
APPLY FOR THIS JOB
 
 
 
 
 `,` 
 
 
 
 
 
 

LECTURER/SENIOR LECTURER (IN INDUSTRIAL PSYCHOLOGY OR HUMAN RESOURCE MANAGEMENT) (JOB ID: 5856)
Organizational Unit University of the Free State -> Faculty of Economic and Management Sciences -> Department Industrial Psychology
Contract Type Permanent
Occupational Level Junior Management
Location QwaQwa Campus - QwaQwa, FS ZA (Primary)
Closing Date 27/8/2024
 
Description
This post was previously advertised as Job ID 5805.  All applications received in response to the previous advertisement, will automatically be considered again. Previous applicants therefore do not need to reapply.
 
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll  - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities: 
•    Teach Industrial Psychology and Human Resource Management modules to undergraduate and postgraduate students.
•    Conduct high-quality research, publish in accredited journals, and deliver quality research outputs in line with the faculty's research strategy.
•    Provide supervision to postgraduate students, namely Honours, Masters, PhD students, and professional industrial psychology interns.
•    Provide leadership in pursuit of the department and faculty strategic plan with regard to research, teaching engaged scholarship and leadership and administration.
•    Perform academic administration pertaining to undergraduate and postgraduate subjects – this may include typing, setting, and marking all question papers and memorandums, recording marks and handling student complaints.
•    Serve as a member of various academic committees and perform any other tasks allocated by the Dean and head of the department.
•    Develop and maintain strong collaborative relationships with relevant research, civil society, government, industry, and professional organisations.
•    Contribute to curriculum development within the faculty.
•    Contribute towards creating a strong African Sociology academic identity.
 
Inherent Job requirements:
Lecturer:
•    A relevant Doctoral degree on NQF Level 10 in Industrial Psychology or Human Resource Management
and registered with the HPCSA as an Industrial Psychologist or registered with the SABPP (permanent appointment).
OR
•    Relevant master’s degree on NQF Level 9 in Industrial Psychology/ Human Resource Management and registered with the HPCSA as an Industrial Psychologist or registered with the SABPP (contract appointment: 5 years, during which a PhD on NQF Level 10 Industrial Psychology/ Human Resource Management must be obtained to be converted into a permanent appointment).
•    Registered Industrial Psychologist should show evidence of professional supervision of intern Industrial Psychologists.
•    Proven experience in poster or oral presentation at conferences and publication of articles.
•    Provide evidence of manuscripts produced that have the potential to be converted or submitted for publication, ideally in an accredited journal.
 
Senior Lecturer
•    A relevant Doctoral degree on NQF Level 10 in Industrial Psychology or Human Resource Management
and registered with the HPCSA as an Industrial Psychologist or registered with the SABPP.
•    Proven record of teaching at undergraduate and/or postgraduate level 
•    Proven experience supervising to completion of Master’s, PhD students and if registered as an Industrial Psychologist, Industrial Psychology interns. 
•    Proven experience in the presentation of papers at national scholarly conferences. 
•    Proven national recognition for specialist expertise and research in a specific area of scholarship. 
•    An NRF rating or demonstrate potential for obtaining an NRF rating. 
•    A proven research record of relevant publications in national and international accredited journals. 
•    Proven experience of service as an active member of a national or international scholarly society or committee, or agency. 
 
Recommendations:
•    Proven lecturing experience in the Higher Education environment.
•    Evidence of professional supervision of intern industrial psychologists.
•    Proven experience in presenting Industrial Psychology modules.
•    Excellent research record, as demonstrated by the applicant’s completed master’s or PhD studies.
•    Proficiency in computer skills, e.g., MS Word, Excel, and PowerPoint.
•    Proven skills in data analysis using IBM SPSS, AMOS, AtlasTi, Nvivo and PLS.
•    Good command of the English language. 
 
Competencies
Key Competencies Required: 
•    Results oriented:
     -    The ability to be reliable, responsible, dependable and to fulfil obligations. 
     -    The ability to cope with a frequently changing environment and to adapt to evolving situations.
•    Strategic thinking:
     -    The ability to carefully analyse information and use logic to address issues and problems at work.
     -    The ability to deal with several activities at a time.
•    Business Acumen:
     -    The ability to adhere to rules and strictly follow work regulations.
     -    Proficient in using MS Office.
•    Leading:
     -    The ability to lead, take charge of the situations, and offer opinions and directions to others.
     -    The ability to be cooperative with others, display a good-natured attitude, and encourage people to work together.
•    Building coalitions:
     -    The ability to be self-assured and at ease with people in all types of social situations.
     -    The ability to interact with others and establish personal connections with people.
 
Required Documents
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    Copies of all academic records (applicable where inherently required).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
Assumption of duties: 01 October 2024.
 
Closing date: 27 August 2024
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact me at 051 401 9810 or email at MofoloNG@ufs.ac.za or Recruit@ufs.ac.za. Additionally, kindly contact 051 401 9848/ 9813/ 9814/ 2979/ 7659 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at :   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

The UFS will only consider applications of candidates who meet all the inherent requirements of the position.

Additional Information
 Job ID 5856_Lecturer_Senior Lecturer_Industrial Psychology Department_Qwaqwa Campus
 
APPLY FOR THIS JOB


 
 
 
 `,` 
 
 
 
 
POSTDOCTORAL RESEARCH FELLOWSHIP (1-YEAR CONTRACT, RENEWABLE UP TO 2 YEARS) JOB ID: 5853
Organizational Unit University of the Free State -> Faculty of Law -> Department Private Law
Contract Type Contract
Occupational Level Semi-Skilled
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 30/9/2024
 
Description
The University of the Free State (UFS) invites applications from suitably qualified candidates for a postdoctoral fellowship in the Department of Private Law. Candidates interested in pursuing an academic or professional career in (research) Private Law, with special research interests in family law, customary law and property law in a South African, African and international context, are encouraged to apply.
The fellowship will enable an outstanding doctoral graduate to obtain experience in research and innovation at a higher education institution under the mentorship of established researchers.
 
The fellowship is awarded on a competitive basis, taking into account the applicants' academic achievements, publication outputs and research potential, as well as the relevance of prior experience and expertise. The fellowship is available for a period of one year, renewable for up to two years subject to satisfactory performance and available funding. 
 
Duties and responsibilities:
•    Conduct innovative research. 
•    Author/co-author publication outputs in the form of DHET–accredited scholarly journal articles or books/chapters in books. The renewal of the fellowship beyond the first year depends on satisfactory performance and the submission of an annual progress report.
•    Initiate projects and seek funding for them.
•    Register and reside as postdoctoral research fellow at the UFS and participate in relevant activities of the School of Postgraduate Studies and the Directorate of Research
 
Competencies
Eligibility criteria
Open to all South African and foreign nationals for full-time research at the University of the Free State.
Graduated with a LLD or PhD degree in a relevant discipline within the last five years
Successful applicants may not hold full-time salaried employment during the fellowship
Successful applicants must be able to relocate to the UFS for the duration of the fellowship. This is a residential fellowship: the successful applicant is required to spend 80% of her/his postdoctoral period at the UFS.
 
To apply, please email the following documentation by 30 September 2024 to Dr. Marda Horn at hornjg@ufs.ac.za
Motivation letter, including a 1-2 page outline of relevant expertise and experience.
Full CV including a list of research publications, conference papers and other scholarly output.
Full transcripts of academic record and copy of doctoral degree certificate.
Copy of ID document (or copy of passport in the case of foreign applicants).
Contact details of two academic referees who have taught/supervised the candidate.
 
Value of the fellowship:
R270 000 Annual Fellowship.
R30 000 Additional Research Expenses.
 
Closing date: 30 September 2024
Commencement of fellowship: 01 January 2025
For enquiries, please contact: Email: Dr. Marda Horn at hornjg@ufs.ac.za
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at:  EEA13_EE Plan UFS 1 March 2022 (003).pdf
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.
 
Eligibility criteria
•    Open to all South African and foreign nationals for full-time research at the University of the Free State. 
•    Graduated with a LLD or PhD degree in a relevant discipline within the last five years
•    Successful applicants may not hold full-time salaried employment during the fellowship
•    Successful applicants must be able to relocate to the UFS for the duration of the fellowship. This is a residential fellowship: the successful applicant is required to spend 80% of her/his postdoctoral period at the UFS.

To apply, please email the following documentation by 30 September 2024 to Dr. Marda Horn at hornjg@ufs.ac.za

•    Motivation letter, including a 1-2 page outline of relevant expertise and experience.
•    Full CV including a list of research publications, conference papers and other scholarly output.
•    Full transcripts of academic record and copy of doctoral degree certificate.
•    Copy of ID document (or copy of passport in the case of foreign applicants).
•    Contact details of two academic referees who have taught/supervised the candidate.
 
Value of the fellowship:
•    R270 000 Annual Fellowship.
•    R30 000 Additional Research Expenses.
 
Closing date:  30 September 2024
 
Commencement of fellowship:  01 January 2025
 
For enquiries, please contact: Email: Dr. Marda Horn at hornjg@ufs.ac.za 
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at:   EEA13_EE Plan UFS 1 March 2022 (003).pdf 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.
 
How to apply to this job
For enquiries, please contact:
Email: Dr. Marda Horn at hornjg@ufs.ac.za
 
 
 
 
 `,` 
 
 
 
 

WRITER AND PROSPECT RESEARCHER (POST LEVEL 9) (CONTRACT APPOINTMENT: 1 YEAR) JOB ID: 5854
Organizational Unit University of the Free State -> Rector and Vice- Chancellor -> Institutional Advancement
Contract Type Contract
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 19/8/2024
 
Description
This post was previously advertised as Job ID 5775.  All applications received in response to the previous advertisements, will automatically be considered again. Previous applicants therefore do not need to reapply.
 
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities:
•    Conceptualise and write funding proposals in collaboration with project leaders and fundraisers.
•    Execute writing and editing tasks to support the work of the Department, including compiling content for the website, as well as newsletters and reports to funders.
•    Conduct all aspects of qualitative prospect research information and use the information to support, inform and advise on the UFS relationship-based fundraising and engagement activities, ensuring that they are as effective and efficient as possible.
•    Ensure that the Institutional database is correct and current and record information that is relevant to the UFS fundraising initiatives and to its alumni engagement strategies.
•    Assist with the department’s stewardship programme including drafting and dispatching thank you letters, compiling invitation lists for events and managing event RSVPs.
•    Compile and edit minutes of Institutional Advancement meetings that involve other departments at the UFS.
 
Inherent Job Requirements:
•    Bachelor’s degree or an Advanced diploma/ BTech degree/ Postgraduate certificate on NQF Level 7.
•    A minimum of two (2) years’ relevant working experience relating to fundraising and/or corporate social investment. 
 
Recommendations:
•    Knowledge of eCRM databases (Microsoft Access will qualify) – (minimum 6 months required)
•    Knowledge of prospect/leads research.
•    Experience in social media.
•    Knowledge of Excel, Word, PowerPoint.
•    Experience working in a Higher Education environment.
•    Knowledge of statistics.
•    Knowledge of POPIA
 
Competencies
Key Competencies Required:
•    Results oriented.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
-    The ability to stick with tasks, not give up, and overcome obstacles in completing one’s task.
•    Strategic thinking.
-    The ability to focus on details, work towards perfection, and approach work in a neat and organised manner.
-    The ability to carefully analyse information and use logic to address issues and problems at work.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy, and enthusiasm.
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to negotiate, sell, influence and to persuade others.
-    The ability to interact with others and establish personal connections with people.
 
Required Documents
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    Copies of all academic records (applicable where inherently required)
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
Assumption of duties: As soon as possible.
 
Closing date: 19 August 2024.
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact me at 051 401 9813 or email at PhokaR@ufs.ac.zaor Recruit@ufs.ac.za.
Additionally, kindly contact 051 401 2979/ 9810/ 9814/ 7659/ 9848 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at: EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.
 
APPLY FOR THIS JOB

 
 
 
 
 `,` 
 
 
 
 

CLINICAL RESEARCH ASSISTANT (POST LEVEL 12) (2 POSITIONS) (CONTRACT APPOINTMENT: 1 YEAR) (JOB ID: 5850)
Organizational Unit University of the Free State -> Faculty of Health Sciences -> School of Clinical Medicine -> Department Internal Medicine
Contract Type Contract
Occupational Level Semi-Skilled
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 31/8/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll. Applications submitted through any other platform will not be considered.
 
Duties and responsibilities:
•    Plan, implement and complete clinical research activities in accordance with Good Clinical Practice and Standard Operating Procedures at the study site or clinic.
•    Arrange logistics and workflow at the study site or clinic.
•    Recruit study participants and maintain records of all participants.
•    Interview participants (infants and their mothers, and children).
•    Obtain consent from parents/guardians and assent from minors to participate in the study and ensure that all study participants have signed appropriate consent/assent documents.
•    Record essential data on the relevant forms/questionnaires (case report forms) meticulously and on time (promptly).
•    Maintain clear communication channels with the study team and routine clinic staff.
•    Ensure patient confidentiality.
 
Inherent Job requirements:
•    A Pharmacist Assistant qualification on NQF Level 3/NQF Level 4 or a Nursing qualification on NQF Level 6.
•    Current registration with the South African Pharmacy Council (SAPC) or the South African Nursing Council (SANC) (attach proof).
•    A minimum of one (1) year clinical/practical experience in a relevant clinical environment.
 
Recommendations:
•    Current Good Clinical Practice certificate (attach a copy of the certificate).
•    A valid South African driver's license.
 
Competencies
Key Competencies required: 
•    Results orientated:
     -    The ability to cope with a frequently changing environment and to adapt to evolving situations
     -    The ability to be reliable, responsible, dependable and to fulfill obligations.
     -    The ability to deal calmly and effectively with high stress situations.
•    Strategic thinking:
     -    The ability to focus on details, work towards perfection, and approach work in a neat and organised manner.
     -    The ability to plan work and to  follow plans.
     -    The ability to carefully analyse information and use logic to address issues and problems at work.
•    Business acumen:
     -    The ability to adhere to rules and strictly follow work regulations.
     -    Proficient in using MS Office.
•    Leading:
     -    The ability to lead, take charge of situations, and offer opinions and directions to others.
     -    The ability to be cooperative with others, display good-natured attitude, and encourage people to work together.
•    Building coalitions:
     -    The ability to be self-assured and at ease with people in all types of social situations.
     -    The ability to be sensitive and understanding to the needs and feelings of others.
     -    The ability to interact with others and establish personal connections with people.
 
Required Documents
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
 
Assumption of duties: As soon as possible.

     
Closing date: 31 August 2024.
 
Salary: The annual remuneration package, including benefits is: R365 979.80– R459 263.33 per annum depending on the budget available for the position, relevant work experience and qualifications.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact 051 401 9810 or email MofoloNG@ufs.ac.za or Recruit@ufs.ac.za. Additionally, kindly contact 051 401 9848/ 9813/ 7659/ 9814/ 2979 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at : 
  EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

The UFS will only consider applications of candidates who meet all the inherent requirements of the position.
 
Additional Information
 Job ID 5850_Pharmacovigilance Clinical Assistant_HS_Bloemfontein Campus
 
APPLY FOR THIS JOB

 
 
 
 
 `,` 
 
 
 
 

LECTURER/RESEARCHER (2-YEAR CONTRACT) (JOB ID: 5851)
Organizational Unit University of the Free State -> Faculty of Humanities -> Department South African Sign Language and Deaf Studies
Contract Type Contract
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 18/8/2024
 
Description
This post was previously advertised as Job ID 5737.  All applications received in response to the previous advertisements, will automatically be considered again. Previous applicants therefore do not need to reapply.
 
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities: 
•    Oversee the various aspects of a collaborative research project on signed toponomy (Survey of South African Sign Language Place Names, part of Advancing South African Sign Language (SASL) for 4IR Technological Development Using Place Names), including developing an overarching research strategy, growing human capacity, managing the team’s research and other outputs, collaborating with stakeholders, and assisting with the administration of the project.
•    Assist in procuring funding for scholarly activities (conferences, research projects, etc.).
•    Organise departmental conferences, seminars, workshops, and other academic events.
•    Manage departmental research publications, including the proceedings of the department’s biennial conferences – International Symposium on Place Names and the Language Diversity in Educational Settings Workshop.
•    Supervise postgraduate students, lecture/guest lecture in relevant modules and conduct workshops and other educational activities as required.
•    Present papers at academic conferences and other academic events and produce related research outputs.
•    Participate in community engagement initiatives where possible.
•    Contribute to the development of the niche research areas of toponymy and signed toponymy.
•    Cultivate awareness and appreciation of South African Deaf culture.
•    Enhance the visibility of the Department at national and international level.
 
Inherent requirements:
Lecturer/Researcher 
•    A PhD on NQF Level 10 in Linguistics or a related field.
•    A minimum of two (2) years’ relevant experience in managing research projects.
•    Proven experience in organising conferences and other scholarly events.
•    Proven editorial experience.
•    Proven experience in the delivery of poster or oral presentations at conferences or equivalent activities.
•    Evidence of manuscripts produced that have the potential to be converted or submitted for publication in accredited journals.
•    A good academic record.
 
Recommendations:
•    Proficiency in South Africa Sign Language (SASL) or willingness to acquire the language.
•    Member of a national or international scholarly society or committee.
 
Competencies
Required competencies: 
•    Results oriented.
-    The ability to set high standards, establish tough goals, and to work to achieve success.
-    The ability to be reliable, responsible, dependable and to fulfil obligations.
•    Strategic thinking.
-    The ability to plan work and to follow plans.
-    The ability to be creative and open-minded when addressing work issues.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to lead, take charge of situations, and offer opinions and directions to others. 
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to interact with others and establish personal connections with people.
-    The ability to make decisions through consultation, collaboration and working with close supervision. 
 
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    Copies of all academic records (applicable where inherently required).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 

Assumption of duties: As soon as possible 
 
Closing date: 18 August 2024
 
Salary: The salary is available on request.
 
Enquiries: For enquiries, please feel free to contact 051 401 7659 or email SejanamaneP@ufs.ac.za or Recruit@ufs.ac.za. Additionally, kindly contact 051 401 9857/ 9810/9813/9814 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at :   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

Additional Information
 Lecturer/Researcher (2-year Contract) (Job ID: 5851)
 
APPLY FOR THIS JOB



 
 
 `,` 
 
 
 
 
S
ENIOR OFFICER: GAUTENG REGIONAL MARKETER (POST LEVEL 9) (JOB ID: 5822)
Organizational Unit University of the Free State -> Registrar -> Student Recruitment Services
Contract Type Permanent
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 26/8/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities:
•    Develop, maintain, and implement the Directorate’s Recruitment Plan.
•    Visit identified schools and career exhibitions. 
•    Enhance existing relationships and develop new ones with schools. 
•    Engage with Faculties to influence admission decisions. 
•    Identify and recruit top achievers for all faculties.
•    Identify top achievers for the SRS Top Achiever programmes (Matriculant of the Year, Star of Stars, Red Box Society, etc.) and for the fields of sport, culture, and leadership. 
•    Administer school visits, i.e., making appointments, accommodation arrangements, preparing the travel program for the week, school visit form, and marketing material. 
•    Visit and deliver presentations to identified schools as per the Annual Plan regarding the University’s academic programmes; and responds to enquiries through group or individual sessions. 
•    Attend or coordinate Career Exhibitions as per the Annual Plan,
•    Compile year planning and -reports, quarterly planning and–reports, and statistical reports. 
•    Liaise with school principals and educators. 
•    Contact and build relationships with school stakeholders (contact person and/or principals). 
•    Responsible for effective relationship marketing between the school, staff, principal, and University through Facebook, birthday cards, and letters of appreciation. 
•    Responsible for UFS marketing opportunities (Open day, UFS Central Region Rugby League, UFS matriculates of the Year competition, first Years’ welcome, Virtual sessions, campus visits, etc). 
•    Identify, approve, and reach an agreement about new sponsorship opportunities at identified schools. 
•    Measure the annual return on investment per sponsorship. 
•    Consult with Faculties on new programmes and special needs.
•    Consult with internal departments for queries from prospective students. 
•    Visit identified schools and career exhibitions. 
•    Provide premier service to prospective students who require assistance. 
•    Assist selected schools with strategies that link with the university’s vision.  
•    Ensure that the Schools’ data is correct at all times.
•    Analyse monthly application statistics to check if learners from key schools have applied.
•    Develop and implement contingency measures to meet set targets. 
•    Manage and organise marketing projects as per the Directorate’s strategy. 
•    Support the Directorate to ensure the successful implementation of all projects.
•    Responsible for the financial management of the entities under your control.
•    Manage the use of the university assets allocated to you effectively. 

    
Inherent requirements:
•    Bachelor’s degree or a B-Tech degree on NQF Level 7 in Marketing, Communication, Education or a related field.
•    A minimum of three (3) years of relevant working experience relating to the duties and responsibilities in the higher education sector.
•    A proven track record of understanding schools in Gauteng in Quintile 5, Quintile 99, and private schools.
•    A valid driver’s license.
 
Recommendations:
•    Three (3) years of relevant experience in higher education, especially in student recruitment/school liaison.
•    Honours degree on NQF level eight (8) in Marketing and Communication or related field. 
•    Knowledge of the higher education landscape and the school environment, focusing on Quintile 5, Quintile 99, and private schools. 
•    A clear understanding of how to communicate or engage with Gen Z. 
 
Competencies
Required competencies: 
•    Results oriented.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
-    The ability to be reliable, responsible, dependable and to fulfil obligations.
•    Strategic thinking.
-    The ability to plan work and to follow plans.
-    The ability to be creative and open-minded when addressing work issues.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy and enthusiasm.
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to negotiate, sell, influence and to persuade others.
-    The ability to interact with others and establish personal connections with people.

Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
 
Assumption of duties: 01 September 2024 or as soon as possible.
 
Closing date: 26 August 2024.
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact 051 401 9814 or MakolaCM@ufs.ac.za or Recruit@ufs.ac.za. Additionally, kindly contact 051 401 2979/ 9810/ 9813/ 9848/ 7659 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at:   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

Additional Information
 Senior Officer: Gauteng Regional Marketer (post level 9)
 
APPLY FOR THIS JOB


 
 
 
 `,` 
 
 
 
 

SENIOR OFFICER: WESTERN CAPE REGIONAL MARKETER (POST LEVEL 9) (JOB ID: 5823)
Organizational Unit University of the Free State -> Registrar -> Student Recruitment Services
Contract Type Permanent
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 26/8/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities:
•    Develop, maintain, and implement the Directorate’s Recruitment Plan.
•    Visit identified schools and career exhibitions. 
•    Enhance existing relationships and develop new ones with schools. 
•    Engage with Faculties to influence admission decisions. 
•    Identify and recruit top achievers for all faculties.
•    Identify top achievers for the SRS top achiever programmes (Matrivulant of the Year, Star of Stars, Red Box Society, etc.) and for the fields of sport, culture, and leadership. 
•    Administer school visits, i.e., making appointments, accommodation arrangements, preparing the travel programme for the week, school visit form, and marketing material. 
•    Visit and deliver presentations to identified schools per the Annual plan regarding the University’s academic programmes and respond to inquiries through group or individual sessions. 
•    Attend or coordinate Career Exhibitions as per the Annual plan.
•    Compile year planning and -reports, quarterly planning and–reports, and statistical reports. 
•    Attend or coordinate Career Exhibitions as per the Annual Plan.
•    Liaise with school principals and educators. 
•    Contact and build relationships with stakeholders at schools (contact person and/or principals). 
•    Responsible for effective relationship marketing between the school, staff, principal and University through Facebook, birthday cards and letter of thanks. 
•    Responsible for UFS marketing opportunities (Open day, UFS Central Region Rugby League, UFS matriculates of the Year competition, first Years’ reception, campus visits). 
•    Identify, approve, and reach an agreement about  new sponsorships opportunities at identified schools.
•    Measure the annual return on investment per sponsorship. 
•    Consult with Faculties on new programmes and special needs.
•    Consult with internal departments for queries from prospective students.
•    Provide premier service to prospective students that require assistance.
•    Assist selected schools with their strategies that link with the University’s vision.
•    Ensure that the Schools’ data is correct at all times.
•    Analyse monthly application statistics to check if learners from key schools have applied. 
•    Develop and implement contingency measures to meet set targets.
•    Manage and organises marketing projects as per the Directorate’s strategy. 
•    Support the Directorate to ensure the successful implementation of all projects.
•    Responsible for the financial management of the entities under your control.
•    Manage the use of the university assets allocated to you effectively.
    
Inherent requirements:
•    Bachelor’s degree or a B-Tech degree on NQF level 7 in Marketing, Communication, Education or a related field. 
•    A minimum of three (3) years of relevant working experience relating to the duties and responsibilities in the higher education sector.
•    A proven track record of understanding of schools in the Western Cape in Quintile 5, Quintile 99, and private schools
•    A valid driver’s license.
 
Recommendations:
•    Three (3) years of relevant experience in higher education, especially in student recruitment/school liaison.
•    Honours degree on NQF level 8 in Marketing and Communication or related field. 
•    Knowledge of the higher education landscape and the school environment, focusing on Quintile 5, Quintile 99, and private schools. 
•    A clear understanding of how to communicate or engage with Gen Z. 
 
Competencies
Required competencies: 
•    Results oriented.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
-    The ability to be reliable, responsible, dependable and to fulfil obligations.
•    Strategic thinking.
-    The ability to plan work and to follow plans.
-    The ability to be creative and open-minded when addressing work issues.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy and enthusiasm.
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to negotiate, sell, influence and to persuade others.
-    The ability to interact with others and establish personal connections with people.
 
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
Assumption of duties: 01 September 2024 or as soon as possible.
 
Closing date: 26 August 2024.
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact 051 401 9814 or MakolaCM@ufs.ac.za or Recruit@ufs.ac.za. Additionally, kindly contact 051 401 2979/ 9810/ 9813/ 9848/ 7659 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at:   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

Additional Information
 Senior Officer: Western Cape Regional Marketer (post level 9)

APPLY FOR THIS JOB
 
 
 
 
 `,` 
 
 
 
 

SENIOR OFFICER: MARKETER (POST LEVEL 9) (JOB ID: 5824)
Organizational Unit University of the Free State -> Registrar -> Student Recruitment Services
Contract Type Permanent
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 26/8/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities:
 •    Develop, maintain, and implement the Directorate’s Recruitment Plan.
•    Visit identified schools and career exhibitions. 
•    Enhance existing and develop new relationships with schools. 
•    Engage with Faculties to influence admission decisions. 
•    Identify and recruit top achievers for all the faculties
•    Identify top achievers for the SRS Top Achiever programmes (Matriculant of the Year, Star of Stars, Red Box Society, etc.) and for the fields of sport, culture, and leadership. 
•    Administer school visits i.e. making appointments, accommodation arrangements, preparing the travel programme for the week, school visit form, and marketing material. 
•    Visit and deliver presentations to identified schools as per the Annual Plan concerning the University’s academic programmes; and responds to enquiries through group or individual sessions. 
•    Compile year planning and -reports, quarterly planning and–report, and statistical reports. 
•     Attend or coordinate Career Exhibitions as per the Annual Plan.
•    Liaise with school principals and educators. 
•    Contact and build relationships with stakeholder at schools (contact person and/or principals). 
•    Responsible for effective relationship marketing between the school, staff, principal and University through Facebook, birthday cards and letter of thanks. 
•    Responsible for UFS marketing opportunities (Open day, UFS Central Region Rugby League, UFS matriculates of the Year competition, first Years’ reception, campus visits). 
•    Identify, approve and reach an agreement about new sponsorships opportunities at identified schools.
•    Measure the annual return on investment per sponsorship. 
•    Consult with Faculties on new programmes and special needs.
•    Consult internal departments for queries from prospective students.
•    Provide premier service to prospective students that require assistance. 
•    Assist selected schools with their strategies that link with the University’s vision.  
•    Ensure that the Schools’ data is correct at all times.
•    Analyse monthly application statistics to check if learners from key schools have applied.
•    Develop and implement contingency measures to meet set targets.
•    Manage and organises marketing projects as per the Directoate’s strategy.
•    Support the Directorate to ensure the successful implementation of all projects.
•    Responsible for the financial management of the entities under your control.
•    Manage the use of the university assets allocated to you effectively. 

    
Inherent requirements:
•    Bachelor’s degree or a B-Tech degree on NQF Level 7 in Marketing, Communication, Education or a related field. 
•    A minimum of three (3) years of relevant working experience relating to the duties and responsibilities in the higher education sector.  
•     Availability to travel and visit all the provinces, focusing on Quintile 5, Quintile 99, and private schools.
•    A valid driver’s license.
 
Recommendations:
•    Three (3) years of relevant experience in higher education, especially in student recruitment/school liaison.
•    Honours degree on NQF level eight (8) in Marketing and Communication or related field. 
•    Knowledge of the higher education landscape and the school environment, focusing on Quintile 5, Quintile 99, and private schools. 
•    A clear understanding of how to communicate or engage with Gen Z. 
 
Competencies
Required competencies: 
•    Results-oriented.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
-    The ability to be reliable, responsible, dependable and to fulfil obligations.
•    Strategic thinking.
-    The ability to plan work and to follow plans.
-    The ability to be creative and open-minded when addressing work issues.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy and enthusiasm.
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to negotiate, sell, influence and to persuade others.
-    The ability to interact with others and establish personal connections with people.
 
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
 
Assumption of duties: 01 September 2024 or as soon as possible
 
Closing date: 26 August 2024.
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact 051 401 9814 or MakolaCM@ufs.ac.za or Recruit@ufs.ac.za. Additionally, kindly contact 051 401 2979/ 9810/ 9813/ 9848 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at :   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

Additional Information
 Senior Officer: Marketer (post level 9) Job ID: 5824

APPLY FOR THIS JOB


 
 
 
 `,`SENIOR LECTURER (NEMATOLOGY-INVERTEBRATE ZOOLOGY) (JOB ID: 5852)
Organizational Unit University of the Free State -> Faculty of Natural and Agricultural Sciences -> Department Zoology and Entomology
Contract Type Permanent
Occupational Level Junior Management
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 25/8/2024
 
Description
This post was previously advertised as Job ID 5811.  All applications received in response to the previous advertisements, will automatically be considered again. Previous applicants therefore do not need to reapply.
 
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 
 
Duties and responsibilities:
•    Develop and implement strategies for biological control of planet parasitic nematodes, with an emphasis on agricultural and horticultural systems.
•    Interact with the public regarding Nematology, Invertebrate Zoology, and related queries.
•    Obtain external funding (3rd stream income).
•    Supervise research undertaken by postgraduate (MSc and PhD) students.
•    Responsible for teaching and learning in undergraduate and postgraduate (B.Sc. Honours) programmes in Zoology. This includes lectures, tutorials, practical classes (preparation and presentation), assessments and seminars.
•    Manage administrative tasks and academic planning (curriculum development etc.) in the department and where applicable at university level.
 
Inherent requirements:
Senior Lecturer
•    PhD on NQF Level 10 in Zoology/Biology/Environmental Science (Invertebrate Zoology focusing on Nematology).
•    Proven laboratory experience (qPCR, NGS, phylogenetic analysis), experimental design and management of a potential diagnostic lab.
•    Proven research record of relevant publications in national and international accredited journals (at least 5-10), including representative publications as lead author.
•    Proven experience in presenting papers/posters at national and international scholarly conferences.
•    Proven experience of service as an active member of a national or international scholarly society, committee, or agency concerned with research at higher education levels.
•    Proven undergraduate teaching experience at a higher education institution.
•    Proven experience in the supervision of graduated master’s students.
•    An NRF rating or demonstrated potential for obtaining an NRF rating or equivalent.
 
Recommendations:
•    Research expertise in taxonomy, systems, ecology, and phylogenetic analysis, specifically in the discipline of Nematology (plant-parasitic or free-living nematodes), will be advantageous.
•    Proven experience with interacting and collaborating with industry.
•    The successful candidate will be expected to expand the Department’s research activities, with a focus in Nematology.
 
Competencies
Required competencies:  
•    Results oriented.
-    The ability to set high standards, establish tough goals, and to work to achieve success.
-    The ability to cope with a frequently changing environment and to adapt to evolving situations. 
•    Strategic thinking.
-    The ability to focus on details, work towards perfection, and approach work in a neat and organised manner.
-    The ability to be creative and open-minded when addressing work issues.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy and enthusiasm.
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to be self-assured and at ease with people in all types of social situations.
-    The ability to make decisions through consultation, collaboration and working with close supervision. 
 
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    Copies of all academic records (applicable where inherently required).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).

Assumption of duties: As soon as possible.
 
Closing date: 25 August 2024.
 
Salary: The salary is available on request.
 
Fringe benefits: (Subject to specific conditions): pension scheme, medical aid scheme, group life insurance, housing allowance, leave and sick leave, service bonus and study benefits.
 
Enquiries: For enquiries, please feel free to contact 051 401 7659 or email SejanamaneP@ufs.ac.zaor Recruit@ufs.ac.za. Additionally, kindly contact 051 401 9848/ 9810/ 9813/ 9814/ 2979 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at :   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.
 
Additional Information
 Senior Lecturer (Nematology-Invertebrate Zoology) (Job ID: 5852)
 
APPLY FOR THIS JOB`,`INTERN: TECHNOLOGY IN TEACHING AND LEARNING (ASSESSMENTS) (CONTRACT APPOINTMENT: 1 YEAR): BLENDED LEARNING INNOVATION SUPPORT AND SERVICES (JOB ID: 5849)
Organizational Unit University of the Free State -> Vice-Rector: Academic -> Centre for Teaching and Learning
Contract Type Contract
Occupational Level Unskilled
Location Bloemfontein Campus - Bloemfontein, FS ZA (Primary)
Closing Date 15/8/2024
 
Description
KINDLY TAKE NOTE: Applications may only be submitted online through the official UFS vacancy website: https://ufs.hua.hrsmart.com/hr/ats/JobSearch/viewAll - Applications submitted through any other platform will not be considered. 

Duties and responsibilities:
•    Assist in the development of e-assessment activities, including the development of assessment question banks and scheduling of e-assessments on official UFS online assessment platforms.
•    Assist in the development of training material for objective assessments.
•    Provide support on the preparation, implementation and evaluation of student and academic staff training.
•    Provide assistance in the collection and analysis of data and report writing.
•    Provide student and academic staff support in the use of the UFS online assessment platform.
 
Inherent Job Requirements:
•    Bachelor’s degree or a B-Tech degree on NQF Level 7.
Recommendations:
•    Postgraduate qualification.
•    Previous experience as a Student Assistant/Tutor/EduTech Buddy/Teaching Assistant.
•    Experience on an LMS/Assessment system.
 
The following criteria apply to the selection of candidates:
•    The applicant should not currently be participating in an existing learnership/internship programme.
•    The applicant should not have any previous formal work experience.
•    The applicant must be willing to sign a learnership/internship agreement with UFS.
•    The applicant must be available for the period of 1 year to participate in the learnership/internship.
 
Competencies
Key Competencies Required:
•    Results oriented.
-    The ability to be reliable, responsible, dependable and to fulfil obligations.
-    The ability to deal calmly and effectively with high stress situations.
•    Strategic thinking.
-    The ability to focus on details, work towards perfection, and approach work in a neat and organised manner.
-    The ability to plan work and to follow plans.
•    Business Acumen:
-    The ability to adhere to rules and strictly follow work regulations.
-    Proficient in using MS Office.
•    Leading.
-    The ability to maintain high levels of personal motivation, energy and enthusiasm.
-    The ability to be cooperative with others, display a good-natured attitude and encourage people to work together.
•    Building coalitions
-    The ability to interact with others and establish personal connections with people.
-    The ability to make decisions through consultation, collaboration, and working with close supervision.
 
Required Documents
Please ensure that all relevant documentation is attached to your application. 
•    A detailed curriculum vitae and cover letter. 
•    Copies of qualifications (please provide the SAQA accreditation in the case of foreign qualifications).
•    A copy of your identity document (ID or passport in the case of foreign nationals).
•    Proof of registration with a Professional Body (if applicable).
•    A copy of your driver’s license (if applicable).
•    Confirmation of employment from current employer / last employer if unemployed (only applicable to external applicants).
 
Assumption of duties: 01 January 2025.
 

 Closing date: 15 August 2024.
 
Salary: The stipend is R8 567.50 per month.
 
Enquiries: For enquiries, please feel free to contact 051 401 9813 or email PhokaR@ufs.ac.za. Additionally, kindly contact 051 401 9814/ 9810/ 2979/ 7659/ 9848 for assistance.
 
General:
The UFS is a designated employer and is committed to the pursuit of excellence, diversity, and redress in achieving its equity targets in accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets. Preference will be given to candidates from the under-represented designated groups including candidates with disabilities. Our Employment Equity Policy is available at:   EEA13_EE Plan UFS 1 March 2022 (003).pdf
 
The University processes personal information in line with its obligations under the Protection of Personal Information Act (POPIA) and any personal information provided to the University will be treated as confidential and processed in accordance with the rights provided to data subjects under POPIA.
 
The University reserves the right not to fill the post. The UFS will only consider applications of candidates who meet all the inherent requirements of the position. Applications that are incomplete will not be considered. Communication will be limited to shortlisted candidates only. Should you not be contacted within six weeks of the closing date for applications, you may assume that your application was unsuccessful.

APPLY FOR THIS JOB
 
 
 
 
 `],postedDate:"15/8/2024",iframe:"",uuid:"p03d855d6-80b6-4eb9-ad90-89b0f322e9ea"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/university-of-limpopo_orig.jpg",href:"https://www.govpage.co.za/university-of-limpopo-vacancies-blog/university-of-limpopo-vacancies5892431",title:"UNIVERSITY OF LIMPOPO VACANCIES",content:[` 
UNIVERSITY OF LIMPOPO
 `,` 
 
FACULTY OF MANAGEMENT AND LAW 
DIRECTOR: SCHOOL OF ACCOUNTANCY 
 
In keeping with its vision and mission, the University of Limpopo seeks to appoint a dynamic, visionary and innovative leader in Higher Education to the position of the Director of the School of Accountancy. This is a renewable four-year term. 
The successful applicant will report to the Executive Dean of the Faculty of Management and Law; and will provide academic leadership and manage the School of Accountancy, including the Africa Center for Sustainability Accounting and management (ACSAM). 
 
The incumbent must meet the requirements and be responsible for key performance areas listed below: 
Requirements:
1. A doctoral degree at National Qualifications Framework Level 10 in one of the disciplines in the School of Accountancy; or Master’s degree at National Qualifications Framework Level 9 in one of the disciplines in the School of Accountancy with registration as a Chartered Accountant (CA). Other management qualifications, diploma and certificates will be a strong recommendation. 
2. Be a fellow member of a professional accounting body such as the South African Institute of Chartered Accountants (SAICA), South African Institute of Professional Accountants (SAIPA), Chartered Institute of Management Accountants (CIMA), Association of Chartered Certified Accountants (ACCA). 
3. Knowledge, understanding and experience of Department of Higher Education and Training (DHET), South African Qualifications Authority (SAQA), Council on Higher education (CHE) and their related statutory regulatory environments. 
4. Good understanding of the SAICA regulatory environment, and of its networks and activities. 
5. A track record of no less than 8 years of experience as an Academic at a Higher Education institution, five (5) years of which was in Academic Management and Leadership of Academic Units involved with Teaching and Learning, Research and Community Engagement or at least two (2) years of Academic and Management/Leadership Experience for CAs 
6. Research publications and successful supervision of postgraduate students at the Master’s or Doctoral level are added advantage. 
7. Knowledge of digital transformation, and the use of online platforms to enhance teaching and learning. 
 
8. Experience of or in leading academic programme accreditations and programme reviews will be an added advantage. 
 
Competencies
 Technical, professional knowledge and skill. 
 People management, including performance management. 
 Building strategic alliances and partnerships. 
 Personal impact, stature and credibility. 
 Emotional intelligence and socio-political sensitivity. 
 Management of complexity and ambiguity. 
 Action and delivery orientated. 
 Facilitating change 
 Team player 
 
Key Responsibilities: 
The applicant’s responsibilities, in particular, will be in relation to the following key performance areas: 
1. Academic leadership 
 Ensure implementation of policies and decisions taken by academic policy making bodies. 
 Co-ordinate academic activities in the areas of tuition, research and community engagement at the School. 
 Initiate forward planning in terms of new and relevant course structure and relevant academic development, as well as the demands of future expansion. 
 Develop and implement teaching and learning programmes within the academic disciplines presented by the School and promote inter-disciplinary co-operation and innovation. 
 Set research priorities, develop research partnership and build research capacity within the relevant fields. 
 Establish, maintain and extend the School’s contact with other academic and research institution and related professional bodies 
 Mentor and promote post-graduate students. 
 
2. Management 
 Ensure optimal utilisation of resources (human, financial and infrastructural) to meet the School’s short and long-term academic goals. 
 Manage interpersonal conflicts and relationship in a fair, equitable and professional manner. 
 Manage/co-ordinate the recruitment, appointment and placement of staff. 
 Manage change and institutional culture processes at the level of the School. 
 Promote social responsibility, awareness and engagement with external stakeholders. 
 
3. Student Affairs 
 Interact with students and deal with students’ affairs such as admission of students, ensuring that mentors of staff are accessible to students and that students are treated with courtesy and consideration. 
 Promote healthy relations between students and staff members within the School and the speedy resolution of problems raised by individual students and student representatives. 
 Ensure, where necessary, that the Faculty is made aware of the need for academic development programmers in improving complete student experience. 
 
4. Academic Citizenship 
 Acts as champion for ventures and projects in the School. 
 Actively get involved as academic leader in University policy committees. 
 Acts on behalf of the Faculty and the University in committees. 
 
5. Communication 
 Ensue that decisions taken at meetings of the Faculty are communicated to heads of department of the School. 
 Acts as representative of Executive Management at the level of the School, ensuring that key messages relating to institutional strategy, goals and objectives are promoted. 
 Communicate the needs and interests of the School and its students to the University and the Faculty. 
 
Terms of Appointment: 
The appointment to this position will be on a four-year contract basis, after which the incumbent can be transferred to an academic position in a relevant department, if not re-appointed as a Director of the School of Accountancy 
 
CLOSING DATE: 30 AUGUST 2024 
 
Please submit cover letter clearly indicating which post you are applying for a detailed CV with all your names, addresses, contact details and email address and include contact numbers of three (3) referees, certified copies of all qualifications including Matric/ Grade 12 Certificate, academic transcripts and a South African ID/ Passport should be forwarded to Chief Human Resource Officer, e-mail applications in MS Word format, HR.Admin@ul.ac.za
 
Telephonic enquiries regarding conditions of service: Ms NJ Monyepao Tel (015) 268 2399/ 2129 
 
It is the applicant’s responsibility to have foreign obtained qualifications evaluated by the South African Qualifications Authority. Please note that failure to submit the requested documents/ information will result in your application not being considered. 
 
The University of Limpopo is an Equal Opportunity Employer. All appointments will be made in accordance with the University’s Employment Equity Policy. Preference DIRECTOR SCHOOL OF ACCOUNTANCY will be given to Male (Indians and Coloureds) Female (Africans, Coloureds and Whites) 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applicants as unsuccessful. 
 
The University reserve the right not to make appointment 
.
 
 
 
 `,` 
 
 
 
 
SCHOOL OF ECONOMICS AND MANAGEMENT 
LECTURER: DEVELOPMENT PLANNING AND MANAGEMENT (3 Posts) 
The Department of Development Planning and Management invites applications for three Lecturer posts from suitably qualified candidates as follows: 
 
Requirements:
The selection of candidates for the interview will only be limited to those who meet the following minimum requirements: 
 A full dissertation research Master of Development Studies, Development Planning and Management or any related field. 
 An Honours of Development Studies, Development Planning and Management or any relevant honours qualification. 
 The candidate should have an aspiration to register for a Doctor of Development Studies or related fields. 
 At least 2 years of teaching experience at a tertiary institution and with the expertise of the combination of the following courses: Research Methodology, Strategic Management and Planning, Development Planning and Policy, Rural Development Planning, Development Planning and Management; Community Development Planning; Geospatial Technology for Development Planning; Poverty and Social Development, Rural and Urban Planning. 
 Record of Published Peer Reviewed Journal Articles, accredited Conference Proceedings and books or book chapter. 
 Record of Honours research supervision will be an added advantage. 
 Demonstration of interest in research through a reasonable record of attending international and domestic conferences and publication in conference proceedings and/or Book chapter. 
 Demonstrate interest in participating in community engagement activities. 
 
Duties
The successful candidate will be required to undertake the following duties: 
 Teach modules in the Department of Development (Planning and Management) at both undergraduate. 
 Supervise Honours and Masters’ research studies. 
 Conduct research, represent papers at conferences and continuously publish in subsidy-earning Conference Proceedings, Journals and Books. 
 Initiate or participate in community engagement activities with the Department.
 Perform administrative and managerial duties allocated by the HOD. 
 Undertake training in assessment, moderation, teaching pedagogies, research and publications. 
 Promote research collaboration with other emerging and established academics within Department and/0r units. 
 
 
CLOSING DATE: 30 AUGUST 2024 
 
Please submit cover letter clearly indicating which post you are applying for a detailed CV with all your names, addresses, contact details and email address and include contact numbers of three (3) referees, certified copies of all qualifications including Matric/ Grade 12 Certificate, academic transcripts and a South African ID/ Passport should be forwarded to Chief Human Resource Officer, e-mail applications in MS Word format, sherley.mathule@ul.ac.za
 
Telephonic enquiries regarding conditions of service: Ms S Mathule (Tel 015 268 2857) 
It is the applicant’s responsibility to have foreign obtained qualifications evaluated by the South African Qualifications Authority. Please note that failure to submit the requested documents/ information will result in your application not being considered. 
 
The University of Limpopo is an Equal Opportunity Employer. All appointments will be made in accordance with the University’s Employment Equity Policy. Preference LECTURER: DEVELOPMENT PLANNING AND MANAGEMENT will be given to Male (Africans, Indians and Coloureds) Female (Indians, Coloureds and Whites) 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applicants as unsuccessful. 
 
The University reserve the right not to make appointment
 
 
 
 
 `,` 
 
 
 
 
 
SCHOOL OF MOLECULAR AND LIFE SCIENCES 
 
PRINCIPAL ADMINISTRATIVE OFFICER 
 A Bachelor’s degree or a three-year Diploma preferable in Administration or related field. 
 At least three (3) year's working experience in position of Administrative Officer at a tertiary Institution. 
 A thorough understanding of University General rules and regulations regarding admissions, registration, exemptions and exclusions. 
 A good understanding of capturing of assessment marks and graduation processes.
 Highly skilled in administration duties, including administering school / departmental committees. 
 Experience in management of other administrative staff members in the school. 
 Ability to work under pressure, independently and as part of larger team. 
 High level of communication and organisational skills and human relations. 
 Proficiency in the use of Microsoft packages and knowledge of the ITS student system. 
 
Duties and responsibilities: 
The incumbent will be expected to: 
 Manage academic administration of the school, including student recruitment, admissions, exclusions, exemptions and graduations. 
 Capture all the assessment marks. 
 Handle student’s enquiries and regularly provide reports to the Director of School, 
 Coordinate and manage all administrative staff in the school. 
 Maintain an efficient filing system of student’s and all other School records. 
 Ensure compliance to students’ registration processes management of General Rules (G- Rules 
 Undertakes appropriate administration of School meeting and monitoring and review of other School Committees, i.e. preparing agendas for meetings, accurate 
 minutes taking, preparation of reports and ensuring that decision are taken and implemented, etc. 
 Work closely with Director of School, Heads of Department and Faculty Assistant Registrar to meet the strategic objectives of the school. 
 Undertake administrative duties commensurate with the level of the post as allocated by School and Faculty management. 
 
 
CLOSING DATE: 30 AUGUST 2024 
 
Please submit cover letter clearly indicating which post you are applying for a detailed CV with all your names, addresses, contact details and email address and include contact numbers of three (3) referees, certified copies of all qualifications including Matric/ Grade 12 Certificate, academic transcripts and a South African ID/ Passport should be forwarded to Chief Human Resource Officer, e-mail applications in MS Word format, beauty.tshehla@ul.ac.za
 
Telephonic enquiries regarding conditions of service: Ms BT Tshehla Tel (015) 268 3740 
 
It is the applicant’s responsibility to have foreign obtained qualifications evaluated by the South African Qualifications Authority. Please note that failure to submit the requested documents/ information will result in your application not being considered. 
 
The University of Limpopo is an Equal Opportunity Employer. All appointments will be made in accordance with the University’s Employment Equity Policy. Preference PRINCIPAL ADMINISTRATIVE OFFICER will be given to Male (Indians; Coloureds Africans) Female (Indians, Coloureds and Whites) 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applicants as unsuccessful. 
 
The University reserve the right not to make appointment 
.
 
 
 
 `,` 
 
 
 
 
 
FACULTY OF MANAGEMENT AND LAW 
DIRECTOR: SCHOOL OF LAW 
In keeping with its vision and mission, the University of Limpopo seeks to appoint a dynamic, visionary and innovative leader in Higher Education to the position of the Director of the School of Law. This is a renewable four-year term. 
The successful applicant will report to the Executive Dean of the Faculty of Management and Law; and will provide academic leadership and manage the School of Law, including the Legal Aid Clinic. 
 
The incumbent must meet the requirements and be responsible for key performance areas listed below: 
Requirements:
1. A doctoral degree at National Qualifications Framework Level 10 in one of the disciplines in the School of Law; or Master’s degree at National Qualifications Framework Level 9, in one of the disciplines in the School of Law with registration as a legal practitioner either as an attorney or Advocate of the high court in South Africa. Other management qualifications, diploma and certificates will be a strong recommendation. 
2. Knowledge, understanding and experience of Department of Higher Education and Training (DHET), South African Qualifications Authority (SAQA), Council on Higher education (CHE) and their related statutory regulatory environments. 
3. Understanding of the South African legal profession in general; and the Society of Law Teachers of South Africa (SLTSA), the Legal Practice Council (LPC) Law and Legal Society of South Africa (LSSA) networks and activities. 
4. A track record of no less than 8 years of experience as an Academic at a Higher Education institution, five (5) years of which was in Academic Management and Leadership of Academic Units involved with Teaching and Learning, Research and Community Engagement. 
5. Research publications and successful supervision of postgraduate students at the Master's or Doctoral level are added advantages. 
 
 
6. Knowledge of digital transformation, and the use of online platforms to enhance teaching and learning. 
7. Experience of or in leading academic programme accreditations and programme reviews will be an added advantage. 
 
Competencies
 Technical, professional knowledge and skill. 
 People management, including performance management. 
 Building strategic alliances and partnerships. 
 Personal impact, stature and credibility. 
 Emotional intelligence and socio-political sensitivity. 
 Management of complexity and ambiguity. 
 Action and delivery orientated. 
 Facilitating change 
 Team player 
 
Key Responsibilities: 
The applicant’s responsibilities, in particular, will be in relation to the following key performance areas: 
1. Academic leadership 
- Ensure implementation of policies and decisions taken by academic policy making bodies. 
- Co-ordinate academic activities in the areas of tuition, research and community engagement at the School. 
- Initiate forward planning in terms of new and relevant course structures and relevant academic developments, as well as the demands of future expansion. 
- Develop and implement teaching and learning programmes within the academic disciplines presented by the School and promote inter-disciplinary co-operation and innovation. 
- Set research priorities, develop research partnership and build research capacity within the relevant fields. 
- Establish, maintain and extend the School’s contact with other academic and research institutions and related professional bodies. 
- Mentor and promote post-graduate students. 
 
2. Management 
- Ensure optimal utilisation of resources (human, financial and infrastructural) to meet the School’s short and long-term academic goals. 
- Manage interpersonal conflicts and relationship in a fair, equitable and professional manner. 
- Manage/co-ordinate the recruitment, appointment and placement of staff. 
- Manage change and institutional culture processes at the level of the School. 
- Promote social responsibility, awareness and engagement with external stakeholders. 
 
3. Student Affairs 
- Interact with students and deal with students’ affairs such as admission of students, ensuring that mentors of staff are accessible to students and that students are treated with courtesy and consideration. 
- Promote healthy relations between students and staff members within the School and the speedy resolution of problems raised by individual students and student representatives. 
- Ensure, where necessary, that the Faculty is made aware of the need for academic development programmers in improving complete student experience. 
 
4. Academic Citizenship 
- Acts as champion for ventures and projects in the School. 
- Actively get involved as academic leader in University policy committees. 
- Acts on behalf of the Faculty and the University in committees. 
 
5. Communication 
- Ensue that decisions taken at meetings of the Faculty are communicated to heads of department of the School. 
- Acts as representative of Executive Management at the level of the School, ensuring that key messages relating to institutional strategy, goals and objectives are promoted. 
- Communicate the needs and interests of the School and its students to the University and the Faculty. 
 
Terms of Appointment: 
The appointment to this position will be on a four-year contract basis, after which the incumbent can be transferred to an academic position in a relevant department, if not re-appointed as a Director of the School of Law 
 
CLOSING DATE: 30 AUGUST 2024 
 
Please submit cover letter clearly indicating which post you are applying for a detailed CV with all your names, addresses, contact details and email address and include contact numbers of three (3) referees, certified copies of all qualifications including Matric/ Grade 12 Certificate, academic transcripts and a South African ID/ Passport should be forwarded to Chief Human Resource Officer, e-mail applications in MS Word format, HR.Admin@ul.ac.za
 
Telephonic enquiries regarding conditions of service: Ms NJ Monyepao Tel (015) 268 2399/ 2129 
 
It is the applicant’s responsibility to have foreign obtained qualifications evaluated by the South African Qualifications Authority. Please note that failure to submit the requested documents/ information will result in your application not being considered. 
 
The University of Limpopo is an Equal Opportunity Employer. All appointments will be made in accordance with the University’s Employment Equity Policy. Preference DIRECTOR SCHOOL OF LAW will be given to Male (Indians and Coloureds) Female (Africans, Coloureds and Whites) 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applicants as unsuccessful. 
 
The University reserve the right not to make appointment
 
 
 
 
 `,` 
 
 
 
 
 
DEPUTY VICE-CHANCELLOR: RESEARCH, INNOVATION AND PARTNERSHIPS 
(FIVE-YEAR CONTRACT APPOINTMENT) 
In keeping its mission and vision, the University of Limpopo invites suitably qualified individuals to apply for the following executive leadership position 
The Deputy Vice-Chancellor Research, Innovation and Partnerships will take the day to day responsibility for ensuring that the research and Innovation function of the University is developed implemented to meet the University’s strategic goals. 
 
Duties and responsibilities: 
 Develop and implement strategic and policies to deliver consistent improvements in the University’s research and productivity. 
 Lead and co-ordinate the University’s preparations for, and submissions to external evaluations of research quality, in order to maintain and enhance the University’s current national and international standing for research quality. 
 Provide strategic academic leadership for the development of a culture, policies and processes that support the increase of research grant income, and diversification of the sources of research income. 
 Ensure that the infrastructure and resources provided to support research are fit for purpose and support the maintenance and enhancement of research quality, and increases in research productivity 
 In collaboration with the Deputy Vice-Chancellor and the Executive Deans of Faculty, develop and implement policies and processes that ensure that the University attracts, develops and retains researchers of the highest quality, and monitors and manages research performance effectively. 
 Act as the institutional lead for the development of national and international academic partnership that include any elements of research or knowledge transfer activity, and to take lead institutional responsibility for the oversight and management of the research and/ or knowledge transfer elements of any such partnerships once they are established. 
 Represent the University nationally and internally in relation to research issues, raising the profile and reputation of the University and influencing on behalf of the University national and international policies and agendas in this area 
 Promote collaborations in research and innovation, leading to outstanding partnerships which enhances the University’s strategic research goals 
 Chair relevant Committees of Senate concerned with the University’s research and knowledge transfer activities. 
 Take a leadership role with respect to prudent management of resources in the research arena (finance; human resources and academic infrastructure, etc.) 
 Has line function responsibility for the following Library, Research Office, Research Centres, and Research Chairs etc. 
 Take a leadership role on other institutional issues and projects assigned by the Vice-Chancellor and Principal. 
 Undertake any other duties as are assigned from time to time by the Vice-Chancellor and Principal. 
 
Requirements:
 A sound track record as an academic leader and scholar. 
 A minimum of 10 years’ experience as senior academic leader, at least five (5) which must have been in an academic leadership position. 
 Appropriate post-graduate qualification at a Doctoral level. 
 Sound knowledge of the national Research and Innovation agenda. 
 A proven track record of scholarly productivity. 
 Proven ability to provide strong leadership and vision, to enthuse and inspire, promoting excellence in research, innovation and partnerships, and creating and environment in which these can flourish. 
 Deep knowledge and understanding of the South African Higher Education sector and research landscape. 
 Experience in effective management of staff compliment and complex budgets. 
 Ability to catalyse change and productively engage colleagues in innovation 
 Commitment to objective, evidence-based, decision-making 
 
 
CLOSING DATE: 30 AUGUST 2024 
 
Please submit cover letter clearly indicating which post you are applying for a detailed CV with all your names, addresses, contact details and email address and include contact numbers of three (3) referees, certified copies of all qualifications including Matric/ Grade 12 Certificate, academic transcripts and a South African ID/ Passport should be forwarded to Chief Human Resource Officer, e-mail applications in MS Word format, HR.Admin@ul.ac.za
 
Telephonic enquiries regarding conditions of service: Ms NJ Monyepao Tel (015) 268 2399/ 2129 
 
It is the applicant’s responsibility to have foreign obtained qualifications evaluated by the South African Qualifications Authority. Please note that failure to submit the requested documents/ information will result in your application not being considered. 
 
The University of Limpopo is an Equal Opportunity Employer. All appointments will be made in accordance with the University’s Employment Equity Policy. Preference for DEPUTY VICE-CHANCELLOR: RESEARCH INNOVATION AND PARTNERSHIPS will be given to Male (Indians and Coloureds) Female (Africans, Coloureds and Whites) 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applicants as unsuccessful. 
 
The University reserve the right not to make appointment
 
 
 
 
 `,`INTERNAL AUDIT 
 
CHIEF AUDIT EXECUTIVE 
The University of Limpopo is looking for an experienced and exceptional Chief Audit Executive to head its Internal Audit function. 
 
Responsibilities
The responsibilities include but are not limited to the following: - 
 Direct and manage internal audit operations, ensuring compliance with the university policies, regulations and procedures. 
 Develop and execute the annual audit plan. 
 Oversee the development and implementation of the audit strategy, policies and procedures. 
 Leading the planning, execution and reporting on internal audit engagements. 
 Report audit findings to management and audit committee. 
 Recommend improvements of internal controls and processes to management 
 Ensure effective follow-ups to audit recommendations and management action plans. 
 Maintain open communication with management and the audit committee. 
 
Requirements
 B. Degree/B Tech in Accounting / Finance/ Auditing. Postgraduate degree and professional certification eg CPA, CMA, CIA etc. are preferred. 
 Ten years’ experience in auditing, eight of which must have been in middle and higher management levels. 
 Excellent knowledge of auditing standards and procedures, laws rules and regulations. 
 Strong knowledge of auditing procedures, including planning, techniques and tests as well as sampling methods involved in conducting audits. 
 High attention to details and excellent analytical skills. 
 Sound independent judgement and high ethical standards. 
 Excellent reporting skills both written and verbal. 
 Good interpersonal and facilitating skills. 
 
 
CLOSING DATE: 30 AUGUST 2024 
 
Please submit cover letter clearly indicating which post you are applying for a detailed CV with all your names, addresses, contact details and email address and include contact numbers of three (3) referees, certified copies of all qualifications including Matric/ Grade 12 Certificate, academic transcripts and a South African ID/ Passport should be forwarded to Chief Human Resource Officer, e-mail applications in MS Word format, Recruitment4@ul.ac.za
 
Telephonic enquiries regarding conditions of service: Mrs MR Thoabala (015) 268 2488 
It is the applicant’s responsibility to have foreign obtained qualifications evaluated by the South African Qualifications Authority. Please note that failure to submit the requested documents/ information will result in your application not being considered. 
 
The University of Limpopo is an Equal Opportunity Employer. All appointments will be made in accordance with the University’s Employment Equity Policy. Preference CHIEF AUDIT EXECUTIVE will be given to Male (Indians and Coloureds) Female (Africans, Coloureds and Whites) 
 
Correspondence will be limited to short-listed candidates only. Applicants who have not been contacted within 30 days of the closing date must consider their applicants as unsuccessful. 
 
The University reserve the right not to make appointment`],postedDate:"15/8/2024",iframe:"",uuid:"pe420ffb4-3df5-4938-a950-f15f38489229"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ukzn_orig.png",href:"https://www.govpage.co.za/university-of-kwazulu-natal-ukzn-vacancies-blog/university-of-kwazulu-natal-ukzn-vacancies5032336",title:"UNIVERSITY OF KWAZULU NATAL (UKZN) VACANCIES",content:[` 
UNIVERSITY OF KWAZULU NATAL (UKZN)
 `,` 
 
ASSOCIATE PROFESSOR/ SENIOR LECTURER/ LECTURER (TAXATION) REFERENCE NUMBER: AEF04/2024
Listing reference: ukzn_000376
Listing status: Online
Apply by: 30 August 2024
Position summary
Industry: Education & Training
Job category: University and Academy
Location: Durban
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
The School of Accounting, Economics and Finance offers the Bachelor of Commerce in Accounting and Postgraduate Diploma in Accounting qualifications and seeks to appoint suitably qualified applicants on a permanent basis.
 
Job description
The incumbent will contribute actively to the training and education of undergraduate and postgraduate students in Auditing, Financial Accounting; Managerial Accounting & Finance and Taxation, and to build the knowledge base of the disciplines through teaching, research, academic leadership and mentoring and community engagement
Administration of certain teaching activities within the discipline is also required
Appointed candidates may be required to teach across multiple disciplines at the undergraduate level
 
Minimum requirements
Associate Professor:
A relevant PhD degree
At least six (6) years working and relevant experience in lecturing, research and/or industry
A current and sustained  peer-reviewed research publication record
Track record of successful supervision of Masters and/ or PhD students
Evidence of attracting external research funds
Evidence of academic leadership,  links with external stakeholders, and/or registration with a professional body
Senior Lecturer:
Masters degree in the discipline plus CA(SA) designation
At least three (3) years working experience in lecturing, research and/or industry in the relevant discipline
Evidence of emerging research publication record in peer-reviewed journals
Evidence of successful supervision of postgraduate students
Evidence of participation as a team member in a grant or submission of grant application
Evidence of University service, and involvement in community engagement programmes
Lecturer:
Registration with an Accounting professional body as CA(SA)
Demonstrable ability to teach at a tertiary level
 
APPLY
 
 
 
 
 `,` 
 
 
 
 
COMMERCIALISATION SPECIALIST (4 YEAR FIXED TERM CONTRACT) GRADE 7
Listing reference: ukzn_000381
Listing status: Online
Apply by: 21 August 2024
Position summary
Industry: Education & Training
Job category: Office Support
Location: Glenwood
Contract: Fixed Term Contract
Remuneration: Market Related
EE position: Yes
 
Introduction
The main purpose of this role is to support the Technology Transfer Manager in coordinating, analysing, and developing the University's Intellectual Property Portfolio by developing and implementing commercialisation strategies.
 
Job description
 The Commercialisation Specialist will be responsible for assisting the Technology Transfer Manager in developing business models, business cases, business plans and commercialisation strategies for University Intellectual 
Property portfolio and University spin-off companies. Duties will include  conducting  technology  evaluations, providing information  on  patents, conducting research related to University Intellectual Property and Commercialisation, conduct prior art searchers for intellectual property, conduct primary and secondary market research, identify market opportunities and commercialisation of University Intellectual Property. Assist the Technology Transfer Manager to create awareness of projects in the University's commercialisation portfolio. Provide administration support to the 
Technology Transfer portfolio.
 
Minimum requirements
Postgraduate qualification in Science or Engineering
Five years relevant experience in technology commercialisation.
An in-depth understanding of intellectual property, commercialisation and technology transfer and entrepreneurship and/or business management/administration.
Practical experience in raising funding through technology transfer activities.
Practical experience in commercialising technologies.
 
APPLY
 
 
 
 
 `,` 
 
 
 
 
MANAGER: TECHNOLOGY TRANSFER (4 YEARS FIXED TERM CONTRACT) GRADE 6 RE- ADVERT
Listing reference: ukzn_000382
Listing status: Online
Apply by: 21 August 2024
Position summary
Industry: Education & Training
Job category: Office Management
Location: Glenwood
Contract: Fixed Term Contract
Remuneration: Market Related
EE position: Yes
 
Introduction
The incumbent will play a central role in managing, coordinating, analysing and developing the University’s Intellectual Property (IP) Portfolio to ensure effective commercialisation of the Intellectual Property and generation of third-stream income.
 
Job description
The responsibilities of the incumbent include, but are not limited to, overall management of the Technology Transfer (TT) portfolio to ensure operational efficiency and effectiveness; ensuring and supporting commercialisation of University IP; generating revenue for the TT Portfolio through various mechanisms; ensuring efficient and effective management of all UKZN IP and funded projects in accordance with statutory and funding requirements; developing IP and commercialisation training and awareness-building interventions for researchers and students; ensuring development and talent management of staff in the TT Portfolio.
 
Minimum requirements
Honours Degree/Postgraduate Diploma in Science or Engineering
A minimum of 8 years relevant experience in technology commercialisation of which 3 years should be in a managerial/supervision position
An in-depth understanding of intellectual property, commercialisation and technology transfer and entrepreneurship and/or business management/administration.
A demonstrated ability to raise funding through technology transfer activities.
A demonstrated ability to commercialise technologies.
 
APPLY
 
 

 
 
 `,`SENIOR ANALYST
Listing reference: ukzn_000375
Listing status: Online
Apply by: 20 August 2024
Position summary
Industry: Education & Training
Job category: University and Academy
Location: Durban
Contract: Permanent
Remuneration: PEROMNES GRADE 8
EE position: No
 
Introduction
The University requires a Senior Analyst for the improvement and development team of the ICS department. A Senior Analyst is innovative and project driven. They are responsible to liaise with business units to determine system requirements and analyze systems’ processes to improve workflow and business processes, ensuring data integrity and delivering projects on time.
 
Job description
Suitable candidates are proactive, able to work independently as well as work with_ and support the department to achieve objectives
They support the roll-out of new developments, develop, maintain and support new and existing solutions, and resolve issues
 
Minimum requirements
Grade 12 (Senior Certificate) and a Bachelor’s degree (NQF level 7) in Information Technology or Information Management or Information Systems
A relevant industry-recognized professional IT certification will be an added advantage
A minimum of 5-years relevant working experience, in a busy and pressurised environment in a large organisation, of which at least 4 years should be business or systems analysis experience
Business and technical knowledge of Enterprise Resource Planning (ERP) Systems
System development methodologies such as SDLC, Agile, Waterfall, DevOps, or Rapid application development (RAD)
Systems’ design methodologies and tools such as .Net, Oracle
Modelling tools such as Microsoft Visio, UML (Unified Modeling Language), System Flow Chart, Data Flow Diagram (DFD), use-cases
MySQL Workbench
Project management skills; Communication skills; Financial management skills
 
APPLY`,`SENIOR WEB DEVELOPMENT AND DESIGN SPECIALIST
Listing reference: ukzn_000380
Listing status: Online
Apply by: 20 August 2024
Position summary
Industry: Education & Training
Job category: Media and Information
Location: Westville
Contract: Fixed Term Contract
Remuneration: Market Related
EE position: Yes
 
Introduction
Corporate Relations Division seeks to appoint an individual on a two (2) fixed term year-contract, to provide specialised professional website development and design services to the University.
 
Job description
The successful incumbent will be required to render an effective and efficient services as follows:
•    Develop high quality, interactive web applications using .NET (VB and C#), HTML and CSS, for major institutional events and applications. 
•    Develop web templates for university websites, optimize graphics for web and other electronic mediums.
•    Manage and update the top-level pages of the University’s website with institutional events and news and provide support across over 250 sub websites (including support division, Innerweb).
•    Create websites for UKZN Colleges/Schools/Units/Centres using the Wordpress, and provide specialist consulting, training and support to the web masters. 
•    Produce University Electronic newsletters on a weekly basis, responsible for the design layout and distribution.
 
Minimum requirements
1.      A relevant Bachelor’s degree or equivalent qualification.
2.      Five years ‘experience, in which two years is in a similar post (as a webmaster), preferably within a higher education, research or corporate communications environment.
3.      Management and supervisory experience is essential.
4.      Code 08 driver’s licence as the candidate will be required to travel between the campuses.
5.      Four years’ experience in creating websites in CMS and writing web applications, specifically as follows;
·        Demonstrated experience in developing online applications and debugging in Visual Studio.Net. Web Portals, Database design and Stored procedures for online applications. 
·        Experience in Windows server environment, managing IIS and site creation procedures
·        Demonstrated experience in graphic design using Adobe Creative Suite, Web Premium 
 
Benefits
Appointment to this post will be on the January 2018 Conditions of Service.
The remuneration package offered includes benefits.
 
APPLY
 
 
 
 
 
 `,`SENIOR LECTURER/ASSOCIATE PROFESSOR/PROFESSOR (REFERENCE NUMBER: HS04/2024)
Listing reference: ukzn_000359
Listing status: Online
Apply by: 19 August 2024
Position summary
Industry: Education & Training
Job category: University and Academy
Location: Westville
Contract: Permanent
Remuneration: Market Related
EE position: No
 
Introduction
The School of Health Sciences wishes to appoint an Academic who will contribute actively to undergraduate and postgraduate teaching and learning, research, and community engagement.
 
Job description
Specialization in aural rehabilitation, cochlear implants, and AVT training would be an advantage
Experience in student training and research supervision would be an advantage
Candidates will also be required to do administration
 
Minimum requirements
All applicants must have a Bachelor’s degree in Audiology
A Master’s degree qualification in the field of Audiology
A PhD in the field of Audiology or equivalent
Have a good publication record
Registration with the Health Professions Council of South Africa as an Audiologist
Computer literacy in Microsoft Office packages (especially Excel and PowerPoint)
Valid code 08 driver’s license
Minimum of 2 years clinical experience as an Audiologist
 
APPLY`],postedDate:"15/8/2024",iframe:"",uuid:"p79a940cc-dcc7-4a6e-9a79-48328540c515"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/university-of-pretoria_orig.jpg",href:"https://www.govpage.co.za/university-of-pretoria-up-vacancies-blog/university-of-pretoria-up-vacancies2734122",title:"UNIVERSITY OF PRETORIA (UP) VACANCIES",content:[` 
UNIVERSITY OF PRETORIA (UP)
 `,` 
 
FIRST INSTRUCTOR - DEPARTMENT OF MECHANICAL AND AERONAUTICAL ENGINEERING (1 POST)
 
APPLY FOR JOB
 
Job ID 25610
Location EBIT
Full/Part Time Full-Time
 Regular/Temporary Regular
 
UP Professional and Support
FACULTY OF ENGINEERING, BUILT ENVIRONEMENT AND INFORMATION TECHNOLOGY
DEPARTMENT OF MECHANICAL AND AERONAUTICAL ENGINEERING
FIRST INSTRUCTOR
PEROMNES POST LEVEL: 9
 
In pursuit of the ideals of excellence and diversity, the University of Pretoria wishes to invite applications for the following vacancy.
The University of Pretoria's commitment to quality makes us one of the top research Universities in the country and gives us a competitive advantage in international science and technology development.
 
RESPONSIBILITIES:
The successful candidate will function as a first instructor in the Vehicle Dynamics laboratory of the Department of Mechanical and Aeronautical Engineering. The candidate will assist staff and students to conduct quality research and teaching in a highly productive manner and to expand the existing research programme of the department. This includes developing and commissioning of state-of-the-art experimental equipment, as well as management of research projects, facilities and equipment. Below are some of the duties the incumbent will be responsible for:
Management of one or more laboratories.
Management of physical space (lab layout, organisation, usability of the lab, neatness, maintain good order in the lab, supervision of students in the lab).
Management, control and maintenance of instrumentation.
Design, build and troubleshoot specialized electronic circuits for testing purposes.
Calibrate system transducers according to international standards.
Execute specialized test projects.
Data-analysis using appropriate software.
Write test reports.
Teach and support students in test execution/experiments.
Acquisition of quotations and purchasing of specialized equipment.
Uphold and develop ethos of professionalism and excellence.
Ensure lab safety. Apply OHS Act and regulations. OHS representative and first aid.
Conduct on- and off-site experimental work.
Assist other departments as/when required by the line manager.
Assistance with general maintenance in the department as required (via line manager).
Communicate with UP support departments (e.g., technical services, cleaning services, facilities management and IT).
Support and assistance during open days, engineering week and other special departmental occasions.
 
MINIMUM REQUIREMENTS:
NDip (NQF Level 6);
Three years appropriate (T3, T4 or BTech) technical education (Technikon or University);
In-Depth knowledge of the content and applications of the OHS Act (Act 85 of 1993);
At least 5  years’ experience as a Technician;
Previous technical teaching (Hands on experience is essential and crucial to the safety of the incumbent and students);
Driver’s license (Code EB);
Computer literacy (Microsoft Office, Python/MATLAB etc.).
 
Desirable
Qualification:
BTech (NQF Level 7);
BEngTech (NQF Level 7);
BEngTechHons (NQF Level 8);
Field of Specialization: Mechatronics, Mechanical, Electronic;
Remote pilot certificate.
Experience:
At least 10 years’ experience as a Technologist/Instructor.
 
REQUIRED COMPETENCIES (SKILLS, KNOWLEDGE AND BEHAVIOURAL ATTRIBUTES):
Knowledge - Proficiency Level
Knowledge of electronic systems - Advanced
Knowledge of data acquisition and relevant software - Advanced
Knowledge of mechanical systems - Proficient
Knowledge in the specific areas in which instruction is to be given and in specific areas where the department has needs, as per the instructions of the head of department. - Proficient
Knowledge of the content and applications of the OHS Act (Act 85 of 1993); - Proficient
 
TECHNICAL COMPETENCIES - PROFICIENCY LEVEL
Instrumentation - Seasoned
Data acquisitioning - Advanced
Project design and implementation - Proficient
Hands-on experience with manufacturing - Proficient
Electrical wiring, cables and harnesses - Seasoned
Electronic PCB and circuits - Advanced
 
 
Behavioural Competencies
Team work capability
Individual (independent) work capability
Work with different stakeholders
Reliable and dependable
Team work capability
Ability to support post-graduate students and staff on specialized measurement projects
Good interpersonal relations. The incumbent will have to be able to communicate with a variety of students and lecturers across different cultures and language groups
Technical communication both oral and written
Ability to manage anger and handle conflict
 
 
PLEASE NOTE: All shortlisted candidates may be required to participate in relevant skills assessments as part of the selection process.
The annual remuneration package will be commensurate with the incumbent’s level of appointment, as determined by UP policy guidelines. UP subscribes to the BESTMED medical aid scheme and contributes 50% of the applicable monthly premium.
 
Applicants are requested to apply online at www.up.ac.za, and follow the link: Careers@UP.
In applying for this post, please attach:
A comprehensive CV;
Certified copies of qualifications;
Names, e-mail addresses and telephone details of three referees whom we have permission to contact.
 
 
CLOSING DATE:  28 August 2024
 
No application will be considered after the closing date, or if it does not comply with at least the minimum requirements.
 
ENQUIRIES: Ms AR Segeri, Tel: (012) 420 2100 /  email: amogelang.segeri@up.ac.za for application-related enquiries, and Prof S Els, Tel: (012) 420 2045 /  email: schalk.els@up.ac.za for enquiries relating to the post content.
 
Should you not hear from the University of Pretoria by 30 November 2024, please accept that your application has been unsuccessful.
 
The University of Pretoria is committed to equality, employment equity and diversity.
 
In accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets, preference may be given, but is not limited to candidates from under-represented designated groups.
 
All candidates who comply with the requirements for appointment are invited to apply.
 
By applying for this vacancy, the candidates consent to undergo verification of personal credentials and related information including, but not limited to, qualifications, criminal record, credit record, current and historic disciplinary proceedings as part of the selection process.
 
The University of Pretoria reserves the right to not fill the advertised positions.
 
 
 
 
 `,` 
 
 
 
 
 
LECTURER - DEPARTMENT OF ARCHITECTURE (1 POST)
 
APPLY FOR JOB
 
Job ID 25614
Location EBIT
Full/Part Time Full-Time
Regular/Temporary Regular
 
 
UP Posting - Academic
FACULTY OF ENGINEERING, BUILT ENVIRONMENT AND INFORMATION TECHNOLOGY
DEPARTMENT OF ARCHITECTURE
LECTURER (ONE POST)
 
In pursuit of the ideals of excellence and diversity, the University of Pretoria wishes to invite applications for the above vacancy.
The University of Pretoria's commitment to quality makes us one of the top research Universities in the country and gives us a competitive advantage in international science and technology development.
 
RESPONSIBILITIES:
The incumbent will be responsible for:
Undergraduate and postgraduate teaching in those aspects encountered in the Built Environment that are taught in the degree programmes on offer in the Department;
Expanding existing research and teaching in the Unit for Urban Citizenship;
Publishing research articles in the foremost national/international accredited journals;
Supervising postgraduate master’s and doctoral students within the research focus area of Urban Citizenship; 
Performing assigned departmental duties (e.g. of an administrative nature);
Participating in the Department’s community service programmes.
 
MINIMUM REQUIREMENTS:
Lecturer
A B-degree from a University in one of the relevant undergraduate programmes that is recognised by the one of the respective Professional Councils in South Africa, plus;
A Professional Master’s degree in Architecture;
Teaching or industry related experience;
1 Publication (peer reviewed article or peer reviewed conference paper) or
Book chapter(s), recognized articles outputs or industry recognized outputs in a commensurate field.
 
ADDED ADVANTAGES AND PREFERENCES:
Evidence of teaching excellence;
Preference will be given to candidates who have teaching and research expertise that complement the Department’s needs;
Related industry work or consulting experience;
NRF rating or have applied for one.
 
The annual remuneration package will be commensurate with the incumbent’s level of appointment, as determined by UP policy guidelines. UP subscribes to the BESTMED medical aid scheme and contributes 50% of the applicable monthly premium.
 
Applicants are requested to apply online at www.up.ac.za, and follow the link: Careers@UP.
 
In applying for this post, please attach:
A cover letter summarizing relevant experience and the areas of your teaching and research expertise/interests;
A comprehensive CV;
Certified copies of qualifications;
A brief teaching portfolio;
Names, e-mail addresses and telephone details of three referees whom we have permission to contact;
Names and contact details of peer reviewers (academic and research);
Self-evaluation.
 
CLOSING DATE:  29 August 2024
No application will be considered after the closing date, or if it does not comply with at least the minimum requirements.
 
ENQUIRIES: Ms AR Segeri, Tel: (012) 420 2100/ E-mail: Amogelang.segeri@up.ac.za for application-related enquiries, and Prof C Combrinck, Tel: (012) 420 6536 / E-mail: carin.combrinck@up.ac.za or enquiries relating to the post content.
 
Should you not hear from the University of Pretoria by 30 November 2024, please accept that your application has been unsuccessful.
 
The University of Pretoria is committed to equality, employment equity and diversity.
In accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets, preference may be given, but is not limited to candidates from under-represented designated groups.
All candidates who comply with the requirements for appointment are invited to apply.
By applying for this vacancy, the candidates consent to undergo verification of personal credentials and related information including, but not limited to, qualifications, criminal record, credit record, current and historic disciplinary proceedings as part of the selection process.
The University of Pretoria reserves the right to not fill the advertised positions.
 
 
 
 
 `,`MOBILE LABORATORY TECHNICIAN - DEPARTMENT OF CIVIL ENGINEERING (CONTRACT)
 
APPLY FOR JOB
 
Job ID 25600
Location EBIT
Full/Part Time Full-Time
Regular/Temporary: Temporary 
 
UP Professional and Support
FACULTY OF ENGINEERING, BUILT ENVIRONEMENT AND INFORMATION TECHNOLOGY
DEPARTMENT OF CIVIL ENGINEERING
MOBILE LABORATORY TECHNICIAN (3-year contract)
PEROMNES POST LEVEL: 9
 
In pursuit of the ideals of excellence and diversity, the University of Pretoria wishes to invite applications for the following vacancy.
The University of Pretoria's commitment to quality makes us one of the top research Universities in the country and gives us a competitive advantage in international science and technology development.
 
RESPONSIBILITIES:
The role will be responsible to assist the Mobile Laboratory Coordinator with the day-to-day operations of the mobile soils laboratory. The Mobile Laboratory Technician in conjunction with the Mobile Laboratory Coordinator will be responsible for conducting of geotechnical laboratory testing, including taking of samples in the field.  Such activities may from time to time involve a significant amount of physical labour.
 
Off-campus testing:
As requested / instructed by the funder:
Collect / Gather, prepare and transportation of routine samples from the designated mines (test sites) to the mobile soils laboratory for analyses / testing.
Assist with compilation of the documentation required to obtain the necessary accreditation for the laboratory.
Perform a full range of laboratory tests in the mobile soils laboratory, according to standard testing procedures:
Including the use of ancillary equipment such as local strain measurement and bender elements.
Provide support for routine testing such as moisture content testing and specific gravity testing which may be required.
Assist with the data entry, analysis, preparing and processing of laboratory test result reports.
Compile, log and record testing or operational data for review and further analysis.
Maintain and update databases of lab test results.
Carry out all quality control procedures, document any non-conformances and report them to the Mobile Laboratory Coordinator, this will include but is not limited to the:
Maintenance, calibration, troubleshooting, and performing routine repair to laboratory equipment.
Responsible for the maintenance of a clean and safe environment and to be the designated custodian for assigned laboratory space.
On-campus duties:
When not testing on sites away from Pretoria, the role will be expected to:
Provide technical support of research, training, teaching duties and practicals in the Department by:
Contributing to the teaching of undergraduates and the supervision of undergraduates and postgraduates in the use of equipment during individual research projects.
Advising students and staff on the design, construction and provision of research and laboratory equipment.
Supervising and demonstrating the safe usage of equipment to the students/staff.
Aiding with laboratory testing for research purposes for students (undergraduate and post graduate) and academic staff.
Responsible for specific tasks relating to commercial laboratory testing which may from time to time be carried out through Enterprises University of Pretoria.
Administration:
In conjunction with the Mobile Laboratory Coordinator, take responsibility for:
Processing of laboratory test results;
Drafting laboratory reports;
Obtaining health and safety approvals from mines;
Conducting risk assessments, obtaining approvals for sampling/testing, etc.
 
MINIMUM REQUIREMENTS:
Relevant 3 year National Diploma
Minimum: 3 years’ experience in:
Experienced with standard soil testing (grading, Atterberg limits, SG, moisture content, compaction tests, min & max dry density)
A valid driver’s license (essential)
The Assistant will require a Code C1 driver’s license to be allowed to drive the truck housing the mobile soils laboratory. If the technician does not have such a license, he/she will be expected to obtain such a license once appointed. The costs will be covered by the University of Pretoria.
 
Desirable
Qualification:
B-Tech or BSc
Training courses in geotechnical laboratory testing
Experience:
Experienced with advanced geotechnical testing (triaxial testing)
Experienced in managing and operating a geotechnical soils laboratory
Experienced with soil sampling
 
REQUIRED COMPETENCIES (SKILLS, KNOWLEDGE AND BEHAVIOURAL ATTRIBUTES):
Knowledge - Proficiency Level
Standard geotechnical lab testing - Proficient
Advanced geotechnical lab testing - Basic
Typical safety procedures - Basic
Basic Soil Mechanics - BASIC
Basic research methodology - Basic
 
TECHNICAL COMPETENCIES - PROFICIENCY LEVEL
Conducting basic geotechnical lab tests - Proficient
Conducting advanced geotechnical lab tests - Basic
Processing of geotechnical laboratory test results - Basic
Ability to maintain geotechnical lab equipment - Basic
Computer skills - Proficient
 
Behavioural Competencies
The successful candidate will be expected to possess leadership qualities and be comfortable leading people.
The successful candidate should be comfortable guiding students.
The successful candidate must possess initiative and be pro-active in problem solving.
 
 
PLEASE NOTE: All shortlisted candidates may be required to participate in relevant skills assessments as part of the selection process.
 
The all-inclusive remuneration package for this contract position will be commensurate with the incumbent’s level of appointment, as determined by UP policy guidelines.
 
Applicants are requested to apply online at www.up.ac.za, and follow the link: Careers@UP.
 
In applying for this post, please attach:
A comprehensive CV;
Certified copies of qualifications;
Names, e-mail addresses and telephone details of three referees whom we have permission to contact.
 
CLOSING DATE:  26 August 2024
 
No application will be considered after the closing date, or if it does not comply with at least the minimum requirements.
 
ENQUIRIES: Ms MK Ngubane, Tel: (012) 420 8400 /  email: malindi.ngubane@up.ac.za for application-related enquiries, and Prof SW Jacobsz, Tel: (012) 420 3124 /  email: sw.jacobsz@up.ac.za for enquiries relating to the post content.
 
Should you not hear from the University of Pretoria by 30 November 2024, please accept that your application has been unsuccessful.
 
The University of Pretoria is committed to equality, employment equity and diversity.
 
In accordance with the Employment Equity Plan of the University and its Employment Equity goals and targets, preference may be given, but is not limited to candidates from under-represented designated groups.
 
All candidates who comply with the requirements for appointment are invited to apply.
 
By applying for this vacancy, the candidates consent to undergo verification of personal credentials and related information including, but not limited to, qualifications, criminal record, credit record, current and historic disciplinary proceedings as part of the selection process.
 
The University of Pretoria reserves the right to not fill the advertised positions.`],postedDate:"15/8/2024",iframe:"",uuid:"p9e6b94e3-1790-4c29-996a-9b6ea83fdc22"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/university-of-western-cape_orig.png",href:"https://www.govpage.co.za/university-of-western-cape-uwc-vacancies-blog/university-of-western-cape-uwc-vacancies3741114",title:"UNIVERSITY OF WESTERN CAPE (UWC) VACANCIES",content:[` 
UNIVERSITY OF WESTERN CAPE (UWC)
 `,`LEARNING & TEACHING SPECIALIST
POST NUMBER 8020802
Faculty/Department University of the Western Cape -> Dentistry -> Dean's Office: Dentistry
Type of Position Permanent - Full Time
Length of Contract Period
Location Tygerberg Campus - WC ZA (Primary)
Closing Date 29/8/2024

Role Clarification & Key Performance Areas
The Faculty of Dentistry is a world-class Oral Health Centre committed to the promotion of oral health through the excellence of its Learning and Teaching, service rendering and research. As part of the strategic plan for Learning & Teaching, the University is vigorously promoting the Scholarship of Learning & Teaching.
 
The Faculty seeks to appoint a Learning & Teaching Specialist (Senior Lecturer rank), who will be responsible for the following:
Supporting the Deputy Dean: Academic including Learning & Teaching in providing strategic leadership within the portfolio,
Facilitating and disseminating innovative pedagogical practices in the Faculty,
Facilitating the development of disciplinary and Faculty graduate attributes and monitoring how these are incorporated into Learning & Teaching activities and assessment tasks,
Facilitating the integration of academic literacy into undergraduate and postgraduate curricula,
Ensuring professional staff development in the area of Learning & Teaching,
Managing, facilitating, monitoring and evaluating tutor training in the Faculty,
Conducting research relevant/appropriate to teaching in the Faculty and developing strategies to address these,
Conducting and managing student evaluations of Learning & Teaching and following up on recommendations for improved practice,
Ensuring quality assurance in Learning & Teaching,
Promoting the scholarship of teaching and learning in the Faculty by publishing, as well as collaborating with academics in the Faculty to publish in the field of  Learning & Teaching,
Provide support and guidance to students with learning challenges,
Assist with the preparation of documentation for programme and professional reviews
 
Minimum Requirements
A PhD in the relevant field coupled with three to five years experience of  Learning & Teaching in a Higher Education Institution,
Strong Research and Publications record; particularly publications in Learning & Teaching is essential,
Experience in staff development and supporting the integration of academic literacy into curricula will be advantageous.`,`For further information on this position (but not applications), please contact Professor V.J. Wilson via e-mail: vwilson@uwc.ac.za.
 
In your application, you are encouraged to highlight your strengths and include anything else you deem exceptional and outstanding to be considered by the selection panel. In addition, please attach a cover letter motivating your suitability, a detailed curriculum vitae and the highest qualification to your online profile. To be considered for this vacancy, you must click on the Apply for this Job link below or apply directly via UWC Careers at https://uwc.hua.hrsmart.com/hr/ats/JobSearch/viewAll. For any queries, please contact the Human Resources Department at +27 21 959 4063/9763/9708/3551/3756 or email: e-recruitment@uwc.ac.za
 
DISCLAIMER: By applying for the position, you consent to the University sharing your application, including curriculum vitae, with University stakeholders to process the application. In line with the University’s commitment to diversifying its workforce, preference will be given to suitably qualified applicants in line with our Employment Equity Targets. The official retirement age at UWC is 65 years. The University reserves the right to not make an appointment, make an appointment at a different level, seek additional candidates and may conduct competency assessments.

APPLY FOR THIS JOB`],postedDate:"15/8/2024",iframe:"",uuid:"pf3e73c5a-a804-45bb-8899-93d7803c38d5"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/vut_orig.png",href:"https://www.govpage.co.za/vaal-university-of-technology-vut-vacancies-blog/vaal-university-of-technology-vut-vacancies9601539",title:"VAAL UNIVERSITY OF TECHNOLOGY (VUT) VACANCIES",content:[` 
VAAL UNIVERSITY OF TECHNOLOGY (VUT)
 `,` 
 
EXTERNAL / INTERNAL VACANCY
 
FACULTY: Engineering & Technology 
DEPARTMENT: Electrical Engineering
POST: nGAP Lecturer: Electrical
POST No: 2507 
PEROMNES GRADE: 08
 
JOB DESCRIPTION:
Key Performance Areas include but not limited to:
• Register and study towards a master’s degree in electrical engineering by research.
• Teach and assess at Diploma level for the subjects/modules in the Department of Electrical Engineering.
• Commit to other professional developments as a university academic in the discipline of Electrical Engineering.
• Influence the development, maintenance, and control in field of specialisation.
• Liaise with Industry including consultation work/collaborative research.
• Conduct student and academic administration and reporting duties in line with responsibility (for instance class behaviour, attitude, and attendance).
• Manage the entire assessment chain for the subject. This includes Identifying the appropriate moderator for the subjects/modules in line with the University policy and determining the appropriate promotion criteria and standards within the University Policies, Guidelines and Timelines.`,`APPLICATION 

CRITERIA:
Qualification and Experience:
• Bachelor (BEng/ BTech/ BScEng) and Masters Degrees (MEng/ MTech/ MScEng) in Electrical/ Electronic Engineering
• Must complete PhD within 4 years
• Applicants must be South African citizens who are less than 40 years of age.
• Minimum of two years of industrial experience OR one year of teaching experience in the relevant field of specialisation in an institute of higher education.
• ECSA registration or eligibility to register as a technologist or professional engineer.
 
Skills and Competencies:
• Engineering competence.
• Communication skills (Verbal and written).
• Quality control/ Maintenance procedures.
• Management skills.
• Professional judgement demonstrated in workplace application.
 
 
Closing date for applications: 27 August 2024
 
1. Download the application form for Employment Form available on the VUT website-Vacancies.
2. A detailed curriculum vitae (explicitly stating experience or knowledge in the abovementioned fields)
3. Certified copies of all academic records and certificates/degrees
4. Certified copy of ID
5. Current contact information of referees
6. Please  email applications to recruitment2@vut.ac.za and quote the post reference and description in the subject line.
7. Incomplete applications or applications without the application form and required documents will be disregarded.
8. Communication will be entered into with short-listed candidates only. If you do not hear from VUT within 3 months deem your application as unsuccessful.
 
Enquiries may be directed to:
HR Practitioner: Ms Pinki Motsoetla, Tel 016 950 6645
HR Business Partner: Ms Sandy Mordaunt, Tel 016 950 9453
 
Please Note: Submission of such copies entitles Vaal University of Technology to authenticate the qualifications without any further consent from the applicant.
Candidates with foreign qualifications must also submit the South African equivalent of the qualification. These qualifications are evaluated by SAQA. Vaal University of Technology is an equal opportunity and affirmative action employer, which is committed to the implementation of its employment equity plan. Therefore, people from designated groups are encouraged to apply. Only shortlisted candidates will be contacted.
 
VUT reserves the right not to make an appointment.
 
By applying for this position, you give permission to share your information with the selection panel or relevant people involved in the recruitment process.`],postedDate:"15/8/2024",iframe:"",uuid:"p0285a226-a168-4064-a626-d4424e0236ab"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ekurhuleni-west-college_orig.png",href:"https://www.govpage.co.za/ekurhuleni-west-tvet-college-vacancies-blog/ekurhuleni-west-tvet-college-vacancies4507119",title:"EKURHULENI WEST TVET COLLEGE VACANCIES",content:[],postedDate:"15/8/2024",iframe:"https://drive.google.com/file/d/1LOhm7Mz73DwR3yD7uY-nnb2sCZUh3iJH/preview",uuid:"pc423bc26-94b2-497a-bdf9-41c75e441dff"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/mnambithi-tvet-college_orig.jpg",href:"https://www.govpage.co.za/mnambithi-tvet-college-vacancies-blog/mnambithi-tvet-college-vacancies2120474",title:"MNAMBITHI TVET COLLEGE VACANCIES",content:[` 
MNAMBITHI TVET COLLEGE
 `,` 
CALL FOR NOMINATIONS OF COUNCIL MEMBER TO SERVES AT MNAMBITHI TECHNICAL VOCATIONAL EDUCATION AND TRAINING (TVET) COLLEGE IN TERMS OF TERMS 10(6) of the CET Act 16 of 2006 (as amended) 
 
MNAMBITHI TVET College invites interested and competent individuals who wish to contribute towards skills development in the College to apply to serve as council member for a period of five (5) years. 
The College requires four (4) new additional external members, with expertise in one of the following fields: Finance Management, Audit and Risk, Human Resource, Legal, Information Technology. 
Kindly note that appointments are subject to the approval of the Minister of Higher Education and Training. 
 
Nominees should be able to: 
 Ensure that the functions of the council are performed according to the highest professional standards; 
 Ensure that the council members have sound knowledge and understanding of the Further Education and Training sector; 
 Appreciate the role of Further Education and Training in reconstruction and development; and 
 Ensure that the council is broadly representative of the community served by the college in respect of race, gender and disability. 
 
Council must have at least one member per specialized field: Minimum Key Requirements. 
 A Bachelor’s Degree in one of the following: Finance Management; Audit and Risk; Human Resource; Information Communication Technology. 
 Five (05) years’ working experience in a senior position in one of the fields listed below: 
 
 Financial Management: comprehensive content knowledge; a financial degree (preferably qualifies as a Charted Accountant and/or as a financial auditor. 
 Human Resource Management: comprehensive content knowledge; at least a degree in Human Resource or equivalent. 
 Information Technology: Comprehensive content knowledge; 
 Legal: comprehensive content knowledge in Post Education Legal Framework. 
 
Attributes:
 Ability to network; Ability to juggle and prioritize activities; Loyal, reliable and discreet; Ability to think holistically; Ability to work in a team; Conflict resolution skills; Positive attitude to change. 
 
 NOTE: Mnambithi TVET College calls on all independent, suitably qualified and experienced professional to serve as additional members of Council. Preference will be given to applicants who are citizens of the Republic of South Africa and residents within the Kwa Zulu Natal Province. 
 
 Members (nominees) are to be nominated by a person in the public as a nominator supported by a witness. 
 
 Nominations should be made on the nomination form provided for on the College website www.mnambithicollege.co.za  
 
Please submit your application using the email address: council.recruitment@kzntvet.edu.za
Your application should comprise of the following document: 
 CV –as per template. (Template available from College website) 
 ID Copy & Qualifications 
 Declaration of Interest 
 
 Enquiries: Ms N Ngema (036 – 631 0360) 
 
The DHET /College reserves the right to conduct verification activities on an applicant’s CV. 
 
Closing date for Applications is 29 August 2024 and successful applicants will be notified as soon the outcome of the appointment process has been completed.
 
 
 
 
 `,` 
 
 
 
 
ADVERTISEMENT
 
POSITION: COLLEGE COUNCIL SECRETARY 
REF NO: MTVET 2024/01/10 
DIVISION: OFFICE OF THE PRINCIPAL 
SALARY: R308 154 per annum (SL 7) 
CENTRE: MNAMBITHI TVET COLLEGE (Central Administration Office) 
 
REQUIREMENTS: Qualifications and experience: Matric, three year Diploma/ Degree in Public Management or Office Management/ Equivalent qualification. Sound Knowledge of MS packages (MS Word, MS Excel, Access, and PowerPoint) is essential. Minimum of three (3) years in secretarial function or similar role. A valid driver’s licence is a requirement. Basic Financial Management experience will be an added advantage. Competencies: good listening and writing skills. A good command in English. Good interpersonal relations and customer orientation, organizing and planning skills; Attention to detail; Knowledge of the Higher Education and Training communication protocols. Attributes: Professional, discreet, maintain high levels of confidentiality, assertive, good organizer with sound judgement and decision making skills. Ability to work under pressure. 
 
Duties: Managing logistics for Council meetings and its sub committees, managing the interface between College Council and management and also between stakeholders and the Council. Providing secretarial duties to the Council and its sub committees. Providing advice and guidance on relevant policy gaps. Assisting with research and drafting of charters, terms of reference, policy documents on governance and legal matters. Ensuring that corporate governance best practices are adopted by the Council. 
 
NOTE: The successful candidate’s appointment will be subject to a security clearance process and the verification of educational qualification certificates. Applications must quote the relevant reference number and must be completed on the New Z83 form obtainable from any Public Service department or on the internet at www.gov.za, and signed when submitted. From 1 January 2021 should an application be received using the incorrect application for employment (Z83), the application will not be considered. 
 
All applications must be accompanied fully completed Z83 and a detailed CV only. Shortlisted candidates only will be required to submit certified copies of qualifications and other relevant documents to HR before the interview date. Men and persons with disabilities are encouraged to apply and preference will be given to the EE Targets. Due to the large number of responses anticipated, correspondence will be limited to short-listed candidates only. 
 
APPLICATIONS: All Applications must be addressed for attention of HR Unit, Mnambithi TVET College, Private Bag X9903, Ladysmith, 3370 or hand delivered to 77 Murchison Street, Ladysmith, 3370. Should the applicant not be notified of the outcome of the application within three months after the closing date, they should consider their application as unsuccessful. The college reserves the right not to fill posts. Mnambithi TVET College is an equal opportunity affirmative action employer. 
 
CLOSING DATE: 29 August 2024 
 
Enquiries: HR Section Tel No: (036)631 0360
 
 
 
 `,`MNAMBITHI TVET COLLEGE IS RECRUITING FOR AN EXTERNAL COUNCIL MEMBER REPRESENTING DONORS
 
The College is looking for a dynamic and knowledgeable person on community engagement, institutional relevance, donor experience, fund raising efforts and donor stewardship to serve as a donor member from organized business in the College Council. 
 
Functions:
 Contribute to and support the College strategic plan 
 Promote the culture of collaboration, creativity and community engagement in the College 
 Advise the Principal on fund raising opportunities, prospective donors and growing the number of donors 
 Provide guidance on fundraising efforts to raise funds through individual, corporate giving, sponsorships and contributions 
 
Knowledge Skills and abilities 
 Strong social and people skills, and knowledge of the community 
 Ability to generate enthusiasm in fundraising and other activities 
 Must have a positive attitude, utmost integrity, a strong sense of discretion, and mature personality conducive to dealing appropriately and effectively with all levels of donors, staff and Council 
 Ability to maintain donor confidentiality as appropriate 
 
Qualifications
 Bachelor's degree in fundraising, marketing, or related field. Equivalent combination of education, training, and experience accepted in lieu of degree. 
 Three years of successful experience in development and fundraising for a recognized non-profit institution (may be substituted with experience in non-profit marketing and public relations) 
 Two years' experience of involvement with a Higher Education institution or a similar environment preferred. 
 Nominations should be made on the nomination form provided for on the College website www.mnambithicollege.co.za  
 
Please submit your application using the email address: council.recruitment@kzntvet.edu.za
Your application should comprise of the following document: 
 CV –as per template. (Template available from College website) 
 ID Copy & Qualifications 
 Declaration of Interest 
 
Enquiries: Ms N Ngema (036 – 631 0360) 
The DHET /College reserves the right to conduct verification activities on an applicant’s CV. 
Closing date for Applications is 29 August 2024 and successful applicants will be notified as soon the outcome of the appointment process has been completed.`,`AUDIT AND RISK COMMITTEE MEMBERS (X3 POSTS) 
Audit and Risk Committee members shall be appointed as independent contractors and not as employees of Mnambithi College. Appointment will be for a five-year term and remuneration shall be in accordance with National Treasury Regulations 3.1.6, read with 20.2.3. Members will be remunerated for preparation and attendance of meetings. 
CENTRE: Mnambithi TVET College 
 
REQUIREMENTS: Applicants must be in possession of a graduate qualification in the field of Accounting, Internal Auditing, Risk Management or Information Communication Technology. Possession of a CA (SA), CIA, CISA, CFE or MBA qualification will be an added advantage. 
 
EXPERIENCE: Applicants must have a sound experience in Internal Audit, Governance and Risk Management, Information Communication Technology, Strategy Development, Implementation and Monitoring, and External Auditing. A proven record of service or membership of the following Committees: Audit Committee, Risk Management Committee, IT Steering Committee, Ethics Committee and/or any Governance Body. 
 
ATTRIBUTES AND SKILLS: Independence, integrity, objectivity, reliability, sound knowledge of Public Sector environment, knowledge of governance and risk management principles and control processes, good communication skills, strong leadership skills, knowledge of the Public Administration Industry. Independence from all operations of Mnambithi TVET College. 
 
DUTIES: The Committee regulates and discharges its responsibilities in accordance with the provisions of the PFMA, Treasury Regulations and the approved Audit Committee Charter. 
 
NOTE: Mnambithi TVET College calls on all independent, suitably qualified and experienced professional to serve as members of the Audit and Risk Committee. Preference will be given to applicants who are citizens of the Republic of South Africa and residents within the Kwa Zulu Natal Province. 
Members (nominees) are to be nominated by a person in the public as a nominator supported by a witness. 
 
Nominations should be made on the nomination form provided for on the College website www.mnabithicollege.co.za
 
Please submit your application using the email address: council.recruitment@kzntvet.edu.za
 
Your application should comprise of the following document: 
 CV –as per template. (Template available from College website) 
 ID Copy & Qualifications 
 Declaration of Interest 
 
 Enquiries: Ms N Ngema (036 – 631 0360) 
 
The DHET /College reserves the right to conduct verification activities on an applicant’s CV. 
Closing date for Applications is 29 August 2024 and successful applicants will be notified as soon the outcome of the appointment process has been completed.`],postedDate:"15/8/2024",iframe:"",uuid:"p844557a1-3e43-4973-bd73-cc379f7b7d05"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/capricorn-tvet-college_orig.jpg",href:"https://www.govpage.co.za/capricorn-tvet-college-vacancies-blog/capricorn-tvet-college-vacancies7929777",title:"CAPRICORN TVET COLLEGE VACANCIES",content:[],postedDate:"15/8/2024",iframe:"https://drive.google.com/file/d/1IerDphrYTpQP_JgjOG8cuaorAGxj2B1e/preview",uuid:"pe91c019b-e54b-43ef-afce-145231ed3ba8"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ehlanzeni-tvet-college_orig.png",href:"https://www.govpage.co.za/ehlanzeni-tvet-college-vacancies-blog/ehlanzeni-tvet-college-vacancies7378189",title:"EHLANZENI TVET COLLEGE VACANCIES",content:[` 
EHLANZENI TVET COLLEGE
 
HRM VACANCY CIRCULAR NO 7 OF 2024
 
 INTERNAL & EXTENAL ADVERTISEMENT
 
Ehlanzeni TVET College invites all suitably qualified candidates to apply for vacancies in this Circular. These are    permanent positions. The intention is to fill these positions in accordance with the Employment Equity targets of the College, consequently, Whites, Indians, and Colored are encouraged to apply.
 `,`SENIOR EDUCATION SPECIALIST: ENGINEERING STUDIES (PL3)
 
KANYAMAZANE CAMPUS
REF NO: EHL35/2024
SALARY R487 737.00 PA. PLUS BENEFITS
 
 REQUIREMENTS:
 An appropriate Bachelor’s Degree or Equivalent Qualification plus a professional qualification in Education. Minimum of five years relevant lecturing experience, of which at least two years should be in Management or Supervisory role within the TVET environment. Qualified artisan with a relevant trade of engineering will be an added advantage. Strong interpersonal relation, motivation, negotiation skills and problem solving skills. Well- developed leadership, organizational, planning and management skills. Sound Report writing skills. Computer literacy. Valid Driver’s license. Registration with SACE. Sound knowledge of Legislative Frameworks governing TVET Colleges. 
 
DUTIES:
 Coordinate and ensure that prelims are checked and signed by students. Ensure that information of students captured is correct, verified and application forms are securely stored. Training and orientation of academic staff regarding academic programmes offered. Monitoring of PoEs, PoAs Assessments and subject files. Handle special enquiries during registration in cooperation with Campus Manager. Ensure that SORS are submitted timeously to DHET regarding examinations. Monitor the submissions of daily conduct reports from the Department. Oversee the smooth running of the Examination and Assessment cycles working closely with Campus Manager. Monitor examinations on the Campus in the planning and preparations. Ensure that subject meetings, class visits are conducted as planned. Ensure the maintenance of facilities (Academic related) in co-operation with Campus Manager by reporting malfunctioning facilities/damages/etc timeously. Co-ordinates the ordering of the text books and all other related consumables used for teaching and learning. Ensure proper utilization of the equipment used for Education and Training. Determination of staff development and training needs in co-operation with SDF, Campus Manager and Training Committee. Ensure minimal disruption of academic program and classes. Ensure proper feedback and reporting from delegates who attended workshops and training sessions. Ensure effective Moderation and Assessments according to Policy/Guidelines. Organize and implement Moderation and Assessment according to Policy/Guidelines. Organize and implement Moderation System. Take part in verification process of Moderation System and students marks. Observe the taking place and management of IQMS processes. Attend meetings of the Academic Board and SSS Committees. 
 
EDUCATION SPECIALIST: PL 2 (3 POSTS)
SALARY: R412 551.00 P.A PLUS BENEFITS
BARBERTON CAMPUS: FUNDAMENTAL STUDIES (REF EHL36 /2024); 
BARBERTON CAMPUS: ENGINEERING STUDIES: ELECTRICAL (REF EHL37 /2024); BARBERTON CAMPUS: BUSINESS STUDIES: REPORT 191 (REF EHL38 /2024)
 
 
REQUIREMENTS:
An appropriate Degree or National Diploma plus a professional Teaching Qualification. Be able to teach relevant subjects under each programme as on the posts advertised. 3 years lecturing experience within the TVET sector. Qualified assessor and moderator. Registered with SACE. Intensive knowledge of report 191 and NCV programmes. Excellent communication skills. Good report writing skills. Problem solving skills.  Negotiation skills. Skills in diversity management and ability to work independently. Knowledge of TVET sector. Valid driver’s license.
 
 DUTIES: 
Assist with and supervise recruitment, registration and induction of student. Facilitate general academic and career development of students. Prepare and present lessons in compliance with the college annual academic plan and campus timetable and the college’s Quality management system. Co-ordinate the procurement of the programmers training needs. Provide guidance ion syllabi, curriculum and learning outcomes. Implement and monitor all policies that impact on the learning delivery including examination and certification of students within the department. Create a conducive classroom environment and ensure efficient classroom management and discipline of students. Liaise with the lecturers, Head of Department and student support officers is providing support interventions to students. Assess students, capture marks, analyses, interpret, effect appropriate remedial action and maintain the necessary ICASS and ISAT records. Facilitate the distribution of textbooks and student packs. Manage and monitor staff and student performance and attendance. Implement strategies to enhance the academic performance of the department. Manage and facilitate students Work Based Experience as well as Lecturer Workplace Integrated Learning. Ensure the smooth running of the department and submit regular reports to the HOD. Chair meetings of Lecturers and students within the department.`,`Applications should be forwarded to the HR Manager, Ehlanzeni TVET College, Private Bag X11297, Nelspruit 1200 or be hand delivered at Ehlanzeni TVET College 29 Bell Street, Nelspruit 1200, Central Office.
 
 Please note: 
A fully completed, initialed and signed NEW 2021 Z83 form should be accompanied by a recently updated, comprehensive CV (inclusive of three referees and contact details), certified copies (not older than six months), of all qualifications with academic transcripts, ID document and drivers’ license. Please indicate the relevant reference number of the post you are applying for on a NEW Z83 form. Candidates who apply for more than one post should submit application documents for each post. Failure by the applicant to fully complete, sign and initial the application form will lead to disqualification of the application during the selection process Applications received after the closing date as well as those faxed or emailed will NOT be accepted. Suitable candidates will be subjected to a personnel suitability check (criminal records, citizenship, credit record check, qualification and employment verification). Where applicable, candidates will be subjected to skills/ knowledge/ competency test. The College is an equal opportunity, affirmative action employer. It is our intention to promote representative in respect of race, gender and disability through the filling of these positions. The college reserves a right not to appoint and correspondence will be limited to shortlisted candidates only. If you do not receive any response within three months after closing date of this advertisement, kindly accept that your application was unsuccessful. 
 
Enquiries: Mr. D.P/ Nkuna or Ms M Mokoena, Tel: 013 752 7501 
 
CLOSING DATE: 30 August 2024   15:30`],postedDate:"15/8/2024",iframe:"",uuid:"p4d551043-fbff-47d4-9f07-d3116f8b8962"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/kwazulu-natal-transport_orig.jpg",href:"https://www.govpage.co.za/kwazulu-natal-transport-vacancies-blog/kwazulu-natal-department-of-transport-vacancies5835135",title:"KWAZULU NATAL DEPARTMENT OF TRANSPORT VACANCIES",content:[],postedDate:"14/8/2024",iframe:"https://drive.google.com/file/d/1mEoXS1Da0YaUhPInIxtw2K1pPgrwyhZH/preview",uuid:"pe166fb3b-f0a6-4012-92f2-c573b737cc75"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-department-of-health_orig.png",href:"https://www.govpage.co.za/north-west-health-vacancies-blog/north-west-department-of-health-vacancies6964746",title:"NORTH WEST DEPARTMENT OF HEALTH VACANCIES",content:[` 
NORTH WEST DEPARTMENT OF HEALTH
 
Healthy Living for All
 `,` 
 
 
STAFF NURSE
Salary: R209 112.00 – R362 187.00 p.a (plus benefits) 
• Ref No: K36563/01 
• Centre: Ditsobotla Sub-District x4, Matlosana Sub District x1, Witrand Hospital x1, Klerksdorp/Tshepong Hospital Complex x4, General De Larey Hospital x4, Gelukspan District Hospital x1, Koster Hospital x1, Moses Kotane Hospital x4, Joe Morolong Memorial Hospital x1 & Potchefstroom Hospital x1
Final salary will be determined by appropriate/recognizable experience in Nursing after registration with the South African Nursing Council as Enrolled Staff Nurse. 
 
Requirements: • Qualification that allows registration with the South African Nursing Council as a Staff Nurse (Enrolled Nurse) • Shortlisted candidates will be required to submit current proof of registration with SANC as Staff Nurse (Enrolled Nurse) • Appropriate/recognizable experience in nursing after registration with the South African Nursing Council as Staff Nurse • Good communication and interpersonal skills • Sound knowledge of nursing procedures • Report writing skills, planning and organizing.
 
Duties: • Provide elementary assistance to the Medical and Nursing professions • Provide health promotion through health education • Perform a basic clinical nursing practice in accordance with the scope of practice and nursing standards as determined by the relevant health facility • Promote quality of basic nursing care as directed by the professional scope of practice and standards as determined by the relevant health facility • Demonstrate basic communication with patients and supervisors • Work as part of a multi-disciplinary team to ensure good nursing care • Work effectively, cooperatively and amicably with person of diverse intellectual, cultural racial or religious difference • Display a concern for patients, promoting and advocating basic care, including awareness and willingness to respond to patient’s needs, requirements and expectations • Adhere to Batho Pele Principles and Patient’s Rights.
 
Enquiries: Mr A Bogatsu, Tel. (018) 384 0240 (Ditsobotla Sub-District, General De La Rey Hospital & Gelukspan District Hospital)
Ms J Olivier, Tel. (018) 464 2210 (Matlosana Sub-District)
Ms L Matsipe, Tel. (018) 294 9100 (Witrand Hospital)
Ms L Mosia, Tel. (018) 406 4600 (Klerksdorp/Tshepong Hospital Complex)
Mr E Mmusi, Tel. (014) 590 5100 (Koster Hospital & Moses Kotane Hospital)
Mr M.S Montshiwagae, Tel. (053) 928 9312 (Joe Morolong Memorial Hospital) 
Mr K Molatudi, Tel. (018) 293 4417 (Potchefstroom Hospital)
 
 
 
 
 
NURSING ASSISTANT
Salary: R165 177.00 – R 283 347.00 p.a (plus benefits)
• Ref No: K36563/02 
• Centre: Mafikeng Provincial Hospital x1, Bophelong Psychiatric Hospital x1, Joe Morolong Memorial Hospital x1, General De Larey Hospital x1, Tswaing Sub-District x5, Gelukspan District Hospital x1, Witrand Hospital x1, Job Shimankana Tabane Hospital x3, Klerksdorp/Tshepong Hospital Complex x2, Madibeng Sub-District x1, Moretele Sub-District x1, Rustenburg Sub-District x2, Moses Kotane Hospital x4 & Potchefstroom Hospital x2
Final salary will be determined by appropriate/recognizable experience in Nursing after registration with the South African Nursing Council as a Nursing Assistant. 
 
Requirements: • Qualification that allows registration with the South African Nursing Council as Nursing Assistant (Enrolled Nursing Assistant) • Shortlisted candidates will be required to submit current proof of registration with South African Nursing Council as a Nursing Assistant • Appropriate/recognizable experience in nursing after registration with the South African Nursing Council as Nursing Assistant.
 
Duties: • Perform a basic clinical nursing practice in accordance with the scope of practice and nursing standards as determined by the relevant health facility • Promote quality of basic nursing care as directed by the professional scope of practice and standards as determined by the relevant health facility • Demonstrate basic communication with patients and supervisors • Work as part of a multi-disciplinary team to ensure good nursing care • Work effectively, cooperatively and amicably with person of diverse intellectual, cultural racial or religious difference • Display a concern for patients, promoting and advocating basic care, including awareness and willingness to respond to patient’s needs, requirements and expectations • Adhere to Batho Pele Principles and Patient’s Rights.
 
Enquiries: Mr M Legote, Tel. (018) 383 6700 (Mafikeng Provincial Hospital)
Ms E Tau, Tel. (018) 383 6700 (Bophelong Psychiatric Hospital)
Mr M.S Montshiwagae, Tel 053 928 9312 (Joe Morolong Memorial Hospital) 
Mr A Bogatsu, Tel. (018) 384 0240 (Gelukspan District Hospital, Tswaing Sub-District & General De Larey Hospital)
Ms L Matsipe, Tel. (018) 294 9100 (Witrand Hospital)
Ms S Magwaza, Tel. (014) 590 5100 (Job Shimankana Tabane Hospital) 
Ms L Mosia, Tel. (018) 406 4600 (Klerksdorp/Tshepong Hospital Complex) 
Mr E Mmusi, Tel. (014) 590 5100 (Madibeng Sub District, Moretele Sub District, Rustenburg Sub District & Moses Kotane Hospital)
Mr K Molatudi, Tel. (018) 293 4417 (Potchefstroom Hospital)
 
 
 
 `,` 
 
 
 
 
EMERGENCY CARE TECHNICIAN 
Salary: R250 947.00 – R399 705.00 p.a (plus benefits)
• Ref No: K36563/03 
• Centre: Ditsobotla Sub-District x1, Ratlou Sub-District x1 & Matlosana Sub-District x2 
Final salary will be determined by the years of experience after registration with the Health Professions Council of South Africa as an Emergency Care Technician.
 
Requirements: • Successful completion of Emergency Care Technician (ECT) Course that allows registration with the Health Professions Council of South Africa (HPCSA) as Emergency Care Technician (ECT) • Shortlisted candidates will be required to submit current proof of registration with the Health Professions Council of South Africa as Emergency Care Technician (ECT) • Appropriate experience after registration with the Health Professions Council of South Africa as an Emergency Care Technician.
 
Duties: • Transport and care of patients according to scope of practice • Maintain vehicle and medical equipment in good working order • Wash, clean and disinfect the interior/exterior of the vehicle • Change and replenish surgical sundries and medical gas and ensure that all items used before expiry date • Maintain best clinical practices in accordance with quality standards while supervising ECO’s • Maintain accurate and reliable records at all times • Undertake any other duties as allocated by shift leader.
 
Enquiries: Mr A Bogatsu, Tel. (018) 384 0240 (Ditsobotla Sub District & Ratlou Sub-District)
Ms J Olivier, Tel. (018) 464 2210 (Matlosana Sub-District)
 
 
 
 
 
PHYSIOTHERAPY ASSISTANT
Salary: R205 773.00 - R278 910.00 p.a (plus benefits)
• Ref No: K36563/04 
• Centre: General De Larey Hospital
Final salary will be determined by appropriate/recognizable experience in Physiotherapy Assistant after registration with the Health Professions Council of South Africa as Physiotherapy Assistant.
 
Requirements: • Appropriate qualification that allows for the required registration with the Health Professions Council of South Africa (HPCSA) in Physiotherapy Assistant • Shortlisted candidates will be required to submit current proof of registration with the Health Professions Council of South Africa (HPCSA) as Physiotherapy Assistant • Appropriate/recognizable experience in Physiotherapy Assistant after registration with the Health Professions Council of South Africa (HPCSA) as Physiotherapist Assistant.
 
Duties: • Administer health education, therapeutic exercises, massage and therapeutic exercise for children and adults • Promote health, prevent disability, rehabilitate patients, motivate and safeguard patients • Modify and coordinate treatment • Monitor and record patient’s progress during treatment • Fitting patients for orthopaedic braces and other supportive devices. 
 
Enquiries: Ms M Motshegwa, Tel. (018) 632 3041
 
 
 
 
 
 
CLINICAL PROGRAMME CO-ORDINATOR 
Salary: R520 560.00 p.a (plus benefits)
• Ref No: K36563/05 
• Centre: Tswaing Sub-District: Tuberculosis x1, Mental Health x1 & Chronic Diseases x1, Matlosana Sub-District: HIV/AIDS x1 & Klerksdorp/Tshepong Hospital: Tuberculosis x1, Infection & Prevention Control x2
 
Requirements: • Basic qualification accredited with the South African Nursing Council in terms of Government Notice 425 (i.e. diploma/degree in nursing) or equivalent qualification that allows registration with the South African Nursing Council as a Professional Nurse • Shortlisted candidates will be required to submit current proof of registration with the SANC as a Professional Nurse • A minimum of 7 years appropriate/recognisable experience in nursing after registration as a Professional Nurse with the South African Nursing Council in General Nursing • Shortlisted candidates will be required to submit a valid work permit for Non-South African Citizens • A valid driver’s license.
 
DUTIES FOR TUBERCOLOSIS: • TB management and planning of programs in line with TB guideline, safe quality care to patient, documentation, performing self-assessments • Improve the quality of health services through ideal hospital implementation, finance, human resource, equipment stock • Ensure and accelerate the implementation of the HIV and TB, management of admitted patients • Co-ordinate of TB statistics, quality daily data collection, submission and updated registers • All in and out patients screened for HIV and TB in all Units • Patients who are diagnosed with HIV and TB to be initiated on treatment • Risk management, Screening of patients and staff • Ensure all TB patients are weighed.
 
DUTIES FOR MENTAL HEALTH: • Co-ordinate and manage mental health and substance abuse programme activities • Monitor and evaluate the mental Health Programme • Ensure communication involvement and participation by forming support group and planning with the stakeholders • Liaise with other Department and interact with NGO’s and Community-based organisation • Plan and organise own work and that support of personnel to ensure proper nursing care • Display a concern for patient promoting and advocating proper treatment and care, including awareness to respond to patient’s needs • Implement quality assurance programme • Assist the Sub District Management with compilation of strategic and Operational plans for the programme in accordance with national and provincial Health goals and objective in collaboration with relevant health personnel.
 
DUTIES FOR CHRONIC DISEASES: • Co-ordinate Chronic, Geriatric and Rehabilitation program in the Sub District • Provide professional and technical support through management of chronic, Geriatric and Rehabilitation program in the Sub District • Conduct and participate in inter-professional and multi-disciplinary team work that promotes the goals of the chronic, Geriatric and Rehabilitation program • Verify, validate and monitor indicators and of Chronic Program and per DHIS and implementation of quality assurances guidelines, protocols, norms and standards of chronic, Geriatric and Rehabilitation program • Manage and utilise resources Human, Financial and Physical in accordance with relevant directives and legislation Chronic, Geriatric and Rehabilitation program, CHS Programs and as SDM team member.
 
DUTIES FOR HIV/AIDS: • Co-ordinate and manage HIV/AIDS programme activities • Monitor and evaluate the HIV/AIDS Programme • Ensure communication involvement and participation by forming support groups and planning with the stakeholders • Liaise with other department and interact with NGOs and community-based organization • Plan and organize own work and that support of personnel to ensure proper nursing care • Display a concern for patient promoting and advocating proper treatment and care, including awareness and willingness to respond to patient needs requirement and expectation of Batho Pele Principles • Implement quality assurance programme • Assist the Sub-District Management with compilation of Strategic and Operational plans for the programme in accordance with national and Provincial Health goals and objective in collaboration with relevant health personnel external outlets • Inspect wards • Compile statistics and record keeping • Adhere to Batho Pele Principles and Policies.
 
DUTIES FOR INFECTION AND PREVENTION CONTROL (IPC): • Responsible for planning, managing, coordinating and maintaining optimal infection prevention and control services to the institution • Infection Prevention Control ideal facilitation, Risk management, Infectious disease management and staff development • Effective management and utilization of human and financial resources to ensure optimal operational function in the area • Initiate and participate in training development and research within the nursing Department • Deliver a support to the nursing service and the institution • Maintain ethical standard and promote professional growth and self-development.
 
Enquiries: Mr M Chacha, Tel. (053) 948 0883 (Tswaing Sub-District)
Ms J Olivier, Tel. (018) 464 2210 (Matlosana Sub-District) 
Ms L Mosia, Tel. (018) 406 4600 (Klerksdorp/Tshepong Hospital Complex) 
 
 
 
 
 `,`EMERGENCY CARE OFFICER GRADE 3 
Salary: R206 619.00 - R271 584.00 p.a (plus benefits)
• Ref No: K36563/06 
• Centre: Mafikeng Sub District x1, Ramotshere Moilwa x2, Matlosana Sub District x3, Lekwa Teemane Sub-District x1 & Rustenburg Sub-District x1
Final salary will be determined by appropriate/recognizable experience in Ambulance Emergency Assistant (AEA) after registration with the Health Professions Council South Africa as Ambulance Emergency Assistant (AEA).
 
Requirements: • Successful completion of an appropriate intermediate Life Support (ILS) course that allows registration with the Health Professions Council of South Africa as Ambulance Emergency Assistant (AEA) • Shortlisted candidates will be required to submit current proof of registration with the Health Professions Council of South Africa (HPCSA) as Ambulance Emergency Assistant • Knowledge of rules and regulations of the Roads Traffic • A valid 10 driver\`s license and Public driver’s Permit.
 
Duties: • Treat and transport patient to Hospital from scene and between Hospitals in accordance with relevant protocols • Change and replenish surgical sundries and medical gases and ensured items are disposed of timeously and are exchanged for fresh stock • Assist in maintaining a clean and tidy base • Maintain best clinical practices in accordance with quality standard • Perform overtime duties in accordance with Emergency in-service training and refresher courses • Undertake any other duties as allocated by supervisor.
 
Enquiries: Mr A Bogatsu, Tel. (018) 384 0240 (Mahikeng Sub-District & Ramotshere Moiloa Sub District)
Ms J Olivier, Tel. (018) 464 2210 (Matlosa Sub-District)
Mr G.N Maibi, Tel. (053) 928 0503 (Lekwa Teemane Sub-District) 
Mr E Mmusi, Tel. (014) 590 5100 (Rustenburg Sub District)
 
 
 
 
 
 
PHARMACIST ASSISTANT (POST BASIC)
Salary: R250 947.00 – R355 812.00 p.a (plus benefits) 
• Ref No: K36563/07 
• Centre: JB Marks Sub-District (Ventersdorp Local Area)
Final salary will be determined by appropriate/recognizable experience in Pharmacist Assistant (Post Basic) after registration with the Health Professions Council South Africa as Pharmacist Assistant (Post Basic)
 
Requirements: • Post-Basic Pharmacist Assistant qualification that allows registration with the South African Pharmacy Council as a Pharmacist Assistant (Post-Basic) • Shortlisted candidates will be required to submit current proof of registration with the South African Pharmacy Council as Pharmacist Assistant (Post-Basic) • Appropriate/recognizable years of experience after registration with the South African Pharmacy Council as a Pharmacist Assistant (Post-Basic). 
 
Duties: • Control supply and provisioning of stock to wards and District outlet • Receive and store pharmaceutical supplies • Dispense medication to patient • Issue medication to external outlets • Inspect wards • Compile statistics and record keeping • Prepare labels/pre-printed sachets and correct labels • Adhere to Batho Pele Principles and Policies.
 
Enquiries: Mr P Nape, Tel. (018) 264 2048
 
 
 
 
 
 
EMS SHIFT LEADER GRADE 3 
Salary: R317 751.00 – R355 812.00 p.a (plus benefits) 
• Ref No: K36563/08 
• Centre: Moses Kotane Sub-District 
 
Requirements: • For Grade 3: • Successful completion of the intermediate Life Support (ILS) course that allow registration with the Health Professions Council of South African (HPCSA) as Ambulance Emergency Assistant (AEA) • Shortlisted candidates will be required to submit current proof of registration with HPCSA as AEA • A minimum of 3 years after registration with HPCSA as AEA • For Grade 4: • Successful completion of the ECT programmes courses that allows registration with HPCSA as ECT • A minimum of 3 years after registration with HPCSA as ECT • For Grade 5: • Successful completion of the CCA course or National Diploma that allows registration with HPCSA as Paramedic • For Grade 6: • Successful completion of the B-Tech/BEMC Degree that allows registration with HPCSA as ECP • A valid code 10-14 (C1-EC) driver’s license with PDP. 
 
Duties: • Ensure vehicles medical equipment and station are kept clean, disinfected and in good working order at all times • Respond to major incidents and co-ordinate such incidents within the operational area care for and transport patients when need arise at an appropriate level of care • Manage surgical sundries and medical gas • Oversee best clinical practices in accordance with quality standards while maintaining CPD • Complete and submit all appropriate paperwork to the Station Manager before termination of the shift/daily and monthly as required • Hand over vehicle, equipment to the next shift fully replenished, clean and in good working order • Control and perform over time duties when required • Participate in training and quality assurance programs • Evaluate and manager performance of supervisees • Ensure an effective communication system in place within the shift • Respond to accidents involving emergency vehicles and prepare reports • Investigate all complaints received from internal and external resources and provide reports. 
 
Enquiries: Mr E Mmusi, Tel. (014) 590 5100`,`NOTE: In line with the Employment Equity Plan of the Department of Health it is our intention to achieve equity in the workplace by offering opportunities for promotion and fair treatment through the elimination of unfair discrimination. People with disabilities are encouraged to apply. 
 
 
NOTE: Applications must be submitted on the new form Z83 (fully completed), obtainable from any Public Service Department or www.dpsa.gov.za and should be accompanied by a recently updated, comprehensive CV and ID document and the names of three referees. Only shortlisted candidates for the post will be required to submit certified documents. Non-RSA citizens/permanent resident permit holders must attach a copy of their permanent residence permits to their applications. Should you possess a foreign qualification, it must be accompanied by an evaluation certificate from the South African Qualifications Authority (SAQA). Failure to submit the requested documents will result in the application not being considered. All qualifications will be verified. It will be expected of candidates to be available for selection interviews on a date, time and place as determined by the Department. Applicants must indicate the reference number of the post in their applications. Candidates requiring additional information regarding advertised posts should direct their enquiries to the relevant person as indicated in the advertisement. Applications received after the closing date will not be considered. 
 
Note: Short-listed candidates will be subjected to security clearance and reference checking. Suitable candidates will be subjected to personnel suitability checks (criminal record check, citizenship verification, financial/asset record checks, qualification/study verification and previous employment verification). The Department reserves the right not to make appointments to the advertised posts. Failure to comply with the above requirements will result in the disqualification of the application. Receipt of applications will not be acknowledged and correspondence will be limited to short-listed candidates only. If you have not been contacted within 3 months of the closing date of this advertisement, please accept that your application was unsuccessful. 
NB: Candidates should note the following information on the new Z83 application form: 
Part A: All fields must be completed in full. 
Part B: All fields must be completed in full except when: 
Passport number: South African applicants need not provide passport numbers. 
An applicant has responded “No” to the question “Are you conducting business with the State? or are you a Director of a Public or Private company conducting business with the State? If yes (provide the details)”, then it is acceptable for an applicant to indicate not applicable or leave blank to the question, “in the event that you are employed in the Public Service, will you immediately relinquish such business interests?” 
“If your profession or occupation requires official registration, provide date and particulars of registration”- Some applicants may not be in possession of such therefore it is acceptable if left blank or if not applicable is indicated. 
 
Part C: All fields must be completed. 
Part D: All fields must be completed. 
Part E, F, G: Noting that there is limited space provided applicants often indicate “refer to Curriculum Vitae (CV) or see attached”, this is acceptable as long as the CV has been attached and provides the required information. If the information is not provided in the CV, the applicant may be disqualified. It must be noted that a CV is an extension of the application of employment Z83, and applicants are accountable for the information that is provided therein. The questions related to conditions that prevent re-appointment under Part F must be answered. 
Declaration must be completed and signed (including any attachments). 
 
All posts attached to Ditsobotla Sub-District Office, must be forwarded to: Private Bag X 12051, Lichtenburg, 2740, Attention to: Mr R Digoamaje. 
 
All posts attached to Matlosana Sub-District Office must be forwarded to: Private Bag A2, Klerksdorp, 2570, Attention to: Ms J Olivier. 
 
All posts attached to Witrand Hospital, must be forwarded to: Private Bag X 253, Potchefstroom, 2520, Attention to: Ms L Matsipe. 
 
All posts attached to Klerksdorp/Tshepong Hospital Complex must be forwarded to: Private Bag A14, Klerksdorp, 2570, Attention to: Ms L Mosia. 
 
All posts attached to General De La Rey Hospital Complex must be forwarded to: Private Bag X 12025, Lichtenburg, 2740, Attention to: Mr J Nontenjwa. 
 
All posts attached to Gelukspan District Hospital must be forwarded to: Private bag X 116, Mmabatho, 2735, Attention to: Ms K.E Mathe. 
 
All posts attached to Koster/Swartruggens Hospital must be forwarded to: Private Bag X 1002, Swartruggens, 2835, Attention to: Ms C Motsei. 
 
All posts attached to Moses Kotane Hospital must be forwarded to: Private Bag X 2, Sun City, 0316, Attention to: Ms M.M Marakalla. 
 
All posts attached to Joe Morolong Memorial Hospital, applications must be forwarded to: Private Bag X 4, Vryburg, 8600, Attention to: Mr M.S Montshiwagae.
 
All posts attached to Potchefstroom Hospital, applications must be forwarded to: Private Bag X 938, Potchefstroom, 2531, Attention to: Mr K Molatudi. 
 
All posts attached to Mafikeng Provincial Hospital must be forwarded to: Private Bag X 2031, Mafikeng 2745, Attention to: Mr M Legote. 
 
All posts attached to Bophelong Psychiatric Hospital must be forwarded to: Private Bag X 2031, Mafikeng, 2745, Attention to: Ms E Tau. 
 
All posts attached to Tswaing Sub-District Office must be forwarded to: Private Bag X 116, Mmabatho, 2735, Attention to: Mr M Chacha. 
 
All posts attached to Job Shimankana Tabane Hospital must be forwarded to: Private Bag X 82079, Rustenburg, 0300, Attention to: Ms S Magwaza. 
 
All posts attached to Madibeng Sub-District Office must be forwarded to: Private Bag X 5084, Brits, 2050, Attention to: Mr K Maluleke. 
 
All posts attached to Moretele Sub District Office must be forwarded to: Private Bag X 454, Hammanskraal, 0400, Attention to: Mr P Dikobe. 
 
All posts attached to Rustenburg Sub District Office must be forwarded to: Private Bag X 82055, Rustenburg, 0300, Attention to: Mr R Ramugondo. 
 
All posts attached to Ratlou Sub-District Office must be forwarded to: Private Bag A 208, Madibogo, 2772, Attention to: Ms T Baase. 
 
All posts attached to Mafikeng Sub-District Office, must be forwarded to: Private Bag X 116, Mmabatho, 2735, Attention to: Mr M.N Motlhabane. 
 
All posts attached to Ramotshere Moiloa Sub-District Office, must be forwarded to: Private Bag X 6338, Zeerust, 2865, Attention to: Mr D Moloto. 
 
All posts attached to Lekwa Teemane Sub-District Office, applications must be forwarded to Private Bag X 07, Bloemhof, 2660, Attention to: Ms T.H Ntsompe.
 
All posts attached to JB Marks Sub-District Office must be forwarded to: Private Bag X 1007, Ventersdorp, 2510, Attention to: Mr P Nape. 
 
All posts attached to: Moses Kotane Sub District Office must be forwarded to: Private Bag X 1045, Mogwase, 314, Attention to: Mr L Mokotedi. 
 
CLOSING DATE: 23 AUGUST 2024`],postedDate:"14/8/2024",iframe:"",uuid:"pcd32a996-bc29-4d80-92d1-1ccaeae46edd"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-joburg_orig.jpg",href:"https://www.govpage.co.za/city-of-johannesburg-metropolitan-municipality-vacancies-blog/city-of-johannesburg-vacancies5914232",title:"CITY OF JOHANNESBURG VACANCIES",content:[` 

CITY OF JOHANNESBURG
 
Group Corporate & Shared Services: Group Human Capital Management
6th Floor, B Block Metropolitan Centre, 158 Civic Boulevard, Braamfontein
PO Box 1049  Johannesburg, South Africa, 2000
Tel +27(0) 11 407 6111 - Fax +27(0) 11 339 1878
www.joburg.org.za
 `,`VACANCY CIRCULAR 075/2024 
 
This Vacancy is open to Employees of the City of Johannesburg and External Candidates 
 
CLOSING DATE: FRIDAY, 23 AUGUST 2024 
 
WE HAVE AN EXCITING CAREER OPPORTUNITY FOR: 
PERMANENT POSITION 
MANAGER: FLEET MAINTENANCE
 
APPLICATION REQUIREMENTS 
• Complete the online job application form and attach all relevant and updated documents (Certified Qualification/s/Certificates, ID, and CV). 
• Applicants should take note that they can be required to provide proof of original documents during the selection process. 
• You will be requested to provide a brief description of your work experience relating to the vacancy. 
• Applicants with membership to professional bodies need to provide a membership number and expiry date. 
• If you are an internal applicant, your employee number will be required. 
• Applicants are advised to use Google Chrome when applying for CoJ positions. 
 
DISCLAIMER
• The City of Johannesburg is currently recruiting and will not demand payment in any form for any job placement. All vacancies are advertised in newspapers and on the CoJ website. 
• The City of Johannesburg applies the principles of employment equity as per the National legislation and policy guidelines and will consider designated groups in line with these requirements. We are an equal-opportunity employer. 
• By submitting your application for a position at the City of Johannesburg, you are consenting that the personal information submitted as part of your application may be used for the purposes of the Recruitment and Selection and related process. 
• However, registering your CV and/or receipt and acknowledgment of any kind shall not be an indication that your application will be successful and/or lead to employment. 
• The City of Johannesburg shall not be liable for any damage, loss, or liability of whatsoever nature arising from your use of the job opportunity section of this website. 
• The City of Johannesburg reserves the right not to make an appointment. 
• Any misrepresentation or failure to disclose material information on the application form or CV will automatically disqualify your application.`,`MANAGER: FLEET MAINTENANCE 
Department: Group Corporate and Shared Services 
Branch: Group SHELA & FCM 
Designation: Manager: Fleet Maintenance 
Remuneration: R44 693,36 pm (basic salary, excluding benefits) 
Location: 27 Stiemens Street, JD House, Braamfontein 
 
Minimum Requirements: 
Grade 12 / NQF level 4. 
Bachelor’s degree in Transport, Logistics Management or Fleet related (NQF level 7). 
Certificate in Automotive Repair and maintenance or related. 
5 years’ functional experience within Fleet Management environments. 
2 years’ experience in fleet maintenance and operations. 
Experience or exposure in fleet bid process and contract management. 
 
Primary Function: 
Coordinate and provide oversight support activities for all vehicle managed maintenance contracts acquired for the City core department and entities. 
 
Key Performance Areas: 
Plan, coordinate and oversee vehicle maintenance database in liaison with City user departments and entities. 
Assess vehicle needs and utilization and advise users group on implications and processes to follow. 
Ensure that there is sufficient financial planning, budget, monitoring and reporting within the department in consultation with user department and entities. 
Manage the compliance to standard operation procedures with regards to maintenance of vehicle and equipment in line with original equipment Manufacturer (OEM) standards. 
Manage and promote safety of employees in the workplace and comply with all relevant legislation. 
 
Leading Competencies: 
Computer Literacy 
Communication (verbal and written) 
Leadership
Planning and organising 
People Management 
Innovative and analytical 
Presentation skills 
Time Management 
Decision making 
Multi-tasking
Interpersonal.
 
Core Competencies: 
Knowledge of the following: 
Risk Management 
Vehicle Maintenance Management 
Municipal Financial Management 
Project management 
Supply Chain Management. 
 
“All suitably qualified candidates are encouraged to apply and will be considered. The City of Johannesburg applies the principles of employment equity as per National legislation and policy guidelines and will consider designated groups in line with these requirements. Preference will be given to previously disadvantaged groups including those with disabilities. Appointments will be made in accordance with the approved Employment Equity Plan to promote its equitable representation in terms of race, gender and disability.” 
 
Please take note that only online applications will be considered. Please apply by using the following link below: 
https://share-eu1.hsforms.com/1D3BEb9SbSeKWDhFMxNKBjwew554
APPLY ONLINE VIA THIS LINK: www.joburg.org.za
ENQUIRIES ONLY: 
Contact Person: Samukelisiwe Yeni 
Tel No: 060 306 3452 
CLOSING DATE: FRIDAY, 23 AUGUST 2024 
 
Applicants are respectfully informed that, if no notification of appointment/response is received within six (6) weeks of the closing date, they must accept that their application was unsuccessful. By submitting your application for a position at the City of Johannesburg, you are consenting that the personal information submitted as part of your application may be used for the purposes of the Recruitment and Selection and related process. In terms of the Talent Acquisition Policy of the City of Johannesburg, you hereby consent to the following risk checks should your application be shortlisted: 
Credit Record, 
CV validation, 
Employment record verification, 
Criminal check, 
Identity validation.`],postedDate:"14/8/2024",iframe:"",uuid:"p02eec2bc-86d2-41b3-8a2d-c078d707b05e"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-tshwane_orig.jpg",href:"https://www.govpage.co.za/city-of-tshwane-metropolitan-municipality-vacancies-blog/city-of-tshwane-vacancies5963644",title:"CITY OF TSHWANE VACANCIES",content:[` 
CITY OF TSHWANE
 
JOB FORUM 17/2024
 
INTERNAL/EXTERNAL JOB FORUM
 
Our policy is to provide equal employment opportunities to all qualified persons without regard to race, religious belief, age, national origin, marital status, physical disability, HIV status, gender, social origin, culture, political opinion, conscience and sexual orientation. Persons with disabilities are encouraged to apply. The City of Tshwane is committed to employment equity. Preference may be given to appointable applicants from underrepresented designated groups in terms of the City of Tshwane Employment Equity Plan. The City retains the right not to make an appointment and to verify all information provided by candidates. 
 
Applicants should note that they will be required to provide proof of their qualifications or any other relevant documents (certified copies or original documents) during the selection process. Appointments will be subject to the positive verification of qualifications (from Grade 12 upwards). Any misrepresentation of qualifications or information on the application of an applicant, failure to present proof of claimed qualifications or fraudulent qualifications will disqualify a candidate for appointment. If it is an internal candidate, he/she may be disciplined for misconduct. 
 
The online system closes at midnight on the closing date and no late applications can be accepted. If you do not receive correspondence from our office within 21 days of the application’s closing date, please consider your application unsuccessful.
 `,`The City of Tshwane seeks to fill the positions in this job forum on a permanent basis.
 
The complete job forum can be accessed by visiting the City of Tshwane public website (https://www.tshwane.gov.za) and clicking on Documents and then Job Forums.
 
PLEASE APPLY ONLINE BY VISITING THE CITY OF TSHWANE PUBLIC WEBSITE AND CLICKING THE E-RECRUITMENT LINK
(LOCATED UNDER BOTH THE E-SERVICES AND THE CAREERS LINK)
Closing date: 21 August 2024
(Online applications close at midnight.)
 
General enquiries: LJ Moleli (012 358 4346)
Recruitment Centre
Upper Ground Level, Middestad Building
252 Thabo Sehume Street
Pretoria CBD
 
If you have trouble in registering your profile or applying for positions, send an email with a detailed description to: eRecruitHelp@tshwane.gov.za`,`SAFETY, SECURITY AND EMS
 
DEPARTMENT: TSHWANE METRO POLICE
Division: Generic
Section: Generic
Location: All Tshwane regions
Reference number COSA151-2024
WARRANT OFFICER (82 POSTS)
To be advertised Internal External
This position seeks to attract African female, African male, Coloured female, Coloured male, Indian female, Indian male, White female, White male
Job level T11 
Scale R359 952,00 – R499 920,00 per annum
Estimated remuneration package R518 224,91 – R696 373,84 per annum
 
Job purpose
To effectively execute all activities, operations and interventions related to all fields within the operational policing environment in order to ensure effective and efficient service delivery in the City of Tshwane metropolitan area by taking charge of operational shifts during the execution of operational duties as well as requested ad hoc duties
 
Appointment requirements
Grade 12
Registration as a Traffic Officer in terms of the National Road Traffic Act, 1996 (Act 93 of 1996)
Appointment as a member of a municipal police service in terms of the South African Police Service Act, 1995 (Act 68 of 1995)
At least four years’ relevant working experience
Must possess a valid Code B or EB driving licence
Must pass a medical and physical test as determined by the Chief of Police
No criminal convictions, record or pending criminal charges (excluding previous conviction(s) relating to political activities in the previous dispensation) and such a person shall allow their fingerprints to be taken
Must be prepared to take the Oath of Office of the Tshwane Metro Police Department
Applicants must be willing to be placed or deployed anywhere in Tshwane from time to time, as required and determined by departmental management. Thus, by applying for any of these positions, the applicants irrevocably accept this condition.
 
Personal attributes and/or competencies
Good verbal and written communication skills; adaptability and flexibility; leadership and people skills; independence regarding the execution of assigned
 
duties; ability to work under pressure; willingness to accept responsibility; ability to work with deadlines; ability to make sound decisions; innovative thinking skills; ability to pay attention to detail; good linguistic proficiency; physical and mental fitness; physical capability to operate under operational requirements and external conditions; ability to perform under physically threatening situations and social trauma; integrity; decisiveness
 
Primary functions
Perform law enforcement actions according to the departmental scorecard in terms of the enforcement of the National Road Traffic Act, 1996 (Act 93 of 1996), by-laws, patrols, roadblocks and information-driven operations
Perform crime prevention actions through visible policing
Attend and secure accident scenes
Attend to any incident on public roads to ensure the safe and free flow of traffic
Supervise and ensure compliance in terms of complaints (animals, noise, traffic-related, etc)
Execute duties professionally and efficiently according to all procedures and policies
Supervise road policing, crime prevention and municipal by-law actions in all areas of Tshwane
Supervise and assist with escort duties
Supervise all activities within a unit
Perform ad hoc duties when requested
 
 
SAP
S70011823; S70011827; S70011830; S70011845; S70011846; S70011847; S70011848; S70011849; S70011850; S70011851; S70011852; S70011853; S70011854; S70012629; S70012630; S70012631; S70012428; S70012429; S70012431; S70012438; S70012439; S70012440; S70012441; S70012442; S70012443; S70095913; S70095914; S70095915; S70095916; S70095917; S70012754; S70012755; S70012764; S70012771; S70013048; S70013049; S70013050; S70013055; S70013059; S70013060; S70013061; S70013062; S70013063; S70013064; S70013065; S70013066; S70013067; S70013278; S70013279; S70013280; S70095918; S70095919; S70095920; S70095921; S70095922; S70013340; S70013456; S70013462; S70013463; S70013464; S70013465; S70013466; S70013467; S70013468; S70013629; S70095947; S70013742; S70013744; S70013749; S70013752; S70013753; S70013921; S70013922; S70013923; S70013924; S70013925; S70013926; S70013927; S70013928; S70014378; S70095958; S70095959
 
New/natural attrition: Natural attrition
 
Enquiries: Dorah Letshela (012 358 5676)/Marga Boucher (012 358 5698)`],postedDate:"14/8/2024",iframe:"",uuid:"p8808467e-c4f3-45c6-9d3a-8fdbf17e5823"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/national-credit-regulator-ncr_orig.jpg",href:"https://www.govpage.co.za/national-credit-regulator-ncr-vacancies-blog/national-credit-regulator-ncr-vacancies7860878",title:"NATIONAL CREDIT REGULATOR (NCR) VACANCIES",content:[` 
NATIONAL CREDIT REGULATOR (NCR)
 
The National Credit Regulator (NCR) was established as the regulator under the National Credit Act 34 of 2005 (the Act) and is responsible for the regulation of the South African credit industry. It is tasked with carrying out education, research, policy development, registration of industry participants, i.e. credit providers, credit bureaux, alternative dispute resolution agents, payment distribution agents and debt counsellors, investigation of complaints, and enforcement of the Act.
The Act requires the NCR to promote the development of an accessible credit market, particularly to address the needs of historically disadvantaged persons, low income persons, and remote, isolated or low density communities. 
 `,`The NCR invites applications from suitable candidates for the following position:
 
SENIOR LEGAL ADVISOR: INVESTIGATIONS & ENFORCEMENT 
Paterson Grade: D-Lower 
Salary ranges from R405 200 – R769 900 
 
Requirements:
▪ The suitable candidate must hold a four-year legal degree (LLB / BProc) Degree and must be an admitted attorney or advocate with substantial commercial litigation experience. 
▪ The suitable candidate must have at least 5 years post admission litigation experience. 
▪ The suitable candidate must have knowledge of debt counselling practices and processes. 
▪ The suitable candidate must have a minimum of five (5) years relevant working experience in a financial, regulatory, or legal environment. 
▪ A minimum of two (2) years in a supervisory role will be an added advantage. 
▪ Experience working within the credit industry will serve as an added advantage. 
▪ Insolvency procedure knowledge and experience will serve as an added advantage. 
 
Duties:
▪ The successful candidate will deal with litigation matters, which will include complex and contentious matters, on behalf of the Investigations and Enforcement Department within the National Consumer Tribunal, High Court, SCA and Constitutional Court. 
▪ Assessment of investigation reports and evidence 
▪ Drafting of pleadings and/or the necessary enforcement action on behalf of the NCR 
▪ Representation and litigation of matters on behalf of the NCR and the Department at the National Consumer Tribunal and/or Courts. 
▪ Provide support to the Investigations and Enforcement Manager in ensuring the department achieves its targets. 
▪ Handle complex complaints and enquiries referred by the Manager of the Department / Exco as and when required. 
▪ Oversee the enforcement team (Junior and – Legal Advisors) by providing technical inputs as well as monitoring performance. 
▪ Review of drafts and pleadings submitted by the enforcement team. 
▪ Providing guidance/training to inspectors, legal advisors, internal and external stakeholders. 
▪ Liaising with internal and external stakeholders. 
▪ Contract Management and review of performance in line with service level agreements. 
▪ Provide effective legal advice in respect of the NCA and other relevant legislation. 
▪ Weekly, monthly, and quarterly report compilation of departmental performance. 
▪ Assist with development and implementation of departmental policies and procedures. 
▪ Legal Risk detection. 
▪ Participate in appropriate committees as and when required and provide the necessary legal inputs. 
▪ Draft and review Terms of Reference, Memorandums, Contracts, Service Level Agreements, Tenders, Settlement Agreements and Opinions. 
▪ Conduct research on legal matters impacting the NCA to ensure improved regulatory dispensation. 
▪ Budget monitoring. 
▪ Investigations and Report compilation when required to do so. ▪ Ensure timeous delivery of agreed outcomes 

Technical Skills:
▪ Knowledge of the National Credit Act and civil court procedures.
▪ At least 5 years’ post admission litigation experience.
▪ Good understanding of the South African Consumer Credit Market.
▪ Supervisory skills.
▪ Leadership skills.
▪ Excellent writing ability.
▪ Evaluative and problem-solving skills.
▪ Computer literate and administrative skills.
▪ Strong interpretative skills.
▪ Research and presentative skills.
▪ Contract Management Skills.
▪ Time Management.
 
Personal Competencies:
• Presentable, professional, and confident while being diplomatic and tactful.
• Critical thinking.
• Dependable.
• Ability to make decisions, give direction, provide solutions, take accountability, and accept criticism or corrections.
• Must be able to work in a team-oriented environment, manage conflict and promote teamwork.
• Focused and disciplined as well as results driven.
• Well-spoken with good communication and listening skills.
• Flexible and innovative.
• Negotiation skills.
• Must have strong personal and professional ethics with high levels of integrity.
• Must be able to work under immense pressure.
• Must be willing to travel if and when required.
• Supportive skills.
• Strong service oriented.`,`Closing Date: 20 August 2024
 
The National Credit Regulator is an equal opportunity organisation which offers competitive market related packages.
 
Suitable persons should send a detailed CV quoting the relevant reference number to: EST-recruitment@ncr.org.za
 
Correspondence will only be entered into with short listed candidates. The National Credit Regulator reserves the right not to make an appointment.
 
Ref: SLA/8/24`],postedDate:"14/8/2024",iframe:"",uuid:"p94e26e95-9546-4298-a8e6-a48e33a0cbb2"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ecdc_orig.jpg",href:"https://www.govpage.co.za/eastern-cape-development-corporation-ecdc-vacancies-blog/eastern-cape-development-corporation-ecdc-vacancies6015075",title:"EASTERN CAPE DEVELOPMENT CORPORATION (ECDC) VACANCIES",content:[` 
EASTERN CAPE DEVELOPMENT CORPORATION (ECDC)
 `,`PROGRAM MANAGER- INFRASTRUCTURE SERVICES AND FACILITIES MANAGEMENT 
EAST LONDON 
CONTRACT FOR 12 MONTHS 
 
KEY DUTIES AND RESPONSIBILITIES 
The incumbent will be engaged under the incubation project/ programme framework management responsible for initiation, planning and implementation of allocated infrastructure projects for National, Provincial and municipal clients. The role will entail management of performance of project team to ensure that projects are implemented applying the principles of project management which includes quality, timeframes, budget parameters, consultant and contractor service delivery agreements. Ensure compliance with any relevant and applicable legislation. Prepare individual project reports on status, expenditure, variations, delays, etc on allocated projects and submit to the Snr: Programme Manager Infrastructure and Facilities Services. Continuous monitoring and evaluation of project performance to ensure delivery of project objectives and retention of existing clients. Risk management to identify and mitigate risk for project success. 
 
MINIMUM REQUIREMENTS 
Relevant bachelor’s degree or equivalent in-Built Environment, professional accreditation will an added advantage (Quantity Surveying, Architecture, Engineering). 
At least 7 years relevant experience in the built environment on infrastructure projects and/or facilities maintenance / management of which 3 years should be at supervisory or consultancy level. 
An in-depth understanding of facilities management and/ or Infrastructure programme management, advanced project and maintenance management, sound understanding of Health, Safety and Environmental legislation and its application to the built environment; as well as working with multi-disciplinary teams is a pre-requisite. 
The incumbent will be engaged under the incubation / project programme framework 
 
This is a contract position for 12 months, and the successful candidate will be subjected to signing of a performance contract and verification of qualification. If you have not been contacted within eight (8) weeks after the closing date of the advertisement, please regard your application as unsuccessful. 
 
 
In making these appointments, the ECDC reserves the right to apply the principles enshrined in the Employment Equity Act, its policies, and plans. 
 
Please send your detailed CV and certified copies of qualifications to The Human Resources Department 
Tel: (043) 704 5620 
Email: humanresources@ecdc.co.za
 
Closing date: 23 August 2024`,`HEAD: LEGAL, GOVERNANCE AND COMPLIANCE 
FIVE (5) YEAR CONTRACT: GRADE 21 – (TOTAL COST TO COMPANY) 
 
The incumbent shall be responsible for the following: 
The role entails overseeing and directing the management of the Corporation’s legal, governance and compliance function. The Head shall be responsible for providing overall strategic leadership for the Corporation relating to planning, resourcing, execution, monitoring and reporting for functions falling under the legal, governance, and compliance portfolio. In relation to legal services, the role entails the management of the Corporation legal services function in a manner that effectively prevents, mitigates and neutralises legal risks and legal matters in a cost-effective manner. In relation to governance, the role entails provision of direction and oversight relating to the company secretariat services, risk and ethics management, as well as fraud prevention and anti-corruption measures. With respect to the compliance function, the role entails directing and managing the overall compliance obligation of the Corporation, ensuring compliance planning, monitoring and reporting with the ultimate objective of safeguarding compliance with relevant laws and regulations. 
 
MINIMUM REQUIREMENTS 
A bachelor’s degree in law and a relevant post graduate degree at master’s level or legal profession accreditation particularly admission as an attorney or advocate. 
A minimum of 10 years working experience in professional legal services practice and/or: management or governance environment involving company secretariat or legal services of which 5 years must be at senior management level. 
An experience of working in a public entity environment will be an added advantage. 
 
This is a five-year contract position, and the successful candidate will be subjected to signing of a performance contract and verification of qualification. If you have not been contacted within eight (8) weeks after the closing date of the advertisement, please regard your application as unsuccessful. 
 
 
In making these appointments, the ECDC reserves the right to apply the principles enshrined in the Employment Equity Act, its policies, and plans. 
 
Please send your detailed CV and certified copies of qualifications to 
The Human Capital Department 
Tel: (043) 704 5783 
Email: humanresources@ecdc.co.za
 
Closing date: 05 August 2024`],postedDate:"14/8/2024",iframe:"",uuid:"p69e82ac7-b296-4442-9594-9de0530b6f5a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/eastern-cape-liquor-board_orig.png",href:"https://www.govpage.co.za/eastern-cape-liquor-board-eclb-vacancies-blog/eastern-cape-liquor-board-eclb-vacancies1446823",title:"EASTERN CAPE LIQUOR BOARD (ECLB) VACANCIES",content:[` 
EASTERN CAPE LIQUOR BOARD (ECLB)
 `,`CALL FOR NOMINATIONS TO SERVE ON THE AUDIT COMMITTEE OF THE EASTERN CAPE LIQUOR BOARD 
 
The entity wishes to invite nominations for the appointment to the Audit Committee in terms of section 77 of the Public Finance Management Act No. 1 of 1999.  One vacancy currently exists in the ECLB Audit Committee that needs to be filled to assist the entity to comply with the PFMA and related legislative framework.
 
Requirements: Nominees must be in possession of a relevant three-year degree/ qualification in Information and Communication Technology. A postgraduate degree/qualification will be an added advantage.
 
Experience and Skills: Public sector experience ●Corporate governance & financial management experience ●Understanding of the role of the public entity Boards ●Experience in risk management practices ●Understanding of internal controls ● Understanding of the PFMA, Treasury Regulations and related legislation governing public entity administration ●Understanding the role of internal and external auditors ●Understanding Public Service Regulations framework. ●Extensive expertise in ICT governance, strategy & its implementation, ICT investment as well as monitoring the management and mitigation of ICT risks. ●Knowledge and understanding of King IV Report on Corporate Governance. ●Well-developed business acumen and leadership skills. ●Excellent communication skills (verbal and written).
 
The Audit Committee shall meet at least once a quarter to regulate and discharge its responsibilities as contained in the charter outlining its formal terms of reference. The responsibilities of the Audit Committee include to review, inter alia, the following: The effectiveness of the internal controls including computerised information systems control and security, the quality of financial and other management information produced to ensure integrity and reliability, as well as any related significant findings and recommendations of internal and external auditors, together with Management’s responses thereto ● The effectiveness of the internal audit function ● The risk areas of the entities’ operations to be covered in the scope of internal and external audits ●The adequacy, reliability and accuracy of the financial information provided to management and other users of such information ● The entities compliance with legal and regulatory provisions ● The activities of the internal audit function, including its annual work programme, coordination with the external auditors, the reports of significant investigations, etc.
 
Term of office and remuneration: The term of appointment is for a 3 year period. Members of the Audit Committee are remunerated in terms of the tariffs that have been set by the DEDEAT for the ECLB.`,`The ECLB is an equal opportunity organization. Nominations are to be submitted in the form of a detailed CV, accompanied by certified copies of qualifications, certificates and identity documents. Failure to submit the required documents will result in the application not being considered. 
 
Government employees interested in serving in the ECLB Audit Committee must submit an appropriate approval allowing them consideration for the filling of this vacancy.
 
Nominations can be hand delivered at: The Eastern Cape Liquor Board offices situated at: Shop 10 Beacon Bay Crossing; Beacon Bay; East London.
 
OR
Emailed to: recruitment@eclb.co.za
 
For further details contact the Senior Manager Corporate Services Ms. L.L. Tini on 043 700 0900.
 
THE BOARD RESERVES THE RIGHT NOT TO MAKE AN APPOINTMENT.

Nominations close on Wednesday, 21 August 2024.
 
NB: Due to the number of applications expected only shortlisted candidates will receive correspondence, the Board would however like to thank you for showing interest.`],postedDate:"14/8/2024",iframe:"",uuid:"p1da236af-7c21-4f55-89cb-10c225c207d4"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/mega-logo_orig.png",href:"https://www.govpage.co.za/mpumalanga-economic-growth-agency-mega-vacancies-blog/mpumalanga-economic-growth-agency-mega-vacancies2454279",title:"MPUMALANGA ECONOMIC GROWTH AGENCY (MEGA) VACANCIES",content:[` 
MPUMALANGA ECONOMIC GROWTH AGENCY (MEGA)
  
EXTERNAL ADVERTISEMENT
 `,` 
The Department of Economic Development & Tourism (DEDT), in collaboration with the Department of Trade, Industry and Competition (the ‘Dtic”), are in the process of implementing the Nkomazi Special Economic Zone (NSEZ) at Komatipoort in Mpumalanga. The NSEZ happens to be one of the strategic projects driven by the Mpumalanga Government not only to expand the industrial base of the provincial economy but also to, among other things,
▪ Stimulate robust inclusive economic growth and create more job opportunities for the people of Mpumalanga and beyond;
▪ Increase the capabilities and capacity to promote export and services into targeted high growth markets such as the African Continental Free Trade Area, BRICS, etc.; and
▪ Attract foreign direct investment and domestic inflows into Mpumalanga Province.
 
Currently, DEDT has assigned the Mpumalanga Economic Growth Agency to, inter alia, recruit suitably qualified individuals to fill in the following positions on a Fixed-term contract of five (5) years:
 
NOTE: Dear applicant, we regret to inform you that the position of Chief Executive Officer (CEO ref: NKOSEZ 2024/01) that was published on the 11th of August 2024, in the Sunday Times Newspaper has been retracted/withdrawn. Please accept our sincerest apologies for any inconvenience this may have caused.
All the other information remains the same.
 
 `,` 
 
CHIEF FINANCIAL OFFICER 
Reference code NKOSEZ 2024/02
Type of employment 5 YEAR CONTRACT
 
Purpose
To formulate and execute SEZ’s financial strategy, policies and guidelines, supports the commercial success, compliance to PFMA and related finance principles as well as managing the introduction of financial best practice’s governance, accounting and treasury standards per the Public Finance Management Act that will ensure SEZ’s long-term financial viability and sustainability.
 
Required minimum qualification
• Chartered Accountant (CA) and MBA degree or equivalent qualification.
• Leadership Certificate / Tax and Managerial Finance will be an added advantage.
 
SALARY Market-Related
 
Required minimum work experience
• 10 years senior management experience in a team-oriented environment functioning as Head of Finance/Chief Financial Officer.
• Strong analytical and problem-solving skills.
• Excellent presentation and reporting skills.
• Ability to communicate in a clear and confident manner.
 
Key Performance Areas
• Develop and ensure the implementation of the financial strategy of the Nkomazi SEZ.
• Develop and implement financial management systems.
• Oversee the finance function by ensuring legislative compliance and ensure accurate and qualitative financial reporting.
• Safe-guard the assets of the company by ensuring adequate policies are in place to manage risks related to the potential loss of assets.
• Secure funding from stakeholders (the dti, Provincial Treasury) based on business requirements.
• Oversee the Supply Chain Management (SCM) function of the company to ensure compliance to policies, procedures and the SCM Legislative Framework (PPPFA).
• Oversee the preparation of financial statements in accordance with applicable accounting frameworks (GRAP/IFRS)
• Ensure compliance to PFMA and other applicable legislation e.g. SEZ Act, Companies Act and Treasury Regulations.
• Ensure that all issues of governance are adhered to, including but limited to obtaining clean audit report always.
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Quality orientation;
• Building trust;
• Problem solving;
• Client and customer service orientation;
• Resilient contributor;
• Ethical behavior.
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 
 
EXECUTIVE MANAGER: TRADE AND INVESTMENT 
Reference code NKOSEZ 2024/03
Type of employment 5 YEAR CONTRACT
 
Purpose
To market Nkomazi SEZ as a trade and investment opportunity to local and international investors to achieve set financial target.
 
Required minimum qualification
• Honours degree in Economics or related/Finance or International Trade with a postgraduate qualification in Trade and Investment.
• MBA degree, Masters in Economics or related will be an added advantage. 
 
SALARY Market Related
 
Required minimum work experience
• 10 years as a manager in Trade and Investment / Foreign & Direct Investments or related field.
• 5 years of this must have been as a Specialist in Trade and Investment.
• Proven track record in managing a similar-type organization.
 
Key Performance Areas
• Provide strategic leadership to the Trade and Investment Promotion department.
• Develop a business plan and compelling value proposition to attract local and foreign trade partners.
• Provide direction to Nkomazi SEZ and the Board on local and international trade and investment markets.
• Establish standards for trade and investment opportunities to be pursued;
• Implement governance measures to ensure trade and investment division operates in an ethical manner.
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Networking skills;
• Presentation (verbal and written);
• Global awareness;
• Persuasiveness/selling skills;
• Ethical behaviour.
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 
 
 
 
EXECUTIVE MANAGER: CORPORATE SERVICES 
Reference code NKOSEZ 2024/04
Type of employment 5 YEAR CONTRACT
 
Purpose
To provide strategic leadership to the Corporate Services of Nkomazi SEZ which include all aspects of HRM, Information Technology, Communications and Marketing and administrative functions to ensure organisational effectiveness.
 
Required minimum qualification
• Business Management Degree / Bachelor’s Degree in HRM/ ICT/Communications & Industrial Psychology or related field.
• Related post-graduate degree, an MBA will be an added advantage 
 
SALARY Market Related
 
Required minimum work experience
• 10 years in Corporate Services management or related field;
• 3 Years in Senior Management role in Human Capital Management, Information Communications Management.
 
Key Performance Areas
• Provide strategic leadership to the Corporate Services division;
• Implement measures to control business risks associated with physical security, real estate matters and other risk areas concerning the business;
• Manage the department’s financial budget;
• Capacitate administrative staff to guarantee smooth business operations and the provision of accurate and timely information;
• Build sound functional relationships with key stakeholders’ (e.g. government, suppliers, and local communities) to ensure that the Corporate Services objectives are attained;
• Create a service-oriented culture within the department
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Customer Service Orientation;
• Verbal and written communication;
• Resilient Contributor;
• Problem-solving.
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 `,` 
 
 
 
 
EXECUTIVE MANAGER: INFRASTRUCTURE DEVELOPMENT
Reference code NKOSEZ 2024/05
Type of employment 5 YEAR CONTRACT
 
Purpose
To provide strategic leadership to assist the Nkomazi SEZ to peruse its main activity of infrastructure development by ensuring electrical, water and waste treatment infrastructure, fencing and waste to energy projects as well as the required assistance to potential investors in top structure development to suit their specific needs. Engineering and project management functions to ensure effectiveness in the infrastructure delivery program.
 
Required minimum qualification
• BSC Engineering or Bachelor’s Degree in Built Environment or related field and a post-graduate degree will be an added advantage. 
 
SALARY Market Related
 
Required minimum work experience
• 8 years in Engineering/Built Environment Management or related field and 3 years have been occupying a Senior Manager role in Engineering or Project Management.
• Proven track record in managing of complex infrastructure development projects.
• Managing multiple engineering and project management functions and complex projects.
• Governance and risk control in an engineering and built environment.
 
Key Performance Areas
• Provide strategic leadership to the infrastructure development division.
• Excellent knowledge and understanding of all Engineering and Project Management related legislation and compliance requirements as well as acts and guidelines requirements for the implementation of major civil works- infrastructure development.
• Understanding of Nkomazi SEZ strategy and business models and extensive knowledge of the built environment governance policies and procedures.
• Knowledge of the Public Finance Management Act (PFMA) and Treasury regulations as well as advanced knowledge and understanding of Engineering systems and practices.
• Good knowledge and understanding of Nkomazi SEZ infrastructure demands and opportunities, systems and processes and Risk Management
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Technical and Professional Knowledge
• Quality orientation
• Financial management
• Project implementation and problem solving
• Presentation (verbal and written)
• Ethical behavior.
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 
 
SENIOR MANAGER: LEGAL SPECIALIST 
Reference code NKOSEZ 2024/06
Type of employment 5 YEAR CONTRACT
 
Purpose
To provide legal services to the Nkomazi SEZ by providing legal support on commercial transactions, litigation, conveyancing, corporate governance and supply chain management as well as labour matter to ensure the Entity adheres to prescribed legal prescripts.
 
Required minimum qualification
• LLB Degree or related postgraduate qualification.
• Must be an admitted attorney or member of the bar of advocates.
• A LLM Degree will be an added advantage. 
 
SALARY Market-Related
 
Required minimum work experience
• 6-8 years in a Corporate or Commercial Law firm and practicing as a lawyer in these fields of which 5 years must have been in legal services as a Specialist or Manager of the legal services division.
• Proven track record in managing legal requirement in a similar-type organization.
 
Key Performance Areas
• Provide strategic leadership to the Legal Services Division.
• Develop legal prescripts for the operations of the Nkomazi SEZ.
• Provide direction to Nkomazi SEZ and the Board on legal requirements pertaining to the operations and activities of the Nkomazi SEZ.
• Establish legal standards for operations to be pursued and implement legal governance measures to ensure the SEZ Entity operates in an ethical and legally sound manner.
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Problem solving;
• Presentation (verbal and written);
• Global awareness;
• Customer service orientation;
• Ethical behavior.
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 
 
CIVIL ENGINEER 
Reference code NKOSEZ2024/03
Type of employment 5 YEAR CONTRACT
 
Purpose
Implement, monitor and reports on all civil engineering aspects of various projects. Make recommendations regarding material, vendor and sub-contractor selection. Approves and maintains quality control of civil engineering drawings and prepares man-hour estimates and project schedules.
 
Required minimum qualification
• BSC Civil Engineering Degree or related postgraduate qualification.
• Must be a certified engineer.
• A postgraduate qualification will be an added advantage. 
 
SALARY Market-Related
 
Required minimum work experience
• 4-6 years in an Engineering environment and practicing as an engineer in a civil engineering environment.
• Proven track record in managing engineering requirement in a similar-type organization.
 
Key Performance Areas
• Knowledge and understanding of property development industry and applicable legislation, codes, standards and regulations Knowledge and understanding of project and programme management especially within the built environment Understanding of the technical requirements relating to building design.
• Establish engineering standards for infrastructure operations to be pursued and implement engineering measures to ensure the SEZ Entity operates in an environment of engineering excellence.
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• System agility;
• Customer services provider;
• Programme and project management;
• Problem solving;
• Presentation (verbal and written);
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 `,`PROJECT MANAGER 
Reference code NKOSEZ2024/08
Type of employment 5 YEAR CONTRACT
 
Purpose
To ensure that projects are completed within the time and cost limit as well as to the agreed specifications. Also responsible for determining location of site as well as site build and completion. This role coordinates the work done by technicians, supervisors and project administration ensuring that the detailed engineering layout is delivered in an economically fashion. The role is the key contact with clients and is the first level of escalation.
 
Required minimum qualification
• A Project Management qualification supported by a related qualification that focuses on the Engineering or Built Environment. 
 
SALARY Market Related
 
Required minimum work experience
• 6-8 years in a project management environment of which 2-3 years must have been as a Project Manager for a civil engineering project.
• A proven track record in project managing complex infrastructure projects in a similar-type organization will be an added advantage.
 
Key Performance Areas
• Provide project administrative support by developing and analyzing tender documentation.
• Ensure consultants and contractors remain within the project scope and cost as prescribed by the Bill of Quantities for each project.
• Monitor project implementation progress, conduct site visits and have regular technical meetings with various project players.
• Update Executive management on project implementation progress and advice on best practice project implementation methods and standards.
• Establish project management systems and standards for infrastructure operations to be pursued and implemented to ensure the SEZ Entity operates in an ethical and legally sound manner while executing infrastructure projects.
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Problem solving;
• Project reporting
• Presentation (verbal and written);
• Project lead and coordination;
• Customer service orientation;
• Ethical behavior.
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 
 
ICT SPECIALIST 
Reference code NKOSEZ2024/09
Type of employment 5 YEAR CONTRACT
 
Purpose
To provide a secure platform for the Nkomazi SEZ’s business operations and management of the ICT network, infrastructure and systems whilst ensuring that the associated systems preform accordingly. Also provide the required technical leadership in the development of the medium and long term strategic objectives and management of Nkomazi SEZ‘s IT infrastructure and systems
 
Required minimum qualification
• A B.SC degree in Computer Science / Information Technology / B Tech in Information Technology or related qualification is the minimum required qualification.
• While a honours degree in Computer Science or Information Technology or related field will be an added advantage 
 
SALARY Market-Related
 
Required minimum work experience
• 4-6 years as a manager in Information Communication Technology environment of which
• 5 years must have been in ICT programming, systems infrastructure, ICT configuration and or, data management.
• A proven track record in managing complex ICT projects in a similar-type organization will be an added advantage.
 
Key Performance Areas
• Overseeing Nkomazi SEZ‘s ICT infrastructure design, and implementation.
•Collaborating with Nkomazi SEZ‘s executive management and other relevant stakeholders to ensure IT systems are aligned with Nkomazi SEZ‘s business requirements and translating Nkomazi SEZ‘s business requirements from different divisions into specific IT solutions.
• Develop and manage IT Security strategy and address business continuity and assess and provide Nkomazi SEZ‘s specific IT needs for the design, development and management of the recovery back-up of data and for protection against any security threat issues.
• Evaluate and mitigate the risks to the Nkomazi SEZ business that can be caused by security threats to information and IT systems; and implement compliance of information security systems, standards, process and methods; namely Systems for access control, beam doors, cameras, provincial key points, etc.
• Provide specialized Network Management advisory services to ensure accurate service level management and ensure the implementation of approved Network Management System policies, procedures and standards;
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Problem solving;
• Project reporting;
• Presentation (verbal and written);
• Project lead and coordination;
• Customer service orientation;
• Ethical behavior;
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.
 
 
 
 
 
EXECUTIVE MANAGER: BUSINESS DEVELOPMENT AND AGRO-PROCESSING 
Reference code NKOSEZ2024/10
Type of employment 5 YEAR CONTRACT
 
Purpose
The Business Development and Agro-Processing Specialist position, as part of a team of technical consultants working in collaboration with technical partners and government, will develop a series of policy papers to identify short, medium and longer-term strategies for the sector, as well as the development of market-driven action plans for Agro-processing, including key linkages to food safety, value addition, infrastructure investment and export market development pertaining to the development and diversification of the Nkomazi SEZ
 
Required minimum qualification
• A Bachelor’s degree in Agricultural Economics / Marketing or Business Management or related qualification is the minimum required qualification
• while a Masters degree in Agricultural Economics / marketing or Business Management will be an added advantage 
 
SALARY Market Related
 
Required minimum work experience
• 6 – 8 years’ experience in farm management and economic analysis with extensive experience in small to medium-scale agro-enterprise management.
• Extensive practical experience in the domestic agro-processing industry.
• Experience with externally funded development programs would be desirable, preferably with experience in market-oriented projects.
 
Key Performance Areas
• Document and map ongoing work in the Agro-processing sector both nationally and regionally, highlighting partnership opportunities for short, medium and longer-term, conducting targeted interviews with key government and private sector partners for validation.
• Review government and private sector investments in agro-processing to determine lessons learned and areas where the Nkomazi SEZ can build upon.
• Work closely with specialists in Climate Smart Agriculture, Food Safety, Resilience, Food Systems Development, Agri-Business, Food and Nutrition Security, and others to ensure implementation of inter -sectoral linkages and requirements.
• Develop Agro-processing components of larger programme proposals and strategies and develop concepts and proposals for the implementation of SMME projects within the various agro-processing value chains.
• Explore opportunities for partnerships with international agro-business and investments.
• Review the agro-inputs market to identify market gaps in technology and investment, indicating strategies to fill gaps in availability of, and quality of, agricultural inputs and technology – highlighting options for technical innovations including Return on Investment and Value For Money for various subsectors, i.e. like sugarcane, dairy, livestock; horticulture and Infrastructure investments to promote the Nkomazi SEZ.
• Identify key specialist in the country and other regions for further potential collaboration on agro-processing for export.
 
Competencies Required
The preferable candidate should display the following competencies at an advanced level:
• Problem solving;
• Project reporting;
• Presentation (verbal and written);
• Project lead and coordination;
• Customer service orientation;
• Ethical behavior;
 
Expectations
The successful candidate will:
• Enter into an Employment and Performance Contract for 5 years.
• Be subjected to vetting and screening and he/she will be subjected to a Competency assessment
• Further be subjected to vetting and screening.`,`SUBMISSION OF APPLICATIONS:
Interested candidates should submit an application stating reference number, a detailed CV, and copies of qualifications and identity document to Human Capital Management e-mail address: recruits@mega.gov.za or hand-deliver to Human Capital Management, MEGA Office Park, 02 Eastern Boulevard, Riverside Mbombela.
 
REMUNERATION
Nkomazi SEZ offers competitive remuneration and benefits package that may be negotiable based on qualification, experience and evidence of current remuneration package of the successful candidate
 
Enquiries: Mr. Mthokozisi Manzini, 013 492 5818, or Elsie Ramodike
 
Closing date for applications: 23 August 2024 @ 16h00.
No late application will be considered
 
Equity Statement: Preference will be given to suitably qualified applicants that will assist the SEZ to be representative of the demographics of the province. Applicants who have not been contacted within 60 days of the closing date may assume that their applications have been unsuccessful.`],postedDate:"14/8/2024",iframe:"",uuid:"pf7b79d41-8093-4005-b826-b03cbc676651"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/tikzn_orig.jpg",href:"https://www.govpage.co.za/trade-and-investment-kwazulu-natal-tikzn-vacancies-blog/trade-investment-kwazulu-natal-tikzn-vacancies8533691",title:"TRADE & INVESTMENT KWAZULU-NATAL (TIKZN) VACANCIES",content:[` 
TRADE & INVESTMENT KWAZULU-NATAL (TIKZN)
 `,` 
 
INTERNAL/EXTERNAL VACANCY ADVERTISEMENT
 
Business Unit: Strategy and Operations
PERFORMANCE MONITORING AND EVALUATION OFFICER
Reference: TIKZN/09/2024
Reporting to: Executive Manager: Strategy and Operations
Job Grade: C3
Duration: Permanent
 
Brief Outline of Duties: 
The PM&E specialist will be responsible for implementing and maintaining the performance activities for the organisation, assisting the Strategy and Operations Executive in preparing annual and quarterly reports on the organisation’s performance progress. The specialist is also responsible for working with the organisation’s business units in the collection and verification (through the internal audit process) the performance data and supporting documentation provided by the business unit to ensure its accuracy and validity. 
 
KEY PERFORMANCE AREAS (Among others) 
1. Assist in the development of the performance systems and tools for the organization. 
2. Assist in the management of the Annual performance process including the compiling of APP, AOP and any other related documentation. 
3. Implementation and Monitoring of performance management processes 
4. Performance Data Management 
5. Impact Measurement 
6. Drive Continuous Improvement 
 
JOB SPECIFICATION 
Educational and /or Technical Competencies: 
A bachelor’s degree in business management and/or Administration. 
 
Experience:
Must have 4 - 5 years’ experience in managing organisational performance strategy and operational plans. 
 
PROFESSIONAL COMPETENCIES 
Knowledge of government-wide programme on planning, monitoring and evaluation. 
Basic knowledge of Provincial growth and development strategy and plan. 
Knowledge of the National Development plan. 
Knowledge of the PFMA. 
Good understanding organisational performance management. 
Proficiency in monitoring and evaluation methodologies, data analysis tools, and statistical software. 
Strong analytical skills and attention to detail for interpreting complex data sets. 
Excellent communication and interpersonal skills for engaging with stakeholders and presenting evaluation results effectively. 
Ability to work independently, prioritize tasks, and meet deadlines in a fast-paced environment. 
Commitment to continuous learning and professional development in the field of monitoring and evaluation. 
 
 
Closing date: 16 August 2024 @ 00h00. 
 
To apply for this position, kindly submit your motivation letter, curriculum vitae and copies of educational qualification. Application for the position can be emailed to vacancies@tikzn.co.za.
 
TIKZN subscribes to the principles of employment equity in its recruitment processes. People with disability are encouraged to apply for this position. Prospective employees will be subjected to competency assessments and background checks as part of the selection process. 
 
NB: Applicants who have not received any correspondence from us within three (3) months of the closing date can consider their applications unsuccessful. 
 
(PLEASE QUOTE THE POSITION NAME AND REFERENCE NUMBER ON YOUR APPLICATION SUBJECT LINE)
 
 
 
 
 `,`INTERNAL/EXTERNAL VACANCY ADVERTISEMENT
 
Business Unit: Knowledge Management
INFORMATION TECHNOLOGY (IT) SPECIALIST
Reference: TIKZN/08/2024
Reporting to: Executive Manager: Knowledge Management
Job Grade: C4
Duration: Permanent
 
Brief Outline of Duties: 
To manage and maintain secure and efficient IT systems that support business processes, thereby assisting the organisation to achieve its overall strategic business objectives. 
 
KEY PERFORMANCE AREAS (Among others) 
Develop and manage IT plans, policies, and procedures. 
Manage IT related systems. 
Implement information security and disaster recovery procedures. 
Implement and monitor cybersecurity measures in the organization. 
Technical Support and fault resolution. 
ICT Asset control administration. 
 
JOB SPECIFICATION 
Educational and /or Technical Competencies: 
A bachelor’s degree in Information Technology or relevant IT qualification 
 
Experience:
3 years’ experience in the information technology environment.
 
PROFESSIONAL COMPETENCIES 
Good understanding of systems and networking. 
Knowledge of Protection of Personal Information Act. 
Knowledge of cybersecurity. 
Good understanding of ICT policies and legislation. 
Ability to support and guide staff. 
Good communication skills. 
Ability to work in a diverse environment and resolve conflicts. 
 
 
Closing date: 16 August 2024 @ 00h00. 
 
To apply for this position, kindly submit your motivation letter, curriculum vitae and copies of educational qualification. Application for the position can be emailed to vacancies@tikzn.co.za.
 
TIKZN subscribes to the principles of employment equity in its recruitment processes. People with disability are encouraged to apply for these positions. Prospective employees will be subjected to competency assessments and security vetting as part of the selection process. 
NB: Applicants who have not received any correspondence from us within three (3) months of the closing date can consider their applications unsuccessful. 
 
(PLEASE QUOTE THE POSITION NAME AND REFERENCE NUMBER ON YOUR APPLICATION SUBJECT LINE)`,`INTERNAL / EXTERNAL ADVERT
 
Business Unit: Corporate Services
RECEPTIONIST
Reference: TIKZN/10/2024
Reporting to: General Manager: Marketing & Communications
Job Grade: B2
Duration: Permanent
 
Brief Outline of Duties: 
To ensure professional management and running of the TIKZN reception area, which includes the operation of the switchboard as well as office administration activities as and when necessary. 
 
KEY PERFORMANCE AREAS (Among others) 
Front office management. 
Service provider liaison. 
Office administration. 
Boardroom booking management.
 
JOB SPECIFICATION 
Educational and /or Technical Competencies: 
National Senior Certificate / Matric. 
 
Experience:
A minimum of two (2) years’ reception or customer service experience and experience on operating a switchboard is essential. 
 
PROFESSIONAL COMPETENCIES 
Business language proficiency. 
General office practices. 
Professionalism
 
PERSONAL ATTRIBUTES 
Organisational and Planning Skills. 
Good verbal and written communication skills. 
Computer Literate at an intermediate level. 
Professional manner. 
Good interpersonal skills. 
Good Telephonic Etiquette. 
 
CLOSING DATE: 16 August 2024 @ 00h00 
 
To apply for this position, kindly submit your motivation letter, curriculum vitae and copies of educational qualification. Application for the position can be emailed to vacancies@tikzn.co.za
 
Equity Statement 
TIKZN is committed to Employment Equity when recruiting internally and externally and will ensure our recruitment process is in line with achieving our Employment Equity goals. People with Disabilities are encouraged to apply. Prospective employees will be subjected to competency assessments and background checks as part of the selection process. 
 
NB: Applicants who have not received any correspondence from us within three (3) months of the closing date can consider their applications unsuccessful. 
 
(PLEASE QUOTE THE POSITION NAME AND REFERENCE NUMBER ON YOUR APPLICATION SUBJECT LINE)`],postedDate:"14/8/2024",iframe:"",uuid:"p9813f138-9103-4452-a72d-0ab1a8cfb5a2"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/johannesburg-water_orig.jpg",href:"https://www.govpage.co.za/johannesburg-water-vacancies-blog/johannesburg-water-vacancies8307651",title:"JOHANNESBURG WATER VACANCIES",content:[` 
JOHANNESBURG WATER
 `,` 
 
FOREMAN SEWER 
– REF: JW390EX/2024
 
Job Description
REMUNERATION: R430 884 BASIC SALARY PER ANNUM 
 
PURPOSE
Manage all functions related to the maintenance of the sewer system in order to effectively manage the sewer infrastructure.
 
KEY RESPONSIBILITIES
Supervise operational plans to coordinate and optimise the utilisation of the area’s resources for all field work to be undertaken. Ensure that correct materials and resources are available for scheduled operations on a daily basis. Monitor and supervise the quality, standard and productivity levels for all field work by doing site inspections and job assessments. Ensure that repairs and maintenance are carried out within the accepted response times and deadlines to ensure proper service delivery to customers Coordinate all maintenance and construction work under his / her control. Investigate and implement new and more effective work methods and techniques in consultation with the Operations Manager Investigate and report on industrial effluent compliance issues. Update plans of sewer reticulation and forward to the Operational Manager for correction. Supervise the inspection of vehicles for roadworthiness and ensure that logbooks and checklists are completed and submitted. Participate in the planning and coordination of company policies and procedures relating to the sewer network. Monitor and evaluate staff performance according to the Staff Management Plan. Liaise with customers, members of public and councillors on sewer related issues. Supervise activities to ensure that it is within the budget provision. Conduct regular site inspections to ensure compliance to the safety procedures.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• Grade 12 or N3 (NQF4) + Plumbing trade test certificate/Appropriate Learnership NQF 4
• 4 years’ experience in operation and maintenance of sewer reticulation of which 1 year must be at a supervisory level.
• Driver’s License Code EB

Please forward your CV and qualifications to: E-mail: Jw.foremansewer390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence.
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 `,` 
 
 
 
 
REGIONAL MAINTENANCE MANAGER 
– REF: JW390EX/2024
 
Job Description
REMUNERATION: R1 291 344 TOTAL COST TO COMPANY PER ANNUM 
 
PURPOSE
Manage the operations on repairs and maintenance to all mechanical and electrical equipment and instrumentation located at Johannesburg Water’s Treatment Works in accordance to General Machinery Regulations section 2.1 and 2.7 (OHASA) and SANS codes of practice.
Management of the central Minor Plant/Yellow Machines Workshop
 
KEY RESPONSIBILITIES
Responsible for the participative development of strategy for the various Treatment Works in conjunction with the Divisional Manager: Bulk wastewater, for technically and environmentally sound operations. Participate in the development of overall strategy for the Bulk Wastewater division in the context of the policy framework set by Johannesburg Water. Assist the Divisional Manager: Bulk wastewater, to define in consultation with the Capital Investment Department (CAPEX), the required infrastructure development and rehabilitation programmes of JW facilities in accordance to CAPEX programmes. Manage and ensure that all electrical and mechanical equipment located at Treatment Works are maintained in a good state and standby equipment is functional at all times to ensure the provision of continuous sanitation services in compliance with statutory requirements and other agreements. Ensure the general facilities maintenance to buildings and grounds in order to improve and maintain the aesthetics of the sites. Implement and maintain preventative measures to contain and minimize overflows originating from Containment Dams in order to comply with Permit conditions as set by the Department of Water Affairs. Ensure that the minor plant/yellow machines equipment is kept in a good state of operation in order to achieve availability to end users. Manage the relevant SAP asset database inputs so that all maintenance interventions/repairs are accurately compiled and recorded
 
JOB REQUIREMENTS
Essential qualifications and experience:
• National Diploma or National Diploma in Mechanical or Electrical Engineering and Government Certificate of Competence (GCC) Factories.
• 5 years appropriate experience of which 2 years must be managerial level
• Computer literate
• Drivers Licence Code EB
 
Please forward your CV and qualifications to: E-mail: Jw.regionalmaintenance390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 `,` 
 
 
 
 
MANAGER: WATER LABORATORY 
– REF: JW390/2024
 
Job Description
REMUNERATION: R919 224 TOTAL COST TO COMPANY PER ANNUM


PURPOSE
To provide a cost effective analytical and scientific advisory service to all Johannesburg Water Departments, approved outside organisations and to manage the development of relevant methodology as new analyses are required.
 
KEY RESPONSIBILITIES
Plan activities in the laboratory including the development of analytical methods and the procurement of equipment to enhance productivity and to improve the quality of results. Plan staff development using company PDP and training schedule for interns, plan future direction of the Lab based on customer need and analytical developments. Utilise each staff member in such a way that his/her capabilities are developed. Ensure that staffs are adequately trained and motivated to carry out assigned tasks. Manage the performance management system, Coordinate, and manage the daily laboratory activities. Manage QA system in all laboratory areas, including SOP reviews and development. Ensure that all relevant data is processed in such a way that the data is readily accessible when required, utilising the necessary computer equipment. Daily, provide analytical service to City of Johannesburg’s Environmental Quality Management Department by analyzing and reporting on surface water quality. Coordinate the implementation of corrective actions for all the non-conformances identified during internal and external audits. Liaise with the Innovation and Technology Department regarding new developments in the Water Industry. Comply with company procurement policy and financial regulations. Draw up technical specifications for tender purposes when required, make recommendations on new chemicals and or equipment. Liaise with external bodies such as the SABS, CSIR and tertiary education institutions on analytical techniques and methodologies and inter-laboratory calibration exercises. Provide advice to other Departments and Communities in cases where specialist knowledge is required. Keep abreast of legislative requirements pertaining to product quality such as Wastewater and reticulated water legislation, standards such as SANS 241 and Acts such as SACNASP, the Water Act and the Accreditation Act.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• Bachelor of Science in Chemistry /Applied Chemistry or BTech Analytical Chemistry (NQF 7).
• 6 years of experience in a chemical laboratory where water or environmental analysis are done with at least one (1) year of analytical work supervision/ overseeing/ coaching experience. Working knowledge of ISO 17025.
• Code B drivers’ licence.
• Be eligible to become a Technical Signatory within 24 months.
 

Please forward your CV and qualifications to: E-mail: Jw.managerwaterlab390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 `,` 
 
 
 
 
OPERATIONAL MANAGER: PLANNING 
– REF: JW390EX/2024
 
Job Description
REMUNERATION: R500 076 BASIC SALARY PER ANNUM 
 
PURPOSE
Planning and scheduling the repairs and maintenance to mechanical and electrical plant, instrumentation, yellow machines, and minor plant equipment located at Johannesburg Water’s Treatment Works in accordance to OHASA and SANS code of practice. Management of the centralized Wastewater Treatment works Stores.
 
KEY RESPONSIBILITIES
To all plant/equipment at the Treatment Works, including Minor Plant/Yellow machines in order to maintain maximum plant availability, manage and ensure that preventative maintenance plans are developed, implemented and monitored according to Best Practices and standards, Manage and monitor the use of spares, materials and equipment through the internal stores and department to ensure effective control and distribution of materials and tools, develop, implement, and maintain SOP’s for Treatment Works maintenance operations. Manage and Control staff in terms of HR Policies, identify job specific training and development needs in line with JW skills development plan, this will be done in consultation with the Regional Maintenance Manager. Transferring of skills to subordinates by mentoring and coaching, requirements in the workplace by carrying out risk assessments and on job assessments. Ensure that all new employees are informed of and trained to the requirements of OHASA, assist with the preparation of regional budget (OPEX) by monitoring and ensuring correct usage of cost centers and line items on works orders, creating purchase requisitions and ensure GRN’S (Goods Receive Note) as per procurement policies and Procedures. Liaise with service providers on an ad hoc basis to ensure that all outsourced work is completed within agreed timeframes, Liaise with internal/external auditors for audit purposes. Provide leadership and management in the Treatment Works through proactive Planning, Evaluate and priorities risks, and assess the options for accommodating the risks.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• N6 plus Trade Certificate (Electrical/Mechanic)
• 5 years in repairs and maintenance of mechanical and electrical machinery and equipment of which 2years must be at supervisory level. Knowledge of Basic Occupational Health and Safety in the workplace.
• Computer literate and SAP
• Code EB driver’s licence.
 

Please forward your CV and qualifications to: E-mail: Jw.operationalmanager390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 `,` 
 
 
 
 
CONTROL ROOM CO-ORDINATOR 
– REF: JW390EX/2024
 
Job Description
REMUNERATION: R375 552 BASIC SALARY PER ANNUM 
 
PURPOSE
Supervising and coordinating the JW Control Room Operations.
 
KEY RESPONSIBILITIES
Manage the delivery of the control room service and ensure delivery of operational KPI’s. Liaise with the shift supervisors and confirm sites coverage. Ensure Effective management of Guard monitoring, Base radio communication alarm monitoring and CCTV system etc. Ensure occurred incidents are immediately reported and escalated to the management, JMPD and SAPS. Ensure incident report is submitted within 24 hours and keep records as per SOP. Act as a focal point for security operations decision making during routine and emergency situations. Act as a focal point for security operations decision making during routine and emergency situations. Ensure the efficient and correct system use by staff. Ensure operating systems are functioning correctly and are fit for purpose, troubleshoot and organize for corrective action, mitigating against any risk to the JW sites. Coordinate training, development, and recruitment of control room staff. Conduct and monitor control room staff appraisals and encouraging further development. Develop and implement the control room operations manual that supports all JW security related operations, reviewing when required. Deputize for Security Operations Manager when required.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• Grade 12
• Certificate (NQF 4) in Security Management/Policing
• Drivers Licence Code 08 (B)
• PSIRA Grade B.
• 5 years’ experience in Security Management of which 3 years must be in Control Room supervision
 
Please forward your CV and qualifications to: E-mail: Jw.controlroom390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence.
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 `,` 
 
 
 
 
MANAGER: FIXED ASSETS 
– REF: JW390EX/2024
 
Job Description
 
REMUNERATION: R919 224 TOTAL COST TO COMPANY PER ANNUM PURPOSE
To enable an entity to meet its service delivery objectives efficiently and effectively. It involves guiding the acquisition, use and disposal of assets, and managing the related risks and costs over all phases of the asset life cycle. Ensure orderly accounting and GRAP compliant reporting of fixed assets.
 
KEY RESPONSIBILITIES
Manage departmental resources. Responsible in maintaining JW Fixed Asset Policy Management of the Fixed Asset register for accuracy and reliability taking ownership of the register module of the JW’s accounting system and adhering to all related processes and accounting procedures. Ensure GRAP compliant accounting standards. To ensure that the fixed assets register is managed and verified electronically, tracking the movement of assets and liaising with both internal and external auditors. Reconcile the fixed asset register to the General Ledger (GL) and to the Annual Financial Statement (AFS). Ensure verification of all assets owned by the JW with the fixed asset register. Provide input into the preparation of PPE (Property, Plant and Equipment) and note in the financial statement. Preparation of lead schedules and working papers for the AFS. Support auditors by preparing for audits of the Fixed Asset unit. Perform year-end closing processes. Initiate process improvements for the efficiency and productivity of fixed asset management. Engage with the JW Finance team and with other departments within the JW to ensure an understanding of their needs pertaining to fixed asset accounting transactions and reports.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• BCom Degree (NQF 7) in Accounting
• 5 years’ experience in fixed assets.
• Valid Drivers License
 

Please forward your CV and qualifications to: E-mail: Jw.managerfixed390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 
 `,` 
 
 
 
 
PROJECT MANAGER
 – REF: JW390EX/2024
 
Job Description
REMUNERATION: R1 020 324 TOTAL COST TO COMPANY PER ANNUM 
 
PURPOSE
Responsible for project management and contract administration of projects within the capital programme, actively driving the technical, administration, contractual and financial framework.
 
KEY RESPONSIBILITIES
Monitor contractors and consultants in terms of the contract document, General Conditions of Contract (GCC), specifications and other legislative requirements. Check progress, approve and process payment certificates submitted by contractors and consultants. Conduct site visits to check if work is undertaken according to plans. Compile project plans on MS Projects and track progress. Review Preliminary and Detailed Design Reports in conjunction with Johannesburg Water stakeholders. Evaluate if the Bill of Quantity supplied by consultants is in line with the project scope and is reasonable and market related. Indicate proposed new services on GIS. Procure resources such as contractors, consultants, and equipment in accordance with the Company’s procurement policies and procedures and CIDB legislation. Prepare and present Bid Committee reports and conduct tender briefing sessions in conjunction with Supply Chain Management Unit. Formulate project cost plans and cash flow plans before the start of the project. Monitor expenditure versus budget and report potential over- and under expenditure to the Investment Manager. Ensure that contractors adhere to quality plans as well as the GCC and SA National Standards (SANS 1200). Monitor the quality of the activities on projects, consultants, contractors, and all stakeholders throughout the duration of a project. Ensure overall compliance with Occupational Health and Safety and Environmental Management. Identify and quantify project risks. Develop and implement mitigation plans. Check close-out report compiled by the consultant to ensure that all the elements of the project have been recorded. Brief Ward Councilors, together with the Communications Department on the project. Manage all human resource activities related to this position.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• BTech/ BSc degree In Civil Engineering (NQF 7)
• 5 years’ experience in civil engineering (water and sewerage/sanitation) of which 2 must be in project management.
• Valid driver’s license (Code B)


Please forward your CV and qualifications to: E-mail: Jw.projectmanager390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence.
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 `,` 
 
 
 
 
MANAGER: OCCUPATIONAL HEALTH & SAFETY AND DISASTER MANAGEMENT
– REF: JW390EX/2024
 
Job Description
 
REMUNERATION: R1 291 344 TOTAL COST TO COMPANY PER ANNUM 
 
PURPOSE
Advise Executive Director, Senior Managers, Line Management and HR Practitioners. Liaise with Department of Labour, Health & Safety Organisations, Legal Representatives, Safety equipment and training suppliers. Lead and direct the functions of Occupational Health and Safety and Compensation for Occupational Injuries and Diseases (COID) in Johannesburg Water strategically and operationally in order to promote and ensure the health and well-being of all employees and ensure legal compliance.
 
KEY RESPONSIBILITIES
Develop and present the OH&S and Disaster Management’s annual budget and operations plan for incorporation into the OH&S and Disaster Management’s budget. Ensure that staff have the capability to effectively provide and deliver services according to identified needs and the planned programmes. Plan and direct employee development, performance management processes and programmes. Ensure that the core values of Johannesburg Water are upheld. Develop and ensure the implementation of policies and procedures relating to occupational health and safety throughout JW. Develop and implement control systems and processes necessary for the OH&S and Disaster Management’s success. Control expenditure by ensuring spending is appropriate and necessary for achievement of objectives. Manage all other resources of the OH&S and Disaster Management in a responsible and cost-effective manner. Act on behalf of the Executive Director in terms of Section 16(2) of the Occupational Health and Safety Act, to ensure that the duties of the employer are properly maintained. Ensure compliance with procedures in terms of the Compliance for Occupational Injuries and Diseases Act (COID). Lead and direct strategies relating to risk analysis of all workplaces within Johannesburg Water. Prioritise the identification of potentially dangerous activities and processes and recommend corrective measures. Conduct needs analysis to determine specific training needs as well as requirements in terms of legislation. Monitor the accomplishment of established objectives in terms of Health and Safety. Develop specific disaster management plans in liaison with line management for specific high-risk areas, head office and Diepsloot Pipe Bridge. Conduct investigations to assess the environmental and public health impact of incidents, depending on severity of case.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• B Tech/ Degree (NQF 7) (Safety, Risk, Environment Management/Health, Science, Engineering)
• 5 years working experience in safety and health or environment or risk quality systems development, planning and implementation of which 3 years must be at management level.
• Valid Driver’s License.
 
Please forward your CV and qualifications to: E-mail: Jw.managerohsdm390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence
 
Closing date: 22 August 2024
 
Post expires at 4:00pm on August Thursday 22nd, 2024
 
 
 
 
 
 `,`SENIOR MANAGER: INFRASTRUCTURE PLANNING & ASSET MANAGEMENT
– REF: JW390EX/2024
 
Job Description
 
REMUNERATION: R1 485 025 TOTAL COST TO COMPANY PER ANNUM 
 
PURPOSE
To manage the compilation of the annual capital budgets and longer term capital plans for the whole of Johannesburg Water as well as all planning related to the water and sanitation infrastructure including reticulation, reservoirs, pump stations and wastewater treatment works. The management and coordination of activities and practices for infrastructure asset management throughout Johannesburg Water.
 
KEY RESPONSIBILITIES
Develop and review long term operational plans for division of the whole department. Evaluate and prioritise risks and assess the options for accommodating the risks. Develop departmental management plans and authorise implementation of the plans. Develop systems and procedure for the management and control of the departmental performance and deliverables. Ensure that systems meet requirements of all applicable legislation. Control departmental expenditure by ensuring spending is appropriate and necessary for achievement of objectives. Attend to brief JWater policies and performance progress. Participate in Committees to facilitate the review and implementation of long-term projects. Liaise with DWAE, Province, Rand Water, Water Research Commission, CoJ, Planning, CoJ Housing, adjacent municipalities, members of the public. Ensure that adequate monitoring, forecasting and demand management investigations are carried out on an ongoing basis to allow for timeous augmentation of the water and sanitation infrastructure. Manage the preparation of the annual capital budget and longer-term financial plans for Johannesburg Water. Ensure projects are appropriately prioritised and motivated for in time for inclusion in the following year’s capital budget. Manage the preparation and maintenance of the Water Services Development Plan (WSDP). Ensure compliance with the employment equity, skills development planning, succession planning and performance appraisal initiatives. Oversee the alignment of asset management practices to Local Government, National Treasury and Internal guidelines and best practice. Approval of engineering scheme reports and construction drawings. Manage the development and access to GIS applications.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• B-Tech / BSc. Civil Engineering (NQF 7)
• Registered for Pr.Eng or Pr. Tech
• 15 years post qualificatons experience in Civil Engineering of which 5 years at a Senior Management level in the Local Government environment
• Experience in developing, implementing policies and procedures, strategy development, business planning, trouble shooting and problem solving
• Excellent knowledge of planning environment and leadership
• Must be analytical and strategic thinker with sound judgement and business acumen
• Service orientated, innovative, assertive and decisive
• Drivers’ Licence Code B
 
Please forward your CV and qualifications to: E-mail: Jw.seniormanager390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence
 
Closing date: 22 August 2024
 
Post expires at 4:00pm on August Thursday 22nd, 2024`,`METER READER X7 
– REF: JW390EX/2024
 
Job Description
REMUNERATION: R210 216 BASIC SALARY PER ANNUM 
 
PURPOSE:
Ensure that all meters are read accurately and consistently with a high level of integrity.
 
KEY RESPONSIBILITIES:
Confirm plotting of walling routes, GIS maps and data o electronic devices as well as manually spread sheets daily. Give input to Senior Meter Reader related to route anomalies found on site or requirement for re-ordering. Accurately locate the relevant water meter using address, GIS and meter number to verify its validity. Identify new meter and/or change meters and record the data accordingly. Ensure the submission of manually recorded data. Perform revisits on no access codes previously obtained, daily per route issued. Perform data cleansing activities as and when required including but not limited to unmetered properties, unbilled properties, meter master data and initial property usage data on questioner. Advise customers on measures that would help reduce water wastage or high bills due to unseen leaks e.g. (how to detect a leak). Log the following customer service issue on route, using relevant coding e.g., leaking/burst water meters, leaking/burst pipes, blocked/damaged sewer pipes or external utility issues.
 
JOB REQUIREMENTS
Essential qualifications and experience:
• Matric (NQF 4).
• Must have 2 years periodic Meter Reading experience within the Municipal environment.
• Must have sound knowledge of meter reading process.
 

Please forward your CV and qualifications to: E-mail: Jw.meterreader390@jwater.co.za quoting the relevant reference number and job title in the subject line of your correspondence.
 
Closing date: 22 August 2024
Post expires at 4:00pm on August Thursday 22nd, 2024`],postedDate:"14/8/2024",iframe:"",uuid:"p2f21f070-8a60-4354-b21d-e11a5bad736a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/agriseta_orig.gif",href:"https://www.govpage.co.za/agricultural-sector-education-training-authority-agriseta-vacancies-blog/agricultural-sector-education-training-authority-agriseta-vacancies5923732",title:"AGRICULTURAL SECTOR EDUCATION TRAINING AUTHORITY (AGRISETA) VACANCIES",content:[` 
AGRICULTURAL SECTOR EDUCATION TRAINING AUTHORITY (AGRISETA)
 `,` 
 
RE-ADVERTISEMENT
 
ASSISTANT MANAGER: EASTERN AND WESTERN CAPE REGIONAL SUPPORT
SALARY SCALE: D1 Level 6 R772 013.37 (CTC)
Ref: AgriS01/08/2024
Designation
Assistant Manager: Eastern and Western Cape Regional Support
Reporting to Manager: Rural Development
Division Learning Programmes and Projects
Office Location Head Office, Pretoria
 
Job Purpose
• To co-ordinate all approved learning programmes, reporting, and monitoring of implementation in the relevant provinces.
• Monitor implementation and act as first-line of assistance on issues relating to payments and document submissions.
 
KEY PERFORMANCE AREAS
 
Key Performance Area - Functional outputs / Actions
 
Project Coordination
• Supports and coordinates the skills development programmes in Eastern and Western Cape in partnership with Government Departments, commodity organisations, and communities in land reform, rural development, and agriculture.
• Establishes, participates in relevant skills development forums in the provinces (Eastern and Western Cape) that promotes support to rural agricultural structures through mentorship programmes.
• Coordinates applications from State Departments in provinces for approval.
• Assess readiness of projects, through support and/or assistance from AgriSETA.
• Oversees the generation, distribution, and receiving approval letters and contracts.
• Monitor and implement approved mentorship projects and learning programmes in the provinces.
• Site verification and monitoring of all AgriSETA funded learning programmes and partnership initiatives.
• Prepare site monitoring for project managers.
• Monitor the compliance of project implementation plan.
• Responds to provincial enquiries with regards to skills development in the provinces.
• Assist with facilitation of provincial strategic partnerships with public and private stakeholders.
• Conducts weekly site visits to provide ongoing support and ensure training is being rendered.
 
Adhoc
• Any other duties which may be assigned from time to time.
 
Minimum Qualification and Experience
• Degree (NQF level 7) in Public or Business Administration, Agriculture or Community Development.
• 5 years experience in administration and monitoring of projects.
• Added advantage, the incumbent should have experience in project management.
 
Required Competencies
• Monitoring of projects and monthly reporting.
• Presentation skills.
• Business writing skills.
• Stakeholder Management.
• Willing to work under pressure.
• Able to travel extensively.
 
 
Employment Period: Permanent position (SETA License).
 
An updated CV with a covering letter (excluding certificates) should be forwarded to: Asm@agriseta.co.za
 
Closing date: Tuesday, 27 August 2024 @ 16h30
 
Enquiries: Tshepiso@agriseta.co.za
 
Note: Please indicate your current and required salary. Communication will be restricted to the shortlisted candidates only. Should you not hear from us in 4 weeks after closing date of this advertisement, consider your application unsuccessful. This advertisement has minimum requirements listed. Management reserves the right to use additional relevant information as criteria for short-listing. AgriSETA is an equal opportunity employer and preference will be afforded to candidates in terms of Employment Equity Plan.
 
Please note that this is a re-advertisement, applicants who previously applied to this position are encouraged to apply, quoting the reference as per above.
 
Disabled candidates are encouraged to apply and an indication in this regard will be appreciated.
 
 
 
 
 `,` 
 
 
 
 
ADVERTISEMENT
 
ASSISTANT MANAGER: EXPENDITURE
PERMANENT
SALARY SCALE: PATERSON C5 LEVEL 6 R658 733,53 - R797 067,57
Ref: AgriS0808/2024
DESIGNATION Assistant Manager: Expenditure
Reporting to Manager: Finance
Division Administration
Business Unit Finance
Office Location Head Office (Pretoria)
 
JOB PURPOSE
To assist in the management of the expenditure of AgriSETA
 
KEY PERFORMANCE AREAS
 
KEY PERFORMANCE AREA - FUNCTIONAL OUTPUTS / ACTIONS
 
Liability Management
• Reconcile creditor’s accounts
• Pay liabilities within 30 days
• Propose changes or updates on the creditor’s master file
 
Expenditure
• Recognition and payment of invoices (admin and projects)
• Process bank statement transactions on the accounting system and maintain source documents
• Recognition and payment of payroll transactions (e.g. interface payroll into the accounting system, etc)
• Verification and safekeeping of source documents
• Recognition and payment of Mandatory grants
 
Management of Fruitless, wasteful and irregular expenditure
• Identify, record, and report irregular expenditure
• Identify, record, and report fruitless and wasteful expenditure
 
Cash Management
• Manage all prepayments
 
Reporting
• Ensure completeness of source documents
• Monthly reporting of accruals (admin and projects)
• Monthly report of irregular expenditure
 
MINIMUM QUALIFICATION & EXPERIENCE
• Degree in Accounting/Finance (NQF Level 7)
• Minimum of 5 years working experience within the financial environment
• SETA Environment experience
 
Skills Required:
• Attentive to details
• Ability to work with a high volume of data
• Team player
• Ability to supervise and transfer skills to subordinates.
• Ability to meet deadlines and comply with applicable norms and standards
 
Competencies Required:
• Strong knowledge of PFMA, PFMA Regulations, National Treasury norms and standards
•Moderate knowledge of CaseWare or any financial reporting system
• Computer proficiency in Microsoft Excel, Word, and PowerPoint
 
 
Employment Period: Permanent
 
An updated CV with a cover letter (excluding certificates) should be forwarded to: ASM.Expenditure@agriseta.co.za
 
Closing date: Tuesday, 27 August 2024
 
Enquiries: Baepi@agriseta.co.za
 
Note: Communication will be restricted to the shortlisted candidates only. Should you not hear from us within 4 weeks after the closing date of this advertisement, consider your application unsuccessful.
 
This advertisement has minimum requirements listed. Management reserves the right to use additional relevant information as criteria for short-listing. AgriSETA is an equal opportunity employer and preference will be afforded to candidates in terms of the Employment Equity Plan. 
 
Disabled candidates are encouraged to apply and an indication in this regard will be appreciated.
 
 
 
 
 `,`ADVERTISEMENT
 
PERMANENT
MARKETING AND COMMUNICATION PRACTITIONER
SALARY SCALE: C2 LEVEL 6
R381 216.17 - R419 337.78
Ref: AgriS0807/2024
 
DESIGNATION Marketing and Communication Practitioner
REPORTING TO Assistant Manager: Marketing and Communication
DIVISION Marketing and Communication
BUSINESS UNIT Corporate Services
OFFICE LOCATION Head office, Pretoria – Arcadia
 
JOB PURPOSE
• Assist with the administration of the Marketing and Communications unit.
• Marketing and Communication support to all relevant stakeholders, internally and externally.
 
KEY PERFORMANCE AREAS
 
KEY PERFORMANCE AREA - FUNCTIONAL OUTPUTS / ACTIONS
 
STAKEHOLDER AND RELEVANT EVENTS
• Assist in the development of the annual stakeholder calendar in conjunction with management.
• Identify opportunities to promote AgriSETA at appropriate events. Plan and organise stakeholder and related events - EXPOs, exhibitions, and promotional campaigns.
• Programme planning in conjunction with the relevant department(s) for the event.
• Event Management - Undertake full planning of the event – venues, catering, speakers, etc according to checklist requirements.
• Identifying communication platforms internally and to external Stakeholders e.g. via the media, internet, exhibitions and promotions, campaigns and EXPOs, intranet, etc.
• Ensure that invitations are sent to the relevant stakeholders.
• Ensure that appropriate feedback is communicated to external stakeholders.
• Obtain event feedback and communicate to relevant internal departments.
• Ensure necessary stationery, equipment, and printing requirements are available for events.
• Ensure appropriate use of branding at all events.
• Work in conjunction with the Head: Marketing and Communication / Assistant Manager for all administrative issues.
 
ADVERTISING AND PUBLICATIONS
ANNUAL REPORT
• Internal and external newsletter contribution – newsworthy articles.
• Liaise with internal departments for monthly submissions of newsworthy articles.
• Compilation of content for newsletters, advertisements, etc.
• Coordinate the design and printing of all communication and promotional material/items e.g., pamphlets, newsletters, annual reports, t-shirts, etc.
• Proofreading, editing, and updating of various publications – career guidance booklets, pamphlets.
• Distribution of AgriSETA publications.
• Assist with the gathering of information for content and images.
 
CORPORATE BRANDING AND COMMUNICATION
• Inputs to the design of corporate branding – corporate documents etc.
• Inputs and updating the development of the Marketing and Communication Policy and Strategy aligned to the goals and objectives of the AgriSETA.
• Maintaining the corporate image of the SETA, inclusive of the use of logos, and correct branding on stationery and other corporate and promotional materials.
• Coordinate the design and printing of all communication and promotional material/items e.g., pamphlets, newsletters, annual reports, t-shirts, etc.
• Control and distribution of promotional materials/equipment to the AgriSETA provincial departments.
• Internal communication with regard to adhering to the policy of branding for documents and related material.
 
DIGITAL MARKETING AND COMMUNICATIONS
• Implementation of social platforms strategy for online traffic to the SETA website.
• Contributing / implementing to the development campaigns using digital communication and social media to promote the SETA services and products.
• Monitoring the brands and campaigns to raise brand awareness.
• Monitor usage/hits and assess data to determine trends.
 
WEBSITE AND INTRANET
• Updating the website as and when required.
• Follow up on information not placed by the required time.
• Monthly information updates per division
• Checking information (editing) before placement on the website.
• Communicate with the ICT division as appropriate to obtain technical support for website infrastructure and content updating.
 
AD HOC AND ADMINISTRATION
•Any other duties, which may be assigned from time to time.
• Working in conjunction with the Supply Chain Management department
• Arranging meetings.
• Travel coordination in accordance with policy and regulations
• Administration of annual performance targets – filing systems: electronically and hard copy.
 
INTERNAL AND EXTERNAL CONTACTS
• Internal divisions: All divisions within AgriSETA
External: Stakeholders
 
MINIMUM QUALIFICATION & EXPERIENCE
• A National Diploma NQF Level 6 or equivalent qualification in Marketing / Communications, Public Relations or Business Administration.
• 3 years of work experience in marketing, communications, or stakeholder relations.
• Experience in implementing/delivering marketing or communications campaigns (including digital content).
• Experience in event planning and management.
• Experience in website design or management will be an added advantage.
• A valid driver’s license is a requirement.
 
Skills Required:
• Communication skills enabling verbal and written communication at all levels
• Good Interpersonal skills.
• Good Organisational and Planning skills
• Attention to Detail
• Presentation Skills
• Project Management Skills
• Innovation
• Team-Orientated
• Time Management Skills
• Deadline Driven
 
Competencies Required:
• Computer literacy (especially Excel)
• Knowledge of relevant legislation within the SETA environment, Skills Development Act, PFMA, and Electronic Communication is an added advantage
• Understanding of branding principles and application of these in communication and marketing.
• Understanding company policies and procedures applicable to the specific work environment to ensure that work outcomes are compliant.
• Ability to do trend analysis and advise thereon.
• The ability to accurately give an account of information on the performance of outputs.
• Ability to work proactively using own initiative, prioritise work and meet deadlines, with well-developed time management skills and demonstrable project management skills.
• Good written communication skills, with the proven ability to write engaging copy for a range of channels and audiences.
• Good verbal communication and presentation skills, for face-to-face contact at meetings; presentations and briefings
• Innovative – introducing new thoughts and ideas
• Team player – ability to work with colleagues and necessary stakeholders
• Proactive – to implement the necessary actions. Willing and able to work overtime when required.
• Required to travel extensively
 
Employment Period: Permanent
 
 
An updated CV (excluding certificates) should be forwarded to: MarCommsPractitioner@agriseta.co.za
 
Closing date: Tuesday, 27 August 2024
 
Note: Communication will be restricted to the shortlisted candidates only. Should you not hear from us within 4 weeks after the closing date of this advertisement, consider your application unsuccessful.
 
This advertisement has minimum requirements listed. Management reserves the right to use additional relevant information as criteria for short-listing. AgriSETA is an equal opportunity employer and preference will be afforded to candidates in terms of the Employment Equity Plan.
Disabled candidates are encouraged to apply and an indication in this regard will be appreciated.`],postedDate:"14/8/2024",iframe:"",uuid:"p189c72a9-c0e9-4e30-b223-af9841f53817"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/agriseta_orig.gif",href:"https://www.govpage.co.za/agricultural-sector-education-training-authority-agriseta-vacancies-blog/agricultural-sector-education-training-authority-agriseta-vacancies5923732",title:"AGRICULTURAL SECTOR EDUCATION TRAINING AUTHORITY (AGRISETA) VACANCIES",content:[` 
AGRICULTURAL SECTOR EDUCATION TRAINING AUTHORITY (AGRISETA)
 `,` 
 
RE-ADVERTISEMENT
 
ASSISTANT MANAGER: EASTERN AND WESTERN CAPE REGIONAL SUPPORT
SALARY SCALE: D1 Level 6 R772 013.37 (CTC)
Ref: AgriS01/08/2024
Designation
Assistant Manager: Eastern and Western Cape Regional Support
Reporting to Manager: Rural Development
Division Learning Programmes and Projects
Office Location Head Office, Pretoria
 
Job Purpose
• To co-ordinate all approved learning programmes, reporting, and monitoring of implementation in the relevant provinces.
• Monitor implementation and act as first-line of assistance on issues relating to payments and document submissions.
 
KEY PERFORMANCE AREAS
 
Key Performance Area - Functional outputs / Actions
 
Project Coordination
• Supports and coordinates the skills development programmes in Eastern and Western Cape in partnership with Government Departments, commodity organisations, and communities in land reform, rural development, and agriculture.
• Establishes, participates in relevant skills development forums in the provinces (Eastern and Western Cape) that promotes support to rural agricultural structures through mentorship programmes.
• Coordinates applications from State Departments in provinces for approval.
• Assess readiness of projects, through support and/or assistance from AgriSETA.
• Oversees the generation, distribution, and receiving approval letters and contracts.
• Monitor and implement approved mentorship projects and learning programmes in the provinces.
• Site verification and monitoring of all AgriSETA funded learning programmes and partnership initiatives.
• Prepare site monitoring for project managers.
• Monitor the compliance of project implementation plan.
• Responds to provincial enquiries with regards to skills development in the provinces.
• Assist with facilitation of provincial strategic partnerships with public and private stakeholders.
• Conducts weekly site visits to provide ongoing support and ensure training is being rendered.
 
Adhoc
• Any other duties which may be assigned from time to time.
 
Minimum Qualification and Experience
• Degree (NQF level 7) in Public or Business Administration, Agriculture or Community Development.
• 5 years experience in administration and monitoring of projects.
• Added advantage, the incumbent should have experience in project management.
 
Required Competencies
• Monitoring of projects and monthly reporting.
• Presentation skills.
• Business writing skills.
• Stakeholder Management.
• Willing to work under pressure.
• Able to travel extensively.
 
 
Employment Period: Permanent position (SETA License).
 
An updated CV with a covering letter (excluding certificates) should be forwarded to: Asm@agriseta.co.za
 
Closing date: Tuesday, 27 August 2024 @ 16h30
 
Enquiries: Tshepiso@agriseta.co.za
 
Note: Please indicate your current and required salary. Communication will be restricted to the shortlisted candidates only. Should you not hear from us in 4 weeks after closing date of this advertisement, consider your application unsuccessful. This advertisement has minimum requirements listed. Management reserves the right to use additional relevant information as criteria for short-listing. AgriSETA is an equal opportunity employer and preference will be afforded to candidates in terms of Employment Equity Plan.
 
Please note that this is a re-advertisement, applicants who previously applied to this position are encouraged to apply, quoting the reference as per above.
 
Disabled candidates are encouraged to apply and an indication in this regard will be appreciated.
 
 
 
 
 `,` 
 
 
 
 
ADVERTISEMENT
 
ASSISTANT MANAGER: EXPENDITURE
PERMANENT
SALARY SCALE: PATERSON C5 LEVEL 6 R658 733,53 - R797 067,57
Ref: AgriS0808/2024
DESIGNATION Assistant Manager: Expenditure
Reporting to Manager: Finance
Division Administration
Business Unit Finance
Office Location Head Office (Pretoria)
 
JOB PURPOSE
To assist in the management of the expenditure of AgriSETA
 
KEY PERFORMANCE AREAS
 
KEY PERFORMANCE AREA - FUNCTIONAL OUTPUTS / ACTIONS
 
Liability Management
• Reconcile creditor’s accounts
• Pay liabilities within 30 days
• Propose changes or updates on the creditor’s master file
 
Expenditure
• Recognition and payment of invoices (admin and projects)
• Process bank statement transactions on the accounting system and maintain source documents
• Recognition and payment of payroll transactions (e.g. interface payroll into the accounting system, etc)
• Verification and safekeeping of source documents
• Recognition and payment of Mandatory grants
 
Management of Fruitless, wasteful and irregular expenditure
• Identify, record, and report irregular expenditure
• Identify, record, and report fruitless and wasteful expenditure
 
Cash Management
• Manage all prepayments
 
Reporting
• Ensure completeness of source documents
• Monthly reporting of accruals (admin and projects)
• Monthly report of irregular expenditure
 
MINIMUM QUALIFICATION & EXPERIENCE
• Degree in Accounting/Finance (NQF Level 7)
• Minimum of 5 years working experience within the financial environment
• SETA Environment experience
 
Skills Required:
• Attentive to details
• Ability to work with a high volume of data
• Team player
• Ability to supervise and transfer skills to subordinates.
• Ability to meet deadlines and comply with applicable norms and standards
 
Competencies Required:
• Strong knowledge of PFMA, PFMA Regulations, National Treasury norms and standards
•Moderate knowledge of CaseWare or any financial reporting system
• Computer proficiency in Microsoft Excel, Word, and PowerPoint
 
 
Employment Period: Permanent
 
An updated CV with a cover letter (excluding certificates) should be forwarded to: ASM.Expenditure@agriseta.co.za
 
Closing date: Tuesday, 27 August 2024
 
Enquiries: Baepi@agriseta.co.za
 
Note: Communication will be restricted to the shortlisted candidates only. Should you not hear from us within 4 weeks after the closing date of this advertisement, consider your application unsuccessful.
 
This advertisement has minimum requirements listed. Management reserves the right to use additional relevant information as criteria for short-listing. AgriSETA is an equal opportunity employer and preference will be afforded to candidates in terms of the Employment Equity Plan. 
 
Disabled candidates are encouraged to apply and an indication in this regard will be appreciated.
 
 
 
 
 `,`ADVERTISEMENT
 
PERMANENT
MARKETING AND COMMUNICATION PRACTITIONER
SALARY SCALE: C2 LEVEL 6
R381 216.17 - R419 337.78
Ref: AgriS0807/2024
 
DESIGNATION Marketing and Communication Practitioner
REPORTING TO Assistant Manager: Marketing and Communication
DIVISION Marketing and Communication
BUSINESS UNIT Corporate Services
OFFICE LOCATION Head office, Pretoria – Arcadia
 
JOB PURPOSE
• Assist with the administration of the Marketing and Communications unit.
• Marketing and Communication support to all relevant stakeholders, internally and externally.
 
KEY PERFORMANCE AREAS
 
KEY PERFORMANCE AREA - FUNCTIONAL OUTPUTS / ACTIONS
 
STAKEHOLDER AND RELEVANT EVENTS
• Assist in the development of the annual stakeholder calendar in conjunction with management.
• Identify opportunities to promote AgriSETA at appropriate events. Plan and organise stakeholder and related events - EXPOs, exhibitions, and promotional campaigns.
• Programme planning in conjunction with the relevant department(s) for the event.
• Event Management - Undertake full planning of the event – venues, catering, speakers, etc according to checklist requirements.
• Identifying communication platforms internally and to external Stakeholders e.g. via the media, internet, exhibitions and promotions, campaigns and EXPOs, intranet, etc.
• Ensure that invitations are sent to the relevant stakeholders.
• Ensure that appropriate feedback is communicated to external stakeholders.
• Obtain event feedback and communicate to relevant internal departments.
• Ensure necessary stationery, equipment, and printing requirements are available for events.
• Ensure appropriate use of branding at all events.
• Work in conjunction with the Head: Marketing and Communication / Assistant Manager for all administrative issues.
 
ADVERTISING AND PUBLICATIONS
ANNUAL REPORT
• Internal and external newsletter contribution – newsworthy articles.
• Liaise with internal departments for monthly submissions of newsworthy articles.
• Compilation of content for newsletters, advertisements, etc.
• Coordinate the design and printing of all communication and promotional material/items e.g., pamphlets, newsletters, annual reports, t-shirts, etc.
• Proofreading, editing, and updating of various publications – career guidance booklets, pamphlets.
• Distribution of AgriSETA publications.
• Assist with the gathering of information for content and images.
 
CORPORATE BRANDING AND COMMUNICATION
• Inputs to the design of corporate branding – corporate documents etc.
• Inputs and updating the development of the Marketing and Communication Policy and Strategy aligned to the goals and objectives of the AgriSETA.
• Maintaining the corporate image of the SETA, inclusive of the use of logos, and correct branding on stationery and other corporate and promotional materials.
• Coordinate the design and printing of all communication and promotional material/items e.g., pamphlets, newsletters, annual reports, t-shirts, etc.
• Control and distribution of promotional materials/equipment to the AgriSETA provincial departments.
• Internal communication with regard to adhering to the policy of branding for documents and related material.
 
DIGITAL MARKETING AND COMMUNICATIONS
• Implementation of social platforms strategy for online traffic to the SETA website.
• Contributing / implementing to the development campaigns using digital communication and social media to promote the SETA services and products.
• Monitoring the brands and campaigns to raise brand awareness.
• Monitor usage/hits and assess data to determine trends.
 
WEBSITE AND INTRANET
• Updating the website as and when required.
• Follow up on information not placed by the required time.
• Monthly information updates per division
• Checking information (editing) before placement on the website.
• Communicate with the ICT division as appropriate to obtain technical support for website infrastructure and content updating.
 
AD HOC AND ADMINISTRATION
•Any other duties, which may be assigned from time to time.
• Working in conjunction with the Supply Chain Management department
• Arranging meetings.
• Travel coordination in accordance with policy and regulations
• Administration of annual performance targets – filing systems: electronically and hard copy.
 
INTERNAL AND EXTERNAL CONTACTS
• Internal divisions: All divisions within AgriSETA
External: Stakeholders
 
MINIMUM QUALIFICATION & EXPERIENCE
• A National Diploma NQF Level 6 or equivalent qualification in Marketing / Communications, Public Relations or Business Administration.
• 3 years of work experience in marketing, communications, or stakeholder relations.
• Experience in implementing/delivering marketing or communications campaigns (including digital content).
• Experience in event planning and management.
• Experience in website design or management will be an added advantage.
• A valid driver’s license is a requirement.
 
Skills Required:
• Communication skills enabling verbal and written communication at all levels
• Good Interpersonal skills.
• Good Organisational and Planning skills
• Attention to Detail
• Presentation Skills
• Project Management Skills
• Innovation
• Team-Orientated
• Time Management Skills
• Deadline Driven
 
Competencies Required:
• Computer literacy (especially Excel)
• Knowledge of relevant legislation within the SETA environment, Skills Development Act, PFMA, and Electronic Communication is an added advantage
• Understanding of branding principles and application of these in communication and marketing.
• Understanding company policies and procedures applicable to the specific work environment to ensure that work outcomes are compliant.
• Ability to do trend analysis and advise thereon.
• The ability to accurately give an account of information on the performance of outputs.
• Ability to work proactively using own initiative, prioritise work and meet deadlines, with well-developed time management skills and demonstrable project management skills.
• Good written communication skills, with the proven ability to write engaging copy for a range of channels and audiences.
• Good verbal communication and presentation skills, for face-to-face contact at meetings; presentations and briefings
• Innovative – introducing new thoughts and ideas
• Team player – ability to work with colleagues and necessary stakeholders
• Proactive – to implement the necessary actions. Willing and able to work overtime when required.
• Required to travel extensively
 
Employment Period: Permanent
 
 
An updated CV (excluding certificates) should be forwarded to: MarCommsPractitioner@agriseta.co.za
 
Closing date: Tuesday, 27 August 2024
 
Note: Communication will be restricted to the shortlisted candidates only. Should you not hear from us within 4 weeks after the closing date of this advertisement, consider your application unsuccessful.
 
This advertisement has minimum requirements listed. Management reserves the right to use additional relevant information as criteria for short-listing. AgriSETA is an equal opportunity employer and preference will be afforded to candidates in terms of the Employment Equity Plan.
Disabled candidates are encouraged to apply and an indication in this regard will be appreciated.`],postedDate:"14/8/2024",iframe:"",uuid:"pe4afed0d-b460-4e30-835b-b3ca3e2dd325"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/hwseta_orig.png",href:"https://www.govpage.co.za/health-and-welfare-sector-education-and-training-authority-hwseta-vacancies-blog/health-and-welfare-sector-education-and-training-authority-hwseta-vacancies7401869",title:"HEALTH AND WELFARE SECTOR EDUCATION AND TRAINING AUTHORITY (HWSETA) VACANCIES",content:[` 
HEALTH AND WELFARE SECTOR EDUCATION AND TRAINING AUTHORITY (HWSETA)
 `,`DIVISIONAL SECRETARY FINANCE
2024-08-07 - 2024-08-16
Permanent
JHB000164
Other
Gauteng, JHB - Eastern Suburbs
The Successful Candidate will be responsible for providing secretarial, clerical and administrative support to the Executive Manager and division in order to ensure that the division functions in an effective and efficient manner.

Minimum Qualification: 
National diploma in Office admin and/or Post Matric Secretarial certificate.
 
Minimum Experience: 
3-5 years Secretarial experience
 
Duties:
Drafting administrative correspondence and minutes.
Obtaining, proposing and monitoring deadlines and follow-up dates.
Screening requests for meetings, scheduling and organizing meetings and travel Arrangements.
Assisting in the preparation of budgets, monitoring of expenditures, drafting of contracts and purchasing or acquisition orders.
Liaising with other staff about a range of matters relating to the organization’s operations.
Writing and answering business or technical letters and other similar correspondence.
Preparing verbatim reports of proceedings in legislative assemblies, courts of law or other places using shorthand or specialised office equipment.
Supervising the work of clerical support workers.`,`Cost to Company per annum: Salary Range:  R323 161 per annum

The HWSETA is an AA/EE employer and reserves the right not to fill any advertised positions.
 
This position will be based in Bedfordview
 
For more information please contact:
Lybon Mnisi
 
APPLY`],postedDate:"14/8/2024",iframe:"",uuid:"p7f849c13-2b5f-4169-9ded-a240fd80f938"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/sasseta.png?1723664842",href:"https://www.govpage.co.za/safety-and-security-sector-education-training-authority-sasseta-vacancies-blog/safety-and-security-sector-education-training-authority-sasseta-vacancies7416213",title:"SAFETY AND SECURITY, SECTOR EDUCATION & TRAINING AUTHORITY (SASSETA) VACANCIES",content:[` 
SAFETY AND SECURITY, SECTOR EDUCATION & TRAINING AUTHORITY (SASSETA)
 `,`Safety and Security Sector Education and Training Authority (SASSETA) is a public entity, established in terms of Section 9(1) of the Skills Development Act of 1998, as amended.
 
The following fixed-term contract position expiring on 31 March 2030 exists in the organisation:
 
ASSESSMENT AND WORKPLACE PRACTITIONER
All-inclusive Annual Remuneration Package (TCTC): R 885 464.00
 
Reporting directly to the ETQA Manager, the incumbent shall be responsible for the following:
 
Assessment and Design
Ensure that a systematic process is implemented for the planning, designing, moderation, validation and approval of the final assessment instruments;
Ensure a systematic process is implemented for tools in order to facilitate consistency;
Manage the quality assurance of moderation of the final assessment instrument;
Ensure that the moderation process included evaluation of the appropriateness of the time allocated and the cost-effectiveness of the instrument against set criteria is adhered to
Request Moderator Reports to quality assure the moderation process;
Manage the quality assurance of validation of the final assessment instrument;
Quality Assurance of marking;
 Validate that the criteria and appointments for markers and moderators have been set and adhered to.
Develop and maintain a database of accredited external qualification evaluators
Manage processes that are for the planning, development, moderation, implementation, validation, and approval of the final assessment conducted;
Manage external assessment processes
Ensure that there is a reliable and secure electronic database to record learner achievements, assessment centres, external assessment application
Report to the QCTO on the performance of functions in the form and manner required by the QCTO
To report on quality assurance activities, actions and decisions
Coordinate and Management of External Integrated Final Assessments
Develop and maintain database of accredited external qualification evaluators
Inform applicants of outstanding requirements and coordinate receipt of these
To monitor and manage the service provider capacity building programme
To manage the implementation of legacy qualification certification processes and procedures
 
Coordinate the development of Assessment instruments
Coordinate the development and design of external assessment exemplars and instruments
Coordinate the development and design of the Qualification Assessment Specification (QAS) Addendum
Coordinate and manage the conduct of External Integrated Final Assessments (EISA)
Develop and maintain a reliable and secure electronic database to record learner enrolment and achievements
Inform applicants (Stakeholders) of outstanding requirements and coordinate receipt of documents/Evidence
Submit recommendations and supporting documentation for review
Update system with progress steps and actions
Coordinate Stakeholder Meeting or Workshops
Coordinate review sessions
Compile information as evidence for reporting against targets
Maintain and update evidence files
Draft standardised, regular and ad hoc reports as required
Coordinate the evaluation and identify learning programme development gaps and advise applicants
Compile recommendations on learning programmes and capture onto system
 
Plan, schedule, manage, conduct EISA
Develop processes and procedures for the development of exemplars and assessments instruments.
Coordinate, implementation and administration of EISA sessions.
Schedule proposed EISA dates on an annual basis
Completes and send through the notification of EISA document to the QCTO three months prior the proposed EISA dates
Coordinate appointment of invigilators and allocates an SME to conduct monitoring of the EISA
Coordinate confidentiality Agreements between QP, Assessment Centre, Invigilator, SME monitor, Markers and Assessors
Coordinate and arrange the EISA tools/instruments to be available
Ensure that there is a lockable steel cupboard available to store the EISA tools/instruments for the duration of EISA
Ensure that marking, moderation and recording of results takes place as per SASSETA’s standardised practice
Ensure that correct submission of final results within 21 working day of the date of the EISA to the QCTO for approval
Deal with Assessments Appeals
Recommend the certification of learners to the QCTO within the turnaround time the person to
 
Site and Monitoring visits Assessment Centre
Conduct site and monitoring visits as per the approved monthly schedule
Develop accreditation criteria for assessment centres
Promote compliance to SDP in line with Accreditation set standards
Provide regular and Ad hoc reports as per the site visit
 
JOB REQUIREMENTS:
Grade 12 or Matric is required.
A minimum of NQF Level 6 qualification in Training and Development / Education Management / B-Tech in HRM / OD ETD / Learning Development Advisor is required.
A minimum of 3 years’ experience in learning and development or Skills Development environment.
A minimum of 2 years’ experience in assessment assurance process is advantageous.
Must have a moderate understanding of education, training and quality assurance processes.
Must have a sound understanding of Skills Development Act,
Occupational Qualification Sub-Framework policy
Must be computer literate at an intermediate level.
Must have a valid driver’s Licence
 
SKILLS AND ATTRIBUTES REQUIRED:
Professionalism
Professional Ethics and Integrity,
Diligence,
Conflict management and resolution skills,
Compliance orientation,
Good communication skills (oral and written),
Ability to prioritize and work under pressure
Detail orientated person,
Ability to take initiative
 
 
PLACE OF WORK: SASSETA Head Office, Waterfall Corporate Campus, 74 Waterfall Drive, Midrand, 2090.
 
Apply online using the SASSETA website address provided below and attach a detailed CV and one (1) PDF file consisting of certified copies, not older than six months, of all your qualifications relevant to the position (from Matric / Grade 12 to the highest held tertiary qualifications) including an ID copy and a driver’s licence.
 
Website address: www.sasseta.org.za  
 
Closing Date for Applications: 2 September 2024  
 
It is SASSETA’s intention to promote equity (race, gender and disability) through the filling of this position with a candidate whose promotion/appointment will promote representativity in line with the numerical targets as contained in SASSETA’s EE Plan. Applications from designated groups are therefore encouraged.
 
The successful candidate will be subjected to security clearance and will be expected to sign the employment contract and performance contract.
 
Only short-listed candidates will be contacted. Should you not hear from the HR Department after four (4) weeks from the closing date, assume that your application was unsuccessful.
 
PLEASE NOTE: Applications from unsuccessful candidates will not be retained.
 
NB: SASSETA reserves the right not to make an appointment.
 
DISCLAIMER: SASSETA employs appropriate, reasonable technical and organisational measures designed to prevent unlawful access, loss or damage of personal information. By applying for a vacant position at SASSETA you expressly give SASSETA consent to process your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (“POPIA”), the SASSETA Recruitment Policy/Procedures, the SASSETA’s POPIA Policy and the SASSETA’s Privacy Policy.
 
PLEASE APPLY HERE`,`Safety and Security Sector Education and Training Authority (SASSETA) is a public entity, established in terms of Section 9(1) of the Skills Development Act of 1998, as amended.
 
The following fixed-term contract position expiring on 31 March 2030 exists in organisation:
 
GOVERNANCE, RISK AND COMPLIANCE (GRC) PRACTITIONER
All-inclusive total annual remuneration package (TCTC): R637 461.00
 
Reporting to the Governance, Risk and Compliance (GRC) Manager, the incumbent shall be responsible for:
Assist the Governance, Risk and Compliance (GRC) Manager with the submission of risk related information on the Governance Charter and evidence to DHET as required
Assist with the preparation of the Quarterly reports on the GRC target for the APP to DHET.
Assist with the preparation of the Quarterly reports on Strategic risk register to National Treasury.
Assist with the preparation of Quarterly reports on the compliance framework to National Treasury.
Prepare evidence file for the submission of annual risk maturity assessment.
Support the GRC office on submissions to the Board and/or sub committees.
Attend and participate in internal Committee meetings as required.
Collate information from Committee Secretaries on quarterly meetings conducted.
Assist with the provision of information to the Risk Management Committee (RMC) and the Audit and Risk Committee (ARC) as required.
Assist with the formulation and review of GRC policies for ARC’s recommendation.
Develop and monitor the Organisational Compliance Calendar periodically.
Prepare the compliance report to the Risk Management Committee.
Coordinate internal and external audit process.
Coordinate and arrange Audit Steering Committee meetings as and when required.
Facilitate engagement letter sessions between Internal Audit and Business units when required.
Facilitate meetings between AGSA and Internal Audit when required.
Consolidate and update risk registers on a quarterly basis.
Facilitate SASSETA staff training sessions on risk management.
Schedule risk assessment and fraud awareness workshops
Support implementation of Risk Management Plan and Fraud Prevention Plan
 

JOB REQUIREMENTS:
An NQF level 6 qualification or equivalent with exposure on any of the following areas, Risk Management, Compliance, Internal audit, Financial Management, Project Management and Financial Accounting is required.
A minimum of 3 years’ experience in any of the following areas: Internal Audit, Risk and Compliance Management and Corporate Governance or similar experience is required.
Sound experience in coordination of activities is required and  
Must be computer literate at an intermediate level.
 
SKILLS AND ATTRIBUTES REQUIRED:
Knowledge of PFMA, Treasury Regulations, and other relevant legislation
Knowledge of administrative processes and systems.
Risk Mitigating and Management skills.
Planning and Organising skills.
Systems and process thinking skills.
Must be a Team Player.
Must be service oriented.
Time management skills.
Stakeholder engagement skills.
Ability to monitor policies, procedures and guidelines.
Good analytical skills.
Report writing skills.
Good interpersonal skills.
Problem solving skills
 
 
PLACE OF WORK: SASSETA Head Office, Waterfall Corporate Campus, 74 Waterfall Drive, Midrand, 2090.
 
Apply online using the SASSETA website address provided below and attach a detailed CV together with one (1) PDF file consisting of certified copies, not older than six months, of all your qualifications relevant to the position (from Matric / Grade 12 to the highest held tertiary qualifications) including an ID copy and a driver’s licence.
 
Website address: www.sasseta.org.za  
 
 
Closing Date for Applications: 2 September 2024  
 
It is SASSETA’s intention to promote equity (race, gender and disability) through the filling of this position with a candidate whose promotion/appointment will promote representativity in line with the numerical targets as contained in SASSETA’s EE Plan. Applications from designated groups are therefore encouraged.
 
The successful candidate will be subjected to security clearance and will be expected to sign the employment contract and performance contract.
 
Only short-listed candidates will be contacted. Should you not hear from the HR Department after four (4) weeks from the closing date, assume that your application was unsuccessful.
 
PLEASE NOTE: Applications from unsuccessful candidates will not be retained.
 
NB: SASSETA reserves the right not to make an appointment.
 
DISCLAIMER: SASSETA employs appropriate, reasonable technical and organisational measures designed to prevent unlawful access, loss or damage of personal information. By applying for a vacant position at SASSETA you expressly give SASSETA consent to process your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (“POPIA”), the SASSETA Recruitment Policy/Procedures, the SASSETA’s POPIA Policy and the SASSETA’s Privacy Policy.
 
PLEASE APPLY HERE`],postedDate:"14/8/2024",iframe:"",uuid:"p257a50ec-bf71-4c0e-b89a-38b3f6693469"}],te={"durban university of technology (dut) vacancies":"https://www.govpage.co.za/durban-university-of-technology-dut-vacancies-blog/durban-university-of-technology-dut-vacancies6561966","mangosuthu university of technology vacancies":"https://www.govpage.co.za/mangosuthu-university-of-technology-vacancies-blog/mangosuthu-university-of-technology-vacancies3982390","rhodes university vacancies":"https://www.govpage.co.za/rhodes-university-vacancies-blog/rhodes-university-vacancies7060617","sefako makgatho health sciences university (smu) vacancies":"https://www.govpage.co.za/sefako-makgatho-health-sciences-university-smu-vacancies-blog/sefako-makgatho-health-sciences-university-smu-vacancies2248204","tshwane university of technology (tut) vacancies":"https://www.govpage.co.za/tshwane-university-of-technology-tut-vacancies-blog/tshwane-university-of-technology-tut-vacancies4390102","university of the free state (ufs) vacancies":"https://www.govpage.co.za/university-of-the-free-state-ufs-vacancies-blog/university-of-the-free-state-ufs-vacancies2334411","university of limpopo vacancies":"https://www.govpage.co.za/university-of-limpopo-vacancies-blog/university-of-limpopo-vacancies5892431","university of kwazulu natal (ukzn) vacancies":"https://www.govpage.co.za/university-of-kwazulu-natal-ukzn-vacancies-blog/university-of-kwazulu-natal-ukzn-vacancies5032336","university of mpumalanga vacancies":"https://www.govpage.co.za/university-of-mpumalanga-vacancies-blog/university-of-mpumalanga-vacancies9905494","university of pretoria (up) vacancies":"https://www.govpage.co.za/university-of-pretoria-up-vacancies-blog/university-of-pretoria-up-vacancies2734122","university of south africa (unisa) vacancies":"https://www.govpage.co.za/university-of-south-africa-unisa-vacancies-blog/university-of-south-africa-unisa-vacancies6091061","university of western cape (uwc) vacancies":"https://www.govpage.co.za/university-of-western-cape-uwc-vacancies-blog/university-of-western-cape-uwc-vacancies3741114","vaal university of technology (vut) vacancies":"https://www.govpage.co.za/vaal-university-of-technology-vut-vacancies-blog/vaal-university-of-technology-vut-vacancies9601539","ekurhuleni west tvet college vacancies":"https://www.govpage.co.za/ekurhuleni-west-tvet-college-vacancies-blog/ekurhuleni-west-tvet-college-vacancies4507119","tshwane north tvet college vacancies":"https://www.govpage.co.za/tshwane-north-tvet-college-vacancies-blog/tshwane-north-tvet-college-vacancies5163904","mnambithi tvet college vacancies":"https://www.govpage.co.za/mnambithi-tvet-college-vacancies-blog/mnambithi-tvet-college-vacancies2120474","capricorn tvet college vacancies":"https://www.govpage.co.za/capricorn-tvet-college-vacancies-blog/capricorn-tvet-college-vacancies7929777","ehlanzeni tvet college vacancies":"https://www.govpage.co.za/ehlanzeni-tvet-college-vacancies-blog/ehlanzeni-tvet-college-vacancies7378189","kwazulu natal department of transport vacancies":"https://www.govpage.co.za/kwazulu-natal-transport-vacancies-blog/kwazulu-natal-department-of-transport-vacancies5835135","north west department of health vacancies":"https://www.govpage.co.za/north-west-health-vacancies-blog/north-west-department-of-health-vacancies6964746","city of johannesburg vacancies":"https://www.govpage.co.za/city-of-johannesburg-metropolitan-municipality-vacancies-blog/city-of-johannesburg-vacancies5914232","city of tshwane vacancies":"https://www.govpage.co.za/city-of-tshwane-metropolitan-municipality-vacancies-blog/city-of-tshwane-vacancies5963644","national credit regulator (ncr) vacancies":"https://www.govpage.co.za/national-credit-regulator-ncr-vacancies-blog/national-credit-regulator-ncr-vacancies7860878","eastern cape development corporation (ecdc) vacancies":"https://www.govpage.co.za/eastern-cape-development-corporation-ecdc-vacancies-blog/eastern-cape-development-corporation-ecdc-vacancies6015075","eastern cape liquor board (eclb) vacancies":"https://www.govpage.co.za/eastern-cape-liquor-board-eclb-vacancies-blog/eastern-cape-liquor-board-eclb-vacancies1446823","mpumalanga economic growth agency (mega) vacancies":"https://www.govpage.co.za/mpumalanga-economic-growth-agency-mega-vacancies-blog/mpumalanga-economic-growth-agency-mega-vacancies2454279","trade & investment kwazulu-natal (tikzn) vacancies":"https://www.govpage.co.za/trade-and-investment-kwazulu-natal-tikzn-vacancies-blog/trade-investment-kwazulu-natal-tikzn-vacancies8533691","johannesburg water vacancies":"https://www.govpage.co.za/johannesburg-water-vacancies-blog/johannesburg-water-vacancies8307651","agricultural sector education training authority (agriseta) vacancies":"https://www.govpage.co.za/agricultural-sector-education-training-authority-agriseta-vacancies-blog/agricultural-sector-education-training-authority-agriseta-vacancies5923732","financial and accounting services sector education and training authority (fasset) vacancies":"https://www.govpage.co.za/agricultural-sector-education-training-authority-agriseta-vacancies-blog/agricultural-sector-education-training-authority-agriseta-vacancies5923732","health and welfare sector education and training authority (hwseta) vacancies":"https://www.govpage.co.za/health-and-welfare-sector-education-and-training-authority-hwseta-vacancies-blog/health-and-welfare-sector-education-and-training-authority-hwseta-vacancies7401869","safety and security, sector education & training authority (sasseta) vacancies":"https://www.govpage.co.za/safety-and-security-sector-education-training-authority-sasseta-vacancies-blog/safety-and-security-sector-education-training-authority-sasseta-vacancies7416213"},ie={title:ee,blogPosts:ne,departments:te},ae="govpage-private-sector",oe=[],se={},re={},le={title:ae,blogPosts:oe,departments:se,businesses:re},w=10;function ue(){const[i,r]=h.useState(1),[a,s]=h.useState(null);h.useEffect(()=>{if(a){const p=document.querySelector(".modal a.btn.btn-primary");p&&p.remove()}},[a]);const n=F(j,ie,Y,K,le,$),o=Math.ceil(n.length/w),l=n.slice((i-1)*w,i*w),d=p=>{r(p)},g=p=>{s(p)},c=()=>{s(null)};return e.createElement("div",null,e.createElement(P,{paginatedData:l,onPostClick:g}),e.createElement(E,{currentPage:i,totalPages:o,onPageChange:d}),a&&e.createElement("div",{className:"modal",onClick:c},e.createElement("div",{className:"modal-content",onClick:p=>p.stopPropagation()},e.createElement("span",{className:"close",onClick:c},"×"),e.createElement("div",{className:"modal-body"},e.createElement("img",{src:a.imgSrc||a.iconLink,alt:"company logo"}),e.createElement("h2",null,a.title||a.jobTitle),e.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:a!=null&&a.details?a.details:H((a==null?void 0:a.content)||"")}}),a.apply&&e.createElement("a",{href:a==null?void 0:a.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),a.href&&e.createElement("a",{href:a==null?void 0:a.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}export{ue as default};
