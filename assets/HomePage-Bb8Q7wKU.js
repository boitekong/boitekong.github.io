import{R as e,P as i,r as g,A as L,j as x,k as q}from"./vendor-DasOq3Un.js";import{u as F,c as j,f as B}from"./index-C4nVUdUn.js";/* empty css             */function C({currentPage:t,totalPages:r,onPageChange:a}){const s=()=>{const o=[],l=Math.max(1,t-1),d=Math.min(r,l+3);for(let h=l;h<=d;h++)o.push(h);return o},n=o=>{a(o);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return e.createElement("div",{className:"pagination"},e.createElement("button",{onClick:()=>n(t-1),disabled:t===1},"Previous"),s().map(o=>e.createElement("button",{key:o,className:o===t?"active":"",onClick:()=>n(o)},o)),e.createElement("button",{onClick:()=>n(t+1),disabled:t===r},"Next"))}C.propTypes={currentPage:i.number.isRequired,totalPages:i.number.isRequired,onPageChange:i.func.isRequired};const S=({pdfImages:t})=>{const[r,a]=g.useState(1),[s,n]=g.useState(!1),[o,l]=g.useState(1),d=g.useRef(null),h=()=>{const m=new Image;m.src=t[o-1],m.onload=()=>{const u=d.current,f=u.getContext("2d"),v=window.devicePixelRatio||1,D=s?window.innerWidth:u.parentElement.clientWidth,O=Math.min(D/m.width,1),A=r*O,y=m.width*A,b=m.height*A;u.width=y*v,u.height=b*v,u.style.width=`${y}px`,u.style.height=`${b}px`,f.clearRect(0,0,u.width,u.height),f.scale(v,v),f.drawImage(m,0,0,y,b)},m.onerror=()=>{console.error("Failed to load image:",m.src);const u=d.current,f=u.getContext("2d");f.clearRect(0,0,u.width,u.height),f.font="20px Arial",f.fillStyle="red",f.fillText("Failed to load page",10,50)}};g.useEffect(()=>{h()},[r,s,o]);const c=()=>a(m=>Math.min(m+.1,2)),p=()=>a(m=>Math.max(m-.1,.5)),P=()=>n(!0),R=()=>n(!1),M=()=>{o<t.length&&l(o+1)},N=()=>{o>1&&l(o-1)};return e.createElement("div",{className:`pdf-viewer-container ${s?"full-view":"min-view"}`},s&&e.createElement("div",{className:"pdf-navbar"},e.createElement("button",{className:"minimize-view-btn",onClick:R},e.createElement(L,null)),e.createElement("div",{className:"zoom"},e.createElement("button",{onClick:c},e.createElement(x,null)),e.createElement("button",{onClick:p,disabled:r<=.5},e.createElement(q,null))),e.createElement("div",{className:"pdf-pagination"},e.createElement("button",{onClick:N,disabled:o<=1},"Prev"),e.createElement("span",null,"Page ",o," of ",t.length),e.createElement("button",{onClick:M,disabled:o>=t.length},"Next"))),e.createElement("canvas",{onClick:P,ref:d,className:"pdf-viewer-canvas"}))};S.propTypes={pdfImages:i.array.isRequired};function E({pdfImages:t,isLoaded:r}){return e.createElement("section",{className:"pdf-post"},r?e.createElement("div",{className:"pdf-container"},e.createElement(S,{pdfImages:t})):e.createElement("div",{className:"placeholder pdf-container-placeholder"}))}E.propTypes={pdfImages:i.array.isRequired,isLoaded:i.bool.isRequired};function T({iframeUrls:t}){const[r,a]=g.useState(!1),[s,n]=g.useState(0),o=c=>{c.stopPropagation(),a(p=>!p)},l=()=>{n(c=>c<t.length-1?c+1:c)},d=()=>{n(c=>c>0?c-1:c)},h=Array.isArray(t)?t[s]:t;return e.createElement("div",{className:`google-doc-viewer ${r?"fullscreen":""}`},e.createElement("iframe",{src:h,allowFullScreen:!0,className:"google-doc-iframe"}),e.createElement("div",{className:"navigation-buttons"},Array.isArray(t)&&e.createElement(e.Fragment,null,e.createElement("button",{className:"prev-doc-button",onClick:d,disabled:s===0},"Previous"),e.createElement("button",{className:"next-doc-button",onClick:l,disabled:s===t.length-1},"Next"))),e.createElement("button",{className:"toggle-fullscreen",onClick:o},r?"Exit Full Screen":"Full Screen"))}T.propTypes={iframeUrls:i.oneOfType([i.string,i.arrayOf(i.string)]).isRequired};function H(t,r){return e.useMemo(()=>{if(t.length===0)return e.createElement(e.Fragment,null);const s=({innerHTML:n})=>e.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:n}});return s.propTypes={innerHTML:i.string.isRequired},e.createElement("section",null,t.map((n,o)=>{var l,d;return e.createElement("article",{className:"job-post",key:o,onClick:()=>r(n)},n.imgSrc||n.iconLink?e.createElement("div",{className:"company-logo"},e.createElement("img",{loading:"lazy",src:n.imgSrc||n.iconLink,alt:"company logo"})):null,e.createElement("p",{className:"title"},(n==null?void 0:n.title)||(n==null?void 0:n.jobTitle)),((l=n==null?void 0:n.content)==null?void 0:l.length)>0?e.createElement(s,{innerHTML:n.content}):((d=n==null?void 0:n.details)==null?void 0:d.length)>0?e.createElement(s,{innerHTML:n.details}):n!=null&&n.iframe?e.createElement(T,{iframeUrls:n.iframe}):null,!(n!=null&&n.iframe)&&e.createElement("button",{className:"read-more-button",onClick:()=>r(n)},"Read More"))}))},[t,r])}function I({paginatedData:t,onPostClick:r}){const[a]=F(5e3);return e.createElement("div",{id:"posts"},t.map(s=>s.type==="pdf"?e.createElement(E,{key:s.id,pdfImages:s.pdfImages,isLoaded:a}):e.createElement(k,{key:s.id,post:s,onPostClick:r})))}I.propTypes={paginatedData:i.arrayOf(i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string})).isRequired,onPostClick:i.func.isRequired};function k({post:t,onPostClick:r}){return H([t],r)}k.propTypes={post:i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string}).isRequired,onPostClick:i.func.isRequired};const G=[],U="/assets/agency_icons/minopex.png",Y="minopex",V=[{jobTitle:"SHEQ Coordinator (FTC)",publishedDate:"Published 03 September 2024",expiryDate:"Closing Date: 10 September 2024",location:"Krugersdorp, Gauteng",details:[`
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
                        <label for="">Krugersdorp </label>
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
        <div class="vacancy-description"><strong>Introduction</strong><br><br>This position will be based at the at &nbsp;the Manganese Demonstration Plant in Krugersdorp.<br><br><strong>Description</strong><br>The purpose of this position is to implement, maintain and monitor adherence to the Minopex SHEQ Management System to ensure compliance with the site, client-specific and legislative requirements.<br><br><strong>Duties &amp; Responsibilities:</strong><br><br>• Ensure that the SHEQ Management System is implemented and maintained to meet the minimum group requirements on site and that the site complies with the requirements of the SHEQMS. <br>• Enforce compliance with legal requirements, i.e., the right to stop dangerous work etc.<br>• Coordinate all legal appointments according to legislative requirements.<br>• Conduct plant and equipment inspections at the prescribed intervals, report the findings to management with preventative recommendations and follow up on reports as required to ensure continual improvement. <br>• Ensure contractor safety file compliance &amp; SHEQ access control requirements.<br>• Maintain all SHEQ-related information on the SHEQMS to ensure effective and up-to-date information and submit SHEQ-related reports according to requirements<br>• Manage all SHEQ injuries and incidents on site, i.e., reporting, investigation and ensuring that all documentation is completed in the required timeframes. <br>• Facilitate the risk assessment process according to organizational requirements (Baseline and Issue/Task-based Risk Assessment)<br>• Facilitate and participate in site audit processes.<br>• Coordinate the compilation of all Operational Procedures on site.<br>• Drive and manage non-conformance and incident management processes.<br>• Ensure that Corporate Strategies, objectives and targets are effectively managed and that the desired results are achieved in conjunction with Operational strategies.<br>• System administrator and coordinator (Isometrix, HSEC online, Firefly, C-Track)<br>• First aid team leader (Emergency response) <br>• Co-ordinate and control COID (Workmen’s)<br>• Advise the Training &amp; Human Resources Department on the identified needs and requirements for SHEQ-related competencies and on legal requirements. <br>• On the job training and coaching for HSE Representatives<br><br><strong>Qualification Requirements:</strong><br><br>• Grade 12 or equivalent qualification<br>• Health and Safety Management Certification (I.e. SAMTRAC/ COMSOC/ NEBOSH, etc.)<br>• Incident Investigation Competency (I.e. ICAM, RCAT, etc.)<br>• Risk management (HIRA etc.)<br>• SHEQ Auditors certificate<br><br><strong>Experience &amp; Skills Requirements:</strong><br>• Minimum 5 years SHEQ experience in an operational environment<br>• Occupational Health Safety act.<br>• OHSAct knowledge<br>• ISO 9001 Quality Management Internal Auditor Training will be an advantage.<br>• ISO 14001 Environmental Management Internal Auditor Training will be an advantage.<br>• ISO 45001 Occupational Health &amp; Safety Management Systems Auditor Training will be an advantage.<br>• Full Computer literacy in MS Office <br>• Strong PowerPoint Presentation report-writing skills<br>• Valid driver’s license code B, EB or C1<br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/rtckfc" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/rtckfc",iconLink:"/assets/agency_icons/minopex.png",uuid:"p301ea1a7-f658-4bc6-8143-51db3be80f39"},{jobTitle:"Control Room Operator",publishedDate:"Published 22 August 2024",expiryDate:"",location:"Hibberdene, KwaZulu-Natal",details:[`
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
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/n5bx86",iconLink:"/assets/agency_icons/minopex.png",uuid:"pb5c837a6-ffc1-4249-b7a9-d327d0bc0412"},{jobTitle:"Junior Millwright",publishedDate:"Published 30 August 2024",expiryDate:"Closing Date: 09 September 2024",location:"Wonderfontein, Mpumalanga",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">DRA Water </label>
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
        <div class="vacancy-description"><strong>Introduction</strong><br><br>DRA Water is looking for qualified local individual for their project based on the Wonderfontein Mine near Belfast, Mpumalanga. This position is based on a Limited Duration Contract.<br><br><strong>Minimum Requirements</strong><br><br><ul><li>Minimum Grade 12 or equivalent qualification</li><li>Tertiary education qualification of N3 with a Millwright Trade Test (red seal).</li><li>Must have a minimum of one (1) year’ experience as a assistant / artisan aid / junior millwright</li><li>The candidate must be able to obtain a Certificate of Fitness (Red Ticket).</li></ul><strong>DUTIES NOT LIMITED TO THE FOLLOWING:<br></strong><br><ul><li>Investigate, diagnose and perform trade related maintenance and repair of equipment and machinery according to the maintenance requirements, standards and specifications</li><li>Perform daily inspections in accordance with the Mine Health and Safety Act regulations, operational and company standards to report all defects and breakdowns on equipment and machinery to the Supervisor</li><li>Develop, modify, construct and install all types of trade related equipment required for the safe operation of all engineering equipment</li><li>Ensure that all installations and equipment are safe and in good working order after task completion</li><li>Continuously monitor equipment failure and efficiency to improve trade specific equipment and systems</li><li>Consult with production teams on maintenance activities that effects production</li><li>Support the achievement of engineering availability and production performance levels</li><li>Perform all Preventative maintenance schedules on time</li><li>Perform condition monitoring on plant equipment, acting decisively on any findings</li><li>Perform break down maintenance, including standby and call-out duties</li><li>Ensure that maintenance related information is recorded and reported to the relevant planning office to support the maintenance of the planned/asset maintenance system</li><li>Identify and report the need for equipment spares and assist in obtaining quotations for such</li><li>Manage any contractors allocated to assist on site work, ensuring their equipment is compliant and they follow all related policies and procedures</li><li>Support and comply with all aspects of the Computerised Maintenance Management System (CMMS) or alternatives</li><li>Take care of all site issued tools and equipment, ensuring they are available and working at all times</li><li>Ensure compliance with Company and Client Health and Safety procedures and requirements</li><li>Ensure adherence to engineering quality standards in maintenance of equipment and machinery</li></ul><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://drawater.simplify.hr/Vacancy/Apply/yg8tge" rel="nofollow">Apply</a>            </div>
    `],apply:"https://drawater.simplify.hr/Vacancy/Apply/yg8tge",iconLink:"/assets/agency_icons/minopex.png",uuid:"p4b11d6fa-5a42-4dff-b414-c726c645bf42"},{jobTitle:"Student Vacation Work Programme",publishedDate:"Published 30 August 2024",expiryDate:"Closing Date: 06 September 2024",location:"Johannesburg, Gauteng",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">Minerals Operations Executive (Pty) Ltd</label>
                    </div>



                <div class="row padding-bottom-10">
                    <label class="job-detail-bold-header" for="MinimumExperience">Minimum experience</label>
                    <span><label for="Not_Applicable">Not Applicable</label></span>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>These positions will be based at various site.<br><br><strong>Description</strong> <br><br>Minopex is offering a Vacation Work Programme for Tertiary Students who want to gain exposure and practical experience in the work environment. This Programme will run from December 2024 until the end of January 2025.<br><br>Applicant Requirements <br><br>Applicants must be currently studying at a University towards a Degree in the following disciplines:<br><ul><li>Metallurgical or Chemical Engineering</li><li>Electrical or Mechanical Engineering</li><li>Industrial Engineering</li></ul><br>• Applicants must be South African Citizens<br>• Applicants must have a minimum pass rate of 60% and above<br>• Applicants will be subjected to background checking as well as undergoing a Medical Fitness Assessment<br><br><br><strong>Application Submission Requirements:</strong> <br><br>Interested applicants must apply by submitting the following documents:<br>• Brief Curriculum Vitae<br>• Certified copy of latest Academic Record <br>• A valid South African Identity Document (South African Citizen) <br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/ghvetw" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/ghvetw",iconLink:"/assets/agency_icons/minopex.png",uuid:"pea03a767-ddfe-48e2-8f3d-8f0bbf476cdc"}],z={iconLink:U,title:Y,blogPosts:V},_="/assets/agency_icons/SA-Youth.png",W="SA-Youth",Q=[{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADYAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p746852bc-24a0-4a80-a0d8-537d6449afb8"}],K={iconLink:_,title:W,blogPosts:Q},J="/assets/agency_icons/pro-personnel.jpg",Z="pro-personnel",X=[{jobTitle:"Payroll Administrator",startDate:"2024-09-04 - 2024-10-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durban",region:"KwaZulu Natal"},details:`PRIMARY RESPONSIBILITIESVIP Premier Payroll Administration

Manage full payroll processing and reconciliation on VIP Premier for approximately 800 employees monthly, including leave management, benefits administration, staff engagements, terminations, and transfers.
Record staff deductions such as unpaid days, till shortages, and uniform costs.
Calculate and input public holiday, overtime, and night shift allowances.
Handle monthly payments to third parties and perform reconciliations.
Generate monthly reports according to departmental requirements.

Leave Administration

Process, manage, and reconcile leave records on VIP Premier.
Communicate leave confirmations to employees.

Benefits Administration

Handle all correspondence related to provident fund and medical aid, including submitting amendment requests and withdrawals to relevant providers.
Perform monthly reconciliations of provident fund and medical aid.

General HR Administration

Oversee onboarding for new hires, including documentation and policy management.
Create and maintain employee records.
Address HR and pay queries from employees.
Manage and initiate disciplinary actions.
Administer recruitment and selection processes, including handling responses, organizing interviews, and communicating with applicants.
Conduct ad hoc HR projects.
Prepare UIF and maternity documentation as required.
Process casual and ad hoc payments to staff.
Assist with disciplinary inquiries

QUALIFICATIONS AND EXPERIENCE:

Grade 12 (Matric)
Relevant Qualification
Experience with SAGE VIP
Great interpersonal and communication skills.
Experience in Managing Large Teams
Strong Knowledge of Payroll Processes
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002541-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p5bc1914e-ea41-4980-ad03-c46b11738da8"},{jobTitle:"Payroll Administrator",startDate:"2024-09-04 - 2024-10-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durban",region:"KwaZulu Natal"},details:`Qualifications:

Grade 12 (Matric)
Relevant qualification
Experience with SAGE VIP
Strong interpersonal skills
Experience in managing large teams
In-depth knowledge of payroll processes

Key Responsibilities:

Payroll Management: Oversee VIP Premier Payroll for 800 employees, including processing, reconciliation, leave management, and benefits administration.
Leave &amp; Benefits Administration: Manage leave records, provident fund, and medical aid processes, ensuring accurate reconciliations and employee communication.
HR Administration: Handle onboarding, employee records, HR queries, recruitment, and disciplinary actions.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002542-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p068af43e-d6dc-4f3f-a2c0-4b86cf142232"},{jobTitle:"Occupational Hygienists",startDate:"2024-09-03 - 2024-10-03",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Middelburg",region:"Mpumalanga"},details:"Requirements needed:* Bachelor's degree in Occupational Hygiene, Environmental Health of related field* Certification as an Occupational Hygienist (SAIOH registered or equivalent)Experience:* Minimum 3-5 years working experience in occupational hygiene withing the mining industry.* In depth knowledge of South African mining health and safety regulationsDesirable Attributes:* Familiarity with mine verification systems and respirate protection programs* Experience with occupational hygiene monitoring equipment and software",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002539-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pfe447733-9cdd-4e6a-b568-ca9a1f3f1549"},{jobTitle:"Occupational Hygienists",startDate:"2024-09-03 - 2024-10-03",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Middelburg",region:"Mpumalanga"},details:`Requirements

Bachelors degree in Occupational Hygiene, Environmental Health, or related field.
Certification as an Occupational Hygienist (SAIOH registered or equivalent)
Minimum of 3-5 years of experience in Occupational Hygiene within the mining industry.
In-depth knowledge of South African mining Health and Safety regulations.

Desirable Attributes

Familiarity with mine ventilation systems and respiratory protection programs.
Experience with Occupational Health risk assessments and incident investigations.
Proficiency in using Occupational Hygiene monitoring equipment and software.
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002540-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p5fd0e5c8-c95b-4446-9861-f0d54a5733f1"},{jobTitle:"Diesel Mechanic",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lydenburg",region:"Mpumalanga"},details:"Requirements:* Education - grade 10/12 advantage* Valid trade certificate* Competent B Certificate - underground Hardrock operations* Medically fit to work underground* Clear criminal recordExperience:* 3-5 years working in a mining environment, with specific diesel mechanic experience on Sandvik (Drill rig) DD 211, 321, (Bolter) DS211-L-M, DS211L, 311, (LHD) LH 410, GHH (LHD) 5.2, 5.5, 6.2, (UV) 40, 60, AARD (UV) 80., Hencon, Altecreter, Dieci Telehandler* Must be fit to obtain a medical certificate and declared fit to work on a mine.* Competent in diesel machine systems, including diagnostic, repair and maintenance, ensuring safe and effective operations in a mining environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002530-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p7fc9f003-79d2-456b-8347-7991f2872b11"},{jobTitle:"Auto Electrician",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Auto Electrical",location:{city:", Lydenburg",region:"Mpumalanga"},details:`Job specific requirements:

Education – Minimum Grade 10/Grade 12 advantageous
Certification: Red Seal - Auto Electrician
Experience: 3-5 years in a mining environment, with specific experience in auto electrical systems on Sandvik, GHH, AARD
Physical Fitness: Must be fit to obtain a medical certificate of fitness and declared fit to work on a mine.
Skills: Competent in auto electrical systems, including diagnostics, repair, and maintenance, ensuring safe and effective operations in a mining environment.
Competent B certificate – Underground Hard rock operations
Medical Certificate of Fitness to work Underground
Good communication skills
Clean Criminal record

Responsibilities:

Participate in maintaining a high level of safety awareness and adherence to safety standards.
Maintain and repair electrical systems of mining machinery, ensuring their safe and efficient operation.
Perform diagnostic tests to identify and resolve electrical issues.
Install, maintain, and repair electrical wiring, circuits, and equipment.
Adhere to maintenance schedules and ensure timely completion of tasks.
Work collaboratively with other team members and provide support when needed.
Able to work to deadlines and remain effective under pressure
A teamwork mentality to achieve results
Effective listener with well-developed interpersonal skills

SalaryFixed Income

Basic salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R 40 800.00

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Gross Income &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R 55&nbsp;200.00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other income/variable

Conops Allowance (Rules apply) R&nbsp; &nbsp;7 200,00
Bonus: You may qualify for a monthly incentive subject to targets are met according to the company’s bonus structure.

Bonus at 100% of target equates to &nbsp;R &nbsp;8 000.00 (First 3 months 60 % of fixed Bonus)&nbsp;Company Contribution/benefits:

Compulsory Momentum health 4 me (employee only) – employees with own medical proof to be submitted
Compulsory - 50% of basic will be a pensionable salary on which a total of 3.75% will be contributed towards a Provident/death and Funeral benefit-(employee to contribute 3.75%)

Statutory payments towards UIF/SDL/RMA`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002531-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p788df67d-14eb-4140-baa5-d2d45a846b3e"},{jobTitle:"Diesel Mechanic",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lydenburg",region:"Mpumalanga"},details:`Job specific requirements:

Education – Minimum Grade 10/Grade 12 advantageous
Certification: Red Seal – Diesel Mechanic
Experience: 3-5 years in a mining environment, with specific Diesel Mechanic experience on Sandvik (Drillrig) DD 211, 321, (Bolter) DS211L-M, 221L, 311, (LHD) LH 410. GHH (LHD) 5.2, 5.5, 6.2. (Utility Vehicle) 40, 60. AARD (Utility Vehicle) Hencon Altecreter, Dieci Telehandler
Must be fit to obtain a medical certificate of fitness and declared fit to work on a mine.
Strong problem-solving skills and attention to detail
Competent in diesel machine systems, including diagnostics, repair, and maintenance, ensuring safe and effective operations in a mining environment.
Competent B certificate – Underground Hard rock operations
Medical Certificate of Fitness to work Underground
Good communication skills
Clean Criminal record

Responsibilities:

Perform regular maintenance checks on diesel-powered vehicles, equipment, and machinery
Diagnose and repair mechanical issues in a timely manner
Conduct routine inspections and preventative maintenance on all diesel equipment
Keep detailed records of maintenance and repairs
Participate in maintaining a high level of safety awareness and adherence to safety standards.
Adhere to maintenance schedules and ensure timely completion of tasks.
Work collaboratively with other team members and provide support when needed.
Able to work to deadlines and remain effective under pressure
A teamwork mentality to achieve results
Effective listener with well-developed interpersonal skills

SalaryFixed Income

Basic salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R 40 800.00

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Gross Income &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R 55&nbsp;200.00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other income/variable

Conops Allowance (Rules apply) R&nbsp; &nbsp;7 200,00
Bonus: You may qualify for a monthly incentive subject to targets are met according to the company’s bonus structure.

Bonus at 100% of target equates to &nbsp;R &nbsp;8 000.00 (First 3 months 60 %&nbsp;of fixed Bonus)&nbsp;Company Contribution/benefits:

Compulsory Momentum health 4 me (employee only) – employees with own medical proof to be submitted
Compulsory - 50% of basic will be a pensionable salary on which a total of 3.75% will be contributed towards a Provident/death and Funeral benefit-(employee to contribute 3.75%)

Statutory payments towards UIF/SDL/RMA`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002532-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pa81add3e-7c1a-48e9-891b-d40baf2ba9c7"},{jobTitle:"Auto Electrician",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lydenburg",region:"Mpumalanga"},details:"Requirements:* Education - minimum grade 10/12&nbsp;* Trade certificate as an Auto Electrician* Competent B certificates - underground hard rock operationsExperience:* 3-5 years within a mining environment with specific experience in auto electrical systems on Sandvik, GHH, AARD* Must be medically fit to obtain medical certificate* Competent in auto electrical systems, including diagnostic, repair and maintenance ensuring safe and effective operations in a mining environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002533-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p65e99ed6-3268-475f-b192-6912fc7afc2e"},{jobTitle:"Safety Manager",startDate:"2024-08-29 - 2024-09-30",vacancyType:"Contractor",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"The following requirements is required:Desirable:* Diploma fire and safety or equivalent* OSHA or NEBOSH, ISOH* Hold OSHA 18001:2008 auditor accreditationAdvantage:* Middle East experience, oil and gas and petrochemical project* Age 40 and up* Experience 10 years, 5 years in similar position* Degree Bs HSE/ HSE diploma / NEBOSH diploma* Grade 12 certificateKindly send CV with certificates and passport to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002451-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p133b4638-aadc-4947-8658-deb6706bc78e"},{jobTitle:"Safety Officer",startDate:"2024-08-29 - 2024-09-30",vacancyType:"Contractor",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"Must have the following requirements:Desirable:* Diploma Fire and Safety or equivalent* OSHA or NEBOSH, ISOH* Hold OSHAS 18001:2008 auditor accreditationAdvantage:* Middle East experience oil, gas and petrochemical projectsRequirements:* Age 25 and up* Experience 6 years, 5 years in similar position* Degree HSE Diploma / NEBOSH diploma* Grade 12 certificateKindly send CV with relevant documentation and passport to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002452-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p0df247c2-605e-4369-bac3-40e9b5a3db2f"},{jobTitle:"Safety Supervisor",startDate:"2024-08-29 - 2024-09-30",vacancyType:"Contractor",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"The minimum requirements for the vacancy is as follows&nbsp;Desirable:* Diploma in Fire and Safety or equivalent* OSHA or NEBOSH ISOHAdvantage:* Middle east experience, oil and gas and petrochemical projects experienceRequirements:* Age 30 and up* Experience 8 years, 5 years in similar position* Degree HSE diploma / NEBOSH diploma* Grade 12 certificateKindly send cv, with all relevant certificates and passport to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002453-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p9414a8a3-f270-48ce-8a52-91ea10e30a6b"},{jobTitle:"Financial Adviser / Broker",startDate:"2024-08-29 - 2024-09-28",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", All Areas",region:"All Areas"},details:`Minimum Requirements:

A minimum of four years of experience at a reputable Financial Institution such as Sanlam, Momentum, Discovery, ABSA Bank, etc.&nbsp;
Successful completion and passing of the RE 1 regulatory exam.
Possession of a minimum NQF qualification in line with years of experience.

Why Join Us?

Be part of a forward-thinking company that values expertise and excellence.
Work from anywhere in South Africa, providing flexibility and freedom.
Engage with a supportive team committed to your success.

If you meet the above criteria and are ready to take on this rewarding challenge, we invite you to express your interest by applying today`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002529-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pfa06674f-3e4c-4786-a157-73d31a555f15"},{jobTitle:"Supervisor",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Rustenburg",region:"North West"},details:"The ideal candidate needs to have the following requirements and experience:* Must have a valid grade 12 certificate* Must know MS Excel (formulas) very well* Previous working experience as a supervisor within a cleaning/ hygiene environment.* Must be in possession of a valid driver's license* Excellent communications skills in Afrikaans and English* Delivery of stock and invoices to clients* Conduct and assist in weekly vehicle and equipment checks* Be able to start immediately",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002508-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p10c350f8-5313-4615-89ec-2bf70f094158"},{jobTitle:"Office Manager",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Financial Institute",location:{city:", Rustenburg",region:"North West"},details:"The ideal candidate needs to meet the following requirements, in order to apply:Qualifications:* Certificate in financial planning or equivalent* BSc in Economics, Mathematics, and Physics optional* Business related disciplineExperience:* At least 3 years relevant industry experience within a financial planning environment* 3-5 years marketing and finance management experience* 3-5 years team management experience* Previous HR/compliance experience essential",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002525-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p9a0999b8-4c59-4f78-9e4a-98f4cf96578d"},{jobTitle:"Application Developer",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Minimum qualifications and experienceBachelor’s Degree in Information Technology.Relevant IT or Development certification0-1 years of experience - junior positionReliable means of transport and a valid driver's lisenceMust have knowledge of the following:Microsoft Maui, Xamarin, Visual Studio, C#,Angular,HTML5,CSS 3 JavaScript, jQuery, Bootstrap,Responsive design, MVC, VB.net, razor, IIS, ASP.net,.Net core (Dot Net core) WCF/Web services, WebAPIThe candidate must have project and time management skills in order to work on multiple project simultaneously. They will be responsible for creating vissually appealing and user-friendly web and mobile applications. The candidate must have the motivation to continously implement self-improvement through researching the newest software technologies. Skills in Microsoft Maui, Xamarin, Visual Studio C, Angular, React.Occasional travel to Australia, New Zeeland, Europe and the USA will be required.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002526-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p95c2617c-3802-494f-8947-f03a93c2f834"},{jobTitle:"Web Developers",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Minimum &amp; Ideal Qualifications:Higher-level (GS) degree in Web Application Development.Relevant Web Development certifications.0-1 years of related field experience.Proficiency in Afrikaans &amp; English&nbsp;Previous Experience:We are particularly interested in candidates with 0-1 years of experience. This position is designed for individuals looking to kickstart their career in web development.&nbsp;Salary Range:The salary range for this position is R8,000, – R15,000, dependent on your qualifications, experience, and performance in the interview.&nbsp;Additional Requirements:A reliable means of transport is necessary.This is a Junior-level role.A portfolio showcasing your previous web development projects or applications is highly desirable.If you are enthusiastic about web development, eager to learn, and have the qualifications and skills we are looking for, we encourage you to apply and take the next step in your career. Join a dynamic team that values innovation and creativity.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002527-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pdf6fd944-e682-4fd0-b0bf-a06e1d4fc8d6"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:`Required Skills and Qualifications:

Bachelor’s degree in Web Development, Graphic Design, or a related field.
Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).
Basic understanding of web development is beneficial.
Knowledge of SEO best practices.
Strong creative, analytical, and problem-solving skills.
Excellent communication and teamwork abilities.
Detail-oriented with a strong focus on quality and accuracy.
Ability to manage multiple projects and meet deadlines in a fast-paced environment.
Project management skills and adaptability to changing project requirements.

Key Responsibilities:

Create high-quality graphics for digital and print media, including social media, email campaigns, and websites.
Ensure all media adheres to brand guidelines and project requirements.
Participate in brainstorming sessions to generate ideas for upcoming campaigns.
Stay updated on design trends and incorporate best practices.
Use analytics and user feedback to inform design decisions.
Present design concepts to teams and clients, clearly explaining design choices.
Iterate on designs based on feedback, ensuring the final product meets quality standards.
Manage multiple projects simultaneously, delivering high-quality work on time.
Utilize graphic design software (Adobe Creative Suite, etc.) to create and edit designs.
Experiment with new design techniques to keep creative output fresh.
Review final designs for errors and ensure they meet specifications.
Collaborate with development, marketing, and analytics teams to implement design elements into web applications and campaigns.
Work with cross-functional teams, including copywriters, developers, and SEO specialists, to deliver comprehensive solutions.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002528-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p6aef131e-3e30-4f51-b83d-439fe133c4ee"},{jobTitle:"Assistant Software Development Manager (Information Technology)",startDate:"2024-08-27 - 2024-09-30",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Ladybrand",region:"Freestate"},details:"Qualifications:* Appropriate bachelor's degree or similar tertiary qualification or experience in IT software development* Proficiency in MS Project or similar project management tools* Minimum of 10 years of experience in software development* Minimum of 5 years management experience regarding IT Software development projectsPrimary Responsibilities:* Instigation and management of IT Software development projects through the evaluation and monitoring of business priorities, the determination of IT priorities and allocation thereof to IT programmers, as well as the productive sand effective utilizations of IT resources* Co-ordinate and planning of IT software development projects, including the approval and finalization of technical specifications* Coordinate and monitoring of testing the implementation of IT Software development projects* Liaising with business regarding IT software projectsSkills:* Excellent communications and language skills in Afrikaans and English* Excellent organizational and project management skills* Experience regarding software development in COBOL and the IDM-I operating systems* Previous experience in an agri-business environmental would be beneficial* Excellent people skills and the ability to lead and manage a team and work together in a team* Strong analytical skills and the ability to function independently",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002496-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3af74063-d620-43bb-bf7d-a5845e4e5830"},{jobTitle:"Research Analyst",startDate:"2024-08-27 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durbanville",region:"Western Cape"},details:`PRIMARY RESPONSIBILITIES:

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
`,contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002511-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pf40b45d2-0005-4821-b113-9a0fb1414cc2"},{jobTitle:"Assistant Accountant",startDate:"2024-08-22 - 2024-09-22",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Experience:* Must have knowledge of the following:- SARS e-filing- SARS correspondence and registration- Salaries, payroll and reconciliation (VIP &amp; Easy file)- Knowledge of calculations and statements- EMP- Income tax statementsComputer knowledge in:* Pastel* Excel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002520-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pf68329ba-6e59-43c8-996a-824ebf0e75e4"},{jobTitle:"Bookkeeper",startDate:"2024-08-15 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Bryanston",region:"Gauteng"},details:"Qualifications and Experience needed:* Grade 12* Related qualification to bookkeeping* Sage experience is a MUST* 2-5 years working experience as a Bookkeeper* Candidate must be available to start immediatelyResponsibilities:* Keeping track of all financial transactions, including purchase, sales, receipts and payments in the accounting software or ledgers.* Ensuring that invoices are paid on time and that the company receives payments from clients* Regularly comparing the company's financial records with bank statements to ensure accuracy and identify any discrepancies* Updating and maintain the general ledger, which is the primary record of all financial transactions* Creating basic financial reports, such as income statements, balance sheets and cash flow statements, to provide insight into the company's financial status.* Making sure that financial records comply with relevant laws and regulations and staying up to date with the changes.* Managing petty cash funds, tracking it use and reconcile it regularly* Supporting audits, providing documentation and information during financial audits to verify the accuracy of financial reports",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002523-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pbbc5bd70-f16b-4d9f-932b-83c217eff62a"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in Web development, graphic design or related field* Proficiency in Adobe creative suite (photoshop, Illustrator, In design)* Basic understanding of web development&nbsp; beneficial* Knowledge of SEO best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail orientated with s string focus on quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast phased environment* Project management skills and adaptability to changing project requirements",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002493-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pcf829c28-e086-4fd9-b252-04d0b83ce975"},{jobTitle:"Web Analyst (Web Developer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in web development, graphic design or related field.* Proficiency in HTML, CSS, JavaScript, PHP, JSE, Jason, WordPress and SEO* Design/Creative experience - beneficial* Basic understanding of Adobe Creative suite (Photoshop, Illustrator, InDesign)* Ability to create wireframes, mockups and prototypes* Basic understanding of UX/UI principals and best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail-orientated with strong focus and quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast-paced environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002494-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p49ac38aa-2900-4f06-9903-4c00a45e989d"},{jobTitle:"Counter Sales Assistant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Bela Bela",region:"Limpopo"},details:"Minimum Qualifications:Must have Grade 12 or equivalent&nbsp;Must be fluent in Afrikaans and English&nbsp;Previous Counter Sales will be an advantage&nbsp;Previous technical / paint counter sales experience will be an added advantage&nbsp;Energetic, hardworking, diligent individual",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002521-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"paf2ee1ca-e72f-42da-8435-a8ff93552f98"},{jobTitle:"Application Developer",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Proficiency in programming languages such as MS Mausi, Visual Studio, C Angular and React* Strong understanding of mobile and web application development* Ability to manage multiple projects simultaneously with effective project and time management skills.* Excellent problem-solving skills and attention to detail* Experience in creating visually appealing and user-friendly interfaces* Motivation to continuously learn and implement the latest software technologies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002495-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p28846359-f2d1-4e47-9e25-a4fc0475f55d"},{jobTitle:"Micro Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Koster",region:"North West"},details:"The Company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are dedicated to producing high-quality, dried micro-algae year-round while minimizing environmental impact. We are seeking a highly skilled and motivated Micro-algae Plant Production Manager to join our team and lead our state-of-the-art facility.Job Overview: The Micro-algae Plant Production Manager will be responsible for overseeing all aspects of our Micro-algae operations. This includes managing micro-algae plant growth cycles, ensuring optimal growing conditions, managing packaging operations both quantity and quality, managing operational staff, coordinating maintenance requirements and implementing best operating practices for maximum yield and quality. The ideal candidate will have a strong background in food &amp; beverage processing, plant science, microbiology, horticulture, hydroponics or micro-algae systems, with an understanding of process operations, aquatic chemistry and water treatment. Strong team leadership skills and the ability to perform in a pressured environment with stringent production requirements is a must. The incumbent will report to the Technical Manager.Key Responsibilities:&nbsp;1. &nbsp; &nbsp; &nbsp;General Management:&nbsp;Operational Oversight: Manage the day-to-day operations of the micro-algae production facility, ensuring all production, maintenance, quality and packaging processes run smoothly and efficiently.Resource Allocation: Allocate resources effectively to maximize production efficiency and minimize waste.Budget Management: Develop and manage the production budget, ensuring cost-effective operations.Regulatory Compliance: Ensure compliance with all local, provincial, state regulations related to micro-algae farming and food safety.Continuous Improvement: Identify opportunities for process improvements and implement changes to enhance productivity and quality.&nbsp;2. &nbsp; &nbsp; &nbsp;Technical Management:&nbsp;Micro-algae Plant Growth Optimization: Ensure optimal growing conditions are adhered to (light, temperature, humidity, nutrient levels) for various micro-algae species to maximize yield and quality.System Maintenance: Oversee the maintenance and operation of micro-algae systems, including troubleshooting and resolving technical issues.Nutrient Management: Adhere to nutrient delivery schedules and tailor to the specific needs of different batches. Feedback to the Technical manager on any concerns and optimization requirements.Data Analysis: Utilize data from sensors and other monitoring equipment to make informed decisions about environmental adjustments and resource management.Innovation: Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions into the production process.Technical Expertise: Utilize knowledge of micro-algae systems and plant physiology to manage optimize production.Troubleshoot and resolve technical issues with micro-algae equipment and systems.Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions.3. &nbsp; &nbsp; &nbsp;People Management:Team Leadership: Lead, train, and supervise a team of micro-algae plant and laboratory technicians, fostering a positive and collaborative work environment.Performance Management: Conduct regular performance evaluations, provide feedback, and develop improvement plans for team members.Training and Development: Identify training needs and provide ongoing education to staff on best practices, safety protocols, and new technologies.Task Delegation: Assign tasks and monitor performance to ensure productivity and adherence to quality standards.Conflict Resolution: Address and resolve any interpersonal issues or conflicts within the team promptly and effectively.4. &nbsp; &nbsp; &nbsp;Quality Control:Oversee quality control activities in the on-site laboratory and supervise laboratory staff.Monitor micro-algae plant health and growth to ensure adherence to the necessary quality specifications, identifying and addressing any issues promptly.Conduct regular inspections to ensure compliance with health and safety as well as good manufacturing standards.Ensure detailed records of micro-algae plant growth, environmental conditions, and production metrics are maintained.5. &nbsp; &nbsp; &nbsp;Inventory and Resource Management:Manage inventory of inoculum cultures, nutrients, and other plant supplies.Ensure efficient use of resources to minimize waste and reduce costs.Coordinate with suppliers to maintain an adequate stock of necessary materials.6. &nbsp; &nbsp; &nbsp;Reporting and Analysis:Prepare regular reports on production performance, including yield, quality, and resource usage. Analyse data to identify trends, areas for improvement, and opportunities for increased efficiency.Present findings and recommendations to senior management.Prepare regular management accounts and report on variations to budget&nbsp;Qualifications:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Bachelor’s degree in Agronomy, Horticulture, Hydroponics, Plant Science, Microbiology or a related field. Master’s degree preferred.· &nbsp; &nbsp; &nbsp; &nbsp;Minimum of 3-5 years of experience in Food &amp; Beverage processing, Horticulture, Hydroponics or Micro-algae farming or a related field.Technical Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems.· &nbsp; &nbsp; &nbsp; &nbsp;Proficiency in using plant management software and other relevant technology.· &nbsp; &nbsp; &nbsp; &nbsp;Experience with data analysis and interpretation to inform operational decisions.&nbsp;Management Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Proven leadership and team management skills.· &nbsp; &nbsp; &nbsp; &nbsp;Excellent problem-solving abilities and attention to detail.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to work in a fast-paced, dynamic environment and adapt to changing priorities.· &nbsp; &nbsp; &nbsp; &nbsp;Strong organizational and multitasking abilities.Interpersonal Skills:· &nbsp; &nbsp; &nbsp; &nbsp;Effective communication and interpersonal skills.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to motivate and develop team members.· &nbsp; &nbsp; &nbsp; &nbsp;Conflict resolution and negotiation skills.Benefits:&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Competitive salary and performance-based bonuses.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Paid time off and holidays.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Opportunities for professional development and advancement.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002510-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p5ccaad4e-65d1-483b-b46c-7305744856ea"},{jobTitle:"Assistant Accountant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:`Requirements:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002519-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pb8b171b6-f05c-4db4-be25-027d2c599f62"},{jobTitle:"Micro-Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Koster",region:"North West"},details:"The company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are seeking a highly skilled and motivated micro-algae plant production manager to join the team.Qualifications:* Bachelor's degree in Agronomy, horticulture, hydroponics, plant science, microbiology or related field, master's degree preferred.* Minimum of 3-5 years of experience in food &amp; beverage processing, horticulture, hydroponics or micro-algae farming or related fieldTechnical Skills:* Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems* Profiency in using plant management software and other relevant technology* Experience with data analysis and interpretation to inform operational decisions.Management Skills:* Proven leadership* Excellent problem-solving abilities and attention to detail* Ability to work in fast paced dynamic environment and adapt to changing priorities* Strong organizational and multitasking abilities",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002522-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"paed724d1-1a27-48d5-9217-82a78a0e4576"},{jobTitle:"Butchery Manager",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications &amp; Experience:* A valid matric certificate with mathematics* Grade 1 Meat cutting certificate or recognized butchery apprenticeship* A clear criminal record* At least 5 years' experience in all aspects of day to day running and managing of a meat market* Computer literate* Point of sale systems knowledge is desirable* Self motivated, self-dedicated and self-determined with a creative flair* Strong numerical skills* Be able to manage staff* Be able to work under pressure* Be able to be firm and resolute in decision with a high degree of discipline",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002516-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd6dfd8df-76e0-499e-9886-b22a7b4fe2cf"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:`As Customer Service you are required to attracts potential customers by answering product and service questions; suggesting information about other products and services.&nbsp; Process orders, prepare correspondences and fulfil customer needs to ensure customer satisfaction.&nbsp; The positions requires to expedite and facilitates the flow of new units within the operations to ensure that products are delivered to our clients within the agreed time frame, and per quality standardsResponsibilities:&nbsp;Customer Service for new and repair facility

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002517-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pdc0e087c-98e8-4aab-aec8-9494741806fa"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications:* Grade 12 (matric)* 1-2 years' experience within a sales or internal sales environment* Experience within electrical motors industry will be a advantage* Must be PC literate with working knowledge of MS OfficeRequirements:* Excellent communications skills, proficient in the English language written and oral, must be able to legibly read and write reports* Eagerness to learn about our products* Must be able to work under pressure and meet deadlines to ensure customer commitments are met* Strong motivational and interpersonal skills* Administration skills* ReliableTravel:* Works predominately within the office* Required to visit customer from time to time* Work normal hours* Should be able to work on weekends, and holidays and overtime when needed* Position may require out of town travel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002518-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p80f06704-4231-4229-acaf-2aa24a842715"},{jobTitle:"Senior C&amp;I Project Engineer",startDate:"2024-08-08 - 2024-09-07",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:"Qualifications Required:* Bachelor's degree in Electrical Engineering, Control Engineering, Instrumentation Engineering or related field* Professional Engineering (PE) license or equivalent certification preferred.Experience:* Minimum of 8-10 years working experience in control and instrumentation engineering, with 5 years in a senior or lead role.*Extensive experience in mining and processing plant environment* Proven track record of successfully delivering large-scale C&amp;I projectsTechnical Skills:* Provenience in control system design and programming (e.g. PLC, DCS, SCADA, systems).* Strong knowledge of instrumentation selection, installation and maintenance* Familiarity with industry standards such as ISA, IEC and IEEESoft Skills:* Excellent project management and orgnizational skills* Strong analalytical and poblem solving abilities* Effective communication and interpersonal skills* Ability to work collboratory in a team-orientated environmentPhysical work requirerments:* Ability to work in a mining and processing plant environment, including exposure to dust, noise and varying temperatures* Willingness to travel to remote sites as requires* Availability to work extended hours and on call support as needed.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002514-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p5fb75074-542e-4b51-ac61-ced4359db962"},{jobTitle:"Finance and Admin Manager",startDate:"2024-08-08 - 2024-09-07",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Degree in financial accounting or equivalent* Post graduate qualification in financial accounting* must have completed SAICA articles* Minimum of 5 years experience in a management level* CA/CIMA qualification would be a advantage* Proven experience in developing and implementing financial models and systemsSkills &amp; Knowledge Required:* Understanding of tax and financial laws/legislation* The ability to draft and interpreted financial statements* Excellent interpersonal skills* Excellent communications skills* Good understanding of governce and assusrance frameworks* Indepth knowledge of Excel* Strategic thinking and analytical skills* Expert knowledge of financial systems and process* Excellent computer literacy skills* Strong management and leadership skills* Ability to mentor and guide staff* Supervisor attention to detail",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002515-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd855040a-1be1-4f5d-a17e-76538d799b46"},{jobTitle:"Credit Manager",startDate:"2024-08-07 - 2024-09-06",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Midrand",region:"Gauteng"},details:`Job Purpose &amp; SummaryReporting to the Managing Director, the Credit Manager will have the overall responsibility for the credit/lending function. Key areas of responsibility include the following:

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

Experience working with a lending softwareWe’re a fund manager with 12 months operations focusing on the SME space only. We offer two products, purchase order funding and invoice discounting. We’re looking for a Credit Manager to run the lending operations of our growing business. We have a preference for candidates that have purchase order and invoice discounting experience. Our operations are across the country, but the Credit Manager will be based in Johannesburg, Midrand with travel once or twice monthly to the operating offices. The budget for the role is R400,000 – R500,000 annual total cost to company before 10-20% annual bonus on achievement of targets.`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002513-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p4fedb450-4c4c-48fb-9b21-ae79fa1ef2ac"},{jobTitle:"Office Administrator",startDate:"2024-08-05 - 2024-09-06",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Rustenburg",region:"North West"},details:"The client needs the following requirements:* Have a valid driver's license* Valid grade 12 certificate* Previous working experience in office administration:- MS Excel &amp; Pastel essential- Previous stock take experience- Excellent communication skills and customer service- Be willing to assist where needed- Some HR knowledge and experience to your advantage.- Must be willing to start immediately",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002467-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p3eedcded-751b-427d-8f8b-79b0fd138be0"}],$={iconLink:J,title:Z,blogPosts:X},ee="govpage-public-sector",ne=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/joe-gqabi-district-municipality_orig.jpg",href:"https://www.govpage.co.za/joe-gqabi-district-municipality-vacancies-blog/joe-gqabi-district-municipality-vacancies1416151",title:"JOE GQABI DISTRICT MUNICIPALITY VACANCIES",content:[],postedDate:"3/9/2024",iframe:"https://drive.google.com/file/d/1UIn05Nucdmauigr8wKiPVi_OZhYf0-aZ/preview",uuid:"p5221d107-9570-4cbd-8407-33ba5c0eeb9d"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/king-sabatha-dalindyebo-local-municipality_orig.jpg",href:"https://www.govpage.co.za/king-sabatha-dalindyebo-local-municipality-vacancies-blog/king-sabatha-dalindyebo-local-municipality-vacancies9977373",title:"KING SABATHA DALINDYEBO LOCAL MUNICIPALITY VACANCIES",content:[],postedDate:"3/9/2024",iframe:"https://drive.google.com/file/d/1byuHMd4XeTcNL4xcjfHJEmjDISx49C0u/preview",uuid:"pbf37cba9-36fe-4687-b843-175f90cc775c"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/kouga-local-municipality_orig.jpg",href:"https://www.govpage.co.za/kouga-local-municipality-vacancies-blog/kouga-local-municipality-vacancies9698822",title:"KOUGA LOCAL MUNICIPALITY VACANCIES",content:[` 
KOUGA LOCAL MUNICIPALITY
 `,`KOUGA MUNICIPALITY (EC 108)
NOTICE NO: 157 / 2024
 
VACANCY
Kouga Local Municipality is committed to the prescripts of the approved Employment Equity Plan and furthermore invites suitably qualified applicants to submit a detailed application for the following position:
 
MANAGER: SAFETY AND SECURITY
 
REQUIREMENTS:                                  
Relevant NQF 7 qualification;
Traffic Officer Diploma;
Safety and Security qualification will be an added advantage;
5 years’ relevant experience;
Valid code B driving license;
Sound knowledge of Road Traffic Legislation, Regulations and Municipal By-Laws;
Knowledge of Safety & Security Legislation;
Good management skills;
Good communication skills when dealing with members of the public;
CCTV experience will be an added advantage;
Attention to detail;
Ability to work under pressure;
Must be able to speak, read and write in at least two of the official languages in Kouga Municipality (Afrikaans, English, and Xhosa).
 
SALARY: R751 083.63 – R974 958.44 (Excluding Vehicle Allowance).  
TASK: 17
 
DUTIES:                                               
Communicating with the Superintendents and Chief Law Enforcement & Security Officer on specific Key Performance Areas (Law Enforcement, Vehicle/ Driver/ Learner’s testing and Motor Licensing, Communication and Quality Assurance) with a view to aligning functions and service delivery objectives against the capacity and capability of the Section;
Monitoring/ assessing the operations of the sub-sections and evaluating the quality of output through analysis and interpretation of reports;
Reporting internally/ externally (South African Bureau of Standards, Department of Transport, etc.) on implementation of the Quality System and statutory requirements with regards to Vehicle Testing and Licensing processes and interventions and providing reasons and recommendations to improve and/ or sustain the effectiveness of current applications;
Formulating a Public Safety Crime Prevention and Security plans for the Municipality by developing and monitoring projects that subscribe to crime prevention principals and formulating crime prevention strategies that directly impact on local policing demographics;
Defining/ adjusting the role boundaries, workflow processes against laid down service delivery requirements;
Planning work and allocating duties to subordinates to ensure that operational requirements are met;
Conducting appraisals to measure performance against agreed objectivities, counselling and consulting with personnel on developmental goals, short-term targets and standards;
Monitoring the adequacy of current training interventions through the evaluation competency demonstrated in workplace application and prepares assessment and progress reports for inclusion into the consolidated Skills Development Plan of the Municipality;
Analyzing statistical information pertaining to staff attendance, overtime, leave and addressing deviations or occurrences of abuse and/ or workplace conflict through the implementation of corrective measures in accordance with Human Resources Policies and Procedures;
Communicating to personnel through the verbal and written mediums statutory and procedural quality assurance requirements for adoption and compliance thereof and/ or reviewing and updating procedures to provide coverage of operational needs and circumstances;
Checking and verifying through internal audit processes, inspection records and registers of testing equipment and instruments against standards stipulated by laws and regulations;
Inspecting testing station and/ or conducting observations of work sequences and determining extent of awareness quality assurance applications and/ or the need for corrective/ remedial measures and amendment/ update of procedures;
Inspecting worksites and/or conducting observations of work sequences and determining extent of awareness and quality assurance applications, and/or the need for corrective/ remedial measures and amendments/updates of procedures;
Discussing and/ or investigating workplace accidents/ incidents, seeking reasons from personnel on any non-compliance/ deviation and providing direction on courses of action for execution;
Promoting and enhancing of a safe and crime free crime society within the jurisdiction of the municipality and detecting crime prone area, protection of the municipal assets/ properties including staff and visitors;
Interacting with the SAPS, Provincial Traffic departments, hawkers, Council of Churches, Community Police Forum, Business, Taxi associations, officials of State Departments with the aim of providing information, advice and promoting synergy and intergovernmental relationship on issues of security and law enforcement and planning for an effective working environment of important effects;
Preparing and presenting to the Director forward plans, operational interventions necessary to sustain and/ or improve current Law Enforcement performance and service levels;
Interpreting and consolidating the expenditure estimates for the Safety & Security Section, preparing the draft budget and, monitoring financial performance with a view to correcting and/ or reviewing applications and processes;
Considering proposals by the Director and subordinates for drawing up a draft budget;
Verifying the execution and procurement of approved budgetary items to circumvent over-expenditure of votes and ensure that approved commodities are acquired in terms of the Municipal Financial Management Act, 2003 (Act 56 of 2003);
Evaluating the sections performance against budget and addressing deviations/ variances with appropriate personnel;
Monitoring and implementing corrective measures to rectify deviations/ acts contrary to financial regulations, audit requirements and departmental procedure;
Communicating with the Council’s Financial Section on audit findings and recommendations and institutes the necessary investigational or corrective measures;
Inspecting and/ or approving the outcomes of specific tests (oral/ written, theoretical/ practical and physical - roadworthiness of vehicles) through analysis, quality checking and correlation of test results with national standards and norms;
Completing all necessary documentation and issuing certificates endorsing compliance in accordance with the eNaTIS System requirements;
Checking and verifying through internal audit processes, inspection records and registers of testing equipment and instruments against standards stipulated by laws and regulations;
Formulating a Public Safety Crime Prevention plan for the Municipality by developing and monitoring projects that subscribe to crime prevention principals and formulating crime prevention strategies that directly impact on local policing demographics;
Developing and maintaining implementation of safety and security program to maximize safety standards for the communities;
Liaising with various departments and important stakeholders in crime combating and prevention, designing and initiating capacity building programs to enable the Municipality to better incorporate crime prevention issues into the IDP;
Facilitating and maintaining multidisciplinary approach to social crime prevention so as to ensure a well-integrated approach to continue crime prevention;
Managing and maintaining safety issues through the development of crime prevention policies and by- laws, conducting public awareness and promoting activities regarding safety issues;
Compiling productivity/ statistical reports referring to statistical data and qualitative information related to testing station and driver’s license operations and submitting for the attention of the Manager for consideration and inclusion into Council and Sub Committee reports and, submission to the Department of Transport and South African Bureau of Standards;
Maintaining the activity and record keeping systems and/ or executing specific actions to facilitate the updating of registers schedules and manuals (Quality System and procedures, Occupational Health and Safety Registers, Training records, Work Instruction Lists, Testing and Measuring Equipment Registers, etc);
Verifying sufficient stock of stationery and consumables and authorizing requisitions when necessary;
Maintaining relationships with National, Provincial and Local Government through interaction on critical aspects associated with identification, classification and readiness to deal with public safety;
Attending the District and Provincial disaster advisory and practitioners meetings at a strategic level;
Communicate on a regular basis with neighbouring local authorities, other service providers and related services (mutual aid agreements) in order to regulate and improve public safety service delivery;
Dealing tactfully and diplomatically in negotiations and personnel matters.
 
BENEFITS: As per standard conditions of service;`,`Applicants must submit a formal application form and a comprehensive CV, copies of qualifications, identity document and driver’s license. 
Applications must be submitted electronically as one PDF document to recruitment@kouga.gov.za.
Application forms can be obtained from the Municipal website, www.kouga.gov.za and must reach the Human Resource Manager on or before Friday, 6 September 2024 at 12:00.
 
For any enquiries contact Mr. B Faulkner: 042 200 2200.
 
Disqualification:
 
Please note that the following can lead to disqualification:
 
Canvassing of councillors.
Submission of fraudulent qualifications and/ or documents.
 
NB: Please note that shortlisted candidates will be subjected to a vetting process. By applying for this position, the candidates agree to background checks being performed.

The Municipality reserves the right not to make an appointment.
Preference will be given to applicants residing within the Kouga area of jurisdiction.
Should you not hear from us within 30 days of closing date, kindly regard your application as being unsuccessful.
 
MR. C DU PLESSIS
MUNICIPAL MANAGER
 
P. O. BOX 21
JEFFREYS BAY
6330`],postedDate:"3/9/2024",iframe:"",uuid:"pc8cb96ab-ca7c-4368-b37f-505366a1daf5"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/nelson-mandela-bay-metropolitan-municipality_orig.gif",href:"https://www.govpage.co.za/nelson-mandela-bay-metropolitan-municipality-vacancies-blog/nelson-mandela-bay-metropolitan-municipality-vacancies6646292",title:"NELSON MANDELA BAY METROPOLITAN MUNICIPALITY VACANCIES",content:[` 
NELSON MANDELA BAY METROPOLITAN MUNICIPALITY
 `,`In terms of its Employment Equity Plan, the Nelson Mandela Bay Municipality is committed to employment practices that redress past imbalances in respect of race, gender and disability, and as such the relevant policy will be considered during selection and placement.
Applications are invited from suitably qualified persons for appointment to the under-mentioned position. Persons with a disability are encouraged to apply, unless otherwise stated in the advertisement.
 
INFRASTRUCTURE AND ENGINEERING DIRECTORATE
MANAGER: REPAIRS AND MAINTENANCE
(FLEET MANAGEMENT)
POSITION CODE: 240449
TASK Grade 14 (R592 296 – R823 452 per annum)
(Basic salary only, excluding benefits)
 
Qualifications and experience required:
Relevant tertiary qualification.
Three to five years’ experience.
A valid Code EC driver’s licence.
 
Key attributes and competencies:
The incumbent will be responsible for planning and co-ordinating the maintenance and repairs of the fleet and plant in the section.
The incumbent will be responsible for controlling the key performance indicators and outcomes of personnel based in the repairs and maintenance operations.
The incumbent will be responsible for managing the functioning and processes associated with providing a repair and maintenance service.
The incumbent will be responsible for controlling the procedural administrative and reporting requirements/deadlines associated with the functioning of the Department.
The incumbent must be computer literate in Office applications.
Must have extensive knowledge of related legislation, relating to area of responsibility, as well as relevant policies of Council.
Must have excellent problem-solving skills.
Must have the ability to work under pressure and meet critical/conflicting deadlines.
Must have proficient oral and written communication skills in English and at least one other local language.
 Special requirements for the post:
 The incumbent must be physically fit and able-bodied.
 
Job purpose:
Co-ordinating and controlling the procedures, operations and critical outcomes associated with Fleet Repairs and Maintenance through the implementation of functional plans and objectives, monitoring productivity and performance and addressing deviations and implementing standards and operating practices to manage the allocation, maintenance and optimum functionality of the entire municipal fleet, plant and equipment.
As part of the selection process, candidates may be tested on any requirement, skill or competency, which will include pre-employment screening, medical examination, security vetting and psychometric assessment.
Fringe benefits will include membership of a Retirement Fund, Medical Aid Scheme, Group Life Assurance Scheme, participation in a Housing Subsidy and Car Schemes (subject to the conditions of the various Schemes), and normal leave and sick leave benefits.
 
SUBMISSION OF APPLICATION PROCEDURE:
Kindly note that all applications for employment and supporting documentation in respect of the advertised vacancy should be submitted online on the municipal website at www.nelsonmandelabay.gov.za (go to ‘Vacancies’ to find the documentation for details for submitting online applications). It is advisable to submit applications online in good time to allow time for attending to queries that may arise when submitting applications.
Hand-delivered or mailed applications for this position will not be accepted.
Telephonic enquiries may be directed to the Receptionist, tel. 041 506 3259.
 
CLOSING DATE FOR SUBMISSION OF APPLICATIONS: FRIDAY, 6 SEPTEMBER 2024 BEFORE 14:00
 
PLEASE APPLY HERE`,`In terms of its Employment Equity Plan, the Nelson Mandela Bay Municipality is committed to employment practices that redress past imbalances in respect of race, gender and disability, and as such the relevant policy will be considered during selection and placement.

Applications are invited from suitably qualified persons for appointment to the under-mentioned position. Persons with a disability are encouraged to apply, unless otherwise stated in the advertisement.
 
INFRASTRUCTURE AND ENGINEERING DIRECTORATE
MANAGER: FLEET OPERATIONS
(FLEET MANAGEMENT)
POSITION CODE: 240448
TASK Grade 14 (R592 296 – R823 452 per annum)
(Basic salary only, excluding benefits)
 
Qualifications and experience required:
Relevant tertiary qualification.
Four to five years’ relevant experience.
Valid Code EC driver’s licence.
Computer literacy.
 
Key attributes and competencies:
Oral and written communication skills in English and at least one other official local language.
Report-writing skills.
Supervisory skills.
 
Job purpose:
Managing and controlling all Municipal vehicles, construction plant and equipment, the procedural applications, interventions, and activities of the Fleet Operations functionality through the planning and co-ordination of providing a cost-effective transport/plant hire and lease fleet to the users within the Municipality, reporting on outcomes and/or proposing on opportunities for improving service levels.
As part of the selection process, candidates may be tested on any requirement, skill or competency, which will include pre-employment screening, medical examination, security vetting and psychometric assessment.
Fringe benefits will include membership of a Retirement Fund, Medical Aid Scheme, Group Life Assurance Scheme, participation in a Housing Subsidy and Car Schemes (subject to the conditions of the various Schemes), and normal leave and sick leave benefits.
 
SUBMISSION OF APPLICATION PROCEDURE:
Kindly note that all applications for employment and supporting documentation in respect of the advertised vacancy should be submitted online on the municipal website at www.nelsonmandelabay.gov.za (go to ‘Vacancies’ to find the documentation for details for submitting online applications). It is advisable to submit applications online in good time to allow time for attending to queries that may arise when submitting applications.
Hand-delivered or mailed applications for this position will not be accepted.
Telephonic enquiries may be directed to the Receptionist, tel. 041 506 3259.
 
CLOSING DATE FOR SUBMISSION OF APPLICATIONS: FRIDAY, 6 SEPTEMBER 2024 BEFORE 14:00
 
PLEASE APPLY HERE`],postedDate:"3/9/2024",iframe:"",uuid:"p0bf1c652-534e-49bb-9d12-361b0e99f17b"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/metsimaholo-local-municipality_orig.jpg",href:"https://www.govpage.co.za/metsimaholo-local-municipality-vacancies-blog/metsimaholo-local-municipality-vacancies7416475",title:"METSIMAHOLO LOCAL MUNICIPALITY VACANCIES",content:[],postedDate:"3/9/2024",iframe:"https://drive.google.com/file/d/10EoAJ0MsmvJm-UldYFIGy2CJ73Zsyh3e/preview",uuid:"pc2df8835-6e9c-4a02-8057-41b3b6102b59"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/thabo-mofutsanyane-district-municipality_orig.jpg",href:"https://www.govpage.co.za/thabo-mofutsanyane-district-municipality-vacancies-blog/thabo-mofutsanyane-district-municipality-vacancies1789343",title:"THABO MOFUTSANYANE DISTRICT MUNICIPALITY VACANCIES",content:[` 
THABO MOFUTSANYANE DISTRICT MUNICIPALITY
MAMPOI STREET, OLD PARLIAMENT BUILDING, PRIVATE BAG X810, WITSIESHOEK 9870, SOUTH AFRICA
TEL: +27 (58)-718 1036 FAX: +27 (58)718 1034 mmadmin@tmdm.gov.za
 `,`Thabo Mofutsanyana District Municipality, with its seating in Phuthaditjhaba, Free State Province, subscribes to the principle of Employment Equity Act and Affirmative Action. The municipality hereby invite suitable candidates to apply for the following advertised position. 
 
DEPARTMENT: OFFICE OF THE MUNICIPAL MANAGER 
POSITION: DIRECTOR COMMUNITY SERVICES & LED 
(PERMANENT POSITION) 
SALARY: (Min – R965 958.00; Mid – R1 103 953.00; Max – R1 224 083.00) 
Total remuneration package will be in terms of Government Gazette No.50737 dated 30/05/2024 
 
REQUIREMENTS Bachelor Degree in Social Sciences / Public Administration / Law / Bachelor of Science Degree in Local Economic Development/ Building Sciences/ Architect/ Bachelor Degree in Town and Regional Planning or Development Studies, or equivalent. 
 
OTHER REQUIREMENTS: The appointed candidate must be a South Africa Citizen or permanent resident with no criminal record. He/she must be in possession of a valid driver’s license (Code 08 (EB) and a suitable vehicle for proper performance of his/her functions; willingness to work irregular hours with extensive travelling. 
 
ADDED ADVANTAGE: ADDED ADVANTAGE: Certificate in Municipal Finance Management Program (MFMP) (SAQA Qualification ID No. 48965) or Certificate Program in Municipal Development (CPMD) or attain the qualification within 18 months from date of appointment, • Project Management Certificate or Diploma; and • Registration with a relevant Professional Body. 
 
EXPERIENCE: Five (5) years relevant experience at a Middle Management level and have proven successful institutional transformation within Public or Private Sector.

 
KNOWLEDGE: The candidate will be expected to demonstrate; Good knowledge and understanding of relevant policy and legislation; Good knowledge and understanding of institutional governance systems and performance management; Understanding of council operations and delegation of powers, as well as: (Health service management; Public Safety; Parks and recreation management, Cemetery management; Solid Waste; LED & Tourism Development; Security Services). 
 
LEADING COMPETENCIES: Strategic Direction and Leadership, People Management, Program and project Management, Financial Management, Change Leadership and Governance Leadership. 
 
CORE COMPETENCIES: Moral Competence, Planning and Organizing, Analyzing and Innovation, Knowledge and Information Management, Communication, Results and Quality Focus. 
 
KEY PERFORMANCE AREA: Provide strategic leadership in the Community Services & LED Directorate of the Municipality. Develop and continuously evaluate short, medium and long term strategic organisational governance objectives of the Municipality. Ensure policy development, research and compliance. Develop and monitor systems, procedures and processes to ensure correct working operations and practices. Coordination of portfolio Committee meetings and business processes and submit reports. Development and implementation of the departmental SDBIP. Compile and implement departmental budget. Give inputs and support towards preparation of IDP to ensure alignment and efficient performance. Formulate creative solutions to enhance cost effectiveness and efficiency in the delivery of services and administration of the Municipality. Assist and support the Accounting Officer with the roles and responsibilities delegated to the Directorate. Management of health service, cemetery, sports, arts and culture, parks and recreation, Disaster Management, Fire and emergency services, environment and waste management.`,`APPLICATIONS AND CONDITIONS OF APPOINTMENT 
Applicants must download and fill in an Application Form (Annexure C) available on the Municipal Website at (www.tmdm.co.za); which is also accessible on www.gpwonline.co.za) or directly from the Government Notice No. 21 of 17 January 2014 (Annexure C). No Applications will be considered if it is not on the Official Application Form. The application form must be accompanied by detailed CV with contactable references, recently certified original copies of qualifications, Identity document, driver’s licence and covering letter depicting the reference number of the post applied for and enclosed in an envelope clearly marked ‘’Application for the position: Director: Community Services & LED”. Faxed and e-mailed applications will not be considered; 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA) and to attach proof thereof. 
Short-listed candidate will be subjected to reference checks, criminal record check and signing of indemnity forms 
Recommended candidates will be subjected to a competency-based assessment over 2 day’s prior appointment in terms of Annexure A (Competency framework for Senior Managers) of Notice No.21 of Government Gazette No. 37245 of 17 January 2014; 
The successful candidate will be required to sign an Employment Contract before assumption of duty, a Performance Agreement within 60 days of appointment and the necessary Disclosure of Financial Interest Forms as well as undergoing the necessary Security Vetting Processes. 
The incumbent will be stationed at Thabo Mofutsanyana District Municipality’s head office situated in Phuthaditjhaba but may be deployed anywhere within the municipality depending on the operational requirements. 
Due to the large number of applicants, correspondence will be limited to the short-listed candidates only. If you have not been contacted within a period of two months after the closing date of the advertisement, kindly accept that your application has been unsuccessful. 
The successful candidate will be reporting directly to the Accounting Officer. 
The municipality reserves the right not to appoint any applicant to this position. 
A candidate who canvasses for preference will be disqualified. 
 
APPLICATIONS
Applications must be directed to: The Municipal Manager: Me TPM Lebenya, Thabo Mofutsanyana District Municipality; Private Bag X 810, WITSIESHOEK, 9870, or hand-delivered at the office of the Municipal Manager, Room G01, Old Parliament Building, during office hours. 
 
Further enquiries may be directed to: Ms Malefu Ngobese- Human Resources Manager 
Tel: 058 718 10000- email: malefu@tmdm.gov.za
 
CLOSING DATE FOR THE POSITION: 06 SEPTEMBER 2024 
 
Ms M. Nkomo 
ACTING Municipal Manager`],postedDate:"3/9/2024",iframe:"",uuid:"pb4c74ab8-834f-4f92-ad9d-88623e5deb67"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-umhlathuze_orig.png",href:"https://www.govpage.co.za/city-of-umhlathuze-municipality-vacancies-blog/city-of-umhlathuze-municipality-vacancies9173458",title:"CITY OF UMHLATHUZE MUNICIPALITY VACANCIES",content:[` 
CITY OF UMHLATHUZE MUNICIPALITY
 `,`The City of uMhlathuze is one of the fastest growing municipalities in South Africa, offering the ideal combination of a rewarding career and pleasant working conditions. Interested and qualified applicants are invited to apply for the following position that is based in Richards Bay – Civic Centre, KwaZulu-Natal.
 
DEPUTY CITY MANAGER: FINANCIAL SERVICES
PERMANENT APPOINTMENT 
• REFS56001/2024
ANNUAL TOTAL REMUNERATION PACKAGE: NEGOTIABLE IN TERMS OF GOVERNMENT GAZETTE NO. 37500 OF 29 MARCH 2014; PLUS PERFORMANCE BONUS. 
 
REQUIREMENTS: • A Grade 12/Matric Certificate • At least an NQF Level 7 in the field of Accounting, Finance or Economics, or Chartered Accountant (SA) • A post graduate NQF Level 8 qualification is essential • A Master’s degree (MBA/MBL) will be an added advantage • 15 years’ experience, of which at least 7 years’ must have been at a senior management level in a municipal environment • Verifiable experience to manage a municipal financial environment, at least a Grade 5 Municipality upwards • Proven ability to engender at least one clean audit managing corroboratively within a municipal environment• Demonstrate ability to manage a financial environment at a Treasury non delegated Municipality • A valid driver’s licence • MFMP or Certificate of Competency against minimum competency levels of 2007 issued in terms of the MFMA under Government Notice No. 493 in Government Gazette No. 29967 of 15 June 2007 • Proven experience in successful institutional transformation in the public or private sector • Advanced understanding of Council operations and delegation of Powers.
 
KNOWLEDGE: • Advanced knowledge and understanding of relevant policy and legislation • Advanced knowledge and understanding of institutional governance systems and performance management• Extensive knowledge of Financial services • Good knowledge of Supply Chain Management Regulations and the Preferential Procurement Policy Framework Act,2000 (Act No.5 of 2000) • Knowledge of good governance • Knowledge of Financial related legislation • Knowledge of coordination and oversight of all specialised support functions.
 
KEY PERFORMANCE AREAS: • Lead and direct the Financial Services Department (Budget, Revenue and Supply Chain Management) • Implement an Integrated Development and Strategic goals of the budget and treasury • Implement a Service Delivery Budget Implementation Plan • Prepare and implement the Municipal budget • Prepare Annual Financial Statements and other legislative financial management reports • Perform duties and functions delegated to the Deputy City Manager (Financial Services) by the Municipal Financial Management Act • Manage efficient provision of Municipal services • Establish, operate and maintain support structures, processes and systems • Provide visionary and innovative leadership to diverse workforce, to ensure optimal utilisation of the Council’s resources in terms of implementing its strategic objectives articulated in the IDP and in the fulfilment of its legislative mandate • Provide support and advice to Council and City Manager.`,`CLOSING DATE: 16 SEPTEMBER 2024.
 
NB: All applicants must forward an application form (obtainable in Government Gazette, No. 37245) or can be downloaded from our website: www.umhlathuze.gov.za
Applications, accompanied by a detailed CV with copies of qualifications certificates, Identity Document and driver’s licence, should be forwarded to: The City Manager by e-mail to: SM_Vacancies@umhlathuze.gov.za quoting the reference number. Alternatively, applications can be hand delivered during the week to the City of uMhlathuze, Civic Centre (5 Mark Strasse Road, Richards Bay) between 07h30 - 16h00. Candidates must state clearly the position to which appointment is sought. Applicants are requested to furnish telephone number/s at which they may be contacted.
 
For administrative enquiries, contact: Deputy City Manager: Corporate Services, Mr Mpilo Sibiya on (035) 907 5181.

 
The City of uMhlathuze is an equal opportunity, affirmative action employer. As such, we intend to promote and uphold representativity in the Municipality regarding race, gender and disability.
 
PLEASE NOTE: It would be expected of shortlisted candidates to be subjected to competency assessments and that previous and current employers and references will be contacted. Verification will be done on his/her qualifications, criminal and credit record. The candidate will be required to disclose all financial interests. All applications must be submitted with an official application form, detailed CV, copies of qualifications and Identity Document, the names of three references from current and previous employers. The internal or external application form is available from the Municipal website or the Human Resources Section (Department Corporate Services). Failure to adhere to the above will result in automatic disqualification.
 
Appointment is subject to the signing of an employment contract and performance agreement in terms of Section 56 of the Municipal Systems Act. The appointment and Conditions of Employment will be in accordance with the applicable and relevant local government legal framework.
 
Due to the large number of applications we envisage to receive, applications will not be acknowledged. 
 
Should you not be contacted within 3 months of the closing date of the advertisement, please consider your application unsuccessful.
 
MR N.G. ZULU
CITY MANAGER, CITY OF UMHLATHUZE`],postedDate:"3/9/2024",iframe:"",uuid:"p93d5165e-0e95-4720-91a8-790962e8993e"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/umgungundlovu-district-municipality_orig.jpg",href:"https://www.govpage.co.za/umgungundlovu-district-municipality-umdm-vacancies-blog/umgungundlovu-district-municipality-vacancies7380309",title:"UMGUNGUNDLOVU DISTRICT MUNICIPALITY VACANCIES",content:[],postedDate:"3/9/2024",iframe:"https://drive.google.com/file/d/1ecn60jH9mralD0aA308Y0CFYpXKzFTdw/preview",uuid:"pddf0606b-3af1-4294-b397-3c60e753e63e"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-polokwane-city_orig.jpg",href:"https://www.govpage.co.za/city-of-polokwane-municipality-vacancies-blog/city-of-polokwane-municipality-vacancies2721997",title:"CITY OF POLOKWANE MUNICIPALITY VACANCIES",content:[` 
CITY OF POLOKWANE MUNICIPALITY
 `,`POLOKWANE MUNICIPALITY, AN EQUAL OPPORTUNITY EMPLOYER THAT SUBSCRIBES TO THE PRINCIPLE OF AFFIRMATIVE ACTION, INVITES APPLICATIONS FOR THE FOLLOWING EPWP POSTS:
 
Business Unit: By-Law Enforcement and Security
IG COMMUNITY SAFETY OFFICERS EPWP (X8)
Contract Duration: 9 Months
Rate: R271.14 per day
 
Requirements:  A Grade 12  Valid Security Certificates (PSIRA)  Clean criminal record  18 – 35 years.
 
Duties and Responsibilities:  Assist Security Officers at access control points  Protect and secure Council premises, property, and personnel through regular patrols to prevent crime on Council premises  Patrol with law enforcement officers to monitor and enforce by-law compliance within the municipal jurisdiction and any other areas of Council interest  Manage and oversee access control by completing necessary registers and confirming appointments.
 
 
NB: THE POSITIONS ADVERTISED ABOVE ARE EXPANDED PUBLIC WORKS PROGRAMME (EPWP) WORK OPPORTUNITIES AND WILL BE AVAILABLE FOR A LIMITED CONTRACTUAL PERIOD ONLY. SUITABLE CANDIDATES WILL UNDERGO A SUITABILITY CHECK, INCLUDING A CRIMINAL RECORD AND QUALIFICATION VERIFICATION.
 
Incumbents must be prepared to work in various geographical areas across the City of Polokwane's Council premises. Preference will be given to applicants residing within the City of Polokwane's jurisdiction.
 
The Municipality reserves the right not to make an appointment.
 
Preference will be given to candidates from designated groups in accordance with the provisions of the Employment Equity Act and the Council's employment equity plan, targets, and goals. Therefore, applicants are requested to specify their race, gender, and disability status.
 
Submission Guidelines: Interested individuals must submit detailed CVs, a certified copy of their ID, and certified copies of their qualifications. Applications should be hand-delivered to:
 
Human Resource Recruitment
8th Floor, Office No: 802
 
Closing Date: 04 September 2024
 
Enquiries: Mr. Obed Kgare and Ms. Mpho Mulea
Tel No: (015) 290 2116 / 2031 / 2004
 
MUNICIPAL MANAGER: MS. THUSO NEMUGUMONI`,`POLOKWANE MUNICIPALITY, SITUATED IN THE CAPRICORN DISTRICT MUNICIPALITY OF LIMPOPO PROVINCE HEREBY INVITE APPLICATIONS FROM SUITABLY QUALIFIED AND EXPERIENCED PERSONS TO BE CONSIDERED FOR THE FOLLOWING POSITIONS THAT EXIST AT ITS MUNICIPAL OFFICES IN POLOKWANE
 
RE- ADVERTISEMENT
 
APPOINTMENT OF INDEPENDENT CHARPERSON OF POLOKWANE LOCAL MUNICIPALITY ICT STEERING COMMITTEE
Closing Date: 11 September 2024
Ref No.: ICT SteerCom 02/2024
 
Applications are hereby invited for an independent, suitably qualified and experienced professional from the ICT Sector to serve as the Independent Chairperson of the ICT Steering Committee of Polokwane Local Municipality, for a period of three (3) years.
Polokwane Local Municipality has established an ICT Steering Committee in accordance with Section 3.1.10 of the Treasury Regulation and Section 166 of the Municipal Finance Management Act, 2003 (Act No. 56 of 2003).
 
Requirements: Suitable candidates should possess a post-graduate degree in Information Communication Technology (ICT) or Computer Science or equivalent qualification with expertise in Information Communication Technology (ICT) The candidate must be a member of relevant ICT professional bodies. A Master's degree in Computer Science will serve as an advantage The candidate must have served as a member of an ICT Steering Committee in the public sector at local government level for at least three years or have experience as an Audit Committee Member responsible for ICT Governance oversight in the public sector at a local government level for at least three years.

 
Competencies: Five years or more management experience at a senior management level related to ICT At least five years proven knowledge and understanding of King IV Report on Corporate Governance requirements and Municipal related legislation, policies and processes Must possess strong and dynamic leadership skills Analytical reasoning ability A demonstrated track record of diligence and integrity Excellent communication skills (verbal and written).
 
Duties: The ICT Steering Committee at Polokwane Local Municipality is an oversight body which operates and discharges its duties according to Section 3.1.10 of the Treasury Regulation and Section 166 of the Municipal Finance Management Act, 2003 (Act No. 56 of 2003).
Roles and responsibilities of the ICT Steering Committee Chairperson include the chairing of the ICT Steering Committee whose responsibilities include, amongst others, the following: Providing oversight on: ◊ The management of Corporate Governance of ICT in the Municipality ◊ Development and implementation of the ICT Policy Framework, ICT Strategic Plan, ICT Implementation Plan and ICT Operational Plan as directed by the Municipality ICT Strategic Plan ◊ functionality of ICT organisational structure, resources and capacity according to the needs and priorities of the Municipality ◊ The development of a project plan for each ICT initiative to organise and manage resources (people and funding) in such a way that these resources deliver all the work required to complete a project within the defined scope, quality, time and cost Articulation of the ICT Risk appetite and its management within the risk management practices of the Municipality Performance monitoring of external ICT service providers (3rd parties) through service level agreements and service management engagements Oversight and reporting on ICT security (including cyber security) to ensure the protection of electronic information, information systems and infrastructure to maintain confidentiality, integrity and availability of information Supporting and reporting to the Audit and Performance Audit Committee.
 
Number of Meetings: To chair at least four (4) quarterly ICT Steering Committee meetings per financial year and on invitation attend quarterly Audit and Performance Audit Committee Meetings on ICT related matters.
 
Remuneration: The appointed ICT Steering Committee Chairperson shall be remunerated in line with National Treasury Guidelines for sitting allowance and a maximum of three (3) hours preparation in terms of SAICA rates (Guidelines of fees for audit done on behalf of the Auditor-General).
The successful candidate will be required to sign a contract with the Municipality. The appointed candidate may be subjected to a security vetting and screening process.
 
Application: It is mandatory to submit application (motivation letter), a detailed Curriculum Vitae and relevant supporting documentation, including a copy of an ID document, copies of qualifications, summary of previous Audit Committee and/or ICT Steering Committee memberships and references to: The Municipal Manager, Private Bag X 111, Polokwane, 0700, or hand delivered to Office 907, 9th Floor, Civic Centre, Corner Landraos Mare and Bodenstein Street, Polokwane, Email to: ICTsteercom02@polokwane.gov.za quoting the reference number in the subject heading of application. 
 
Note: Correspondence will only be made with short-listed candidates. If you have not been contacted within Four (4) months after the closing date of this advertisement, please accept that your application was unsuccessful. Polokwane Local Municipality reserve the right to cancel this advertisement any stage of the process.
 
POLOKWANE MUNICIPALITY IS AN EQUAL OPPORTUNITY AFFIRMATIVE EMPLOYER AND RESERVES THE RIGHT NOT TO MAKE ANY APPOINTMENT.
 
THUSO NEMUGUMONI
MUNICIPAL MANAGER`],postedDate:"3/9/2024",iframe:"",uuid:"p62f88a60-952c-47f0-8087-b8d173a9162e"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/makhudutamaga-local-municipality_orig.jpg",href:"https://www.govpage.co.za/makhudutamaga-local-municipality-vacancies-blog/makhudutamaga-local-municipality-vacancies8673836",title:"MAKHUDUTAMAGA LOCAL MUNICIPALITY VACANCIES",content:[],postedDate:"3/9/2024",iframe:"https://drive.google.com/file/d/1pdJdJw9B2q58O-sAZqGZ8ntxhrcV-xBQ/preview",uuid:"p016dcc2c-a64b-42be-aaa9-39713ea89b42"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ccma_orig.jpg",href:"https://www.govpage.co.za/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies-blog/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies4992553",title:"COMMISSION FOR CONCILIATION, MEDIATION AND ARBITRATION (CCMA) VACANCIES",content:[` 
COMMISSION FOR CONCILIATION, MEDIATION AND ARBITRATION (CCMA)
 `,`PART-TIME INTERPRETER (INDEPENDENT CONTRACTOR) X2
Gauteng Province – Ekurhuleni Office
Ref: EKPT09-24
Rate Per Day: R929.03
The Gauteng Province – Ekurhuleni Office requests the services of two (2) Part Time Interpreters.
 
Purpose: To assist the CCMA Commissioners and structures by providing interpreter services to facilitate successful outcomes of CCMA activities.
 
Key Performance Areas:-
Verbal interpretations during hearings.
Administrative support functions.
 
Key Requirements:
Matric Certificate
National Diploma in Labour Related Qualification.
1 year experience
Knowledge on latest legislation/ amendments.
Languages: isiXhosa and isiZulu.`,`NOTE FOR ALL APPLICANTS:    
 
Strictly apply via the link provided: https://forms.office.com/r/UVfL7SkdWk
 
In your online application for appointment, kindly ensure that you disclose all relevant material information to assist the panel in considering your application.
 
Detailed CV, copies of qualifications, driver’s license & ID document must be uploaded. Failure to complete the online form in full or not provide relevant information will automatically disqualify your application.

 
*Only One (1) online application should be submitted.
 
No emailed or hand-delivered applications will be accepted. Non-adherence to the stated procedures in applying as well as incomplete application will result in the disqualification of the application.
 
Closing date: 09 September 2024
 
N.B Incomplete and late applications will automatically be disqualified.
 
If we have not responded within a Month from the closing date, you should regard your application as unsuccessful. Correspondence will only be entered into with short-listed candidates. The CCMA reserves the right not to make an appointment. It is the intention of the CCMA to promote representivity in respect of race, gender and disability through the filling of the posts. Preference will be given to candidate from the designated groups.
 
People with disabilities are encouraged to apply.`],postedDate:"3/9/2024",iframe:"",uuid:"p551cd837-3075-4d13-b160-5b9649d70e09"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/legal-aid_orig.jpg",href:"https://www.govpage.co.za/legal-aid-vacancies-blog/legal-aid-vacancies7477378",title:"LEGAL AID VACANCIES",content:[` 
LEGAL AID
 `,`IT TEMP TRAINEES x 2
REF: NO/IS/IT-TEMP/30/08/2024
INTERNAL AND EXTERNAL ADVERTISEMENT                                                  
NATIONAL OFFICE – BRAAMFONTEIN (INFORMATION SYSTEMS DEPARTMENT)
 
Legal Aid SA is a National Public Entity; a key contributor to South Africa’s constitutional democracy, providing quality legal services to indigent and vulnerable persons. The organisation has a national footprint in all nine (9) provinces. Legal Aid SA is a credible employer of choice, boasting Top Employer SA accreditation for 15 consecutive years. We offer an exciting Employee Value Proposition with opportunities for development, career growth and an inspiring workplace.
Applications are invited from persons interested to fill the above-mentioned position. The incumbent will be appointed on a twenty-four (24) month contract basis. 

The position is based at the Legal Aid SA National Office in Braamfontein.
 
Job Summary
To support end users and provide one-on-one training in the utilisation of computer hardware and peripherals and non-application software programmes in a way that will ensure defect-free and optimal utilisation of user computer workstation environments.
 
KEY OUTPUTS
Computer hardware installation, maintenance and support.
Software installation, maintenance and support.
User support and one-on-one training in respect of the above.
 
COMPETENCIES (SKILLS, KNOWLEDGE AND ATTRIBUTES) REQUIRED
A recognised Grade 12 certificate plus a three (3) year Computer qualification obtained at a University/Technikon, or other acknowledged tertiary institution.
One (1) year of relevant work experience in an IS Department in the field of Support.
Effective working relationship with the IS team.
Excellent analytical skills, business acumen and the ability to deal with ambiguity and meet demanding deadlines and manage projects.
A sophisticated collaborative style is advantageous.
Project management experience is essential.
Service excellence imperative.
Multi-level and diverse stakeholders.
Complexity in co-ordinating across organisational levels.
Networking with relevant stakeholders.
Integration across all business units.`,`BASIC SALARY: R14,689.75 per month
 
A detailed curriculum vitae reflecting practical application of the position outputs and the required competencies as advertised must be submitted by close of business on 17 September 2024, quoting the reference number NO/IS/IT-TEMP/30/08/2024 in the subject line to Recruit [at] legal-aid.co.za or apply online at www.legal-aid.co.za 
 
Enquiries to Blanche Gouws, Tel: 011 877 2000
 
The employment decision shall be informed by the Employment Equity Plan of Legal Aid SA. It is Legal Aid SA’s intention to promote equity (race, gender and disability) through the filling of this post(s) with a candidate whose transfer/promotion/appointment will promote representivity in line with the numerical targets as contained in our Employment Equity Plan. Legal Aid SA reserves the right to withdraw posts or not to make an appointment, if by doing so, the interests of Legal Aid SA will be best served.
 
APPLICANTS NOT CONTACTED WITHIN TWO (2) MONTHS MAY CONSIDER THEIR APPLICATION UNSUCCESSFUL.`],postedDate:"3/9/2024",iframe:"",uuid:"p544a61b0-52ec-4c9f-be00-5cd77980314c"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/mintek.jpg?1725387376",href:"https://www.govpage.co.za/mintek-vacancies-blog/mintek-vacancies1728148",title:"MINTEK VACANCIES",content:[` 
MINTEK
 `,` 
 
ICT SECURITY ANALYST
Listing reference: minte_000277
Listing status: Online
Apply by: 16 September 2024
Position summary
Industry: Scientific, Research & Development
Job category: Network Administration and Security
Location: Randburg
Contract: Permanent
Remuneration: Market Related
EE position: Yes
 
Introduction
Mintek has an exciting career opportunity for an ICT Security Analyst. The successful candidate will ensure the security and integrity of MINTEK’s ICT infrastructure by implementing and managing key security systems, monitoring network traffic, responding to incidents, conducting risk assessment and ensuring compliance with regulations like POPIA. The ideal candidate will have strong cybersecurity skills and experience with various security tools.
 
Job description
System Administration and Security Management :
Firewall Administration (IPS/IDS): Manage and monitor firewall configurations, ensuring optimal performance and security. Implement intrusion detection and prevention systems to protect against potential threats;
Endpoint EDR Administration and Monitoring : Manage and monitor EDR systems by configuring policies, conducting threat hunts, analysing alerts, and ensuring updates. Implement behavioural detection and prevention to identify and mitigate threats, ensuring endpoint security and performance;
VPN Management: Administer and secure virtual private network, ensuring secure remote access for users while monitoring for unauthorised access or breaches;
Mimecast Administration : Oversee the e-mail security platform, ensuring robust protection against phishing, malware, and other e-mail-based threats;
 KnowBe4 Security Awareness Training : Manage the security awareness platform, coordinating regular phishing simulations and training sessions to improve staff vigilance against social engineering attacks;
SIEM Incident Remediation : Monitor security information and event management (SIEM) systems incidents, analyse security alerts, and respond to incidents promptly to mitigate risks;
Active Directory (AD) Security : Ensure the security and integrity of the Active Directory environment by managing access controls, permissions, and group policies;
Cloud Security : Implement and manage security measures for cloud-based services, ensuring data protection and compliance with MINTEK’s security policies.
 
Specialized Security Administration:
“Digital Signature ” Administration : Manage the digital signature platform, ensuring secure and compliant electronic document signing processes;
Data Governance : Develop and enforce data governance policies, ensuring the organization’s data is managed securely, consistently, and in compliance with regulations;
Vulnerability Management : Conduct regular vulnerability assessments, applying patches and updates as necessary, and ensuring systems are protected against known vulnerabilities.
 
Compliance and Governance:
POPIA Compliance : Ensure all ICT operations and data management practices comply with the Protection of Personal Information Act (POPIA) requirements, implementing necessary controls and processes.
 
Collaboration and Support:
Cross-ICT Sections Collaboration : Work closely with other sections in ICT to ensure security measures are integrated into all aspects of the organization’s operations;
User Support: Provide technical support and guidance to users regarding security practices and incident response procedures;
Monthly Reporting : Prepare regular reports on security status, incidents, and compliance for senior management and regulatory bodies.
 
Minimum requirements
 
EDUCATION: 
Minimum: Bachelor’s degree in information technology, Computer Science, Information Systems, Cybersecurity, or a related field.
Ideal: CompTIA's Security , CISSP or equivalent
 
EXPERIENCE:
Minimum of 3-5 years of experience in IT security, with specific experience in the administration of firewalls, VPNs, and SIEM systems;
Hands-on experience with firewalls, EDRs, email security, security awareness training, vulnerability management and AD security.
Experience in cloud security and vulnerability management is essential.
 
APPLY
 
 
 
 
 `,`TECHNICIAN-IN-TRAINING (INTERNAL ONLY)
Listing reference: minte_000276
Listing status: Online
Apply by: 15 September 2024
Position summary
Industry: Scientific, Research & Development
Job category: Others: RandD, Science and Scientific Research
Location: Randburg
Contract: Permanent
Remuneration: Market Related
EE position: No
 
Introduction
To perform assembly, installation, commissioning and maintenance of advanced process measurement instruments at plants worldwide.
 
Job description
·       Follow established procedures to install, commission and maintain Mintek equipment 
·       Examine electrical problems, identify source of problems and determine method for repair by electrical circuit diagrams 
·       Ensure that Mintek’s safety standards and procedures are sustained with regard to the scope of work and to uphold prescribed safety standard procedures in their workspace. 
·       Recommend improved work practices and amendments to procedures affecting workmanship and safety matters. 
·       Assist the supervisor with performing Safety inspections. 
·       Comply with client SHEQ procedures. 
·       Assemble, test and calibrate advanced process measurement instruments. 

·       Commission and maintain advanced process measurement instruments on site. 
·       Troubleshoot problems with equipment with minimal input from others. 
·       Assist development team as required. 
·       Completion of trip documentation 
·       Adhere to established operating procedures with regards to project administration. 
·       Work cooperatively with others 
·       Share functional expertise
 
Minimum requirements
 
Qualifications And Experience 
·       National Diploma
·       Passed trade test and a completed apprenticeship/work integrated learning
·       Driver’s Licence (Code EB) within 6 months of appointment (condition of appointment)
 
Behavioural Competencies:
·      Team player who enjoys variety and has a strong affinity for planning and conducting new and innovative projects.
·      Good interpersonal skills.
·      Ability to work in a stressful and demanding environment.
·      Willing to travel locally and internationally.
 
APPLY`,`HR ADMINISTRATOR: REMUNERATION & BENEFITS (6 MONTHS CONTRACT)
Listing reference: minte_000275
Listing status: Online
Apply by: 6 September 2024
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
Report on Absenteeism, Sick Leave ( moved to Information Systems).
Report on Employee Movements – Terminations, Hires,  Movements and other relevant changes.
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
 Maintains  employee master data, throughout the employee life cycle from joining to leaving, while adhering to the relevant policies, procedures and relevant legislation.
 Ensures HR admin deadlines related to employee hire, termination and movements  are met at all times
Inputs of employee related data into HRIS (PaySpace, IFS and T&A), through  verification, scrutinizing and ensuring pre-approval alignment to policies and procedures before capturing.
Verifies and approves all HR administration data and supporting documentation received viz appointments, terminations, salary increases, promotions, leave, PAR, terminations etc and forwards to HR & Admin Systems Controller for processing (daily).
Ensures readily and accessible electronic and manual  HR records are maintained.
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
Inputs towards updating of Policies and procedures - maintains and updates HR Administration according to policies and procedures updates  utilising  Ms Word, Excel  in prescribed formats. Maintains and updates HR databases, Shared Drive accordingly. Liaises with the  HR  Multiple Disciplinary Teams  to ensure annual revision.
Participate in policy and procedure reviews.
Conduct  administrative functions and  ensure up-to-date knowledge of the HR administration processes, as well as all conditions of service.
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
In-depth knowledge of Employee Master Data Administration, Remuneration and  Benefits.
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
A high level of  expertise and broad knowledge of labour/employment legislation .
HR administration processes - knowledge, understanding and the ability to apply them in day-to-day activities.
HR information systems - knowledge, understanding and the ability to apply them in day-to-day activities.
HR policies and procedures - knowledge, understanding and the ability to apply them in day-to-day activities.
HR workflow - knowledge, understanding and the ability to apply them in day-to-day activities.
Managing self: accountability, accuracy and attention to detail, customer service orientation, deadline driven, self motivation, communicating information, showing resilience, upholding standards.
Excellent analytical skills.
A methodical, investigative and inquisitive mind and attention to detail.
Good interpersonal and client-handling skills, with the ability to manage expectations and explain technical detail.
Good presentations skill.
Policy and process  writing ability.
 
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
 
APPLY`],postedDate:"3/9/2024",iframe:"",uuid:"p4de95f4a-2262-46e2-95e5-ecdc4f024872"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/national-credit-regulator-ncr_orig.jpg",href:"https://www.govpage.co.za/national-credit-regulator-ncr-vacancies-blog/national-credit-regulator-ncr-vacancies8621798",title:"NATIONAL CREDIT REGULATOR (NCR) VACANCIES",content:[],postedDate:"3/9/2024",iframe:"https://drive.google.com/file/d/1RQSN4siN63CPUJn7yZdIYXXM-ApMmXDq/preview",uuid:"p4ce9a054-ddad-4dc8-ac2b-3462317391bc"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/national-development-agency-nda_orig.jpg",href:"https://www.govpage.co.za/national-development-agency-nda-vacancies-blog/national-development-agency-nda-vacancies1797428",title:"NATIONAL DEVELOPMENT AGENCY (NDA) VACANCIES",content:[` 
NATIONAL DEVELOPMENT AGENCY (NDA)
 `,`NDA PERMANENT POSITION
 
The National Development Agency is a Schedule 3A National Public Entity with a mandate for Poverty eradication and is accountable to Parliament through the Minister of Social Development. 
 
The following position is available at the NDA:
 
FINANCIAL ACCOUNTANT
 
Description
This position is primarily required to coordinate review and undertake the implementation of financial accounting systems and procedures in line with relevant legislation regulations, frameworks, polices and procedures. It is also required produce accurate monthly, quarterly and annual financial statements as well as to provide support for the efficient recording, disbursement and reporting of operational finances. The incumbent will ensure that proper accounting practices are followed in line with NDA’s financial policy and financial accounting requirements including GAAP, GRAP, IFRS, PFMA and National Treasury regulations.
 
Directorate Finance
Reports To Senior Manager: Finance
Position location Head Office
Peromnes Grade 8
Number of Direct Reports 1 
 
POSITION REQUIREMENTS
 
Minimum Qualification
• A Bachelor of Commerce degree- Financial Accounting (NQF level 7)
• Articles will be advantageous
 
Essential Experience
• Three years’ financial accounting and reporting experience
• Post-articles experience would be advantageous
• Experience with computerised accounting systems
 
Knowledge
• Working knowledge of accounting package e.g. Great Plains
• Knowledge of GRAP, PFMA and National Treasury regulations
• Knowledge of Public Administration and Accounting Systems
• Knowledge of Corporate Governance
 
Skills & Abilities
▪ Leverage diversity
▪ Negotiation skills
▪ Service motivation
▪ Creativity & innovation
▪ Customer Service orientation
▪ Technology orientation
▪ Good communication skills – written & verbal
▪ High numerical and analytical ability
▪ Facilitation skills
▪ Ability to work quickly and accurately and to adhere to and meet strict deadlines
▪ Methodical and attentive to detail
▪ Discreet and ability to work with confidential information
▪ Flexible, i.e. ability to work as part of a team but also independently as required
▪ Ability to stay current with legal and financial changes and ability to evaluate how these could affect NDA financial operations
▪ Ability to produce up-to-date reconciliations
▪ Understanding of general ledger set-up
▪ Strong computer technical skills preferably with accounting packages and MS Office
 
MAIN AREAS OF RESPONSIBILITY
 
Financial Management
• Day to day management of recording of all financial transactions.
• Review, posting and approval of financial transactions processed by accounts staff.
• Review of monthly general ledger and weekly bank reconciliations. reconciliations
• Review, posting and 1st level approval of payments to suppliers, funded projects, and salaries.
• Perform cash management function. Ensure enough cash is held to pay obligations when they are due and ensure that cash surpluses are held in interest bearing investments.
• Develop and maintain a record keeping system for the unit.
• Prepare quarterly cash flow projections to determine cash required to meet obligations and funds that can be invested to maximise interest.
• Prepare schedules and reconciliations required for year- end audit processes conducted by the Auditor General.
• Ensure Accounting records are ready to be subjected to internal and External Audit processes.
 
Corporate Governance
• Ensure that all transactions recorded comply with applicable policies, laws and regulations (e, PFMA, Treasury Regulations, SARS, e.tc)
• Ensure that all transactions are recorded in compliance with GRAP standards.
• Train NDA staff on Finance processes to ensure compliance with NDA operating procedures and policies
 
Financial Analysis And Reporting
• Prepare monthly and quarterly Management Accounts for internal decision-making purposes.

• Prepare Annual Financial Statements that comply with standards of GRAP
• Prepare any financial reports that may be required by NDA funders and stakeholders. (National Treasury, Executive Authority and any funders or donors)
• Perform analysis of financial reports and reports on variances between budget and actuals and obtain reasons for variances.
• Advise and support business units on analysis of financial reports and management of budgets.
• Consolidate budget inputs and support Finance manager during preparation of budgets required in accordance with PFMA
 
STAFF MANAGEMENT
• Manage performance and work of subordinates
• Prepare and monitor performance contracts of subordinate.
• Guide and supervise subordinates.
 
Internal and External Audit
• Ensure that Accounting records are complete, accurate and supported by necessary reconciliation
• Maintain record keeping system that ensures that all transactions in the accounting records are supported by valid complete and compliant supporting records.
• Attend to queries from Auditors and draft responses to findings raised.
• Provide information requested by auditors during audits within agreed timelines
 
KEY RELATIONSHIP INTERFACES
Internal Relationships - other than reporting lines (manager and subordinates). *
• All NDA Staff and Directorates
External Relationships (With Local/Provincial structures and other key parties, specify)
• Service Providers
• Government Departments`,`Application details: Full Job profile for this position is available on the NDA website – www.nda.org.za. A detailed Curriculum Vitae (CV), with three references must accompany the application and a fully completed application for employment form obtainable on www.nda.org.za must be emailed to careers@nda.org.za.
 
Correspondence will be limited to shortlisted candidates only. Preference will be given to candidates whose appointment will promote NDA Employment Equity targets. 
 
NB: Use the job reference as a subject line (heading of the email application) e.g. 2024FA1 
 
An email without the reference number as a subject/heading will be disqualified. Please ensure that the reference number is written the same way as in the advert. 
 
Failure to submit a detailed CV, fully completed application form and comply with the application instructions above will result in the disqualification of your application. 
 
For enquiries regarding this position, please contact Ms. Kobela Matjea at Tel: 011 018 5500 / 5622. 
 
Should you not be contacted within two months of the closing date of this advert, please consider your application unsuccessful. All candidates will be subjected to personnel suitability checks, qualification verification and competency assessment where required. Correspondence will be made with shortlisted candidates ONLY. 
 
Closing date: 15 September 2024 
 
UNLOCKING POTENTIAL`],postedDate:"3/9/2024",iframe:"",uuid:"p1929b770-9e98-47e5-a32c-c2cd2299fe39"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/national-home-builders-registration-council-nhbrc.png?1725387780",href:"https://www.govpage.co.za/national-home-builders-registration-council-nhbrc-vacancies-blog/national-home-builders-registration-council-nhbrc-vacancies4799202",title:"NATIONAL HOME BUILDERS REGISTRATION COUNCIL (NHBRC) VACANCIES",content:[` 
NATIONAL HOME BUILDERS REGISTRATION COUNCIL (NHBRC)
 `,` 
 
REGULATORY INVESTIGATOR
CONTRACT TYPE : TEMPORARY
JOB GRADE : COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO : MANAGER: REGULATORY ENFORCEMENT
DEPARTMENT/SECTION : REGULATORY ENFORCEMENT
LOCATION : HEAD OFFICE, SUNNINGHILL JHB
 
KEY DELIVERABLES
The Regulatory Investigator is responsible for conducting investigations and enforcing laws and regulations related to the construction industry in South Africa with specific reference to criminal conduct as set out in Housing Consumers Protection Measures Act 95 of 1998. The individual will conduct investigations into potential criminal activity, gather evidence, prepare investigations report and open cases for criminal investigation and prosecution.
 
The Individual will primarily be responsible for, but not limited to the following:
• Develop and implement investigative plans outlining the process, parameters, timelines and outputs consistent with policies and procedures under limited guidance;
• Make decisions and recommendations regarding the right of reply or review on the closure of file.
• Development and implementation of investigation policy.
• Manage, plan and conduct investigations relating to defaulters (e.g. defaulting home builders) in terms of the Housing Consumers Protection Measures Act 95 of 1998, Regulations, Council Rules and Code of Conduct.
• Conduct investigations by collecting information via interviews, taking statements and physical and electronic surveillance, having appropriately planned investigative tactics and strategies. – tracing and locating of subjects.
• Analyse information and prepare reports relating to investigations and prepare briefs of evidence for assessment by the Manager.
• Compile Investigation Reports.
• Analyse queries and complaints trends and suggest solutions. Responding to queries and complaints.
• Testify and/or present material evidence to relevant forums in a clear and concise manner.
• Carry out ad hoc duties and investigations as required.
• Assist in preparing cases for prosecution and presenting evidence at criminal and civil trials.
• Attend court and give evidence obtained through the process of investigation.
• Preparing and presenting reports to senior/executive management.
• Provide relevant technical support to stakeholders to ensure team objectives are achieved.
• Investigate and compile case files in respect of criminal offences for referral to SAPS.
• Investigate and compile case files in respect of developers/contractors identified and referred to the NHBRC from various sources, including but not limited to National Department of Human Settlements, Ministerial Hotline and the NHBRC Fraud Hotline.
• Collating and presenting material evidence and analysis in a clear and concise form which is relevant to and meets business expectations.
• Providing management with advice on crime prevention and detection strategies.
• Compile clear and concise reports for use in home builder disciplinary hearings and other relevant forums.
• Report findings of investigations in an effective and unbiased manner.
• Prepare reports and other documentation (monthly, quarterly and annual reporting).
• Provide input into the budgeting process of the department.
• Ensure that expenditure is in line with budget requirements, standards and policies.
• Procure and safeguard assets of the function.
• Build and maintain good working relationship with all stake holders to ensure effective and efficient investigations.
• Conduct workshops to educate both internal and external stake holders of the role played by the Investigators within NHBRC and to advise them of the role each discipline can play in improving the service provided by the NHBRC in the regulation of the home building industry.
• Liaise with the relevant prosecuting authority and SAPS in respect of criminal cases.
• Engage with internal stakeholders to improve the flow of information during investigation process.
• Maintain records of communication with stake holders, including builders, housing consultants and unregistered homebuilders.
• Discuss and share investigation reports with relevant officials from entities such as National Prosecuting Authority; Municipalities and specialized units (e.g. Hawks) to ensure successful prosecutions.

MINIMUM REQUIREMENTS:
• Must hold an appropriate bachelor’s degree in (NQF 7) in Policing Law or Criminal Investigations
• Minimum of five (5) years’ work experience in investigations
• Recent and demonstrated experience in the conduct of criminal or complex investigations and information
 
APPOINTMENT
The above-mentioned position will be offered on temporary basis for a period of 1 year with a basic salary.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Mr. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE: 12 September 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary Regulatory Investigator” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates will be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.
 
 
 
 
 `,`PROSECUTOR: GAUTENG
CONTRACT TYPE : TEMPORARY
JOB GRADE : COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO : MANAGER: REGULATORY ENFORCEMENT
LOCATION : HEAD OFFICE, SUNNINGHILL.
 
KEY DELIVERABLES:
The role of the Prosecutor is responsible to oversee compliance with the Housing Consumers Protection Measures Act, Rules and Regulations through instituting disciplinary action against defaulting home builders, guiding and directing investigations, providing legal advice, and represent the NHBRC at the disciplinary hearing of home builders before the Disciplinary Committee.
 
The Individual will primarily be responsible for, but not limited to the following:
• Review new instructions and decide if suspension is warranted
• Draft suspension memo recommending suspension to the COO or any delegated official.
• Upon final decision by the COO or any delegated official, ensure that relevant stakeholders are notified of the suspension.
• Implement any other instruction or request from Manager Regulatory Enforcement, COO or delegated official.
• Respond to suspension queries and advise homebuilder what legal requirements must be complied with for the suspension to be lifted.
• Review new instructions and decide on the prospects of successful prosecution
• Provide guidance regarding further investigation on the prosecutorial matters.
• Collate evidence for prosecution matters.
• Draft and submit valid affidavits and charge letters to home builders.
• Draft and issue charge sheets.
• Peruse legal representations (disputing the charges or request to be exonerated from the contravention) and judiciously consider same from Home Builders and their legal representatives.
• Conduct legal research based on the legal representations received to make a legally informed decision on the representations.
• Communicate decision to prosecute or exonerate to relevant stakeholders.
• Draft summons memo and issue summons.
• Compile witness list.
• Draft Disciplinary Hearing roll;
• Serve DC roll upon relevant witnesses and stakeholders.
• Compiling evidential bundle for DC hearings.
• Consult with witnesses to ensure successful prosecution of matters.
• Liaise with Secretariat regarding disciplinary hearing dates to ensure efficient scheduling of cases and availability of Disciplinary Committee members.
• Oversee the appointment of Interpreters in the regions where required.
• Attend to preliminary issues to establish facts that are common cause and facts in dispute
• Present prosecution’s case in the form of viva voce (oral) and documentary evidence.
• Chief Examination-lead witnesses and re-examine where necessary.
• Raise objections to protect the prosecution’s witness
• Cross examine defense witnesses.
• Prepare and draft arguments on merits.
• Conduct research to support arguments.
• Drafts heads of arguments.
• Present closing arguments.
• Establish if homebuilder has previous convictions and present same.
• Prepare and draft arguments and present aggravating factors.
• Make further oral submission in response to the defense argument.
• Recommend sanctions to the Disciplinary Committee.
• Review instructions and decide if grounds exist for suspension to be uplifted.
• Verify compliance with relevant departments.
• Instruct Technical officials to investigate and prepare reports for submission to prosecution regarding alleged compliance by a homebuilder.
• Draft memo recommending suspension upliftment to the COO or any delegated official.
• Upon final decision by the COO or any delegated official, ensure that relevant stakeholders are notified of the suspension upliftment.
• Respond to upliftment queries.
• Ensure suspension of homebuilders that have failed to comply with DC verdicts
• Identify and eliminate waste within own area of responsibility to ensure operational excellence
• Monitor expenditure of subordinates in order to eliminate fruitless and wasteful expenditure e.g., travel requests.

• Planning & Scheduling of DC hearings to minimize DC expenses on transport, accommodation, catering, transcription, printing and DC Members costs.
• Planning and Organising by assigning some responsibilities, on a temporary basis, to less burdened officials in order to alleviate pressure from overburdened officials.
• Prepare ad hoc reports as and when required.
• Ensure periodic reports are compiled and submitted.
• Develop and review policy document.
• Identify and recommend initiatives aimed at saving costs for the Section.
• Assist, where possible, with the implementation of the above initiatives to ensure operational excellence.
• Support and participate in change management initiatives as part of contributing to the organisation’s transformation.
• Provide inputs in drafting and review of enforcement policies, procedures and process maps.
• Assist in drafting enforcement policies as and when required by the Manager.
• Respond to audit findings.
• Advise Manager on emerging risks affecting the Enforcement Section and the organization.
• Prepare ad-hoc reports for submission to the NHBRC Management, Committees of Council and other stakeholders as requested by Manager.
• Assist Legal Services by providing inputs in the review of the Act
• Vetting of policies relating to enforcement of the Act (Inspection, Registration, Enrolment, etc.).
• Attendance and participation in committees, meetings and forums as requested.
• Provide input into the budgeting process of the department.
• Ensure that expenditure is in line with budget requirements, standards and policies.
• Procure and safeguard assets of the function.
• Contribute to revenue collection for the organization by ensuring compliance with imposed penalties thus deterring builders from repeated non-compliance.
• Recover optimal amounts of Disciplinary Hearing fines without resorting to costly litigations measure.
• Liaise with Secretariat to obtain Disciplinary Rulings.
• Review written rulings and liaise with Secretariat to obtain amended rulings.
• Oversee the serving of disciplinary hearing outcome reports upon homebuilders.
• Conduct follow up on payments.
• Receive and review requests for deferred payment of fines and communicate decision to relevant stakeholders.
• Draft Acknowledgement of Debt.
• Monitor and review payments.
• Ensure payment allocation of fines by Finance Department.
• Notify Litigation Unit, Regulatory Enforcement Manager, Paralegal and relevant provinces regarding payments made.
• Refer matters to Litigation Unit where builders fail to honour DC ruling or AOD (where payment arrangements were made).
• Conduct legal research in preparation of training interventions.
• Provide legal advice and support to internal and external stakeholders in relation to applicable legislative and regulatory framework.
• Undertake training and awareness initiatives, on applicable legislative/regulatory framework to ensure compliance thereto, for stakeholders such as: home builders, financial institutions, conveyancers, SAPS, NPA, Municipal Inspectors, and internal stakeholders.
• Timeous submission of performance agreements and reviews.
• Conduct performance management and monitor performance on an on ongoing basis through mentoring, coaching, and reviews and take appropriate steps to correct performance issues.
• Deal with grievances, conflict and disciplinary issues and take appropriate actions in accordance with NHBRC Policy.
• Recruitment and selection of suitable candidates according to recruitment and selection procedures and EE targets within area of responsibility.
 
MINIMUM REQUIREMENTS:
• Must hold an LLB and or appropriate bachelor’s degree (NQF 7)
• Minimum of five (5) years’ work experience in prosecutions and criminal investigations
• Minimum of three (3) years’ supervisory experience
• Recent and demonstrated experience in the conduct of criminal or complex investigations and prosecutions
 
APPOINTMENT
The above-mentioned position will be offered on a temporary basis for a period of 1 year with a Total Cost To Company package.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Mr. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE: 12 September 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary Prosecutor: Gauteng’’ in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates will be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.`,`TEMPORARY SPECIALIST: ITDT GOVERNANCE AND INFORMATION SECURITY
CONTRACT TYPE : TEMPORARY
JOB GRADE : COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO : CHIEF INFORMATION OFFICER
DEPARTMENT/SECTION : INFORMATION TECHNOLOGY AND DIGITAL TRANSFORMATION
LOCATION : HEAD OFFICE, SUNNINGHILL JHB
 
KEY DELIVERABLES
The Specialist: ITDT Governance and Information Security is responsible for ensuring the operations of the NHBRC information security solutions and establishing maturing an enterprise security stance through policy, architecture, and training processes.
 
The Individual will primarily be responsible for, but not limited to the following:
• Develop and implement the ITDT Governance Framework within the NHBRC.
• Oversee ITDT Governance Risk assessments and Audits.
• Develop and implement ITDT system change processes.
• Establish ITDT change control committee and implement terms of reference.
• Engage with peers in the Applications and ITDT Infrastructure teams in all business units to ensure enterprise-wide understanding of security goals, to solicit feedback and to foster co-operation.
• Develop and implement an information security strategy for the organisation.
• Oversee the deployment, integration, and initial configuration of all new security solutions.
• Implement enhancements to existing security solutions in accordance with standard best operating procedures generically and the enterprise security document specifically.
• Develop and maintain the enterprise information security architecture.
• Develop and maintain the enterprise security awareness training program.
• Select and acquire additional security solutions or enhancements to existing security solutions to improve enterprise security as per the enterprise existing procurement processes.
• Ensure the confidentiality, integrity and availability of the data residing on or transmitted to/from/through enterprise workstations, servers, and other systems and in databases and other data repositories.
• Provide information for investigations into problematic activity and provide communication with senior management.
• Plan and execute vulnerability assessments, penetration tests and security audits.
• Align ICT contracts with signed SLA.
• Develop, monitor, and review the enterprise information security policies, procedures, standards, process flow s and forms.
• Contribute to the development of and maintenance of the risk register of ITDT Governance and Information Security Risks
• Compile reports and other documentation for internal stakeholders and council sub committees.
• Collaborate with the compliance function in respect of monitoring and implementation Acts and Regulations.
• Respond to audit findings.
• Recommend actions on the improvement of systems and practices from a ICT Governance and Security perspective.
• Ensures adherence to all policies, procedures, and applicable laws.
• Manage Service Level Agreements (SLA) with external service providers.
• Maintain project costing information on assigned projects.
• Perform regular security awareness training for all employees to ensure consistently high levels of compliance with enterprise security documents.
• Build and maintain good working relationship with all stake holders to ensure effective and efficient ICT Governance and Security environment.
• Implement remedial actions where required.
• Provide relevant technical support to stakeholders to ensure team objectives are achieved.


MINIMUM REQUIREMENTS:
• Matric/Grade12 Certificate
• Minimum of a bachelor’s degree (NQF 7) in IT/Computers Science.
• Minimum five (5) years’ experience in ICT and Information Security.
• Relevant Information Security Certification.
• Relevant Risk Management Certification
 
APPOINTMENT
The above-mentioned position will be offered on temporary basis with a basic salary.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Ms. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE: 10 September 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary Specialist: ITDT Governance and Information Security” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates will be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.`],postedDate:"3/9/2024",iframe:"",uuid:"pb2de5dda-0347-4932-9e09-065fa9791d0f"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/psira_orig.jpg",href:"https://www.govpage.co.za/private-security-industry-regulatory-authority-psira-vacancies-blog/private-security-industry-regulatory-authority-psira-vacancies6229403",title:"PRIVATE SECURITY INDUSTRY REGULATORY AUTHORITY (PSIRA) VACANCIES",content:[` 
PRIVATE SECURITY INDUSTRY REGULATORY AUTHORITY (PSIRA)
 
The Private Security Industry Regulatory Authority (PSiRA) with its head office in Eco Park - Centurion is the statutory body regulating the private security industry in South Africa. PSiRA is looking for dynamic experienced and suitably qualified professionals to take up these challenging positions. It is the intention of the Authority to promote representative through the filling of these positions.
 `,` 
 
MANAGER: FINANCIAL REPORTING & ASSET MANAGEMENT
All-inclusive package of R 1 111 724 per annum (Centurion)
 
Requirements: Degree or National Diploma in Accounting or Management Accounting, coupled with 6 to 8 years of experience in financial reporting and asset management within a large to medium-sized organizational environment (preferably in the public sector) of which two (02) years should be at the Team Leader or Supervisor level● Recognition of Prior Learning (RPL) and relevant knowledge and experience on the job may be considered during the selection process● Articles or professional accounting qualifications would be an added advantage. 
 
Essential Criteria: In-depth knowledge of GRAP/IFRS, King III/IV, PFMA, National Treasury Regulations, and the Preferential Procurement Policy Framework Act ●High proficiency with spreadsheet and accounting software programs ●Strong analytical and problem-solving skills, with the ability to conduct root cause analysis and identify opportunities for improvement ● Excellent verbal, written, and interpersonal communication skills ●Proven ability to lead and develop a finance team, with a focus on achieving accuracy, efficiency, and compliance. 
 
Key Performance Areas: Finance and bookkeeping: Coordinate the management of the trial balance to ensure that all items are correctly allocated● Preparation of the annual financial statements● Implementation of systems of internal controls ●Manage the asset life cycle and ensure adherence to budget provisions in liaison with the respective stakeholders● Review insurance and public liability claims, consolidate and present findings and trends to the Senior Manager ●Establish and maintain robust internal controls to safeguard company assets and ensure accurate financial reporting● Ensure that assets are accurately accounted for in accordance with the applicable GRAP accounting standards● Coordinating the preparation and submission of financial reports according to treasury regulations and guidelines ● Participate in the audit process to ensure that PSiRA receives an unqualified audit report● Ensure that internal and external audit queries are resolved timely and that information is provided ● Ability to promote teamwork ●Ability to take key decisions in complex situations and stand by decision/s taken.
 
PLEASE APPLY HERE
 
 
 `,` 
 
 
 
 
ACCOUNTANT: FINANCIAL REPORTING & ASSETS MANAGEMENT 
Salary: R 724 287 basic salary P/A plus benefits (Centurion)
 
Requirements: Degree or National Diploma in Accounting coupled with 5 to 6 years? experience in the Accounting or Finance environment, of which two (2) years should be at the Team Leader or Supervisor level● Recognition of Prior Learning (RPL) and applicable knowledge and experience on the job may be considered during the selection process. 
 
Essential Criteria ● Strong understanding of GRAP and PFMA regulations and their application in financial reporting● Proficiency in processing journal entries, managing accruals, trade payables, and preparing financial reconciliations ●Excellent attention to detail, with strong analytical and problem-solving skills ● Good communication skills, both verbal and written, with the ability to effectively interact with team members and other departments ● Ability to manage multiple tasks and meet deadlines in a fast-paced environment● Experience in document management and compliance with regulatory standards. 
 
Key Performance Areas: Assist in the preparation of financial statements, ensuring compliance with GRAP and PFMA ● Identify and resolve discrepancies in financial records, ensuring accuracy and reliability of financial information ● Process accruals for suppliers and manage the journal entries after approval from the Manager: Reporting & Assets Management ●Handle the processing of all recurring monthly journals, as well as the preparation of year-end and reallocation journals ● Manage and maintain accurate records of fixed assets, including acquisitions, disposals, and depreciation ●Conduct periodic analysis of asset data to identify and rectify discrepancies or irregularities ● Support the implementation of asset management policies and ensure that assets are properly accounted for according to Accounting standards ● Ensure all financial processes and records comply with auditing standards and regulatory requirements● Participate in the reconciliation of Balance Sheet accounts, ensuring accuracy and completeness ● Maintain process compliance by ensuring that all financial operations align with internal controls and policies ● Prepare and manage documentation for audits, ensuring timely and accurate submission of reports ● Assist in the resolution of audit queries, providing necessary information and documentation to internal and external auditors ● Support team productivity by ensuring timely completion of tasks and adherence to performance metrics ●Foster positive relationships with internal stakeholders by delivering high-quality financial reports and addressing queries promptly. 
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
SUPPLY CHAIN MANAGEMENT SPECIALIST
All-Inclusive package of R 1 111 724 per annum (Centurion)

 
Requirements: Degree/National Diploma in Supply Chain Management/Logistics or Finance coupled with 5 to 6 years’ experience in Supply Chain Management environment, of which two (2) years should be at Team Leader/Supervisor level ●Recognition of Prior Learning (RPL) and applicable knowledge and experience on the Job may be considered during the selection process. 
 
Essential Criteria: The Constitution, PFMA, PPPFA, Treasury regulations as well as general understanding of BBBEE Act requirement in line with procurement compliance ●Comprehensive knowledge and understanding of SCM best practices. Comprehensive understanding of legislation/prescripts. 
 
Key Performance Areas: Project Management: Demonstrable capability of leading and driving project-based exercises to completion● Procurement and demand plan management: Conducts in-depth market research and analysis of historical expenditure all procurement related activities● Lead the pivotal operations of driving cost-effective procurement practices, fostering supplier relationships, and ensures supply chain integrity● Align procurement plan with project plans to enable execution in line with appropriate procurement strategies and approvals● Liaise with suppliers and provide support as required to all stakeholders during the project life cycle● Facilitate of negotiations process with potential service providers to ensure value for money in obtained in procurement process● Monitor commodity markets, pricing trends, and supply availability● Reporting on other methods of procurement ●Travel Management: Execution of travel related processes and procedures by facilitating day-to-day arrangements for all travel related activities, including flight arrangements, visa applications, vendor negotiations and contracts ● Contract Management: Provide oversight of the contract management process, as well as the development of specific standards for bidding and submission, contract negotiation, and document management● Ensuring that suppliers deliver against contractual SLAs and requirements of business units in achieving objectives● Managing escalations/disputes between Suppliers and Business users ● Supplier Development: Manage supplier relationships, including research, vetting, and performance evaluation ●On-board new clients with efficient sourcing, purchasing, and management of goods and services that meet the company's requirements and standards● Manages data, business partnerships and project opportunities required to meet metrics for success ●Cultivate and manage relationships with suppliers and logistics companies to negotiate contracts and terms that benefit the organisation ●Identify cost-saving opportunities while maintaining quality standards and ensuring timely delivery● Evaluate supplier performance and implement improvements or changes as necessary● Employee management: ? Lead, develop, and manage the human capital and ensure sound financial management of the unit. 
 
PLEASE APPLY HERE
 
 
 
 
 `,`COMMITTEES COORDINATOR 
Salary: R 724 287 basic salary P/A plus benefits (Centurion)
 
Requirements: Recognised Degree/ National Diploma in Law and/or corporate governance qualification coupled with at least 3 years’ experience working with Board/Council Committees ● CIS qualification or registration for same will be an added advantage. 
 
Essential criteria: Interpretation of statutes ● Ability to work under pressure ● Document Control or Record Management● Client & service orientated ● Excellent verbal and written communication skills (to all levels & personalities) ● Excellent people/interpersonal skills (incl. diplomacy & problem solving) ● Advanced computer literacy in MS Office packages - Word, Excel, PowerPoint. ● Excellent planning and organising skills ● Excellent reporting skills ● Strong analytical and problem-solving skills ● Excellent negotiation skills ● Supervisory skills ● Advanced writing skills. 
 
Key Performance Areas: Provide Council Committees support as per King Report on Corporate Governance: Provide secretariat, legal and administrative support to Council Committees to ensure their effective and efficient functioning ● Schedule and administer arrangements for Council Committee meetings, circulate meeting agendas, and preparation and compilation of Committee meeting packs ● Assist with the coordination and facilitation of induction of new committee members and governance developmental training ● Attend the Council committees’ meetings in order to ensure that the legal requirements are fulfilled and decisions are legally sound and rational, accurate records, minutes are kept and provide such advice and information as is necessary ● Governance and Statutory Responsibilities: Ensure that the Council committees’ charters and terms of reference are kept up to date ● Ensure that the minutes of the Council Subcommittees are signed and kept safe ● Ensure proper record keeping, including disclosures of interests and performance assessments of Committees and individual members ● Administrative Responsibilities: Provide administrative support to Committee Chairpersons including, amongst others document sourcing and/or preparation, document delivery and collection and arrange meetings, travel, and accommodation logistics ● Maintain and update Committees’ membership records as and when required, and monitor the filing, security and availability of the Committee’s records ● Preparation and circulation of Committee meeting agenda packs, action lists and minutes ● Communicate Committee decisions and requests to relevant staff, and monitor and report on the implementation of decisions ● Assist with the preparation of Committee reports as may be required ● Receive, process and ensure payment of Committee members’ claims for meetings and travel, and update members’ payment records; and Maintain in-house documents in accordance with the existing practices.
 
PLEASE APPLY HERE`,`PROJECT ADMINISTRATOR
Salary: R 318 409 P/A plus benefits (Centurion)
 
Requirements: A recognised Degree or Diploma in Business Administration/Project Management or equivalent NQF level 6 qualification coupled with 2 to 3 years’ experience in the management or coordination of projects ● A certificate in project management will be an advantage ● A valid driver’s license ● Recognition of Prior Learning (RPL) and experience on the Job may be considered during the selection process. 
 
Essential criteria: Proficient in relevant Microsoft Office Packages ● Good oral and written communication skills ●Knowledge of legislations ●Interpersonal Skills ●Computer Literate ●Organizational Skills ● A calm, logical approach with an ability to work and deliver under pressure ●Professionalism ●The successful candidate is expected to have his/her own reliable vehicle. 
 
Key Performance Areas: Provide administrative and support to the Project Officer ● Assist the Project Manager in planning, scheduling, and executing project activities ● Coordinate meetings, prepare agendas, and take minutes ● Attend meetings internally, externally and assist Project Officer with determination of project requirements ● Assist Project team in drafting of project related documentation including but not limited to concept proposals, preliminary schedules etc ● In absence of Project Officer, chair unit projects meetings and distribute minutes to all project stakeholders ● Coordinate the planning and management for internal and external project management activities ● Coordinate engagements between other business units and project management unit at operational level ● Liaise with allocated projects resources to track and assist in monitoring progress on set targets ● Assist the project management team in the review of any project related documents that may arise over the course of the project ● Prepare and maintain proper centralised project directory for potential audit with reference ● Attend and participate in all project management forums/ or meeting as required to represent the Project Management. Maintain and update project documentation, including contracts, reports, and project plans ● Ensure all project documents are properly filed and accessible to team members. 
 
PLEASE APPLY HERE`],postedDate:"3/9/2024",iframe:"",uuid:"p32c31cd6-7850-4b5a-b83e-00555a0aa18a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/shra_orig.png",href:"https://www.govpage.co.za/social-housing-regulatory-authority-shra-vacancies-blog/social-housing-regulatory-authority-shra-vacancies5605689",title:"SOCIAL HOUSING REGULATORY AUTHORITY (SHRA) VACANCIES",content:[` 
SOCIAL HOUSING REGULATORY AUTHORITY (SHRA)
 `,`1. COMPLIANCE, ACCREDITATION AND REGULATIONS EXECUTIVE
 
Key stakeholders the Compliance, Regulation and Accreditation Executive will engage with are:
• Council and Council Sub-Committees
• CEO
• Exco
• SHIs and Project Leaders
• Service providers
• Attorneys
• Department of Human Settlements
• Private and Public Sector
 
REQUIREMENTS:
Qualifications/Knowledge (including most relevant field of study)
• A post graduate degree or equivalent in commerce, project management or similar is required
• Required computer literacy
 
EXPERIENCE:
• 5 years senior leadership experience is required
• 3 years Council interaction experience is required
• 10 years compliance and/or regulatory related experience is required
• 5 years public sector experience is required
 
 
 
 
 
2. SELECTION OF BOARDS OF DIRECTORS 
 
Invitation for nomination of candidates for the National Department of Human Settlements’ database for selection of the boards of directors (BOARDS) of Community Schemes Ombud Service (CSOS), Housing Development Agency (HDA), National Housing Finance Corporation (NHFC), National Home Builders Registration Council (NHBRC), Property Practitioners Regulatory Authority (PPRA), Social Housing Regulatory Authority (SHRA) and office of disclosure.
Ref. no: dhs/igr/001/24
 
The Department of Human Settlements (DHS) hereby invites nominations from individuals, organisations, institutions and civil society structures for suitable candidates to be included in the DHS database for selection on the Boards of Public Entities/SOCs/Regulatory Offices/Oversight offices that report to the Minister of Human Settlements.
 
REQUIREMENTS:
The Minister of Human Settlements intends to establish a Database of persons who, when viewed collectively have wide experience and who: Are suited to serve on the Board by virtue of their qualifications, expertise and experience in the fields of Strategic Leadership, Financial Management, Dispute Resolution, Township Planning, Land Development, Project Management, Property Management, Development Finance, Public Finance, Global Economic Analysis, Legal, Policy Development, Land Reform, Infrastructure Development, Civil Engineering, Environmental Engineering, Transformation, Information Technology, Compliance, Auditing, Risk Management, Accounting, Actuarial Science, Human Resources Management, Public Education and Training, Promotion and Protection of Consumer Interests, Property Practitioners, Property Estate Management and Administration, Banking, Home Loans, Credit Risk, Knowledge of the Consumer and Credit landscape, Insurance, Intergovernmental Relations, Supply Chain Management, Investment Management, Commerce, Finance, Corporate Governance, Socio-economic Development, Public Policy, Business, Public Administration, Social Housing, Property and Rental Administration, Construction, Community Schemes Administration Policy development, skills, ethics and experience.
The Minister of Human Settlements intends to establish a Database that will remain valid for a period of five (5) years. The Database will be used to appoint a full Board or fill any vacancy that will exist from the Boards from a pool of candidates who will be in the Database. Members of the public are hereby invited to nominate persons who have the required knowledge, skills, understanding of the mandate and experience in any of the Entities of the Department of Human Settlements listed above to send their nominations.`,`NOMINATION PROCEDURE:
(a) Written nominations must contain the full name, address and contact numbers of the person or organisation making the nomination. A signed acceptance of the nomination by the nominee.
(b) A Curriculum Vitae of the nominee, providing the following information: Full name; Identity number and gender; latest address; contact(s) details including cellphone and email; previous experience quoting dates and organisations or institutions concerned; academic qualifications and other directorships; certified copy of the identity document and qualifications; At least two names and contact details of references, Membership of all Boards the nominee currently serves on or has served on in the past ten (10) years and any other information that may be of assistance to the DHS in making recommendations.
Further considerations: Self-nomination is not allowed. Security clearance in the form of background verification including criminal records, directorship, ITC and citizenship checks will form part of the selection process. It is the responsibility of the nominee to have foreign qualifications verified by the South African Qualifications Authority (SAQA). Preference will be given to candidates whose appointment will enhance representativity.
Disclaimer: The DHS reserves the right to amend, modify or withdraw this advert or to amend, modify or terminate any of the requirements set out herein at any time and from time to time, without prior notice and without liability to compensate or reimburse any party. Nominations do not mean acceptance as candidates and all nominees will be subject to the DHS’ determined recruitment and selection process for this purpose. The DHS reserves the right not to select any nominee as a candidate.


The Minister of Human Settlements reserves the right to determine the appropriate remuneration allowances and other benefits of the Chairperson and other Board members.
The nomination must be emailed to edatabase1@dhs.gov.za for the attention of the Director-General, Department of Human Settlements. 
 
For enquiries: Ms Sindisiwe Ngxongo at (012) 421 1742/1717.

N.B. Women, youth and persons with disabilities are encouraged to apply. 
Correspondence will be limited to the successful candidates. 
Successful candidates will be subjected to security vetting.

The closing date for the nominations: 23 September 2024`],postedDate:"3/9/2024",iframe:"",uuid:"pf9a21962-da66-4c77-825e-3ff477e5f5b2"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/safcol_orig.jpg",href:"https://www.govpage.co.za/south-african-forestry-company-safcol-vacancies-blog/south-african-forestry-company-safcol-vacancies9300680",title:"SOUTH AFRICAN FORESTRY COMPANY (SAFCOL) VACANCIES",content:[` 
SOUTH AFRICAN FORESTRY COMPANY (SAFCOL)
 `,`SENIOR FORESTER: SILVICULTURE X2 (1X BERLIN, 1X ENTABENI PLANTATION)
Status: Permanent
Location: Berlin/Entabeni Plantation
Grade: C5
Reporting line: Plantation Manager
 
Role Mandate
To manage all growing stock in SAFCOL plantation (Berlin/Entabeni Plantation) by implementing silviculture practices according to BOP standards.
 
Key Accountabilities
• Manage silviculture activities and contractors and establishment programme by:
Performing growth stock planning, identify nature and type of plants to be planted for specific conditions
Determining planting regime and assessing sites for re-generation
Identifying correct fertilizer type and application
Performing blanking assessments to replace dead plants and assessing watering needs in winter plants
• Perform fire management by:
Compiling burning register and fire plan
Assessing if fuel reduction burn is required before planting
Developing and managing fuel reduction burns in mature compartments
Obtaining burning permits
Managing annual firebreak preparations and burning of fire breaks
Attending fire association meetings and ensuring suppression of fire
• Manage pruning process by:
Managing process according to APO and regimes
Managing task determination by keeping track of the amount of trees to be pruned per worker
• Manage marking of trees for thinning, develop and manage plantation weed control plan
• Ensure proper management of conservation areas by controlling weeding, erosion, controlling escapees (weeds)
• Update and implement management unit clearing plan, conservation management plan, environmental management plan
• Identify CAPEX needs, compile detail annual silviculture budget and consolidate budget for the section
• Monitor sectional budget and manage fuel consumption of vehicles under area of control
• Manage assets and ensure proper utilisation and preventative maintenance plan is executed
• Extract data from IMS for daily operations and reporting
• Ensure correct utilisation of equipment by teams
• Ensure team adherence to health and safety standards and environmental practices
• Manage fire-fighting operations, practices and monitor Personal Protective Equipment (PPE) usage
• Ensure toolbox talks, perform incident investigations and identify training needs
• Organise Safety, Health and Environmental (SHE) awareness initiatives

• Build and maintain relationships with the community regarding firewood, sand mining, fire prevention, and illegal activities
• Facilitate engagements with internal support functions to ensure cooperation within the business
• Supervise Silviculture team to ensure effective daily operations
• Coach and mentor team members on a daily basis to improve productivity
• Monitor team members to ensure planned training needs is undertaken
 
Minimum Requirements
• Grade 12
• National Diploma in Forestry (NQF level 6)
• B-Tech or BSc Degree in Forestry (NQF level 7) will be added advantage
• 3 – 5 Years’ experience in silviculture operations
• Valid driver’s license
 
Leadership Competencies
• Driving change
• Operational delivery
• Self-awareness
• Business acumen
• People management
 
Behavioural Competencies
• Relationship building
• Communication
• Planning and Organising
• Conflict Management
• Problem solving
• Stakeholder management
 
Technical Competencies
• Process flow management
• Total quality management
• Mechanical and maintenance
• Safety management
• Fire prevention and control
• Silviculture practices
• Computer literacy`,`SAFCOL Group is an equal opportunity company with the focus on gender equality and people with disabilities.
 
Employment Equity will be taken into consideration in terms of all appointments within SAFCOL.
 
Interested qualified individuals can e-mail a concise CV and must submit relevant copies of qualifications in confidence to:
Ms. Magdeline Selopyane, Human Capital Practitioner, magdalinerecruitment@safcol.co.za  Tel no: 013 754 2700
 
Closing date: 06 September 2024
 
Should you not have received a response within 30 days of the closing date, please consider your application unsuccessful.`],postedDate:"3/9/2024",iframe:"",uuid:"p4fd23b52-5386-4cba-bc43-b559a056686e"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/salb.jpeg?1725389066",href:"https://www.govpage.co.za/south-african-library-for-the-blind-salb-vacancies-blog/south-african-library-for-the-blind-salb-vacancies8951464",title:"SOUTH AFRICAN LIBRARY FOR THE BLIND (SALB) VACANCIES",content:[` 
SOUTH AFRICAN LIBRARY FOR THE BLIND (SALB)
 `,`Employment Opportunity (Re: Advertisement) 
 
The South African Library for the Blind is a Schedule 3A Public Entity, an agency of the National Department of Sports, Arts and Culture, and is governed by the provisions of the South African Library for the Blind Act, 91 of 1998. 
Applications are invited from suitably qualified South African citizens for the following 3-year contract position to commence on 1 November 2024 or earlier: 
 
PROJECT ACCOUNTANT 
3 YEAR CONTRACT TERM 
 
OVERVIEW OF POST: 
The main responsibility of the Project Accountant is to render a comprehensive and professional accounting and financial administrative function in terms of projects funded by Conditional Grants within the SA Library for the Blind (SALB). This function will also facilitate budget allocation, track expenditure patterns for the provincial, national and donation funding, support and work collaboratively with the general finance section within the SALB, and the incumbent will report to the Office of the CFO. 
 
Minimum Requirements: 
A completed NQF 6 or higher-level qualification in Accounting/Finance. 
5 years working experience in an accounting/bookkeeping/financial administrative position, preferably in the public sector. 
Intermediate or higher-level experience in the Ms Office Suite, particularly MS Excel and Ms Word. 
Sound knowledge and practical experience in computer based financial systems including but not limited to SAGE Pastel. 
The ability to perform bookkeeping functions up to at least trial balance effectively and efficiently. 
Good understanding of accounting principles and ability to analyse financial statements and reports. 
An ability to prepare, manage and review budgets, monthly, quarterly, annual and ad-hoc financial reports, including narrative reports thereto. 
Good working knowledge and exposure to budgeting and reporting to oversight bodies and National Treasury in terms of the customised reporting templates. 
 
Other skills and attributes: 
Good (English) written and verbal communication skills. 
A highly motivated, detail oriented and deadline driven individual who is well organised and able to prioritize workload. 
Strong time management skills, and multi-tasking ability. 
Good interpersonal skills. 
 
The following competencies will be advantageous: 
At least two years’ work experience in a supervisory capacity in a financial section within the Public Sector. 
Good working knowledge of GRAP, IFRS, the PFMA, Treasury Regulations, SCM and related Acts and prescripts. 
Having worked and actively participated in Bid Processes (from preparation of specification documents, invitation of bids/tenders and quotations, tender and or specification briefing meetings, record management of SCM documents, participating in review and in adjudication committees, and other related functions. 
Previous experience in internal and external audits, particularly in the Public Sector. 
Practical knowledge and exposure to preparation of AFS, and National Treasury financial templates. 
An ability to inspect and advise on corrections required on payroll processing and statutory reporting in terms of payroll matters (e.g. Tax reconciliations, Workman’s Compensation, Statistical reporting, etc.). 
Working experience of electronic banking processing. 
Proven track record and experience in systems with proficiency in data analytics and report writing skills.`,`All-inclusive Remuneration Package: R467 670 CTC per annum 

 
Candidates who meet the minimum requirements that would like to apply for the position should submit a Letter of application together with a Curriculum Vitae and certified copies of qualifications of his/her SA ID to: Ms Glynis Bentley at Sheldon Recruitment at email address glynisb@sheldon.co.za
Contact number 043 735 1773. 
 
Closing date for applications: 16:00 on 06 September 2024 
 
PLEASE NOTE: 
Applications from suitably qualified candidates from designated groups, particularly persons with disabilities, youth and woman are encouraged. 
Short-listed candidates may be required to undergo competency testing. 
SALB reserves the right not to appoint any person to this position. 
Original certificates and/or testimonials may be requested from shortlisted candidates for verification purposes before confirming an appointment. 
Certification of documentation in support of this application may not be older than 6 months.`],postedDate:"3/9/2024",iframe:"",uuid:"p362d62d3-ffe4-426d-a52c-7c464519289a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/samsa_orig.png",href:"https://www.govpage.co.za/south-african-maritime-safety-authority-samsa-vacancies-blog/south-african-maritime-safety-authority-samsa-vacancies2331150",title:"SOUTH AFRICAN MARITIME SAFETY AUTHORITY (SAMSA) VACANCIES",content:[` 
SOUTH AFRICAN MARITIME SAFETY AUTHORITY (SAMSA)
 `,`RE-ADVERT VACANCY: MANAGER: APPLICATIONS MANAGEMENT GRADE: D3
The position reports to the Chief Information Officer.
LOCATION: HEAD OFFICE, PRETORIA
 
JOB PURPOSE
Lead in the conceptualization, design, development, implementation, quality assurance including continuous maintenance, and support of SAMSA applications that are developed in diverse technology platforms to enable optimal and efficient SAMSA operations including leading and monitoring a team of internal developers and those from third parties.
 
KEY PERFORMANCE AREAS
Monitor adherence to best practice methodologies with a focus on more optimal ways of work, towards attainment of the Centre for ICT’s Annual Performance Plan (APP) and SAMSA strategic objectives.
Lead in the development, maintenance, and support of SAMSA applications in line with applicable best practice standards, methodologies, and framework.
Lead in the transformation and modernisation of the SAMSA applications portfolio in alignment with technology changes.
Lead in the procurement of required software to ensure an optimal SAMSA applications portfolio.
Develop detailed project plans, including objectives, milestones, timelines, and resource allocation, to guide the implementation of the applications delivery plans.
Propose cost effective approaches for management of SAMSA applications.
Evaluate, develop, and test best practices and research the cost versus benefits for the applications portfolio.
Design, develop, obtain resources and approval to implement business continuity and recovery programs for all applications within the SAMSA applications portfolio.
Lead in the design of applications in accordance with approved design principles including functional and technical specifications.
Contribute to the development of technical / functional specifications to be used.
Consult with the Business Analyst to inform the design of systems in accordance with approved user requirements specifications.
Obtain approval of functional and technical specifications by all interested parties through extensive consultations, testing and quality assurance.
Confirm that the configuration of SAMSA applications are in accordance with applicable best practice standards and SAMSA applications architecture, structures, and taxonomies.
Demonstrate a solid understanding of data architecture standards to ensure deployment of applications capabilities that meet the defined data architecture.
Standardise applications development technology platforms across the applications portfolio including defining of application integration APIs, and data exchange protocols.
Lead in ensuring that applications are developed with incorporated cybersecurity principles and best practices to ensure secure SAMSA applications.
Work with internal and external auditors or OEM to ensure that the applications which are implemented are thoroughly tested and quality assured.
Work with external stakeholders/service providers to ensure that SAMSA applications attain high levels of standardisation and integration.
Design, develop, and implement maintenance procedures and processes to ensure optimal operations of the SAMSA applications.
Coordinate applications training for all end users following change management procedures to implement system changes.
Implement prompt remedial solutions as part of vulnerability and patch management.
Manage prompt resolution of all application related incident calls in line with set resolution timeframe.
Contribute to the maintenance of an updated ICT Risk Register and ensure that risk control/mitigation measures are implemented.
Participate in the development and testing of the Disaster Recovery Plan by ensuring that all systems in the portfolio are recoverable in the event of a disaster.
Provide accurate reports on all annual / quarterly Disaster Recovery tests and implement any corrective steps related to DR testing.
Negotiate terms and manage contracts with appointed service providers.
Monitor SLAs and take corrective action when required.
Manage and monitor Operational Level Agreements between ICT and Business Units with focus on applications deliverables.
Prepare and manage applications budget including project related budgets to ensure optimal utilization of resources in a cost-effective manner.
Monitor expenditure.
Participate in developing and implementing ICT procurement plans.
Oversee ICT procurement processes related to applications.
Provide leadership and direction that is aligned with the SAMSA culture and values.
Establish an enabling work environment and culture for optimum staff performance
Manage the performance, productivity, development, and wellbeing of the applications team.
Facilitate synergy and co-ordination between the other delivery areas within the Centre for ICT.
 
MINIMUM REQUIREMENTS
Qualifications
NQF Level 7 in ICT. Qualification in the Applications Development or related specialisation.
A higher qualification in ICT Applications or Software Development stream will be an added advantage.
Required certification or Professional Registration:
Enterprise Architecture – Applications and Data Architecture
Business Analysis
Programming Languages (.Net, JAVA, XCP and C#)
SQL
ITIL
COBIT
OpenText Certification (Documentum, xCP, xPression, xPlore, etc)
Microsoft Certification
Adobe Certification (LiveCycle, AEM, etc)
 
Knowledge and Experience
7 - 10 years’ experience in Applications Development environment with advance understanding of diverse development platforms.
3-5 years’ management experience in any of the following:
Architecture development and implementation
Diverse development platforms such as:
OpenText Documentum, Captiva Input Accel, xPression, XCP, xPlore.
Document Content Server including BAM.
Adobe LiveCycle/AEM Forms and Content / Presenter.
Records Manager.
C#, Java, M-V-C, Development.
Mobile and AI-assisted development practices
Knowledge of Agile project delivery approaches
 
Competencies
High levels of competence on the skills below is a requirement:
SAMSA Strategy, ICT Strategy, and the ICT Business Plan
SAMSA policies and procedures
POPI Act
ITIL Framework
COBIT 2019
SQL
Diverse development platforms – Microsoft, OpenText, Java, etc.
System Development Life Cycle (SDLC)
Applicable programming languages.
Industry best practices in application management.
Service management processes.
Applicable Programming/Development language skills
ERP Environment.
Documentum Environment.
Adobe LiveCycle Environment.
Microsoft Environment.
Experience in designing and implementing reporting solutions.
Experience in SQL
Problem solving skills.
Communication skills.
Negotiation skills.
Presentation skills.
Project management skills.
Stakeholder and SLA management.`,`Should you meet the requirements as set out above, please e-mail your CV to Zanele Zwane at: recruitment@samsa.org.za

 
As we are committed to Employment Equity in our employment practices, it is our intention to appoint individuals with the aim of meeting our Equity objectives. Preference will be given to African Males, Indian Males, African Females, White Females, and persons living with disability to achieve the objectives of Employment Equity.
 
CLOSING DATE: 14 SEPTEMBER 2024
 
Please note: SAMSA reserves the right not to make an appointment to any advertised position. No late applications will be considered. Psychometric and other assessments may be used as part of the selection process and all shortlisted candidates will be required to be available for the tests. If you have not been contacted within 1 month of the closing date as mentioned above, kindly deem your application unsuccessful.`],postedDate:"3/9/2024",iframe:"",uuid:"p162b7936-cc5c-4bee-89c5-e5e47edf9f06"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sanral_orig.jpg",href:"https://www.govpage.co.za/south-african-national-roads-agency-sanral-vacancies-blog/south-african-national-roads-agency-sanral-vacancies8147741",title:"SOUTH AFRICAN NATIONAL ROADS AGENCY (SANRAL) VACANCIES",content:[` 
SOUTH AFRICAN NATIONAL ROADS AGENCY (SANRAL)
 `,`MANAGER: CONTRACTS & LEGAL ASSURANCE
National
Permanent     
 
Description
 
POSITION OBJECTIVE
The successful candidate will be responsible for managing and overseeing the entire lifecycle of contracts and agreements, including drafting, vetting, reviewing, and negotiation. You will play a critical role in providing expert legal advice and assurance to SANRAL's Bid Committees throughout the tender process, ensuring compliance and sound decision-making at all bid stages. Additionally, you will lead, mentor, and develop a team of Legal Advisors and Legal Officers, fostering their growth and ensuring the delivery of high-quality legal services.
 
MINIMUM REQUIREMENTS
Bachelor of Laws/ LLB at an NQF level 8.
Admitted Attorney or Advocate (with Pupillage from the Bar) of the High Court of SA, Member of the Law Society/ LPC.
A minimum of 10 years relevant experience.
A minimum of 5 years managerial experience.
Proven experience in drafting, reviewing, and negotiating a wide range of commercial contracts and various legal agreements.
 
ADVANTAGEOUS
LLM and/or specialisation by experience would be advantageous
Commercial and Contract Law
 
WORKPLACE COMPETENCIES
Governmental landscape and regulations: Knowledge and understanding of the government and public sector landscape and the regulatory and legislative operating environment.
Corporate legal knowledge: Knowledge and understanding of a wide scope of legislation which includes, but is not limited to the:
           -Preferential Procurement Policy Framework Act,
           -Public Finance Management Act,
           -South African National Roads Agency SOC Limited Act,
           -National Treasury’s Regulations,
           -Constitution of the Republic of South Africa and all other related legislations.
           -Companies Act
           -Environmental Legislation
Engineering legal knowledge: Knowledge and understanding of engineering-specific legislation with which SANRAL must comply, especially the FIDIC suite of contracts.
 
KEY RESPONSIBILITIES
 
Contracts and Legal Assurance Planning and Management
Develop a contracts management and legal assurance workflow and operational plan to execute, manage and deliver the timely drafting, vetting, review and amendment of all contracts, agreements and addenda and for the provision of expert legal assurance for the commercial decisions of the business supporting the overarching business strategy and objectives in its commercial activities.
Define turnaround times for delivery on business requests for contracts support and commercial legal assurance.
Develop a performance management criterion to monitor and assess the contracts and assurance functionality and the implementation of operational plans and workflows.
Monitor and report on the output of the unit and legal services provided to the business.
Oversee and assist with developing a contract and legal document management system.
 
Contract Drafting, Vetting, Review and Amendment
Drive the provision of contracts services in various areas of expertise, including labour and employment, construction and engineering, real estate, procurement documents, land acquisition, and disposal.
Advise the business on all contractual matters, provide contract negotiation support, and comply with all laws, regulations, industry frameworks, guidelines and standards applicable to various contracts.
Amend and update agreements in keeping with legal and regulatory developments within the relevant discipline.
Interpret clauses and provide advice to project teams during the implementation phases of the contract.
Ensure standard contracts are amended and drafted to be fit for purpose and comply with the legal landscape of the jurisdiction they will be executed and accord with legislative requirements.
Where necessary, guide and provide input on the co-drafting, reviewing, updating and negotiation of all types of contracts with SCM and oversee the facilitation of contract finalisation and storage.
Provide guidance and support on engineering and construction-specific claims including delays, price acceleration claims, and change of work claims.
Provide, and oversee the provision of advice on construction and engineering law, including infrastructure procurement and the drafting and administering of engineering contracts.
Drive and ensure the contribution of legal counsel in developing SANRAL’s policies, procedures, and controls.
Provide support to all SANRAL Commercial and Contracts Committees.
 
Legal Assurance
Provide business support to SCM during the tender processes, i.e. specification drafting, bid evaluation, adjudication, and pre-award stages.
Review the tender processes from bid specification, advertising, closing, validity periods, evaluation, and adjudication for legal compliance of all aspects of the tender
Provide assurance reports of the tender review to bid committees on the legality of the process, legal risks and procedural and legal deficiencies identified and advise/make recommendations to the business.
 
Managing and Reporting of the Contracts and Assurance Unit
Accountable to manage and report on operational functions and outputs.
Keep records and manage contracts and assurance service requests.
Manage the equitable allocation of work and assign responsibilities to Legal Advisors and Officers as required.
Monitor the execution and review assigned work and responsibilities and any delays in delivery and performance.
Ensure timely procurement and appointment of external service providers.
Provide weekly, monthly and quarterly reports to management on contractual and assurance matters.
Compile memoranda and submission for contract management and assurance to the relevant committees of SANRAL.
Manage and supervise the overall performance of the unit.
 
 
EMPLOYMENT REFERENCE CHECKS
Employment reference checks are a requirement as part of SANRAL’s recruitment and selection process. In order for SANRAL to conduct these checks a consent form needs to be completed and signed by the applicant. As an applicant of this position, you authorize SANRAL to process all the information provided for the purpose of your application for the position as well as the verification and record keeping of such credentials.
 
Please note that this is a confidential document and is intended for internal use by SANRAL’s Human resources department only. 
 
EMPLOYMENT EQUITY
Appointments will be made in accordance with SANRAL’s Employment Equity plan.
SANRAL reserves the right not to fill any position
 
Closing date for applications:   05 September 2024
 
Link to apply: https://career2.successfactors.eu/sfcareer/jobreqcareer?jobId=2503&company=southafr02
 
Employment Permanent
Location 48 Tambotie Avenue, Val-De-Grace, Pretoria, South Africa
Closing Date 05/09/2024`,`MANAGER: LITIGATION
National
Permanent
 
Description
 
POSITION OBJECTIVE
The successful applicant will be responsible for leading and executing the Litigation and Alternative Dispute Resolution strategy within Legal Services. This includes managing and overseeing the performance of SANRAL's Litigation Unit and Litigation and Disputes Portfolio. The role involves overseeing and monitoring all litigation and disputes, managing the litigation budget, and implementing strategies to reduce litigation costs throughout the process. The candidate will provide leadership and guidance to Legal/Litigation Advisors and Legal Officers, ensuring their effective performance. Additionally, the role requires managing performance records, and preparing and presenting regular reports on operational litigation to the organisation.
 
MINIMUM REQUIREMENTS
A Bachelor of Laws / LLB qualification at an NQF level 8.
Admitted attorney or Advocate (with Pupillage from the Bar) of the High Court of SA, Member of the Law Society/ LPC
A minimum of 10 years of relevant experience.
A minimum of five years of managerial experience.
Demonstrable record of litigation and litigation oversight and directing
 
ADVANTAGEOUS
LLM and/or specialization by experience would be advantageous
 
WORKPLACE COMPETENCIES
Leadership skills: Ability to lead by example, employ strong business acumen, solid judgment, and integrity.
Critical thinking: Ability to objectively analyse and evaluate issues and factual evidence in order to form judgements.
Contract vetting and management: Advanced skills and experience in drafting and vetting contracts, including service level agreements.
Legal research: Ability to identify and retrieve relevant legal information/precedent to aid in the legal decision-making and/or execution process.
Communication skills: Good interpersonal skills, people skills, organising and communication skills.
Litigation skills: Ability to manage and thoroughly execute all phases within the legal litigation process from investigation all the way through to settlement and appeal.
Attention to detail: Ability to pay close attention to details and complete tasks with a high level of thoroughness, accuracy and completeness.
Organisation: Ability of to make efficient and effective use of time, energy and resources available by organising workloads and scheduling and prioritising tasks.
 
KEY RESPONSIBILITIES:
 
Litigation Strategy Development and Execution
Develop and implement the litigation strategy to provide an effective and efficient litigation service in managing SANRAL’s litigation demands.
Develop and maintain the litigation management and monitoring processes/ procedures to execute and measure the litigation unit’s performance of its responsibilities and functions.
Establish the measurement criteria to monitor the operational objectives and manage the performance of the litigation unit and the quality of the support it provides to the business in litigated and non-litigated disputes and matters.
Monitor and report on litigation matters and performance deliverables in line with predefined measurement criteria and agreed performance objectives and implement the necessary mechanism to improve delivery and performance.
Identify litigation risks and implement the appropriate measures to mitigate and prevent the risk.
Manage the litigation budget and expenditure on legal fees.
 
Litigation Management
Guide the resolution of SANRAL issues and/or disputes through negotiation, mediation, arbitration, and litigation methods, as required.
Oversee the resolution of litigation instances including pre-suit negotiations, arbitrations, facilitations, and appeals as they may arise.
Advise on and guide the resolution of engineering and construction-specific claims/disputes including delays, price acceleration claims and change of work claims.
Oversee the resolution of FIDIC-Contract-related issues and/or disputes through adjudication, litigation, arbitration, mediation or negotiation, as required.
Provide advice and defend SANRAL on infrastructure procurement matters emanating from tenders issued by SANRAL and provide advice and defend all other procurement matters and litigation.
Manage, assess and advise on the merits of litigated matters to determine if a settlement can be reached or the matter should proceed to court.
Appoint, instruct and consult with external legal service providers within the correct internal procedure and PFMA requirements.
Manage service providers' performance and delivery of instruction.
Manage the litigation cycle from end-to-end and provide the appropriate instructions to avoid litigated matters becoming dormant.
Comply with court timelines and limit reliance on condonation, extensions, tendering of costs.
Consult internal clients/business to obtain instructions, facts on the matter and report to the business on developments in their matters monthly and as and when required.
 
Recovery of Costs
Manage and monitor the execution of judgments, orders, and awards in favour of SANRAL at the conclusion of a dispute/litigated matter.
Manage the recovery of costs awarded to SANRAL.
Ensure legal bills are subjected to taxation/and or agreed fees and executed, engaging the services of a taxation consultant where necessary.
Record costs recovered and to be recovered and provide monthly and quarterly reports on the status.
 
Management & Reporting
Manage and report on operational litigation.
Keep records and manage incoming litigation and pre-litigation disputes
Manage the equitable allocation of work and assign responsibilities to Legal Advisors and Legal Officers as required
Monitor the execution and review assigned work and responsibilities and any delays in delivery and performance.
Ensure timely procurement and appointment of external service providers to defend or institute legal action for SANRAL.
Provide weekly, monthly, and quarterly reports to Management on litigation and active matters.
Compile memoranda and submission for Litigation to the relevant committees of SANRAL.
 
 
EMPLOYMENT REFERENCE CHECKS
Employment reference checks are a requirement as part of SANRAL’s recruitment and selection process. In order for SANRAL to conduct these checks a consent form needs to be completed and signed by the applicant. As an applicant of this position, you authorize SANRAL to process all the information provided for the purpose of your application for the position as well as the verification and record keeping of such credentials.

Please note that this is a confidential document and is intended for internal use by SANRAL’s Human resources department only.
 
EMPLOYMENT EQUITY
Appointments will be made in accordance with SANRAL’s Employment Equity plan.
 
Closing date for applications: 05 September 2024
 
Link to apply: https://career2.successfactors.eu/sfcareer/jobreqcareer?jobId=2502&company=southafr02
 
Employment
Permanent
Location South African National Roads Agency SOC Ltd Head Office, Kuisis Street, Val-De-Grace, Pretoria, South Africa
Closing Date 05/09/2024`],postedDate:"3/9/2024",iframe:"",uuid:"p6b01576f-ca2b-42ba-b582-06a2d73728db"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sanparks-logo_orig.png",href:"https://www.govpage.co.za/south-african-national-parks-sanparks-vacancies-blog/south-african-national-parks-sanparks-vacancies9483296",title:"SOUTH AFRICAN NATIONAL PARKS (SANPARKS) VACANCIES",content:[` 
SOUTH AFRICAN NATIONAL PARKS (SANPARKS)
 `,` 
 
OCCUPATIONAL HEALTH AND SAFETY OFFICER
The organisation requires the services of an Occupational Health and Safety Officer in the Human Capital Management Department. This position will be based at Groenkloof National Park, Pretoria.
Location Groenkloof National Park (Head Office)
 
Requirements
Be in possession of a Diploma in OHS. Degree: Health and Safety Management will be advantageous.
Should have 1 to 3 years’ experience in OHS.
Should have communication skill.
Problem solving skill.
Information-sharing skill.
People Management skill.
Negotiation skill.
Should be Computer Literacy.
Financial Management skill.
Conflict Management skill.
Presentation and Facilitation skill.
Report writing skill.
 
Responsibilities
Develop and implement incident reporting systems and procedures.
Draw up implementation monitoring and control systems.
Coordinate periodic audits, workplace inspections, and surveillance schedules in line with the Corporate OHS policy.
Compile periodic statistical information and reports.
Evaluate all programmes and procedures periodically.
Conduct incident statistical analysis.
Provide advice to the line on a consultative basis.
Coordinate Malaria Control spraying by government officials at affected parks or areas within SANParks.
Liaise with internal and external professional bodies and stakeholders.
 
 
Salary R354 947.02– R579 755. 23
 
How To Apply
Interested candidates who meet the above requirements should forward their applications accompanied by the required documentation listed below to the following:
Smiley Riba
Email: smiley.riba@sanparks.org
Postal Address: PO Box 787 PRETORIA 0001 Fax: 086 295 4078
 
Documents Required
Interested persons who meet the above-stated qualifications should forward their applications which should consist of a cover letter, detailed Curriculum vitae, certified copies of qualification(s), and Identity Document (certified within the past 3 months) to the following address
 
Closing Date 26 September 2024
 
 
 
 
 `,`MANAGER: FRAUD MANAGEMENT
SANParks requires the services of a Manager: Fraud Management in the Enterprise Risk Management department. This position will be based at Groenkloof National Park, Pretoria
Location Groenkloof National Park (Head Office)
 
Requirements
Have a National Diploma or Degree in Forensic Investigation / Law / Forensic Auditing or equivalent qualification (NQF level 7).
Have 4-6 years’ work experience in a Forensic Investigation Environment.
CFE or FP membership will be advantageous.
Knowledge of professional standards of the Associations of Certified Fraud Examiners or Institute of Commercial Forensic Practitioners
Knowledge of Criminal Law, Criminal Procedures, and The Law of Evidence.
Knowledge of the Prevention and Combating of Corrupt Activities Act.
An understanding of the Protected Disclosures Act.
Knowledge of the Promotion of Access to Information Act.
An understanding of fraud risk management practices.
Knowledge of SANParks policies and procedures.
An understanding of the Public Finance Management Act and Treasury Regulations.
Knowledge of Government priorities, policies, and legislation.
An understanding of project management.
An understanding of personnel management.
Planning and organizing.
Communications skills.
Conflict management.
Presentation skills.
Computer skills.
Listening skills.
High level of accuracy and attention to detail.
Analytical decision-making.
Forensic Investigation Skills.
 
Responsibilities
Implement the Fraud Prevention Plan, inclusive of the Policy and Strategy.
Contribute to the ethics maturity improvement and annual implementation plan.
Implement the Whistleblowing SOP.
Implement the Forensic Investigation SOP.
Review and development of applicable governance documents.
Coordinate and conduct fraud risk assessments and update the fraud risk profile.
Identify fraud risk response strategies.
Monitor fraud risk response strategies.
Conduct forensic investigations within prescribed timeframes.
Monitor and report on the implementation of recommendations resulting from investigations.
Manage the panel of forensic investigation service providers.
 
 
Please Note
Interested persons who meet the above-stated qualifications should forward their applications which should consist of a cover letter, detailed Curriculum Vitae, certified copies of qualification(s), and Identity Document (certified within the past 3 months) to the below email.
Email : nomawethu.dudumashe@sanparks.org
 
Salary
R641 921.99 – R1 052 446.50
 
How To Apply
 
Closing Date 17 September 2024`,`WEB SYSTEMS ANALYST
The Organisation requires the services of a Web Systems Analyst in the Chief Operating Officer’s division. This position will be based at Groenkloof National Park, Pretoria.
Location Groenkloof National Park (Head Office)
 
Requirements
BSc Computer Science, or related qualification
7-9 years Web Programming experience,5 years of which were in PHP programming
Linux Apache MySQL, PHP.
Knowledge of the Consumer Protection Act, Electronic, Communications and Transaction Act.
Knowledge of the Conservation and Tourism related legislation will be an added advantage.
Web application development skills.
Object orientated programming.
Project management and leadership skills
Database design and administration
Communication skills (written & verbal)
Attention to detail
Analytical skills.
 
Responsibilities
Lead and manage the design, development, testing implementation, and maintenance of all E-Business systems within an open-source environment (PHP, MySQL, JavaScript, HTML, etc.) according to relevant legislation and standards.
Conduct feasibility study, work prioritization, and capacity planning for web projects and observe the software development life-cycle (SDLC) from start to finish.
Draw, implement and consistently enforce complete and thorough documentation within the E-Business environment.
Coordinate all processes with internal and external stakeholders (tourism departments, hosting company, payment gateway, corporate bank, and corporate IT service provider) to define, document, and deliver integrated E-Commerce applications, components, and strategies.
Upgrade existing infrastructure and align all applications with new technology.
Be responsible for online security and risk management.
Enhance the user experience (UX) of all E-Commerce systems.
Serve as a contingency for Senior Web Developer in all hands–on programming.
Enhance the site for search engine optimisation and assist with marketing the website online.
 
 
Please Note
Interested persons who meet the above-stated qualifications should forward their applications which should consist of a cover letter, detailed Curriculum Vitae, certified copies of qualification(s), and Identity Document (certified within the past 3months)
 
Human Resources Division
SA National Parks
PO Box 787
PRETORIA
0001
Fax: 086 295 4078
E-mail: smiley.riba@sanparks.org
Salary R557 046.70 – 913 281.72
 
How To Apply
Interested candidates who meet the above requirements should forward their applications accompanied by the required documentation listed below to the following:
Smiley Riba
HCM
Email: smiley.riba@sanparks.org
Postal Address: PO Box 787 PRETORIA 0001
 
Closing Date 11 September 2024`],postedDate:"3/9/2024",iframe:"",uuid:"p96658783-05dd-471a-91d1-90937c3aebbd"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sita_orig.jpg",href:"https://www.govpage.co.za/state-information-technology-agency-sita-vacancies-blog/state-information-technology-agency-sita-vacancies4120711",title:"STATE INFORMATION TECHNOLOGY AGENCY (SITA) VACANCIES",content:[` 
STATE INFORMATION TECHNOLOGY AGENCY (SITA)
 `,` 
 
VACANCY - 1861 
REFERENCE NR : VAC00852 
JOB TITLE : Senior Project Manager 
JOB LEVEL : D3 
SALARY : R 760 490 – R 1 140 736 
REPORT TO : Programme Manager 
DIVISION : National and Regional Consulting 
DEPARTMENT : Cluster Business Management 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : 24 - Months – Fixed Term Contract (Internal & External) 
 
Purpose of the job 
To manage complex SITA internal/external project(s) following the SITA project management methodology, within a defined service/product/customer portfolio under the supervision of a Programme Manager/Line Manager. To ensure effective management of the core business support environments. 
Key Responsibility Area
• INITIATION PROJECT - Effectively applies project management principles to Initiate and Plan the project. 
• MANAGE PRODUCT DELIVERY - Manage product delivery to ensure successful delivery of the project. 
• PROJECT CONTROL - Monitor and Control project activities to ensure successful delivery of the project objectives within budget, scope, time and quality according to plan. 
• PROJECT CONTROL-FINANCE - Consolidate, Monitor and control Project costs and revenue to ensure delivery of the Project within budget and profitability guidelines. 
• PROJECT CONTROL-RISK - Monitor and Control project risks and issues. 
 
Qualifications and Experience 
Minimum: 3- Year National Diploma / Degree in a relevant discipline - at least NQF level 6 
Certification: Project Management Professional (PMP) and/or Prince 2 Practitioner Certification and/or Agile PM Practitioner. 
Experience: A minimum of 7-8 years working experience, including: • At least 4 years Project management experience managing complex projects, • At least 4 years working experience in an IT environment and • At least 4 years in public sector IT environment. 
 
Technical Competencies Description 
Knowledge of: Public sector / Government organization; Information Technology management; ICT Services; System Engineering methods and Governance; Project Management Office (PMO) Management; Project management methodologies (PMBOK, Agile PM and Prince 2); PPM Governance. Computer Literacy: SITA Business Planning system (BPS), Oracle ERP; Project Schedule Management (PSM); Oracle Time & Labour (OTL); MS Office; MS Projects. 
Other Special Requirements N/A
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882 
CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 12 September 2024 
 
Disclaimer 
SITA is an Employment Equity employer and this position will be filled based on the Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. Preference will be given to members of designated groups. 
● If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
● Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
● It is the applicant's responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
● Only candidates who meet the requirements should apply. 
● SITA reserves the right not to make an appointment. 
● The appointment is subject to getting a positive security clearance, the signing of a balance scorecard contract, verification of the applicants’ documents (Qualifications), and reference checking. 
● Correspondence will be entered to with shortlisted candidates only. 
● CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 
 `,` 
 
 
 
VACANCY - 1862 
REFERENCE NR : VAC00009 
JOB TITLE : Programme Manager 
JOB LEVEL : D5 
SALARY : R 986 492 – R 1 479 739 
REPORT TO : HOD: Cluster Business Management 
DIVISION : National & Regional Consulting 
DEPARTMENT : Cluster Business Management 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
To manage one or more defined SITA Internal / External programmes according to the SITA Project Management methodology within a defined service/product/customer portfolio. To manage the project management office, business support office.
 
Key Responsibility Areas 
• Effectively applies programme management principles to Initiate and plan the programme. 
• Direct and manage programme execution to ensure successful delivery of the programme and subsidiary projects. 
• Plan and optimize the effective utilization of resources throughout the programme. 
• Consolidate monitor and control programme and subsidiary project’s work to ensure successful delivery of the programme's objectives within budget, scope, time and quality according to plan. Including integrated change control and configuration management. 
• Consolidate, monitor and control costs and revenue to ensure the delivery of the programme and subsidiary projects within budget and profitability guidelines. 
• Perform quality control of programme. 
• To manage the provinces risk management, document & records management, ISO, internal audit reporting and ERP functions 
 
Qualifications and Experience 
 
Minimum: 3-year National Diploma / Degree in a relevant discipline - at least NQF level 6 
Certification: Project Management Professional (PMP) and/or Prince 2 Practitioner and/or Programme Management Professional (PgMP) and/or Advanced Practitioner (MSP – Managing Successful Programmes) will be advantageous. 
Experience: A minimum of 8 - 10 years working experience, including expertise in: 
• 4 years in a leadership role in a complex project management or programme management environment 
• 4 years Project/Programme management experience as Project /Programme Manager 
• 4 years in a public/private sector IT environment. 
• 4 years in risk management, internal audit reporting, document configuration management, management of ERP transactions. 
 
Technical Competencies Description 
Knowledge of: Public/private sector; Information Technology management; ICT Services; Project Management Office (PMO) Management; PPM methodologies (PMBOK, Agile PM and Prince 2); PPM Governance. Computer Literacy: MS Office; MS Projects. Personal Attributes/Behaviours: Agility/Collaboration/Customer Centricity/Innovation/Empathy/Integrity. 
Other Special Requirements N/A
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR 080 1414 882 
CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 12 September 2024 
 
Disclaimer 
SITA is an Employment Equity employer and this position will be filled based on Employment Equity Plan. 
Correspondence will be limited to short listed candidates only. Preference will be given to members of designated 
• If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
• Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
• It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
• Only candidates who meet the requirements should apply. 
• SITA reserves a right not to make an appointment. 
• Appointment is subject to getting a positive security clearance, the signing of a balance score card contract, verification of the applicants’ documents (Qualifications), and reference checking. 
• Correspondence will be entered to with shortlisted candidates only. 
• CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 
 `,` 
 
 
 
 
VACANCY - 1846 
REFERENCE NR : VAC00254 
JOB TITLE : Specialist: Production Planner 
JOB LEVEL : C4 
SALARY : R 409 935– R 614 903 
REPORT TO : Senior Engineer: Digital Printing 
DIVISION : IT Infrastructure Services 
DEPT : ITI Hosting: EDD 
LOCATION : SITA Centurion 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
To manage and facilitate the automation of production processes for application systems to ensure client satisfaction during implementation. 
 
Key Responsibility Areas 
Write and amend software procedures to automate the processing of application systems using the Automation suite of software. Quality assure the automated production before implementation. Management of automated departmental projects. Manage change control on production systems. Liaise with clients, management, technical staff and service providers to ensure that requirements are met. 
 
Qualifications and Experience 
Minimum: 3-year Diploma / Degree in IT / NQF level 6. Certifications: Relevant Technical Courses. 
Experience: 3 - 4 years’ experience as Shift Leader. 3 years’ experience as a Printing/EDD Operator. 
 
Technical Competencies Description 
Knowledge of: Application systems. Job Scheduling software. Automation Software. Printing/EDD Operating systems. Database Management Systems. Document Composition application knowledge. 
Skills: Communication and Interpersonal Skills; Problem solving and decision-making skills; Self-management; Client Orientation and customer service; Intellectual. 
Other Special Requirements N/A
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process 
1. Register using your ID and personal information 
2. Use received one-time pin to complete the registration 
3. Log in using your username and password 
4. Click on “Employment & Labour 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882 
CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 09 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on Employment Equity Plan. Correspondence will be limited to short listed candidates only. Preference will be given to members of designated groups. 
If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
Only candidates who meet the requirements should apply. 
SITA reserves a right not to make an appointment. 
Appointment is subject to getting a positive security clearance, the signing of a balance score card contract, verification of the applicants documents (Qualifications), and reference checking. 
Correspondence will be entered to with shortlisted candidates only. 
CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 
 `,` 
 
 
 
 
 VACANCY - 1855 
REFERENCE NR : VAC00891 & 0894 & 0262 & VAC00317 
JOB TITLE : Specialist EUC Information System Security Operations X4 
JOB LEVEL : C5 
SALARY : R 478 420 - R 717 630 
REPORT TO : Consultant: EUC Security 
DIVISION : Service Management 
DEPARTMENT : SM: EUC National 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
The job will be responsible to perform compliance and vulnerability assessments, execute activities related to the implementation, and maintenance of information security controls and services aligned to the cyber security framework and attend to all logged security incidents. 
 
Key Responsibility Area 
Perform ongoing monitoring of information systems and assess threats and risks to information security. 
Coordinate security awareness and training programs to increase employees ' overall understanding, reaction time and the ability to envisage the company's potential safety and compliance requirements. 
Perform compliance assessments and vulnerability assessments to ensure government and citizen information is secure. 
Attend to all logged security incidents. 
Collaborate and partner with internal business representatives to recommend appropriate products so that the solutions are developed with relevant security system design specifications. 
Execute activities related to the implementation, and maintenance of information security controls and services aligned to the cyber security framework, policies, standards and procedures. 
 
Qualifications and Experience 
Minimum: 3 years National Diploma / National Degree in Computer Science or Information Technology or Network Management or a relevant discipline NQF level 6 qualification. Certified information system security professional (CISSP) or Certified Information Security Management (CISM). 
Added Advantage: ITIL foundation and COBIT 5 Introduction. 
Experience: 3 to 5 years’ Information and Communication Technology (ICT) Infrastructure or Information Security (IS) or application life cycle management which should include the following: Working knowledge of information technology security configurations on the LAN/WAN infrastructure. Understanding of firewalls and switch management technology. Exposure to enterprise architecture frameworks (e.g. TOGAF; GWEA; MIOS). knowledge of governance processes and standards (e.g. ISO 27001/ 27002; COBIT; ITIL). Exposure to information system security technical standards (e.g.: SSL certificates, anti-virus protection, , firewalls, SCCM, Intune etc.) Experienced in (e.g. Service Management, Converge Communication, Risk Management, Information Technology, Applications, etc). 
 
Technical Competencies Description 
Knowledge of: Information security management frameworks, such as ISO/IEC 27001, and NIST.and security services (firewalls, proxy’s, DNS, Mail relays etc.) Risk finance and risk control concepts. Enterprise risk management concepts, frameworks Deep understanding of operational integration of security functions. Strong knowledge of security, and network architecture. Deep knowledge of security best practices, principles, and common security frameworks. Excellent written and verbal communication skills and high level of personal integrity Knowledge of the latest IT thinking and threat modelling methods together with a creative drive. Analytical mind capable of managing numerous information sources and providing data analysis reports to senior management. Strong customer focus – able to meet the demands of internal and external customers. Excellent communication skills – providing verbal and written communication. Excellent Project management skills. Strong networking, consultation and negotiation skills Excellent Planning & organising Financial management Governance processes and standards (ISO 27001/ 27002, COBIT, ITIL). Proficiency in ICT technology securing and safeguarding (operating databases, applications, IS solutions). Knowledge of Cloud, Public Cloud security best practices and monitoring of systems and services hosted in the cloud (IaaS, SaaS etc.). Network security On-call network troubleshooting Firewall administration Network protocols Routers, hubs, and switches System administration skills. Security risk, threats and vulnerability management. Knowledge of Cloud, Public Cloud security best practices and monitoring of systems and services hosted in the cloud (IaaS, SaaS etc.). Working knowledge of Service Oriented Architecture (SOA); CISSP domains support (BCM/DRM, Legal, human resource, cryptography, access control, operations, architecture, etc.) Working knowledge of Enterprise architecture framework (TOGAF; Zachman; FEAF; MODAF; GWEA Framework; MIOS). Infrastructure (DELL/ HP/ IBM) and network security configuration. Operating systems administration (UNIX, WINDOWS, Linux) or security configuration. Database and application security configuration (Oracle, ERP, Web sites). 
Other Special Requirements N/A
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882 

CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 09 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on the Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. Preference will be given to members of designated groups. 
If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
It is the applicant's responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
Only candidates who meet the requirements should apply. 
SITA reserves the right not to make an appointment. 
The appointment is subject to getting a positive security clearance, the signing of a balance scorecard contract, verification of the applicants’ documents (Qualifications), and reference checking. 
Correspondence will be entered to with shortlisted candidates only. 
CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 
 `,` 
 
 
 
 
VACANCY - 1856 
REFERENCE NR : VAC00318/25 
JOB TITLE : Senior Specialist: EUC Information System Security Operations 
JOB LEVEL : D2 
SALARY : R 651 627 - R 977 440 
REPORT TO : Consultant: EUC Information System Security Operations 
DIVISION : Service Management 
DEPT : SM: EUC National Support 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
The job will be responsible to perform compliance and vulnerability assessments, execute activities related to the implementation, and maintenance of information security controls and services aligned to the cyber security framework and attend to all logged security incidents. 
 
Key Responsibility Areas 
Experience in Firewalls. 
Perform ongoing monitoring of information systems and assess threats and risks to information security; 
Coordinate security awareness and training programs to increase employees ' overall understanding, reaction time and the ability to envisage the company's potential safety and compliance requirements 
Perform compliance assessments and vulnerability assessments to ensure government and citizen information is secure 
Attend to all logged security incidents 
Collaborate and partner with internal business representatives to recommend appropriate products so that the solutions are developed with relevant security system design specifications 
Execute activities related to the implementation, and maintenance of information security controls and services aligned to the cyber security framework, policies, standards and procedures 
Management and Administration. 
 
Qualifications and Experience 
Required Qualification: 3-year National Diploma / Degree in Computer Science or Information Technology or a relevant discipline verified / certified @ NQF level 6 qualification. Certified information system security professional (CISSP) or Certified Information Security Management (CISM) or Microsoft Azure Security Technologies
Added advantage: Certifications: ITIL foundation and COBIT 5 Introduction. 
Experience: 6-7 years Information and Communication Technology (ICT) Infrastructure or Information Security (IS) or application life cycle management which should include the following: Working knowledge of information technology security risk management; Exposure to enterprise architecture frameworks (e.g. TOGAF; GWEA; MIOS); knowledge of governance processes and standards (e.g. ISO 27001/27002; COBIT; ITIL); Exposure to information system security technical standards (e.g.: SSL certificates, anti-virus protection, firewalls, SCCM, Intune etc); Experienced in (e.g. Service Management, Converge Communication, Risk Management, Information Technology, Applications, etc.). 
 
Technical Competencies Description 
Knowledge of: Information security management frameworks, such as ISO/IEC 27001, and NIST. and security services (firewalls, proxy’s, DNS, Mail relays etc.) Risk finance and risk control concepts. Enterprise risk management concepts and frameworks. Deep understanding of operational integration of security functions. Strong knowledge of security, and network architecture. Deep knowledge of security best, practices, principles, and common security frameworks. Excellent written and verbal communication skills and high level of personal integrity. Knowledge of the latest IT thinking and threat modelling methods together with a creative drive. Analytical mind capable of managing numerous information sources and providing data analysis reports to senior management. Strong customer focus – able to meet the demands of internal and external customers. Excellent communication skills –providing verbal and written communication. Excellent Project management skills. Strong networking, consultation and negotiation skills. Excellent Planning & organising. Financial management. Governance processes and standards (ISO 27001/ 27002, COBIT, ITIL). Proficiency in ICT technology securing and safeguarding (operating databases, applications, IS solutions). Knowledge of Cloud, Public Cloud security best practices and monitoring of systems and services hosted in the cloud (IaaS, SaaS etc.). Network security. On-call network troubleshooting. Firewall administration. Network protocols. Routers, hubs, and switches. System administration skills. Security risk, threats and vulnerability management. Knowledge of Cloud, Public Cloud security best practices and monitoring of systems and services hosted in the cloud (IaaS, SaaS etc.). Working knowledge of Service Oriented architecture (SOA); CISSP domains support (BCM/DRM, Legal, human resource, cryptography, access control, operations, architecture, etc.). Working knowledge of Enterprise architecture framework (TOGAF; Zachman; FEAF; MODAF; GWEA Framework; MIOS). Infrastructure (DELL/ HP/ IBM) and network security configuration. Operating systems administration (UNIX, WINDOWS, Linux) or security configuration. Database and application security configuration (Oracle, ERP, Websites). PFMA. 
Technical competencies: IT Service management. 
Interpersonal/behavioural competencies: Active listening, Attention to Detail, and Continuous Learning. 
Other Special Requirements N/A
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support egovsupport@sita.co.za OR call 080 1414 882 
CV\`s sent to the above email addresses will not be considered. 
 
Closing Date: 09 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. EE Preference will be given to White/Coloured and Indian. 
If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
Only candidates who meet the requirements should apply. 
SITA reserves a right not to make an appointment. 
Appointment is subject to getting a positive security clearance, the signing of a balance score card contract, verification of the applicant’s documents (Qualifications), and reference checking. 
Correspondence will be entered to with shortlisted candidates only. 
CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 
 `,` 
 
 
 
 
 
VACANCY - 1860 
Re - Advertisement 
REFERENCE NR : VAC01363 
JOB TITLE : Specialist: EUC Infrastructure Implementation 
JOB LEVEL : C5 
SALARY : R 478 420 - R 717 630 
REPORT TO : Consultant: EUC Infrastructure Implementation 
DIVISION : Service Management 
DEPARTMENT : EUC SM: DOD 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : Permanent (Internal & External) 
Purpose of the job 
To implement, evaluate, test and integrate hardware, software solutions and commissioning of distributed LANWAN products services. 
 
Key Responsibility Area 
• Implement tested solutions. 
• Provide Advanced Technical support 
• Quality Assurance. 
• Provide hardware and software technical advice on technology and related IT infrastructure 
 
Qualifications and Experience 
Minimum: 3-year Diploma/Degree in Computer Science NQF 6, IT or related fields. 
Certification: MCSA or MCSE 
Experience: 3 to 5 years’ experience Years ICT working experience in the respective field including the following: ICT Infrastructure implementation and support LAN Security skills. ITIL. Project Coordination and Management Experience in the provision of ICT solutions and services. 
 
Technical Competencies Description 
Knowledge of: Directory services, Architecture and Policy management. DNS, E-Mail, software deployment, Patch management, Core Stack builds. VPN technologies and concepts. Disaster Recovery. Virtualisation technologies and concepts. Computer and network security principles. Operating System Stack builds (OS Imaging). Service Level Management. Proficiency in managing, commissioning and maintenance of Core Server. Infrastructure and Services (Patch management, Antivirus, DNS, DHCP, Agents etc.) and Unified Communications. 
Other Special Requirements N/A
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882 
CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 09 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on the Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. Preference will be given to members of designated groups. 
● If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
● Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
● It is the applicant's responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
● Only candidates who meet the requirements should apply. 
● SITA reserves the right not to make an appointment. 
● The appointment is subject to getting a positive security clearance, the signing of a balance scorecard contract, verification of the applicants’ documents (Qualifications), and reference checking. 
● Correspondence will be entered to with shortlisted candidates only. 
● CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 `,`VACANCY - 1859 
REFERENCE NR : VAC00806 
JOB TITLE : Specialist: ETDP 
JOB LEVEL : C5 
SALARY : R 478 420 – R 717 630 
REPORT TO : Consultant: ETDP 
DIVISION : ADM Exec Apps Development & Maintain Department : Application Training 
LOCATION : SITA Centurion 
POSITION STATUS : Permanent (Internal & External)
 
Purpose of the job 
To deliver a total training service according to the training development cycle and best practices, including e-learning solutions. 
 
Key Responsibility Areas 
• Design, develop and maintain training material, including e-learning. 
• Present training by using a variety of methodologies. 
• Knowledge transfer. 
• Comply with SITA corporate and departmental policies and business processes. 
• System testing. 
• Identify and report service risks. 
• Project involvement. 
 
Qualifications and Experience 
Required Qualification: 3-year National Diploma / Degree in Education, Training and Development Practices (ETDP) OR BA / BSc / BCom / BIT / BCompSc / BTech (NQF Level 6) plus an ETDP related Certificate. 
Experience: 3 - 5 years' experience in a training environment, of which at least 2 years is in an application/IT- related training environment. 
Technical Competencies Description 
Knowledge of: IT/IS application training environment and training cycle; E-learning design and development; Client’s business culture, processes, policies and procedures; Various training methodologies and technologies; Current training legislation; Training quality standards; Assessment methodologies and tools. 
Interpersonal/behavioural competencies: Attention to Detail; Analytical thinking; Continuous Learning; Disciplined Resilience and Stress Management. 
Other Special Requirements N/A
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882 
CV\`s sent to the above email addresses will not be considered. 
 
Closing Date: 06 September 2024 
 
Disclaimer 
SITA is an Employment Equity employer and this position will be filled based on Employment Equity Plan. Correspondence will be limited to short listed candidates only. Preference will be given to members of designated groups.
• If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
• Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
• It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
• Only candidates who meet the requirements should apply. 
• SITA reserves a right not to make an appointment. 
• Appointment is subject to getting a positive security clearance, the signing of a balance score card contract, verification of the applicant’s documents (Qualifications), and reference checking. 
• Correspondence will be entered to with shortlisted candidates only. 
• CV\`s from Recruitment Agencies will not be considered.`,`VACANCY - 1858 
REFERENCE NR : VAC00764 
JOB TITLE : Senior Software Developer 
JOB LEVEL : D2 
SALARY : R 651 627 - R 977 440 
REPORT TO : Advance Software Developer 
DIVISION : Application Maintenance 
DEPARTMENT : AM: SAPS Unique 
LOCATION : SITA Centurion 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
To lead the design, implementation, debugging, documentation, release and maintenance of software-based solutions, write code and enhance software/systems in accordance with ICT standards and the enterprise architecture for Government. 
 
Key Responsibility Area 
• Lead the design and development of new features for the software systems, and improvement of the existing ones. 
• Implementation, debugging, documentation and release of the software solutions.
• Provide maintenance and enhancement support of the existing systems. 
• Perform software systems coding assignments. 
• Supervision of the Software development team. 
 
Qualifications and Experience 
Minimum: 3-year National Diploma/ Bachelor's degree in ICT (Computer Science, Information Systems, Technology and Engineering) or related field. 
Experience: 6 - 7 years’ experience with full software development lifecycle (SLDC), including solution development, operational responsibility in a large corporate/public sector organisation. Understanding of user requirement process Knowledge of Microsoft C#, Microsoft SQL Server, (off the shelf Codis software will be an added advantage) software development process and its technologies computer science including algorithms, data structures, operating systems and databases. Knowledge to design and develop test plans and software simulator to facilitate different levels of testing. Knowledge to report the results of different levels of testing report, the discrepancies between the software and its related documents. Extensive experience with working on multiple tasks and report status. Experience in interacting with customers. 
 
Technical Competencies Description 
Understanding of user requirement process Knowledge of Microsoft C# and Codis software development process and its technologies computer science including algorithms, data structures, operating systems and databases. Knowledge to design and develop test plans and software simulator to facilitate different levels of testing. Knowledge to report the results of different levels of testing report, the discrepancies between the software and its related documents. Development methodologies (e.g. RUP, OpenUp, Agile), SDLC COTS (Commercial of the Shelf) Products Security (Software and Technologies). Comprehensive knowledge of software testing techniques and tools Comprehensive knowledge and experience with one or more of the major programming languages BCobol and Cobol. Comprehensive knowledge and experience with one or more of the major database systems Oracle. Comprehensive Team-working experience. 
Technical Competencies: Application Development, Application Maintenance and Support, Database Administration. 
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process; 
1. Register using your ID and personal information; 
2. Use received one-time pin to complete the registration; 
3. Log in using your username and password; 
4. Click on “Employment & Labour; 
5. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs; 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
1. Click on “Employment & Labour; 
2. Click on “Recruitment Citizen” 
3. Login using your username and password 
4. Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882 
CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 06 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on the Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. Preference will be given to members of designated groups. 
● If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
● Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
● It is the applicant's responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
● Only candidates who meet the requirements should apply. 
● SITA reserves the right not to make an appointment. 
● The appointment is subject to getting a positive security clearance, the signing of a balance scorecard contract, verification of the applicants’ documents (Qualifications), and reference checking. 
● Correspondence will be entered to with shortlisted candidates only. 
● CV\`s from Recruitment Agencies will not be considered.`],postedDate:"3/9/2024",iframe:"",uuid:"p05d343e7-bf8c-4fd2-b0af-36d078797bc4"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/umalusi_orig.jpg",href:"https://www.govpage.co.za/umalusi-vacancies-blog/umalusi-vacancies8837689",title:"UMALUSI VACANCIES",content:[` 
UMALUSI
 
Umalusi, the Council for Quality Assurance in General and Further Education and Training is a statutory Quality Council which quality assures education provision in General and Further Education and Training. This body seeks to appoint suitable persons with the relevant qualifications and experience to the following posts. The Council intends to promote representivity through the filling of these posts.
 `,`ASSISTANT MANAGER: EVALUATION AND ACCREDITATION EVALUATION AND VERIFICATION
Reference Number EA/09/02
 
Requirements
An appropriate recognised four year post-matric qualification in education, Current registration with the South African Council for Educators. At least three years’ recent working experience in an environment offering the NSC/CAPS and three years’ middle management experience in a school / college environment. Required skills: The successful applicant must have proven understanding, knowledge and experience of all pieces of legislation that inform Umalusi’s work as a Quality Council, the uniqueness of independent schools and private colleges. Accreditation, monitoring and evaluation systems and processes. Good verbal and written English communication and report writing skills. Sound training and facilitation skills, project management, coordination and strong administration skills. The successful applicant must, be dynamic, self-motivated, and self-managing. Have the ability to work under pressure as an individual and in a team, be willing to travel regularly and extensively and also to work extra hours and/or after hours, have the ability to work within tight timelines, hold a valid driver’s license and have their own vehicle and have extensive computer literacy skills (Microsoft Word, Excel, PowerPoint, Outlook, and Teams), be able to coordinate and conduct online meetings. 
Additional Advantages: A post-graduate education qualification. Experience working in an independent school or private college. Experience working as an Umalusi Subject Specialist/Evaluator dealing with the evaluation and accreditation of independent schools or private colleges. Experience in teaching/lecturing in a private college offering a qualification on the General and Further Education and Training Qualifications Sub-framework.
 
Duties
Implementation of a system to maintain and extend the evaluation, accreditation, and monitoring of independent schools and private colleges, including, but not limited to, developing and maintaining a database for independent schools and private colleges. Developing accreditation, monitoring and evaluation instruments and manuals. Assisting in the development of accreditation and monitoring policies and procedures. Generating and editing evaluation reports, planning and coordinating site visits and the related reporting. Arranging and facilitating workshops. Establishing and maintaining sound relations with independent schools, private colleges and other relevant stakeholders. Performing any other tasks that are reasonably assigned by the supervisor.
 
Notes
Enquiries: HCM at (012) 030 0735/36. Interested persons may visit the Umalusi website: www.umalusi.org.za to view the full job advertisements and download the application form. 
 
Applications must be forwarded to the following email address: Recruit.ASM-EAV@umalusi.org.za.
 
Umalusi is an equal opportunity and affirmative action employer, and all appointments will be made in accordance with the organisation’s Employment Equity Plan to promote its representivity (race, gender and people living with disability). Correspondence will be limited to shortlisted candidates only. Umalusi reserves the right not to appoint. Failure to attach the fully completed Umalusi application form (not Z83) and your CV (excluding supporting documents) will result in your application being disqualified. 
 
The closing date for applications is 13 September 2024 at 16h00.
Salary (per annum): R 500,205
Closing Date: 2024-09-13`,`STATISTICIAN: STATISTICAL INFORMATION AND RESEARCH
Reference Number SSIR/09/01
 
Requirements
A master’s degree in Statistics. At least five (5) years of appropriate experience in Statistics. At least 3 years at the middle managerial level. At least 3 years’ experience using Statistical Analysis System (SAS) software. Required skills: Advanced skills in Microsoft Word, Excel, Access, and PowerPoint. Ability to conduct independent research, experience in sampling, questionnaire designs, data analysis, and report writing. Advanced verbal and written communication skills. Ability to compile strategic documents. Ability to draft, maintain, and implement policies. Proven experience in conference presentations. The candidate should be dynamic, self-motivated, self-managing, and capable of working under pressure. A valid driver’s license and own transport is essential. 

Additional advantages: A PhD degree in statistics. Experience working in the education sector. Experience in the use of SQL.
 
Duties
The successful candidate will manage the statistical aspects of all research conducted by Umalusi. Initiate and conduct research. Maintain adequate databases for the extensive analysis of assessment results, and design and work with all of Umalusi’s units in terms of their statistical requirements. Lead the conceptualisation and theoretical framing of quantitative research initiatives. Write concept notes, research reports, and position papers where needed. Present research findings both within the organisation and at public events. Review draft research outputs produced in-house and by external researchers. Assist with the standardisation processes of candidates' raw marks. Build staff capacity in preparation for conferences. Contribute to the preparation of quarterly reports.
 
Notes
Enquiries: HCM at (012) 030 0735/36. Interested persons may visit the Umalusi website: www.umalusi.org.za to view the full job advertisements and download the application form. 
Applications must be forwarded to the following email address: Recruit.SSIR@umalusi.org.za.
 
Umalusi is an equal opportunity and affirmative action employer, and all appointments will be made in accordance with the organisation’s Employment Equity Plan to promote its representivity (race, gender and people living with disability). Correspondence will be limited to shortlisted candidates only. Umalusi reserves the right not to appoint. Failure to attach the fully completed Umalusi application form (not Z83) and your CV (excluding supporting documents) will result in your application being disqualified. 
 
The closing date for applications is 13 September 2024 at 16h00.
Salary (per annum): R 875,388
Closing Date: 2024-09-13`],postedDate:"3/9/2024",iframe:"",uuid:"pab0fdf49-5714-442d-b3d1-310ce8a59d0b"}],ie={"joe gqabi district municipality vacancies":"https://www.govpage.co.za/joe-gqabi-district-municipality-vacancies-blog/joe-gqabi-district-municipality-vacancies1416151","king sabatha dalindyebo local municipality vacancies":"https://www.govpage.co.za/king-sabatha-dalindyebo-local-municipality-vacancies-blog/king-sabatha-dalindyebo-local-municipality-vacancies9977373","kouga local municipality vacancies":"https://www.govpage.co.za/kouga-local-municipality-vacancies-blog/kouga-local-municipality-vacancies9698822","nelson mandela bay metropolitan municipality vacancies":"https://www.govpage.co.za/nelson-mandela-bay-metropolitan-municipality-vacancies-blog/nelson-mandela-bay-metropolitan-municipality-vacancies6646292","metsimaholo local municipality vacancies":"https://www.govpage.co.za/metsimaholo-local-municipality-vacancies-blog/metsimaholo-local-municipality-vacancies7416475","thabo mofutsanyane district municipality vacancies":"https://www.govpage.co.za/thabo-mofutsanyane-district-municipality-vacancies-blog/thabo-mofutsanyane-district-municipality-vacancies1789343","city of umhlathuze municipality vacancies":"https://www.govpage.co.za/city-of-umhlathuze-municipality-vacancies-blog/city-of-umhlathuze-municipality-vacancies9173458","umgungundlovu district municipality vacancies":"https://www.govpage.co.za/umgungundlovu-district-municipality-umdm-vacancies-blog/umgungundlovu-district-municipality-vacancies7380309","city of polokwane municipality vacancies":"https://www.govpage.co.za/city-of-polokwane-municipality-vacancies-blog/city-of-polokwane-municipality-vacancies2721997","makhudutamaga local municipality vacancies":"https://www.govpage.co.za/makhudutamaga-local-municipality-vacancies-blog/makhudutamaga-local-municipality-vacancies8673836","city of matlosana local municipality vacancies":"https://www.govpage.co.za/city-of-matlosana-local-municipality-vacancies-blog/city-of-matlosana-local-municipality-vacancies4662714","commission for conciliation, mediation and arbitration (ccma) vacancies":"https://www.govpage.co.za/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies-blog/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies4992553","legal aid vacancies":"https://www.govpage.co.za/legal-aid-vacancies-blog/legal-aid-vacancies7477378","mintek vacancies":"https://www.govpage.co.za/mintek-vacancies-blog/mintek-vacancies1728148","national credit regulator (ncr) vacancies":"https://www.govpage.co.za/national-credit-regulator-ncr-vacancies-blog/national-credit-regulator-ncr-vacancies8621798","national development agency (nda) vacancies":"https://www.govpage.co.za/national-development-agency-nda-vacancies-blog/national-development-agency-nda-vacancies1797428","national home builders registration council (nhbrc) vacancies":"https://www.govpage.co.za/national-home-builders-registration-council-nhbrc-vacancies-blog/national-home-builders-registration-council-nhbrc-vacancies4799202","private security industry regulatory authority (psira) vacancies":"https://www.govpage.co.za/private-security-industry-regulatory-authority-psira-vacancies-blog/private-security-industry-regulatory-authority-psira-vacancies6229403","social housing regulatory authority (shra) vacancies":"https://www.govpage.co.za/social-housing-regulatory-authority-shra-vacancies-blog/social-housing-regulatory-authority-shra-vacancies5605689","south african forestry company (safcol) vacancies":"https://www.govpage.co.za/south-african-forestry-company-safcol-vacancies-blog/south-african-forestry-company-safcol-vacancies9300680","south african library for the blind (salb) vacancies":"https://www.govpage.co.za/south-african-library-for-the-blind-salb-vacancies-blog/south-african-library-for-the-blind-salb-vacancies8951464","south african maritime safety authority (samsa) vacancies":"https://www.govpage.co.za/south-african-maritime-safety-authority-samsa-vacancies-blog/south-african-maritime-safety-authority-samsa-vacancies2331150","south african national roads agency (sanral) vacancies":"https://www.govpage.co.za/south-african-national-roads-agency-sanral-vacancies-blog/south-african-national-roads-agency-sanral-vacancies8147741","south african national parks (sanparks) vacancies":"https://www.govpage.co.za/south-african-national-parks-sanparks-vacancies-blog/south-african-national-parks-sanparks-vacancies9483296","state information technology agency (sita) vacancies":"https://www.govpage.co.za/state-information-technology-agency-sita-vacancies-blog/state-information-technology-agency-sita-vacancies4120711","umalusi vacancies":"https://www.govpage.co.za/umalusi-vacancies-blog/umalusi-vacancies8837689"},te={title:ee,blogPosts:ne,departments:ie},ae="govpage-private-sector",oe=[],se={},re={},le={title:ae,blogPosts:oe,departments:se,businesses:re},w=10;function me(){const[t,r]=g.useState(1),[a,s]=g.useState(null);g.useEffect(()=>{if(a){const p=document.querySelector(".modal a.btn.btn-primary");p&&p.remove()}},[a]);const n=j(G,z,te,K,$,le),o=Math.ceil(n.length/w),l=n.slice((t-1)*w,t*w),d=p=>{r(p)},h=p=>{s(p)},c=()=>{s(null)};return e.createElement("div",null,e.createElement(I,{paginatedData:l,onPostClick:h}),e.createElement(C,{currentPage:t,totalPages:o,onPageChange:d}),a&&e.createElement("div",{className:"modal",onClick:c},e.createElement("div",{className:"modal-content",onClick:p=>p.stopPropagation()},e.createElement("span",{className:"close",onClick:c},"×"),e.createElement("div",{className:"modal-body"},e.createElement("img",{src:a.imgSrc||a.iconLink,alt:"company logo"}),e.createElement("h2",null,a.title||a.jobTitle),e.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:a!=null&&a.details?a.details:B((a==null?void 0:a.content)||"")}}),a.apply&&e.createElement("a",{href:a==null?void 0:a.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),a.href&&e.createElement("a",{href:a==null?void 0:a.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}export{me as default};
