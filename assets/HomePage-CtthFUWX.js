import{R as e,P as i,r as g,A as q,j as x,k as L}from"./vendor-DasOq3Un.js";import{u as F,c as j,f as B}from"./index-Bau1fA2-.js";/* empty css             */function C({currentPage:t,totalPages:r,onPageChange:a}){const s=()=>{const o=[],l=Math.max(1,t-1),d=Math.min(r,l+3);for(let h=l;h<=d;h++)o.push(h);return o},n=o=>{a(o);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return e.createElement("div",{className:"pagination"},e.createElement("button",{onClick:()=>n(t-1),disabled:t===1},"Previous"),s().map(o=>e.createElement("button",{key:o,className:o===t?"active":"",onClick:()=>n(o)},o)),e.createElement("button",{onClick:()=>n(t+1),disabled:t===r},"Next"))}C.propTypes={currentPage:i.number.isRequired,totalPages:i.number.isRequired,onPageChange:i.func.isRequired};const S=({pdfImages:t})=>{const[r,a]=g.useState(1),[s,n]=g.useState(!1),[o,l]=g.useState(1),d=g.useRef(null),h=()=>{const m=new Image;m.src=t[o-1],m.onload=()=>{const u=d.current,f=u.getContext("2d"),v=window.devicePixelRatio||1,O=s?window.innerWidth:u.parentElement.clientWidth,N=Math.min(O/m.width,1),A=r*N,b=m.width*A,y=m.height*A;u.width=b*v,u.height=y*v,u.style.width=`${b}px`,u.style.height=`${y}px`,f.clearRect(0,0,u.width,u.height),f.scale(v,v),f.drawImage(m,0,0,b,y)},m.onerror=()=>{console.error("Failed to load image:",m.src);const u=d.current,f=u.getContext("2d");f.clearRect(0,0,u.width,u.height),f.font="20px Arial",f.fillStyle="red",f.fillText("Failed to load page",10,50)}};g.useEffect(()=>{h()},[r,s,o]);const c=()=>a(m=>Math.min(m+.1,2)),p=()=>a(m=>Math.max(m-.1,.5)),R=()=>n(!0),I=()=>n(!1),M=()=>{o<t.length&&l(o+1)},D=()=>{o>1&&l(o-1)};return e.createElement("div",{className:`pdf-viewer-container ${s?"full-view":"min-view"}`},s&&e.createElement("div",{className:"pdf-navbar"},e.createElement("button",{className:"minimize-view-btn",onClick:I},e.createElement(q,null)),e.createElement("div",{className:"zoom"},e.createElement("button",{onClick:c},e.createElement(x,null)),e.createElement("button",{onClick:p,disabled:r<=.5},e.createElement(L,null))),e.createElement("div",{className:"pdf-pagination"},e.createElement("button",{onClick:D,disabled:o<=1},"Prev"),e.createElement("span",null,"Page ",o," of ",t.length),e.createElement("button",{onClick:M,disabled:o>=t.length},"Next"))),e.createElement("canvas",{onClick:R,ref:d,className:"pdf-viewer-canvas"}))};S.propTypes={pdfImages:i.array.isRequired};function E({pdfImages:t,isLoaded:r}){return e.createElement("section",{className:"pdf-post"},r?e.createElement("div",{className:"pdf-container"},e.createElement(S,{pdfImages:t})):e.createElement("div",{className:"placeholder pdf-container-placeholder"}))}E.propTypes={pdfImages:i.array.isRequired,isLoaded:i.bool.isRequired};function P({iframeUrls:t}){const[r,a]=g.useState(!1),[s,n]=g.useState(0),o=c=>{c.stopPropagation(),a(p=>!p)},l=()=>{n(c=>c<t.length-1?c+1:c)},d=()=>{n(c=>c>0?c-1:c)},h=Array.isArray(t)?t[s]:t;return e.createElement("div",{className:`google-doc-viewer ${r?"fullscreen":""}`},e.createElement("iframe",{src:h,allowFullScreen:!0,className:"google-doc-iframe"}),e.createElement("div",{className:"navigation-buttons"},Array.isArray(t)&&e.createElement(e.Fragment,null,e.createElement("button",{className:"prev-doc-button",onClick:d,disabled:s===0},"Previous"),e.createElement("button",{className:"next-doc-button",onClick:l,disabled:s===t.length-1},"Next"))),e.createElement("button",{className:"toggle-fullscreen",onClick:o},r?"Exit Full Screen":"Full Screen"))}P.propTypes={iframeUrls:i.oneOfType([i.string,i.arrayOf(i.string)]).isRequired};function G(t,r){return e.useMemo(()=>{if(t.length===0)return e.createElement(e.Fragment,null);const s=({innerHTML:n})=>e.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:n}});return s.propTypes={innerHTML:i.string.isRequired},e.createElement("section",null,t.map((n,o)=>{var l,d;return e.createElement("article",{className:"job-post",key:o,onClick:()=>r(n)},n.imgSrc||n.iconLink?e.createElement("div",{className:"company-logo"},e.createElement("img",{loading:"lazy",src:n.imgSrc||n.iconLink,alt:"company logo"})):null,e.createElement("p",{className:"title"},(n==null?void 0:n.title)||(n==null?void 0:n.jobTitle)),((l=n==null?void 0:n.content)==null?void 0:l.length)>0?e.createElement(s,{innerHTML:n.content}):((d=n==null?void 0:n.details)==null?void 0:d.length)>0?e.createElement(s,{innerHTML:n.details}):n!=null&&n.iframe?e.createElement(P,{iframeUrls:n.iframe}):null,!(n!=null&&n.iframe)&&e.createElement("button",{className:"read-more-button",onClick:()=>r(n)},"Read More"))}))},[t,r])}function k({paginatedData:t,onPostClick:r}){const[a]=F(5e3);return e.createElement("div",{id:"posts"},t.map(s=>s.type==="pdf"?e.createElement(E,{key:s.id,pdfImages:s.pdfImages,isLoaded:a}):e.createElement(T,{key:s.id,post:s,onPostClick:r})))}k.propTypes={paginatedData:i.arrayOf(i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string})).isRequired,onPostClick:i.func.isRequired};function T({post:t,onPostClick:r}){return G([t],r)}T.propTypes={post:i.shape({id:i.string.isRequired,type:i.string.isRequired,pdfImages:i.array,imgSrc:i.string,iconLink:i.string,title:i.string,jobTitle:i.string,details:i.string,content:i.string,apply:i.string,href:i.string}).isRequired,onPostClick:i.func.isRequired};const W=[{file:"1.pdf",images:["./assets/pdf_images/1/1_page_1.png","./assets/pdf_images/1/1_page_2.png","./assets/pdf_images/1/1_page_3.png"]},{file:"2.pdf",images:["./assets/pdf_images/2/2_page_1.png","./assets/pdf_images/2/2_page_2.png","./assets/pdf_images/2/2_page_3.png"]},{file:"3.pdf",images:["./assets/pdf_images/3/3_page_1.png","./assets/pdf_images/3/3_page_2.png","./assets/pdf_images/3/3_page_3.png"]},{file:"4.pdf",images:["./assets/pdf_images/4/4_page_1.png","./assets/pdf_images/4/4_page_2.png","./assets/pdf_images/4/4_page_3.png"]},{file:"5.pdf",images:["./assets/pdf_images/5/5_page_1.png","./assets/pdf_images/5/5_page_2.png","./assets/pdf_images/5/5_page_3.png"]}],H="/assets/agency_icons/2.png",Q="minopex",_=[{jobTitle:"SHEQ Coordinator (FTC)",publishedDate:"Published 03 September 2024",expiryDate:"Closing Date: 10 September 2024",location:"Krugersdorp, Gauteng",details:[`
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
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/rtckfc",iconLink:"/assets/agency_icons/2.png",uuid:"pf303a020-163c-4d25-8da2-104cd3b84644"},{jobTitle:"Control Room Operator",publishedDate:"Published 22 August 2024",expiryDate:"",location:"Hibberdene, KwaZulu-Natal",details:[`
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
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/n5bx86",iconLink:"/assets/agency_icons/2.png",uuid:"pd9a15204-9435-41b0-b88c-3974aa6e2516"},{jobTitle:"Junior Millwright",publishedDate:"Published 30 August 2024",expiryDate:"Closing Date: 09 September 2024",location:"Wonderfontein, Mpumalanga",details:[`
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
    `],apply:"https://drawater.simplify.hr/Vacancy/Apply/yg8tge",iconLink:"/assets/agency_icons/2.png",uuid:"pf26fa00c-a47c-4640-805a-7a494369f2d5"},{jobTitle:"Maintenance Planner",publishedDate:"Published 06 September 2024",expiryDate:"",location:"Saudi Arabia, Saudi Arabia",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">DRA Saudi Arabia LLC</label>
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
        <div class="vacancy-description"><strong>Introduction <br></strong>This position will be based at the Mansourah Massarah Project in Saudi Arabia on an 8/4 rotation schedule. <strong> &nbsp;<br> &nbsp; <br>Description <br></strong>The purpose of this position is to manage the Engineering Planning office to ensure minimum downtime using the Pragma On Key Computerized Maintenance Management System . &nbsp;<br><strong> <br>Duties and Responsibilities<br></strong><br>• The Maintenance Planner coordinates and monitors all engineering maintenance and planning activities relating to the Technical and Metallurgical processes within the Plant <br>• Complement planned work by gathering critical information (resources, spares and tools arranged) for effective and safe execution <br>• Continually evaluate and motivate critical spares to support equipment reliability during its life cycle <br>• Actively assist in managing the work backlog <br>• The job holder is responsible for establishing and maintaining an accurate and comprehensive asset register, the incumbent is also responsible for managing the plant critical spares in collaboration with Engineer and materials controller <br>• The job holder is also responsible for the administration of these activities to make a positive contribution to the attainment of the Operation strategic objectives <br>• Key to this position is the participation in team activities and acceptance of accountability for his/her personal role which will assure alignment with the engineering department’s quest for technical excellence <br>• The Maintenance planner is responsible for the planning of responsibilities with the Engineer. Organising and controlling is done with the relevant Foreman and Process personnel to ensure an efficient workflow <br>• He/she is also responsible to create a work environment in which all can perform to their full potential <br>• The incumbent executes a variety of activities and works to strict standards and procedures and is accountable for proper office management <br>• Coordinate with subordinates to provide coverage during sick leave or vacation <br>• In order for the Maintenance Planner to contribute towards the safe and efficient achievement of set production targets, he/she will responsible to: <br>• Compile and maintain computerized asset plan to ensure that it is up to date at all times <br>• Provide asset reports to the Plant Engineer on a periodical basis and as required <br>• Compile requisitions as and when necessary to ensure that special equipment is in stock for work required <br>• Conduct in-depth root cause analysis and report the findings thereof to the Plant Engineer when major failures occur <br>• Compile monthly reports from CMMS (Computerized Maintenance Management) system and submit to respective parties <br>• Compile ad hoc reports as and when required by management or the client <br>• Optimize scheduled tasks based on historical plant equipment failures <br><br><br><strong> Experience and Skills&nbsp;Requirements <br></strong>• Expert knowledge of and training in the maintenance module ORACLE or other similar maintenance module. <br>•&nbsp;Minimum 5 years’ experience in a Maintenance Planning role<br>• English Language Proficiency&nbsp;<br>• Computer literate in MS Office – Excel, Word, Power point, MS Projects <br>• Relevant planned maintenance system training, ORACLE would be an advantage <br>• Sound knowledge of Mining Engineering Codes of practices, policies and procedures. <br>• A good knowledge of machinery and equipment used on the relevant operations <br>• Understanding of engineering best practices and new technologies relating to engineering principles &amp; processes <br>• Proven technical and maintenance capability <br>• Sound knowledge of Condition Monitoring practices<br>• Good working knowledge of Reliability-Centered Maintenance principles will be very advantageous <br>• Minerals Process Plant experience would be an advantage <br>• Experience in project planning and scheduling to include shut down planning in projects<br><br><strong>Qualification Level</strong> <br>• Grade 12 or Equivalent <br>• Relevant Trade Test Certificate with 5 years’ experience as an Artisan and 2 years’ experience as a Foreman; or<br>• National Diploma Engineering with at least 5 years process plant experience<br><strong> <br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/npjijk" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/npjijk",iconLink:"/assets/agency_icons/2.png",uuid:"pa4843627-a6e5-439c-97dc-1d208d1dea98"}],U={iconLink:H,title:Q,blogPosts:_},V="/assets/agency_icons/1.png",z="SA-Youth",K=[{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA4ADkAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p2c99276d-43f8-4197-9757-22da03394caa"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAMQA0ADgAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p9c913d74-a6a9-4c24-bd35-3ec7151a6721"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAMQA0ADgAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"pe14bdfcc-6be8-4a0f-9c15-bab87c95720b"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOQA4ADQAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p4f5dc07f-37d4-46a4-b0b6-f7bf51f8372b"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAMQAxADkAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"pdc7d5175-69fe-437d-b644-947eae96de3b"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAAwADkANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p060567aa-65ad-47c2-90e2-2b99726e5905"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOQAyADAAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p86dafe7b-07e1-4d8d-8d0b-02b6e6f5a0ca"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADcANAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p0789afe5-65b1-465c-9fcf-d20e381f21e2"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA0ADQAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p47d732e7-b39f-4e20-96e2-420f7484c222"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOQA3ADIAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p44ec13d7-56f0-413c-ae18-96fdf18fec21"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA2ADEANgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p60875bba-87af-4cd9-a386-ff16c2d58d63"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADIAOAA4ADYAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p6f9dafd1-728f-44d3-ae76-bf00a68ee131"},{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADYAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/1.png",uuid:"p746852bc-24a0-4a80-a0d8-537d6449afb8"}],Y={iconLink:V,title:z,blogPosts:K},J="/assets/agency_icons/3.jpg",Z="pro-personnel",X=[{jobTitle:"Payroll Administrator",startDate:"2024-09-04 - 2024-10-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durban",region:"KwaZulu Natal"},details:`PRIMARY RESPONSIBILITIESVIP Premier Payroll Administration

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002541-D",iconLink:"/assets/agency_icons/3.jpg",uuid:"p877380e9-7e98-4b70-92bb-6ff8595202df"},{jobTitle:"Payroll Administrator",startDate:"2024-09-04 - 2024-10-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durban",region:"KwaZulu Natal"},details:`Qualifications:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002542-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"pc4dd7aa9-2de7-489e-984d-3502b590e32d"},{jobTitle:"Occupational Hygienists",startDate:"2024-09-03 - 2024-10-03",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Middelburg",region:"Mpumalanga"},details:"Requirements needed:* Bachelor's degree in Occupational Hygiene, Environmental Health of related field* Certification as an Occupational Hygienist (SAIOH registered or equivalent)Experience:* Minimum 3-5 years working experience in occupational hygiene withing the mining industry.* In depth knowledge of South African mining health and safety regulationsDesirable Attributes:* Familiarity with mine verification systems and respirate protection programs* Experience with occupational hygiene monitoring equipment and software",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002539-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pca6687d4-8c5a-44c9-8dea-0511c1a2d03f"},{jobTitle:"Occupational Hygienists",startDate:"2024-09-03 - 2024-10-03",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Middelburg",region:"Mpumalanga"},details:`Requirements

Bachelors degree in Occupational Hygiene, Environmental Health, or related field.
Certification as an Occupational Hygienist (SAIOH registered or equivalent)
Minimum of 3-5 years of experience in Occupational Hygiene within the mining industry.
In-depth knowledge of South African mining Health and Safety regulations.

Desirable Attributes

Familiarity with mine ventilation systems and respiratory protection programs.
Experience with Occupational Health risk assessments and incident investigations.
Proficiency in using Occupational Hygiene monitoring equipment and software.
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002540-D",iconLink:"/assets/agency_icons/3.jpg",uuid:"p5cc87fab-ad5d-4c4f-b1e4-098c5f9b5383"},{jobTitle:"Diesel Mechanic",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lydenburg",region:"Mpumalanga"},details:"Requirements:* Education - grade 10/12 advantage* Valid trade certificate* Competent B Certificate - underground Hardrock operations* Medically fit to work underground* Clear criminal recordExperience:* 3-5 years working in a mining environment, with specific diesel mechanic experience on Sandvik (Drill rig) DD 211, 321, (Bolter) DS211-L-M, DS211L, 311, (LHD) LH 410, GHH (LHD) 5.2, 5.5, 6.2, (UV) 40, 60, AARD (UV) 80., Hencon, Altecreter, Dieci Telehandler* Must be fit to obtain a medical certificate and declared fit to work on a mine.* Competent in diesel machine systems, including diagnostic, repair and maintenance, ensuring safe and effective operations in a mining environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002530-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pf3cf1c1b-f044-4bd5-b69e-e5236d942127"},{jobTitle:"Auto Electrician",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lydenburg",region:"Mpumalanga"},details:"Requirements:* Education - minimum grade 10/12&nbsp;* Trade certificate as an Auto Electrician* Competent B certificates - underground hard rock operationsExperience:* 3-5 years within a mining environment with specific experience in auto electrical systems on Sandvik, GHH, AARD* Must be medically fit to obtain medical certificate* Competent in auto electrical systems, including diagnostic, repair and maintenance ensuring safe and effective operations in a mining environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002533-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pa494e7a6-d456-42f5-8324-ad62f182cc82"},{jobTitle:"Auto Electrician",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Auto Electrical",location:{city:", Lydenburg",region:"Mpumalanga"},details:`Job specific requirements:

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

Statutory payments towards UIF/SDL/RMA`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002531-D",iconLink:"/assets/agency_icons/3.jpg",uuid:"pc1c3be28-58f3-40de-bfa6-e79d9316c261"},{jobTitle:"Diesel Mechanic",startDate:"2024-08-30 - 2024-09-29",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lydenburg",region:"Mpumalanga"},details:`Job specific requirements:

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

Statutory payments towards UIF/SDL/RMA`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002532-D",iconLink:"/assets/agency_icons/3.jpg",uuid:"pd124f8fe-76e0-4d83-a05a-23104f7c46a2"},{jobTitle:"Safety Manager",startDate:"2024-08-29 - 2024-09-30",vacancyType:"Contractor",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"The following requirements is required:Desirable:* Diploma fire and safety or equivalent* OSHA or NEBOSH, ISOH* Hold OSHA 18001:2008 auditor accreditationAdvantage:* Middle East experience, oil and gas and petrochemical project* Age 40 and up* Experience 10 years, 5 years in similar position* Degree Bs HSE/ HSE diploma / NEBOSH diploma* Grade 12 certificateKindly send CV with certificates and passport to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002451-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p175077c2-46ff-42ba-80c0-e99f8175779f"},{jobTitle:"Safety Officer",startDate:"2024-08-29 - 2024-09-30",vacancyType:"Contractor",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"Must have the following requirements:Desirable:* Diploma Fire and Safety or equivalent* OSHA or NEBOSH, ISOH* Hold OSHAS 18001:2008 auditor accreditationAdvantage:* Middle East experience oil, gas and petrochemical projectsRequirements:* Age 25 and up* Experience 6 years, 5 years in similar position* Degree HSE Diploma / NEBOSH diploma* Grade 12 certificateKindly send CV with relevant documentation and passport to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002452-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p4d9d835e-6fa9-4f2e-be32-7a0b02b3f05b"},{jobTitle:"Safety Supervisor",startDate:"2024-08-29 - 2024-09-30",vacancyType:"Contractor",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"The minimum requirements for the vacancy is as follows&nbsp;Desirable:* Diploma in Fire and Safety or equivalent* OSHA or NEBOSH ISOHAdvantage:* Middle east experience, oil and gas and petrochemical projects experienceRequirements:* Age 30 and up* Experience 8 years, 5 years in similar position* Degree HSE diploma / NEBOSH diploma* Grade 12 certificateKindly send cv, with all relevant certificates and passport to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002453-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p507a9147-bc86-49ef-bd87-e3152b7bcfc5"},{jobTitle:"Financial Adviser / Broker",startDate:"2024-08-29 - 2024-09-28",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", All Areas",region:"All Areas"},details:`Minimum Requirements:

A minimum of four years of experience at a reputable Financial Institution such as Sanlam, Momentum, Discovery, ABSA Bank, etc.&nbsp;
Successful completion and passing of the RE 1 regulatory exam.
Possession of a minimum NQF qualification in line with years of experience.

Why Join Us?

Be part of a forward-thinking company that values expertise and excellence.
Work from anywhere in South Africa, providing flexibility and freedom.
Engage with a supportive team committed to your success.

If you meet the above criteria and are ready to take on this rewarding challenge, we invite you to express your interest by applying today`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002529-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"pd07a0d9c-c6b8-4126-9597-cdd57046ddd3"},{jobTitle:"Supervisor",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Rustenburg",region:"North West"},details:"The ideal candidate needs to have the following requirements and experience:* Must have a valid grade 12 certificate* Must know MS Excel (formulas) very well* Previous working experience as a supervisor within a cleaning/ hygiene environment.* Must be in possession of a valid driver's license* Excellent communications skills in Afrikaans and English* Delivery of stock and invoices to clients* Conduct and assist in weekly vehicle and equipment checks* Be able to start immediately",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002508-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pe3911e57-71df-4a2c-b041-69f452fd6db1"},{jobTitle:"Office Manager",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Financial Institute",location:{city:", Rustenburg",region:"North West"},details:"The ideal candidate needs to meet the following requirements, in order to apply:Qualifications:* Certificate in financial planning or equivalent* BSc in Economics, Mathematics, and Physics optional* Business related disciplineExperience:* At least 3 years relevant industry experience within a financial planning environment* 3-5 years marketing and finance management experience* 3-5 years team management experience* Previous HR/compliance experience essential",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002525-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pdb8fd8f3-8a4e-4ac3-9772-bbf52e376d6c"},{jobTitle:"Application Developer",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Minimum qualifications and experienceBachelor’s Degree in Information Technology.Relevant IT or Development certification0-1 years of experience - junior positionReliable means of transport and a valid driver's lisenceMust have knowledge of the following:Microsoft Maui, Xamarin, Visual Studio, C#,Angular,HTML5,CSS 3 JavaScript, jQuery, Bootstrap,Responsive design, MVC, VB.net, razor, IIS, ASP.net,.Net core (Dot Net core) WCF/Web services, WebAPIThe candidate must have project and time management skills in order to work on multiple project simultaneously. They will be responsible for creating vissually appealing and user-friendly web and mobile applications. The candidate must have the motivation to continously implement self-improvement through researching the newest software technologies. Skills in Microsoft Maui, Xamarin, Visual Studio C, Angular, React.Occasional travel to Australia, New Zeeland, Europe and the USA will be required.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002526-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"p813f8c02-6115-4479-a42f-524aec88dff4"},{jobTitle:"Web Developers",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Minimum &amp; Ideal Qualifications:Higher-level (GS) degree in Web Application Development.Relevant Web Development certifications.0-1 years of related field experience.Proficiency in Afrikaans &amp; English&nbsp;Previous Experience:We are particularly interested in candidates with 0-1 years of experience. This position is designed for individuals looking to kickstart their career in web development.&nbsp;Salary Range:The salary range for this position is R8,000, – R15,000, dependent on your qualifications, experience, and performance in the interview.&nbsp;Additional Requirements:A reliable means of transport is necessary.This is a Junior-level role.A portfolio showcasing your previous web development projects or applications is highly desirable.If you are enthusiastic about web development, eager to learn, and have the qualifications and skills we are looking for, we encourage you to apply and take the next step in your career. Join a dynamic team that values innovation and creativity.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002527-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"p55093a3b-2722-4863-8285-033e5d1e32d6"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-08-28 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:`Required Skills and Qualifications:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002528-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"p82c11654-623b-49aa-9aee-2af11c6ad5d2"},{jobTitle:"Assistant Software Development Manager (Information Technology)",startDate:"2024-08-27 - 2024-09-30",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Ladybrand",region:"Freestate"},details:"Qualifications:* Appropriate bachelor's degree or similar tertiary qualification or experience in IT software development* Proficiency in MS Project or similar project management tools* Minimum of 10 years of experience in software development* Minimum of 5 years management experience regarding IT Software development projectsPrimary Responsibilities:* Instigation and management of IT Software development projects through the evaluation and monitoring of business priorities, the determination of IT priorities and allocation thereof to IT programmers, as well as the productive sand effective utilizations of IT resources* Co-ordinate and planning of IT software development projects, including the approval and finalization of technical specifications* Coordinate and monitoring of testing the implementation of IT Software development projects* Liaising with business regarding IT software projectsSkills:* Excellent communications and language skills in Afrikaans and English* Excellent organizational and project management skills* Experience regarding software development in COBOL and the IDM-I operating systems* Previous experience in an agri-business environmental would be beneficial* Excellent people skills and the ability to lead and manage a team and work together in a team* Strong analytical skills and the ability to function independently",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002496-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pc0f7ee1b-2f4c-4586-8916-4a78759a9ee9"},{jobTitle:"Research Analyst",startDate:"2024-08-27 - 2024-09-27",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durbanville",region:"Western Cape"},details:`PRIMARY RESPONSIBILITIES:

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
`,contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002511-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p7733f47a-b32b-429a-8988-8a03db8ae11c"},{jobTitle:"Assistant Accountant",startDate:"2024-08-22 - 2024-09-22",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Experience:* Must have knowledge of the following:- SARS e-filing- SARS correspondence and registration- Salaries, payroll and reconciliation (VIP &amp; Easy file)- Knowledge of calculations and statements- EMP- Income tax statementsComputer knowledge in:* Pastel* Excel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002520-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p1b0fe705-2d35-415e-b1ba-8e269b6a9f30"},{jobTitle:"Bookkeeper",startDate:"2024-08-15 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Bryanston",region:"Gauteng"},details:"Qualifications and Experience needed:* Grade 12* Related qualification to bookkeeping* Sage experience is a MUST* 2-5 years working experience as a Bookkeeper* Candidate must be available to start immediatelyResponsibilities:* Keeping track of all financial transactions, including purchase, sales, receipts and payments in the accounting software or ledgers.* Ensuring that invoices are paid on time and that the company receives payments from clients* Regularly comparing the company's financial records with bank statements to ensure accuracy and identify any discrepancies* Updating and maintain the general ledger, which is the primary record of all financial transactions* Creating basic financial reports, such as income statements, balance sheets and cash flow statements, to provide insight into the company's financial status.* Making sure that financial records comply with relevant laws and regulations and staying up to date with the changes.* Managing petty cash funds, tracking it use and reconcile it regularly* Supporting audits, providing documentation and information during financial audits to verify the accuracy of financial reports",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002523-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pf8d52496-2091-4a43-a59a-a812eb08fccd"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in Web development, graphic design or related field* Proficiency in Adobe creative suite (photoshop, Illustrator, In design)* Basic understanding of web development&nbsp; beneficial* Knowledge of SEO best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail orientated with s string focus on quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast phased environment* Project management skills and adaptability to changing project requirements",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002493-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pb44baac0-958f-42aa-8d91-32bd06d0334a"},{jobTitle:"Web Analyst (Web Developer)",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in web development, graphic design or related field.* Proficiency in HTML, CSS, JavaScript, PHP, JSE, Jason, WordPress and SEO* Design/Creative experience - beneficial* Basic understanding of Adobe Creative suite (Photoshop, Illustrator, InDesign)* Ability to create wireframes, mockups and prototypes* Basic understanding of UX/UI principals and best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail-orientated with strong focus and quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast-paced environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002494-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p6cd84185-442c-4ead-b318-f6a79358fdb4"},{jobTitle:"Application Developer",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Proficiency in programming languages such as MS Mausi, Visual Studio, C Angular and React* Strong understanding of mobile and web application development* Ability to manage multiple projects simultaneously with effective project and time management skills.* Excellent problem-solving skills and attention to detail* Experience in creating visually appealing and user-friendly interfaces* Motivation to continuously learn and implement the latest software technologies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002495-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"pe009c65b-fa2d-4845-9707-c501b949b928"},{jobTitle:"Counter Sales Assistant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Bela Bela",region:"Limpopo"},details:"Minimum Qualifications:Must have Grade 12 or equivalent&nbsp;Must be fluent in Afrikaans and English&nbsp;Previous Counter Sales will be an advantage&nbsp;Previous technical / paint counter sales experience will be an added advantage&nbsp;Energetic, hardworking, diligent individual",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002521-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"p4bfb954b-e5d3-4301-9bbc-e812b5137646"},{jobTitle:"Micro Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Koster",region:"North West"},details:"The Company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are dedicated to producing high-quality, dried micro-algae year-round while minimizing environmental impact. We are seeking a highly skilled and motivated Micro-algae Plant Production Manager to join our team and lead our state-of-the-art facility.Job Overview: The Micro-algae Plant Production Manager will be responsible for overseeing all aspects of our Micro-algae operations. This includes managing micro-algae plant growth cycles, ensuring optimal growing conditions, managing packaging operations both quantity and quality, managing operational staff, coordinating maintenance requirements and implementing best operating practices for maximum yield and quality. The ideal candidate will have a strong background in food &amp; beverage processing, plant science, microbiology, horticulture, hydroponics or micro-algae systems, with an understanding of process operations, aquatic chemistry and water treatment. Strong team leadership skills and the ability to perform in a pressured environment with stringent production requirements is a must. The incumbent will report to the Technical Manager.Key Responsibilities:&nbsp;1. &nbsp; &nbsp; &nbsp;General Management:&nbsp;Operational Oversight: Manage the day-to-day operations of the micro-algae production facility, ensuring all production, maintenance, quality and packaging processes run smoothly and efficiently.Resource Allocation: Allocate resources effectively to maximize production efficiency and minimize waste.Budget Management: Develop and manage the production budget, ensuring cost-effective operations.Regulatory Compliance: Ensure compliance with all local, provincial, state regulations related to micro-algae farming and food safety.Continuous Improvement: Identify opportunities for process improvements and implement changes to enhance productivity and quality.&nbsp;2. &nbsp; &nbsp; &nbsp;Technical Management:&nbsp;Micro-algae Plant Growth Optimization: Ensure optimal growing conditions are adhered to (light, temperature, humidity, nutrient levels) for various micro-algae species to maximize yield and quality.System Maintenance: Oversee the maintenance and operation of micro-algae systems, including troubleshooting and resolving technical issues.Nutrient Management: Adhere to nutrient delivery schedules and tailor to the specific needs of different batches. Feedback to the Technical manager on any concerns and optimization requirements.Data Analysis: Utilize data from sensors and other monitoring equipment to make informed decisions about environmental adjustments and resource management.Innovation: Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions into the production process.Technical Expertise: Utilize knowledge of micro-algae systems and plant physiology to manage optimize production.Troubleshoot and resolve technical issues with micro-algae equipment and systems.Stay updated on the latest advancements in micro-algae technology and integrate innovative solutions.3. &nbsp; &nbsp; &nbsp;People Management:Team Leadership: Lead, train, and supervise a team of micro-algae plant and laboratory technicians, fostering a positive and collaborative work environment.Performance Management: Conduct regular performance evaluations, provide feedback, and develop improvement plans for team members.Training and Development: Identify training needs and provide ongoing education to staff on best practices, safety protocols, and new technologies.Task Delegation: Assign tasks and monitor performance to ensure productivity and adherence to quality standards.Conflict Resolution: Address and resolve any interpersonal issues or conflicts within the team promptly and effectively.4. &nbsp; &nbsp; &nbsp;Quality Control:Oversee quality control activities in the on-site laboratory and supervise laboratory staff.Monitor micro-algae plant health and growth to ensure adherence to the necessary quality specifications, identifying and addressing any issues promptly.Conduct regular inspections to ensure compliance with health and safety as well as good manufacturing standards.Ensure detailed records of micro-algae plant growth, environmental conditions, and production metrics are maintained.5. &nbsp; &nbsp; &nbsp;Inventory and Resource Management:Manage inventory of inoculum cultures, nutrients, and other plant supplies.Ensure efficient use of resources to minimize waste and reduce costs.Coordinate with suppliers to maintain an adequate stock of necessary materials.6. &nbsp; &nbsp; &nbsp;Reporting and Analysis:Prepare regular reports on production performance, including yield, quality, and resource usage. Analyse data to identify trends, areas for improvement, and opportunities for increased efficiency.Present findings and recommendations to senior management.Prepare regular management accounts and report on variations to budget&nbsp;Qualifications:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Bachelor’s degree in Agronomy, Horticulture, Hydroponics, Plant Science, Microbiology or a related field. Master’s degree preferred.· &nbsp; &nbsp; &nbsp; &nbsp;Minimum of 3-5 years of experience in Food &amp; Beverage processing, Horticulture, Hydroponics or Micro-algae farming or a related field.Technical Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems.· &nbsp; &nbsp; &nbsp; &nbsp;Proficiency in using plant management software and other relevant technology.· &nbsp; &nbsp; &nbsp; &nbsp;Experience with data analysis and interpretation to inform operational decisions.&nbsp;Management Skills:&nbsp;· &nbsp; &nbsp; &nbsp; &nbsp;Proven leadership and team management skills.· &nbsp; &nbsp; &nbsp; &nbsp;Excellent problem-solving abilities and attention to detail.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to work in a fast-paced, dynamic environment and adapt to changing priorities.· &nbsp; &nbsp; &nbsp; &nbsp;Strong organizational and multitasking abilities.Interpersonal Skills:· &nbsp; &nbsp; &nbsp; &nbsp;Effective communication and interpersonal skills.· &nbsp; &nbsp; &nbsp; &nbsp;Ability to motivate and develop team members.· &nbsp; &nbsp; &nbsp; &nbsp;Conflict resolution and negotiation skills.Benefits:&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Competitive salary and performance-based bonuses.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Paid time off and holidays.- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Opportunities for professional development and advancement.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002510-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"p3e605672-1e7a-4099-9a34-d97156826cc3"},{jobTitle:"Assistant Accountant",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:`Requirements:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002519-R",iconLink:"/assets/agency_icons/3.jpg",uuid:"p9126e9b6-e1ab-4e6c-a320-41e3adfb0a59"},{jobTitle:"Micro-Algae Plant Production Manager",startDate:"2024-08-14 - 2024-09-13",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Koster",region:"North West"},details:"The company is a leading innovator in sustainable agriculture, specializing in micro-algae plant production. We are seeking a highly skilled and motivated micro-algae plant production manager to join the team.Qualifications:* Bachelor's degree in Agronomy, horticulture, hydroponics, plant science, microbiology or related field, master's degree preferred.* Minimum of 3-5 years of experience in food &amp; beverage processing, horticulture, hydroponics or micro-algae farming or related fieldTechnical Skills:* Strong understanding of plant physiology, nutrient management, microbiology and horticulture, hydroponics, micro-algae systems* Profiency in using plant management software and other relevant technology* Experience with data analysis and interpretation to inform operational decisions.Management Skills:* Proven leadership* Excellent problem-solving abilities and attention to detail* Ability to work in fast paced dynamic environment and adapt to changing priorities* Strong organizational and multitasking abilities",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002522-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p4d224049-047a-4ab4-8257-6ebf979c358c"},{jobTitle:"Butchery Manager",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications &amp; Experience:* A valid matric certificate with mathematics* Grade 1 Meat cutting certificate or recognized butchery apprenticeship* A clear criminal record* At least 5 years' experience in all aspects of day to day running and managing of a meat market* Computer literate* Point of sale systems knowledge is desirable* Self motivated, self-dedicated and self-determined with a creative flair* Strong numerical skills* Be able to manage staff* Be able to work under pressure* Be able to be firm and resolute in decision with a high degree of discipline",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002516-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p59fece29-ac96-43ce-96ad-370314696d94"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications:* Grade 12 (matric)* 1-2 years' experience within a sales or internal sales environment* Experience within electrical motors industry will be a advantage* Must be PC literate with working knowledge of MS OfficeRequirements:* Excellent communications skills, proficient in the English language written and oral, must be able to legibly read and write reports* Eagerness to learn about our products* Must be able to work under pressure and meet deadlines to ensure customer commitments are met* Strong motivational and interpersonal skills* Administration skills* ReliableTravel:* Works predominately within the office* Required to visit customer from time to time* Work normal hours* Should be able to work on weekends, and holidays and overtime when needed* Position may require out of town travel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002518-YDG",iconLink:"/assets/agency_icons/3.jpg",uuid:"p1201645f-ddb2-4e89-b4c2-c05c844e9a53"},{jobTitle:"Customer Service (Internal Sales)",startDate:"2024-08-12 - 2024-09-11",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Durban",region:"KwaZulu Natal"},details:`As Customer Service you are required to attracts potential customers by answering product and service questions; suggesting information about other products and services.&nbsp; Process orders, prepare correspondences and fulfil customer needs to ensure customer satisfaction.&nbsp; The positions requires to expedite and facilitates the flow of new units within the operations to ensure that products are delivered to our clients within the agreed time frame, and per quality standardsResponsibilities:&nbsp;Customer Service for new and repair facility

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002517-D",iconLink:"/assets/agency_icons/3.jpg",uuid:"pb33ddabf-0f13-4ab4-b769-fe89b8071811"}],$={iconLink:J,title:Z,blogPosts:X},ee="govpage-public-sector",ne=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-office-of-the-premier_orig.png",href:"https://www.govpage.co.za/north-west-office-of-the-premier-vacancies-blog/north-west-office-of-the-premier-vacancies1158580",title:"NORTH WEST OFFICE OF THE PREMIER VACANCIES",content:[` 
NORTH WEST OFFICE OF THE PREMIER
2nd Floor, Ga-Rona, Building, Private Bag X129, MMABATHO
 
HUMAN RESOURCES MANAGEMENT
 
APPLICATIONS: Applications must be submitted online, or hand delivered at the Directorate of Human Resource Management, Second Floor, Ga-rona Building, Mmabatho. All attachments for online must including the Z83 and CV only be in PDF format only as one document, indicated the correct job title and the reference number of the post on the subject line of your e-mail. Use the correct e-mail address associated with the post. Failure to do so, your application will be disqualified. 
 
CLOSING DATE: 04 OCTOBER 2024 
 `,` 
 
All applications must indicate the correct reference number. The Office of the Premier is an equal employment opportunity and affirmative action employer, and it is committed to the achievement and maintenance of diversity and equity in employment, especially in respect of race, gender and disability. In terms of the employment equity plan for the Office, preference will be given to People with Disabilities, Youth, and Females for these posts. Applications must be accompanied by fully completed New Z83 form (81/971431) obtainable from any Public Service Department. Sections A, B, C and D are compulsory; Sections E, F and G do not need to be completed if a detailed CV providing the required information is attached. However, the question related to conditions that prevent re-appointment under Part F is compulsory. Applicants are not required to submit copies of qualifications and other relevant documents on application but must submit ONLY Z83 and detailed Curriculum Vitae clearly indicating positions held, period in the position and key responsibilities with three contactable referees. The communication from the HR department regarding the requirements for certified documents will be limited to shortlisted candidates. Therefore, only shortlisted candidates for the post will be required to submit certified documents on or before the day of the interview following communication from HR. Failure to submit the requested documents will result in your application not being considered. Shortlisted candidates will be subjected to practical exercise and integrity assessment. Incomplete Z83, Late and faxed applications will not be considered. Communication will be limited to shortlisted candidates only. The successful candidates for the advertised positions will be required to undergo personnel suitability checks, which includes criminal records, citizenship, financial checks, qualifications, and previous employment (Reference checks). It is the responsibility of the applicant to make sure that the South African Qualifications Authority evaluates foreign qualifications, and the evaluation certificate will be required on or before the day of the interview following communication from HR. If you do not hear from the Office, three months from the date of the advertisement consider your application unsuccessful. Shortlisted candidates for senior management posts will be subjected to a technical assessment and the selected interviewed candidates will be subjected to two-day competency assessments. SMS posts in the Public Service no appointment shall be affected without the recommended candidate producing a Certificate of completion for the Nyukela Programme (SMS Pre-Entry Programme) offered by the National School of Government which can be accessed via this link: https://www.thensg.gov.za.  
 
 
 `,` 
 
 
 
 
CHIEF DIRECTOR: GOVERNMENT INFORMATION TECHNOLOGY OFFICER
Salary : R1 436 022.00 per annum (all-inclusive package Level 14) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/11 
 
Job Purpose: To manage provincial government information technology services in the three spheres of government in the NWPG 
 
Requirements: Three-year tertiary qualification in Information Technology at NQF level 7 and/ or equivalent qualifications (NQF level and credits), technical information technology qualifications will serve as an added advantage. Ten years extensive and vast experience in Information and Communication Technology of which 5 years must have been as Chief Information Officer and/ or Government Information Technology Officer. 
 
Knowledge, Skills and Competencies: Excellent knowledge of ICT systems and ICT infrastructure with a background in designing, developing and implementing IT systems. Must be able to show a solid understanding of data analysis, budgeting and business operations. Must be able to demonstrate excellent organizational and leadership skills. Strategic Capability and leadership; People Management and Empowerment; Programme and Project Management; Financial Management Change Management; Knowledge Management; Service delivery innovation (SDI), Problem Solving and Analysis; Client Orientation and Customer Focus; Communication. 
 
Duties: The management and development of Infrastructure solutions, server and network administration; Ensure the facilitation of the implementation of and adherence to the policies and strategies as contained in the different plans, policies, etc. Development of information and technology systems infrastructure architecture and conduct investigations into the maintenance of existing technologies, availability, needs and demand of new technologies. Rationalise unnecessary duplication and redundancy of information and technologies in the department. Ensure the promotion of common solutions for common requirements across the department. Ensure the Promotion of the utilisation of technology as a key enabler for the future in delivering information and Services and promote its use in the re-engineering / transformation of government service delivery. Oversee the provision of ICT customer relations services; Ensure the Change Management of the culture of the department to embrace an enterprise-wide information management and information technology approach. The visibility, strong and continuous support of senior managers responsible for ICT customer relations. Ensuring the development and training of the members in the department in relevant information technology matters. Oversee the provision and maintenance of information technology governance, planning and risk management; Oversee the implementation of corporate governance and management of enterprise architecture. Oversee the conducting of strategic and tactical (business) planning of the Information Technology unit. 
 
Enquiries: Mr. G.P Moholo, Tel: (018) 388 3752 
 
E-Mail: ooprecruitment1@nwpg.gov.za
 
 
 
 
 
DIRECTOR: YOUTH ENTERPRISE SERVICES
Salary : R1 216 824.00 per annum (all-inclusive package Level 13) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/12 
 
Job Purpose: To manage and oversee the coordination and mainstreaming of youth development programmes in the province 
 
Requirements: Three-year tertiary qualification in Public Management & Administration, Social Sciences and/or Development Studies at NQF level 7 and /or equivalent qualifications (NQF level and credits). Minimum of 5 years’ applicable experience in the relevant field of which 6 to 7 years should be at middle management. Driver’s Licence 
 
Knowledge, Skills and Competencies: Relevant government legislation, policies and strategic frameworks; PFMA, LRA and PSA. Strategic capability and leadership, Programme and Project Management, Financial Management, Change Management, Knowledge Management, Problem Solving and Analysis, People Management and Empowerment, Client Orientation and Customer Focus and Communication. 
 
Duties: Duties: Coordinate the development of and monitoring the implementation of Provincial Youth Action Plan in line with the Provincial & National Priorities. Promote the mainstreaming of youth development in government programmes. Establishment and maintenance of partnerships with relevant stakeholders. Monitor the sector specific youth catalytic programmes and projects. Management of the Directorate’s resources. 
 
Enquiries: MS. C.N Modise Tel: 018 388 1596 
 
E-Mail: ooprecruitment2@nwpg.gov.za
 
 
 
 
 
DIRECTOR: OLDER PERSONS AND PERSONS WITH DISABILITIES 
Salary : R1 216 824.00 per annum (all-inclusive package Level 13) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/13 
 
Job Purpose: To manage and oversee the coordination and mainstreaming of Rights of Persons with Disabilities and of Older Persons in government programmes 
 
Requirements: Three-year tertiary qualification in Public Management & Administration, Social Sciences and/or Development Studies at NQF level 7 and /or equivalent qualifications (NQF level and credits). Minimum of 5 years’ applicable experience in the relevant field of which 6 to 7 years should be at middle management. Driver’s Licence 
 
Knowledge, Skills and Competencies: Relevant government legislation, policies, strategic frameworks including the relevant international and regional instruments, agreement and protocols; PFMA, LRA and PSA. Strategic capability and leadership, Programme and project management, financial management, Change management, Knowledge management, Problem solving and analysis, People Management and Empowerment, Client orientation and customer focus and Communication 
 
Duties: The coordination and development of the Provincial Action Plans for Persons with Disabilities and Older Persons in line with the Provincial & National Priorities. The mainstreaming of the rights of persons with disabilities and of older persons in government programmes. The Provincial Performance Monitoring and Evaluation of the Provincial Action Plans for Persons with Disabilities and Older Persons. Programs for the Rights of Persons with Disabilities and Older persons. Establishment and maintenance of partnerships with relevant stakeholders. Establishment and maintenance of partnerships with relevant stakeholders. Monitor the sector specific catalytic programmes and projects to older persons and persons with disabilities. Management of the Directorate’s resources 
 
Enquiries: Ms. C.N Modise Tel: (018) 388 1596 
 
E-Mail: ooprecruitment3@nwpg.gov.za
 
 
 
 
 
Director: E-Governance 
Salary : R1 216 824.00 per annum (all-inclusive package Level 13) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/14 
 
Job Purpose: To provide and maintain IT Governance, Planning, Risk and Quality Management 
 
Requirements: An appropriate tertiary qualification in Information Technology / Systems / Computer Science or equivalent at an NQF level 7 (NQF level 7 as recognised by SAQA) and COBIT certification. 6-7 years’ experience in Governance Risk and Compliance of ICT of which 5 years must be middle management experience. 
 
Knowledge, Skills and Competencies: Knowledge of ICT Governance Frameworks such as CoBIT and Corporate Governance of the ICT Policy Framework (CGICTPF), Knowledge of Enterprise Architecture Frameworks such as Government Wide Enterprise Architecture (GWEA) and the Open Group Architecture Forum (TOGAF), Knowledge management, Service delivery innovation, Knowledge of economic and social development. Strategic capability and leadership, Programme and project management, financial management, change management, Problem solving and analysis, People Management and Empowerment, Client orientation and customer focus and Communication. 
 
Duties: Implement the corporate governance of ICT and management of the enterprise architecture. Maintenance and development of IT Frameworks, policies, procedures, and standards. Monitor and report on the implementation of CGICTPF to the program manager for the North Provincial departments, and report on the Level of IT Governance capability / maturity achieved. Develop and manage the NWPG Enterprise Architecture capability. Manage the Strategic and tactical (business) planning of the Information Technology Unit and review of the Provincial IT Plan. IT Quality Management and maintenance of process standards. Develop and report on the implementation of the Post Audit IT Action Plan to the Program Manager for monitoring. Develop, manage, and maintain the IT Risk Register. Manage the engagements with IT Supplier/Vendors to establish sound relations and to monitor performance. Monitor and review the SLAs with Departments and ensure that service level meetings are conducted. Overseeing the development, implementation, and maintenance of software solutions or systems (internally developed) including SharePoint environment for the provincial departments. Manage and provide business and system analysis services to the provincial departments. Manage the development of the business functional requirements, systems specifications, business cases and user requirement specifications. Manage all aspects of the departmental IT programmes and projects against the agreed baseline (time, cost, and quality). Managing the directorate’s resources efficiently, effectively, economically and in accordance with the relevant principles and policies. 
 
Enquiries: Mr. G.P Moholo, Tel: (018) 388 3752 
 
E-Mail: ooprecruitment1@nwpg.gov.za
 
 
 
 
 `,` 
 
 
 
 
DIRECTOR: FORENSIC COORDINATION
Salary : R1 216 824.00 per annum (all-inclusive package Level 13) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/15 
 
Purpose: To strategically manage and conduct forensic coordination in the Office of the Premier 
 
Requirements: Three- year Diploma/Degree in Commerce/Law/Auditing/Forensics and/ or equivalent qualification (NQF level and Credits). 6-7 years’ experience of which five (5) years must be at middle management. 
 
Knowledge, Skills and Competencies: Knowledge of national, provincial and departmental legislation, policies and procedures. Extensive knowledge of fact-finding techniques and investigative procedures applicable to forensic Auditors/Investigators. Knowledge of fraud risk assessment and forensic audit planning techniques. Knowledge of South African Legal System. Knowledge of Inter-governmental relations. Knowledge of HR and administrative systems and processes. Knowledge of financial management prescripts and processes. Strategic capability and leadership, Programme and project management, financial management, Change management, Knowledge management, Problem solving and analysis, People Management and Empowerment, Client orientation and customer focus and Communication 
 
Duties: Manage forensic coordination strategies. Manage forensic services methodology. Marketing forensic services and role in Provincial strategic processes. Monitor case/project planning and execution. Manage the provision of reports and monitor progress in forensic coordination and performance and human resource management 
 
Enquiries: Enquiries: Mr. I Tselangoe Tel: (018) 388 4276 
 
E-Mail: ooprecruitment5@nwpg.gov.za
 
 
 
 
 
Director: Performance Monitoring and Reporting 
Salary : R1 216 824.00 per annum (all-inclusive package Level 13) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/16 
 
Purpose: To manage the Provincial Monitoring, reporting and Evaluation System 
 
Requirements: Three-year bachelor’s degree in public administration at NQF level 07 and/or equivalent qualification (NQF Level and credits). 6-7 years’ experience of which five (5) years must be at middle management within the monitoring, reporting and evaluation environment. Driver’s license 
 
Knowledge, Skills and Competencies: Knowledge of Government Legislation, Local Government prescripts, PFMA, LRA, PSA and PSR. Strategic capability and leadership skills; People Management and Empowerment skills; Programme and project management Skills; Financial Management skills; Change Management and Knowledge Management skills. Computer skills. 
 
Duties: Institutionalize performance monitoring in the province. Monitor performance reporting in the province. Monitor the implementation of infrastructure projects. Coordinate the implementation of Management Performance Assessment tool (MPAT) self-assessment and improvement. Develop and manage implementation of province wide monitoring and evaluation, frameworks, guidelines and policies, Develop M&E plan that translates PGDS/provincial priorities into measurable indicators and activities. Facilitate/coordinate reporting against provincial priorities, development indicators and Departmental and SOE APP’s, On-site verification and monitoring of interventions linked to priorities and Manage and coordinate Cluster Programs 
 
Enquiries: Mr. B.P Maboe Tel: (018) 388 4042 
 
E-Mail: ooprecruitment6@nwpg.gov.za
 
 
 
 
 
DIRECTOR: ICT INFRASTRUCTURE
Salary : R1 216 824.00 per annum (all-inclusive package Level 13) 
Centre : Mmabatho 
Ref No : NWP/OOP/2023/17 
 
Purpose: To manage the development of infrastructure solutions, Server and Network 
 
Requirements: Three-year tertiary qualification at NQF level 07 and/or equivalent qualification (NQF Level and credits) with relevant technical certifications. 5-10 years’ experience of which five (5) years must be at middle management level. 
 
Knowledge, Skills and Competencies: Strategic capability and leadership; People Management and Empowerment; Programme and project management; Financial Management; Change Management; Knowledge Management. Information management practices; Understanding of development thinking and practice; Monitoring and Evaluation systems and practices; Statistical information Practices. Leadership and monitoring, advanced computer and analytical skills, report writing, communication and facilitation skills, Project management skills. Experience in monitoring of data and information, systems and records, information analysis skills, information and computer modelling, statistical information presentation. 
 
Duties: Management, administration and support of Provincial server environment. Management and support of Provincial Network Systems. The Administration of Information Technology Security. The management of maintenance of database and administration system. The administration of storage backup environment. 
 
Enquiries: Mr. G.P Moholo, Tel: (018) 388 3752 
 
E-Mail: ooprecruitment1@nwpg.gov.za
 
 
 
 
 
SENIOR STATE LAW ADVISOR (LP09 SPECIALIST LEGISLATION AND LITIGATION)
Salary : R1 132 806 per annum (OSD all-Inclusive package) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/18 
 
Purpose: To administer and provide sound legal services in the Office of the Premier and Provincial Departments. 
 
Requirements: LLB or equivalent qualifications at NQF level 7. 5 years or more post experience in legislative drafting and litigation. Experience in Public Service and relevant prescripts, legal research and communication skills. Supervisory position held in the last five years. A valid driver’s licence. 
 
Knowledge, Skills and Competencies: Knowledge of Public Service Prescripts and legislative environment. Research and presentation skills, Communication skills both verbally and writing, ability to work independently and as part of a team. Computer literacy (MS Word, PowerPoint and Excel). Time management Skills, ability to work under pressure, travel when required and be eloquent, assertive and discipline. 
 
Duties: Drafting, editing and certification of legislation. Provide litigation support and management to Provincial Departments. Provide general legal advice on matters affecting the office and other departments. Liaise with State Attorney. Provision of legal opinion and general legal advice. The performance of monitoring and evaluation of legislation and litigation pattern by Provincial Departments.
 
Enquiries: Mr. GOB Ratshikana Tel: (018) 888 3058 
 
E-Mail: ooprecruitment8@nwpg.gov.za
 
 
 
 
 
DEPUTY DIRECTOR: INTERNAL CONTROL 
Salary : R811 560.00 per annum (all-inclusive package Level 11) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/19 
 
Purpose: To manage and facilitate the provision of Internal Control Services. 
 
Requirements: Three-year auditing tertiary qualification at NQF level 7 (NQF level and credits) as accredited by SAQA. 6-7 years’ experience of which three (3) years thereof should be at Assistant Director level as Internal Control manager. Certified internal Auditor with proof of registration / active membership with relevant professional bodies, i.e. IIA SA & Auditing experience with completed articles will serve as an added advantage. Code 8 driver’s license. 
 
Knowledge, Skills and Competencies: Knowledge of PFMA, Knowledge of Treasury Regulations, Knowledge of Internal Control Standards, Performance Information Framework, Knowledge of Public Service Regulations, Knowledge of supply chain management framework policy and any latest developments in this area. Strong business acumen, Management skills, Computer skills, Writing skills, basic accounting and Auditing skills. 
 
Duties: Develop internal control charter and internal control standards. Coordinate the development of internal control processes in all key areas, standard operating procedures and policies to ensure compliance in the Office. Coordinate the development of post audit action plans for Internal and External audit assignments. Develop and manage a loss control system. 
 
Enquiries: Ms. T.M. Mooketsi Tel: (018) 888 4277 
 
E-Mail: ooprecruitment9@nwpg.gov.za
 
 
 
 
 `,` 
 
 
 
 
DEPUTY DIRECTOR: FORENSIC COORDINATION 
Salary : R766 584.00 per annum (all-inclusive package Level 11) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/20 
 
Purpose: To provide and conduct forensic coordination in the Office of the Premier 
 
Requirements: Three- year Diploma/Degree in Commerce/Law/Auditing/Forensics and/ or equivalent qualification at NQF level 7 (NQF level and Credits). 6-7 years’ experience of which three (3) years must be at Assistant Director Level. A Valid driver’s license. 
 
Knowledge, Skills and Competencies: Knowledge of national, provincial and departmental legislation, policies and procedures. Knowledge of fact-finding techniques and investigative procedures applicable to forensic auditors/Investigators. Knowledge of fraud risk assessment and forensic audit planning techniques. Knowledge of South African Legal System. Knowledge of Inter-governmental relations. Knowledge of HR and administrative systems and processes. Knowledge of financial management prescripts and processes. Research and legal writing skills, Good Forensic and interviewing skills, Excellent communication skills (verbal and written), Good Interpersonal relations skills, Good analytical and Problem solving skills, Presentation skills, Planning organizing and people management skills, Conflict resolution skills, Good Reporting skills, Policy formulation skills and Computer literacy skills 
 
Duties: Conduct Forensic Coordination Methodology. Manage the successful investigation and prosecution of cases of fraud, theft and corruption. Conduct Coordination in the investigation of cases. Provide Reports and monitor progress in Forensic Coordination. Monitor Project Management in Forensic Investigation. Form liaison with other state law enforcement agencies in order to identify trends of fraud and corruption in the province. Coordinate prosecutions, misconduct enquiries and recovery in liaison with state law enforcement agencies. Monitor project management of forensic investigations performed by appointed service providers. Perform where required certain pre-investigation reviews establishing determined facts before a full investigation process is initiated.
 
Enquiries: Mr. I Tselangoe Tel: 018 388 4276 
 
E-Mail: ooprecruitment10@nwpg.gov.za
 
 
 
 
 
DEPUTY DIRECTOR: ORGANISATIONAL DEVELOPMENT 
Salary : R849 702.00 per annum (all-inclusive package Level 11) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/21 
 
Job Purpose: To develop Human Resource Strategies and ensure alignment of the organizational structure to the 
Departmental Strategic Plan. 
 
Requirements: Appropriate three- year tertiary qualification at NQF level 7 and / or equivalent qualification (NQF level and credits).6-7 years’ experience applicable to the relevant discipline of which 3 years should be at Assistant Director Level. 

 
Knowledge, Skills and Competencies: Knowledge of Organisational development; Form design and control; Job evaluation system; Procedure and methods study; Compilation of management report; HR planning; Prescripts; Public Service Act and Public Service Regulations. Good Communication skills; Report writing skills; Planning and Organising; Facilitation skills; Coordination Skills; Conflict resolution; Problem solving skills; Project Management; Leadership and Presentation, Ability to interpret and apply policy; Policy formulation; Analytical and innovative thinking and Research skills. 
 
Duties: The management of Organisational design services; Manage the process management and Improvement; Coordinate and facilitate the job evaluation function; Coordinate and Facilitate the assessment of functionality and capacity of the department to deliver on the mandate; Coordinate and analyse office accommodation need; The management and facilitation of the implementation of Service Delivery Programmes; Develop the operational plan in line with the strategic objectives of the sub-directorate; Management of Human Resources. Generic Objectives: Strategic Leadership; Policies and Strategies. 
 
Enquiries: Ms. M.M.Tembe Tel: Tel: (018) 388 3085 
 
E-Mail: ooprecruitment11@nwpg.gov.za
 
 
 
 
 
DEPUTY DIRECTOR: MEDIA LIAISON AND FEATURE WRITING
Salary : R849 702.00 per annum (all-inclusive package Level 11) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/22 
 
Job Purpose: To provide media liaison management support services in the Office of the Premier 
 
Requirements: Three-year tertiary qualification in communication at NQF level 7 and / or equivalent qualification (NQF level and credits). 6-7 years’ experience applicable to the relevant discipline of which 3 years should be at Assistant Director Level. 
 
Knowledge, Skills and Competencies: Knowledge of media liaison; Understanding of Government policies, procedures and programmes. Public Service Regulations and Acts; Communicators’ code of good conduct; Communication Policies and Strategies. Public Finance Management Act. Media plans formulations; Management people, project, and information; Problem solving; Writing and Editing skills; Presentation and Computer literacy. 
 
Duties: Develop Media Plans for Office of the Premier activities and coordinate their implementation. Develop content for media advisories, media releases and media statements. Coordinate the hosting of Office of the Premier media briefings. Develop content for electronic and print media advertisements. Write feature articles for the media and government publications. Maintain an updated media database. Develop content for Office of the Premier social media accounts. Monitor implementation of the Provincial social media Policy by all provincial departments and municipalities. Produce and submit monthly and quarterly performance reports. Manage staff performance and assets allocated. 
 
Enquiries: Ms. B Mohlakoana Tel: (018) 388 3705 
 
E-Mail: ooprecruitment12@nwpg.gov.za  
 
 
 
 
 
DEPUTY DIRECTOR: ICT PLANNING AND ENTERPRISE ARCHITECTURE
Salary : R849 702.00 per annum (all-inclusive package Level 11) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/23 
 
Requirements: A bachelor’s degree in information technology at NQF level 7and/ or equivalent (NQF level and credits). 6-7 years’ experience in information technology planning of which three (3) years must be at management level. 
 
Knowledge, Skills and Competencies: Enterprise Architecture frameworks, especially Togaf 9.1, COBIT 5, DPSA Prescripts, and ICT International best practices. Advanced Computer literacy in Excel, Word, Power point, Report writing skills, Problem solving skills and Interpersonal relationship skills. 
 
Duties: Development, coordinate implementation and monitoring of strategic and tactical IT plan in the Northwest Provincial Administration. The development of strategic and tactical IT plans for GITO. The development and management of an Enterprise Architecture capability for the Northwest Provincial Administration. To ensure that all the components of the organization, including business strategies, business processes, data architectures, and system architectures, are integrated, secure, and efficient. Coordinate and Consolidate reports. Management of staff. 
 
Enquiries: Ms. B.V Bantsijang Tel: (018) 388 5612 
 
E-Mail: ooprecruitment13@nwpg.gov.za  
 
 
 
 
 
DEPUTY DIRECTOR: INVESTIGATION (X 2) 
Salary : R849 702.00 per annum (all-inclusive package Level 11) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/24 
 
Job Purpose: To provide and coordinate comprehensive investigation management services in the NWPG. 
 
Requirements: - Bachelor’s degrees in LLB, Bcom, Forensic accounting, Criminal justice, or appropriate tertiary qualification at NQF level 7 and/ or equivalent qualifications (NQF level and credits). 6-7 years relevant experience of which 3 should be at Assistant Director level. Professional certification such as Certified Fraud Examiner (CFE) or equivalent will be an additional advantage. 
 
Knowledge, Skills and Competencies: Must have an extensive knowledge of Public Service prescripts., PFMA and Treasury Regulations and Knowledge of relevant legislation and regulatory frameworks, Strong analytical and problem-solving skills. Excellent written and verbal communication skills. Ability to work independently and as part of a team .High level of integrity and ethical standards. Proficiency in using investigation tools and software. Attention to detail and accuracy. Ability to handle sensitive and confidential information. Strong organizational and time management skills. Ability to work under pressure and meet deadlines. Good interpersonal, communication and presentation skills, be willing to travel extensively. Have a valid driver’s license. 
 
Duties: To conduct investigations on allegations of fraud, corruption, financial mal administration. Collect, preserve, and analyze evidence in accordance with legal and procedural requirements. Prepare detailed investigation reports and present findings to relevant authorities. Collaborate with other law enforcement agencies and other stakeholders to ensure effective resolution of cases. Provide expert testimony in disciplinary hearings and court proceedings as required. Develop and implement fraud prevention strategies and training programs. Maintain accurate records and ensure the integrity of the investigation process. Develop and maintain database management system. 
 
Enquiries: Ms. S. Mphehlo Tel: (018) 388 4039 
 
E-Mail: ooprecruitment14@nwpg.gov.za
 
 
 
 
 `,`ASSISTANT DIRECTOR: INVESTIGATION(X2) 
Salary : R444 036.00 per annum (Level 09) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/25 
 
Job Purpose: To provide and coordinate comprehensive investigation management services in the NWPG. 
 
Requirements: Bachelor’s degrees: LLB, B com, Forensic accounting, Criminal justice or appropriate tertiary qualification at NQF level 7 and/ or equivalent qualifications (NQF level and credits). 3 - 5 years’ experience applicable to the relevant discipline of which 2 years should be at supervisory level. Professional certification such as Certified Fraud Examiner (CFE) or equivalent will be additional advantage. 
 
Knowledge, Skills and Competencies: Must have knowledge of Public Service prescripts, PFMA and Treasury Regulations and knowledge of relevant legislation and regulatory frameworks. Ability to conduct awareness training. Report writing Skills. Communication skills both verbally and writing, ability to work independently and as part of a team. High level of integrity and ethical standards. Computer literacy. Time management Skills. Ability to work under pressure, be willing to travel extensively. Have a valid driver’s license. 
 
Duties: To conduct investigations on allegations of fraud, corruption, financial maladministration. Liaise with other law enforcement agencies. Compile comprehensive reports with recommendations. Monitor the implementation of the recommendations by the respective clients. Compile performance reports. Maintain accurate records and ensure the integrity of the investigation process.
 
Enquiries: Ms. S. Mphehlo Tel: (018) 388 4039 
 
E-Mail: ooprecruitment15@nwpg.gov.za
 
 
 
 
 
ASSISTANT DIRECTOR: INTERNAL CONTROL (X2) 
Salary : R444 036.00 per annum (Level 09) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/26 
 
Job Purpose: To provide Internal Control and Compliance services in the Office of The Premier. 
 
Requirements: Three-year auditing tertiary qualification at NQF level 6 (NQF level and credits). 3-5 years’ applicable experience in internal control of which 2 years must be at supervisory level. 
 
Knowledge, Skills and Competencies: Knowledge of PFMA, Knowledge of Treasury Regulations, Knowledge of Internal Control Standards, Performance Information Framework, Knowledge of Public Service Regulations, Knowledge of supply chain management framework policy and any latest developments in this area. Good Communication skills, Computer skills, writing skills, basic accounting skills and Auditing skills 
 
Duties: Monitoring the implementation of internal control standards and processes, standard operating procedures, policies, prescribed frameworks and administrative controls to ensure compliance. Manage processes to detect, prevent and report fraud allegations and losses, fruitless, wasteful, and irregular expenditure. Monitor implementation of post audit action plan for Internal and External audits assignments. Develop systems to safeguard financial and non-financial records as prescribed. 
 
Enquiries: Ms. T.M. Mooketsi Tel: (018) 888 4277 
 
E-Mail: ooprecruitment16@nwpg.gov.za
 
 
 
 
 
ASSISTANT DIRECTOR: MANAGEMENT ACCOUNTING 
Salary : R444 036.00 per annum (Level 09) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/27 
 
Job Purpose: To facilitate financial planning, monitoring and reporting process 
 
Requirements: Three-year diploma/degree in Financial Management / Public Finance / Economics at NQF level 7 or equivalent qualification in the relevant field (NQF level and credits). 3-5 years’ applicable experience to the relevant field of which 2 years must be at supervisory level. 
 
Knowledge, Skills and Competencies: Understanding and application of the following prescripts: Public Finance Management Act, Treasury Regulation, Knowledge of Public Services Act and Regulations, GRAP, Annual Financial Statement Guidelines (MCS & AMD), National Treasury Practice Notes, Provincial MTEF guidelines, Budget Circulars, Computer literacy skills in Excel, Word and PowerPoint and Reporting skills. Numeric Skills, ability of paying attention to detail, Ability to perform routine tasks, Financial Good People Skills, Problem Solving, Communication (written and verbal). 
 
Duties: Facilitate financial management policies, processes and procedure. Conduct medium- and long-term financial planning in line with the MTEF processes. Compilation of budget estimates, monthly forecasting, project planning and produce adjusted cash flow. Monitor and report on expenditure trends. Facilitate the provision revenue services. Maintain departmental budget process; Analyze and consolidate inputs received from the respective programme’s MTEF budget, adjustment estimates and rollover of funds. Identify departmental priorities and projects in terms of the annual performance plan and conduct analysis thereof. Capture MTEF budget on budget database and in BAS. Capture adjustment estimates. Conduct project plan appraisals. Prepare report required for monitoring of the departmental budget; Analyze and consolidate departmental annual cash flow projections. Analyze and consolidate departmental IYM report including variance explanations. Manage budget and expenditure misallocations. Ensure that approved shifts and virements are captured accurately in BAS, IYM and expenditure reports. Prepare budget oversight and related reports. Prepare appropriation statements as input to the financial statements. Monitor and report on project progress. Provide budgetary support service to the department; Provide departmental budgetary support, analysis, advice and guidance. Analyze and respond to budget related enquiries. Facilitate budget bilaterals and training on budget related issues. Ensure timeously development of job description and implementation of Work Plans and Personal Development Plans (PDP’s) for all the sub-ordinates. Manage daily employee performance and ensure timely Performance Assessments of all subordinates. Ensure management and safekeeping of assets in the official’s area of responsibility. 
 
Enquiries: Mr. N Rapoo Tel: (018) 888 2516 
 
E-Mail: ooprecruitment17@nwpg.gov.za
 
 
 
 
 
INFORMATION SECURITY OFFICER: ICT SECURITY
Salary : R 376 413.00 per annum (Level 08) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/28 
 
Purpose: To Implement and Administer ICT Security within the North West Provincial Government network 
 
Requirements: Three-year tertiary qualification at NQF level 6 in Information systems, Technology and computer Science or equivalent qualification (NQF and credits). 2- 4 years’ experience applicable to the relevant discipline of which 1 year should be at supervisory level. 
 
Knowledge, Skills and Competencies: Knowledge of Security Standards and ICT environment Mainframe security. Advanced computer literacy skills; Reporting Skills; Coordination; Problem Solving; Project Management; ability to interpret and apply policy; Analytical and innovative thinking; Research 
 
Duties: The Administration and Monitoring of ICT Security Policy. The monitoring of Information Security. The controlling of physical security in the Information Technology environment. The Administration and Monitoring of the security programme. 
 
Enquiries: Ms. B.V Bantsijang Tel: (018) 388 5612 
 
E-Mail: ooprecruitment18@nwpg.gov.za`,`SENIOR MAINFRAME OPERATOR
Salary : R 376 413.00 per annum (Level 08) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/29 
 
Job Purpose: To provide and monitor storage backup environment in the NWPG 
 
Requirements: Three-year appropriate tertiary qualification at NQF level 6 and/ or equivalent qualifications (NQF level and credits). 2-4 years’ experience applicable to the relevant discipline of which 1 year should be at supervisory level. 
 
Knowledge, Skills and Competencies: Knowledge of information and communication technology, Infrastructure technologies, Configurations Software requirements, Network operating systems, Memory management and integration, Knowledge of methods, tools, equipment and material used in server equipment testing, repair and maintenance. Good Communication skills, good telephone etiquette, Report writing skills, Computer skills. Problem solving skills, Project management, Leadership and presentation 
 
Duties: To render mainframe operations and storage environment. Provide salary reports and documents distribution. Rendering of system availability. Implementation of procedures to improve mainframe performance. The provision of backup and restores. 
 
Enquiries: Mr. D.S Mtotoba Tel: (018) 388 4149 
E-Mail: ooprecruitment19@nwpg.gov.za
 
 
 
 
 
PERSONAL ASSISTANT: CHIEF DIRECTOR: GITO 
Salary : R308 154.00 per annum (Level 7) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/31 
 
Job Purpose: To render a secretariat support service to Chief Director: Government Information Technology Officer. 
 
Requirements: Three-year appropriate tertiary qualification at NQF level 6 and/ or equivalent qualifications. 2-3 years’ experience applicable to the relevant discipline. 
 
Knowledge, Skills and Competencies: Knowledge of Prescripts / Policies. Knowledge of finical administration. Knowledge of computer. Good Communication skills. Good telephone etiquette. Report writing skills. Computer skills and Problem-solving skills. 
 
Duties: Provides a secretariat / receptionist support service to the manager. Render administrative support services. Provides support to manager regarding meetings. Support the manager with the administration of the manager’s budget. Keep abreast with regard to the prescripts/ policies & procedures applicable to the work terrain. 
 
Enquiries: Ms. B.V Bantsijang Tel: (018) 388 5612 
 
E-Mail: ooprecruitment21@nwpg.gov.za
 
 
 
 
 
SECRETARY: MANAGEMENT ACCOUNTING
Salary : R216 417.00 per annum (Level 5)) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/32 
 
Job Purpose: To provide secretarial services to the Director Management Accounting 
 
Requirements: Matric and 1-2-year National Higher Certificate in Office Administration/ Secretarial at NQF level 5 or equivalent qualification.0-2 year’s relevant experience in office administration and/or secretarial field. 
 
Knowledge, Skills and Competencies: Understanding of government procurement procedures, Secretarial administrative and organisational knowledge and understanding and Computer application knowledge. Administrative and organisational skills, Document management, Oral and written communication skills, Procurement of goods and services, typing, bookkeeping and filling skills and Time management. 
 
Duties: Provides Secretarial support services to the Director; Incoming mail received, recorded manually and filed within 1 day, Outgoing mail recorded, filed and dispatched within 1 day and manage the diary of the Director by updating Director’s diary every day and send email as reminder to Director. Provide clerical support services to the Director; Manage meeting logistics by sending out meeting schedules, quarterly locate and book venues within 2 weeks, send out invitations before the meeting and take minutes of meetings and distribute minutes within 1 week of meeting for input. Provide support to the Director regarding meetings, Arrange accommodation for the Director, Complete S&T claims for the Director, manage the reception area and procurement of goods and services in the Directorate 
 
Enquiries: Mr. N Rapoo Tel: (018) 888 2516 
 
E-Mail: ooprecruitment22@nwpg.gov.za
 
 
 
 
 
 
SECRETARY: PROVINCIAL COUNCIL ON AIDS 
Salary : R216 417.00 per annum (Level 5) 
Centre : Mmabatho 
Ref No : NWP/OOP/2024/33 
Job Purpose: To render secretarial support service to the Director. 
 
Requirements: 1-2 years National Higher Certificate in a relevant discipline at NQF level 5 and/ or equivalent qualifications (NQF level and credits). 0-2 years’ experience applicable to the relevant discipline 
 
Knowledge, Skills, Competencies Knowledge: Knowledge of Secretarial services, typing, reporting writing and office management and Knowledge of prescripts public service regulations and PFMA, supply chain management. Planning and organisation, Communication skills, Ability to operate computer, Ability to type and Interpersonal relations 
 
Duties: Provide a secretarial / receptionist support service to the manager; receive telephone calls and refers the calls to the correct role players if not meant for the relevant manager. Record appointments and events in the diary of the director. Type documents for the director and other staff within the unit on a word processor and Operate office equipment like fax machines and photocopiers. Provide clerical support services to the director; Attend to corporate administration functions and loading of reports. Liaise with travel agencies to make travel arrangements and make follow-ups. Arrange meetings and events for the director and staff in the unit. Scrutinize routine submission / report and take notes or recommendations to the director. Attend to corporate administrative functions and loading of report. Process travel and subsistence claims for the director. Processes all invoices that emanates from the activities of the work of the director. Records minutes of the meeting of the director. Drafts routines correspondence and reports. Receives records and distribute all incoming and outgoing documents. Handles the procurement standard items like stationary, refreshments and other activities and collect all relevant documents to enable the director to prepare for meetings. Provide support to manager regarding meetings; Scrutinizes documents to determine actions / documents / other documents required for meetings. Collect and compile all necessary documents for the manager to inform him / her on the content. Records minutes / decisions and communicate to relevant role players, follow up on progress made. Prepare briefing notes for the manager as required and coordinate logistics arrangements for meetings when required. Knowledge of the procedures and processes that apply in the office of the Director. 
 
Enquiries: MS. C.N Modise Tel: 018 388 5078 
 
E-Mail: ooprecruitment23@nwpg.gov.za`],postedDate:"10/9/2024",iframe:"",uuid:"pb93ba3a8-be35-4e5b-8af5-08b888241c14"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-economic-development-environment-conservation-and-tourism_orig.jpg",href:"https://www.govpage.co.za/north-west-department-of-economic-development-environment-conservation-and-tourism-vacancies-blog/north-west-department-of-economic-development-environment-conservation-and-tourism-vacancies8686000",title:"NORTH WEST DEPARTMENT OF ECONOMIC DEVELOPMENT, ENVIRONMENT, CONSERVATION AND TOURISM VACANCIES",content:[` 
NORTH WEST DEPARTMENT OF ECONOMIC DEVELOPMENT, ENVIRONMENT, CONSERVATION AND TOURISM
 `,`CHIEF DIRECTOR: ECONOMIC PLANNING 
Salary: R1 436 022.00 per annum (Salary level 14 All-inclusive Remuneration Package): 60% or 70% of the inclusive salary package must go into the basic salary. 
• REF: 02/DEDECT/2024/NW 
• Centre: Mahikeng 
 
Requirements: • Relevant and appropriate recognised Bachelor’s Degree NQF level 7 in the field of Business Economics or Economics • Additional Postgraduate qualification(s) in the Economics field of study will be an added advantage • Extensive experience in the field of economic development, export and investment promotion • Knowledge and understanding of the economic development sector, as well as, industry development • Experience of conducting economic development research • Minimum of five (5) years’ experience in economic development related working field at Senior Management Service (SMS) level in the Public Service or equivalent to SMS level in the Private Sector • A valid driver’s license. 
 
Competencies: • An in-depth knowledge and insight of South African economic policy, strategy and legislation applicable to economic planning • Advanced knowledge and understanding of the North West economy • Extensive knowledge of the National Development Plan (NDP), Industrial Policy Action Plan (IPAP), National Spatial Economic Development Perspective (NSDP), Provincial Growth and Development Strategy (PGDS) and extensive knowledge of Global, National and Regional Economies • A deep understanding of national, provincial economic and sector development policies, as well as, their implementation plans • Knowledge and understanding of the regulatory framework for the Public Service like the Constitution of the Republic of South Africa, Public Service Act, Knowledge of the Public Finance Management Act (PFMA) and the Public Service legislative framework broadly • Treasury Regulations, Public Service Regulations, Basic Conditions of Employment Act, Occupational Health and Safety Act, Labour Relations Act • Good stakeholder coordination and engagement, sound research, knowledge management, and strategic, leadership, problem solving, analysis and empowerment capabilities • Knowledge and understanding of the Public Sector Employee Performance, Management and Development System, knowledge of Security Management Act, Bill of Rights, Community Outreach, and Public participation • Knowledge of monitoring and implementation of Government Programmes and proper co-ordination across National, Provincial and local government spheres • Ability to communicate at all levels with relevant stakeholders including: Provincial Departments, Senior Management, Private Sector Organisations, Media, International Organisations and the General Public • Candidate must demonstrate excellent skills in: Business planning, Economic Modelling, strategy development, financial management, computer literacy, policy and research, Programme and Project management, report writing and presentations. 
 
Duties: • Perform functions as a Chief Economist • Develop and implement interventions and strategies to stimulate economic growth and development through industry development, trade and investment promotion • Facilitate and co-ordinate the development of the major Provincial economic sectors (agro processing, manufacturing, mining beneficiation, tourism and green economy) • Facilitate the support of industries in order to contribute to the acceleration of economic growth rate • Address the millennium development goals, national and provincial goals of job creation and the constitutional mandate • Facilitate and undertake research that will inform the development and review of economic development plans, policies and strategies in alignment with national and provincial priorities • Conduct research and feasibility studies on prospective projects in terms of, inter alia, technical, socio-economic, environmental and financial management and market processes to aid decision-making about the type of project support and links to sector development • Manage the implementation of broad economic strategies and other imperative initiatives to transform the provincial economy e.g. Special Economic Zones (SEZ), Black industrialists and Industrial parks • Develop and implement key economic sectors strategies that influence provincial economy growth and development • Facilitate and manage creation of an enabling environment for key Provincial industries that have the potential to significantly contribute to job creation, skills development, establishment and growth of small medium and large business and support BBBEE through rural and township economy within the four districts of the Province • To enhance the competitiveness of the province’s priority economic sectors and ensure that they can compete within a global, continental and international scale • Manage strategic projects and partnership/service level agreements with key stakeholders in provincial prioritised economic sectors and ensure that are successful completed within budgetary timelines and performance requirements • Manage the performance of the Chief Directorate. 
 
Enquiries: Mr. M. R. S. Senqhi, Tel. (018) 388 5920/5921 
 
 
 
 
DIRECTOR: ECONOMIC PLANNING 
Salary: R1 216 824.00 per annum (Salary level 13 All-inclusive Remuneration Package): 60% or 70% of the inclusive salary package must go into the basic salary. 
• REF: 03/DEDECT/2024/NW 
• Centre: Mafikeng 
 
Requirements: • An appropriate Bachelors’ Degree in Economics/Planning/Public Policy Management/Development Studies or related field of study • Post-Graduate qualifications in Economics or related field of study will serve as an added advantage • A minimum of 5 years’ relevant managerial experience at Deputy Director level in the relevant field • Must be in possession of a valid driver’s license. 
 
Competencies: • An in-depth knowledge and insight of South African economic policy, strategy and legislation applicable to economic planning • Advanced knowledge and understanding of the North West economy Extensive knowledge of the National Development Plan (NDP), Industrial Policy Action Plan (IPAP), National Spatial Economic Development Perspective (NSDP), Provincial Growth and Development Strategy (PGDS) and extensive knowledge of Global, National and Regional Economies • A deep understanding of national, provincial economic and sector development policies, as well as, their implementation plans • Knowledge and understanding of the regulatory framework for the Public Service like the Constitution of the Republic of South Africa, Public Service Act, Public Finance Management Act (PFMA), Treasury Regulations, Public Service Regulations, Basic Conditions of Employment Act, Occupational Health and Safety Act, Labour Relations Act • Good stakeholder coordination and engagement, sound research, knowledge management, and strategic, leadership, problem solving, analysis and empowerment capabilities • Knowledge and understanding of the Public Sector Employee Performance, Management and Development System, knowledge of Security Management Act, Bill of Rights, Community Outreach, and Public participation • Knowledge of monitoring and implementation of Government Programmes and proper coordination across National, Provincial and local government spheres • Ability to communicate at all levels with relevant stakeholders including: Provincial Departments, Senior Management, Private Sector Organisations, Media, International Organisations and the General Public • Candidate must demonstrate excellent skills in: Business planning, Economic Modelling, strategy development, financial management, computer literacy, policy and research, Programme and Project management, report writing and presentations. 
 
Duties: • Provide guidance and leadership in economic research and development in the North West Province • Facilitate the development of Provincial Economic policy and strategies • Facilitate and co-ordinate the development and implementation of effective knowledge management systems in the Department • Coordinate the development and implementation of policies • Provide a strategic direction in the institutionalisation of District Operations Management Functions • Co-ordinate and develop Annual Performance and Operational Plans of the Directorate • Co-ordinate the planning and implementation of strategies and policies aimed at improving service delivery • Provide oversight into economic planning at district operations • Oversee the management of human and financial resources of the Directorate • Facilitate the team participation in District Operations, Implement change management to improve the performance of the Directorate • Plan and report to various stakeholders amongst others Legislature Committees, Audit and Risk Management Committees of the Department • Co-ordinate and report on all Directorate programmes and projects. 
 
Enquiries: Mr. M. R. S. Senqhi, Tel. (018) 388 5920/5921 
 
 
 
 
 
DIRECTOR: STRATEGIC PLANNING, MONITORING, EVALUATION AND TRANSFORMATION 
Salary: R1 216 824.00 per annum (Salary level 13 All-inclusive Remuneration Package): 60% or 70% of the inclusive salary package must go into the basic salary. 
• REF: 04/DEDECT/2024/NW 
• Centre: Mafikeng 
 
Requirements: • A Bachelor’s degree (NQF level 7) in Public Administration/Public Management or related Bachelor’s degree • Post graduate qualifications on these fields will be advantageous • Minimum of 5 years’ relevant experience in middle management position • Proven experience in the development of procedures for data collection and analysis • Knowledge and experience in monitoring and evaluation tools and systems • Must be in possession of a valid driver’s licence. 
 
Competencies: • Knowledge of the Public Finance Management Act (PFMA) • Knowledge of National and Provincial trends/priorities • Knowledge of the Medium Term Strategic Framework • Extensive knowledge of the Public Service Act and Public Service Regulations and the Public service legislature framework broadly • Knowledge on the development of Government policies • Problem solving; communication; writing; analytical; facilitation; presentation and project management skills • Knowledge in Stakeholder and Relationship management • Knowledge and understanding of Government planning processes and cycle as well as National Treasury Regulations • Knowledge Guidelines and Frameworks on strategic planning and management of performance information • Understanding of the audit processes and how they relate to planning and reporting compliance and improvement • Ability to network and undertake rapid analysis in order to strengthen and deepen operational and institutional planning at departmental level with National and Provincial counterparts and entities, quality assurance is critical in the development of plans and reports • Computer literacy (MS Word, Excel, Outlook and PowerPoint). 
 
Duties: • Provide leadership in the development and review of the Strategic Plan • Annual Performance Plan and Operational Plans of the Department • Facilitate approval and tabling of the Strategic Plan and Annual Performance Plan • Manage and co-ordinate strategic planning services • Manage and coordinate the performance, monitoring, evaluation and reporting processes within the Department • Manage the design and implementation of change management initiatives • Facilitate the development and implementation of service delivery improvement plans and initiatives • Facilitate the implementation of diversity management programmes • Manage all the performance planning and performance reporting activities of the Department. 
 
Enquiries: Mr. M. R. S. Senqhi, Tel. (018) 388 5920/5921 
 
 
 
DIRECTOR: ENTITY OVERSIGHT AND INTERFACE
Salary: R1 216 824.00 per annum (Salary level 13 All-inclusive Remuneration Package): 60% or 70% of the inclusive salary package must go into the basic salary. 
• REF: 05/DEDECT/2024/NW 
• Centre: Mafikeng 
 
Requirements: • A Bachelor’s degree (NQF Level 7) in Business Management/Public Management/ Accounting/Finance/Economics • Post-graduate qualifications on these fields will be advantageous • Minimum 5 years’ relevant work experience in a middle management position • Practical exposure to corporate governance processes and government planning and reporting mechanisms • Must be in possession of a valid driver’s licence. 
 
Competencies: • Extensive knowledge of the Public Finance Management Act (PFMA) and the Public Service Legislative Framework broadly • Extensive knowledge of the Public Service Act and Public Service Regulations • Knowledge on the development of Government policies • Problem solving • Communication • Writing • Analytical • Facilitation • Presentation and project management skills • Knowledge in Stakeholder and relationship management • Computer literacy. 
 
Duties: • Review of the Corporate Governance • Implement the Public Finance Management Act • Review established governance structures in Public Entities and implement systems to deliver the required outputs • Initiate trends for good governance practices in the Public Entities • Advise the Executive Authority on governance matters relating to Public Entities. Facilitate the conclusion and signing of shareholder compact/ SLA between Executive Authority and Entities and monitor the implementation process • Provide Public Entity’s governance and regulatory compliance framework shareholder oversight support • Co-ordinate the appointment of members of the public entity’s board • Financial Analysis and reporting: Evaluate Strategic Plans/Annual Performance Plans and establish indicators for Public Entities reporting to the Executive Authority • Frequent analysis of Public Entities quarterly reports and their expenditure trends • Monitor financial management and performance in public entities in terms of PFMA and Treasury Regulation • Review of Annual Reports of Public Entities reporting to the Executive Authority • Oversee and monitor the performance of entities in line with the set objectives and programmes • Co-ordinate the process for amendment, approval and tabling of the strategic plans, annual performance plans and annual reports • Budget Analysis, review of annual budget/grant allocations: Review and assess Public Entities Medium Term Expenditure Framework and budget allocations and make recommendations • Review, research, analysis of fiscal implications and engagements and submissions on public entities legislation, regulation, policy proposals, and service delivery trends • Prepare submissions and engage the Chief Financial Officer (CFO) on short falls and financial improvement of the Public Entities • Internal and external communication: Facilitate stakeholder interface, including meetings between the department and public entity as well meeting between the Executive Authority and the Board • Engage internal and external Public Entities for stakeholder liaison in order to obtain information, inputs and recommendations • Provide advice to Head of Department (HoD) and Executive Authority relating to Executive Council, Portfolio Committee and Legislature correspondence pertaining to Public Entities. 

 
Enquiries: Mr. M. R. S. Senqhi, Tel. (018) 388 5920/5921 
 
 
Directions to Applicants: 
The North West Department of Economic Development, Conservation, Tourism and Environment is an Equal Opportunity, Affirmative Action Employer and is committed to the achievement and maintenance of diversity and equity in employment, especially in respect of race, gender and disability. White males and females are encouraged to apply. 
 
GENERAL NOTES: Applications must be submitted on a newly prescribed Z83 Form, obtainable from any Public Service Department, which must be signed and dated (an unsigned and not dated Z83 form will disqualify an application) and must be accompanied by a recently up-dated, comprehensive CV, including the details of at least three contactable referees (should be people who recently worked with the applicant). Non-RSA Citizens/ Permanent Resident Permit Holders must attach a copy of their Permanent Residence Permits to their applications. Should you be in possession of a foreign qualification, it must be accompanied by an evaluation certificate from the South African Qualifications Authority (SAQA). 
 
It is the applicant’s responsibility to have foreign qualifications evaluated by the South African Qualification Authority (SAQA). Failure to submit all the requested documents will result in the application not being considered. Correspondence will be limited to short-listed candidates only. If you have not been contacted within six (6) months after the closing date of this advertisement, please accept that your application was unsuccessful. Suitable candidates will be subjected to personnel suitability checks (criminal record check, citizenship verification, financial/asset record check, qualification/study verification and previous employment verification). 
 
Successful candidates will also be subjected to security clearance processes. The Department reserves the right not to make appointment(s) to the advertised post(s).No faxed, e-mailed and late applications will be considered. All shortlisted candidates for SMS posts will be subjected to a technical exercise that intends to test relevant technical elements of the job, the logistics of which will be communicated by the department. Following the interview and technical exercise, the Selection committee will recommend candidates to attend a generic managerial competency assessment (in compliance with DPSA Directive on the implementation of competency-based assessments). The competency assessment will be testing generic managerial competencies using the Service Providers mandated by the DPSA. Successful completion of the Nyukela Public Service (SMS Pre-Entry Certificate) is required prior to finalisation of an appointment into any SMS posts. For more details on the pre-entry course visit: https://www.thensq.gov.za/training-course/sms-pre-entry-programme.
 
APPLICATIONS: Completed application forms and the Comprehensive CV quoting the relevant reference number, may either be hand-delivered to Department of Economic Development, Environment, Conservation and Tourism, NWDC Building, Cnr University Drive and Provident Street, Mmabatho, 2735`,` 
 
 
 
 
HEAD OF DEPARTMENT (HOD): 
DEPARTMENT OF ECONOMIC DEVELOPMENT, ENVIRONMENT, CONSERVATION AND TOURISM (DEDECT) 
(5-year fixed term contract) (SL 15) 
Re-Advertisement
Salary: R 1 741 770.00 per annum (All-inclusive remuneration package consists of a basic salary, the State’s contribution to the Government Employee’s Pension Fund and a flexible portion that may be structured i.r.o. the applicable rules) plus non-pensionable Head of Department’s allowance equal to 10% of the all-inclusive remuneration package. 
•Ref. No. NWP/OOP/2024/13 
•Centre: Mmabatho 
 
Requirements: •An appropriate Bachelor’s degree (NQF level 7) and a post-graduate qualification (NQF 8) as recognised by SAQA. •A minimum of eight (8) years’ experience at Senior Managerial Level of which at least three (3) must be with an organ of state •The office reserves the right to introduce other objective requirement/s should a need arise. • Applicants who do not possess (SMS) Pre-entry Certificate shall be considered for shortlisting and interviews, but the successful candidate shall not be appointed before successfully obtaining the certificate (SMS Pre-Entry/Programme) offered by the National School of Government • Information can be accessed via this link:  https://www.thensg.gov.za/training-course/sms-pre-entry-programme.
 
Core management competencies: • Strategic capability and leadership skills • Client Orientation and Customer Focus. • Financial Management • People Management and Empowerment • Communication • Project and Programme Management. • Change Management, Knowledge Management and Service Delivery, Client Orientation and Customer Focus, Problem-Solving and Analysis, Knowledge of MS Word, MS Excel and MS PowerPoint. 
 
Duties: •Provide effective, efficient management and administration in the Department. Provide strategic direction and leadership to the Department • Ensure effective utilisation and training of staff • Maintain sound labour relations and discipline of staff • Ensure proper use, care and maintenance of state assets and resources • Render sound financial management in the Department, including serving as an Accounting Officer of the Department • Implement all laws and policies applicable to the Department, any other function that may in law be entrusted, assigned, or delegated to an Accounting Officer and or Head of Department. 
 
NOTE: Applicants who previously applied for this post are encouraged to re-apply. 
 
Enquiries: B. Malwane, tel. (018) 388 3710 and 083 628 5501 
 
 
General Instructions: 
The Office is an equal opportunity, affirmative action employer. It is our intention to promote gender and disability in the HoD echelons through the filling of this post. Candidates whose transfer/promotion/appointment will promote aforementioned will receive preference. The Department reserves the right not to make any appointments to the advertised posts. 
 
The Applicant must fully complete all fields on the New Amended Z83 Form (81/971431) as prescribed with effect from 01 January 2021, which must be signed, initialled on every page. The new Z83 Form obtainable from any Public Service Department or on the Department of Public Service and Administration (DPSA) website link: http://www.dpsa.gov.za/newsroom/psvc/ and must be accompanied by a recently updated and Comprehensive/Detailed Curriculum Vitae with competencies and experience, including three (3) names of contactable referees. Applicants are not required to submit copies of qualifications and other relevant documents on application. The communication from the HR department regarding the requirements for certified documents will be limited to shortlisted candidates. Therefore only shortlisted candidates for the post will be required to submit certified documents on or before the day of the interview following communication from HR. Failure to submit the requested documents will result in your application not being considered. Shortlisted candidates for senior management posts will be subjected to a technical assessment and the selected interviewed candidates will be subjected to a two-day competency assessment. 
 
Please note: It is a responsibility of a person in possession of a foreign qualification to furnish the Department with an evaluation certificate from South African Qualifications Authority (SAQA). Applications with incorrect information and/or those received after the closing date indicated below will, as a rule, not be accepted. Due to the large number of applications we envisage to receive, applications will not be acknowledged. You may, however, contact the relevant enquiry persons to confirm if your application has been received. If you do not receive any response from us within 90 days of the closing date, please accept that your application was unsuccessful. 
 
Applications must be forwarded for attention: The Director-General, Office of the Premier, Private Bag X129, Mmabatho, 2735 or hand delivered at the Directorate of Human Resource Practices and Administration, Ground Floor, Ga-rona Building or can be emailed to recruitment3@nwpg.gov.za
 
Closing date: 27 September 2024 
(Applications must have reached the Office by 16h30 pm on the closing date, otherwise they will not be considered).`],postedDate:"10/9/2024",iframe:"",uuid:"p3732c7c5-7a50-47ea-bf9d-802b029d1f5a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ccma_orig.jpg",href:"https://www.govpage.co.za/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies-blog/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies9069209",title:"COMMISSION FOR CONCILIATION, MEDIATION AND ARBITRATION (CCMA) VACANCIES",content:[` 
COMMISSION FOR CONCILIATION, MEDIATION AND ARBITRATION (CCMA)
 `,` 
 
 
SENIOR INTERNAL AUDITOR – NATIONAL OFFICE
Ref: SIA09-24
Post level: P07
The Internal Audit department has a vacancy for a Senior Internal Auditor at the National Office.
 
Purpose
To plan, execute and report on audits as per the Annual Audit Plan to determine whether the business unit / departmental activities are in compliance with CCMA’s policies and procedures, CCMA objectives and applicable legislations.  To supervise the Internal Auditors to ensure that audits are carried out as per the Annual Audit Plan.
 
Key Performance Areas: –
Audit Planning
Audit Execution
Audit Reporting
Customer Feedback Coordination
General Audit Support
Team Supervision
 
Key Requirements:
B Com / National Diploma in Internal Auditing or Equivalent
Minimum 5 years’ experience in Internal Auditing
Knowledge of executing Annual Financial Statements and Strategic Audits
Member of Institute of Internal Auditors
Must be studying towards or have Certified Internal Auditor (CIA) certification. CA will be advantageous.
Internal Auditing technical and behavioural training
Knowledge of Barnowl Audit Software`,` 


NOTE FOR ALL APPLICANTS:    
Strictly apply via the link provided: https://forms.office.com/r/CwGCNabYaM
In your online application for appointment, kindly ensure that you disclose all relevant material information to assist the panel in considering your application.
Detailed CV, copies of qualifications, driver’s license & ID document must be uploaded. Failure to complete the online form in full or not provide relevant information will automatically disqualify your application.

*Only One (1) online application should be submitted.
No emailed or hand-delivered applications will be accepted. Non-adherence to the stated procedures in applying as well as incomplete application will result in the disqualification of the application.
 
Closing date: 16 September 2024
 
N.B Incomplete and late applications will automatically be disqualified.
 
If we have not responded within a Month from the closing date, you should regard your application as unsuccessful. Correspondence will only be entered into with short-listed candidates. The CCMA reserves the right not to make an appointment. It is the intention of the CCMA to promote representivity in respect of race, gender and disability through the filling of the posts. Preference will be given to candidate from the designated groups.
 
People with disabilities are encouraged to apply.`],postedDate:"10/9/2024",iframe:"",uuid:"pc1847395-8b90-4455-b417-352d279f6198"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/nemisa_orig.jpg",href:"https://www.govpage.co.za/national-electronic-media-institute-of-south-africa-nemisa-vacancies-blog/national-electronic-media-institute-of-south-africa-nemisa-vacancies2080761",title:"NATIONAL ELECTRONIC MEDIA INSTITUTE OF SOUTH AFRICA (NEMISA) VACANCIES",content:[` 
NATIONAL ELECTRONIC MEDIA INSTITUTE OF SOUTH AFRICA (NEMISA)
 `,` 
TEMPORARY HUMAN RESOURCES OFFICER (THREE MONTHS)
 `,` 
RECEPTIONIST (NON-PERMANENT) – 3 MONTHS CONTRACT
 `],postedDate:"10/9/2024",iframe:"",uuid:"p690f1593-7d35-4e62-a97d-784aaef04fff"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/nhls_orig.png",href:"https://www.govpage.co.za/national-health-laboratory-services-nhls-vacancies-blog/national-health-laboratory-services-nhls-vacancies1424356",title:"NATIONAL HEALTH LABORATORY SERVICES (NHLS) VACANCIES",content:[],postedDate:"10/9/2024",iframe:null,uuid:"pb0460526-d81c-42b9-a085-f91062b1b630"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/ports-reglator-of-south-africa_orig.jpg",href:"https://www.govpage.co.za/ports-regulator-of-south-africa-vacancies-blog/ports-regulator-of-south-africa-vacancies1131757",title:"PORTS REGULATOR OF SOUTH AFRICA VACANCIES",content:[` 
PORTS REGULATOR OF SOUTH AFRICA
 `,` 
SPECIALIST: ECONOMIC REGULATION
 `,` 
SPECIALIST: MONITORING AND COMPLIANCE
 `],postedDate:"10/9/2024",iframe:"",uuid:"pe118fcc7-bf24-418b-807a-194c23dae224"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/psira_orig.jpg",href:"https://www.govpage.co.za/private-security-industry-regulatory-authority-psira-vacancies-blog/private-security-industry-regulatory-authority-psira-vacancies8193362",title:"PRIVATE SECURITY INDUSTRY REGULATORY AUTHORITY (PSIRA) VACANCIES",content:[` 
PRIVATE SECURITY INDUSTRY REGULATORY AUTHORITY (PSIRA)
 
The Private Security Industry Regulatory Authority (PSiRA) with its head office in Eco Park - Centurion is the statutory body regulating the private security industry in South Africa. PSiRA is looking for dynamic experienced and suitably qualified professionals to take up these challenging positions. It is the intention of the Authority to promote representative through the filling of these positions.
 `,` 
 
COMMITTEES COORDINATOR
Salary: R 724 287 basic salary P/A plus benefits (Centurion)
 
Requirements: Recognised Degree/ National Diploma in Law and/or corporate governance qualification coupled with at least 3 years’ experience working with Board/Council Committees ● CIS qualification or registration for same will be an added advantage. 
 
Essential criteria: Interpretation of statutes ● Ability to work under pressure ● Document Control or Record Management● Client & service orientated ● Excellent verbal and written communication skills (to all levels & personalities) ● Excellent people/interpersonal skills (incl. diplomacy & problem solving) ● Advanced computer literacy in MS Office packages - Word, Excel, PowerPoint. ● Excellent planning and organising skills ● Excellent reporting skills ● Strong analytical and problem-solving skills ● Excellent negotiation skills ● Supervisory skills ● Advanced writing skills. 
 
Key Performance Areas: Provide Council Committees support as per King Report on Corporate Governance: Provide secretariat, legal and administrative support to Council Committees to ensure their effective and efficient functioning ● Schedule and administer arrangements for Council Committee meetings, circulate meeting agendas, and preparation and compilation of Committee meeting packs ● Assist with the coordination and facilitation of induction of new committee members and governance developmental training ● Attend the Council committees meetings in order to ensure that the legal requirements are fulfilled and decisions are legally sound and rational, accurate records, minutes are kept and provide such advice and information as is necessary ● Governance and Statutory Responsibilities: Ensure that the Council committees’ charters and terms of reference are kept up to date ● Ensure that the minutes of the Council Subcommittees are signed and kept safe ● Ensure proper record keeping, including disclosures of interests and performance assessments of Committees and individual members ● Administrative Responsibilities: Provide administrative support to Committee Chairpersons including, amongst others document sourcing and/or preparation, document delivery and collection and arrange meetings, travel, and accommodation logistics ● Maintain and update Committees’ membership records as and when required, and monitor the filing, security and availability of the Committees’ records ● Preparation and circulation of Committee meeting agenda packs, action lists and minutes ● Communicate Committee decisions and requests to relevant staff, and monitor and report on the implementation of decisions ● Assist with the preparation of Committee reports as may be required ● Receive, process and ensure payment of Committee members’ claims for meetings and travel, and update members’ payment records; and Maintain in-house documents in accordance with the existing practices.
 
CLOSING DATE: 17 SEPTEMBER 2024
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
SUPPLY CHAIN MANAGEMENT SPECIALIST
All-Inclusive package of R 1 111 724 per annum (Centurion)
 
Requirements: Degree/National Diploma in Supply Chain Management/Logistics or Finance coupled with 5 to 6 years’ experience in Supply Chain Management environment, of which two (2) years should be at Team Leader/Supervisor level ●Recognition of Prior Learning (RPL) and applicable knowledge and experience on the Job may be considered during the selection process. 
 
Essential Criteria: The Constitution, PFMA, PPPFA, Treasury regulations as well as general understanding of BBBEE Act requirement in line with procurement compliance ●Comprehensive knowledge and understanding of SCM best practices. Comprehensive understanding of legislation/prescripts. 
 
Key Performance Areas: Project Management: Demonstrable capability of leading and driving project-based exercises to completion● Procurement and demand plan management: Conducts in-depth market research and analysis of historical expenditure all procurement related activities● Lead the pivotal operations of driving cost-effective procurement practices, fostering supplier relationships, and ensures supply chain integrity● Align procurement plan with project plans to enable execution in line with appropriate procurement strategies and approvals● Liaise with suppliers and provide support as required to all stakeholders during the project life cycle● Facilitate of negotiations process with potential service providers to ensure value for money in obtained in procurement process● Monitor commodity markets, pricing trends, and supply availability● Reporting on other methods of procurement ●Travel Management: Execution of travel related processes and procedures by facilitating day-to-day arrangements for all travel related activities, including flight arrangements, visa applications, vendor negotiations and contracts ● Contract Management: Provide oversight of the contract management process, as well as the development of specific standards for bidding and submission, contract negotiation, and document management● Ensuring that suppliers deliver against contractual SLAs and requirements of business units in achieving objectives● Managing escalations/disputes between Suppliers and Business users ● Supplier Development: Manage supplier relationships, including research, vetting, and performance evaluation ● On-board new clients with efficient sourcing, purchasing, and management of goods and services that meet the company's requirements and standards● Manages data, business partnerships and project opportunities required to meet metrics for success● Cultivate and manage relationships with suppliers and logistics companies to negotiate contracts and terms that benefit the organisation● Identify cost-saving opportunities while maintaining quality standards and ensuring timely delivery● Evaluate supplier performance and implement improvements or changes as necessary● Employee management: ? Lead, develop, and manage the human capital and ensure sound financial management of the unit.
 
CLOSING DATE: 17 SEPTEMBER 2024
 
PLEASE APPLY HERE
 
 
 
 
 `,`ACCOUNTANT: FINANCIAL REPORTING & ASSETS MANAGEMENT 

Salary: R 724 287 basic salary P/A plus benefits (Centurion)
 
Requirements: Degree or National Diploma in Accounting coupled with 5 to 6 years’ experience in the Accounting or Finance environment, of which two (2) years should be at the Team Leader or Supervisor level● Recognition of Prior Learning (RPL) and applicable knowledge and experience on the job may be considered during the selection process. 
 
Essential Criteria: ● Strong understanding of GRAP and PFMA regulations and their application in financial reporting● Proficiency in processing journal entries, managing accruals, trade payables, and preparing financial reconciliations ●Excellent attention to detail, with strong analytical and problem-solving skills ● Good communication skills, both verbal and written, with the ability to effectively interact with team members and other departments ● Ability to manage multiple tasks and meet deadlines in a fast-paced environment● Experience in document management and compliance with regulatory standards. 
 
Key Performance Areas: Assist in the preparation of financial statements, ensuring compliance with GRAP and PFMA ● Identify and resolve discrepancies in financial records, ensuring accuracy and reliability of financial information ● Process accruals for suppliers and manage the journal entries after approval from the Manager: Reporting & Assets Management ●Handle the processing of all recurring monthly journals, as well as the preparation of year-end and reallocation journals ● Manage and maintain accurate records of fixed assets, including acquisitions, disposals, and depreciation ●Conduct periodic analysis of asset data to identify and rectify discrepancies or irregularities ● Support the implementation of asset management policies and ensure that assets are properly accounted for according to Accounting standards ● Ensure all financial processes and records comply with auditing standards and regulatory requirements● Participate in the reconciliation of Balance Sheet accounts, ensuring accuracy and completeness ● Maintain process compliance by ensuring that all financial operations align with internal controls and policies ● Prepare and manage documentation for audits, ensuring timely and accurate submission of reports ● Assist in the resolution of audit queries, providing necessary information and documentation to internal and external auditors ● Support team productivity by ensuring timely completion of tasks and adherence to performance metrics ●Foster positive relationships with internal stakeholders by delivering high-quality financial reports and addressing queries promptly.
 
CLOSING DATE: 17 SEPTEMBER 2024
 
PLEASE APPLY HERE`,`MANAGER: FINANCIAL REPORTING & ASSET MANAGEMENT 
All-inclusive package of R 1 111 724 per annum (Centurion)
 
Requirements: Degree or National Diploma in Accounting or Management Accounting, coupled with 6 to 8 years of experience in financial reporting and asset management within a large to medium-sized organizational environment (preferably in the public sector) of which two (02) years should be at the Team Leader or Supervisor level● Recognition of Prior Learning (RPL) and relevant knowledge and experience on the job may be considered during the selection process● Articles or professional accounting qualifications would be an added advantage. 
 
Essential Criteria: In-depth knowledge of GRAP/IFRS, King III/IV, PFMA, National Treasury Regulations, and the Preferential Procurement Policy Framework Act ●High proficiency with spreadsheet and accounting software programs ●Strong analytical and problem-solving skills, with the ability to conduct root cause analysis and identify opportunities for improvement ● Excellent verbal, written, and interpersonal communication skills ●Proven ability to lead and develop a finance team, with a focus on achieving accuracy, efficiency, and compliance. 
 
Key Performance Areas: Finance and bookkeeping: Coordinate the management of the trial balance to ensure that all items are correctly allocated● Preparation of the annual financial statements● Implementation of systems of internal controls ●Manage the asset life cycle and ensure adherence to budget provisions in liaison with the respective stakeholders● Review insurance and public liability claims, consolidate and present findings and trends to the Senior Manager ●Establish and maintain robust internal controls to safeguard company assets and ensure accurate financial reporting● Ensure that assets are accurately accounted for in accordance with the applicable GRAP accounting standards● Coordinating the preparation and submission of financial reports according to treasury regulations and guidelines ● Participate in the audit process to ensure that PSiRA receives an unqualified audit report● Ensure that internal and external audit queries are resolved timely and that information is provided ● Ability to promote teamwork ●Ability to take key decisions in complex situations and stand by decision/s taken.
 
CLOSING DATE: 17 SEPTEMBER 2024
 
PLEASE APPLY HERE`],postedDate:"10/9/2024",iframe:"",uuid:"p48351bcf-a9a1-45cb-a68f-a0e6869841b9"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/quality-council-for-trades-occupations-qcto_orig.png",href:"https://www.govpage.co.za/quality-council-for-trades-occupations-qcto-vacancies-blog/quality-council-for-trades-occupations-qcto-vacancies4467529",title:"QUALITY COUNCIL FOR TRADES & OCCUPATIONS (QCTO) VACANCIES",content:[` 
QUALITY COUNCIL FOR TRADES & OCCUPATIONS (QCTO)
 

A UNIQUE OPPORTUNITY TO CONTRIBUTE TO NATION BUILDING

The vision of the Quality Council for Trades and Occupations (QCTO) is to qualify a skilled and capable workforce.


The QCTO is a Council established under the Skills Development Act for standards generation and quality assurance for all occupational qualifications.
 `,`The QCTO is looking for a highly motivated, competent, and professional individual to fill the following position:
 
SYSTEMS DEVELOPER
Salary Level
R1,003,890.00 - R1,182,534.00
Location
Pretoria - GP ZA (Primary)
 
Job Description
A position exists at the QCTO for a Software Developer to build a software system to automate handling Learner information and results, NLRD uploads for historically registered qualifications, and other development work as assigned.
 
Key functions:
Maintain and improve the performance of existing software
Design, develop new systems and update software database
Recommend improvements to existing software programs as necessary
Develop, maintain and run complex update procedures on databases from external sources
Develop, maintain and run complex extract procedures on databases and existing applications(MIS) to provide to users
Maintain Participate in the design of complex, high-quality applications and relational database
Develop applications and components
Knowledge of Software Integration
Provide user support and technical consulting on QCTO’s Projects
Participate in gathering and analysis of user requirements
Test and maintain complex software applications to ensure robust functionality and optimisation
 
Job Requirements
Requirements:
A recognised three (3) year Degree in Computer Science, Information Technology or related field (minimum NQF Level 7) registered with occupational qualifications sub-framework (SAQA).
At least 6 years’ experience in programming with a primary emphasis on C#
Relevant working experience with C#, ASP.NET, MVC, JavaScript, SharePoint
Experience working with relational databases such as MSSQL or Oracle and a good working knowledge of SQL
Experience in the Power Suite (PowerApps/Automate/BI) or willingness to undergo training is strongly recommended.
Experience in mobile platform development will be an added advantage
 
Knowledge in:
Must have knowledge of Public Service and QCTO mandates and strategies. Relevant government legislation, QCTO business strategies and goals.
QCTO business processes and value chain.
System development, design principles, functionality and security management.
Technology infrastructure networking. User needs analysis, requirements, testing and work process automation.
 
Skills required:
Must have skills in Project and programme management.
Technology-related change management.
Budgeting and financial management.
Problem solving and analysis.
 Communication, Stakeholder engagement and management.
Software performance.
Database performance.
 Network design.
 Vendor relationships
Good communication
 Presentation, analytical, planning, organising, problem-solving, customer interaction.
Ability to work independently and multi-task effectively.
A dynamic, energetic, self-starter, innovative and results-driven team player.
Ability to train people, demonstrated understanding of projects from the perspective of both client and business.
Ability to work under pressure and meet deadlines.
Willingness to work long hours.
Ability to remain abreast of trends and developments in web accessibility technologies.`,`Closing Date: 27/9/2024
 
QCTO is an equal opportunity employer committed to the principles of Employment Equity. We aim to promote equity through filling all numeric targets as contained in the Employment Equity Plan. To facilitate this process successfully, an indication of race, gender, and disability status is required. Preference will be given to underrepresented groups as per the QCTO Employment Equity targets. Women and people with disabilities are encouraged to apply.

APPLY TO THIS JOB`],postedDate:"10/9/2024",iframe:"",uuid:"pcea0ea66-d0f7-4cdd-83c3-21d0d0ff510b"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sabc_orig.jpg",href:"https://www.govpage.co.za/south-african-broadcasting-corporation-sabc-vacancies-blog/south-african-broadcasting-corporation-sabc-vacancies6858703",title:"SOUTH AFRICAN BROADCASTING CORPORATION (SABC) VACANCIES",content:[` 
SOUTH AFRICAN BROADCASTING CORPORATION (SABC)
 
As we provide excellent and promising opportunities for individuals aspiring for development and advancement in Media careers, we're searching for people with the highest caliber to join SABC's workforce. If you wish to explore new career opportunities and your qualifications and experience match our requirements step forward and apply to join SABC.
 `,` 
 
RE-ADVERTISEMENT 
 
MANAGER : DIGITAL MARKETING  
REPORT LINE: GROUP EXECUTIVE CORPORATE AFFAIRS & MARKETING
DIVISION: CORPORATE AFFAIRS AND MARKETING
SCALE CODE: 130
POSITION: 60017603
 
CLOSING DATE: 16 October 2024
 
MAIN PURPOSE OF POSITION 
Reporting to GE Corporate Affairs and Marketing, the incumbent is responsible for planning, developing, implementing and managing the overall digital marketing strategy for the SABC in order to increase brand awareness, improve marketing and communication efforts and increase sale.  In addition, the role is responsible for keeping all internal digital teams abreast of technological developments in order to establish best practice for SABC digital marketing management.
 
KEY ACCOUNTABILITIES
 
DEVELOP AND IMPLEMENT STRATEGY
Provide support and input in the development and implementation of the Corporate Affairs and Marketing strategy.
Develop Digital Marketing strategy in line with the Corporate Affairs and Marketing strategy.
Provide strategic direction to SABC brands in terms of defining objectives, strategy and development of business strategies to be implemented on digital media platforms
Cascade Digital Marketing strategy across all SABC platforms
Review and Report on the achievement of business units’ objectives
 
BUSINESS OPERATIONAL EFFICIENCY
Build, plan and implement the overall digital marketing strategy
Develop and manage a CRM strategy for the SABC group
Develop and implement a paid media strategy for all digital campaigns
Manage all digital media buying activities for the
Manage uniformity across the rest of the digital teams within the sub-brands
Stay up to date with the latest technology and best practices
Manage and oversee different digital marketing channels including website performance, social platforms, ecommerce platforms, etc
Oversee all the company's social media accounts
Measure and manage online content
Track SEO and Google Analytics data and make complex analysis
Build an inbound marketing plan
Measure ROI and KPIs
Prepare and manage digital marketing budget
Anticipate sales performance trends
Lead digital marketing team
Research competition, investigate benchmarks and provide suggestions for improvement
 
GOVERNANCE RISK AND COMPLIANCE
Develop and review internal control measures to ensure good governance.
Monitor and report on the operational risk and compliance.
Implement internal control measures to ensure good governance and compliance.
Oversee the management of digital stakeholder management risks to protect organisational integrity, create value, prevent financial loss and ensure compliance with applicable policies and legislations.
Monitor compliance in line with OHS Act.
Monitor execution of internal risk audits and address gaps and
 
FINANCIAL MANAGEMENT
Oversee unit operational expenditure against approved budget and introduce corrective measures to ensure financial discipline and accountability.
Ensure that the operational budget is managed in such a way as to assure no wasteful expenditure.
 
STAKEHOLDER MANAGEMENT
Build strong relationships with the SABCs digital stakeholders
Foster relationships with key external stakeholders such as agencies, and other digital service providers
Position the SABC as the preferred digital media partner for commercial transactions across South Africa’s diverse market segments.
LEADERSHIP AND PEOPLE MANAGEMENT
Effective implementation of Performance Management System in accordance with organisational policy and procedures.
Ensure adequate staffing for workload, succession planning and effective leadership.
Effective briefing and communication with departmental staff.
Career Development Plans (CDP) for all staff members.
Provide direction on the retention and attraction of staff.
Ensure efficient management of staff, including succession planning and effective leadership.
Contract and Manage Performance Management System in accordance with organizational policy and procedures within the unit.
Manage all information sources and create good relationships with key business decision makers.
Career Development Plans (CDP) for all staff members..
 
QUALIFICATIONS AND EXPERIENCE:
Bachelor’s degree in Marketing, digital marketing, Digital technologies, or a related field.
7+ years marketing experience, with at least 3 years in middle-management
Relevant Digital Marketing certifications
Detailed knowledge of SEO Google Analytics and CRM software and web traffic metrics
3 years of experience in developing and implementing digital marketing strategies
Good knowledge of all different digital marketing channels
Good knowledge and experience with online marketing tools and best practices
Familiarity with web design
Critical thinker and problem-solving skills
Team player
Good time-management skills
Great interpersonal and communication skills
 
ADVANTAGE:
Broadcasting/Media/FMCG experience
Additional languages – South African and/or other African languages
 
 KNOWLEDGE:
Strategic thinking
SEO
Google Analytics
CRM software
PFMA
Analytics
Project Management
Budget Management
Stakeholder management
Understanding of applicable legislative frameworks and regulations – POPIA
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
SALES ACCOUNT EXECUTIVE: ENTERPRISE AND CORPORATE X2
DIVISION: SALES
SCALE CODE: 402
POSITION ID: 60020169 & 60021282                
LOCATION: JOHANNESBURG
REPORTING LINE: SALES MANAGER: INLAND / SALES HEAD: COASTAL
 
Closing date: 15 September 2024
 
MAIN PURPOSE OF THE POSITION
The core function of this role is to sell audio/ visual / solutions within the SABC eco-system. The role primarily consists of managing and overseeing a portfolio of advertiser’s accounts and agencies. Accountability includes but not limited to being a liaison for clients and ensuring customer satisfaction by proactively addressing clients’ needs and facilitating the entire sale process. The role also entails growing new client bases and contributing to an increase in current sales levels to ensure achievement of revenue targets.
 
KEY ACCOUNTABILITIES
Achieve set targets by client within the given portfolio:
Identify and exploit new business opportunities.
Develop tailor-made sales opportunities and deals.
Prepare and negotiate all sales deals including renewals and renegotiations within the    parameters of the governance prescripts.
Offer a 360-degree solution across all platforms to address client’s needs.
Package and sell sponsorable programmes on respective platforms.
Develop innovative sponsorship opportunities.
Educate client on all organisational platforms on a regular basis.
Facilitate and understand analysis of competitive market in order to identify revenue opportunities.
Conduct need analyses of all client’s in portfolio in order to understand needs, identify opportunities.
Action a client brief and produce relevant media solutions not limited to a specific platform.
Source and evaluate lost /dropped business to determine reasons in order to re-establish business.
Facilitate and understand information to ensure thorough knowledge of own platforms.
Liaise with Product Managers regarding potential sponsorships opportunities within programmes.
Accurate and consistent usage of all sales management systems e.g CRM & SAP to manage the sales processes end to end.
Compile the quarterly reviews and negotiation documentation, on client history in preparation for reviews or negotiations.
Planning and Optimisation for clients upon request on available industry related planning and buying tools.
Provide feedback to Senior Management & Client monthly with regards to tracking of commitments
Update clients through proposals and presentations regarding opportunities.
Follow up on all correspondence from clients and adherence to deadlines.
Compile all Submissions and Term Sheets within respective portfolios as well as manage the long form contract process.
Update electronic contracts register/commitment book monthly.
Sound administration as well as weekly and monthly status reporting.
Conduct a minimum number of client visits as agreed with respective line Manager
Develop and maintain effective working relationships with internal and external clients.
Maintain after sales service by following up to ensure client satisfaction and future business within an agreed time frame directed by senior management.
Prepare the Deal Evaluation, business case and secure approval.
 
QUALIFICATIONS AND EXPERIENCE
A relevant degree or diploma, (Sales/ Communication/ Marketing/other relevant preferable); and/ or
Supplementary Media, Digital, Sales, and other relevant training courses and certificates; and
6-8 years of sales/ sales management experience, (media sales preferable)
Proven track record in media sales
Knowledge and experience in integrated / digital sales solutions would be advantageous.
Valid driver’s license & own transport.
 
KNOWLEDGE AND RELATED SKILLS
Understanding of broadcasting policies
Understanding of the organisational brands
Knowledge of industry systems
Problem solving
Conflict Management
Planning and organisation
Work under pressure and multi-task
Computer skills – MS Word, Excel, PowerPoint, Internet, Outlook
Excellent administrative skills
Conceptualization skills
Negotiation skills
Presentation skills
Excellent time management skills
Good interpersonal skills
Working on site predominantly
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
 
PRODUCER
DIVISION: Sport - Video Entertainment
REPORT LINE: Executive Producer - Sport
SCALE CODE: 403
POSITION ID: 60019649
CLOSING DATE: 11 SEPTEMBER 2024
 
MAIN PURPOSE OF POSITION
To plan, co-ordinate and produce live and magazine sport content / events of high quality in accordance with SABC editorial guidelines and standards.
 
KEY ACCOUNTABILITIES:
Prepare production and broadcast plans
Conceptualise programme ideas with production teams.
Oversee the process of production from inception to delivery.
Recces and sport facilities visits.
Arrange and oversee production planning sessions.
Facilitate and coordinate running orders.
Produce, edit inserts, package and finalise programmes
Lead production process and oversee the logistical and admin through delegation duties.
Brief and debrief editorial, production and technical meetings (on air talent).
Oversee on the schedule, work and freelance payments.
Provide report after production highlighting challenges and achievements.
Attend all meetings with the production team.
Communicate with other producers, Operations/logistics, marketing, scheduling and director productions.
Communicate with internal and external stakeholder.
Adhere to SABC policies, broadcasting standard, editorial code etc.
Execute necessary administrative procedures effectively for the smooth running of the production.
 
REQUIREMENTS
Degree or Diploma in Journalism or sport management or equivalent qualification
          (NQF 6 /NQF 7)
2- 3 years working experience in broadcasting environment.
Knowledge of other editing software.
Understanding of different sporting code/specs.
Understanding of broadcasting formats
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
 
ASSIGNMENT EDITOR: CHANNEL AFRICA
DIVISION: RADIO
REPORT LINE: EDITOR: NEWS & CURRENT AFFAIRS
SAP POSITION ID: 60023059
SCALE CODE: 300
 
Closing Date: 11 September 2024
 
Main purpose of position
To provide a newsgathering service that identifies and breaks news stories, by directing the assigning, briefing and debriefing of reporters. 
 
Key Accountabilities
Continually identify or initiate key news stories.
Cost-effectively manage and utilise the editorial budget.
Plan, organise and co-ordinate the daily news diary.
Monitor the production, editorial content and progress of stories.
Ensure stories are ready for news bulletins in accordance with agreed deadlines
Clearly and specifically brief and debrief journalists/teams on story editorial content.
Assign journalists according to their skills, strengths and competence
Encourage use of online media to break and update stories.
Identify and recruit talented radio news reporters.
Guide, develop, coach and mentor news reporters (assess developmental needs).
Manage and improve performance of radio news reporters
Act as gatekeeper by providing quality control function for focus, script and sound.
Attend and brief editorial meetings on planned stories.
Quality check correspondent packages against assignments.
Adhere to changes to schedule and time of broadcast.
Liaise and co-ordinate in time with technical producers for all live crossings.
Pre-approve story lines for live studio crossings.
Attend to internal and external customers/clients queries/ complaints.
Network with other newsmakers and sources of news.
Communicate with other news outlets inside and outside the SABC.
Determine and service customers/clients’ needs.
Contract with team on the SABC’s Performance Management System in accordance with the organizational policy and procedures.
Allocate responsibilities and schedule team in a fair and transparent manner.
Coach, mentor and develop the team.
Provide input in the retention and attraction of staff.
Manage employee relations to ensure conducive and productive working environment.
Oversee the implementation of organisational development initiatives were required i.e. Wellness, Employment Equity, Career Progression, Talent Management, and Human Capital Planning etc.
 
Requirements:
Degree or National diploma in Journalism or related qualification (NQF level 6)
 3-5 years’ experience in news broadcasting environment.
Knowledge and understanding of broadcasting standards, Policies and SOP’s.
Advanced understanding of SABC radio broadcasting operations.
Good understanding of equipment and facilities within the radio broadcasting environment.
Good sense of news and socio-political issues in Africa.
Excellent English communication (including writing) skills.
Problem solving skills.
Knowledge and understanding of transmission value chain
Knowledge and understanding of play-out and recording systems e.g. Dalet or Dira!
Knowledge and understanding of different types of productions e.g. Informal Knowledge Building versus Sport versus Current affairs.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,`RE-ADVERTISEMENT
 
SAP ABAP DEVELOPER
DIVISION: FINANCE
SCALE CODE: 900       
REPORT LINE: HEAD ERP COE
POSITION ID: 60021013
 
CLOSING DATE: 11 SEPTEMBER 2024
 
2-year Fixed Term Contract
 
MAIN PURPOSE OF THE POSITION
Develop and implement SAP enhancements and new functionalities in line with business requirements and best practice.
 
KEY ACCOUNTABILITIES
Responsible for the SAP Netweaver applications development in ECC, BW, and Enterprise Portal / UI5 Portal.
Design, build and test custom SAP technical solutions based on business requirements using ABAP OO, SAP UI5, SAP Fiori, SAP Web Dynpro and Dialog programmes.
Full life-cycle SAP implementation including all custom reporting, interfaces, enhancements, forms, workflows (RICEFW) and portal configuration.
Interface development and support using HTTP, XML, SOAP, Web Services, RFC, IDOCS and ABAP.
Code, test and document ABAP enhancements for all SAP modules.
Support of development requirements in the following SAP modules: FI, HCM (incl. payroll), MM, SD, PS, PM, Travel, CO, any other SAP module implemented at the SABC.
Responsible for troubleshooting and debugging of the SAP system.
Facilitate continuous business improvement.
Facilitate design sessions with SAP Functional Leads and business process owners in order to ensure best practice enhancements/implementations.
Ensure proper technical impact assessment of all risks and issues and changes to scope, requirements or design. Provide advice on any avoidance, mitigation or remedial actions required.
Ensure that development projects take full account of and correctly interface with existing systems, infrastructure and enterprise architecture.
Ensure that all aspects of the developed software meet requirements and are in line with the agreed design e.g. data, user experience, architecture, security, quality & operations.
Ensure adherence to internal development standards as well as global best practices.
Provide documentation to manage handover activities so that software can transition smoothly from development into test and production environments.
Adhere to the team’s quality objectives. Monitor and take responsibility for unit test coverage and completion to minimise defects in subsequent testing / production.
Commit to the delivery of high-quality solutions. Ensure that development is carried out in accordance with agreed quality standards and procedures and that all new development goes through an appropriate testing process.
Focus on customers and their requirements. Establish and maintain effective working relationships with customers, colleagues, senior management and software users to enhance design, development, deployment and maintenance activities.
Proactively keep abreast of industry developments, skills and technologies and share information, ideas and best practice with other development team members and ERP COE to improve skills and avoid single points of failure.
 
QUALIFICATIONS AND EXPERIENCE
Programming diploma / degree or relevant qualification (NQF level 6/7
Minimum of 10 years’ SAP ABAP development experience of which a minimum of 3 years should have been in a support or consulting environment
Experience in SAP Fiori implementation - advantage
Completed SAP ABAP Academy – advantage
Certification in other SAP modules – advantage
Good understanding of key business processes and integration points – advantage
 
PLEASE APPLY HERE`,`AUDIO VISUAL IMAGING PRODUCER (UKHOZI FM)
DIVISION: RADIO         
REPORT LINE: PROGRAMME MANAGER
SAP POSITION ID: 60017965
SCALE CODE: 403
RE-ADVERTISEMENT 
 
CLOSING DATE: 11 SEPTEMBER 2024
 
Main purpose of position
To conceptualize, produce and deliver high quality Seasonal, Generic, Programme Specific and Campaign Specific multi-platform Imaging Material & Promos in line with the station’s sound and feel, programme briefs, campaign briefs and programming & marketing strategies.
 
Key Accountabilities
Conceptualize, script, and produce cutting edge, top notch, break through generic, seasonal and thematic Station Imaging (jingles, promos, liners).
Prepare/compile briefs for station’s brand and imaging campaigns.
Identify and utilize relevant voice overs in order to produce station imaging.
Receive bookings and prepare for recordings, ensuring all equipment, facilities and resources are available for production, according to production specifications
Assist in the planning, preparation, logistical arrangements and production of station promos
Effective recording of productions, ensuring the optimal mix of all the sound for broadcast, recording and sound reinforcement, in order to optimally deliver on the production needs and requirements.
Continually monitor the technical quality of recording, ensuring optimal quality of broadcast and adherence to broadcasting standards
Timeous and accurate administration of production procedures, ensuring adherence to operational standards.
Effective monitoring of technical quality and reporting of faults, in order to resolve any technical problems.
Ensure effective informal and on-the-job training, to ensure a competent staff compliment.
Advise and assist on appropriate aspects, limitations, alternatives and utilisation of equipment to minimise mistakes and optimise and enhance product.
Provide advice on aspects of quality control, in order to ensure the quality of broadcasts
Assess and evaluate new equipment and provide feedback on suitability.
Effective execution of daily administrative tasks to assist with the effective functionality of the section.
Execute administrative procedures necessary for the smooth running of the business unit.
Ensure timeous studio bookings to ensure delivery of promo materials according to agreed timelines.
Create and manage production schedules for recording of promos, liners and other imaging elements.
Provide weekly and monthly imaging Reports, highlighting key milestones, challenges and achievements.
Communicate with internal and external stakeholders regularly to ensure timeous delivery of Imaging and promo materials as per brief.
Maintain close working relationships with producers and production teams to ensure optimal delivery of generic and programme specific imaging.
Facilitate and manage meetings with my production teams to go through creative briefs and generate creative concepts, angles and ideas for various show promos and Imaging.
Engage with internal content contributors (News & CAFF, Sport and Commercial Enterprises) and go through various plans for the monthly content plans for imaging and promo alignment.
Provide recordings as per brief from Sales for client campaigns.
Provide post audio recordings or montages for client campaigns.
Communicate and schedule recordings with station voices.
 
Requirements:
National Diploma or Degree in Sound Engineering or related discipline. (NQF level 6)
4 years’ experience in broadcasting environment of which 2 years should be on radio technical production. 
Proficiency in recording and editing software (i.e. pro tools, audacity, adobe etc).
Above average experience and knowledge of broadcasting production technology and digital media application
Above average proficiency of the English language (spoken and written) is essential
Ability and willingness to work under pressure and on short notice
Good research skills and ability to apply research information
Knowledge of popular music and current affairs will be an advantage
Candidate must have good command of IsiZulu both written and spoken
 
PLEASE APPLY HERE`],postedDate:"10/9/2024",iframe:"",uuid:"p1b42660a-d121-47b4-af8c-07a354f5b41a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/samsa_orig.png",href:"https://www.govpage.co.za/south-african-maritime-safety-authority-samsa-vacancies-blog/south-african-maritime-safety-authority-samsa-vacancies1469358",title:"SOUTH AFRICAN MARITIME SAFETY AUTHORITY (SAMSA) VACANCIES",content:[` 
SOUTH AFRICAN MARITIME SAFETY AUTHORITY (SAMSA)
 `,`DEPUTY REGISTRAR OF SEAFARERS GRADE: D1
The position reports to the Registrar of Seafarers.
LOCATION: HEAD OFFICE, PRETORIA
 
JOB PURPOSE
To support the Registrar in maintaining the register or registers of all certificates of competency, certificates of proficiency, certificates if equivalency and endorsements specified in STCW/F Convention, Regulations 3 and II/1 to II/6, IV/2 and Merchant Shipping (Certification, Training and Manning) Regulations 2021 and the Merchant shipping (National Small Vessel Safety) Regulations of 2007, as amended, Seafarer’s identity Documents Convention (Revised) 2003 (No.185).
 
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
Resolve employee grievances withing a specified timeframe.
Address poor behaviour through the Disciplinary and Grievance procedures with the guidance of Human Capital.
Cultivate positive behaviour in accordance with SAMSA Values.
 
MINIMUM REQUIREMENTS

Qualifications
Diploma/Degree in Maritime Studies
STCW Certificate of Competence an advantage at operational or management level.
 
Knowledge and Experience
Previous supervisory experience preferably in a related field
Three (3) years of experience at supervisory/management level
Three (3) years’ experience in the Maritime Industry and dealing with seafarer-related matters.
 
Competencies
High levels of competence on the skills below is a requirement:
Sound knowledge of Maritime Legislations and IMO Conventions and Protocols as amended wrt seafarers and fishers.
Technical knowledge of the following acts and regulations:
SAMSA Act, 1998 (Act No. 5 of 1998) as amended.
Protection of Personal Information Act.
Merchant Shipping Act, 1951 (Act No 57 of 1951) as amended.
Promotion of administrative justice Act 3 of 2000.
Merchant Shipping (Certification, Manning, and Training) Regulations 2021, as amended.
Merchant Shipping (National Small Vessel Safety) Regulations 2007, as amended.
Maritime Labour Convention 2006.
Seafarer’s identity Documents Convention (Revised) 2003 (No.185).
Practical knowledge of quality assurance.
Skilled at supervising a multidisciplinary team including standards & compliance, qualification & licensing, port regulatory & emergency response, enforcement & compliance, maritime security/safety, quality assurance and corporate service.
Well-developed written and oral communication skills, interpersonal skills, and the ability to communicate effectively.
Planning and organisation skills.
Sound analytical and problem-solving skills.
Research skills.
Conflict management.
Computer Literacy (MS Word, MS Excel, MS Power point, BI software).
Practical knowledge in shipping.
 
Should you meet the requirements as set out above, please e-mail your CV to Zanele Zwane at: recruitment@samsa.org.za
 
As we are committed to Employment Equity in our employment practices, it is our intention to appoint individuals with the aim of meeting our Equity objectives. Preference will be given to African Males, Indian Males and White Females to achieve the objectives of Employment Equity.
 
CLOSING DATE: 16 SEPTEMBER 2024
 
Please note: SAMSA reserves the right not to make an appointment to any advertised position. No late applications will be considered. Psychometric and other assessments may be used as part of the selection process and all shortlisted candidates will be required to be available for the tests. If you have not been contacted within 1 month of the closing date as mentioned above, kindly deem your application unsuccessful.`,`JUNIOR NAVAL ARCHITECT
TYPE: Permanent 
GRADE: C4 OFFICE: Durban Office
 
JOB PURPOSE
The purpose of this role is to scrutinize and approve ship’s stability information submitted by ship owners, to assign or check calculations to determine statutory freeboards in accordance with legislation, to calculate or check calculations to determine a ship’s tonnage in accordance with legislation and conventions, to generate policy by way of marine notices, circulars and provide guidance to surveyors by way of guidance notes and instructions.
 
KEY PERFORMANCE AREAS
Registration & Licensing of ships: Determine and define the principal dimensions, tonnages and technical specifications/ characteristics of a vessel for approval by the Naval Architect, for the process of ship registration and licencing of vessels.
Naval Architecture: Assess and comment on technical plans of vessels for the approval of the Naval Architect Vessel Plan Approvals.
Legislation/Regulations: Identify shortcomings in existing legislation and generate proposed amendments of existing or the drafting of new legislation from a technical perspective. Draft Marine Notices, Circulars, guidance documents and procedures in support of existing legislation for the approval of the Naval Architect.
Administration: Assist in archiving and knowledge management. Attend committee meetings to contribute to technical and operational outcomes as requested by the Naval Architect.
Casualty Investigations: Under the direction of the Naval Architect, assist surveyors with investigations into casualties of a specific technical nature where a naval architectural input is required.
 
MINIMUM REQUIREMENTS
Bachelor of Science in Mechanical Engineering with MSc in Naval Architecture or Bachelor of Science in Naval Architecture
Preference will be given to candidates registered with ECSA and SAIMENA
3-5 Years of experience within the Maritime sector will be an added advantage.
 
 
Should you meet the requirements as set out above, please e-mail your CV to Sithembile Lupindo at recruitment3@samsa.org.za

 
As we are committed to Employment Equity in our employment practices, it is our intention to appoint individuals with the aim of meeting our Equity objectives. Preference will be given to previously disadvantaged candidates to achieve the objectives of Employment Equity.
 
CLOSING DATE: 18 September 2024
 
Please note: SAMSA reserves the right not to make an appointment to any advertised position. No late applications will be considered. Psychometric and other assessments may be used as part of the selection process and all shortlisted candidates will be required to be available for the tests. If you have not been contacted within 1 month of the closing date as mentioned above, kindly deem your application unsuccessful.`],postedDate:"10/9/2024",iframe:"",uuid:"pbd524b95-ee29-4bca-97b9-046923fdaf9b"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sasria_orig.png",href:"https://www.govpage.co.za/south-african-special-risk-insurance-association-sasria-vacancies-blog/south-african-special-risk-insurance-association-sasria-vacancies3940642",title:"SOUTH AFRICAN SPECIAL RISK INSURANCE ASSOCIATION (SASRIA) VACANCIES",content:[` 
SOUTH AFRICAN SPECIAL RISK INSURANCE ASSOCIATION (SASRIA)
 `,`INVESTMENT ANALYST
 
Details
Closing Date 2024/09/20
Reference Number SAS240909-2
Job Title Investment Analyst
Job Type Permanent
Division Finance
Department Investment Managements
EE Occupational Levels Level 4 & 5: Skilled, Technical and Academically Qualified
Location - Town / City Sandton
Location – Province Gauteng
Location – Country South Africa
 
Job Advert Summary
The Investment Analysts will assist the Senior Investment Manager in the implementation of the investment policy and investment strategy.
Prepare investment performance monitoring and reporting.
Prepare quarterly investment packs for Investment Steering Committee and Investment Committee.
Assist with asset manager selection, appointment and monitoring.
Monitoring and reconciling of Sasria’s investment accounting data.
Conduct asset manager due diligence exercises and reporting.
Assist Sasria with ESG incorporation, responsible investment, and reporting.
Assisting with Investment Statutory Reporting and Financials.
 
Minimum Requirements
 
Minimum Qualifications:
Relevant B degree qualification (B Com/ BAcc)
Advantageous if the qualification is relevant to investments
 
Minimum Experience:
Minimum 2 years in an investment environment.
Please note that preference will be given to people with disabilities.
 
Duties and Responsibilities
 
1. Operational
Compile data received from asset managers for reporting to Senior Investment Manager.
Reconcile data received from Asset managers vs what is received from the bank.
Monitoring of post-trade mandate compliance.
Assist in the preparation of investment commentary for monthly reporting to internal stakeholders.
Provide investment portfolio information to the Senior Investment Manager for the actuarial team.
Populate data received from Actuarial department on market performance indicators on a monthly basis for investment workings.
Assist in the preparation of monthly investment reports.
Assist Investment Manager in the preparation of investment performance packs for Investment Steering Committee and Investment Committee.
Maintain relationships with service providers for outsourced functions such as asset managers, asset consultants, investment administrators.
Resolving any investment related queries with, asset Managers, asset consultants, investment administrators.
Consolidating, monitoring, and analysing investment data.
Reporting on Sasria’s investment portfolio and performance and Identification of investment risks and opportunities.
Assisting the Head of investments with ad-hoc activities.
Monitoring and Reporting of Investment Performance Reporting using StatPro Revolution.
Monitoring of financial markets using Bloomberg.
 
2. Financial & Statutory Reporting
Daily Compilation of Asset managers data and calculation of Assets Under Management (AUM).
Monthly and Quarterly investment reconciliations.
Month end Investment journals.
Monthly invoices
Compliance and Variance/Cash report
 
Policy
We are committed to Employment Equity when recruiting internally and externally. It is company policy to promote from within wherever possible. Therefore, please be aware that internal candidates will be considered first before reviewing external applicants, provided that this supports achievement of our Employment Equity goals.
 
PLEASE APPLY HERE`,`PROCESS ENGINEER
 
Details
Closing Date 2024/09/20
Reference Number SAS240909-1
Job Title Process Engineer
Job Type Permanent
Division Business Change and Technology
Department Applications
EE Occupational Levels Level 6: Specialists
Location - Town / City Johannesburg
Location – Province Gauteng
Location – Country South Africa
 
Job Advert Summary
The suitably qualified individual is required to oversee the design and implementation of our organisation processes, ensure optimal integration of processes, people and technology by interactively analysing, researching, designing, recommending and implementing innovative and efficient business processes.
 
Minimum Requirements
 
Qualifications
Bachelor’s Degree in Business Management, Information Technology or Engineering 
Post graduate qualification is advantageous
 
Experience
5+ years relevant experience in processing systems, processes, procedures in a financial services/ insurance environment.
 
Duties and Responsibilities
 
Process Engineering
• Assess, configure, analyse, and document business processes. 
• Research best practices and innovative solutions. 
• Develop and monitor metrics to monitor and improve. 
• Identify and recommend opportunities for process improvement. 
• Facilitate process improvement initiatives. 
• Identify and manage process-related risks and controls. 
• Participate in technical solutioning and design.
• Perform quality assurance on solution components developed.

• Support deployment of solutions to development, test, and production environments. 
• Develop and maintain the necessary documentation for the solutions deployed. 
• Support technology implementation of both inhouse and/or external projects.
• Ensure quality assurance of process projects. 
• Drive process improvement and innovation. 
• Process standardisation.
• Facilitate the development of procedures. 
 
 
Policy
We are committed to Employment Equity when recruiting internally and externally. It is company policy to promote from within wherever possible. Therefore, please be aware that internal candidates will be considered first before reviewing external applicants, provided that this supports achievement of our Employment Equity goals.
 
PLEASE APPLY HERE`],postedDate:"10/9/2024",iframe:"",uuid:"pecd4a140-ae6f-4f05-9b57-6e807498012a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/saws_orig.jpg",href:"https://www.govpage.co.za/south-african-weather-service-saws-vacancies-blog/south-african-weather-service-saws-vacancies6553400",title:"SOUTH AFRICAN WEATHER SERVICE (SAWS) VACANCIES",content:[` 
SOUTH AFRICAN WEATHER SERVICE (SAWS)
 
Private Bag X097, Pretoria, 0001 • Tel: + 27 (0) 12 367 6000 • www.weathersa.co.za • USSD: *120*7297#
 
The South African Weather Service (SAWS) is a Section 3(a) public entity under the Ministry of Environment, Forestry and Fisheries (DEFF) and is governed by a Board. The organisation is an authoritative voice for weather and climate related services in South Africa and is a member of the World Meteorological Organisation (WMO) to fulfil a range of international obligations of the government. South African Weather Service (SAWS) strives to be a Weather and Climate Centre of Excellence providing innovative solutions to ensure a weather-smart region, sustainable development and economic growth.
 `,` 
 
The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of:
 
CHIEF METEOROLOGICAL TECHNICIAN
Salary: Negotiable
Centre: Bethlehem Office (Ref. WS07/092024)
 
Key Performance Areas:
• Provide supervisory and technical oversight of Meteorological Observations activities performed within the Office.
• Ensures that all systems and processes involved in Meteorological Observations are performed according to prescribed criteria and that all staff involved are informed of the most current methods and equipment that is employed for these purposes.
• Provide training of staff on the operations of network nodes and instrumentation with the aim of enabling competence in routine maintenance and use.
• Develop and maintain documents to support activities mentioned above and maintain the necessary records to prove system adherence and compliance with documented requirements.
• Responsible for the installation, maintenance and repair of meteorological equipment, including upgrades, in line with applicable international and national standards.
 
Observation:
• Perform routine weather observation duties that include:-
• Visual weather observation and compile routine reports,
• Providing special reports for changes in weather.
• Providing observation reports timeously as per schedule or as per the timeliness of the client’s request
• Downloading of remote observation station data
• Collection and quality control of manual rainfall station
• Supervise and perform quality control of AWS and ARS data and transmission thereof to central data base
• Ensure planned inspection and cleaning of Solys and Biomet stations is carried out timeously.
• Prepare and submit monthly status reports on Research equipment, e.g Solys, Biomet, etc Second level quality control of data on Quality control done by meteorological Technicians
• Upkeep of the infrastructure maintenance plan and ensure adherence within stipulated timeframes.
• Perform routine and ad hoc maintenance of SAWS Observations infrastructure (Thorough understanding of Automatic Weather Stations is required)
• Keep up breast with the latest developments in weather observational equipment and technologies.
 
Internal and External Customer Relations:
• Liaise with clients as per office plan.
• Represent SAWS at Stakeholder meetings as per plan.
• Financial and General Administration:
• Assist in the control of acquired stock levels required for operational activities.
• Assist in the effective use of assets and key infrastructure.
• Perform routine office administration practices including lodging claims, leave processing, overtime, transport admiration, periodic reporting, administration of registers etc.
• Training, Development and Knowledge Management
• Assist in all training activities related to weather observation within the office.
• Provide mentorship, skills transfer and training to meteorological technicians.
 
Total Quality Management
• Apply prevention and corrective action procedures on all findings related to weather observation.
• Promote a quality culture amongst the staff within the office.
• Promote the SAWS Quality Policy and integrate into day-to-day activities of the office
• Provide assistance during audits of the Regional office as required.
• Perform regular inspections to ensure all work done is according to documented requirements.
• Ensure that the work environment complies with legislative requirements relations to OHS.
 
Minimum Requirements and Attributes:
• A Grade 12 Certificate with Maths and Science.
• Weather Observers certificate and a valid AMO competency certificate.
• Five years’ experience in a weather observation environment and preferably as a Senior Meteorological Technician.
• Ability to read, analyse and interpret written request for weather data and information.
• Ability to lead and work in a team.
• Knowledge of international standards such as WMO and ICAO.
• Advanced knowledge of all observation tools.
• A valid code 08 driver’s license or higher.
 
Please Note:
Enquiries for the above-mentioned positions must be directed to: Mr. Denny Maluleke, at Tel. (012) 367 6091.
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications). 
 
Closing Date: 13 September 2024 
 
Note: Recruitment Agency applicant submissions will not be considered 
 
This is an EE position and preference will be given to African Males and Females, Coloured Males/Females and Indian Males/Females. Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. The South African Weather Service is an equal opportunity employer. Record Reference       HCM-ADVERT-CMT2024
 
 
 
 
 `,` 
 
 
 
 
The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of: 
 
FORECASTER (LEVEL 9) - DRR 
Salary total package: Negotiable 
Centre: Head office, Centurion (Ref. WS05/092024) 
 
Job summary: 
The forecaster is a shift-worker primarily responsible for forecasting and monitoring of weather, producing of weather forecasting products as well as severe weather warnings. 
 
Forecasting and Warning Services: 
Generate and quality control public weather forecasts according to pre-determined time scales. These include commercial products and services. 
Communicate public weather forecasts and severe weather warnings in different media platforms. 
 
Internal and External Customer Relations: 
Liaise with clients as per office plan. 
Represent SAWS at Stakeholder meetings. 
Promote the awareness of SAWS products and services to all stakeholders. 
 
Administration:
• Perform routine office administration practices including periodic reporting, leave processing, administration of registers, transport administration, etc.
• Assist in the control of acquired stock levels required for operational activities.
• Assist in the effective use of assets and key infrastructure.
Training, Development and Knowledge Management:
• Assist in all training activities related to weather forecasting within the office.
• Provide mentorship and training to junior personnel.
• Conduct case-studies and other research to enhance the accuracy and quality of the products and services offered.
 
Total Quality Management:
• Develop and review meteorological processes and procedures.
• Promote the SAWS Quality Policy and intergrade it into the day-to-day activities of the office.
• Provide assistance during audits of the office as required.
• Perform regular inspections to ensure all work done is according to documented requirements.
• Ensure that the work environment complies with legislative requirements in relation to Occupational Health and Safety.
• Promote a quality culture amongst the staff within the office.
 
Minimum Requirements and Attributes:
• BSc Honours Degree in Meteorology or equivalent
• 3 years Weather Forecasting experience.
• Ability to analyse and interpret weather charts, surface observations, upper air observations, weather codes, weather satellite and radar imageries.
• Ability to analyse Numerical Weather Prediction and Ensemble Prediction System products to produce weather forecasts and warnings.
• Comprehensive understanding of Impact-based forecasting.
• Excellent communication skills (written and verbal).
• Ability to work well under pressure.
• Clear understanding of SAWS policies
• Willingness to work shifts, weekends, and public holidays.
• Excellent corporate communications skills (written and verbal)
• Computer Skills (Ms Word, Excel, PowerPoint)
• Be able to respond well to pressure.
• A valid Code EB or Code 08 driver’s license (without endorsements).
• Have own reliable transport.
 
 
Please Note: 
Enquiries for the above-mentioned positions must be directed to: Ms Thembisa Bixa, at Tel. (012) 367 6091. 
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications). 
 
Closing Date: 20 September 2024 
 
Note: Recruitment Agency applicant submissions will not be considered 
 
Preference will be given to People living with disabilities in line with SAWS EE targets. This is an EE position and preference will be given to females, Africans, Indians and Coloureds (AIC). Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. The South African Weather Service is an equal opportunity employer. 
 
Record Reference HCM-ADVERT-FORECASTER2024
 
 
 
 
 `,` 
 
 
 
 
The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of:
 
METEOROLOGICAL TECHNICIAN
Salary: Negotiable
Centre: Cape Town Weather Office
(Ref: WS03/092024)
 
Observation:
• Perform routine weather observation duties that include: -
Visual weather observation and compile routine reports,
Providing special reports for changes in weather.
Providing observation reports timeously as per schedule or as per the timeliness of the client’s requests
Downloading of remote observation station data
Collection and quality control of manual rainfall station
Quality control of AWS and ARS data and transmission thereof to central data base
• Perform routine and adhoc maintenance of SAWS Observations infrastructure (Thorough understanding of Automatic Weather Stations is required)
 
Internal and External Customer Relations:
• Liaise with clients as per office plan.
• Represent SAWS at Stakeholder meetings as per plan.
 
Total Quality Management
• Apply prevention and corrective action procedures on all findings related to weather observation.
• Promote a quality culture amongst the staff within the office.
• Promote the SAWS Quality Policy and intergrade it into the day-to-day activities of the office
• Provide assistance during audits of the regional office as required.
• Perform regular inspections to ensure all work done is according to documented requirements.

• Ensure that the work environment complies with legislative requirements relations to OHS.
 
Minimum Requirements and Attributes:
• A Grade 12 Certificate with Maths and Science.
• Weather Observers certificate.
• Ability to obtain a competent Aviation Meteorological Observation (AMO) certificate within 6 months of employment.
• Ability to read, analyse and interpret written request for weather data and information.
• Knowledge of international standards such as WMO and ICAO. Advanced knowledge of observation tools.
• A valid code 08 driver’s license or be in a position to obtain a valid driver’s license within 3 months of employment.
 
 
Please Note: 
Enquiries for the above-mentioned positions must be directed to: Ms. Nokubonga Mkhize, at Tel. (012) 367 6091. 
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications). 
 
Closing Date: 13 September 2024 
 
Note: Recruitment Agency applicant submissions will not be considered 
 
Preference will be given to People living with disabilities in line with SAWS EE targets. This is an EE position and preference will be given to females and males, Africans, Indians and Coloureds (AIC). Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. South African Weather Service is an equal opportunity employer. 
 
Record Reference HCM-ADVERT-MT09/2024
 
 
 
 
 
 `,` 
 
 
 
 
 
The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of:
 
METEOROLOGICAL TECHNICIAN
Salary: Negotiable
Centre: De Aar Weather Office
(Ref: WS02/092024)
 
Observation:
• Perform routine weather observation duties that include: -
Visual weather observation and compile routine reports,
Providing special reports for changes in weather.
Providing observation reports timeously as per schedule or as per the timeliness of the client’s requests
Downloading of remote observation station data
Collection and quality control of manual rainfall station
Quality control of AWS and ARS data and transmission thereof to central data base
• Perform routine and adhoc maintenance of SAWS Observations infrastructure (Thorough understanding of Automatic Weather Stations is required)
 
Internal and External Customer Relations:
• Liaise with clients as per office plan.
• Represent SAWS at Stakeholder meetings as per plan.
 
Total Quality Management
• Apply prevention and corrective action procedures on all findings related to weather observation.
• Promote a quality culture amongst the staff within the office.
• Promote the SAWS Quality Policy and intergrade it into the day-to-day activities of the office
• Provide assistance during audits of the regional office as required.
• Perform regular inspections to ensure all work done is according to documented requirements.
• Ensure that the work environment complies with legislative requirements relations to OHS.
 
Minimum Requirements and Attributes:
• A Grade 12 Certificate with Maths and Science.
• Weather Observers certificate.
• Ability to obtain a competent Aviation Meteorological Observation (AMO) certificate within 6 months of employment.
• Ability to read, analyse and interpret written request for weather data and information.
• Knowledge of international standards such as WMO and ICAO. Advanced knowledge of observation tools.
• A valid code 08 driver’s license or be in a position to obtain a valid driver’s license within 3 months of employment.
 
 
Please Note: 
Enquiries for the above-mentioned positions must be directed to: Ms. Nokubonga Mkhize, at Tel. (012) 367 6091. 
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications). 
 
Closing Date: 13 September 2024 
 
Note: Recruitment Agency applicant submissions will not be considered 
 
Preference will be given to People living with disabilities in line with SAWS EE targets. This is an EE position and preference will be given to females and males, Africans, Indians and Coloureds (AIC). Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. South African Weather Service is an equal opportunity employer. 
 
Record Reference HCM-ADVERT-MT09/2024
 
 
 
 
 
 `,`The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of:
 
SENIOR FORECASTER – DRR X2
Salary total package: Negotiable
Centre: Head office, Centurion (Ref. WS06/092024)
 
Job summary:
• The Senior Forecaster is a shift-worker primarily responsible for forecasting and monitoring of weather, producing of weather forecasting products as well as severe weather warnings.
• S/He is also required to provide a supervisory and technical oversight of weather forecasting activities performed in the office and in regional forecasting offices.
 
Forecasting and Warning Services:
• Supervise, generate and quality control public and marine weather forecasts according to pre-determined time scales. These include commercial products and services.
• Communicate public weather forecasts and severe weather warnings in different media platforms.
 
Internal and External Customer Relations:
• Liaise with clients as per office plan.
• Represent SAWS at Stakeholder meetings.
• Promote the awareness of SAWS products and services to all stakeholders.
 
Administration:
• Perform routine office administration practices including periodic reporting, leave processing, administration of registers, transport administration, etc.
• Assist in the control of acquired stock levels required for operational activities.
• Assist in the effective use of assets and key infrastructure.
• Perform supervisory duties.
 
Training, Development and Knowledge Management:
• Assist in all training activities related to weather forecasting within the office.
• Provide mentorship and training to junior personnel.
• Conduct case-studies and other research to enhance the accuracy and quality of the products and services offered.
 
Total Quality Management:
• Develop and review meteorological processes and procedures.
• Promote the SAWS Quality Policy and intergrade it into the day-to-day activities of the office.
• Provide assistance during audits of the office as required.
• Perform regular inspections to ensure all work done is according to documented requirements.
• Ensure that the work environment complies with legislative requirements in relation to Occupational Health and Safety.
• Promote a quality culture amongst the staff within the office.
 
Minimum Requirements and Attributes:
• BSc Honours Degree in Meteorology or equivalent
• 5 years Weather Forecasting experience.
• Ability to analyse and interpret weather charts, surface observations, upper air observations, weather codes, weather satellite and radar imageries.
• Ability to analyse Numerical Weather Prediction and Ensemble Prediction System products to produce weather forecasts and warnings.
• Comprehensive understanding of Impact-based forecasting.
• Excellent communication skills (written and verbal).
• Ability to work well under pressure.
• Clear understanding of SAWS policies
• Basic understanding of Public Finance and Management Act
• Willingness to work shifts, weekends, and public holidays.
• Excellent corporate communications skills (written and verbal)
• Computer Skills (Ms Word, Excel, PowerPoint)
• Be able to respond well to pressure.
• Have own reliable transport.
• A valid Code EB or Code 08 driver’s license (without endorsements).
 
 
Please Note: 
Enquiries for the above-mentioned positions must be directed to: Ms Thembisa Bixa, at Tel. (012) 367 6091. 
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications). 
 
Closing Date: 20 September 2024 
 
Note: Recruitment Agency applicant submissions will not be considered 
 
Preference will be given to People living with disabilities in line with SAWS EE targets. This is an EE position and preference will be given to females, Africans, Indians and Coloureds (AIC). Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. The South African Weather Service is an equal opportunity employer. 
 
Record Reference HCM-ADVERT-SNR FORECASTER2024`,`The South African Weather Service (SAWS) is therefore seeking to appoint an efficient and enthusiastic person to undertake the role of:
 
SENIOR METEOROLOGICAL TECHNICIAN
Salary: Negotiable
Centre: Cape Town Weather Office (Ref: WS01/092024)
 
Job summary:
The Senior Meteorological Technician provides technical leadership in the operations of Meteorological Observations performed within the abovementioned region.
 
Observation:
• Perform routine weather observation duties that include:-
Visual weather observation and compile routine reports,
Providing special reports for changes in weather.
Providing observation reports timeously as per schedule or as per the timeliness of the clients request
Downloading of remote observation station data
Collection and quality control of manual rainfall station
Quality control of AWS and ARS data and transmission thereof to central data base.
• Perform routine and adhoc maintenance of SAWS Observations infrastructure (Thorough understanding of Automatic Weather Stations is required).
 
Internal and External Customer Relations:
• Liaise with clients as per office plan.
• Represent SAWS at Stakeholder meetings as per plan.
 
Training, Development and Knowledge Management
• Assist in all training activities related to weather observation within the office.
• Provide mentorship and training to meteorological technician.
 
Total Quality Management
• Apply prevention and corrective action procedures on all findings related to weather observation.
• Promote a quality culture amongst the staff within the office.
• Promote the SAWS Quality Policy and intergrade it into the day-to-day activities of the office
• Provide assistance during audits of the regional office as required.
• Perform regular inspections to ensure all work done is according to documented requirements.
• Ensure that the work environment complies with legislative requirements relations to OHS.
 
Minimum Requirements and Attributes:
• A Grade 12 Certificate with Maths and Science.
• Weather Observers certificate and an AMO competency certificate.
• Two years’ experience in observation as a Meteorological Technician.
• Ability to read, analyse and interpret written request for weather data and information.
• Knowledge of South African Weather Service policies and procedures.
• Knowledge of international standards such as WMO and ICAO, Advanced knowledge of observation tools.
• A valid code 08 driver’s license or higher.
 
 
Please Note:
Enquiries for the above-mentioned positions must be directed to: Ms. Nokubonga Mkhize, at Tel. (012) 367 6059.
 
Register as user on our website using this link: https://www.weathersa.co.za/home/vacancies to apply for the above position and upload your (Comprehensive CV with certified copies of qualifications).
 
Closing Date: 13 September 2024
 
Note: Recruitment Agency applicant submissions will not be considered
 
This is an EE position and preference will be given to African females and males, Coloured females and males, Indian females and males. Correspondence will be limited to short listed candidates only. Candidates who have not been contacted within 3 months after the closing date of this advertisement, please accept that your application was unsuccessful. The organisation reserves the right not to fill this position. The South African Weather Service is an equal opportunity employer.
 
Record Reference HCM-ADVERT-SMT2024`],postedDate:"10/9/2024",iframe:"",uuid:"pc466fb0b-12e5-4f50-95e6-f17ec6d3b0bd"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/special-investigating-unit-siu_orig.png",href:"https://www.govpage.co.za/special-investigating-unit-siu-vacancies-blog/special-investigating-unit-siu-vacancies9046357",title:"SPECIAL INVESTIGATING UNIT (SIU) VACANCIES",content:[` 
SPECIAL INVESTIGATING UNIT (SIU)
 `,`SENIOR PRACTITIONER: EXTERNAL COMMUNICATIONS X1 (SIU24/02/013)
 
Overview
Reference SIU24/02/013
Salary ZAR574,463 - ZAR781,364/annum + incl. Medical Aid Allowance
Job Location - South Africa -- Tshwane Metro -- Pretoria
Job Type Permanent
Closing date 13 Sep 2024 21:59
 
Main purpose: To provide coordinated, consistent communication services that ensure smooth relations with the media, as well as contact the public through established SIU platforms.
 
Minimum qualification and experience: Bachelor’s Degree or National Diploma in Communication, Journalism, Media Studies or Media Relations (NQF 6/7). Three years’ experience in Communications.
 
Key performance areas (Include but not limited to): Support services to the spokesperson. Manage external communication. Branding support.
 
Technical skills: Excellent grammar skills. Excellent communication skills (oral and written). Team player. Time-management skills. Computer skills (MS suited. Research skills.
 
Required knowledge and Behavioural (include but not limited to): Knowledge of Government Communication and information systems. Knowledge of South Africa’s legal system. Accuracy. Attention to detail. Commitment. Resilience. Judgement and decision making. Analytical skills. Innovative. Creativity.
 
 
PLEASE NOTE:
The appointment of candidates will be at the Unit’s sole discretion and the Unit reserves the right not to make an appointment.
The SIU is an Anti-Corruption Investigating Unit and requires applicants to make a full and frank disclosure in their application form.
Fraudulent qualifications or documentation will automatically disqualify candidates.
All candidates will be subjected to integrity screening procedures and a favourable end report is essential.
Other critical positions may be subjected to vetting procedures after appointments.
Correspondence will be limited to shortlisted candidates only. Please be advised that applications received mean that processing may take some time. Candidates who have not been contacted within three (3) months of the closing date should consider their applications unsuccessful.
POPIA disclaimer: In line with the Protection of Personal Information Act, 4 of 2013 by applying for this position it is accepted that you have consented to your personal information being used and kept for the purposes of processing your application. The SIU will ensure the protection and safeguarding of personal information and all information collected will not be shared with any third parties or be used for purposes other than for the purpose it was intended.
The SIU is committed to equality, employment equity and diversity.  Preference will be given to persons from designated groups in particular Africans and people with disabilities in line with the SIU Employment Equity Plan.
The salary offered will be in line with SIU approved salary scales, which may change subject to relevant approvals and annual increases.
Late applications will not be considered after the closing date.

APPLY`,`JUNIOR FINANCIAL ACCOUNTANT: AOD X1 (SIU23/11/002)
 
Overview
Reference SIU23/11/002
Salary ZAR574,463 - ZAR781,364/annum + incl. Medical Aid Allowance

Job Location - South Africa -- Tshwane Metro -- Pretoria
Job Type Permanent
Closing date 13 Sep 2024 21:59
 
Main purpose: Management of revenue and debtors’ book in line with policies, procedures, SOPS and all legislative requirements within the SIU.  
 
Minimum qualification and experience: B Degree or Diploma in Accounting (NQF 6/7). Three years’ experience in revenue/debtors’ management and general financial and management accounting in a supervisory level.
 
Key performance areas (Include but not limited to): Extensive knowledge of revenue and debt management, Acknowledgement of Debt (AOD), supervision of sub-ordinates and reporting.  
 
Technical skills: Analytical. Communication. Interpersonal. Planning and organising. Time management. Attention to details.
 
Required knowledge and Behavioural (include but not limited to): Knowledge of financial legislation and regulations governing the public sector (i.e PFMA, Treasury Regulations). Knowledge of IFRS and GRAP statements. Knowledge of accounting systems. Intermediate MS Office proficiency. Attention to detail. Accuracy. Deadline driven. Integrity / Honesty. Work under pressure. Reliable. Team Player.
 
PLEASE NOTE:
The appointment of candidates will be at the Unit’s sole discretion and the Unit reserves the right not to make an appointment.
The SIU is an Anti-Corruption Investigating Unit and requires applicants to make a full and frank disclosure in their application form.
Fraudulent qualifications or documentations will automatically disqualify candidates.
All candidates will be subjected to integrity screening procedures and a favourable end report is essential.
Other critical positions may be subjected to vetting procedures after appointments.
Correspondence will be limited to shortlisted candidates only. Please be advised that applications received means that processing may take some time. Candidates who have not been contacted within three (3) months of the closing date should consider their applications unsuccessful.
POPIA disclaimer: In line with Protection of Personal Information Act, 4 of 2013 by applying for this position it is accepted that you have consented to your personal information being used and kept for the purposes of processing your application. The SIU will ensure the protection and safeguarding of personal information and all information collected will not be shared with any third parties or be used for the purposes other than for the purpose it was intended.
The SIU is committed to equality, employment equity and diversity.  Preference will be given to persons from designated group in particular Africans and people with disabilities in line with the SIU Employment Equity Plan.
The salary offered will be in line with SIU approved salary scales, which may change subject to relevant approvals and annual increases.
Late applications will not be considered after the closing date.

APPLY`],postedDate:"10/9/2024",iframe:"",uuid:"p38731085-b5e2-47b2-a074-f55fed0e1cde"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/sita_orig.jpg",href:"https://www.govpage.co.za/state-information-technology-agency-sita-vacancies-blog/state-information-technology-agency-sita-vacancies2649809",title:"STATE INFORMATION TECHNOLOGY AGENCY (SITA) VACANCIES",content:[` 
STATE INFORMATION TECHNOLOGY AGENCY (SITA)
 `,`VACANCY - 1877 
RE ADVERTISEMENT 
REFERENCE NR : VAC00836/23 
JOB TITLE : Senior Software Developer 
JOB LEVEL : D2 
SALARY : R 651 627 - R 977 440 
REPORT TO : Technical Manager 
DIVISION : ADM: Exec Apps Development & Maintain 
DEPT : ADM: AM: Digital Services 
LOCATION : SITA Centurion 
POSITION STATUS : 12 months Fixed term contract (Internal & External) 
 
Purpose of the job 
To lead the design, implementation, debugging, documentation, release and maintenance of software-based solutions, write code and enhance software/systems in accordance with ICT standards and the enterprise architecture for Government. 
 
Key Responsibility Areas 
Lead the design and development of new features for the software systems, and improvement of the existing ones; 
Implementation, debugging, documentation and release of the software solutions; 
Provide maintenance and enhancement support of the existing systems; 
Perform software systems coding assignments; and 
Supervision of the Software development team. 
 
Qualifications and Experience 
Minimum: 3 years National Diploma/ Bachelor's degree in ICT (Computer Science, Information Systems, Technology and Engineering) or related field. 
Experience: 6-7 years’ experience with full software development lifecycle (SLDC), including solution development, operational responsibility in a large corporate/public sector organisation. The experience must include: Good solid programming Skills and understanding of the LIMS Basic language and Oracle database is essential and required. Experience in Database will be an advantage. Experience in solution analysis, and development for the development, implementation and maintenance/enhancements of systems within the corporate/public sector, including: Successfully developed and implemented applications Software development team leadership competency Software development deliverable effort planning, estimations and execution management Developed efficient and effective IT solutions to diverse and complex business problems. Extensive experience with a wide variety of database management systems and maintenance. Extensive experience with a wide variety of programming languages and technologies. Extensive experience with working on multiple tasks and report status. Experience in interacting with customers. 
 
Experience with the following technology stack: 
C#
MVC
ASP.NET
ASP.NET Razor 
SQL Server 2016 Development 
WCF
SQL Reporting Services 
Agile Methodology 
JavaScript
Ajax,
JQuery
 
Technical Competencies Description 
Solid understanding of computer science including algorithms, data structures, operating systems and databases. ICT Governance and Compliance Governance e.g. Cobit and ITIL. Strong knowledge to design test plans according to the software requirements specification. Broad and extensive knowledge of the software development process and its technologies. Extensive knowledge of design techniques, tools, and principles involved in the production of software requirements specifications, models and designs. Strong knowledge of user interfaces. Strong knowledge of solution Integration strategies and tools. Working knowledge of Cloud Computing. Strong knowledge source control and version control tools like Git and SVN. Working knowledge of virtualisation and containerisation (Docker, Kubernetes). Working knowledge of DevOps (Continuous Integration, Continuous Delivery, Continuous Testing, Continuous Monitoring Infrastructure as Code, Config Management). Working knowledge of Agile Methodologies (Feature-Driven Development, Test-Driven Development, Scrum, Extreme Programming). Extensive background in coding. Extensive knowledge of software testing techniques and tools. Extensive knowledge of software team leadership IT Quality Management e.g. ISO9001 and CMMI IT Security ICT Standards COTS (Commercial of  the Shelf) Products OSS (Open Source Software) Products IT Strategies and Architectures. Strong knowledge of data integration tools Execution of Architecture methods and practices e.g. TOGAF and GWEA. 
Technical competencies: Application Development, Application Maintenance and Support, Database Administration. 
Leadership competencies: Customer Experience, Collaboration, Communicating and Influencing, and Honesty, Integrity, Fairness, Outcomes driven, Innovation, Planning and Organising, Creative Problem Solving, Bimodal IT Practice, Managing People and Driving Performance, Decision-making, Responding to Change and Pressure, and Strategic Thinking 
Other Special Requirements  N/A. 
 
 
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
 
Closing Date: 19 September 2024 
 
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
CV’s sent to incorrect email address will not be considered 
 
 
 
 
 
 `,` 
 
 
 
 
 
VACANCY -1880 
REFERENCE NR : VAC00647/25 
JOB TITLE : Senior Software Developer 
JOB LEVEL : D2 
SALARY : R 651 627 - R 977 440 
REPORT TO : Technical Manager 
DIVISION : Application Maintenance & Development 
DEPARTMENT : AM: Digital Services 
LOCATION : SITA Centurion 
POSITION STATUS : 36 - Months - Fixed Term Contract (Internal & External) 
 
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
Experience: 6 - 7 years’ experience with full software development lifecycle (SLDC), including Solution development, operational responsibility in a large corporate/public sector organisation. The experience must include: Experience in solution analysis, and development for the development, implementation and maintenance/enhancements of systems within the corporate/public sector, including: Successfully developed and implemented applications. Software development team leadership competency. Software development deliverable effort planning, estimations and execution. Management. Developed efficient and effective IT solutions to diverse and complex business problems. Extensive experience with a wide variety of database management systems and maintenance. Extensive experience with a wide variety of programming languages and technologies. Extensive experience with working on multiple tasks and report status. Experience in interacting with customers. 
 
Technical Competencies Description 
Comprehensive knowledge and experience with.NET Framework, one or more of the major programming languages, C#, ASP.NET MVC HTML. Comprehensive knowledge and experience with one or more of the major database systems, MySQL, MsSQL. Comprehensive knowledge with Mobile development with experience in Xamarin. Extensive knowledge in DevOps. Comprehensive Teamworking experience. Strong knowledge of source control and version control tools. 
 
 
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
 
Closing Date: 17 September 2024 
 
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
 
 
 
 
 
 
 
VACANCY
 
RE ADVERTISEMENT 
REFERENCE NR : VAC00962/24 
JOB TITLE : Professional: Governance and Business Support Services JOB LEVEL : E1 
SALARY : R1 254 685 - R1 882 027 
REPORT TO : Executive: Service Management DIVISION : Service Management 
DEPT : Information Security Services 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
Responsible for ensuring that Service Management initiatives and projects are managed efficiently and effectively, with the aim of improving the overall management of IT Service services while minimizing the risks to the organisation. The incumbent will also be responsible for ensuring that SITA delivers the services as agreed with their clients while delivering value from investments made. 
 
Key Responsibility Areas 
Manage and Implement the Governance and Business Support policies and procedures for Service Management processes to ensure continuous IT Improvement to business without interfering with the daily operations. 
Overall responsibility of on time delivery, within budget and quality of the service management projects including proposal development projects 
Advise stakeholders about IT Governance and Business support processes to ensure successful delivery of services to enhance the existing Service Management Portfolio 
Managing contract creation, execution, renewal and analysis to maximize operational and financial performance of the contracted party, all while reducing financial risk for SITA 
Responsible for providing leadership direction for the Governance & Business Support Services within defined SITA boundaries 
Accountable for ITIL Life Cycle Management relevant to service delivery services, SLA / OLA and underpinning contract requirements and highlight areas of performance risks in order to provide excellent service delivery 
Financial and business management 
Human Capital Management. 
 
Qualifications and Experience 
Required Qualification: Bachelor’s degree in information technology / B Tech in Information Technology / B Degree in Business Management or related field. 
Certifications: ITIL v3 or v4 Certification, COBIT Certification ISO/ IEC 20 000 Certification, PMBOK or PRINCE2 or both. 
 
Experience: 8 + years working of ICT experience with IT Service Management / IT Operations / Infrastructure / Service Management with 4 years in a management role. Experience should include: - Overseeing medium to large- scale information technology projects driven by project management frameworks. Managing departmental budgets and overall departmental financials, contracts and vendor management. Exposure/experience with a wide variety of business productivity solutions. Managing strategic change, through project implementations, in a dynamic operating environment 3 years solid IT governance, risk and compliance experience. Leading a team of highly skilled ICT professionals and consultants. Contract and supplier management ability. Experience and knowledge acquired through professional development, Technical Lead and Management experience. Excellent technical, analytical, and project management skills. Strong communication and interpersonal skills. Good leadership and motivational skills. 
 
Technical Competencies Description 
Knowledge of: IT Service Management ICT Governance risk and Compliance Frameworks Project Management Lifecycle IT Risk Management ICT related Acts ICT Business Environment and Landscape State Information Technology Act Company’s Act Financial legislation: Public Finance Management Act (PFMA), Treasury Regulations, Tax Laws. 
Leadership competencies: Customer Experience; Collaboration; Communicating and Influencing; Outcomes driven; Planning and Organising; Creative Problem Solving; Bimodal IT Practice; Managing People and Driving Performance; Decision-making; Responding to Change and Pressure; Strategic Thinking 
Interpersonal/behavioural competencies: Active listening; Attention to Detail; Analytical thinking; Continuous Learning; Disciplined; Resilience; and Stress Management. 
Other Special Requirements N/A.
 
 
How to apply 
Kindly forward your CV to: Zandile.recruitment@sita.co.za stating the position applying for and the relevant reference number 
 
Closing Date: 17 September 2024 
 
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
 
 
 
 
 
VACANCY - 1864 
Re – Advertisement 
REFERENCE NR : VAC01184/24 
JOB TITLE : Senior Software Developer 
JOB LEVEL : D2 
SALARY : R 651 627 - R 977 440 
REPORT TO : Technical Manager 
DIVISION : Applications Development and Maintenance 
DEPARTMENT : ADM Apps Dev 
LOCATION : SITA Centurion 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
To lead the design, implementation, debugging, documentation, release and maintenance of software-based solutions, write code and enhance software/systems in accordance with ICT standards and the enterprise architecture for Government. 
 
Key Responsibility Area 
Lead the design and development of new features for the software systems, and improvement of the existing ones. Implementation, debugging, documentation and release of the software solutions. Provide maintenance and enhancement support of the existing systems. Perform software systems coding assignments. Supervision of the Software development team. 
 
Qualifications and Experience 
Minimum: 3-year National Diploma/ Bachelor's degree in ICT (Computer Science, Information Systems, Technology and Engineering) or related field. 
Experience: 6 - 7 years’ experience with full software development lifecycle (SLDC), including solution development, operational responsibility in a large corporate/public sector organisation. The experience must include 
Experience in solution analysis, and development for the development, implementation and maintenance/enhancements of systems within the corporate/public sector, including: Successfully developed and implemented applications Software development team leadership competency Software development deliverable effort planning, estimations and execution management Developed efficient and effective IT solutions to diverse and complex business problems. Extensive experience with a wide variety of database management systems and maintenance. Extensive experience with a wide variety of programming languages and technologies. Extensive experience with working on multiple tasks and report status. Experience in interacting with customers. 
 
Technical Competencies Description 
Solid understanding of computer science including algorithms, data structures, operating systems and databases. ICT Governance and Compliance Governance e.g. Cobit and ITIL Strong knowledge to design test plans according to the software requirements specification. Broad and extensive knowledge of the software development process and its technologies. Extensive knowledge of design techniques, tools, and principles involved in the production of software requirements specifications, models and designs. Strong knowledge of user interfaces. Strong knowledge of solution Integration strategies and tools Working knowledge of Cloud Computing Strong knowledge source control and version control tools like Git and SVN Working knowledge of virtualisation and containerisation (Docker, Kubernetes) Working knowledge of DevOps (Continuous Integration, Continuous Delivery, Continuous Testing, Continuous Monitoring Infrastructure as Code, Config Management) Working knowledge of Agile Methodologies (Feature-Driven Development, Test-Driven Development, Scrum, Extreme Programming) Extensive background in coding Extensive knowledge of software testing techniques and tools Extensive knowledge of software team leadership IT Quality Management e.g. ISO9001 and CMMI IT Security ICT Standards COTS (Commercial of the Shelf) Products OSS (Open Source Software) Products IT Strategies and Architectures Strong knowledge of data integration tools Execution of Architecture methods and practices e.g. TOGAF and GWEA. 
Technical Competencies: Application Development. Application Maintenance and Support. Database Administration 
Added Advantage: 
SAG certification 
SAG WebMethods experience 
API Development in Java/ .Net 
 
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
 
Closing Date: 17 September 2024 
 
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
 
 
 
 
VACANCY - 1873 
Re -advertisement 
REFERENCE NR : VAC00821 
JOB TITLE : Specialist: Service Operations (Problem Management) 
JOB LEVEL : C5 
SALARY : R 478 420 - R 717 630 
REPORT TO : Consultant: Service Transition 
DIVISION : Service Management 
DEPARTMENT : Service Delivery Management 
LOCATION : SITA Erasmuskloof 
POSITION STATUS : 3 - Years – Fixed Term Contract (Internal & External) 
 
Purpose of the job 
 
Key Responsibility Area 
To develop, implement, optimise, and influence Incident / Request / Event / Access Management/ Problem Management processes / systems to influence service delivery by applying Service Operations aligned to the ITIL Service Lifecycle, relevant ISO standards, and COBIT Governance to Government enabling effective service management, to support the management of BA, SLAs, OLAs, and underpinning contracts. 
• Implementation of ITIL Life Cycle stage (Service Operations) relevant to all types of Incident / Request / Event / Access/ Problem Management issues raised against SLA / OLA and underpinning contract requirements and highlight areas of performance risks in order to provide excellent service delivery. 
• Monitoring and evaluation of Incident / Request / Event / Access/ Problem Management requirements life cycle against SLA requirements and mitigation of risks. 
• Provide input in planning and facilitating Incident / Request / Event / Access / Problem Management audits 
• Collaborate with relevant stakeholders in managing the Incident / Request / Event / Access / Problem Management life cycle processes 
• Monitoring and evaluation of all escalation mechanisms with regard to the management of risk to enable consistent effective service delivery and performance. 
• Manage critical and high impact Incident / Request / Event / Access Management requirements 
• Detect, Analyze, Process problems (RCAs) and evaluate, categorized and prioritized problems. 
• Facilitation and administration of Problem Management Forum. 
 
Qualifications and Experience 
Minimum:3-year National Diploma/ Degree in Computer Science, Information Technology/ NQF level 6. 
Certificate: ITIL Practitioners Certification, ITIL Foundations Certification is an added Advantage. 
Experience: 3-5 years’ experience in Service Management principles related to Incident / Request / Event / Access/Problem Management good practice methodologies. Experience of working in a team and involvement in project management delivery concepts. Experience in dealing with customers. Experience in Customer Service Level and Relationship management. 
 
Technical Competencies Description 
Good understanding and practice of ICT recognised Project management. Good Risk & Issue management. Excellent understanding of Service Operations aligned to ITIL good practice methodology, Cobit Governance and ISO 20 000 standards. Excellent understanding of continual improvement through service/process monitoring and evaluation. Excellent; policy, process, procedure development, review and implementation. Excellent Service / Process performance monitoring evaluation and reporting. 
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
 
Closing Date: 17 September 2024 
 
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
 
 
 
 
VACANCY
REFERENCE NR : VAC00833/25 
JOB TITLE : End User Computing Technician 1804JOB LEVEL : C1 
SALARY : R 257 888 – R 386 832 
REPORT TO : Specialist: End User Computing DIVISION : National & Regional Consulting 
DEPT : Prov MP: End-User Computing – (EUC) 
LOCATION : SITA Nelspruit 
POSITION STATUS : 24 months Fixed term contract (Internal/External) 
 
Purpose of the job 
To provide remote and onsite LAN and Desktop technical support to Workstations and Network infrastructure, ensuring that the clients requirements are always met, and their expectations exceeded. 
 
Key Responsibility Areas 
Provide first and second level LAN & desktop support within SLA targets. Install and configure new IT equipment within SLA targets. Implementation, customization and maintenance of the remote software deployment. Provide support to the enterprise’s local IT and software resources. Provide LAN & desktop advisory services to clients. Day to day administrative tasks. 
 
Qualifications and Experience 
Minimum: Grade 12 PLUS National Higher Certificate in IT (NQF Level 5) with A+/N+ either as a subject of the Certificate OR as a separate certification (expiry irrelevant). 
Experience: At least one-year corporate experience in the Service Management / End User Support Environment, OR Call Centre Agent experience with 1 – 2 years relevant experience in the End User Computing services and related LAN Infrastructures Services. Maintenance and support service of the End User Computing Services relating to all LAN Infrastructure Services such as servers, desktops, LAN cabling, switches and other LAN peripherals. Maintenance and support to ensure the availability of the services according to prescribed procedures, policies, standards and SLA’s. Ensure the resolution of hardware and software service requests, incidents and problem within End User Computing and all related LAN infrastructure. 
 
Technical Competencies Description 
Knowledge of: Desktop operating systems and application. Network cabling and telephony system. Security software and hardware. Technical support and maintains of the application system(s), hardware and software End User Computer and LAN infrastructure principles and topology, Internet protocols, services. Routing and switching technologies. ITIL. Procedure, Policies and standards. 
Interpersonal/behavioural competencies: Active listening, Attention to Detail, and Continuous Learning. 
Other Special Requirements  N/A 
 
 
How to apply 
To apply please log onto the e-Government Portal: www.eservices.gov.za and follow the following process 
Register using your ID and personal information 
Use received one-time pin to complete the registration 
Log in using your username and password 
Click on “Employment & Labour 
Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
Or, if candidate has registered on eservices portal, access www.eservices.gov.za, then follow the below steps: 
Click on “Employment & Labour 
Click on “Recruitment Citizen” 
Login using your username and password 
Click on “Recruitment Citizen” to create profile, update profile, browse and apply for jobs 
For queries/support contact egovsupport@sita.co.za OR call 080 1414 882
 
CV\`s sent to the above email addresses will not be considered 
 
Closing Date: 16 September 2024 
 
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
 
 
 
 
VACANCY- 1883 
REFERENCE NR : VAC00360/23 
JOB TITLE : Admin Assistant 
JOB LEVEL : B5 
SALARY : R 220 972 – R 331 457 
REPORT TO : HOD: Provincial Management 
DIVISION : NRC: Exec National & Regional Consulting 
DEPARTMENT : RPL: HOD Northern Region 
LOCATION : SITA Mahikeng 
POSITION STATUS : Permanent (Internal /External) 
 
Purpose of the job 
To provide Administrative Assistant support to the sub department and ensure corporate support across the unit. Provide high level administrative support by preparing statistical reports, handling information requests, and performing clerical functions such as preparing correspondence, receiving visitors, arranging conference calls, and scheduling meetings. 
 
Key Responsibility Areas 
Receive and record incoming and outgoing correspondence to ensure proper record keeping for the sub department. 
Prepare and distribute minutes, presentations as well as general office documentation/communication to ensure that information reached relevant identified parties. 
Arrangement of Bid Committees. 
Writing minutes. 
Perform general office duties. 
Arrange work sessions and staff meetings with employees and coordinate all logistical arrangements for the sub department. 
Responsible for the accommodation and flight arrangements for the sub division in accordance with SITA travelling policy and procedures to the satisfaction of the division. 
Provide management support to the sub departmental Budget 
Ensure adherence to the organisation quality standards in terms of documentation that requires management approval. 
 
Qualifications and Experience 
Minimum: Grade 12 (NQF level 4) plus a relevant recognised course (shorter than a year at NQF level 4-certificate of competence) –depending on operational requirements. MS Office certification will be an added advantage. 
Experience : 1 – 2 years experience applicable to the specified discipline. 
Technical Competencies Description 
Knowledge of principles and practices of organisation, records management and general administration. Basic principles of bookkeeping. Computer literacy. Office Management. Ability to operate standard office equipment. 
Ability to follow written and oral instructions. Office Management. Business writing skills. Report writing skills, in statistical analysis. 
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
For queries/support egovsupport@sita.co.za OR call 080 1414 882 
 
Closing Date: 13 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on an Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. Preference will be given to members of designated groups. 
If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
It is the applicant\`s responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
Only candidates who meet the requirements should apply. 
SITA reserves a right not to make an appointment. 
Appointment is subject to getting a positive security clearance, the signing of a balance score card contract, verification of the applicant’s documents (Qualifications), and reference checking. 
Correspondence will be entered to with shortlisted candidates only. 
CV\`s from Recruitment Agencies will not be considered. 
 
 
 
 
 
 `,`VACANCY - 1874 
REFERENCE NR : VAC00398/25 
JOB TITLE : Specialist: Database Administrator 
JOB LEVEL : C5 
SALARY : R 478 420 – R 717 630 
REPORT TO : Senior Database Administrator 
DIVISION : IT Infrastructure Services 
DEPARTMENT : ITI: Hosting Open Systems SAPS 
LOCATION : SITA Centurion 
POSITION STATUS : Permanent (Internal & External) 
 
Purpose of the job 
Provision Database services, design, support, install, maintain and administer database management system and related products. 
 
Key Responsibility Areas 
Infrastructure Preparation. Management and Administration. User Support. Reporting and Communication. 
 
Qualifications and Experience 
Minimum: 3 year National Higher Diploma / Degree in an ICT related field (Computer Science, Information Systems, Technology and Engineering). 
Certification: Microsoft SQL Server database certifications. Oracle Certified Professional. MySQL Database Administrator. 
 
Experience: 3 - 5 years practical work experience of database administration on different platforms with programming experience and Microsoft SQL Server Reporting and Microsoft SQL Server Integration Services experience. 
 
Technical Competencies Description 
Knowledge of: ADABAS, NATURAL, COMPLETE, IMS, Datacom, IDMS, Oracle, SQL IT server hardware, software setup and configuration. SQL Clustering SQL Always on MySQL Replication SCOM Basic knowledge of application development Advanced Agile/Scrum knowledge Advanced knowledge of software development lifecycle and database change management & automation Capacity planning, Performance Tuning, Backup and Recovery, Project Management Business/Systems Liaison Customer Relationship Management Meta Data Management Information Architecture/Strategy Business Intelligence Architecture/Tools. 
Other Special Requirements N/A.
 
 
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
Closing Date: 13 September 2024 
 
Disclaimer
SITA is an Employment Equity employer and this position will be filled based on the Employment Equity Plan. Correspondence will be limited to shortlisted candidates only. Preference will be given to members of designated groups. 
If you do not hear from us within two months of the closing date, please regard your application as unsuccessful. 
Applications received after the closing date will not be considered. Please clearly indicate the reference number of the position you are applying for. 
It is the applicant's responsibility to have foreign qualifications evaluated by the South African Qualifications Authority (SAQA). 
Only candidates who meet the requirements should apply. 
SITA reserves the right not to make an appointment. 
The appointment is subject to getting a positive security clearance, the signing of a balance scorecard contract, verification of the applicants’ documents (Qualifications), and reference checking. 
Correspondence will be entered to with shortlisted candidates only. 
CV\`s from Recruitment Agencies will not be considered.`],postedDate:"10/9/2024",iframe:"",uuid:"pc10fc154-5df4-470b-bd82-ed441e117309"}],ie={"north west office of the premier vacancies":"https://www.govpage.co.za/north-west-office-of-the-premier-vacancies-blog/north-west-office-of-the-premier-vacancies1158580","north west department of economic development, environment, conservation and tourism vacancies":"https://www.govpage.co.za/north-west-department-of-economic-development-environment-conservation-and-tourism-vacancies-blog/north-west-department-of-economic-development-environment-conservation-and-tourism-vacancies8686000","commission for conciliation, mediation and arbitration (ccma) vacancies":"https://www.govpage.co.za/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies-blog/commission-for-conciliation-mediation-and-arbitration-ccma-vacancies9069209","national electronic media institute of south africa (nemisa) vacancies":"https://www.govpage.co.za/national-electronic-media-institute-of-south-africa-nemisa-vacancies-blog/national-electronic-media-institute-of-south-africa-nemisa-vacancies2080761","national health laboratory services (nhls) vacancies":"https://www.govpage.co.za/national-health-laboratory-services-nhls-vacancies-blog/national-health-laboratory-services-nhls-vacancies1424356","ports regulator of south africa vacancies":"https://www.govpage.co.za/ports-regulator-of-south-africa-vacancies-blog/ports-regulator-of-south-africa-vacancies1131757","private security industry regulatory authority (psira) vacancies":"https://www.govpage.co.za/private-security-industry-regulatory-authority-psira-vacancies-blog/private-security-industry-regulatory-authority-psira-vacancies8193362","quality council for trades & occupations (qcto) vacancies":"https://www.govpage.co.za/quality-council-for-trades-occupations-qcto-vacancies-blog/quality-council-for-trades-occupations-qcto-vacancies4467529","south african broadcasting corporation (sabc) vacancies":"https://www.govpage.co.za/south-african-broadcasting-corporation-sabc-vacancies-blog/south-african-broadcasting-corporation-sabc-vacancies6858703","south african maritime safety authority (samsa) vacancies":"https://www.govpage.co.za/south-african-maritime-safety-authority-samsa-vacancies-blog/south-african-maritime-safety-authority-samsa-vacancies1469358","south african special risk insurance association (sasria) vacancies":"https://www.govpage.co.za/south-african-special-risk-insurance-association-sasria-vacancies-blog/south-african-special-risk-insurance-association-sasria-vacancies3940642","south african weather service (saws) vacancies":"https://www.govpage.co.za/south-african-weather-service-saws-vacancies-blog/south-african-weather-service-saws-vacancies6553400","special investigating unit (siu) vacancies":"https://www.govpage.co.za/special-investigating-unit-siu-vacancies-blog/special-investigating-unit-siu-vacancies9046357","state information technology agency (sita) vacancies":"https://www.govpage.co.za/state-information-technology-agency-sita-vacancies-blog/state-information-technology-agency-sita-vacancies2649809"},te={title:ee,blogPosts:ne,departments:ie},ae="govpage-private-sector",oe=[],se={},re={},le={title:ae,blogPosts:oe,departments:se,businesses:re},w=10;function me(){const[t,r]=g.useState(1),[a,s]=g.useState(null);g.useEffect(()=>{if(a){const p=document.querySelector(".modal a.btn.btn-primary");p&&p.remove()}},[a]);const n=j(W,U,te,Y,$,le),o=Math.ceil(n.length/w),l=n.slice((t-1)*w,t*w),d=p=>{r(p)},h=p=>{s(p)},c=()=>{s(null)};return e.createElement("div",null,e.createElement(k,{paginatedData:l,onPostClick:h}),e.createElement(C,{currentPage:t,totalPages:o,onPageChange:d}),a&&e.createElement("div",{className:"modal",onClick:c},e.createElement("div",{className:"modal-content",onClick:p=>p.stopPropagation()},e.createElement("span",{className:"close",onClick:c},"×"),e.createElement("div",{className:"modal-body"},e.createElement("img",{src:a.imgSrc||a.iconLink,alt:"company logo"}),e.createElement("h2",null,a.title||a.jobTitle),e.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:a!=null&&a.details?a.details:B((a==null?void 0:a.content)||"")}}),a.apply&&e.createElement("a",{href:a==null?void 0:a.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),a.href&&e.createElement("a",{href:a==null?void 0:a.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}export{me as default};
