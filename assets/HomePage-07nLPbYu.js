import{R as e,P as i,r as g,A as q,j as O,k as L}from"./vendor-DasOq3Un.js";import{u as F,c as _,f as j}from"./index-Csux3NFm.js";/* empty css             */function C({currentPage:a,totalPages:r,onPageChange:t}){const s=()=>{const o=[],l=Math.max(1,a-1),d=Math.min(r,l+3);for(let h=l;h<=d;h++)o.push(h);return o},n=o=>{t(o);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return e.createElement("div",{className:"pagination"},e.createElement("button",{onClick:()=>n(a-1),disabled:a===1},"Previous"),s().map(o=>e.createElement("button",{key:o,className:o===a?"active":"",onClick:()=>n(o)},o)),e.createElement("button",{onClick:()=>n(a+1),disabled:a===r},"Next"))}C.propTypes={currentPage:i.number.isRequired,totalPages:i.number.isRequired,onPageChange:i.func.isRequired};const E=({pdfImages:a})=>{const[r,t]=g.useState(1),[s,n]=g.useState(!1),[o,l]=g.useState(1),d=g.useRef(null),h=()=>{const m=new Image;m.src=a[o-1],m.onload=()=>{const u=d.current,f=u.getContext("2d"),b=window.devicePixelRatio||1,N=s?window.innerWidth:u.parentElement.clientWidth,x=Math.min(N/m.width,1),A=r*x,v=m.width*A,y=m.height*A;u.width=v*b,u.height=y*b,u.style.width=`${v}px`,u.style.height=`${y}px`,f.clearRect(0,0,u.width,u.height),f.scale(b,b),f.drawImage(m,0,0,v,y)},m.onerror=()=>{console.error("Failed to load image:",m.src);const u=d.current,f=u.getContext("2d");f.clearRect(0,0,u.width,u.height),f.font="20px Arial",f.fillStyle="red",f.fillText("Failed to load page",10,50)}};g.useEffect(()=>{h()},[r,s,o]);const c=()=>t(m=>Math.min(m+.1,2)),p=()=>t(m=>Math.max(m-.1,.5)),T=()=>n(!0),M=()=>n(!1),I=()=>{o<a.length&&l(o+1)},D=()=>{o>1&&l(o-1)};return e.createElement("div",{className:`pdf-viewer-container ${s?"full-view":"min-view"}`},s&&e.createElement("div",{className:"pdf-navbar"},e.createElement("button",{className:"minimize-view-btn",onClick:M},e.createElement(q,null)),e.createElement("div",{className:"zoom"},e.createElement("button",{onClick:c},e.createElement(O,null)),e.createElement("button",{onClick:p,disabled:r<=.5},e.createElement(L,null))),e.createElement("div",{className:"pdf-pagination"},e.createElement("button",{onClick:D,disabled:o<=1},"Prev"),e.createElement("span",null,"Page ",o," of ",a.length),e.createElement("button",{onClick:I,disabled:o>=a.length},"Next"))),e.createElement("canvas",{onClick:T,ref:d,className:"pdf-viewer-canvas"}))};E.propTypes={pdfImages:i.array.isRequired};function S({pdfImages:a,isLoaded:r}){return e.createElement("section",{className:"pdf-post"},r?e.createElement("div",{className:"pdf-container"},e.createElement(E,{pdfImages:a})):e.createElement("div",{className:"placeholder pdf-container-placeholder"}))}S.propTypes={pdfImages:i.array.isRequired,isLoaded:i.bool.isRequired};function k({iframeUrls:a}){const[r,t]=g.useState(!1),[s,n]=g.useState(0),o=c=>{c.stopPropagation(),t(p=>!p)},l=()=>{n(c=>c<a.length-1?c+1:c)},d=()=>{n(c=>c>0?c-1:c)},h=Array.isArray(a)?a[s]:a;return e.createElement("div",{className:`google-doc-viewer ${r?"fullscreen":""}`},e.createElement("iframe",{src:h,allowFullScreen:!0,className:"google-doc-iframe"}),e.createElement("div",{className:"navigation-buttons"},Array.isArray(a)&&e.createElement(e.Fragment,null,e.createElement("button",{className:"prev-doc-button",onClick:d,disabled:s===0},"Previous"),e.createElement("button",{className:"next-doc-button",onClick:l,disabled:s===a.length-1},"Next"))),e.createElement("button",{className:"toggle-fullscreen",onClick:o},r?"Exit Full Screen":"Full Screen"))}k.propTypes={iframeUrls:i.oneOfType([i.string,i.arrayOf(i.string)]).isRequired};function H(a,r){return e.useMemo(()=>{if(a.length===0)return e.createElement(e.Fragment,null);const s=({innerHTML:n})=>e.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:n}});return s.propTypes={innerHTML:i.string.isRequired},e.createElement("section",null,a.map((n,o)=>{var l,d;return e.createElement("article",{className:"job-post",key:o,onClick:()=>r(n)},n.imgSrc||n.iconLink?e.createElement("div",{className:"company-logo"},e.createElement("img",{loading:"lazy",src:n.imgSrc||n.iconLink,alt:"company logo"})):null,e.createElement("p",{className:"title"},(n==null?void 0:n.title)||(n==null?void 0:n.jobTitle)),((l=n==null?void 0:n.content)==null?void 0:l.length)>0?e.createElement(s,{innerHTML:n.content}):((d=n==null?void 0:n.details)==null?void 0:d.length)>0?e.createElement(s,{innerHTML:n.details}):n!=null&&n.iframe?e.createElement(k,{iframeUrls:n.iframe}):null,!(n!=null&&n.iframe)&&e.createElement("button",{className:"read-more-button",onClick:()=>r(n)},"Read More"))}))},[a,r])}function P({paginatedData:a,onPostClick:r}){const[t]=F(5e3);return e.createElement("div",{id:"posts"},a.map(s=>s.type==="pdf"?e.createElement(S,{key:s.id,pdfImages:s.pdfImages,isLoaded:t}):e.createElement(R,{key:s.id,post:s,onPostClick:r})))}P.propTypes={paginatedData:i.arrayOf(i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string})).isRequired,onPostClick:i.func.isRequired};function R({post:a,onPostClick:r}){return H([a],r)}R.propTypes={post:i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string}).isRequired,onPostClick:i.func.isRequired};const B=[{file:"1.pdf",images:["./assets/pdf_images/1/1_page_1.png","./assets/pdf_images/1/1_page_2.png"]},{file:"10.pdf",images:["./assets/pdf_images/10/10_page_1.png"]},{file:"11.pdf",images:["./assets/pdf_images/11/11_page_1.png"]},{file:"12.pdf",images:["./assets/pdf_images/12/12_page_1.png"]},{file:"13.pdf",images:["./assets/pdf_images/13/13_page_1.png"]},{file:"14.pdf",images:["./assets/pdf_images/14/14_page_1.png","./assets/pdf_images/14/14_page_2.png"]},{file:"15.pdf",images:["./assets/pdf_images/15/15_page_1.png","./assets/pdf_images/15/15_page_2.png"]},{file:"16.pdf",images:["./assets/pdf_images/16/16_page_1.png","./assets/pdf_images/16/16_page_2.png"]},{file:"17.pdf",images:["./assets/pdf_images/17/17_page_1.png"]},{file:"18.pdf",images:["./assets/pdf_images/18/18_page_1.png","./assets/pdf_images/18/18_page_2.png"]},{file:"19.pdf",images:["./assets/pdf_images/19/19_page_1.png"]},{file:"2.pdf",images:["./assets/pdf_images/2/2_page_1.png","./assets/pdf_images/2/2_page_2.png"]},{file:"20.pdf",images:["./assets/pdf_images/20/20_page_1.png"]},{file:"21.pdf",images:["./assets/pdf_images/21/21_page_1.png"]},{file:"22.pdf",images:["./assets/pdf_images/22/22_page_1.png"]},{file:"23.pdf",images:["./assets/pdf_images/23/23_page_1.png"]},{file:"24.pdf",images:["./assets/pdf_images/24/24_page_1.png"]},{file:"25.pdf",images:["./assets/pdf_images/25/25_page_1.png"]},{file:"26.pdf",images:["./assets/pdf_images/26/26_page_1.png","./assets/pdf_images/26/26_page_2.png","./assets/pdf_images/26/26_page_3.png","./assets/pdf_images/26/26_page_4.png","./assets/pdf_images/26/26_page_5.png","./assets/pdf_images/26/26_page_6.png","./assets/pdf_images/26/26_page_7.png","./assets/pdf_images/26/26_page_8.png","./assets/pdf_images/26/26_page_9.png","./assets/pdf_images/26/26_page_10.png","./assets/pdf_images/26/26_page_11.png","./assets/pdf_images/26/26_page_12.png","./assets/pdf_images/26/26_page_13.png","./assets/pdf_images/26/26_page_14.png","./assets/pdf_images/26/26_page_15.png","./assets/pdf_images/26/26_page_16.png","./assets/pdf_images/26/26_page_17.png","./assets/pdf_images/26/26_page_18.png","./assets/pdf_images/26/26_page_19.png","./assets/pdf_images/26/26_page_20.png","./assets/pdf_images/26/26_page_21.png","./assets/pdf_images/26/26_page_22.png","./assets/pdf_images/26/26_page_23.png","./assets/pdf_images/26/26_page_24.png","./assets/pdf_images/26/26_page_25.png","./assets/pdf_images/26/26_page_26.png","./assets/pdf_images/26/26_page_27.png","./assets/pdf_images/26/26_page_28.png","./assets/pdf_images/26/26_page_29.png","./assets/pdf_images/26/26_page_30.png","./assets/pdf_images/26/26_page_31.png","./assets/pdf_images/26/26_page_32.png","./assets/pdf_images/26/26_page_33.png","./assets/pdf_images/26/26_page_34.png","./assets/pdf_images/26/26_page_35.png","./assets/pdf_images/26/26_page_36.png","./assets/pdf_images/26/26_page_37.png","./assets/pdf_images/26/26_page_38.png","./assets/pdf_images/26/26_page_39.png","./assets/pdf_images/26/26_page_40.png","./assets/pdf_images/26/26_page_41.png","./assets/pdf_images/26/26_page_42.png","./assets/pdf_images/26/26_page_43.png","./assets/pdf_images/26/26_page_44.png","./assets/pdf_images/26/26_page_45.png","./assets/pdf_images/26/26_page_46.png","./assets/pdf_images/26/26_page_47.png","./assets/pdf_images/26/26_page_48.png","./assets/pdf_images/26/26_page_49.png","./assets/pdf_images/26/26_page_50.png","./assets/pdf_images/26/26_page_51.png","./assets/pdf_images/26/26_page_52.png","./assets/pdf_images/26/26_page_53.png","./assets/pdf_images/26/26_page_54.png","./assets/pdf_images/26/26_page_55.png","./assets/pdf_images/26/26_page_56.png","./assets/pdf_images/26/26_page_57.png","./assets/pdf_images/26/26_page_58.png","./assets/pdf_images/26/26_page_59.png","./assets/pdf_images/26/26_page_60.png","./assets/pdf_images/26/26_page_61.png","./assets/pdf_images/26/26_page_62.png","./assets/pdf_images/26/26_page_63.png","./assets/pdf_images/26/26_page_64.png","./assets/pdf_images/26/26_page_65.png","./assets/pdf_images/26/26_page_66.png","./assets/pdf_images/26/26_page_67.png"]},{file:"27.pdf",images:["./assets/pdf_images/27/27_page_1.png"]},{file:"28.pdf",images:["./assets/pdf_images/28/28_page_1.png"]},{file:"29.pdf",images:["./assets/pdf_images/29/29_page_1.png","./assets/pdf_images/29/29_page_2.png"]},{file:"3.pdf",images:["./assets/pdf_images/3/3_page_1.png","./assets/pdf_images/3/3_page_2.png"]},{file:"30.pdf",images:["./assets/pdf_images/30/30_page_1.png"]},{file:"31.pdf",images:["./assets/pdf_images/31/31_page_1.png","./assets/pdf_images/31/31_page_2.png"]},{file:"32.pdf",images:["./assets/pdf_images/32/32_page_1.png","./assets/pdf_images/32/32_page_2.png"]},{file:"33.pdf",images:["./assets/pdf_images/33/33_page_1.png"]},{file:"34.pdf",images:["./assets/pdf_images/34/34_page_1.png","./assets/pdf_images/34/34_page_2.png","./assets/pdf_images/34/34_page_3.png","./assets/pdf_images/34/34_page_4.png"]},{file:"35.pdf",images:["./assets/pdf_images/35/35_page_1.png"]},{file:"36.pdf",images:["./assets/pdf_images/36/36_page_1.png"]},{file:"37.pdf",images:["./assets/pdf_images/37/37_page_1.png"]},{file:"4.pdf",images:["./assets/pdf_images/4/4_page_1.png"]},{file:"5.pdf",images:["./assets/pdf_images/5/5_page_1.png","./assets/pdf_images/5/5_page_2.png"]},{file:"6.pdf",images:["./assets/pdf_images/6/6_page_1.png","./assets/pdf_images/6/6_page_2.png"]},{file:"7.pdf",images:["./assets/pdf_images/7/7_page_1.png","./assets/pdf_images/7/7_page_2.png"]},{file:"8.pdf",images:["./assets/pdf_images/8/8_page_1.png","./assets/pdf_images/8/8_page_2.png"]},{file:"9.pdf",images:["./assets/pdf_images/9/9_page_1.png"]}],G="/assets/agency_icons/minopex.png",V="minopex",U=[{jobTitle:"Control Room Operator",publishedDate:"Published 22 August 2024",expiryDate:"",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at<br><br><strong>Description</strong> <br><br>The purpose of this position is to continuously monitor all process parameters to ensure safe and effective operation of the production plant according to operating procedures and standards.<br><br><strong>Duties and Responsibilities</strong>&nbsp;<br><ul><li>Ensure compliance with Minopex Health and Safety responsibilities.</li><li>Identify hazards and risks while performing daily tasks and maintenance and take preventative measures.</li><li>Comply with provided systems, practices, methods, standards and procedures of the job.</li><li>Adhere to lock out procedures at all times.</li><li>Comply with legal and operational requirements.</li><li>Carry out visual inspection of the working area to ensure workplace safety.</li><li>Ensures compliance to statutory legislation and organisational requirements.</li><li>Control and monitor all process equipment through information received from the Scada System.</li><li>Act promptly on process defects as indicated by the Scada System.</li><li>Identify and report any potentially unsafe conditions.</li><li>Coordinating Process Operators and Attendants on the shift to act promptly on process defects.</li><li>Report abnormal and unusual conditions immediately.</li><li>Monitor and record process parameters such as flows, pressures, levels, and temperatures to ensure effective operation.</li><li>Interact and communicate with all Process and Engineering staff.</li><li>On instruction call-out appropriate Maintenance staff.</li><li>Complete production log-sheets.</li><li>Perform general housekeeping duties</li></ul><br><strong>Qualification Requirements</strong> <br><ul><li>Grade 12</li><li>National Certificate Mineral Processing Level 2 or equivalent Mineral Processing qualification will be advantageous</li></ul><br><strong>Experience and Skills&nbsp;Requirements</strong><br><ul><li>Minimum 3 years’ experience as a Process Operator</li><li>Flotation circuit operation experience will be advantageous</li><li>English language proficiency</li><li>Computer literacy</li><li>Competent in Scada System</li><li>Ability to multi-task and prioritise</li><li>Excellent communication skills</li><li>Time management skills</li></ul><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/n5bx86" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/n5bx86",iconLink:"/assets/agency_icons/minopex.png",uuid:"pa1750993-8445-4c0c-baec-2cd8a3926c6f"},{jobTitle:"Engineering Artisan - Electrician",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN<br><br><strong>Description</strong> <br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to maintenance requirements, standards and specifications.</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and Company standards and report all defects and breakdowns on equipment and machinery to the Supervisor. </li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems.</li><li>Consult with production teams on maintenance activities that affects production.</li><li>Support the achievement of engineering availability and production performance levels.</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the planned/asset maintenance system.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification </li><li>Valid section 13 Trade Test / Section 26(D) certificate </li><li>Valid driver’s license code B, EB or C1</li><li>Own transport to attend to call outs</li></ul> <strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum of 2-3 years’ experience as a qualified Electrician in a mineral processing plant</li><li>Valid MV MQA Certification</li><li>VSD and Soft Starter experience</li><li>DP and Pro-V Simocode experience</li><li>English language proficiency</li><li>Time management skills</li></ul></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/3zzp2n" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/3zzp2n",iconLink:"/assets/agency_icons/minopex.png",uuid:"pf628080b-c094-447e-b099-6ced6c605cf7"},{jobTitle:"Engineering Artisan - Fitter",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN<br><br><strong>Description</strong> <br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to maintenance requirements, standards and specifications.</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and Company standards and report all defects and breakdowns on equipment and machinery to the Supervisor. </li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems.</li><li>Consult with production teams on maintenance activities that affects production.</li><li>Support the achievement of engineering availability and production performance levels.</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the planned/asset maintenance system.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification </li><li>Valid section 13 Trade Test / Section 26(D) certificate </li><li>Valid driver’s license code B, EB or C1</li><li>Own transport to attend to call outs</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum of 2-3 years’ experience as a qualified Fitter in a concentrator plant </li><li>English language proficiency</li><li>Time management skills </li></ul><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/u5gd8h" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/u5gd8h",iconLink:"/assets/agency_icons/minopex.png",uuid:"p71f57e11-3e9c-425e-b84d-7057fea84305"},{jobTitle:"Engineering Artisan - Instrument Technician",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to maintenance requirements, standards and specifications.</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and Company standards and report all defects and breakdowns on equipment and machinery to the Supervisor. </li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems.</li><li>Consult with production teams on maintenance activities that affects production.</li><li>Support the achievement of engineering availability and production performance levels.</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the planned/asset maintenance system.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>National Diploma S4 Electrical Engineering – Light Current</li><li>Site specific certification might be required</li><li>Valid driver’s licence code B, EB or C1</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Entry level up to 5 years’ experience</li><li>English Language Proficiency&nbsp;</li><li>Time management skills</li></ul><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/sr3fjr" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/sr3fjr",iconLink:"/assets/agency_icons/minopex.png",uuid:"p4b13bdbf-a698-4728-ab2b-68d68e5af314"},{jobTitle:"Engineering Artisan - Rigger",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN<br><br><strong>Description</strong> <br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to maintenance requirements, standards and specifications.</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and Company standards and report all defects and breakdowns on equipment and machinery to the Supervisor.</li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems.</li><li>Consult with production teams on maintenance activities that affects production.</li><li>Support the achievement of engineering availability and production performance levels.</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the planned/asset maintenance system.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification </li><li>Valid section 13 Trade Test / Section 26(D) certificate </li><li>Valid driver’s license code B, EB or C1</li><li>Own transport to attend to call outs</li><li>Must be able to work in confined spaces</li><li>Must be able to work at heights</li><li>Must be familiar with risk assessment procedures </li><li>Mobile Crane License will be an added advantage</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum of 2-3 years’ experience as a qualified Rigger in a mineral processing plant&nbsp;&nbsp;</li><li>English language proficiency</li><li>Time management skill<br></li></ul></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/563ggr" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/563ggr",iconLink:"/assets/agency_icons/minopex.png",uuid:"p24e6a4cc-904e-448c-9881-a81056b1021c"},{jobTitle:"Engineering Artisan – Boilermaker",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Aggeneys, Northern Cape",details:[`
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
        <div class="vacancy-description"><strong>Introduction </strong><br>This position will be based at the Gamsberg site close to Aggeneys in the Northern Cape.<br><br><strong>Description<br></strong> <br>The purpose of this position is to be part of a Workshop team regarding the manufacturing and installation of projects, doing maintenance, shutdowns and servicing the mining environment/industry.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to the maintenance requirements, standards and specifications<br></li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and company standards to report all defects and breakdowns on equipment and machinery to the Supervisor<br></li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment<br></li><li>Ensure that all installations and equipment are safe and in good working order after task completion<br></li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems<br></li><li>Consult with production teams on maintenance activities that effects production<br></li><li>Supports the achievement of engineering availability and production performance levels<br></li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the maintenance of the planned/asset maintenance system</li></ul><br><strong>Qualification Requirements</strong><br><ul><li>Grade 12 or equivalent</li><li>Valid Section 13 / Section 26(D) Trade Test Certificate required</li><li>Valid driver’s license code B, EB or C1</li><li>Own transport to attend to call outs</li></ul><strong>Experience and Skills&nbsp;Requirements</strong><br><ul><li>2 years’ experience as a Boilermaker in a processing / workshop environment is required</li><li>English Language Proficiency<br></li><li>Time management skills<br></li><li>Maintenance and shutdown experience in the mine environment</li></ul><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/jfxq92" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/jfxq92",iconLink:"/assets/agency_icons/minopex.png",uuid:"p47a4815e-7abe-4f43-92ae-5add8bcd968c"},{jobTitle:"Engineering Artisan – Boilermaker",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to maintenance requirements, standards and specifications.</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and Company standards and report all defects and breakdowns on equipment and machinery to the Supervisor.</li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems.</li><li>Consult with production teams on maintenance activities that affects production.</li><li>Support the achievement of engineering availability and production performance levels.</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the planned/asset maintenance system.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification</li><li>Valid section 13 Trade Test / Section 26(D) certificate</li><li>Valid driver’s license code B, EB or C1</li><li>&nbsp;Own transport to attend to call outs</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>2 years’ experience as a Boilermaker in a mineral processing plant</li><li>English language proficiency</li><li>Time management skills</li><li>Vibrating screen assembly Huckbolting</li></ul><br><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/yicy1x" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/yicy1x",iconLink:"/assets/agency_icons/minopex.png",uuid:"p43fa5cd9-adfc-4b90-bcdc-7ec461236b49"},{jobTitle:"Engineering Artisan – Millwright",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to diagnose and maintain machinery and equipment according to technical specification and sound engineering practise.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to the maintenance requirements, standards and specifications.</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and company standards to report all defects and breakdowns on equipment and machinery to the Supervisor.</li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems.</li><li>Consult with production teams on maintenance activities that affects production.</li><li>Supports the achievement of engineering availability and production performance levels.</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the maintenance of the planned/asset maintenance system.</li><li>Supervise a section in the production area to ensure production targets are achieved according to the production plan.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification </li><li>Valid section 13 Trade Test / Section 26(D) certificate </li><li>Valid driver’s license code B, EB or C1</li><li>Own transport to attend to call outs</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum of 2-3 years’ experience as a qualified Millwright </li><li>English language proficiency</li><li>Time management skills </li></ul><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/b3lbun" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/b3lbun",iconLink:"/assets/agency_icons/minopex.png",uuid:"p8a39b9e2-9e1d-450e-989a-0e73b7c0c0b6"},{jobTitle:"Engineering Assistant",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Aggeneys, Northern Cape",details:[`
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
                    <span><label for="Entry_Level">Entry Level</label></span>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at the Gamsberg site close to Aggeneys in the Northern Cape.<br><br><strong>Description</strong> <br><br>The purpose of this position is to assist with housekeeping and engineering maintenance activities under instruction from the artisan/supervisor.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Lifts, holds, positions and supports parts and materials being worked on, manually or with appropriate tools as required</li><li>Assists with dismantling and re-assembling of components as per instruction</li><li>Loads and off -loads materials and parts onto and from transport vehicles, as required</li><li>Lifts, carries and moves materials to and from storage areas by hand or non-self-propelled equipment</li><li>Assist with installations and breakdowns where services are required under instruction from the artisan or engineering supervisor</li><li>Performs general housekeeping duties</li><li>Perform observing role when instructed by Artisan / Engineering Supervisor, e.g. fire watch check for burning conveyors or checking pipeline for leaks</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>1 years’ experience and knowledge within mining industry is preferred.</li><li>English Language Proficiency</li><li>Knowledge of Workplace Safety and Procedures</li><li>Time Management</li></ul><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/hbat0g" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/hbat0g",iconLink:"/assets/agency_icons/minopex.png",uuid:"p212f2831-82de-41a7-a873-83835628f3e6"},{jobTitle:"Engineering Supervisor – Electrical & Instrumentation",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to ensure that Electrical and Instrumentation maintenance and services are provided in line with organisational and client requirements.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Investigate, diagnose problems and breakdowns to determine resource requirements and order spares according to Company procedures.</li><li>Perform inspections in accordance with the Mine Health and Safety Act regulations and analyse breakdowns of the previous shift.</li><li>Over-inspect subordinates in their daily activities to ensure that maintenance is done according to organisational standards requirements.</li><li>Coordinate and monitor equipment availability to ensure adherence to production parameters.</li><li>Continuously analyse equipment efficiencies to recommend or implement improvements and changes to maximise operations.</li><li>Communicate equipment information and changes to relevant stakeholders to minimise production delays.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Attend to breakdowns immediately to minimize downtime.</li><li>Determine work schedules in conjunction with other engineering / process teams to ensure availability and optimal utilisation of equipment to the relevant sections and consult with production teams on maintenance activities that affects production.</li><li>Support the achievement of production and maintenance performance levels.</li><li>Perform administrative duties to ensure record accuracy and availability, budget compliance and spares availability</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification</li><li>Valid Section 13 / Section 26 (D) Trade Test Certificate </li><li>Valid driver’s licence code B, EB or C1</li><li>Own transport to attend to call outs</li><li>MV switching competency</li><li>Foreman certification</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 10 years’ experience in Electrical and Instrumentation maintenance with at least 3 - 4 years’ supervisory experience</li><li>English language proficiency</li><li>Time management skills</li><li>Employee Relations training</li><li>Supervisory training </li><li>Finance for non-financial managers training </li><li>Computer literate in MS Office</li><li>Relevant planned maintenance system training</li></ul><br><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/wvkzby" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/wvkzby",iconLink:"/assets/agency_icons/minopex.png",uuid:"pa20a4db8-e4b0-454d-8eb2-b648073be2e1"},{jobTitle:"Engineering Supervisor – Mechanical",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to ensure that mechanical maintenance and services are provided in line with organisational and client requirements.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Investigate and diagnose problems and breakdowns to determine resource requirements and order spares according to Company procedures.</li><li>Analyse breakdowns through root cause analysis and implement preventative measures on findings.</li><li>Over-inspect subordinates in their daily activities to ensure maintenance according to organisational standards and maintenance requirements.</li><li>Co-ordinate and monitor equipment availability to ensure adherence to production parameters.</li><li>Continuously analyse equipment efficiencies to recommend or implement improvements and changes to maximise operations.</li><li>Communicate equipment information and changes to relevant stakeholders to minimise production delays.</li><li>Ensure that all installations and equipment are safe and in good working order after task completion.</li><li>Attend to breakdowns immediately to minimise down time.</li><li>Determine work schedules in conjunction with other Engineering / Process teams to ensure availability and optimise utilisation of equipment to the relevant sections.</li><li>Consult with production teams on maintenance activities that affect production.</li><li>Support the achievement of production and maintenance performance levels.</li><li>&nbsp;Perform administrative duties to ensure record accuracy and availability, budget compliance and spares availability.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12 or equivalent qualification</li><li>Valid Section 13 / Section 26 (D) Trade Test Certificate </li><li>Valid driver’s licence code B, EB or C1</li><li>Own transport to attend to call outs </li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 10 years’ experience in Mechanical maintenance with at least 3 - 4 years’ supervisory experience</li><li>Legal liability training</li><li>English language proficiency</li><li>Time management skills</li><li>Employee Relations training</li><li>Supervisory management training </li><li>Finance for non-financial managers training </li><li>Computer literate in MS Office</li><li>Relevant planned maintenance system training</li></ul><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/qrkn89" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/qrkn89",iconLink:"/assets/agency_icons/minopex.png",uuid:"pc190dd3c-00ca-4d88-bf2f-29678d7deacc"},{jobTitle:"HR and Training Officer",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN.<br><br><strong>Description</strong> <br><br>The purpose of this position is to facilitate the implementation of HR Policies and Procedures by advising and assisting internal stakeholders on processes, actions and best practice to ensure that the organisation adheres to sound labour practices.<br><br><strong>Duties and Responsibilities</strong><br><br><strong>HR</strong> <br>• Implement HR Policies and Procedures, Collective Labour Agreements and Employee Relations structures to ensure compliance with relevant legislation and the Company’s HR philosophy.<br>• Responsible for HR and Benefits Administration. <br>• Extensive experience and a good track record of company representation at the CCMA.<br>• Identify and anticipate areas of potential conflict and advise site management thereof.<br>• Facilitate and participate in Employee Relations related meetings.<br>• Capturing of disciplinary records and provide support to Management.<br>• Maintain procedures and systems necessary to provide an Employee Relations service to line management and employees.<br>• Monitor the proceedings of all hearings to ensure consistency at all times and advise or guide hearing officials to ensure fairness and consistency at all times.<br>• Co-ordinate and conduct the necessary pre-hearing investigations.<br>• Implement and co-ordinate HR procedures and processes such as Recruitment, Wellness, Training and Employee Relations.<br>• Keep site management informed of the current work climate and likely future demand patterns, and recommend the action necessary to control, direct or contain them.<br>• Draft and complete legislative and site-specific documentation such as Social Labour Plan, EE, BBBEE and Training related documents or reports.<br>• Compile and communicate management reports.<br>• Drive the execution of performance and talent management initiatives, ensuring comprehensive engagement with stakeholders to foster a culture of continuous improvement and development.<br><strong>Training</strong> <br>• Implement Training Policies and Procedures.<br>• Facilitate training courses, keep records and reports on training.<br>• Identify training and development needs within the plant through job analysis, appraisal and regular consultation with Supervisors, Plant Managers and the Human Resources department (training needs analysis).<br>• Produce / develop training materials for in-house courses.<br>• Facilitate training courses as well as on-the-job training in the plant on a needs basis.<br>• Ensure that statutory training requirements are met.<br>• Manage the delivery of training and development programs.<br>• Assist Supervisors to solve specific training problems, either on a one-to-one basis or in groups.<br>• Have an understanding of e-learning techniques, and where relevant, being involved in the creation and/or delivery of e-learning packages.<br>• Ensure training complies with MQA and ISO standards and practices.<br>• Manage training programs to ensure they are delivering results.<br>• Prepare training schedules, allocate instructors to different courses and monitor costs to keep programs within budget.<br>• Management of the site-based training team ensuring that KPI’s are set and monitored, and that PDP’s are in place.<br>• Monitor and maintain all training and development related deliverables<br><br><strong>Qualification Requirements</strong><br> • Grade 12 <br>• Degree or National Diploma in HR or similar, with Certificate in Training &amp; Development (ETDP level 5 certificate), <br>• Assessors and Moderators certificate will be advantageous <br>• A Mineral Processing Certificate will be advantageous<br><br><strong>Experience and Skills&nbsp;Requirements</strong> <br>• Minimum 5 years’ experience as an HR and Training Officer in the mining industry<br>• Experience in Engineering / Minerals skills programs, learnerships &amp; qualifications.<br>• Knowledge of ISO 9001:2015 / ISO 45000:2018 / ISO 14001:2015<br>• Sound knowledge and experience in labour legislation in an industrial environment<br>• Sound knowledge of Labour Case Law in South Africa<br>• English language proficiency<br>• Time management skills<br>• Presentation and report writing skills<br>• Must have good interpersonal skills and must be able to work effectively with colleagues, trainees, supervisor and managers<br>• Strong analytical and decision-making skills to assess training needs and recommend appropriate solutions<br>• Computer Literate in MS Office (Intermediate)<br><br><br><br><br><br> <br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/d7tc3a" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/d7tc3a",iconLink:"/assets/agency_icons/minopex.png",uuid:"p43e143ec-c45d-4407-93aa-56ea109af68c"},{jobTitle:"HRD Assistant (Human Resource Development)",publishedDate:"Published 20 August 2024",expiryDate:"Closing Date: 27 August 2024",location:"Rustenburg, North West",details:[`
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
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/kbrlqh",iconLink:"/assets/agency_icons/minopex.png",uuid:"p5406708a-e17c-4be4-9f72-f1ac84fc8768"},{jobTitle:"Laboratory Analyst - Fixed Term",publishedDate:"Published 26 August 2024",expiryDate:"Closing Date: 29 August 2024",location:"Krugersdorp, Gauteng",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Quality Laboratory Services (Pty) Ltd</label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br>This position will be based at the at &nbsp;the Manganese Demonstration Plant in Krugersdorp<br><br><strong>Description</strong><br>This position is responsible for effective sample analysis using analytical procedures according to Client needs and ISO 17025 Standards.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Ensure compliance with Quality Laboratory Services Health and Safety responsibilities, legal and operational requirements</li><li>Identify hazards and risk while performing daily tasks and take preventative measure</li><li>Comply with provided systems, practices, methods, standards, and procedures of the job</li><li>Conduct visual inspections of the work area to ensure workplace safety and good housekeeping</li><li>Ensure that the correct chemical control measures are followed at all times</li><li>Monitor lab equipment functionality in the section to ensure adherence to production parameters</li><li>Ensure the adherence to handling of sample procedures from the point where the sample comes into the lab up to the point where it leaves the lab</li><li>Registration of samples on the Laboratory Information Management System (LIMS) and reporting of results on LIMS</li><li>Analyse all routine plant samples and special samples received from Clients</li><li>Ensure that any special test work requested by the Client or Line Management is conducted according to the specifications</li><li>Ensure that all test reports are distributed to the relevant sections as required</li><li>Ensure that all test work is conducted according to the quality requirements to ensure accurate results to Clients </li><li>Ensure that all non-conforming work is reported to the Quality Manager</li><li>Ensure adherence to ISO and legislative standards / requirements</li><li>Effectively managing time and resources to ensure that work is completed efficiently within the given deadlines</li><li>On-the-job training of new personnel on new and existing lab procedures and monitor and ensure the continuous adherence thereto</li></ul><strong><br>Qualification Requirements<br></strong><ul><li>A three-year Degree or Diploma in Analytical Chemistry is required</li></ul><strong><br>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 3 years’ experience in an analytical laboratory together with experience in chemical analysis</li><li>Knowledge of Laboratory Equipment</li><li>Knowledge of Chromium and Base metal analysis</li><li>Knowledge of the chemical composition, structure, and properties of substances and of the chemical processes and transformations that they undergo. This includes uses of chemicals and their interactions, danger signs, production techniques, and disposal methods</li><li>Time management</li><li>English language proficiency</li><li>Computer literate in MS Office </li><li>Valid driver’s licence code B, EB or C1</li></ul></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/w9ecai" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/w9ecai",iconLink:"/assets/agency_icons/minopex.png",uuid:"pea0623f0-5ad4-431c-aec0-ed2404f4fd57"},{jobTitle:"Maintenance Planner",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to manage the Engineering Planning office to ensure minimum downtime using the On Key Computerized Maintenance Management System.<br><br>Duties and Responsibilities <br><ul><li>Coordinates and monitors all Engineering maintenance and planning activities relating to the Technical and Metallurgical processes within the Plant.</li><li>Complement planned work by gathering critical information (resources, spares and tools arranged) for effective and safe execution.</li><li>Continually evaluate and motivate critical spares to support equipment reliability during its life cycle.</li><li>Actively assist in managing work backlogs.</li><li>Responsible for establishing and maintaining an accurate and comprehensive asset register, and managing the plant critical spares in collaboration with Engineer and Materials Controller.</li><li>Planning of responsibilities with the Engineer to ensure an efficient workflow.</li><li>Ensure compliance to all required standards and procedures.</li><li>Coordinate with subordinates to provide coverage during leave.</li><li>In order for the Maintenance Planner to contribute towards the safe and efficient achievement of set production targets, he/she will responsible to:</li></ul>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;o Compile and maintain a computerized asset plan ensuring that it is always up to date.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;o Provide asset reports to the Plant Engineer on a periodical basis as required.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;o Compile requisitions as and when necessary to ensure that special equipment is in stock for work required.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Conduct in-depth root cause analysis and report the findings thereof to the Plant Engineer when major failures occur.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Compile monthly reports from Computerized Maintenance Management System (CMMS) and submit to respective parties.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Compile ad hoc reports as and when required by management or the client.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; o Optimize scheduled tasks based on historical plant equipment failures.<br><br><strong>Qualification Requirements</strong> <br><ul><li>Relevant Trade Test Certificate with 5 years’ experience as an Artisan and 2 years’ experience as a Foreman; or National Diploma Engineering with at least 5 years process plant experience</li></ul><strong>Experience and Skills Requirements</strong> <br><ul><li>Minimum 2 years’ experience in a Maintenance Planning role</li><li>Expert knowledge of and training in the maintenance module Pragma On Key or other similar maintenance module</li><li>Relevant planned maintenance system training, On Key would be an advantage</li><li>Sound knowledge of Mining Engineering Codes of practices, policies and procedures</li><li>A good knowledge of machinery and equipment used on the relevant operations</li><li>Understanding of engineering best practices and new technologies relating to engineering principles &amp; processes</li><li>Proven technical and maintenance capability</li><li>Sound knowledge of Condition Monitoring practices</li><li>Good working knowledge of Reliability-Centered Maintenance principles would be very advantageous</li><li>Mineral Process Plant experience would be an advantage</li><li>Experience in project planning and scheduling to include shut down planning in projects</li><li>English language proficiency</li><li>Computer literate in MS Office – Excel, Word, Power point, MS Projects</li><li>Valid driver’s license code B, EB or C1</li><li>Own transport to attend to call outs</li></ul><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/gsthyf" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/gsthyf",iconLink:"/assets/agency_icons/minopex.png",uuid:"p4b1672f8-540a-40c9-a7b5-8a1c43ec03e9"},{jobTitle:"Materials Controller",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN.<br><br><strong>Description</strong> <br><br>The purpose of this position is to coordinate and ensure the availability of inventory in support of production and maintenance requirements.<br><br><strong>Duties and Responsibilities <br>Interface Management:</strong><br><ul><li>Act as the primary point of contact between the engineering/processing team and the client procurement team.</li><li>Facilitate clear communication between all parties to ensure timely procurement and delivery of spares, reagents, and other critical materials.</li><li>Coordinate with both internal and external stakeholders to align procurement activities with the mine’s operational needs.</li></ul><ul><li><strong>Internal Procurement Management:</strong></li><li>Oversee and manage the Minopex internal procurement processes, ensuring that all materials and equipment are ordered, tracked, and delivered according to schedule.</li><li>Ensure all procurement activities comply with company policies and procedures.</li><li>Maintain accurate records of procurement transactions and inventory levels.</li><li>Implement and adhere to Procurement policies, procedures and standards</li><li>Assist with RFQ adjudication according to site requirement</li></ul><strong>&nbsp; &nbsp; Inventory Control:</strong><br><ul><li>Monitor stock levels of spares, reagents, and other materials to ensure</li><li>optimal inventory management.</li><li>Implement inventory control measures to prevent stockouts and minimize excess inventory.</li><li>Conduct regular stock audits and reconcile any discrepancies.<br></li></ul><strong>&nbsp; &nbsp; TMM Inspection and Maintenance Coordination:</strong><br><ul><li>Ensure that all Trackless Mobile Machines (TMMs) are regularly inspected and maintained by the OEM as per the agreed maintenance schedules.</li><li>Coordinate with the OEM to schedule inspections, repairs, and preventive maintenance activities, minimizing downtime.</li><li>Track and document all maintenance activities, ensuring compliance with safety and operational standards.</li></ul><strong>&nbsp; &nbsp; Data Analysis and Reporting:</strong><br><ul><li>Analyse procurement and inventory data to identify trends, variances, and areas for improvement.</li><li>Prepare and present regular reports on materials availability, procurement efficiency, and TMM maintenance status.</li><li>Use data insights to inform decision-making and drive continuous improvement initiatives.</li></ul><strong>&nbsp; &nbsp;Compliance and Safety:</strong><br><ul><li>Ensure all materials management and procurement activities comply with local and national regulations, as well as company safety and environmental standards.</li><li>Stay informed about changes in regulations and adjust procedures accordingly.</li><li>Comply with all relevant Minopex SHEQ Management systems and procedures</li></ul><br><strong>Qualification Requirements</strong><br><ul><li>Grade 12 or equivalent</li><li>Diploma or Advanced Certificate in Supply Chain Management, or a related field</li></ul><br><strong>Experience and Skills&nbsp;Requirements</strong><br><ul><li>Minimum of 3-5 years of experience in materials management or procurement, preferably within the mining industry.</li><li>English language proficiency</li><li>Strong understanding of procurement processes, inventory management, and supplier coordination.</li><li>Experience with TMM maintenance coordination is highly desirable.</li><li>Proficiency in inventory management and procurement software (e.g. SAGE) and advanced Excel skills.</li><li>Attention to detail</li></ul><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/qm28zi" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/qm28zi",iconLink:"/assets/agency_icons/minopex.png",uuid:"pd8b59849-88db-4b62-b843-01003d1a9bee"},{jobTitle:"Plant Administration Coordinator",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN.<br><br><strong>Description</strong> <br><br>The purpose of this position is to provide secretarial, clerical and administrative support to the Plant in order to ensure that an effective and efficient administrative service is provided.<br><br><strong>Duties and Responsibilities</strong> <br><strong>Secretarial, Reception &amp; Administration Responsibilities:</strong><br><ul><li>Provide office support services in order to ensure efficiency and effectiveness within the Plant.</li><li>Perform clerical duties in order to maintain administration.</li><li>Direct visitors to the appropriate staff member.</li><li>Assist in the planning and preparation of meetings, conferences, conference telephone calls and managing booking of boardroom for meetings and training sessions.</li><li>Administration of petty cash including capturing, reimbursing and balancing.</li><li>Organising functions and meetings, (i.e. safety achievements, farewells, year-end functions etc.).</li><li>Compiling and typing of documents and reports.</li><li>Maintaining filing systems.</li><li>Capturing and balancing of overtime, standby and other monthly allowances on the payroll system .</li><li>Accurate compilation of weekly and month end reports.</li><li>Administration of monthly man hours captured in the system.</li><li>Maintaining an adequate inventory of office supplies, including ordering and distributing of supplies.</li><li>Responding to public enquiries.</li><li>Distribution of mail from Plant to Head Office.</li><li>Coordination of travel and accommodation bookings.</li><li>Assist with HR Administration as required.</li></ul><br><strong>Processing of Monthly Payroll:</strong><br><ul><li>Collect input for allocated payrolls under each portfolio.</li><li>Capture and process all relevant information into the payroll system.</li><li>Process and submit relevant documentation to Medical Aid, Provident Fund Administrators and balancing of medical billing to payroll.</li><li>Check source documents against payroll reports.</li><li>Collection of Death Claims &amp; Funeral information to forward to H/O.</li><li>Month-end prints and preparation of reports as required.</li><li>Printing of payslips and distribution thereof.</li><li>Attending to Staff queries.</li><li>New employee administration, i.e. terminations, administration of employee provident fund etc. for terminations and new members.</li><li>Medical aid administration - daily liaison with schemes regarding statements and claims and balancing of billings.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12</li><li>HR / Payroll / Accounting qualification</li><li>Secretarial/ Diploma</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>5 years’ experience in a HR/secretarial/ office administration role is required, preferably in the mining or process plant environment</li><li>Minimum 2 years’ experience in a payroll and accounting environment</li><li>Computer literate in MS Office</li><li>Excellent communication skills, professional etiquette and sound work ethics</li><li>Excellent time management skills</li><li>Strong Financial Acumen</li></ul><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/lxarxu" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/lxarxu",iconLink:"/assets/agency_icons/minopex.png",uuid:"p93b5a2c6-0320-4b54-bb05-fc945bab6697"},{jobTitle:"Plant Engineer",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><br><strong>Introduction</strong> <br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to manage the asset care management system according to engineering standards, legislative and client requirements.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Control the allocation of work to ensure the achievement of results according to client needs and service objectives</li><li>Coordinate the integration of the operational plans with engineering systems to ensure maximum plant availability according to organisational objectives</li><li>Assess the requirements of the law, and ensure the implementation and adherence to all requirements within the responsibility area</li><li>Provide technical support to the operation on engineering related matters to minimize possible engineering risk</li><li>Prepare short, medium and long-term maintenance plans to meet business objectives</li><li>Analyse and interpret maintenance trends and variances, and initiate change</li><li>Ensure compliance to legislative requirements, engineering standards and specifications</li><li>Plan and co-ordinate major shutdowns with internal and external clients to ensure the timeous allocation of resources</li><li>Assess areas of maintenance where outsourcing or partnerships would be appropriate, and make recommendations</li><li>Coordinate the preparation of all project technical documents to ensure that the technical content and cost are within the scope of work</li><li>Direct or prepare and evaluate the technical aspects of procurement according to the project scope and organisational procedures</li><li>Collaborate with the relevant stakeholders regarding technical issues to ensure effective integration with existing application of technology</li><li>Develop and manage the implementation of the quality plan to ensure adherence to organisational quality standards</li><li>Review and advise on engineering design progress and status according to the project plan and project objectives</li><li>Manage construction and commissioning activities according to the project plan or requirements, organisational standards and procedures</li><li>Manage and control the allocation of funds to ensure adherence to approved budgeted expenditure</li><li>Assist in compiling the budget by providing information based on operational security and organisational requirements</li><li>Set engineering targets to support the production process</li><li>Effective people management and training, ensuring that the team meets their performance objectives</li><li>Create a culture of cohesive, high-performance teamwork</li></ul><strong>Qualification Requirements</strong> <br><ul><li>A Bachelor’s Degree or Diploma in Mechanical or Electrical Engineering together with a GCC (Mines and Works)</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 5 years’ experience after obtaining GCC</li><li>Knowledge of Legal Compliance</li><li>Knowledge of Technical Risk Management</li><li>Maintenance / Asset Management knowledge</li><li>Project Management knowledge </li><li>Presentation skills</li><li>Employee Relations and People Management skills </li><li>Time management skills</li><li>Administration and Financial management skills</li><li>A Valid driver’s licence code B, EB or C1</li><li>Computer literate in MS Office</li><li>English language proficiency</li></ul><br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/rctxmh" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/rctxmh",iconLink:"/assets/agency_icons/minopex.png",uuid:"p00bedf5d-3772-4f05-a83b-e56907827823"},{jobTitle:"Plant Metallurgist",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br><br>The purpose of this position is to continuously monitor production outputs and optimise process efficiency in line with plant capacity and sound processing principles.<br><br><strong>Duties and Responsibilities&nbsp;</strong><br><ul><li>Ensure compliance with Minopex Health and Safety responsibilities.</li><li>Ensure that Process activities are integrated and coordinated.</li><li>Comply with provided systems, practices, methods, standards and procedures of the work.</li><li>Ensure the adherence to the specified process parameters within the respective sections.</li><li>Effective trouble shooting in case of deviations.</li><li>Identify, diagnose and analyse deviations and consult with the Supervisor / Management prior to implementing changes.</li><li>Provide support and advice to responsible Supervisors / Management.</li><li>Conduct research (literature or practical) on specific topics received from the Process Superintendent / Plant Manager or Client.</li><li>Conduct test and project work in the laboratory and do physical tests in the plant and consolidate test results with past reports and other findings.</li><li>Conduct cost analysis exercises to evaluate the viability of implementing projects and make necessary recommendations for changes in the process.</li><li>Perform administrative duties to ensure record accuracy and availability and budget compliance.</li><li>Ensure adherence to Client quality requirements by monitoring laboratory feedback and ensuring the implementation of corrective measures.</li><li>Continuously monitor the production process to ensure adherence to ISO and legislative standards/requirements.</li><li>Assist in compiling the Processing budget by providing information based on operational and resource requirements.</li><li>Perform administrative duties to ensure record accuracy and availability and budget compliance.</li></ul><br><strong>Qualification Requirements</strong> <br><br>• A Bachelor’s Degree in Metallurgy or Chemical Engineering<br><br><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>5 years’ experience in a processing environment of which at least 18 to 24 months should be as a Metallurgist</li><li>Lithium plant processing experience </li><li>Computer literate in MS Office</li><li>Presentation skills</li><li>Time management skills</li><li>Attention to detail</li><li>Employee Relations and People Management skills</li><li>Supervisory skills</li><li>Financial management skills</li><li>Valid driver’s license code B, EB or C1</li></ul><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/dmdtmg" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/dmdtmg",iconLink:"/assets/agency_icons/minopex.png",uuid:"pe4451f52-de3b-48e0-b0b8-0fec5f9814b8"},{jobTitle:"Process Manager",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br><br>The purpose of this position is to plan, direct and manage all operational activities within the Minopex area of responsibility to ensure adherence to contractual requirements, provide value-add to the Client and continuously improve the service delivery according to organisational objectives.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Interpret site objectives and needs across the business value chain to ensure adherence to organisational objectives</li><li>Ensure the implementation and adherence to contractual requirements</li><li>Providing leadership to ensure adherence to Health, Safety and Environmental standards that exceed industry best practice and any applicable legislative / statutory requirements and all Company systems, policies and procedures</li><li>Ensure the maintenance of Process Standards, Procedures and COP’s</li><li>Manage the implementation and adherence to ISO and other quality related systems</li><li>Ensure operations and maintenance management according to quality and quantity specifications, ensuring the implementation of the maintenance plan / program</li><li>Ensure that agreed targets are achieved in the areas of plant availability, throughput and recovery</li><li>Ensure that the plant remains fully optimised</li><li>Monitor maintenance efficiencies to ensure the attainment of organisational objectives</li><li>Provide technical direction and support to the operations team</li><li>Financial performance, ensuring that process operating, maintenance costs and capital expenditure are in line with the budget</li><li>Effective people management and training, ensuring that the team meets their performance objectives</li><li>Create a culture of cohesive, high-performance teamwork</li><li>Client liaison, interaction, and service</li><li>Accurate reporting of costs, development and production schedules and forecasts</li></ul><br><strong>Qualification Requirements</strong> <br><ul><li>A Bachelor’s Degree or Higher National Diploma in Metallurgy or Chemical Engineering / Degree or a National Diploma in Engineering including a Government Certificate of Competency (GCC) Mines and Works</li><li>Relevant Business Management qualification will be an advantage</li><li>Valid driver’s licence code B, EB or C1</li></ul><br><strong>Experience and Skills&nbsp;Requirements</strong><br><ul><li>Minimum 10 years’ experience in a Mineral Processing or Engineering environment at Plant Management level</li><li>For non-engineer candidates, must have carried a 3.1a legal appointment</li><li>Lithium plant processing experience</li><li>Computer literate in MS Office</li><li>English language proficiency</li><li>Knowledge of Legal Compliance</li><li>Knowledge of Technical Risk Management</li><li>Maintenance Management knowledge</li><li>Project Management knowledge</li><li>Presentation skills</li><li>Employee Relations and People Management skills</li><li>Time Management skills</li><li>Administration and Financial Management skills</li></ul></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/wh1gyv" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/wh1gyv",iconLink:"/assets/agency_icons/minopex.png",uuid:"p0d973634-9b38-4903-9d75-d04888dc4a07"},{jobTitle:"Process Section Supervisor",publishedDate:"Published 22 August 2024",expiryDate:"Closing Date: 30 August 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br><br>The purpose of this position is to supervise a section in the production area to ensure production targets are achieved according to the production plan.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Attend shift handover to obtain previous shift information and schedule shift resources accordingly.</li><li>Perform visual inspections of work area to identify problems and report to Shift Supervisor.</li><li>Monitor production according to shift targets.</li><li>Supervise and maintain a high standard of housekeeping.</li><li>Provide maintenance support to the Engineering department.</li><li>Ensure the adherence to the specified process parameters within the respective sections and implement corrective actions accordingly.</li><li>Identify causes of spillage in the plant and generate suggestions to minimise the spillage.</li><li>Continuously monitor equipment failure and efficiency.</li><li>Report breakdowns to the Shift Supervisor.</li><li>Investigate and attend to visible process related maintenance problems, e.g. replacement of screens, idlers etc. where engineering is not required.</li></ul><strong><br>Qualification Requirements</strong> <br><ul><li>Grade 12</li><li>National Certificate Mineral Processing Level 2 or equivalent Mineral Processing Qualification will be advantageous</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 3 years’ experience as a Process / Plant Operator</li><li>English language proficiency</li><li>Time management skills</li><li>Supervisory skills</li><li>Computer Literacy in MS Office will be an advantage</li><li>Valid driver’s licence code B, EB or C1 will be an advantage</li></ul><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/3lszdq" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/3lszdq",iconLink:"/assets/agency_icons/minopex.png",uuid:"pc8d33a4e-5e39-4743-9f81-29191ba48c04"},{jobTitle:"Process Superintendent",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
                <div class="row margin-bottom-20">
                        <img class="vacancy-logo" src="https://cdn.simplify.hr/img/37/27/37e6136c-ded0-464f-a719-6162d0a7af27.png" alt="Vacancy Logo">
                </div>
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description<br></strong> <br>This position is responsible for the effective supervision of the entire process operations to ensure that all plant processes are operational, controlled and maintained according to client and organisational requirements.<br><br><strong>Duties and Responsibilities</strong><br><ul><li>Ensure compliance with Minopex Health, Safety and Environmental responsibilities.</li><li>Ensure that agreed targets are achieved in the areas of Plant availability, throughput and recovery.</li><li>Ensure adherence to Client quality requirements by monitoring laboratory feedback and ensuring the implementation of corrective measures.</li><li>Continuously monitoring the production process to ensure adherence to ISO and legislative standards /requirements.</li><li>Deploy process teams to ensure repair and maintenance in the shortest possible time.</li><li>Investigate, diagnose problems and breakdowns to prioritize resource requirements and order equipment and consumables according to company procedures.</li><li>Ensure adherence to Process Standards, Procedures and COP’s.</li><li>Perform inspections in accordance with the Mine Health and Safety Act regulations and analyse breakdowns and implement corrective measures.</li><li>Co-ordinate and monitor equipment availability to ensure adherence to production parameters.</li><li>Continuously analyse equipment efficiencies to recommend or implement improvements and changes to maximise operations.</li><li>Communicate equipment information and changes to relevant stakeholders to minimise production delays.</li><li>Determine work schedules in conjunction with the Engineering / Process teams to ensure availability and optimise utilisation of equipment.</li><li>Perform administrative duties to ensure record accuracy and availability, and budget compliance.</li><li>Compile various production reports and ensure distribution according to organisational requirements.</li></ul><br><strong>Qualification Requirements </strong><br><ul><li>A Bachelor’s Degree in Metallurgy or Chemical Engineering</li><li>Valid driver’s licence code B, EB or C1</li><li>Own transport to attend to call outs</li></ul><strong><br>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 5 years’ experience and knowledge of plant operations of which at least 2 years must have been as a Plant Metallurgist</li><li>Lithium plant processing experience </li><li>English language proficiency</li><li>Presentation skills</li><li>Time management skills</li><li>Internal Employee Relations training</li><li>Supervisory management training</li><li>Finance for non-financial managers training</li><li>Computer literate in MS Office</li><li>Relevant planned maintenance system training</li></ul><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/pja6wv" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/pja6wv",iconLink:"/assets/agency_icons/minopex.png",uuid:"p5334fbb5-b924-4cda-8c7f-1cd246a7c1a1"},{jobTitle:"Production Superintendent",publishedDate:"Published 16 August 2024",expiryDate:"",location:"Aggeneys, Northern Cape",details:[`
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
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/yfbtak",iconLink:"/assets/agency_icons/minopex.png",uuid:"p8929357e-c48d-45ff-bafc-d548c9de06f1"},{jobTitle:"SHEQ Coordinator",publishedDate:"Published 23 August 2024",expiryDate:"Closing Date: 02 September 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">South Coast Plant Operations </label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN<br><br> <strong>Description</strong> <br><br>The purpose of this position is to implement, maintain and monitor adherence to SHEQ policies and procedures to ensure compliance to site, client specific and legislative requirements.<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Ensure that the SHEQ Management System is implemented and maintained to meet the minimum group requirements on site and that the site complies with the requirements of the SHEQMS.</li><li>Enforce compliance with legal requirements, i.e., the right to stop dangerous work etc.</li><li>Coordinate all legal appointments according to legislative requirements.</li><li>Conduct plant and equipment inspections at the prescribed intervals, report the findings to management with preventative recommendations and follow up on reports as required to ensure continual improvement.</li><li>Ensure contractor safety file compliance &amp; SHEQ access control requirements where applicable.</li><li>Maintain all SHEQ-related information on the SHEQMS to ensure effective and up-to-date information and submit SHEQ-related reports according to requirements</li><li>Manage all SHEQ injuries and incidents on site, i.e., reporting, investigation and ensuring that all documentation is completed in the required timeframes.</li><li>Facilitate the risk assessment process according to organizational requirements (Baseline and Issue/Task-based Risk Assessment)</li><li>Facilitate and participate in site audit processes.</li><li>Coordinate the compilation of all Operational Procedures on site.</li><li>Drive and manage non-conformance and incident management processes.</li><li>Ensure that Corporate Strategies, objectives and targets are effectively managed and that the desired results are achieved in conjunction with Operational strategies.</li></ul><strong>Qualification Requirements</strong> <br><ul><li>Grade 12</li><li>Health and Safety Management Certification (i.e. SAMTRAC/ COMSOC/ NEBOSH, etc.)</li><li>Incident Investigation Competency (i.e. ICAM, RCAT, etc.)</li><li>Risk Management (i.e. HIRA)</li></ul><strong>Experience and Skills&nbsp;Requirements<br></strong> <br>• Minimum 5 years SHEQ experience in an operational environment<br>• MHSAct Legal Liability Training<br>• ISO 9001 Quality Management Internal Auditor Training will be an advantage<br>• ISO 14001 Environmental Management Internal Auditor Training will be an advantage<br>• ISO 45001 Occupational Health &amp; Safety Management Systems Auditor Training will be an advantage<br>• Full Computer literacy in MS Office<br>• Strong PowerPoint Presentation report-writing skills<br>• Valid driver’s license code B, EB or C1<br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/qji7vc" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/qji7vc",iconLink:"/assets/agency_icons/minopex.png",uuid:"p14bb5070-2589-4602-886d-bf0af80fbab8"}],K={iconLink:G,title:V,blogPosts:U},J="/assets/agency_icons/SA-Youth.png",Q="SA-Youth",z=[{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADYAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p746852bc-24a0-4a80-a0d8-537d6449afb8"}],W={iconLink:J,title:Q,blogPosts:z},Y="/assets/agency_icons/pro-personnel.jpg",Z="pro-personnel",X=[{jobTitle:"Assistant Software Development Manager (Information Technology)",startDate:"2024-08-27 - 2024-09-30",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Ladybrand",region:"Freestate"},details:"Qualifications:* Appropriate bachelor's degree or similar tertiary qualification or experience in IT software development* Proficiency in MS Project or similar project management tools* Minimum of 10 years of experience in software development* Minimum of 5 years management experience regarding IT Software development projectsPrimary Responsibilities:* Instigation and management of IT Software development projects through the evaluation and monitoring of business priorities, the determination of IT priorities and allocation thereof to IT programmers, as well as the productive sand effective utilizations of IT resources* Co-ordinate and planning of IT software development projects, including the approval and finalization of technical specifications* Coordinate and monitoring of testing the implementation of IT Software development projects* Liaising with business regarding IT software projectsSkills:* Excellent communications and language skills in Afrikaans and English* Excellent organizational and project management skills* Experience regarding software development in COBOL and the IDM-I operating systems* Previous experience in an agri-business environmental would be beneficial* Excellent people skills and the ability to lead and manage a team and work together in a team* Strong analytical skills and the ability to function independently",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002496-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p634ac729-98b6-4ea8-95c8-e0892d277408"},{jobTitle:"Research Analyst",startDate:"2024-08-27 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durbanville",region:"Western Cape"},details:`PRIMARY RESPONSIBILITIES:

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
`,contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002511-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p71b6d461-3a41-4b44-a398-ffad7ea3e2a0"},{jobTitle:"Assistant Accountant",startDate:"2024-08-22 - 2024-09-22",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Experience:* Must have knowledge of the following:- SARS e-filing- SARS correspondence and registration- Salaries, payroll and reconciliation (VIP &amp; Easy file)- Knowledge of calculations and statements- EMP- Income tax statementsComputer knowledge in:* Pastel* Excel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002520-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p1cbc62f5-166f-4011-a0ef-0d87e0bcffab"},{jobTitle:"Bookkeeper",startDate:"2024-08-15 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Bryanston",region:"Gauteng"},details:"Qualifications and Experience needed:* Grade 12* Related qualification to bookkeeping* Sage experience is a MUST* 2-5 years working experience as a Bookkeeper* Candidate must be available to start immediatelyResponsibilities:* Keeping track of all financial transactions, including purchase, sales, receipts and payments in the accounting software or ledgers.* Ensuring that invoices are paid on time and that the company receives payments from clients* Regularly comparing the company's financial records with bank statements to ensure accuracy and identify any discrepancies* Updating and maintain the general ledger, which is the primary record of all financial transactions* Creating basic financial reports, such as income statements, balance sheets and cash flow statements, to provide insight into the company's financial status.* Making sure that financial records comply with relevant laws and regulations and staying up to date with the changes.* Managing petty cash funds, tracking it use and reconcile it regularly* Supporting audits, providing documentation and information during financial audits to verify the accuracy of financial reports",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002523-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3bc63573-d622-4bdc-8649-02b5970a3148"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in Web development, graphic design or related field* Proficiency in Adobe creative suite (photoshop, Illustrator, In design)* Basic understanding of web development&nbsp; beneficial* Knowledge of SEO best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail orientated with s string focus on quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast phased environment* Project management skills and adaptability to changing project requirements",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002493-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p1e5c5ad4-70f8-47f4-a88e-6304c62fbe71"},{jobTitle:"Web Analyst (Web Developer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in web development, graphic design or related field.* Proficiency in HTML, CSS, JavaScript, PHP, JSE, Jason, WordPress and SEO* Design/Creative experience - beneficial* Basic understanding of Adobe Creative suite (Photoshop, Illustrator, InDesign)* Ability to create wireframes, mockups and prototypes* Basic understanding of UX/UI principals and best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail-orientated with strong focus and quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast-paced environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002494-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd64db60c-1401-4da8-a3b4-7baec874e077"},{jobTitle:"Application Developer",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Proficiency in programming languages such as MS Mausi, Visual Studio, C Angular and React* Strong understanding of mobile and web application development* Ability to manage multiple projects simultaneously with effective project and time management skills.* Excellent problem-solving skills and attention to detail* Experience in creating visually appealing and user-friendly interfaces* Motivation to continuously learn and implement the latest software technologies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002495-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p313cfa84-2f60-41c8-881e-8639730f44ef"},{jobTitle:"Counter Sales Assistant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Bela Bela",region:"Limpopo"},details:"Minimum Qualifications:Must have Grade 12 or equivalent&nbsp;Must be fluent in Afrikaans and English&nbsp;Previous Counter Sales will be an advantage&nbsp;Previous technical / paint counter sales experience will be an added advantage&nbsp;Energetic, hardworking, diligent individual",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002521-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p74b4c2ee-8c7f-4738-a2ec-0e3dc46c07b0"},{jobTitle:"Micro Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Koster",region:"North West"},details:"The Company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are dedicated to producing high-quality, dried micro-algae year-round while minimizing environmental impact. We are seeking a highly skilled and motivated Micro-algae Plant Production Manager to join our team and lead our state-of-the-art facility.Job Overview: The Micro-algae Plant Production Manager will be responsible for overseeing all aspects of our Micro-algae operations. This includes managing micro-algae plant growth cycles, ensuring optimal growing conditions, managing packaging operations both quantity and quality, managing operational staff, coordinating maintenance requirements and implementing best operating practices for maximum yield and quality. The ideal candidate will have a strong background in food &amp; beverage processing, plant science, microbiology, horticulture, hydroponics or micro-algae systems, with an understanding of process operations, aquatic chemistry and water treatment. Strong team leadership skills and the ability to perform in a pressured environment with stringent production requirements is a must. The incumbent will report to the Technical Manager.Key Responsibilities:&nbsp;1. &nbsp; &nbsp; &nbsp;General Management:&nbsp;Operational Oversight: Manage the day-to-day operations of the micro-algae production facility, ensuring all production, maintenance, quality and packaging processes run smoothly and efficiently.Resource Allocation: Allocate resources effectively to maximize production efficiency and minimize waste.Budget Management: Develop and manage the production budget, ensuring cost-effective operations.Regulatory Compliance: Ensure compliance with all local, provincial, state regulations related to micro-algae farming and food safety.Continuous Improvement: Identify opportunities for process improvements and implement changes to enhance productivity and quality.&nbsp;2. &nbsp; &nbsp; &nbsp;Technical Management:&nbsp;Micro-algae Plant Growth Optimization: Ensure optimal growing conditions are adhered to (light, temperature, humidity, nutrient levels) for various micro-algae species to maximize yield and quality.System Maintenance: Oversee the maintenance and operation of micro-algae systems, including troubleshooting and resolving technical issues.Nutrient Management: Adhere to nutrient delivery schedules and tailor to the specific needs of different batches. Feedback to the Technical manager on any concerns and optimization requirements.Data Analysis: Utilize data from sensors and other monitoring equipment to make informed decisions about environmental adjustments and resource management.Innovation: Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions into the production process.Technical Expertise: Utilize knowledge of micro-algae systems and plant physiology to manage optimize production.Troubleshoot and resolve technical issues with micro-algae equipment and systems.Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions.3. &nbsp; &nbsp; &nbsp;People Management:Team Leadership: Lead, train, and supervise a team of micro-algae plant and laboratory technicians, fostering a positive and collaborative work environment.Performance Management: Conduct regular performance evaluations, provide feedback, and develop improvement plans for team members.Training and Development: Identify training needs and provide ongoing education to staff on best practices, safety protocols, and new technologies.Task Delegation: Assign tasks and monitor performance to ensure productivity and adherence to quality standards.Conflict Resolution: Address and resolve any interpersonal issues or conflicts within the team promptly and effectively.4. &nbsp; &nbsp; &nbsp;Quality Control:Oversee quality control activities in the on-site laboratory and supervise laboratory staff.Monitor micro-algae plant health and growth to ensure adherence to the necessary quality specifications, identifying and addressing any issues promptly.Conduct regular inspections to ensure compliance with health and safety as well as good manufacturing standards.Ensure detailed records of micro-algae plant growth, environmental conditions, and production metrics are maintained.5. &nbsp; &nbsp; &nbsp;Inventory and Resource Management:Manage inventory of inoculum cultures, nutrients, and other plant supplies.Ensure efficient use of resources to minimize waste and reduce costs.Coordinate with suppliers to maintain an adequate stock of necessary materials.6. &nbsp; &nbsp; &nbsp;Reporting and Analysis:Prepare regular reports on production performance, including yield, quality, and resource usage. Analyse data to identify trends, areas for improvement, and opportunities for increased efficiency.Present findings and recommendations to senior management.Prepare regular management accounts and report on variations to budget&nbsp;Qualifications:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Bachelor’s degree in Agronomy, Horticulture, Hydroponics, Plant Science, Microbiology or a related field. Master’s degree preferred.· &nbsp; &nbsp; &nbsp; &nbsp;Minimum of 3-5 years of experience in Food &amp; Beverage processing, Horticulture, Hydroponics or Micro-algae farming or a related field.Technical Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems.· &nbsp; &nbsp; &nbsp; &nbsp;Proficiency in using plant management software and other relevant technology.· &nbsp; &nbsp; &nbsp; &nbsp;Experience with data analysis and interpretation to inform operational decisions.&nbsp;Management Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Proven leadership and team management skills.· &nbsp; &nbsp; &nbsp; &nbsp;Excellent problem-solving abilities and attention to detail.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to work in a fast-paced, dynamic environment and adapt to changing priorities.· &nbsp; &nbsp; &nbsp; &nbsp;Strong organizational and multitasking abilities.Interpersonal Skills:· &nbsp; &nbsp; &nbsp; &nbsp;Effective communication and interpersonal skills.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to motivate and develop team members.· &nbsp; &nbsp; &nbsp; &nbsp;Conflict resolution and negotiation skills.Benefits:&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Competitive salary and performance-based bonuses.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Paid time off and holidays.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Opportunities for professional development and advancement.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002510-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p830528f9-8051-4157-bfb4-24049757b32c"},{jobTitle:"Assistant Accountant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:`Requirements:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002519-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p78a51480-e126-4680-87b8-8f747b203bb6"},{jobTitle:"Micro-Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Koster",region:"North West"},details:"The company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are seeking a highly skilled and motivated micro-algae plant production manager to join the team.Qualifications:* Bachelor's degree in Agronomy, horticulture, hydroponics, plant science, microbiology or related field, master's degree preferred.* Minimum of 3-5 years of experience in food &amp; beverage processing, horticulture, hydroponics or micro-algae farming or related fieldTechnical Skills:* Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems* Profiency in using plant management software and other relevant technology* Experience with data analysis and interpretation to inform operational decisions.Management Skills:* Proven leadership* Excellent problem-solving abilities and attention to detail* Ability to work in fast paced dynamic environment and adapt to changing priorities* Strong organizational and multitasking abilities",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002522-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p34bf03a8-ad88-4080-bf5e-2beb7015a55d"},{jobTitle:"Butchery Manager",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications &amp; Experience:* A valid matric certificate with mathematics* Grade 1 Meat cutting certificate or recognized butchery apprenticeship* A clear criminal record* At least 5 years' experience in all aspects of day to day running and managing of a meat market* Computer literate* Point of sale systems knowledge is desirable* Self motivated, self-dedicated and self-determined with a creative flair* Strong numerical skills* Be able to manage staff* Be able to work under pressure* Be able to be firm and resolute in decision with a high degree of discipline",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002516-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p18cf5670-e5e0-4e4a-8d16-edbd7bf950fa"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:`As Customer Service you are required to attracts potential customers by answering product and service questions; suggesting information about other products and services.&nbsp; Process orders, prepare correspondences and fulfil customer needs to ensure customer satisfaction.&nbsp; The positions requires to expedite and facilitates the flow of new units within the operations to ensure that products are delivered to our clients within the agreed time frame, and per quality standardsResponsibilities:&nbsp;Customer Service for new and repair facility

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002517-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pa77b1c1a-4ddd-4bd7-aad2-1d4dd8a54b9e"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications:* Grade 12 (matric)* 1-2 years' experience within a sales or internal sales environment* Experience within electrical motors industry will be a advantage* Must be PC literate with working knowledge of MS OfficeRequirements:* Excellent communications skills, proficient in the English language written and oral, must be able to legibly read and write reports* Eagerness to learn about our products* Must be able to work under pressure and meet deadlines to ensure customer commitments are met* Strong motivational and interpersonal skills* Administration skills* ReliableTravel:* Works predominately within the office* Required to visit customer from time to time* Work normal hours* Should be able to work on weekends, and holidays and overtime when needed* Position may require out of town travel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002518-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pa23d4e7e-3e30-4952-ab0e-7e612fccd210"},{jobTitle:"Senior C&amp;I Project Engineer",startDate:"2024-08-08 - 2024-09-07",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:"Qualifications Required:* Bachelor's degree in Electrical Engineering, Control Engineering, Instrumentation Engineering or related field* Professional Engineering (PE) license or equivalent certification preferred.Experience:* Minimum of 8-10 years working experience in control and instrumentation engineering, with 5 years in a senior or lead role.*Extensive experience in mining and processing plant environment* Proven track record of successfully delivering large-scale C&amp;I projectsTechnical Skills:* Provenience in control system design and programming (e.g. PLC, DCS, SCADA, systems).* Strong knowledge of instrumentation selection, installation and maintenance* Familiarity with industry standards such as ISA, IEC and IEEESoft Skills:* Excellent project management and orgnizational skills* Strong analalytical and poblem solving abilities* Effective communication and interpersonal skills* Ability to work collboratory in a team-orientated environmentPhysical work requirerments:* Ability to work in a mining and processing plant environment, including exposure to dust, noise and varying temperatures* Willingness to travel to remote sites as requires* Availability to work extended hours and on call support as needed.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002514-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p4ba82a4b-53ae-4091-aa74-825e7fa93da1"},{jobTitle:"Finance and Admin Manager",startDate:"2024-08-08 - 2024-09-07",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Degree in financial accounting or equivalent* Post graduate qualification in financial accounting* must have completed SAICA articles* Minimum of 5 years experience in a management level* CA/CIMA qualification would be a advantage* Proven experience in developing and implementing financial models and systemsSkills &amp; Knowledge Required:* Understanding of tax and financial laws/legislation* The ability to draft and interpreted financial statements* Excellent interpersonal skills* Excellent communications skills* Good understanding of governce and assusrance frameworks* Indepth knowledge of Excel* Strategic thinking and analytical skills* Expert knowledge of financial systems and process* Excellent computer literacy skills* Strong management and leadership skills* Ability to mentor and guide staff* Supervisor attention to detail",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002515-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pc69765a1-32ca-4408-afac-c8be69fffe2e"},{jobTitle:"Credit Manager",startDate:"2024-08-07 - 2024-09-06",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Midrand",region:"Gauteng"},details:`Job Purpose &amp; SummaryReporting to the Managing Director, the Credit Manager will have the overall responsibility for the credit/lending function. Key areas of responsibility include the following:

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

Experience working with a lending softwareWe’re a fund manager with 12 months operations focusing on the SME space only. We offer two products, purchase order funding and invoice discounting. We’re looking for a Credit Manager to run the lending operations of our growing business. We have a preference for candidates that have purchase order and invoice discounting experience. Our operations are across the country, but the Credit Manager will be based in Johannesburg, Midrand with travel once or twice monthly to the operating offices. The budget for the role is R400,000 – R500,000 annual total cost to company before 10-20% annual bonus on achievement of targets.`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002513-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pcfa333e8-4bd1-4184-a730-17368ab96f5c"},{jobTitle:"Office Administrator",startDate:"2024-08-05 - 2024-09-06",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Rustenburg",region:"North West"},details:"The client needs the following requirements:* Have a valid driver's license* Valid grade 12 certificate* Previous working experience in office administration:- MS Excel &amp; Pastel essential- Previous stock take experience- Excellent communication skills and customer service- Be willing to assist where needed- Some HR knowledge and experience to your advantage.- Must be willing to start immediatelySalary R10000",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002467-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pdbc8fa51-d83e-4433-99bf-1cdb2797dd78"},{jobTitle:"Credit Manager",startDate:"2024-08-05 - 2024-09-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Midrand",region:"Gauteng"},details:"Occupational Experience &amp; Education Requirements:* Bachelors degree or diploma in business or a related field* Minimum 5 years SME lending experience is required.* Additional SME support services experience is considered an advantage.Knowledge, Skills &amp; Attributes:* Sound credit judgement, ability to understand the risk return trade-ff and come up with well thought solutions to mitigate credit risk.* Ability to articulate complex credit applications into succinct and balanced recommendations* Understanding of commitment letters and other legal documents from a credit perspective* Financial statement analysis experience* Understanding of SME lending practices and end to end credit process* Analytical skills and attention to details* Problem solving capabilities and excellent organizational and time Mangement skillsproficiency with MS Office suite of products* Experience working with a lending software",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002509-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p2737cf8d-d201-4b25-8e1d-896f5be90a8c"},{jobTitle:"Debtors Clerk",startDate:"2024-08-05 - 2024-09-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:`Key Responsibilities:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002512-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3ad6ac65-c9fb-4e7d-a115-555b14050b97"},{jobTitle:"Supervisor",startDate:"2024-08-01 - 2024-08-31",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Rustenburg",region:"North West"},details:"The ideal candidate needs to have the following requirements and experience:* Must have a valid grade 12 certificate* Must know MS Excel (formulas) very well* Previous working experience as a supervisor within a cleaning/ hygiene environment.* Must be in possession of a valid driver's license* Excellent communications skills in Afrikaans and English* Delivery of stock and invoices to clients* Conduct and assist in weekly vehicle and equipment checks* Be able to start immediately",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002508-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"paaf76b99-d9f2-4545-8542-b69a0632004f"},{jobTitle:"Counter Salesman (Truck Parts)",startDate:"2024-07-31 - 2024-08-30",vacancyType:"Permanent",jobSpecFields:"Automotive",location:{city:", Midrand",region:"Gauteng"},details:`Requirements

Matric
Computer literate, Pastel experience will be advantageous
Proven experience in truck parts sales, specifically for Scania, Volvo, M.A.N, and Mercedes-Benz.
Strong knowledge of truck parts and their applications.
Excellent customer service and communication skills.
Ability to function effectively in a high-pressure, fast-paced environment.
Strong organizational skills and attention to detail.
Self-motivated with a drive to meet and exceed sales targets.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002506-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pde0a0e31-3020-41ad-9d76-3032fb87bd15"},{jobTitle:"Sales Representative - Mining",startDate:"2024-07-31 - 2024-08-30",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:`Qualifications:

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


`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002507-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3b4d7fae-cff2-48b6-954e-56f453b1a9f2"},{jobTitle:"Counter Salesman",startDate:"2024-07-29 - 2024-08-31",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Midrand",region:"Gauteng"},details:`As a counter salesman, you'll play a crucial role in our operations, assisting customers with their parts needs, providing expert advice, and ensuring they find exactly what they're looking for. If you have a passion for vehicles and a knack for customer service, we want to hear from you!Key Requirements:

Proven experience in truck and bus parts sales.
Expertise in Scania, Volvo, and Mercedes parts.
Strong communication and interpersonal skills.
Ability to thrive in a fast-paced environment.
Excellent customer service skills.

Join our team and become a valued member of our growing company. Apply now and take the next step in your career!Offering a Competitive salary, medical aid and pension`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002400-WHN",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p9f8afd90-c3f5-4b22-8819-44634c34ed69"}],$={iconLink:Y,title:Z,blogPosts:X},ee="govpage-public-sector",ne=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ccma_orig.jpg",href:"https://www.govpage.co.za/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies-blog/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies4835161",title:"COMMISSION FOR CONCILIATION, MEDIATION AND ARBITRATION (CCMA) VACANCIES",content:[` 
COMMISSION FOR CONCILIATION, MEDIATION AND ARBITRATION (CCMA)
 `,`PROVINCIAL SENIOR COMMISSIONER ASSOCIATE
Mpumalanga Province – Emalahleni Office
Ref: MPEPSCA08-24
Post level: 09
The Mpumalanga Province – Emalahleni Office has a vacancy for a Provincial Senior Commissioner Associate.
 
Purpose
To provide secretarial service to the Provincial Senior Commissioner (PSC) and Regional Senior Commissioner (RSC) to assist them with the effective management of their area responsibility.
 
Key Performance Areas:-
Case Administration Support Services
Secretarial Services
Library Management
Monitor Recordings
Handling of queries/complaints
Coordinate Training Layoff Scheme
 
Key Requirements:
 • Secretarial Certificate
• 3 years’ experience in secretarial duties and general administration
 
 
NOTE FOR ALL APPLICANTS:

Strictly apply via the link provided: https://forms.office.com/r/sfcty2BmQT

In your online application for appointment, kindly ensure that you disclose all relevant material information to assist the panel in considering your application.

Detailed CV, copies of qualifications, driver’s license & ID document must be uploaded. Failure to complete the online form in full or not provide relevant information will automatically disqualify your application.

*Only One (1) online application should be submitted.

No emailed or hand-delivered applications will be accepted. Non-adherence to the stated procedures in applying as well as incomplete application will result in the disqualification of the application.

Closing date: 29 August 2024

N.B Incomplete and late applications will automatically be disqualified.
 
If we have not responded within a Month from the closing date, you should regard your application as unsuccessful. Correspondence will only be entered into with short-listed candidates. The CCMA reserves the right not to make an appointment. It is the intention of the CCMA to promote representivity in respect of race, gender and disability through the filling of the posts. Preference will be given to candidate from the designated groups.
 
People with disabilities are encouraged to apply.`,`CASE MANAGEMENT OFFICER
Mpumalanga Province – Emalahleni Office
REF: CMOEMA08-24
Post level: 09
 
The Mpumalanga Province – Emalahleni Office has a vacancy of Case Management Officer.
 
Purpose
To effectively and efficiently handle queries and assist the public with regard to appropriate processing procedures, screening of cases in terms of relevant legislation and CCMA guidelines. 
 
Key Performance Areas:-
Case Advice
Case Screening
Case Capturing
Schedule and screen documentation
Process outcome and finalise cases
Venue Administration
Pre-Conciliation
 
Key Requirements:
• Unless a candidate can demonstrate suitability through relevant experience of not less than three (3) years in Employment Laws, Trade Union environment/Bargaining Council/Labour Inspector or Human Resources role, a Matric and Diploma in Labour Relations (or relevant equivalent) with one (1) year of practical experience will be required
• One (1) to three (3) years relevant working experience in a case management service Employment Laws,
Trade Union environment/Bargaining Council/Labour Inspector or Human Resources role

• At least 2 African languages would be an advantage
 
 
Strictly apply via the link provided: https://forms.office.com/r/Z8fBRfYz3E

In your online application for appointment, kindly ensure that you disclose all relevant material information to assist the panel in considering your application.

Detailed CV, copies of qualifications, driver’s license & ID document must be uploaded. Failure to complete the online form in full or not provide relevant information will automatically disqualify your application.

*Only One (1) online application should be submitted.

No emailed or hand-delivered applications will be accepted. Non-adherence to the stated procedures in applying as well as incomplete application will result in the disqualification of the application.

Closing date:  29 August 2024

N.B Incomplete and late applications will automatically be disqualified.
 
If we have not responded within a Month from the closing date, you should regard your application as unsuccessful. Correspondence will only be entered into with short-listed candidates. The CCMA reserves the right not to make an appointment. It is the intention of the CCMA to promote representativity in respect of race, gender and disability through the filling of the posts. Preference will be given to candidate from the designated groups.
 
People with disabilities are encouraged to apply.`],postedDate:"26/8/2024",iframe:"",uuid:"p291ee180-2d2a-4f17-9f27-945b89b7df75"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/cge_orig.gif",href:"https://www.govpage.co.za/commission-for-gender-equality-cge-vacancies-blog/commission-for-gender-equality-cge-vacancies3117544",title:"COMMISSION FOR GENDER EQUALITY (CGE) VACANCIES",content:[` 
COMMISSION FOR GENDER EQUALITY (CGE)
 `,` 
 
 
HEAD OF DEPARTMENT (HOD): LEGAL SERVICE UNIT (Level 13)
Description
REF NO: CGE HOD-LED 07/2024
SALARY LEVEL 13: R 1 216 824.00 per annum (all-inclusive package)
The position reports to the CEO of the CGE. The HOD Legal will manage the activities, outputs and outcomes of the Legal department by providing leadership and strategic direction to the work of the department. The CGE’s Legal Department performs a crucial role in monitoring, evaluating, and investigating complaints regarding gender discrimination and litigates to seek relief from any form of gender discrimination on behalf of victims.
 
Requirements:
Must be a South African citizen.
LLB degree and LLM degree will be an added advantage
Attorney of the High Court South Africa
Accredited mediator with a proven record of successful mediation agreements.
Minimum of 10 years litigation and investigation experience on Human Rights, Social Justice and Constitutional Law.
Management Experience – a minimum of 3 to 5 years of management experience in a similar environment
Knowledge of PFMA, the Constitution of the Republic of South Africa, 1996 and the CGE Act 39 of 1996.
Committed to creating a society free from gender discrimination and utilising the legal arena to advance this.
Highly skilled in litigation, legislative advocacy, statutory frameworks, and legislative Influence.
Outstanding project management skills and experience, including ability to manage multiple projects and stakeholders, project reporting and project budgeting.
Excellent written and verbal communication.
Ability to work across hierarchies, with diverse levels of authority and stakeholders.
Excellent interpersonal, presentation and negotiation skills.
People management skills and knowledge of transformation.
Advanced computer skills.
Valid driver’s licence and willingness to travel.
 
Responsibilities of the successful incumbent will include:
Providing strategic leadership & ensuring successful implementation of the Legal department’s programmes against adopted benchmarks.
Managing and developing the legal team and ensuring accountability for the effective implementation of the legal department’s operations.
Conceptualising and ensuring implementation of multiple legal initiatives and programmes.
Advocating for and contributing to the development of gender-sensitive and responsive policies and legislation internally and externally.
Managing investigations into violations of gender rights in the public service, private sector and other institutions including civil society.
Managing information and education programmes relevant to the legal department.
Managing legal complaints.
Leading CGE’s litigation.
Cultivating and initiating strategic partnerships to enhance the work of the legal department and CGE.
Performing other duties which will contribute to the strategic growth of the Institution.
Fulfilling general operational management of the legal department.
 
Applications
It is mandatory that an applicant submit the following:
Motivational letter and Comprehensive CV.
Certified copies of ID and Qualifications.
Telephone details and e-mail addresses of three contactable referees.
 
The above-mentioned documents must be sent via email to:
recruitment@cge.org.za
 
Correspondence will be limited to the short-listed candidates only. Applicants with a foreign qualification must submit a SAQA evaluation report of their qualification. The CGE reserves the right not to fill this advertised position. The CGE is an equal opportunity, affirmative action employer committed to the achievement and maintenance of fair representation (race, gender, and disability). Whites, Coloureds, Indians and persons with disabilities are encouraged to apply. Shortlisted candidates will be subjected to background checks and psychometric assessment. Preference will be given to South African citizens.
 
For enquiries (Not Applications), contact Ms. Mesele Matlala – HR Manager at Tel: 011 403 7182 or 063 356 2354
 
Closing date: 09 September 2024 @17:00
No late applications will be accepted.
 
Hiring organization Commission for Gender Equality
Duration of employment 5-year Performance-based contract
Job Location HEAD OFFICE (Johannesburg)
Valid through September 9, 2024
 
 
 
 
 `,` 
 
 
 
 
ACCOUNTS PAYABLE CLERK - FINANCE
Description
REF NO: APC-FIN 07/2024
SALARY LEVEL 6: R255 450. PER ANNUM
 
Requirements:
A diploma in Financial Accounting, coupled with (2) years of relevant experience. A Bachelor of Commerce in Accounting will be an added advantage. Experience on Sage 300 accounting system, as well as proficiency in MS Office. Team player with a customer-centric approach. Analytical Skills. Knowledge of Accounting standards in GRAP. •Must be a South African citizen.
 
Duties:
Preparation of payments requisition before payments are issued.
Processing of payments through EFT or any approved method of payment.
Ensuring completeness and accuracy of the requisition and payment documentation, including proper authorizations thereon.
Filing of documents according to the established procedures, systems and management directives.
Facilitation of deposits into the creditors/payees bank account, in appropriate circumstances.
Capturing of monthly payroll ACB payments and any ad hoc payments relating to payroll.
Capturing of source documents/transactions onto the financial system.
Adherence to policies and procedures of CGE, PFMA and relevant legislation
Assist in providing information to Auditor General and Internal auditors
Assist in capturing additions and disposal of assets surrounding the asset management of the CGE.
Conduct asset verification in all CGE occupied buildings, update asset register and prepare an asset register reconciliation bi- annually.
Assist in loading of the approve budget on the Sage system.
General administrative duties that may be assigned by management, from time to time.
 
Applications
It is mandatory that an applicant submit the following:
Motivational letter and Comprehensive CV.
Certified copies of ID and Qualifications.
Telephone details and e-mail addresses of three contactable referees.
 
The above-mentioned documents must be sent via email to: recruitment@cge.org.za
 
Correspondence will be limited to the short-listed candidates only. Applicants with a foreign qualification must submit a SAQA evaluation report of their qualification. The CGE reserves the right not to fill this advertised position. The CGE is an equal opportunity, affirmative action employer committed to the achievement and maintenance of fair representation (race, gender, and disability). Whites, Coloureds, Indians and persons with disabilities are encouraged to apply. Shortlisted candidates will be subjected to background checks and psychometric assessment. Preference will be given to South African citizens.
 
For enquiries (Not Applications), contact Ms. Mesele Matlala – HR Manager at Tel: 011 403 7182 or 063 356 2354
 
Closing date: 09 September @17h00
No late applications will be accepted.
 
Hiring organization Commission for Gender Equality
Job Location CENTRE: HEAD OFFICE -JOHANNESBURG
Valid through September 9, 2024
 
 
 
 
 
 `,`HEAD OF DEPARTMENT (HOD): POLICY AND RESEARCH (Level 13)
Responsibilities
REF NO: CGE HOD-RES 07/2024
SALARY LEVEL 13: R 1 216 824 .00 per annum (all-inclusive package)

 
This position reports to the Chief Executive Officer (CEO) of the CGE. The HOD Policy & Research will manage the activities, outputs and outcomes of the Policy & Research Department, providing leadership and strategic direction to the work of the Department, with the primary responsibilities that include planning, implementing and managing the overall team and business of the Policy & Research Department.
 
Requirements
Must be a South African Citizen.
Masters, degree in the Social Sciences or related fields; a PhD would be an added advantage.
Minimum five years relevant working experience in middle management in the public sector or research institute
An extensive record of publications in the Social Sciences or related fields.
Proven experience as a research report editor.
Proven experience in managing and overseeing a team of researchers
Experience in conducting qualitative and quantitative research.
Project management and research supervision experience.
Knowledge of statistical software/packages.
Astuteness or critical thinking.
Curiosity or the passion to delve deeper into issues to unearth insight.
Commitment – policy and research is a tough job, it may involve long hours and short timelines, thus, the incumbent must be resilient.
Excellent written and verbal communication skills, especially research report writing skills.
Systematic and attention to detail.
Sympathetic listener and interpersonal skills, particularly when conducting research with human subjects.
Commitment to working towards a gender equality society.
Oral and written presentation skills.
Valid driver’s licence and willingness to travel
 
The successful candidate must be competent in the following key performance areas:
The HOD Policy and Research shall oversee the Policy and Research initiatives of the CGE, including:
Participation in the strategic planning of the CGE and ensuring that the annual performance and quarterly plans of the Policy and Research Department are developed, implemented, monitored and reported on as required.
Guiding strategic research initiatives and driving high-quality research outcomes
Providing strategic leadership, direction and mentorship to Researchers on the implementation of innovative and transformative research initiatives, including change management within the department and the CGE at large.
Developing the relevant skills in the Department, to adapt to the use of new industry technology, promoting efficient transition to the 4th Industrial Revolution as required.
Development and enforce proper work ethics and management standards within the Department and the CGE at large, as well as manage work efficiency and productivity, against agreed-upon benchmarks.
Setting research goals aligned with the CGE’s mandate, including the institutional vision, mission and core values.
Conceptualisation and supervision of multiple research projects, nationally and provincially.
Conceptualisation of the research agenda of the CGE in consultation with the relevant oversight structures, for consensus management.
Implementing effective budget planning and financial management of the Department’s resources.
Management of internal and external stakeholders, including service providers, especially for the Policy and Research Department.
Ensuring compliance with the CGE internal regulatory tools, as well as national and international legislation governing the work of the CGE and the public sector at large.
Taking a leadership role in working with partner organisations on key policy issues.
 
Other operational responsibilities will include:
Coordinating the development of research proposals, terms of reference, methodologies, research instruments and data collection approaches amongst others.
Developing and maintaining systems to support research coordination and goals, including standard approaches for qualitative and quantitative research.
Developing and managing the research team, including building the required skills development initiatives.
Preserving excellent research integrity and ensuring appropriate research methodology, as well as managing the production of research reports.
Ensuring the integration of research outcomes into CGE programmes.
Managing the research process and keeping research products on track for release dates determined in partnership with internal oversight structures.
Ensuring all research reports are professionally reviewed and edited, including the production of factsheets and policy reviews.
Ensuring the policy and research products are disseminated to relevant stakeholders, using as many media platforms as possible, including social media platforms.
Coordinating the synchronization between research findings and findings of legal investigations.
Ensuring that research inform improvements in the operationalization of the mandate of the CGE, including assessing benefits to the intended stakeholders.
Providing technical research assistance and support within the institution when the need arises.
Supporting strategic impact assessments of the work of the CGE.
Preparing presentations to Parliament and other stakeholders as required.
Participate in CGE internal and external meetings and perform other duties as assigned by the employer.
Use your best endeavour to promote and extend the good name and standing of the CGE, including adhering to good governance principles of the public sector.
Uphold the institutional values of the Commission for Gender Equality.
 
Prospective candidates will be required to submit samples of their published written work and/or published articles.
 
Applications
It is mandatory that an applicant submit the following:
Motivational letter and Comprehensive CV.
Certified copies of ID and Qualifications.
Telephone details and e-mail addresses of three contactable referees.
 
The above-mentioned documents must be sent via email to: recruitment@cge.org.za
 
Correspondence will be limited to the short-listed candidates only. Applicants with a foreign qualification must submit a SAQA evaluation report of their qualification. The CGE reserves the right not to fill this advertised position. The CGE is an equal opportunity, affirmative action employer committed to the achievement and maintenance of fair representation (race, gender, and disability). Whites, Coloureds, Indians and persons with disabilities are encouraged to apply. Shortlisted candidates will be subjected to background checks and psychometric assessment. Preference will be given to South African citizens.
 
For enquiries (Not Applications), contact Ms. Mesele Matlala – HR Manager at Tel: 011 403 7182 or 063 356 2354
 
Closing date: 09 September 2024 @17h00
No late applications will be accepted.
 
Hiring organization Commission for Gender Equality
Duration of employment 5-year Performance-based contract
Job Location HEAD OFFICE (Johannesburg)
Valid through September 9, 2024`,`MEMBER OF THE CGE AUDIT COMMITTEE
 
Description
The CGE has a vacant post for one member of its Audit Committee. The primary purpose of The Audit Committee is to provide oversight on the financial reporting process, the audit process, corporate governance, systems of internal controls, compliance with laws and regulations and to promote the integrity of the financial status of the CGE, as well as overseeing the maintenance of sound risk management systems.
 
Requirements
Post-Graduate qualification in Accounting / Law / Auditing / Risk
Management / Financial
Management.
Minimum of 10 years’ experience in financial management / Risk
management / Auditing /
Law environment.
Minimum of 6 years serving in the Audit and/or Risk Committee.
Willingness to serve the interests of the public in a responsible manner.
A good understanding of the Public Finance Management Act (PFMA),
Treasury
Regulations and other legislation governing the work of public entities.
An understanding of gender equality will be an added advantage.
 
Key Functions
Persons interested in these posts, and who are eminently qualified will be expected to provide oversight and guide the Commission on the following matters:
Internal audit.
Internal financial controls.
Accounting policies.
Risk management.
Adequacy, reliability and accuracy of financial reporting and information.
Performance management.
Effective governance.
Compliance with legislations.
Review of quarterly and annual financial statements.
Corporate governance.
Ethics.

Term of Office
The term of office of appointed candidates will be three years, after which the Commission may review the incumbency.
Candidates should possess the following qualities:
Independence.
Integrity.
Transparency.
Analytical mindset.
Objectivity.
Good communication skills.
Report writing skills.
Willingness to dedicate sufficient time to serve in the Audit Committee.
 
Applications
It is mandatory that an applicant submit the following:
Motivational letter and Comprehensive CV.
Certified copies of ID and Qualifications.
Telephone details and e-mail addresses of three contactable referees.
 
The above-mentioned documents must be sent via email to:
recruitment@cge.org.za
 
Correspondence will be limited to the short-listed candidates only. Applicants with a foreign qualification must submit a SAQA evaluation report of their qualification. The CGE reserves the right not to fill this advertised position. The CGE is an equal opportunity, affirmative action employer committed to the achievement and maintenance of fair representation (race, gender, and disability). Whites, Coloureds, Indians and persons with disabilities are encouraged to apply. Shortlisted candidates will be subjected to background checks and psychometric assessment. Preference will be given to South African citizens.
 
For enquiries (Not Applications), contact Ms. Mesele Matlala – HR Manager at
Tel: 011 403 7182 or 063 356 2354
 
Closing date: 09 September 2024 @17h00
No late applications will be accepted.
 
Hiring organization Commission for Gender Equality
Duration of employment 3 YEARS, AFTER WHICH THE COMMISSION MAY REVIEW
Job Location HEAD OFFICE – JOHANNESBURG
Valid through September 9, 2024`],postedDate:"26/8/2024",iframe:"",uuid:"p826b4adc-5028-4fbc-b995-4c5259a9fd3f"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/eskom_orig.png",href:"https://www.govpage.co.za/eskom-vacancies-blog/eskom-vacancies6208801",title:"ESKOM VACANCIES",content:[` 
ESKOM
 `,` 
 
GRADUATE IN TRAINING (DURBANVILLE)
Vacancy type: External/Internal
Task Grade : I02
Area of Specialization : N/A
Department : Human Resources
Business Unit : Peaking Generation
Location : South Africa (Western Cape)
Reference Number : GxPeakDurbanville GIT_HR
Closing Date : 9/7/2024
 
Minimum Requirements
• Must be a South African Citizen

- Qualification(s):
• BCom/ BA/ Advanced Diploma/ Btech in HRM/ Industrial or Labour relations. 

- Related Minimum Experience:
Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the division.
 
Skills and Competencies
• Leadership
• Team player

• Behavioral
• Integrity
• Professionalism
• Customer focused

• Knowledge
• Knowledge of Eskom’s Policies and procedures

• Skill
• Communication Skills
• Sound interpersonal Skills
• Negotiation Skills
• Liaising Skills


• Attributes
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
 
Key Responsibilities
• The incumbent will be afforded institutionalised and on job training.


 FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recuitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
GRADUATE IN TRAINING (DURBANVILLE)
Vacancy type: External/Internal
Task Grade : I02
Area of Specialization : N/A
Department : BIPM
Business Unit : Peaking Generation
Location : South Africa (Western Cape)
Reference Number : GxPeakingGIT_BIPM
Closing Date : 9/7/2024
 
Minimum Requirements
• Must be a South African Citizen

- Qualification(s):
• BCom: Accounting, Economics, Financial Accounting, Statistics, Commerce, Applied Economics
• BSc Mathematical Sciences: Pure Mathematics, Applied Mathematics, Statistics, Actuarial Science, Computer Business Computing, Data Science, BSc Engineering.


- Related Minimum Experience:
Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the division.
 
Skills and Competencies
• Leadership
• Team player

• Behavioral
• Integrity
• Professionalism
• Customer focused

• Knowledge
• Knowledge of Eskom’s Policies and procedures

• Skill
• Communication Skills
• Sound interpersonal Skills
• Negotiation Skills
• Liaising Skills

• Attributes
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
 
Key Responsibilities
•      The incumbent will be afforded institutionalised and on job training.


FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recuitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
SENIOR CLERK GENERAL ADMIN (DISTRIBUTION) MBOMBELA, ESKOM PARK, MIDDELBURG (MPUMALANGA) X5
Vacancy type: External/Internal
Task Grade : T06
Area of Specialization : To Provide Support Service to the Section
Department : Property Management
Business Unit : Limlanga Cluster
Location : South Africa (Mpumalanga)
Reference Number : MP654MJ
Closing Date : 9/4/2024
 
Minimum Requirements
Qualification(s):
• Grade 12/NCV4/NSC3/N3 at NQF4 with 120 credits

Experience:
• 2 Years Administration Experience
Skills and Competencies
Behavioural:
• Politeness
• Promptness
• Energetic
• Self-Starter
• Assertive
• Telephone etiquette

Leadership:
• Team player

Knowledge:
• Eskom’s policies and procedures

Skill:
• Administrative Skill
• Communication Skills
• Sound Interpersonal Skills
• Negotiation Skills
• Liaising
 
Key Responsibilities
Ø Provide section administration.
Ø Control office activities.
Ø Provide basic advisory service and reporting.


** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL: ** recruitmentdx@eskom.co.za

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
RE-ADVERT PROJECT MANAGER COMPLEX PROJECTS (NTCSA) MEGAWATT PARK
Vacancy type: External/Internal
Task Grade : M16
Area of Specialization : To manage the activities and resources allocated to complex projects into a cohesive, efficient manner as well as the administer and execute infrastructure projects (including control plant) within cost, quality, and time.
Department : Project Delivery
Business Unit : Project Delivery
Location : South Africa (Gauteng)
Reference Number : 50839783MIR-01
Closing Date : 9/9/2024
 
Minimum Requirements

Qualification(s):
•B-Degree / B Tech in: Built Environment / Commerce / Human Sciences at NQF 7 with 360 Credits

Professional Registration:
•Professional Registration with South African Council of Project and Construction Management Professionals (SACPCMP) as a Professional Construction Project Manager (Pr.CPM).

•Related Minimum Experience:
5 years related experience in Infrastructure Project Management and Construction
 
Skills and Competencies

Behavioural
• Resilience and flexibility
• Dealing with complexity
• Influencing and persuading
• Interpersonal skills
• Decision making
• Strategic thinking

Leadership
• Strong communication skills
• Ability to build effective relationships
• Coaching and mentoring

Knowledge
• Knowledge of scheduling tool
• Knowledge of business integration
• Eskom Financial systems
• Communication and Stakeholder management at executive level
• Knowledge of Eskom Project Life Cycle Model (PLCM)
• Knowledge of Contracts Management
• Knowledge of Occupational Health and Safety (OHS) Act
• Project Management Book of knowledge (PMBOK)

Skill
• Knowledge areas of the Project Management book of knowledge (PMBOK)

Attributes
• Technical/System background
• Accredited as responsible person in terms of Operations Regulations for
• Plant and or High Voltage System (ORHVS)

Knowledge
• Construction management Quality management
• Reporting
• Engineering
• Project management
• Contracts management
• Risk management
• Analysis/judgement/problem-solving Quantitative and qualitative analysis
• Client focus Developing organisational talent
• Teamwork/collaboration
• Negotiation/persuasiveness
• Planning and organising
 
Key Responsibilities
1. Monitoring projects and controlling cost, time, and quality
2. Develop a project plan from concept to completion.
3. Effectively reporting on the project
4. Providing a project coordination function and managing a team effectively
5. Managing the safety heath environment and quality
6. Project Contract Management
7. Commissioning of a project


FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitment@ntcsa.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“NTCSA is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of NTCSA and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  NTCSA reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

NTCSA is committed to providing a smoke-free environment for its employees and visitors at the workplace
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
GRADUATE IN TRAINING (COMMERCIAL) X1 (GENERATION)
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization : Commercial
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Graduate in Training- Commercial
Closing Date : 9/6/2024
 
Minimum Requirements

Qualification(s):
• Fully Completed Degree B Com, BA, (Commerce/Supply Chain/Logistics)

Minimum Requirements
• Must be a South African Citizen

Related Minimum Experience:
• Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions.
 
Skills and Competencies

Leadership
• Team player

Behavioral
• Integrity
• Professionalism
• Customer focused

Knowledge
• Knowledge of Eskom’s Policies and procedures

Skill
• Communication Skills
• Sound interpersonal Skills
• Negotiation Skills
• Liaising Skills

Attributes
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
 
Key Responsibilities
• The incumbent will be afforded institutionalised and on job training.


Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores. PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
GRADUATE IN TRAINING (FINANCE) X1 (GENERATION)
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization: Finance
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Graduate in Training- Finance
Closing Date : 9/6/2024
 
Minimum Requirements

Qualification(s):
• Fully Completed Degree B Com, (Accounting/Finance)

Minimum Requirements
• Must be a South African Citizen

Related Minimum Experience:
• Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions.
 
Skills and Competencies

Leadership
• Team player

Behavioral
• Integrity
• Professionalism
• Customer focused

Knowledge
• Knowledge of Eskom’s Policies and procedures

Skill
• Communication Skills
• Sound interpersonal Skills
• Negotiation Skills
• Liaising Skills

Attributes
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
 
Key Responsibilities
• The incumbent will be afforded institutionalised and on job training.


Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores. PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
GRADUATE IN TRAINING (PHYSICIST) X3 (GENERATION)
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization : Koeberg Power Station
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Graduate in Training- Physicist
Closing Date : 9/6/2024
 
Minimum Requirements

Qualification(s):
• Fully Completed BSc Hons Degree in Physics

Minimum Requirements
• Must be a South African Citizen

Related Minimum Experience:
• Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions.
 
Skills and Competencies

Leadership
• Team player

Behavioral
• Integrity
• Professionalism
• Customer focused

Knowledge
• Knowledge of Eskom’s Policies and procedures

Skill
• Communication Skills
• Sound interpersonal Skills
• Negotiation Skills
• Liaising Skills

Attributes
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
 
Key Responsibilities
• The incumbent will be afforded institutionalised and on job training.



Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores. PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
ENGINEER IN TRAINING (NUCLEAR ENGINEERING) X9-GENERATION KOEBERG NPS
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization : Nuclear Engineering
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Engineer-in-Training Nuclear Engineering
Closing Date : 9/6/2024
 
Minimum Requirements
Qualification(s):
•Fully Completed Engineering Degree, B Eng/BSC Eng (Mechanical/Civil/ Electrical – Light & Heavy Current)

Minimum Requirements
•Must be a South African Citizen

Related Minimum Experience:
•Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions.
 
Skills and Competencies
Leadership
•Team player

Behavioral
•Integrity
•Professionalism
•Customer focused

Knowledge
•Knowledge of Eskom’s Policies and procedures

Skill
•Communication Skills
•Sound interpersonal Skills
•Negotiation Skills
•Liaising Skills

•Attributes
•Politeness
•Promptness
•Energetic
•Self-starter
•Assertive
Key Responsibilities
•The incumbent will be afforded institutionalised and on job training.


Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores reception area. PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
ENGINEER IN TRAINING (OPERATING) X5-GENERATION KOEBERG NPS
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization : Operating
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Koeberg Engineers-In-Training Operating
Closing Date : 9/6/2024
 
Minimum Requirements
Qualification(s):
•Fully Completed Engineering Degree, B Eng/BSC Eng (Mechanical/Civil/ Electrical – Light & Heavy Current)

Minimum Requirements
•Must be a South African Citizen

Related Minimum Experience:
•Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions
 
Skills and Competencies
Leadership
•Team player

Behavioral
•Integrity
•Professionalism
•Customer focused

Knowledge
•Knowledge of Eskom’s Policies and procedures

Skill
•Communication Skills
•Sound interpersonal Skills
•Negotiation Skills
•Liaising Skills

Attributes
•Politeness
•Promptness
•Energetic
•Self-starter
•Assertive
 
Key Responsibilities
•The incumbent will be afforded institutionalised and on job training


Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores. PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
LEARNER TECHNICIANS (MAINTENANCE) X5-GENERATION KOEBERG NPS
Vacancy type: External/Internal
Task Grade : TR2
Area of Specialization : Maintenance
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Learner Technicians Mechanical Engineering
Closing Date : 9/6/2024
 
Minimum Requirements
Qualification(s):
•Fully Completed S4/S5/National Diploma/B Tech (Mechanical)

Minimum Requirements
•Must be a South African Citizen

Related Minimum Experience:
•Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions.
 
Skills and Competencies
Leadership
•Team player

Behavioral
•Integrity
•Professionalism
•Customer focused

Knowledge
•Knowledge of Eskom’s Policies and procedures

Skill
•Communication Skills
•Sound interpersonal Skills
•Negotiation Skills
•Liaising Skills

Attributes
•Politeness
•Promptness
•Energetic
•Self-starter
•Assertive
 
Key Responsibilities
•The incumbent will be afforded institutionalised and on job training.



Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores reception area.
PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
 
LEARNER TECHNICIANS (CHEMISTRY) X8-GENERATION KOEBERG NPS
Vacancy type: External/Internal
Task Grade : TR2
Area of Specialization : Chemical/Chemical Analyst
Department : Human Resources
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : Koeberg Learner Technicians Chemical
Closing Date : 9/6/2024
 
Minimum Requirements

Qualification(s):
•Fully Completed S4/S5/ Completed National Diploma in Analytical Chemistry/Water Care/Chemical Engineering/Biotechnology/National N Diploma in Engineering Studies with Chemistry, Chemical Plant Operations and Chemical

Minimum Requirements
•Must be a South African Citizen

Related Minimum Experience:
•Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions.
 
Skills and Competencies
Leadership
•Team player

Behavioral
•Integrity
•Professionalism
•Customer focused

Knowledge
•Knowledge of Eskom’s Policies and procedures

Skill
•Communication Skills
•Sound interpersonal Skills
•Negotiation Skills
•Liaising Skills

Attributes
•Politeness
•Promptness
•Energetic
•Self-starter
•Assertive
 
Key Responsibilities
•The incumbent will be afforded institutionalised and on job training.



Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at Koeberg Power Station, Bulkstores reception area. PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
RE ADVERT SENIOR ENGINEER PROF ELECTRICAL ENGINEERING (PROJECT INTEGRATION) NTCSA MWP
Vacancy type: External/Internal
Task Grade : P16
Area of Specialization : To develop and support suitable technology strategies, processes, standards, specifications and designs
Department : Engineering
Business Unit : Engineering
Location : South Africa (Gauteng)
Reference Number : 505571133PM/01
Closing Date : 9/9/2024
 
Minimum Requirements

Qualification(s):
BSc /B Eng in Engineering at NQF8 with 480 credits

Professional Registration
Professional Registration Body: Engineering Council of South Africa (ECSA) as Professional Engineer

Related Minimum Experience:
4 years Technical experience engineering related technologies.
 
Skills and Competencies

1) Behavioural:
• Strong drive to learn
• Be results and delivery focused
• Integrity
• Professionalism
• Safety consciousness

2) Leadership:
• Entrepreneurial mind-set
• Build effective relationships
• Coaching and mentoring
• Work in team

3) Knowledge:
• Related Technologies
• Design codes and standards
• Engineering theory
• Relevant processes, policies, guidelines and legislation
• Engineering design
• Technical problem solving

4) Skill:
• Analytical
• Cost analysis/ economic evaluation
• Presentation
• Communication
• Technical report writing
 
Key Responsibilities
1. Integration of complex projects across all design disciplines and external role players.
2. Contracting, forecasting, and managing design delivery of complex projects
3. Develops discipline specific philosophies, technical standards, procedures, work practices and specifications.
4. Oversees and integrates complex engineering solutions/design for asset creation on behalf of customers at various stages of the project lifecycle.
5. Plans and controls discipline-specific research on new technologies / processes.
6. Represents Eskom in national and international forums
7. Manages and conducts complex product, equipment, material, service and change impact evaluations.
8. Provides complex technical consulting and investigation service for customers.
9. Provides professional technical leadership


FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitment@ntcsa.co.za

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“NTCSA is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of NTCSA and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  NTCSA reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

NTCSA is committed to providing a smoke-free environment for its employees and visitors at the workplace
 
PLEASE APPLY HERE
 
 
 
 
 
 `,`TECHNICIAN ELECTRICAL (LIGHT CURRENT) X5 (GENERATION) KOEBERG NPS
Vacancy type: External/Internal
Task Grade : T11
Area of Specialization : To assure optimum reliability and availability of plant.
Department : Maintenance
Business Unit : Nuclear Operating Unit
Location : South Africa (Western Cape)
Reference Number : 50499052AS/GX-Koeberg
Closing Date : 9/6/2024
 
Minimum Requirements
Qualification(s):
•National Diploma / National N Diploma Technical

Related Minimum Experience:
•Related experience in Maintenance
•P1 & P2 Experiential Training
 
Skills and Competencies


1)Leadership
•Team player
•Motivating teams
•Coaching
•Mentoring
•Developing

2)Behavioural
•Integrity
•Honesty
•Trustworthiness
•Professionalism

3)Knowledge
•Extensive knowledge of National and International Engineering codes and Standards
•Knowledge of plant fundamental policies
•Safety knowledge
•HV/LV Regulations
•Quality Control
•Basic understanding of Security Systems
•Basic understanding of Fire Detection Systems
•Basic understanding of Communication Systems
•Basic understanding of Computer networks and PC Repairs

4)Skill
•Analysing
•Computer Literacy
•Problem Solving
•Communication
•Diagnosis
 
Key Responsibilities
•Maintain optimisation of allocated system.
•Verify that correct components / spares / services etc. are procured.
•Assist with modifications to improve reliability of plant.
•Advise and assist with staff development.
•Perform projects / contract supervision activities.
•Comply with permit o work system.


** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitmentgx@eskom.co.za **
Kindly apply for the position online by clicking on the link below:
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE`,`LEARNING PROGRAMME - ENGINEER IN TRAINING X2, GENERATION, MEGAWATT PARK
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization : N/A
Department : Operation, Maintenance and Outages Department
Business Unit : Generation Head Office
Location : South Africa (Gauteng)
Reference Number : Learners Gx OMO/SM
Closing Date : 9/6/2024
 
Minimum Requirements
• Qualification(s):
• • Fully Completed Engineering Degree, B Eng/BSC Eng (Chemical/ Industrial))

• Minimum Requirements
• Must be a South African Citizen

• Related Minimum Experience:
• Applicants will go through a recruitment process, and if successful, be placed in the Eskom Operations across the divisions
 
Skills and Competencies

• Leadership
• Team player

• Behavioral
• Integrity
• Professionalism
• Customer focused

• Knowledge
• Knowledge of Eskom’s Policies and procedures

• Skill
• Communication Skills
• Sound interpersonal Skills
• Negotiation Skills
• Liaising Skills

• Attributes
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
 
Key Responsibilities
• Key Responsibilities
• The incumbent will be afforded institutionalised and on job training.


Kindly apply for the position online by clicking on the link below or for submission, please drop your detailed CV, certified ID copy and certified completed qualification copies at the Power Station, Security Gate. 

PLEASE QUOTE THE REFERENCE NUMBER FOR YOUR APPLICATION AND TRAINING PROGRAMME YOU ARE APPLYING FOR.

** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recuitmentgx@eskom.co.za

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”  
 
PLEASE APPLY HERE`],postedDate:"26/8/2024",iframe:"",uuid:"p2e3ab88f-3553-4af7-9fa2-a998b4bf5d86"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ecic_orig.png",href:"https://www.govpage.co.za/export-credit-insurance-corporation-of-south-africa-soc-limited-ecic-vacancies-blog/export-credit-insurance-corporation-of-south-africa-soc-limited-ecic-vacancies7549710",title:"EXPORT CREDIT INSURANCE CORPORATION OF SOUTH AFRICA SOC LIMITED (ECIC) VACANCIES",content:[` 
EXPORT CREDIT INSURANCE CORPORATION OF SOUTH AFRICA SOC LIMITED (ECIC)
 `,`FINANCIAL REPORTING ACCOUNTANT
Centurion, ZA
Full-Time
Finance
Financial Reporting Accountant
Apply To Position
Apply Using LinkedIn
 
PURPOSE OF THIS ROLE
The purpose of this job is to prepare financial reports of the organisation. The role assists the Head of Finance with supervision of finance professionals including graduate trainee(s).
 
KEY ACCOUNTABILITIES, MEASURES & INTERFACES
Prepare and/or file Statutory returns (PROV TAX and ITR14)
Review the audit file;
Prepare stakeholder reports (Board and management, Dtic, Prudential Authority, Financial Sector Conduct Authority , National Treasury and SARB);
Manage the production of the annual budget and forecasts;
Preparation of the corporate annual financial statements in accordance to IFRS and ECIC’s accounting policies
Coordination of the audit process and liaison with internal and external auditors;
Assist with the implementation of new accounting standards e.g. preparation of the implementation plan and related deliverables
Co-develops the required best practice, systems and procedures to achieve business goals.
Assist with adhoc assignments as requested by the Head of Finance or CFO
Key Measures
Timely submission of stakeholder reports
Number of audit observations;
Compliance with procedural and legislative requirements;
Management of client relationships and key stakeholders;
Key Interfaces
ECIC Executives and Managers
Other business unit particularly Investments, Actuarial , Portfolio management and PEAR;
Internal and External Auditors
 
QUALIFICATIONS & EXPERIENCE
An Accounting degree with articles;
CA(SA) or CIMA is preferred
Minimum of 5 years working experience (3 years of articles and 2 years post article experience in a financial institution)
 
SKILLS & ABILITIES
The incumbent should have demonstrated the following competencies:
Knowledge: IFRS, Tax, Auditing, PFMA;
Adequate financial statement analysis skills;
Ability to communicate verbally and in writing at all levels ;
Strong aptitude for problem resolution and decision making;
Able to demonstrate a high degree of integrity;
Problem solving skills to identify issues and present creative and practical solutions;
Adequate analytical skills;
Strict attention to detail and deadline orientated;
Risk management skills
Advanced MsExcel Skills
Risk management skills
 
The incumbent is required to have the following Behavioural competencies:
Problem Solving: Demonstrates basic problem-solving skills and appropriately applies proven solutions.
Business Acumen: Develops and uses a strategy to target own time (and time of others) on a portfolio of customers to maximize revenue and profitability.
Delivery: Translates business objectives into practical, prioritised and organised action plans; ensures plans are safely and successfully implemented.
Conflict Resolution: Identifies and pushes for solutions in which all parties can benefit.
Team Participation: Consistently offers relevant input to team discussions as issues are being clarified and solutions are being developed.`,`APPLICATIONS
Closing Date: Friday, 30 August 2024
 
NOTE: It is ECIC’s intention to promote equity through the filling of posts, according to the set Employment Equity targets.
 
Data Protection
Personal information collected and processed for purposes of recruitment will be protected from unauthorised access and improper use or disclosure.
 
Declaration and Informed Consent
By submitting your application for the advertised role, you give ECIC permission to process your personal information and you acknowledge that you understand the purpose for which it is required and for which it will be used. Furthermore, you declare that all personal information supplied to the ECIC for the purposes of recruitment is accurate, up to date, not misleading and that it is complete in all respects.`],postedDate:"26/8/2024",iframe:"",uuid:"pc653097e-6e08-44ab-a80c-f8783038736d"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/fic.jpg?1724692563",href:"https://www.govpage.co.za/financial-intelligence-centre-fic-vacancies-blog/financial-intelligence-centre-fic-vacancies7064953",title:"FINANCIAL INTELLIGENCE CENTRE (FIC) VACANCIES",content:[` 
FINANCIAL INTELLIGENCE CENTRE (FIC)
 `,` 
 

FORENSIC ACCOUNTANT
Organizational Unit Financial Intelligence Centre -> Monitoring and Analysis
Job Type Permanent
Education Honours Degree or equivalent
Career Level Skilled and academically qualified
Location Pretoria - Centurion, GP 0157 ZA (Primary)
Travel 0 - 10%
Desired Race African
Desired Gender Female
Closing Date 4/9/2024
 
Job Description
FIC is an equal opportunity employer. Preference will be given to suitably qualified AFRICAN FEMALES applicants in line with our Employment Targets and our commitment to diversifying our workforce.
Apply technical expertise in the interpretation and presentation of complex financial information in order to aid criminal investigations, the recovery of proceeds of crime, criminal prosecutions or medium-term decisions
 
KEY PERFORMANCE AREAS 
•    Analyse, interpret, summarise, and present complex financial information and relevant data in a manner, which is both understandable and properly supported. 
•    Identify and investigate patterns and connections between situations that are not necessarily routine or obviously interlinked and verbalise key findings to the relevant forums. 
•    Determine relevance and completeness of information or evidence and identify gaps.
•    Perform various calculations including income and losses; transaction summaries; tracing of source and destination of funds, tracing of assets; performing present value calculations utilising appropriate rates. 
•    Utilise computerised applications such as a spreadsheet, database or computer model and utilise charts and graphics to explain findings. 
•    Investigate and contextualise financial information / evidence in support of law enforcement efforts by capturing findings and conclusions in the required reporting format and systems and submit investigation outcomes, trends and recommendations as prescribed by relevant policies and procedure.
•    Conduct analysis within acceptable quality norms required.
•    Facilitate the handing over of intelligence / evidence to designated authorities.
•    Assist in legal proceedings, including testifying in court regarding forensic report findings and prepare visual aids to substantiate findings.
•    Plan and manage personal outputs with limited supervision and interact with team members.
•    Execute tasks expeditiously and within set action plans and time frames.
•    Participate in transfer of skills to team members.
•    Review and guide the work of team members.  
•    Assist in compiling reports and case studies for training purposes and benchmarking. 
•    Advises management of financial intelligence issues and challenges as appropriate
•    Represent the organisation at working groups, meetings, conferences, and seminars when required
 
EDUCATION, SKILLS AND EXPERIENCE
•    Honours in BCom accounting or forensic accounting or B Compt 
•    At least six years' experience in a relevant field
•    Working experience in one of the following industries is preferable:
o    Financial accounting and Information analysis
o    Forensics 
o    Internal Auditing
•    Comprehensive grasp of laws, regulations, and legal precedents pertaining to evidence.
•    Extensive knowledge of accounting and auditing standards, facilitating proficient financial investigations.
•    Proficient in utilizing a diverse range of investigative techniques to gather vital information.
•    Familiarity with principles and methodologies of forensic investigations across different contexts.
•    Thorough understanding of pertinent legislation, encompassing Criminal Law, Criminal Procedure Law of Evidence, and associated statutes.
•    Sound understanding of the legal framework within the public sector, including PFMA, MFMA, Treasury Regulations, and other applicable Treasury Directives.
•    Required experience in the collection, application, and use of relevant information in order to substantiate deductions and findings will be an advantage.  
•    Working knowledge of data analysis applications, tools, and systems. 
•    Sound knowledge and experience using the Microsoft office suite and Excel is a prerequisite. 
•    Anti-Money laundering training will be an added advantageous. 
•    Analytical, investigative, and problem-solving skills.
•    Reporting and presentation skills
 
TECHNICAL COMPETENCIES 
•    Data Governance, Compliance and Ethics 
•    Data Literacy 
•    Data Collection and Analysis
•    Insights and Reporting 
•    Data Quality 
•    Data Requirements Identification
•    Data Stewardship 
•    Data Visualisation and Presentation 

APPLY TO THIS JOB

 
 
 
 
 `,`LABOUR RELATIONS CONSULTANT
Organizational Unit Financial Intelligence Centre -> Corporate Services -> Human Resources
Job Type Permanent
Education Bachelors Degree or equivalent
Career Level Professional
Location Pretoria - Centurion, GP 0157 ZA (Primary)
Travel 0 - 10%
Desired Race Not Applicable
Desired Gender Not Applicable
Closing Date 4/9/2024
 
Job Description
Provide labour relations advisory and facilitation services to internal stakeholders to enable sound employment relations.

•    Advise managers and employees on labour relations matters
•    Maintain organised labour consultative structures 
•    Facilitate internal dispute resolution measures, grievances, and disciplinary processes
•    Sustain relationships with key stakeholders i.e. shop stewards and other union representatives, to ensure employment relations stability through addressing identified issues speedily and in an amicable manner
•    Ensure constant monitoring of the Recognition Agreement and/or any other agreements that the FIC enters into with organised labour 
•    Provide support to the negotiations team by coordinating the bargaining process
•    Represent the FIC at relevant external forums such as the CCMA
•    Develop and implement measures to promote sound employment relations
•    Develop, implement, maintain and monitor labour relations policies 
•    Empower management and staff on labour relations matters
•    Facilitate the FIC’s compliant with employment laws
•    Keep abreast of changes and development in the labour labour relations environment
•    Facilitate the implementation of the FIC’s Transformation initiatives, including, but not limited to, employment equity and other transformation related deliverables
•    Review and maintain HR governance framework and ensure alignment to employment laws, e.g, hr policies etc.
 
Education, Skills and Experience 
•    Bachelor’s degree in HR / Labour Relations or equivalent
•    +5 years’ experience in labour relations field.
•    +5 years’ experience in collective bargaining matters, and conflict resolution.
•    Demonstrated facilitation and interpersonal skills
•    Demonstrated knowledge of employment and labour laws
•    Knowledge of and ability to interpret Human Resources Management framework with specific reference to labour relations 
•    Knowledge and skills regarding processes of policy research, analysis and development
•    Knowledge and skills in strategic and project planning and management

APPLY TO THIS JOB`,`TEST AUTOMATOR
Organizational Unit Financial Intelligence Centre -> Corporate Services -> Information and Communication Technology
Job Type Permanent
Education Bachelors Degree or equivalent
Career Level Skilled
Location Pretoria - Centurion, GP 0157 ZA (Primary)
Travel No Travel Required
Desired Race Not Applicable
Desired Gender Not Applicable
Closing Date 2/9/2024
 
Job Description
Develop, maintain and execute automated scripts by using Unified Functional Testing tool. 

KEY PERFORMANCE AREAS:
• Provide estimations of test automation effort,
• Plan and design the automation framework,
• Develop reusable automation test scripts, 
• Maintain and execute automation test scripts and test suites,
• Identify and prepare test data requirements,
• Report automation defects,
• Report on test automation progress and status to the Test Manager,
• Raise risks and issues with the Test Manager,
• Apply best practices in developing and maintaining test automation scripts, 
• Ensures all test automation standards are being met, and
• Contribute to improvements on test automation processes
 
EDUCATION, SKILLS AND EXPERIENCE:
• Relevant IT certificate / diploma or equivalent
• ISTQB or ISEB qualification would be advantageous
• 4-6 solid years’ experience in testing software solutions especially in a financial industry
• 2+ solid years’ experience as a Manual Test Analyst
• Knowledge of manual testing test techniques
• Proficiency in MS Excel
• Knowledge and experience with software test tools, i.e., Quality Centre, Quick Test 4+ solid years’ experience in a Test Automation role
• Extensive knowledge in developing automation frameworks
• Extensive knowledge in developing re-usable automation test scripts
• Knowledge of manual testing test techniques
• Proficiency in MS Excel
• Knowledge and experience with software test tools, i.e. Quality Centre, Quick Test Professional, Unified Functional Testing
• Knowledge of SQL
 
APPLY TO THIS JOB`],postedDate:"26/8/2024",iframe:"",uuid:"pef96b36b-37f2-44ac-9c30-05286778a64b"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/fsca_orig.png",href:"https://www.govpage.co.za/financial-sector-conduct-authority-fsca-vacancies-blog/financial-sector-conduct-authority-fsca-vacancies5652419",title:"FINANCIAL SECTOR CONDUCT AUTHORITY (FSCA) VACANCIES",content:[` 
FINANCIAL SECTOR CONDUCT AUTHORITY (FSCA)
 `,`GRADUATE DEVELOPMENT PROGRAMME 2024/25 (Pretoria)
Reference Number GDP 2024/25
 
Description
Financial Sector Conduct Authority (FSCA) seeks to equip young graduates with knowledge, skills and exposure to the market conduct regulation and supervision, and its role in the economy. The graduate development programme is a structured programme specifically designed to produce a pipeline of competent new entrants in the labour market and to assist the FSCA to deliver on its mandate to:
• Transform the integrity of financial markets;
• Protect financial customers by promoting fair treatment by financial institutions; and 
• Provide financial customers with financial education and maintaining financial stability.

Roll out plan of the programme
Recommended candidates will be given an opportunity to learn under the supervision of a dedicated mentor. The graduate development programme provides trainees with workplace experience necessary to help grow professionally within the financial sector. Trainees are exposed to various competency-based training during the 24-month graduate development programme. 

What We Offer:
• Continuous training and development is provided to assist trainees to develop skills for a career in the financial sector. 
• Structured learning: Engage in a comprehensive 24-month programme designed to equip you with the knowledge and skills to excel in the financial sector.
• Hand-on-experience: Work on real projects with opportunities to rotate across various departments.
• Mentorship: Benefit from one-on-one mentorship.
 
Who should apply
FSCA is committed towards increasing the representation of marginalised groups in line with its Employment Equity Plan. Persons with disabilities are encouraged to apply and must declare such on their applications. The applicants must have completed one of the following qualifications: 
• Bachelor of Laws (LLB)
• BCom/National Diploma in Marketing
• BCom Economics
• BSC Mathematics and Statistics
• BCom Financial Accounting / Hons / CTA
• Bachelor of Accounting Science
• BCom Auditing
• Degree/National Diploma in Communication
• Degree in Education
• Degree in Philosophy, Politics, and Economics (PPE) / Economics

• Degree in Information Technology and ISC2 Certified in Cybersecurity / AWS Cloud Practitioner / Microsoft Azure

Please note that correspondence and communication will only be conducted with short listed candidates and that the FSCA reserves the right not to appoint if a suitable candidate is not identified. 
 
Requirements for application
• South African Citizen with a South African Identity Document
• Curriculum Vitae – CV
• Certified Copies of Qualification
• Must have no work experience
• Strong desire to work in financial services sector 
 
Application open: 21 August 2024 – 29 August 2024
 
Work Level Junior
Job Type Contract
Salary Market Related
Duration 1 - 2 Years
EE Position No
Location Pretoria
 
PLEASE APPLY HERE`,`INTERNSHIP PROGRAMME 2024/25 Ref No: INT 2024/25 (Pretoria)
Reference Number INT 2024/25
 
Description
Financial Sector Conduct Authority (FSCA) seeks to equip young graduates with knowledge, skills and exposure to the market conduct regulation and supervision, and its role in the economy. The internship is a structured programme specifically designed to produce a pipeline of competent new entrants in the labour market and to assist the FSCA to deliver on its mandate to:
• Transform the integrity of financial markets;
• Protect financial customers by promoting fair treatment by financial institutions; and 
• Provide financial customers with financial education and maintaining financial stability.

Roll out plan of the programme
Recommended candidates will be given an opportunity to learn under the supervision of a dedicated mentor. Interns are assigned to a division, based on their qualifications and career aspirations, and exposed to various competency-based training during the one-year internship programme. 
 
Who should apply
FSCA is committed towards increasing the representation of marginalised groups in line with its Employment Equity Plan. Persons with disabilities are encouraged to apply and must declare such on their applications. The applicants must have completed one of the following qualifications: 
• Degree/National Diploma in Communications
• BCom Marketing/Business Management 
• Degree/Diploma in Events Management
• Bachelor of Accounting Science
• Degree/Honours in Forensic Accounting
• Bachelor of Laws (LLB)
 
Requirements for application
• South African Citizen with a South African Identity Document
• Curriculum Vitae – CV
• Certified Copies of Qualification
• Must have no work experience
• Strong desire to work in financial services sector
 
Application open: 21 August 2024 –28 August 2024
 
Work Level Student/Graduate
Job Type Contract
Salary Market Related
Duration 9 - 12 Months
EE Position No
Location Pretoria`],postedDate:"26/8/2024",iframe:"",uuid:"p9e3f857a-d544-426f-82a6-6782bd613fd8"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/hsrc_orig.gif",href:"https://www.govpage.co.za/health-professions-council-of-south-africa-hpcsa-vacancies-blog/health-professions-council-of-south-africa-hpcsa-vacancies1413336",title:"HEALTH PROFESSIONS COUNCIL OF SOUTH AFRICA (HPCSA) VACANCIES",content:[` 
HEALTH PROFESSIONS COUNCIL OF SOUTH AFRICA (HPCSA)
 
Health Professions Council of South Africa’s vision is realized through regulating and guiding registered healthcare professions and protecting the public. 
 `,`STRATEGY PLANNING SPECIALIST 
Paterson grade D2 
Remuneration package: R1, 020,859 per annum (Cost to Council) 
 
MINIMUM REQUIREMENTS 
Bachelor’s degree (NQF L7) / National Higher Diploma (Old) / Advanced Diploma (NQF L7) in Business Science or Health/ Natural Science. 
Post graduate qualification (NQF L8) in Strategic Management/Project Management/Future Studies/Economics/Business Administration will be an added advantage. 
6 years business research and/ or planning experience. 
 
COMPETENCY REQUIREMENTS 
Strong communications skills (verbal, written, presentation) 
Experience in consulting (internal or external) 
Knowledge and use of strategic management frameworks, tools and methodologies 
Ability to undertake research 
Deep knowledge and awareness of current trends 
Proven track record in delivering projects (Change/strategy implementation/Business Process Re-Engineering 
Project management skills 
Strong group facilitation skills 
 
PRINCIPAL ACCOUNTABILITIES & KEY PERFORMANCE AREAS 
Align strategic management processes, resource-planning and departmental goals with the overall strategy of the HPCSA. 
Provide support and insight into significant organizational changes (e.g. shift in strategic focus/ digitization). 
Assist the departmental and divisional heads in aligning departmental and divisional goals to the organization’s overall strategy and strategic goals. 
Facilitate the strategic planning processes and conversations within HPCSA structures. 
Monitor the evolution of strategic management best practice models. 
Undertake benchmarking exercises with peer organizations across the sector. 
Construct forecasts and analytical models which will inform the strategy. 
Perform other ad-hoc requests by Head of Division: Strategy & EPMO and the Registrar/CEO.`,`In line with the Council’s Employment Equity plan and commitment to diversify its workforce, preference will be given to suitably qualified White male, Coloured female, and White female candidates. People with disabilities will also be given preference for appointment. 
 
All interested applicants should forward their application letters, together with a detailed CV and copies of qualifications to recruitment@hpcsa.co.za by quoting relevant job title in the subject column. 
 
N.B Failure to attach required copies will result in your application not being considered.

 
The HPCSA will ensure that in Processing an Applicant’s or Employee’s Personal Information, it will adhere to its obligations in terms of POPIA. By virtue of you applying for this position, you grant HPCSA the consent to keep and or process your information as per POPIA”. 
 
HPCSA reserves the right not to make any appointment to this position. 
 
Closing date: 04 September 2024 
 
If you have not heard from us within 30 days of the closing date of the application, please consider your application as being unsuccessful. Communication will be with shortlisted candidates only.`],postedDate:"26/8/2024",iframe:"",uuid:"pdb3bcc8b-0330-40b3-86e6-822f9b7a04d9"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/housing-development-agency-hda_orig.jpg",href:"https://www.govpage.co.za/housing-development-agency-hda-vacancies-blog/housing-development-agency-hda-vacancies8719088",title:"HOUSING DEVELOPMENT AGENCY (HDA) VACANCIES",content:[` 
HOUSING DEVELOPMENT AGENCY (HDA)
 
The Housing Development Agency (HDA) is a national public sector development agency that inter alia has the mandate to identify, acquire, prepare, and develop suitable land for human settlements. The agency also undertakes the programme and project management for development of housing and human settlements. The HDA carries out its functions in partnership with a range of stakeholders including national, provincial, and local government as well as with communities, developers, and financiers. Established in 2009, the Agency was established by an Act of Parliament in 2008 and is accountable through its Board to the Minister of Human Settlements.
For more information about the HDA, please visit our website: www.thehda.co.za
Follow us on X @the_hda and on Facebook: The Housing Development Agency.
LinkedIn @The Housing Development Agency
 `,`The HDA has the following positions: Three (3) years Fixed Term contract position:
 
CHIEF ENGINEER
Location: HDA Offices Western Cape – Cape Town
Reporting Line: Provincial Manager
Ref: HDACEWC02
 
Main Purpose: To perform and manage all aspects of varied innovative and complex engineering activities that result in progress in technology and engineering applications and provide strategic direction in the process for human settlement development.
 
Key Performance Areas:
1. Project Planning and Design
Carry out technical and feasibility studies and draw up blueprints that satisfy technical specifications of projects.
Analyze survey reports, maps, drawings, blueprints, aerial photography, and other topographical or geologic data to plan projects.
Develop and design systems and structures, in line with built environment standards, using design software and drawing tools.
Conduct on site investigations and analyze data (maps, reports, tests, drawings and other).
Assess potential risks, materials and costs
Provide advice and resolve creatively any emerging problems/deficiencies
Estimate quantities and cost of materials, equipment, or labour to determine project feasibility.
Manage the planning and implementation of Human Settlement Development projects undertaken by the Provincial Department of Human Settlements which includes the following:
Plan and develop new housing and infrastructure projects to be implemented by the Provincial Department of Human Settlements.
Oversee construction and on-going monitoring and evaluation of projects planned and implemented by the Provincial Department of Human Settlements.
2. Project Development and Management
Inspect project sites to monitor progress and ensure conformance to design specifications and safety
or other construction development standards.
Provide technical advice regarding design, construction, or program modifications and structural repairs to the technical team.
Monitor progress and compile reports in project status.
Resolve design and development problems.
Assess the sustainability and environmental impact of projects.
Ensure projects run smoothly and structures are completed within budget and on time.
Hand / oversee the handing over process of the completed structures and services for use.
Inspect project sites to monitor progress and ensure conformance to design specifications and safety.
Direct construction, operations, and maintenance activities at project site.
Estimate quantities and cost of materials, equipment, or labor to determine project feasibility.
Prepare or present public reports, such as bid proposals, deeds, environmental impact statements, and property and right-of-way descriptions.
Management of complex infrastructure development and construction projects from inception to full life circle.
Interpret test soil results of materials to determine the adequacy and strength of foundations, concrete, asphalt, or steel.
Provide technical advice regarding design, construction, or program modifications and structural repairs to industrial and managerial personnel.
3. Compliance Management
Ensure that service providers comply with stated service level agreements and contractual obligations
Provide timely feedback to Western Cape Department of Human Settlements management regarding any contractual transgressions that may occur during projects implementation.
Ensure implementation of projects are within established policies, systems, procedures, processes and practices.
Provide advice and assistance to others in order to ensure their compliance with policy, governance procedures, as well as industry standards.
Identify areas of non-compliance and implement corrective action.
 
Qualifications & Experience
Must be registered with ECSA as a Professional Engineer (Pr. Eng.)/Professional Technologist (B-Tech).
Professional registration is a requirement.
12-15 years’ experience in large scale-built environment, human settlements projects is required.
At least 5 years’ experience in development management and development contract management is required.
Must have knowledge of Contract Management (NEC/ GCC/ FIDIC/ JBCC)
 
Remuneration Scale: R807 700-R1 050 000 per Annum (all-inclusive package)
 
Closing date for applications is 30 August 2024
 
To submit your application, please send an email HDARecruitRegAWC@thehda.co.za
 
When submitting your application for a position, please adhere to the following:
1. CVs received after the closing date will NOT be considered.
2. The Job Title and Reference number for the relevant position must appear in the subject line of your application.
3. The CV must be in PDF format.
4. Certified copies of all qualifications must be provided.
5. Certified copies of identity document must be provided.
6. Two contactable references must be provided.
 
Kindly take note if you have not been contacted within twenty-one (21) working days of the closing date; please consider your application unsuccessful. Should you not comply with the above requirements your application will NOT be considered.
 
Conditions of service: The HDA is an equal opportunity employer, Appointments will be made in accordance with the HDA Employment Equity policy, The HDA reserves the right not to make an appointment. We thank all applicants for their interest.

 
Communication will be conducted with short-listed applicants only.
 
The HDA operates in accordance with the Protection of Personal Information Act 3 of 2013 (“POPI Act”), and by submitting your personal information to the HDA (by way of application and/or providing any other documentation as may be required during the recruitment process), you agree that the HDA may utilise and process your personal information in accordance with the POPI Act.`,`The HDA has the following Three year Fixed-term contract position:
 
SCM OFFICER
Location: Head Office
Reporting Line: Manager SCM
Reference: HDASCMO02
Main Purpose: To provide administrative support to the SCM unit.
 
Key Performance Areas:
1. Order Management
Daily management of procurement to pay process for all provinces.
Receive and assess requisitions with the purpose of determining the procurement strategy to be used.
Issue and place request for quotations in the relevant media and HDA website.
Evaluate supplier offers in line with the Preferential Procurement Policy framework Act and the HDA. Supply Chain policies and procedures.
Identify and analyse commodities with the objective of creating contracts.
Expediting on outstanding orders.
Compile monthly purchase order reports.
Report on savings, cost reduction and avoidance.
Keep all documents (Requisitions, quotations and orders) together for filing purposes.
Provide support to HDA staff in the interpretation, implementation and procurement policy for purchases under R1 million.
2. RFX Management
Place adverts in appropriate media for the required time period.
Preparing, issuing of RFX documents.
Receive and register RFX documents.
In conjunction with user departments, evaluate supplier offers and recommend
Provide guidance to the end users in terms of the RFX procedures.
Confirm SLA’s are in place prior to formal appointment where applicable (i.e. services).
Compile and prepare SCM report after evaluation of bids.
3. Vendor Management
Coordinate the loading and updating of vendors into the Sage 300 system.
Manage the rotation of vendors.
Report on non-performance by vendors.
Compile monthly report in terms of contracts, purchase orders and BBBEE spend.
4. Contract Maintenance
Verify documents received against contract checklist.
Follow-up on outstanding contracts and all relevant documentation.
Report on contracts that are about to expire and action taken.
Update contract register.
Safekeeping ad filing of contracts.
Draft standard contracts for approval.
Loading of approved contracts on ACCPAC.
5. Bid Committees Administration
Compile BAC packs after evaluation of BCA packs.
Manage the timeous distribution of BAC packs.
Reviewing the terms of reference for approval.
Minutes taking at BSC if required.
6. Administration and Filing
Assist with the updating of the HDA website with all adverts, calls for proposals and proposal awards.
Monitor movement of contracts.
 
Qualifications & Experience
National Diploma in Purchasing / Logistics.
3 years SCM experience.
Competent in MS Outlook, Excel intermediate, PowerPoint intermediate and Word intermediate
Competent at ACCPAC
Good communication, analytical and administrative skills.
Knowledge of PFMA, PPPFA and National Treasury Regulations, Broad Based Black Economic Empowerment (BBBEE).
 
Remuneration Scale: R394 200 to R492 750 per annum (all inclusive package)
 
Closing date for applications is 29 August 2024.
 
To submit your application, please send an email HDARecruitSCM@thehda.co.za
 
When submitting your application for a position, please adhere to the following:
1. CVs received after the closing date will NOT be considered.
2. The Job Title and Reference number for the relevant position must appear in the subject line of your application.
3. The CV must be in PDF format.
4. Copies of all qualifications must be provided.
5. Copies of identity document must be provided.
6. Two contactable references.
 
Kindly take note if you have not been contacted within twenty-one (21) working days of the closing date; please consider your application unsuccessful. Should you not comply with the above requirements your application will NOT be considered.
 
Conditions of service: The HDA is an equal opportunity employer, Appointments will be made in accordance with the HDA Employment Equity policy and priority given to people living with disabilities and females, The HDA reserves the right not to make an appointment.
We thank all applicants for their interest.
Communication will be conducted with short-listed applicants only.
 
The HDA operates in accordance with the Protection of Personal Information Act 3 of 2013 (“POPI Act”), and by submitting your personal information to the HDA (by way of application and/or providing any other documentation as may be required during the recruitment process), you agree that the HDA may utilise and process your personal information in accordance with the POPI Act.`],postedDate:"26/8/2024",iframe:"",uuid:"pc35d782a-4f25-4850-b804-bee09c3b222f"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/hsrc_orig.gif",href:"https://www.govpage.co.za/human-science-research-council-hsrc-vacancies-blog/human-science-research-council-hsrc-vacancies7022760",title:"HUMAN SCIENCE RESEARCH COUNCIL (HSRC) VACANCIES",content:[` 
HUMAN SCIENCE RESEARCH COUNCIL (HSRC)
 `,` 
 
 
CHIEF RESEARCH SPECIALIST/ MANAGER
 
Details
Closing Date 2024/09/30
Reference Number HSR240802-1
Job Type Permanent
Job Title CHIEF RESEARCH SPECIALIST/ MANAGER
Business Area Development, Capable and Ethical State - DCES
Department DCES
Number of Positions 2
Workplace Type Hybrid
Location - Town / City Pretoria or Cape Town
Location – Province Gauteng, Western Cape
Location – Country South Africa
Minimum Education Level NQF 10 - PhD Degree or equivalent
Application Closing Date 30-Sep-2024
Job Category Education
 
Job Advert Summary
The Developmental, Capable and Ethical State (DCES) is a research division within the HSRC that employs a multi-disciplinary group of social scientists who conduct numerous empirical and policy-related studies.
 
The DCES division is looking to appoint a suitably qualified professional in the position of Chief Research Specialist. This position supports and assists the Divisional Executive and the Strategic Leads in implementing the five-year strategic plan of the HSRC. The Developmental, Capable and Ethical State (DCES) division conducts transdisciplinary, intersectional, policy and programme-relevant research. The two over-arching questions that guide the research interventions are:
How to strengthen democracy through transparent governance, accountable leadership and reinvigorated public participation and civic engagement; and
How to ensure sustainable development through peace, human and social security
A developmental, capable and ethical state is not possible without ensuring peace and sustainable security within South Africa and beyond its borders. In order to work towards a more socially cohesive citizenry and safer and resilient communities, it is necessary to focus on building a “better South Africa, a better Africa and a better world.”
 
Minimum Requirements
A doctorate (PhD) in the social or economic sciences or related disciplines;
An established research career, as evidenced by publications.
At least six years’ experience post qualification coupled with 12 or more peer-reviewed publications, of which several to be international;
Excellent writing skills necessary for publication in internationally accredited peer-reviewed academic journals, and for drafting briefing papers and reports;
Record of raising funds for research. Applicants applying for the CRS/M position should have larger fundraising experience;
An interest in one of the priority research areas of DCES will be an advantage;
A sound grounding in research methods, especially quantitative approaches, will be a strong recommendation;
The versatility to apply quantitative and qualitative methodologies to challenging subject matter across disciplinary boundaries will be advantageous
Intellectual and personal integrity, imagination and drive;
A strong user orientation, based on a commitment to social research that makes a difference;
The ability and enthusiasm to engage as a team player in large-scale multidisciplinary research projects, to manage research teams, and to mentor and train team members.
Communicate research findings through modalities like policy briefs;
Publish in refereed journals;
Build national and international research links; and
Manage staff and build capacity within the division.
 
Duties & Responsibilities      
Conducting high level scholarly research which meets the challenge of peer review, and has both strategic and policy relevance;
Responding to requests for tenders and formulating grant applications;
Managing research teams and large-scale, long-term research projects;
Proposal writing to secure external funds;
Mentor fellow employees and emerging researchers;
Deliver high-quality results and reports to meet set budgets and deadlines;
Network with major users and funders of social science research to understand their research needs;
 
Policy
In delivering 'social science that makes a difference' in South Africa and the region, the Research Programmes of the Human Sciences Research Council initiate and undertake policy-oriented research projects and programmes from its offices in Cape Town, Durban, Pietermaritzburg and Pretoria. Its public-purpose mandate is set out in the Human Sciences Research Council Act No.17 of 2008.
The HSRC aims to attract and retain high-calibre skills and human resources necessary to effectively execute both its mandate to conduct research and to support the strategic intent of the organisation.
The HSRC is committed to accelerating the improvement in the proportion of South African Citizens who are black, female, or disabled towards achieving Equity goals.
The HSRC reserves the right not to make an appointment.
Application from recruitment agencies will not be accepted.
 
PLEASE APPLY HERE
 
 
 
 
 `,`CHIEF RESEARCH SPECIALIST
 
Details
Closing Date 2024/09/20
Reference Number HSR240821-2
Job Type Permanent
Job Title Chief Research Specialist
Business Area Public Health, Societies and Belonging - PHSB
Department PHSB
Number of Positions 3
Workplace Type Remote
Location - Town / City Pretoria and Cape Town
Location – Province Gauteng, Western Cape
Location – Country South Africa
Minimum Education Level NQF 10 - PhD Degree or equivalent
Application Closing Date 20-Sep-2024
Job Category Education
 
Job Advert Summary
The Public Health, Societies and Belonging research division within the HSRC employs a multi-disciplinary group of social scientists and public health specialists who conduct numerous empirical and policy-related studies each year, three-quarters of which are donor-funded.  The Public Health, Societies and Belonging division conducts transdisciplinary, intersectional, policy and programme-relevant research to improve health, well-being and promote a socially just and cohesive society.
 
PHSB has offices in Pretoria, Cape Town, Pietermaritzburg and Durban. The division seeks to appoint two Chief Research Specialists to join a dynamic team of researchers in the HSRC community. The incumbent will be based in one of the HSRC offices.

 
CHIEF RESEARCH SPECIALIST (Pretoria, Durban or Cape Town)
3 post-permanent
Reference: CRS PHSB 2024
 
The PHSB programme seeks to appoint a dynamic individual with either a Ph.D. in either Social Science, Public Health, Biostatistics or Epidemiology as well as 10 years of appropriate research experience. The vacancy is in the Identity and Belonging sub-unit, in Pretoria, or Cape Town and the appointment will be made in January 2025
 
Minimum Requirements
A Doctorate in Social Sciences, Epidemiology, Biostatistics or Public Health with at least 10 years of experience in research;
An established research career as evidenced by publications in peer-reviewed journals or project reports (12+ publications);
Strength in epidemiological research methods and design;
Research experience in gender studies, GBV, mental health, tuberculosis and/or HIV, or NCDs;
An interest in one of the priority research areas of PHSB will be an advantage
A sound grounding in research methods, especially quantitative approaches, will be a strong recommendation;
Intellectual and personal integrity, imagination, and drive;
A strong user orientation, based on a commitment to addressing public health issues;
The ability and enthusiasm to engage as a leader and team player in large-scale multi-disciplinary research, to lead and manage research teams, and to mentor and train their members;
The versatility to apply quantitative and qualitative methodologies to challenging subject matter across disciplinary boundaries will be advantageous;
Ability to work independently and in a team environment;
Good communication and leadership skills; 
An excellent networking and fundraising track record;
Sound knowledge of quantitative data management and data analysis skills;
Proficiency in or working experience with some of the following data software packages:  STATA, Epi Info, SPSS, Nvivo, AtlasTI or other relevant statistical packages;
 
Duties & Responsibilities
The Chief Research Specialist will be expected to participate in all aspects of the research process as he/she works with staff on research projects. In addition to the responsibility to publish journal articles, a Chief Research Specialist will contribute to the sustainable growth of the PHSB Research Programme.
Leading and conducting high level scholarly research using quantitative and qualitative methodologies which meet the challenge of peer review, and has both strategic and policy relevance;
Networking with major users and funders of Public Health research to understand their research needs;
Responding to calls for proposals and formulating grant applications;
Delivering high-quality results and reports to budget and deadline;
Communicating research findings in national and international conferences, publishing papers in refereed journals as well as publishing policy briefs and technical reports
Building national and international research links;
Liaise with stakeholders on issues regarding project and fieldwork;
Support biomedical aspects of projects;
Ability and willingness to mentor young researchers is also a key requirement;
Contribute to all the Key Performance Areas and Key Performance Indicators of the HSC Research Programme.
 
Policy
In delivering 'social science that makes a difference' in South Africa and the region, the Research Programmes of the Human Sciences Research Council initiate and undertake policy-oriented research projects and programmes from its offices in Cape Town, Durban, Pietermaritzburg and Pretoria. Its public-purpose mandate is set out in the Human Sciences Research Council Act No.17 of 2008.
The HSRC aims to attract and retain high-calibre skills and human resources necessary to effectively execute both its mandate to conduct research and to support the strategic intent of the organisation.
The HSRC is committed to accelerating the improvement in the proportion of South African Citizens who are black, female, or disabled towards achieving Equity goals.
The HSRC reserves the right not to make an appointment.
Application from recruitment agencies will not be accepted.
 
PLEASE APPLY HERE`,`RESEARCH DIRECTOR
 
Details
Closing Date 2024/09/20
Reference Number HSR240821-1
Job Type Permanent
Job Title Research Director
Business Area Africa Institute of South Africa - AISA
Department AISA
Number of Positions 1
Workplace Type Hybrid
Location - Town / City Pretoria
Location – Province Gauteng
Location – Country South Africa
Minimum Education Level NQF 10 - PhD Degree or equivalent
Application Closing Date 20-Sep-2024
Job Category Education
 
Job Advert Summary
The Africa Institute of South Africa in the HSRC wishes to appoint a suitable Research Director. AISA leads and coordinates the HSRC’s engagements in Africa. It, therefore, acts as a catalyst for research and implementation support across the continent.  AISA also undertakes basic, applied policy-relevant and comparative research. The Institute also seeks to build capacity and provide policy advice and implementation support to advance the HSRC’s own Africa Research Partnership and Collaboration Strategy as well as South Africa’s African Agenda, DSI’s Africa Strategy, SADC’s Regional Indicative Strategic Development Plan 2020-2030 (RISDP), the African Union’s Agenda 2063, and the key frameworks of the United Nations (SDG’s, UNSCR 1325). It collaborates with a range of national, continental, and international governments, as well as multilateral institutions, research institutes, universities, and civil society organisations in order to achieve its objectives.
 
This appointment will be made on the 1st of January 2025
 
Minimum Requirements
A Ph.D. degree in either the social sciences or humanities or a related field in a relevant subject pertinent to the study of Africa.
An academic leader with a strong record of published research not less than 20 publications of which several must be international peer-reviewed journal articles
Ten years of senior research leadership and people and business management experience of which 5 years should be on the Director or equivalent level, i.e., at the Associate professor or Professor level. 
Fundraising and large-scale research project management.
Good networking skills and experience in working with senior policymakers;
Research interests and experience in working on the study of Africa;
The versatility to apply qualitative and/or quantitative methodologies to challenging subject matter across disciplinary boundaries will be advantageous;
Proficiency in or working experience with some of the following data software packages: STATA, Epi Info, SPSS, Nvivo, AtlasTI or other relevant statistical packages;
A track record of experience in conducting large-scale comparative studies.
Intellectual and personal integrity, imagination, and drive.
The ability to lead multidisciplinary research teams.
Ability to work well under pressure and deliver to tight deadlines; and
Excellent computer literacy
Fluency in more than one of the major languages spoken on the continent would be an additional commendation.
 
Duties & Responsibilities
Lead, and manage the research activities of AISA in the context of the HSRC’s mission and strategic goals;
Develop research proposals that are in line with the programme’s research agenda. This may include working with other units within both AISA and HSRC as well as collaborate with external researchers both within South Africa, in the rest of the African continent and elsewhere throughout the world;
Write and publish research reports and publish research findings in accredited peer-reviewed international and local journals;
Lead policy-related research, analyse data, interpret and report research findings and recommendations in high-level forums;
Co-ordinate communication about research activities with members of the programme, the research team, the clients, and other stakeholders;
Develop contacts and interact with policymakers outside the HSRC;
Support the development of spatial information, its analysis and dissemination;
Oversee the meeting of project deadlines together with the relevant project managers;
Ensure adequate staffing of the institute, including ensuring that staff are supported, mentored and managed and that they act within the delegated authority parameters of the organisation; and
Build and maintain high-performance teams and an appropriate culture within the area of responsibility to ensure the achievement of the institute and organisational targets.
Ensure adherence to and compliance with applicable legislation/regulations/HSRC policies, procedures, and expectations of other regulatory and funding agencies;
 
 
Policy
In delivering 'social science that makes a difference' in South Africa and the region, the Research Programmes of the Human Sciences Research Council initiate and undertake policy-oriented research projects and programmes from its offices in Cape Town, Durban, Pietermaritzburg and Pretoria. Its public-purpose mandate is set out in the Human Sciences Research Council Act No.17 of 2008.
The HSRC aims to attract and retain high-calibre skills and human resources necessary to effectively execute both its mandate to conduct research and to support the strategic intent of the organisation.
The HSRC is committed to accelerating the improvement in the proportion of South African Citizens who are black, female, or disabled towards achieving Equity goals.
The HSRC reserves the right not to make an appointment.
Application from recruitment agencies will not be accepted.
 
PLEASE APPLY HERE`],postedDate:"26/8/2024",iframe:"",uuid:"p41129529-58bd-4649-a753-e6ba0a7bd667"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/icasa_orig.png",href:"https://www.govpage.co.za/independent-communications-authority-of-south-africa-icasa-vacancies-blog/independent-communications-authority-of-south-africa-icasa-vacancies9220849",title:"INDEPENDENT COMMUNICATIONS AUTHORITY OF SOUTH AFRICA (ICASA) VACANCIES",content:[` 
INDEPENDENT COMMUNICATIONS AUTHORITY OF SOUTH AFRICA (ICASA)
350 Witch-hazel Avenue, Eco Point Office Park Eco Park, Centurion. Private Bag X10, Highveld Park 0169 
 `,`REGULATORY & LEGISLATIVE DRAFTING SPECIALIST 
JOB LEVEL : D1 
SALARY RANGE : Total Annual Package (CTC) R728,429.00 - R856,975.00 
LOCATION : ICASA (Head Office – Eco Park, Centurion) 
POSITION STATUS : Permanent 
 
Purpose of the job 
To ensure that ICASA adheres to administrative due process in making its decisions; to ensure that ICASA develops lawful, implementable regulations that are both substantively and administratively fair; and to ensure that ICASA executes its regulatory mandate within the parameters of the law. 
 
Key Outputs: The successful candidate will report to the Senior Manager: Regulatory & Legislative Drafting and their responsibilities will include:● Provide legal guidance to Council (incl. Council committees) in executing their functions in terms of the ICASA Act ● Provide legal advice to Council, CEO, COO, EXCO/OPCO and Regulatory divisions on regulatory matters ● Draft regulations and regulatory documents/notices ● Monitor and provide input, where necessary, regarding draft legislation that may have an impact on ICASA ‘s mandate ● Represent ICASA at national & international meetings and forums ● Perform Compliance and Risk Management functions ● Draft Memorandums of Understanding (MoU) with local and international regulatory authorities (incl. International bilateral agreements) ● Conduct training, workshops or presentations on topical regulatory legal matters. 
 
Qualifications and Experience: ● Honours/4 year degree in Law (NQF Level 8) ● Admitted Attorney/Advocate ● Minimum 3 years managerial experience ● Minimum 5 years professional experience ● Minimum 6 years work experience ● Minimum 4 years’ post-admission experience, alternatively minimum 3 years post-admission experience with not less than 1 year experience in ICT regulatory ● Proven track record with handling litigation and drafting contracts/legislation ● Solid regulatory/ICT acumen (distinct/added advantage). 
 
Key Competencies and Attributes: ● Results driven and ability to work independently ● Innovative approach to the drafting of legislation, reasons documents, findings documents ● Memorandums of Understandings (national & international), ● International/national bilateral agreements and other regulatory documents ● Able to work and make decisions under pressure ● Solid interpersonal skills ● Excellent Communicator (written and verbal/ presentation skills) ● Resilience and influential ● Knowledgeable in Administrative Law ● Knowledgeable in Interpretation of Statutes ● Legislative Drafting experience ● Solid drafting skills ● Proven track record in building collaborative relationships. 
 
 
Closing Date: 04 September 2024 
 
APPLICATIONS FOR THIS POSITION MUST BE SUBMITTED VIA https://www.icasa.org.za/pages/Careers
Any enquiries regarding this position should be directed to careers@icasa.org.za
 
NB: The email address provided above should be used for enquiries only. 
Applications sent by email will NOT be considered. 
 
FOR EASY ACCESS TO THE SYSTEM DURING THE APPLICATION PROCESS, CANDIDATES ARE ENCOURAGED TO USE A LAPTOP OR A DESKTOP ON CHROME OR MICROSOFT EDGE WEB BROWSERS
 
ICASA is committed to the achievement and maintenance of diversity and equity in employment 
If you do not hear from us within three months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. 
It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
It is also the responsibility of the applicant to obtain evaluation and certification of the Recognition for Prior Learning (RPL). 
Only candidates who meet the requirements should apply. 
ICASA reserves the right not to make an appointment. 
ICASA actively pursue the sourcing of persons with disabilities. 
Appointment is subject to getting a positive security clearance, verification of the applicants’ documents (Qualifications), and reference checks. 
Correspondence will be entered into with shortlisted candidates only. 
CVs from Recruitment Agencies will not be accepted.`,`SPECIALIST: PLANNING MONITORING AND EVALUATION
JOB LEVEL : D3 
SALARY RANGE : Total Annual Package (CTC) – R997,147.00 - R1 173,114.00 

LOCATION : ICASA (Head Office- Eco Park, Centurion) 
POSITION STATUS : Permanent 
 
Purpose of the job 
The position is responsible for supporting Senior Manager: Strategy & Programme Management on all matters planning, monitoring and evaluation. It works with Programmes to ensure development of the organisational strategic, annual and operational plans in line with relevant government legislative frameworks, policies and guidelines. It monitors and reports on organisational performance against short, medium and long-term pre-determined objectives. It performs ex-ante, mid-term, end-term and impact evaluation of the organisation’s projects working with external service providers. It manages a range of organisational planning, monitoring and evaluation structures, systems, standards, management processes and accountability relationships which enable the Authority to discharge its performance planning, monitoring and evaluation responsibilities effectively. It promotes and inculcates high organisational performance culture in the field of planning, monitoring and evaluation through a number of capacity building initiatives for Programmes within the organisation. 
 
Key Outputs: The successful candidate will have a direct reporting line to the Senior Manager: Strategy & Programme Management and their responsibilities will include the following: ● Support the Senior Manager in the development of the organisational strategic plan ● Ensure that the strategic plan of the organisation is in compliance with all relevant government legislative prescripts (PSA, PFMA, RFSPAPP) ● Work closely with Risk & Compliance and Finance to ensure that all the outcomes risks and finance information necessary to complete the organisational strategic planning is incorporated ● Ensure proper alignment between the organisational Strategic Plan, APP and the OPP • Ensure that all the Programme outputs, baselines, targets (SMART) and Technical Indicators Descriptions are developed in line with the RFSAPP (Templates) and the FMPPI (Nomenclature) • Enable and co-ordinate divisional performance information reporting and assess the adequacy of information provided by verifying portfolio of evidence provided against performance reported • Ensure compilation of quarterly and annual performance information reports for a shared data environment and ensure that the reports are uploaded on the eQPRS after approval by all relevant approving organisational structures working together with Programme Coordinators • Perform all forms of relevant evaluations as prescribed by government’s legislative frameworks that can be used to inform future planning and determine and showcase the worth of the organisation’s projects in making a change in the lives of its target beneficiaries (Ex-ante, Mid-Term, End-Term and Ex-Post Implementation – Impact). 
 
Qualifications and Experience: Academic Degree (NQF Level 7) in Public Management, Economics, Commerce or equivalent ● Postgraduate studies in Monitoring and Evaluation methods will be an added advantage ● 3 years’ experience managing people or 4 years Specialist Experience ● 4 years’ experience in data collection techniques, data analysis and report writing ● Demonstrated practice in qualitative and quantitative evaluation methods ● Experience with management information systems and knowledge management platforms. 
 
Key Competencies and Attributes: Business Process Analysis ● Information and data analysis ● Analytical thinking ● Quality Management ● Customer Relationship Management ● Good computer literacy skills ● Ability to work under stressful situations ● Problem Solving and Decision Making ● Presentation ● Facilitation ● Coordination ● Assertiveness ● Self-driven ● Leadership ● Innovation and Creation ● Integrity ● Interactive communication ● Attention to Detail ● Decisiveness ● Teamwork ● Customer Services ● Self Confidence ● Report Writing ● Mentoring and coaching ● Knowledge of PFMA, DPME Revised Framework for Strategic Plans and Annual Performance Plans, National Treasury Framework for Managing Programme Performance Information, eQPRS and Programme Logic.
 
 
Closing Date: 04 September 2024 
 
APPLICATIONS FOR THIS POSITION MUST BE SUBMITTED VIA https://www.icasa.org.za/pages/Careers
Any enquiries regarding this position should be directed to careers@icasa.org.za
 
NB: The email addresses provided above should be used for enquiries only. 
Applications sent by email will NOT be considered. 
 
FOR EASY ACCESS TO THE SYSTEM DURING THE APPLICATION PROCESS, CANDIDATES ARE ENCOURAGED TO USE A LAPTOP OR A DESKTOP ON CHROME OR MICROSOFT EDGE WEB BROWSERS 
 
ICASA is committed to the achievement and maintenance of diversity and equity in employment. 
If you do not hear from us within three months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. 
It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
It is also the responsibility of the applicant to obtain evaluation and certification of the Recognition for Prior Learning (RPL). 
Only candidates who meet the requirements should apply. 
ICASA actively pursues the sourcing of persons with disabilities. 
ICASA is an equal opportunity employer. 
ICASA reserves the right not to make an appointment. 
Appointment is subject to getting a positive security clearance, verification of the applicant’s documents (Qualifications), and reference checks. 
Correspondence will be entered into with shortlisted candidates only. 
CVs from Recruitment Agencies will not be accepted.`],postedDate:"26/8/2024",iframe:"",uuid:"pd93927e4-d0cf-4cc5-8dfc-bfe5b46f3478"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/idc-logo_orig.jpg",href:"https://www.govpage.co.za/industrial-development-corporation-idc-vacancies-blog/industrial-development-corporation-idc-vacancies3265488",title:"INDUSTRIAL DEVELOPMENT CORPORATION (IDC) VACANCIES",content:[` 
INDUSTRIAL DEVELOPMENT CORPORATION (IDC)
 `,` 
 
SENIOR LEGAL ADVISOR
Job number IDC00362
Job Grade P-Band
Closing date 05-Sep-2024
 
Job Description
To provide sound, clear and accurate legal advice to mitigate the legal risks that the IDC is exposed to in its daily activities.
 
Qualification and Experience
Qualification
Law degree and Admission as an Attorney essential
Master’s degree such as LLM desirable
Knowledge & Skills 
A minimum of five years’ post-article experience in the financial services industry
2-3 years working experience in the banking and finance/SoE/DFI (restructuring, turnaround & business rescue) space is essential
Experience in the drafting, review, negotiation and re-negotiation of cross-border, project finance, corporate, commercial, structured and re-structured finance transactions
Understanding of the PFMA in particular its application to Schedule 2 SOEs, PFMA Treasury acquisition notifications, competition commission  acquisitions notifications, fund management/investment
 
Roles and Responsibilities
Provide general legal advice, including legal research
Structure, restructure, negotiate and re-negotiate corporate and commercial transactions including project finance and cross-border financing transactions
Identify, evaluate and structure import and export finance transactions
Ensure compliance with internal legal and other IDC procedures and policies
Identify and minimize potential legal risks
Draft, review, negotiate and re-negotiate financing agreements and other legal documentation
Make presentations and opine on legal and regulatory developments
Conducting legal due diligence investigations
Ensure efficiencies aimed at improving client satisfaction by providing efficient legal services 
Developing and maintaining relationships with providers of legal services (including, external legal counsels, business rescue practitioners and other key stakeholders)
Develop and maintain client and institutional relationships, internally, locally and internationally
 
Job Requirements
TECHNICAL/FUCNTIONAL COMPETENCIES
Sound corporate and commercial legal knowledge
Ability to work independently and within a team
Draft and negotiate loan agreements and other legal documentation
Transactional negotiations at senior level
Excellent analytical and problem-solving skills
Excellent communication and interpersonal skills
Independent judgement and good analytical skills
Capable of working in a high-pressured environment and can exercise independent judgement
Ability to prioritize and plan
Ability to independently provide guidance and timeous delivery on highly complex projects
Ability to coach and mentor juniors on areas of specialization
Good knowledge and understanding of international and local financing instruments
 

BEHAVIOURAL COMPETENCIES
Collaboration and Influence: The successful candidate is a senior person who will be highly visible and credible with key internal and external stakeholders and proactive in aligning risk strategies to address the business.
Leadership: This individual will possess excellent personal communication skills that engender credibility and confidence both inside and outside the IDC and a team-first mentality. Resourceful and a self-starter, the candidate will know how to make things happen through his or her people, while also being hands-on. The ideal candidate must have natural leadership abilities and be capable of crafting the vision and creating support from within.
Teamwork: A true team player. Supportive of his or her team, peers and others across the organisation. Contributes to an atmosphere in which people work together, enthusiastically and effectively, in producing outstanding results.
Results Oriented: Energetic, resourceful, sophisticated and savvy, with strong service orientation and positive “can-do” attitude. Fully committed to the job and to delivering outstanding work. Never satisfied with status-quo, continually striving for excellence. Enjoys working “hands-on”. Strong attention to detail.
 
 APPLY NOW
 
 
 
 
 
 `,` 
 
 
 
 
ANTI MONEY LAUNDERING CONTROL OFFICER
Job number IDC00361
Job Grade P-Band
Closing date 04-Sep-2024
 
Job Description
The Anti-Money Laundering Control Officer is responsible for assisting and supporting STRATEGIC BUSINESS UNITS/Departments in complying with all the anti-money laundering control legislation (e.g. FATF recommendations 40+9, POCA, PRECCA, FICA, POCDATARA) applicable to the IDC by developing the AMLC/PIP-PEP/Sanctions framework and procedures, facilitating the implementation, creating the required awareness, performing compliance reviews and reporting on level of compliance.
He/she will be responsible for designing, evaluating, supporting, and influencing a culture of compliance throughout the organization, as well as assisting in the management and execution of an efficient compliance monitoring program
 
Qualification and Experience
Qualifications:
•    LLB/ B. Com or equivalent qualification. 
•    Accredited or certified member of the Compliance Institute of South Africa (CISA).
•    A Certificate in Anti-Money Laundering Control.
•    CAMS Certification or a Certificate in Compliance Management will be an added advantage.
 
Knowledge and Experience:
•    At-least 5-8 years’ experience in anti-money laundering compliance management environment.
•    Sound experience in report writing and presentation skills.
•    Knowledge of  the Siron System will be an added advantage.
•    Experience developing and implementing compliance programs
 
Roles and Responsibilities
Assist in the development of compliance initiatives and programs to comply with the respective money laundering legal, licensing, and regulatory obligations
Handle the management and execution of second line monitoring and assessment program for Anti-Money Laundering/Counter-Terrorism Financing (AML/CTF)
Improve and maintain AML/CTF policies and procedures
Aid in the improvement of tools to monitor, analyse, and report suspicious activity
Handle file reviews of suspicious activity to ensure compliance with the policies and procedures put in place
Identify and inform of any changes to legislation and other regulatory requirements relating to AML/CTF
Aid in the design, development, and implementation of a risk assessment framework to support all customer interactions
Provide oversight to the operational team, which acts as the first line monitors and investigators of suspicious activity
Ensure consistent and timely feedback on cases that have been escalated
Liaise with management to develop investigative strategies
Develop and participate in compliance programs and initiatives
Provide relevant compliance reporting to ensure the completion and proper analysis of suspicious activity reports that have been conducted
Ensure detailed and prompt investigation of all AML/CTF incidents and cases
Help with identifying any AML/CTF loopholes and coordinating projects to bridge those gaps
Develop and execute face-to-face / virtual training for staff in various business units as required
Aid in general compliance awareness and refresher training
 
Job Requirements
TECHNICAL/FUNCTIONAL COMPETENCIES
•    Team player with the ability to work unsupervised
•    Exceptional analytical and investigative skills
•    Strong project management skills
•    Willingness to work on various compliance issues

•    Must be able to adapt to working in a fast-paced environment
•    Excellent verbal and written communication skills
•    Exceptional presentation skills
•    Strong organization skills and attention to detail 
•    Stakeholder Engagement Skills
•    Negotiating and Influencing
    
 BEHAVIOURAL COMPETENCIES
•   Attention to detail. 
•   Highly Ethical and integrity. 
•   Good Communication skills
   
APPLY NOW
 
 
 
 
 `,` 
 
 
 
 
 
SENIOR ASSOCIATE- GROWTH CATALYST
Job number IDC00358
Job Grade M Band
Closing date 01-Sep-2024
 
Job Description
To implement and maintain portfolio management of the equity market portfolios, obtaining the most value through the development and implementation of value creation plans and relationship building, to achieve sustained growth and maximized profitability for the business partner which will result in the IDC partaking in the benefit realization.
 
Qualification and Experience
Qualifications:
Post graduate degree in commerce or engineering (with exposure to finance) discipline
MBA/MBL/CFA or CA (SA) would be an added advantage.
Knowledge and Experience
The candidate should at least have 8 to 10 years of relevant experience in post investment monitoring or portfolio management.
Experience in a private equity environment will be an added advantage.
Experience working in Portfolio Management environment for a financial institutions
Experience working in a high-level collaborative environment.
Ability to manage multiple competing priorities while building effective relationships.
Thorough understanding of developing Value Creation activities
Extremely organized and persistent, with drive and determination to achieve goals.
Experience in due diligence, drawdowns and exit process of investments is essential.
Strong financial management covering financial analysis and financial modelling
Prior experience in the manufacturing, tourism and Agro sectors will be an added advantage.
 
Roles and Responsibilities
Post investment and portfolio monitoring and management of allocated portfolio of complex and technical business partners.
Working closely with business partners in identify areas for growth and value creation, crafting and monitoring the implementation of the value creation plans of the investee companies.
Conduct regular business partner reviews including client visits and assigning of risk rating, and risk staging to business partners.
Periodically conduct fair values of equity investments and impairment reviews in accordance with the approved IDC guidelines and policies on allocated portfolio of complex, technical and high value business partners.
In collaboration with the business partner management team, define KPI’s and design dashboards to collect data for progress monitoring of such KPI’s.
Frequent collection of data for monitoring of VC Plans and reformulating the strategic initiatives if / when required.
Build sound relationships with business partner management teams and board through regular visits to business partners.
Ensure value creation plans are crafted to generate revenue growth and contain and manage costs in order to improve EBIT.
Proactively identify early warning signals and initiate appropriate intervention processes where necessary, exercising step-in rights early to limit potential losses.
Provide non-financial value add to business partners through access to connections and resources, providing market insights and proprietary insights required to assist the Business Partner to grow – opportunity to utilize the services of Capability Sourcing in such instances.
Monitor strategic initiative through data insights, dashboards and reports to identify deviations from agreed plans and take appropriate action.
Collaborate with Business Units to obtain expert insights relative to specific Business Partner sectors.
Assisting with IDC cashflow management (including input of timeous collections encompassing accurate forecasting of collections measured against actual performance).
Implement and manage a process for forecasting Business Partner dividend payments and future projections and variants on dividend income to determine contribution to IDC funding.
Obtain/Research and analyze market, industry, and financial reviews to gain insights and trends to identify growth opportunities and areas of concern.
Ensure that all necessary amendments to contracts during the life span of the business partner are adequately executed.
Monitor and timeously report on undrawn facilities on the allocated portfolio of business partners.
Ensure that all exits processes i.e., early settlement, IRR and other calculations and release of security on allocated portfolio of business partners are properly executed.
Promptly monitor all payments due to IDC including interest, capital, dividends, fees etc. on allocated portfolio of business partners
Analyze financial information from allocated business partners on a regular basis and assess the need for initiating intervention based on the analysis.
Work closely with the boards and management teams of the investee companies to ensure that the business partners under management are profitable.
Monitor and evaluate that proper governance structures exist and are being applied.
Work collaboratively with members of the IDC teams to ensure that the investee companies under management achieve their stated targets and forecasts
Prepare portfolio reports as and when required on the portfolio under management.
Provide continuous technical guidance to fellow team in all key areas of their responsibilities.
 
Job Requirements
TECHNICAL COMPETENCIES
• Value Creation Planning
• Portfolio Management
• Analytical/Diagnostic Skills
• Financial Analysis
• Financial modelling
• Business/Commercial Acumen
• Client Insights & Focus
• Formulating strategies and concepts
• Report writing Skills.
• Project Management Skills
• Problem Solving
• Creating & Innovating
BEHAVIOURAL COMPETENCIES
• Good Communication Skills
• Self-motivated
• Coping with Pressures and Setbacks
• Negotiating & Influencing
• Deciding and initiating.
• Stakeholder Management
• Planning and organizing
 
APPLY NOW
 
 
 
 
 `,` 
 
 
 
 
SENIOR ACCOUNT MANAGER LEVEL 1
Job number IDC00355
Job Grade M Band
Closing date 31-Aug-2024
 
Job Description
To assist with management of various processes including to evaluate, prepare and present applications for funding that contribute towards the Department objectives and the various funding Programmes’ development goals. This would include performing the financial and/or technical and/or marketing due diligence functions for individual and cluster applications, structuring of the facilities and ensuring risk identification and mitigation. To pro-actively provide value-adding and strategic advice, support and guidance to the Programmes and relevant stakeholders.
 
Qualification and Experience
QUALIFICATIONS:
Minimum qualification: relevant commercial honours degree
An additional qualification for e.g. CA, MBA/MBL would be an advantage.
KNOWLEDGE & EXPERIENCE:
8-10 years related experience of which 8 years should be in deal assessment as well as closing of transactions
Declared competent or working towards three due diligence disciplines (Marketing, Technical and Financial)
Knowledge in assessing all associated issues in a transaction (Legal, risks, etc.)
Experience in peer reviews
Experience in complex financial modeling and interpretation thereof
Experience in interpretation and analysis of financial statements
Knowledge of the process and assessment of the market environment and technology landscape
Knowledge of financing instruments (i.e. grants and concessional funding structures)
Understand review and assessment of feasibility of models of proposed financial structures
Experience in presenting applications for approval to investment committees
Negotiation of legal agreements and implementation thereof
Competent in coaching and mentoring of team members.
 
Roles and Responsibilities
 
Financial / Shareholder Returns
Ensure financial soundness of all credit submissions.
Ensure financial and developmental reporting to stakeholders are timeous and accurate.
Develop/input into financial models
Internal / Operational Processes
Manage end-to-end application and submission process
Evaluate applications for finance (financial, technical and marketing disciplines)
Conduct and/or manage due diligence on applications in line with the Department’s Standard Procedures.
Designing and negotiating the financial and legal relationship between the client and IDC for the specific deal.
Risk identification and mitigation
Deal optimization - ensuring that the deal is aligned with the strategic objectives of the Department and will contribute to meeting industry development goals
Support the development and implementation of strategies or action plans to drive the Department’s strategic objectives.
Account management function up to first drawdown
Prepare well written and motivated reports for presentation to the relevant approval Panel and any other Panel as may be required.
Conduct peer reviews on all due diligence disciplines.
Monitor deals post implementation i.r.o reporting, M&E and any other information that may be required by the Department.
Training, mentoring and coaching of Account Managers
Provide guidance to Business Analysts and Dealmakers in the handling of enquiries, applications and submissions and post-investment activities. 
Customer Focus & Stakeholder Management
To engage with applicants effectively and timeously during application and approval process.
To effectively interact with different SBUs and departments in order to fulfil the process requirements related to any specific deal / transaction.
Manage and enhance the levels of service and communication to ensure the provision of client service excellence.
Learning, Leadership & People Growth
Provide team leadership in transactions during due diligence
Manage own development to enhance own competencies
Participate in knowledge sharing in the team and cross functional
Coaching and mentoring of team members
 
Job Requirements
TECHNICAL/FUNCTIONAL COMPETENCIES:
Financial acumen
Risk identification and mitigation
Investment/Portfolio Management
Stakeholder Management and customer focus
Planning and organising
Report writing skills
 
BEHAVIOURAL COMPETENCIES:
Presentation and communication skills
Negotiation skills
Relationship Building and Networking skills
Persuading and Influencing skills
Coaching and Mentoring
Leading and Co-ordinating
 
APPLY NOW
 
 
 
 
 
 `,` 
 
 
 
 
SAICA TRAINEE ACCOUNTANT
Job number IDC00353
Job Grade S Band
Closing date 30-Sep-2024
 
Job Description
The purpose of the CA Learnership is to present potential Chartered Accountants to serve articles within the Corporation. Formal training through practical experience and a structured program is provided and at the same time, IDC contributes to the provision of future high-level qualified CA manpower requirements of the country in general as outlined in the National Development Plan:
To develop a talent pipeline of Chartered Accountants for the core business areas within IDC
To create opportunities for unemployed graduates with the required qualifications to develop competencies in the IDC environment.
To grant graduates an opportunity to network with professionals and learn about the different career paths that are available in the corporation.
To Develop the necessary range and depth of experience and cultivate future business leaders
 
Qualification and Experience
QUALIFICATION:
To qualify for the learnership you will have to have completed or enrolled in one of the following SAICA-accredited programs looking to enrol for ITC in January 2025:
Certificate in Theory of Accounting (CTA),
Post Graduate Diploma in Accounting
Honours Degree in Accounting.
Job Requirements
 
TECHNICAL COMPETENCIES:
In-depth knowledge of the respective field of study.
Sound knowledge about the Industrial Development Corporation
MS Office: Excel, Word, PowerPoint, Outlook, MS Teams
Ability to liaise effectively at a high level
 
BEHAVIOURAL COMPETENCIES:
Is proactive and forward-thinking
Relating and Networking
Planning and organising
Following Instructions and Procedures
Coping with Pressures and Setbacks
Adhering to Principles and Values
Teachable
 
APPLY NOW
 
 
 
 
 
 `,` 
 
 
 
 
INTERNSHIP PROGRAM
Job number IDC00349
Job Grade S Band
Closing date 29-Aug-2024
 
Synopsis
The Industrial Development Corporation of South Africa Limited (the IDC) is a self-financing, state-owned national development finance institution which provides finance for industrial development projects, playing a catalytic role in promoting partnerships across industries within and outside our borders, promoting regional economic growth.
 
We do this by:
• Proactively identifying and funding of high-impact and labour-intensive projects.
• Leading the creation of viable new industries.
• Using our diverse industry expertise to drive growth in priority sectors; and
• Taking up higher-risk funding projects.
 
Job Description
The IDC offers workplace exposure through an internship programme for a period of 18-months. Our programme aims to provide a customised, structured, and supervised workplace experience. This allows qualified youth to gain valuable work experience, explore career paths, networking opportunities and mentoring through experienced professionals.
 
The IDC internship programme is a 18month fixed-term contract that provides workplace experience underpinned by a carefully designed training program customized to allow one to gain valuable work experience, explore career paths, networking with professionals in the workplace while earning a stipend.
 
Through our customised onboarding programme, we will settle you into IDC and set you up for success. You will be immersed in a series of accredited learning assets covering areas meant to anchor you in your journey of 18 months, while we expose you to the latest curated on-line content addressing our DNA embedded IDC core competencies.
 
We are therefore inviting applications for an internship programme which will run for a period of 18 months. Interns will be placed nationally within the IDC (Head Office & Regions).
 
Qualification and Experience
Applicants must be able to satisfy these basic eligibility requirements to apply for the internship:
Applicants must be South African Citizens
Applicants must be less than 35 years of age.
Effective English writing and verbal communication skills
Not be studying at any other institution.
Applicant must not be registered or have been on any Learnership or Internship Programme
All applicants must have a completed Qualification.
 
Candidates will be required to undergo the competency-based interviews.
The following checks will be conducted, Criminal Record checks, verification of educational qualification and proof of South African citizenship.
 Successful candidates will be required to sign a 18-month fixed term employment contract.
If you don’t hear from us after 4 weeks from the closing date, please consider your application unsuccessful.
 
Applicants must be in possession of any qualification of the following fields.
BCom Accounting/Financial Management (Specialising in Management Accounting) or Financial Accounting/ BTech Cost & Management Accounting; Honours Information Science with specialisation in Knowledge Management, BCom (Law); or LLB; Honours Degree in Mathematical Finance/ Financial Engineering/Quantitative Risk or Finance/Financial Modelling/Actuarial Science/Financial Econometrics/Mathematical Economics; Diploma Travel Tourism/Business Travel; BEng. Industrial Engineering/BSc Environmental Science. CTA and Honours in Finance or Accounting. BCom/ BA Human Resource Management, Diploma Human Resources Management/Development; BA/BCom Psychology, Master’s in psychology (completed or in progress); Diploma / Degree in Information Management or Archival Studies; Degree/Diploma in Logistics Management/Purchasing; BSc IT/B.IT; BA/Advanced Diploma in Media Studies/Journalism/Communication/Brand Communication. BCom Marketing Management/Public Relations/Project Management.
 
Job Requirements
Job-Related Skills
Ability to build and manage relationships
Good written and verbal communication skills
scheduling and time management skills
Good attention to detail
Good interpersonal skills
Ability to liaise and engage with both internal and external clients
Excellent customer relationship skills
Respect for confidentiality due to the nature of work
Innovation and Creativity
 
BEHAVIOURAL COMPETENCY
Is proactive and forward-thinking
Relating and Networking
Strong Professional Judgement in managing situations and/or confidential information
Relating and Networking
Planning and Organising
Following Instructions and Procedures
Coping with Pressures and Setbacks
Adhering to Principles and Values
Presenting and Communicating Information
Teachable


TECHNICAL COMPETENCY
In-depth knowledge of the respective field of study.
Sound knowledge about the Industrial Development Corporation
MS Office: Excel, Word, PowerPoint, Outlook, MS Teams
Ability to liaise effectively at a high level
 
APPLY NOW
 
 
 
 
 
 
 `,`HUMAN CAPITAL BUSINESS PARTNER
Job number IDC00352
Job Grade P-Band
Closing date 29-Aug-2024
 
Job Description
The purpose of this role can be defined into the following distinct functions:
To provide a client centric and service orientated Human Capital advisory service to business in the implementation of
people strategies and initiatives
Support the operationalizing and execution of people strategies.
To be a trusted, credible people coach and advisor to line managers and employees alike.
Ensure the effective risk analysis, mitigation and management of people practices and processes in the business
 
Qualification and Experience
Qualification
Relevant degree in Human Resources or related.
Postgraduate degree would be advantageous.
Knowledge & Skills
Minimum of 5-8 years of progressive, practical exposure/application of human resource management processes with a generalist background and exposure to recruitment, selection, training, talent management, organisational development, change, recognition and reward, employee relations relevant legislation and employment laws within a complex environment.
Strong background in partnering with the diverse stakeholders.
Experience in use and application of relevant psychometric assessments with
certification as an assessment practitioner being advantageous.
Knowledge and understanding of various Labour Laws.
Knowledge and understanding of end-to-end recruitment and disciplinary processes.
Knowledge of performance management methodologies, processes and practices.
Knowledge and of various Change Management methodologies and practices.
Knowledge of Talent Management processes including succession planning, 9-Box Grid.
Knowledge of various team interventions such as Assimilations.
Knowledge and understanding of workforce planning and people strategy
implementation.
Knowledge and understanding of Employee Wellness processes.
Knowledge and understanding of driving transformation in the business through culture management, employee engagement, etc.
 
Roles and Responsibilities
FUNCTIONAL OPERATIONS MANAGEMENT
HC Execution
Partners with the Senior HCBP to drive the implementation of strategies that will engage people in delivering the organization’s vision.
Partners with Senior HCBP and COE to ensure execution of relevant HC projects as per the business needs
Communicate and engage with respective Divisions’ management and/or employees
Obtain feedback with regards to implementation and ensure such feedback is translated back to HC Strategy and processes
Enable the HC Service and Operating Model
Provide expert advice and coaching to all stakeholders when appropriate
Develop and promote ongoing feedback mechanisms for employees to influence the continuous improvement of HC services and processes
Identify new opportunities for HC to add value to the business.
Provide inputs and guidance on HC requirements for business
Implements, communicates and offers advice on standard HC systems, processes, policies, procedures, plans, and ensure programs are in place
and effectively utilized (reward and recognition, employee relations, workforce planning, resourcing, performance management, etc.).
High Performance Culture Implementation
Support with implementation of people strategies aimed at facilitating a high-performance culture
Provide on-going line management coaching and training around driving a high-performance culture in their units
Ensure performance management process and system is optimally deployed/implemented in units.
Works with internal stakeholders to identify risk areas and address them.
Partners with ER and Transformation Specialists to ensure a sound ER environment within the business units.
Attend to all labour related matters including supporting CCMA cases.
Support line managers in forecasting and planning their talent pipeline requirements in line with the function or business strategy and ensure
appropriate capacitation is in place
Ensure that remuneration and reward is competitive by providing guidance and direction to Senior management on latest market and industry
trends.
Work with the Total Rewards and Shared Services to co-ordinate the Annual Salary Increase and incentive process.
Implement and encourage the company recognition programmes and other initiatives to build a culture of recognition
Organisational Effectiveness Intervention Implementation (OD and Change, Performance Management, Talent Management, Remuneration and Benefits &Employee Relations and Transformation)
Support the achievement of the Employee Value Proposition to create a ‘Great Place to Work’ environment.
Support the implementation of the Integrated Talent management processes, i.e. Talent Reviews, Development, Retention programmes and or initiatives.
Supports the implementation of organisational effectiveness interventions.
Support and monitor the implementation of change plans.
Proactively implement interventions which would assess the level of engagement in the business i.e. employee engagement survey’s.
Support and monitor the execution of the business case for change against agreed metrics.
Support the implementation of Employment Equity Plans and ensure that a medium/long term plan is developed to address representation at a Senior management, Professionally qualified and skilled technical levels.
Implement programs to drive a strong diversity, equity and inclusion, ) culture
 Analytics and Reporting
 Prepares analytics and organizational health measures such as disciplinaries, grievances, performance management, employee wellness matters, absenteeism and other organizational measures across the business unit
Review, consolidate and identify trends around people scorecards to inform unit engagement. In collaboration with the Senior HCBP/HCBP develop, monitor and manage actions to address these (for example high turnover among high performers).
Compile and present divisional/departmental people dashboard to the divisional leadership team.
Talent Acquisition
 Deliver on talent acquisition service to the business.
Human Capital Business Partner Coordination
Implementation of people movements/changes within the business (promotions, transfers, secondments, job rotations, role upgrades, salary adjustments, etc.).
Planning and coordination of sessions and related documentation (team cohesion, talent reviews, culture, organizational development (OD), change and learning and development initiatives.
Facilitation of post appointments, stay and exit interviews. Drive implementation of people related outcomes from these interviews.
Support the offboarding process of employees.
Quarterly HC Audit and adhoc reporting
LEARNING AND GROWTH
To continuously research and find new ways of doing the work.
To take ownership of Personal Development.
To promote/participate in knowledge sharing with team members  
STAKEHOLDER MANAGEMENT
Identifies service requirements and performance and delivers on these
Maintains regular communication and engagement with stakeholders
Manages and resolves non-delivery and compliance issues
Units’ objectives, standards and operating procedures are communicated to internal and external service providers as per SLA
 
Job Requirements
Job-Related Skills
Project Management and Implementation Skills
Coaching and Mentoring Skills
Group Facilitation Skills
Job evaluation and profiling skills
People Management skills
Emotional Intelligence
Empathy
Conflict Management skills
Talent Acquisition skills
Problem Solving Skills
Data analysis/analytics/reasoning of data
Networking/influencing and negotiation skills
 
UCF COMPETENCY PROFILE  (BEHAVIOURAL)
Deciding and Initiating Action       
Leading & Supervising       
Adhering to Principles & Values     
Relating & Networking
Writing and Reporting
Analysing
Planning and Organising
Delivering Results and Meeting Customer Expectations
Presenting and Communicating Information
Learning and Researching
Following Instructions and Procedures
Achieving Goals and Objectives
 
APPLY NOW`,`COMPLIANCE OFFICER
Job number IDC00351
Job Grade P-Band
Closing date 28-Aug-2024
 
Job Description
The Compliance Officer is responsible for assisting and supporting SBUs/Departments in complying with the all applicable regulatory requirements (i.e. Laws, Regulations and Supervisory requirements (i.e. rules, codes and self-regulatory organizational standards) applicable to the IDC by facilitating the implementation, management and maintenance of the compliance methodology.
 
Qualification and Experience
QUALIFICATION
•    Commerce or Legal degree or equivalent
KNOWLEDGE & SKILLS
•    5 to 8 years relevant and practical compliance risk management or legal experience
•    Member of the Compliance Institute of Southern Africa
 
Roles and Responsibilities
COMPLIANCE RISK IDENTIFICATION AND ASSESSMENT
Conduct formal Compliance Risk Profile workshops to identify and assess the total universe of regulatory requirements applicable to the IDC and its Business Unit/Depts.
Conduct informal Compliance Risk Profile reviews to identify amended and/or new regulatory requirements and update the Compliance Risk Profile/s accordingly in support of the overall IDC Compliance Risk Profile.
Stay abreast of amended and/or new regulatory requirements, and pro-actively identify and communicate the impact of the anticipated regulatory change on the IDC and its Business Units/Depts.
Compile and continuously update, manage and execute an SBU/Dept. Compliance Coverage Plan, detailing the compliance risk identification, assessment, management, monitoring and reporting activities to be undertaken for a financial year.
COMPLIANCE RISK MANAGEMENT
Compile Compliance Risk Management Plans for the applicable regulatory requirements.
Review, manage and update existing Compliance Risk Management Plans when so required, but at the least once every two years.
Provide compliance advice to the SBUs/Depts on the requirements stipulated within the compliance-owned policies, the regulatory control environment (existing and/or new) and the ways in which to minimize the impact of occurred non-compliance.
Participate in projects to identify applicable compliance risks and advise on the management and mitigation thereof.
Undertake compliance awareness activities such as:
contributing articles to in-house publications;
distributing interesting and relevant articles; and conducting presentations to the SBUs/Dept. on applicable regulatory requirements to support the embedment and enhancement of a culture of compliance.
COMPLIANCE RISK MONITORING
Plan, manage and conduct compliance monitoring (i.e. control adequacy reviews, control effectiveness reviews, control self-assessment questionnaires/sign-offs and/or control spot check reviews) on the applicable regulatory requirements.
Compile and discuss the Compliance Review Report with the SBU/Dept and agree the corrective actions to be taken, the person responsible for implementing the corrective actions and the due date for implementation.
Log all compliance findings on the Compliance Issues Log, manage and track the progress made by the SBU/Dept. in closing the finding/s and ensure that the Compliance Issues Log accurately reflects all amendments, supporting the integrity of the data reported on to the relevant governance committees.
COMPLIANCE RISK REPORTING
Compile and submit a Compliance Risk Profile Report to the SBUs/Depts.
Compile, agree and submit a SBU/Dept. Compliance Coverage Plan with/to the SBU/Dept.
Compile, manage, discuss and agree the Control Adequacy Review Report and/or Control Effectiveness Review
Report and/or Control Self-Assessment Review Report and/or Control Spot Check Review Report with the SBU/Dept.
Compile and submit a quarterly SBU/Dept. Compliance Report, detailing the status of the Management of the compliance risks within the SBU/Dept.
 
Job Requirements
TECHNICAL/FUNCTIONAL COMPETENCIES
Planning and Organizing
Project Management Skills
Strong Analytical Skills
Presentation skills
Stakeholder Engagement Skills
Negotiating and Influencing
 
BEHAVIOURAL COMPETENCIES
Attention to detail. 
Highly Ethical and integrity. 
Good Communication skills
 
APPLY NOW`],postedDate:"26/8/2024",iframe:"",uuid:"p7add7fce-1b0f-4bf3-aa0a-a52d2078581c"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/information-regulator_orig.png",href:"https://www.govpage.co.za/information-regulator-south-africa-vacancies-blog/information-regulator-south-africa-vacancies2829537",title:"INFORMATION REGULATOR (SOUTH AFRICA) VACANCIES",content:[` 
 
INFORMATION REGULATOR (SOUTH AFRICA)
JD House, 27 Stiemens Street, Braamfontein,
Johannesburg, 2017, South Africa,
P.O Box 31533, Braamfontein,
Johannesburg, 2017, South Africa,
Email: enquiries@inforegulator.org.za,
Website: www.inforegulator.org.za
Toll Free: +27 80 001 7160
 
The Information Regulator (Regulator) is a juristic person established in terms of Section 39 of the Protection of Personal Information Act 4 of 2013 (POPIA) which enjoins the Regulator to be independent and impartial and to perform its functions and exercise its powers without fear, favour or prejudice. It is accountable to the National Assembly and has jurisdiction throughout the Republic of South Africa. The Regulator is responsible for the promotion and protection of the right to privacy as it relates to the protection of personal information and right of access to information. In this regard, it exercises its powers and performs its functions in accordance with POPIA and the Promotion of Access to Information Act 2 of 2000 as amended (PAIA). The Regulator consists of five (5) Members namely: the Chairperson and four (4) ordinary Members appointed by the President of the Republic of South Africa for a five (5) year term. The Chairperson and two (2) ordinary Members are appointed on a full-time and the other two (2) Members on a part-time basis. Section 47 of POPIA empowers the Regulator to establish its own administration to assist it in the performance of its functions. In this regard, the Regulator must appoint the Chief Executive Officer (CEO) and other staff members to assist it in the performance of its functions.
The Head Office of the Regulator is situated in Braamfotein, Johannesburg. The Regulator is currently hereby inviting suitably qualified candidates whose appointment will promote equity and representivity to submit applications for the vacant positions listed below: People with disability are encouraged to apply. For detailed information please visit our website www.inforegulator.org.za vacancies.
 
 `,`INTERNAL /EXTERNAL ADVERTISEMENT OF VACANCIES 
 
MANAGER: OFFICE OF THE CHAIRPERSON 
REFERENCE: IR1/08/2024 
DIVISION: OFFICE OF THE CHAIRPERSON 
SALARY LEVEL: ELEVEN (11) 
CENTRE: HEAD OFFICE: BRAAMFONTEIN (JOHANNESBURG) 
SALARY: R 849 702. 00 (all-inclusive package per annum and not negotiable) 
The successful candidate will be required to sign a performance agreement annually.
 
REQUIREMENTS
Matric certificate plus National Diploma in Public Administration /Management or Office Management / Administration or equivalent relevant qualification at (NQF) Level six (6); 
Bachelor’s Degree in Public Administration /Management or Office Management / Administration or equivalent relevant qualification a t(NQF) Level seven (7) will be an added advantage ; 
LLB qualification at NQF Level eight (8) will be an added advantage; 
5 years’ experience in the administration field of which three (3)years must be in rendering Senior Management/Executive Support; 
Working experience in the Legal environment will be an added advantage; 
Certificate in Microsoft office or typing is a requirement; 
Ability to compile accurate minutes and prepare reports; 
Ability to work under pressure in a fast-paced environment; 
Work well under minimum supervision; 
Extensive knowledge of office administration and interaction with clients and stakeholders; and 
Knowledge of Acts, Regulations, Policies and Procedures governing the public sector. 
 
SKILLS AND COMPETENCIES REQUIRED 
Office Management and Administration, Individual must be a self-starter, good telephone etiquette, Computer Literacy with advanced knowledge of Microsoft packages and good Typing Skills, Ability to conduct basic research, Time Management, Analytical skills and pay attention to details, Interpersonal Relationships, Presentation, Networking, Planning and Organising, Relationship Management, Excellent communication (Writing and Verbal) skills with experience in Reporting writing. 
 
KEY PERFORMANCE AREAS 
Development and maintenance of processes, systems and guidelines related to document management. 
Coordinate local and international travels. 
Provide administrative support for Chairperson and Senior Manager: Governance. 
Provide administrative support for various meetings. 
Process claims in the Office of the Chairperson and/or directed to the Office of the Chairperson submit to Finance for further processing. 
Compile reports and memo/submissions 
Liaise with relevant stakeholders Nationally, Regionally and Internationally 
Compile accurate minutes for the Office of the Chairperson and various meetings 
Conduct desktop research for the Office of the Chairperson 
Prepare presentations for the Office of the Chairperson 
Management of stakeholder engagements and responding to stakeholder’s requests; and 
Management of resources. 
 
 
Applications for this position may be submitted by email as follows: Recruitment1@infoRegulator.org.za
 
NB: PLEASE SEE DETAILED NOTES ON HOW TO APPLY ON PAGE 4 to 6
 
IMPORTANT INSTRUCTIONS TO CANDIDATES
All the above-mentioned positions are permanent, and appointment will be done in terms of section 47 of the Protection of Personal Information Act 4 of 2013 (POPIA) as the enabling Act.
Applications must be submitted on new application for employment form (Z83) which came into effect on 1 January 2021. The new Z83 for can be downloaded at www.dpsa.gov.za-vacancies or https://inforegulator.org.za/vacancies/.
Received application with an incorrect application form will not be considered.
Ensure that the Z83 form is signed and dated before you submit your application. Please use your signature or valid e-signature and your name written in block/typed print. A Z83 not signed and dated will be deemed regret.
Candidates are advised to complete all the sections of the Z83 Form in full (A to G and Declaration) and indicate whether they belong to professional bodies and have criminal record or not.
A detailed and recent CV, with two (2) contactable referees; certified copies of qualifications that are not older than six (06) months and Identity Document or Passport document will be requested from the short-listed candidates only as indicated on DPSA circular 19 of 2022.
Should a candidate be in possession of foreign qualification(s), such must be accompanied by an evaluation certificate obtained from the South African Qualifications Authority (SAQA) to confirm the appropriate National Qualifications Framework (NQF) Level.
Candidates for permanent positions must indicate their current Salary Notch on their CV, particularly on employment history.
Applications can be submitted by courier, hand delivery or email.
Candidates who choose to email their applications should adhere to the following instructions:
Write the correct name of the position and reference number as the subject on the email.
Due to size requirements of our mailbox, applicants must zip their documents before submitting to the Regulator.
It is the responsibility of the applicant to ensure that his/her application is delivered in the correct mailbox of the Regulator.
The Regulator will not take responsibility for any email which was not delivered.
Applicants are advised to use the provided alternative ways of submitting their applications should they experience problems when submitting online. 
Failure to comply with any of the above instructions will result in the application being disqualified. 
Applications received after the closing date will not be considered. 
If an applicant wishes to withdraw an application, it must be done in writing. 
As part of the selection process, shortlisted candidates may be subjected to processes such as Security Screening, Reference Checks and Qualifications Verification. 
Successful candidates will serve probation for a period of twelve (12) months. 
Any successful candidate in one of the advertised positions will be required to enter an employment contract and also sign a Performance Agreement on an annual basis. 
It is the Regulator’s intention to promote equity and representivity through the filling of these posts and to facilitate this process, an indication of important demographic information such as race, gender and type of disability, if any, is required. 
Due to high volume of applications anticipated, there will be no acknowledgement of applications and further communication will only be made with the shortlisted candidates. 
Candidates who do not comply with the instructions will be disqualified. 
Applicants who do not receive confirmation or feedback within three (3) months after the closing date must accept that their applications were unsuccessful. 
The Regulator reserves the right to withdraw any advertised position or not to appoint. 
Enquires related to the above posts may be directed to SSithole@infoRegulator.org.za By email as indicated on each advertisement 
 
Hand delivery: 
 
CLOSING DATE: FRIDAY, 06 SEPTEMBER 2024 
 
Applications may be submitted as follows: 
Place applications in the applicable box at the Security Area (Ground Floor) 
27 Stiemens Street 
JD House 
Ground Floor 
Braamfontein, Johannesburg 
2017
 
Courier service: 
For attention: Ms PS Boshomane and Mr S Sithole 
INFORMATION REGULATOR 
Human Resource Management 
27 Stiemens Street 
JD House 
use, 4th floor 
Braamfontein, Johannesburg 
2017
 
Disclaimer
The personal information submitted herein shall be solely used for processing your application for a job with the Information Regulator (Regulator) and/or subsequent appointment should your application be successful. 
 
All the personal information submitted herein shall be used for the purpose stated above, as mandated by the Protection of Personal Information Act, 2013. By submitting your personal information, you agree that such information may be disclosed to the third party for verification of qualifications, reference checks and criminal checks. The Regulator undertakes to ensure that appropriate security controll measures are implemented to protect all your personal information submitted.

 
Adv. FDP Tlakula (Chairperson), Adv. LC Stroom-Nzama (Full-time Member), Adv. JC Weapond (Full-time Member), Ms. AR Tilley (Part-time Member), Mr. MV Gwala (Part-time Member). Mr. M Mosala (Chief Executive Officer)`,`INTERNAL /EXTERNAL ADVERTISEMENT OF VACANCIES 
 
SENIOR SECURITY COMPROMISE OFFICER: IT 
DIVISION: POPIA 
REFERENCE: IR2/08/2024 
CENTRE: HEAD OFFICE: BRAAMFONTEIN (JOHANNESBURG) 
SALARY LEVEL: ELEVEN (11) 
SALARY: R 849 702. 00 (all-inclusive package per annum and not negotiable) 
The successful candidate will be required to sign a performance agreement annually.
 
REQUIREMENTS
Matric certificate plus Bachelors’ Degree in Computer sciences or Computer engineering or Information Technology (IT) Technical-related field or equivalent qualification at National Qualification Framework (NQF) Seven (7) recognised by South African Qualifications Authority (SAQA). 
A postgraduate qualification would be an advantage. 
A recognised cybersecurity certificate: Certified information Security Manager (CISM), Certified information Systems Security Professionals (CISSP) Or Certified Information Systems Auditor (CISA) would be an added advantage. 
Five (5) years’ experience within the information security environment of which three (3) years must be at a supervisory level in experience conducting investigation in security compromise/cyber security environment. 
 
SKILLS AND COMPETENCIES REQUIRED 
Knowledge of POPIA and PAJA, knowledge of other relevant laws and Acts of Parliament, Regulations, Government Protocols, Strategic Planning, Financial Management, Agreements, Legal Policy development, Programme and Project Management, Excellent Legal Analytical Skills, Excellent Writing and Verbal Communication Skills and Management of Interest and Pressure groups and ability to work under pressure. Knowledge of case preparation and knowledge of the Cybercrimes Act and methods of handling evidence including testifying in court. 
 
KEY PERFORMANCE AREAS 
Development of tools, procedures, strategies and policies for successful resolution of complaints; 
Participate in benchmarking with international and national agencies on best practices in notification of security compromise and enforcement of compliance thereof; 
Coordinate implementation of processes; tools for investigation including investigation manual & amendment and upgrade thereto from time to time; 
Manage co-operation Nationally and Internationally on issues relating to the notification of security compromise; 
Managing the collection, storage and destruction of evidentiary artefacts required for the section 19 assessment; 
Conduct Preliminary investigation of the nature of the security compromise; 
Determine if the breach is caused by negligence (non-implementation of the identified mitigating security measures; 
Determine if the responsible party conducted regular verification that the security safeguards were effective; 
Maintain chain of custody for evidence and confidential responsible party documents submitted for assessment; 
Produce assessment reports for consideration by POPIA Division; and 
Conduct consultation as and when required with the responsible party/data subjects/requestor to clarify issues or obtain information for the assessment. 
 
Applications for this position may be submitted by email as follows: Recruitment1@infoRegulator.org.za
 
NB: PLEASE SEE DETAILED NOTES ON HOW TO APPLY 
 
 
IMPORTANT INSTRUCTIONS TO CANDIDATES
All the above-mentioned positions are permanent, and appointment will be done in terms of section 47 of the Protection of Personal Information Act 4 of 2013 (POPIA) as the enabling Act. 
Applications must be submitted on new application for employment form (Z83) which came into effect on 1 January 2021. The new Z83 for can be downloaded at www.dpsa.gov.za-vacancies or https://inforegulator.org.za/vacancies/. 
Received application with an incorrect application form will not be considered. 
Ensure that the Z83 form is signed and dated before you submit your application. Please use your signature or valid e-signature and your name written in block/typed print. A Z83 not signed and dated will be deemed regret. 
Candidates are advised to complete all the sections of the Z83 Form in full (A to G and Declaration) and indicate whether they belong to professional bodies and have criminal record or not. 
A detailed and recent CV, with two (2) contactable referees; certified copies of qualifications that are not older than six (06) months and Identity Document or Passport document will be requested from the short-listed candidates only as indicated on DPSA circular 19 of 2022. 
Should a candidate be in possession of foreign qualification(s), such must be accompanied by an evaluation certificate obtained from the South African Qualifications Authority (SAQA) to confirm the appropriate National Qualifications Framework (NQF) Level. 
Candidates for permanent positions must indicate their current Salary Notch on their CV, particularly on employment history. 
Applications can be submitted by courier, hand delivery or email. 
Candidates who choose to email their applications should adhere to the following instructions: 

Failure to comply with any of the above instructions will result in the application being disqualified. 
Applications received after the closing date will not be considered. 
If an applicant wishes to withdraw an application, it must be done in writing. 
As part of the selection process, shortlisted candidates may be subjected to processes such as Security Screening, Reference Checks and Qualifications Verification. 
Successful candidates will serve probation for a period of twelve (12) months. 
Any successful candidate in one of the advertised positions will be required to enter an employment contract and also sign a Performance Agreement on an annual basis. 
It is the Regulator’s intention to promote equity and representivity through the filling of these posts and to facilitate this process, an indication of important demographic information such as race, gender and type of disability, if any, is required. 
Due to high volume of applications anticipated, there will be no acknowledgement of applications and further communication will only be made with the shortlisted candidates. 
Candidates who do not comply with the instructions will be disqualified. 
Applicants who do not receive confirmation or feedback within three (3) months after the closing date must accept that their applications were unsuccessful. 
The Regulator reserves the right to withdraw any advertised position or not to appoint. 
Enquires related to the above posts may be directed to SSithole@infoRegulator.org.za  
 
By email as indicated on each advertisement 
 
Hand delivery: 
 
CLOSING DATE: FRIDAY, 06 SEPTEMBER 2024 
 
Applications may be submitted as follows: 
Place applications in the applicable box at the Security Area (Ground Floor) 
27 Stiemens Street 
JD House 
Ground Floor 
Braamfontein, Johannesburg 
2017
 
Courier service: 
For attention: Ms PS Boshomane and Mr S Sithole 
INFORMATION REGULATOR 
Human Resource Management 
27 Stiemens Street 
JD House 
use, 4th floor 
Braamfontein, Johannesburg 
2017
 
Disclaimer
The personal information submitted herein shall be solely used for processing your application for a job with the Information Regulator (Regulator) and/or subsequent appointment should your application be successful. 
All the personal information submitted herein shall be used for the purpose stated above, as mandated by the Protection of Personal Information Act, 2013. By submitting your personal information, you agree that such information may be disclosed to the third party for verification of qualifications, reference checks and criminal checks. The Regulator undertakes to ensure that appropriate security control measures are implemented to protect all your personal information submitted.
 
Adv. FDP Tlakula (Chairperson), Adv. LC Stroom-Nzama (Full-time Member), Adv. JC Weapond (Full-time Member), Ms. AR Tilley (Part-time Member), Mr. MV Gwala (Part-time Member). Mr. M Mosala (Chief Executive Officer)`],postedDate:"26/8/2024",iframe:"",uuid:"pdaf135f9-683d-409d-a876-7316a119bef9"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/legal-aid_orig.jpg",href:"https://www.govpage.co.za/legal-aid-vacancies-blog/legal-aid-vacancies4758861",title:"LEGAL AID VACANCIES",content:[` 
LEGAL AID
 `,` 
 
ERP PROJECT MANAGER
REF: ERP/IS/23/08/2024
INTERNAL AND EXTERNAL ADVERTISMENT
NATIONAL OFFICE – BRAAMFONTEIN
(INFORMATION SYSTEMS DEPARTMENT)
Legal Aid SA is a National Public Entity; a key contributor to South Africa’s constitutional democracy, providing quality legal services to indigent and vulnerable persons. The organisation has a national footprint in all nine (9) provinces. Legal Aid SA is a credible employer of choice, boasting Top Employer SA accreditation for 15 consecutive years. We offer an exciting Employee Value Proposition with opportunities for development, career growth and an inspiring workplace.
Applications are invited from persons interested to fill the above-mentioned position. The incumbent will be appointed on a five (5) year contract basis. The position is based at the Legal Aid SA National Office in Braamfontein (in the Information Systems Department).
 
Job Summary:
The ERP Project Manager is responsible for overseeing the successful implementation, upgrade or optimisation of the organisation’s Enterprise Resource Planning (ERP) systems. This role involves planning, coordinating and executing ERP projects, ensuring that they are completed on time, within scope and within budget. The ERP Project Manager will work closely with various departments, stakeholders and vendors to ensure that the ERP system meets the organisation’s business needs.
 
KEY OUTPUTS
Project Planning and Execution:
Develop comprehensive project plans outlining scope, objectives, timelines, resources and budget.
Lead project teams in the implementation and support of ERP solutions, ensuring alignment with business goals.
Coordinate with cross-functional teams to ensure successful project delivery.
Monitor project progress, identify potential risks and develop mitigation strategies.
Stakeholder Management:
Act as the primary point of contact between the project team, vendors and stakeholders.
Conduct regular meetings with stakeholders to provide updates, gather requirements and address concerns.
Ensure effective communication throughout the project lifecycle.
Resource Management:
Allocate resources efficiently to meet project deadlines and objectives.
Manage the day-to-day activities of the project team, including assigning tasks and setting priorities.
Collaborate with HR and department heads to ensure the availability of necessary resources.
Budget and Cost Management:
Develop and manage project budgets, ensuring projects are completed within approved financial parameters.
Track project expenses and report on financial performance.
Identify cost-saving opportunities and implement them where possible.
Risk and Issue Management:
Identify, assess and manage risks and issues throughout the project.
Develop contingency plans to address potential project challenges.
Resolve project issues promptly and efficiently to minimise impact.
Quality Assurance:
Ensure that all project deliverables meet the required quality standards.
Oversee the testing and validation of ERP system functionalities.
Manage the change control process to ensure smooth transitions and minimal disruption to business operations.
Post-Implementation Support:
Develop and execute a post-implementation support plan.
Conduct post-project reviews to identify lessons learned and opportunities for improvement.
Ensure proper training and documentation is provided to end-users.
 
COMPETENCIES (SKILLS, KNOWLEDGE & ATTRIBUTES) REQUIRED
National Senior/Matric certificate, plus a postgraduate degree in Project Management or equivalent.
A qualification in IT will be an added advantage.
A minimum of ten (10) years of working experience, five (5) years of which are in project management.
As ERP systems are highly integrated, data quality is expected to be a critical success factor for implementation. Demonstrable prior system implementation experience which involves the data migration process is a requirement.
The main objective of employing the ERP system is to ensure that the technical aspects of the subdivisions of the organisation are centralised. To achieve this objective, the candidate should have proven experience of building the ERP system that integrates with multiple systems.
The candidate should possess knowledge in Finance, SCM, Asset Management and HR systems and processes for a successful implementation of the ERP system.
The candidate must demonstrate the ability to lead a change management process at an enterprise level.
The candidate must have exposure to leading practices on project management tools and techniques.
The candidate must possess proven experience for engaging internal and external stakeholder at different levels.
 
 
 `,`SALARY: Level 13 (R1,216,824.00) all-inclusive package per annum

 
A detailed curriculum vitae reflecting practical application of the position outputs and the required competencies as advertised must be submitted by close of business on 10 September 2024, quoting the reference number ERP/IS/23/08/2024 in the subject line to recruit [at] legal-aid.co.za or apply online at www.legal-aid.co.za 
 
Enquiries to Sinakho Mrwetyana, Tel: 011 877 2000
 
The employment decision shall be informed by the Employment Equity Plan of Legal Aid SA. It is Legal Aid SA’s intention to promote equity (race, gender and disability) through the filling of this post(s) with a candidate whose transfer/promotion/appointment will promote representivity in line with the numerical targets as contained in our Employment Equity Plan. Legal Aid SA reserves the right to withdraw posts or not to make an appointment, if by doing so, the interests of Legal Aid SA will be best served.
 
APPLICANTS NOT CONTACTED WITHIN TWO (2) MONTHS MAY CONSIDER THEIR APPLICATION UNSUCCESSFUL.`],postedDate:"26/8/2024",iframe:"",uuid:"p29020b9a-ad7b-44b9-ba14-85f91e83f405"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/mintek.jpg?1724694420",href:"https://www.govpage.co.za/mintek-vacancies-blog/mintek-vacancies2330167",title:"MINTEK VACANCIES",content:[` 
MINTEK
 `,` 
 
 
ELECTRICAL ARTISAN
Listing reference: minte_000274
Listing status: Online
Apply by: 3 September 2024
Position summary
Industry: Scientific, Research & Development
Job category: Artisan
Location: Randburg
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
Mintek has an exciting career opportunity for an Electrical Artisan. The candidate will be responsible to perform electrical maintenance, repair, and installation of new electrical systems and equipment’s. All suitably qualified and experienced candidates are invited to apply.
 
Job description
KEY PERFORMANCE INDICATORS
Installation, operation and maintenance of electrical equipment, apparatus and instruments
Examine electrical problems, identify source of problems and determine method for repair by electrical circuit diagrams
Design and interpret electrical circuits
Read, interpret and work from electrical circuits and drawings
Assist with commissioning and maintenance of test facilities
Competent to operate 11Kv medium voltage switchgear equipment’s within the Mintek substations
 
Understanding of electrical specifications and regulations
Assist Supervisor with QA/QC inspections.
Determine the kind of tools and equipment needed to do the jobs
Inspecting subcontractor’s workmanship (Where sub-contractor work is applicable).
Understand and interpret electrical laws, codes, rules and SANS 10142 standards pertaining to electrical construction and maintenance
Test individual plant components or system as per prescribed procedures to ensure that the overall plant function is achieved
Understand electrical network reticulation of Mintek
 
Adhere to Safety, Health, Environment and Quality (SHEQ) policies and procedures
Perform risk assessments for every task assigned (HIRA).
Take control of the workmanship and safety of trade workers/operators.
Ensure that Mintek’s safety standards and procedures are sustained with regard to electrical work and to uphold prescribed safety standard procedures in his workspace.
Recommend improved work practices and amendments to procedures affecting workmanship and safety matters.
Assist the supervisor with performing Safety inspections.
 
Job duties of electrical workshop & field activities

This is the list of typical activities expected to be performed by a qualified electrician.
Assemble, install and maintain electrical wiring, equipment, and apparatus using hand tools.
Connect conductors to circuit breakers, transformers or other components
Install and connect power and control cable to equipment such as motors and electrical distribution boards
Test electrical systems and continuity of circuits in electrical wiring equipment using devices such as multi-meter, megger tester, tong tester to ensure compatibility and safety of the system.
Place conduit inside designated partitions, walls or other concealed areas, and pull insulated wires or cables through the conduit to complete circuits between boxes.
Inspecting equipment, structures, or materials to identify the cause of errors or other problems or defects.
Responsible for station lockout/tag out procedures as mandated by company policy
Plan layout and installation of electrical wiring, equipment based on job specifications and local codes
Work from the ladders, scaffolds, and roofs to install, maintain or repair electrical wiring and equipment’s 
 
Job activities related to administration work
Completion of job-cards.
Plan and organise work
Train others in basic electrical tasks
Work cooperatively with others
Completion of schedules as per job cards
Share functional expertise
Do corrective / preventative maintenance on existing installations
 
Minimum requirements
MINIMUM QUALIFICATION AND EXPEPERIENCE
N3/Matric  plus trade certificate as Electrician
Ideal -  N4 plus trade certificate as Electrician
At least 5 years’ experience in electrical field and plant environment and be able to do troubleshooting on the different electrical circuits
TRAINING
Passed trade test and a completed apprenticeship in electrician
 
BEHAVIOURAL COMPETENCIES:
Good interpersonal skills.
Ability to work in a stressful and demanding environment.
Prepared to work shifts in hot and dusty plant environments when required.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
PYROMETALLURGY SENIOR ENGINEER: TECHNOLOGY DEMONSTRATION
Listing reference: minte_000272
Listing status: Online
Apply by: 27 August 2024
Position summary
Industry: Scientific, Research & Development
Job category: Research and Development
Location: Randburg
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
Mintek has exciting opportunities for a Senior Engineer within the Pyrometallurgy Division to conduct cutting edge industrial and applied research in the design, development and demonstration of fit for purpose pyrometallurgical processes and technologies. Reporting to the Head of Technology Demonstration, the role requires a strong understanding of pyrometallurgy fundamentals, with particular emphasis on leveraging knowledge of thermochemical simulations, phase equilibria, reaction kinetics, and engineering design to deliver high value and complex pilot scale demonstration projects. Contributing to human capital development and willingness to work towards a common purpose with a strong sense of equity and inclusion are non-negotiable attributes of the role.
 
Job description
KEY PERFORMANCE INDICATORS:
Performing the total scope of work in the Division, including business development, fundamental and applied research, technology demonstration, technology transfer and commercialisation.
Providing technical leadership in driving high impact RDI programmes, commercial projects, contract research and funding strategies to drive productivity and ensure the financial sustainability of the Division.
Formulating and executing disciplinary and multi-disciplinary assignments that require integration of specialist knowledge and skills, and function as a key technical resource in the Division. This includes providing technical leadership and support in the planning, demonstration, and managing complex pilot scale demonstration projects.
Conceptualising and drafting technical proposals for local and international funding, leading to the establishment and sustenance of world-class RDI infrastructure, research programmes, and human capital capacity at Mintek.
Providing technical and administrative support to the Division, including managing and coordinating tender processes for CAPEX and large scale infrastructure projects.
Contributing to human capital development through coaching and mentoring of colleagues, including providing postgraduate supervision where necessary.
Contributing to the visibility and credibility of the Division through building and sustaining long-term collaborations and partnerships, both locally and globally.
 
Minimum requirements
JOB KNOWLEDGE AND REQUIREMENTS: 
Minimum 5 years’ experience in pyrometallurgy research and technology development.
Demonstrated ability to develop experimental techniques, models and prototypes. 
Demonstrable experience with designing and operating electric arc furnaces at pilot-scale or technology demonstration levels, coupled with the ability to identify opportunities for further fundamental research from inconclusive or unclear phenomenon typically observed in pilot scale tests
Experience in designing pyrometallurgical processes using thermochemical software tools such as PyroSim™ and FactSage™ is an added advantage.
Proven experience with coding in C and Python is an added advantage.
Proven experience in mechanical design packages such as FUSION360 or FreeCAD is an added advantage.
Demonstrated ability to develop experimental techniques, models and prototypes.
Demonstrable experience in managing complex technical projects, particularly from concept to higher technology readiness levels.
Strong portfolio of publications in peer-reviewed journals is an added advantage.
Knowledge or experience with SHEQ systems is non-negotiable
Knowledge of technology transfer, commercialisation and product development is highly advantageous.
Demonstrated ability to attract investment or R&D funding is highly advantageous.
 
QUALIFICATIONS:
Minimum MEng/MSc in Engineering (Metallurgical/ Chemical / Process/ Mechanical/Electrical) or equivalent, with a strong emphasis on pyrometallurgy research and technology development.
Ideally, a PhD in Engineering (Chemical/ Metallurgical/ Process/ Mechanical/ Electrical), or equivalent, with a strong focus in pyrometallurgy research, design and technology development.
Postdoctoral research experience, with strong emphasis on pyrometallurgy research and technology development, is highly advantageous.
Professional recognition and registration are an added advantage.
Experience with postgraduate supervision is an added advantage.
 
BEHAVIOURAL COMPETENCIES:
Team player who enjoys variety and has a strong affinity for planning and executing new and high impact research.
Passion for learning, pyrometallurgy research, technology development and technology transfer.
Excellent interpersonal skills.
Ability to work in a stressful and demanding environment.
Willing to travel locally and internationally.
Prepared to work shifts in hot and dusty plant environments when required.
Ability to independently engage with industry leaders, operators and high-level international partners.
Excellent writing and presentation skills.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
HR ADMINISTRATOR: REMUNERATION & BENEFITS (6 MONTHS CONTRACT)
Listing reference: minte_000275
Listing status: Online
Apply by: 30 August 2024
Position summary
Industry: Scientific, Research & Development
Job category: HR Administration
Location: Randburg
Contract: Fixed Term Contract
Remuneration: Market Related
EE position: Yes
 
Introduction
Mintek has an exciting career opportunity for an HR Administrator: Remuneration & Benefits. The successful candidate will be responsible for administering employee information processing through creation, maintaining, updating, and retention of employee information /files both manually and electronically. Ensuring 100% data integrity, whilst adhering to policies, procedures and legislation framework. All suitably qualified and experienced candidates are invited to apply.
 
Job description
OPERATIONS:
Data Integrity Project 
Maintain the employee master data, throughout the employee life cycle from joining to leaving, while adhering to the relevant policies, procedures and relevant legislation.
HR Information System updates- Employee on-boarding, promotions, transfers, contract renewals, terminations, changes in conditions of employment, leave administration.
Document processing, data capturing, and filing to ensure we record all employee transactions.
Improve administrative procedures and documentation (contribute to the improvement of internal systems and procedures, other input towards payroll calendar management)
Assist with time, attendance and leave  administration requirements.
Ensure employee data complies with reporting  requirements, such as EE/ BEE/ DoL, Remuneration Analysis. 
Maintain a meticulous and updated employee filing system for all employee movements.
Benefits Administration Processes
Work in collaboration with benefit administration consultants to ensure that the company and employees are well advised on legislation developments pertaining to pension, medical and risk benefits matters.
Ensure that employees have access to, and receive Employee Benefits Advisory Services.
Administer benefit claims as per policies and regulations.
Update employee files with the latest beneficiary information ( manually and electronically).
Governance and Risk
Ensure compliance with the internal audit requirements of the organisation.
Ensure compliance with the policies and procedures in order that the division gets clean audits.
System compliance with data security and privacy requirements – POPI ACT.
Legislative Requirements 
Interpret and apply statutory regulations and maintain HRIS system data changes (Employment Equity, Management Control –BEE Act, Basic Conditions of Employment  etc.).
Advice and guide managers and staff on company policies relating to conditions of employment when necessary such as leave administration, time management, overtime administration, pension fund, medical aid, risk benefits, and related claims etc.  
Maintains compliance with all the relevant employment laws and regulations, and recommended best practices; reviews policies and practices to maintain compliance (employee life cycle –data management.
Maintaining the integrity of Employment Equity Reports – and assist with Statistical Equity Reporting & BEE Reporting.
Facilitate audits/verifications by providing records and documentation to auditors/ BEE /DoL/verification officers Keep files/documents - injury on duty claims and relevant documentation submitted to the Compensation Commissioner by SHEQ and Occupational Health.
 Reporting 
Assist the various departments with aggregated and analysed data / reports according to stakeholder specific requirements, adhoc reports, monthly, quarterly and annually.
Develop and maintain ad hocs reports to provide HR and other stakeholders with timely and accurate data.
Report on Absenteeism, Sick Leave (moved to Information Systems).
Report on Employee Movements – Terminations, Hires, Movements and other relevant changes.
Provide regulatory reports BEE, EE, and Remuneration Analysis, Leave Management.
 People Development
Contribute towards guiding, coaching and mentoring the interns in the department.  
 
CUSTOMER SERVICE:
Provide Support Services 
Assisting staff with Employee Information related queries.
Providing Support with Employee Self Service Portal (ESS), and Manager Self Service Portal (MSS)
Providing information for monthly, quarterly and yearly statistics for various stakeholder reporting requirements
Efficient processing of benefits during on -boarding, information updates, and withdrawals for pension fund, medical aid, death and disability claims, etc.
Conduct monthly/ quarterly induction presentations for new employees.
Coordinate onsite presentations for medical aid, risk benefits, financial planning, etc.
 
PROCESSES: 
 Absenteeism
Ensures implementation of Mintek policies and procedures regarding absenteeism. Monitors trends on absenteeism through utilising the HR systems (PaySpace, IFS and T&A) and forwards reports to managers and supervisors for follow up and action.
Administration 
 Maintains employee master data, throughout the employee life cycle from joining to leaving, while adhering to the relevant policies, procedures and relevant legislation.
 Ensures HR admin deadlines related to employee hire, termination and movements  are met at all times
Inputs of employee related data into HRIS (PaySpace, IFS and T&A), through verification, scrutinizing and ensuring pre-approval alignment to policies and procedures before capturing.
Verifies and approves all HR administration data and supporting documentation received viz appointments, terminations, salary increases, promotions, leave, PAR, terminations etc and forwards to HR & Admin Systems Controller for processing (daily).
Ensures readily and accessible electronic and manual HR records are maintained.
 Verifies and approves all HR administration data and supporting documentation received viz appointments, terminations, salary increases, promotions, leave, PAR, terminations etc and forwards to HR & Admin Systems Controller for processing (daily).
Ensures that the asset register is signed and approved by the relevant stakeholders before employee termination is effected.
Ensures document control and adherence to workflow processes.
Updates HR admin control registers and files - submits input for approval and forwards to finance and payroll for processing.
  Audit
 Interact with relevant HR section and Payroll to ensure clean audit process; ensures compliance to audit findings and corrections are actioned within stipulated timeframe.
Support the internal and external auditors in verification of discrepancies and queries related to HR administration.
Business processes and workflow
Assists in analysing HR business processes, workflow and documents accordingly.
Give inputs into policies and procedures.
Filing 
 Ensures an up-to-date and accurate filing system is maintained for HR admin at all times- both manually and electronically.
 Filing - ensures satisfactory filing and retrieving of documentation
 Filing - files all documents on personal files and ensures accurate and up-to-date information on personal files at all times.
Overtime
Opens and closes overtime claim sheet for Division to complete and informs accordingly.
Verifies overtime pre-authorised with actual claimed - notifies line managers, employee and HR Systems Controller if 40 hours are exceeded and if overtime was not pre-authorised.
  Leave management
 Verify and audit maternity, sick, annual leave applications, cross checking with employment contracts, policies, and legislation.
Controls and checks data for leave and sick leave; capitalisation of leave, unpaid leave, special leave etc and that these are accurately captured on system.
Verifies leave input and requests - notifies line management and employee if not approved. Ensures availability and accrual of entitlements.
Policies and procedures 
Inputs towards updating of Policies and procedures - maintains and updates HR Administration according to policies and procedures updates utilising Ms Word, Excel  in prescribed formats. Maintains and updates HR databases, Shared Drive accordingly. Liaises with the HR Multiple Disciplinary Teams to ensure annual revision.
Participate in policy and procedure reviews.
Conduct administrative functions and ensure up-to-date knowledge of the HR administration processes, as well as all conditions of service.
Queries and complaints management
Handle employee queries and complaints regarding HR administration.
  Reports
 Compile and submit HR admin reports - (monthly, quarterly).
Draws relevant reports from HRIS (PaySpace, IFS and T&A)   Reports - draws relevant reports from HRIS (PaySpace, IFS and T&A).
HRIS Systems 
Maintains master data (PaySpace, IFS and T&A).
Processes total package changes, new appointments, resignations, changes in status, promotions etc.
Processes hourly rates for contract/temporary/fixed term employees; ensures valid contract approval before processing.
Completes return on attendance reports (weekly) and forwards to HR System Controller and Head: HR Administration, follows up on Divisions not returning weekly attendance reports.
Runs attendance reports and forwards to Divisions (monthly).
 Verifies and processes attendance reports returned from Divisions (monthly), records findings and submits report to HR Systems Controller and informs  Head: HR Shared Services if any discrepancies /anomalies, before forwarding to Payroll for processing.
 Verifies monthly interface file for payment - permanent and casuals. Verified information processed by Divisions. Clears all rejections and submits for approval before releasing to payroll for payment.
 
Minimum requirements
Education:
      Minimum:
B degree in Human Resources or relevant field.
Certificate in Payroll Administration (mandatory).
     Ideal: 
Experience or training in Payroll Administration.
Experience:
3-5years' experience working with HR information systems & Payroll Inputs.
In-depth knowledge of HR business processes.
In-depth knowledge of Employee Master Data Administration, Remuneration and Benefits.
Training:
      Minimum:
Competent User of Pay Space, IFS, Time and Attendance, Intermediate Ms Office (importantly excel), HR, Leave, Payroll Information System modules.
External Candidate - Payroll module, Employee Master Data module, Time & Attendance, Leave Administration, Excel.
     Ideal:
Functional reporting skills.
Legal:
     Minimum: 
Basic Conditions of Employment, HR Policies and Procedures, Payroll and Leave Management, Time and Attendance, Labour Relations Act, BEE Act, POPI, Employment Equity Act, Skills Development Act. 
 
Knowledge, Skills and Abilities:
 Ability to work with stake holders such as employees, divisions, management and the relevant external   vendors.
A high level of expertise and broad knowledge of labour/employment legislation.
HR administration processes - knowledge, understanding and the ability to apply them in day-to-day activities.
HR information systems - knowledge, understanding and the ability to apply them in day-to-day activities.
HR policies and procedures - knowledge, understanding and the ability to apply them in day-to-day activities.
HR workflow - knowledge, understanding and the ability to apply them in day-to-day activities.
Managing self: accountability, accuracy and attention to detail, customer service orientation, deadline driven, self-motivation, communicating information, showing resilience, upholding standards.
Excellent analytical skills.
A methodical, investigative and inquisitive mind and attention to detail.
Good interpersonal and client-handling skills, with the ability to manage expectations and explain technical detail.
Good presentations skill.
Policy and process writing ability.
 
Competency Required:
   Strong analytical skills.
   Strong administrative efficiency
   Teamwork skills.
   Change management skills
   Written and verbal communication skills.
 Flexibility.
   Adaptability.
   Initiative.
   Organised, thorough and systematic orientated
   Highly skilled in MS Office Packages ( excel, word, power point)
   Ability  work under pressure
   Be able to work on deadlines
   Excellent interpersonal and communication skills
   A high level of accuracy and numerical skills
   A high service-orientation and enjoy working in a team
   Exceptional organisational skills and a high attention to detail
   Sound knowledge of payroll, employee administration, benefits and remuneration
   Functional Knowledge of systems ( HR, BEE Act , Employment Equity, Skills, Remuneration analysis, Basic Conditions of Employment, )
 
PLEASE APPLY HERE
 
 
 
 
 
 `,`PYROMETALLURGY ENGINEER: COMPUTATIONAL MATERIALS SCIENCE MODELLING
Listing reference: minte_000270
Listing status: Online
Apply by: 27 August 2024
Position summary
Industry: Scientific, Research & Development
Job category: Research and Development
Location: Randburg
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
Mintek has exciting opportunities for a Research Engineer within the Pyrometallurgy Division to conduct fundamental and applied research in the design, development and demonstration of pyrometallurgical processes and technologies. The position will focus on developing computational materials science models to enhance understanding of the thermophysical and thermochemical properties of selected conventional and non-conventional slag systems. The role requires a strong understanding of computational materials chemistry, thermochemistry, phase equilibria, reaction kinetics, and engineering design fundamentals. Contributing to human capital development and willingness to work towards a common purpose with a strong sense of equity and inclusion are non-negotiable attributes of the role.
 
Job description
JOB KNOWLEDGE AND REQUIREMENTS: 
1-3 years’ experience in pyrometallurgy research and technology development.
Demonstrated ability to develop experimental techniques, models and prototypes.
Demonstrable experience with designing and operating electric arc furnaces is an added advantage.
Strong understanding of computational materials science modelling using both ab initio and molecular dynamics methods, and their application to the calculation of thermodynamic and transport properties of high-temperature metallurgical systems in solid and liquid states.
Proven experience with open source computational materials science tools such as LAMMPS, DL-POLY, Quantum Espresso, or similar.
Strong understanding of pyrometallurgy fundamentals and demonstrated ability to conceptualise and deliver high impact research in pyrometallurgy.
Strong portfolio of publications in peer-reviewed journals is a distinct advantage.
Experience with pyrometallurgical process software and design tools such as PyroSim™, FactSage™ or similar is an added advantage.
Experience with software automation and scripting languages such as Python is an added advantage.
Knowledge or experience with SHEQ systems.
Knowledge of technology transfer, commercialisation and product development is highly advantageous.
Demonstrated ability to attract investment or R&D funding is highly advantageous
 
Minimum requirements
QUALIFICATIONS:
Minimum BSc Eng/BEng degree in Engineering (Metallurgical/Chemical/Mechanical/Process/ Materials Sciences) or equivalent, with a strong emphasis on pyrometallurgy research and technology development.
Ideally, PhD in Engineering (Metallurgical/Chemical/Process/ Materials Science) or equivalent, with a strong emphasis on modelling competencies relevant to pyrometallurgy research and technology development.
Postdoctoral research experience, with strong emphasis on computational materials science modelling, is highly advantageous.
Familiarity with high performance computing and the use of shared/remote computational resources is desirable.
Professional recognition and registration are an added advantage.
Experience with postgraduate.
 
BEHAVIOURAL COMPETENCIES:
Team player who enjoys variety and has a strong affinity for planning and conducting new and innovative projects.
Passion for pyrometallurgy research, technology development and technology transfer.
Good interpersonal skills.
Ability to work in a stressful and demanding environment.
Willing to travel locally and internationally.
Prepared to work shifts in hot and dusty plant environments when required.
Ability to independently engage with industry leaders, operators and high-level international partners.
 
PLEASE APPLY HERE`,`PYROMETALLURGY SENIOR ENGINEER: MODELLING
Listing reference: minte_000273
Listing status: Online
Apply by: 27 August 2024
Position summary
Industry: Scientific, Research & Development
Job category: Research and Development
Location: Randburg
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
Mintek has exciting opportunities for a Senior Engineer within the Pyrometallurgy Division to conduct fundamental and applied research in the design, development and demonstration of pyrometallurgical processes and technologies. The role requires a strong understanding of CFD modelling, with particular emphasis on applying computational multiphysics and reduced-order models to solving complex coupled problems in pyrometallurgy. Contributing to human capital development and willingness to work towards a common purpose with a strong sense of equity and inclusion are non-negotiable attributes of the role.
 
Job description
KEY PERFORMANCE INDICATORS:
Performing the total scope of work in the Division, including business development, fundamental and applied research, technology demonstration, technology transfer and commercialisation.
Providing technical leadership in driving high impact RDI programmes, commercial projects, contract research and funding strategies to drive productivity and ensure the financial sustainability of the Division.
Formulating and executing disciplinary and multi-disciplinary assignments that require integration of specialist knowledge and skills, and function as a key technical resource in the Division. The objective is to apply in-depth understanding of thermophysical and thermochemical properties of materials to augment the Division’s capabilities in experimentation, testing and technology demonstration.
Conceptualising and drafting technical proposals for local and international funding, leading to the establishment and sustenance of world-class RDI infrastructure, research programmes, and human capital capacity at Mintek.
Providing technical and administrative support to the Division, including managing and coordinating tender and CAPEX processes to sustain world-class RDI infrastructure.
Contributing to human capital development through coaching and mentoring of colleagues, including providing postgraduate supervision where necessary.
Contributing to the visibility and credibility of the Division through building and sustaining long-term collaborations and partnerships, both locally and globally.
 
Minimum requirements
JOB KNOWLEDGE AND REQUIREMENTS: 
Minimum 5 years’ experience in pyrometallurgy research and technology development.
Demonstrated ability to develop experimental techniques, models and prototypes.
Demonstrable experience with designing and operating electric arc furnaces is an added advantage.
Strong understanding of computational multiphysics and reduced order modelling in problems involving fluid flow, heat transfer, and chemical reactions.
Proven experience with open source computational multiphysics modelling tools such as OpenFOAM®.
Experience in designing pyrometallurgical processes using thermochemical software tools such as PyroSim™ and FactSage™ is an added advantage.
Proven experience with coding in C and Python is an added advantage.
Proven experience in mechanical design packages such as FUSION360 or FreeCAD is an added advantage.
Demonstrable experienced in managing complex technical projects, particularly from concept to higher technology readiness levels.
Strong portfolio of publications in peer-reviewed journals is an added advantage.
Knowledge or experience with SHEQ systems is non-negotiable
Knowledge of technology transfer, commercialisation and product development is highly advantageous
Demonstrated ability to attract investment or R&D funding is highly advantageous.
 
QUALIFICATIONS:
Minimum MEng/MSc in Engineering (Metallurgical/ Chemical / Process/ Mechanical/Electrical) or equivalent, with a strong emphasis on pyrometallurgy research, design and technology development.
Ideally, a PhD in Engineering (Chemical/ Metallurgical/ Process/ Mechanical/ Electrical), or equivalent, with a strong focus in pyrometallurgy research, design and technology development.
Postdoctoral research experience, with strong emphasis on pyrometallurgy research and technology development, is highly advantageous.
Professional recognition and registration are an added advantage.
Experience with postgraduate supervision is an added advantage.
 
BEHAVIOURAL COMPETENCIES:
Team player who enjoys variety and has a strong affinity for planning and executing new and high impact research.
Passion for learning, pyrometallurgy research, technology development and technology transfer.
Excellent interpersonal skills.
Ability to work in a stressful and demanding environment.
Willing to travel locally and internationally.
Prepared to work shifts in hot and dusty plant environments when required.
Ability to independently engage with industry leaders, operators and high-level international partners.
Excellent writing and presentation skills.
 
PLEASE APPLY HERE`],postedDate:"26/8/2024",iframe:"",uuid:"p15549d79-c17e-4db3-958c-b5d85b3de15c"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/municipal-demarcation-board.png?1724694677",href:"https://www.govpage.co.za/municipal-demarcation-board-mdb-vacancies-blog/municipal-demarcation-board-mdb-vacancies2157607",title:"MUNICIPAL DEMARCATION BOARD (MDB) VACANCIES",content:[` 
MUNICIPAL DEMARCATION BOARD (MDB)
 `,`INDEPENDENT AUDIT, RISK AND ICT COMMITTEE CHAIRPERSON 
The Municipal Demarcation Board requires the services of a qualified and interested person to serve as an Independent Audit and Risk Committee Chairperson. 
An Audit, Risk and ICT Committee is an independent Committee constituted to review the control, governance, and risk management within an institution established in terms of Section 77 of the Public Finance Management Act (PFMA) and Treasury Regulations and operate according to its approved Charter. 
 
Minimum Requirements: 
Possess a relevant degree NQF level 8 qualification or equivalent qualification in the fields of Accounting (Chartered accountants), Auditing, Risk Management or Law. A relevant degree or equivalent qualification. An INFORMATION COMMUNICATION TECHNOLOGY qualification would be an added advantage. • Membership of a Public Sector Audit Committee Membership or IRMSA or registered as a CIA /CISA /CA / Finance professional in good standing with SAICA. 
 
Experience:
Have relevant experience in any of the following fields: Financial Accounting, Governance, Legal, Internal Auditing, Risk Management, and Information Communication Technology. 
Strong experience in finance, auditing, risk management, and compliance 
Prior experience in serving on an Audit and Risk Committee of a public institution with three years’ experience as an Audit Committee Chairperson (added advantage) 
In depth Knowledge and understanding of the PFMA and its regulations. 
Have exposure to the Government sector and familiarity with risk management practices. 
Have knowledge and understanding of internal controls, major accounting and public sector reporting issues. 
Knowledge and understanding of and exposure to legislation/policies (MFMA/GRAP/GAAP/National Treasury Regulations and practices notes relevant to the Board) 
Knowledge and understanding of the roles of internal and external audit. 
Knowledge and extensive experience in IT Governance frameworks will be an added advantage. 
Excellent communication skills (verbal and written). 
Preference will be given to applicants who have experience in serving on Audit and Risk Committees of Government and State-owned entities. 
 
KEY RESPONSIBILITIES AND FUNCTIONS: 
Understand the function of the Audit Committee and be able to lead constructive dialogue with Management. 
Understand the effective management of financial risk. 
Assist the MDB in fulfilling its oversight responsibilities with regard to financial internal control, risk management and ICT Governance. 
Assist the Accounting officer in the effective execution of his/her responsibilities. 
Regulate and discharge responsibilities as contained in the MDB’s Audit Charter, outlining formal terms of reference. 
Carry out the responsibilities as legislated by the Public Finance Management Act, 1999, the National Treasury Regulations, and the approved MDB’s Audit Charter. 
Fulfil oversight responsibilities to ensure that the MDB maintains an effective, efficient, and transparent systems of financial, risk management, governance, performance evaluation and internal control. 
Review the effectiveness of the Internal Audit activity and the work of external auditors. 
Review the MDB’s financial statements, performance information and monitor compliance with legislation.
Provide advice to the Chief Executive Officer on matters relating to, inter alia, internal audit; internal control; risk management; accounting policies; financial and non-financial information; effective governance and compliance with applicable legislation and prescripts. 
Review any reports released by the internal and external auditors and Management’s response thereto. 
Report annually to the Board on the status of risk management, governance, and controls within the MDB.`,`REMUNERATION PACKAGE: Member shall be remunerated according to SAICA rates and the tariffs approved by National Treasury. The term of office of the committee shall be for the period of 3 years. 
 
Interested persons are invited to apply by submitting a detailed CV’s, copy of ID, and qualifications via email to: recruitment@demarcation.org.za.

Applications submitted to any other demarcation email address will not be considered. 
 
Applicants will be required to give consent in terms of POPI Act for MDB to conduct pre- employment verification checks. 
 
Closing date: 06 September 2024. Late applications will not be considered and if you have not heard from the MDB within two months of the closing date, please accept that your application had been unsuccessful. 
 
The Board reserves the right not to make any appointment. 
 
APPROVED BY: 
THABO MANYONI
CHAIRPERSON OF THE BOARD`],postedDate:"26/8/2024",iframe:"",uuid:"p2c34ef8e-0cc1-414c-b7e0-05cd4f6bda14"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/national-arts-council-of-south-africa-nac.png?1724696808",href:"https://www.govpage.co.za/national-arts-council-of-south-africa-nac-vacancies-blog/national-arts-council-of-south-africa-nac-vacancies7552828",title:"NATIONAL ARTS COUNCIL OF SOUTH AFRICA (NAC) VACANCIES",content:[` 
NATIONAL ARTS COUNCIL OF SOUTH AFRICA (NAC)
 `,` 
 
 
FIXED TERM POSITION AVAILABLE 
 
PERSONAL ASSISTANT TO THE ARTS DEVELOPMENT MANAGER (ADM) 
(Salary package: DPSA level 7) 
Job Function: 
The National Arts Council of South Africa is looking to attract dynamic, passionate and innovative self-starters with a solid understanding of the Creative Industries Sector. 
 
REQUIREMENTS (full job specification is available upon request) 
PERSONAL ASSISTANT TO THE ARTS DEVELOPMENT MANAGER (ADM) 
To provide secretarial and administrative support to the Arts Development Unit and facilitate the smooth and effective day-to-day operations of the Arts Development Manager. 
 
Key Responsibilities 
Manage the diary of the relevant manager to ensure efficiencies on an ongoing basis within key deadlines. 
Manage incoming telephone calls of the relevant manager to ensure efficiencies on an ongoing basis within key deadlines. 
Plan relevant meetings and logistics on an ongoing basis within key deadlines. 
Manage correspondence of the relevant manager to ensure efficiencies on an ongoing basis within key deadlines. 
Compile accurate minutes of departmental meetings for record purposes on an ongoing basis within key deadlines. 
Manage travel arrangements for the relevant manager, department, council and committees to ensure efficiencies on an ongoing basis within key deadlines. 
Maintain paper and electronic filing systems for record keeping purposes on an ongoing basis within key deadlines. 
Maintain relationships with internal and external stakeholders to uphold the image of the entity on an ongoing basis within key deadlines. 
Perform tasks within budget to ensure compliance with policies and procedures on an ongoing basis within key deadlines. 
Maintain a clean audit through ensuring that processes and procedures are complied with on an ongoing basis within key deadlines. 
 
Key requirements 
Matric
Administrative and/or Secretarial qualification 
4-5 years’ experience in similar position 
2 years General Administration experience 
2 years Public and Private Sector Experience (Desirable) 
 
Knowledge and skills
MS Office Suite - Essential
Communication with stakeholders - Essential
Travel and diary management - Essential
Application review process - Essential
Report/submission writing - Essential
Knowledge in analyzing high volume of data - Desirable
Presentation skills
 
 
A cover letter and a detailed CV including three contactable referees and certified copies of qualifications should be addressed to the Human Resources Office at P O Box 500, Newtown, Johannesburg, 2113 or email: jobs@nac.org.za
 
Contact will be limited to shortlisted candidates. If you have not heard from the NAC by 27 September 2024, please note that your application has been unsuccessful. The NAC applies the Employment Equity Act in its recruitment process and strives for a staff complement that is representative of South Africa. 
 
Closing date: Monday, 09 September 2024 
 
FOR ENQUIRIES 
Contact Person : Ms. Florence Mohale 
Telephone number : 087 7000 683 
Email address : florence@nac.org.za
 
 
 
 
 `,`PROJECT/PESP ACCOUNTANT (PESP) 
(Fixed Term Contract) 
The National Arts Council of South Africa is looking to attract dynamic, passionate, innovative and creative self-starters with a solid understanding of the Creative Industries Sector for the President’s Employment Stimulus Programme Project. 
REQUIREMENTS (full job specifications are available upon request) 
1 x Project/PESP Accountant 
 
Minimum requirements 
5 years’ working experience. 
Public sector knowledge 
Reconciliations experience 
Audit experience 
Financial administration 
Ability to work long and late hours for the duration of the project. 
Working with large projects with high values 
Attention to detail. 
 
Minimum education requirement 
3 years’ Bachelors Degree: Accounting 
 
Knowledge areas
MS Office - Essential
Reconciliations - Essential
Accounts to trial balance including balance sheet. - Essential
Compliance - Essential
Managing operations and budgets - Essential
Planning and budgeting - Essential
Team working - Essential
Problem definition & analysis - Essential
 
Skills
Financial Accounting System (PASTEL) - Essential
 
 
A market related package will be negotiated with the successful candidate. If applicants have not heard from the NAC by 20 September 2024, please note that the application is unsuccessful. The NAC applies the Employment Equity Act in its recruitment process and strives for a staff complement that is representative of South Africa. The NAC reserves the right not to appoint. 
 
A cover letter and a detailed CV including three contactable referees and certified copies of qualifications should be addressed to the Human Resources Office at P O Box 500, Newtown, Johannesburg, 2113 or email: jobs@nac.org.za
 
Closing date: 06 September 2024 
 
FOR ENQUIRIES 
Contact Person : Ms. Florence Mohale 
Telephone number : 087 7000 683 
Email address : florence@nac.org.za`,`INTERIM FINANCE MANAGER 
(Salary package: DPSA level 12)
 
Job Function: 
The National Arts Council of South Africa is looking to attract dynamic, passionate and innovative self-starters with a solid understanding of the Creative Industries Sector. 
 
REQUIREMENTS (full job specification is available upon request) 
FINANCE MANAGER 
 
The Interim Finance Manager will have delegated responsibilities from the Interim Chief Financial Officer and will ensure that effective financial controls are in place, play an active role in risk management as well as account to the Interim Chief Financial Officer for financial success, asset management, finance resources, human resource management and compliance to all financial regulations. 

The Finance Manager will therefore assist Interim Chief Financial Offer in fulfilling all statutory responsibilities as outlined in the PFMA. 
 
Key Responsibilities 
Maintain, improve, and develop financial systems of the NAC. 
Implement financial, accounting and control systems according to GRAP and ensure financial/corporate governance throughout the NAC. 
Prepare annual financial statements in accordance with GRAP. 
Review all reconciliation accounts of the NAC. 
Prepare monthly management accounts and report to management, Council Committees and Council 
Reviewing of project and creditors payments 
Review payroll preparation and payouts. 
Provide financial and accounting services to the NAC management team. 
Assist the Chief Financial Officer with institutional budgeting and monitor expenditure. 
Review and Manage asset register. 
Assist with management of overall Supply Chain Management activities, processes, and procedures in line with the legislative framework. 
Liaise with the Internal auditors, Office of the Auditor General and relevant departments on behalf of the NAC regarding duties relating to the position 
Assist with financial reports of projects within the NAC. 
Assist with financial policy development and reviews. 
Assist with the monitoring of the Performance Information of the NAC. 
Ensure and manage the finances of the NAC. 
Risk management and operational risks 
Preparation of Governance meeting packs 
 
Key requirements 
• B Com/ B Compt degree and/or any recognizable/equivalent financial qualifications 
• Completed articles will be an added advantage. 
• Experience in a similar position and level of accountability will be an advantage. 
• Knowledge of financial systems including Pastel, Caseware, etc. 
• Strategic thinking and high level of financial literacy 
• Presentation, people management, communication, and reporting 
• In depth knowledge and required experience in applicable legislation as would relate to Finance and SCM. 
 
Attributes
Financial management skills. 
Negotiation skills 
Excellent verbal communication skills. 
Account management skills. 
Efficient and accurate with attention to detail. 
Assertiveness.
Able to work under pressure 
Business acumen. 
Judgment.
Delivery focus. 
Teamwork
Good management skills such as Planning; Leading; Organising; Coordination. 
 
 
An independent competency test will be conducted on candidates that are shortlisted by the interview panel. 
 
A cover letter and a detailed CV including three contactable referees and certified copies of qualifications should be addressed to the Human Resources Office at P O Box 500, Newtown, Johannesburg, 2113 or email: jobs@nac.org.za
 
Contact will be limited to shortlisted candidates. If you have not heard from the NAC by 20 September 2024, please note that your application has been unsuccessful. The NAC applies the Employment Equity Act in its recruitment process and strives for a staff complement that is representative of South Africa. 
 
Closing date: Friday, 06 September 2024 
 
FOR ENQUIRIES 
Contact Person : Ms. Florence Mohale 
Telephone number : 087 7000 683 
Email address : florence@nac.org.za`],postedDate:"26/8/2024",iframe:"",uuid:"pcd6a516e-db4a-4342-8d82-c256123a5d41"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/national-empowerment-fund-nef_orig.jpg",href:"https://www.govpage.co.za/national-empowerment-fund-nef-vacancies-blog/national-empowerment-fund-nef-vacancies9692010",title:"NATIONAL EMPOWERMENT FUND (NEF) VACANCIES",content:[` 
NATIONAL EMPOWERMENT FUND (NEF)
 `,`BOOKKEEPER
Listing reference: nef_000083
Listing status: Online
Apply by: 28 August 2024
Position summary
Industry: Financial Services
Job category: Bookkeeping
Location: Sandton
Contract: Permanent
Remuneration: Market Related
EE position: Yes
Introduction
The key purpose of this role is to oversee and maintain overall financial records by verifying, allocating and posting transactions. Additionally, balance all accounts by reconciling entries.
 
Job description
Maintain fixed asset register 
Manage bank reconciliations (cashbook) 
Maintain payroll journals 
Responsible for 3rd party payments of payroll service provider 
Maintain suspense account and general ledger 
Liaise with Management accountant in with regards to certain expenses as necessary 
Manage internal subsistence allowances
 
Minimum requirements
Qualification Requirements
B Com Accounting (or equivalent)
 
Experience / Skills Required
Relevant experience within a finance department which would include the following: 
At least 2 years’ experience in creditors/ accounting related environment 
Knowledge of reconciliations 
Good and solid knowledge and understanding of bookkeeping and creditors 
Review / preparation of journals 
Preparation of monthly reporting against budgets 
Involved in the preparation of year end financials 
Interaction with both internal and external audit 
Financial institution experience – (desirable) 
Thorough knowledge of all procurement principles and practises 
Understanding of basic business principles 
Negotiation skills 
Analytically strong.
The ability to make innovative but rational decisions. 
Ability to manage stakeholders 
Able to challenge payment/s if contrary to Regulations and policies 
Verbal and Written Communication
 
Personal Attributes/Behaviours/Attitudes
Fervent attention to detail 
Deadline driven 
Excellent planning and organisational skills 
Analytical skills 
Strong interpersonal skills 
Ability to work under pressure 
Flexibility – ability to handle erratic working hours 
Must have a professional disposition displaying integrity, be a team player and energetic; 
Ability to work under pressure and meet tight deadlines; 
Ability to liaise effectively at high level; and 
Possess and promote the highest standard of ethics
 
PLEASE APPLY HERE`,`CONSTRUCTION PROJECT MANAGER
Listing reference: nef_000084
Listing status: Online
Apply by: 28 August 2024
Position summary
Industry: Financial Services
Job category: Construction Project Management
Location: Sandton
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
To oversee the successful planning, execution, monitoring, and completion of construction projects funded by the NEF, ensuring projects are delivered on time, within budget, and to the highest standards of quality and compliance.
 
Job description
Project Planning and Execution:
Develop comprehensive project plans that detail all aspects of a project including scope, timelines, cost estimates, resource requirements, and risk management plans. 
Coordinate and oversee all project activities, ensuring adherence to project plans and specifications. 
Assist in establishing a client's requirements and undertaking feasibility studies. 
Cost Management:
Prepare and manage budgets for construction projects. 
Prepare and analyse costings for tenders.
Manage costs on a wide variety of new building projects and structures, such as residential developments, sports stadiums, roads and bridges, hospitals, offices and factories. 
Undertake costs analysis for repair and maintenance project work. 
Prepare early-stage budgets and detailed cost plans. 
Perform risk and value management and cost control. 
Establishing and operating cost and financial control systems. 
Monitor project expenditures and identify potential cost overruns early. 
Implement cost-saving measures without compromising quality and safety. 
At feasibility stage, ensure that the bills of quantities and construction methods are adhered to and provide advice to the project owners and financiers on the most economical way of achieving the best outcomes.
Quality Assurance:
Develop and enforce quality control processes and standards. 
Conduct regular inspections and audits to ensure compliance with quality standards. 
Address any quality issues promptly and effectively. 
Produce depreciation schedules of the various project components and advise on realistic insurance replacement costs. 
Valuing completed work and arranging payments. 
Contractor and Stakeholder Management:
Advise on procurement strategy. 
Preparing tender and contract documents, including bills of quantities. 
Evaluate and select qualified contractors and subcontractors. 
Allocate work to subcontractors. 
Manage contractor performance and ensure adherence to contracts. 
Maintain strong communication and relationships with all project stakeholders, including clients, contractors, and regulatory bodies. 
Maintain awareness of the different building contracts in current use. 
Work closely with architects, financiers, engineers, contractors, suppliers, project owners, accountants, insurance underwriters, legal professionals and with all other relevant authorities. 
Developing knowledge relevant to contract conditions and their applications. 
Providing advice on contractual claims.
Regulatory Compliance:
Act as a project manager for the project and provide guidance on the implications of health and safety regulations. 
Ensure all projects comply with municipal by-laws, building codes, and other relevant regulations. 
Obtain necessary permits and approvals for construction projects. 
Risk Management:
Identify potential risks and develop mitigation strategies. 
Identify, analyse and develop responses to commercial risks. 
Monitor and manage risks throughout the project lifecycle Reporting and Documentation: 
Prepare regular progress reports for senior management and stakeholders. 
Analyse outcomes and writing detailed progress reports. 
Maintain comprehensive project documentation, including contracts, change orders, and inspection reports.
Team Leadership and Development:
Lead, mentor, and develop the project team. 
Foster a collaborative and positive working environment. 
Performance Metrics:
Projects completed on time and within budget. 
Quality standards met or exceeded. 
Compliance with all regulatory requirements. 
Stakeholder satisfaction and positive feedback. 
Effective risk management with minimal impact on project delivery. 
Work Environment:
Based at NEF headquarters with frequent travel to project sites. 
Ability to work under pressure and meet tight deadlines.
 
Minimum requirements
Qualification Requirements
Bachelor’s degree in Civil Engineering, Construction Management, Quantity Surveying or a relevant field. 
Professional certification such as PMP (Project Management Professional), PRINCE2 or equivalent. 
Registration with relevant professional bodies (e.g., ECSA for engineers, SACPCMP for project managers, SACQSP for quantity surveyors). 
Registered member of the Association of South African Quantity Surveyors (ASAQS) is advantageous.
 
Experience/ Skills required
Minimum of 10 years’ experience in managing large-scale construction projects. 
Proven track record of managing projects within budget and time constraints. 
Experience in dealing with regulatory compliance and municipal by-laws. 
Extensive experience in working with contractors and subcontractors, including evaluating their qualifications and performance. 
Strong project management skills including planning, scheduling, budgeting, and resource allocation. 
Excellent knowledge of construction methods, materials, and legal regulations. 
Proficiency in project management software (e.g., MS Project, Primavera). 
Exceptional problem-solving and analytical skills. 
Strong communication and leadership abilities. 
Ability to perform risk management and mitigation. 
Credit experience is essential, including corporate restructurings and financial analysis. 
Cost planning, estimating and cost Analysis. 
Cost-in-use Studies and Value Management to establish a project budget.
 
Personal Attributes/Behaviours/Attitudes
Developing a well-defined project program/schedule 
Communicating effectively with the team 
Collaborating with stakeholders 
Regularly evaluating project progress 
Conducting performance assessments 
Adjusting strategies as needed 
Flexible and Transparent Planning 
Foresight into Risk Management
 
PLEASE APPLY HERE`],postedDate:"26/8/2024",iframe:"",uuid:"p96265889-8339-42cb-955e-b935f70ea985"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/national-library-south-africa-nlsa.jpg?1724695649",href:"https://www.govpage.co.za/national-library-south-africa-nlsa-vacancies-blog/national-library-south-africa-nlsa-vacancies1770097",title:"NATIONAL LIBRARY SOUTH AFRICA (NLSA) VACANCIES",content:[` 
NATIONAL LIBRARY SOUTH AFRICA (NLSA)
 `,`INVITATION TO SERVE AS THE CHAIRPERSON OF THE INFORMATION AND COMMUNICATION TECHNOLOGY STEERING COMMITTEE OF NATIONAL LIBRARY OF SOUTH AFRICA 
 
The National Library of South Africa) (NLSA (Schedule 3A Public Entity) is the custodian and provider of the nation’s key knowledge resources. The NLSA is mandated by the NLSA Act to collect and preserve published documents and to make them accessible thereby ensuring that knowledge is preserved for posterity and that information is available to all. 
 
The NLSA hereby invites applications from suitably qualified and experienced professionals from the Information and Communication Technology (ICT) sector to serve as the Chairperson of the Information and Communication Technology Steering Committee (ICTSC) per the following criteria: 
 
Qualifications:
Applicants should be in possession of a relevant bachelor’s degree at NQF level 8 in ICT, Computer Science or equivalent qualifications. 
Professional certifications such as Certified Information Systems Auditor (CISA) Certified in Risk and Information Systems Control (CRISC), Certified in the Governance Enterprise of Information Technology (CGEIT) etc. and membership with a relevant professional body will be an added advantage. 
 
Experience:
Applicants must have at least 5 years’ Senior Management experience in ICT, preferably in the Public Sector. 
Applicants should also have at least 3 years’ experience serving as a member of the ICTSC in the public or private sector environment. 
 
Key Outputs: 
The roles and responsibilities of the ICTSC Chairperson shall include chairing of the ICTSC whose responsibilities include, amongst others, oversight on the following: 
The management of ICT governance within NLSA: development and implementation of the CGICT Policy Framework, ICT Strategic Plan, ICT Implementation Plan. 
The implementation and progress reporting on the implementation of the CGICT Policy Framework, ICT Strategic Plan, ICT Implementation Plan to the Accounting Officer and Audit and Risk Committee as approved by the Board. 
The establishment of a functional ICT organisational structure, resources and capacity according to the needs and priorities of the NLSA. 
The development of a project plan for ICT initiative to organize and manage resources to achieve project objectives within the defined scope, quality, time and cost. 
Articulation of the ICT Risk Appetite and its management within the risk management practices of the NLSA. 
Performance monitoring of external ICT service providers through service level agreements and service management engagements. 
ICT security to ensure the protection of electronic information, information systems and infrastructure to maintain confidentiality, integrity and availability of information. `,`Terms of Office: 
The appointment shall be for a period of 3 years but may be subject to renewal at the discretion of the NLSA’s Board. However, NLSA applies a cooling-off period after the ICTSC Chairperson has served for a period of 6 years. 
 
Remuneration:
Remuneration will be paid in accordance with the National Treasury Circular: Remuneration of Non-official Members: Commissions and Committees of Inquiry and Audit Committees. 
 
Submission of Applications: 
Applications must be accompanied by a comprehensive CV, with certified copies of qualifications and identity documents (not older than six months). Applications must be submitted to: ICTSC@nlsa.ac.za

 
NLSA reserves the right not to make any appointment. 
 
Closing Date: 30 August 2024. Should you not receive correspondence from the NLSA one month after the closing date, please consider your application as unsuccessful.`],postedDate:"26/8/2024",iframe:"",uuid:"pb7021043-2368-4ed0-a17c-6c94c9dd9540"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/raf_orig.jpg",href:"https://www.govpage.co.za/road-accident-fund-raf-vacancies-blog/road-accident-fund-raf-vacancies7102322",title:"ROAD ACCIDENT FUND (RAF) VACANCIES",content:[` 
ROAD ACCIDENT FUND (RAF)
 `,` 
 
GRADUATE PROGRAMME: END-USER COMPUTING SERVICES (BUILDING SUPPORT)
Division:  Strategy and Transformation
Reference No:  4734
Location:  Centurion, Gauteng, ZA
Employment Type:  Graduate
Disability (EE targeted role):  Yes
T.A.S.K Grade:  09
Job Posting Salary:  Stipend
Job Posting End Date:  3 Sep 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
The RAF invites suitably qualified graduates to apply for its Graduate Development Programme in the Technology and Digital Department: End-User Computing Services (Business Support). The programme will run for a period of 18 to 24 months.
 
Purpose of the Graduate Development Programme: The Graduate Programme offers development opportunities to young talented, high potential individuals from diverse backgrounds for our future growth.  The programme provides opportunity and relevant work experience that aligns with the graduate’s skill set and identified talents.
 
The programme will provide the graduate with real work experience to explore and expand their raw talent within this key business unit.  It focusses on developing and honing technical, business and leadership skills, setting the stage for dynamic growth.
 
Developmental outcomes and deliverables for the respective programmes will include, but not be limited to the ones below:
Motor Vehicle Accident Processes and Procedures.
Customer Service.
IT Support.
Hardware Maintenance and Repairs.
Computer/ System Network Support.
Unix.
Citrix.
Windows.
Telecoms.
 
Qualifications and other Requirements:
Certified copy of Grade 12/ NQF 4 level Certificate.
Certified copy of B Degree in Information Technology or academic transcript.
Applicants in their final year of study must submit their latest semester academic results available at the time of their application. 
Certified copy of your ID.
Your CV and motivational letter.
 
Behavioural and Technical competencies required:
The successful candidate will be required to display the following competencies in this role:
Planning, Organising and Coordinating.
Personal Mastery.
Judgement and Decision Making.
Ethics and Values.
Client Service Orientation.
Resilience.
Written and verbal communication skills.
Attention to detail and analytical skills.
Basic computer literacy in MS Office.
 
Roles and Duties:
Ensure that all Technology and Digital modules of the development programme are completed within the specified timeframe.
Adhere to organisational policies, standards and procedures.
Capture and report information.
Report and communicate ideas and recommendations.
Ensure effective team relationships and support.
Build and maintain partnerships and relationships with all stakeholders within the business and communities.
Engage relevant stakeholders to gain the necessary business and community context.
 
Terms and Conditions:
Contract of Employment:  Fixed term contract appointment for the duration of the graduate programme, with prospects of permanent employment upon successful completion of the programme.
Date of employment:  01 February 2025.
Location:  RAF Head Office, Centurion.
Appointment will be subjected to the successful completion of Degree and final academic results to secure admission to the graduate programme. 
Prospective employees will be subjected to security vetting.
 
INSTRUCTIONS TO PROSPECTIVE APPLICANTS
Indicate the name and reference number of the Graduate Development Programme you are applying for in the subject line.
Submit a short CV (three pages maximum) and a motivational letter as to why your application should be considered.  
Please note that applications with no academic transcripts will not be considered.
Applicants who have been on a Graduate Development Programme before will not be considered.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 `,` 
 
 
 
 
GRADUATE PROGRAMME: MEDICAL ADVISORY AND RISK MANAGEMENT
Division:  Claims
Reference No:  4728
Location: Centurion, Gauteng, ZA
Employment Type:  Graduate
Disability (EE targeted role):  Yes
T.A.S.K Grade:  09
Job Posting Salary:  Stipend
Job Posting End Date:  3 Sep 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
The RAF invites suitably qualified graduates to apply for its Graduate Development Programme in the Medical Risk and Business Solutions:  Medical Advisory and Risk Management.   The programme will run for a period of 18 to 24 months.
 
Purpose of the Graduate Programme: The Graduate Programme offers development opportunities to young talented, high potential individuals from diverse backgrounds for our future growth.  The programme provides opportunity and relevant work experience that aligns with the graduate’s skill set and identified talents.
 
The programme will provide the graduates with real work experience to explore and expand their raw talent within this key business unit.  It focusses on developing and honing technical, business and leadership skills, setting the stage for dynamic growth.
 
Developmental outcomes and deliverables for the programme will include, but not be limited to the below:
Motor Vehicle Accident Processes and Procedures.
Medical Tariffs.
Medical Advisory.
Clinical Research Protocols.
Medical Policy and Research.
Medical Bill Review.
 
Qualifications and Other Requirements:
A certified copy of your Grade 12 or NQF 4 level certificate.
A certified copy of your Bachelor’s Degree (BSc) in Health Sciences/Nursing/Pharmacy related qualification or academic transcript.
Valid registration with relevant statuary body (SANC, SAPC, HPCSA etc.).
Applicants in their final year of study must submit their latest semester academic results available at the time of their application. 
Certified copy of your ID.
Your CV and motivational letter.
 
Behavioural and Technical competencies required:
The successful candidate will be required to display the following competencies in this role:
Planning, Organising and Coordinating.
Personal Mastery.
Judgement and Decision Making.
Ethics and Values.
Client Service Orientation.
Resilience.
Written and verbal communication skills.
Attention to detail and analytical skills.
Basic computer literacy in MS Office.
 
Role and duties:
Complete all Medical Advisory and Risk Management modules of the development programme within the specified time frame.
Adhere to organisational policies, standards, and procedures.
Capture and report information as required.
Report and communicate ideas and recommendations effectively.
Foster effective team relationships and provide support to colleagues as needed.
Build and maintain partnerships and relationships with stakeholders within the business and communities.
Engage with relevant stakeholders to gain necessary business and community context.
 
Terms and Conditions:
Contract of Employment:  Fixed term contract appointment for the duration of the graduate programme, with prospects of permanent employment upon successful completion of the programme.
Date of employment:  01 February 2025.
Location:  RAF Head Office, Centurion.
Appointment will be subjected to the successful completion of Degree and final academic results to secure admission to the graduate programme. 
Prospective employees will be subjected to security vetting.
 
INSTRUCTIONS TO PROSPECTIVE APPLICANTS
Indicate the name and reference number of the Graduate Development Programme you are applying for in the subject line.
Submit a short CV (maximum three pages) and a motivational letter as to why your application should be considered.
Please note that applications with no academic transcripts will not be considered.
Applicants who have been on a Graduate Development Programme before will not be considered.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 `,` 
 
 
 
 
GRADUATE PROGRAMME: CUSTOMER EXPERIENCE
Division:  Strategy and Transformation
Reference No:  4731
Location:  Centurion, Gauteng, ZA
Employment Type:  Graduate
Disability (EE targeted role):  Yes
T.A.S.K Grade:  09
Job Posting Salary:  Stipend
Job Posting End Date:  3 Sep 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
The RAF invites suitably qualified graduates to apply for its Graduate Development Programme in the Customer Experience Department: Customer Experience. The programme will run for a period of 18 to 24 months.
 
Purpose of the Graduate Development Programme: The Graduate Programme offers development opportunities to young talented, high potential individuals from diverse backgrounds for our future growth.  The programme provides opportunity and relevant work experience that aligns with the graduate’s skill set and identified talents.
 
The programme will provide the graduate with real work experience to explore and expand their raw talent within this key business unit.  It focusses on developing and honing technical, business and leadership skills, setting the stage for dynamic growth.
 
Developmental outcomes and deliverables for the respective programmes will include, but not be limited to the ones below:
Motor Vehicle Accident Processes and Procedures.
Call Centre Management.
Customer Experience Management.
Customer Service Management.
Customer Interaction and Relationship Management.
Customer Recovery Management.
Quality Management.
Workforce Planning.
Customer Analytics.
 
Qualifications and other Requirements:
Certified copy of Grade 12/ NQF 4 level Certificate.
Certified copy of your B Degree in Customer Service/ Customer Management related qualification or academic transcript.
Applicants in their final year of study must submit their latest semester academic results available at the time of their application. 
Certified copy of your ID.
Your CV and motivational letter.
 
Behavioural and Technical competencies required:
The successful candidate will be required to display the following competencies in this role:
Planning, Organising and Coordinating.
Personal Mastery.
Judgement and Decision Making.
Ethics and Values.
Client Service Orientation.
Resilience.
Written and verbal communication skills.
Attention to detail and analytical skills.
Basic computer literacy in MS Office.
 
  Roles and Duties:
Ensure that all Customer Experience modules of the development programme are completed within the specified timeframe.
Adhere to organisational policies, standards and procedures.
Capture and report information.
Report and communicate ideas and recommendations.
Ensure effective team relationships and support.
Build and maintain partnerships and relationships with all stakeholders within the business and communities.
Engage relevant stakeholders to gain the necessary business and community context.
 
Terms and Conditions
Contract of Employment:  Fixed term contract appointment for the duration of the graduate programme, with prospects of permanent employment upon successful completion of the programme.
Date of employment:  01 February 2025.
Location:  RAF Head Office, Centurion.
Appointment will be subjected to the successful completion of Degree and final academic results to secure admission to the graduate programme. 
Prospective employees will be subjected to security vetting.
 
 
INSTRUCTIONS TO PROSPECTIVE APPLICANTS
Indicate the name and reference number of the Graduate Development Programme you are applying for in the subject line.
Submit a short CV (three pages maximum) and a motivational letter as to why your application should be considered.  
Please note that applications with no academic transcripts will not be considered.
Applicants who have been on a Graduate Development Programme before will not be considered.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 `,` 
 
 
 
 
GRADUATE PROGRAMME: OPERATIONS AND CLOUD SERVICES (INFRASTRUCTURE SERVICES)
Division:  Strategy and Transformation
Reference No:  4732
Location: Centurion, Gauteng, ZA
Employment Type:  Graduate
Disability (EE targeted role):  Yes
T.A.S.K Grade:  09
Job Posting Salary:  Stipend
Job Posting End Date:  3 Sep 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
The RAF invites suitably qualified graduates to apply for its Graduate Development Programme in the Technology and Digital Department: Operations and Cloud Services (Infrastructure Services). The programme will run for a period of 18 to 24 months.
 
Purpose of the Graduate Development Programme: The Graduate Programme offers development opportunities to young talented, high potential individuals from diverse backgrounds for our future growth.  The programme provides opportunity and relevant work experience that aligns with the graduate’s skill set and identified talents.
 
The programme will provide the graduate with real work experience to explore and expand their raw talent within this key business unit.  It focusses on developing and honing technical, business and leadership skills, setting the stage for dynamic growth.
 
 
Developmental outcomes and deliverables for the respective programmes will include, but not be limited to the ones below:
Motor Vehicle Accident Processes and Procedures.
Storage and Back-up.
Demand and Monitoring.
Citrix System.
Cloud Migration.
Unix System.
Windows.
Exchange.
Networks
Telecoms.
 
Qualifications and other Requirements:
Certified copy of Grade 12/ NQF 4 level Certificate.
Certified copy of your B Degree in Information Technology, majoring/exposure to Network and System Administration or Applications Development disciplines related qualification or academic transcript.
Applicants in their final year of study must submit their latest semester academic results available at the time of their application. 
Certified copy of your ID.
Your CV and motivational letter.
 
Behavioural and Technical Competencies Required:
The successful candidate will be required to display the following competencies in this role:
Planning, Organising and Coordinating.
Personal Mastery.
Judgement and Decision Making.
Ethics and Values.
Client Service Orientation.
Resilience.
Written and verbal communication skills.
Attention to detail and analytical skills.
Basic computer literacy in MS Office.
 
Role and Duties:
Ensure that all Technology and Digital modules of the development programme are completed within the specified timeframe.
Adhere to organisational policies, standards and procedures.
Capture and report information.
Report and communicate ideas and recommendations.
Ensure effective team relationships and support.
Build and maintain partnerships and relationships with all stakeholders within the business and communities.
Engage relevant stakeholders to gain the necessary business and community context.
 
Terms and Conditions
Contract of employment: Fixed Term contract appointment for the duration of the graduate programme, with prospects of permanent employment upon successful completion of the programme.
Date of employment:  01 February 2025.
Location:  RAF Head Office, Centurion.
Appointment will be subjected to the successful completion of Degree and final academic results to secure admission to the graduate programme. 
Prospective employees will be subjected to security vetting.
 
INSTRUCTIONS TO PROSPECTIVE APPLICANTS
Indicate the name and reference number of the Graduate Development Programme you are applying for in the subject line.
Submit a short CV (three pages maximum) and a motivational letter as to why your application should be considered.  Please note that applications with no academic transcripts will not be considered.
Applicants who have been on a Graduate Development Programme before will not be considered.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful

Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 `,` 
 
 
 
 
GRADUATE PROGRAMME: CYBERSECURITY
Division:  Strategy and Transformation
Reference No:  4733
Location: Centurion, Gauteng, ZA
Employment Type:  Graduate
Disability (EE targeted role):  Yes
T.A.S.K Grade:  09
Job Posting Salary:  Stipend
Job Posting End Date:  3 Sep 2024
 
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
 
 
The RAF invites suitably qualified graduates to apply for its Graduate Development Programme in the Technology and Digital Department: Cybersecurity and Governance, Risk and Compliance. The programme will run for a period of 18 to 24 months.
 
Purpose of the Graduate Development Programme: The Graduate Programme offers development opportunities to young talented, high potential individuals from diverse backgrounds for our future growth.  The programme provides opportunity and relevant work experience that aligns with the graduate’s skill set and identified talents.
 
The programme will provide the graduate with real work experience to explore and expand their raw talent within this key business unit.  It focusses on developing and honing technical, business and leadership skills, setting the stage for dynamic growth.
 
Developmental outcomes and deliverables for the respective programmes will include, but not be limited to the ones below:
Motor Vehicle Accident Processes and Procedures.
Data Security.
Identity and Access Management.
Cloud Security.
Network Security.
Application Security
SAP Security.
 
Qualifications and other Requirements:
Certified copy of Grade 12/ NQF 4 level Certificate.
Certified copy of Degree in Information Technology, majoring/ exposure to IT Security related qualification or academic transcript.
Applicants in their final year of study must submit their latest semester academic results available at the time of their application. 
Certified copy of your ID.
Your CV and motivational letter.
 
Behavioural and Technical competencies required:
The successful candidate will be required to display the following competencies in this role:
Planning, Organising and Coordinating.
Personal Mastery.
Judgement and Decision Making.
Ethics and Values.
Client Service Orientation.
Resilience.
Written and verbal communication skills.
Attention to detail and analytical skills.
Basic computer literacy in MS Office.
 
Roles and Duties:
Ensure that all Technology and Digital modules of the development programme are completed within the specified timeframe.
Adhere to organisational policies, standards and procedures.
Capture and report information.
Report and communicate ideas and recommendations.
Ensure effective team relationships and support.
Build and maintain partnerships and relationships with all stakeholders within the business and communities.
Engage relevant stakeholders to gain the necessary business and community context.
 
Terms and Conditions:
Contract of Employment: Fixed term contract appointment for the duration of the graduate programme, with prospects of permanent employment upon successful completion of the programme.
Date of employment:  01 February 2025.
Location:  RAF Head Office, Centurion.
Appointment will be subjected to the successful completion of Degree and final academic results to secure admission to the graduate programme. 
Prospective employees will be subjected to security vetting.
 
INSTRUCTIONS TO PROSPECTIVE APPLICANTS
Indicate the name and reference number of the Graduate Development Programme you are applying for in the subject line.
Submit a short CV (three pages maximum) and a motivational letter as to why your application should be considered.  
Please note that applications with no academic transcripts will not be considered.
Applicants who have been on a Graduate Development Programme before will not be considered.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 `,`GRADUATE PROGRAMME: ACTUARIAL ANALYSIS AND QUANTIFICATION
Division:  Claims
Reference No:  4727
Location: Centurion, Gauteng, ZA
Employment Type:  Graduate
Disability (EE targeted role):  Yes
T.A.S.K Grade:  09
Job Posting Salary:  Stipend
Job Posting End Date:  3 Sep 2024
 
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
The RAF invites suitably qualified graduates to apply for its Graduate Development Programme in the Actuarial Quantification and Claims Risk Department: Actuarial Analysis and Quantification. The programme will run for a period of 18 to 24 months.
 
The graduates in training will be developed in their roles as part of a formal development programme to ensure that experience is acquired, and sufficient skills are available to the business. They will learn how to apply theory in practice as part of the programme outcomes.
 
Actuarial Analysis and Quantification
 
Purpose of the Graduate Development Programme: The Graduate Programme offers development opportunities to young talented, high potential individuals from diverse backgrounds for our future growth.  The programme provides opportunity and relevant work experience that aligns with the graduate’s skill set and identified talents.
 
The programme will provide the graduates with real work experience to explore and expand their raw talent within this key business unit.  It focusses on developing and honing technical, business and leadership skills, setting the stage for dynamic growth.
 
Developmental outcomes and deliverables for the respective programme will include, but not be limited to the below:
Motor Vehicle Accident Claims Processes and Procedures.
Actuarial Quantum of Damages in terms of Loss of Income and Loss of Support.
Professional Actuarial Report Writing.
Actuarial Data Management and Investigations.
Actuarial Forecasting Model Development.
Actuarial Liability Valuations.
Revenue Forecasting Models.
Analytical Root Cause Analysis.
 
Qualifications and Other Requirements:
A certified copy of your Grade 12 or NQF 4 level certificate.
A certified copy of your Bachelor’s Degree in Actuarial Science, Mathematics, Statistics, Data Science related qualification or academic transcript.
Applicants in their final year of study must submit their latest semester academic results available at the time of their application. 
Certified copy of your ID.
Your CV and motivational letter.
 
Behavioural and Technical Competencies Required:
The successful candidate will be required to display the following competencies in this role:
Planning, Organising and Coordinating.
Personal Mastery.
Judgement and Decision Making.
Ethics and Values.
Client Service Orientation.
Resilience.
Written and verbal communication skills.
Attention to detail and analytical skills.
Basic computer literacy in MS Office.
 
Role and Duties:
Complete all Actuarial Analysis and Quantification modules of the development programme within the specified time frame.
Adhere to organisational policies, standards, and procedures.
Capture and report information as required.
Report and communicate ideas and recommendations effectively.
Foster effective team relationships and provide support to colleagues as needed.
Build and maintain partnerships and relationships with stakeholders within the business and communities.
Engage with relevant stakeholders to gain necessary business and community context.
 
Terms and Conditions:
Contract of Employment:  Fixed term contract appointment for the duration of the graduate programme, with prospects of permanent employment upon successful completion of the programme.
Date of employment:  01 February 2025.
Location:  RAF Head Office, Centurion.
Appointment will be subjected to the successful completion of Degree and final academic results to secure admission to the graduate programme. 
Prospective employees will be subjected to security vetting.
 
INSTRUCTIONS TO PROSPECTIVE APPLICANTS
Indicate the name and reference number of the Graduate Development Programme you are applying for in the subject line.
Submit a short CV (three pages maximum) and a motivational letter as to why your application should be considered.  
Please note that applications with no academic transcripts will not be considered.
Applicants who have been on a Graduate Development Programme before will not be considered.
 
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »`,`SPECIALIST: CYBERSECURITY AWARENESS
Division:  Strategy and Transformation
Reference No:  4713
Location:  Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  13
Job Posting Salary:  R668,708.00
Job Posting End Date:  3 Sep 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to the Manager: IT Risk and Governance, the successful incumbent is responsible for developing and implementing cybersecurity education and training programs for the organisation across all its Divisions and Departments in all Regions. The role is critical to promote a culture of security mindfulness among all employees and ensure that they are equipped to recognize and respond to cybersecurity threats effectively.
 
Key Performance Areas
 
Cybersecurity Awareness
Program Development: Design and deploy a dynamic cybersecurity awareness program that addresses current threats, regulatory requirements, and industry best practices.
Ensure the program is engaging and accessible to all employees, regardless of their technical background.
Content Creation: Produce a wide range of educational materials, including interactive training modules, newsletters, videos, and presentations tailored to different roles within the organisation.
Training and Workshops: Organise and conduct regular cybersecurity training sessions, workshops, and webinars for employees, focusing on relevant topics such as phishing, password security, and secure internet practices.
Phishing Simulations: Plan and execute simulated phishing campaigns to assess employee vulnerability and provide targeted training to improve their ability to identify and report malicious emails.
Feedback and Improvement: Collect and analyse feedback from training sessions and simulations to continuously improve the cybersecurity awareness program.
Monitor the latest cybersecurity trends and threats to keep the program up to date.
 
Auditable Record Keeping
Implement clear processes and procedures to guarantee the maintenance of auditable records for all security activities under your responsibility.
Keep precise records of training and simulations.
Ensure that records are readily available for auditing within the stipulated deadlines.
 
Policy Review and Implementation
Contribute to developing and implementing departmental policy, standards & procedures, and processes.
Keep up to date with effective policy and practice execution strategies.
 
Reporting
Track and report on the progress and effectiveness of the cybersecurity awareness program to senior management, including metrics on employee participation and improvement.
Assist in creating and submitting reports to various governance entities.
Help establish effective reporting mechanisms for management, projects, or performance insights.
Consistently offer progress reports and make timely submissions to aid in management decisions.
 
Cross Functional Collaboration
Work closely with ICT and HR departments to integrate cybersecurity awareness into the onboarding process for new hires and to develop policies that reinforce a secure organizational culture.
Work closely with the ICT, Legal, Compliance, HR and L&D departments to define cybersecurity awareness program that meets the organisational needs.
Deal with inquiries and requests for information from both internal and external stakeholders related to your role.
 
Draft and Maintain Documented Standards, Processes and Procedures for the Team
Create comprehensive standards, processes, and procedures for cyber security awareness.
Keep all related standards, processes, procedures, and supporting documents up-to-date and authorised in accordance with RAF policy and governance frameworks.
Follow RAF policies, standards, processes, and procedures diligently.
 
Incident Response and Remediation Management for the ICT Environment
Support the cyber incident response team by contributing to post-incident reports and lessons learned to incorporate real-world scenarios into the awareness program.
Thoroughly investigate incidents and apply appropriate corrective actions where necessary to address and resolve issues related to your domain.
Act promptly to incidents and requests, ensuring resolution within the mandated time frames to comply with legal obligations.
In the event of a security breach or incident, conduct a detailed investigation, analysis, and review to understand the root cause and impact to RAF users.
Communicate accordingly to different stakeholders to maintain the right levels of knowledge during incidents.
Work in close coordination with the rest of the cybersecurity and networks teams to enhance security posture.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in Information Technology or related qualification.
ITIL or COBIT will be advantageous.
Relevant 5 - 7 years’ experience in Information Security related environment with demonstratable experience of running Cyber Awareness Programs.
Experience with Phishing Simulation Tools such as  KnowBe4, Proofpoint, or PhishMe which allows organisations to create and send simulated phishing emails to employees.
Experience with Cyber Awareness Learning Management Systems platforms that offer a centralised place for cybersecurity training materials, allowing for the creation, distribution, and tracking of cyber awareness courses and content.
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »`,`SPECIALIST: NETWORK SEC & CRYPTOGRAPHY
Division:  Strategy and Transformation
Reference No:  4716
Location: Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  15
Job Posting Salary:  R0.00
Job Posting End Date:  3 Sep 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to the Manager: Cyber Security Operations, the successful incumbent is accountable to protect and maintain the confidentiality, integrity and availability of all data processed on the RAF’s ICT systems and networks.
 
Key Performance Areas
 
Cryptography
Develop encryption algorithms by designing complex algorithms that convert data into a format that can be only understood by those who possess a unique decryption key, ensuring the confidentiality of the information.
Analyse and test security systems by evaluating existing encryption systems for vulnerabilities and perform rigorous testing to ensure that there are no weaknesses that could be exploited by cybercriminals.
Ensure the integrity and security of data in transit and at rest by implementing cryptographic techniques, such as digital signatures and public key infrastructures (PKIs).
Ensure that encryption practices comply with relevant laws, regulations, and industry standards related to data security and privacy.
 
Network Security
Support in the design and implementation, of security measures and protocols such as firewalls, private access, intrusion detection systems, and encryption technologies to protect network infrastructure.
Monitor network security systems and logs for signs of intrusion, malware, and unauthorised access.
Conduct regular network assessments to identify vulnerabilities and risks. Develop strategies to mitigate identified risks and improve the overall security posture of the organisation.
Continuously monitor network security systems and logs for irregular activities, potential breaches, and vulnerability exploits.
Regularly review firewall settings and rules to verify correct implementation and effectiveness against unauthorised access and threats.
 
Incident Response and Remediation Management for Systems and Networks team
Thoroughly investigate incidents and apply appropriate corrective actions where necessary to address and resolve issues.
Act promptly to incidents and requests, ensuring resolution within the mandated time frames to comply with legal obligations.
In the event of a security breach or incident, conduct a detailed investigation, analysis, and review to understand the root cause and impact. This will ensure there are strategies to prevent future occurrences.
Document all network security and cryptography incidents or requests in the RAF incident management system.
Work in close coordination with the cybersecurity and networks teams to enhance security protocols, respond efficiently to security incidents, and proactively work on strategies to avert potential threats in the future.
 
Implement Security Controls Across RAF Systems and Networks under your Control
Verify that all requests and changes receive proper authorisation before they are implemented.
Guarantee the implementation of controls strictly follows the RAF change control procedure.
Detect potential security breaches both before and after control implementations.
Develop, apply, and keep updated processes and procedures to ensure the consistent correct functioning of security solutions under your management.
 
ICT Security Awareness
Advice regarding compliance with relevant legislation and regulations pertaining to the RAF Network Security and Cryptography requirements.
Provide advice and handle enquiries relating to Network Security and Cryptography.
 
Monitoring, Reviewing and Reporting on ICT Security
Manage all monitoring, reviewing, and reporting tasks for the systems and applications you oversee.
Regularly check, evaluate, and reports on the compliance status of ICT systems and networks.
Monitor, evaluate, and report on any potential security risks or incidents in ICT systems and networks.
Offer advice on revisions to information systems (including user requirements, functional and technical designs, and project documentation) to ensure they align with approved security policies, standards, processes, and procedures.
 
Auditable Record Keeping
Create and uphold comprehensive documentation for all monitoring and reviewing activities.
Keep precise records of any breaches or incidents, adhering to established protocols.
Ensure that records are readily available for auditing within the stipulated deadlines.
 
Policy Review and Implementation
Contribute to developing and implementing departmental policy, standards & procedures, and processes.
Keep up to date with effective policy and practice execution strategies.
Create comprehensive standards, processes, and procedures for network security and cryptography.
 
Reporting
Assist in creating and submitting reports to various governance entities.
Help establish effective reporting mechanisms for management, projects, or performance insights.
Consistently offer progress reports and make timely submissions to aid in management decisions.
 
Stakeholder Management
Aid in proactive and progressive relationships with key stakeholders.
Deal with inquiries and requests for information from both internal and external stakeholders.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in Information Technology related qualification.
ICT Security certificate together with a CISSP/ CEH or similar international ICT Security certification.
Relevant 5 - 7 years’ experience in ICT Security with specialities in system and network security environment.
Experience in symmetric and asymmetric encryption, hash functions, digital signatures, cryptographic protocols, and common algorithms (AES, RSA, SHA,).
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »`],postedDate:"26/8/2024",iframe:"",uuid:"p0ddeb20e-bf78-45c3-a97a-989c80b435f2"}],ie={"commission for conciliation, mediation and arbitration (ccma) vacancies":"https://www.govpage.co.za/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies-blog/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies4835161","commission for gender equality (cge) vacancies":"https://www.govpage.co.za/commission-for-gender-equality-cge-vacancies-blog/commission-for-gender-equality-cge-vacancies3117544","eskom vacancies":"https://www.govpage.co.za/eskom-vacancies-blog/eskom-vacancies6208801","export credit insurance corporation of south africa soc limited (ecic) vacancies":"https://www.govpage.co.za/export-credit-insurance-corporation-of-south-africa-soc-limited-ecic-vacancies-blog/export-credit-insurance-corporation-of-south-africa-soc-limited-ecic-vacancies7549710","financial intelligence centre (fic) vacancies":"https://www.govpage.co.za/financial-intelligence-centre-fic-vacancies-blog/financial-intelligence-centre-fic-vacancies7064953","financial sector conduct authority (fsca) vacancies":"https://www.govpage.co.za/financial-sector-conduct-authority-fsca-vacancies-blog/financial-sector-conduct-authority-fsca-vacancies5652419","health professions council of south africa (hpcsa) vacancies":"https://www.govpage.co.za/health-professions-council-of-south-africa-hpcsa-vacancies-blog/health-professions-council-of-south-africa-hpcsa-vacancies1413336","housing development agency (hda) vacancies":"https://www.govpage.co.za/housing-development-agency-hda-vacancies-blog/housing-development-agency-hda-vacancies8719088","human science research council (hsrc) vacancies":"https://www.govpage.co.za/human-science-research-council-hsrc-vacancies-blog/human-science-research-council-hsrc-vacancies7022760","independent communications authority of south africa (icasa) vacancies":"https://www.govpage.co.za/independent-communications-authority-of-south-africa-icasa-vacancies-blog/independent-communications-authority-of-south-africa-icasa-vacancies9220849","industrial development corporation (idc) vacancies":"https://www.govpage.co.za/industrial-development-corporation-idc-vacancies-blog/industrial-development-corporation-idc-vacancies3265488","information regulator (south africa) vacancies":"https://www.govpage.co.za/information-regulator-south-africa-vacancies-blog/information-regulator-south-africa-vacancies2829537","legal aid vacancies":"https://www.govpage.co.za/legal-aid-vacancies-blog/legal-aid-vacancies4758861","mintek vacancies":"https://www.govpage.co.za/mintek-vacancies-blog/mintek-vacancies2330167","municipal demarcation board (mdb) vacancies":"https://www.govpage.co.za/municipal-demarcation-board-mdb-vacancies-blog/municipal-demarcation-board-mdb-vacancies2157607","national arts council of south africa (nac) vacancies":"https://www.govpage.co.za/national-arts-council-of-south-africa-nac-vacancies-blog/national-arts-council-of-south-africa-nac-vacancies7552828","national empowerment fund (nef) vacancies":"https://www.govpage.co.za/national-empowerment-fund-nef-vacancies-blog/national-empowerment-fund-nef-vacancies9692010","national library south africa (nlsa) vacancies":"https://www.govpage.co.za/national-library-south-africa-nlsa-vacancies-blog/national-library-south-africa-nlsa-vacancies1770097","road accident fund (raf) vacancies":"https://www.govpage.co.za/road-accident-fund-raf-vacancies-blog/road-accident-fund-raf-vacancies7102322"},ae={title:ee,blogPosts:ne,departments:ie},te="govpage-private-sector",oe=[],se={},re={},le={title:te,blogPosts:oe,departments:se,businesses:re},w=10;function me(){const[a,r]=g.useState(1),[t,s]=g.useState(null);g.useEffect(()=>{if(t){const p=document.querySelector(".modal a.btn.btn-primary");p&&p.remove()}},[t]);const n=_(B,K,ae,W,$,le),o=Math.ceil(n.length/w),l=n.slice((a-1)*w,a*w),d=p=>{r(p)},h=p=>{s(p)},c=()=>{s(null)};return e.createElement("div",null,e.createElement(P,{paginatedData:l,onPostClick:h}),e.createElement(C,{currentPage:a,totalPages:o,onPageChange:d}),t&&e.createElement("div",{className:"modal",onClick:c},e.createElement("div",{className:"modal-content",onClick:p=>p.stopPropagation()},e.createElement("span",{className:"close",onClick:c},"×"),e.createElement("div",{className:"modal-body"},e.createElement("img",{src:t.imgSrc||t.iconLink,alt:"company logo"}),e.createElement("h2",null,t.title||t.jobTitle),e.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:t!=null&&t.details?t.details:j((t==null?void 0:t.content)||"")}}),t.apply&&e.createElement("a",{href:t==null?void 0:t.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),t.href&&e.createElement("a",{href:t==null?void 0:t.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}export{me as default};
