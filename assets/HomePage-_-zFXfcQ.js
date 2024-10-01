import{R as e,P as n,r as m,A as O,j as N,k as F}from"./vendor-DasOq3Un.js";import{u as j,c as Q,f as L}from"./index-d12chPYj.js";/* empty css             */function k({currentPage:a,totalPages:s,onPageChange:o}){const r=()=>{const i=[],l=Math.max(1,a-1),d=Math.min(s,l+3);for(let y=l;y<=d;y++)i.push(y);return i},t=i=>{o(i);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return e.createElement("div",{className:"pagination"},e.createElement("button",{onClick:()=>t(a-1),disabled:a===1},"Previous"),r().map(i=>e.createElement("button",{key:i,className:i===a?"active":"",onClick:()=>t(i)},i)),e.createElement("button",{onClick:()=>t(a+1),disabled:a===s},"Next"))}k.propTypes={currentPage:n.number.isRequired,totalPages:n.number.isRequired,onPageChange:n.func.isRequired};const q=({pdfImages:a})=>{const[s,o]=m.useState(1),[r,t]=m.useState(!1),[i,l]=m.useState(1),d=m.useRef(null),y=()=>{const p=new Image;p.src=a[i-1],p.onload=()=>{const h=d.current,g=h.getContext("2d"),b=window.devicePixelRatio||1,E=r?window.innerWidth:h.parentElement.clientWidth,I=Math.min(E/p.width,1),w=s*I,f=p.width*w,v=p.height*w;h.width=f*b,h.height=v*b,h.style.width=`${f}px`,h.style.height=`${v}px`,g.clearRect(0,0,h.width,h.height),g.scale(b,b),g.drawImage(p,0,0,f,v)},p.onerror=()=>{console.error("Failed to load image:",p.src);const h=d.current,g=h.getContext("2d");g.clearRect(0,0,h.width,h.height),g.font="20px Arial",g.fillStyle="red",g.fillText("Failed to load page",10,50)}};m.useEffect(()=>{y()},[s,r,i]);const c=()=>o(p=>Math.min(p+.1,2)),u=()=>o(p=>Math.max(p-.1,.5)),R=()=>t(!0),M=()=>t(!1),P=()=>{i<a.length&&l(i+1)},C=()=>{i>1&&l(i-1)};return e.createElement("div",{className:`pdf-viewer-container ${r?"full-view":"min-view"}`},r&&e.createElement("div",{className:"pdf-navbar"},e.createElement("button",{className:"minimize-view-btn",onClick:M},e.createElement(O,null)),e.createElement("div",{className:"zoom"},e.createElement("button",{onClick:c},e.createElement(N,null)),e.createElement("button",{onClick:u,disabled:s<=.5},e.createElement(F,null))),e.createElement("div",{className:"pdf-pagination"},e.createElement("button",{onClick:C,disabled:i<=1},"Prev"),e.createElement("span",null,"Page ",i," of ",a.length),e.createElement("button",{onClick:P,disabled:i>=a.length},"Next"))),e.createElement("canvas",{onClick:R,ref:d,className:"pdf-viewer-canvas"}))};q.propTypes={pdfImages:n.array.isRequired};function x({pdfImages:a,isLoaded:s}){return e.createElement("section",{className:"pdf-post"},s?e.createElement("div",{className:"pdf-container"},e.createElement(q,{pdfImages:a})):e.createElement("div",{className:"placeholder pdf-container-placeholder"}))}x.propTypes={pdfImages:n.array.isRequired,isLoaded:n.bool.isRequired};function S({iframeUrls:a}){const[s,o]=m.useState(!1),[r,t]=m.useState(0),i=c=>{c.stopPropagation(),o(u=>!u)},l=()=>{t(c=>c<a.length-1?c+1:c)},d=()=>{t(c=>c>0?c-1:c)},y=Array.isArray(a)?a[r]:a;return e.createElement("div",{className:`google-doc-viewer ${s?"fullscreen":""}`},e.createElement("iframe",{src:y,allowFullScreen:!0,className:"google-doc-iframe"}),e.createElement("div",{className:"navigation-buttons"},Array.isArray(a)&&e.createElement(e.Fragment,null,e.createElement("button",{className:"prev-doc-button",onClick:d,disabled:r===0},"Previous"),e.createElement("button",{className:"next-doc-button",onClick:l,disabled:r===a.length-1},"Next"))),e.createElement("button",{className:"toggle-fullscreen",onClick:i},s?"Exit Full Screen":"Full Screen"))}S.propTypes={iframeUrls:n.oneOfType([n.string,n.arrayOf(n.string)]).isRequired};function B(a,s){return e.useMemo(()=>{if(a.length===0)return e.createElement(e.Fragment,null);const r=({innerHTML:t})=>e.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:t}});return r.propTypes={innerHTML:n.string.isRequired},e.createElement("section",null,a.map((t,i)=>{var l,d;return e.createElement("article",{className:"job-post",key:i,onClick:()=>s(t)},t.imgSrc||t.iconLink?e.createElement("div",{className:"company-logo"},e.createElement("img",{loading:"lazy",src:t.imgSrc||t.iconLink,alt:"company logo"})):null,e.createElement("p",{className:"title"},(t==null?void 0:t.title)||(t==null?void 0:t.jobTitle)),((l=t==null?void 0:t.content)==null?void 0:l.length)>0?e.createElement(r,{innerHTML:t.content}):((d=t==null?void 0:t.details)==null?void 0:d.length)>0?e.createElement(r,{innerHTML:t.details}):t!=null&&t.iframe?e.createElement(S,{iframeUrls:t.iframe}):null,!(t!=null&&t.iframe)&&e.createElement("button",{className:"read-more-button",onClick:()=>s(t)},"Read More"))}))},[a,s])}function D({paginatedData:a,onPostClick:s}){const[o]=j(5e3);return e.createElement("div",{id:"posts"},a.map(r=>r.type==="pdf"?e.createElement(x,{key:r.id,pdfImages:r.pdfImages,isLoaded:o}):e.createElement(T,{key:r.id,post:r,onPostClick:s})))}D.propTypes={paginatedData:n.arrayOf(n.shape({id:n.string.isRequired,type:n.string.isRequired,pdfImages:n.array,imgSrc:n.string,iconLink:n.string,title:n.string,jobTitle:n.string,details:n.string,content:n.string,apply:n.string,href:n.string})).isRequired,onPostClick:n.func.isRequired};function T({post:a,onPostClick:s}){return B([a],s)}T.propTypes={post:n.shape({id:n.string.isRequired,type:n.string.isRequired,pdfImages:n.array,imgSrc:n.string,iconLink:n.string,title:n.string,jobTitle:n.string,details:n.string,content:n.string,apply:n.string,href:n.string}).isRequired,onPostClick:n.func.isRequired};const U=[{file:"1.pdf",images:["./assets/pdf_images/1/1_page_1.png","./assets/pdf_images/1/1_page_2.png","./assets/pdf_images/1/1_page_3.png","./assets/pdf_images/1/1_page_4.png","./assets/pdf_images/1/1_page_5.png","./assets/pdf_images/1/1_page_6.png","./assets/pdf_images/1/1_page_7.png","./assets/pdf_images/1/1_page_8.png","./assets/pdf_images/1/1_page_9.png","./assets/pdf_images/1/1_page_10.png","./assets/pdf_images/1/1_page_11.png","./assets/pdf_images/1/1_page_12.png","./assets/pdf_images/1/1_page_13.png","./assets/pdf_images/1/1_page_14.png","./assets/pdf_images/1/1_page_15.png","./assets/pdf_images/1/1_page_16.png","./assets/pdf_images/1/1_page_17.png","./assets/pdf_images/1/1_page_18.png","./assets/pdf_images/1/1_page_19.png","./assets/pdf_images/1/1_page_20.png","./assets/pdf_images/1/1_page_21.png"]}],z="/assets/agency_icons/minopex.png",J="minopex",G=[{jobTitle:"General Engineering Superintendent (G.E.S)",publishedDate:"Published 23 September 2024",expiryDate:"Closing Date: 01 October 2024",location:"Saldanha Bay Rural, Western Cape",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">West Coast Plant Operations (Pty) Ltd</label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based in the Saldanha Bay Municipality area in the Western Cape.<br><br><strong>Description</strong> <br><br>The purpose of this position is to coordinate maintenance for an engineering stream according to operational requirements and equipment / assets technical specifications and standards.<br><strong><br>Duties and Responsibilities:<br></strong>• Set engineering targets according to production and engineering requirements<br>• Integrate and co-ordinate engineering and technical maintenance plans<br>• Deploy engineering teams to ensure repair and maintenance to maximize engineering running hours<br>• Investigate and diagnose problems and breakdowns to determine resource requirements and order spares according to Company procedures<br>• Perform inspections in accordance with the Mine Health and Safety Act regulations and analyse breakdowns<br>• Over-inspect subordinates in their daily activities to ensure that maintenance is done according to organisational standards and requirements<br>• Continuously analyse equipment efficiencies to recommend or implement improvements and changes to maximise running hours <br>• Communicate equipment information and changes to internal stakeholders to minimise production delays<br>• Determine work schedules in conjunction with other engineering / process teams to ensure availability and optimal utilisation of equipment to the relevant sections and consult with production teams on maintenance activities that affect production<br>• Ensure availability during standby duties according to schedule<br>• Perform administrative duties to ensure record accuracy and availability, budget compliance and spares availability<br>• Comply with established communication channels and enhance when required <br><br><br><strong>Qualification Requirements:</strong><br>• Grade 12 or Equivalent<br>• Diploma in Engineering Studies N6<br>• Valid Section 13 / Section 26 (D) Trade Test Certificate required Electrical or Mechanical<br>• Valid driver’s licence code B, EB or C1<br>• Own transport to attend to call outs<br>• Foreman certification<br>• Engineering Specialist qualification or Equivalent will be an advantage<br><br><br><strong>Experience and Skills&nbsp;Requirements</strong><br>•&nbsp;Minimum 10 years’ experience as an Engineering Supervisor in the mineral processing industry, if not in a current G.E.S or Engineering Specialist position<br>• Minimum 3-4 years’ experience as a General Engineering Supervisor or Engineering Specialist in mineral processing industry<br>• English language proficiency<br>• Time management skills<br>• Employee Relations training<br>• Supervisory training <br>• Finance for non-financial managers training <br>• Computer literate and highly competent in using MS Office Suite<br>• Relevant planned maintenance system training<br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://westcoastplantoperationsptyltd.simplify.hr/Vacancy/Apply/lpouuj" rel="nofollow">Apply</a>            </div>
    `],apply:"https://westcoastplantoperationsptyltd.simplify.hr/Vacancy/Apply/lpouuj",iconLink:"/assets/agency_icons/minopex.png",uuid:"pc12d8016-0036-4dcc-948b-0bab70efc82a"},{jobTitle:"Laboratory Supervisor",publishedDate:"Published 16 September 2024",expiryDate:"",location:"Tanzania, Tanzania",details:[`
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
        <div class="vacancy-description"><strong>Introduction</strong> <br>This position will be based at Quality Laboratory Services (QLS), Tanzania.<br><br><strong>Description</strong><br>This position is to be responsible for the efficient running and proper supervision of the Shift to ensure the receiving, preparation, analyses and dispatching of samples according to Laboratory processes and Client standards..<br><br><strong>Duties and Responsibilities</strong> <br>• Follow the correct chemical control measures at all times and ensure accurate reagent stock counting to assist in accurate metal accounting<br>• Perform routine preparation of samples (crushing, pulverizing, filtering, rolling, splitting and drying)<br>• Logging and receiving of samples on the Laboratory Information Management System (LIMS)<br>• Marking and labelling of sample tags and sample containers<br>• Storing of samples according to specifications and colour codes<br>• Disposing of redundant ore samples<br>• Effective determination of particle size distribution<br>• Effective determination of moisture content of different feed streams<br>• Perform friability analyses on geological samples when required<br>• Perform sieve sizing analyses on samples<br>• Perform moisture analyses on samples<br>• Ensure detailed traceable records of all test work done<br>• Conduct daily pre-use checklists before operating moving machinery and report sub-standard equipment immediately to ensure optimized functionality of all lab equipment at all times<br>• Perform administrative duties to ensure record accuracy and availability at all times<br>• Compile neat and accurate dispatch sheets, checklists and registers and ensure distribution according to organizational requirements<br>• Responsible for ensuring optimized functionality of all lab equipment at all times<br>• Compile various production reports and ensure distribution according to organizational requirements. <br>• Adhere to quality requirements, verifications, calibrations, certifications of equipment<br><br><strong>Qualification Requirements<br></strong>• Degree or Diploma in Analytical Chemistry would be advantageous. <br>• Computer Literate in MS Office<br>• Valid driver’s licence code B, EB or C1<strong><br><br></strong><strong>Experience and Skills&nbsp;Requirements</strong><br>• 3 years’ experience as a Sampler performing basic sample preparation in a laboratory is required<br>• Knowledge and good understanding of the basic concepts of sample preparation, e.g. contamination, representative sample and integrity of a sample<br>• Knowledge of Laboratory Equipment<br>• Knowledge and experience in the Fire Assay method for Gold Assays<br>• Knowledge and experience working on an Atomic Absorption instrument<br>• Knowledge of the chemical composition, structure, and properties of substances and of the chemical processes and transformations that they undergo. This includes uses of chemicals and their interactions, danger signs, production techniques, and disposal methods<br>• Supervisor experience<br>• Time management<br><br><br><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/yaqdji" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/yaqdji",iconLink:"/assets/agency_icons/minopex.png",uuid:"p3c69fc0a-a442-472a-8b43-fc7530e6f877"},{jobTitle:"Maintenance Planner",publishedDate:"Published 06 September 2024",expiryDate:"",location:"Saudi Arabia, Saudi Arabia",details:[`
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
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/npjijk",iconLink:"/assets/agency_icons/minopex.png",uuid:"pf1fd2645-6538-4185-a6b5-7e3d5b911259"},{jobTitle:"Process Section Supervisor",publishedDate:"Published 26 September 2024",expiryDate:"Closing Date: 03 October 2024",location:"Saldanha Bay Rural, Western Cape",details:[`
        <h1>Job Details</h1>
    `,`
        <div class="col-md-6">
            <div class="col-md-6">

                    <div class="row padding-bottom-10">
                        <label class="job-detail-bold-header" for="Vacancy_DivisionName">Division</label>
                        <label for="">West Coast Plant Operations (Pty) Ltd</label>
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based in the Saldanha Bay Municipality area in the Western Cape.<br><br><strong>Description</strong> <br>The purpose of this position is to supervise processes and teams within sections of the production area to ensure that operational parameters are maintained, and production targets are achieved according to the outlined production requirements whilst adhering to Health &amp; Safety standards<br><br><strong>Duties and Responsibilities</strong> <br><ul><li>Attend shift handover to obtain previous shift information and schedule shift resources accordingly.</li><li>Perform visual inspections of the work area to identify problems and report to the Shift Supervisor.</li><li>Monitor production according to shift targets</li><li>Supervise and maintain a high standard of housekeeping.</li><li>Provide maintenance support to the Engineering department.</li><li>Identify causes of spillage in the plant and generate suggestions to minimize the spillage.</li><li>Continuously monitor equipment failure and efficiency</li><li>Report breakdowns to the Shift Supervisor</li><li>Investigate and attend to visible process related maintenance problems, e.g., replacement of screens, idlers etc. where engineering is not required.</li><li>Issue clearance and safe work permits for all operational tasks conducted within responsible sections.</li><li>Conduct and supervise plant operational tasks within responsible sections</li></ul><br><br><strong>Qualification Requirements</strong> <br><ul><li>Grade 12</li><li>National Certificate Mineral Processing Level 2 or equivalent Minerals Processing qualification</li><li>Valid driver’s licence code B, EB or C1</li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 3 years’ experience as a Process / Plant Operator, preferably within the hydrometallurgical mineral processing industry</li><li>Computer Literate in MS Office</li><li>Froth flotation process operational experience would be advantageous.</li><li>English language proficiency</li><li>Time management skills</li><li>Supervisory skills</li><li>Knowledgeable in the requirements of the MHSA</li></ul><br><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://westcoastplantoperationsptyltd.simplify.hr/Vacancy/Apply/eqsywy" rel="nofollow">Apply</a>            </div>
    `],apply:"https://westcoastplantoperationsptyltd.simplify.hr/Vacancy/Apply/eqsywy",iconLink:"/assets/agency_icons/minopex.png",uuid:"pac81f1ff-066d-499a-aa50-03c04513bb7b"},{jobTitle:"Process Shift Supervisor",publishedDate:"Published 27 September 2024",expiryDate:"Closing Date: 04 October 2024",location:"Hibberdene, KwaZulu-Natal",details:[`
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
        <div class="vacancy-description"><strong>Introduction</strong> <br><br>This position will be based at Highbury in the South Coast of KZN <br><br><strong>Description</strong> <br>The purpose of this position is to be responsible for the effective Supervision of the required shift to ensure that shift processes are operational, controlled and maintained<br><br><br><strong>Duties and Responsibilities</strong>&nbsp;<br><ul><li>Investigate, diagnose problems and breakdowns to determine resource requirements </li><li>Perform inspections in accordance with the Mine Health and Safety Act regulations and analyse previous shift information </li><li>Co-ordinate and monitor equipment availability to ensure adherence to production parameters.</li><li>Report equipment efficiencies according to the production requirements </li><li>Communicate equipment availabilities and changes to relevant stakeholder to minimize production delays</li><li>Attend to breakdowns immediately to minimize down time</li><li>Ensure the adherence to the specified process parameters within the respective sections</li><li>Identify causes of spillage in the plant equipment and generate a suggestion to eliminate the spillage</li><li>Ensure adherence to Process Standards and Procedures, COP Master File, SHEQ and legislative requirements as expected from a 2.9.2 appointee.</li><li>Continuously monitor production information to ensure the attainment of Shift objectives</li><li>Perform administrative duties to ensure record accuracy and availability </li><li>Stockpile management to maximum production </li></ul><strong>Qualification Requirements<br></strong><ul><li>Grade 12 </li><li>National Certificate Mineral Processing Level 2 or equivalent Mineral Processing qualification will be advantageous<strong><br><br><strong></strong></strong></li></ul><strong>Experience and Skills&nbsp;Requirements</strong> <br><ul><li>Minimum 5 years’ experience as a Process Section Supervisor with 2 years DMS experience.</li><li>Solid:Liquid separation techniques including belt filter experience will be advantageous.</li><li>English Language Proficiency</li><li>Computer Literate in MS Office </li><li>Presentation skills</li><li>Time management skills</li><li>Attention to detail</li><li>Employee Relation and People Management skills </li><li>Supervisory skills</li><li>Valid driver’s licence code B, EB or C1</li></ul><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://southcoastplantoperations.simplify.hr/Vacancy/Apply/9gmxsx" rel="nofollow">Apply</a>            </div>
    `],apply:"https://southcoastplantoperations.simplify.hr/Vacancy/Apply/9gmxsx",iconLink:"/assets/agency_icons/minopex.png",uuid:"p143f52af-4a45-4373-a5f0-36c1cb466550"},{jobTitle:"Production Site Coordinator",publishedDate:"Published 23 September 2024",expiryDate:"Closing Date: 04 October 2024",location:"Johannesburg, Gauteng",details:[`
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
        <div class="vacancy-description"><strong>Introduction</strong><br><br>DRA Water is looking for qualified local individual for their project based on the Klipspruit Water Reclamation Treatment Plant near Phola, Mpumalanga. Positions are based on a Project Based Fixed Term Contract.<br><br><strong>Minimum Requirements<br></strong>• Matric/ Grade 12 Essential <br>• Tertiary Qualification in Administration required<br>• 1+ year of experience in a production plant operations or administration<br>• Proficiency in MS Office (Word, Excel, PowerPoint)<br>• Valid driver’s license and ability to drive both manual and automatic vehicles<br>• Strong organizational, communication, and time management skills<br><br><strong>DUTIES NOT LIMITED TO THE FOLLOWING:<br></strong><ul><li>Managing both manual and electronic documentation, coordinating procurement, stock control, and transport logistics, as well as overseeing clerical and cleaning staff.</li><li>Responsible for collecting, verifying, and reporting production data, preparing month-end reports, managing timesheets, and supporting the site team with various administrative needs</li><li>Coordinating site inspections, vehicle services, and staff onboarding documentation</li><li>Acts promptly on process defects as indicated by the SCADA system and plant walk-down</li><li>Maintain site documentation and generate procurement and administrative documents</li><li>Oversee stock control, transport logistics, and procurement activities.</li><li>Handle timesheet collation and submission and assist with month-end reporting.</li><li>Coordinate staff training and ensure compliance with safety and operational procedures.</li><li>Supervise site clerical and cleaning staff and manage site equipment inspections.</li><li>Assist with plant operations and provide technical support as needed.</li><li>Manage financial reconciliations, including purchase orders and expense invoices.</li></ul><strong><br><br><br><br><br><br></strong></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://drawater.simplify.hr/Vacancy/Apply/fxcpwd" rel="nofollow">Apply</a>            </div>
    `],apply:"https://drawater.simplify.hr/Vacancy/Apply/fxcpwd",iconLink:"/assets/agency_icons/minopex.png",uuid:"p0f799986-ea47-42f7-815f-dc7246cdf6a0"},{jobTitle:"Stores Controller",publishedDate:"Published 27 September 2024",expiryDate:"Closing Date: 04 October 2024",location:"Aggeneys, Northern Cape",details:[`
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
        <div class="vacancy-description"><strong>Introduction</strong><br><br>This position will be based at the Gamsberg site close to Aggeneys in the Northern Cape.<br><br><strong>Description</strong><br><br>The purpose of this position is to supervise the Stores activities to ensure issuing and receiving of goods and stock control according to Client requests and Minopex procedures<br><br><strong>Duties &amp; Responsibilities:<br>Inventory Control:</strong><br>• Supervise the stores processes to ensure maximum accuracy and accountability according to organisational standards<br>• Arrange and conduct regular cycle counts according to Company policy and sound stock control procedures<br>• Planning, scheduling and preparation for annual stock counts<br>• Investigate inventory discrepancies and perform / recommend appropriate action<br>• Investigate and resolve inventory related queries (goods / quality discrepancies, warranties and guarantees) to ensure availability of stock <br>• Maintain the binning and labelling of stock items to ensure efficient stock control and identification<br>• Ensure correct allocation, storage and stacking of stock items according to product requirements and sound storing practises e.g. storage of hazardous materials and the display of Materials Safety Data Sheet <br>• Attend to queries on goods received and resolve discrepancies according to Supply Chain procedures <br>• Monitor re-order points on a daily basis and raise requisitions to ensure continuous availability of stock <br>• Print various reports in relation to stock control processes e.g. exception reports, stock reports, availability reports <br>• Analyse, comment and make recommendations when necessary<br>• Expedite outstanding /overdue items<br>• Control month end procedures of Receiving / Issuing sections<br>• Ensure stores housekeeping in accordance with group policies and standards.<br><br><strong>Qualification Requirements:<br></strong>•&nbsp;Grade 12&nbsp;<br><br><strong>Experience &amp; Skills Requirements:<br></strong>• Minimum 3 years’ experience in issuing, receiving and stock control in the mining / mineral processing or related industries <br>• Knowledge of Stores processes and Inventory Management<br>• Computer literate in MS Office <br>• Supervisory skills<strong><br></strong><br><br></div>
            <div class="vacancy-apply-btn margin-bob-30">
<a class="btn btn-primary" href="https://minopex.simplify.hr/Vacancy/Apply/1smfki" rel="nofollow">Apply</a>            </div>
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/1smfki",iconLink:"/assets/agency_icons/minopex.png",uuid:"pe93af58b-0e2e-4614-b66e-46c7db9a9ec5"}],V={iconLink:z,title:J,blogPosts:G},Y="/assets/agency_icons/SA-Youth.png",H="SA-Youth",_=[{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">20 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAA1ADIANgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Team Member</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Gunret Foods</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Tlhabane, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAA1ADIANgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQAyADAAOQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">20 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAA1ADIANgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAA1ADIANgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Team Member</h3>
                <span class="text-sm text-weight-500 text-grey-600">Gunret Foods</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Tlhabane, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 11 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>We are looking for a Team Member to join our team! As a Team Member, your role involves preparing food, maintaining cleanliness, and delivering excellent customer service. Requirements include Matric qualification, proficiency in English, and a clean record. Preference given to South African candidates with previous General Assistant experience. If you're energetic and reliable, apply now!</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAA1ADIANgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 1dcbb755-f660-4192-ad68-b6c6712b0377</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538526" tabindex="-1" role="dialog" aria-labelledby="applypop_1538526" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADgAOQAyADAAOQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQAyADAAOQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=1dcbb755-f660-4192-ad68-b6c6712b0377" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Team Member" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538526" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzzBa-KdxR78itucLjP7fOfKom0MN8BWAJRpzO9b2_smWO5SZm5j6j2cCCXNAuu7ClgP7xBSq1hfMYY-Ddt8CX3j94pklSeu5KKr1muMSUaLInwp8VZVrpCxJP3K4EuJ3DkByb5HR5wvTkzQ9iDyOpF6yCBL_Qa0VibLfKYXNvNew"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAA1ADIANgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pd5db0caf-9f4b-4756-a94e-a2c5a66a236d"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">5 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA4ADYANgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Retail Store Manager </h3>
                       <yth-stack gap="condensed" align-items="center" direction="row" wrap="no-wrap" justify-content="start" align-content="normal" class="hydrated">
                        <yth-button style="--yth-icon-color: var(--yth-color-blue-500);" id="verify-1541866" class="verified mtrbl-neg2xs hydrated" icon="patchCheckFill" text-color="secondary" size="small" variant="text" color="primary" pull="none">
                            </yth-button>
                            <span class="text-sm text-weight-500 text-grey-600">
                                Femminit Recruitment (Melon Mobile)
                            </span>
                       </yth-stack>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
                    <yth-stack wrap="wrap" gap="condensed" direction="row" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">

                            <yth-badge variant="subtle" shape="rectangle" class="hydrated">R15000</yth-badge>
                            <yth-badge variant="subtle" shape="rectangle" class="hydrated">Base pay on fixed amount only</yth-badge>

                    </yth-stack> 
            </yth-stack>
                <h5 class="hmb-0" style="color: var(--yth-style-color-green-800);">No data needed to apply</h5>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA4ADYANgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA0ADIAOQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">5 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA4ADYANgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA4ADYANgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Retail Store Manager </h3>
        <yth-stack gap="zero" align-items="center" direction="row" wrap="no-wrap" justify-content="start" align-content="normal" class="hydrated">
            <yth-button style="--yth-icon-color: var(--yth-color-blue-500);" id="verify" class="verified mtbl-neg2xs hydrated" icon="patchCheckFill" text-color="secondary" size="small" variant="text" color="primary" pull="none">
            </yth-button>
            <span class="text-sm text-weight-500 text-grey-600">
                Femminit Recruitment (Melon Mobile)
            </span>
        </yth-stack>
            <div class="hmb-0 text-grey-400 text-xs">Member since Sep 2024</div>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 26 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: 10 October 2024" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: R 15,000.00 per month - Base pay on fixed amount only" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Full-time / permanent" class="hydrated"></yth-icon>
        </yth-stack> 
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>


                <div class="text-break text-md"><p>We have an exciting opportunity available within the Mobile Network Retail space. We are looking to hire a Store Manager who will manage a team of<strong> Store Assistants</strong> and <strong>Sales Consultants </strong>and who will also be responsible for <strong>Store Management</strong>, <strong>Product Management</strong> and <strong>Customer Engagement</strong>.</p>
<p>Specifically, we aim to recruit a candidate who is confident, dynamic and has excellent interpersoanl skills. It would be an added bonus if the person has managed a team of sales consultants.&nbsp;</p>
<p>&nbsp;</p></div>
            </yth-stack>
        </yth-section>
        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role requirement</h2>

                <div class="text-break text-md"><p>We are looking for a young, dynamic and confident individual who has the capability to manage a team of store assistants and sales consultants, that is an excellent communicator and, that can engage with customers.&nbsp;</p>
<p>Captivating Smile: An engaging and warm smile that can create a welcoming atmosphere.</p>
<p>Friendly Demeanor: A natural ability to interact positively with customers and team members.</p>
<p>Presentable Appearance: A professional and approachable look that reflects the brand's image.</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA4ADYANgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 1541866</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>



        <yth-navbar zindex="1030" variant="bottom" class="hydrated" style="z-index: 1030;">
        <yth-button auto-click-loader="" expanded="" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADgAOQA0ADIAOQA" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
            Apply here
        </yth-button>
        </yth-navbar>

</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541866" tabindex="-1" role="dialog" aria-labelledby="applypop_1541866" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADgAOQA0ADIAOQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <div class="VerifiedTooltip">
            <yth-tooltip id="VerificationTooltip" dark="" attach-to="verify" placement="bottom" style="display: none;" class="hydrated">
            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <div id="tooltipText">
                    This icon means the company is verified by SA Youth.
                </div>
                <yth-stack justify-content="end" direction="row" wrap="no-wrap" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                    <yth-button text-color="dark" variant="text" href="/Contact" color="primary" size="base" pull="none" class="hydrated">Learn more</yth-button>
                </yth-stack>
            </yth-stack>
        </yth-tooltip>
    </div>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA4ADYANgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pe0df0869-1ee3-4aa4-9d7a-adb16171d194"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">29 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANQA1ADcAMAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser UFS46 - Hebron Mall</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Akasia, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANQA1ADcAMAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA0ADYANQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">29 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANQA1ADcAMAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANQA1ADcAMAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser UFS46 - Hebron Mall</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Akasia, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 02 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li><strong>Kindly note that internal candidates or candidates with previous experience at Smollan will be prioritised.</strong></li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANQA1ADcAMAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 12c14d42-0c9e-483c-956a-5bf38c8bac97</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1535570" tabindex="-1" role="dialog" aria-labelledby="applypop_1535570" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADgAOQA0ADYANQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA0ADYANQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=12c14d42-0c9e-483c-956a-5bf38c8bac97" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser UFS46 - Hebron Mall" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1535570" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxMKj1pm91NnImj-0ta766aAqZE0133dmTyT8NnJ46ImbtLUO34k0v8m7s0e8xXiMAZ-KVflSuWbLTPD-pQnRT0OO4lDLb0fI4EbJLJ1WChUq_U6VKfrJqnX2tJAaKFqVBKPaFogysr4tKZI3cj68FQ1GsddijWrLLpeQxsnSjjBA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANQA1ADcAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p3da06f44-4e91-4c4d-a649-4fdc29339b26"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">27 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANgA2ADEAOAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Hartbeespoort, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANgA2ADEAOAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA2ADgANwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">27 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANgA2ADEAOAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANgA2ADEAOAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Hartbeespoort, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 04 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li><strong>Kindly note that internal candidates or candidates with previous experience at Smollan will be prioritised.</strong></li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANgA2ADEAOAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> a6da94a5-d21c-454a-b36e-a036b3f7b8a4</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1536618" tabindex="-1" role="dialog" aria-labelledby="applypop_1536618" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADgAOQA2ADgANwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA2ADgANwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=a6da94a5-d21c-454a-b36e-a036b3f7b8a4" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1536618" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzwFnp2xiuVg2Uf5ndFIzwnFpIdXyVdNHF7XIyIugxrQrOgQTOZIsZ0qukcg98CJufZZ5gPUqTn6tKbqONkITyfl8ByWNTr1lAywQ35XWTNEWRYNUQiHY9KNfF1NXXCIVBchoFIZKJoDcYCGdXk3plGvSsIdeP8oQ7yiwBBKAKoNw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANgA2ADEAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pddcecc12-c7dc-44ce-8701-838981cb4a84"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">26 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANgA2ADIAOQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS63 - Hartbeespoort</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Hartbeespoort, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANgA2ADIAOQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA5ADcAMAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">26 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANgA2ADIAOQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANgA2ADIAOQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS63 - Hartbeespoort</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Hartbeespoort, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 05 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANgA2ADIAOQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 141f4393-d50b-43d6-b595-629123676130</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1536629" tabindex="-1" role="dialog" aria-labelledby="applypop_1536629" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADgAOQA5ADcAMAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADgAOQA5ADcAMAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=141f4393-d50b-43d6-b595-629123676130" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS63 - Hartbeespoort" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1536629" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQyVc3r2WY8_lfPiTgc_NaK3GeXGVky0jemENm9FRS_-zJym7kcFF2y-Rj-RNQmpm4MkLrP12tzJ6RLiV0ugZFsl7-8GpFxQ-NM8bhCVU-NgjFLxSxDq4F-mSLVsrYv10jLWxQx2yTR5WsezsTkovFBiXKEajTe-HJrGq_aXlSZ37A"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANgA2ADIAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p75235194-7beb-46b8-9564-ecadb390c6d9"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">21 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAAxADcAMgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">General Warehouse Worker</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Hinterland</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Wolmaransstad, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAAxADcAMgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAwADYANwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">21 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAAxADcAMgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAAxADcAMgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">General Warehouse Worker</h3>
                <span class="text-sm text-weight-500 text-grey-600">Hinterland</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Wolmaransstad, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 10 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>Hinterland is looking for a General Worker to join our team! As a General Worker you will play and in various work settings such as warehouses, construction sites, and factories. General Workers are responsible for providing essential support to their team members by executing a wide range of manual tasks such as assisting with material handling, equipment maintenance, and overall workspace cleanliness.</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAAxADcAMgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 00ad0f14-7deb-4f9b-9af7-74f08237869f</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538172" tabindex="-1" role="dialog" aria-labelledby="applypop_1538172" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAAwADYANwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAwADYANwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=00ad0f14-7deb-4f9b-9af7-74f08237869f" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="General Warehouse Worker" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538172" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxlhzMTnrPttaRV1bZfgYtdYuW-6LFhrE_SjVUFHu5OzoTXjDUrLv6sdiT-TJmvLLNPfdshYxHwPZ1XV7smE0GGTFZW89TSQQhKCDHKZNMaS_nvRvj329RRSHpcxHjjrQ0gzyVpgyEftKGBg2FU6LNSsbar7-qpMyjHg2F9etgMoA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAAxADcAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p7331c096-673b-43c7-a522-dd69753c0ef9"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA2ADgANQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Shoprite Mafikeng Mall - TFS40</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADgANQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAxADEANgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA2ADgANQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA2ADgANQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Shoprite Mafikeng Mall - TFS40</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA2ADgANQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 920c0032-4ba9-4cd4-a8f2-38fe870410e6</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540685" tabindex="-1" role="dialog" aria-labelledby="applypop_1540685" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAAxADEANgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAxADEANgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=920c0032-4ba9-4cd4-a8f2-38fe870410e6" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Shoprite Mafikeng Mall - TFS40" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540685" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQyEEnMKYGgUaHJOrZEpUfkvIUg760KyQ3N1uuPR3BoctaKk_D34t0Mo-bpQUc57iMHuvIAFz35-DT6jlQhgiIaioe8I_FkPtuVNLB8AEMk2hwuN_HmmZeSxV-BqcSSKTL8l-7Jk7TzLAY4oVJYf6nNPK5P4hPluTi4qTuWR9wIirA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADgANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pea026c86-b0a4-4d40-826c-55024c28fe9e"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA3ADAAMwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Checkers Mahikeng Mall - TFS40</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADAAMwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAzADAANQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA3ADAAMwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA3ADAAMwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Checkers Mahikeng Mall - TFS40</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA3ADAAMwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> a0eeb02a-7dc4-44c4-970e-4db8a21519dd</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540703" tabindex="-1" role="dialog" aria-labelledby="applypop_1540703" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAAzADAANQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAzADAANQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=a0eeb02a-7dc4-44c4-970e-4db8a21519dd" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Checkers Mahikeng Mall - TFS40" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540703" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzVAVvWjeX0pczRAg2Sk-Z9Xp4-9tPgOcuH5bASCY95Gy4-_btJj8cwqDbsLZPvfo9QC_i26nXJ4vkIVImmTLFpzHacxVDh7rxCvQs_Vqt9TMEFok_Tm4peY9Pz_L1ayXxhJgcdhIYKhTh7EWUTXej7HVgOcII2k2995p5Bx48Anw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADAAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p2e16a087-d167-4362-b4ba-cfed47e5cc27"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA3ADEAOQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Shoprite Mafikeng Mall - TFS40</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADEAOQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAzADYAOQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA3ADEAOQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA3ADEAOQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Shoprite Mafikeng Mall - TFS40</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA3ADEAOQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> ac31ea5b-dbe2-49fc-b36a-ec2f9f6fc8ef</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540719" tabindex="-1" role="dialog" aria-labelledby="applypop_1540719" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAAzADYAOQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAAzADYAOQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=ac31ea5b-dbe2-49fc-b36a-ec2f9f6fc8ef" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Shoprite Mafikeng Mall - TFS40" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540719" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzad5MS5Su7tpONXGLCWCByijyUfrjQKwQxsPjGzjfYdkDlzYiBdirqQ2GlMKYAFy_vHwnlV3C-9hFZyHYH8YgsEpmnzMc-WTZesOjFVEppxJ8H13r9dF0Ra_C8YBixbK0M9BCvc_QH8TVsoYQNk7wXNfM3joJRHh5NTs4hsEgY8w"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADEAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p075cf8c0-5a84-41eb-82be-5b7e22762434"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA3ADcANQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:null,\\&quot;sd\\&quot;:null,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;1\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Spar Mafikeng - TFS40</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADcANQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAA0ADgAMQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA3ADcANQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA3ADcANQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:null,\\\\u0022sd\\\\u0022:null,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00221\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/Result?SelectedOption=Jobs\\\\u0026SelectedDatePosted=\\\\u0026TotalResultCount=0\\\\u0026ShowTips=False\\\\u0026LocationDistance=0\\\\u0026InvolvedPartyId=1237926\\\\u0026OnBehalfOfView=False\\\\u0026JobSearch=\\\\u0026JobLocationId=2062972\\\\u0026PreviousLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026JobLocation=Tlhabane\\\\u002BUnit\\\\u002B1%2C\\\\u002BTlhabane%2C\\\\u002B0299\\\\u0026Actiontype=Search\\\\u0026OnlineOnly=false\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Spar Mafikeng - TFS40</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA3ADcANQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> dc5ca63c-fa37-4a76-8023-f8491200fb21</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540775" tabindex="-1" role="dialog" aria-labelledby="applypop_1540775" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAA0ADgAMQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAA0ADgAMQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=dc5ca63c-fa37-4a76-8023-f8491200fb21" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Spar Mafikeng - TFS40" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540775" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxTfXT8vI7-nrYzzj0jNJOVjO4mIW86zACxYuhNC_zVeYGaYAZ3HXqrn0Lpbat4TgYARa8YFQU9wnymOadZMaElV3S_98GGmF83Jhc9qEc7dLY1QrK_x5SvyXkJTe-E456nE75SfGZv2SOod36pHnfw384wkh9iYQjtFL6yB07CLA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADcANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3Anull,%22sd%22%3Anull,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%221%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FResult%3FSelectedOption%3DJobs%26SelectedDatePosted%3D%26TotalResultCount%3D0%26ShowTips%3DFalse%26LocationDistance%3D0%26InvolvedPartyId%3D1237926%26OnBehalfOfView%3DFalse%26JobSearch%3D%26JobLocationId%3D2062972%26PreviousLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26JobLocation%3DTlhabane%2BUnit%2B1%252C%2BTlhabane%252C%2B0299%26Actiontype%3DSearch%26OnlineOnly%3Dfalse",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pcbab864f-4904-4f95-a29c-2af5bb6f050a"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA4ADEAMwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Spar Mafikeng - TFS40</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADEAMwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAA2ADYAOQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA4ADEAMwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA4ADEAMwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Spar Mafikeng - TFS40</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA4ADEAMwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> fb7210a2-a3f6-4248-a3f8-0e7961f76363</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540813" tabindex="-1" role="dialog" aria-labelledby="applypop_1540813" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAA2ADYAOQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAA2ADYAOQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=fb7210a2-a3f6-4248-a3f8-0e7961f76363" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Spar Mafikeng - TFS40" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540813" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxtSkCnuULRJV0pvc3PQygVlAuR26VGIkTCvbmf7pWsji95zfrDae1CnkrqH6uEUICg4lCs_x5Ub4meCMrgtobLhsiEcVx-WoowjIlmsWl9c665SG-9V1XP8vkrf30C4ESpm7vUeD1DljvhqvJuCibk0TfcTBpxajsDriKK3EujTw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADEAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pdeac86f2-0433-47e2-8f62-e5c6e14acebb"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA4ADIAMAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - PnP Fam Harties - TFS63</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Hartbeespoort, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADIAMAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAA4ADkAMAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA4ADIAMAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA4ADIAMAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - PnP Fam Harties - TFS63</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Hartbeespoort, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA4ADIAMAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> ffa9b8ec-b0f2-4a70-a164-42aa379b35e9</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540820" tabindex="-1" role="dialog" aria-labelledby="applypop_1540820" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMAA4ADkAMAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMAA4ADkAMAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=ffa9b8ec-b0f2-4a70-a164-42aa379b35e9" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - PnP Fam Harties - TFS63" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540820" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwQsp0VM9IqRVUH2v1mnQDrcH8ClAKudrzeZgGcACqnvs1MY78zFZJ5pmgE69G0YqfPlqItVDXkKWCqSCj3APYoeudglBBqrs9mxAAeYlah-gxtmjJgZlt3U9i_SrflKj0OCWNZeLND4nK7NBTzzIqUC9JOZY4JyGcEW9Y54s8b6Q"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADIAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p1c90e6cf-9cd2-4ba9-917a-cdca49634dcc"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">8 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA1ADAAMgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Part-Time Sales Assistant</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">PEP South Africa</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA1ADAAMgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQAwADQAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">8 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA1ADAAMgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA1ADAAMgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Part-Time Sales Assistant</h3>
                <span class="text-sm text-weight-500 text-grey-600">PEP South Africa</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 23 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA1ADAAMgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 47f2abf9-48d9-49a7-aaa2-ff969aadf48b</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541502" tabindex="-1" role="dialog" aria-labelledby="applypop_1541502" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQAwADQAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQAwADQAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=47f2abf9-48d9-49a7-aaa2-ff969aadf48b" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Part-Time Sales Assistant" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541502" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQyvlhXqfK2eVofh4NXDIpzOsur1xDrTOHx9_VDnSLYSwfqqd46w4GOV7-Pw4SUUCtCvghbpIbCr30FILaCvlobWlmOdy8F9VMPHvX55Gjm9I2w-TZIzD5nkTWOJKkfzEF0AvkRa0R-DXTQO8HnkAbi1RV0jWl8LT1M0a0BlgG_rjA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA1ADAAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p1a3f9f27-0b8f-42cf-98e9-98050cc5e110"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">8 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA3ADAANwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">40hr Merchandiser Devland Cash n Carry Mafikeng</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA3ADAANwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQAzADYAMgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">8 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA3ADAANwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA3ADAANwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">40hr Merchandiser Devland Cash n Carry Mafikeng</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 23 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA3ADAANwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> b8ca4540-a43b-4080-b20b-bc49a977f993</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541707" tabindex="-1" role="dialog" aria-labelledby="applypop_1541707" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQAzADYAMgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQAzADYAMgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=b8ca4540-a43b-4080-b20b-bc49a977f993" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="40hr Merchandiser Devland Cash n Carry Mafikeng" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541707" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxz7r2cbam8ILPHFHeZalbJXltg6lhFqkmgelZBTPm57v9DTlmOFABJJ9ZRejtwMJsvxR1rsgrSNLGYifFfIICWuPl1GVY-Rs6FVd005yHnn4uflWEvfyg_EaaJbCjI2IJFBPQ3s9yXiVkMHH93Afo3n_gqgVQXaUM5xNgyBtNIRw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA3ADAANwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pfb2237d3-1c2a-4b5e-afd9-ab348117003c"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">6 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA5ADAANAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA5ADAANAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQAzADYANQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">6 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA5ADAANAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA5ADAANAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 25 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li><strong>Kindly note that internal candidates or candidates with previous experience at Smollan will be prioritised.</strong></li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA5ADAANAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 486a62f1-f410-47e9-b0b0-2d1eea52efe9</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541904" tabindex="-1" role="dialog" aria-labelledby="applypop_1541904" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQAzADYANQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQAzADYANQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=486a62f1-f410-47e9-b0b0-2d1eea52efe9" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541904" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQycsRcsohCcyol9PzYGDXi0QZ12Kz0Wtip4TAj-9KLW4sckpB5SjOheAmL6RPGf8j9L2CycV_Sg0YOneOuclAnpLlQrROMYM0fKBKb60_upsQGEEWIhiwS6Faq_rrlfFO_44znVuyI5eSvdojf2dLHWzZ_PAPpwCEqOcFErX23xhA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA5ADAANAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p4360f434-8db2-4e05-8b7b-aa939885a28c"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">5 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMgAwADYAOQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS40 - Mafikeng Mall</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mahikeng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMgAwADYAOQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQA1ADUAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">5 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMgAwADYAOQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMgAwADYAOQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS40 - Mafikeng Mall</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mahikeng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 26 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMgAwADYAOQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 66f4c87a-f5e1-4aaf-b30f-3a823bc1f1c2</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1542069" tabindex="-1" role="dialog" aria-labelledby="applypop_1542069" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQA1ADUAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQA1ADUAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=66f4c87a-f5e1-4aaf-b30f-3a823bc1f1c2" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS40 - Mafikeng Mall" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1542069" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwVTPggyzQGLAXDLIf2dZtvaniF103QpHs5TPWsX3apCI_lVP8R6YPxo7XbcoUjJBXRHxXtYDI0T-xMaIgvgnFZJc1fk6FAb9TpBISA-zsBAbagOdwYA6nLijH2a3YSBOl3-9f9jqBjJClqgu9BkIYsOP7QICwOZdE8r8DtEzOSfg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMgAwADYAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pffa6eacd-c794-441d-a0c5-cf4b957b61eb"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">11 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA4ADMAOQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">In - Store Brand Ambassador: Rustenburg Mall</h3>
                       <yth-stack gap="condensed" align-items="center" direction="row" wrap="no-wrap" justify-content="start" align-content="normal" class="hydrated">
                        <yth-button style="--yth-icon-color: var(--yth-color-blue-500);" id="verify-1540839" class="verified mtrbl-neg2xs hydrated" icon="patchCheckFill" text-color="secondary" size="small" variant="text" color="primary" pull="none">
                            </yth-button>
                            <span class="text-sm text-weight-500 text-grey-600">
                                Edge
                            </span>
                       </yth-stack>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
                    <yth-stack wrap="wrap" gap="condensed" direction="row" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">

                            <yth-badge variant="subtle" shape="rectangle" class="hydrated">R5000</yth-badge>
                            <yth-badge variant="subtle" shape="rectangle" class="hydrated">Base pay on fixed amount only</yth-badge>

                    </yth-stack> 
            </yth-stack>
                <h5 class="hmb-0" style="color: var(--yth-style-color-green-800);">No data needed to apply</h5>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADMAOQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQA3ADIAMQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">11 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA4ADMAOQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA4ADMAOQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">In - Store Brand Ambassador: Rustenburg Mall</h3>
        <yth-stack gap="zero" align-items="center" direction="row" wrap="no-wrap" justify-content="start" align-content="normal" class="hydrated">
            <yth-button style="--yth-icon-color: var(--yth-color-blue-500);" id="verify" class="verified mtbl-neg2xs hydrated" icon="patchCheckFill" text-color="secondary" size="small" variant="text" color="primary" pull="none">
            </yth-button>
            <span class="text-sm text-weight-500 text-grey-600">
                Edge
            </span>
        </yth-stack>
            <div class="hmb-0 text-grey-400 text-xs">Member since Feb 2021</div>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 20 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: 20 October 2024" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: R 5,000.00 per month - Base pay on fixed amount only" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Fixed-term" class="hydrated"></yth-icon>
        </yth-stack> 
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>


                <div class="text-break text-md"><p><strong>What is this job all about?</strong></p><p></p><p>As a Client Brand Ambassador, employed by Edge Field Marketing (the Company) you will be assigned to work within a selected retail store. &nbsp;Your main focus is to provide our Client product information to potential customers and to achieve daily targets.</p><p></p><p><strong>Responsibilities include, but are not limited to:</strong></p><p></p><ul><li><p>Actively promoting the Client's brand to customers.</p></li><li><p>Providing customers with information or assistance on the use of the Clients’ channels.</p></li></ul></div>
            </yth-stack>
        </yth-section>
        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role requirement</h2>

                <div class="text-break text-md"><p>Are you someone who thrives on the thrill of connecting with potential customers? Do you find the world of sales exciting, and are you always eager to push the boundaries to achieve your targets? If you answered "yes" to these questions, then we have an exciting opportunity waiting for you!</p><p></p><p><strong>Why Choose Us?</strong> At Edge Field Marketing, we believe in fostering a dynamic and supportive sales environment that encourages growth, creativity, and success. We're on the lookout for enthusiastic individuals who are ready to embark on a rewarding journey with us.</p><p></p><p><strong>What We Offer:</strong></p><p></p><ul><li><p>Extensive Training</p></li><li><p>Supportive Team</p></li><li><p>Fun and Inclusive Culture</p><p></p></li></ul><p><strong>Here's what we're looking for in our ideal candidate:</strong></p><p></p><ul><li><p><strong>Education:</strong> A matric qualification is required to demonstrate your commitment to personal growth and development.</p></li><li><p><strong>Unemployed:</strong> We're looking for dedicated individuals who are ready to commit their full energy and focus to this role.</p></li><li><p><strong>Availability:</strong> You must be available to work 5 days a week, ensuring your commitment to achieving our sales targets.</p></li><li><p><strong>Educational Commitments: </strong>We understand the importance of your education, so we require candidates who are not currently involved in any study or learnership programs that may require you to take extended leave.</p></li><li><p><strong>Physical Stamina:</strong> This role requires you to be on your feet all day, every day, so physical fitness is essential.</p></li><li><p><strong>Location:</strong> You should reside within 15km of the area advertised, allowing for easy access to our workplace.</p><p></p></li></ul><p>Ready to elevate your sales career? <strong>Apply now by completing the following steps:&nbsp;</strong></p><ul><li><p>Apply here through SAYouth</p></li><li><p>Complete the relevant assessments </p></li><li><p>Complete a video/telephonic interview with one of our recruiters</p></li><li><p>If successful, attend a 2 day bridge/training programme&nbsp;</p><p></p></li></ul><p><strong>IMPORTANT NOTE: Due to the high volumes of applications, kindly consider your application as unsuccessful if you have not been contacted within 4 weeks.&nbsp;</strong></p><p><strong><em>                               Edge Field Marketing is an Equal Opportunity Employer.</em></strong></p><p></p><p><em>Disclaimer: By supplying Edge Field Marketing your personal information, you agree that your information will be stored according to the requirements of the POPIA Act.</em></p></div>
            </yth-stack>
        </yth-section>
        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Benefits</h2>

                <div class="text-break text-md"><ul><li><p>Group Life Cover.</p></li><li><p>Employee Assistance Programme.</p></li><li><p>Training and development.</p></li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA4ADMAOQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 1540839</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>



        <yth-navbar zindex="1030" variant="bottom" class="hydrated" style="z-index: 1030;">
        <yth-button auto-click-loader="" expanded="" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQA3ADIAMQA" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
            Apply here
        </yth-button>
        </yth-navbar>

</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540839" tabindex="-1" role="dialog" aria-labelledby="applypop_1540839" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQA3ADIAMQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <div class="VerifiedTooltip">
            <yth-tooltip id="VerificationTooltip" dark="" attach-to="verify" placement="bottom" style="display: none;" class="hydrated">
            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <div id="tooltipText">
                    This icon means the company is verified by SA Youth.
                </div>
                <yth-stack justify-content="end" direction="row" wrap="no-wrap" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                    <yth-button text-color="dark" variant="text" href="/Contact" color="primary" size="base" pull="none" class="hydrated">Learn more</yth-button>
                </yth-stack>
            </yth-stack>
        </yth-tooltip>
    </div>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADMAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p91d07aac-9c2d-43fb-a31b-63000238a3af"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">11 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA4ADQAMQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">In - Store Brand Ambassador: Boitekong Mall</h3>
                       <yth-stack gap="condensed" align-items="center" direction="row" wrap="no-wrap" justify-content="start" align-content="normal" class="hydrated">
                        <yth-button style="--yth-icon-color: var(--yth-color-blue-500);" id="verify-1540841" class="verified mtrbl-neg2xs hydrated" icon="patchCheckFill" text-color="secondary" size="small" variant="text" color="primary" pull="none">
                            </yth-button>
                            <span class="text-sm text-weight-500 text-grey-600">
                                Edge
                            </span>
                       </yth-stack>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
                    <yth-stack wrap="wrap" gap="condensed" direction="row" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">

                            <yth-badge variant="subtle" shape="rectangle" class="hydrated">R5000</yth-badge>
                            <yth-badge variant="subtle" shape="rectangle" class="hydrated">Base pay on fixed amount only</yth-badge>

                    </yth-stack> 
            </yth-stack>
                <h5 class="hmb-0" style="color: var(--yth-style-color-green-800);">No data needed to apply</h5>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADQAMQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMQA4ADQAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">11 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA4ADQAMQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA4ADQAMQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">In - Store Brand Ambassador: Boitekong Mall</h3>
        <yth-stack gap="zero" align-items="center" direction="row" wrap="no-wrap" justify-content="start" align-content="normal" class="hydrated">
            <yth-button style="--yth-icon-color: var(--yth-color-blue-500);" id="verify" class="verified mtbl-neg2xs hydrated" icon="patchCheckFill" text-color="secondary" size="small" variant="text" color="primary" pull="none">
            </yth-button>
            <span class="text-sm text-weight-500 text-grey-600">
                Edge
            </span>
        </yth-stack>
            <div class="hmb-0 text-grey-400 text-xs">Member since Feb 2021</div>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 20 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: 20 October 2024" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: R 5,000.00 per month - Base pay on fixed amount only" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Fixed-term" class="hydrated"></yth-icon>
        </yth-stack> 
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>


                <div class="text-break text-md"><p><strong>What is this job all about?</strong></p><p></p><p>As a Client Brand Ambassador, employed by Edge Field Marketing (the Company) you will be assigned to work within a selected retail store. &nbsp;Your main focus is to provide our Client product information to potential customers and to achieve daily targets.</p><p></p><p><strong>Responsibilities include, but are not limited to:</strong></p><p></p><ul><li><p>Actively promoting the Client's brand to customers.</p></li><li><p>Providing customers with information or assistance on the use of the Clients’ channels.</p></li></ul></div>
            </yth-stack>
        </yth-section>
        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role requirement</h2>

                <div class="text-break text-md"><p>Are you someone who thrives on the thrill of connecting with potential customers? Do you find the world of sales exciting, and are you always eager to push the boundaries to achieve your targets? If you answered "yes" to these questions, then we have an exciting opportunity waiting for you!</p><p></p><p><strong>Why Choose Us?</strong> At Edge Field Marketing, we believe in fostering a dynamic and supportive sales environment that encourages growth, creativity, and success. We're on the lookout for enthusiastic individuals who are ready to embark on a rewarding journey with us.</p><p></p><p><strong>What We Offer:</strong></p><p></p><ul><li><p>Extensive Training</p></li><li><p>Supportive Team</p></li><li><p>Fun and Inclusive Culture</p><p></p></li></ul><p><strong>Here's what we're looking for in our ideal candidate:</strong></p><p></p><ul><li><p><strong>Education:</strong> A matric qualification is required to demonstrate your commitment to personal growth and development.</p></li><li><p><strong>Unemployed:</strong> We're looking for dedicated individuals who are ready to commit their full energy and focus to this role.</p></li><li><p><strong>Availability:</strong> You must be available to work 5 days a week, ensuring your commitment to achieving our sales targets.</p></li><li><p><strong>Educational Commitments: </strong>We understand the importance of your education, so we require candidates who are not currently involved in any study or learnership programs that may require you to take extended leave.</p></li><li><p><strong>Physical Stamina:</strong> This role requires you to be on your feet all day, every day, so physical fitness is essential.</p></li><li><p><strong>Location:</strong> You should reside within 15km of the area advertised, allowing for easy access to our workplace.</p><p></p></li></ul><p>Ready to elevate your sales career? <strong>Apply now by completing the following steps:&nbsp;</strong></p><ul><li><p>Apply here through SAYouth</p></li><li><p>Complete the relevant assessments </p></li><li><p>Complete a video/telephonic interview with one of our recruiters</p></li><li><p>If successful, attend a 2 day bridge/training programme&nbsp;</p><p></p></li></ul><p><strong>IMPORTANT NOTE: Due to the high volumes of applications, kindly consider your application as unsuccessful if you have not been contacted within 4 weeks.&nbsp;</strong></p><p><strong><em>                               Edge Field Marketing is an Equal Opportunity Employer.</em></strong></p><p></p><p><em>Disclaimer: By supplying Edge Field Marketing your personal information, you agree that your information will be stored according to the requirements of the POPIA Act.</em></p></div>
            </yth-stack>
        </yth-section>
        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Benefits</h2>

                <div class="text-break text-md"><ul><li><p>Group Life Cover.</p></li><li><p>Employee Assistance Programme.</p></li><li><p>Training and development.</p></li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA4ADQAMQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 1540841</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>



        <yth-navbar zindex="1030" variant="bottom" style="z-index: 1030;" class="hydrated">
        <yth-button auto-click-loader="" expanded="" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQA4ADQAOAA" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
            Apply here
        </yth-button>
        </yth-navbar>

</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540841" tabindex="-1" role="dialog" aria-labelledby="applypop_1540841" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMQA4ADQAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <div class="VerifiedTooltip">
            <yth-tooltip id="VerificationTooltip" dark="" attach-to="verify" placement="bottom" style="display: none;" class="hydrated">
            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <div id="tooltipText">
                    This icon means the company is verified by SA Youth.
                </div>
                <yth-stack justify-content="end" direction="row" wrap="no-wrap" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                    <yth-button text-color="dark" variant="text" href="/Contact" color="primary" size="base" pull="none" class="hydrated">Learn more</yth-button>
                </yth-stack>
            </yth-stack>
        </yth-tooltip>
    </div>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA4ADQAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pd54bca59-c3ce-41df-b9b1-15a6f9ebd17f"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">29 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANQAzADYAMgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">District Sales Manager - FMCG</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">RPO Recruitment</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANQAzADYAMgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAwADAANgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">29 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANQAzADYAMgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANQAzADYAMgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">District Sales Manager - FMCG</h3>
                <span class="text-sm text-weight-500 text-grey-600">RPO Recruitment</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 02 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md">RPO Recruitment is currently seeking a highly motivated and experienced District Sales Manager to join our client, a leading FMCG company, based in Rustenburg. As a District Sales Manager, you will be responsible for overseeing the sales performance of a designated district, managing a team of sales representatives, and driving business growth in your assigned area. The successful candidate will have a proven track record in FMCG sales, excellent leadership skills, and a passion for achieving targets and driving results. Responsibilities: Manage and lead a team of sales representatives to achieve sales targets and objectives in the assigned district. Develop and execute sales strategies to drive business growth. Build and maintain relationships with key customers and stakeholders. Monitor market trends, competitor activities, and customer feedback to identify opportunities for growth. Analyze sales data and performance metrics to assess performance and make strategic decisions. Provide coaching and training to the sales team to enhance their skills and performance. Collaborate with cross-functional teams to ensure effective execution of sales plans. Prepare and present regular sales reports and forecasts to senior management. Requirements Minimum of 5 years of experience in sales, preferably in the FMCG industry. Proven track record of achieving sales targets and driving business growth. Strong leadership and team management skills. Excellent communication and interpersonal skills. Ability to analyze sales data and market trends to inform decision-making. Bachelor's degree in business, marketing, or a related field. Proficiency in MS Office Suite. Willingness to travel within the assigned district as required. Benefits Salary negotiable Contact RPO Recruitment for your next career opportunity. Our client is offering a highly competitive salary for this role based on experience. Apply for this role today, contact Jamie-lee McCallum at RPO Recruitment or on LinkedIn You can also visit the RPO Recruitment website: rporecruitment.us or email us your CV: logisticsrpo-recruit.za.com ​ We will contact you telephonically in 3 days should you be suitable for this vacancy. If you are not suitable, we will put your CV on file and contact you regarding any future vacancies that arise.</div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANQAzADYAMgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 4848663092</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1535362" tabindex="-1" role="dialog" aria-labelledby="applypop_1535362" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgAwADAANgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAwADAANgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://www.adzuna.co.za/details/4848663092?v=29B2A9C9CE262385925618D3DA45D49CEB7ABC8C&amp;r=17480417&amp;ccd=0f9228d6c46f70e1ddd055f2f8b76939&amp;frd=2c52763e544fcf576a2ccab21bb29b51&amp;utm_source=harambee&amp;utm_medium=ppc&amp;partnerb=1&amp;chnlid=1782&amp;title=District%20Sales%20Manager%20-%20FMCG&amp;a=e" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="District Sales Manager - FMCG" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1535362" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQztBxAgGc9wltytyGI-0QtzxnLPu2rmz4KequOuPItMMsOrxOKWatLuxLy1joHmQiob7fEsgNGDDqon3ywkYQjZ382TSnXbB1vbvvE2h-brAA51sm10CAtFd1PqvunQ02-O8IUGKws9GJXlJqox8dielovXnc7Mn7niLCcrFPnyGg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANQAzADYAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p7751deee-405d-46fa-8999-20318d51d06e"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">27 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANgAzADYANgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;2\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANgAzADYANgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAwADQAMwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">27 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANgAzADYANgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANgAzADYANgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00222\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=2\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 04 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANgAzADYANgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 9a2606d4-12f3-4f5c-bf8b-53b3b57e313e</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1536366" tabindex="-1" role="dialog" aria-labelledby="applypop_1536366" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgAwADQAMwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAwADQAMwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=9a2606d4-12f3-4f5c-bf8b-53b3b57e313e" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1536366" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxpkrc9_5SLLlqmtDVkpY-GXOwUYQdxzSSbiqXw0hHfF2SU30tuh1y1lRg2-q0TNJ8hpJKutsTLHI74-N4wftOFVc0A8az20eKVg6Fuym7ZHl7XRFKPeLolgpU7B37tHSO16pw2pX5ifHMR-W6RpsKWE34QBgi0EqE1B-sSdHoHlg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANgAzADYANgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D2%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p21a36b6c-e774-4e3d-a5cd-82ee82e63c9a"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">25 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANwAxADcAMQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANwAxADcAMQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAyADAAMwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">25 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANwAxADcAMQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANwAxADcAMQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 06 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANwAxADcAMQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 2ea60405-9617-4929-aa93-60e925904527</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1537171" tabindex="-1" role="dialog" aria-labelledby="applypop_1537171" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgAyADAAMwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAyADAAMwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=2ea60405-9617-4929-aa93-60e925904527" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1537171" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQw09JRzBnesX7Ar7QEDKwzup9dlo80YQkhtYA-lG82FcqJdXLjjWE1HbdlKG4fxv8Tvqx9YFaPjlhAexnSn60gngJkeZEqxtr-hZvyEcJtDXTVoGIdoMz3wQnfkjmaFfmXIRobeaxIdsDeKwgtWboqq86JTSHBbdlJqOp728sw9ZA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANwAxADcAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pfc9fb426-ac10-4950-84e4-bfd8e6562100"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">25 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANwA0ADEAOAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS23 - Rustenburg</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADEAOAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAzADEANwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">25 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANwA0ADEAOAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANwA0ADEAOAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS23 - Rustenburg</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 06 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANwA0ADEAOAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 9c323bb0-11ac-4bba-b1e9-49f4a7005b62</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1537418" tabindex="-1" role="dialog" aria-labelledby="applypop_1537418" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgAzADEANwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgAzADEANwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=9c323bb0-11ac-4bba-b1e9-49f4a7005b62" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS23 - Rustenburg" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1537418" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQx83EJf_hc0Sppm03Da7wvEAkRawdSTe7fJASyQIf3ZR3O1g4bIloDIEQcY5KbufRMaNhXIr9EJP1fHbm82axjD3MKwoy8aDWZfh4-UMW22t0hcXRgJXkk4rJcHd5Jsn1FlDGJ5t7AtxdBVGsjX3xUak5e_jMJfghpceXOaD3X3fA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADEAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p8c028794-1da0-492d-85a8-9ab2d16ee02a"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">25 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANwA0ADMAMQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS23 - Waterval East</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADMAMQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgA0ADcANwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">25 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANwA0ADMAMQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANwA0ADMAMQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS23 - Waterval East</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 06 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANwA0ADMAMQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> d75c2a18-25fe-4ce3-8cf4-4beefcf39d92</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1537431" tabindex="-1" role="dialog" aria-labelledby="applypop_1537431" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgA0ADcANwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgA0ADcANwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=d75c2a18-25fe-4ce3-8cf4-4beefcf39d92" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS23 - Waterval East" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1537431" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxOinJLoT6eDbosXP35zubi2KLSZJDiGQFk8GZtE1QdtNwwWeAje50I9rSAEWUv93Mta7kAQ5K4hnt11NvH20LNM7x4WNAwvplDofyN6jNMzrwhFevRugkISWyOLR8mj_0qrxBxl9QN_wFab1U8dqX1-8mv2CGVSTKl-yElP-9LvA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADMAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p4279ef08-2712-4946-9f78-f70e59cabd2f"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">25 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANwA0ADMAMgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS23 - Rustenburg</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADMAMgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgA1ADQAMwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">25 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANwA0ADMAMgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANwA0ADMAMgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS23 - Rustenburg</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 06 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANwA0ADMAMgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> d8b7b16b-3a50-41de-bbc3-7a8a00987e36</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1537432" tabindex="-1" role="dialog" aria-labelledby="applypop_1537432" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgA1ADQAMwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgA1ADQAMwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=d8b7b16b-3a50-41de-bbc3-7a8a00987e36" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS23 - Rustenburg" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1537432" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzy6uT1NEfBC8Q1k7sB6_L5sZ3ITeEWrzwMeu4x1SZQE-yTCgT6WUB56k_xVjC2BayvgHKdIjpY3SIQCcKu65-a-B-gcN98kelh4o07Kt5G69LNREjIxKifXZOtfe55Sw7YHW3lAItkJ-8uTo_LYV92AxQPZe9_BIr3MEcIfpWibg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADMAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pc6da3ab1-6d32-43db-a569-6636e66dc131"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">25 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANwA0ADMAMwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS23 - Rustenburg</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADMAMwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgA4ADIANAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">25 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANwA0ADMAMwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANwA0ADMAMwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS23 - Rustenburg</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 06 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANwA0ADMAMwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> dbdbc8ba-f623-4fb7-858c-bbe92cbd8d0d</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1537433" tabindex="-1" role="dialog" aria-labelledby="applypop_1537433" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMgA4ADIANAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMgA4ADIANAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=dbdbc8ba-f623-4fb7-858c-bbe92cbd8d0d" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS23 - Rustenburg" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1537433" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQypv9wRsIKsKbRT12oyRNVvagdrR6IUQyE9nSbPNvGghVAOZoeDCvMiKGLtFp0qjNn8qzmMu4IzNeF4OivuL6mdBRPiuMo5kD6vx0xsg4AGXHvUNoys2TfqjuSnxZfuDTDXEEAfoDTsoH_KsCt2C8stgtjwpAgeGHf1fKjZ_YZ2cA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANwA0ADMAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p9c0d7fca-3e82-413b-9105-a7917cc6ed15"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">20 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAA2ADgAMgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Team Member</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Gunret Foods</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAA2ADgAMgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwAwADcAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">20 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAA2ADgAMgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAA2ADgAMgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Team Member</h3>
                <span class="text-sm text-weight-500 text-grey-600">Gunret Foods</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 11 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>We are looking for a Team Member to join our team! As a Team Member, your role involves preparing food, maintaining cleanliness, and delivering excellent customer service. Requirements include Matric qualification, proficiency in English, and a clean record. Preference given to South African candidates with previous General Assistant experience. If you're energetic and reliable, apply now!</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAA2ADgAMgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 9e0d7a5d-77cc-42fc-9a4d-adf134f88e96</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538682" tabindex="-1" role="dialog" aria-labelledby="applypop_1538682" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMwAwADcAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwAwADcAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=9e0d7a5d-77cc-42fc-9a4d-adf134f88e96" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Team Member" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538682" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwLOlEZKbG34GZK-eO80o8M6siU795jEDIzhvu7cbMxxPax7nVWTqTP_LN3ROh2TXgfgJVxzoCA2H9ANie4bIcSH_VcN_5JOGZHzilJPXOBM7CuUIIR6MASNvR0VH7p11MDrwEU1M_tbcB126m3UfGzdAsDRYpaaTnUbYjtthGY0A"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAA2ADgAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pd3aef8f4-594e-4f42-80a6-6019860ffb84"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">20 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAA2ADkAMAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Team Member</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Gunret Foods</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAA2ADkAMAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwAyADMANgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">20 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAA2ADkAMAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAA2ADkAMAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Team Member</h3>
                <span class="text-sm text-weight-500 text-grey-600">Gunret Foods</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 11 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>We are looking for a Team Member to join our team! As a Team Member, your role involves preparing food, maintaining cleanliness, and delivering excellent customer service. Requirements include Matric qualification, proficiency in English, and a clean record. Preference given to South African candidates with previous General Assistant experience. If you're energetic and reliable, apply now!</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAA2ADkAMAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> b606a0c2-b356-4b6b-87ef-4b56122ae4f0</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538690" tabindex="-1" role="dialog" aria-labelledby="applypop_1538690" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMwAyADMANgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwAyADMANgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=b606a0c2-b356-4b6b-87ef-4b56122ae4f0" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Team Member" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538690" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQy81k6zExGAoBAhrJ147mytKzOX3LK0vCcCI5H8kqSQOb6MoClUu-1Y9b5Bm6VN3OAFJjvVyUuh0aE8c_KltflnZCqEjQOxIYmyV4cp942hmY4aOB2KCdcEoWQcVPLFFz_CoEeXhi7Tl1P_EI1Wmuwxv6B5tIlUF5XdCLgFP1qzYw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAA2ADkAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"paf115526-3010-4f1e-94fc-af7baed09e96"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">20 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAA3ADAANAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Team Member</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Gunret Foods</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAA3ADAANAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwA0ADIANwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">20 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAA3ADAANAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAA3ADAANAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Team Member</h3>
                <span class="text-sm text-weight-500 text-grey-600">Gunret Foods</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 11 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>We are looking for a Team Member to join our team! As a Team Member, your role involves preparing food, maintaining cleanliness, and delivering excellent customer service. Requirements include Matric qualification, proficiency in English, and a clean record. Preference given to South African candidates with previous General Assistant experience. If you're energetic and reliable, apply now!</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAA3ADAANAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> dfefb6d0-14fb-49da-b196-318b25b680e3</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538704" tabindex="-1" role="dialog" aria-labelledby="applypop_1538704" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMwA0ADIANwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwA0ADIANwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=dfefb6d0-14fb-49da-b196-318b25b680e3" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Team Member" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538704" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzHEb5e5_UqVF5lV9SCsefeC6nnZ0xDBQrgFtIbDXqguzv5gXS2Dr_eLKZwkRRdDlJsA3jo9wbLCGMxT8SiXjxUm1xyEgX3KiquzqRLM-luUdhkuQ4iIqotk9_dFdxhHdtjTotycCeWuQY6NnRIN4fAHjebc43JzviUetQAHqtIjw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAA3ADAANAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pf79c5dc9-099b-40dd-a697-8762b3faeeb7"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">20 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAA3ADEAMQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Team Member</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Gunret Foods</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAA3ADEAMQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwA1ADUANQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">20 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAA3ADEAMQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAA3ADEAMQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Team Member</h3>
                <span class="text-sm text-weight-500 text-grey-600">Gunret Foods</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 11 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>We are looking for a Team Member to join our team! As a Team Member, your role involves preparing food, maintaining cleanliness, and delivering excellent customer service. Requirements include Matric qualification, proficiency in English, and a clean record. Preference given to South African candidates with previous General Assistant experience. If you're energetic and reliable, apply now!</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAA3ADEAMQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> fde2614c-9f31-4cb0-8848-6b4bfde510ac</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538711" tabindex="-1" role="dialog" aria-labelledby="applypop_1538711" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMwA1ADUANQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwA1ADUANQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=fde2614c-9f31-4cb0-8848-6b4bfde510ac" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Team Member" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538711" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQyMOjqZ7nEQCPk33lCJ67BYcfcB6a2TIheWWAz9UK6syTgrp8DzzGTJ9v4NTegYF4ZnEG_tSp3Qy8KZKvCP3nP1Lejz9fHx78eM6mkgLlevlX8CmGpueycFUjV_OZzWhiK6XJEcZFERezs1XOAaXI0k-eVDHOhTx4qiyvmXvHPqng"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAA3ADEAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p59dbfb0e-ede9-4779-9a1f-e7cd8a758b60"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAAzADQANQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;3\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Shoprite Rustenburg Church Street - TFS23</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAAzADQANQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwA3ADYAMQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAAzADQANQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAAzADQANQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00223\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=3\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Shoprite Rustenburg Church Street - TFS23</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAAzADQANQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 1240dcbb-d70b-4224-a8e9-cab22908fb55</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540345" tabindex="-1" role="dialog" aria-labelledby="applypop_1540345" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkAMwA3ADYAMQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkAMwA3ADYAMQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=1240dcbb-d70b-4224-a8e9-cab22908fb55" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Shoprite Rustenburg Church Street - TFS23" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540345" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzGy1vukUuGvCI4f1g92rAONKdRb-RhYEmhgk-GR8eK5vyzHEtLEw1oRQ3Mb_WYmii5oWFmJzLSmPMKJv2cvGrbLfNC_-maty8wrQoUunMojJs-W8CsSYxd6etAJ9psgYdUoBBiBReS1cww9ZMWeLnJpsrDQMDIyGBP6VVo9ykVSA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAAzADQANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%223%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D3%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pc11f4724-608a-478f-9838-65a370d28e46"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAAzADYANQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Shoprite Rustenburg Thabo Mbeki Street - TFS23</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAAzADYANQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAAwADEANgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAAzADYANQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAAzADYANQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Shoprite Rustenburg Thabo Mbeki Street - TFS23</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAAzADYANQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 225d8bb3-f822-47eb-8124-cde640893a38</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540365" tabindex="-1" role="dialog" aria-labelledby="applypop_1540365" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAAwADEANgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAAwADEANgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=225d8bb3-f822-47eb-8124-cde640893a38" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Shoprite Rustenburg Thabo Mbeki Street - TFS23" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540365" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwY2W25LCEx0uDwlJH4984kwmyuoRSs5MLMjICN6LDMq66jOVCZqWDU-oV63z9oppC2TXHJ9-dWrTJ2B7W-zAuQD42a8WcTb2ll99STKJ9kl0oZ0aC6QwTiCIMf-NAZEhe0V_7tUFfTbU5Q6fbP2amPQ1PxjUhrar2cXhkTTCzkYw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAAzADYANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p1c1d52b8-3a26-454b-9e54-8bced07fe6ed"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA2ADAAMgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - Shoprite Moruleng - TFS131</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADAAMgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAAyADQAMAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA2ADAAMgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA2ADAAMgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - Shoprite Moruleng - TFS131</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA2ADAAMgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 4fd07314-039b-469b-a618-83e64f6d3cd1</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540602" tabindex="-1" role="dialog" aria-labelledby="applypop_1540602" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAAyADQAMAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAAyADQAMAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=4fd07314-039b-469b-a618-83e64f6d3cd1" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - Shoprite Moruleng - TFS131" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540602" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQy4WgHkxTP91pNQzzkkhAAucQlc1JkbnYsiwlcY2RcJ4rS10V_T3F1EA9VMdLcgyFTBjI1kYVT3dYeWQKrQQPinrB5BU3RxGZY3XkFDSR82Fwhsh0uSdLm2Mx7GrkSM_TDcX4G_OY64uhick1Vx_shZ195-CMJPxaegHube580VUg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADAAMgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p68058cd4-d677-4ad6-b6a6-2f468db2f4c4"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA2ADkAOAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser LFS44 - Waterfall Park</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADkAOAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA0ADMANAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA2ADkAOAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA2ADkAOAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser LFS44 - Waterfall Park</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA2ADkAOAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 9f3f003e-0802-4134-a97d-969c40c3c78d</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540698" tabindex="-1" role="dialog" aria-labelledby="applypop_1540698" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAA0ADMANAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA0ADMANAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=9f3f003e-0802-4134-a97d-969c40c3c78d" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser LFS44 - Waterfall Park" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540698" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxhCMJWyZdgmTE6axhnewbHxrdfTXiCWFZ3oAvhD_Dqt3pl6XoBB6nKJ2B8fZ9PLnPxjLE8lY7okqz3LrGF4LrsPg2oPNbX7pgPQW9NmPsarXDN9M4BbwTkJtoiwHCqZXgleE0FOkU9GE2587cz3zAirs4e2qSi_CJvUAphTXDtkQ"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADkAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p89842cc1-bc55-479f-afc5-5a211711e9db"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA3ADYAMAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser - PnP Family Beyers Naude - TFS23</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADYAMAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA2ADAAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA3ADYAMAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA3ADYAMAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser - PnP Family Beyers Naude - TFS23</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA3ADYAMAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> d1bc8d96-cdaf-40eb-a01c-909057274819</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540760" tabindex="-1" role="dialog" aria-labelledby="applypop_1540760" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAA2ADAAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA2ADAAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=d1bc8d96-cdaf-40eb-a01c-909057274819" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser - PnP Family Beyers Naude - TFS23" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540760" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQx1VLFzW4jRFdurxun1wuiggf9wAtYeNUGbaAh6S0zJZ0_XntslCl_B1uloyM05XkkHGLCrS7WZCgoLlRksAeC36tL3M36lrz7I6-aKlT4LYf7cwa9-eCrmPktaDOfnH8KFmKbngXPePA8CeHoLdn2gKFHGiiP1y6JPj94i8GsTlg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA3ADYAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pc6068ae4-6202-4663-bb27-924978dc5865"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">10 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQAzADMAMwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Part-Time Sales Assistant</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">PEP South Africa</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQAzADMAMwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA3ADUAMgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">10 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQAzADMAMwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQAzADMAMwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Part-Time Sales Assistant</h3>
                <span class="text-sm text-weight-500 text-grey-600">PEP South Africa</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 21 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQAzADMAMwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 61460154-46b2-4036-8db2-3fb8b235cb2a</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541333" tabindex="-1" role="dialog" aria-labelledby="applypop_1541333" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAA3ADUAMgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA3ADUAMgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=61460154-46b2-4036-8db2-3fb8b235cb2a" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Part-Time Sales Assistant" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541333" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwvrq0xGLXC5MBdEV3h0GUcsNYoFZJY4xj5E5rR4dhdAc25vgLF8sG8HlbOx-2Xxauqj8IDuXP8SontZY_z5o4Rqc97pou9pIwXRLR9stRow0YdTHDS8VtlALRhFsNxPpnP5TvOoJxUDXZSxSuF4Ha-fxdTg5cjB1bmB16Eewg5tw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQAzADMAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pd9209be2-12d6-43d8-940d-f22828066f5b"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">8 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA1ADIAOQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Part-Time Sales Assistant</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">PEP South Africa</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA1ADIAOQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA4ADQAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">8 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA1ADIAOQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA1ADIAOQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Part-Time Sales Assistant</h3>
                <span class="text-sm text-weight-500 text-grey-600">PEP South Africa</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 23 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA1ADIAOQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 7e019844-93fa-4f10-9626-a1aab924c5f8</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541529" tabindex="-1" role="dialog" aria-labelledby="applypop_1541529" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAA4ADQAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA4ADQAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=7e019844-93fa-4f10-9626-a1aab924c5f8" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Part-Time Sales Assistant" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541529" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQximkUJSgD9ER4gHFl1_un2V5jmrDZjXVNTsPojx2quQrK0NCC13can8C6iyxKWCZrxOrDGrgb6OHHWDfougGtYJxPx-cbJw-3Fw1SoWWcUosEpGNJuqX41VO07tJIJ5TA6SuszuxrFnSIWEcS60h3Hkm9HYVSRheSwGeUszu9hqg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA1ADIAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p11911bca-bae9-47dc-85f7-9bdf68b7a940"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">8 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA1ADYAMAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser  LFS44- Rustenburg</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA1ADYAMAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA5ADQANQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">8 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA1ADYAMAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA1ADYAMAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser  LFS44- Rustenburg</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 23 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA1ADYAMAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> dcfa8be0-a158-4e36-aca7-a2b34a64ccf6</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541560" tabindex="-1" role="dialog" aria-labelledby="applypop_1541560" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAA5ADQANQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA5ADQANQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=dcfa8be0-a158-4e36-aca7-a2b34a64ccf6" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser  LFS44- Rustenburg" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541560" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwK7I9cMEwNDpUjp3JF-sGjkt-0Ig8XZmhOjayYxDj7Js-5IwZAJV2y7xDzpBAeuYx8kLCxO0X3xwdPWiQy_q0RtmtUf8huaZtrrYH80XyHmlTdvwu_-Ia-0fqUNZyxlX_dKHR-xDejv5gU_BBaZa_koCPz7C1zqMKCU6e4iAALfQ"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA1ADYAMAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pa59bb679-3c93-4e13-8a54-823219999133"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">5 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMQA5ADIAOAA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMQA5ADIAOAA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA5ADgAMwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">5 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMQA5ADIAOAA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMQA5ADIAOAA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 26 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMQA5ADIAOAA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 2c79c55c-4b10-440a-9ad8-d68270780201</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1541928" tabindex="-1" role="dialog" aria-labelledby="applypop_1541928" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANAA5ADgAMwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANAA5ADgAMwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=2c79c55c-4b10-440a-9ad8-d68270780201" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1541928" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzQAVdFtodGBgSkOfyBHTpBfhyMF2WNqYHz6GUBGLRIs8APKvImWXVxiWXbPXJsXNfNbXY3UWCGfWn678rUkdS0l1nlvCgEyuX84ZgdfdDLUbaAw_UU213JewloheH-BqKREiYZ9tiYhjVvNdnz41l4pooUrFzhlcgmvBNCZnU1Ew"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMQA5ADIAOAA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pd0f6f6a5-af7c-4bf0-a464-4ad92c1b8db5"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">5 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMgAwADkAMQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMgAwADkAMQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQAxADEANgA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">5 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMgAwADkAMQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMgAwADkAMQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 26 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMgAwADkAMQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> d5a4b89c-c5c4-4535-beb2-2ca39f9dd54d</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1542091" tabindex="-1" role="dialog" aria-labelledby="applypop_1542091" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANQAxADEANgA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQAxADEANgA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=d5a4b89c-c5c4-4535-beb2-2ca39f9dd54d" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1542091" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQznE44XNLkRU9rHVF78rvAkyZP-w_yHHGQUZk9-AUBcc4x7ph3sWQPTTOxi_9el-mqBY-AoBrbIglW3FxuU7wRxHrz8Ncp0VlwDiJKrTMjcgXgUy79k2kOz2Kl6Lm5QK6BnT_0PNXh473r3AsplG4UcU7Y8tmL0YAzMYCdcIbBVoA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMgAwADkAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pb4f8acb3-25f8-4738-a320-c6835dbecf23"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">5 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMgAwADkAMwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;4\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Rustenburg, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMgAwADkAMwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQAyADEAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">5 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMgAwADkAMwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMgAwADkAMwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00224\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=4\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Rustenburg, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 26 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMgAwADkAMwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> e8d48ed2-920b-4a47-8a70-3e0d0cbf0cdd</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1542093" tabindex="-1" role="dialog" aria-labelledby="applypop_1542093" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANQAyADEAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQAyADEAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=e8d48ed2-920b-4a47-8a70-3e0d0cbf0cdd" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1542093" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzgD1G6IzXi_-9P1LYk407L2j2yEZE1bTB1Sr1r1scL8N18DdN_JcFf2To_WWSHeueP_2RMEw_-r2UUFE8HiETOhWhON3dyoY7ojJxACXgGNieKRMksjMJrAQo9CJnmUvjJDNguQpnbXGBITqoW23AlZV3IVxeUw5_Jx2VFEBMFHQ"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMgAwADkAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%224%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D4%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p15514c35-6950-492d-b1db-96bb47766185"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">26 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANgA4ADYANQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;5\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS63 - Mooinooi</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Mooinooi, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANgA4ADYANQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQA0ADMAOQA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">26 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANgA4ADYANQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANgA4ADYANQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=5\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS63 - Mooinooi</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Mooinooi, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 05 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li>The Fixed Term contract and duration will be discussed during the interview.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANgA4ADYANQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 8de10476-190c-4417-8d37-b27aded4c5d9</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1536865" tabindex="-1" role="dialog" aria-labelledby="applypop_1536865" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANQA0ADMAOQA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQA0ADMAOQA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=8de10476-190c-4417-8d37-b27aded4c5d9" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS63 - Mooinooi" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1536865" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQxgxNIRKB8ZSTUiHvcuGagPSKGL9FKxF0_FKal9DMOysbnQpchgFNXdmW37vSSmS36xkWAKIc_btaJ7u73oo6o5COSAuVqW6pR43pFgEAjpNPadADqfpPpwWZVU4Lgp9m72RHNhC3uTKj7ZOKwHRyEHTp4vDh3bRDAHF86aL8E1zQ"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANgA4ADYANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p7ad56777-83c2-4a3c-bc53-70521344f7c7"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">3 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMgA1ADMAMwA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;5\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Part-Time Sales Assistant</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">PEP South Africa</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Koster, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMgA1ADMAMwA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQA2ADAAMwA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">3 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMgA1ADMAMwA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMgA1ADMAMwA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=5\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Part-Time Sales Assistant</h3>
                <span class="text-sm text-weight-500 text-grey-600">PEP South Africa</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Koster, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 28 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>Join PEP as a Part-Time Sales Assistant - a culture of growth and development, with the opportunity to work up to 27 hours a week. At PEP, we're known as Dynamos - we work hard, have fun, and take pride in everything we do. As a Dynamo, you'll be dynamic, helpful, and committed to ensuring our customers look and feel great.</p><p><br></p><p><u>Purpose of Position</u>:</p><p>As a friendly team player, your role involves promoting sales, minimising stock losses, managing inventory, assisting customers, operating the cash register, and upholding a low-cost culture to achieve business objectives. At PEP, we nurture a culture that encourages our team members to grow from within, offering chances for professional development and advancement within the company. This helps our team thrive and realise their full potential.</p><p><br></p><p>If this sounds like you and you want to be part of the PEP family, apply through the JOBJACK platform, where we find our new team members. It's really important that you're honest and trustworthy, especially when it comes to handling money.</p><p><br></p><p><em>*The position requires honesty in dealing with cash or finance.</em></p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMgA1ADMAMwA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> a6b81627-76ac-4d27-9e3f-a1ebb09d4c5c</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1542533" tabindex="-1" role="dialog" aria-labelledby="applypop_1542533" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANQA2ADAAMwA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQA2ADAAMwA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=a6b81627-76ac-4d27-9e3f-a1ebb09d4c5c" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Part-Time Sales Assistant" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1542533" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQw8YDeR_pxldhj94ZqGy2kSiFYGXF-Kvo65UtcU1AD8hkc4V-GvI8npY3FPkyvvWcWWLkWQ4E4BiLK2n9FnbfPM1ZhS2meKutTKTUXhm3BxHS3mPcPvg7T2xl5QjRJv4k0p0vbui_enpggD0IXY5RJwMOVF9PnX2zCb0h4TPqmFrg"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMgA1ADMAMwA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p76703bdb-09f7-4810-97bf-ae01b920e49c"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">28 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMANQA4ADYAOQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;5\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Team Member (Part Time)</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Kwa Pele Foods</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Moruleng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMANQA4ADYAOQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQA3ADkAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">28 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMANQA4ADYAOQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMANQA4ADYAOQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=5\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Team Member (Part Time)</h3>
                <span class="text-sm text-weight-500 text-grey-600">Kwa Pele Foods</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Moruleng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 03 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p>We are looking for a Team Member to join our team! As a Team Member your main job is to make sure our kitchen runs smoothly, you deliver fast and friendly service, process orders, handle payments, and perform additional tasks as required. You'll be responsible for getting tasks done efficiently so we can serve our customers delicious food.</p></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMANQA4ADYAOQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> a654bbbc-337e-43e1-b676-976bd775251e</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1535869" tabindex="-1" role="dialog" aria-labelledby="applypop_1535869" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANQA3ADkAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANQA3ADkAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=a654bbbc-337e-43e1-b676-976bd775251e" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Team Member (Part Time)" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1535869" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQyFdrnnrfrWc7l9yeieCBaXmZageo224o5Ser86BgQsuHk3xbj3pcpTetRU9owETaTqsxxP4gUjdiDIVnGSKDKnGLWQLatLUDHXa-C-8vMMztKq2i4P6u9HbphXmvzk5e4--F86Km6s9zLv86bIVwr1neO9zZrrRja4zFV2P4IRzw"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMANQA4ADYAOQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p70ed5319-d8ad-461b-ace2-00e2751b0d24"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">20 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADMAOAA2ADcANgA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;5\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser TFS131 - Moruleng</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Moruleng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADMAOAA2ADcANgA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANgAwADIAMAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">20 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADMAOAA2ADcANgA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADMAOAA2ADcANgA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=5\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser TFS131 - Moruleng</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Moruleng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 11 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADMAOAA2ADcANgA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 971d8f0e-6c75-4869-b935-68048effce84</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1538676" tabindex="-1" role="dialog" aria-labelledby="applypop_1538676" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANgAwADIAMAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANgAwADIAMAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=971d8f0e-6c75-4869-b935-68048effce84" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser TFS131 - Moruleng" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1538676" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQzDgVRVZ3H7UNx8h8BouyoDBsKyKl2HokQUVGbCpf00fn4auuoyw6NEXHT7m2xQD8PIVTD3rZB4TuauMS8eVju6QokN5RZL5aGcSQMmDRGD3x8LcIz8v2EYWNHU2k28bENznJIvElG7vWmjEl4R8EUkS1NUt3pus8ixMZT1TfSjFA"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAOAA2ADcANgA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pbb66f944-c73d-4265-9982-f0c718068812"},{summary:`
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="text-grey-600 hmb-0 font-weight-bold">12 days ago</h5>
                <yth-button style="padding-top: 0;" class="hpb-0 save-button mtrb-neg2xs hydrated" icon="bookmark" variant="text" data-saved="false" data-entity="MQA1ADQAMAA2ADkANQA" data-contenttype="Opportunity" data-source="Search" data-returnparams="{&quot;ReturnController&quot;:&quot;Search&quot;,&quot;ReturnAction&quot;:&quot;SearchIndex&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;st\\&quot;:null,\\&quot;c\\&quot;:\\&quot;Jobs\\&quot;,\\&quot;sb\\&quot;:null,\\&quot;dp\\&quot;:\\&quot;0\\&quot;,\\&quot;sd\\&quot;:\\&quot;Any\\&quot;,\\&quot;sl\\&quot;:\\&quot;Tlhabane Unit 1, Tlhabane, 0299\\&quot;,\\&quot;sli\\&quot;:\\&quot;2062972\\&quot;,\\&quot;ld\\&quot;:\\&quot;5\\&quot;,\\&quot;pn\\&quot;:\\&quot;5\\&quot;,\\&quot;ac\\&quot;:\\&quot;Revert to search results\\&quot;}&quot;}" color="primary" text-color="default" size="base" pull="none">
                </yth-button>
        </yth-stack>
        <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">

            <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h3 class="hmt-1 text-xl text-weight-400">Merchandiser</h3>
                    <h4 class="hmb-0 text-grey-600 text-sm">Smollan</h4>
            </yth-stack>
            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
                <h5 class="hmb-0">
                    <strong>Moruleng, North West</strong>                 </h5>
            </yth-stack>
        </yth-stack>
                    <a id="btnReadMoreSearch" class="card-link" href="/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADkANQA&amp;sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&amp;sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change"></a>
            
    `,details:`
        

        
        

    <div class=" ">
        <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANgAxADgAOAA" id="EncodedTracker">




<yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">


<yth-section variant="default" padding="base" class="hydrated">
    <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <yth-stack align-content="end" align-items="center" justify-content="space-between" gap="zero" direction="row" wrap="no-wrap" class="hydrated">
            <h5 class="hmb-0 text-weight-500 text-grey-600">12 days ago</h5>
        <yth-button class="hpy-0 save-button hydrated" icon="bookmark" variant="text" data-saved="false" loader="false" pull="top right bottom" data-entity="MQA1ADQAMAA2ADkANQA" data-contenttype="Opportunity" data-source="Search detail" data-returnparams="{&quot;ReturnController&quot;:&quot;View&quot;,&quot;ReturnAction&quot;:&quot;SearchOpportunity&quot;,&quot;ReturnQuery&quot;:&quot;{\\&quot;opportunity\\&quot;:\\&quot;MQA1ADQAMAA2ADkANQA\\&quot;,\\&quot;sourceParams\\&quot;:\\&quot;{\\\\u0022st\\\\u0022:null,\\\\u0022c\\\\u0022:\\\\u0022Jobs\\\\u0022,\\\\u0022sb\\\\u0022:null,\\\\u0022dp\\\\u0022:\\\\u00220\\\\u0022,\\\\u0022sd\\\\u0022:\\\\u0022Any\\\\u0022,\\\\u0022sl\\\\u0022:\\\\u0022Tlhabane Unit 1, Tlhabane, 0299\\\\u0022,\\\\u0022sli\\\\u0022:\\\\u00222062972\\\\u0022,\\\\u0022ld\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022pn\\\\u0022:\\\\u00225\\\\u0022,\\\\u0022ac\\\\u0022:\\\\u0022Revert to search results\\\\u0022}\\&quot;,\\&quot;sourceUri\\&quot;:\\&quot;/Search/SearchIndex?c=Jobs\\\\u0026dp=0\\\\u0026sd=Any\\\\u0026sl=Tlhabane%20Unit%201,%20Tlhabane,%200299\\\\u0026sli=2062972\\\\u0026ld=5\\\\u0026pn=5\\\\u0026io=False\\\\u0026ac=Page%20change\\&quot;}&quot;}" color="primary" text-color="default" size="base">
        </yth-button>
        </yth-stack>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h3 class="text-xl text-weight-400 text-line-height-1">Merchandiser</h3>
                <span class="text-sm text-weight-500 text-grey-600">Smollan</span>

        </yth-stack> 
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <yth-icon icon="geoAltFill" text="Location: Moruleng, North West" class="hydrated"></yth-icon>
        <yth-icon icon="calendarEvent" text="Date posted: 19 September 2024" class="hydrated"></yth-icon>
        <yth-icon icon="calendarX" text="Closing date: Unknown" class="hydrated"></yth-icon>
        <div class="text-line-height-0">
            <yth-icon icon="cashStack" text="Salary: Unknown" class="hydrated"></yth-icon>
        </div>
        <yth-icon icon="briefcase" text="Job type: Unknown" class="hydrated"></yth-icon>
        </yth-stack> 
        <yth-badge variant="caution" shape="rectangle" class="hydrated">Data needed to apply</yth-badge>
    </yth-stack>
</yth-section>


        <yth-section variant="default" padding="base" class="hydrated">
            <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
                <h2 class="hmb-0 text-lg">Role description</h2>

                    <div class="text-grey text-sm">
                        This text is from another website. For a better description, go to the website to read more.
                    </div>

                <div class="text-break text-md"><p><strong>We are looking for a Merchandiser to join our team! </strong></p><p><br></p><p><span style="&quot;color:" rgb(0,="" 0,="" 0);&quot;="">As a Merchandiser, you need to make sure that a store's shelves are filled with the right products, they look good, and they're priced correctly to attract customers and boost sales. Think of it as making the store look nice and helping products sell better.</span></p><p><br></p><ul><li>This position requires you to work between multiple stores within a specific area.</li><li>You will be required to have your own smartphone in order to be considered for the position.</li><li>You will be required to upload copies of your Matric Certificate, ID, SARS Letter and Bank Confirmation Letter onto the JOBJACK platform when shortlisted, please note no one will reach out over social media to request your personal documents.</li><li><strong>Kindly note that internal candidates or candidates with previous experience at Smollan will be prioritised.</strong></li></ul></div>
            </yth-stack>
        </yth-section>



    <yth-section variant="default" padding="base" class="hydrated">
        <yth-stack direction="column" gap="wide" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h2 class="hmb-0 text-lg">Support</h2>
        <yth-button class="d-none remove-from-list save-link hydrated" icon="icon-bookmark-remove-grey" variant="text" secondary="true" color="primary" text-color="default" size="base" pull="none">
            Remove from Saved list
        </yth-button>
        <yth-button class="d-none add-to-list save-link hydrated" icon="icon-bookmark-add-blue" variant="text" color="primary" text-color="default" size="base" pull="none">
            Save for later
        </yth-button>

            <yth-stack direction="column" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" gap="default" class="hydrated">
        <div style="--yth-icon-color: var(--yth-color-red-600);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="flag" variant="text" text-color="secondary" href="/Report?ei=MQA1ADQAMAA2ADkANQA&amp;rt=2&amp;rs=Search%20detail" color="primary" size="base" pull="none">
                Report
            </yth-button>
        </div>
        <div style="--yth-icon-color: var(--yth-comp-icon-color-primary-default);" class="mtbl-neg2xs">
            <yth-button class="hpl-0 hydrated" icon="questionCircle" variant="text" text-color="secondary" href="/Contact" color="primary" size="base" pull="none">
                Get Help
            </yth-button>
        </div>
        <yth-stack direction="column" gap="condensed" wrap="no-wrap" justify-content="start" align-items="stretch" align-content="normal" class="hydrated">
            <h5 class="hm-0">Reference number - Tap to copy</h5>
            <yth-button id="copyButton" size="small" append-icon="clipboard" variant="outline" expanded="" color="primary" text-color="default" pull="none" class="hydrated"> 9e402b96-ad3d-4734-8a5d-cc6f9899b6b6</yth-button>
        </yth-stack>
            </yth-stack>
        </yth-stack>
    </yth-section>




</yth-stack>

<div class="spacer-navbar-sm"></div>



<div class="modal fade" id="applypop_1540695" tabindex="-1" role="dialog" aria-labelledby="applypop_1540695" aria-hidden="true">
  <div class="modal-dialog hpr-4 hpl-4" role="document" style="top: 30%;">
    <div class="modal-content" style="border-top: 8px solid transparent; border-top-color: #FC9296;border-top-right-radius: 4px; border-top-left-radius: 4px;">
      <div class="modal-body hpt-4 hpl-5 hpr-5 hpb-0">
            <i class="icon icon-location-red"></i>
            <h3 class="hmb-1 hmt-3">
                The address for this opportunity is far away from the one on your profile.
            </h3>
            <h4 class="hmb-0">
                Are you sure you want to apply?
            </h4>
      </div>
        <div class="modal-footer hpt-3 hpr-4 hpl-4 hpb-4" style="border-top:0px">
            <yth-button-group class="start hydrated" alignment="start">
                <yth-button-legacy id="btnYes" variant="secondary" expanded="" type="button" href="/View/OpportunityApplyInternal?tracker=MQA2ADYAMwA1ADkANgAxADgAOAA" theme="standard" size="regular" class="hydrated">Yes</yth-button-legacy>
                <yth-button-legacy id="btnNo" variant="secondary" expanded="" type="button" data-dismiss="modal" theme="standard" size="regular" class="hydrated">No</yth-button-legacy>
            </yth-button-group>
        </div>
    </div>
  </div>
</div>

  <div id="toast" class="toast toast-saved">Added to Saved list</div>
  <div id="toast" class="toast toast-removed">Removed from Saved list</div>
  <div id="toast" class="toast toast-error">An error occured</div>
  <div id="toast" class="toast toast-copied">Copied to clipboard</div>
    </div>
        <form method="post" action="/View/ExternalOpportunity" novalidate="novalidate">
            <input type="hidden" name="EncodedTracker" value="MQA2ADYAMwA1ADkANgAxADgAOAA" id="EncodedTracker">
            <input type="hidden" name="EmployerURL" value="https://link.jobjack.co.za/?jobId=9e402b96-ad3d-4734-8a5d-cc6f9899b6b6" id="EmployerURL">
            <input type="hidden" name="SourceParms" value="" id="SourceParms">
            <input type="hidden" name="ReturnActionParms" value="" id="ReturnActionParms">
            <input type="hidden" name="ReturnControllerParms" value="" id="ReturnControllerParms">
            <input type="hidden" name="ReturnParams" value="ViewModels.Return.ReturnParamsVM" id="ReturnParams">
            <input type="hidden" name="JobTitle" value="Merchandiser" id="JobTitle">
            <input type="hidden" name="OpportunityID" value="1540695" data-val="true" data-val-required="The OpportunityID field is required." id="OpportunityID">

            <yth-navbar variant="bottom" class="hydrated">
                <yth-button expanded="" type="submit" auto-click-loader="" icon="arrowUpRightSquare" icon-location="end" variant="fill" color="primary" text-color="default" size="base" pull="none" class="hydrated">
                    Go to the website
                </yth-button>
            </yth-navbar>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8G6RtGoP5YRHn__SGFN2IQwVbkv4pBmZEpyI09uRuZB6dUuiYoQvkQGPhKRgtXyibiII0PubAI_LJVx_LNqnR9qcGi2iTWDAY5wdJMpE6QV7jIf-jhQmuvUsIKmojxLSARMWBUACyYMMcF7BlMu0vFggtU-J0XtiUcoPMN6kPDQPnB2CFeS2lRzJbdvVIegq9w"></form>


    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADQAMAA2ADkANQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%225%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D&sourceUri=%2FSearch%2FSearchIndex%3Fc%3DJobs%26dp%3D0%26sd%3DAny%26sl%3DTlhabane%2520Unit%25201,%2520Tlhabane,%25200299%26sli%3D2062972%26ld%3D5%26pn%3D5%26io%3DFalse%26ac%3DPage%2520change",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"pc70e5a1a-bd4e-44e7-926a-05df807e57c8"}],W={iconLink:Y,title:H,blogPosts:_},K="/assets/agency_icons/pro-personnel.jpg",X="pro-personnel",Z=[{jobTitle:"Civil Engineer",startDate:"2024-09-30 - 2024-10-30",vacancyType:"Contractor",jobSpecFields:"Engineering &amp; Technical",location:{city:", Brits",region:"North West"},details:`OVERVIEWThe fulltime supervision and management (from plant to pit) for the preparation, installation, and construction of:

In-pit deposits (Tailings Storage Facility)
All related civil earthworks e.g. excavations, dozing
Slurry / re-mine pipelines
Concrete works.

&nbsp;KEY RESPONSIBILITIES

Site Supervision
Site Quality Control Management
Programme/Project Management
Technical advice
Inspections
Progress reports
Ensure compliance to all Safety, Health and Environmental rules of the site.
Consult, interact with clients to optimize operating specifications
Adhere to company / client policies and procedures which may be amended from time to time.
To assume other duties as may be assigned by the Client / Managing Director.

TECHNICAL AND PROFESSIONAL COMPETENCIES

Excellent written and verbal communications skills.
A valid Code 14 drivers’ license
Computer literate (MS Office; Autocad/Prokon; Projects)
Ability to maintain sound interpersonal relations with Client, Company
Problem solving skills
Ability to work under pressure and meet deadlines
Ability to plan, lead, execute and organize tasks.
Management, supervisory, communication skills.

REQUIREMENTS

BSc/B Eng/BTech in Civil Engineering
ECSA registered
Minimum 3 years’ experience in a similar role within the mining environment
Clean record with valid COF or the ability to obtain a certificate of fitness
Able to commence duties on short notice.

&nbsp;Salary:&nbsp; R45-50,000.00 based on experience`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002581-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"paba26c53-854a-4e74-b9dd-3ab9ad799ede"},{jobTitle:"Civil Engineer",startDate:"2024-09-30 - 2024-10-30",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Brits",region:"North West"},details:"Need the following requirements:* BSc/B Eng/ BTech in Civil Engineering* ECSA registered* Minimum 3 years experience in a similar role within the mining environment* Clean record with a valid COF or the ability to obtain a certificate of fitness* Able to commence duties on short notice* Must be in possession of a valid code 14 drivers lisence* Computer literacy ( MS Office, Autocad, Prokom &amp; Projects)* Ability to maintain sound interpersonal relations with client, company* Ability to work under pressure and meet deadlines* Ability to plan, lead, execute and organize tasksOverview:* To manage from plant to pit for the preparation, installation and construction of in-pit deposits (tailings storage facility)* All related civil earthworks e.g. excavations, dozing* Slurry / re-mine pipelines* Concrete worksKey Responsibilities:* Site supervision* Site quality control management* Programme / project management* Technical advise* Inspections* Progress reports* Ensure compliance to all Health and safety and environmental rules on site* Consult, interact with clients to optimize operating specificationsplease send cv with relevant certificates to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002582-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pf96388bf-1216-4d4e-b534-5d5b1bf45fb8"},{jobTitle:"Civil Earth Works Engineer",startDate:"2024-09-30 - 2024-10-30",vacancyType:"Permanent",jobSpecFields:"Construction",location:{city:", Brits",region:"North West"},details:`REQUIREMENTS

BSc/B Eng/BTech in Civil Engineering
ECSA registered
Minimum 3 years’ experience in a similar role within the mining environment
Clean record with valid COF or the ability to obtain a certificate of fitness
Able to commence duties on short notice

TECHNICAL AND PROFESSIONAL COMPETENCIES

Excellent written and verbal communications skills.
A valid Code 14 drivers’ license
Computer literate (MS Office; Autocad/Prokon; Projects)
Ability to maintain sound interpersonal relations with Client, Company
Problem solving skills
Ability to work under pressure and meet deadlines
Ability to plan, lead, execute and organize tasks.
Management, supervisory, communication skills.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002583-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p190d61f7-5779-4e2f-855b-1a1256258175"},{jobTitle:"Consultant Attorney",startDate:"2024-09-26 - 2024-10-26",vacancyType:"Permanent",jobSpecFields:"Legal",location:{city:", Sandton",region:"Gauteng"},details:`
Competitive Fee Structure: Enjoy a favourable 25%/75% fee split&nbsp;
Specialization Areas:
Divorce
Family Law&nbsp;
Corporate Law&nbsp;
Banking &amp; Niche Markets&nbsp;
Professional Growth: Open to associate attorneys and partners&nbsp;
Comprehensive Support: Benefit from the firm's PI cover and Fidelity Fund inclusion&nbsp;

Elevate your legal practice by becoming a valued member of our distinguished team`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002579-WHN",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p18e936b8-31ae-45c9-a8dd-dcfda7e962f4"},{jobTitle:"Executive Housekeeper",startDate:"2024-09-26 - 2024-10-26",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Boshoek",region:"North West"},details:`Job Responsibilities:

Leadership &amp; Management: Oversee and manage the entire housekeeping department, ensuring all areas of the hotel are impeccably clean, well-maintained, and presented to the highest standards.
Staff Supervision &amp; Development: Recruit, train, and supervise housekeeping staff, fostering a culture of excellence, teamwork, and continuous improvement.
Quality Control: Conduct regular inspections of guest rooms, public areas, and back-of-house spaces to ensure cleanliness and adherence to hotel standards, addressing any issues promptly.
Inventory &amp; Supplies Management: Manage housekeeping inventory, including linens, cleaning supplies, and guest amenities, ensuring adequate stock levels and cost-effective purchasing.
Budgeting &amp; Cost Control: Develop and manage the housekeeping budget, monitoring expenses and implementing cost-saving initiatives without compromising quality.
Guest Satisfaction: Respond to guest requests and concerns regarding housekeeping services in a timely and professional manner, ensuring a positive guest experience.
Health &amp; Safety Compliance: Ensure that all housekeeping activities comply with health and safety regulations, maintaining a safe environment for both guests and staff.
Sustainability Initiatives: Implement and oversee environmentally friendly practices within the housekeeping department, supporting the hotel’s sustainability goals.
Collaboration: Work closely with other departments, including Front Office and Maintenance, to ensure seamless operations and exceptional guest service.

Qualifications / Skills:

Strong leadership and organisational skills, with the ability to manage a large team and multiple tasks effectively.
Exceptional attention to detail and a commitment to maintaining high standards.
Proficient in budgeting, financial management, and cost control.
In-depth knowledge of cleaning techniques, materials, and equipment used in large hotel operations.
Excellent communication and interpersonal skills, with the ability to motivate and inspire staff.
Proficiency in housekeeping management software and other relevant systems. (TallOrder)(Benson)
Ability to work in a fast-paced environment and adapt to changing priorities.

Education, Experience, and Licensing Requirements:

Minimum Matric Certificate
Degree in Hospitality Management, Business Administration, or a related field is preferred.
Minimum of 5 years of experience as an Executive or Head Housekeeper in a large hotel within the hospitality sector.
Previous experience in a luxury or high-end hotel environment is highly desirable.
Own transport and valid driving license are beneficial.

Salary - +-R15 000 negotiable`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002574-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p2eedb28d-a497-4803-98d6-06e677cbacb2"},{jobTitle:"Executive Chef",startDate:"2024-09-26 - 2024-10-26",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Boshoek",region:"North West"},details:`Job Responsibilities:

Food Quality and Presentation:&nbsp;Ensuring high standards of food quality and presentation.
Kitchen Efficiency and Productivity:&nbsp;Streamlining kitchen operations for maximum efficiency and productivity.
Menu Development and Innovation: Regularly updating and innovating the menu offerings.
Food Cost Control:&nbsp;Managing food costs effectively while maintaining quality.
Health and Safety Compliance:&nbsp;Strict adherence to health and safety standards in the kitchen.
Staff Training and Development:&nbsp;Providing ongoing training and development for kitchen staff.
Waste Management:&nbsp;Implementing strategies to minimize food waste.
Supplier Quality Management:&nbsp;Ensuring high-quality ingredients from reliable suppliers.
Customer Feedback on Food:&nbsp;Monitoring and responding to customer feedback regarding meals.
Weekly Stock Takes and Daily Counts:&nbsp;Conducting weekly stock takes and daily counts to monitor stock movement against sales.
Food Safety and Cleanliness:&nbsp;Maintaining high standards of food safety and cleanliness in line with certification requirements.
Adherence to Safety and Health Protocols:&nbsp;Ensuring all safety and health protocols are understood and followed.
Proper Food Storage and Stock Management:&nbsp;Ensuring food is stored correctly to prevent
Recipe Consistency and Timing:&nbsp;Strict adherence to recipes for consistency and efficient timing in dish preparation.
Quality Checks Before Dish Dispatch: Conducting quality checks on all dishes before they leave the kitchen.

&nbsp;Qualifications / Skills:

Culinary arts degree, or equivalent professional qualification.
Proven experience as an executive chef in a high-end or large-scale restaurant.
Experience in a similar culinary style or cuisine as our restaurant.
Strong leadership and team management skills.
Expertise in menu development and culinary innovation.
Knowledge of budget management and cost control
Proficiency in food safety and hygiene standards.
Excellent communication and interpersonal skills.
Ability to work flexibly and effectively manage time in a fast-paced environment. Minimum of 5 years of experience as an Executive Chef in a large hotel&nbsp;within the hospitality sector.
Previous experience in a luxury or high-end hotel environment is highly desirable.
Own transport and valid driving license are beneficial.

Salary - +-R30K, negotiable`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002575-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p629ef24c-d483-42ba-9962-1b815ff91c36"},{jobTitle:"Food and Beverage Manager",startDate:"2024-09-26 - 2024-10-26",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Boshoek",region:"North West"},details:`Key Responsibilities:

Customer Satisfaction &amp; Feedback: Improve guest satisfaction in dining experiences.
Revenue &amp; Profitability Management: Enhance department revenue and profitability.
Menu Innovation &amp; Quality Control: Regular menu updates and maintaining high-quality standards.
Inventory Management &amp; Waste Reduction: Efficient inventory handling and waste reduction.
Health &amp; Safety Compliance: Adherence to health and safety regulations.
Staff Training &amp; Performance: Ensure well-trained staff with high performance.
Operational Efficiency: Streamline operations for improved guest service.
Marketing &amp; Promotions: Collaborate on promotional activities.
Supplier &amp; Vendor Relationships: Maintain positive supplier relations.
Event Catering Management: Oversee catering for special events.
Stock Management: Ensure accurate stock counts with mandatory weekend evening stock takes.
Waitstaff &amp; Bar Protocols: Enforce cleanliness and excellent customer service.
Weekly Reporting: Submit detailed expense and overhead reports.
Cost Monitoring &amp; Damage Reporting: Prevent overspending, report theft or damages.
Handover Books &amp; Meetings: Ensure smooth shift transitions with thorough handovers.
Guest Service &amp; Account Management: Attend to guests, manage accounts, and ensure accurate cash-ups.
Staff Menu Knowledge: Train staff on dish ingredients and preparation.
POS System &amp; Upselling Training: Provide training on upselling and using the POS system.
Table Arrangements &amp; Event Setup: Train staff in setting up for group events and conferences.

If you're a motivated leader with a passion for driving excellence in food and beverage operations, apply now!`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002576-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p6f7f0a4b-e0ef-446b-b060-5b478184e76a"},{jobTitle:"Real Estate Agent",startDate:"2024-09-26 - 2024-10-26",vacancyType:"Permanent",jobSpecFields:"Other",location:{city:", Dubai",region:"United Arab Emirates"},details:`What's in it for you ?&nbsp;High Commissions - Unlimited earning potential&nbsp;Endless Opportunities - Grow your portfolio in a booming market&nbsp;Prestigious Clients - Work with the best in the business&nbsp;Requirements:&nbsp;

Minimum 3 years real estate experience&nbsp;
Willingness to relocate to Dubai&nbsp;
Motivated, driven individuals&nbsp;
This is a commission based role with unmatched rewards&nbsp;
`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002577-WHN",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p98f4138b-d450-4e11-89db-dcdb2e733d49"},{jobTitle:"Executive Chef",startDate:"2024-09-25 - 2024-10-25",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Rustenburg",region:"North West"},details:"Qualifications / Skills:* Culinary arts degree or equivalent professional qualification.* Proven experience as an executive chef in a high or large scale restaurant* Experience in a similar culinary style or cuisine as our restaurant* Strong leadership* Expertise in menu development and culinary innovation* Knowledge of budget management and cost control* Proficiency in food safety and hygiene standards* Excellent communication and interpersonal skills* Ability to work flexibility and effectively manage time in a fast-paced environment* Minimum of 5 years of experience as an Executive Chef in a large Hotel within the hospitality industry* Must have own transport and a valid driver's licensePlease send cv with relevant documents to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002568-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p98eaa732-97b5-4c8e-aabe-04c6375e2105"},{jobTitle:"Executive Houeskeeper",startDate:"2024-09-25 - 2024-10-25",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Rustenburg",region:"North West"},details:"Educations, Experience and Licensing Requirements:* Minimum Matric certificate* Degree in Hospitality management, business administration or a related field* Minimum of 5 years of experience as an Executive or Head Houskeeper in a large field id preferred* Previous experience in a luxury or high-end hotel environment will be beneficial* Own transport and valid driver's license will be requiredQualifications / Skills:* Strong leadership and organizational skills, with the ability to manage a large team and multiple tasks effectively.* Exceptional attention to detail and commitment to maintaining high standards.* Proficient in budgeting, financial management and cost control* In depth knowledge of cleaning techniques, materials, and equipment used in large hotel operations* Excellent communication and interpersonal skills, with the ability to motivate and inspire staff* Proficiency in housekeeping management software and other relevant systems* Ability to work in a fast-paced environment and adapt to changing priorities&nbsp;Please send cv with documents to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002569-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pf352cf66-d967-4300-9c60-2783b63f89d2"},{jobTitle:"Technical Sales Consultant",startDate:"2024-09-25 - 2024-10-25",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", JHB - Eastern Suburbs",region:"Gauteng"},details:`equirements:

Matric (Grade 12) or equivalent
Technical Diploma; Sales &amp; Marketing qualification beneficial
Computer literate, Valid Code 08 driver’s license
2-4 years’ experience in chemical cleaning industry sales or technical service
Knowledge of technical systems, food processing, and poultry plants advantageous

Key Responsibilities:

Achieve sales targets by selling and promoting products
Build and maintain strong customer relationships
Provide on-site client training and technical support
Conduct wash audits, swab tests, and product installations
Handle customer queries, manage accounts, and ensure satisfaction
Draft proposals, conduct market research, and drive business development

Must be immediately available`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002570-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pe2d62c2e-e3d8-40a3-a630-ae49bace3351"},{jobTitle:"Executive Chef",startDate:"2024-09-25 - 2024-10-25",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Boshoek",region:"North West"},details:`Requirements:

Culinary arts degree or equivalent.
Ability to work flexibly and effectively manage time in a fast-paced environment.
Minimum of 5 years of experience as an Executive Chef in a large hotel within the hospitality sector.
Familiarity with our cuisine or similar culinary styles.
Strong leadership and team management skills.
Expertise in menu development and innovation.
Knowledge of budget management and cost control.

Duties:

Ensure high food quality and presentation.
Streamline kitchen operations for efficiency.
Regularly update and innovate the menu.
Manage food costs effectively.
Comply with health and safety standards.
Train and develop kitchen staff.
Minimize food waste and manage supplier quality.
Respond to customer feedback.
Conduct stock takes and daily counts.
Maintain food safety, cleanliness, and adherence to protocols.
Ensure proper food storage, recipe consistency, and quality checks.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002571-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pdd59c5ae-5d6c-4014-a8b0-d2ddb882c52e"},{jobTitle:"Executive Housekeeper",startDate:"2024-09-25 - 2024-10-25",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Boshoek",region:"North West"},details:`Education, Experience, and Licensing Requirements:

Minimum Matric Certificate
Degree in Hospitality Management, Business Administration, or a related field is preferred.
Minimum of 5 years of experience as an Executive or Head Housekeeper in a large hotel within the hospitality sector.
Previous experience in a luxury or high-end hotel environment is highly desirable.
Own transport and valid driving licence are beneficial

Qualifications / Skills:

Strong leadership and organisational skills, with the ability to manage a large team and multiple tasks effectively.
Exceptional attention to detail and a commitment to maintaining high standards.
Proficient in budgeting, financial management, and cost control.
In-depth knowledge of cleaning techniques, materials, and equipment used in large hotel operations.
Excellent communication and interpersonal skills, with the ability to motivate and inspire staff.
Proficiency in housekeeping management software and other relevant systems. (TallOrder)(Benson)
Ability to work in a fast-paced environment and adapt to changing priorities.
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002572-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p71976c8f-568d-4aca-926f-7bb7194ade08"},{jobTitle:"Food &amp; Beverage Manager",startDate:"2024-09-25 - 2024-10-25",vacancyType:"Permanent",jobSpecFields:"Food and Beverage",location:{city:", Boshoek",region:"North West"},details:`Key Responsibilities:

Customer Satisfaction &amp; Feedback: Improve guest satisfaction in dining experiences.
Revenue &amp; Profitability Management: Enhance department revenue and profitability.
Menu Innovation &amp; Quality Control: Regular menu updates and maintaining high-quality standards.
Inventory Management &amp; Waste Reduction: Efficient inventory handling and waste reduction.
Health &amp; Safety Compliance: Adherence to health and safety regulations.
Staff Training &amp; Performance: Ensure well-trained staff with high performance.
Operational Efficiency: Streamline operations for improved guest service.
Marketing &amp; Promotions: Collaborate on promotional activities.
Supplier &amp; Vendor Relationships: Maintain positive supplier relations.
Event Catering Management: Oversee catering for special events.
Stock Management: Ensure accurate stock counts with mandatory weekend evening stock takes.
Waitstaff &amp; Bar Protocols: Enforce cleanliness and excellent customer service.
Weekly Reporting: Submit detailed expense and overhead reports.
Cost Monitoring &amp; Damage Reporting: Prevent overspending, report theft or damages.
Handover Books &amp; Meetings: Ensure smooth shift transitions with thorough handovers.
Guest Service &amp; Account Management: Attend to guests, manage accounts, and ensure accurate cash-ups.
Staff Menu Knowledge: Train staff on dish ingredients and preparation.
POS System &amp; Upselling Training: Provide training on upselling and using the POS system.
Table Arrangements &amp; Event Setup: Train staff in setting up for group events and conferences.

If you're a motivated leader with a passion for driving excellence in food and beverage operations, apply now!`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002573-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pe1cf001c-91e0-48bf-8264-19b899b7fea0"},{jobTitle:"Technician",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", JHB - Central",region:"Gauteng"},details:"Experience and requirements:* Must have a valid trade certificate as an Electrician* Must have a valid driver's license* Must have knowledge and experience in plumbing, electrical and maintenance of electrical equipment.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002560-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pbe720cf9-7517-4b90-b890-2ff7ab5bfd10"},{jobTitle:"Hire Controller",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Rustenburg",region:"North West"},details:`Requirements

Must have Matric
Must have valid Driver's License
Must be Computer literate
Must be willing to do sales

Salary - R12K`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002562-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p988db082-bd19-4962-a41e-682cdd1dc4ed"},{jobTitle:"Technical Sales Consultant",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", JHB - Central",region:"Gauteng"},details:"Educational Requirements:* Grade 12* Technical diploma or equivalent and sales and marketing qualification will be beneficial* Must be computer literate* Must have a valid drivers licenseWork Experience:* 2-4 years' experience in a technical service or sales position in the chemical cleaning industry* Knowledge and experience of technical systems, equipment, food processing and poultry plants for the chemical industry will be beneficial.Duties would be but not limited to:* Achieving sales budget by presenting and selling company products and services to preidentified customers* Develop, maintain and expand current customer base through building a harmonious and service orientated relationship with clients* Conducting titration tests as and when required as per service level agreements* Plot the results on a trend and communication with customers* Oversee and facilitate product delivery and equipment installation* Explain complex technical information to customers in a way that is easily understandable* Compiling proposals and reports related to technical products* Implementation and adherence to company policies and procedures* Preparing monthly reports and monthly meetings with management outside of normal meetings&nbsp;Core Competencies:* Communication* Work standards* Tolerance for stress* Energy* Administrative orientation* Integrity* Sales ability* Rapport building* Customer service* Quality of work* Team player* Problem solver",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002556-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"paa94bb98-e83d-4099-81cf-0ac3a8b43122"},{jobTitle:"Technical Sales Consultant",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Ekurhuleni",region:"Gauteng"},details:`Educational Requirements:

Grade 12 (Matric) or Equivalent
Technical Diploma or equivalent and Sales and Marketing qualification will be beneficial.
Computer Literate
Valid code 08 Drivers License (Unendorsed)

Work Experience and Core Competency Requirements:

2 – 4 years’ experience in a Technical Service or Sales position in the chemical cleaning industry.
Training Experience Beneficial.
Knowledge and Experience of technical systems, equipment, food processing and poultry plants for the chemical industry will be beneficial.

Duties: (Summarised)

Achieving Sales Budget by presenting and selling company products and services to pre-identified customers
Develop, Maintain and Expand current Customer base through building a harmonious and service orientated relationship with clients.
Identify and resolve customer queries and concerns.
Manage account services through quality checks.
Conduct on site client training as and when required.
Responsible for Regular Wash Audits.
Taking of swabs and give feedback as and when required.
Conducting titration tests as and when required as per service level agreement (if in place)
Responsible for placing of orders of customers.
Follow up and feedback to the customers on all queries (deliveries, orders, credits, customer complaints).
Responsible for ensuring the customer complaints are handled timeously and feedback on outcomes is communicated with the customer.
Plot the results on a trend and communicate with the customer.
Act as liaison in the coordination of information and services between the customer and business.
Conduct installation, inspection, maintenance and repairs to equipment.
Oversees and facilitates product delivery and equipment installation.
Establishing the technical needs of the customer and suggesting appropriate products.
Explaining complex technical information to customers in a way that is easily understandable.
Keeping customers informed about new technological products and solutions.
Compiling proposals and reports related to technical products.
Enhance new business development within the existing customer base, by providing solutions and introducing new products and or enhanced solutions.
Drafting and presenting of quotations and proposals.
Continuously build relationships and promote the company to create an awareness in the marketplace.
Regular marketing activities to build and maintain customer relationships.
Continuous evaluation of customer to identify needs, recommending and implementing solutions to ensure customer satisfaction.
Regular customer feedback on corrective actions implemented for noted deviations.
Ensure personal growth and development by continuous self- analysis and attending enrichment. programs (Time Management, Communication skills, presentation skills, technical skills, product knowledge, market research and knowledge of competitors etc.).
Implementation and adherence to company policies and procedures.
Reporting on sales activities, submission of daily, weekly and monthly reports and proposals as per the measurement criteria as stipulated.
Submission of customer documentation as required.
Preparing of monthly reports and monthly meetings with management outside of formal meetings
Regular written communication confirming activities to all growers and respective management.
Establishing trends and graphs of water micro or surface swab results monthly per customer.

Core Competencies

Communication (Listening, oral, oral presentation, written)
Work Standards (Setting high goals or standards of performance for self and organization)
Tolerance for Stress (perform under pressure)
Energy (maintain a high activity level)
Administrative Orientation (personal satisfaction from administrative performance and responsibilities, taking pride in admin work submitted internally or externally)
Integrity (maintaining social, ethical and organizational norms in job)
Sales Ability/Persuasiveness (utilizing appropriate interpersonal styles and methods of communication to gain agreement or acceptance of an idea, plan, activity or product from clientele)
Rapport Building (initial and continuing impact. The ability to meet people easily and to be liked; to get along well with people and to put them at ease; and to quickly build rapport through proactive development of close relationships)
Negotiation (communicate data or arguments in a manner that gains agreement or acceptance)
Customer Service: (Listens and responds effectively to customer questions: resolves customer problems to the customers satisfaction; commit to exceed customer expectations)
Quality of work: (Maintains high standards despite pressing deadlines: does work right the first time: corrects own errors: regularly produces accurate, thorough, professional work)
Resilience (handling disappointment and rejection while maintaining effectiveness)
Independence (taking action on one’s own rather than the influence of others
Oral Fact finding (gathering information for decision-making through questioning)
Professional Proficiency (level of performance in professional area)
Self-development Orientation (initiates action to improve skills and performance)
Team player (willingness to assist fellow colleagues in the field to ensure the company vision and goal is achieved)
Problem solving (attempts to get solutions to problems being faced with before seeking out for help)

SalaryMonthly CTC around R30K with provident fund, company vehicle, company cellphone`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002557-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p8ffb2cab-2a5c-4fa5-bd55-ef4bc8e13ded"},{jobTitle:"Sales Consultant",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Rustenburg",region:"North West"},details:"Working Experience:* Minimum of 5 years' experience in sales and marketing in related field* Knowledge and experience of technical systems and equipment for the chemical industry will be a added advantage* Knowledge of hygiene systems will be beneficial* Knowledge of basic business principalsProven ability to achieve sales targets and increase market shareEducational Requirements:* Minimum Grade 12* Degree and or diploma in sales, marketing* Computer literate in MS Suite* Valid driver's license essentialCore Competencies:* Communication* Work standards* Tolerance for stress* Energy* Initiative* Admin Orientation* Integrity* Sales ability / persuasiveness* Rapport Building* Negotiation* Independance* Oral Fact Finding* Goal driven",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002558-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p73e449c1-101f-49de-b259-d8f9ccd53087"},{jobTitle:"Technician",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Ekurhuleni",region:"Gauteng"},details:`Requirements

Must be a qualified electrician, must know a bit of plumbing.
Must be able to do training on and maintaining equipment – dishwasher pumps, dosing pumps and the like.

Education

Must have relevant qualifications, Diploma in Electrical Engineering
Must have Matric
Valid Driver's License
Troubleshooting and Fault-finding
Data Analysis
Report Writing
Proficiency in Microsoft Office (word, Excel, Outlook, and PowerPoint)
Good Interpersonal Skills
Proteus 8 and MATLAB Software
Project Management
Printed Circuit Board
Variable Speed Controllers
Occupational Health and Safety
Strong Organisational and Administrative skills
Services, Repair and Maintenance
Excellent knowledge of CMMS systems e.g. SAP, ERP, POM etc.
Data Analysis, Data Availability, Data Quality
Technical Support
Wind Farms and Solar Farms (Renewable Energy)

Professional Experience

Providing Technical Support to the Maintenance team (Artisans, Technicians, Engineers and Planners)
Report and Document result after services, repair, and project work.
Install, repair, inspect and Commission products and equipment on the printing machinery and its auxiliary supporting system.
Oversee and assist with project on site as per the Maintenance Engineers instructions
Preparation of tools before and after service, repairs, and installation
Housekeeping after maintenance work
Attend to breakdown and do electrical troubleshooting and Root Cause analysis, which included HMI's, PLC controlled system and field devices and its hard wiring.
Adhere to health and safety protocol as specified by the company's rules and regulation.
Attend electrical workshops and trainings

Salary - R23K per month (includes a company car, petrol card with a limit of R4000 and a company cellphone).`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002561-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p124901b5-7af1-4b1b-9ece-a0f4182298cd"},{jobTitle:"Lab Technician",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Petroleum &amp; Oil",location:{city:", Rustenburg",region:"North West"},details:"Qualifications:* Must have a valid driver's license* Minimum of a diploma or Bachelor's degree in Chemistry, Microbiology, Environmental Science, Biochemistry or a related scientific discipline* Previous experience working in a Laboratory environment, preferably in a biogas waste water treatment or similar industrial process.Skills:* Technical Skills- Proficiency in laboratory techniques such as a titration, spectrophotometry and gas chromatography- Familiarity with anaerobic digestion processes and biogas production wil be advantage- Experience in data analysis and report generationSoft Skills:- Strong attendtion to detail and accuracy in recording and analysis data- Good Communications skills for reporting findings to the plant manager and operations teamResponsibilities:* Sample Collection* Process Monitoring&nbsp;* Data Recording and Reporting* Quality Control* Research and Development Support* Safety Compliance",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002563-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p8c673733-0314-4392-8dad-d0a974d4b46e"},{jobTitle:"Sales Consultant – Mining",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:`General Description Of Areas Of Responsibility

To plan and carry out all sales activities on assigned accounts or areas. Responsible to promote and sell products and services to customers to meet and exceed their needs.&nbsp; To develop and maintain a customer base and sales within the various target markets.&nbsp; To ensure continuous development and expansion of new business to ensure economic business growth.

Sales and Marketing

Achieving Sales Budget by Presenting and selling company products and services to pre identified prospects.
Prepare action plans and schedules to identify specific targets and to project the number of contacts to be made.
Follow up on new leads and referrals resulting from field activity.
Identify sales prospects and contact these and other accounts as assigned.
NBD Pipeline and target to be achieved monthly
Prepare presentations, proposals and sales contracts.
Develop and maintain sales materials and current product knowledge.
Establish and maintain key client and potential client relationships. &nbsp;
Prepare paperwork to activate and maintain contract services.
Manage account services through quality checks and other follow-up&nbsp;
Identify and resolve client concerns.
Prepare a variety of status reports, including activity, closings, follow-up, and adherence to goals.
Communicate new product and service opportunities, special developments, information, or feedback gathered through field activity to appropriate company staff.
Develop and implement special sales activities to reduce over stock issues.
Participate in marketing events such as seminars, trade shows, and telemarketing events.
Follow-up and assist Service Consultants and Finance department for collection of payment for troubled accounts
Provide on-the-job training to new sales employees

Skills Development

Ensure personal growth and development by continuous self analysis and attending enrichment programs (Time Management, Communication skills, presentation skills, selling and closings skills, customer service orientation, etc) and functional training. (technical skills, product knowledge, market research and knowledge of competitors, global trends etc)

Administration

Application and adherence to Company Policies and Procedures
Reporting on sales activities including proposals and submission of daily, weekly and monthly reports and proposals as per the measurement criteria as stipulated
Assist with the Initial Design and implementation of Cleaning Programs, SOPs, and reporting systems for new accounts as required
Communication with internal departments with regards to New Accounts, product forecasting, account setup and Distribution requirements

Service and Retention of Customers

Call on clients according to the allocated accounts and servicing of the current customer base
Retain and Expand current Customer base through maintaining a harmonious and service orientated relationship with clients, and introducing products on a regular basis

Maintenance and installation of equipment

Equipment installations
Maintenance and repairs to equipment
Troubleshooting, dosing units and dispensing system.
Ensure preventative maintenance, by servicing, testing and troubleshooting on various equipment.
Responsible for cleaning and restoration of equipment that was returned from lost accounts
Prepare, Maintain and repair Equipment that is stock and at Depot Storerooms

Work Experience Requirements

Minimum of 5 years experience in Sales and Marketing in a related field
Knowledge and Experience of Technical Systems and Equipment for the chemical Industry will be an added advantage
Knowledge of Hygiene Systems will be beneficial
Knowledge of Basic Business principles
Proven ability to achieve sales targets and increase market share

Education Requirements

Minimum Grade 12 and or NQF equivalent
Degree and/or Diploma in Sales, Marketing will be an added advantage
Computer Literate in Microsoft Office Suite
Valid Code 8 Drivers License

Core Competencies

Communication (Listening, oral, oral presentation, written)
Work Standards (Setting high goals or standards of performance for self and organization)
Tolerance for Stress (perform under pressure)
Energy (maintain a high activity level)
Initiative (self starting, take action to achieve goals beyond what is necessarily called for)
Administrative Orientation (personal satisfaction from administrative performance and responsibilities
Integrity (maintaining social, ethical and organizational norms in job)
Sales Ability/Persuasiveness (utilizing appropriate interpersonal styles and methods of communication to gain agreement or acceptance of an idea, plan, activity or product from clientele and excellent deal closing abilities)
Rapport Building (initial and continuing impact. The ability to meet people easily and to be liked; to get along well with people and to put them at ease; and to quickly build rapport through proactive development of close relationships with various personality and cultural types)
Negotiation (communicate data or arguments in a manner that gains agreement or acceptance)
Resilience (handling disappointment and rejection while maintaining effectiveness)
Independence (taking action on one’s own rather than the influence of others
Oral Fact finding (gathering information for decision-making through questioning)
Professional Proficiency (level of performance in professional area)
Self development Orientation (initiates action to improve skills and performance)
Ability to persuade and influence others.
Ability to develop and deliver presentations.
Ability to create, compose, and edit written materials.
Strong interpersonal skills.
Goal driven
Tolerance to stress

Salary - R23K per month (includes a company car, petrol card with a limit of R4000 and a company cellphone).  `,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002559-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p6eb0baac-39bc-4ae0-b34a-856b2202e614"},{jobTitle:"Lab Technician",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Petroleum &amp; Oil",location:{city:", Rustenburg",region:"North West"},details:`Qualifications:

Drivers License
Minimum of a Diploma or Bachelor’s degree in Chemistry, Microbiology, Environmental Science, Biochemistry, or a related scientific discipline.
Previous experience working in a laboratory environment, preferably in a biogas, wastewater treatment, or similar industrial process.

Skills:Technical Skills:

Proficiency in laboratory techniques such as titration, spectrophotometry, and gas chromatography.
Familiarity with anaerobic digestion processes and biogas production is advantageous.
Knowledge of COD, BOD, pH, and biogas analysis techniques.
Experience in data analysis and report generation.

Soft Skills:

Strong attention to detail and accuracy in recording and analysing data.
Good communication skills for reporting findings to the plant manager and operations team.
Ability to work independently and as part of a team.
Strong problem-solving skills, particularly in troubleshooting process deviations.

Responsibilities:Sample Collection and Analysis

Collect samples from feedstock, digester, and effluent for laboratory analysis.
Perform routine testing of chemical and biological parameters such as pH, Chemical Oxygen Demand (COD), Volatile Fatty Acids (VFA), Total Solids (TS), Volatile Solids (VS), Total Kjeldahl Nitrogen (TKN), and Ammonia.
Analyse gas composition (e.g., methane, CO₂, H₂S) in biogas using gas chromatographs or other appropriate instruments.
Process Monitoring
Monitor the performance of the anaerobic digesters by analysing parameters like hydraulic retention time (HRT), organic loading rate (OLR), and bacterial activity.
Assist in troubleshooting plant issues based on laboratory findings.
Conduct microbial assessments of the digester using techniques like microscopy or molecular biology (if applicable).
Data Recording and Reporting
Maintain accurate records of laboratory results and input them into databases or plant management systems.
Generate daily, weekly, and monthly reports on plant performance, highlighting any deviations from expected parameters.
Assist in preparing reports for regulatory compliance and audits.
Quality Control
Ensure that all laboratory testing is performed according to standard operating procedures (SOPs) and best practices.
Regularly calibrate laboratory equipment and ensure equipment is functioning correctly.
Maintain high standards of hygiene and safety in the lab, ensuring compliance with all health and safety regulations.
Research and Development Support
Assist in process optimization studies by conducting experiments to assess new feedstocks, additives, or process changes.
Contribute to improving digester efficiency and biogas yield through detailed lab analyses.
Stay updated on new technologies and methodologies that can be applied to biogas plant operations.
Safety and Compliance
Ensure all safety protocols are followed when handling samples and working in the lab.
Participate in plant safety drills and contribute to maintaining a safe working environment.
Assist in ensuring the plant complies with local and national environmental regulations and reporting requirements.

Salary - R14 000 to R20 000 CTC`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002564-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pb4e6ca7a-d915-4be5-9da9-c5b3fff4e3fa"},{jobTitle:"Plant Operator",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Petroleum &amp; Oil",location:{city:", Rustenburg",region:"North West"},details:"Qualifications:* National senior certificate* Driver's license essential* Basic First Aaid &amp; Fire Firefighting&nbsp;Responsibilities:* Plant operation and Monitoring- The continuous monitoring (SCADA) and control of all operational parameters of the waste to value process plant- Operate process machinery- Record and log production figures, downtime events, maintenance vents- Visually monitor effluent and feed stream* Maintenance- Follow out preventative maintenance schedules on plant process equipment- Attend to breakdowns- Effective trouble shooting- Complete all checklists* Stock Control- Monitor raw materials usage and inform site manager- Manage spare parts* Laboratory- Conduct lab testing- Record and report schedules- Manage stock levels&nbsp;* Health &amp; Safety- Adhere to H&amp;S file- report incidents and near misses* Admin &amp; Supply Chain- Clock in and out- Overtime reconciliation- Manage office supplies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002565-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pb4e6cabf-c643-45ad-b57b-e978378b7e55"},{jobTitle:"Plant Operator",startDate:"2024-09-20 - 2024-10-20",vacancyType:"Permanent",jobSpecFields:"Petroleum &amp; Oil",location:{city:", Rustenburg",region:"North West"},details:`Qualifications:

National senior certificate (Matric/Similar)
Drivers License
Basic first aid &amp; firefighting preferred

Responsibilities:Plant operation &amp; monitoring

The continuous monitoring (SCADA) and control of all operational parameters of the waste-to-value process plant
Operate process machinery and equipment
Follow start-up and shut-down procedures of both the entire plant and the individual process units
Record and log production figures, downtime events, maintenance events and anomalies in the operating parameters electronically
Report critical production figures and process parameters in regular updates on messaging platforms
Visually monitor effluent and feed streams
Effluent and gas sampling
Report all plant issues or parameter anomalies to the site manager

Maintenance

Follow out preventative maintenance schedules on plant process equipment
Attend to breakdowns
Effective troubleshooting (self and remotely with supplier)
Complete equipment checklists
Maintain housekeeping standards on the plant
Manage contractors that come to site

Stock Control

Monitor raw materials usage and inform site manager when more stock is required
Manage spare parts stock
Ensure storage areas are clean and organised

Laboratory

Conduct lab testing accurately and safely
Record and report results
Manage stock levels of lab testing consumables and chemicals
Manage calibration of lab equipment (some can be done internally, some external)
Clean and maintain lab equipment
Coordinate external lab testing

Health &amp; Safety

Adhere to H&amp;S procedures
Upkeep of H&amp;S file
Report incidents and near-misses
Manage regular checks of safety equipment (fire equipment, spill kits, safety shower, etc.)

Admin &amp; Supply Chain

Clock in &amp; out
Overtime reconciliation
Manage office supplies stock
Assist with supply chain (contact suppliers, quote acquisition, recommendations, etc.)

Salary -&nbsp; R14 000 to R18 000`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002566-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pe1d93b93-22af-4173-b187-286f939d10db"},{jobTitle:"Sales Rep",startDate:"2024-09-19 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:"Must have the following requirements:* Valid driver's license* Have own vehicle* Previous sales experience essential, would get preference if have signage experience* Must have previous sales rep experience within the mining environment* Clean criminal record* Excellent customer service and good communication skills* Must handle extreme pressure* self motivated and have a passion for sales",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002551-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p51b704d1-424a-4f9f-abb2-36dea6cd7657"},{jobTitle:"Graphic Designer",startDate:"2024-09-19 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Minimum of 5 years working experience as a Graphic Designer* Must be proficient in Adobe Suite* Full time office based&nbsp;* Must have own reliable transport* Must send CV with portfolioMain duties:* Social media designs, brochures, banners, emailers, electronic invites, printing of ads.* We will also assist with store design, some sort of experience with larger projects will be valuable* In need of a candidate that wants to grow with the company",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002554-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p81f672f1-e2b6-443a-a988-99eac78ca500"},{jobTitle:"Graphic Designer",startDate:"2024-09-19 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:`Requirements

Min 5 years experience
Must be proficient in Adobe Suite
Must have own transport
Candidate must attach/ send their Portfolio

Duties

Social media design, brochures, banners, emailers, electronic invites, print ads. We do also help our partners with store design so some sort of experience with larger projects like that would be valuable.

Salary - between R27K - R28K CTC (Negotiable)`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002555-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p45fd12fb-6f78-4b81-b45f-7d26c213820e"},{jobTitle:"Sales Representative",startDate:"2024-09-19 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:`Requirements

Valid driver’s license.
Own vehicle to visit clients (We provide a travel allowance and a petrol card for business purposes).
Previous experience as a sales representative is essential.
Knowledge of the mining industry will be advantageous.
Clean criminal record.
Neat, reliable, and organized.
Ability to build and maintain strong relationships with clients.
Excellent interpersonal skills.
Must be able to work under pressure.
Self-motivated team player.

Salary package:

Basic salary: R10,000
Travel Allowance: R3,000
Telephone Allowance: R1,000
Petrol card for business purposes.

Commission structure: Very good.`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002552-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pe4bdb283-faa3-4d7e-b969-94772c2e00e9"},{jobTitle:"Graphic Designer",startDate:"2024-09-19 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Marketing",location:{city:", Sandton",region:"Gauteng"},details:"Qualifications Required Minimum of 5 years of design experience in an in-house creative department or design agency. A National Diploma/Degree in Graphic Art/ Design&nbsp;or any related creative field. Formal training/certification in the use of Adobe’s Creative suite of programs or similar. Other software tools such Dreamweaver, HTML, CorelDraw or AutoCAD is a bonus. Basic understanding of HTML/CSS and web design.Portfolio must accompany applicationMain duties:&nbsp;Social media design, brochures, banners, emailers, electronic invites, print ads. We do also help our partners with store design so some sort of experience with larger projects like that would be valuable.Personal Attributes Strong creative, organisational, problem-solving, and time-management skills are essential for this role. The ideal candidate must be able to think critically and come up with unique design solutions that effectively communicate a message or idea. Adaptable and a quick learner. They must be able to apply style guides creatively and adapt to changes in design trends, client requirements, and project specifications. Possess strong conceptual skills, a high-level sense of design, layout, and typography, and be a broad thinker who is able to offer a variety of design solutions. They should be able to work collaboratively with other team members to create cohesive designs that meet project objectives. Excellent interpersonal and communication skills are a must, as the designer will be responsible for presenting their design concepts to clients, team members, and stakeholders. They should also be able to listen actively and take feedback constructively. The ideal candidate should be able to work well under tight deadlines in a team environment, managing multiple projects simultaneously and prioritising workload accordingly. They should be able to take projects from start to finish with minimal supervision, demonstrating a high level of attention to detail and producing accurate work with minimal revisions. Creative vision and thinking are key for this role. The ideal candidate should be able to identify and solve design problems, using their creativity and technical skills to develop effective solutions.",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002553-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pbae9af5a-01c8-4adc-a107-0479e62f954e"},{jobTitle:"Boilermaker/Supervisor",startDate:"2024-09-18 - 2024-10-18",vacancyType:"Permanent",jobSpecFields:"Construction",location:{city:", Brits",region:"North West"},details:`Requirements:

Valid Boilermaker Trade Certificate.
Proven supervisory experience in a similar role.
Willingness to work in both Boilermaker and Supervisor capacities as needed.
Valid driver’s license.
Ability to work on sites or in workshops as required.
Must be able to obtain a valid medical certificate.
Clean criminal record is essential.

Key Responsibilities:

Perform duties as a Boilermaker.
Take on supervisory responsibilities when required, overseeing projects and team members.

What We Offer:

Competitive salary and benefits.
Opportunity to work on diverse projects.
Supportive team and work environment.

If you meet the above criteria and are ready for a dynamic role, we want to hear from you`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002550-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p2c13849c-f7c1-46d6-8cfc-8a2418e51be5"},{jobTitle:"Area Supervisor",startDate:"2024-09-16 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Mining",location:{city:", Rustenburg",region:"North West"},details:"Duties would be but not limited to:* Managing teams and operations* Responsible for shift scheduling &amp; ensuring all employees are on site.* Administration duties will be required* Problem solverQualifications &amp; Requirements must be met:* Have a valid driver* Computer literate in MS Word &amp; Excel* Grade 12",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002481-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pd7e295de-87fc-41c3-ac39-e803d5c98bb1"},{jobTitle:"Assistant Accountant",startDate:"2024-09-16 - 2024-10-19",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Experience:* Must have knowledge of the following:- SARS e-filing- SARS correspondence and registration- Salaries, payroll and reconciliation (VIP &amp; Easy file)- Knowledge of calculations and statements- EMP- Income tax statementsComputer knowledge in:* Pastel* Excel",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002520-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p34dc90f3-6b04-4b4f-996d-9136f29138da"},{jobTitle:"Process / Industrial Engineer",startDate:"2024-09-12 - 2024-10-12",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Parow",region:"Cape Town"},details:"Qualifications and Experience required:* Degree in Industrial Engineering* Recent graduate or ±2 years of experience as an Industrial Engineer* Experience in the retail industry is a plus* Project management experience* Familiarity with Lean and or Six Sigma methodologies is a advantage* Advanced computer skills (Google workspace, Looker Studio, SQL)Ability to work both independently and as part of a teamSouth African citizenshipDuties would be but not limited to:* Develop and present business cases* Lead and manage supply chain projects* Identify and drive continuous improvement initiatives* Map and developed process for effective data management* Create standard operating procedures (SOP's) for optimal business and system integration* Provide operational support by compiling, coordinating and publishing reports* Handle ad hoc duties and projects as requiredPlease send CV with certificates to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002548-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p06f65cb5-e950-4476-a957-dde4504fe5a2"},{jobTitle:"Senior Engineering Project Manager",startDate:"2024-09-12 - 2024-10-12",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:`Primary Duties and Responsibilities:&nbsp;The Project Manager will need to oversee the planning, implementation and tracking of a number of projects with specified deliverables.Required Qualifications:

Relevant degree/diploma in Electrical/Engineering/Technical/Construction discipline or equivalent
Project Management Qualification (i.e. PMP, MBA or similar

Experience and Knowledge:

15+ years’ experience in related field
8+ years’ experience in a Project Management Role
Minimum 3 years of experience in the following:&nbsp;Engineering / Production / Construction / Quantity Surveyor / Project Management environment, Construction Management, Contractor Management, Mining and Process Plant and related operations environment
Project Management
Mining, Process Plant, Logistics, Infrastructure, Quantity Surveyor , Enterprise Project Management Systems, e.g. MS-Projects, Primavera P6, Prism, SAP
Communicate Effectively: Speak, listen and write in a clear, thorough and timely manner using appropriate and effective communication tools and techniques
Creativity/Innovation: Develop new and unique ways to improve operations of the organization and to create new opportunities
Foster Teamwork: Work cooperatively and effectively with others to set goals, resolve problem, and make decisions that enhance organizational effectivenes

Key Responsibilities:The Project Manager performs a wide range of duties including some or all of the following:

Plan the project
Staff the project
Implement the project
Control the project
Evaluate the project

Plan the Project

Define the scope of the project in collaboration with senior management
Create a detailed work plan which identifies and sequences the activities needed to successfully complete the project
Determine the resources (time, money, equipment, etc) required to complete the project
Develop a schedule for project completion that effectively allocates the resources to the activities
Review the project schedule with senior management and all other staff that will be affected by the project activities; revise the schedule as required
Determine the objectives and measures upon which the project will be evaluated at its completion&nbsp;

Resource the Project

In consultation with the appropriate manager, recruit, interview and select project resources with appropriate skills for the project activities
Ensure that all project personnel receive an appropriate orientation to the organization and the project
Manage project resources to deliver on agreed deliverables
Contract qualified consultants to work on the project as appropriate

Implement the Project

Execute the project according to the project plan
Monitor the progress of the project and make adjustments as necessary to ensure the successful completion of the project
Establish a communication schedule to update stakeholders including appropriate staff in the organization on the progress of the project
Review the quality of the work completed with the project team on a regular basis to ensure that it meets the project standards

Control the Project

Compile project reports
Monitor and approve as per delegation of authority, all budgeted project expenditure
Monitor cash flow projections and report actual cash flow and variance on a regular basis
Manage all project funds according to Anglo American Platinum policy, procedure and governance
Ensure that all financial records for the project are up to date

Evaluate the Project

Ensure that the project deliverables are on time, within budget and at the required level of quality
Evaluate the outcomes of the project as established during the planning phase

Competencies:&nbsp;

Critical Thinking: Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions or approaches to problems
Active Learning: Understanding the implications of new information for both current and future problem-solving and decision-making
Business knowledge: Good understanding of the organization and the business domain or sector within which it operates
Systems Analysis: Understanding how a system should work and how changes in conditions, operations, and the environment will affect outcomes
Complex Problem Solving: Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions
Deductive Reasoning: The ability to apply general rules to specific problems to produce answers that make sense
Inductive Reasoning: The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events)
Excellent communication skills: Ability to engage with high-level stakeholders, both verbal and non-verbal
Flexibility and adaptability (crucial to consulting environment)
Organizational and leadership abilities
Influencing and motivating
Decision making
Building trust and long-term relationships with stakeholders
`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002547-WHN",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p17913e7d-7d4c-4743-861e-280867bcdb85"},{jobTitle:"Junior Rep",startDate:"2024-09-10 - 2024-10-10",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Must know the Rustenburg mining and surrounding areas very well.* Have a valid driver's license* Valid grade 12 certificate* Have a passion for sales and have excellent customer service* Outgoing personality and be able to communicate at all levels.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002543-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p965a73cb-0da5-47ef-831f-e3d0ea35eb02"},{jobTitle:"Junior Sales Representative",startDate:"2024-09-10 - 2024-10-10",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Rustenburg",region:"North West"},details:`Requirements:

1-2 years’ experience in sales, specifically within the mining, construction, or engineering industries.
Proven ability to meet sales goals and generate new business.
Strong communication and negotiation skills.
A valid driver’s license is essential.
Ability to work independently and as part of a team.
Willingness to travel as required.

Key Responsibilities:

Develop and manage relationships with key stakeholders in the mining, construction, or engineering sectors.
Identify new sales opportunities and follow up on leads.
Present and promote company products and services to existing and prospective customers.
Achieve sales targets and contribute to the overall growth of the business.
Conduct market research to stay up-to-date with industry trends.

Employment Equity: In line with our client’s Employment Equity targets, preference will be given to Coloured or African male candidates.`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002544-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pfc622e28-1f4a-4a3d-b418-d224a943ee38"},{jobTitle:"Environmental Officer",startDate:"2024-09-10 - 2024-10-10",vacancyType:"Permanent",jobSpecFields:"SHEQ",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:`Key Responsibilities:

Ensure compliance with environmental regulations, standards, and laws across all oil, gas, and construction operations.
Develop, implement, and monitor environmental management systems and policies.
Conduct regular site inspections and audits to assess environmental risks and impact.
Monitor waste management, water, and air quality, ensuring all projects meet environmental safety standards.
Develop environmental impact assessments (EIAs) and suggest mitigation measures for new projects.
Provide training and awareness programs for employees on environmental best practices.
Coordinate with government agencies, regulatory bodies, and third-party consultants on environmental issues.
Prepare reports and documentation for regulatory authorities and internal stakeholders.
Manage environmental emergencies such as oil spills, ensuring rapid and effective response.

Required Qualifications:

Bachelor's degree in Environmental Science, Environmental Engineering, or a related field.
3+ years of experience in environmental management, preferably in the Oil, Gas, or Construction sector.
Strong knowledge of environmental regulations, particularly related to oil and gas operations.
Experience with environmental impact assessments and risk mitigation strategies.
Certification in environmental management or safety practices is a plus.

&nbsp;Skills and Competencies:

Excellent analytical and problem-solving skills.
Ability to communicate effectively with teams and external stakeholders.
Proficient in environmental reporting software and data analysis.
Strong organizational skills and attention to detail.
Ability to manage multiple projects simultaneously and meet deadlines.

Candidates must be willing to work in Saudi Arabia&nbsp;As part of our Employment Equity Plan, preference will be given to Female candidates`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002545-WHN",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p025f2b68-d89d-4e47-847e-046201d934d6"},{jobTitle:"Environmental Officer",startDate:"2024-09-10 - 2024-10-10",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Saudi Arabia",region:"Saudi Arabia"},details:"Required Qualifications:* Bachelor's degree in environmental science, environmental engineering or related field.* 3± years of experience in environmental management, preferable in the Oil, Gas or Construction sector* Strong knowledge of environmental regulations, particularly related to oil and gas operations* Experience with environmental impact assessment and risk mitigation strategies* Certification in environmental management or safety practices is a plusSkills and Competencies:* Excellent analytical and problem solving skills* Ability to communicate effectively with teams and external stakeholders* Proficient in environmental reporting software and data analysis* Strong organizational skills and attention to detail* Ability to manage multiple projects simultaneously and meet deadlinesCVs with all relevant certificates can be send to yolanda@propersonnel.co.za",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002546-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p2fc79b8a-0df4-40b0-ab1a-2113b0c25550"},{jobTitle:"Payroll Administrator",startDate:"2024-09-04 - 2024-10-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durban",region:"KwaZulu Natal"},details:`PRIMARY RESPONSIBILITIESVIP Premier Payroll Administration

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002541-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pc526fbdb-a15a-4e46-a7cf-78b7fa7e8759"},{jobTitle:"Payroll Administrator",startDate:"2024-09-04 - 2024-10-04",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Durban",region:"KwaZulu Natal"},details:`Qualifications:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002542-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pcb836648-8bbc-4160-906e-bd33722cf987"},{jobTitle:"Occupational Hygienists",startDate:"2024-09-03 - 2024-10-03",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Middelburg",region:"Mpumalanga"},details:"Requirements needed:* Bachelor's degree in Occupational Hygiene, Environmental Health of related field* Certification as an Occupational Hygienist (SAIOH registered or equivalent)Experience:* Minimum 3-5 years working experience in occupational hygiene withing the mining industry.* In depth knowledge of South African mining health and safety regulationsDesirable Attributes:* Familiarity with mine verification systems and respirate protection programs* Experience with occupational hygiene monitoring equipment and software",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002539-YDG",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pce17dce1-cd2d-4675-bdb1-070878a45e94"},{jobTitle:"Occupational Hygienists",startDate:"2024-09-03 - 2024-10-03",vacancyType:"Permanent",jobSpecFields:"Hygiene",location:{city:", Middelburg",region:"Mpumalanga"},details:`Requirements

Bachelors degree in Occupational Hygiene, Environmental Health, or related field.
Certification as an Occupational Hygienist (SAIOH registered or equivalent)
Minimum of 3-5 years of experience in Occupational Hygiene within the mining industry.
In-depth knowledge of South African mining Health and Safety regulations.

Desirable Attributes

Familiarity with mine ventilation systems and respiratory protection programs.
Experience with Occupational Health risk assessments and incident investigations.
Proficiency in using Occupational Hygiene monitoring equipment and software.
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002540-D",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"pc8b75ce8-2e91-4854-84be-ba1ba78c6f79"},{jobTitle:"Counter Sales Assistant",startDate:"2024-08-14 - 2024-10-31",vacancyType:"Permanent",jobSpecFields:"Retail",location:{city:", Bela Bela",region:"Limpopo"},details:"Minimum Qualifications:Must have Grade 12 or equivalent&nbsp;Must be fluent in Afrikaans and English&nbsp;Previous Counter Sales will be an advantage&nbsp;Previous technical / paint counter sales experience will be an added advantage&nbsp;Energetic, hardworking, diligent individual",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002521-R",iconLink:"/assets/agency_icons/pro-personnel.jpg",uuid:"p56baa368-c46e-446b-911c-3ed5dfe6c05f"}],$={iconLink:K,title:X,blogPosts:Z},ee="govpage-public-sector",te=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/mpumalanga-health_orig.png",href:"https://www.govpage.co.za/mpumalanga-department-of-health-vacancies-blog/mpumalanga-department-of-health-vacancies9250955",title:"MPUMALANGA DEPARTMENT OF HEALTH VACANCIES",content:[` 
MPUMALANGA DEPARTMENT OF HEALTH
 `],postedDate:"30/9/2024",iframe:"",uuid:"p93e56175-05fb-49ad-8474-4519775cfe09"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/city-of-ekurhuleni_orig.png",href:"https://www.govpage.co.za/ekurhuleni-metropolitan-municipality-vacancies-blog/city-of-ekurhuleni-vacancies4234860",title:"CITY OF EKURHULENI VACANCIES",content:[` 
CITY OF EKURHULENI
 `,` 
 
INDIGENT CLERK: SOCIAL DEVELOPMENT - HESD19678
Closing Date 2024-10-10
Department Health & Social Development Department (2019)
Location City of Ekurhuleni
Remuneration R 217,920.00 to R 298,932.00 - Basic salary per annum (plus benefits)
Assignment Type Permanent
 
Minimum Requirements:
Grade 12 (NQF Level 5)
Certificate in Administration/ Computer Literacy
1 -2 years' experience in a similar environment (will be an added advantage)
 
Core Responsibilities:
Effectively apply data management and administrative duties.
Perform administrative and clerical duties.
Make sure that own work is in line with work control and safety requirements.
Do own work well to prevent financial losses by adhering to all financial procedures in the division to promote quality service delivery.
Be part of culture that treats people well, builds relationships and keep customers happy.
Promoting Batho Pele principles during service delivery, one on one communication.
 
Enquiries: Tel: 0860 54 3000
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
LIFE GUARD: SEASONAL SWIMMING POOLS - SRAC19639
Closing Date 2024-10-14
Department Sport, Recreation, Arts & Culture Department
Location City of Ekurhuleni
Remuneration R 349,956.00 to R - Total cost to company
Assignment Type Fixed Term Contract

Position: Seasonal Lifeguard (Various Areas) (Appointments will be made on a contract basis for the 2024/2025 season)
Salary: R349 956 per Annum
 
Minimum Requirements:
Grade 10
Valid First Aid Level 1 Certificate
Valid Lifeguard Award
Proof of completed/passed Lifeguard Award examination, certified by Life Saving South Africa recognised Examiner
0-1 year experience in a similar environment
 
Core Responsibilities:
Execute Lifesaving duties
Daily testing and treatment of water
Operation of filtration, chlorine gas plant, heating system and timing system
Inspection of facilities and control by visual assessment, completion of inspection control sheets.
 
Interested candidates whose background and experience match these challenging and exciting positions are invited to apply using an online application system attached to the advertisement on the website of the City of Ekurhuleni (www.ekurhuleni.gov.za).
 
Enquiries: Tel: 0860 54 3000; E-mail: call.centre@ekurhuleni.gov.za
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
PROJECT MANAGER - XEPRJM001
Closing Date 2024-10-04
Department Finance Department (2019)
Location City of Ekurhuleni
Remuneration R 926 132.00 to R 926 132 .00 - Total cost to company
Assignment Type Fixed Term Contract
3-year Fixed Term Contract
 
Minimum Requirements:
B Degree in the Built Environment, Project Management or relevant equivalent NQF Level 7 qualification
Minimum of 3 years' experience in an engineering consulting, construction, project management or similar environment
Possession of a valid driver's license
MFMA certification will be an added advantage
Membership registration with a built environment regulatory or professional body will be an added advantage
 
Core Responsibilities:
Provide project management support to the Department, monitoring and reporting on implementation and progress on decisions made
Assess the Departmental Demand Management Plans and advise on more efficient and effective approaches to ensure successful capital expenditure performance
Identify internal and external resources, human, financial, or otherwise required for successful completion of projects
Ensure that SOPs, processes, procedural guides and quality service standards are developed, maintained, understood and implemented
Manage and take accountability for delivery of contracted work output within prescribed parameters of SOPs, quality standards and service targets to ensure all work is undertaken within the agreed specifications, and projects are carried out according to professional project management practices
Effectively asses, intervene and mobilize support interventions for allocated projects where necessary
 
Enquiries: Tel: 0860 54 3000
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
BOARD/COMMITTEE MEMBERS - IND00167
Closing Date 2024-10-14
Department Corporate Legal Services Department (2019)
Location City of Ekurhuleni
Remuneration R 0 to R 0 -
Assignment Type Temporary
 
Minimum Requirements:
B Degree; NQF Level 7
Registered as CA, CIA or CISA will be an added advantage
Candidates must be suited to serve on the Committee/Board by virtue of their qualifications, expertise and experience in the fields of Financial Management, Accountancy, Audit, Legal, Actuarial, Information Technology, Investment Management, Finance, Internal Auditing, Risk Management, Infrastructure Development and Project Management, Development Finance, Socio-economic Development, Strategic Planning and Performance Management, Business, Pension Fund Management, Compliance, Transport Economics, Engineering Sciences, Built Environment, Community Activism and Participation, and Governance and Public Sector and or Local Government Administration.
Applicants must possess no less than 8 years’ management experience in any of the specialist areas enlisted above. Preference will also be given to applicants who have previously served in such roles.
A Cover Letter, Curriculum Vitae and certified copies of qualifications together with 3 references must be submitted with applications.
 
Further considerations: Applications will be subject to vetting and probity checks and the selected candidates obtaining necessary security clearance. Preference will be given to candidates whose appointments will enhance representation of Communities of the City of Ekurhuleni. Correspondence will be limited to short-listed applicants only.

 
Disclaimer: The City of Ekurhuleni reserves the right to amend, modify or withdraw this advert or to amend, modify or terminate any of the requirements set out herein at any time and from time to time, without prior notice and without liability to compensate or reimburse any party. Applications don’t mean acceptance, as candidates will be subject to the City’s’ recruitment and selection process. The City of Ekurhuleni reserves the right not to select any applicant.

Remuneration: Council determines the remuneration allowances and other benefits of the Chairperson, Directors and other Committee members. 

Enquiries: Natasja Havenga (011) 999 6356.
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE
 
 
 
 
 `,`NON-EXECUTIVE BOARD MEMBER - IND00166
Closing Date 2024-10-14
Department Corporate Legal Services Department (2019)
Location City of Ekurhuleni
Remuneration R 0 to R 0 -
Assignment Type Temporary
 
Minimum Requirements:
B Degree; NQF Level 7.
Post graduate NQF 8/9 qualification will be an advantage.
Candidates must be suited to serve on the Board and its Committees by virtue of their qualifications, expertise and experience in the fields of Financial Management, Legal, Actuarial, Information Technology, Investment Management, Finance, Auditing, Risk Management, Infrastructure Development, Development Finance, Socio-economic Development, Strategic Planning, Business, Pension Fund Management, Compliance, Transport Economics, Engineering Sciences, Built Environment, Community Activism and Participation, and Governance and Public Sector Administration.
Applicants must possess at least 8 years’ management experience in any of the specialist areas enlisted above. Preference will also be given to applicants who have previously served in such roles.
A Cover Letter, Curriculum Vitae and certified copies of qualifications together with 3 references must be submitted with applications
 
Further considerations: Applications will be subject to vetting and probity checks and the selected candidates obtaining necessary security clearance. Preference will be given to candidates whose appointments will enhance representation of Communities of the City of Ekurhuleni. Correspondence will be limited to short-listed applicants only.
Disclaimer: The City of Ekurhuleni reserves the right to amend, modify or withdraw this advert or to amend, modify or terminate any of the requirements set out herein at any time and from time to time, without prior notice and without liability to compensate or reimburse any party. Applications don’t mean acceptance, as candidates will be subject to the City’s’ recruitment and selection process. The City of Ekurhuleni reserves the right not to select any applicant.
Remuneration: Council determines the remuneration allowances and other benefits of the Chairperson and Non-Executive Directors (NEDs).
 
Enquiries: Tel: Natasja Havenga (011) 999 6356
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE`,`PROFESSIONAL NURSE - XHESD0003
Closing Date 2024-10-02
Department Health & Social Development Department (2019)
Location City of Ekurhuleni
Remuneration R 443508 to R 443508 -
Assignment Type Temporary
 
Minimum Requirements:
Nursing Diploma in General Nursing, Midwifery, Psychiatric Nursing (optional) and Community Nursing Science
Registration with the South African Nursing Council
Valid Driver's license
Relevant experience in a similar environment
 
Core Responsibilities:
To provide facility based on community and primary health care services including the ward based primary health care, outreach health services and implement primary health programmes
Ensure sufficient planning, organising and implement work
To implement good governance and risk control process to ensure compliance to legislation, policies and guidelines
To implement effective stock and financial control process
To provide quality primary health care services which is responsive to the needs of the clients/patients within the ambit of the values and guiding principles of the organization as well as the nursing profession and specialized scope of practice
To ensure collaboration within a multi -disciplinary team and collaborate intersectorally for effective people management
Communicating with relevant stakeholders to ensure effective rendering of ward based and primary health care services
 
 
Enquiries: Tel: 0860 54 3000
 
Candidates may be requested to submit proof of the NQF level applicable to the qualifications they have obtained.
 
Should candidates not be informed of the outcome of the application within six weeks of the closing date, it should be regarded as having been unsuccessful. The City of Ekurhuleni subscribes to the principles of the Employment Equity Act and reserves the right to appoint, not appoint or to appoint laterally.
 
PLEASE APPLY HERE`],postedDate:"30/9/2024",iframe:"",uuid:"pc69b7bae-daa2-4434-a0f9-6b59e93ee493"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/cidb_orig.gif",href:"https://www.govpage.co.za/construction-industry-development-board-cidb-vacancies-blog/construction-industry-development-board-cidb-vacancies1624920",title:"CONSTRUCTION INDUSTRY DEVELOPMENT BOARD (CIDB) VACANCIES",content:[` 
CONSTRUCTION INDUSTRY DEVELOPMENT BOARD (CIDB)
 `,` 
MANAGER: SKILLS DEVELOPMENT PROJECTS
Centurion
Job Ref #: SDM/BUILD/001
Industry: Government
Job Type: Contract
Salary: R993 593,00 - R1 313 630,00
 
Description:
5 Years Contract
Facilitate and monitor the implementation of the skills development standard on the cidb BUILD Programme and provide advice and assistance on skills development initiatives, including legislative matters and requirements.
Manage the implementation, delivery, and execution of strategic projects and learning programs. Compile implementation plans and supporting documents and ensure these are adhered to for the duration of the programmes. Conduct skills development training needs analysis to address identified skills gaps and oversee training interventions and maintain records to ensure that the training programmes are properly administered, recorded and reported as required. Evaluate the effectiveness of training programmes and recommend improvements to Management. Collaborate closely with key stakeholders to ensure the successful delivery of learning programs and projects. Communicate all aspects of the rollout, including risks and mitigation plans, to relevant stakeholders. Ensure that goals and objectives are achieved within the defined scope, time frame, and budget.
Requirements:
A bachelor’s degree (NQF 7) or an Advanced Diploma in Human Resources Management/Training & Development/ Skills Development & Management / Development Studies/ Public Administration. A postgraduate qualification will be an added advantage. Valid driver's license.

Minimum of six (6) years' experience of which two (2) are at middle management level and four (4) functional experience in Human Resource Development/ Training and Development services, focusing on the execution and delivery of comprehensive learning and development functions within the Built Environment.
 
Closing Date: 7 October 2024
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation
 
APPLY
 
 
                            
 
 `,`APPLICATION DEVELOPER
Centurion
Job Ref #: ISM02
Industry: Government
Job Type: Permanent
Salary: R359 717,85 - R526 175,18
 
Description:
Key Performance Areas
1.1 Plan and Design IT Application Solutions
Collaborate with the procurement and development team and other ICT staff to develop specifications and configurations for new applications.
Establish a detailed technical specification through discussion with co-workers and clients.
Clarifying actions the system is intended to perform.
Communicate ideas to the Information Systems Overseer and ICT team.
Design creative prototypes according to specifications.
Coordinate application development plans with the supply chain management.
Develop application release schedule and introduce new functionality using SDLC methodologies.
Provide application health reports, such as performance, availability, utilisation and capacity.
Devise possible solutions to anticipated problems.
Ensure application staging is correctly scheduled, such as development, testing and training platforms. Ensure correct resources for production environment.
1.2 Development, Testing & Deployment
Develop release, test, training, and stabilisation plans.
Actively participate in training, testing and UAT sign-off activities.
Manage post go-live stabilisation using advanced troubleshooting and debugging.
Aggressively influence project delivery timelines.
Ensure new systems are part of the existing backup plans.
Develop a disaster recovery testing plans for systems and participate in business continuity simulation.
Conduct user-acceptance testing to ensure the application meet the user requirements.
Develop end-user reports.
1.3 Application Maintenance and Support
Manage the application lifecycle, and people involved in the process, to ensure smooth deployment and post-deployment modifications.
Evaluate existing applications to propose enhancements and new functionalities.
Establish processes and procedures to resolve applications errors in the production platform.
Manage the application security.
Develop adaptation of the program to new requirements, as necessary.
Develop technical documents and manuals to accurately represent application “As-build”.
Participate in monthly service level review and operational meetings.
 
Requirements:
EDUCATION AND EXPERIENCE
NQF 6 qualification in IT or related field.
Certifications in Microsoft Dynamics and Azure cloud will be an added advantage.
At least three (3) years’ experience in software development involving releases, versioning, change control and source code control within technologies such as SharePoint, .Net, C#, CSS, REST API, JSON, Angular, Power Automate, etc.
Experience in cloud-based application development within Azure, Dynamics 365, Microsoft PowerApps, Azure database and SharePoint platforms is an added advantage.
 
COMPUTER SKILLS
The applicant must have advanced computer skills in engaging agile system development methodologies and techniques.
S/He must have a good grasp of emerging software development culture, processes, and tools within application development and operational environment.
Further be skilled fairly in .NET, ERP, ITIL, SQL, Azure technologies.
 
APPLY`,`MANAGER: ENTERPRISE DEVELOPMENT PROJECTS
Centurion
Job Ref #: EDM/BUILD/001
Industry: Government
Job Type: Contract
Salary: R993 593,00 - R1 313 630,00
 
Description:
5 Years Contract
Facilitate and monitor the implementation of the enterprise development/indirect targeting standard on the cidb BUILD Programme and provide advice and assistance on the contractor development initiatives, including legislative matters and requirements. Manage the implementation, delivery, and execution of strategic projects for enterprise/contractor development. Compile implementation plans and supporting documents and ensure these are adhered to for the duration of the programmes. Conduct contractor development training needs analysis to address identified skills gaps and oversee training interventions and maintain records to ensure that the training programmes are properly administered, recorded and reported as required. Evaluate the effectiveness of training programmes and recommend improvements to Management. Collaborate closely with key stakeholders to ensure the successful delivery of contractor development programs and projects. Communicate all aspects of the rollout, including risks and mitigation plans, to relevant stakeholders. Ensure that goals and objectives are achieved within the defined scope, time frame, and budget.
 
Requirements:
A bachelor’s degree (NQF 7) or an Advanced Diploma in the Built Environment. A postgraduate qualification in the Built Environment will be an added advantage.
Minimum of six (6) years' experience in infrastructure delivery management of which two (2) are at middle management level and four (4) years’ experience in project or programme management within the Built Environment, focusing on the execution and delivery of infrastructure projects.
 
Closing Date: 7 October 2024
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation.
 
APPLY`],postedDate:"30/9/2024",iframe:"",uuid:"pad6f6949-0281-42ee-a933-c14e21a5564a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/eskom_orig.png",href:"https://www.govpage.co.za/eskom-vacancies-blog/eskom-vacancies7191545",title:"ESKOM VACANCIES",content:[` 
ESKOM
 `,` 
 
LEANER INTERN X1 (GENERATION GROUP CAPITAL) MEGAWATT PARK
Vacancy type: External/Internal
Task Grade : L06
Area of Specialization : N/A
Department : Human Resources
Business Unit : Group Capital
Location : South Africa (Gauteng)
Reference Number : Learners UOT GC
Closing Date : 10/14/2024
Minimum Requirements


Qualification(s):
• Fully Completed National Diploma in HR at NQF Level 6 with 240 Credits

Minimum Requirements
• Must be a South African Citizen

Related Minimum Experience:
• No Experience
Skills and Competencies


Leadership
• Teamplayer

Behavioural
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
• The incumbent will be afforded institutionalised and on job training


** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL**
recruitmentgcd@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
SNR ADVISOR ETD NON – TECH
Vacancy type: External/Internal
Task Grade : G14
Area of Specialization : To be responsible for the delivery of learning interventions, conducting competency assessments, moderations and designing course content.
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081511NM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements

Qualification(s):
B Degree/B Tech/National Higher Diploma/Advanced Diploma in Human Resources/ Social Sciences/ Educational Sciences at NQF7 with 360 credits.
Learning facilitation, accreditation, moderation, content design and development

• Related Minimum Experience:
  4 Years.
 
Skills and Competencies


Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity


Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

Skills
• Learning content design and development
• Learning evaluation
• Competency analysis
• Assessment tools and techniques
• Communication
• Training facilitation
•  Managing conflict
 
Key Responsibilities
• Adult learning fundamentals
• Learner assessment
•  On-the-job training
• Structured learning
• The South African Quality Authority (SAQA) and National Qualification Framework (NQF) assessment, moderation requirements
• Faculty specific knowledge and skills
• Relevant Eskom policies and procedures
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
SNR ADVISOR ETD ENGINEERING
Vacancy type: External/Internal
Task Grade : G14
Area of Specialization : To be responsible for the delivery of learning interventions, conducting competency assessments, moderations and designing course content.
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081511NM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements

Qualification(s):
B Degree/B Tech/National Higher Diploma/Advanced Diploma in Human Resources/ Social Sciences/ Educational Sciences at NQF7 with 360 credits.
Learning facilitation, accreditation, moderation, content design and development

• Related Minimum Experience:
 4 Years.
Skills and Competencies

Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity

Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

Skills
• Learning content design and development
• Learning evaluation
• Competency analysis
• Assessment tools and techniques
• Communication
• Training facilitation
• Managing conflict
 
Key Responsibilities
• Adult learning fundamentals
• Learner assessment
• On-the-job training
• Structured learning
• The South African Quality Authority (SAQA) and National Qualification Framework (NQF) assessment, moderation requirements
• Faculty specific knowledge and skills
• Relevant Eskom policies and procedures
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
SNR ADVISOR ETD MAINTENANCE
Vacancy type: External/Internal
Task Grade : G14
Area of Specialization :  To be responsible for the delivery of learning interventions, conducting competency assessments, moderations and designing course content.
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081510NM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements


Qualification(s):
B Degree/B Tech/National Higher Diploma/Advanced Diploma in Human Resources/ Social Sciences/ Educational Sciences at NQF7 with 360 credits.

Learning facilitation, accreditation, moderation, content design and development.

• Related Minimum Experience:
  4 Years.
 
Skills and Competencies

Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity

 Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

 Skills
• Learning content design and development
• Learning evaluation
• Competency analysis
• Assessment tools and techniques
• Communication
• Training facilitation
• Managing conflict
 
Key Responsibilities
• Adult learning fundamentals
• Learner assessment
• On-the-job training
• Structured learning
• The South African Quality Authority (SAQA) and National Qualification Framework (NQF) assessment, moderation requirements
• Faculty specific knowledge and skills
• Relevant Eskom policies and procedures
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
SNR CLERK GENERAL ADMIN
Vacancy type: External/Internal
Task Grade : T06
Area of Specialization : To provide general administrative services to the section
Department : Human Resources
Business Unit : Duvha Power station and Kendal Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081514LM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements

• Qualification(s):
  NCV4/NSC3/ Grade 12 at NQF 4 with 120 Credits.
  Administrative Experience.

• Related Minimum Experience:
  2 years.
 
Skills and Competencies

Leadership
• Team Player

 Behavioral
• Politeness
• Promptness
• Energetic
• Self-starter
• Assertive
• Telephone Etiquette

 Knowledge
• Knowledge of Eskom’s policies and procedures .


Skill
• Administrative skills
• Communication skills
• Sound interpersonal skills
• Negotiation skills
• Liaising skills
 
Key Responsibilities
• Section Administration
• Office control
• Basic Advisory Service and Reporting
 
 “If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
GRADUATE IN TRAINING (GIT) X77 (GENERATION GROUP CAPITAL) GAUTENG, FREE STATE, LIMPOPO, MPUMALANGA
Vacancy type: External/Internal
Task Grade : L07
Area of Specialization : N/A
Department : Human Resources
Business Unit : Group Capital
Location : Various
Reference Number : Learners GIT GC
Closing Date : 10/14/2024
 
Minimum Requirements

Qualification(s):
• Fully Completed B Degree/B Tech/Advanced Diploma eg BCom, BA, etc in Built Environment/Commerce/Business Management/ Business Administration/Marketing/Stakeholder Management/Public Relations/Communication/Human Resources Management/ Behavioral Sciences/Safety Management/Environmental Science/Quality Management Logistics/Supply Chain Management/Business Analysis/Information System/Computer Science

Minimum Requirements
• Must be a South African Citizen

Related Minimum Experience:
• No Experience
Skills and Competencies
Leadership
• Teamplayer

Behavioural
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

** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL** recruitmentgcd@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
OFFICER DATA CENTER X3
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : Ensure the availability, reliability, control and effectiveness of the Data Centre in relation to business requirements, service providers and suppliers to monitor that the level of Data Centre services
Department : Infrastructure
Business Unit : Infrastructure Provisioning and Hosting (Data Centre)
Location : South Africa (Gauteng)
Reference Number : 50810858GS
Closing Date : 10/7/2024
 
Minimum Requirements

Qualification(s):
•National Diploma in Information Management / Information
Systems/Information Sciences at NQF 6 with 240 Credits

Related Minimum Experience:
•3 years’ experience on Data Centre environments and critical infrastructure systems
 
Skills and Competencies

Behavioral
•Analytical thinker
•Professionalism
•Emotional maturity
•Flexible & able to work within undefined & continuously changing environment.
•Resilient and able to operate effectively in a matrix environment.

Leadership:
•Teamwork – working in a team towards a common goal as well as the ability to lead and empower a team.
•Ability to coordinate resources within the environment to drive quality.
•Good communicator.
•Influence and persuasion.
•Results orientation.

Knowledge
•In depth knowledge of an IT environment
•In-depth working knowledge of ITIL processes & functions

Skill
•Good problem solving and analytical
•Ability to assess both IT and business risks
•Ability to communicate at all levels
•Ability to cope with stress and work under pressure
•Ability to research, analyse and prepare information
•Advanced Microsoft Office skills
 
Key Responsibilities
•Monitor and report on overall Data Centre availability and capacity optimization
•Advise on the design, build, and oversee hosting of all ICT equipment in a physical secure environment by performing installations, decommissioning of equipment
•Support the sustainability of engagements with all Group IT functions
•Perform Data Centre implementation strategies related to all towers of service and
•successful hosting of all types of different hardware (servers, network, storage,
etc.)
•Assist the Data Centre Manager with planning and researching new Data Centre Technology Solutions

 
** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL to recruitmentssf@eskom.co.za **
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
OFFICER SECURITY INVESTIGATIONS X1 (GENERATION) KOEBERG NPS
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To conduct investigations of irregularities, criminal activities, security incidents and breaches at business unit level in Eskom Holdings environment and to report on the results of such investigations.
Department : Nuclear Services
Business Unit : Koeberg Nuclear Power Station
Location : South Africa (Western Cape)
Reference Number : 50867748XS/Gx-Koeberg
Closing Date : 10/14/2024
 
Minimum Requirements
• National Diploma Security Risk Management/Policing/Forensic
Investigations at NQF6 with 240

Related Minimum Experience:
• 3 years related experience in a security environment and crime
Investigations

Professional Registration Body: 
• Private Security Industry Regulatory Authority (PSIRA) Grade A
 
Skills and Competencies

1) Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism

2) Leadership
• Live the Eskom vision and values
• Grow people
• Ignite passion
• Promote teamwork
• Encourage the right behaviour
• Must be accountable for decisions made

3) Knowledge
• Relevant legislation
• Apply theoretical and business knowledge on the job
• Think on the feet and make quality decisions
• Eskom’s security policies, systems, directives, and standards
• National key point training program
• PSIRA skills program – first line security supervisor
• PSIRA skills program – private investigator

4) Skill
• Report writing
• Communication
• Work under pressure in the dynamic and fast paced environment of investigations
• Analysing and interpreting data
• Promote open and transparent communication
• Work as a team or an individual where required    
 
Key Responsibilities
• Conduct baseline investigations into incidents, irregularities, criminal activities
• Apply sound investigative practices
• Provide post investigative support to the business
• Provide an advisory and consultative role



FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitmentgx@eskom.co.za **
 
Kindly apply for the position online by clicking on the link below:

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”


“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
SUPERVISOR (X4) CAMDEN POWER STATION-ERI
Vacancy type: External/Internal
Task Grade : T10
Area of Specialization : Responsible to supervise Project planned and breakdown outages on Turbo Gen Plant and auxiliaries.
Department : Projects
Business Unit : Turbo Gen Services
Location : South Africa (Mpumalanga)
Reference Number : ERI 0012691
Closing Date : 10/14/2024
 
Minimum Requirements
Qualification(s):
• Mechanical Fitting Trade Certificate and NTC4 or equivalent.

Related Minimum Experience:
• At least 3 years’ experience on Turbine Generator plant and its auxiliaries
• At least 2 years supervision experience with strong organizational, interpersonal, communication & supervision skills with the ability to manage subordinates to achieve the required objective.
 
Skills and Competencies
• Strong technical background with at least 5 years related experience on steam Turbines, Generators and related Auxiliaries-ranging from 150MW to 1000MW, including ABB, MAN, KWU, Alstom, Siemens, AEG, AEI and parsons and Alstom nuclear.
• Sound basic fitting skills with the ability to utilize and read measuring instruments within the tolerance requirements.
• Must be fully literate in English, in reading, writing and speaking, with technical report writing skills and required to communicate in English at all times
• Conversant with quality system, Safety system and Disciplinary Code.
• Must have a valid advanced Rigging certificate.

Knowledge
• Planning, leading and controlling of activities in accordance with process quality plans, Work instructions and OEM specification within the company procedure TTQ-D-6.
• Ensure the effective management, utilization and control of resources, tools and equipment.
• Provide technical support on repairs and refurbishment.
• Ensure a clean working environment is maintained.
• Ensure adherence to quality procedures and quality plans check sheets to be completed and signed as per requirements.
• Ensure compliance with the access control of turbines and generators as per company Procedures.
• Meet predefined milestone deadlines, ensure compliance with plant Safety Regulations, with safety and environmental rules, regulations and PPE requirements and with quality standards.
• Responsible for subordinates’ performance management, on job training, and HR/IR Management.
• Perform rigging and lifting of components within the certified limits of the qualification.

Attributes
• The ability to function effectively.

SHEQ Responsibilities
• Continuous improvement: Ensure that your administration Document is current and includes and SHEQ objectives.
• Ensure that all legal appointments are valid and in place for your area of control.
• SHE Compliance: As a section 8 (2)I appointee, you are to ensure that the duties of the employer as contemplated in the Occupational Health and Safety act 85 of 1993 are properly discharged and all legal appointments are valid and in place for your area of control.
• Reduce rework: Measure and report on rework vs revenue for your department on a monthly basis and ensure you reduce rework to less than 0.5 of your turnover.
• Audit Rating: Maintain an audit score of less than 2 and/or receive no major findings.
 
Key Responsibilities
Project planned and unplanned outages supervision.
 
** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL ** recruitmenteri@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
NON - TECH FUNCTIONAL TRAINING ETD OFFICER
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To provide and deliver technical or non-technical training to ensure sufficiently competent employees to undergo on job coaching and training for authorisation in order to satisfy the business needs for current and future Human Resources sustainability
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081508LM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements
• Qualification(s):
Relevant National Diploma in Human Resources.
 HR or Learning related experience.

• Related Minimum Experience:
  1 Year.
 
Skills and Competencies

 Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity
• Interpersonal relations skills
• Detailed oriented.
• Proactive
• Structured

 Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

 Skills
• Computer Literacy
• Analytical Skills
• Communication skills
• Coordinating skills
• Collating and interpreting data
• Making presentations
 
Key Responsibilities
• Document records control processes and system
• Eskom business understanding
• Computer applications
• Eskom application (SAP /LSO)
• ISO 9001:2008 requirements and application
• Configuration management principles
• Computer literate.

 ATTRIBUTES :
• Physical ability
• Ability to work at Heights
• Ability to distinguish colours
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
ENGINEERING ETD OFFICER
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To provide and deliver technical or non-technical training to ensure sufficiently competent employees to undergo on job coaching and training for authorisation in order to satisfy the business needs for current and future Human Resources sustainability
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081507LM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements

•  Qualification(s):
  Relevant National Diploma in Human Resources.
  HR or Learning related experience.

• Related Minimum Experience:
  1 Year.
 
Skills and Competencies

 Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity
• Interpersonal relations skills
• Detailed oriented.
• Proactive
• Structured

 Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

Skills
• Computer Literacy
• Analytical Skills
• Communication skills
• Coordinating skills
• Collating and interpreting data
• Making presentations
 
Key Responsibilities
• Document records control processes and system
• Eskom business understanding
• Computer applications
• Eskom application (SAP /LSO)
• ISO 9001:2008 requirements and application
• Configuration management principles
• Computer literate.

 ATTRIBUTES :
• Physical ability
• Ability to work at Heights
• Ability to distinguish colours
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
WELDING AND FABRICATION ETD OFFICER
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To provide and deliver technical or non-technical training to ensure sufficiently competent employees to undergo on job coaching and training for authorisation in order to satisfy the business needs for current and future Human Resources sustainability
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081506LM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements Relevant National Diploma in Human Resources.
 HR or Learning related experience.

• Related Minimum Experience:
  1 Year.
 
Skills and Competencies

Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity
• Interpersonal relations skills
• Detailed oriented.
• Proactive
• Structured

 Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

 Skills
• Computer Literacy
• Analytical Skills
• Communication skills
• Coordinating skills
• Collating and interpreting data
• Making presentations
 
Key Responsibilities
• Document records control processes and system
• Eskom business understanding
• Computer applications
• Eskom application (SAP /LSO)
• ISO 9001:2008 requirements and application
• Configuration management principles
• Computer literate

ATTRIBUTES :
• Physical ability
• Ability to work at Heights
• Ability to distinguish colours
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
WATER TREATMENT PLANT ETD OFFICER
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To provide and deliver technical or non-technical training to ensure sufficiently competent employees to undergo on job coaching and training for authorisation in order to satisfy the business needs for current and future Human Resources sustainability
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081505LM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements
•  Qualification(s):
    Relevant National Diploma in Human Resources.
    HR or Learning related experience.

•  Related Minimum Experience:
   1 Year.
Skills and Competencies


Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity
• Interpersonal relations skills
• Detailed oriented.
• Proactive
• Structured

  Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

 Skills
• Computer Literacy
• Analytical Skills
• Communication skills
• Coordinating skills
• Collating and interpreting data
• Making presentations
 
Key Responsibilities
• Document records control processes and system
• Eskom business understanding
• Computer applications
• Eskom application (SAP /LSO)
• ISO 9001:2008 requirements and application
• Configuration management principles
• Computer literate.

  ATTRIBUTES :
• Physical ability
• Ability to work at Heights
• Ability to distinguish colours
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
 
LEGISLATIVE - EOD ETD OFFICER
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To provide and deliver technical or non-technical training to ensure sufficiently competent employees to undergo on job coaching and training for authorisation in order to satisfy the business needs for current and future Human Resources sustainability.
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081503LM/DVP
Closing Date : 10/11/2024
 
Minimum Requirements

• Qualification(s):
       Relevant National Diploma in Human Resources.
       HR or Learning related experience.

• Related Minimum Experience:
       1 Year.
 
Skills and Competencies

 Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity
• Interpersonal relations skills
• Detailed oriented.
• Proactive
• Structured

 Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.

 Skills
• Computer Literacy
• Analytical Skills
• Communication skills
• Coordinating skills
• Collating and interpreting data
• Making presentations
 
Key Responsibilities
• Document records control processes and system
• Eskom business understanding
• Computer applications
• Eskom application (SAP /LSO)
• ISO 9001:2008 requirements and application
• Configuration management principles
• Computer literate
 
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 
 `,` 
 
 
 
 
ARTISAN FITTER (X6) CAMDEN POWER STATION-ERI
Vacancy type: External/Internal
Task Grade : T09
Area of Specialization : Perform Fitting tasks as required.
Department : Projects
Business Unit : Turbo Gen Services
Location : South Africa (Mpumalanga)
Reference Number : ERI 0012690
Closing Date : 10/14/2024
 
Minimum Requirements
Qualification(s):
• Fitter & Turner Trade Qualification
• Equivalent fitter Qualification registered and recognised by the Government of RSA

Related Minimum Experience:
• 2 years’ relevant Post Qualification experience
 
Skills and Competencies
• Good fitting skills
• Good communication skills
• Good interpersonal skills
• Proficient in the use of basic hand tools
• Basic planning skills
• Knowledge in use of different tools and equipment
• Computer literacy

Knowledge
• Ability to use Mechanical measuring equipment.
• Ability to read and interpret component drawing and tolerances.
• Ability to maintain a high-quality standard of work.
• Familiar with the OSHACT 85 of 1993
• Basic knowledge of quality systems

Attributes
• Attention to detail.
• Good customer relations.
• Innovative
• Able to work under pressure.
• Honest and reliable
• Adaptability to change.
• Able to work in a team
• Problem solving
• Ability to work independently and to communicate at all levels.
• Meet set deadlines.
 
Key Responsibilities
Production
 Safety
 Training

** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitmenteri@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 `,` 
 
 
 
 
SUPERVISOR (X4) MAJUBA POWER STATION-ERI
Vacancy type: External/Internal
Task Grade : T10
Area of Specialization : Responsible to supervise Project planned and breakdown outages on Turbo Gen Plant and auxiliaries.
Department : Projects
Business Unit : Turbo Gen Services
Location : South Africa (Mpumalanga)
Reference Number : ERI 0012689
Closing Date : 10/14/2024
 
Minimum Requirements
Qualification(s):
• Mechanical Fitting Trade Certificate and NTC4 or equivalent.

Related Minimum Experience:
• At least 3 years’ experience on Turbine Generator plant and its auxiliaries
• At least 2 years supervision experience with strong organizational, interpersonal, communication & supervision skills with the ability to manage subordinates to achieve the required objective.
Skills and Competencies
• Strong technical background with at least 5 years related experience on steam Turbines, Generators and related Auxiliaries-ranging from 150MW to 1000MW, including ABB, MAN, KWU, Alstom, Siemens, AEG, AEI and parsons and Alstom nuclear.
• Sound basic fitting skills with the ability to utilize and read measuring instruments within the tolerance requirements.
• Must be fully literate in English, in reading, writing and speaking, with technical report writing skills and required to communicate in English at all times
• Conversant with quality system, Safety system and Disciplinary Code.
• Must have a valid advanced Rigging certificate.

Knowledge
• Planning, leading and controlling of activities in accordance with process quality plans, Work instructions and OEM specification within the company procedure TTQ-D-6.
• Ensure the effective management, utilization and control of resources, tools and equipment.
• Provide technical support on repairs and refurbishment.
• Ensure a clean working environment is maintained.
• Ensure adherence to quality procedures and quality plans check sheets to be completed and signed as per requirements.
• Ensure compliance with the access control of turbines and generators as per company Procedures.
• Meet predefined milestone deadlines, ensure compliance with plant Safety Regulations, with safety and environmental rules, regulations and PPE requirements and with quality standards.
• Responsible for subordinates’ performance management, on job training, and HR/IR Management.
• Perform rigging and lifting of components within the certified limits of the qualification.

Attributes
• The ability to function effectively.

SHEQ Responsibilities
• Continuous improvement: Ensure that your administration Document is current and includes and SHEQ objectives.
• Ensure that all legal appointments are valid and in place for your area of control.
• SHE Compliance: As a section 8 (2)I appointee, you are to ensure that the duties of the employer as contemplated in the Occupational Health and Safety act 85 of 1993 are properly discharged and all legal appointments are valid and in place for your area of control.
• Reduce rework: Measure and report on rework vs revenue for your department on a monthly basis and ensure you reduce rework to less than 0.5 of your turnover.
• Audit Rating: Maintain an audit score of less than 2 and/or receive no major findings.
 
Key Responsibilities
Project planned and unplanned outages supervision.

** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL ** recruitmenteri@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
Artisan Fitter (X6) Majuba Power Station-ERI
Vacancy type: External/Internal
Task Grade : T09
Area of Specialization : Perform Fitting tasks as required.
Department : Projects
Business Unit : Turbo Gen Services
Location : South Africa (Mpumalanga)
Reference Number : ERI 0012688
Closing Date : 10/14/2024
 
Minimum Requirements
Qualification(s):
• Fitter & Turner Trade Qualification
• Equivalent fitter Qualification registered and recognised by the Government of RSA.

Related Minimum Experience:
• 2 years’ relevant Post Qualification experience.
 
Skills and Competencies
• Good fitting skills
• Good communication skills
• Good interpersonal skills
• Proficient in the use of basic hand tools
• Basic planning skills
• Knowledge in use of different tools and equipment
• Computer literacy

Knowledge
• Ability to use Mechanical measuring equipment.
• Ability to read and interpret component drawing and tolerances.
• Ability to maintain a high-quality standard of work.
• Familiar with the OSHACT 85 of 1993
• Basic knowledge of quality systems

Attributes
• Attention to detail.
• Good customer relations.
• Innovative
• Able to work under pressure.
• Honest and reliable
• Adaptability to change.
• Able to work in a team
• Problem solving
• Ability to work independently and to communicate at all levels.
• Meet set deadlines.
 
Key Responsibilities
Production
 Safety
 Training

** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitmenteri@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
RE ADVERT SENIOR ADVISOR PROF PROJECT DEVELOPMENT X3 (NATIONAL TRA
Vacancy type: External/Internal
Task Grade : P16
Area of Specialization : To provide technical and business inputs to the conceptualization, pre–feasibility studies and business planning of new capacity projects and existing plant capacity upgrades.
Department : Project Development
Business Unit : Grid Planning and Development
Location : South Africa (Gauteng)
Reference Number : 49968976PM02
Closing Date : 10/4/2024
 
Minimum Requirements

Qualification(s):
• B Degree/B Tech/Advanced Diploma in Built Environment/Commerce/Human   Science at NQF7 with 360 credits

Professional Registration:
• Engineering Council of South Africa (ECSA) as Professional Engineer or Professional Engineering Technologist/ The South African Council for the Project and Construction Management Professions (SACPCMP) as a Professional Project Manager or Professional Construction Project Manager

Experience:
• Four years related experience in project management and/or project development environment
Skills and Competencies

• Behavioural
o Passion
o Patience
o Perseverance
o Explorative nature
o Integrity
o Honesty
o Trustworthiness
o Professionalism
o Self-driven

• Leadership:
o Team player
o Motivating teams
o Coaching, mentoring and development of young professionals.

• Knowledge:
o Areas of project management body of knowledge (PMBOK)
o Project lifecycle models
o Environmental requirements for infrastructure projects
o Occupational, health and safety (OHS) Act
o Technical or commercial project development
o Relevant processes, procedures, policies, guidelines and legislation
o Cost analysis and economic evaluation
o Project management
o Contract compilation and management

• Skills:
o Analytical
o Technical problem-solving
o Communication and presentation
o Negotiation
o Budgeting
o Financial decision making
o Technical report writing
o Computer literate and proficiency in Microsoft applications
o Learn and adapt to change
 
Key Responsibilities
• Research new capacity concepts
• Conduct pre-feasibility level analysis of potential capacity projects
• Compile feasibility studies and business cases
• Interaction with other disciplines and departments and management of interfaces, business requirements and queries, problems, etc.
• Coordinate and prepare documentation related to project development deliverables
• Provide training and development


** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL (recruitmen@ntcsa.co.za) **
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”

“NTCSA is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of NTCSA and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  NTCSA reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

NTCSA is committed to providing a smoke-free environment for its employees and visitors at the workplace
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
SUPERVISOR (X4) GROOTVLEI POWER STATION-ERI
Vacancy type: External/Internal
Task Grade : T10
Area of Specialization : Responsible to supervise Project planned and breakdown outages on Turbo Gen Plant and auxiliaries.
Department : Projects
Business Unit : Turbo Gen Services
Location : South Africa (Mpumalanga)
Reference Number : ERI 0012687
Closing Date : 10/14/2024
 
Minimum Requirements
Qualification(s):
• Mechanical Fitting Trade Certificate and NTC4 or equivalent.

Related Minimum Experience:
• At least 3 years’ experience on Turbine Generator plant and its auxiliaries
• At least 2 years supervision experience with strong organizational, interpersonal, communication & supervision skills with the ability to manage subordinates to achieve the required objective.
 
Skills and Competencies
• Strong technical background with at least 5 years related experience on steam Turbines, Generators and related Auxiliaries-ranging from 150MW to 1000MW, including ABB, MAN, KWU, Alstom, Siemens, AEG, AEI and parsons and Alstom nuclear.
• Sound basic fitting skills with the ability to utilize and read measuring instruments within the tolerance requirements.
• Must be fully literate in English, in reading, writing and speaking, with technical report writing skills and required to communicate in English at all times
• Conversant with quality system, Safety system and Disciplinary Code.
• Must have a valid advanced Rigging certificate.

Knowledge
• Planning, leading and controlling of activities in accordance with process quality plans, Work instructions and OEM specification within the company procedure TTQ-D-6.
• Ensure the effective management, utilization and control of resources, tools and equipment.
• Provide technical support on repairs and refurbishment.
• Ensure a clean working environment is maintained.
• Ensure adherence to quality procedures and quality plans check sheets to be completed and signed as per requirements.
• Ensure compliance with the access control of turbines and generators as per company Procedures.
• Meet predefined milestone deadlines, ensure compliance with plant Safety Regulations, with safety and environmental rules, regulations and PPE requirements and with quality standards.
• Responsible for subordinates’ performance management, on job training, and HR/IR Management.
• Perform rigging and lifting of components within the certified limits of the qualification.

Attributes
• The ability to function effectively.

SHEQ Responsibilities
• Continuous improvement: Ensure that your administration Document is current and includes and SHEQ objectives.
• Ensure that all legal appointments are valid and in place for your area of control.
• SHE Compliance: As a section 8 (2)I appointee, you are to ensure that the duties of the employer as contemplated in the Occupational Health and Safety act 85 of 1993 are properly discharged and all legal appointments are valid and in place for your area of control.
• Reduce rework: Measure and report on rework vs revenue for your department on a monthly basis and ensure you reduce rework to less than 0.5 of your turnover.
• Audit Rating: Maintain an audit score of less than 2 and/or receive no major findings.
 
Key Responsibilities
Key Responsibilities
 Project planned and unplanned outages supervision.

 
** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL ** recruitmenteri@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
ARTISAN FITTER (X6) GROOTVLEI POWER STATION-ERI
Vacancy type: External/Internal
Task Grade : T09
Area of Specialization : Perform Fitting tasks as required.
Department : Projects
Business Unit : Turbo Gen Services
Location : South Africa (Mpumalanga)
Reference Number : ERI 0012686
Closing Date : 10/14/2024
 
Minimum Requirements
Qualification(s):
• Fitter & Turner Trade Qualification
• Equivalent fitter Qualification registered and recognised by the Government of RSA

Related Minimum Experience:
• 2 years’ relevant Post Qualification experience.
 
Skills and Competencies
• Good fitting skills
• Good communication skills
• Good interpersonal skills
• Proficient in the use of basic hand tools
• Basic planning skills
• Knowledge in use of different tools and equipment
• Computer literacy

Knowledge
• Ability to use Mechanical measuring equipment.
• Ability to read and interpret component drawing and tolerances.
• Ability to maintain a high-quality standard of work.
• Familiar with the OSHACT 85 of 1993
• Basic knowledge of quality systems

Attributes
• Attention to detail.
• Good customer relations.
• Innovative
• Able to work under pressure.
• Honest and reliable
• Adaptability to change.
• Able to work in a team
• Problem solving
• Ability to work independently and to communicate at all levels.
•Meet set deadlines.
 
Key Responsibilities
Production
 Safety
 Training
 

** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitmenteri@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are  encouraged to apply for positions.”
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
ETD OFFICER BOILER AND TURBINE
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To provide and deliver technical or non-technical training to ensure sufficiently competent employees to undergo on job coaching and training for authorisation in order to satisfy the business needs for current and future Human Resources sustainability.
Department : Human Resources
Business Unit : Duvha Power Station
Location : South Africa (Mpumalanga)
Reference Number : 2024081502LM/DVP
Closing Date : 10/11/2024
Minimum Requirements

• Qualification(s):
   Relevant National Diploma in Human Resources.
   HR or Learning related experience.

• Related Minimum Experience:
  1 Year.
 
Skills and Competencies
• Computer Literacy
• Analytical Skills
• Communication skills
• Coordinating skills
• Collating and interpreting data
• Making presentations

Behavioural
• Integrity
• Honesty
• Trustworthiness
• Professionalism Integrity
• Interpersonal relations skills
• Detailed oriented.
• Proactive
• Structured

 Leadership.
• Team Player
• Motivating Teams
• Coaching
• Mentoring
• Developing.
 
Key Responsibilities

 Knowledge
• Document records control processes and system
• Eskom business understanding
• Computer applications
• Eskom application (SAP /LSO)
• ISO 9001:2008 requirements and application
• Configuration management principles
• Computer literate
 
 
For assistant with this advert, please contact: recruitmentgx@eskom.co.za
 
“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.” 
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.” 
 
Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
RE-ADVERT OFFICER SECURITY INVESTIGATIONS (NATIONAL TRANSMISSION COMPANY SOUTH AFRICA) POLOKWANE
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To conduct investigations of irregularities, criminal activities, security incidents and breaches at business unit level in Eskom Holdings environment and to report on the results of such investigations.
Department : Security
Business Unit : Northern Grid
Location : South Africa (Limpopo)
Reference Number : 50519334SBR/01
Closing Date : 10/4/2024
 
Minimum Requirements

Qualification(s):
• National Diploma Security Risk Management/Policing/Forensic Investigations at NQF6 with 240 credits
•Professional Registration Body: Private Security Industry Regulatory Authority (PSIRA) Grade A

Experience:
•3 years’ Experience in a security environment and crime investigations
 
Skills and Competencies

Behavioural
Professionalism
Integrity
Trustworthiness
Honesty

Leadership
Live the Eskom vision and values
Grow people
Ignite passion
Promote teamwork
Encourage the right behaviour
Must be accountable for decisions made

Knowledge
Relevant legislation
Apply theoretical and business knowledge on the job
Think on the feet and make quality decisions
Eskom’s security policies, systems, directives, and standards
National key point training program
PSIRA skills program – first line security supervisor
PSIRA skills program – private investigator

Skills
Critical thinking:
Attention to detail
Analytical skills
Problem-solving abilities
Communication skills
Interviewing and interrogation skills
Knowledge of forensic techniques
Legal knowledge
Technology proficiency
Emotional intelligence
Physical fitness
Report writing
Communication and interpersonal
Work under pressure in the dynamic and fast paced environment of investigations
Analysing and interpreting data
Promote open and transparent communication
Work as a team or an individual where required
 
Key Responsibilities
Conduct baseline investigations into incidents, irregularities, criminal activities.
Apply sound investigative practices.
Provide post investigative support to the business.
Provide an advisory and consultative service.



FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL recruitmenttx@eskom.co.za

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“NTCSA is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  NTCSA reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

NTCSA is committed to providing a smoke-free environment for its employees and visitors at the workplace
 
PLEASE APPLY HERE
 
 
 
 
 `,` 
 
 
 
 
 
OFFICER PROJECT SERVICES SUPPORT (DISTRIBUTION) NEW GERMANY
Vacancy type: External/Internal
Task Grade : T12
Area of Specialization : To coordinate information requirements between project services and project management functions for all categories of assets under construction and non-capital projects.
Department : Asset Creation – Project Management
Business Unit : Central East Cluster
Location : South Africa (Kwa-Zulu Natal)
Reference Number : 49012212IN
Closing Date : 10/4/2024
 
Minimum Requirements

• Qualification(s):
National Diploma/ in Built Environment/Commerce/Human Sciences at NQF6        with 240 credits

• Related Minimum Experience:
3 years’ Project support services/project controls/project management
 
Skills and Competencies

• Behavioral
• Dealing with complexity
• Resilience and flexibility
• Integrity and values
• Professionalism

• Leadership
• Team player
• Business acumen
• Achievement orientated
• Customer orientation

• Knowledge
• Capital management
• Planning and scheduling
• Project management
• Contracts management
• Cost management and estimating
• Documentation management


• Skill
• Analytical
• Judgement
• Problem solving
• Planning and organising
 
Key Responsibilities
• Provide support to project accounting.
• Provide support to investment management.
• Provide support to project administration.
• Provide support to capital related resources.


** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL **
recruitmentdx@eskom.co.za

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE
 
 
 
 
 `,`ASSISTANT OFFICER DEBT MANAGEMENT (DISTRIBUTION) NEW GERMANY
Vacancy type: External/Internal
Task Grade : T10
Area of Specialization : To perform and effective and efficient debt management service in the cluster according to organizational policies and procedures.
Department : Revenue Management
Business Unit : Central East Cluster
Location : South Africa (Kwa-Zulu Natal)
Reference Number : AR Fin 09
Closing Date : 10/4/2024
 
Minimum Requirements

• Qualification(s):
National Diploma in Commerce / Finance / Accounting at NQF 6 with 240 credits

• Related Minimum Experience:
2 years’ experience in credit and debit management
Skills and Competencies

• Leadership
Team player
Motivating teams
Coaching
Mentoring
Developing

• Behavioral
Integrity
Honesty
Trustworthiness
Professionalism

• Knowledge
• Financial systems
• Financial statutory requirements
• Policies, processes and procedures
• Eskom tariffs
• International financial reporting standards (IRFS) and PFMA
• Tax legislation

• Skill
• Communication
• Financial administration
• Accounting processing
• Financial reporting
• Interpersonal
• Analytical and problem solving
• Customer service
• Computer literacy
 
Key Responsibilities
Ø Perform debt control and administration
Ø Prepare, review and analyse operational reports
Ø Provide customer service and stakeholder management
Ø Administer and control securities
Ø Administer debt collection process


** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL **
recruitmentdx@eskom.co.za

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE`,`SENIOR ADVISOR CONTRACTS MANAGEMENT (GENERATION) ARNOT POWER STATION
Vacancy type: External/Internal
Task Grade : G15
Area of Specialization : To be accountable to monitor and ensure acceptable cost, performance and quality of services provided by internal and external service providers by establishing and implementing service level agreements (SLAs), contracts, relevant tools and processes alig
Department : Procurement
Business Unit : Arnot Power Station
Location : South Africa (Mpumalanga)
Reference Number : Gx Arn NN 29/09/2024
Closing Date : 10/4/2024
 
Minimum Requirements

Qualification(s):
B Degree/B Tech/Advanced Diploma/ National Higher Diploma in Finance/Business Management/ Economics/Law at NQF7 with 360 credits

Related Minimum Experience:
5 Years’ General business, SLA negotiation, implementation and
management
 
Skills and Competencies

Behavioural:
• Integrity
• Honesty
• Trustworthiness
• Professionalism

Leadership:
• Team player
• Motivating teams
• Coaching
• Mentoring
• Developing others
• Strong sense of accountability and allocating accountabilities and responsibilities
• Strong ability to integrate requirements from various parts of the business as well as from the
customer’s side to reach the best solution

Knowledge:
• In-dept technical knowledge of Eskom business and service required to meet customers’ needs
• Meaningful integration and broad industry
• SLA processes, tools and development methodologies

Skill:
• Analytical
• Problem solving,
• Consulting abilities
• Computer literate
• Report-writing
• Good networking and interpersonal
• Systems, Applications and Products (SAP)
• Good working relationship with other divisions in Eskom.
 
Key Responsibilities
1. Provide guidance in defining and implementing service level agreements.
2. Negotiate and implement SLAs with service providers.
3. Manage risks, review and control performance associated with SLAs.
4. Ensure and report on continuous improvement.



** FOR ASSISTANCE WITH THIS ADVERT, PLEASE EMAIL (recuitmentgx@eskom.co.za) **

“If you have not been contacted within 28 days after the closing date of this advertisement, please accept that your application was unsuccessful.”
 
“Eskom is committed to equality, employment equity, and diversity. In accordance with the employment equity plan of Eskom and its employment equity goals and  targets, preference may be given, but is not limited, to candidates from under-represented designated groups.  Eskom reserves the right not to make an appointment to the posts as advertised.  Candidates with disabilities are encouraged to apply for positions.”

Eskom is committed to providing a smoke-free environment for its employees and visitors at the workplace.
 
PLEASE APPLY HERE`],postedDate:"30/9/2024",iframe:"",uuid:"pc3806454-2c13-4246-b559-462f3dc68209"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/fsca_orig.png",href:"https://www.govpage.co.za/financial-sector-conduct-authority-fsca-vacancies-blog/financial-sector-conduct-authority-fsca-vacancies1850634",title:"FINANCIAL SECTOR CONDUCT AUTHORITY (FSCA) VACANCIES",content:[` 
FINANCIAL SECTOR CONDUCT AUTHORITY (FSCA)
 `,` 
 
ANALYST - POLICY SUPPORT DEPARTMENT (Pretoria)
Reference Number FSCA 976
 
Description
Purpose of the Job: 
To provide support and undertake research and analysis on trends in financial consumer behaviour, financial products and services, and financial sector policy matters such as financial inclusion. To disseminate information to relevant departments within the FSCA and participate in developing the regulatory and supervisory frameworks to support the achievement of the FSCA’s mandate, including ensuring better customer outcomes in the financial sector. The person appointed to this position will report to the Senior Specialist: Policy Support. 


Key Performance Areas:
• Support the development and implementation of policy for the FSCA 
• Support the implementation of research for the FSCA 
• Support the conducting of research on trends in the financial sector industry, consumer behaviour, financial products and services, and other issues   related to the regulatory responsibilities of the FSCA;
• Disseminate research findings to support evidence and risk-based regulation and supervision; and
• Stay abreast of best practises and relevant domestic and international developments in the field of market conduct regulatory approaches to drive pro-  active research; 


Other Key Competencies:
The candidate must demonstrate the following skills and attributes: Problem analysis; good interpersonal skills and emotional intelligence; stakeholder relation skills; research skills; ability to execute research projects; ability to communicate clearly both verbally and in writing; ability to author documents; ability to prioritise projects and tasks; analytical skills and ability to think and operate strategically; ability to work under pressure; ability to work independently and in a team.


FSCA is committed towards increasing the representation of marginalised groups in line with its Employment Equity Plan. Persons with disabilities are encouraged to apply.

Please note that correspondence and communication will only be conducted with short listed candidates and that the FSCA reserves the right not to appoint if a suitable candidate is not identified.
 
Requirements
A degree in Economics, Development Economics, Social Sciences or Law with 3 – 5 years’ experience in a research or policy environment. Knowledge and understanding of research methodologies, the financial services industry and financial services products and services. 
 
Closing Date: 11 October 2024
 
Work Level Skilled
Job Type Permanent
Salary Market Related
EE Position Yes
Location Pretoria
 
PLEASE APPLY HERE
 
 
 
 
 
 `,`CONTRACT MANAGEMENT SPECIALIST - ICT GOVERNANCE, RISK AND COMPLIANCE DEPARTMENT (Pretoria)
Reference Number FSCA – 298
 
Description
Purpose of the Job:
The ICT Contract Management Specialist will manage the contract lifecycle within the ICT services and cybersecurity domains. This role will focus on contract drafting, negotiation, formulation, and Service Provider Contract management, ensuring compliance with legal requirements, corporate governance, and risk mitigation. Central record keeping and updating of all ICT contracts.  Align to the South African contract laws, Public Finance Management Act (PFMA) regulations, and supply chain management processes, for ICT and cybersecurity-related contracts. The person appointed to this position will report to the Departmental Head: ICT Governance, Risk and Compliance. 

Key Performance Areas:
• Draft, review, and amend ICT contracts where required, (e.g. licensing agreements, procurement contracts).
• Act as the key contact and subject matter expert for all contract-related and tender activities. This includes negotiating contract terms, conditions,   modifications, penalties and incentives, while working with key stakeholders to ensure that their requirements are met. 
• Manage the contract execution process, resolving problems, mitigating delays, mediating disputes and escalating issues.
• Assist with the development and Service Level Agreements (SLAs), and be responsible for the final versions of requests for information.
• Establish ICT contract management objectives, procedures, templates and workflow processes for Service Provider contracts and deliverable schedules and   manage a contract register containing a database of all executed contracts.
• Ensure that the Service Provider(s) are compliant with FSCA’s internal rules and regulatory obligations.
• Evaluate Service Provider performance based on contract terms (e.g., quality of services, adherence to deadlines).
• Manage contract performance review meetings with key Service Providers to ensure delivery against objectives and contract budgets, develop regular reports   on contract milestones and performance, and inform internal customers, vendors and management of activities and progress through regular written and   verbal communication.
• Provide recommendations for improvements to processes, procedures, workflow and organizational structures for procurement plans and ICT contract   management.
• Establish clear processes for the involvement of supply chain and legal resources in the contracting life cycle.
• Resolve and/or recommend any Service Provider performance issues in a timely manner.
• Oversee the full lifecycle of contracts, from initiation and negotiation through execution, monitoring, and renewal/termination.
• Ensure timely renewal or termination of contracts to avoid service interruptions or unfavourable conditions.
• Coordinate with relevant departments to ensure smooth execution of contract lifecycle processes.
• Identify and assess risks associated with ICT contracts, including Service Provider reliability and contract obligations.
• Develop and implement risk mitigation strategies aligned to the ICT Risk portfolio.
• Prepare contingency plans for potential contract or Service Provider-related risks.

• Conduct periodic audits of Service Provider performance and compliance.
• Maintain accurate and organised records of all ICT contract-related documentation.
• Prepare regular reports on contract status, performance, and compliance for stakeholders.
• Document changes or amendments to contracts in a timely manner.

Other Key Competencies:

The candidate must demonstrate the following skills and attributes: 
Good planning and organisation skills. Good communication skills including writing and verbal, interpersonal skills, good computer skills (MS Word, Excel, PowerPoint, MS Teams).  Ability to work individually and in a team, ability to work under pressure, extensive hours, multi-tasking and self-supervision. The candidates should have a sense of responsibility, loyalty and honesty.

FSCA is committed towards increasing the representation of marginalised groups in line with its Employment Equity Plan. Persons with disabilities are encouraged to apply.

Please note that correspondence and communication will only be conducted with short listed candidates and that the FSCA reserves the right not to appoint if a suitable candidate is not identified. 
 
Requirements
Bachelor’s degree in law with a specialisation in contract or commercial law, with a strong foundation in South African legal standards or a related discipline with at least 5 years’ working experience within an Information Technology (IT) environment. A 5 year’s minimum experience in IT contract management, particularly in cybersecurity and ICT services. Strong knowledge of the Public Finance Management Act (PFMA) and supply chain management practices in a government or corporate environment.  Proven ability to draft, negotiate, and manage IT and cybersecurity contracts with a focus on legal compliance and risk management. Familiarity with regulatory frameworks such as POPIA, ECTA, and IT governance standards (e.g., ISO 27001, ITIL.
 
Closing Date : 04 October 2024
 
Work Level Mid-Level
Job Type Permanent
Salary Market Related
EE Position Yes
Location Pretoria
 
PLEASE APPLY HERE`,`DESKTOP TECHNICIAN - ICT APPLICATIONS, INFRASTRUCTURES AND OPERATIONS DEPARTMENT (Pretoria)
Reference Number FSCA: 950
 
Description
Purpose of the Job:
To provide first point of contact for IT services and assist clients with hardware and software related technical issues and to provide on-site or remote IT technical assistance including troubleshooting of IT issues. The person appointed to this position will report to the Infrastructure Manager.


Key Performance Areas:
• Manage the FSCA ICT service desk function as an entry point or single point of contact (SPOC) for business users.
• Respond to calls on ICT Call Centre telephone system.
• Log, categorise, prioritise and route service tickets on the ICT incident management platform.
• Respond to incidents and service requests and ensure that they are successfully finalised and update stakeholders accordingly. 
• Identify, analyse, troubleshoot and resolve computer problem affecting user’s ability to perform business functions. 
• Install, configure, modify and delete user settings according to the FSCA operating standards on new and existing user computers.
• Setup and configure application clients on new and existing user computers.
• Monitor application processes and availability.
• Create new user and computer profiles and retire old users and computer profiles from the user computers.
• Escalate application related queries to other ICT departments whilst adhering to approved governance frameworks.
• Manage, maintain and support of the audio-visual equipment in the boardroom and all collaboration solutions.
• Provide management of the FSCA printer services in the FSCA environment.
• Install and configure security end point protection and mail encryption solution and ensure that they are always set up as per the FSCA’s policies and     principles.
• Liaise with external vendors to resolve incidences and problems whilst observing governance.
• Participating in team meetings, team discussions and workshops.
• Undertake research to investigate improvement of service support to the FSCA

Other Key Competencies:
The candidate must demonstrate the following skills and attributes: Proven work experience as a Desktop Support Engineer, Technical Support Engineer, or similar role. Hands-on experience with Windows or Linux or Mac OS environments. Working knowledge of office automation products and computer peripherals, like printers and scanners. Knowledge of network security practices and anti-virus programs. Ability to perform remote troubleshooting and provide clear instructions. Excellent problem-solving and multitasking skills. Customer-oriented attitude.

FSCA is committed towards increasing the representation of marginalised groups in line with its Employment Equity Plan. Persons with disabilities are encouraged to apply.

Please note that correspondence and communication will only be conducted with short listed candidates and that the FSCA reserves the right not to appoint if a suitable candidate is not identified. 


Requirements
A National Diploma in IT or Computer Systems or equivalent. A+ or N+ITIL Foundation certification. Minimum 1-2 years of Desktop Support Experience. 
 
Closing Date: 4 October 2024
 
Work Level Junior
Job Type Permanent
Salary Market Related
EE Position Yes
Location Pretoria
 
PLEASE APPLY HERE`],postedDate:"30/9/2024",iframe:"",uuid:"p30fb8c72-eb01-4fa8-8705-8bc1b8f68056"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/idc-logo_orig.jpg",href:"https://www.govpage.co.za/industrial-development-corporation-idc-vacancies-blog/industrial-development-corporation-idc-vacancies9667406",title:"INDUSTRIAL DEVELOPMENT CORPORATION (IDC) VACANCIES",content:[` 
INDUSTRIAL DEVELOPMENT CORPORATION (IDC)
 `,` 
 
PROJECT FINANCE SPECIALIST
Job number IDC00377
Job Grade P-Band
Closing date 10-Oct-2024
 
Synopsis
Infrastructure South Africa (ISA) has the mandate to act as an Aggregator: Single Window of Entry & Custodian of the Country’s Infrastructure Project Pipeline. These compromises of national, provincial, municipal, public and or private sector role players.
 
Job Description
JOB PURPOSE:
Project Finance Specialist will be responsible to identify, develop, and advocate for the implementation of innovative project finance instruments and structuring, inclusive of public-private partnerships (PPP) frameworks that leverage resources from the private sector to expand the delivery of infrastructure within South Africa through coordinating and supporting public sector entities.
The Specialist will be someone with solid project finance experience on a number of projects and in a number of sectors from a private sector financing perspective as well as experience in understanding the project risks to both public and private sector participants.
 
Qualification and Experience
QUALIFICATION: 
• Degree or Honours degree (NQF Level 8) in Finance, Accounting, Actuarial Science, Economics (Related to Project Finance).
• Registered professionally with the relevant bodies, recognised in South Africa will be an added advantage.
• A PPP Recognised Certification programme will be an added advantage.
 
EXPERIENCE AND KNOWLEDGE:
• 5 – 8 years industry/sector(s) specific experience in project finance or structured finance (Above 8 years’ experience will be an added advantage).
• Experience in monitoring and evaluating infrastructure projects.
•Experience in working on PPP/ESG/Green Bonds projects will be an added advantage.
• Infrastructure project development and/or project appraisal.
• Monitoring major infrastructure projects in implementation.
• Knowledge of applicable legislation, which includes (but not limited to) the Infrastructure Development Act, the Public Finance Management Act, the Municipal Finance Management Act, GIAMA, PPP Framework, Standards for Infrastructure Procurement and Delivery.
• Solid understanding of both South Africa and further international experience and understanding with respect to Project Finance, project preparation, structuring, and transaction management, legal, policy, and institutional frameworks for innovative financing (inclusive of PPPs) and other forms of private participation in infrastructure, broader public investment and fiscal risk management.
 
Roles and Responsibilities
MAIN RESPONSIBILITIES:
• Keep abreast with the developments in the Project Finance and PPP framework and the regulatory environment, and position ISAs value-add in this context.
• Research into relevant innovative project financing instruments.
• Draw on South African project experience and best international practice in providing guidance to government departments, provinces and municipalities seeking to develop and implement Project Finance instruments on their projects.
• Advocating for the expansion of Project Finance options (inclusive of Blended finance options, PPP structuring, Green Bonds, ESG, and Impact Finance, etc.) in South Africa through actively matching projects to the most suitable Finance options in the infrastructure space.
• Provide assistance to line departments in the preparation of initial project investment proposals for potential Innovative Financing & PPP projects, while cognisant of requirements to demonstrate affordability, value for money and optimised risk allocation.
• Advise on the appropriate financial structure for projects based on a knowledge of the market’s ability to provide finance and bear risk, on a per project/ programme basis.
• Advise government departments and other government entities on feasibility studies required in order to demonstrate project/programme viability (financial).
• Evaluate the feasibility of investment opportunities/project transactions with a view to ensuring that they are sound prospects for financing.
• Ensure that government’s explicit and implicit fiscal obligations and risks are determined in the feasibility study stage and that these are communicated from a risk and debt management unit and managed appropriately. This includes guarantees and other security instruments.
• Analyse all financial models, both in the feasibility studies and in proposals submitted as part of the competitive bidding process to ensure that the projects are affordable, financially sound and sustainable with appropriate risk allocation.
• Support the procurement and briefing of external financial advisors or subject matter experts, as and when necessary, for identified projects or research.
• Collaborate with the ISA Technical Services Office to ensure that the financing structure of projects are sound and the involvement of state financial institutions is appropriate.
• Provide assistance in the appointment of transaction advisors to assist in the project preparation feasibility study, ensuring that the study is of adequate quality for review.
• Where relevant, provide assistance to the line departments with bidding processes as well as the negotiation and award of the PPP contracts and contract management.
• Compile progress reports on innovative Project Finance (inclusive of PPP) projects receiving support from ISA and identify unblocking challenges experienced.
• Conducting financial and economic analysis which needs to include the public sector’s fiscal capacity assessment, PPP risk analysis with PPP risk allocation matrix.
• Providing recommendations for the final innovative financing implementation model based on evaluation of the results analysed.
• Record and continuously monitor industry/client performance as it relates to the project.
• Performing related tasks as required by the Programme Manager.
 
Job Requirements
BEHAVIOURAL COMPETENCY:
Strong interpersonal ability.
Attention to technical detail.
Task orientated.
Reliability.
Positive work ethic.
Problem solving orientation.
Good stakeholder engagement & networking ability.
Technical interpretation ability.
 
TECHNICAL COMPETENCY:
Problem identification & resolution skills.
Process analysis and improvement skills.
Project Finance and modelling software skills.
Risk analysis and mitigation skills.
Project planning skills.
Microsoft office suite skills.
Technical report writing skills.
Technical information analysis skills.
 
APPLY NOW
 
 
 
 
 
 `,` 
 
 
 
 
SENIOR ENVIRONMENTAL, HEALTH AND SAFETY SPECIALIST
Job number IDC00379
Job Grade M Band
Closing date 10-Oct-2024
 
Job Description
Analyze, monitor and advise IDC on appropriate environmental and social risk appetite, climate change, and the Just Energy Transition; partner with SBUs and IDC investee companies to ensure good environmental and social performance; advance innovation and increasing maturity in environmental and social monitoring and reporting; and partner with Government and other stakeholders in dialogue on critical environmental and social aspects relevant for the South African context.
 
Qualification and Experience
QUALIFICATIONS:
Minimum qualification: relevant commercial or technical Bachelor's Degree or equivalent qualification.
Masters degree in a relevant discipline, which may include environmental sciences, general or industrial chemistry or chemical engineering, civil engineering with specialization in an environmental area such as water management, geology, geography, biodiversity, ecology and others will be advantageous.
 
EXPERIENCE:
8-10 years relevant experience in the Environmental, Health and Safety field, or related field.
Understanding of the legislative requirement relating to Occupational Health and Safety and Environment. 
Knowledge and exposure to a variety of industry sectors. 
Experience in engaging, managing and negotiating with relevant specialist bodies, governmental bodies, environmental groupings, etc.
Experience in interacting and presenting to Senior and Executive leaders and various committees.
A good understanding of the IDC’s operations.
Experience working in a high-level collaborative environment
Ability to manage multiple competing priorities while building effective relationships
Extremely organized and persistent, with drive and determination to achieve goals.
Extensive experience in reporting frameworks such as the International Integrated Report Framework, the various Global Reporting Initiative Reporting Frameworks (GRI), the various Carbon Disclosure Project (CDP) frameworks and others.
• Extensive experience in environmental and social risk assessment and due diligence
 Extensive experience in environmental licensing requirements and processes
Extensive experience in measuring and reporting on SDG-impact
Experience in analyzing climate resilience at sector and project level
Experience in analyzing climate-related financial risks and opportunities
Good understanding in formulation and implementation of EHS Strategies and related concept
Knowledge of international and local Sustainable Finance Taxonomies
 
Roles and Responsibilities
MAIN DUTIES AND RESPONSIBILITIES: 
Internal / Operational Processes
Provide guidance on Environmental and Social issues to the Business Units and the organisation
Ensure that the IDC leads through responsible environmental friendly and Sustainable investments, which reduce climate change impacts of industries.
Develop and maintain a good working knowledge of relevant legislation in South Africa and other countries where IDC operates.
Incorporate key international and national frameworks into strategic advisory capacity for the Unit and the organization, including among others the Task Force for Climate-related Financial Disclosures (TCFD) and the Sustainable Development Goals (SDGs).  
Contribute towards the organization’s strategies on Environmental and Social issues which feed into sustainable development.
Ensure that IDC’s Environmental and Social policies, standards and procedures remain aligned with current legislation and best practices locally and internationally.
Review and update the IDC’s environmental policy to ensure alignment to changing circumstances and best practice on a regular basis.
Monitor compliance with the IDC \`s environmental policy by subsidiaries and existing clients, and advise on mitigation measures where necessary.
Monitor environmental impact assessments conducted by the IDC, its subsidiaries and its clients for compliance to environmental legislation, efficiency, and compliance with procurement requirements.
Provide assistance in the development and implementation of environmental management plans (EMPs) and environmental management systems (EMSs) at subsidiaries of the IDC.
Asses and advise on Environmental, Health and Safety aspects of existing business partners and new projects under consideration for financing by the IDC, including defining the scope of work for environmental consultants and Lender Technical Advisors.
Maintain contact with the regulatory authorities in areas of IDC operation aimed at elevating IDCs contribution to national and provincial dialogue on key aspects relevant to IDC’s investment portfolios.
Coordinate and contribute toward relevant capacity building interventions on environmental and social aspects within IDC and with relevant stakeholders.
Customer Focus & Stakeholder Management
To effectively interact with different SBUs and departments in order to fulfil the process requirements
Manage and enhance the levels of service and communication to ensure the provision of client service excellence
 
Job Requirements
LEADERSHIP COMPETENCIES:
Resilience
Decisiveness in Execution
People Engagement
Communication and Engagement
Diverse Stakeholder Management
Teamwork
Innovation
Change leadership
Strategic Thinking
Business Mind Set
 
TECHNICAL/FUNCTIONAL COMPETENCIES:
Risk identification and mitigation
Environmental Awareness & Insights
Process Improvement & Efficiency
Analytical and problem solving 
Customer insights and focus
Planning and organising
Business acumen
Results and solution orientated
 
BEHAVIOUR COMPETENCIES:
Presentation and communication skills
Relationship building and networking
Negotiation skills
Influencing skills
Critical thinking
 
APPLY NOW
 
 
 
 
 
 `,` 
 
 
 
 
SENIOR FINANCIAL ACCOUNTANT
Job number IDC00372
Job Grade P-Band
Closing date 05-Oct-2024
 
Job Description
To assist with Financial Reporting activities and be responsible for managing financial transactions, preparing financial reports, and ensuring compliance with regulatory requirements.


Qualification and Experience
Qualification
Bachelor's/post-graduate degree in Financial/Management accounting
CA(SA) would be advantageous
Experience
5-8 years’ experience in financial services, the public sector, DFI space: PFMA Experience.
Experience in IFRS 10, IAS 28, IFRS 9 and accounting for Expected Credit Losses
Experience dealing with internal and external auditors.
Relationship building skills – stakeholder management skills.
Experience in preparing financial statements on Caseware
Knowledge and experience in SAP
 
Roles and Responsibilities
KEY RESPONSIBILITIES
Assist in preparation of separate Annual Financial Statements and Consolidated Group Annual Financial Statements.
Ensure that all internal subsidiaries financial statements are timeously prepared and comply with IFRS.
Liaising with both internal and external auditors.
Quarterly reports to EXCO and the Board (movement commentary, variance analysis, graphs).
Quarterly reports submitted to National Treasury and Reserve Bank.
Daily and Monthly duties:
Acting as transactions poster into the SAP system.
Acting as checker, releaser for IDC payments (AP process).
Updating monthly listed share portfolio share prices and computing listed portfolio fair values in (ZIMP) SAP.
Updating the monthly fair value of shares workbook (listed and unlisted shares and non-SPPI preference shares) with the objective of parking the journals in SAP.
Performing share reconciliations between the share movement schedule, ZIMP and the general ledger.
Custodian of share documents and tracking of share movements.
Accounting for share and loans write-offs and disposals and ensuring the ECL releases relating to SPPI instruments are recorded in appropriate general ledger accounts (capital profits and losses workbook).
Perform loans reconciliations between the loans trial balance, ZPR, and loan-book movement.
Perform fixed asset register reconciliation review for IDC and internal subsidiaries.
Perform VAT reviews for IDC and internal subsidiaries.
Perform ad-hoc tasks for Manager: Financial Management and other departments.
Attend various meetings on behalf of the manager and provide feedback.
Quarterly duties:
Assist in the quarterly mini-group management reporting. Provide inputs such as analytical review commentary on the statement of profit and loss and statement of financial position; assist in performing analysis of borrowings, loan book, shares, dividends, interest income, borrowings, impairments and write-offs.
Perform National Treasury financial reporting (PE48, N01, N02, MTEF), Reserve Bank reporting (F02 and F04).
Investment Monitoring Committee minute reconciliation with SAP.
ECL uploading into SAP and journal parking.
Interim and Year end duties:
Perform IFRS 10 assessments for the investment type classifications of the share portfolio (to determine if our business partners are subsidiaries, associates, or simple investments).
Updating the group structure (subsidiary/associate/investment).
Drafting and sending out letters to all associates and subsidiaries, as well as following up on outstanding letters at interim and year end consolidation process.
Assist with the preparation of IFRS 9 notes, specifically Loans and advances to ensure that it is in compliance with IFRS 7: Disclosure of financial instruments.
Assist with the preparation of IFRS 13: Fair value measurement notes.
Assist with the review of IFRS 16: Leases.
Assist with the preparation of IAS 28 investments in associates and joint ventures.
Accounting for accruals, including dividends.
Be a 1st – level reviewer in other notes to the interim and annual financial statement.
Assist in financial results presentations and analysis (abridged financial statements, CFO reports, commentary, analysis, going concern assessments, share portfolio reporting etc.)
 
Job Requirements
TECHNICAL COMPETENCIES
Financial Modelling and data analysis
Detail orientation and ability to analyse numerical data and to interpret financial statements.
Business acumen
Performance Focus
Analytical Skills
 
BEHAVIOURAL COMPETENCIES
Persuading and Influencing
Delivering results and meeting customer expectations
Supporting and co-operating
Relating and networking
Planning and organising
Writing and reporting
Good time management skills and the ability to perform under pressure.
Ability to work independently and in teams
Keen for new challenges and open to different ways of performing tasks
Analytical and attention to detail
 
APPLY NOW
 
 
 
 
 `,`SENIOR LEGAL ADVISOR
Job number IDC00363
Job Grade M Band
Closing date 05-Oct-2024
 
Job Description
To provide sound, clear and accurate legal advice to mitigate the legal risks that the IDC is exposed to in its daily activities.
Qualification and Experience
Qualification
Law degree and Admission as an Attorney essential
Master’s degree such as LLM desirable
Knowledge & Skills 
A minimum of five years’ post-article experience in a banking and finance/corporate finance/project finance environment.
8-10 years working experience in the banking and finance/SoE/DFI (restructuring, turnaround & business rescue) space is essential 
Experience in the drafting, review, negotiation and re-negotiation of cross-border, project finance, corporate, commercial, structured and re-structured finance transactions
 
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
Judgment: Makes timely decisions while including necessary people in the decision-making process. Exhibits sound and rational judgment.
Communication: Possesses excellent written/oral communication skills as well as excellent persuasive and presentation skills. Able to deal effectively with a broad range of personalities and cultures.
Change agent and strategic thinker: An innovative thinker who is comfortable designing for the future, while managing day-to-day matters.
 
APPLY NOW`,`EXECUTIVE SECRETARY (3 MONTHS FTC)
Job number IDC00382
Job Grade A Band
Closing date 04-Oct-2024
 
Job Description
The overall purpose of this role is to provide:
• A professional, confidential, efficient, effective and proactive office support function to manage the operational and administrative needs of the office of the Divisional Executive and the Division.
• To enable a timeous and responsive service to key internal and external stakeholders on business matters requiring focus and attention.
 
Qualification and Experience
Qualification: 
Matric
Further Relevant Qualification (Eg Business Administration) 
 
Experience: 
At least have a minimum 5 years’ experience as an Office Manager/Executive Secretary in a fast paced and complex environment.
 
Job Related Knowledge (knowledge of systems, processes, regulations or law)
IDC policies, processes, systems procedures and business understanding
Knowledge of data and administrative management practices and procedures, business and management principles
Relevant HR Legislation (e.g. LRA, BCEA etc.)
SAPHR
Finance for Human Capital
 
Roles and Responsibilities
 
Secretarial and Administrative Divisional Executive Support
 
1. Office Co-Ordination and Support
• Ensure that key operational matters and requests are handled expeditiously
• Assist to draft key memos/documents/letters of response both internally and externally
• Ensure relevant documentation is readily available as may be required to support the Divisional Executive for engagements
• Management and control of highly confidential information requiring extreme discretion and privacy of such material and/or situation
 
2. Customer Focus and Stakeholder Management
• Engage both internal and external stakeholders professionally, sensitively and tactfully to understand and respond to the request/business need and/or obtain additional information
• Ensure accurate record keeping and documentation trail on matters attended and responded to
• Ensure regular updates and feedback are provided to stakeholders as may be required
• Provide an efficient customer-centric service to the IDC Board, Board Human Capital and Nominations Committee (BHCNC) Chair and external stakeholders
• Ensure a professional and customer centric ‘meet and greet’ function that welcomes visitors to the IDC and leaves a positive impression and positive moment of truth on each and every individual
Develop, maintain and build effective networks and relationships with other Executives, colleagues and clients that drive trust and facilitate engagement and mutual commitment to support deliverables and outcomes as and when required
 
3. Learning & Growth
• Proactively drive own development and understanding of the Division and the Corporation
• Participate in knowledge sharing and other forums to enhance knowledge, understanding and operations
• Regularly participate in team meetings, including highlighting issues and owning actions through to resolution.
 
4. Financial Prudence and Due Diligence
To ensure correctness, accuracy and timeous processing of all financial related transactions (invoices, travel claims, stationary requisitions etc.)
 
5.  Administrative & Ad-Hoc outcomes
• Proactively assist to manage the information flow/correspondence (email, letters, memos etc.) of the office of the Executive and based on the urgency and importance of matters to alert the Divisional Executive accordingly
• To professionally and timeously respond to and manage correspondence that is routine and non-critical so as to alleviate the volume of communication proactively
• Assist in the preparation of reports, presentation slides and other documentation as may be required
• Managing the scheduling of Divisional Executives commitments and their availability in a manner that is efficient, balanced and allows for time to attend to matters outside of meetings and committee commitments
• Drafting, vetting, approval and circulation of minutes as required, ensuring accuracy and timorousness distribution
• Manage and co-ordinate events/functions/engagements in a manner that such run smoothly and seamlessly and build the brand and reputation of the Division
• Prepare/co-ordinate/edit internal newsletters, reports, documents and executive summaries and ensure conclusion and distribution of such
• Maintain a confidential, accurate, easily accessible and logical electronic and/or hard copy filing system that facilitates ease of access
• Co-ordinate travel itineraries and arrangements that ensure the Divisional Executives travel plans are practical, efficient and hassle free
• Ensure all documentation that emanates from the Divisional Executives Office are professional, accurate, consistent and presentable to be achieved
 
6.  Execution and Follow Through
• To optimize service delivery in a manner that address clients’ needs and is in line with the Customer Service Charter of the Corporation
• In all interaction and responses ensure the values of the Corporation
• To share ideas for improvement in the management of the operational and administrative demands of the Divisional Executive

APPLY NOW`],postedDate:"30/9/2024",iframe:"",uuid:"pc1bc30a1-85c2-4610-b4c5-df687b2bce3d"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/national-gambling-board-ngb.jpg?1727713257",href:"https://www.govpage.co.za/national-gambling-board-of-south-africa-ngb-vacancies-blog/national-gambling-board-of-south-africa-ngb-vacancies5033794",title:"NATIONAL GAMBLING BOARD OF SOUTH AFRICA (NGB) VACANCIES",content:[` 
NATIONAL GAMBLING BOARD OF SOUTH AFRICA (NGB)
 `,`MANAGER: CORPORATE GOVERNANCE 
Reference Number: NGB/004-2024 
Nature of Employment – Twelve (12) Months Fixed Term Contract position 
Remuneration Scale: R931,613 – R1,126,237 per annum 
(all-inclusive package) 
Preference will be given to Coloured Male and Female, White Male and Female, Indian Male and people with disabilities 
 
BRIEF SUMMARY OF THE ACT 
The National Gambling Board (NGB) is established in terms of the National Gambling Act, (NGA) 2004 (Act 7 of 2004). It is a schedule 3A Public Entity in terms of the Public Finance Management Act, 1999 (Act 1 of 1999). The NGB makes provision for the coordination of concurrent national and provincial legislative competence over matters relating to the continued regulation of gambling activities and also makes provision for the establishment of uniform norms and standards applicable throughout the Republic in certain gambling activities. 
 
STRATEGIC OUTCOMES 
The strategic outcomes stated below straddle and apply across all positions within the NGB. Successful incumbents will be required to execute their functions in consideration of the following strategic outcomes: 
Account for and identify all legal gambling machines, devices and owners, licensed juristic and natural persons and excluded persons; 
Economic transformation and increased participation of Historically Disadvantaged Individuals in the mainstream gambling industry; 
Effectively monitored PLA compliance with gambling legislation; 
Facilitated S16 confiscation of proceeds from illegal gambling activities; 
Effectively monitored socio-economic patterns of gambling activity within the Republic; 
Uniformity of legislation in the gambling industry; and 
Broad-based public education 
 
PURPOSE
To provide support, develop and implement the corporate governance and risk management framework thereby enabling prudent management of the National Gambling Board’s performance in compliance with relevant legislation to guarantee delivery on the shareholders compact in line with National Priorities. 
KEY PERFORMANCE AREAS 
Management of Corporate Governance 
Advises on strategic corporate risks and proposes mitigating strategies during development of the Annual Performance Plan (APP). 
Develops the Corporate Governance Framework within the National Gambling Board to ensure compliance with corporate governance - King VI and other legislative provisions. 
Assists departments to overcome challenges preventing compliance with the Corporate Governance Framework. 
Monitors complaints from stakeholders and ensures that all complaints are investigated and proper feedback is provided to complainants. 
Monitors and reports on the timeous implementation of audit recommendations. 
Assesses the National Gambling Board’s compliance with the Public Finance Management Act (PFMA). 
Participates in the Audit, Risk and Management Committees to provide expert contributions. 
Assists with ad-hoc coordination of all aspects of corporate governance administration.
 
Organisational Performance Planning and Reporting 
Monitors performance within the National Gambling Board by preparing monthly and quarterly performance reports to ensure alignment with the APP and Shareholder’s Compact. 
Consolidate inputs on monthly and quarterly organisational performance reports. 
Coordinates the preparation of the Annual Report and Strategic Plan, Annual Performance Plan, Organisational Plan and submits to Chief Strategic Adviser (CSA) for review. 
Consolidate inputs on annual report. 
Manages compliance audits and reports findings to CSA. 
Update reporting templates (MANCO, quarterly reports, and business plan) periodically as needed. 
Develop and monitor the implementation of Operational Compliance Calendar. 
 
Risk Management 
Implements measures to identify, assess, mitigate and report on operational and strategic risks within the National Gambling Board throughout the year. 
Assist with the identification, assessment, monitoring of strategic and operational risks for the NGB during the risk management process. 
Monitor risk management and provide reports on a monthly and quarterly basis. 
Provide administrative support during workshops and preparing draft registers for engagement with clients. 
Provide Secretariat support to the Risk Management Committee (RMC). 
 
Fraud Prevention 
Develops the Fraud Prevention Plan (FPP) and implementation matrix that is communicated to all stakeholders. 
Develops the Fraud Prevention Plan and implementation matrix that is communicated to all stakeholders. 
Conduct fraud awareness sessions through various platforms, internal and external. 
Providing logistical and administrative support to the CSA to ensure that both internal and external activities are undertaken. 
Prevent fraud and misappropriation in the organisation. 
Ensure that agreed quality controls in place are fully understood and implemented. 
Ensure and improve the efficiency and quality services in order to reduce exposure to fraud, abuse and wastage of resources. 
Monitor the implementation of the Fraud Prevention Plan through monthly and quarterly reporting. 
Update FPP and facilitate the annual review of the FPP. 
Coordinating cases and enquiries reported through ethics help desk and coordinate the ethics workshops/training/events. 
Coordinate and facilitate organisational processes relating to ethics awareness and management. 
 
Financial Disclosures 
Coordinating the submission of financial disclosures annually. 
Scanning every application and sending confirmation mails to all officials. 
Analysing the data disclosed in the disclosure forms and drafting a report of the results. 
Develop and manage the financial disclosure database. 
 
Remunerative work 
Co-ordination of the remunerative work applications. 
Provide guidance and advice on all issues pertaining to the remunerative work process. 
Update the remunerative work database on a continuous basis and assist with drafting reports. 
 
Financial Management 
Provide inputs into strategic annual report and ensure that expenditure is in line with approved budget. 
 
Records Management 
Ensure that records management is performed in accordance with NGB approved file plan and electronic document management system. 
 
MINIMUM JOB REQUIREMENTS 
Qualifications
National Diploma or Bachelor’s Degree in Internal Audit / Commerce (General)/ Business Management/ Administration or in Law. 
 
Experience
Eight (8) years’ relevant experience in corporate governance. 
Five (5) years’ relevant experience in a management position. 
 
Competence and skills 
The appointee must have the following skills: 
Process Management 
Relationship Management 
Monitoring and Evaluation 
Corporate communication 
Risk Management 
 
The appointee must have the following knowledge in terms of legislations: 
Knowledge of National Gambling Act. 
Public Finance Management Act. 
Knowledge of National Treasury guidelines & regulations. 
 
 
The successful applicants’ remuneration package will be in terms of the NGB Remuneration Policy. The National Gambling Board subscribes to the principles of Employment Equity. 
 
The appointee will be required to sign a performance agreement within one (1) month of joining the organisation and this position is subject to a twelve (12) months’ probation period. 
 
To apply for this position, interested applicants are required to complete the NGB employment application form to be obtained from NGB’s website www.ngb.org.za, attach and complete the following mandatory documents i.e. comprehensive CV, copies of qualifications and identity document. Failure to submit all requested documents will disqualify your application. 
 
The completed application with all supporting documents must be submitted by e-mail to hr@basadzi.co.za, hand delivered to the NGB offices at 1085 Francis Baard Street, Hatfield, 0028 or posted to the Human Capital Optimisation, Private Bag x 27, Hatfield 0028. 
 
CLOSING DATE for all applications: 07 OCTOBER 2024 
 
Background verifications, criminal record checks, citizenship check and competency assessment will form part of the selection process. It is the responsibility of candidates or applicants with foreign qualifications to have them verified by the South African Qualifications Authority (SAQA). If you have not been contacted within three months after the closing date, please regard your application as unsuccessful. 
 
IMPORTANT NOTICE 
By applying for this position, you hereby acknowledge that you have read and accept the following Protection of Personal Information Act (POPIA) disclaimer: 
I hereby consent for NGB to process my personal information as part of the recruitment process. NGB shall take all reasonable measures to protect the personal information of applicants and for the purpose of this disclaimer “personal information” shall be defined as detailed in the Protection of Personal Information Act, Act 4 of 2013 (POPIA”).

The NGB reserves the right not to fill the position.`,`PERSONAL ASSISTANT TO THE CHIEF STRATEGIC ADVISER 
Reference Number: NGB/005-2024 
Nature of Employment – Permanent position 
Remuneration Scale: R503,364 – R654,617 per annum (all-inclusive package) 

Preference will be given to Coloured Male and Female, White Male and Female, Indian Male and people with disabilities 
 
BRIEF SUMMARY OF THE ACT 
The National Gambling Board (NGB) is established in terms of the National Gambling Act, (NGA) 2004 (Act 7 of 2004). It is a schedule 3A Public Entity in terms of the Public Finance Management Act, 1999 (Act 1 of 1999). The NGB makes provision for the coordination of concurrent national and provincial legislative competence over matters relating to the continued regulation of gambling activities and also makes provision for the establishment of uniform norms and standards applicable throughout the Republic in certain gambling activities. 
 
STRATEGIC OUTCOMES 
The strategic outcomes stated below straddle and apply across all positions within the NGB. Successful incumbents will be required to execute their functions in consideration of the following strategic outcomes: 
Account for and identify all legal gambling machines, devices and owners, licensed juristic and natural persons and excluded persons; 
Economic transformation and increased participation of Historically Disadvantaged Individuals in the mainstream gambling industry; 
Effectively monitored PLA compliance with gambling legislation; 
Facilitated S16 confiscation of proceeds from illegal gambling activities; 
Effectively monitored socio-economic patterns of gambling activity within the Republic; 
Uniformity of legislation in the gambling industry; and 
Broad-based public education 
 
PURPOSE
To provide secretarial support to the Chief Strategic Adviser (CSA) and an administrative support function on all matters within the office. 
 
KEY PERFORMANCE AREAS 
Diary Management and Meeting Coordination 
Manages the diary with guidance from the CSA by diarising and scheduling meetings promptly and correctly. 
Records meetings on electronic calendar to allow for viewing by the CSA. 
Secures boardrooms and arranges refreshments for the CSA’s visitors. 
Meets and greets CSA’s visitors on arrival at the National Gambling Board to escort them through to the Office / Boardroom. 
Follows up on action items from meetings to ensure completion within stipulated deadlines. 
Prepares itinerary that includes details regarding dates, travelling times, maps / directions, addresses, phone numbers, e-mail addresses, parking and contact persons. 
Checks travel plans a few days prior to departure to ensure all is in order. 
Submits approved travelling claims for payment upon the CSA’s return for purposes of re-imbursement. 
 
Secretarial support 
Types business letters, memorandums and general correspondence for internal and external purposes. 
Assists with preparing of meeting packs. 
Assists with collating information for preparation of meetings. 
Coordinates responses to routine correspondence for the Office of CSA. 
Transcribes minutes of meetings distributes to relevant role players. 
 
Office support 
Screens telephone calls to prevent unnecessary interruptions. 
Correctly records and relay’s messages promptly to the CSA. 
Addresses queries from stakeholders and / or channels queries to correct role players. 
Acts as the Point of contact for within the CSA’s office to ensure smooth operations. 
Maintains an effective filing system for ease of tracking and retrieval of documents. 
Develops a database of contacts and updates regularly to ensure current information. 
Develops good working relations with relevant personnel for ease of execution of duties.
Provides ad-hoc administrative assistance as and when required. 
 
Administration of performance information 
Ensures that all direct reports of the CSA have scorecards in place. 
Coordinates the performance management process between the CSA and direct reports. 
Ensures performance agreement of direct reports are signed, submitted on time and filed for easy reference. 
Ensures quarterly reviews take place and assessment sheets are signed and filed. 
Follows up on action items in relation to performance improvement for direct reports. 
Tracks performance progress of direct reports in relation to the overall goals on the performance agreement of the CSA. 
 
Records Management 
Ensure that records management is performed in accordance with NGB approved file plan and electronic document management system. 
 
MINIMUM JOB REQUIREMENTS 
Qualifications
Three years National Diploma or Degree in Administration or Management. 
 
Experience
Five (5) years relevant experience as a Personal Assistant of which three (3) years relevant secretarial experience to an Executive Manager. 
 
Competence and skills 
The appointee must have the following skills: 
Typing
Business English 
Communication
Keeping Minutes 
Coordination
The appointee must have the following knowledge in terms of legislations: 
Public Finance Management Act. 
Knowledge of National Treasury guidelines & regulations. 
 
 
The successful applicants’ remuneration package will be in terms of the NGB Remuneration Policy. The National Gambling Board subscribes to the principles of Employment Equity. 
 
The appointee will be required to sign a performance agreement within one (1) month of joining the organisation and this position is subject to a twelve (12) months’ probation period. 
 
To apply for this position, interested applicants are required to complete the NGB employment application form to be obtained from NGB’s website www.ngb.org.za, attach and complete the following mandatory documents i.e. comprehensive CV, copies of qualifications and identity document. Failure to submit all requested documents will disqualify your application. 
 
The completed application with all supporting documents must be submitted by e-mail to hr@basadzi.co.za, hand delivered to the NGB offices at 1085 Francis Baard Street, Hatfield, 0028 or posted to the Human Capital Optimisation, Private Bag x 27, Hatfield 0028. 
 
CLOSING DATE for all applications: 14 OCTOBER 2024 
 
Background verifications, criminal record checks, citizenship check and competency assessment will form part of the selection process. It is the responsibility of candidates or applicants with foreign qualifications to have them verified by the South African Qualifications Authority (SAQA). If you have not been contacted within three months after the closing date, please regard your application as unsuccessful. 
 
IMPORTANT NOTICE 
By applying for this position, you hereby acknowledge that you have read and accept the following Protection of Personal Information Act (POPIA) disclaimer:
I hereby consent for NGB to process my personal information as part of the recruitment process. NGB shall take all reasonable measures to protect the personal information of applicants and for the purpose of this disclaimer “personal information” shall be defined as detailed in the Protection of Personal Information Act, Act 4 of 2013 (POPIA”). 
 
The NGB reserves the right not to fill the position.`],postedDate:"30/9/2024",iframe:"",uuid:"pce75e079-d49c-4ffb-942b-7858385f11f2"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/national-home-builders-registration-council-nhbrc.png?1727739185",href:"https://www.govpage.co.za/national-home-builders-registration-council-nhbrc-vacancies-blog/national-home-builders-registration-council-nhbrc-vacancies9452390",title:"NATIONAL HOME BUILDERS REGISTRATION COUNCIL (NHBRC) VACANCIES",content:[` 
NATIONAL HOME BUILDERS REGISTRATION COUNCIL (NHBRC)
 `,` 
 
 
TEMPORARY SENIOR BUSINESS ANALYST
CONTRACT TYPE: TEMPORARY (12 MONTHS)
JOB GRADE: COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO: CHIEF INFORMATION OFFICER
DEPARTMENT/SECTION: BUSINESS MANAGEMENT SOLUTIONS
LOCATION: HEAD OFFICE, SUNNINGHILL JHB                                        
 
KEY DELIVERABLES
We are seeking a highly skilled and experienced Senior Business Analyst, the ideal candidate will have a strong background in business analysis, excellent problem-solving skills, and the ability to translate business requirements into technical solutions. This role involves working closely with stakeholders to understand their needs, analyzing business processes, and providing strategic recommendations to drive business improvements.
The Individual will primarily be responsible for, but not limited to the following:
Requirement Gathering: Engage with stakeholders to gather, analyse, and document business requirements.
Business Process Analysis: Analyse and evaluate existing business processes, identifying areas for improvement and optimization.
Solution Design: Collaborate with technical teams to design and implement solutions that meet business needs and align with organizational goals.
Documentation: Prepare detailed documentation including business requirements, functional specifications, process flows, and use cases.
Stakeholder Management: Act as a liaison between business stakeholders and technical teams, ensuring clear communication and understanding.
Project Management: Assist in project planning, coordination, and management to ensure timely delivery of solutions.
Data Analysis: Conduct data analysis to support business decision-making, identify trends, and provide actionable insights.
Testing and Validation: Develop and execute test plans to ensure the functionality and performance of implemented solutions.
Training and Support: Provide training and support to end-users to ensure successful adoption of new systems and processes.
Continuous Improvement: Stay updated with industry trends and best practices, continuously seeking opportunities to enhance business processes and solutions.
 
MINIMUM REQUIREMENTS:
Bachelor’s degree in business administration, Information Technology, or related fields.
Minimum of 5 years of experience in business analysis or a related field.
Proven experience in managing and delivering complex projects.
Proficiency in business analysis tools and methodologies
Strong understanding of software development lifecycle (SDLC).
Experience with data analysis and visualization tools (e.g., Excel, Power BI, Tableau).
Familiarity with project management tools (e.g., JIRA, Trello, MS Project).
Certified Business Analysis Professional (CBAP) or equivalent certification is a plus.
Experience with Agile development methodologies.
Knowledge of business process modeling (BPM) and improvement techniques.
Experience in the specific industry or domain relevant to the company’s business.
 
APPOINTMENT
The above-mentioned position will be offered on a temporary basis with a basic salary.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Mr. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE: 05 October 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary Senior Business Analyst” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates shall be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.
 
 
 
 
 
 `,` 
 
 
 
 
 
TEMPORARY SENIOR SOFTWARE ENGINEER
CONTRACT TYPE: TEMPORARY (12 MONTHS)
JOB GRADE: COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO: CHIEF INFORMATION OFFICER
DEPARTMENT/SECTION: BUSINESS MANAGEMENT SOLUTIONS
LOCATION: HEAD OFFICE, SUNNINGHILL JHB                                        
 
KEY DELIVERABLES
We are looking for a highly skilled and experienced Senior Software Engineer proficient in Microsoft Visual Studio (C#), Database Administration, and Microsoft DevOps. The ideal candidate will have a strong background in software development, database management, and continuous integration/continuous deployment (CI/CD) practices. This role involves designing, developing, and maintaining applications, managing databases, and implementing DevOps practices to streamline the development lifecycle.
The Individual will primarily be responsible for, but not limited to the following:
Software Development:
Design, develop, and maintain applications using Microsoft Visual Studio and C#.
Collaborate with cross-functional teams to define, design, and ship new features.
Write clean, scalable, and efficient code.
Conduct code reviews and provide feedback to ensure best practices are followed.
Database Administration:
Design, implement, and maintain robust database systems.
Perform database tuning, optimization, and query analysis.
Ensure data integrity and security.
Perform regular database backups and recovery operations.
Troubleshoot and resolve database-related issues.
DevOps Practices:
Implement and manage CI/CD pipelines using Azure DevOps.
Automate deployment processes to various environments.
Monitor and manage application performance and infrastructure.
Collaborate with development and operations teams to ensure smooth deployments and operations.
Implement infrastructure as code using tools like Terraform or ARM templates.
 
MINIMUM REQUIREMENTS:
Bachelor’s Degree in Computer Science, Information Technology, or related fields.
Minimum of 5 years of experience in software development using Microsoft Visual Studio and C#.
Extensive experience in database administration (preferably SQL Server).
Proven experience in implementing and managing DevOps practices.
Certifications in relevant technologies (e.g., Microsoft Certified: Azure Developer Associate, Microsoft Certified: Azure Database Administrator Associate).
Experience with Agile development methodologies.
Knowledge of infrastructure as code tools (Terraform, ARM templates).
 
APPOINTMENT
The above-mentioned position will be offered on a temporary basis with a basic salary.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Mr. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE: 05 October 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary Senior Software Engineer” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates shall be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.
 
 
 
 
 
 `,`TEMPORARY ICT INFRASTRUCTURE MANAGER
CONTRACT TYPE: TEMPORARY (12 MONTHS)
JOB GRADE: COMPETITIVE SALARY ALIGNED TO NHBRC SALARY GRADES
REPORTING TO: CHIEF INFORMATION OFFICER
DEPARTMENT/SECTION: BUSINESS MANAGEMENT SOLUTIONS
LOCATION: HEAD OFFICE, SUNNINGHILL JHB                                             
 
KEY DELIVERABLES
The ICT Infrastructure Manager is responsible to execute on the NHBRC ICT vision and for developing and implementing Information Technology initiatives that align with the mission of NHBRC. Execute the planning and implementation of enterprise Information Technology systems in support of NHBRC operations in order to improve cost effectiveness, service quality and mission development.

The Individual will primarily be responsible for, but not limited to the following:
Manage the functional budget and execute on the financial management of the function.
Manage Service Level Agreements with service providers.
Ensure cost optimisation measures are in place within division.
Implement and effectively manage the approved budgets, report variances and monitor the implementation of remedial actions to minimise impact.
Contribute to the development and implementation of the ICT strategy aligned to business strategy and in line with Government Planning framework.
Execute on the implementation plan the of ICT Strategy.
Provide effective IT service delivery by implementing ICT Infrastructure in the organisation.
Implement business applications that match business requirements.
Ensure optimal functioning and maintenance of the NHBRC Infrastructure systems.
Responsible to provide adequate technical infrastructure capabilities.
Support the CIO as the Custodian of the NHBRC IT governance and infrastructure framework.
Manage the IT risk management in the infrastructure implementation and maintenance.
Manage the team in realising the organisation’s strategic objectives.
Manage performance measures to evaluate the success of architecture implementation.
Manage specified performance measures aligned with strategic objectives.
Manage risks in collaboration with Risk Management.
Execute on the strategic plans in the organisation.
Apply operational planning and execution methods and tools.
Establish broad stakeholder involvement and communicates the project status and key milestones.
Defines roles and responsibilities for project team members and clearly communicates expectations.
Balances quality of work with deadlines and budget.
Identifies and manages risks to the project by assessing potential risks and building contingencies into project plan.
Sets and manages service level agreements with service providers.
Implements appropriate ICT reporting processes to the Council, ARMCO, CEO, Executive Committee, and Senior Management and facilitate ICT Infrastructure team to apply reporting protocols, including quantitative and qualitative thresholds, and monitor the reporting process.
Implement policies and procedures to direct the ICT Infrastructure function.
Ensure compliance to Public Finance Management Act, Corporate Governance and other relevant Treasury regulations requirements.
Ensure that audit requests are promptly adhered too within the stipulated timelines.
Maintain and update Risk Register and implement remedial plans for the BMS division.
Build client relationships by demonstrating professionalism, appropriate self-confidence, a facilitative communication style and
constructive responses to client needs.
Maintain positive interpersonal relationships with team members and others by demonstrating productivity, initiative and flexibility.
Educate management and users on Infrastructure Technology installations.
Establish and maintain lines of communication and systems of reporting within the organisation.
Inform on Infrastructure performance to CIO and at MANCO meetings.
Represent the organization at stakeholder forums as directed by the CIO or COO.
 
MINIMUM REQUIREMENTS:
Bachelor’s Degree in Computer Sciences/Engineering/Business Management or related fields
IT Service Management Certification (ITIL)
Relevant Project Management qualification will serve as an added advantage
Relevant Post Graduate qualification will serve as an added advantage
Information Security Certification will serve as an added advantage
Minimum ten years operational experience in ICT Management
Minimum 3-5 years’ operational experience in Financial Management
Minimum 3-5 relevant Leadership/ Staff Management experience at managerial level.
 
APPOINTMENT
The above-mentioned position will be offered on temporary basis with a basic salary.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Ms. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE:  05 October 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary ICT Infrastructure Manager” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates will be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.`,`TEMPORARY SENIOR SAP ABAP K4/K5
CONTRACT TYPE: TEMPORARY (12 MONTHS)
REPORTING TO : CHIEF INFORMATION OFFICER
DEPARTMENT/SECTION: BUSINESS MANAGEMENT SOLUTIONS
LOCATION: HEAD OFFICE, SUNNINGHILL.
 
KEY DELIVERABLES:
We seek a highly skilled and experienced Senior SAP ABAP K4/K5 Developer, the ideal candidate will possess deep technical expertise in SAP ABAP and a comprehensive understanding of SAP modules. This role involves designing, coding, testing, and implementing complex SAP applications and customizations to meet advanced business requirements and mentoring junior developers.
The Individual will primarily be responsible for, but not limited to the following:
Development and Customization: Design, develop, test, and implement advanced SAP ABAP applications and customizations.
Technical Leadership: Lead technical design sessions, provide guidance and mentorship to junior developers, and ensure best practices in coding standards.
Complex Reports and Interfaces: Develop complex SAP reports, interfaces, conversions, enhancements, forms, and workflows.
Data Dictionary Management: Create, manage, and optimize SAP Data Dictionary objects including tables, views, data elements, and domains.
Performance Optimization: Analyze and optimize performance of SAP applications, ensuring efficient and scalable solutions.
Project Management: Lead or participate in SAP project implementations, ensuring alignment with business requirements and project timelines.
Integration: Work on integrations with other SAP modules and third-party systems using SAP integration technologies such as IDocs, ALE, and RFC.
Code Review and Quality Assurance: Conduct thorough code reviews and enforce quality assurance standards to maintain high-quality codebase.
Documentation and Training: Maintain comprehensive documentation of all development work and provide training to team members and end-users as necessary.
Support and Troubleshooting: Provide expert-level support and troubleshooting for existing SAP applications and customizations.
 
MINIMUM REQUIREMENTS:
Bachelor’s degree in Computer Science, Information Technology, or related fields.
Minimum of 7 years of experience in SAP ABAP development.
Proven experience with multiple SAP modules such as CRM, MM, SD, FI, CO, HR, PI, SAP NetWeaver Gateway, etc.
SAP certification in ABAP or related SAP technologies.
SAP certified development specialist.
Experience with Agile development methodologies.
Knowledge of DevOps practices and tools.
Familiarity with cloud-based SAP solutions and integration
 
APPOINTMENT
The above-mentioned position will be offered on temporary basis with a basic salary.
 
ENQUIRIES:
Please note the following contact details are for enquiries about JOB CONTENT ONLY and NOT for application purposes.
Mr. Jabulani Ntshani
Tel: (011) 317 0496
 
CLOSING DATE: 05 October 2024
 
APPLICATION PROCESS:
Please email your CV to recruitment@nhbrc.org.za with “Temporary Senior SAP ABAP K4/K5” in the subject line. Applicants are informed that correspondence will be limited to short-listed candidates only. If notification of an interview is not received within 1 month after the closing date, candidates may regard their application as unsuccessful.
 
Disclaimer: The National Home Builders Registration Council (NHBRC) will consider all applications in terms of its Employment Equity Plan. The NHBRC reserves the right not to make an appointment. Candidates will be subjected to appropriate psychometric testing and other selection instruments. In conjunction to merit on the basis of qualifications, experience and proven achievements the National Home Builders Registration Council is committed to providing equal employment opportunities for persons with disabilities and those individuals from the historically disadvantaged groups.`],postedDate:"30/9/2024",iframe:"",uuid:"pdb204308-22a2-4e95-9ba3-6970dbdaab6a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/nlc_orig.jpg",href:"https://www.govpage.co.za/national-lotteries-commission-nlc-vacancies-blog/national-lotteries-commission-nlc-vacancies8567283",title:"NATIONAL LOTTERIES COMMISSION (NLC) VACANCIES",content:[` 
NATIONAL LOTTERIES COMMISSION (NLC)
 
The National Lotteries Commission (NLC), a Scheduled 3A entity in terms of the Public Finance Management Act (PFMA), is a statutory body established in terms of the Lotteries Act (Act 57 of 1997), as amended with the purpose of regulating South African Lotteries and administering the National Lottery Distribution Trust Fund (NLDTF). Suitably qualified prospective candidates who are South Africans citizens are invited to submit their applications to fill the position listed below. The National Lotteries Commission is committed to the achievement and maintenance of diversity and equity in employment, especially in respect of race, gender, and disability. 
 `,`KWAZULU-NATAL PROVINCIAL OFFICE 
PROVINCIAL MANAGER – KWAZULU-NATAL 
 
PURPOSE OF THE JOB 
To manage the provincial programme activities and staff working in close collaboration with the respective head office divisions and other provincial managers. This includes overall planning and coordination of resources, and execution or activities relating to application for grant funding, monitoring, and compliance enforcement in line with the strategies and policies of NLC. The Provincial Manager will also take responsibility for office administration, staff supervision, stakeholder management as well as improvement of the provincial office profile. 
SALARY:
•                Commensurate with qualifications and experience 
 
REQUIRED QUALIFICATIONS 
Appropriate Post Graduate degree or equivalent 
Project Management, Monitoring & Evaluation, Development Studies and Financial Management will be an added advantage 
 
REQUIRED WORK EXPERIENCE 
5 years in related experience 
3 years relevant functional experience in a management position 
Valid driver’s license 
Be prepared to travel and work under pressure to meet deadlines 
Knowledge of the geographic area to be served by the provincial office is recommended 
Proficiency in two or more of the official/main provincial languages is recommended 
 
KEY DELIVERABLES 
Develop Provincial Strategy Development and Implementation 
Establish strategies, goals and objectives of the region in line with the NLC strategy and vision and ensuring there in delivery according to the business plan. 
Ensure that NLC activities are consistent with the direction set in the approved grant application process, to the grant recipient 
Supervise and plan effective programme implementation across the province in collaboration with relevant NLC divisions. 
Ensure Application Processing 
Responsible for the Provincial Coordination of the grant application process 
Present project updates at the Board meetings as requested 
Monitor all phases of award and closing, including assessment of technical progress and performance 
Contribute to the Improved Capacity of Applicants to Access NLDTF Grants 
Contribute to improved capacity of grantees to utilize funds for intended purposes and to report on NLC funded projects 
Monitoring and Evaluation of grants 
Coordination of the Monitoring and compliance enforcement at the regional level 
Communication and Stakeholder Liaison 
Be the contact person for NLC in the Province 
Improve awareness of the NLDTF through good communication and strengthening stakeholder relationships in the region. 
Primary responsibility is the administration of the Provincial office and the supervision of all regional staff 
Manage and oversee the regional team performance through performance planning, coaching and performance appraisals 
Prepare budgets for the provincial office. 
Undertake provincial special projects as assigned. 
 
COMPETENCIES AND SKILLS 
Knowledge of the Lotteries Act and related regulations. 
Knowledge of PFMA and treasury regulations related to public entities. 
Knowledge and application of best practices in grant making. 
Ability to design and implement effective workflow processes and procedures. 
Sound knowledge and experience in working with civil society. 
Ability to work independently, plan and prioritise. 
Excellent networking skills. 
Public speaking ability. 
Financial and project management skills. 
Report writing skills. 
Presentation skills. 
Excellent verbal and written communication skills. 
Excellent organisational skills and ability to multi-task. 
Leadership skills. 
People management skills. 
 
 
Note: Recommended candidates will be subjected to attend a generic managerial competency-based assessment. Background verification, social media checks and security vetting will form part of the selection process and successful candidates will be subjected to security vetting. Correspondence will be limited to shortlisted candidates only. If you have not been contacted within three (3) months of the closing date of this advertisement, please accept that your application was unsuccessful. The NLC reserves the right not to fill any advertised position(s).
 
IMPORTANT NOTICE: APPLICATION INSTRUCTIONS: 
Please clearly indicate the title of the position you are applying for in the subject line 
Only candidates who meet the requirements should apply; 
Correspondence will be entered into with shortlisted candidates only; 
CV\`s from Recruitment Agencies will not be considered. 
Applications received after the closing date will not be considered. 
Submit your comprehensive C.V with qualifications attached to the following email address: Recruitment@nlcsa.org.za
 
CLOSING DATE: 9th of October 2024 
 
NLC WELCOMES APPLICANTS WITH DISABILITIES 
 
DISCLAIMER- POPIA 
By applying for NLC’s vacancy, you expressly give NLC consent to process your personal information stored in our history of all who have applied will be processed in accordance with the Protection of Personal Information Act 4 of 2013 (“POPIA”), the NLC Human Capital Policy/Procedures, the NLC’s POPIA Policy and the NLC’s Privacy Policy. These documents set out why the NLC needs the personal information, what NLC will do with it, and with whom the NLC will share it. Note that we will not further process the personal information stored automatically in this portal.`,`INFORMATION COMMUNICATION TECHNOLOGY DIVISION 
ICT SECURITY SPECIALIST – FULL TIME 24 MONTHS FIXED TERM CONTRACT 
 
PURPOSE OF THE JOB 
The ICT Security Specialist is responsible for developing, implementing, and maintaining the organisation's information security strategy, ensuring alignment with ISO 27002/1 standards and COBIT 19 security domains. This role focuses on safeguarding sensitive data, systems, and infrastructure by overseeing security policies, conducting risk management activities, and leading efforts to prevent and respond to security breaches. The ICT Security Specialist will also review and implement controls to address audit findings, ensure compliance with technical cybersecurity standards, and maintain security policies and SOPs. 
SALARY:
Commensurate with qualifications and experience 
 
REQUIRED QUALIFICATIONS 
Degree or diploma in Information Technology. 
Certifications (Preferred over a formal degree): 
Technical Cybersecurity Certifications: CISSP, CEH (Certified Ethical Hacker), CompTIA Security+, or ECIH (Certified Incident Handler). 
Framework Knowledge: Certifications in ISO 27001, NIST, or other relevant cybersecurity standards. 
Hands-on Experience: Practical experience in implementing security measures, incident response, and technical security controls. 
 
REQUIRED WORK EXPERIENCE 
Minimum 5 years of experience in a hands-on cybersecurity role, including: 
Security operations and incident handling. 
Vulnerability assessments and penetration testing. 
Technical leadership in cybersecurity implementations. 
 
KEY DELIVERABLES 
Technical Security Implementation: 
Lead the implementation of cybersecurity measures across the organisation, focusing on network, server, and application security. 
Proactively identify and remediate vulnerabilities through vulnerability assessments and penetration testing. 
Configure and maintain security technologies, including firewalls, intrusion detection/prevention systems (IDS/IPS), and antivirus solutions. 
Develop and implement security controls to protect against unauthorised access, data breaches, and other cyber threats. 
 
Incident Handling & Technical Support: 
Act as the primary responder for security incidents, conducting in-depth investigations and technical analysis to identify root causes and mitigate impacts. 
Provide expert technical support to the broader ICT team in resolving complex security issues. 
Document and report on security incidents, providing recommendations to prevent recurrence. 
 
Cybersecurity Measures & Controls: 
Work closely with the ICT team to implement and optimize security controls within existing systems. 
Establish and document security protocols and guidelines to enhance the overall security framework. 
Monitor and analyse logs, traffic, and other data sources to detect and respond to potential security threats. 
 
Threat Intelligence & Vulnerability Management: 
Collect, analyse, and utilize threat intelligence to inform security strategies and responses. 
Conduct ongoing vulnerability assessments to identify security gaps and recommend technical solutions. 
Engage in hands-on configuration and tuning of security technologies to bolster defences. 
 
Collaboration & Technical Leadership: 
Collaborate with technical teams to ensure that cybersecurity measures are effectively integrated into ICT operations. 
Provide guidance and technical expertise to ICT staff on security best practices. 
Lead the development of technical solutions to enhance security, including deploying security patches and updates. 
 
Audit Findings Review & Control Implementation: 
Regularly review internal and external audit reports related to cybersecurity to identify gaps, vulnerabilities, and areas of non-compliance. 
Develop corrective action plans to address audit findings, prioritising critical issues that could impact the organisation’s security posture. 
Work with technical teams to implement security controls and corrective measures to mitigate identified risks, ensuring audit recommendations are fully addressed. 
Establish processes to continuously monitor the effectiveness of implemented controls, ensuring they meet the intended security objectives and comply with relevant standards. 
Document all implemented measures and prepare reports detailing actions taken, compliance status, and any residual risks. 
Collaborate with auditors, risk management teams, and other stakeholders to validate that the implemented controls effectively mitigate the identified risks. 
Recommend and implement preventive measures based on audit findings to strengthen security controls and reduce the likelihood of future issues. 
 
Policy and SOP Review & Maintenance: 
Regularly review and update ICT security policies and Standard Operating Procedures (SOPs) to ensure they align with current security standards and best practices.
Develop new policies and SOPs as required to address emerging security threats and operational needs. 
Ensure all security policies and procedures are effectively communicated to and understood by the relevant stakeholders. 
Monitor compliance with established security policies and SOPs, making adjustments as necessary to enhance security measures. 
 
Compliance & Best Practices: 
Ensure that implemented and managed of IT Governance aligned with COBIT 2019 domains, ITIL Domain services, 
Implement and ensure compliance with regulatory requirements aligned with standards such as ISO/IEC 38500, ISO/IEC 27001, ISO/IEC 27002, ISO 9001, ISO 14589, ISO/IEC 20000, ISO Domains: ISO 31000, ISO/IEC 27005, ISO/IEC 27005, ISO 27035, ISO 27031, ISO 27003 
Legislation: Compliance with: 
NIST, and other specific cybersecurity frameworks. 
Ensure compliance with information security legal and regulatory obligations including the Protection of Personal Information Act, 2013, 
Cybercrimes Act 19 of 2020 
National Archives and Record Service of South Africa Act 43 of 1996. 
 
COMPETENCIES AND SKILLS 
Proficiency in technical cybersecurity operations, including hands-on experience with security tools and systems. 
Strong understanding of networking, server infrastructure, and security technologies. 
Ability to respond effectively to cyberattacks and security incidents with practical, hands-on solutions. 
Excellent problem-solving skills and the ability to work independently within a fast-paced environment. 
Strong communication skills with the ability to collaborate effectively with technical teams. 
 
Note: Recommended candidates will be subjected to attend a generic managerial competency-based assessment. Background verification, social media checks and security vetting will form part of the selection process and successful candidates will be subjected to security vetting. Correspondence will be limited to shortlisted candidates only. If you have not been contacted within three (3) months of the closing date of this advertisement, please accept that your application was unsuccessful. The NLC reserves the right not to fill any advertised position(s). 
 
IMPORTANT NOTICE: APPLICATION INSTRUCTIONS: 
Please clearly indicate the title of the position you are applying for in the subject line 
Only candidates who meet the requirements should apply; 
Correspondence will be entered into with shortlisted candidates only; 
CV\`s from Recruitment Agencies will not be considered. 
Applications received after the closing date will not be considered. 
Submit your comprehensive C.V with qualifications attached to the following email address:Recruitment@nlcsa.org.za
 
CLOSING DATE: 9th of October 2024 
 
NLC WELCOMES APPLICANTS WITH DISABILITIES 
 
DISCLAIMER- POPIA 
By applying for NLC’s vacancy, you expressly give NLC consent to process your personal information stored in our history of all who have applied will be processed in accordance with the Protection of Personal Information Act 4 of 2013 (“POPIA”), the NLC Human Capital Policy/Procedures, the NLC’s POPIA Policy and the NLC’s Privacy Policy. These documents set out why the NLC needs the personal information, what NLC will do with it, and with whom the NLC will share it. Note that we will not further process the personal information stored automatically in this portal.`,`INFORMATION COMMUNICATION TECHNOLOGY DIVISION 
ICT GOVERNANCE SPECIALIST – FULL TIME 24 MONTHS FIXED TERM CONTRACT 
 
PURPOSE OF THE JOB 
To manage and continuously enhance ICT governance frameworks and processes in alignment with COBIT, ITIL best practices, and the South African DPSA Governance Framework. This role ensures effective ICT governance, risk management, and compliance across the organization, complementing the work of the ICT Security Specialist. It ensures adherence to key South African legislative and regulatory requirements. 
SALARY:
Commensurate with qualifications and experience 
 
REQUIRED QUALIFICATIONS 
Degree or diploma in Information Technology. 
Relevant CISSP (Certified Information Systems Security Professional) or CISM (Certified Information Security Manager) certification or equivalent. 
Certified COBIT and ITIL practitioner. 
TOGAF certification (recommended). 
 
REQUIRED WORK EXPERIENCE 
Minimum 5 years of IT Governance specialist role experience in at least three of the following areas: 
Information Security Governance 
Information Security Program Management 
Incident Response Management 
Operational Information Security 
Risk assessment experience 
Risk Management 
Gap analysis. Policy Development and Compliance: Develop, maintain, and enforce ICT governance frameworks aligned with COBIT, ITIL, ISO 27001/2, DPSA Governance Framework, and South African legislation etc. 
Ensure compliance with PFMA, ECTA, and other applicable legislation, incorporating these into ICT governance processes. 
Align ICT governance processes with ISO 9000 standards for quality management, ensuring adherence to NARSA requirements for information governance. 
 
KEY DELIVERABLES 
ICT Governance Framework Development and Compliance: 
Risk Management and ICT Governance Support: 
Support the ICT Security Manager/Specialist in developing risk management frameworks aligned with the POPI Act and PAIA, ensuring protection and privacy of personal information. 
Maintain and update the ICT and cybersecurity risk register, ensuring alignment with organizational risk management strategies and compliance with South African regulations. 
Generate risk management reports, perform gap analyses, and recommend risk treatment plans. 
 
ICT Service Management and Operational Support: 
Implement and manage ITIL-based service management processes, including change, problem, and configuration management, ensuring compliance with ECTA. 
Oversee the continuous improvement of ICT service delivery, to measure and enhance service quality. 
 
Performance Monitoring and Reporting: 
Accumulate and analyse metrics related to ICT governance, risk management, and compliance,
Report on compliance, performance constraints, and risks, ensuring alignment with PFMA and PAJA requirements. 
 
Stakeholder Engagement and Leadership: 
Provide guidance to management on risk identification, control implementation, and ICT governance while coordinating closely with the ICT Security Manager/Specialist.
Ensure that stakeholder engagement processes comply with PAIA and the POPI Act, protecting information privacy and ensuring transparency. Ensure that implemented and managed of IT Governance aligned with COBIT 2019 domain, ITIL Domain services, 
 
Compliance and Best Practices 
Implement and ensure compliance with regulatory requirements of IT Governance aligned with standards such as ISO/IEC 38500, ISO/IEC 27001, ISO/IEC 27002, ISO 9001, ISO 14589, ISO/IEC 20000, ISO 14589, ISO Domains: ISO 31000, ISO/IEC 27005, ISO 9001, ISO Domains: ISO 31000, ISO/IEC 27005. 
Legislation: Compliance with PAIA (Act No. 2 of 2000), POPI Act 
Legislation: Compliance with PFMA (Act No. 1 of 1999), PAJA (Act No. 3 of 2000) 
Legislation: Compliance with ECTA (Act No. 25 of 2002) 
Legislation: Compliance with POPI Act, PAIA (Act No. 2 of 2000) 
NARSA (Act No. 43 of 1996), 
ECTA (Act No. 25 of 2002) 
 
COMPETENCIES AND SKILLS 
Technical Competencies 
Strong knowledge of current ICT technologies and operations architecture, policies, processes, systems, and tools. 
Ability to translate business needs into ICT and operational policies and solutions. 
Knowledge of ICT project planning, application development, and ICT governance best practices. 
Experience in implementing and managing, quality management standards. 
Effective communication and people skills, including conflict-management, working across multiple teams and with diverse stakeholders. 
 
Behavioural Competencies: 
Customer Focus: Crafting and implementing service practices that meet customers' needs, 
Achievement Orientation: Setting and achieving high goals, continuously improving. 
Initiative: Identifying and implementing process improvements that enhance quality management and governance. 
Decision-Making: Allocating responsibilities to maximize effectiveness and quality outcomes. 
Strategic Thinking: Committing to long-range goals and plans, incorporating quality management principles. 
Continuous Learning: Actively pursuing learning opportunities and applying new knowledge to improve quality management and governance. 
Relationship Building: Establishing strategic relationships across the organization, ensuring alignment with quality management practices. 
 
 
Note: Recommended candidates will be subjected to attend a generic managerial competency-based assessment. Background verification, social media checks and security vetting will form part of the selection process and successful candidates will be subjected to security vetting. Correspondence will be limited to shortlisted candidates only. If you have not been contacted within three (3) months of the closing date of this advertisement, please accept that your application was unsuccessful. The NLC reserves the right not to fill any advertised position(s). 
 
IMPORTANT NOTICE: APPLICATION INSTRUCTIONS: 
Please clearly indicate the title of the position you are applying for in the subject line 
Only candidates who meet the requirements should apply. 
Correspondence will be entered into with shortlisted candidates only. 
CV\`s from Recruitment Agencies will not be considered. 
Applications received after the closing date will not be considered. 
Submit your comprehensive C.V with qualifications attached to the following email address:Recruitment@nlcsa.org.za
 
CLOSING DATE: 9th of October 2024 
 
NLC WELCOMES APPLICANTS WITH DISABILITIES 
 
DISCLAIMER- POPIA 
By applying for NLC’s vacancy, you expressly give NLC consent to process your personal information stored in our history of all who have applied will be processed in accordance with the Protection of Personal Information Act 4 of 2013 (“POPIA”), the NLC Human Capital Policy/Procedures, the NLC’s POPIA Policy and the NLC’s Privacy Policy. These documents set out why the NLC needs the personal information, what NLC will do with it, and with whom the NLC will share it. Note that we will not further process the personal information stored automatically in this portal.`],postedDate:"30/9/2024",iframe:"",uuid:"p80cc17ed-84a1-4fcb-9f07-fda19370d284"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/proudlysa_orig.png",href:"https://www.govpage.co.za/proudly-south-african-vacancies-blog/proudly-south-african-vacancies7700687",title:"PROUDLY SOUTH AFRICAN VACANCIES",content:[` 
PROUDLY SOUTH AFRICAN
 `,`EVENTS AND EXHIBITIONS COORDINATOR
 The Proudly South African Campaign invites applications from suitably qualified candidates for the position of an Events & Exhibitions Coordinator on a fixed term contract for 3 years. 
REMUNERATION PACKAGE: R20 000.00 to R25 000.00 per month plus benefits.
 
MINUMUM REQUIREMENTS:
Matric
An appropriate recognised degree/diploma or equivalent qualification.
A minimum of three year’s relevant experience with organising corporate events, exhibitions & projects.
Drivers Licence, own vehicle and willingness to travel as and when required.
 
KEY ROLES AND RESPONSIBILITIES: 
Coordinate Proudly South African events, exhibitions and promotions.
Initiate planning and coordination prior to, during and after events, activations, exhibitions and promotional projects (both physical and virtual).
Manage and liaise with service providers.
Preparation of event budgets and project plans.
Prepare communiques or circulars for upcoming events, exhibitions and promotions.
Identify delegates and coordinate involvement of members for events and exhibitions.
Collate reports from feedback and distribute customer satisfaction surveys after every event, exhibition and/or activation.
Implement marketing plans that aim to promote Proudly South African’s internal and external activities, brands, products and services.
Compile and submit reports (weekly, monthly, annually, projects, close out, pre/post and ad hoc).
The ability to perform miscellaneous/adhoc and other appropriate duties as assigned.
Comply and adhere to key deliverables as informed by annual performance plan(s).
Ability to formulate creative ideas and be innovative.
Resilient, hard-working individual with project/time management skills and ability to work within the stipulated levels and delegations of authority in the organisation.`,`Interested applicants that meet the minimum requirements should forward their CV quoting the reference number in their subject line. 
 
CVs may be sent via email to cvs@proudlysa.co.za.

CLOSING DATE: 12h00 on the 11 October 2024.

If you have not been contacted within two weeks after the closing date, please consider your application as unsuccessful. 

 
Correspondence will be limited to short-listed candidates.
Proudly South African reserves the rights not to fill this position.`],postedDate:"30/9/2024",iframe:"",uuid:"p0b7e2132-18ee-4c6f-ada9-029bde987466"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/raf_orig.jpg",href:"https://www.govpage.co.za/road-accident-fund-raf-vacancies-blog/road-accident-fund-raf-vacancies1855440",title:"ROAD ACCIDENT FUND (RAF) VACANCIES",content:[` 
ROAD ACCIDENT FUND (RAF)
 `,` 
 
MANAGER: FACILITIES MANAGEMENT
Division:  Corporate Support
Reference No:  4763
Location:  Durban, KwaZulu-Natal, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  15
Job Posting Salary:  R891,176.00
Job Posting End Date:  8 Oct 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: The Manager: Facilities Management is responsible to to managing the RAF Facilities related activities and processes to ensure a safe and functional working space.
 
Key Performance Areas
 
Policy review and implementation
Contribute to the development and implementation of departmental policy, procedures and processes.
Keep up to date with effective policy and practice execution strategies.
Ensure national space strategy is adhered to.
 
Manage effective workspace and parking space management
Create functional effective and flexible working areas
Maintain a database of accurate drawings of offices and submit any amendments to project office.
Manage the allocation of parking bays and ensure compliance.
Handle parking and workspace queries and ensure resolution
 
Administration of audit and risk findings identified in the department.
Respond to the operational risks identified.
Continuously monitor opportunities and incidents.
Review audit findings, develop plans and submit comments to Senior Manager.
Pro-actively rectify and control weaknesses identified.
Ensure the proper administration, governance and risk management.
 
Manage Facilities services sectional budget and other financial resources management.
Monitor the budget spending, manage the divisional cash flow and minimise budget variance.
Forecast facilities management budget each FY starting with zero based and submit to manager.
Ensure that expenses fall and are covered under the budget set.
Ensure regular and consistent reporting on budget expenditure.
To make input into the strategic and business planning and ensure budgeting for facilities services.
 
Manage 30-day payment of all FM invoices.
Manage payment of accounts rent and other Facilities Management related services.
Manage landlords, agents on outstanding invoices before month end.
Submit a report to manager on all invoice related information.
 
Manage all Facilities related Contracts.
Draft memorandums and advise procurement of required Facilities Management contracts to ensure no irregular contracts.
Manage service level agreements with service providers for office cleaning. Fumigation, office plant and special server room clearing etc.
Ensure up to date contract data base.
 
Reporting
Develop reports/ policies/ procedures and guide the process through the alignment of the documents to the overall RAF’s strategy.
Develop functional reporting systems, for management, projects or performance reporting.
Prepare proposals, briefings, presentations, reports, and other documentation and provide management information both verbally and in report format.
 
Stakeholder management
Facilitate and manage communication with relevant internal and external stakeholders proactively and progressively manage the relationships.
Manage relationships with vendors, service providers or procurement teams and ensure that all relevant procured items are invoiced and paid on time.
Communicate with all levels of stakeholder contact.
Represent the Fund in relevant external activities and events.
 
People Management
Ensure the sourcing, development and retention of a high-performance team.
Manage the recruitment of the operational workforce in line with employment equity targets.
Manage staff in the department to ensure that they achieve their objectives in line with the strategic objectives of the RAF.
Manage the implementation of people management processes and procedures to control/regulate workplace conflict and/or institute corrective measures and consultation processes to address deviations from standards.
Allocate, direct, motivate and evaluate subordinates to help them achieve their individual goals.
 
Qualifications and Experience  
Bachelor’s Degree/Advanced Diploma in Facilities Management related qualification
Postgraduate in Facilities Management related qualification will be advantageous.
Drivers Licence
Relevant 6-8 years’ experience in Facilities management environment of which 2 years must have been on supervisory level/area of expertise/management level
 
Behavioral competencies
Resilience
Communication
Working with People
Network and Alliances
Planning, Organising and Coordinating
Employee Engagement
Personal Mastery
Judgement and Decision Making
Ethics and Values
Client Service Orientation
 
Managerial:
Change management
Coaching and mentoring
Conflict management
Critical and innovative thinking
Direction setting
Facilitation and Presentation Skills
People Management
Policy conceptualisation and formulation
Risk Management
Programme/project management
Service Delivery Innovation
Stakeholder development and relations
Reporting
 
Technical:
Knowledge of associated building maintenance processes.
Project management skills
Troubleshooting skills
Innovative ideas on office set ups.
Solution focused.
Impact and innovation/creativity.
Knowledge of Basic Financial Management.
 
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 `,` 
 
 
 
 
SPECIALIST: IT RISK MANAGEMENT
Division:  Strategy and Transformation
Reference No:  4916
Location: Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  15
Job Posting Salary:  R891,176.00
Job Posting End Date:  8 Oct 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to the Manager: IT Risk and Governance, the successful incumbent is responsible for implementing procedures and controls to efficiently identify, assess, mitigate and monitor IT risks, ensuring the protection of the organisation’s assets. Reputation and operational continuity.
 
Key Performance Areas
 
Risk Management
Contribute to the development an IT Risk management framework for key ICT areas:
Risks associated with products and services.
Sensitive or confidential information
Information security
IT operations
IT projects
System recovery and business resumption
IT outsourcing
IT Talent
Conduct comprehensive risk assessments to identify and analyse potential risks associated with IT systems, processes, and projects.
Develop and implement risk mitigation strategies and controls to minimize the likelihood and impact of identified risks.
Manage exposures, insurance, legal/ regulatory requirements, cost justifications, vendor agreements, and business continuity.
 
Business Continuity and Disaster Recovery
Contribute to business impact analysis and align IT continuity plans accordingly.
Develop and implement standard risk assessment, business impact analysis, and BCM tools and capabilities.
Facilitate insurance and vendor agreements for disaster events.
 
Incident Response and Crisis Management
Maintain incident response plans and procedures to effectively respond to and recover from IT incidents and disruptions.
Participate in crisis management exercises.
 
Third Party Risk Management
Evaluate and manage risks associated with third-party vendors, suppliers, and service providers.
Assess third party security controls, contractual obligations, and service level agreements to mitigate risks and ensure compliance with IT policies.
 
Cloud Services Risk Assessment and Mitigation
Conduct risk assessments for cloud services, develop mitigation strategies, and manage relationships with cloud service providers.
Evaluate and manage relationships with cloud service providers, ensuring that contractual agreements, service level agreements (SLAs), and security commitments meet the organization's requirements.
Oversee change management processes for cloud environments.
 
ICT Compliance
Collaborate with IT teams and business units to ensure that information technology systems and services meet risk management and compliance objectives.
Conduct regular audits and assessments of information technology systems and services to ensure that they are secure and meet compliance requirements.
Ensure a compliance framework is maintained in accordance with required standards.
 
Policy Review and Implementation
Contribute to the development and implementation of departmental policies, standards, procedures, and processes.
Stay updated with effective policy execution strategies.
 
Reporting
Define key performance indicators (KPIs) and metrics to measure the effectiveness of IT Risk processes and controls.
Prepare status reports on IT BCM matters, measure BCM program maturity, and publish DR program reports.
Monitoring risk indicators, tracking risk treatment actions, and generating regular reports and dashboards to communicate risk status to senior management and stakeholders.
 
Stakeholder Management
Foster proactive relationships with key stakeholders and address inquiries and requests for information.
Maintain relationships with Enterprise Risk function, Auditors, service providers, and procurement teams.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in Information Technology/ Risk Management related qualification
ITIL will be an added qualification.
Relevant 5 - 7 years’ experience in a Risk Management or an Information Technology related environment.
 
Technical and Behavioral Competencies Required
Resilience.
Network and alliance.
Employee engagement.
Ethics and values.
Change management.
Critical and innovative thinking
Policy conceptualisation and formulation.
Risk Management.
Stakeholder development and relations.
Reporting.
Knowledge of information technology risks, governance and regulatory requirements, and risk management methodologies.
Data security management.
IT risk management.
Innovation and business improvement.
Risk assessment.
Knowledge of Software Vulnerability.
Communication skills.
Analytical skills.
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 
 `,` 
 
SPECIALIST: IT GOVERNANCE
Division:  Strategy and Transformation
Reference No:  4917
Location: Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  15
Job Posting Salary:  R891,176.00
Job Posting End Date:  8 Oct 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to the Manager: IT Risk and Governance, the successful incumbent is responsible for developing and implementing IT governance frameworks and controls to ensure alignment of IT processes, policies and systems with RAF’s strategic objectives, regulatory requirements and industry best practices.
 
Key Performance Areas
 
Implement IT Governance Frameworks
Collaborate with senior management, IT teams, and key stakeholders to implement and maintain IT governance frameworks and policies.
Monitor the effectiveness of IT frameworks (ITIL, COBIT, ISO 27001/2) and policies, making adjustments as necessary to maintain compliance and support evolving business needs.
 
Data Governance
Implement data governance frameworks, policies, and procedures to ensure the quality, integrity, and security of organisational data assets.
Provide support on data-related initiatives, including data classification, metadata management, data privacy, and regulatory compliance.
Facilitate data governance training and awareness programs to promote a culture of data stewardship and accountability across the organisation.
 
Cloud Governance
Implement and maintain a governance framework for cloud services that encompasses areas such as security, compliance, performance optimization, and risk mitigation.
 
IT Compliance
Stay abreast of relevant laws, regulations, and industry standards pertaining to IT security and privacy (e.g., POPIA, GDPR, HIPAA) and ensure that the organisation remains compliant with applicable requirements.
Collaborate with IT teams and business units to ensure that information technology systems and services meet compliance objectives.
Conduct regular audits and assessments of information technology systems and services to ensure that they are secure and meet compliance requirements.
Ensure a compliance framework is maintained in accordance with required standards.
 
IT Audit and Assurance
Coordinate and support internal and external IT audits and assessments, including compliance audits, control reviews, and risk assessments.
Collaborate with auditors to provide evidence of compliance, address audit findings, and facilitate implementation of  corrective actions as needed.
 
Policy Review and Implementation
Contribute to developing and implementing departmental policy, standards & procedures, and processes.
Stay updated with effective policy and practice execution strategies.
 
Reporting
Generate regular reports and dashboards to communicate IT governance performance to senior management and stakeholders.
 
Stakeholder Management
Facilitate and manage communication with relevant internal and external stakeholders progressively manage the relationships.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in Information Systems, Computer Science, Audit, or related qualification. 
Certification in ITIL and COBIT.
Project Management Professional (PMP) and Certified in Governance of Enterprise IT(CGEIT) will be advantageous.
Relevant 5 - 7 years’ experience in developing, implementing, and maintaining IT governance frameworks and IT controls.
 
Technical and Behavioral Competencies Required
Resilience.
Network and alliance.
Employee engagement.
Ethics and values.
Change management.
Critical and innovative thinking
Policy conceptualisation and formulation.
Risk Management.
Stakeholder development and relations.
Reporting.
Knowledge of IT frameworks and best practices.
 Excellent understanding of Regulatory requirements.
 Excellent corporate governance principles.
Microsoft office suite.
Technical ability.
ICT Policies, Procedures and Practices.
Data Governance.
IT Processes.
IT Frameworks.
IT Regulations.
Communication (Written & Verbal).
Basic Business management.
Basic understanding of King IV.
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 
 `,` 
 
 
 
 
 
SENIOR MANAGER: MEDICAL ADVISORY MNGT
Division:  Claims
Reference No:  4922
Location: Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  18
Job Posting Salary:  R1,371,054.00
Job Posting End Date:  8 Nov 2024
 
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.

 
Purpose of the Job: Reporting to the Head: Medical Risk and Business Solutions, the successful incumbent is accountable for providing leadership to the clinical research team and function and medical advisory services; for the development of evidence-based treatment protocol and of associated policies and procedures in order to meet the objectives of the fund. This role will coordinate across all areas aligned to claims processing, rehabilitation and future care in order to ensure overall service provider engagement and stakeholder satisfaction.
 
Key Performance Areas
 
Governance of Clinical/ Treatment Protocols (Policies, Processes and SOPs)
Devise and execute a plan to monitor development, updating and refining healthcare   policies, processes, and protocol updates, on par with the latest technology and clinical developments in the industry.
Assists and provide support to the medical management and claims assessment teams in decision making through policies and protocols.
Manage decisions, actions, clinical information, communication, and support related to claims processes, treatment and procedure.
 
Management of Treatment Protocols
Standardisation on clinical standards and practices in order to strengthen an integrated service model for all related stakeholders (clinical and non-clinical)
Co-ordinate holistic treatment protocol approach that is capped and includes all service providers. 
Develop and deliver insightful, value-added solutions that address complex client issues.
Navigate the market (including academic and specialist associations) in the effective and efficient standard treatment protocols. Nappi, ICD 10, CPT, orthotic, physiotherapy, occupational, etc.
Serves as a scientific advisor and provide guidance to the team on implementation of treatment protocol.
Investigate protocol related issues including protocol clarifications, inclusion/ exclusion determinations.
Perform medical review of protocol.
Perform medical review of adverse clinical coding.
 
Management of the Clinical Research Function
Function as a clinical leader for the Fund
Manage the analysis of clinical research data.
Develop and manage a project plan.
Provide guidance to the clinical research team. 
Advise, guide and support the clinical research team with clinical input and responses to all clinically related queries of RAF stakeholders e.g. attorneys, hospitals, etc.
Check medical trends, experience and approaches.
 
Strategy Development and Operational Planning
Guide the development and implementation of the departments strategy and plan that ensure alignment with short-term and long-term objectives.
Guide implementation of the overall strategic plan for the department.
Guide the implementation of specific key performance indicators and measures against outcomes detailed in the departmental strategic plans.
 
Policy Review and Implementation
Support the development and implementation of policy, procedures and processes for the business unit and ensure effective execution of policy and practices.
Collaborate with appropriate structures to ensure effective execution of policy and practices.
Ensure that all employees in the team know and understand the RAF policies.
 
Stakeholder Management
Represent the organisation in various provider platforms, and stakeholder relations area in order to ensure that the RAF treatment protocols and policies are on par with the local treatment standards. 
Build collaborative working relationships with PMO, ICT, Post Claims Settlement etc. for implementation purposes.
Provides medical and scientific advises to key internal and develop proposals.
 
General Administration
Develop clinical work templates
Respond to complicated clinical queries in writing, supporting teams
Record keeping
Serve as the clinical expert providing technical support to the medical management and claims assessment departments.
 
Reporting
Update RAF Management on progress of Clinical Research Team protocol development with milestones. 
Report quarterly on progress with implementation of operational plans.
Ensure development of functional reporting systems, project or performance reporting for management.
Ensure the development of reports/ policies/ procedures and guide the process through the alignment of these documents to the overall RAF’s Strategy.
Ensure regular and periodic reports are prepared and submitted as and when required to provide progress updates and/or inform management decisions.
 
Financial Management
Ensure that the periodic financial and strategic goals of RAF as well as the performance expectations of the various teams are achieved.
Report and review operations financial and non-financial goals.
Ensure sufficient internal control measures are implemented for adherence to PFMA, RAF and other relevant legislation and regulation.
Manage, monitor and control the department expense budget.
 
People Management
Ensure the sourcing, development and retention of a high-performance team.
Ensure the motivation, cohesiveness, and alignment of the organisation’s team members.
Manage staff in the department to ensure that they achieve their objectives in line with the strategic objectives of the RAF.
 
Qualifications and Experience
A Medical Degree (MBChB or equivalent).
Registration with the HPCSA as a Medical Doctor
Certificate in Evidence Based training (PTCMA) or Health Technology Assessment (HTA) training or in progress of obtaining the qualification.
Postgraduate in Health Sciences or Medical related qualification.
Business Administration/ Management post graduate qualification would be an advantage.
Relevant 9 – 10 years’ experience as a medical doctor of which 3 years’ must be on a management level/ area of expertise in a managed care/ insurance/ healthcare environment, medical advisory work.
Experience in the development of treatment protocols, policies, and working with a team of researchers to develop the treatment protocols (clinical coder, pharmacist, etc.).
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 
 `,` 
 
 
 
 
 
SPECIALIST: CLINICAL RESEARCH PROTOCOLS
Division:  Claims
Reference No:  4924
Location: Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  14
Job Posting Salary:  R771,969.00
Job Posting End Date:  8 Oct 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to Manager: Policy and Research, the successful incumbent is accountable for working with clinical data for the collection, analysis, maintenance and use of quality data to support the development of evidence-based treatment protocols.
 
Key Performance Areas
 
Organize and Manage Health Information Data and Ensure its Quality, Accuracy, Accessibility and Security
Search and review data in adherence to requirements of the clinical research team.
Search applicable databases for information and ensure that data used is accurate and up to date.
Develop health management information system (configuration and data structures) aligned to the objectives of the team.
Ensure rigor of literature accessed across all research projects.
Develop and implement SOPs for data searches and access.
 
Maintenance, Collection and Analysis of Data
Develop processes that ensure data accessibility, analysis and storage.
Ensure that databases are up to date and ensure training and understanding of appropriate databases by the clinical research team.
Filter search results according to specifications.
Define the data management framework compromising of search criteria, turn- around times for data requests and quality assurance.
Plan, manages and requests resources for assigned projects.
Develop and maintain project plans, specifications and documentation in line with SOP requirements.
 
Policy Review and Implementation
Contribute to the development and implementation of departmental policy, procedures and processes.
Keep up to date with effective policy and practice execution strategies.
 
Reporting
Prepare and submit regulation reports as and when required to provide progress updates and/or inform management decisions.
Develop reports/ policies/ procedures and guide the process through the alignment of the documents to the overall RAF’s Strategy.
Develop functional reporting systems, for management, projects or performance reporting.
Prepare proposals, briefings, presentations, reports, and other documentation and provide management information both verbally and in report format.
 
Stakeholder Management
Provide data management expertise within the team.
Work as a member of a holistic protocol development team.
Constructively engage and liaise with team members in the protocol development team towards achieving collective goals.
Stay abreast of new scientific developments and expand the network of collaborative partners by attending workshops, technical working groups and academic engagements.
Provide regular training to staff on clinical topics within the team as well as within other teams in the organization.
Work closely with ICT to ensure that the infrastructure is compatible across all relevant data points.
 
Administrative and Report Writing
Compile monthly reports on data searches, utilization, contribution to protocol development and clinical query resolution 
Collection of relevant statistics to inform future decisions
Ensure processes are in place to have accurate and timeous information on databases and data management.
Run data cleaning and status reports.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in Health Sciences Nursing, Pharmacy related qualification.
Valid registration with the relevant Statutory body (SANC, SAPC, HPCSA etc).
Certification in evidence-based medicine and/or treatment protocol development will be an added advantage.
Relevant 5 - 7 years’ experience in a Managed Healthcare environment or similar in data sourcing, collection and navigation.
Experience working with treatment protocols and guidelines.
With experience working with medical databases, navigating large data quantities and data outputs.
With experience working with ICD 10 codes, CPT codes, NAPPI codes Experience in Functional Capacity Evaluation and associated reports and tariffs applicable.
With experience working with coding systems (ICD 10, CPT and NAPPI codes).
 
Technical, Managerial, and behavioural competencies required
Communication.
Network and Alliances
Planning, Organising and Coordinating
Ethics and Values
Client Service Orientation
Change management
Conflict management
Policy conceptualisation and formulation
Risk Management
Programme/ project management
Stakeholder development and relations
Reporting
Computer literacy.
Display a basic understanding of evidence-based medicine
Knowledge of medical terminology and legal aspects of health information
Good understanding of data search engines and intelligent data extraction
Understanding of data research principles
Ensure quality, accuracy, accessibility and security of data
Knowledge of health data standards
Knowledge of “managed healthcare” or financial risk assessment principles (environment)
Knowledge of standards within the health industry
Knowledge of the legislation governing RAF, policies and procedures
Knowledge and understanding of the RABS Bill and its benefits
Knowledge of the National Health Act, RAF Act, and other health related legislation such as the Medical Scheme’s Act, etc.
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »
 
 
 
 
 
 `,`SPECIALIST: EMERGENCY MEDICAL SERVICES
Division:  Claims
Reference No:  4923
Location: Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  15
Job Posting Salary:  R891,176.00
Job Posting End Date:  8 Oct 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to the Manager: Medical Advisory, the successful incumbent is accountable to manage the standard of clinical care by developing and maintaining clinical standards and supporting strategies.
 
Key Performance Areas
Assessment of Clinical Impairment in Line with International Best Practices
Provide guidance in the interpretation of emergency rescue and stabilization analysis.
Assessment and review of clinical appropriateness of emergency medical services.
Coordinate with internal departments to find solutions and resolve matters.
Support in the identification, development and implementation of cost-effective processes in order to increase efficiency and reduce cost drivers related to the emergency medical services.
 
Training and Support
Ensure updated and standardised emergency medical services training to medical staff within RAF.
Provide support to RAF teams on EMS related matters.
Identify relevant treatment plans and gaps in EMS.
 
Quality Assurance
Provide consultations on the implementation or programs and services.
Ensure that programs and services are implemented and maintained at the highest standards.
Manage the development and implementation an unusual occurrence procedure.
Ensure that research is conducted to determine if there are any new or revised regulations.
 
Policy Review and Implementation
Contribute to the development and implementation of emergency medical service protocols.
Contribute to the development and implementation of emergency medical service tariffs
Keep up to date with effective SOP’s, policy and practice execution strategies.
Ensure that policies and systems are managed and monitored in line with regulations.
 
Reporting
Prepare and submit regulation reports as and when required to provide progress updates and/or inform management decisions.
Develop reports/ policies/ procedures and guide the process through the alignment of the documents to the overall RAF’s Strategy.
Develop functional reporting systems, for management, projects or performance reporting.
Prepare proposals, briefings, presentations, reports, and other documentation and provide management information both verbally and in report format.
 
Stakeholder Management
Prepare and submit regulation reports as and when required to provide progress updates and/or inform management decisions.
Develop reports/ policies/ procedures and guide the process through the alignment of the documents to the overall RAF’s Strategy.
Develop functional reporting systems, for management, projects or performance reporting.
Prepare proposals, briefings, presentations, reports, and other documentation and provide management information both verbally and in report format.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in an Emergency medical services related qualification.
National Ambulance Emergency Assistant Certification (AAA) or Intermediate.
Registration with the HPCSA as a Paramedic ILS Minimum/ ALS Desired.
Pre-hospital Trauma Life Support (PHTLS) certification will be an advantage.
Relevant 5 - 7 years’ experience in Emergency Management Environment.
Experience in working with ICD 10 codes (diagnosis codes) will be an advantage.
Experience in Healthcare Administration and Funding industry.
Experience in medical claims, related charges, and clinical audit of claims.
 
Technical and Behavioral Competencies Required
Resilience.
Network and alliance.
Employee engagement.
Ethics and values.
Change management.
Critical and innovative thinking
Policy conceptualisation and formulation.
Risk Management.
Stakeholder development and relations.
Reporting.
Understand different systems of ambulance provision.
Vast knowledge of MVA and related complications.
Knowledge of medical information systems and processes.
Knowledge of clinical technology and trends.
Understanding of health technologies.
Knowledge of impairment rating procedures.
Knowledge of relevant clinical legislation.
 

NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »`,`SENIOR OFFICER: FACILITIES MANAGEMENT
Division:  Corporate Support
Reference No:  4626
Location:  Centurion, Gauteng, ZA
Employment Type:  Permanent
Disability (EE targeted role):  No
T.A.S.K Grade:  12
Job Posting Salary:  R579,259.00
Job Posting End Date:  8 Oct 2024
The Road Accident Fund’s mission is to provide appropriate cover to all road users within the borders of South Africa; to rehabilitate and compensate persons injured as a result of motor vehicle accidents in a timely and caring manner; and to actively promote safe use of our roads.
 
Purpose of the Job: Reporting to the Manager: Facilities Management, the successful incumbent is responsible for coordinating the implementation of Facilities related activities and processes to ensure a safe and functional working space. The role will also supervise the work of the Officer: Facilities Management.
 
Key Performance Areas
 
Facilities Related Support
Arrange for the appropriate maintenance and repair of building, furniture and equipment.
Identify problems regarding service level agreements with service providers contracted under Facilities Management services and escalate where necessary.
Ensure all offices are fully furnished and equipped.
Plan and coordinate office moves (churning) and oversee the execution thereof.
Conduct inspections and ensure that staff adhere to guidelines, policies and procedures.
Monitor the delivery by service providers and engage where necessary.
 
Parking Space Management
Approve parking requests and escalate the manager where necessary.
Quality assure and provide secondary audit on the allocated parking and ensure compliance.
Provide supervisory support to office churning and provide guidance.
 
Office Accounts
Keep and maintain record of all FM accounts.
 Monitor contracts or purchasing orders for service delivery.
Submit verified accounts for payment.
Reconcile accounts monthly.
 
Reporting
Contribute to the preparation and submission of regulation reports.
Report regularly and periodically perform necessary submissions as and when required to provide progress updates and/or inform management decisions.
 
Stakeholder Management
Proactive and progressive relationships with key stakeholders.
Deal with inquiries and requests for information from both internal and external stakeholders.
Aid in the maintenance of relationships with vendors, service providers or procurement teams and ensure that all relevant procured items are invoiced and paid on time.
 
People Management
Ensure that good employee relations are maintained.
Provide ongoing operational support to employees.
 
Qualifications and Experience
Bachelor’s Degree/ Advanced Diploma in Facilities Management related qualification.
Drivers License.
Relevant 4 years’ experience in Facilities related environment of which 1 year must have been on supervisory level.
 
NB: “RAF offers Total Employment Cost packages with no additional contributions from the Employer, successful candidates are required to structure their packages in a manner that will suit their needs”.
 
The Road Accident Fund subscribes to the principles of employment equity and preference will be given to People with Disabilities.
Applicants who have not received any correspondence from us within six weeks from the closing date can consider themselves unsuccessful
Security Vetting shall be conducted on all prospective employees
It is the applicants’ responsibility to have foreign qualification evaluated by the South African Qualification Authority (SAQA) and to provide proof of such evaluation.
 
APPLY NOW »`],postedDate:"30/9/2024",iframe:"",uuid:"pae52f762-c81f-4392-9aef-f7cca6cf867e"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/transnet-logo_orig.jpeg",href:"https://www.govpage.co.za/transnet-vacancies-blog/transnet-vacancies5730988",title:"TRANSNET VACANCIES",content:[` 
TRANSNET
 `,` 
 
 
AIRCRAFT MAINTENANCE ENGINEER
Operating Division: Transnet NPA
Employee Group: Permanent
Department: NGQ, Aviation Operations, DNR
Location: Richards Bay
Reporting To: Senior Aircraft Maintenance Engineer
Grade: AS1
Reference: req2233
 
The closing date is on 10/10/2024. It is the responsibility of the applicant to ensure that HR has received the application before the closing date of the advertisement.
 
Position Purpose
Responsible for performing all technical maintenance activities as determined in the Maintenance Schedule and recording of all discrepancies identified during the required inspection operations. Certifying maintenance release of all technical work when authorised. Ensuring the provision of an airworthy aircraft, complying with manufacturers, regulatory authorities, and TNPA processes and procedures. Ensuring that high safety standards are adhered to at all times to mitigate risks associated with aviation operations.
 
Position Outputs
• Perform all mandatory periodic inspections (MPI) on TNPA aircraft as determined by local authority and equipment manufacturer.
• Rectify all technical defects in accordance with approved procedures.
• Ensure airworthiness and readiness of TNPA aircraft for efficient service delivery.
• Record all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken as a result of work accomplished.
• Maintain sound technical practices.
• Thorough knowledge and application of the requirements of the Manual of Procedures, CAR’s of 2011, Approved Schedules, Manufacturers Manuals Airworthiness Directives and Airworthiness Notices.
• Accurate trouble isolation of defects and rectification.
• Certify own work and as well as countersigning work of other engineers as well as junior engineers in training.
• Maintain vigilance at all times for discrepancies, which may occur during operation of aircraft and rectify them correctly in the shortest possible time.
• Hold current AME license with ratings applicable to TNPA aircraft.
• Ensure that TNPA aircraft have valid and correct technical documentation at all times.
• Maintain sound technical practices at all times and adhere to airworthiness codes.
• Log all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken and work accomplished.
• Ensure optimum ground support for TNPA aircraft.
• Carry out pre-flight and after-flight inspections on every flight mission.
 
Qualifications and Experience
• Hold a valid Aircraft Maintenance Engineer’s license (AME) rated on rotorcraft. • Rotorcraft general and turbine engine certification. • Trade certification. • 3 years aircraft maintenance experience. • AME rating(s) on twin-turbine helicopters will be an added advantage. • Management qualification will be an added advantage.
 
Competencies
Knowledge required: • Aviation rules and safety guidelines. • Helicopter operating procedures & systems. • Public safety & security. • Transportation systems & procedures. • Aircraft systems, engines & airframes. • Port rules. • Customer & personal service. • English language proficiency. • Mathematical applications. • Computers & electronic applications. • Flight theory & engineering practices. Skills Required: • Good communication. • Time management. • Rapid judgement & decision making. • Operational control. • Active listening. • Technical trouble isolation & rectification. • Vigilance. • Accuracy. • Working with complex machines, tools & devices. • Social perceptiveness/diversity management. Attributes Required: • Decision making • Multi-tasking • Meticulous • Accuracy • Good communication • Teamwork
 
Equity Statement
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation/Operating Division.
 
APPLY NOW
 
 
 
 
 
 `,` 
 
 
 
 
 
TRAINEE TRAIN ASSISTANT
Operating Division: Transnet Freight Rail
Employee Group: Trainee
Department: OP-COR-EXEC-TCM-Heavy Haul A-VYD
Location: Vryheid
Reporting To: Section Manager: Train Traffic
Grade: SSTP
Reference: req2232
 
The closing date is on 08/10/2024. It is the responsibility of the applicant to ensure that HR has received the application before the closing date of the advertisement.
 
Position Purpose
• A
Trainee Train Assistant will be required to undergo module training, conduct
and successfully complete the required modules in Train Assistant-Initial
Course and practical training as to be qualified and certified as a Train
Assistant.
 
Position Outputs
"• Attend and successfully complete a theoretical Training Program within the required time frame • Develop competency via formal learning as to perform within a operational environment and operate equipment as assigned • Safely and efficiently accomplish work assignments and goals that are in line with the Training Program, company's strategies and vision. • Maintain comprehensive records (portfolio of evidence) of all theoretical and practical training experience for use in progressing. • Execute trainee Train Assistant duties as prescribed by TFR"
 
Qualifications and Experience
• Grade 12 with pure Mathematics and/or Physical Science Functional Training • Be prepared to successfully undergo Train Assistant duties (theoretical and practical) so as to be certified to work independently as a Train Assistant. Other Requirements • Be prepared to undergo periodic medical surveillance and safety behavioral risk assessments during the selection process and every 12 months • Physical hearing, vision, mental, fitness (to be verified through medical tests and related safety behavioural risk assessments) • The operator shall not allow employees younger than 21 years of age to undertake train driver or train control duties. (SANS 3000, par 6.2.6.8) The following minimum Trainee pre-requisite: • The candidate should be a minimum of 1.6 meters tall • Psychomotor ability (to be assessed through Vienna Testing System (VTS) standard) • Ability to carry heavy objects
 
Competencies
Knowledge • Various communication systems • Depot layout • Locomotive classes • Locomotive equipment • Route/road • Sections/stations and sidings • Signing on duty procedures • Train working rules • Trip report • Yard and siding layout • Knowledge of general TFR policies • Shunting procedures • Locomotive classes and their hauling capacities, constraints on the particular territory • Health and Safety Act 85 • First aid • Basic conditions of employment act (BCEA) • SANS 3004 (Human factors) • HC policies and procedures • Train service/ITP • Train workings • Substance Abuse policy and procedures • Locomotive equipment • Route/road • Sections/stations and sidings • Signing on duty procedures • Train working rules • Trip report • Yard and siding layout • Knowledge of general TFR policies • Shunting procedures • Locomotive classes and their hauling capacities, constraints on the particular territory • Health and Safety Act 85 • First aid • Basic conditions of employment act (BCEA) • SANS 3004 (Human factors) • HC policies and procedures • Train service/ITP • Train workings • Substance Abuse policy and procedures Attributes • Stress handling • Self-management • Safety conscious • Punctual • Willing to work shifts • Results orientated “NB: The candidate must meet the minimum inherent health requirements of the job”
 
Equity Statement
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation/Operating Division.
 
APPLY NOW
 
 
 
 
 `,` 
 
 
 
 
 
 
AIRCRAFT MAINTENANCE ENGINEER
Operating Division: Transnet NPA
Employee Group: Permanent
Department: NGQ, Aviation Operations, DNR
Location: Durban
Reporting To: Senior Aircraft Maintenance Engineer
Grade: AS1
Reference: req2225
 
The closing date is on 10/10/2024. It is the responsibility of the applicant to ensure that HR has received the application before the closing date of the advertisement.
 
Position Purpose
Responsible for performing all technical maintenance activities as determined in the Maintenance Schedule and recording of all discrepancies identified during the required inspection operations. Certifying maintenance release of all technical work when authorised. Ensuring the provision of an airworthy aircraft, complying with manufacturers, regulatory authorities, and TNPA processes and procedures. Ensuring that high safety standards are adhered to at all times to mitigate risks associated with aviation operations.
 
Position Outputs
• Perform all mandatory periodic inspections (MPI) on TNPA aircraft as determined by local authority and equipment manufacturer.
• Rectify all technical defects in accordance with approved procedures.
• Ensure airworthiness and readiness of TNPA aircraft for efficient service delivery.
• Record all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken as a result of work accomplished.
• Maintain sound technical practices.
• Thorough knowledge and application of the requirements of the Manual of Procedures, CAR’s of 2011, Approved Schedules, Manufacturers Manuals Airworthiness Directives and Airworthiness Notices.
• Accurate trouble isolation of defects and rectification.
• Certify own work and as well as countersigning work of other engineers as well as junior engineers in training.
• Maintain vigilance at all times for discrepancies, which may occur during operation of aircraft and rectify them correctly in the shortest possible time.
• Hold current AME license with ratings applicable to TNPA aircraft.
• Ensure that TNPA aircraft have valid and correct technical documentation at all times.
• Maintain sound technical practices at all times and adhere to airworthiness codes.
• Log all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken and work accomplished.
• Ensure optimum ground support for TNPA aircraft.
• Carry out pre-flight and after-flight inspections on every flight mission.
 
Qualifications and Experience
• Hold a valid Aircraft Maintenance Engineer’s license (AME) rated on rotorcraft. • Rotorcraft general and turbine engine certification. • Trade certification. • 3 years aircraft maintenance experience. • AME rating(s) on twin-turbine helicopters will be an added advantage. • Management qualification will be an added advantage.
 
Competencies
Knowledge: • Aviation rules and safety guidelines. • Helicopter operating procedures & systems. • Public safety & security. • Transportation systems & procedures. • Aircraft systems, engines & airframes. • Port rules. • Customer & personal service. • English language proficiency. • Mathematical applications. • Computers & electronic applications. • Flight theory & engineering practices. Skills: • Good communication. • Time management. • Rapid judgement & decision making. • Operational control. • Active listening. • Technical trouble isolation & rectification. • Vigilance. • Accuracy. • Working with complex machines, tools & devices. • Social perceptiveness/diversity management. Attributes: • Decision making • Multi-tasking • Meticulous • Accuracy • Good communication • Teamwork
 
Equity Statement
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation/Operating Division.
 
APPLY NOW
 
 
 
 
 
 `,`AIRCRAFT MAINTENANCE ENGINEER: AVIONICS
Operating Division: Transnet NPA
Employee Group: Permanent
Department: NGQ, Aviation Maintenance, DNR
Location: Durban
Reporting To: Chief Aviation Engineer
Grade: G
Reference: req2224
 
The closing date is on 10/10/2024. It is the responsibility of the applicant to ensure that HR has received the application before the closing date of the advertisement.
 
Position Purpose
Responsible for performing all avionic & technical maintenance activities as determined in the Maintenance Schedule and recording of all discrepancies identified during the required inspection operations. Certifying maintenance release of all avionics work as per TNPA and regulator authorisations. Ensuring the provision of airworthy aircraft, complying with manufacturers, regulatory authorities, and TNPA processes and procedures.
 
Position Outputs
1. Perform all mandatory periodic inspections (MPI) on TNPA aircraft as determined by local authority and equipment manufacturer.
2. Rectify all technical defects in accordance with approved procedures.
3. Ensure airworthiness and readiness of TNPA aircraft for efficient service delivery.
4. Record all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken as a result of work accomplished.
5. Maintain sound technical practices.
6. Thorough knowledge and application of the requirements of the Manual of Procedures, CAR’s of 2011, Approved Schedules, Manufacturers Manuals Airworthiness Directives and Airworthiness Notices.
7. Accurate trouble isolation of defects and rectification
8. Certify own work and as well as countersigning work of other engineers as well as junior engineers in training.

9. Maintain vigilance at all times for discrepancies, which may occur during operation of aircraft and rectify them correctly in the shortest possible time.
10. Hold current AME license with ratings applicable to TNPA aircraft.
Maintenance Schedule and when necessary, record all discrepancies
identified during the required inspection operations.
11. Ensure that TNPA aircraft have valid and correct technical documentation at all times.
12. Maintain sound technical practices at all times and adhere to airworthiness codes.
13. Log all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken and work accomplished.
14. Ensure optimum ground support for TNPA aircraft.
15. Carry out pre-flight and after-flight inspections on every flight mission.
 
Qualifications and Experience
• Hold a valid AME license applicable to TNPA aircraft with W or X ratings. • Trade certificate. • Avionics general certificate. • Aircraft type course (s). • 3 years aircraft maintenance experience as a qualified avionics AME.
 
Competencies
Attributes: • Decision making • Multi-tasking • Meticulous • Accuracy • Good communication • Teamwork Knowledge: • Aviation rules and safety guidelines • Aircraft operation procedures & systems • Public safety & security • Transportation systems & procedures. • Avionic systems, aircraft instruments & aircraft electrical systems. • Port rules • Customer & personal service • English language proficiency • Mathematical applications • Computers & electronic applications. • Flight theory & engineering practices Skills: • Good communication • Time management • Quick judgement & decision making • Operational control • Active listening • Technical trouble isolation & • rectification • Vigilance • Accuracy • Working with complex machines, tools & devices. • Social perceptiveness
 
Equity Statement
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation/Operating Division.
 
APPLY NOW`,`AIRCRAFT MAINTENANCE ENGINEER: AVIONICS
Operating Division: Transnet NPA
Employee Group: Permanent
Department: NGQ, Aviation Operations, DNR
Location: Richards Bay
Reporting To: Senior Aircraft Maintenance Engineer
Grade: AS1
Reference: req2223
 
The closing date is on 10/10/2024. It is the responsibility of the applicant to ensure that HR has received the application before the closing date of the advertisement.
 
Position Purpose
ENTER JOB DESCRIPTION HERE
Position Outputs
• Perform all Avionics technical maintenance activities as determined in the Maintenance Schedule and when necessary, record all discrepancies identified during the required inspection operations.
• Signs maintenance release of all avionic work when authorised.
• Ensure provision of an airworthy aircraft, complying with manufacturers, regulatory authority, and TNPA standards to the customer.
• Maintain high technical standards and readiness of TNPA aircraft for efficient service delivery.
• Record all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken as a result of work accomplished.
• Maintain sound technical practices that include systematic troubleshooting to determine aircraft malfunctions and rectification.
• Perform all maintenance activities (including compass swings, radio, instrumentation, electrical cabling and modifications) as determined in the Approved Schedule and when necessary, record all discrepancies identified during the required inspection process for analysis.
• Thorough knowledge and application of the requirements of the Manual of Procedures, CAR’s of 2011, SAMSA regulations, Approved Schedules, Manufacturers Manuals Airworthiness Directives and Airworthiness Notices.
• Accurate isolation of defects and corrective action planning.
• Certify own work and as well as countersigning work of other engineers as well as junior engineers in training in accordance with operating procedures.
• Maintain vigilance at all times for discrepancies, which may occur during operation of aircraft and rectify them correctly in the shortest possible time.
• Hold current AME license with ratings applicable to TNPA aircraft, for installation of avionics equipment, functional testing and release to service.
• Ensure that TNPA aircraft have valid and correct technical documentation and functioning avionics systems at all times.
• Maintain sound technical practices at all times and adhere to airworthiness codes and safety standards.
• Log all activities being performed through the use of approved documentation in a clear and concise manner showing all actions taken and work accomplished.
• Use the correct tooling and equipment to perform required work operations on airborne navigation/communications systems, weather radar, autopilot, flight instrument systems and accessories.
• Carry out pre-flight and after-flight inspections on every flight mission.
• Assists with Mechanical work where necessary and ensure that TNPA aircraft are safe for operation at all times.
• Supervision, mentorship and endorsement of junior engineers’ logbooks.
 
Qualifications and Experience
• Hold a valid AME license applicable to TNPA aircraft with W or X ratings. • Trade certificate. • Avionics general certificate. • Aircraft type course (s). • 3 years aircraft maintenance experience as a qualified avionics AME.
 
Competencies
Knowledge: • Aviation rules and safety guidelines • Aircraft operation procedures & systems • Public safety & security • Transportation systems & procedures. • Avionic systems, aircraft instruments & aircraft electrical systems. • Port rules • Customer & personal service • English language proficiency • Mathematical applications • Computers & electronic applications. • Flight theory & engineering practices Skills: • Good communication • Time management • Quick judgement & decision making • Operational control • Active listening • Technical trouble isolation & • rectification • Vigilance • Accuracy • Working with complex machines, tools & devices. • Social perceptiveness Attributes: • Decision making • Multi-tasking • Meticulous • Accuracy • Good communication • Teamwork
 
Equity Statement
Preference will be given to suitably qualified Applicants who are members of the designated groups in line with the Employment Equity Plan and Targets of the Organisation/Operating Division.
 
APPLY NOW`],postedDate:"30/9/2024",iframe:"",uuid:"p92871867-6fa4-4078-b1c0-bfb0642bc74f"}],ne={"mpumalanga department of health vacancies":"https://www.govpage.co.za/mpumalanga-department-of-health-vacancies-blog/mpumalanga-department-of-health-vacancies9250955","city of ekurhuleni vacancies":"https://www.govpage.co.za/ekurhuleni-metropolitan-municipality-vacancies-blog/city-of-ekurhuleni-vacancies4234860","construction industry development board (cidb) vacancies":"https://www.govpage.co.za/construction-industry-development-board-cidb-vacancies-blog/construction-industry-development-board-cidb-vacancies1624920","eskom vacancies":"https://www.govpage.co.za/eskom-vacancies-blog/eskom-vacancies7191545","financial sector conduct authority (fsca) vacancies":"https://www.govpage.co.za/financial-sector-conduct-authority-fsca-vacancies-blog/financial-sector-conduct-authority-fsca-vacancies1850634","industrial development corporation (idc) vacancies":"https://www.govpage.co.za/industrial-development-corporation-idc-vacancies-blog/industrial-development-corporation-idc-vacancies9667406","national gambling board of south africa (ngb) vacancies":"https://www.govpage.co.za/national-gambling-board-of-south-africa-ngb-vacancies-blog/national-gambling-board-of-south-africa-ngb-vacancies5033794","national home builders registration council (nhbrc) vacancies":"https://www.govpage.co.za/national-home-builders-registration-council-nhbrc-vacancies-blog/national-home-builders-registration-council-nhbrc-vacancies9452390","national lotteries commission (nlc) vacancies":"https://www.govpage.co.za/national-lotteries-commission-nlc-vacancies-blog/national-lotteries-commission-nlc-vacancies8567283","proudly south african vacancies":"https://www.govpage.co.za/proudly-south-african-vacancies-blog/proudly-south-african-vacancies7700687","road accident fund (raf) vacancies":"https://www.govpage.co.za/road-accident-fund-raf-vacancies-blog/road-accident-fund-raf-vacancies1855440","transnet vacancies":"https://www.govpage.co.za/transnet-vacancies-blog/transnet-vacancies5730988"},ae={title:ee,blogPosts:te,departments:ne},oe="govpage-private-sector",ie=[],re={},se={},le={title:oe,blogPosts:ie,departments:re,businesses:se},A=10;function pe(){const[a,s]=m.useState(1),[o,r]=m.useState(null);m.useEffect(()=>{if(o){const u=document.querySelector(".modal a.btn.btn-primary");u&&u.remove()}},[o]);const t=Q(U,V,ae,W,$,le),i=Math.ceil(t.length/A),l=t.slice((a-1)*A,a*A),d=u=>{s(u)},y=u=>{r(u)},c=()=>{r(null)};return e.createElement("div",null,e.createElement(D,{paginatedData:l,onPostClick:y}),e.createElement(k,{currentPage:a,totalPages:i,onPageChange:d}),o&&e.createElement("div",{className:"modal",onClick:c},e.createElement("div",{className:"modal-content",onClick:u=>u.stopPropagation()},e.createElement("span",{className:"close",onClick:c},"×"),e.createElement("div",{className:"modal-body"},e.createElement("img",{src:o.imgSrc||o.iconLink,alt:"company logo"}),e.createElement("h2",null,o.title||o.jobTitle),e.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:o!=null&&o.details?o.details:L((o==null?void 0:o.content)||"")}}),o.apply&&e.createElement("a",{href:o==null?void 0:o.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),o.href&&e.createElement("a",{href:o==null?void 0:o.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}export{pe as default};
