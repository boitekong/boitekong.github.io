import{R as e,P as i,r as g,A as _,j as O,k as L}from"./vendor-DasOq3Un.js";import{u as q,c as j,f as B}from"./index-LaKI5QJ5.js";/* empty css             */function C({currentPage:a,totalPages:r,onPageChange:t}){const s=()=>{const o=[],l=Math.max(1,a-1),d=Math.min(r,l+3);for(let h=l;h<=d;h++)o.push(h);return o},n=o=>{t(o);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return e.createElement("div",{className:"pagination"},e.createElement("button",{onClick:()=>n(a-1),disabled:a===1},"Previous"),s().map(o=>e.createElement("button",{key:o,className:o===a?"active":"",onClick:()=>n(o)},o)),e.createElement("button",{onClick:()=>n(a+1),disabled:a===r},"Next"))}C.propTypes={currentPage:i.number.isRequired,totalPages:i.number.isRequired,onPageChange:i.func.isRequired};const k=({pdfImages:a})=>{const[r,t]=g.useState(1),[s,n]=g.useState(!1),[o,l]=g.useState(1),d=g.useRef(null),h=()=>{const m=new Image;m.src=a[o-1],m.onload=()=>{const u=d.current,f=u.getContext("2d"),v=window.devicePixelRatio||1,N=s?window.innerWidth:u.parentElement.clientWidth,x=Math.min(N/m.width,1),A=r*x,y=m.width*A,b=m.height*A;u.width=y*v,u.height=b*v,u.style.width=`${y}px`,u.style.height=`${b}px`,f.clearRect(0,0,u.width,u.height),f.scale(v,v),f.drawImage(m,0,0,y,b)},m.onerror=()=>{console.error("Failed to load image:",m.src);const u=d.current,f=u.getContext("2d");f.clearRect(0,0,u.width,u.height),f.font="20px Arial",f.fillStyle="red",f.fillText("Failed to load page",10,50)}};g.useEffect(()=>{h()},[r,s,o]);const c=()=>t(m=>Math.min(m+.1,2)),p=()=>t(m=>Math.max(m-.1,.5)),M=()=>n(!0),T=()=>n(!1),I=()=>{o<a.length&&l(o+1)},D=()=>{o>1&&l(o-1)};return e.createElement("div",{className:`pdf-viewer-container ${s?"full-view":"min-view"}`},s&&e.createElement("div",{className:"pdf-navbar"},e.createElement("button",{className:"minimize-view-btn",onClick:T},e.createElement(_,null)),e.createElement("div",{className:"zoom"},e.createElement("button",{onClick:c},e.createElement(O,null)),e.createElement("button",{onClick:p,disabled:r<=.5},e.createElement(L,null))),e.createElement("div",{className:"pdf-pagination"},e.createElement("button",{onClick:D,disabled:o<=1},"Prev"),e.createElement("span",null,"Page ",o," of ",a.length),e.createElement("button",{onClick:I,disabled:o>=a.length},"Next"))),e.createElement("canvas",{onClick:M,ref:d,className:"pdf-viewer-canvas"}))};k.propTypes={pdfImages:i.array.isRequired};function S({pdfImages:a,isLoaded:r}){return e.createElement("section",{className:"pdf-post"},r?e.createElement("div",{className:"pdf-container"},e.createElement(k,{pdfImages:a})):e.createElement("div",{className:"placeholder pdf-container-placeholder"}))}S.propTypes={pdfImages:i.array.isRequired,isLoaded:i.bool.isRequired};function E({iframeUrls:a}){const[r,t]=g.useState(!1),[s,n]=g.useState(0),o=c=>{c.stopPropagation(),t(p=>!p)},l=()=>{n(c=>c<a.length-1?c+1:c)},d=()=>{n(c=>c>0?c-1:c)},h=Array.isArray(a)?a[s]:a;return e.createElement("div",{className:`google-doc-viewer ${r?"fullscreen":""}`},e.createElement("iframe",{src:h,allowFullScreen:!0,className:"google-doc-iframe"}),e.createElement("div",{className:"navigation-buttons"},Array.isArray(a)&&e.createElement(e.Fragment,null,e.createElement("button",{className:"prev-doc-button",onClick:d,disabled:s===0},"Previous"),e.createElement("button",{className:"next-doc-button",onClick:l,disabled:s===a.length-1},"Next"))),e.createElement("button",{className:"toggle-fullscreen",onClick:o},r?"Exit Full Screen":"Full Screen"))}E.propTypes={iframeUrls:i.oneOfType([i.string,i.arrayOf(i.string)]).isRequired};function F(a,r){return e.useMemo(()=>{if(a.length===0)return e.createElement(e.Fragment,null);const s=({innerHTML:n})=>e.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:n}});return s.propTypes={innerHTML:i.string.isRequired},e.createElement("section",null,a.map((n,o)=>{var l,d;return e.createElement("article",{className:"job-post",key:o,onClick:()=>r(n)},n.imgSrc||n.iconLink?e.createElement("div",{className:"company-logo"},e.createElement("img",{loading:"lazy",src:n.imgSrc||n.iconLink,alt:"company logo"})):null,e.createElement("p",{className:"title"},(n==null?void 0:n.title)||(n==null?void 0:n.jobTitle)),((l=n==null?void 0:n.content)==null?void 0:l.length)>0?e.createElement(s,{innerHTML:n.content}):((d=n==null?void 0:n.details)==null?void 0:d.length)>0?e.createElement(s,{innerHTML:n.details}):n!=null&&n.iframe?e.createElement(E,{iframeUrls:n.iframe}):null,!(n!=null&&n.iframe)&&e.createElement("button",{className:"read-more-button",onClick:()=>r(n)},"Read More"))}))},[a,r])}function P({paginatedData:a,onPostClick:r}){const[t]=q(5e3);return e.createElement("div",{id:"posts"},a.map(s=>s.type==="pdf"?e.createElement(S,{key:s.id,pdfImages:s.pdfImages,isLoaded:t}):e.createElement(R,{key:s.id,post:s,onPostClick:r})))}P.propTypes={paginatedData:i.arrayOf(i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string})).isRequired,onPostClick:i.func.isRequired};function R({post:a,onPostClick:r}){return F([a],r)}R.propTypes={post:i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string}).isRequired,onPostClick:i.func.isRequired};const H=[{file:"1.pdf",images:["./assets/pdf_images/1/1_page_1.png","./assets/pdf_images/1/1_page_2.png"]},{file:"10.pdf",images:["./assets/pdf_images/10/10_page_1.png","./assets/pdf_images/10/10_page_2.png"]},{file:"11.pdf",images:["./assets/pdf_images/11/11_page_1.png","./assets/pdf_images/11/11_page_2.png"]},{file:"12.pdf",images:["./assets/pdf_images/12/12_page_1.png"]},{file:"13.pdf",images:["./assets/pdf_images/13/13_page_1.png","./assets/pdf_images/13/13_page_2.png"]},{file:"14.pdf",images:["./assets/pdf_images/14/14_page_1.png","./assets/pdf_images/14/14_page_2.png"]},{file:"15.pdf",images:["./assets/pdf_images/15/15_page_1.png","./assets/pdf_images/15/15_page_2.png"]},{file:"16.pdf",images:["./assets/pdf_images/16/16_page_1.png","./assets/pdf_images/16/16_page_2.png"]},{file:"17.pdf",images:["./assets/pdf_images/17/17_page_1.png"]},{file:"18.pdf",images:["./assets/pdf_images/18/18_page_1.png"]},{file:"19.pdf",images:["./assets/pdf_images/19/19_page_1.png"]},{file:"2.pdf",images:["./assets/pdf_images/2/2_page_1.png"]},{file:"20.pdf",images:["./assets/pdf_images/20/20_page_1.png"]},{file:"21.pdf",images:["./assets/pdf_images/21/21_page_1.png","./assets/pdf_images/21/21_page_2.png"]},{file:"22.pdf",images:["./assets/pdf_images/22/22_page_1.png","./assets/pdf_images/22/22_page_2.png"]},{file:"23.pdf",images:["./assets/pdf_images/23/23_page_1.png","./assets/pdf_images/23/23_page_2.png"]},{file:"24.pdf",images:["./assets/pdf_images/24/24_page_1.png"]},{file:"25.pdf",images:["./assets/pdf_images/25/25_page_1.png","./assets/pdf_images/25/25_page_2.png"]},{file:"26.pdf",images:["./assets/pdf_images/26/26_page_1.png"]},{file:"27.pdf",images:["./assets/pdf_images/27/27_page_1.png"]},{file:"28.pdf",images:["./assets/pdf_images/28/28_page_1.png"]},{file:"29.pdf",images:["./assets/pdf_images/29/29_page_1.png"]},{file:"3.pdf",images:["./assets/pdf_images/3/3_page_1.png"]},{file:"30.pdf",images:["./assets/pdf_images/30/30_page_1.png"]},{file:"31.pdf",images:["./assets/pdf_images/31/31_page_1.png"]},{file:"32.pdf",images:["./assets/pdf_images/32/32_page_1.png","./assets/pdf_images/32/32_page_2.png","./assets/pdf_images/32/32_page_3.png","./assets/pdf_images/32/32_page_4.png","./assets/pdf_images/32/32_page_5.png","./assets/pdf_images/32/32_page_6.png","./assets/pdf_images/32/32_page_7.png","./assets/pdf_images/32/32_page_8.png","./assets/pdf_images/32/32_page_9.png","./assets/pdf_images/32/32_page_10.png","./assets/pdf_images/32/32_page_11.png","./assets/pdf_images/32/32_page_12.png","./assets/pdf_images/32/32_page_13.png","./assets/pdf_images/32/32_page_14.png","./assets/pdf_images/32/32_page_15.png","./assets/pdf_images/32/32_page_16.png","./assets/pdf_images/32/32_page_17.png","./assets/pdf_images/32/32_page_18.png","./assets/pdf_images/32/32_page_19.png","./assets/pdf_images/32/32_page_20.png","./assets/pdf_images/32/32_page_21.png","./assets/pdf_images/32/32_page_22.png","./assets/pdf_images/32/32_page_23.png","./assets/pdf_images/32/32_page_24.png","./assets/pdf_images/32/32_page_25.png","./assets/pdf_images/32/32_page_26.png","./assets/pdf_images/32/32_page_27.png","./assets/pdf_images/32/32_page_28.png","./assets/pdf_images/32/32_page_29.png","./assets/pdf_images/32/32_page_30.png","./assets/pdf_images/32/32_page_31.png","./assets/pdf_images/32/32_page_32.png","./assets/pdf_images/32/32_page_33.png","./assets/pdf_images/32/32_page_34.png","./assets/pdf_images/32/32_page_35.png","./assets/pdf_images/32/32_page_36.png","./assets/pdf_images/32/32_page_37.png","./assets/pdf_images/32/32_page_38.png","./assets/pdf_images/32/32_page_39.png","./assets/pdf_images/32/32_page_40.png","./assets/pdf_images/32/32_page_41.png","./assets/pdf_images/32/32_page_42.png","./assets/pdf_images/32/32_page_43.png","./assets/pdf_images/32/32_page_44.png","./assets/pdf_images/32/32_page_45.png","./assets/pdf_images/32/32_page_46.png","./assets/pdf_images/32/32_page_47.png","./assets/pdf_images/32/32_page_48.png","./assets/pdf_images/32/32_page_49.png","./assets/pdf_images/32/32_page_50.png","./assets/pdf_images/32/32_page_51.png","./assets/pdf_images/32/32_page_52.png","./assets/pdf_images/32/32_page_53.png","./assets/pdf_images/32/32_page_54.png","./assets/pdf_images/32/32_page_55.png","./assets/pdf_images/32/32_page_56.png","./assets/pdf_images/32/32_page_57.png","./assets/pdf_images/32/32_page_58.png","./assets/pdf_images/32/32_page_59.png","./assets/pdf_images/32/32_page_60.png","./assets/pdf_images/32/32_page_61.png","./assets/pdf_images/32/32_page_62.png","./assets/pdf_images/32/32_page_63.png","./assets/pdf_images/32/32_page_64.png","./assets/pdf_images/32/32_page_65.png","./assets/pdf_images/32/32_page_66.png","./assets/pdf_images/32/32_page_67.png"]},{file:"33.pdf",images:["./assets/pdf_images/33/33_page_1.png"]},{file:"34.pdf",images:["./assets/pdf_images/34/34_page_1.png"]},{file:"35.pdf",images:["./assets/pdf_images/35/35_page_1.png","./assets/pdf_images/35/35_page_2.png"]},{file:"36.pdf",images:["./assets/pdf_images/36/36_page_1.png"]},{file:"37.pdf",images:["./assets/pdf_images/37/37_page_1.png","./assets/pdf_images/37/37_page_2.png"]},{file:"4.pdf",images:["./assets/pdf_images/4/4_page_1.png","./assets/pdf_images/4/4_page_2.png"]},{file:"5.pdf",images:["./assets/pdf_images/5/5_page_1.png"]},{file:"6.pdf",images:["./assets/pdf_images/6/6_page_1.png","./assets/pdf_images/6/6_page_2.png","./assets/pdf_images/6/6_page_3.png","./assets/pdf_images/6/6_page_4.png"]},{file:"7.pdf",images:["./assets/pdf_images/7/7_page_1.png"]},{file:"8.pdf",images:["./assets/pdf_images/8/8_page_1.png"]},{file:"9.pdf",images:["./assets/pdf_images/9/9_page_1.png"]}],G="/assets/agency_icons/minopex.png",W="minopex",U=[{jobTitle:"HRD Assistant (Human Resource Development)",publishedDate:"Published 20 August 2024",expiryDate:"Closing Date: 27 August 2024",location:"Rustenburg, North West",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Minerals Operations Executive (Pty) Ltd</label>
                    </div>

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_BusinessUnitName">Business Unit</label>
                        <label for="">Kroondal 1</label>
                    </div>


                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="MinimumExperience">Minimum experience</label>
                    <span><label for="Mid-Senior">Mid-Senior</label></span>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Kroondal Operations in Rustenburg.<br><br><strong>Description</strong> <br>The purpose of the Training Assistant is to be responsible for the effective administration and support of the Training department. Will also provide general assistance and administrative support to the training centres on every site.<br><strong><br>Duties and Responsibilities<br><br></strong><ul><li>Provide comprehensive administrative assistance to the Training Department, ensuring smooth and efficient operations.</li><li>Facilitate effective learning environments by organizing and setting up training sessions, and evaluating the effectiveness of existing training programs to ensure they meet company objectives.</li><li>Update and maintain training databases and matrices, ensuring accuracy and accessibility of all training records.</li><li>Ensure that all training activities comply with MQA, ISO standards, and company practices, where applicable, and assist in the preparation for audits.</li><li>Assist in coordinating and monitoring training and development activities for both new and existing employees, ensuring alignment with company goals and requirements.</li><li>Participate in the creation and revision of training materials and technical documentation, ensuring they are up-to-date and meet current training standards and procedures.</li><li>Provide day-to-day support to various departments regarding their training and development needs, acting as a liaison between employees and the Training Department.</li><li>Administer and control tasks necessary to maintain the training system database, including updating training records, employee profiles, and filing systems.</li><li>Prepare and distribute training reports for management as requested, offering insights into training activities and outcomes.</li><li>&nbsp;Work with management to schedule training activities, ensuring that all training requirements are met according to the planned timeline.</li><li>Implement and monitor quality control systems for all relevant training programs, ensuring they adhere to Minopex standards and training best practices.</li></ul><strong><strong>Qualification Requirements</strong><br></strong><ul><li>Matric with a certificate in HR / HRD / ETDP</li><li>Computer Literate in MS Office (Advanced Excel and Word)</li><li>Valid driver’s licence code B, EB or C1 (advantageous)</li></ul><strong>Experience and Skills&nbsp;Requirements<br></strong><ul><li>Minimum 1 - 2 years’ experience in a HR / HRD environment (advantageous)</li><li>Knowledge of Learning Management Systems (advantageous)</li><li>English Language Proficiency</li><li>&nbsp;Time management skills</li></ul><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/kbrlqh" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/kbrlqh",iconLink:"/assets/agency_icons/minopex.png",uuid:"pf4926f3f-4d29-4ad7-ac11-b5876764f8a6"},{jobTitle:"Process Section Supervisor",publishedDate:"Published 16 August 2024",expiryDate:"Closing Date: 23 August 2024",location:"Aggeneys, Northern Cape",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Northern Cape Metallurgical Operations (Pty) Ltd (Gamsberg)</label>
                    </div>



                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="MinimumExperience">Minimum experience</label>
                    <span><label for="Mid-Senior">Mid-Senior</label></span>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at a site close to Aggeneys in the Northern Cape.<br><br><strong>Description<br></strong><br>The purpose of this position is to supervise a section in the production area to ensure that production targets are achieved according to the production plan.<br><br><strong>Duties and Responsibilities<br></strong><ul><li>Attend shift handover to obtain previous shift information and schedule shift resources accordingly</li><li>Perform visual inspections of the work area to identify problems and report to the Shift Supervisor</li><li>Monitor production according to shift targets</li><li>Supervise and maintain a high standard of housekeeping</li><li>Provide maintenance support to the Engineering department</li><li>Identify causes of spillage in the plant and generate suggestions to minimise the spillage</li><li>Continuously monitor equipment failure and efficiency</li><li>Report breakdowns to the Shift Supervisor</li><li>SHEQ awareness and management within the section</li><li>Monitor and maintain plant parameters to achieve KPI’s</li><li>Investigate and attend to visible process related maintenance problems, e.g. replacement of screens, idlers etc. where engineering is not required</li></ul><strong>Qualification Requirements<br></strong><ul><li>Grade 12</li><li>National Certificate Mineral Processing Level 2 or equivalent Minerals Processing Qualification will be advantageous</li></ul><strong>Experience and Skills&nbsp;Requirements<br></strong><ul><li>Minimum 3 years’ experience as a Plant Operator</li><li>English language proficiency</li><li>Time management skills</li><li>Supervisory skills</li><li>Computer Literate in MS Office</li><li>Flotation circuit operation experience advantageous</li><li>Valid driver’s licence code B, EB or C1</li></ul><br><br><br><br><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/qd6oq4" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/qd6oq4",iconLink:"/assets/agency_icons/minopex.png",uuid:"pa24df04e-e484-4e37-8b72-206694f5f60e"},{jobTitle:"Process Shift Supervisor",publishedDate:"Published 16 August 2024",expiryDate:"Closing Date: 23 August 2024",location:"Aggeneys, Northern Cape",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Northern Cape Metallurgical Operations (Pty) Ltd (Gamsberg)</label>
                    </div>



                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="MinimumExperience">Minimum experience</label>
                    <span><label for="Mid-Senior">Mid-Senior</label></span>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at a site close to Aggeneys in the Northern Cape.<br><br><strong>Description<br></strong><br>This position is responsible for the effective supervision of the required shift to ensure that shift processes are operational, controlled and maintained<br><br><strong>Duties and Responsibilities<br></strong><ul><li>Investigate, diagnose problems and breakdowns to determine resource requirements</li><li>Perform inspections in accordance with the Mine Health and Safety Act regulations and analyse previous shift information</li><li>Co-ordinate and monitor equipment availability to ensure adherence to production parameters</li><li>Report equipment efficiencies according to the production requirements</li><li>Communicate equipment availabilities and changes to relevant stakeholders to minimize production delays</li><li>Attend to breakdowns immediately to minimize down time</li><li>Ensure the adherence to the specified process parameters within the respective sections</li><li>Identify causes of spillage in the plant and generate suggestions to eliminate the spillage</li><li>Ensure adherence to Process Standards and Procedures, COP Master File, SHEQ and legislative requirements</li><li>Continuously monitor production information to ensure the attainment of shift objectives</li><li>Perform administrative duties to ensure record accuracy and availability</li></ul><strong>Qualification Requirements<br></strong><ul><li>Grade 12</li><li>National Certificate Mineral Processing Level 2 or equivalent Minerals Processing qualification will be advantageous</li></ul><strong>Experience and Skills&nbsp;Requirements<br></strong><ul><li>Minimum 5 years’ experience as a Process Section Supervisor</li><li>5 years of platinum , base metal and flotation experience</li><li>English language proficiency</li><li>Computer Literate in MS Office</li><li>Presentation skills</li><li>Time management skills</li><li>Attention to detail</li><li>Employee Relations and People Management skills</li><li>Supervisory skills</li><li>Valid driver’s licence code B, EB or C1</li></ul><br><br><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/jeasmp" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/jeasmp",iconLink:"/assets/agency_icons/minopex.png",uuid:"p61e2e822-84d0-4fb1-b2d3-d9cf0736deed"},{jobTitle:"Production Superintendent",publishedDate:"Published 16 August 2024",expiryDate:"",location:"Aggeneys, Northern Cape",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Northern Cape Metallurgical Operations (Pty) Ltd (Gamsberg)</label>
                    </div>



                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="MinimumExperience">Minimum experience</label>
                    <span><label for="Mid-Senior">Mid-Senior</label></span>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br>This position will be based at a site close to Aggeneys in the Northern Cape.<br><br><strong>Description</strong> <br>The purpose of the position is to be responsible for the effective supervision of the process operations to ensure that all plant processes are operational, controlled and maintained. <br><br><strong>&nbsp;</strong><strong>Duties and Responsibilities<br></strong><ul><li>Ensure compliance with the Company’s Health and Safety responsibilities</li><li>Effective planning of short to medium term production to ensure optimum utilization of available plant capacity</li><li>Ensure materials and supplies are available for production processes</li><li>Production operations are performed according to policies and procedures</li><li>Production targets are met according to specified standards&nbsp;</li><li>Production sections are maintained according to requirements</li></ul><strong><strong>Qualification Requirements</strong><br></strong><ul><li>Grade 12</li><li>National Certificate Mineral Processing Level 2 or equivalent Minerals Processing Qualification will be advantageous</li></ul><strong>Experience and Skills&nbsp;Requirements</strong><br><ul><li>10 years’ experience in a plant production environment with advanced process operation knowledge and experience</li><li>English language proficiency</li><li>Good communication and interpersonal skills</li><li>Time management skills</li><li>Supervisory skills</li><li>Computer Literate in MS Office</li><li>Flotation circuit operation experience advantageous</li><li>Valid driver’s licence code B, EB or C1</li></ul><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/yfbtak" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/yfbtak",iconLink:"/assets/agency_icons/minopex.png",uuid:"pe391f54b-2fac-40d0-a059-c131045dedd1"}],z={iconLink:G,title:W,blogPosts:U},Q="/assets/agency_icons/SA-Youth.png",Y="SA-Youth",J=[{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADYAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p746852bc-24a0-4a80-a0d8-537d6449afb8"}],V={iconLink:Q,title:Y,blogPosts:J},K="/assets/agency_icons/pro-personnel.jpg",Z="pro-personnel",X=[{jobTitle:"Bookkeeper",startDate:"2024-08-15 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Bryanston",region:"Gauteng"},details:"Qualifications and Experience needed:* Grade 12* Related qualification to bookkeeping* Sage experience is a MUST* 2-5 years working experience as a Bookkeeper* Candidate must be available to start immediatelyResponsibilities:* Keeping track of all financial transactions, including purchase, sales, receipts and payments in the accounting software or ledgers.* Ensuring that invoices are paid on time and that the company receives payments from clients* Regularly comparing the company's financial records with bank statements to ensure accuracy and identify any discrepancies* Updating and maintain the general ledger, which is the primary record of all financial transactions* Creating basic financial reports, such as income statements, balance sheets and cash flow statements, to provide insight into the company's financial status.* Making sure that financial records comply with relevant laws and regulations and staying up to date with the changes.* Managing petty cash funds, tracking it use and reconcile it regularly* Supporting audits, providing documentation and information during financial audits to verify the accuracy of financial reports",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002523-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd01d76f2-4d5c-4d9f-9e77-ea0b560b5978"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in Web development, graphic design or related field* Proficiency in Adobe creative suite (photoshop, Illustrator, In design)* Basic understanding of web development&nbsp; beneficial* Knowledge of SEO best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail orientated with s string focus on quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast phased environment* Project management skills and adaptability to changing project requirements",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002493-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p7d3de690-0bc8-4d08-9b3b-a4de383feade"},{jobTitle:"Web Analyst (Web Developer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in web development, graphic design or related field.* Proficiency in HTML, CSS, JavaScript, PHP, JSE, Jason, WordPress and SEO* Design/Creative experience - beneficial* Basic understanding of Adobe Creative suite (Photoshop, Illustrator, InDesign)* Ability to create wireframes, mockups and prototypes* Basic understanding of UX/UI principals and best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail-orientated with strong focus and quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast-paced environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002494-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p5d5b2f74-7561-4dd4-835d-4b65501520d1"},{jobTitle:"Application Developer",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Proficiency in programming languages such as MS Mausi, Visual Studio, C Angular and React* Strong understanding of mobile and web application development* Ability to manage multiple projects simultaneously with effective project and time management skills.* Excellent problem-solving skills and attention to detail* Experience in creating visually appealing and user-friendly interfaces* Motivation to continuously learn and implement the latest software technologies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002495-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p18b0612d-7818-4d07-adf7-7b5512daf131"},{jobTitle:"Counter Sales Assistant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Bela Bela",region:"Limpopo"},details:"Minimum Qualifications:Must have Grade 12 or equivalent&nbsp;Must be fluent in Afrikaans and English&nbsp;Previous Counter Sales will be an advantage&nbsp;Previous technical / paint counter sales experience will be an added advantage&nbsp;Energetic, hardworking, diligent individual",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002521-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p63c39d26-1815-4160-93ac-6ba418e8d1e0"},{jobTitle:"Micro Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Koster",region:"North West"},details:"The Company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are dedicated to producing high-quality, dried micro-algae year-round while minimizing environmental impact. We are seeking a highly skilled and motivated Micro-algae Plant Production Manager to join our team and lead our state-of-the-art facility.Job Overview: The Micro-algae Plant Production Manager will be responsible for overseeing all aspects of our Micro-algae operations. This includes managing micro-algae plant growth cycles, ensuring optimal growing conditions, managing packaging operations both quantity and quality, managing operational staff, coordinating maintenance requirements and implementing best operating practices for maximum yield and quality. The ideal candidate will have a strong background in food &amp; beverage processing, plant science, microbiology, horticulture, hydroponics or micro-algae systems, with an understanding of process operations, aquatic chemistry and water treatment. Strong team leadership skills and the ability to perform in a pressured environment with stringent production requirements is a must. The incumbent will report to the Technical Manager.Key Responsibilities:&nbsp;1. &nbsp; &nbsp; &nbsp;General Management:&nbsp;Operational Oversight: Manage the day-to-day operations of the micro-algae production facility, ensuring all production, maintenance, quality and packaging processes run smoothly and efficiently.Resource Allocation: Allocate resources effectively to maximize production efficiency and minimize waste.Budget Management: Develop and manage the production budget, ensuring cost-effective operations.Regulatory Compliance: Ensure compliance with all local, provincial, state regulations related to micro-algae farming and food safety.Continuous Improvement: Identify opportunities for process improvements and implement changes to enhance productivity and quality.&nbsp;2. &nbsp; &nbsp; &nbsp;Technical Management:&nbsp;Micro-algae Plant Growth Optimization: Ensure optimal growing conditions are adhered to (light, temperature, humidity, nutrient levels) for various micro-algae species to maximize yield and quality.System Maintenance: Oversee the maintenance and operation of micro-algae systems, including troubleshooting and resolving technical issues.Nutrient Management: Adhere to nutrient delivery schedules and tailor to the specific needs of different batches. Feedback to the Technical manager on any concerns and optimization requirements.Data Analysis: Utilize data from sensors and other monitoring equipment to make informed decisions about environmental adjustments and resource management.Innovation: Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions into the production process.Technical Expertise: Utilize knowledge of micro-algae systems and plant physiology to manage optimize production.Troubleshoot and resolve technical issues with micro-algae equipment and systems.Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions.3. &nbsp; &nbsp; &nbsp;People Management:Team Leadership: Lead, train, and supervise a team of micro-algae plant and laboratory technicians, fostering a positive and collaborative work environment.Performance Management: Conduct regular performance evaluations, provide feedback, and develop improvement plans for team members.Training and Development: Identify training needs and provide ongoing education to staff on best practices, safety protocols, and new technologies.Task Delegation: Assign tasks and monitor performance to ensure productivity and adherence to quality standards.Conflict Resolution: Address and resolve any interpersonal issues or conflicts within the team promptly and effectively.4. &nbsp; &nbsp; &nbsp;Quality Control:Oversee quality control activities in the on-site laboratory and supervise laboratory staff.Monitor micro-algae plant health and growth to ensure adherence to the necessary quality specifications, identifying and addressing any issues promptly.Conduct regular inspections to ensure compliance with health and safety as well as good manufacturing standards.Ensure detailed records of micro-algae plant growth, environmental conditions, and production metrics are maintained.5. &nbsp; &nbsp; &nbsp;Inventory and Resource Management:Manage inventory of inoculum cultures, nutrients, and other plant supplies.Ensure efficient use of resources to minimize waste and reduce costs.Coordinate with suppliers to maintain an adequate stock of necessary materials.6. &nbsp; &nbsp; &nbsp;Reporting and Analysis:Prepare regular reports on production performance, including yield, quality, and resource usage. Analyse data to identify trends, areas for improvement, and opportunities for increased efficiency.Present findings and recommendations to senior management.Prepare regular management accounts and report on variations to budget&nbsp;Qualifications:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Bachelor’s degree in Agronomy, Horticulture, Hydroponics, Plant Science, Microbiology or a related field. Master’s degree preferred.· &nbsp; &nbsp; &nbsp; &nbsp;Minimum of 3-5 years of experience in Food &amp; Beverage processing, Horticulture, Hydroponics or Micro-algae farming or a related field.Technical Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems.· &nbsp; &nbsp; &nbsp; &nbsp;Proficiency in using plant management software and other relevant technology.· &nbsp; &nbsp; &nbsp; &nbsp;Experience with data analysis and interpretation to inform operational decisions.&nbsp;Management Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Proven leadership and team management skills.· &nbsp; &nbsp; &nbsp; &nbsp;Excellent problem-solving abilities and attention to detail.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to work in a fast-paced, dynamic environment and adapt to changing priorities.· &nbsp; &nbsp; &nbsp; &nbsp;Strong organizational and multitasking abilities.Interpersonal Skills:· &nbsp; &nbsp; &nbsp; &nbsp;Effective communication and interpersonal skills.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to motivate and develop team members.· &nbsp; &nbsp; &nbsp; &nbsp;Conflict resolution and negotiation skills.Benefits:&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Competitive salary and performance-based bonuses.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Paid time off and holidays.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Opportunities for professional development and advancement.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002510-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pa9c2da55-f2a1-4c20-b3d2-678e9a518287"},{jobTitle:"Assistant Accountant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:`Requirements:

Minimum of 5 years of experience in an accounting practice.
Strong knowledge of VAT and income tax regulations.
Detail-oriented with excellent organizational skills.
Ability to work independently and as part of a team.
Proficient in Pastel Accounting Software
Advanced skills in Microsoft Excel
Experience with SARS e-filing and handling SARS correspondence and registrations
Salary payroll management and reconciliations using VIP and Easyfile
VAT calculations and submissions
Preparation and submission of EMP and Income Tax returns
Profficient in Afrikaans&nbsp;
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002519-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p6635dbca-570e-455f-9255-f46778ff9237"},{jobTitle:"Micro-Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Koster",region:"North West"},details:"The company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are seeking a highly skilled and motivated micro-algae plant production manager to join the team.Qualifications:* Bachelor's degree in Agronomy, horticulture, hydroponics, plant science, microbiology or related field, master's degree preferred.* Minimum of 3-5 years of experience in food &amp; beverage processing, horticulture, hydroponics or micro-algae farming or related fieldTechnical Skills:* Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems* Profiency in using plant management software and other relevant technology* Experience with data analysis and interpretation to inform operational decisions.Management Skills:* Proven leadership* Excellent problem-solving abilities and attention to detail* Ability to work in fast paced dynamic environment and adapt to changing priorities* Strong organizational and multitasking abilities",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002522-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pe990ed23-6d4d-43f0-9aed-667c99fee8a6"},{jobTitle:"Assistant Accountant",startDate:"2024-08-13 - 2024-09-12",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Experience:* Must have at least 5 years working experience within an accounting firm.* Must have knowledge of the following:- SARS e-filing- SARS correspondence and registration- Salaries, payroll and reconciliation (VIP &amp; Easy file)- Knowledge of calculations and statements- EMP- Income tax statementsComputer knowledge in:* Pastel* Excel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002520-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pc99eb6b0-2430-4a2b-b7cc-a1aef8aa9df2"},{jobTitle:"Butchery Manager",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications &amp; Experience:* A valid matric certificate with mathematics* Grade 1 Meat cutting certificate or recognized butchery apprenticeship* A clear criminal record* At least 5 years' experience in all aspects of day to day running and managing of a meat market* Computer literate* Point of sale systems knowledge is desirable* Self motivated, self-dedicated and self-determined with a creative flair* Strong numerical skills* Be able to manage staff* Be able to work under pressure* Be able to be firm and resolute in decision with a high degree of discipline",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002516-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p5b0c47d4-cab5-4f27-8b38-421fd3cde5d8"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications:* Grade 12 (matric)* 1-2 years' experience within a sales or internal sales environment* Experience within electrical motors industry will be a advantage* Must be PC literate with working knowledge of MS OfficeRequirements:* Excellent communications skills, proficient in the English language written and oral, must be able to legibly read and write reports* Eagerness to learn about our products* Must be able to work under pressure and meet deadlines to ensure customer commitments are met* Strong motivational and interpersonal skills* Administration skills* ReliableTravel:* Works predominately within the office* Required to visit customer from time to time* Work normal hours* Should be able to work on weekends, and holidays and overtime when needed* Position may require out of town travel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002518-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p0ef97e48-b34d-449d-96ec-6be0f2615d76"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:`As Customer Service you are required to attracts potential customers by answering product and service questions; suggesting information about other products and services.&nbsp; Process orders, prepare correspondences and fulfil customer needs to ensure customer satisfaction.&nbsp; The positions requires to expedite and facilitates the flow of new units within the operations to ensure that products are delivered to our clients within the agreed time frame, and per quality standardsResponsibilities:&nbsp;Customer Service for new and repair facility

Handling telephonic enquiries.
Providing product information to existing and potential customers.
Providing verbal and typed quotations to customers.
Following up on quotations.
Providing guidance to customers in the use/application of the companies products.
Entering of sales order on our operating system.
Compiling of documentation required for projects and tenders.
Arranging and attending of sales events.
Updating quote schedule on daily basis.
Forwarding order acknowledgement to customers and sales representatives.
Follow up on all weekly back orders and promises kept.
Focused on reducing the slow moving stock in the branch.

Sales

Excellent customer service resulting in increasing of sales.
The position has direct contact with customers, and Marathon internal departments and it will be required to assist and take ownership of customers and other Sales Representatives commercial and related queries when requested.
Maintain working relationships with existing clients to ensure that they receive exceptional service and to identify potential new sales opportunities.
The success of the company is based on this position’s effective handling of internal and external customer needs.

&nbsp;Qualifications

Grade 12 (Matric)
1 – 2 years’ experience within an Sales or Internal sales environment.
Experience within electrical motors industry will be an advantage.
Must be PC literate with working knowledge of Microsoft Office.
Must have valid Driver's License.

&nbsp;Requirements &nbsp;

Excellent communication skills, proficient in the English Language Written and Oral, must be able to legibly read and write reports.
Eagerness to learn about our products.
Must be able to work under pressure and meet deadlines to ensure customer commitments are met.
Strong motivational and interpersonal skills
Sales and listening skills
Administrations skills
Proven track record.

&nbsp;Salary

Base salary up to R19&nbsp;000.00 monthly (Depending on experience)
Medical Aid - 50% company contribution (Discover dependant on plan)
Pension Fund –10.8% company contribution
Guaranteed 13th Cheque
Total cost including 13th Cheque R307516,00

&nbsp;Travel

Works predominately within the office.
Required to visit customers from time to time .
Works normal hours
Is subject to work beyond normal working hours, evenings, weekends and holidays should the need arise.
Attends and participates in continuing educational programs designed to keep you abreast of changes in your profession.
Position may require out of town travel.

&nbsp;Language

The business language in South Africa is English.
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002517-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pcc33d50c-1ca4-4ecc-99b8-8c87d9caa1cc"},{jobTitle:"Senior C&amp;I Project Engineer",startDate:"2024-08-08 - 2024-09-07",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:"Qualifications Required:* Bachelor's degree in Electrical Engineering, Control Engineering, Instrumentation Engineering or related field* Professional Engineering (PE) license or equivalent certification preferred.Experience:* Minimum of 8-10 years working experience in control and instrumentation engineering, with 5 years in a senior or lead role.*Extensive experience in mining and processing plant environment* Proven track record of successfully delivering large-scale C&amp;I projectsTechnical Skills:* Provenience in control system design and programming (e.g. PLC, DCS, SCADA, systems).* Strong knowledge of instrumentation selection, installation and maintenance* Familiarity with industry standards such as ISA, IEC and IEEESoft Skills:* Excellent project management and orgnizational skills* Strong analalytical and poblem solving abilities* Effective communication and interpersonal skills* Ability to work collboratory in a team-orientated environmentPhysical work requirerments:* Ability to work in a mining and processing plant environment, including exposure to dust, noise and varying temperatures* Willingness to travel to remote sites as requires* Availability to work extended hours and on call support as needed.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002514-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3d612e92-702b-4920-800f-de835b617b79"},{jobTitle:"Finance and Admin Manager",startDate:"2024-08-08 - 2024-09-07",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Degree in financial accounting or equivalent* Post graduate qualification in financial accounting* must have completed SAICA articles* Minimum of 5 years experience in a management level* CA/CIMA qualification would be a advantage* Proven experience in developing and implementing financial models and systemsSkills &amp; Knowledge Required:* Understanding of tax and financial laws/legislation* The ability to draft and interpreted financial statements* Excellent interpersonal skills* Excellent communications skills* Good understanding of governce and assusrance frameworks* Indepth knowledge of Excel* Strategic thinking and analytical skills* Expert knowledge of financial systems and process* Excellent computer literacy skills* Strong management and leadership skills* Ability to mentor and guide staff* Supervisor attention to detail",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002515-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd5aeda6b-9b4d-464e-86ac-8cca40977cdc"},{jobTitle:"Credit Manager",startDate:"2024-08-07 - 2024-09-06",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Midrand",region:"Gauteng"},details:`Job Purpose &amp; SummaryReporting to the Managing Director, the Credit Manager will have the overall responsibility for the credit/lending function. Key areas of responsibility include the following:

Making sound credit decisions in line with company’s risk appetite, tolerances and policies, procedures, and guidelines.&nbsp;
Developing and maintaining strong relationships with both the internal team and external partners to ensure stakeholder satisfaction
Monitoring market conditions and any regulatory changes that would require changes to credit policies, procedures, and guidelines

Key Accountabilities &amp; DutiesLoan origination and processing

Implement loan origination strategies with lending team
Review and recommend credit applications and transactions within assigned credit limits in a timely manner
Provide independent, objective reviews and recommendation to credit applications and other matters which have been agreed to and/or recommended by the Loan Officers
Review all loan applications and sign off prior to submission to senior management, to ensure the completion of due diligence and adherence to the company’s policies and guidelines
Provide motivation for recommendations on credit transactions/applications and communicate effectively with Loan Officers to ensure rationale and decision is clearly understood
Write succinct credit memos or credit announcements to communicate credit perspective and rationale for new credits and credit extensions
Communicate with Loan Officers about specific credit applications and transactions to seek further information and modifications, if needed. Discuss appropriate structuring for the deal and criteria required for approval. Ensure that all information is credible, accurate, and relevant, including analysis and evaluation of the technical aspects (e.g., financial analysis, credit terms, structure, and collateral)
Review approval letters and loan agreements to ensure credit terms and conditions are recorded
Review and recommend disbursements according to policies and guidelines to ensure lending conditions are met
Support the healthy and sustainable growth of a profitable loan portfolio by ensuring the credit granting and implementation is within the company’s prescribed asset quality standards
Maintain records of loan applications

Monitoring and Collections

Actively monitor loans after disbursement according to guidelines and policies
Oversee collections and implement collection activities timeously
Minimise bad debts

Reporting

Weekly, monthly, quarterly, semi-annually and annual reporting to senior management on lending activities
 Prepare reports for Board and external stakeholders

Organisation Development

Support Loan Officers to ensure client and other stakeholder satisfaction
Respond to and resolve escalated issues raised by the Loan Officer
Contribute to the development and implementation of sound SME lending guidelines and policies
Monitor market conditions and make recommendations for enhancements to existing policies, procedures and guidelines
Assess the impact of regulatory changes to existing policies, procedures and guidelines
Provide support in strategic projects, policy and process improvements initiatives related to the business

&nbsp;Occupational Experience &amp; Education Requirements

Bachelor’s Degree or diploma in business or a related field
Minimum 5 years SME lending experience is required
Additional SME support services experience is considered advantageous

Knowledge, Skills &amp; Attributes

Sound credit judgement. Ability to understand the risk return trade-off and come up with well thought-out solutions to mitigate credit risk
Ability to articulate complex credit applications into succinct and balanced recommendations
Understanding of commitment letters and other legal documents from a credit perspective
Financial Statement analysis experience
Understanding of SME lending practices and end-to-end credit process
Analytical skills and attention to details
Problem-solving capabilities and excellent organizational and time management skills
Proficiency with MS Office Suite of products
Must have valid Driver's License

Experience working with a lending softwareWe’re a fund manager with 12 months operations focusing on the SME space only. We offer two products, purchase order funding and invoice discounting. We’re looking for a Credit Manager to run the lending operations of our growing business. We have a preference for candidates that have purchase order and invoice discounting experience. Our operations are across the country, but the Credit Manager will be based in Johannesburg, Midrand with travel once or twice monthly to the operating offices. The budget for the role is R400,000 – R500,000 annual total cost to company before 10-20% annual bonus on achievement of targets.`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002513-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pfe972175-fa6f-4c04-91ff-5bf12dd30581"},{jobTitle:"Office Administrator",startDate:"2024-08-05 - 2024-09-06",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Rustenburg",region:"North West"},details:"The client needs the following requirements:* Have a valid driver's license* Valid grade 12 certificate* Previous working experience in office administration:- MS Excel &amp; Pastel essential- Previous stock take experience- Excellent communication skills and customer service- Be willing to assist where needed- Some HR knowledge and experience to your advantage.- Must be willing to start immediatelySalary R10000",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002467-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p25a0d9d6-44ba-427a-938a-a5171763c05d"},{jobTitle:"Credit Manager",startDate:"2024-08-05 - 2024-09-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Midrand",region:"Gauteng"},details:"Occupational Experience &amp; Education Requirements:* Bachelors degree or diploma in business or a related field* Minimum 5 years SME lending experience is required.* Additional SME support services experience is considered an advantage.Knowledge, Skills &amp; Attributes:* Sound credit judgement, ability to understand the risk return trade-ff and come up with well thought solutions to mitigate credit risk.* Ability to articulate complex credit applications into succinct and balanced recommendations* Understanding of commitment letters and other legal documents from a credit perspective* Financial statement analysis experience* Understanding of SME lending practices and end to end credit process* Analytical skills and attention to details* Problem solving capabilities and excellent organizational and time Mangement skillsproficiency with MS Office suite of products* Experience working with a lending software",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002509-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p90d6e9f3-e0cd-4cd8-bd5b-d1c6ff41f642"},{jobTitle:"Research Analyst",startDate:"2024-08-05 - 2024-09-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durbanville",region:"Western Cape"},details:`PRIMARY RESPONSIBILITIES:

Doing rigorous primary and secondary research across a range of projects to develop credible, meaningful insights that help to solve development problems
Developing effective written documents and presentations that communicates insights identified
Presenting research work both internally and externally
Engaging with external stakeholders – regulators, policymakers, private sector players, donor organizations and/or development partners
Contributing to proposals
Coaching and mentoring more junior team members (Interns)

QUALIFICATIONS AND EXPERIENCE:

A completed master’s degree in economics, public policy, international development, finance or other related fields
A strong interest in research-related activities and passion for achieving for positive impact in the world
Excellent written and verbal communication skills
Good quantitative and analytical skills
The willingness and ability to travel within South Africa and abroad
At least 1 year of research experience would be to your advantage

Advantageous experience, not required:

French speaking
Experience with Stata
Exposure to development or behavioral economics, financial inclusion or international development
`,contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002511-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd2307087-6c45-4f78-935e-bf61c732c933"},{jobTitle:"Debtors Clerk",startDate:"2024-08-05 - 2024-09-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:`Key Responsibilities:

Process and manage all invoices related to mining operations.
Ensure accurate and timely billing to clients.
Maintain detailed records of transactions and manage accounts receivable.
Reconcile invoices and resolve any discrepancies.
Communicate with clients to follow up on outstanding payments.
Collaborate with the finance team to improve processes and reporting.
Assist in preparing financial reports and statements.
Travel to mining sites to deliver and follow up invoicing

Qualifications:

Diploma in Finance, Accounting, or related field.
Proven experience as a Debtors Clerk or in a similar role.
Familiarity with accounting software, Eworks and MS Office (especially Excel).
Strong attention to detail and excellent organizational skills.
Ability to work independently and as part of a team.
Excellent communication and interpersonal skills.
Experience in the mining industry.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002512-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p605ccfa4-66bd-4526-9c25-11f1dd1daa2d"},{jobTitle:"Supervisor",startDate:"2024-08-01 - 2024-08-31",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Rustenburg",region:"North West"},details:"The ideal candidate needs to have the following requirements and experience:* Must have a valid grade 12 certificate* Must know MS Excel (formulas) very well* Previous working experience as a supervisor within a cleaning/ hygiene environment.* Must be in possession of a valid driver's license* Excellent communications skills in Afrikaans and English* Delivery of stock and invoices to clients* Conduct and assist in weekly vehicle and equipment checks* Be able to start immediately",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002508-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p8fd2364b-0c69-488a-90e9-45b973717589"},{jobTitle:"Counter Salesman (Truck Parts)",startDate:"2024-07-31 - 2024-08-30",vacancyType:"Permanent",jobSpecFields:"Automotive",location:{city:", Midrand",region:"Gauteng"},details:`Requirements

Matric
Computer literate, Pastel experience will be advantageous
Proven experience in truck parts sales, specifically for Scania, Volvo, M.A.N, and Mercedes-Benz.
Strong knowledge of truck parts and their applications.
Excellent customer service and communication skills.
Ability to function effectively in a high-pressure, fast-paced environment.
Strong organizational skills and attention to detail.
Self-motivated with a drive to meet and exceed sales targets.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002506-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pa719e2b9-105e-4b62-bf8c-73cdddd5f664"},{jobTitle:"Sales Representative - Mining",startDate:"2024-07-31 - 2024-08-30",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:`Qualifications:

Previous Sales experience within the mining industry is essential.
Strong technical skills related to mining equipment and processes.
Proven track record of achieving sales targets.
Excellent communication and negotiation skills.
Loyal, trustworthy, and hardworking nature.

Key Responsibilities:

Develop and maintain strong relationships with clients in the mining industry.
Utilize technical skills to understand and meet customer needs.
Achieve and exceed sales targets to drive company growth.
Provide excellent customer service and support.

Benefits:

Company vehicle and petrol allowance.
Competitive salary of R15,000 per month.
Pension plan after 3 months.
Commission of 3.5% of turnover after reaching a target of R300,000.
Work-life balance with working hours:

Monday to Thursday: 7:30 AM - 4:00 PM
Friday: 7:30 AM - 1:00 PM


`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002507-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pe3035b90-c386-46a5-a093-891972f9fc7e"},{jobTitle:"Counter Salesman",startDate:"2024-07-29 - 2024-08-31",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Midrand",region:"Gauteng"},details:`As a counter salesman, you'll play a crucial role in our operations, assisting customers with their parts needs, providing expert advice, and ensuring they find exactly what they're looking for. If you have a passion for vehicles and a knack for customer service, we want to hear from you!Key Requirements:

Proven experience in truck and bus parts sales.
Expertise in Scania, Volvo, and Mercedes parts.
Strong communication and interpersonal skills.
Ability to thrive in a fast-paced environment.
Excellent customer service skills.

Join our team and become a valued member of our growing company. Apply now and take the next step in your career!Offering a Competitive salary, medical aid and pension`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002400-WHN",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p43e91d91-f62f-4d1b-bda2-8b8f42dbd431"},{jobTitle:"Junior HR Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications and Experience:* Appropriate qualification in Human Resource* Minimum of 5 years' experience as a HR generalist in a retail or similar environment* Proficient knowledge of employment laws such as BCEA, LRA, EE, SDA and Health and Safety regulationsPrimary Responsibilities:* Employee relations* Talent acquisition* Talent Management* Training and development* BBBEE &amp; employment equity* HR Administration",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002501-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p48de3f48-b9a5-4dbc-ae80-d9600cb946e1"},{jobTitle:"Assistant Software Development Manager (Information Technology)",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Ladybrand",region:"Freestate"},details:"Qualifications:* Appropriate bachelor's degree or similar tertiary qualification or experience in IT software development* Proficiency in MS Project or similar project management tools* Minimum of 10 years of experience in software development* Minimum of 5 years management experience regarding IT Software development projectsPrimary Responsibilities:* Instigation and management of IT Software development projects through the evaluation and monitoring of business priorities, the determination of IT priorities and allocation thereof to IT programmers, as well as the productive sand effective utilizations of IT resources* Co-ordinate and planning of IT software development projects, including the approval and finalization of technical specifications* Coordinate and monitoring of testing the implementation of IT Software development projects* Liaising with business regarding IT software projectsSkills:* Excellent communications and language skills in Afrikaans and English* Excellent organizational and project management skills* Experience regarding software development in COBOL and the IDM-i operating systems* Previous experience in a agri-business environemental would be beneficial* Excellent people skills and the ability to lead and manage a team and work together in a team* Strong analytical skills and the ability to function independently",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002496-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pb3f5d2f9-05fc-470d-84a0-17239a9b8406"},{jobTitle:"IT Support Technician",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Bedfordview",region:"Gauteng"},details:"Qualifications:* Minimum of 4 years of practical experience in IT Support* Valid driver's license is a mandatory requirement* Relevant technical certification and qualifications* Willingness to travel occasiobnally to meet the needs of our diverse client base.Skills and Comptenencies:* Strong problem solving and troubleshooting skills* Excellent communication and interpersonal skills* Ability to work independently sand collaborator with a team* Familiarity with various operating systems and software applicationsResponsibilities:* Provide first level technical support to end users, ensuring prompt issue resolution* Install, configure and maintaine hardware and software components* Collabroate with the IT team to implement and support IT support* Troublshoot and resolve hardware, software and network issues* Ensure the smooth operation of computer systems within the organization",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002497-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd7645184-46de-431d-948f-c536a230d562"},{jobTitle:"Grain Marketing Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Agricultural &amp; Farming",location:{city:", Bloemfontein",region:"Freestate"},details:`Primary Responsibility

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

Salary - R70 000 - R80 000 per month`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002498-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p64f646d6-3dfc-49ae-909a-1ae7b795aab5"},{jobTitle:"Grain Marketing Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Agricultural &amp; Farming",location:{city:", Bloemfontein",region:"Freestate"},details:"Qualifications:* Appropriate degree or diploma in Agriculture* 5 Years management experience* 5 years' experience in grain marketing* Registered safex trader with SAIFM* Valid driver's licenseSkills:* Excellent communications skills in Afrikaans and English* Computer literacy (MS Office)* Strong customer service orientation and excellent numerical skills* Strong sales and marketing skills* Strong negotiation skillsPrimary Responsibilities:* Marketing and management of grain against set targets* Management of staff* Negotiation with clients* Innovative marketing strategies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002499-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p64747b41-f448-40b8-a63a-a09405af120b"},{jobTitle:"Quality Assurance Generalist",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Services",location:{city:", Midrand",region:"Gauteng"},details:"Qualifications:* A national diploma or degree in Quality Management or a related qualification at an NQF 6/7 level.* 2 Years quality management or Quality Assurance and /or Business Process Redesign* 1 Year Risk Management (advantageous)* 1 Year aviation (advantageous)Primary Responsibilities:Maintain the Quality management System (QMS)* Develop and maintain QMS documents* Develop, implement and validate quality standards, processes and procedures withing the organization in accordance with the organizational QMS based on ISO 9001* Provide the organizations QMS training (induction and refresher) to all staff to increase awareness and understanding* Regular update the Bam Owl system with the latest audit informationMonitor Compliance with Quality Standards:* To audit business units' conformances* Auditing that all standards, processes and procedures have been documented and the adherences of all organizations staff to requirements* Tracking and following up on outstanding corrective actions*Submitting statical activity reportsPromote Continuous Improvement:* Develop implement and maintain a continuous improvement mechanism* Promote the quality management systemsDevelopment of QMS Templates* Develop organizational templates for policy, procedures work instructions (including TGM and MOP's) forms and checklistsRisk Identification:* Relevant risks are identified at an operational level* Report on identifies risks and inform EWRM function accordinglyDesign and Redesign of Processes (BPR)* Design and redesign of processes (BPR) within the organization to improve the organizations business process efficacy.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002502-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p00d1eeea-7252-441a-91a0-1ce7bbfcbe41"},{jobTitle:"Quality Assurance Generalist",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Services",location:{city:", Midrand",region:"Gauteng"},details:`Primary ResponsibilitiesMaintain The Quality Management System (QMS)

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

People with Disabilities will be prioritized`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002500-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p7bfa9b58-61aa-430f-9bba-b6da047f43bd"},{jobTitle:"Key Accounts Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Midrand",region:"Gauteng"},details:"Qualifications and Experience:* Valid grade 12 Certificate* Diploma in Marketing or business-related field* Previous experience in Account Management or territory sales* Experience managing major national accounts at head office level* Excellent understanding of FTTx networks and products* Solid track record of meeting targets* Working in close collaboration with an international OEM (Product mix, strategy, sales process) such as CommScope or similar would-be advantage)Primary Responsibilities:* Developing and sustaining solid relationships with key clients that bring in the most revenue for the company*&nbsp; Addressing and resolving key clients' complaints* Acting as the main point of contact between key clients and internal teams* Communicating and collaborating with logistics departments to ensure that the key clients' needs are met* Compiling reports on account progress, goals and forecasts for account teams and stakeholders* Developing a thorough understanding of key clients' needs and requirements and preparing customized solutions* Negotiations contracts with key clients and meeting established deadlines for the fulfillment of each client's long term goals",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002504-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3fbe6fbe-2afe-446c-8e32-f51db75d30a2"},{jobTitle:"Junior HR Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"QUALIFICATIONS AND EXPERIENCE:Appropriate qualification in Human Resources.Minimum of 5 years’ experience as a HR Generalist in a retail or similar environment.Proficient knowledge of employment laws such as BCEA, LRA, EE, SDA, and Health and Safety regulationPRIMARY RESPONSIBILITIES:Employee RelationsProvide advice to line managers regarding the conduct and misconduct management processes.Provide advice to line managers and investigate/process disciplinary cases.Participate in consultations with organised labour.Coach Line Managers on effective delivery of Disciplinary hearings.Represent the organisation at CCMA (Conciliation and Arbitration).Talent AcquisitionEnsure that the Resourcing process is adhered to and jobs are timeously advertised and tracked on the&nbsp; Social Media channels externally and via hand delivered applications internally.Manage, coordinate and conduct interviews with Line Managers and make recommendations.Utilize various sourcing methods, including job boards, social media, and networking, to identify and engage with potential candidates.Evaluate candidates' skills, experience, and cultural fit during the interview process.Manage communication with candidates, ensuring a positive candidate experience.Assist with onboarding and orientation processes as needed.Talent ManagementCoach Line Managers on Performance Management Process and Talent &amp; Org Review process.Coordinate the performance appraisal documents and consolidate performance ratingsDrive the succession planning.Facilitate employment equity target setting and monitor profile.Organisational DesignLiaise with Line Managers to get rationale for proposed positions, draw up new proposed org and submit to HR Manager for sign off.Drive change management initiatives in line with the business and organisational objectivesTraining &amp; DevelopmentConduct training needs and skills gap analysis for business and assist with the compiling of training&nbsp;budget/plan.Plan, coordinate and organise relevant training initiativesFacilitate HR training including adhoc refresher for employees and Line Managers.Assist with reporting, analysis and submission of the Workplace Skills Plan and the Annual Training Report for relevant SETAFacilitate the implementation and tracking of all related Skills Development legislative requirements. This includes (but is not limited to) Skills Development Plans, Annual Training Reports, Learnerships.BBBEE &amp; Employment EquityDrawing quarterly reports and discuss at EE meeting also using the same reports of appointmentsAssist with the compilation of EE and BBBEE info for Skills DevelopmentSupport and facilitate BBBEE Skills Development initiativesHR AdministrationManage new employee on-boarding process.Manage terminations and exit interviews.Manage the capturing of HR information and data into the relevant systems and assure the integrity of the data.Provide advice and information to management and employees on HR policies and proceduresAdvise management on work matters, career development, personal problems and industrial matters.Counsel employees on policies and rules relating to employment policies and programmes, and on the&nbsp; company’s rules and regulations.Prepare and analyse HR reports for HR Manager",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002503-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p07da9316-9dd7-457f-b02c-9a3899200a86"},{jobTitle:"Internal Sales",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Valid matric certificate* Excellent communications skills* Previous technical sales experience, to your advantage* Be able to start immediately* Have valid driver's license and own transport",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002490-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p86d7ba18-e952-49fc-8f9e-0cf8f49b47bf"},{jobTitle:"Accountant",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Position Title: Property Management Accountant&nbsp;Location: Rustenburg, South Africa&nbsp;Job Type: Full-time&nbsp;Reporting to: Managing Director&nbsp;&nbsp;Salary: Negotiable based on experience (12 -15k)&nbsp;Position Overview:The Property Management Accountant will be responsible for managing financial operations related to a large portfolio of properties, including budgeting, payment allocations, 10-year maintenance plans, levy increases, and financial reporting. The incumbent will also oversee audit procedures for Financial Year ends for Sectional Titles and Homeowners Associations, ensuring compliance with relevant regulations and standards. The accounting program is We Connect U (WCU), based on Pastel.&nbsp;Key Responsibilities:Budget Management:Develop and maintain annual budgets for properties within the portfolio.Monitor budget performance and variance analysis.Provide recommendations for budget adjustments as needed.Payment Allocations:Allocate payments received from property owners to relevant accounts, including levies, maintenance fees, and other expenses.Ensure accurate and timely processing of payments and reconcile accounts.10-Year Maintenance Plans:Collaborate with property managers to develop and update 10-year maintenance plans for properties.Analyse maintenance requirements, costs, and priorities to ensure effective planning and budget allocation.Levy Increases:Coordinate levy increase processes in accordance with legal requirements and stakeholder approvals.Communicate levy increases to property owners and address any inquiries or concerns.Financial Reporting:Prepare and analyse financial reports, including income statements, balance sheets, and cash flow statements.Provide regular financial updates to stakeholders and management.Audit Procedures:Oversee audit procedures for Financial Year ends for Sectional Titles and Homeowners Associations.Ensure compliance with relevant accounting standards and regulations.Coordinate with external auditors and provide necessary documentation and support during audits.&nbsp;WeConnectU Integration:Familiarize oneself with the WeConnectU platform and utilize it for financial management tasks.Work with the IT team to ensure effective integration of financial data into the WeConnectU platform.&nbsp;Compliance and Regulation:Ensure compliance with relevant laws, regulations, and industry standards governing financial management in the real estate sector.Stay informed about changes in regulations and update financial practices accordingly.&nbsp;Collaboration and Communication:Collaborate with property managers, stakeholders, and other departments to address financial concerns and achieve portfolio objectives.Communicate financial information effectively to non-financial stakeholders.&nbsp;Qualifications and Experience:Bachelor’s degree in accounting, Finance, or related field.Articles in financial accounting.Minimum of 3-5 years of experience in accounting or financial managementExperience with budgeting, financial analysis, and reporting.Proficiency in accounting software and Microsoft Excel.Experience or willingness to learn WeConnectU platform.&nbsp;Skills and Competencies:Strong analytical and problem-solving skills.Excellent attention to detail and accuracy.Ability to work independently and collaboratively in a team environment.Effective communication and interpersonal skills.Proactive and adaptable to changing priorities.Knowledge of South African real estate regulations and compliance requirements.&nbsp;Working Conditions:This role is based in Rustenburg, South Africa, and may require occasional travel to properties within the portfolio.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002491-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p21678fed-d605-4088-be5d-5fbb89bbc1f8"},{jobTitle:"Section Manager (U/G)",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Mining",location:{city:", Rustenburg",region:"North West"},details:`Responsibilities:
Assist in controlling, managing, and directing underground mining operations per regulations.
Minimum Requirements:
Grade 12 or NQF 4 EquivalentMine Manager's Certificate of Competency3-5 years’ experience as a Mine Manager (MHSA 2.6.1 or 3.1 appointment)Degree or NQF 7 Equivalent in Mining Engineering
Preferred Qualifications:
Management Programme / MDP / MAP3-4 years Trackless Mining experience
Skills and Knowledge:
Strong interpersonal skillsKnowledge of HR systems and related legislationProficient in MS Office and SAP System
Physical/Legal Requirements:
Medical fitness certificateClear criminal recordValid driving license`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002492-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p9f685f34-84db-499c-b735-de19a5cd7bbb"}],$={iconLink:K,title:Z,blogPosts:X},ee="govpage-public-sector",ne=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-joburg_orig.jpg",href:"https://www.govpage.co.za/city-of-johannesburg-metropolitan-municipality-vacancies-blog/city-of-johannesburg-vacancies2982540",title:"CITY OF JOHANNESBURG VACANCIES",content:[`CITY OF JOHANNESBURG
 
Group Corporate & Shared Services: Group Human Capital Management
6th Floor, B Block Metropolitan Centre, 158 Civic Boulevard, Braamfontein
PO Box 1049  Johannesburg, South Africa, 2000
Tel +27(0) 11 407 6111 - Fax +27(0) 11 339 1878
www.joburg.org.za
 `,`STUDENT INTERNSHIP CIRCULAR 016/2024 
 
Internship opportunity for all qualifying Students in the Johannesburg Community 
 
CLOSING DATE: MONDAY, 02 SEPTEMBER 2024 
 
STUDENT INTERNSHIP POSITION: HUMAN SETTLEMENTS DEPARTMENT 
 
An internship programme is an intervention by the City of Johannesburg to address the growing demand by a tertiary institution for students to undergo on-the-job exposure, as a pre-requisite to acquire an academic qualification or as a requirement after the acquisition of academic qualification to obtain experiential training. The City is committed to providing work-based training for students.
This internship opportunity is applicable to youth in the Johannesburg communities, who qualifies for this internship and have never participated in an internship programme before. 
This Vacancy is open to all qualifying STUDENTS in the Johannesburg Community for a period not exceeding 18 months 
Interested applicants are invited to apply for the positions listed in the circular. 
Complete the online job application form and attach all relevant documents (Certified Qualification/s, ID, and CV). 
Applicants are advised to use Google Chrome when applying for CoJ positions. 
The City of Johannesburg reserves the right not to make an appointment. 
Appointments will be made in accordance with the COJ Employment Equity policy and People with disabilities are encouraged to apply. 
The City of Johannesburg is an equal opportunity employer. 
Any misrepresentation or failure to disclose material information on the application form or CV will automatically disqualify your application. 
 
WHERE TO APPLY 
https://www.joburg.org.za/work_/Pages/Work%20in%20Joburg/Vacancies/2021%20Internships/2021-Internships.aspx

 
Applicants are respectfully informed that, if no notification of appointment/response is received within six (6) weeks of the closing date, they must accept that their application was unsuccessful. By submitting your application for a position at the City of Johannesburg, you are consenting that the personal information submitted as part of your application may be used for the purposes of the Recruitment and Selection and related process. In terms of the Talent Acquisition Policy of the City of Johannesburg, you hereby consent to the following risk checks should your application be shortlisted: Credit Record, CV validation and Employment record verification, Criminal check, and Identity validation.`,`The City of Johannesburg (CoJ), Human Settlements Department has the following Internship opportunity available for a period NOT exceeding eighteen 18 months 
 
Department: Human Settlements 
Branch: Executive Directors Office 
Designation: Internship 
Remuneration: (Qualification completed with min 360 credits): R9 531,54 pm (Basic Salary, no benefits) 
LOCATION: 222 Smit Street, Braamfontein 
 
Minimum Requirements: 
Grade 12 (NQF level 4) plus Degree (NQF level 7) in Business Management Administration/ Public Management or Public Administration. 
Only City of Joburg residents will be considered. 
 
Primary Function:
To perform developmental level professional administrative work, research, and analysis in support at Executive Directors Office at the Department of Human Settlements. To participate in the directorate day-to-day operations that include general office administration, monitoring and evaluation risk management and regulatory compliance, HR and involvement in administrative tasks related to long medium and short-range strategic planning. This further include contribution to development of Business Plan, Quarterly report and strategic planning concept notes. 
 
Key Learning Areas: 
Render developmental level professional administrative and support service in the Business Management Directorate. 
Site visits and research Analysis- Assist with verifying reported information by undertaking site visits and /or physical risk assessments to projects; 
Administrative tasks related to long, medium, short range strategic planning by assisting with. 
Transporting by hand of restricted documents dealing with all types of sensitive and confidential information. 
 
Leading Competencies: 
Computer Literacy and Office Applications; 
Language proficiency (reading and written) in English; 
Organisational skills; 
Excellent oral and written communication skills; 
Proficiency with computer software and applications and ability to analyse data using Microsoft Excel; 
Flexibility / adaptability; 
Interpersonal abilities; 
Anility to plan, organize and prioritise work; 
Self-confidence;
Creativity;
Numeracy.
 
Core Learning Competencies: 
Knowledge of council standard processes and procedures relating to providing administrative support, General. 
General knowledge of Municipal governments and city regulations / codes. 
Ability to work independently after receiving initial guidance; 
Ability to handle confidential information in a sensitive manner; 
Details oriented and team player; 
 
 
ENQUIRIES ONLY: 
Contact Person: Nonjabulo Sibiya 
Tel No: (011) 061 3141 
Please take note that only online applications will be considered. Please apply by using the following link below: 
https://share-eu1.hsforms.com/1mYevUzfVTDGeexJ-VXNenQew554
APPLY ONLINE VIA WEBSITE: www.joburg.org.za
CLOSING DATE: MONDAY, 02 SEPTEMBER 2024 
 
Applicants are respectfully informed that, if no notification of appointment/response is received within six (6) weeks of the closing date, they must accept that their application was unsuccessful. By submitting your application for a position at the City of Johannesburg, you are consenting that the personal information submitted as part of your application may be used for the purposes of the Recruitment and Selection and related process. Only shortlisted applicants will be contacted.`],postedDate:"20/8/2024",iframe:"",uuid:"pf0815e21-ddfb-4d98-acbf-f6fb792d5749"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-ekurhuleni_orig.png",href:"https://www.govpage.co.za/ekurhuleni-metropolitan-municipality-vacancies-blog/city-of-ekurhuleni-vacancies4415317",title:"CITY OF EKURHULENI VACANCIES",content:[` 
EKURHULENI METROPOLITAN MUNICIPALITY
 `,` 
 
 
GENERAL ASSISTANT (REFUSE AREAS & TEAMS) - ERWM19562
 
Closing Date: 2024-09-03
 
Department Environmental Resource & Waste Management Department (2019)
Location City of Ekurhuleni
Remuneration R 171,972.00 to R 235,896.00 - Basic salary per annum (plus benefits)
Assignment Type Permanent
 
Minimum Requirements:
Grade 9
Ability to perform the physical duties
 
Core Responsibilities:
Collect and remove refuse from residential, business and industrial premises
Place and remove litter bins and change the refuse bags
Physically clean litter on sidewalks, street and public parking areas
Operate the lifting and compaction controls of vehicles
Hook and empty 240 and 851 litre containers
Clean spillage of refuse during collection
Report defects on compaction unit of vehicles to driver
Clean and grease vehicles
Remove animal carcasses from roads, houses and vets
Ensure compliance with OHSA
 
Enquiries: Tel: 0860 54 3000
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE
 
 
 
 
 `,`TEAM LEADER (REFUSE AREAS & TEAMS) - ERWM19846
 
Closing Date: 2024-09-03
 
Department Environmental Resource & Waste Management Department (2019)
Location City of Ekurhuleni 
Remuneration R 217,920.00 to R 298,932.00 - Basic salary per annum (plus benefits)
Assignment Type Permanent
 
Minimum Requirements:
Grade 12
Relevant experience
 
Core Responsibilities:
Physical cleaning of litter on sidewalks, street and public parking areas
Placement and removal of litter bins and changing of refuse bags
Removal of animal carcasses from roads, houses and vets
Delivery of 851 litre and 240 litre refuse bins
Comply with safety rules and safe working procedures
Wash and grease refuse collection truck and other council vehicles
Occasional moving of furniture between offices
Responsible for safekeeping of tools and daily inventory of the number of bins on site
Clean the offloading ramp and between containers
Assist with general repairs to containers, refuse bins and equipment
Responsible for operating the hydraulic compaction and lift mechanisms on refuse removal truck
Ensure that the spillage that occurs during the load process is properly cleaned
Direct the Lorry Driver when reversing.
Control the work of co- workers
 
 
Enquiries: Tel: 0860 54 3000
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE`,`DIVISIONAL HEAD: SOCIAL DEVELOPMENT - HESD21164
 
Closing Date: 2024-08-25
 
Department Health & Social Development Department (2019)
Location City of Ekurhuleni
Remuneration R 1 461 024 to R 1 805 448 - Total cost to company
Assignment Type Fixed Term Contract
 
Key performance areas:
• Develop, manage and monitor overall social development strategies, practices and processes.
• Strategic capability and leadership to execute social development and sustainable strategy in response to organisation strategy.
• Communicate a meaningful strategic context that guide and direct the development of best practices, integration, process alignment and service delivery.
• Provide human and material resources to ensure efficient and effective execution of social development programme.
• Develop annual operating plan and secure resources necessary to achieve identified objectives consistent with the medium term requirements.
• Ensure effective implementation of Council resolutions with regard to governance and risk management through implementing risk management governance and compliance policy in own practice area to identify and manage governance and risk exposure liability.
• Oversee the preparations of monthly and annual budgets and financial reports in accordance with statutory and Council presentation requirements.

• Monitor end enforce effective financial controls, corporate governance and financial compliance throughout area of accountability.
• Develop and deliver on service level agreement (SLA) in alignment with the Batho-Pele principles, monitor feedbacks and ensure continued customer satisfaction.
• Improve internal and external customer satisfaction level.
• Build and sustain relationships with decision makers and interests groups in support of Divisional objectives.

Core Requirements:
• BA degree in Social Development
• Registration with South African Council for Social Services Professions (SACSSP).
• 5- 8 Years' Relevant Experience
• BA Honours to Masters in Social Work and Knowledge of Local Government Processes will be an Added Advantage
 
 
Interested candidates whose background and experience match these challenging and exciting positions are invited to apply using an online application form attached to the advertisement on the website of the City of Ekurhuleni (www.ekurhuleni.gov.za).

Enquiries: Tel: Natasja Havenga (011) 999 6356.

Note: The successful candidate who does not have the NQF Level 5 Finance Management qualification will be required to obtain it within 18 months, in terms of the National Treasury Requirement.

Appointments will be made on a 5 (five) year fixed term and will be subject to the signing of an employment contract, performance agreement and disclosure of financial interest. Candidates will be subjected to relevant competency assessment as well as security clearance / vetting processes.

Applications will not be considered if the necessary copies of the required qualifications, identity documents, driver’s license (if applicable) and current professional registration (if applicable), are not attached to the application / CV. Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE`],postedDate:"20/8/2024",iframe:"",uuid:"p8920477f-5af2-42ac-b4d1-177bcc9c26a9"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/nhls_orig.png",href:"https://www.govpage.co.za/national-health-laboratory-services-nhls-vacancies-blog/national-health-laboratory-services-nhls-vacancies2857639",title:"NATIONAL HEALTH LABORATORY SERVICES (NHLS) VACANCIES",content:[` 
NATIONAL HEALTH LABORATORY SERVICES (NHLS)
 `,`GUIDELINES TO APPLICANTS 
If you meet the requirements, kindly email a detailed CV to the relevant Practitioner/Administrator (Human Resources), quoting the reference number and the job title. Should you be in possession of a foreign qualification, it must be accompanied by an evaluation certificate from the South African Qualification Authority (SAQA). 
Proof of registration with a Professional body (e.g. HPCSA, SANC etc.) and other supporting documents should accompany all applications. e.g qualifications, Identity document, driver’s license etc. 
Response Email addresses of the relevant HR representative and is supplied at the end of each regional adverts. The onus is on the applicant to ensure that their application has been received. Incomplete applications and applications received after the closing date will not be considered. 
Candidates credentials will be subject to criminal record checks, citizen verification, financial record checks, qualification/Study verification, previous employment verification, social media accounts behavior/comments verifications. 
Candidates may be required to undergo competency/psychometric assessments, presentations, typing tests or any other related assessments. 
All health professional roles may be subjected to further assessment in line with the applicable proficiency matrix to determine the correct level. 
At its discretion, The NHLS reserves the right to remove the advertisement and or not to appoint. 
Correspondence will be limited to shortlisted candidates only. 
These positions are open to all employees of the NHLS Including the employees who are on contract in similar or different positions. 
Internal employees are required to complete a period of twelve months in their current role before they can be eligible to apply for transfer. 
The NHLS is an equal opportunity, affirmative action employer. The filing of posts will be guided by the NHLS employment Equity Targets. 
Successful applicants will be remunerated on the published scale associated with the post grade. This means that the remuneration of an applicant who is successful for a position that is lower than his/her current job grade will be adjusted downward with effect from the date of appointment. 
This is an open advert. External applicants are welcome to apply for this bulletin. 
 
CLOSING DATE: 23 August 2024`,`BUSINESS UNIT: ACADEMIC AFFAIRS AND RESEARCH 
DISCIPLINE: QUALITY ASSURANCE 
LOCATION: SANDRINGHAM 
POSITION: RESEARCH MONITORING AND EVALUATION MANAGER (FIXED TERM CONTRACT 12 MONTHS) (RE-ADVERTISED) 
PAY GRADE: D2 
REFERENCE NUMBER: CORPAARQA0824/001/01 
 
Key Job Responsibility 
■To identify and implement strategies and measures towards the development of Monitoring, Evaluation and Analytics tools that will lead to adherence to best research practices, substantial improvement to capacity development and provide effective M& E support and interventions for researchers across the NHLS. To develop and strengthen strategies for monitoring and evaluation of academic, research and grants related activities within the NHLS ■ Design, develop and introduce effective tools to monitor programme, project activities, progress and outputs at departmental, regional and institutional levels ■Develop monitoring and evaluation indicators to efficiently measure and report outputs and success■Monitoring and evaluation of overall achievements and progress including sustainability ■Facilitate and be involved in the training, mentoring, supervision as well as any other capacity building activities in biostatistics and M&E as required. ■Tracking, update and analysis of M&E data and information for effective reporting and interventions ■Provide reports (weekly, monthly, quarterly, half-yearly and annual) on NHLS academic, research and grant related activities ■Conduct capacity assessment on existing monitoring and evaluation system and impact analysis of effectiveness of existing programmes and initiatives■ Participate in annual project reviews and planning workshops and contribute to preparation of relevant reports. ■ Assist researchers with monitoring and evaluation tools and support them in their use. ■ Prepare and maintain monitoring and evaluation database. ■ Be actively involved in the writing and submission of scientific papers. ■ Identify and attract resources that will facilitate the role of the NHLS in spearheading the research agenda that promotes effective public health interventions. ■ Understanding of stakeholder requirements for monitoring and evaluation and advising AAR and researchers. ■ Perform other duties as required 
 
Minimum requirements & key competency: 
■ Master’s degree in Public Health, Epidemiology ,Information Technology, Computer Science or related field ■ PhD degree in Public Health, Epidemiology, Information Technology or related ( desirable)■ Eight (8) years’ experience in monitoring and evaluation inclusive of 5 years managerial/supervisory experience and 2 years in database development■ Two (2) years previous experience in a research environment (desirable)■ Sound knowledge of statistical packages preferably SAS or DSTATA:SQL,R or advanced Excel■ Knowledge of Redcap or related web applications■Designing/developing monitoring tools■ Data analysis and interpretation■ Research Methodology ■ Writing of grant proposals■ Computer Literacy■ Analytical skills■ Communication skills (verbal and written). ■ Interpersonal skills. ■Budgeting skills. ■ Data analysis and interpretation skills. ■ Scientific writing skills (Desirable). 
 
Contract is renewable at the discretion of the employer and subject to operational requirements. 
 
Enquiries may be directed to Ndabenhle Ngongoma @ (011) 386 6145, or e-mail application to Corporate2@nhls.ac.za
 
 
 
 
 
 
BUSINESS UNIT: CHARLOTTE MAXEKE ACADEMIC 
DISCIPLINE: CHEMICAL PATHOLOGY 
LOCATION: CHARLOTTE MAXEKE ACADEMIC HOSPITAL 
POSITION: MEDICAL TECHNOLOGIST (FIXED TERM CONTRACT ENDING 30 SEPTEMBER 2024) 
PAY GRADE: MT1 
REFERENCE NUMBER: CORPAARQA0524/001-10 
 
Key Job Responsibility 
■ Perform preventive equipment maintenance performed as per set schedule ■ Perform manual sample pre-treatment including pipetting samples and solvents. ■ Perform sample analysis using LC-MS/MS under the supervision of a laboratory scientist. ■ Adhere to analytical times and basic TAT for organizing and processing samples for a large study. ■ Adhere to analytical times and basic TAT when performing LC-MS/MS analysis of samples under the supervision of a senior laboratory scientist. ■ Verify and release test results. Verify QC of test results. ■ Collate data. ■ Monitor stock for operational needs. 
 
Minimum requirements & key competency 
■ National Diploma: Biomedical Technology (NQF Level 6) or Bachelor of Health Science: Biomedical Technology (NQF Level 7) ■ HPCSA registration as a Medical Technologist in Chemical Pathology or Clinical Pathology. ■ Perform sampling and analysis of blood, tissue and body fluid. ■ Preparation of samples for examination ■ Knowledge for the usage of specialized instrumentation. Knowledge of infection control and sterilization protocols ■ Accurate interpretation of results. Establish and Monitor programmes that ensure data accuracy. ■ Accuracy and organizational skills. ■Attention to detail strive for an error free standard ■ Ability to identify problems and troubleshoot. ■ Ability to work independently and collaboratively ■ Communication Skills (Verbal, Written & presentation) ■ Computer Literacy ■ Time management and evaluation skills. 

 
Contract is renewable at the discretion of the employer and subject to operational requirements. 
 
Enquiries may be directed to Ndabenhle Ngongoma@ (011) 386 6145, or e-mail application to Corporate2@nhls.ac.za`],postedDate:"20/8/2024",iframe:"",uuid:"p3f97f5c0-bee8-42f3-b36a-baabbcb84d0d"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/national-home-builders-registration-council-nhbrc.png?1724193975",href:"https://www.govpage.co.za/national-home-builders-registration-council-nhbrc-vacancies-blog/national-home-builders-registration-council-nhbrc-vacancies7683357",title:"NATIONAL HOME BUILDERS REGISTRATION COUNCIL (NHBRC) VACANCIES",content:[` 
NATIONAL HOME BUILDERS REGISTRATION COUNCIL (NHBRC)
 `,`CHIEF INFORMATION OFFICER
CONTRACT TYPE: PERMANENT
JOB GRADE: COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO: CHIEF FINANCIAL OFFICER
LOCATION: SUNNINGHILL
 
KEY DELIVERABLES
The Chief Information Officer (CIO) is responsible for providing vision and leadership for developing and implementing digital and technology initiatives that align with the mission and strategic objectives of the NHBRC. The CIO is further responsible for the planning and implementation of enterprise Information Technology systems in support of NHBRC operations to improve cost effectiveness, service quality and mission development.
 
The Individual will primarily be responsible for, but not limited to the following:
• Strategy Planning and Architecture
o Development of ICT strategy and architecture aligned to business strategy.
o Ensure measures are in place for implementation of ICT strategy and architecture.
o Align ICT policies, procedures and processes to support the IC strategy.
o Development of enterprise-wide architecture and processes which ensure that the strategic application of change is embedded in the management of the organisation.
• Technology and Operations Management
o Prioritise and implement suitable technology to enable and streamline all internal operations and help optimise their strategic benefits
o Oversee IT Service Delivery and ensuring high levels of service to the organisation.
o Ensure optimal functioning and maintenance of the NHBRC business support and customer-facing systems.
o Ensure adequate technical infrastructure capabilities in the organisation to ensure optimal performance.
o Develop business applications that match business requirements.
o Ensure effective management of Information Security Controls.
• People Management
o Manage headcount, recruit, and deploy resources as needed to balance the ICT function budget and leverage skills effectively.
o Ensure skills and capacity needs meet overall business ICT related product and services.
o Manage and oversee team performance through performance planning, coaching and performance appraisals.
o Maintain positive interpersonal relationships with team members and others by demonstrating productivity, initiative and flexibility.
• Governance, Risk and Compliance Management
o Identifies and manages risks to ICT services and solution by assessing potential risks and building contingencies into ICT Plans.
o Custodian of the NHBRC ICT governance framework and ICT Operating Model.
o Effectively assumes the role of institutional advocate for business management solutions and bring specialist expertise to assist in integrating ICT throughout the organisation.

o Implements appropriate ICT reporting to the Council, ARCO, ICTC, CEO, Executive Committee, and Senior Management and facilitate managers to develop reporting protocols, including quantitative and qualitative thresholds, and monitor the reporting process.
o Develop and oversee appropriate policies and procedures to guide the ICT function.
o Ensure compliance to Public Finance Management Act, Corporate Governance and other relevant Treasury regulations and standards.
o Manage the maintenance and enforcement of related Service Level Agreements to minimize business risk and ensure service continuity.
o Ensure that audit requests are promptly adhered to within the stipulated timelines.
• Financial Management
o Responsible for functional budget and overall financial management of the ICT function.
o Manage IT Service Level Agreements (SLA) with service providers.
o Implement and effectively manage the approved budgets, procurement plans, report variances, and monitor the implementation of remedial actions to minimise impact.
o Identify and analyse trends, review data and evaluate business options to ensure business cases are financially sound.
• Stakeholder Management
o Establish broad stakeholder involvement and communicates ICT solutions and services status.
o Build client relations by demonstrating professionalism, appropriate self-confidence, a facilitative communication style, and constructive response to client needs.
o Educate Management on Information Technology concepts by using internal control frameworks and other leading practices to design adequate and effective internal controls.
 
MINIMUM REQUIREMENTS:
• A bachelor’s degree (NQF7) in Information Technology is mandatory.
• Chartered Chief Information Officer (C-CIO) certification is mandatory.
• Minimum 10 years of working experience in an ICT environment with five (5) years at Management level.
• Industry-related certifications such as the following will be an added advantage: TOGAF, CGEIT, CRISC, CISM, CISSP, PRINCE 2, COBIT, ITIL.

COMPETENCIES AND SKILLS:
• An understanding of ICT strategy, enterprise architecture and its application at all levels in this environment and the skills to think strategically.
• A sound understanding of portfolio, programme and project management and a track record of delivering and enabling large-scale complex ICT projects.
• Knowledge of ICT standards and security
• At least five (5) years of ICT experience and management experience within the public sector.`,`ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Mr. Jabulani Ntshani
Tel: (011) 317 0146
 
CLOSING DATE: 2 SEPTEMBER 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Chief Information Officer” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates will be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.`],postedDate:"20/8/2024",iframe:"",uuid:"p1e4b441e-a798-49d4-9cde-ad884cebc67f"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/nsfas_orig.jpg",href:"https://www.govpage.co.za/national-student-financial-aid-scheme-nsfas-vacancies-blog/national-student-financial-aid-scheme-nsfas-vacancies3558260",title:"NATIONAL STUDENT FINANCIAL AID SCHEME (NSFAS) VACANCIES",content:[` 
NATIONAL STUDENT FINANCIAL AID SCHEME (NSFAS)
 `,`The following vacancy exists at NSFAS in Cape Town.
 
SENIOR SPECIALIST CONTINUOUS VERIFICATION
Type & Grade Permanent, D1
Vacancy No 26 of 2024/25 
Department & Unit Core Business Operations, Continuous Verification
 
POSITION OVERVIEW
To manage the funder setup process, including defining process cycle dates, disbursement mapping, allowance caps and annual student migration; whilst providing managerial onsite support for TVET Colleges and Universities in collaboration with the Student Services and Regional Coordination functions, to ensure seamless operations and effective data management.
 
RESPONSIBILITIES:
Policy, Systems & Procedure Implementation
• Implementing and reinforcing compliance procedures related to the NSFAS financial systems.
• Identifying opportunities and gaps utilizing the knowledge of compliance with legislation, policy and procedures regarding financial systems.
 
Core Strategic/Operations Objectives Implementation
• Manage the funder setup process, including defining process cycle dates, disbursement mapping, and allowance caps
• Analyse outstanding academic results and funding lists to ensure accurate data
• Resolve exceptions using SQL and Excel to analyse outstanding migrations
• Identify passed records within N+ and outstanding funding
• Communicate and resolve exceptions
• Compare previous funding to current academic year funding to identify discrepancies
• Review registrations received and generate reports from SQL or Excel
• Pinpoint potential exceptions and communicate resolutions
• Provide oversight on the duplicate registrations process
• Manage the duplicate registration process and responses
• Analyse and apply duplicate registration resolutions, including reversing records paid to incorrect institutions and processing unpaid records
• Handle adjustment exceptions and communicate with stakeholders
• Identify and resolve adjustment exceptions
• Analyse adjustment received for potential budget implications
• Review projection files to confirm correct students and amounts being disbursed and communicate the data to the finance department
• Communicate exclusions with exclusion reasons
• Reconcile paid records
• Report on disbursements paid
• Manage the cancellation process and communicate with stakeholders
• Create a dedicated mailbox for cancellations
• Transfer data to SQL Server to be included in disbursement runs
• Calculate reversals and communicate to the finance department
People Management & Ethical Leadership
• Manages and participation in the recruitment and selection of unit vacancies in line with EE targets.
• Delegates tasks to subordinates for implementation.
• Directs, inspires, coaches and mentor subordinates to deliver quality programmes in line with NSFAS Values.
• Manages and participates in leading the individual performance contracting and review process for responsible team/s.
• Manages and participates in all disciplinary matters of subunits related to performance and conduct issues.
Stakeholder Engagement & Relationships
• Serve as the primary point of contact for key stakeholders, including funders, academic institutions, and internal teams.
• Proactively identify and address stakeholder concerns, ensuring timely and effective resolutions
• Collaborate with stakeholders to develop and implement process improvements
• Facilitate cross-functional meetings and discussions to align on objectives and strategies
• Represent the department in meetings with senior management and external partners
Project Management & Leadership
• Manages multiple tasks and prioritise accordingly without compromising on quality of work
• Provide oversight and where required participate in projects to address identified needs
• Where required, analyse and interpret project reports upon completion of the project to evaluate return on investment and to recommend insights for future decision making.
Budget optimisation
• Manage expenditure in line with budget for all Continuous Verification related projects (where applicable)
• Monitors spend aligned to approved budget (where applicable).
Compliance Monitoring and Evaluation
• Provide Senior Specialist responsibilities over the Continuous Verification plan and the processes that support the implementation of key risk controls and established compliance risk mitigation processes
• Where required, support the Senior Manager in conducting monitoring reviews in line with the compliance monitoring plan.
Information & Knowledge Management
• Provide expert training and guidance to staff on all ranges of compliance issues in relation to Continuous Verification.
• Collaborate with the Senior Manager and ICT to build systems that enable the management of data obtained from different sources.
• Develop and deliver presentations to communicate findings and recommendations to management.
Reporting & Accountability
• Prepare monthly and quarterly reports on key performance indicators, process improvements, and stakeholder engagement
• Analyse data, identify trends, and provide insights to support decision-making.
 
DESIRED SKILLS AND EXPERIENCE
Minimum requirements:
• NQF7 Level qualification in commerce, information systems or related qualifications.
• Driver’s License
• Extensive experience (5+ years) in financial systems particularly in two or more of the following functions: data analysis, disbursements, financial reporting and forecasting.
• Experience (min. 2 years) in the education sector/industry
• Computer literacy – Intermediate MS Package Suite
• Strong analytical and problem-solving skills
• Proficiency in SQL and Excel for data analysis and reporting
• Excellent communication and stakeholder engagement/management skills
• Ability to work independently and as part of a team
• Attention to detail and a commitment to accuracy
• Understanding and knowledge of compliance with legislation, policy and procedures in regard to financial systems
• Knowledge and experience of relevant regulations and policies
Preferred
• Extensive experience (8+ years) in financial systems particularly in two or more of the following functions; data analysis, disbursements, financial reporting and forecasting.
• Extensive experience (8+ years) in the education sector/industry
• Experience with validation of data against standards determined by external stakeholders.
 
Behavioural Competencies:
• Effective Communication & Consultation
• Attention to detail/ Quality Control
• Monitoring & Evaluation
• Risk Awareness
• Integrity
• Accountability
• Planning & Organising (e.g. prioritisation & time management)
• Problem Analysis
• Decision Making (Judgement)
• Emotional Intelligence
• Resilience & Composure`,`REMUNERATION & BENEFITS
Remuneration Package: R 924 840– R 1 089 426 per annum
Total Cost to Company per annum inclusive of all benefits and company contributions.
 
PLEASE NOTE
 
Closing date: 29 August 2024
 
Interested applicants must apply via this link: Senior Specialist Continuous Verification
 
The NSFAS does not consider late applications. The NSFAS talent acquisition team only corresponds with Shortlisted Candidates. Should you not hear from the NSFAS talent acquisition team within 2 months from the closing date, please consider your application unsuccessful.
 
Appointments will be made in line with the NSFAS Employment Equity goals and targets.`],postedDate:"20/8/2024",iframe:"",uuid:"peed2da25-19da-43e3-a2a8-9ad4b4b18f2b"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/opfa_orig.png",href:"https://www.govpage.co.za/office-of-the-pension-funds-adjudicator-opfa-vacancies/office-of-the-pension-funds-adjudicator-opfa-vacancies2538678",title:"OFFICE OF THE PENSION FUNDS ADJUDICATOR (OPFA) VACANCIES",content:[` 
OFFICE OF THE PENSION FUNDS ADJUDICATOR (OPFA)
 `,`SENIOR ASSISTANT ADJUDICATOR
Pretoria
Job Ref #: SAA082024
Industry: Academic
Job Type: Permanent
Salary: Market Related
 
Description:
Minimum Requirements and Key Competencies:
Strong administrative skills, including being deadline-driven.
High levels of ethics
Computer literacy.
Excellent verbal and written communication skills.
Ability to think independently and critically about an issue and propose solutions.
A high level of judgement, confidence and decisive approach.
Analytical, problem solving and critical thinking skills
Ability to manage a caseload and work under pressure
Take initiative in personal development.
Proper record keeping
Time management
Team player
Ability to perform in a high-pressure environment.
 
Responsibilities:
Receive investigation file and identify areas that require further investigation to dispose of a complaint
Request further information from parties to a complaint where required
Identify the need for and request expert reports in appropriate matters
Engage with parties to a complaint concerning the administrative aspects of the file/investigation.
Ensure that procedural fairness requirements are adhered to
Maintain a proper record of all complaints allocated, including a record of all correspondence relating to a complaint, proof of service, telephone calls, emails, etc.
Ensure all information is captured and processed on the OPFA case management system
Ensure that the submitted draft determinations are of a high quality.
Ensure adherence to approved workflow process of the organisation.
Participate in identifying and reporting risks and challenges experienced by the team in dealing with parties or stakeholders.
Adhere to all deadlines and turnaround times.
Adherence to organisational values.
Assist with projects/ad hoc tasks as and when required
Submit weekly and monthly statistics to the Team Leader
Prepare records for the Financial Services Tribunal or High Court
 
Behavioural Attributes:
The ideal candidate must be results-driven, passionate about service delivery, and able to thrive under pressure while respecting deadlines. They should demonstrate high levels of professionalism, be energetic, outcome-focused, and a strong team player with excellent communication skills and integrity.
 
Requirements:
LLB degree (Bachelor of Laws).
Minimum 5 years post articles experience as an admitted attorney, practising advocate, prosecutor or other relevant experience
Knowledge and understanding of the appropriate legislative and regulatory frameworks
Legal research
Ability to assess facts, interpret legislation and draft legal documents.
Experience in the financial services sector will be an added advantage.
Extensive knowledge and understanding of the Pension Funds Act and the role of the Pension Funds Adjudicator.`,`Candidates who do not meet the aforementioned requirements will not be considered and, therefore, need not apply.
 
Remuneration:
OPFA offers market-related remuneration commensurate with the successful candidate’s skills and experience.
 
The OPFA is an equal opportunity employer, so preference will be given to candidates from the designated groups in line with the organisation’s employment equity plan.
 
Persons living with disability are highly encouraged to apply. 
 
The OPFA reserves the right not to make an appointment. If you do not receive any response within four weeks of the closing date, please accept that your application has been unsuccessful. Regret correspondence will only be sent to interviewed candidates.
 
In accordance with the POPI Act 4 of 2013:
All candidate personal information is treated with confidentiality and the highest level of security.  Should you not be shortlisted for the vacancy that you have applied for, OPFA will retain your information on our candidate database for a period of 6 months, in the event that you may meet the criteria of a future suitable position which may match your profile and which we will contact you directly for your authorization to proceed with your application.  Should you wish to no longer be listed with us, we will proceed to remove your personal information from our database with your instruction, in accordance with the POPIA guidelines.
 
APPLY`],postedDate:"20/8/2024",iframe:"",uuid:"pa84c1ff6-3aa3-489f-ad36-2e038b97290a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/psira_orig.jpg",href:"https://www.govpage.co.za/private-security-industry-regulatory-authority-psira-vacancies-blog/private-security-industry-regulatory-authority-psira-vacancies7290277",title:"PRIVATE SECURITY INDUSTRY REGULATORY AUTHORITY (PSIRA) VACANCIES",content:[` 
PRIVATE SECURITY INDUSTRY REGULATORY AUTHORITY (PSIRA)
 `,`RESEARCHER
Salary: R 595 125 basic salary P/A plus benefits (Centurion)
 
Requirements: A recognised Honours Degree in Social Science, Humanities, Law, Criminology, Public Administration and Management, Strategic Studies or other relevant Honours degree, ● coupled with a minimum of 3 years experience working in a research/policy/regulatory environment ● Valid driver’s Licence ● Recognition of Prior Learning (RPL) and applicable knowledge and experience on the job may be considered during the selection process. 
 
Essential criteria: In depth practical knowledge of conducting research ● Extensive Knowledge and understanding the regulatory framework on private security ● Understanding the South African regulatory framework on private security industry ●General understanding of privatization of security in South Africa● Understanding of the PSiRA mandate ● Developing and managing organizational(or other policies) policies ● Demonstrate an understanding of international policy development in security environment ● Ability to provide support in running and managing an efficient research unit ●Demonstrate ability to understand issue quickly and explain them clearly and succinctly ●Demonstrate coherent understanding of how the private security industry is regulated in South Africa in comparison to other countries ●Demonstrate sound judgment● Strong organizational and time management skills, including the ability to assist in managing complex workload ●A calm, logical approach with an ability to work and deliver under pressure ●Excellent negotiation skills ●Confident and capable presenter. Solid knowledge and experience in project management● Efficient stakeholder engagements● Advanced knowledge of computer literacy● Excellent verbal and report writing skills● Qualitative and quantitative skills ● Ability to pay attention to details ●Excellent Planning and Organizing skills ●Problem solving and Analysis skills.

 
Key Performance Areas: To develop a procedure manual for the development of the Authority’s corporate and regulatory policies ●To develop and review and ensure implementation of corporate and regulatory policies for the Authority ●To keep a policy register(both corporate and regulatory) of the Authority● To facilitate proper and adequate consultation before the approval of policies for the Authority ●To popularize all regulatory PSiRA policies to external stakeholders of the Authority ●To draft policy documents(briefs, statements , regulations etc.) on behalf of the Authority ●To conduct research aimed at informing the development of policy documents for the Authority ●To translate research findings to policy documents on behalf of the Authority● To facilitate the approval of corporate and regulatory policy documents for the Authority ●To undertake any other responsibilities as required by the head of the research and development unit● Research, Advisory and public affairs management ● Assist in the building of professional credibility both with peers, local and international stakeholders ● Assist in the promotion of policies( Internal and External).
 
PLEASE APPLY HERE`,`RESEARCH CONSULTANTS: FOURTH INDUSTRIAL REVOLUTION AND ARTIFICIAL INTELLIGENCE X2 (06 MONTHS FIXED TERM CONTRACT) 
Salary: R 20 209 per month 
 
Requirements: Degree in Social Science, Humanities, Law, Criminology, Public Administration and Management, Strategic Studies, or other relevant degree ● Post graduate Degree in relevant field will be an added advantage● 2 to 3 years experience working in a research environment● Recognition of Prior Learning (RPL) and applicable knowledge and experience on the job may be considered during the selection process. 
 
Essential criteria: Published at least three (3) or more articles with a recognised journal. Experience in conducting research Studies ● Experience in data collection and research methodology ●Publication in private security or relevant field ●Analytical and writing skills in English● Demonstrate an understanding of the private security industry in South Africa● Knowledge and understanding of key issues in the field of private security in South African. ● Experience of working with internal and external stakeholders ●Understanding the South African regulatory framework of the private industry● General Understanding of the privatization of Security in South Africa● Understanding of the PSiRA mandate ●Confident and capable speaker● Demonstrate ability to understand issues quickly and explain them clearly succinctly ●Demonstrate coherent understanding of how the private security is regulated in South Africa in comparison to other countries● Demonstrate sound judgment● Strong IT skills ●Strong organizational and time management skills, including the ability to assist in managing complex workload● A calm, logical approach with an ability to work and deliver under pressure● Project management and implementation. Ability to work well independently. 
 
Key Performance Areas: To mainly conduct and coordinate research relating to private security industry in South Africa● To assist the Researcher with the development of research proposals, concept notes, research reports, policy briefs, discussion documents and other relevant documents ● To analyse data and provide recommendations to the Researcher on how to improve the regulation of the private security sector in South Africa● To participate in hosting research workshops, seminars and meetings relating the research conducted under the auspices of the Research and Development Unit● To assist the Researcher with research projects that are aimed at informing the development of policy documents for the Authority● To undertake any other responsibilities as required by the Researcher on behalf of the Research and Development Unit.
 
PLEASE APPLY HERE`],postedDate:"20/8/2024",iframe:"",uuid:"pfd4de0ce-e23f-4934-9c5e-febb8d2371cf"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/pic_orig.jpg",href:"https://www.govpage.co.za/public-investment-corporation-pic-vacancies-blog/public-investment-corporation-pic-vacancies9425638",title:"PUBLIC INVESTMENT CORPORATION (PIC) VACANCIES",content:[` 
PUBLIC INVESTMENT CORPORATION (PIC)
Public Investment Corporation SOC Ltd
Private Bag X187
Pretoria 0001
Republic of South Africa
  
The Public Investment Corporation SOC Limited (PIC) is an asset management firm, whose mandate is to make investments in various sectors of the economy on behalf of public sector entities. Amongst our clients are the Government Employees Pension Fund, the Unemployment Insurance Fund and the Compensation Fund. Over the years, we have grown to be amongst the top, large investment managers in South Africa and the rest of the African continent, with current assets under management at just over R2.6 trillion. At the centre of our growth is a team of self-driven professionals who are results-focused.
 `,` 
 
We are currently seeking applications from dynamic individuals for the following position: 
 
OPERATIONAL RISK ANALYST 
• *Job Grade: D1 – D5 
• Ref: AORM001 
Salary: All-inclusive remuneration package negotiable 
Centre: Risk Management 
 
Purpose of the role: 
To identify, assess and mitigate risks within the organization’s operational processes.
 
Requirements:
Relevant degree in Risk or Audit or equivalent relevant qualification 
Sound understanding of operational risk management principles. 
Financial services industry knowledge and experience (Preferably Asset Management). 
A good understanding of the key areas of the organization. 
2 - 4 Years relevant experience 
 
Duties:
Conduct day-to-day operational risk activities in terms of the Operational Risk Management Framework (ORMF) and related frameworks, policies, and procedures. 
Assist the Senior Manager: Operational Risk in the identification, assessment, responses, and monitoring of Operational Risk in the PIC 
Coordinate the risk analysis activities of the PIC Business Units, including both listed and unlisted investments. 
Work with Compliance, Internal & External Audit functions and other Assurance Providers to direct their efforts towards reviewing controls that mitigate the identified risks across the organization. 
Support the process of identifying and reporting risk incidents and assist in the design of risk mitigation and control procedures within PIC. 
Support process of identifying and reporting issues and actions within PIC. 
Conduct control environment assessments for the organization. 
Conduct, implement and assess key risk indicators. 
Assist the ORM Department with reporting to various governance structures 
 
Competencies and skills: 
Problem-solving skills. 
Attention to detail. 
Good communication skills both verbal and written. 
Knowledge of compliance, risk, and financial management. 
Knowledge of financial markets - capital, money, equity, foreign exchange, and financial derivatives. 
Knowledge of insurance coverage, and industry standards. 
Knowledge of the ISO 31000 standards, Basel Operational Risk principles, COSO risk governance principles, and corporate governance principles e.g., King IV. 
Knowledge of (ORX) Operational Risk Reporting Standards. 
Knowledge of enterprise risk management principles. 
 
 
Our firm values diversity, and excellence and is committed to the realisation of these across all operations and investment activities. If you are dynamic, resilient, agile, disciplined and willing to be part of a team that is focused on creating meaningful change, you are welcome to submit your application for this position.
 
Closing Date: 2 September 2024
 
* Grade Range: The grade range for this position is from D1 – D4 , commensurate with applicable  minimum requirements. 
 
The PIC is an equal opportunities employer, aligning appointments with the PIC Employment  Equity plan. 
 
Please forward a copy of your comprehensive curriculum vitae to: Recruitment4@pic.gov.za  
 
Privacy Notice: By submitting your application, you consent to the PIC processing your personal information as per applicable laws and the PIC Privacy Policy available on the PIC website (www.pic.gov.za). You are free to withdraw your consent at any time, after which, the PIC may cease processing your application.
 
 
 
 
 `,`We are currently seeking applications from dynamic individuals for the following position: 
 
QUANTITATIVE ANALYST
• *Job Grade: C3 – D3 
• Ref:QA001 
Salary: All-inclusive remuneration package negotiable 
Centre: Research and Innovation division 
 
Purpose of the role: As part of the Research and Innovation team the candidate will undertake quantitative models and provide information and investment ideas to the Quantitative Specialist and other Investment Teams.
 
Requirements:
Bachelor’s degree with a specialisation in quantitative discipline 
At least 3- 5 years’ experience in researching quantitative methods in investments. 
Statistical and mathematical skills applied within the asset management industry. 
Inquisitive nature, driven to excel in all aspects of the analytical process and in programming – primarily using R, PowerBI, Python, etc. 
Data and predictive analytics capabilities and use of Artificial Intelligence (AI) & Machine Learning (ML) in the investment environment. 
 
Duties:
Manage systems to ensure asset allocation decisions for PIC to optimize its dual mandate for financial and developmental returns. 
Support Quantitative Specialists through research to ensure sector investment models are optimised. 
Improve quantitative models that help to support PIC investment objectives. 
Implementation of models to measure the impact of the investable ideas generated by the division 
Data mining, scrubbing, cleaning, mapping and analysis using PowerBI, Python and R skills. 
Research the latest model-building methodologies and ensure implementation within the business. 
Assist in building the data science capabilities of the business. Data analytics to support business needs. 
Ad-hoc analytics/data science projects as required by business. 
Remain relevant to the needs of the PIC to ensure leading investment practices in SA and African opportunities. 
 
Competencies and skills: 
Financial analysis and interpretation 
Maintain, develop and update fundamental models 
Presentation skills 
Communication skills 
Analytical skills 
Numerical skills 
Must possess the desire and ability to work in a collaborative and intensive team-orientated environment 
Must possess the desire and ability to work in a collaborative and team-orientated environment 
Flexible, responsive, working with a minimum amount of supervision and/or self-starting personality 
Attention to detail. 
Open-minded thought process and intellectual honesty 
 
 
Our firm values diversity, and excellence and is committed to the realisation of these across all operations and investment activities. If you are dynamic, resilient, agile, disciplined and willing to be part of a team that is focused on creating meaningful change, you are welcome to submit your application for this position. 
 
Closing Date: 30 August 2024 
 
* Grade Range: The grade range for this position is from C3 - D3, commensurate with applicable minimum requirements. 
 
The PIC is an equal opportunities employer, aligning appointments with the PIC Employment  Equity plan. 
 
Please forward a copy of your comprehensive curriculum vitae to: Recruitment4@pic.gov.za
 
Privacy Notice: By submitting your application, you consent to the PIC processing your personal information as per applicable laws and the PIC Privacy Policy available on the PIC website (www.pic.gov.za). You are free to withdraw your consent at any time, after which, the PIC may cease processing your application.`,`We are currently seeking applications from dynamic individuals for the following position: 
 
DEVELOPMENT MANAGER
- Fixed Term Contract (12 months) 
• *Job Grade: D1 – D5 
• Ref: DEV 001 
Salary: All-inclusive remuneration package negotiable 
Centre: PIC Properties 
 
Purpose of the role: The Development Manager manages specific developments from inception to the delivery of a completed Asset. One of the key focus areas of this role is to ensure innovations in terms of resource efficiency, sustainability and green developments. This role plays an integral part in the project management execution of new development opportunities as well as the upgrading of the PIC’s investment property assets. 
 
Requirements:
Relevant Hons equivalent degree in Business, Built Environment or Property related field
Minimum 5 - 7 years’ relevant experience within the Property Industry 
FAIS RE 05 Certificate or must be obtained within 6 months of employment 
Technical Knowledge in Asset Management 
Strong market research capability 
Proven understanding of financial models and cost management 
 
Duties:
Create and manage development opportunities from inception to delivery 
Conduct market research and gather market intelligence on the local Property Market and all development activity. 
Investigate project desirability in line with Company Strategy and market conditions by generative feasibilities. 
Manage developments on existing land in line with associated rights. 
Optimise and approve building design and ensure sustainability of investments, in line with Town Planning principles. 
Manage and monitor actual developments versus projects approved by the Investment Committees in terms of design, cost, budget and timeline. 
Manage the delivery of all development projects and present feedback to the National Development Manager and Investment Committees in collaboration with the appointed Professional teams. 
 
Manage the financial aspects of all development projects including financial modelling
Monitor spend per project and provide feedback to the Investment Committee. 
Co-create and present monthly budgets to the National Development Manager for all development purposes and monitor actual spend versus budget. 
Monitor profitability per development. 
 
Ensure adherence to legal and regulatory requirements in terms of documentation and contracts 
Ensure the drafting and signing of all necessary contracts in collaboration with the Legal Department. 
 
Build and maintain strategic business relationships 
Manage developers and consultants, working on the PIC projects on behalf of the PIC or Joint Venture developments to achieve completion within agreed timelines. 
Build and maintain relationships within the Property and Development industry, Joint Venture partners, Local Authorities and other business stakeholders to grow and develop a strong business network. 
 
Identifies and manages business risk 
Control, manage and govern the processes and systems within the area of accountability to ensure compliance and minimise the business risk. 
Implement all audit recommendations in the area of accountability and resolve audit findings timeously 
Ensure compliance to all health and safety regulations by PIC staff and contractors 
 
Reports on all activities and latest trends 
Produce project status and financial reports for review by the National Development Manager 
 
Participate in training and development initiatives in line with personal development plans
Identify training/development needs and proactively select effective solutions to address development gaps. 
Ensure that a personal development plan is developed and implemented. 
Demonstrate the company values and habits 
 
Competencies and skills: 
Excellent communication skills 
Negotiation Skills 
Organisational Leadership skills 
Time management 
Performance and result-oriented 
Ability to deal with pressure/stress 
Cost-consciousness (budgeting) 
Stay abreast of the latest property trends 
Stay abreast of the latest property law 
Problem-solving
Customer service orientated 
Analytical thinker 
Initiating action 
 
 
Our firm values diversity, and excellence and is committed to the realisation of these across all operations and investment activities. If you are dynamic, resilient, agile, disciplined and willing to be part of a team that is focused on creating meaningful change, you are welcome to submit your application for this position. 
 
Closing Date: 28 August 2024 
 
* Grade Range: The grade range for this position is from D1 – D5, commensurate with applicable minimum requirements. 
 
The PIC is an equal opportunities employer, aligning appointments with the PIC Employment Equity plan. 
 
Please forward a copy of your comprehensive curriculum vitae to: Recruitment4@pic.gov.za
 
Privacy Notice: By submitting your application, you consent to the PIC processing your personal information as per applicable laws and the PIC Privacy Policy available on the PIC website (www.pic.gov.za). You are free to withdraw your consent at any time, after which, the PIC may cease processing your application.`],postedDate:"20/8/2024",iframe:"",uuid:"p2dae1961-610a-42e8-b982-1b67e379e5ed"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sabc_orig.jpg",href:"https://www.govpage.co.za/south-african-broadcasting-corporation-sabc-vacancies-blog/south-african-broadcasting-corporation-sabc-vacancies7767049",title:"SOUTH AFRICAN BROADCASTING CORPORATION (SABC) VACANCIES",content:[` 
SOUTH AFRICAN BROADCASTING CORPORATION (SABC)
 `,` 
 
DIGITAL MEDIA & OTT MANAGER (JOHANNESBURG)
DIVISION: SABC NEWS & CURRENT AFFAIRS
POSITION ID: 60019498
SCALE CODE: 300
REPORTING LINE: DIGITAL NEWS EDITOR
 
CLOSING DATE: 25 August 2024
 
MAIN PURPOSE OF POSITION:
To develop, implement and facilitate SABC News and Current Affairs’ digital media and over-the-top (OTT) operations in line with the SABC and division’s strategies.
 
KEY ACCOUNTABILITIES:
Develop, facilitate, execute and implement SABC News and Current Affairs’ digital media and OTT strategy and operations, including live streaming, in accordance with the public broadcaster’s corporate plans
Develop and implement innovative and compelling solutions for SABC News and Current Affairs
Prepare and manage the integration of SABC News’ radio, television, digital and other content on the OTT platform
Develop an OTT operational plan through coordination and liaison with various internal and external stakeholders
Manage the backend and operational development aspects of SABC News’ platforms, such as its website
Design and communicate concise OTT operational plans and special projects involving News and Current Affairs’ digital media
Perform and provide oversight of SABC News’ technological and technical operations
Represent SABC News and Digital News at all relevant forums in the implementation of its OTT content strategy
Research and develop monetisation strategies for News and Current Affairs’ OTT offering, while preserving the current digital media revenue streams to safeguard and promote financial sustainability
Perform quality control / assurance of all SABC News and Current Affairs multimedia content with the editorial team
Manage content displays and updates editorially
Provide ease of access to key content offerings, such as public service news and information, on OTT platforms
Compile and process relevant operational business requirement documents, Service Level Agreements, as well as those for the procurement of essential digital media services in strict compliance with business reporting cycles
Develop and implement Standard Operating Procedures (SOPs) for SABC News and Current Affairs’ digital media and OTT operations
Manage operational risks to protect organisational integrity, create value, prevent monetary loss and ensure compliance with applicable legislation, regulations and policies
Contribute to the compilation and management of the budget cost effectively
Adhere to South Africa’s constitution, all broadcasting, publishing and other legislation, ICASA’s license conditions, regulations, and rulings, the Film and Publications Act, the BCCSA and Press Council codes of conduct and recommendations, the SABC Editorial Policies and SABC News and Current Affairs’ style-guide etc.
 
REQUIREMENTS:
Bachelor’s degree in media studies, Journalism or relevant equivalent qualification (NQF6), but a post-graduate qualification (NQF7) would be advantageous
6 years’ experience in digital media and / or information technology, of which 2 years should be at supervisory level
Practical experience in multimedia editing, publishing processes and Content Management Systems
Understanding quality control / assurance standards in broadcasting and online publishing
Practical understanding of metadata and related processes
Experience in preparing content for digital media platforms, including live streaming and social media
Professional understanding of global digital media trends
Experience in OTT content preparation i.e. Video on Demand (VOD), podcasting and social media
Media content scheduling and practical understanding of Electronic Programming Guides (EPG)
Understanding of digital content monetisation and ability to identify monetisation opportunities on all digital platforms
Ability to develop and present strategies for all digital platforms
Project management experience
Understanding of the role of OTT in the digital environment nationally and internationally
 
PLEASE APPLY HERE
 
 
 
 
 `,`HEAD: GOVERNANCE, RISK & COMPLIANCE
Reporting line: Executive: Legal, Governance & Regulatory
Division: Legal, Governance & Regulatory
Scale Code: 125
Position ID: 60017534
 
CLOSING DATE:25 AUGUST 2024
 
Reporting to Group Executive: Legal, Governance & Regulatory: the incumbent provides strategic leadership to the Governance, Risk and Compliance Department to support the SABC in implementing and performing ongoing maintenance of the governance, risk management and compliance frameworks by leveraging people, processes and technology transformation opportunities.
 
DUTIES AND RESPONSIBILITIES:
 
1. DEVELOPMENT AND IMPLEMENTATION OF STRATEGY
Develop an Annual Operational plan for Governance, Risk and Compliance for the Department
Develop and design Business Continuity Management Strategy
 
2. BUSINESS OPERATIONAL EFFICIENCY
Develop and implement an Enterprise-Wide Risk Management Policy, Framework and Strategy for the SABC
Develop and Implement Enterprise Wide Risk Management Maturity Framework and Risk Appetite and Tolerance Framework.
Implement relevant programs to manage mitigation plans related to identified risks
Implement a programme to review the risk plan of the SABC at least annually at a Strategic, Operational, Project  and Functional levels
Communicate and create awareness of the Enterprise Risk Management Policy, Framework and Strategy and risk management process at all levels within the Corporation.
Manage the facilitation of and the setting of risk tolerances and guide Board.
Develop an Internal Control Framework to ensure improvement in the SABC internal control environment.
Ensure and facilitate BCM response during business interruption incidents
Develop and continuously review risk based Business Continuity Plans
Review Delegation of Authority Framework
Ensure effective and efficient  Policy management within the Corporation
Ensure adherence to good corporate governance practices within the Corporation
 
3. GOVERNANCE, RISK AND COMPLIANCE
Establishes and manage the Governance Framework.
Facilitate the implementation of appropriate compliance processes and practices to ensure compliance obligations are well understood across the company, embedded into the business processes, monitored appropriately and subject to review at least annually.
Oversee the development and implement of Governance, Risk and Compliance policies and Internal Control measures.
Ensure regulatory compliance with the policies and regulatory framework
Report timeously to the Executive: Legal, Governance and Regulatory on all compliance and risk related incidents and perform trending analysis
Review and implement Risk Management Plan in line with organizational  Risk Framework (COSO Model or ISO31000): 
Governance and Strategy
Risk Mitigation Plan
Formulate Internal Control
Communications
Monitor and Evaluations
Address both internal and external audit findings
 
4. STAKEHOLDER MANAGEMENT
Champion the business partner relationship constantly seeking out ways of adding further value to the business through collaboration, coaching, education and appreciation of the business priorities.
Creating value in each customer interaction and focusing on the total customer experience.
Explore and make recommendations on current  operational processes to the Audit, Risk Committee to streamline and improve it for better efficiency and effectiveness
 
5. LEADERSHIP AND PEOPLE MANAGEMENT
Effective implementation of Performance Management System in accordance with organizational policy and procedures.
Ensure adequate staffing for workload, succession planning and effective leadership.
Effective briefing and communication with department staff.
Career Development Plans (CDP) for all staff members.
Provide direction on the retention and attraction of staff.
 
 
INHERENT/MINIMUM REQUIREMENTS
 
QUALIFICATIONS
Bachelor Degree (NQF 7) in Law, Risk Management, Auditing, Financial Management or related field
Post-Graduate qualification in the relevant fields of study will be an added advantage
 
EXPERIENCE
Minimum 10 years in the legal, risk management, assurance programs within a huge organizations, of which 5 years’ experience must be at middle managerial level
 
KNOWLEDGE
Advanced knowledge of corporate governance and compliance
Enterprise wide Risk Management processes
Sound understanding of  South Africa’s legislative framework
Strategic planning and design of Governance, Risk and Compliance Management
Inspirational Leadership
 
PLEASE APPLY HERE`,`SCM VALUE DELIVERY AND INTELLIGENCE SPECIALIST
Reporting line: Head: Supply Chain Management
Division: Group Finance
Scale Code: 300
Position ID: 60023075
 
Closing Date: 22 August 2024
 
PURPOSE
To deliver SCM continuous value delivery  and intelligence by driving collaboration and alignment across the entire supply value chain by establishing business intelligence , project management oversight , knowledge management , reporting and monitoring efficiencies.
 
DUTIES AND RESPONSIBILITIES:
 
1. OPERATIONAL PLAN
Drive SAP optimisation , integration and efficiency models and tools
Develop and implement innovative SCM integration and knowledge management tools
Drives the administration of process integration to drive team efficiency and improve productivity
Research and implement ongoing business and process improvements
Drives research based contribution to the SCM demand and contract management framework
Monitors SCM risks , opportunities, disruptions and innovations in the external environment and makes recommendations on value delivery measures.
Provides business intelligence on procurement spend transparency and reporting
Support Category Management with category strategies conceptualization
Provide effective and efficient project management tools from conceptualization to post implementation
Train and mentor SCM on project management
Report and monitor detailed project plans, ensuring on time project delivery and procurement costs management against project plans
Manage and reports on the SCM digital transformation strategy Maintain and manage projects in line with the Annual Procurement Plan
Compile accurate and comprehensive monthly performance statistics.
 
2. FINANCIAL MANAGEMENT
Drive the  implementation of the digital transformation project for the Supply Chain M
Streamline processes and reduce Procurement costs
Monitors, audits and report on SCM savings on procurement activities
Monitor and track Procurement spend
 
3. GOVERNANCE, RISK AND COMPLIANCE
Ensure Compliance with all SCM Policies and Procedures, and all applicable regulations and Acts such as PPPFA, PFMA, BBBEE, and National Treasury instruction notes etc.
Audit integrity of SCM operational performance
 
4. TRANSFER OF SKILL
Assist SCM Practitioners to develop project management skills
Training/educating and awareness around project management skills
Training and educating on Technology usage and optimisation
Manage innovative Business and SCM integration measures and plans in ensuring optimisation , accuracy and completeness in reporting
Assist the SCM Category Management with industry research for improved spend management
 
5. STAKEHOLDER MANAGEMENT
Monitor and maintain relationship with internal and external Stake holders
   Work closely with all SCM units  (Managers and Practitioners) to ensure and continuous integration and optimisation efforts
 
INHERENT/MINIMUM REQUIREMENTS
Experience in Supply Chain Management industry
Strong in management reporting, business intelligence management and statistical analyses.
Strong Technology skills
 
QUALIFICATIONS
Relevant degree in Finance / Engineering
Post graduate degree in Finance / Engineering or equivalent
 
EXPERIENCE
3 years’ working experience in Supply Chain Management, Manufacturing , System Engineering 
 
KNOWLEDGE
Advanced knowledge and understanding of Project Management
Knowledge of system engineering and optimization models
Proficient with different technology platforms
Knowledge of PFMA, Treasury Regulations and other relevant SCM prescripts and Instruction Notes
Understanding of SCM process and bid committee system
Good understanding of contracts and contract administration systems
Knowledge & understanding of  various ERP
Exposure of Stakeholder Management and interaction at a senior levels
Presentation and strong communication skills
Strong customer relationship
Proven knowledge in simplifying and resolving complex business challenges
Critical thinker
Solutions driven
 
PLEASE APPLY HERE`],postedDate:"20/8/2024",iframe:"",uuid:"p7c528e28-71a0-48c0-bf2e-6e4cffb0c336"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/samsa_orig.png",href:"https://www.govpage.co.za/south-african-maritime-safety-authority-samsa-vacancies-blog/south-african-maritime-safety-authority-samsa-vacancies7603633",title:"SOUTH AFRICAN MARITIME SAFETY AUTHORITY (SAMSA) VACANCIES",content:[` 
SOUTH AFRICAN MARITIME SAFETY AUTHORITY (SAMSA)
 `,`The position reports to the Registrar of Seafarers.
 
LOCATION: HEAD OFFICE, PRETORIA
 
JOB PURPOSE
To support the Registrar in maintaining the register or registers of all certificates of competency, certificates of proficiency, certificates if equivalency and endorsements specified in STCW/F Convention, Regulations 3 and II/1 to II/6, IV/2 and Merchant Shipping (Certification, Training and Manning) Regulations 2021 and the Merchant shipping (National Small Vessel Safety) Regulations of 2007, as amended, Seafarer's identity Documents Convention (Revised) 2003 (No.185).
 
KEY PERFORMANCE AREAS
To assist the Registrar with certificates of competency, proficiency, endorsements, certificates of equivalency and ensure that they are issued in accordance with the Act and reflect the competencies of the seafarers.
Ensure that Registers are secured, backed-up and updated continually.
Advice and assist with Investigation of fraudulent certificates of competency, proficiency, and endorsements.
Advise and assists the Registrar on matters dealing with changes and improvements in operating procedures, in corrective or preventive action. Coordinate the implementation of operation changes and procedures.
Ensure that the services provided conform to the written operation procedures.
Develops and recommends operating/administrative/procedural changes.
Assist in the formulation and implementation of departmental policies, practices and programs coordination and make recommendations to increase effectiveness and efficiency within the department.
Ensure that all findings related to any Audit is properly and timeously closed out and identify the root causes of any findings to prevent any reoccurrence.
Coordinate the work activities of any assigned employees, prioritizes and coordinates work assignments, reviews for accuracy and recommends improvements in workflow, procedures.
Assist in the formulation and implementation of departmental policies, practices and programs coordination and make recommendations to increase effectiveness and efficiency within the department.
Ensure that all findings related to any Audit is properly and timeously closed out and identify the root causes of any findings to prevent any reoccurrence.
Coordinate the work activities of any assigned employees, prioritizes and coordinates work assignments, reviews for accuracy and recommends improvements in workflow, procedures.
Manage the Registry team on day-to-day, creating succession to key roles and enhancing departmental capability.
Lead the development of internal training and development programs.
Cultivate productive working relationships through the promotion of cross functional collaboration and teamwork.
Provide clear direction on shared and departmental goals, including key performance indicators - translating and prioritising each through performance management.
Resolve employee grievances within a specified timeframe.
Address poor behaviour through the Disciplinary and Grievance procedures with the guidance of Human Capital.
Cultivate positive behaviour in accordance with SAMSA Values.
 
MINIMUM REQUIREMENTS
Qualifications
Diploma/Degree in Maritime Studies
STCW Certificate of Competence an advantage at operational or management level.
 
Knowledge and Experience
Previous supervisory experience preferably in a related field
Three (3) years of experience at supervisory/management level
Three (3) years' experience in the Maritime Industry and dealing with seafarer-related matters.
 
Competencies
High levels of competence on the skills below is a requirement:
Sound knowledge of Maritime Legislations and IMO Conventions and Protocols as amended wrt seafarers and fishers.
Technical knowledge of the following acts and regulations:
SAMSA Act, 1998 (Act No. 5 of 1998) as amended.
Merchant Shipping Act, 1951 (Act No 57 of 1951) as amended.
Protection of Personal Information Act.
Promotion of administrative justice Act 3 of 2000.
Merchant Shipping (Certification, Manning, and Training) Regulations 2021, as amended.
Merchant Shipping (National Small Vessel Safety) Regulations 2007, as amended.
Maritime Labour Convention 2006.
Seafarer's identity Documents Convention (Revised) 2003 (No.185).
Practical knowledge of quality assurance.
Skilled at supervising a multidisciplinary team including standards & compliance, qualification & licensing, port regulatory & emergency response, enforcement & compliance, maritime security/safety, quality assurance and corporate service.
Well-developed written and oral communication skills, interpersonal skills, and the ability to communicate effectively.
Planning and organisation skills.
Sound analytical and problem-solving skills.
Research skills.
Conflict management.
Computer Literacy (MS Word, MS Excel, MS Power point, BI software).
Practical knowledge in shipping.`,`Should you meet the requirements as set out above, please e-mail your CV to Zanele Zwane at: recruitment@samsa.org.za
 
As we are committed to Employment Equity in our employment practices, it is our intention to appoint individuals with the aim of meeting our Equity objectives. Preference will be given to African Males, Indian Males and White Females to achieve the objectives of Employment Equity.
 
CLOSING DATE: 26 AUGUST 2024
 
Please note: SAMSA reserves the right not to make an appointment to any advertised position. No late applications will be considered. Psychometric and other assessments may be used as part of the selection process and all shortlisted candidates will be required to be available for the tests. If you have not been contacted within 1 month of the closing date as mentioned above, kindly deem your application unsuccessful.`],postedDate:"20/8/2024",iframe:"",uuid:"p73d37af6-8de6-4558-b559-1d81f08cca20"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sanparks-logo_orig.png",href:"https://www.govpage.co.za/south-african-national-parks-sanparks-vacancies-blog/south-african-national-parks-sanparks-vacancies1689438",title:"SOUTH AFRICAN NATIONAL PARKS (SANPARKS) VACANCIES",content:[` 
SOUTH AFRICAN NATIONAL PARKS (SANPARKS)
 `,` 
 
GM: GOVERNANCE AND REPORTING
Applications from suitably qualified persons are invited for the General Manager: Governance and Reporting position based in Skukuza at Kruger National Park (KNP). The position will report to the Managing Executive for Kruger National Park (KNP) and operate throughout the Park.
 
Main Purpose of the Job
To lead in the delivery of the park’s key governance initiatives and provide strategic advice and support. Ensure that the Park meets all statutory and corporate governance requirements, including risk management, compliance, flow of information, and reporting.
Location Kruger National Park
 
Requirements
Postgraduate qualification in law/risk management/commerce or equivalent.
At least 8 years of risk and compliance management experience.
Proven experience monitoring adherence to all legislation, regulations, standards and business policies and procedures regarding Governance and Risk management.
Membership with a Risk Management Professional body would be an advantage.
Sound experience in risk and compliance policy writing and reviews.
 
Job-related knowledge & skills
Organisational policies and procedures
Implementing business improvement initiatives
Understanding of relevant legislation.
Project management.
Sound knowledge of the application of information systems
Governance and risk management policies, strategies and frameworks
Occupational Health and Safety
Stakeholder Management
Communication (verbal and written)
Negotiation skills
Strategic Capability and Leadership
Impact and Influence
Governance
Risk Management
Internal Auditing
Financial Management & Reporting
Planning and organising
Problem-solving
 
Responsibilities
Formulate and implement park strategies and plans, aligning them with corporate objectives, strategies, policies, norms, and standards.
Develop, implement, and maintain the park’s risk and governance management plans.
Review the park’s risk management framework and implement and maintain a strategically focused and effective ERM system and processes aligned with and in compliance with the SANParks ERM Framework, Policy, and Strategy.
Manage, coordinate, and evaluate the improvement of governance management processes.
Monitoring and oversight of the reporting function around APPs.
Responsible for the METT (Management Effectiveness Tracking Tool) process and all other reporting requirements.
Develop and manage KNP-specific Corporate Governance Policies and Procedures, including committee terms of reference.
Drive a culture of compliance throughout the organisation to embed this into day-to-day operations.
Analyse current and forthcoming regulations, proposals and legislation and provide meaningful, detailed analysis.
Ensure implementation and provide updates on the corporate governance policy framework, which includes the delegation of Authority, Whistle-blowing Policy, Fraud Prevention Policy, Code of Conduct, and Legislative Compliance Matrix.
Assist KNP in maintaining a conducive legislative environment aligned with relevant legal requirements and statutes to ensure the implementation of internal controls for compliance purposes.
Prepare and execute the KNP annual internal audit and plan, including the audit log.
Maintain and update the park register of committee members, attendance register, declaration of interest, and confidentiality agreement for all meetings.
Manage compliance with the Public Finance Management Act (PFMA) and Committee Charters regarding meetings and documentation.
Oversees overall park-wide legislative compliance requirements (PFMA, Kings IV, etc.) and reports on compliance /non-compliance to the committee.
Oversee all information and records management within KNP – Business information.
Develop inter-programme SLAs and provide oversight on the SLA management.
Responsible for the administration function of all MANCO meetings.
Provide employee training on compliance and risk-related topics, policies, or procedures. Advance understanding of risk and improve the maturity of risk management in the park.
Oversee the Land & commercial legal function.
Manage legal, compliance, and business risks, reducing the overall risks within the corporation.
Provide oversight over the OHS function in the park.
Responsible for financial administration, oversight, and evaluation of KNP’s Budget.
Create a high-performance culture and manage team performance effectively by translating and communicating the annual performance goals and measures into individual work plans based on agreed-upon objectives.
Ensures employees are appropriately recruited, selected, appraised, and rewarded.
Develop and drive a mentorship and succession programme aligned with the organisation’s values.
 
 
Please Note
An appointment will be made using SANParks’ Eemployment Equity plan.
Salary R936,559.67 – R1,448,589.88
Paterson Grade E
 
How To Apply
Interested candidates who meet the above requirements should forward their applications accompanied by the required documentation listed below to the following:
Simon Marutha
Human Capital Management
Email: Jobapplications3@sanparks.org
Postal Address: Prívate Bag X402, Skukuza, 1350
 
Documents Required
Interested persons who meet the above-stated requirements should forward their application letters, detailed Curriculum Vitae and qualifications.
Applicants possess foreign qualifications to submit evaluated results by the South African Qualification Authority.
 
Closing Date 02 September 2024
 
 
 
 
 `,` 
 
 
 
 
 
OFFICER: PAYROLL
The Organisation requires the services of an Officer: Payroll in the Human Capital Management department. This position will be based at Groenkloof National Park, Pretoria.
Location Groenkloof National Park (Head Office)
 
Requirements
Have a Diploma in Human Resource Management / Payroll.
Have relevant experience in HR Administration and payroll systems.
Minimum of 2 – 5 years experience working within the payroll environment.
Proficient with payroll software specifically Sage 300 people.
Knowledge of payroll regulations/processes.
Pay attention to detail.
Ability to handle confidential information.
Thorough understanding of payroll-related labour and tax laws.
Time management skills
Planning and organising
Conflict management
Presentation skills
Intermediate knowledge of Excel
Listening skills
Ability to prioritise own workload and work to tight deadlines
High level of accuracy and attention to detail
Making rule-based and analytical decision
 
Responsibilities
Review information on the payroll system to ensure all information is accurate and up to date.
Ensure employees are linked to the correct primary positions and hierarchy structure.
Maintain employee records and ensure that they are correctly filed.
Ensure terminated employee files are kept in accordance with record-keeping policies and procedures.
Close payroll off on time with 100% correct data.
Handle all payroll queries.
Quality assuring the work of HCM clerks.
Process all payroll input for earnings, deductions, company contributions, and fringe benefits exactly as per the instruction document.
Run payroll checks and balances before administration/ supervisors check the payroll. Ensure that payroll deadlines are met on a monthly basis.
Import\\generate reports on overtime worked and other allowances as per payroll instructions submitted.
Quality assurance information is captured by HCM Clerks where applicable.
Assist with the distribution of variance reports and other reports required by line management/supervisors.
Processing of school fees and hostel claims.
Process all miscellaneous input for deductions and external stakeholders such as garnishees, insurances and other stakeholders in accordance with policies and procedures including statutory requirements.
Link new employees to ESS and correct leave setup.
Compiling summaries of earnings, taxes, deductions, leave, disability, and non-taxable wages and reporting on this.
Track employee working hours.
Link new employees to ESS and correct leave setup.
Work closely with the benefits unit to ensure monthly changes are done correctly and each change is accompanied by an instruction document.
Assist with processing of employee transfers/promotions within the organisation and transfer of leave policy setup and hierarchy setup to the new entity.
Respond to queries relating to payroll activities on an ongoing basis.
Stay up to date with any labour or legislative changes.
Part and distribute payslips and IRP5s for employees in Paterson A-C band for employees with no access to Sage 300 people.
Prepare compensation checks, and respond to employee questions about wages and deductions.
Stay up to date with any labour or legislation changes.
Partake in the training initiatives.
Ensure the Bi-Annual review process is completed and signed off with the supervisor
Assist with audit-related queries and ensure compliance at all times.
Assist with providing support to the HCM Clerks with payroll-related functions.
Process payment for long services awards.
 
 
Salary R279,174.17- R455,991.11
 
How To Apply
Interested candidates who meet the above requirements should forward their applications accompanied by the required documentation listed below to the following:
Human Capital Management
Email: Nomawethu.Dudumashe@sanparks.org
Postal Address: PO Box 787 Pretoria 0001
Documents Required
Interested persons who meet the above-stated qualifications should forward their applications which should consist of a cover letter, detailed Curriculum Vitae, certified copies of qualification(s), and Identity Document (certified within the past 3 months).
Applicants in possession of foreign qualifications are to submit evaluated results by the South Arican Qualification Authority.
 
Closing Date 30 August 2024
 
 
 
 
 
 `,`MANAGER: LAND AFFAIRS
The organisation requires the services of a Manager: Land Affairs in the Legal Services’ Department. This position will be based in Phalaborwa for assistance with land matters within the Kruger National Park (KNP) and other National Parks
Location Kruger National Park
 
Requirements
Be in possession of an LLB (Bachelor of Law) degree with commercial and property law.
Should have 4 – 6 years of legal advisor experience.
Have 1 -3 years of practicing as conveyancer.
Have commercial and property law experience.
Understanding of commercial and contract law.
Knowledge of organizational policies and procedures.
Knowledge of the environmental law and administrative law.
Advanced knowledge of property law.
Interpretation of statutes.
Knowledge of business objectives and strategies.
Good writing and drafting skills.
Time management skills.
Communication Skills
 
Responsibilities
Deliver an effective and efficient legal support function in respect of land and boundary matters in the KNP and other national parks when required.
Ensure compliance to internal policies and processes.
Ensure compliance to all relevant legislation.
Draft contracts relevant to the land audit.
Draft legal opinions.
Establish and manage the database pertaining to land owned and managed by SANParks in respect of the KNP and other national parks.
Build and maintain purposeful stakeholder relationships (internal and external).
Provide legal support regarding the KNP land inclusion, cooperative and contractual management agreement protocols as well as land/property matters in general.
Initiate declaration and withdrawal of declaration processes, as well as attend to legal matters arising from KNP boundary determination.
Create and maintain a culture of good corporate governance and proactive project and financial management.
 
 
Salary R641 921.99 – R1 052 446.50
 
How To Apply
Interested candidates who meet the above requirements should forward their applications accompanied by the required documentation listed below to the following:
Nomawethu Dudumashe
HCM
Email: Nomawethu.Dudumashe@sanparks.org
Postal Address: PO Box 787 PRETORIA 0001
 
Documents Required
Interested persons who meet the above -stated qualifications should forward their applications which should consist of a cover letter , detailed  Curriculum Vitae, certified copies of qualification(s),and Identity Document ( certified within the past 3 months )
 
Closing Date 28 August 2024`,`HUMAN CAPITAL MANAGEMENT OFFICER
The Organisation requires the services of a Human Capital Management Officer in the Performance Management Unit. This position will be based at Groenkloof National Park, Pretoria.
Location Groenkloof National Park (Head Office)
 
Requirements
Be in possession of a National Diploma in Human Resource Management / Equivalent qualification.
Have 2 – 4 years’ experience in a similar role.
Have 2 years in a clerical role.
Experience working in the Conservation, Tourism, and hospitality industry will be an advantage.
Knowledge of the latest legislation, i.e., BCEA, EE, LRA, Skills Development Act, etc.
HCM policies and procedures
Financial principles.
Administration management and HR best practices.
Knowledge of the HCM systems.
Computer literacy.
Communication skills (verbal and written).
Presentation skills.
Interpersonal skills.
Problem Solving skills.
Conflict resolution and dispute management
Interviewing skills.
Administrative skills.
Data management.
Stakeholder management.
Recruitment and selection.
 
Responsibilities
Support the implementation of HCM policies, procedures, initiatives, and systems.
Ensure integrity of employee data on SAGE 300, People Management Module, and ensure that information is captured correctly.
Update structures, establishment table, and vacancy list in your area of responsibility.
Ensures that HCM systems, policies and procedures are adhered to, by providing guidance and support to employees and line managers.
Assist in fielding queries and complaints to ensure client satisfaction.
Administer the maintenance of HCM records, including amendments to biographical information, transfers, promotions, and salary/benefits adjustments.
Provide employees with information on various medical aid schemes and options as well as the Pension and Provident funds.
Process various withdrawal claims (dismissal, retirements, resignations, UIF, and death claims).
Assist with investigations, compiling reports, and coordinate payments of death claims.
Ensure proper leave management.
Assist with conducting periodic audits for the park to ensure compliance to policies and procedures.
Supervise and ensure the development of HCM Clerks where applicable Where applicable, supervise and provide training to HR Clerks, Interns, and employees on temporary contracts. Ensure proper administration of Uniform requirements.
Assist in processing IOD claims.
Assist with coordination, facilitation, and implementation of Learning and Development initiatives.
Assist with the coordination and implementation of Employee Wellness interventions and administration thereof.
Update and consolidate information/data for performance management.
Advise employees and management where required on Labour Relations processes and procedures.
Represent HCM in disciplinary hearings.
Compile & Submit Monthly, Quarterly & Annual HCM Reports.
Support a safe and positive work culture.
Establish and manage relationships with internal and external stakeholders.
Assist with recruitment and selection processes (drafting of adverts and placement, shortlisting, Interview schedule, contacting candidates for interviews, disseminate interview packs and organise venue for interviews, verification of information for the successful candidate).
Open a file for new candidates and ensure that all relevant information is filed as legal and policy requirement.
Participate in interviews for Interns, positions in the A and C band.
Complete onboarding of new employees on SAGE 300 Job Management Module.
Coordinating induction sessions for new employees.
Ensure proper administration of exits such as resignations, retirements, and dismissals.
Assist with the coordination of information sessions.
Process new employees on the VIP system.
Data clean up on VIP systems.
 
 
Salary R282 919.52 – R462 106.49
 
How To Apply
Interested candidates who meet the above requirements should forward their applications accompanied by the required documentation listed below to the following:
Nomawethu Dudumashe
HCM
Email: nomawethu.dudumashe@sanparks.org
Postal Address: PO Box 787 PRETORIA 0001
 
Documents Required
Interested persons who meet the above-stated qualifications should forward their applications which should consist of a cover letter, detailed Curriculum Vitae, certified copies of qualification(s), and Identity Document (certified within the past 3 months)
 
Closing Date 28 August 2024`],postedDate:"20/8/2024",iframe:"",uuid:"p2aa8e21e-0d14-4813-b65d-c208b44096eb"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sassa_orig.png",href:"https://www.govpage.co.za/south-african-social-security-agency-sassa-vacancies-blog/south-african-social-security-agency-sassa-vacancies3023508",title:"SOUTH AFRICAN SOCIAL SECURITY AGENCY (SASSA) VACANCIES",content:[` 
SOUTH AFRICAN SOCIAL SECURITY AGENCY (SASSA)
 
SASSA is a dynamic organisation that provides a range of essential services to a diverse group of South Africans. With offices countrywide, our operational structures aspire to embrace all that is state-of-the-art, offices that are modern and an environment designed to stimulate the worker to achieve, enjoy, progress and prosper 
 `,`The following positions are available in the KZN Region 
 
LOCAL OFFICE MANAGER X1 POST 
Salary : R1 003 890.00 – R1 182 534.00 p.a. inclusive of benefits 
Location: Umzimkhulu Local Office (Ref No: G8/2024) 
 
Minimum Requirements: Candidates should hold a B degree or a 3 year tertiary qualification coupled with 1-2 years relevant management experience; Knowledge of SASSA's Constitutional mandate and relevant policies, legislation and its relationship with National and other stakeholders; Knowledge of Social Security and poverty alleviation matters including sound understanding of the demographics of the District; Computer literacy and a valid driver’s licence are essential. 
 
The incumbent will take responsibility for the overall management of all resources attached to the Division; Manage and monitor implementation of grants administration policies and legislation; Monitor promotion of access to social security services; Manage and monitor data integrity improvement programme, pay point development; Manage performance of the unit and provide general operational support; Provide operational support and guidance to the District Senior Manager and Local Office Managers within the District; Co-ordinate both generic and functional training within the District; Manage financial, human capital and other resources assigned to the unit; Manage the performance and development of staff under his/her immediate supervision; Implement service delivery and client relations improvement models will be a further responsibility. 
 
The applications for the above position must be sent to NNMKZNApplication@sassa.gov.za or hand delivered at No.1 Bank Street, Pietermaritzburg, 3201. Attention: Human Capital Management. 
 
 
 
 
 
 
ADMINISTRATIVE OFFICER X1 POST 
Salary : R308 154.00 – R362 994.00 p.a. exclusive of benefits 
Location: Umlazi Local Office (Ref No.G9/2024) 
 
Minimum Requirements: Candidates should hold a Senior Certificate plus an undergraduate qualification (NQF level 6) or NQF level 7 with 3 years relevant experience. Computer literacy and a valid driver’s license are essential (successful candidate will be expected to drive). 
 
The incumbent will be responsible to monitor and ensure the maintenance of log books of pool vehicles; ensure the implementation and maintenance of appropriate registers; monitor the implementation and maintenance of database assets. Ensure the local office staff comply with HR policies and procedures; ensure that all HR forms and documents are correct and complete; ensure that HR request/ documents/ forms are forwarded to District office timeously; ensure the maintenance of appropriate registers. Ensure the implementation and maintenance of a filing system that is aligned to the master file plan of SASSA; represent the Local Office in various meetings, forums committees; assist with the arrangement of meetings and special events or awareness campaigns. Obtaining quotations if not available; write motivation and attach comparative schedule; obtain approval from delegated authority; ordering of items; receipts, check and book items in accordance with the delivery note. Supervision, appraisal, disciplinary; leave administration; training and development; planning and organization; guidance and monitoring. Ensure adherence to Section 57 of the Public Finance Management Act (PFMA, Chapter 6, Part 3). 
 
 
 
 
 
 
The applications for the above position must be hand delivered at No.1 Bank Street, Pietermaritzburg, 3201. Attention: Human Capital Management. 
 
GRANTS ADMINISTRATOR X1 POST 
Salary : R216 417.00 – R254 928.00 p.a. exclusive of benefits 
Location: Mooi River Local Office (Ref No: G10/2024). 

 
Minimum Requirements: Candidates should have a Senior Certificate (NQF Level 4), Computer Literacy is essential.
 
Added advantage: A Valid driver’s licence and / or administrative / clerical experience will be an added advantage. 
 
Duties: The incumbent will assist in the administration of Social Grants at Local Office Level; Effectively screen all grant applications; Capture applications on the system; Provide customer care; Process other grant documentation/perform other grants administration functions; Conduct quality control on grants applications and ensure adherence to Section 57 of the Public Finance Management Act (PMFA, Chapter 6, Part 3). 
 
The applications for the above position must be hand delivered at No.1 Bank Street, Pietermaritzburg, 3201. Attention: Human Capital Management. 
 
The Agency is an equal opportunity employer. Therefore, Preference will be given to candidates whose appointment will assist the Agency in achieving its Employment Equity targets in terms of the Agency’s Employment Equity Plan. Person with Disabilities are strongly encouraged to apply. `,`Important notes: 
These positions are advertised with minimum requirements. Appointment will be subject to a compulsory pre-employment screening in the form of qualification, reference, ITC, criminal checks and compulsory competency assessment (where applicable). It is our intention to promote representivity in terms of race, gender and disability through the filling of these posts and candidates whose appointment will promote representivity will receive preference. It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA) prior to the selection process. SASSA is under no obligation to fill a post after the advertisement thereof. Please note: All SASSA staff are subject to compulsory Security Vetting on appointment. Should candidates wish to apply for more than 1 post, separate application forms should be completed and sent through an email or hand deliver on or before the closing date: 30 August 2024. 
Applicants interested in applying for these posts should send their applications (CV and fully completed and signed new Z83) quoting the relevant reference number and position name as per the advert. The subject heading of the email should indicate the name of the position you are applying for. Applicants must ensure that they send their applications to a correct inbox/email indicated on the position. Applications sent to the incorrect inbox/email will not be considered. Applications should consist of a comprehensive CV (specifying all experience, duties, indicating the respective dates (MM/YY) per position, Identity Number, Race and Gender as well as indicating references with full contact details. Interviews may be conducted via a virtual medium which will be discussed with each shortlisted applicant. Kindly note that copies of qualifications, certificates, ID and driver’s license etc., should be submitted upon request. 
 
Enquiries: Ms M Mkhize (033) 846 3334. 
 
Correspondence will only be conducted with the short- listed candidates, If you have not been contacted within 3 months after the closing date of the advertisement, please accept that your application has been unsuccessful.`],postedDate:"20/8/2024",iframe:"",uuid:"p52d76726-b8b9-4aa3-92cc-2eb5ec10e069"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/saws_orig.jpg",href:"https://www.govpage.co.za/south-african-weather-service-saws-vacancies-blog/south-african-weather-service-saws-vacancies6909185",title:"SOUTH AFRICAN WEATHER SERVICE (SAWS) VACANCIES",content:[` 
SOUTH AFRICAN WEATHER SERVICE (SAWS)
Private Bag X097, Pretoria, 0001 • Tel: + 27 (0) 12 367 6000 • www.weathersa.co.za • USSD: *120*7297#
 
The South African Weather Service (SAWS) is a Section 3(a) public entity under the Ministry of Environment, Forestry and Fisheries (DEFF) and is governed by a Board. The organisation is an authoritative voice for weather and climate related services in South Africa and is a member of the World Meteorological Organisation (WMO) to fulfil a range of international obligations of the government. South African Weather Service (SAWS) strives to be a Weather and Climate Centre of Excellence providing innovative solutions to ensure a weather-smart region, sustainable development and economic growth. 
 `,`The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of: 
 
SENIOR TECHNOLOGIST
Salary: Negotiable 
Centre: Durban Weather Office 
(Ref: WS03/082024) 
 
Job summary: To manage the regional observation infrastructure performance through effective maintenance, upgrade, and calibration of Observing Networks to enable system availability and data integrity. 
 
Key Performance Areas: 
Products, Service Delivery / Infrastructure maintenance: 
Ensure data availability from remote Observation Networks such as Automatic weather stations, RADAR, Lightning Detection Network, Automatic Rainfall stations, conforming to approved organizational targets. 
Accurately diagnoses and repairs faulty equipment to enable network availability. 
Undertakes continuous monitoring of Observing Networks and evaluate system performance. 
Implements the Inspection Programme for Observing Networks to maintain data integrity. 
Liaises with Commercial Clients on AWS installation and maintenance matters. 
Identifies new sites in the expansion of network areas and prepares proposals for approval by Regional Manager. 
Compiles the infrastructure demand plan for the region, with support from Meteorological Technicians. 
Coordinates infrastructure replacement requests with Technical Services. 
Ensures calibration and testing of meteorological equipment as and when necessary. 
Coordinates the incoming and outgoing of meteorological equipment. 
Ensures that reactive and non-reactive maintenance is attended to within the stipulated timeframes as directed by Technical Services and the Line Manager. 
 
Innovation, Process Improvement & Revenue Generation: 
Monitors adherence to EQS processes to enable certification of equipment of Observing Networks. 
Participates in the planning and directs the implementation of decommissioning and re-commissioning of the weather observation systems. 
Provides analysis and recommendations on asset life cycles. 
Analyse current techniques and technologies used in the collection and processing of data to ensure the best practices are used and applied consistently across the board. 
Develops maintenance processes for Observing Networks. 
Develops business continuity plans to ensure availability of systems. 
 
Administration, Governance, Risk & Compliance: 
Prepares infrastructure status reports for Regional Manager a daily basis. 
Monitors MOU with Site Owners to ensure fulfilment of contractual obligations. 
Prepares specification for procurement of technical equipment. 
Proactively orders Weather observation infrastructure spares to prevent work disruptions. 
Ensure the availability of the relevant Standard Operating Procedures, and that the junior personnel are well inducted on these also have easy access to them and comply accordingly. 
Ensure Compliance with designated national and international standards. 
Analyse and interpret regional infrastructure performance through monitoring and evaluation. Where applicable implement corrective actions. 
Ensures strict adherence to SHEQ policies and procedures. 
Monitor the Risk Register and ensure the implementation of identified risks mitigation actions. 
Participate in various regional audits and ensure that all audit findings are addressed 
Compiles monthly, quarterly and annual status reports on Observing Networks for submission to Regional Manager. 
Give input on budget planning. 
Assist the region and SCM with sourcing of local suppliers.
 
People, Culture and Values: 
Promote a culture and practices that reflect the SAWS values and manage the team’s performance. 
Develop Capacity and capability required to sustain/ maintain observations infrastructure ion operation. 
Takes ownership of own development activities to ensure performance against agreed standards. 
Contributes to team success by contribution and commitment to the team. 
 
Stakeholder Management: 
Collaborate with the other regional Team in an effort to deliver the SAWS mandate. 
Implement public awareness programmes for the local communities. (Office outreach activities). 
 
Minimum Requirements and Attributes: 
BTech in Electrical/Electronic Engineering (Light Current) or equivalent. 
At least 5 years’ experience within Electrical/Electronic Engineering or equivalent environment. 
Code EB or Code 08 (without endorsements). 
Leadership and management skills 
 
 
 
Please Note: 
 
Enquiries for the above-mentioned positions must be directed to: Mr. Denny Maluleke, at Tel. (012) 367 6091. 
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications). 
 
Closing Date: 30 August 2024 
 
Note: Recruitment Agency applicant submissions will not be considered 

 
Preference will be given to People living with disabilities in line with SAWS EE targets. This is an EE position and preference will be given to Coloured & Indian Males, Coloured and Indian Females. Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. The South African Weather Service is an equal opportunity employer. 
 
Record Reference HCM-ADVERT-ST08/2024`,`SOUTH AFRICAN WEATHER SERVICE - WORK INTEGRATED LEARNING PROGRAMME 2024 
 
Work Integrated Learning Programme: 
The South African Weather Service (SAWS) invites applications for eighteen months (18) Work Integrated Learning Programme. 
 
We are looking for TVET College Learners to join our Work Integrated Learning Programme in the following field: 
Management Assistant N6 - 1 Position – Ref: GRC 2024 
Public Management N6 – 1 Position – Ref: COMMS 2024 
 
Applicants must satisfy the following requirements: 
An applicant must have just completed an N6 in the above-mentioned field of study.
An applicant has been unemployed for a period of less than one-year after completion of the N6. 
An applicant will be required to submit their CVs on the SAWS recruitment portal (clearly outline ID, Address etc.) 
Must not have work experience. 
 
Successful candidates: 
Will be paid monthly stipend of R5500. 
Will be responsible for arranging their own accommodation and transport to the respective SAWS Centurion offices. 
 
 
Please Note: SAWS is under no obligation to employ the learners on upon the completion of the programme. 
 
Enquiries for the above-mentioned positions must be directed to: 
Ms. Nokubonga Mkhize at Tel. (012) 367 6059 
 
For further information regarding the Work Integrated Learning Programme send email to: (hrenquiries@weathersa.co.za)
 
Closing Date: 22 August 2024 
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above positions and upload your (Comprehensive CV with certified copies of qualifications). Use the abovementioned References to indicate your field of study. Due to the large number of applications, we envisage receiving, only short-listed candidates will be contacted. Should you not hear from us within 4 weeks of the closing date, please regard your application as unsuccessful.`],postedDate:"20/8/2024",iframe:"",uuid:"pd1e2f90f-2ebf-4cd2-ac5e-6cc7a4883859"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/centlec-small-cmyk-logo_orig.jpg",href:"https://www.govpage.co.za/centlec-vacancies-blog/centlec-vacancies5997679",title:"CENTLEC VACANCIES",content:[],postedDate:"20/8/2024",iframe:"https://drive.google.com/file/d/14KSN4AZYz7w8fzJxE7cCQ7zkzSDPHCVS/preview",uuid:"p2594ea2d-be20-4a98-9e6c-136976cd0097"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/joburg-market_orig.gif",href:"https://www.govpage.co.za/joburg-market-vacancies-blog/joburg-market-vacancies6864916",title:"JOBURG MARKET VACANCIES",content:[],postedDate:"20/8/2024",iframe:"https://drive.google.com/file/d/1oNz37JSjlCZOuSHnkFd_y1ggeSlIaDN-/preview",uuid:"pea3351a2-376b-4d46-8893-07d92325fd11"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/johannesburg-city-parks-and-zoo_orig.png",href:"https://www.govpage.co.za/johannesburg-city-parks-vacancies-blog/johannesburg-city-parks-vacancies4580747",title:"JOHANNESBURG CITY PARKS VACANCIES",content:[` 
JOHANNESBURG CITY PARKS
 `,` 
 
JOB ADVERTISEMENT (INTERNAL ONLY) 
 
HEAD GARDENER X16 (PERMANENT) 
SALARY: (R17,314.77 - R23,373.84) 
 
Job purpose 
Supervise Arboriculture/Horticulture teams to ensure completion of scheduled maintenance tasks as directed by Senior Arboriculturist/ Horticulturalist according to Standard Operating Procedures. Ensure compliance with SHEQ standards in daily activities. Organize necessary machinery and tools for the team, transport them to the worksite, and supervise the execution and completion of required activities. 
 
Job Requirements 
Grade 12 or equivalent qualification 
Basic Knowledge of Landscaping/Horticulture/Arboriculture • Proven experience in transporting teams or individuals using heavy vehicles such as trucks or tractors. Knowledge of SHEQ requirements 
1 years’ experience in the supervisory level (Horticultural/ Arboriculture field)
Valid SA driver’s license Code 10 & Valid PDP. Code 14 drivers’ license - added advantage 
 
Key performance areas 
To supervise the teams so that required activities are executed as per Standard Operating Procedures. 
Co-ordinate completion of job cards as per direction from the Senior Arboriculturist/ Horticulturalist, including scheduled maintenance and customer complaints. 
Support the Senior Arboriculturist/ Horticulturalist with inspections. 
Support Senior Arboriculturist/ Horticulturalist & check daily complaints & queries from all stakeholders. 
Check equipment are in working order and transport it to the worksite 
Work cohesively with the team to ensure completion of required tasks 
Report any safety and environmental incidents on site and infrastructure issues 
Report to the Senior Arboriculturist/ Horticulturalist on team performance and job card status 
Comply with SHE-Q requirements and JCPZ policies when conducting work 
 
Knowledge & Skills 
Advanced/ Safe driving skills driving heavy vehicles i.e. truck/tractor/bus 
Excellent sense of navigation, Performance supervision & control skills 
Experience on Machine operations for horticultural/arboriculture machinery 
Knowledge and application of propagation of plants 
Good understanding of SHERQ requirements and the applications to horticulture/arboriculture 
Excellent Interpersonal Skills, Communication Skills and Teamwork 
Ability to work under pressure, Time Management, Problem solving skills, Customer service orientation & Leadership, Values, honesty and integrity, Responsible and Reliable 
Proactiveness and pays attention to details, Ability to maintain confidentiality 
 
 
Workplace: Region F 
Closing Date: 2 September 2024
Enquiries: 0117126601/6749/6792 
Email only CV: talentmanagement@jhbcityparks.com
 Reference number: HG25072024 
 
Quote the reference number on the subject; failure to adhere to the given instruction will result in disqualifying your application. Note: Johannesburg Parks and Zoo is an equal opportunity employer. If you do not receive a response from us within 21 days after the closing date of this advertisement, please accept that your application was unsuccessful.
 
 
 
 
 `,` 
 
 
 
 
 JOB ADVERTISEMENT (INTERNAL ONLY) 
 
EPWP OFFICER (X1 PERMANENT) 
SALARY (R17 314,77 - R23 373,84 ) 
 
JOB PURPOSE 
Provide high level coordination and maintenance implementation of outsourced regional portfolio in line with standard operating procedures, policies and legislations that are in place. Efficient coordination of all outsourced work by administering and reporting on the EPWP Program requirements with guidance from the Regional Manager. 
 
MINIMUM REQUIREMENTS 
ND in Horticulture or related field, OHVS certificate (to be obtained via training) 
Driver’s License, 3 Years in local government 
Administrative and project management experience, Driver’s License 
Horticultural and Arboriculture knowledge 
Advantageous: Understanding of project management, Public open spaces operational tactics, Knowledge of legislation relating to EPWP and related Regulations. Diploma/Certificate in project management or equivalent. Project management competency. 
 
KEY PERFORMANCE AREAS 
Identify work that needs to be undertaken in the Region (Augmented / Regional services) in consultation with the regional management. 
Have input on the regional outsourced portfolio’s expenditure in line with the regional budget as directed by the regional manager. 
Creating project plans for regional and augmented portfolio. 
Monitoring of service providers undertaking augmented / regional work to ensure that they are working according to specification. 
Completing all work commissioning requests 
Completing of work completion certificate / Completing all work acceptance forms, checklist, quality assurance, and safety files (on field work). 
Compiling all evidence (report) work completed (before and after pictures) for submission. 
Verification of submitted invoice documents to ensure that they comply with all requirements. 
Recording the EPWP information for all services and EPWP Programme on available systems. Inform the Regional Manager on status & progress of the Augmented / regional services Programme and highlight changes needed. 
Provide technical advice to clients on approaching horticultural tasks. 
Compiling and sending client completion reports. 
Design, develop, and implement systems for prioritizing, assigning, tracking, and reporting maintenance issues. 
Create project plans for significant tasks and oversee their execution. 
Maintain accurate administration records for all maintenance-related tasks. 
Monitor compliance of SHEQ requirements 
Verify EPWP information received from Service Providers through all programs (contractors, cooperatives) 
Ensure that the required EPWP information submitted is compliant. 
Ensuring the required EPWP information is submitted with invoice (certified I.D.’s, attendance register, payment registers, employee contracts) with correct implementation dates. 
Once received, it should be scanned, labelled, and populated on the T Drive under the EPWP folder. 
Capture EPWP employee information on the EPWP system monthly. 
Request a monthly report from the EPWP Coordinator and verify if the information is captured correctly. 
Prepare and ensure the EPWP report and T drive information are in line for audit purposes, Oversee that EPWP Quarterly targets. 
Ensuring completed monitoring performance forms, checklist forms and job cards are attached to the invoice. 
Recording of submitted invoices to finance for tracing 
 
To undertake site briefing sessions and project implementation. 
Responds to contractors/ other EPWP and Cooperative queries. 
Administer the necessary support needed by SMME’s. 
EPWP officer will coordinate with relevant JCPZ user departments. 
Attend to complaints from regional clients/Community leaders and residents to ensure good customer service and feedback to clients and regional manager 
Management of customer services with Augmented services 
Liaise with internal and external stakeholders. 
 
Skills and Knowledge: 
Financial Acumen, Business Administration, Report writing, Skills management, 
Data analysis and judgment, project management, planning & organising 
Integrity & honesty, resilience, interpersonal skills, teamwork, creativity 
Innovation, results orientation, National EPWP policies and objectives 
Decisiveness, negotiation skills, Alignment with JCPZ values 
Understanding of the City’s IDP, Sector Plan and related imperatives 
JCPZ policy & procedure framework, JCPZ mandate, strategy and stakeholder analysis 
 
Workplace: Regions 
Enquiries: 011 7126601 /6792/6668 
Reference: EPWP25072024 
Email CVs only: talentmanagement@jhbcityparks.com
Closing Date: 2 September 2024 
 
Quote the reference number on the subject; failure to adhere to the given instruction will result in disqualifying your application. 
 
Note: Johannesburg Parks and Zoo is an equal opportunity employer. If you do not receive a response from us within 21 days after the closing date of this advertisement, please accept that your application was unsuccessful.
 
 
 
 
 
 `,` 
 
 
 
INTERNAL AND EXTERNAL ADVERT
 
SENIOR MANAGER FACILITIES MANAGEMENT
(X1 PERMANENT) • (R1,285,083.21 - R1,610,793.50 P/A)
 
JOB PURPOSE: Responsible for overall Departmental performance; provide direction and decision making in line with Corporate and Divisional Strategy. Provide efficient supportive services to the organisation through fleet and plant management; repairs and maintenance management; stores and inventory; and security services. Plan for the future of the Department; provide support and guidance to managers. Lead, direct and manage the facilities to ensure effective service delivery to customers; and to safeguard facilities and customers and a well managed and sustainable infrastructure, open spaces and facilities.
 
KEY PERFORMANCE AREAS
Drive strategy of the Department: Provide high level advice to the Executive on strategic planning and business opportunities, risk management and continuous quality improvement • Undertake the development, implementation, monitoring and reporting of the Departmental Plan to meet the strategic goals • Manage all governance arrangements to ensure adherence to the legislative requirements • Ensure that cohesive governance and risk management policies are in place and fully comply with all regulatory requirements • Contribute to improve operational systems, processes and policies to support management reporting, information flow and management, business processes and organisational planning • Lead the Department and oversees its functions, resources and outputs thereof.
Direct, oversee and manage the various departmental functions: Ensure the development and implementation of sub-unit business plans • Oversee the preparation and review of plans, specification and cost estimates for assigned projects • Provide assistance and advice on specifications and maintenance manuals • Ensure quality control and safety inspections of facilities, fleet and equipment • Assist in the preparation of contracts with external service providers • Review, measure and manage project implementation • Close project off on completion in line with organisational guidelines and requirements • Manage and monitor contractual agreements between service providers and facilities management • Manage and monitor the procurement of equipment and related duties for JCPZ • Manage and monitor the budget of the department and various units • Ensure the implementation of the policy, procedures and plans for energy efficiency and waste management.
Oversee, ensure and conduct managerial responsibilities: Design overarching policies that govern the Department • Develop Departmental business plans aligned to Corporate Strategy; COJ Departments • Ensure Department is managed effectively through and performs managerial tasks for direct staff • Monitor programs efficiency; develop reporting procedures and other methods to measure success, and revise processes and procedures to improve program effectiveness • Ensure adherence to legislative and parent Department guidelines.
Optimise individual and team performance: Performance Management • Actively participates  and manages own performance levels • Mentors and supports the learning and development of team members • Contributes to team effectiveness and team cohesion.
Manage expectations of internal and external stakeholders: Build and maintain relationships with stakeholders • Communicate appropriate information and status updates/reports to relevant stakeholders.
Develops/ reviews policies and adheres to SHEQ standards and security monitoring: Develop/ review SOPs for the Department • Implement and monitors JCPZ SHE and security  policies and procedures • Ensure activities are in line with the SHEQ policies and procedures of JCPZ.
Manages risk: Implement identified risk mitigation measures and ensure compliance to relevant policies and procedures.
 
MINIMUM JOB REQUIREMENTS: Bachelor’s Degree in Engineering/ Built Environment /Fleet Management • Post Graduate qualification in Business Management (an added advantage) • Minimum of 5-8 years of experience in Facilities and Fleet Management experience • Building and Infrastructure related experience is essential • At least 2-3 years are at a Senior Management level in the public sector.
 
COMPETENCIES: Facilities Management expertise • Team and people management • Performance Management • Project Management • Planning and Organising • Data Analysis and Judgement • Leadership • Knowledge and Application of TQM methodologies, principles and tools • JCPZ policy and procedure framework • JCPZ mandate, strategy and stakeholder analysis • Alignment with JCPZ values • Integrity and honesty • Interpersonal Skills • Results orientation • Resilience • Creativity and Innovation • Reliability • Problem Solving.
 
 
Workplace: Springfield 
• Contact for Enquiries: 011 712 6601/ 6668
Email CVs to: talentmanagement@jhbcityparks.com
Reference: SMF17082024 
• Closing Date: 31 August 2024
 
“Quote the reference number on the subject; failure to adhere to the given instruction will result in disqualifying your application”
 
Note: Johannesburg Parks and Zoo is an equal opportunity employer. If you do not receive a response from us within 21 days after the closing date of this advertisement, please accept that your application was unsuccessful.
 
 
 
 
 
 `,`INTERNAL AND EXTERNAL ADVERT
 
REGIONAL MANAGER
(X1 PERMANENT) 
• (R976,308.28 - R1,210,274.24 P/A)
 
JOB PURPOSE: Responsible for the overall Region performance; provide direction and decision making of the Region in line with Corporate and Divisional Strategy. Lead, direct and manage the integrated service delivery plan for the regional portfolio of parks, open spaces, cemeteries, MOE, SOE, Government and CoJ Departments by developing and implementing strategies, policies, processes, procedures and in line with open spaces provisioning requirements of JCPZ, COJ and Regional priorities. Identify, build and strengthen strategic partnerships for improved service delivery and to advance environmental imperatives. Manage the allocation, utilization and optimization of scarce resources in order to achieve the overall strategic JCPZ and COJ objectives. Plan for the future of the Region; provide support and guidance to managers.
 
KEY PERFORMANCE AREAS
Drive strategy of the Department: Provide high level advice to the Executive on strategic planning and business opportunities, risk management and continuous quality improvement • Undertake the development, implementation, monitoring and reporting of the Departmental Plan to meet the strategic goals • Manage all governance arrangements to ensure adherence to the legislative requirements • Ensure that cohesive governance and risk management policies are in place and fully comply with all regulatory requirements • Contribute to improve operational systems, processes and policies to support management reporting, information flow and management, business processes and organisational planning • Lead the Department and oversees its functions, resources and outputs thereof.
Manage finances and budget within the region: Develop and administer the regional budget as per the published guidelines • Direct and coordinate with the Finance department to fund operations within the region • Monitor monthly variance reports and ensure effective planning, monitoring, and controlling of assets • Provide documentation and support for financial reporting requirements • Implement mitigation measures on Audit Findings.

Plan, direct and oversee the operations of the region: Provide input to the development of the Service Delivery Strategy and Plan • Cascade Service Delivery targets down to develop annual regional business plans • Prepare and present medium and long term plans and forecasts for space, operational, maintenance and equipment requirements • Ensure the implementation of the latest regulations and ISOs • Develop and implement integrated service delivery plan in consultation with MOE, SOE, Government and CoJ Departments • Provide directions to Senior Arboriculturist and Senior Horticulturists with regard to annual and monthly activity plans • Monitor and review regional performance against business plans.
Optimise individual and team performance: Performance Management • Actively participates and manages own performance levels • Mentors and supports the learning and development of team members • Delegate responsibilities to teams within the region and monitor their performance • Oversee the contracting of EPWP staff.
Manage expectations of internal and external stakeholders: Build and maintain relationships with stakeholders • Communicate appropriate information and status updates/reports to relevant stakeholders.
Develops/ reviews policies and adheres to SHEQ standards and security monitoring: Develop/ review SOPs for the Department • Implement and monitors JCPZ SHE and security policies and procedures • Ensure activities are in line with the SHEQ policies and procedures of JCPZ.
Manages risk: Implement identified risk mitigation measures and ensure compliance to relevant policies and procedures.
 
MINIMUM JOB REQUIREMENTS: • National Diploma in Horticulture or related qualification • Bachelor’s Degree in Horticulture (an added advantage) • At least 8 years’ experience in the horticultural environment • Minimum 5 years’ experience in a management position within the public sector.
 
COMPETENCIES: Understanding of the National Environmental mandate • National, Provincial, and local authority operations • Business management principles and methodologies • Financial acumen • Performance Management • Project Management • Strategic and tactical planning • Data Analysis and Judgement • Leadership • Legislative frameworks and regulations governing open space planning and zoning • JCPZ policy and procedure framework • JCPZ mandate, strategy and stakeholder analysis • Alignment with JCPZ values • Report writing • Integrity and honesty • Interpersonal Skills • Results orientation • Resilience • Creativity and Innovation • Reliability • Decisiveness.
 
 
Workplace: Regions 
• Contact for Enquiries: 011 712 6601/ 6668
Email CVs to: talentmanagement@jhbcityparks.com
Reference: RM17082024 
• Closing Date: 31 August 2024
 
“Quote the reference number on the subject; failure to adhere to the given instruction will result in disqualifying your application”
 
Note: Johannesburg Parks and Zoo is an equal opportunity employer. If you do not receive a response from us within 21 days after the closing date of this advertisement, please accept that your application was unsuccessful.`,`INTERNAL AND EXTERNAL ADVERT
 
MACHINE REPAIRMAN: MINOR PLANT (X9 PERMANENT) 
• (R14 116,71 - R19 056,66 P/M)
 
JOB PURPOSE: To provide minor plant repair and maintenance services to JCPZ to ensure continuous availability of machines and support to enable the effective operations of JCPZ.
 
KEY PERFORMANCE AREAS: • Order and receive spares from stores for repairs • Request spare parts as per Job card • Ensure no unnecessary use of spares • Log ad hoc repairs on offline job-card • Reduce maintenance which has wasteful cost implications • Collect faulty equipment from and identify mechanical faults • Repair machinery as per works instruction within daily requirement rate and within set standards and deadlines • Sign off complete job cards for work done and submit to Supervisor • Complete time sheets-daily and weekly • Ensure quality standards are maintained • Conduct proactive maintenance • Report any defects to the supervisor • Return equipment once repairs have been completed and signed off • Report any unsafe acts or accidents immediately • Conduct fields checks on vehicles and equipment; and provide reports to Lead Plant • Liaise with Stores and Supervisor to ensure that all repairs and maintenance is complete based on their requirements and specifications • Liaise with Foreman to ensure that all work is carried out according to plan and specification within the required targets • Assist Workshops Foreman with reports on the state of machines • Liaise with Workshop foreman and Maintenance Planner regarding scheduling of work outputs equipment and machinery • Implement and monitor JCPZ safety, health, environmental and security policies and procedures.
 
MINIMUM JOB REQUIREMENTS: • Minimum GRADE 10 or NQF equivalent • Driver’s License code EB or higher (an advantage) • English Proficiency • 1-2 years’ experience in a repairs workshop environment • Competency Course (lawnmower, brush cutters) • Computer Courses, Fleet, Admin, Inventory.
 
KNOWLEDGE AND SKILLS: • Knowledge of mechanics and machinery repairs (slashers, brush-cutters, ride-ons • Inventory Management • Knowledge and application of SHEQ standards and requirements • Plant and mechanical skills • JCPZ policy and procedure framework • JCPZ mandate, strategy and stakeholder analysis • Integrity & honesty, interpersonal skills and teamwork, innovation and creativity, resilience • Results Orientation, reliability, problem solving, Alignment with JCPZ values.
 
 
Workplace: Springfield
Contact for Enquiries: 011 712 6601/ 6668
Email CVs to: talentmanagement@jhbcityparks.com
Reference: MR25072024 
• Closing Date: 30 August 2024
 
“Quote the reference number on the subject; failure to adhere to the given instruction will result in disqualifying your application”
 
Note: Johannesburg Parks and Zoo is an equal opportunity employer. If you do not receive a response from us within 21 days after the closing date of this advertisement, please accept that your application was unsuccessful.`,`INTERNAL AND EXTERNAL ADVERT
 
ADMIN OFFICER
(X1 PERMANENT) • (R17,314.77 TO R23,373.84 P/M)
 
JOB PURPOSE: To give administrative and secretarial support to Manager. To assist with the collation and recording of reports and documentation. To provide office support to the office/ depot.
 
KEY PERFORMANCE AREAS: • Welcomes and tends to visitors meeting with Manager • Organise and maintain Manager’s diary • Manage incoming calls, emails, enquiries and requests, faxes, post and often corresponding on behalf of the Manager • Execute the typing, distribution and filing of documents • Ensure timely booking of boardrooms/meeting venues to secure meeting facilities • Coordinate special activities such as interviews, workshops and other activities • Accompany the manager on official visits if required • Organise and attend meetings with Manager where necessary, taking minutes during meetings • Coordinate with stakeholders in terms of actions to be performed post-meetings • Update list of staff contact details • Arrange catering for all management functions where required • Liaise with Head Office regarding Finance, Human Capital, and Communications matters • Devise and maintain an office system which includes data management and filing • Maintain stationery stock for office; requesting additional stock as and when needed • Coordinate, monitor and direct the acquisition of supplies, telecommunication systems, office facilities, records storage and retrieval systems, and forms • Compile and update project lists • Communicate events on behalf of the Department/ Unit • Coordinate transport arrangements, visa, accommodation, tickets and any other requests for the purpose of ensuring efficient and effective execution of duties in liaison with the Travel Coordinator • Ensure the smooth functioning of the office and upholds a positive image for the Manager • Arrange/ Schedule departmental training, wellness events as directed by the Manager • Compile attendance registers, timesheets, leave requests and approvals for the region depot • Manage the depot office’s petty cash float • Monitor office administration operational expenditure • Initiate the procurement of office supplies according to the policies and procedures of JCPZ • Collate information from Managers/ Specialists within Department • Check grammar and formatting of reports ensuring consistency and attention to detail • Produce documents, brief papers, reports and presentations as directed • Maintain confidentiality of all reports and support provided to the Manager, this includes ensuring safe and secure record keeping.
 
MINIMUM JOB REQUIREMENTS: • Matric/ Grade 12 • Diploma in Secretarial/Admin or equivalent NQF level 5 qualification • 2 - 3 years general administration experience.
 
KNOWLEDGE & SKILLS: • Financial Acumen • Computer Literacy • Planning & Organising • Diary Management • Knowledge and application of MFMA • Report writing & Editing • Knowledge and application of administration best practices • Integrity & honesty • Interpersonal skills • Results orientation • Creativity • Innovation • Time management • JCPZ mandate, strategy and stakeholder analysis • Alignment with JCPZ values • Proficient in English • Good understanding of daily SHERQ requirements • JCPZ policy and procedure framework • Resilience.
 
 
Workplace: Regions 
• Contact for Enquiries: 011 712 6601/ 6668
Email CVs to: talentmanagement@jhbcityparks.com
Reference: AO27072024 
• Closing Date: 30 August 2024
 
“Quote the reference number on the subject; failure to adhere to the given instruction will result in disqualifying your application”
 
Note: Johannesburg Parks and Zoo is an equal opportunity employer. If you do not receive a response from us within 21 days after the closing date of this advertisement, please accept that your application was unsuccessful.`],postedDate:"20/8/2024",iframe:"",uuid:"pfb2a2e83-a629-446e-814d-ad370da476f9"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/pikitup-logo_orig.jpg",href:"https://www.govpage.co.za/pikitup-vacancies-blog/pikitup-vacancies6700216",title:"PIKITUP VACANCIES",content:[` 
PIKITUP

City of Johannesburg
Pikitup Head Office, Jorissen Place, 66 Jorissen Street, Braamfontein, 2001
Private Bag X74, Braamfontein, Johannesburg, 2017
Tel+27(0) 11 712 5200 - Fax +27(0) 11 712 5322
www.pikitup.co.za - www.joburg.org.za
 
 `,`COMPANY SECRETARY 
Department : Office of the Managing Director 
Location : Head Office 
Level : E1/ Task 19 
Duration : Permanent 
Reporting to : Managing Director 
Reference : COSEC-02 
 
The purpose: 
The purpose of this role is to ensure that Pikitup maintains excellent standards of corporate governance by acting as a point of communication between the board of directors and the company shareholders; by reporting in a timely and accurate manner on company procedures and developments; by recommending appropriate actions and policies for board consideration and making the board aware of any law relevant to or affecting the company. 
 
Key Responsibilities: 
• The role will be responsible to develop an annual working plan for the business unit in line with the overarching Business Strategy. 
• Develop Charters for Board and sub-committees. 
• Oversee PIKITUP Corporate Governance. 
• Develop the Governance Framework to plan, direct and coordinate PIKITUP’s governance activities to ensure that governance practices are consistent and aligned to applicable legislation and regulations. 
• Provide guidance and support to the PIKITUP Board, its committee(s), and the Executive Management on corporate governance. 
• Establish terms of reference for the Board inclusive of function requirements and levels of authority. 
• Develop an annual schedule of Board and respective sub-committee meetings and circulate to members. 
• Monitor the implementation of Board resolutions and legal compliance requirements to always ensure compliance and keep the Board informed on the status and progress. 
• Function as liaison between management, the Board and the City of Johannesburg (COJ). 
• Continuously facilitate the training of Board members and actively raising awareness around Corporate Social Responsibility and the Ethics Code. 
• Manage PIKITUP’s performance against Code of Conduct. Maintain the provision of input for all PIKITUP contractual negotiations. 
 
Minimum Qualifications: 
• Minimum requirements LLB degree (NQF 7). 
• Admission as Attorney or Advocate is preferable. 
• Post Graduate qualification would be an added advantage. 
• Membership with Institute for Chartered Secretaries of South Africa (now Chartered Governance Institute of Southern Africa would be an added advantage. 
 
Minimum Experience: 
• 8 years’ relevant experience in a legal management environment in a public sector/organisation of which at least 5 years on a senior managerial/strategic level. 
• Experience in corporate governance, risk management, environmental and waste management, legislative compliance and in-depth understanding of legislation governing local government. 
 
Required Competencies: Knowledge: 
• Extensive knowledge of Corporate Governance, Company Law, Municipal Finance Management Act, Municipal Systems Act, Risk Management Framework, King IV report, National Treasury Regulations. 
• Understanding of government environment both at national, provincial, and local sphere. 
• Sound proven leadership qualities. 
 
Skills:
• Intellectual and personal integrity. 
• Interpersonal skills and a strong drive. 
• Strong stakeholder management and communication skills. 
• Leadership. 
• Strong negotiation skills. 
• Conflict/ dispute resolution skills. 
• Demonstrates agility in challenging complex or ambiguous situations and is able to integrate material from a wide range of learning and thinking. 
• Decisive, ethical and ability to apply good judgement. 
• Strategy Development, Planning and Reporting. 
 
 
Interested applicants must complete an application form and submit a comprehensive CV together with certified copies of qualifications and identity document to recruit172024@pikitup.co.za by no later than the 30 August 2024. No late applications will be considered. Please ensure that the correct position reference number is inserted in the subject line of email. 
For enquiries contact Shirley Tjiane – 087 357 1086 
 
• Please quote the above position name and the reference number on all correspondence relating to this advert. 
• Pikitup reserves the right not to fill any vacancies. 
• Correspondence will only be entered into with shortlisted applicants. Should you not hear from us within six weeks after closing date of the advert please consider your application unsuccessful. 
• By submitting your application for a position at Pikitup, you are consenting that the personal information submitted as part of your application may be used for the purposes of Recruitment and Selection and related processes. 
 
PIKITUP IS AN EQUAL OPPORTUNITY EMPLOYER AND IS COMMITTED TO EMPLOYMENT EQUITY PRINCIPLES AND REDRESSING THE IMBALANCES OF THE PAST. APPLICATIONS ARE WELCOME FROM ALL DESIGNATED GROUPS (AFRICAN, COLOURED AND INDIAN MALES, ALL FEMALES & PERSONS WITH DISABILITIES).`,` 
JOB PROFILE
 `],postedDate:"20/8/2024",iframe:"",uuid:"p252f4062-f916-4cbf-bcc0-baa710a7cd9f"}],ie={"city of johannesburg vacancies":"https://www.govpage.co.za/city-of-johannesburg-metropolitan-municipality-vacancies-blog/city-of-johannesburg-vacancies2982540","city of ekurhuleni vacancies":"https://www.govpage.co.za/ekurhuleni-metropolitan-municipality-vacancies-blog/city-of-ekurhuleni-vacancies4415317","national health laboratory services (nhls) vacancies":"https://www.govpage.co.za/national-health-laboratory-services-nhls-vacancies-blog/national-health-laboratory-services-nhls-vacancies2857639","national home builders registration council (nhbrc) vacancies":"https://www.govpage.co.za/national-home-builders-registration-council-nhbrc-vacancies-blog/national-home-builders-registration-council-nhbrc-vacancies7683357","national student financial aid scheme (nsfas) vacancies":"https://www.govpage.co.za/national-student-financial-aid-scheme-nsfas-vacancies-blog/national-student-financial-aid-scheme-nsfas-vacancies3558260","office of the pension funds adjudicator (opfa) vacancies":"https://www.govpage.co.za/office-of-the-pension-funds-adjudicator-opfa-vacancies/office-of-the-pension-funds-adjudicator-opfa-vacancies2538678","private security industry regulatory authority (psira) vacancies":"https://www.govpage.co.za/private-security-industry-regulatory-authority-psira-vacancies-blog/private-security-industry-regulatory-authority-psira-vacancies7290277","public investment corporation (pic) vacancies":"https://www.govpage.co.za/public-investment-corporation-pic-vacancies-blog/public-investment-corporation-pic-vacancies9425638","south african broadcasting corporation (sabc) vacancies":"https://www.govpage.co.za/south-african-broadcasting-corporation-sabc-vacancies-blog/south-african-broadcasting-corporation-sabc-vacancies7767049","south african maritime safety authority (samsa) vacancies":"https://www.govpage.co.za/south-african-maritime-safety-authority-samsa-vacancies-blog/south-african-maritime-safety-authority-samsa-vacancies7603633","south african national parks (sanparks) vacancies":"https://www.govpage.co.za/south-african-national-parks-sanparks-vacancies-blog/south-african-national-parks-sanparks-vacancies1689438","south african social security agency (sassa) vacancies":"https://www.govpage.co.za/south-african-social-security-agency-sassa-vacancies-blog/south-african-social-security-agency-sassa-vacancies3023508","south african weather service (saws) vacancies":"https://www.govpage.co.za/south-african-weather-service-saws-vacancies-blog/south-african-weather-service-saws-vacancies6909185","centlec vacancies":"https://www.govpage.co.za/centlec-vacancies-blog/centlec-vacancies5997679","joburg market vacancies":"https://www.govpage.co.za/joburg-market-vacancies-blog/joburg-market-vacancies6864916","johannesburg city parks vacancies":"https://www.govpage.co.za/johannesburg-city-parks-vacancies-blog/johannesburg-city-parks-vacancies4580747","pikitup vacancies":"https://www.govpage.co.za/pikitup-vacancies-blog/pikitup-vacancies6700216"},ae={title:ee,blogPosts:ne,departments:ie},te="govpage-private-sector",oe=[],se={},re={},le={title:te,blogPosts:oe,departments:se,businesses:re},w=10;function me(){const[a,r]=g.useState(1),[t,s]=g.useState(null);g.useEffect(()=>{if(t){const p=document.querySelector(".modal a.btn.btn-primary");p&&p.remove()}},[t]);const n=j(H,z,ae,V,$,le),o=Math.ceil(n.length/w),l=n.slice((a-1)*w,a*w),d=p=>{r(p)},h=p=>{s(p)},c=()=>{s(null)};return e.createElement("div",null,e.createElement(P,{paginatedData:l,onPostClick:h}),e.createElement(C,{currentPage:a,totalPages:o,onPageChange:d}),t&&e.createElement("div",{className:"modal",onClick:c},e.createElement("div",{className:"modal-content",onClick:p=>p.stopPropagation()},e.createElement("span",{className:"close",onClick:c},"×"),e.createElement("div",{className:"modal-body"},e.createElement("img",{src:t.imgSrc||t.iconLink,alt:"company logo"}),e.createElement("h2",null,t.title||t.jobTitle),e.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:t!=null&&t.details?t.details:B((t==null?void 0:t.content)||"")}}),t.apply&&e.createElement("a",{href:t==null?void 0:t.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),t.href&&e.createElement("a",{href:t==null?void 0:t.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}export{me as default};
