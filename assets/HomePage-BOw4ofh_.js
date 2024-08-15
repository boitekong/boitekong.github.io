import{r as c,P as d,R as n}from"./vendor-BSq_S6jz.js";import{u as y,c as w,f as A}from"./index-FUcZVG26.js";/* empty css             */const E=t=>{const[i,s]=c.useState("");return c.useEffect(()=>{t&&s(t)},[t]),i},g=({file:t})=>{const i=E(t),[s,e]=c.useState(!1),[r,a]=c.useState(!0);c.useEffect(()=>{const p=setTimeout(()=>{a(!1)},5e3);return()=>clearTimeout(p)},[]);const l=()=>e(!s);return n.createElement("div",{className:`pdf-viewer-container ${s?"full-view":"min-view"}`},r?n.createElement("div",{className:"placeholder pdf-viewer-container-placeholder"}):n.createElement(n.Fragment,null,n.createElement("button",{className:`toggle-view-btn ${s?"full-view-btn":"min-view-btn"}`,onClick:l},s?"Minimize View":"Full View"),n.createElement("iframe",{src:i,className:"pdf-viewer-iframe",title:"PDF Viewer"})))};g.propTypes={file:d.string.isRequired};function f({pdfFile:t,isLoaded:i}){return n.createElement("section",{id:"pdf-posts"},i?n.createElement("div",{className:"pdf-container"},n.createElement(g,{file:t})):n.createElement("div",{className:"placeholder pdf-container-placeholder"}))}f.propTypes={pdfFile:d.string.isRequired,isLoaded:d.bool.isRequired};function v({currentPage:t,totalPages:i,onPageChange:s}){const e=()=>{const a=[],l=Math.max(1,t-1),p=Math.min(i,l+3);for(let u=l;u<=p;u++)a.push(u);return a},r=a=>{s(a);const l=document.getElementById("posts");l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return n.createElement("div",{className:"pagination"},n.createElement("button",{onClick:()=>r(t-1),disabled:t===1},"Previous"),e().map(a=>n.createElement("button",{key:a,className:a===t?"active":"",onClick:()=>r(a)},a)),n.createElement("button",{onClick:()=>r(t+1),disabled:t===i},"Next"))}v.propTypes={currentPage:d.number.isRequired,totalPages:d.number.isRequired,onPageChange:d.func.isRequired};function C(t,i){return n.useMemo(()=>t.length===0?n.createElement(n.Fragment,null):n.createElement("section",null,t.map((e,r)=>n.createElement("article",{className:"job-post",key:r,onClick:()=>i(e)},n.createElement("div",{className:"company-logo"},n.createElement("img",{loading:"lazy",src:e.imgSrc||e.iconLink,alt:"company logo"})),n.createElement("p",{className:"title"},(e==null?void 0:e.title)||(e==null?void 0:e.jobTitle)),n.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:(e==null?void 0:e.details)||(e==null?void 0:e.content)}}),n.createElement("button",{className:"read-more-button",onClick:()=>i(e)},"read more")))),[t,i])}const S=["/assets/pdfs/1.pdf","/assets/pdfs/2.pdf","/assets/pdfs/3.pdf","/assets/pdfs/4.pdf","/assets/pdfs/5.pdf","/assets/pdfs/6.pdf","/assets/pdfs/7.pdf","/assets/pdfs/8.pdf","/assets/pdfs/9.pdf","/assets/pdfs/10.pdf","/assets/pdfs/11.pdf","/assets/pdfs/12.pdf","/assets/pdfs/13.pdf","/assets/pdfs/14.pdf","/assets/pdfs/15.pdf","/assets/pdfs/16.pdf","/assets/pdfs/17.pdf","/assets/pdfs/18.pdf","/assets/pdfs/19.pdf","/assets/pdfs/20.pdf","/assets/pdfs/21.pdf","/assets/pdfs/22.pdf","/assets/pdfs/23.pdf","/assets/pdfs/24.pdf","/assets/pdfs/25.pdf"],T={pdfUrls:S},k="/assets/agency_icons/minopex.png",R="minopex",P=[{jobTitle:"Engineering Artisan – Millwright (Shift)",publishedDate:"Published 13 August 2024",expiryDate:"Closing Date: 20 August 2024",location:"Remote",details:[`
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
    `],apply:"https://minopex.simplify.hr/Vacancy/Apply/i00aet",iconLink:"/assets/agency_icons/minopex.png",uuid:"pb7faa3d6-433b-4c75-9c13-ec703fa0ef51"}],M={iconLink:k,title:R,blogPosts:P},I="/assets/agency_icons/SA-Youth.png",N="SA-Youth",D=[{summary:`
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
    `,apply:"https://sayouth.mobi/View/SearchOpportunity?opportunity=MQA1ADMAMAAxADYAMQA&sourceParams=%7B%22st%22%3Anull,%22c%22%3A%22Jobs%22,%22sb%22%3Anull,%22dp%22%3A%220%22,%22sd%22%3A%22Any%22,%22sl%22%3A%22Tlhabane%20Unit%201,%20Tlhabane,%200299%22,%22sli%22%3A%222062972%22,%22ld%22%3A%225%22,%22pn%22%3A%222%22,%22ac%22%3A%22Revert%20to%20search%20results%22%7D",iconLink:"/assets/agency_icons/SA-Youth.png",uuid:"p746852bc-24a0-4a80-a0d8-537d6449afb8"}],O={iconLink:I,title:N,blogPosts:D},x="agency_icons/pro-personnel.jpg",q="pro-personnel",L=[{jobTitle:"Counter Salesman",startDate:"2024-07-29 - 2024-08-31",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Midrand",region:"Gauteng"},details:`As a counter salesman, you'll play a crucial role in our operations, assisting customers with their parts needs, providing expert advice, and ensuring they find exactly what they're looking for. If you have a passion for vehicles and a knack for customer service, we want to hear from you!Key Requirements:

Proven experience in truck and bus parts sales.
Expertise in Scania, Volvo, and Mercedes parts.
Strong communication and interpersonal skills.
Ability to thrive in a fast-paced environment.
Excellent customer service skills.

Join our team and become a valued member of our growing company. Apply now and take the next step in your career!Offering a Competitive salary, medical aid and pension`,contact:"Welma Helberg Nel",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002400-WHN",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p2d5dec08-1572-4551-abfa-e4558be53f70"},{jobTitle:"Admin Assistant",startDate:"2024-07-29 - 2024-08-28",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Rustenburg",region:"North West"},details:`Requirements

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

Working hours:&nbsp;&nbsp;Mond - Friday7:30 - 5pmEvery second Saturday &amp; Public Holidays 8- 13pm`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002505-R",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p61dd570e-368b-494b-8892-cb4526d63fc0"},{jobTitle:"Junior HR Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"Qualifications and Experience:* Appropriate qualification in Human Resource* Minimum of 5 years' experience as a HR generalist in a retail or similar environment* Proficient knowledge of employment laws such as BCEA, LRA, EE, SDA and Health and Safety regulationsPrimary Responsibilities:* Employee relations* Talent acquisition* Talent Management* Training and development* BBBEE &amp; employment equity* HR Administration",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002501-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p20ffc3ff-1937-4f22-9c11-46a91db024eb"},{jobTitle:"Assistant Software Development Manager (Information Technology)",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Ladybrand",region:"Freestate"},details:"Qualifications:* Appropriate bachelor's degree or similar tertiary qualification or experience in IT software development* Proficiency in MS Project or similar project management tools* Minimum of 10 years of experience in software development* Minimum of 5 years management experience regarding IT Software development projectsPrimary Responsibilities:* Instigation and management of IT Software development projects through the evaluation and monitoring of business priorities, the determination of IT priorities and allocation thereof to IT programmers, as well as the productive sand effective utilizations of IT resources* Co-ordinate and planning of IT software development projects, including the approval and finalization of technical specifications* Coordinate and monitoring of testing the implementation of IT Software development projects* Liaising with business regarding IT software projectsSkills:* Excellent communications and language skills in Afrikaans and English* Excellent organizational and project management skills* Experience regarding software development in COBOL and the IDM-i operating systems* Previous experience in a agri-business environemental would be beneficial* Excellent people skills and the ability to lead and manage a team and work together in a team* Strong analytical skills and the ability to function independently",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002496-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p31f4e928-8763-40ad-a747-1cf43ce221be"},{jobTitle:"IT Support Technician",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Bedfordview",region:"Gauteng"},details:"Qualifications:* Minimum of 4 years of practical experience in IT Support* Valid driver's license is a mandatory requirement* Relevant technical certification and qualifications* Willingness to travel occasiobnally to meet the needs of our diverse client base.Skills and Comptenencies:* Strong problem solving and troubleshooting skills* Excellent communication and interpersonal skills* Ability to work independently sand collaborator with a team* Familiarity with various operating systems and software applicationsResponsibilities:* Provide first level technical support to end users, ensuring prompt issue resolution* Install, configure and maintaine hardware and software components* Collabroate with the IT team to implement and support IT support* Troublshoot and resolve hardware, software and network issues* Ensure the smooth operation of computer systems within the organization",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002497-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p092ec9c0-992e-4bc7-9150-0e86e6043b61"},{jobTitle:"Grain Marketing Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Agricultural &amp; Farming",location:{city:", Bloemfontein",region:"Freestate"},details:`Primary Responsibility

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

Salary - R70 000 - R80 000 per month`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002498-D",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p75bc5b15-cecb-4786-a718-4c5866a59f38"},{jobTitle:"Grain Marketing Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Agricultural &amp; Farming",location:{city:", Bloemfontein",region:"Freestate"},details:"Qualifications:* Appropriate degree or diploma in Agriculture* 5 Years management experience* 5 years' experience in grain marketing* Registered safex trader with SAIFM* Valid driver's licenseSkills:* Excellent communications skills in Afrikaans and English* Computer literacy (MS Office)* Strong customer service orientation and excellent numerical skills* Strong sales and marketing skills* Strong negotiation skillsPrimary Responsibilities:* Marketing and management of grain against set targets* Management of staff* Negotiation with clients* Innovative marketing strategies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002499-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p97b4f243-9576-4271-b72a-c5c7df617a30"},{jobTitle:"Quality Assurance Generalist",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Services",location:{city:", Midrand",region:"Gauteng"},details:`Primary ResponsibilitiesMaintain The Quality Management System (QMS)

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

People with Disabilities will be prioritized`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002500-D",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p5467caf8-f561-4098-9e87-d5515a8f34a0"},{jobTitle:"Quality Assurance Generalist",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Services",location:{city:", Midrand",region:"Gauteng"},details:"Qualifications:* A national diploma or degree in Quality Management or a related qualification at an NQF 6/7 level.* 2 Years quality management or Quality Assurance and /or Business Process Redesign* 1 Year Risk Management (advantageous)* 1 Year aviation (advantageous)Primary Responsibilities:Maintain the Quality management System (QMS)* Develop and maintain QMS documents* Develop, implement and validate quality standards, processes and procedures withing the organization in accordance with the organizational QMS based on ISO 9001* Provide the organizations QMS training (induction and refresher) to all staff to increase awareness and understanding* Regular update the Bam Owl system with the latest audit informationMonitor Compliance with Quality Standards:* To audit business units' conformances* Auditing that all standards, processes and procedures have been documented and the adherences of all organizations staff to requirements* Tracking and following up on outstanding corrective actions*Submitting statical activity reportsPromote Continuous Improvement:* Develop implement and maintain a continuous improvement mechanism* Promote the quality management systemsDevelopment of QMS Templates* Develop organizational templates for policy, procedures work instructions (including TGM and MOP's) forms and checklistsRisk Identification:* Relevant risks are identified at an operational level* Report on identifies risks and inform EWRM function accordinglyDesign and Redesign of Processes (BPR)* Design and redesign of processes (BPR) within the organization to improve the organizations business process efficacy.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002502-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pfc3ffc85-5f93-454d-a4f4-fd7f7f36cdb1"},{jobTitle:"Junior HR Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"FMCG",location:{city:", Durban",region:"KwaZulu Natal"},details:"QUALIFICATIONS AND EXPERIENCE:Appropriate qualification in Human Resources.Minimum of 5 years’ experience as a HR Generalist in a retail or similar environment.Proficient knowledge of employment laws such as BCEA, LRA, EE, SDA, and Health and Safety regulationPRIMARY RESPONSIBILITIES:Employee RelationsProvide advice to line managers regarding the conduct and misconduct management processes.Provide advice to line managers and investigate/process disciplinary cases.Participate in consultations with organised labour.Coach Line Managers on effective delivery of Disciplinary hearings.Represent the organisation at CCMA (Conciliation and Arbitration).Talent AcquisitionEnsure that the Resourcing process is adhered to and jobs are timeously advertised and tracked on the&nbsp; Social Media channels externally and via hand delivered applications internally.Manage, coordinate and conduct interviews with Line Managers and make recommendations.Utilize various sourcing methods, including job boards, social media, and networking, to identify and engage with potential candidates.Evaluate candidates' skills, experience, and cultural fit during the interview process.Manage communication with candidates, ensuring a positive candidate experience.Assist with onboarding and orientation processes as needed.Talent ManagementCoach Line Managers on Performance Management Process and Talent &amp; Org Review process.Coordinate the performance appraisal documents and consolidate performance ratingsDrive the succession planning.Facilitate employment equity target setting and monitor profile.Organisational DesignLiaise with Line Managers to get rationale for proposed positions, draw up new proposed org and submit to HR Manager for sign off.Drive change management initiatives in line with the business and organisational objectivesTraining &amp; DevelopmentConduct training needs and skills gap analysis for business and assist with the compiling of training&nbsp;budget/plan.Plan, coordinate and organise relevant training initiativesFacilitate HR training including adhoc refresher for employees and Line Managers.Assist with reporting, analysis and submission of the Workplace Skills Plan and the Annual Training Report for relevant SETAFacilitate the implementation and tracking of all related Skills Development legislative requirements. This includes (but is not limited to) Skills Development Plans, Annual Training Reports, Learnerships.BBBEE &amp; Employment EquityDrawing quarterly reports and discuss at EE meeting also using the same reports of appointmentsAssist with the compilation of EE and BBBEE info for Skills DevelopmentSupport and facilitate BBBEE Skills Development initiativesHR AdministrationManage new employee on-boarding process.Manage terminations and exit interviews.Manage the capturing of HR information and data into the relevant systems and assure the integrity of the data.Provide advice and information to management and employees on HR policies and proceduresAdvise management on work matters, career development, personal problems and industrial matters.Counsel employees on policies and rules relating to employment policies and programmes, and on the&nbsp; company’s rules and regulations.Prepare and analyse HR reports for HR Manager",contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002503-R",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p9daf2064-8657-4efd-a0c8-7762061e3a21"},{jobTitle:"Key Accounts Manager",startDate:"2024-07-26 - 2024-08-25",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Midrand",region:"Gauteng"},details:"Qualifications and Experience:* Valid grade 12 Certificate* Diploma in Marketing or business-related field* Previous experience in Account Management or territory sales* Experience managing major national accounts at head office level* Excellent understanding of FTTx networks and products* Solid track record of meeting targets* Working in close collaboration with an international OEM (Product mix, strategy, sales process) such as CommScope or similar would-be advantage)Primary Responsibilities:* Developing and sustaining solid relationships with key clients that bring in the most revenue for the company*&nbsp; Addressing and resolving key clients' complaints* Acting as the main point of contact between key clients and internal teams* Communicating and collaborating with logistics departments to ensure that the key clients' needs are met* Compiling reports on account progress, goals and forecasts for account teams and stakeholders* Developing a thorough understanding of key clients' needs and requirements and preparing customized solutions* Negotiations contracts with key clients and meeting established deadlines for the fulfillment of each client's long term goals",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002504-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p6c099266-4e93-4423-95be-9c5d2eda3693"},{jobTitle:"Creative Analyst (Graphic Designer)",startDate:"2024-07-24 - 2024-08-23",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in Web development, graphic design or related field* Proficiency in Adobe creative suite (photoshop, Illustrator, In design)* Basic understanding of web development&nbsp; beneficial* Knowledge of SEO best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail orientated with s string focus on quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast phased environment* Project management skills and adaptability to changing project requirements",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002493-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p486fd550-d963-4c0b-b752-af6843743285"},{jobTitle:"Web Analyst (Web Developer)",startDate:"2024-07-24 - 2024-08-23",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Bachelor's degree in web development, graphic design or related field.* Proficiency in HTML, CSS, JavaScript, PHP, JSE, Jason, WordPress and SEO* Design/Creative experience - beneficial* Basic understanding of Adobe Creative suite (Photoshop, Illustrator, InDesign)* Ability to create wireframes, mockups and prototypes* Basic understanding of UX/UI principals and best practices* Strong analytical and problem-solving skills* Excellent communication and teamwork abilities* Detail-orientated with strong focus and quality and accuracy* Ability to manage multiple projects and meet deadlines in a fast-paced environment",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002494-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p63b7c762-1457-4913-bb46-cb0c5c0f4e43"},{jobTitle:"Application Developer",startDate:"2024-07-24 - 2024-08-23",vacancyType:"Permanent",jobSpecFields:"Information Technology",location:{city:", Sandton",region:"Gauteng"},details:"Requirements:* Proficiency in programming languages such as MS Mausi, Visual Studio, C Angular and React* Strong understanding of mobile and web application development* Ability to manage multiple projects simultaneously with effective project and time management skills.* Excellent problem-solving skills and attention to detail* Experience in creating visually appealing and user-friendly interfaces* Motivation to continuously learn and implement the latest software technologies",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002495-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pfcedf322-dd7c-44b3-b266-736841375bd7"},{jobTitle:"Internal Sales",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Rustenburg",region:"North West"},details:"Requirements:* Valid matric certificate* Excellent communications skills* Previous technical sales experience, to your advantage* Be able to start immediately* Have valid driver's license and own transport",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002490-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pd2443ef4-8eb5-4d9b-b3aa-7515b360e711"},{jobTitle:"Accountant",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Rustenburg",region:"North West"},details:"Qualifications &amp; Experience:* Bachelor's degree in accounting, finance or related field* Articles in financial accounting* Minimum 3-5 years of experience in accounting or financial management, preferably in the real estate or property management sector* Experience with budgeting, financial analysis and reporting* Proficiency in accounting software and MS ExcelSkills and Competencies:* Strong analytical and problem-solving skills* Excellent attention to detail and accuracy* Ability to work independently and collaboratively in a team environment* Effective communication and interpersonal skills* Proactive and adaptable to changing priorities* Knowledge of South African Real Estate regulations and compliance requirements* Position based in Rustenburg and may requires occasional travel to properties within portfolio* Have a valid driver's licenseResponsibilities:* Budget Management* Payment Allocations* 10-year maintenance plan* Levy increase* Financial Reporting* Audit Procedures* Compliance and regulations* Collaboration and communication",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002491-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pe400e076-c2cb-40be-a140-038c284eefd6"},{jobTitle:"Section Manager (U/G)",startDate:"2024-07-23 - 2024-08-22",vacancyType:"Permanent",jobSpecFields:"Mining",location:{city:", Rustenburg",region:"North West"},details:`Responsibilities:
Assist in controlling, managing, and directing underground mining operations per regulations.
Minimum Requirements:
Grade 12 or NQF 4 EquivalentMine Manager's Certificate of Competency3-5 years’ experience as a Mine Manager (MHSA 2.6.1 or 3.1 appointment)Degree or NQF 7 Equivalent in Mining Engineering
Preferred Qualifications:
Management Programme / MDP / MAP3-4 years Trackless Mining experience
Skills and Knowledge:
Strong interpersonal skillsKnowledge of HR systems and related legislationProficient in MS Office and SAP System
Physical/Legal Requirements:
Medical fitness certificateClear criminal recordValid driving license`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002492-R",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p5d3f2a71-e416-4022-9f31-fb73197222bf"},{jobTitle:"Real Estate Agent",startDate:"2024-07-19 - 2024-08-18",vacancyType:"Permanent",jobSpecFields:"Property &amp; Estates",location:{city:", Roodepoort",region:"Gauteng"},details:"Requirements:* Grade 12* Experience as a real estate agent&nbsp;* Proven track record of successful sales* Ability to work independent* Strong sales, negotiation and communication skills* MS Office familiarityThe successful candidate should have:* A valid fund certificate (FFC) as issued by PPRA*Access to Wi-Fi (teams)* Reliable own transport and valid driver's licenseMust be:* Well spoken* Friendly* Trustworthy* PunctualResponsibilities:* Performing comparative market analysis to estimate property values&nbsp;* Provide guidance and assist sellers and purchases in marketing and purchasing property for the right price under best terms* Determine clients' needs for financial abilities to propose solutions that suit them* Intermediate negotiation processes, consult clients on market conditions, prices, mortgages, legal requirements and related matters, ensuring a fair and honest dealing* Display and market property to potential purchases* Prepare and complete required documentation* Maintain and update listings of available properties* Cooperated with appraisers, escrow companies, lender and home inspectors.* Promote sales through advertisements, open houses and listing services* Remain knowledgeable about real estate market and best practices* Attend and arrange viewings for prospective purchasers* Keeping sellers informed regarding any queries and viewings* Reply to and follow up on correspondence and telephone enquiries&nbsp;* Source new business",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002488-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p11786ec6-7ad9-44ec-b28e-86eaf1327d82"},{jobTitle:"Real Estate Agents",startDate:"2024-07-19 - 2024-08-18",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Roodepoort",region:"Gauteng"},details:`Responsibilities

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

Salary - Commission based ONLY`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002489-D",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pf20d7b94-6b0f-49d6-b7b5-fe9c6522efdc"},{jobTitle:"Safety Officer",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"SHEQ",location:{city:", Boshoek",region:"North West"},details:"Requirements / Qualifications:* Must have 5 years working experience within the mining environment.* Comsoc 1 &amp; 2 essential, with all safety related certificates* Valid grade 12 certificate* Must have valid driver's license* No criminal record* Must be medically fit.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002483-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p52f56f5a-59a6-4f62-879b-dbee5475e9e4"},{jobTitle:"Mechanic",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Boshoek",region:"North West"},details:"Requirements / Qualifications:* Valid trade certificate* Must have 5 years working experience* Have a valid grade 12 certificate* Have valid driver's license* Mining experience essential* No criminal record",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002484-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p6c626b03-7175-4c1d-8d99-e0252929508f"},{jobTitle:"Electrician",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Boshoek",region:"North West"},details:"Requirement / Qualifications:* Must have 5 years working experience as an Electrician* Valid trade certificate essential* Previous mining experience* No criminal record* Valid grade 12 certificate* Valid driver's license",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002485-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p32b42ed2-894c-4d90-8a01-ed8496fb61d7"},{jobTitle:"Boilermaker",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Boshoek",region:"North West"},details:"Requirements / Qualifications:* Must have 5 years working experience as a Boilermaker* Previous mining experience essential* No criminal record* Valid driver's license* Valid grade 12 certificate* Valid drivers license",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002486-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p93205cb1-4a39-4ccd-a05a-81830c4695cd"},{jobTitle:"RESEARCH PHYSICIAN / PRINCIPAL INVESTIGATOR",startDate:"2024-07-15 - 2024-08-14",vacancyType:"Permanent",jobSpecFields:"Medical",location:{city:", Brits",region:"North West"},details:`Required / Expected Competencies:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002487-R",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pbb060b78-b786-4a45-a750-012dac6297e6"},{jobTitle:"Area Supervisor",startDate:"2024-07-11 - 2024-08-10",vacancyType:"Permanent",jobSpecFields:"Mining",location:{city:", Rustenburg",region:"North West"},details:"Duties would be but not limited to:* Managing teams and operations* Responsible for shift scheduling &amp; ensuring all employees are on site.* Administration duties will be required* Problem solverQualifications &amp; Requirements must be met:* Have a valid driver* Computer literate in MS Word &amp; Excel* Grade 12",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002481-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pdf08869c-b99b-46a0-9941-6ead78640706"},{jobTitle:"Area Supervisor",startDate:"2024-07-11 - 2024-08-10",vacancyType:"Permanent",jobSpecFields:"Other",location:{city:", Carletonville",region:"Gauteng"},details:`Duties

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

Salary - R7000`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002482-D",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p64cf6f6d-ffb7-4895-86e2-8d7f43c8724c"},{jobTitle:"Generator Service / Technical Sales",startDate:"2024-07-05 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications required:* Matric with Mathematics C symbol or higher (NO LITERACY)Experience:* 0-5 Years related working experience* Solar, electrical, mechanical or technical interest, would be an advantageComputer Literacy:* MS Office - Excel Advanced (will be tested)Responsibilities:* Present and sell products using solid arguments to perspective and existing customers* Supplying customer with support* Establish, develop and maintain positive business and customer relationships* Prioritize and or escalate client questions and concerns to increase client satisfaction* Supply management with reports on customer needs, problems, interests, completive activities and potential for new products and services* Meet or exceed monthly sales targets / goals",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002479-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pcf78d0f6-a41b-42bd-a558-a07757c98c9f"},{jobTitle:"Sales Representative",startDate:"2024-07-05 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Middelburg",region:"Mpumalanga"},details:`Required Education / Experience / Skills:

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
`,contact:"Welma",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002480-R",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p5059ab3f-cffd-4ed5-b617-c8b71df2ac2b"},{jobTitle:"Generator Service / Technical Sales",startDate:"2024-07-04 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"The position is based both in the Lanseria and Brits area.The following is needed to apply for the position:Qualifications required:* Matric with Mathematics C Symbol or Higher a MUST HAVE (must send through with CV)Experience Required:* 0-5 years related working experience within the field.* Solar, electrical, mechanical or technical interestComputer Literacy:* MS Office - EXCEL ADVANCED A MUST (will be tested)Responsibilities &amp; Duties:* Present and sell products using solid arguments to prospective and existing customers* Supplying customer with support when necessary* Establish, develop and maintain positive business and customer relationshipsPerform cost benefit and needs analysis of new existing customers* Develop strategies for more effective sales and products* Supply management with reports on customer needs, problems, interests, competitive activities and potential for new products and servicesMeet or exceed monthly sales targets.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002240-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p8d3168b6-cbeb-47ad-892a-d4694b441607"},{jobTitle:"Management Trainee",startDate:"2024-07-04 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications and some experience required:* Matric normal mathematics with C Symbol or higher (NO LITERACY)&nbsp;Experience:* 0-5 years' experienceComputer Literacy:* MS Office package* Excel essential (will be tested)Competencies Required:* High IQ and EQ* Hardworking&nbsp;* Attention to detail* Able to work well under pressure* Common sense* Honest and trustworthy* Good time management skills* Excellent people skills",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002433-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pc96cfc1a-28d6-4eb6-88a6-ff74c3646328"},{jobTitle:"Counter / Part Sales",startDate:"2024-07-04 - 2024-08-04",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications Required:* Matric with Mathematics, C symbol and higher (NO Math's Literacy)Experience required:* 0-5 years related working experience* Solar, electrical, mechanical or technical interestComputer Literacy:* MS Office - Excel AdvancedResponsibilities:* Greeting customers as when they enter the store* Understanding customer requirements* Participating in accepting shipments od parts, sending orders to customers, and documenting all inventory that enters and exits* Offering excellent customer service* Updating customer information",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002473-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p214c40d0-298d-4462-9c4d-dd362b73a2d4"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Middelburg",region:"Mpumalanga"},details:"Required Education / Experience / Skills:* Minimum qualification - matric - technical and or mechanical qualification will be an added advantage.* Must have 3 years' experience in the electrical / mechanical sector* Good solid understanding of the mining industry* Demonstrative aptitude for problem solving* Ability to determine solutions for customers&nbsp;* Must be results orientated and able to work both independently and within a team* Must possess excellent verbal and written communication skills* Proficiency in using MS Office Suite applications* Must have market knowledge of the market and customer base in the identified area* Must have a valid driver's licenseMajor Responsibilities (not limited to):* Establish, develop and maintain business relationships with current customers and prospective customers in the assigned territory/market segments, to generate new business for the organization's products/services.* Research of market segments &amp; territories in a view to identify prospective customer and their potential*Coordinate sales effort with marketing, sales management, accounting, logistics and technical service groups* Participate in trade shows and conventions* Follow up of all enquiries and quotations.",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002474-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pc61b076b-d4df-4e71-b37a-6eafa4d5aae9"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Meadowdale",region:"Gauteng"},details:"Required Education / Experience / Skills:* Minimum qualification - matric - technical and or mechanical qualification is seen as an added advantage.* Must possess 3 years' experience in the electrical/mechanical sector.* Understanding of the OEM market will be seen as a added advantage* Demonstrate aptitude for problem solving* Ability to determine solutions for customers* Must be results orientated and able to work both independently and within a team* Have excellent verbal and written communications skills* MS Office suite applications experience* Must have market knowledge* Have a valid driver's licenseTravel:* Extensive travel will be required* Flexible hours&nbsp;Responsibilities (not limited to):* Plan and organize personalize sales strategy* Keep abreast of product applications, technical services, market conditions, completive activities, advertising and promotional trends* Participate in trade shows and conventions* Keeping in contact with management and keep them inform of all aspects of the company",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002477-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p3db42033-7b56-43fd-a164-4e83db4f7c67"},{jobTitle:"Receptionist",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Admin, Office &amp; Support",location:{city:", Middelburg",region:"Mpumalanga"},details:"The suitable candidate needs to have the following requirements:Qualifications:* Grade 12* Studying towards accounting degree would be to your advantage.* Drivers license essentialDuties and experience would be but not limited to the following:* SARS, WCC, UIF follow ups* Registrations and deregistration's* Typing of formal letters, answering the phone* Basic admin duties like, filing, ordering monthly office supplies etc.* Corresponding with clients in a professional manner, and nay other related duties given by management&nbsp;Computer programmes:* Pastel* MS Word* MS Excel* Vanilla Payroll",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002478-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p3b0fa968-c8fd-4d65-bd3f-b76b8a89b725"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Germiston",region:"Gauteng"},details:`Major Responsibilities:

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002475-D",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pa7da6cd9-dc38-4d0c-824d-6aa148fcd216"},{jobTitle:"Sales Representative",startDate:"2024-07-04 - 2024-08-03",vacancyType:"Permanent",jobSpecFields:"Sales",location:{city:", Middelburg",region:"Mpumalanga"},details:`Major Responsibilities:

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
`,contact:"Dianne",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002476-D",iconLink:"agency_icons/pro-personnel.jpg",uuid:"pbd0d922c-34e8-44da-bfd9-00a52afac260"},{jobTitle:"Graduate Trainee",startDate:"2024-07-02 - 2024-08-02",vacancyType:"Permanent",jobSpecFields:"Engineering &amp; Technical",location:{city:", Lanseria / Brits",region:"Gauteng"},details:"Qualifications:* Matric with Normal Mathematics C Symbol or higher (No Math's Literacy)Experience Required:* 0-5 years working experienceComputer Literacy:* MS Office package* Excel advanced (will be tested)Competencies Required:* High IQ and EQ* Hard working with good ethic* Attention to detail and high level of accuracy* Able to work under extreme pressure* Able to use imitative* Common sense* Honest and trustworthy* Good time management skills* Excellent people skills* Logical reasoning",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002434-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"peb113a70-396f-44fa-b700-868214f2a55d"},{jobTitle:"Financial Manager",startDate:"2024-06-11 - 2024-08-11",vacancyType:"Permanent",jobSpecFields:"Finance",location:{city:", Middelburg",region:"Mpumalanga"},details:"Qualifications:* Accounting BCom Financial Management* Grade 12 certificatePrevious experience and qualifications needed:* Previous financial management experience essential.* Experience in financial planning, evaluate figures, prepare business activity reports.* In depth knowledge of business admin* Strong mathematical skills* Plan finances, predict future finances* Advise on financial activities* Oversee operations of finance department* Be in possession of a valid driver's licenseComputer programmes:* Pastel* MS Excel* MS Word&nbsp;* Powerpoint* VIP Payroll",contact:"Yolanda Day-Garden",apply:"https://webapp.placementpartner.com/wi/application_form.php?id=propersonnel&amp;vacancy_ref=RTB002449-YDG",iconLink:"agency_icons/pro-personnel.jpg",uuid:"p9687f1b2-c2e1-487a-a740-5e72419c1efd"}],j={iconLink:x,title:q,blogPosts:L},B="govpage-public-sector",F=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/kwazulu-natal-transport_orig.jpg",href:"https://www.govpage.co.za/kwazulu-natal-transport-vacancies-blog/kwazulu-natal-department-of-transport-vacancies5835135",title:"KWAZULU NATAL DEPARTMENT OF TRANSPORT VACANCIES",content:[],postedDate:"14/8/2024",iframe:"https://drive.google.com/file/d/1mEoXS1Da0YaUhPInIxtw2K1pPgrwyhZH/preview",uuid:"pe166fb3b-f0a6-4012-92f2-c573b737cc75"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/north-west-department-of-health_orig.png",href:"https://www.govpage.co.za/north-west-health-vacancies-blog/north-west-department-of-health-vacancies6964746",title:"NORTH WEST DEPARTMENT OF HEALTH VACANCIES",content:[` 
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
 
PLEASE APPLY HERE`],postedDate:"14/8/2024",iframe:"",uuid:"p257a50ec-bf71-4c0e-b89a-38b3f6693469"}],G={"kwazulu natal department of transport vacancies":"https://www.govpage.co.za/kwazulu-natal-transport-vacancies-blog/kwazulu-natal-department-of-transport-vacancies5835135","north west department of health vacancies":"https://www.govpage.co.za/north-west-health-vacancies-blog/north-west-department-of-health-vacancies6964746","city of johannesburg vacancies":"https://www.govpage.co.za/city-of-johannesburg-metropolitan-municipality-vacancies-blog/city-of-johannesburg-vacancies5914232","city of tshwane vacancies":"https://www.govpage.co.za/city-of-tshwane-metropolitan-municipality-vacancies-blog/city-of-tshwane-vacancies5963644","national credit regulator (ncr) vacancies":"https://www.govpage.co.za/national-credit-regulator-ncr-vacancies-blog/national-credit-regulator-ncr-vacancies7860878","eastern cape development corporation (ecdc) vacancies":"https://www.govpage.co.za/eastern-cape-development-corporation-ecdc-vacancies-blog/eastern-cape-development-corporation-ecdc-vacancies6015075","eastern cape liquor board (eclb) vacancies":"https://www.govpage.co.za/eastern-cape-liquor-board-eclb-vacancies-blog/eastern-cape-liquor-board-eclb-vacancies1446823","mpumalanga economic growth agency (mega) vacancies":"https://www.govpage.co.za/mpumalanga-economic-growth-agency-mega-vacancies-blog/mpumalanga-economic-growth-agency-mega-vacancies2454279","trade & investment kwazulu-natal (tikzn) vacancies":"https://www.govpage.co.za/trade-and-investment-kwazulu-natal-tikzn-vacancies-blog/trade-investment-kwazulu-natal-tikzn-vacancies8533691","johannesburg water vacancies":"https://www.govpage.co.za/johannesburg-water-vacancies-blog/johannesburg-water-vacancies8307651","agricultural sector education training authority (agriseta) vacancies":"https://www.govpage.co.za/agricultural-sector-education-training-authority-agriseta-vacancies-blog/agricultural-sector-education-training-authority-agriseta-vacancies5923732","financial and accounting services sector education and training authority (fasset) vacancies":"https://www.govpage.co.za/agricultural-sector-education-training-authority-agriseta-vacancies-blog/agricultural-sector-education-training-authority-agriseta-vacancies5923732","health and welfare sector education and training authority (hwseta) vacancies":"https://www.govpage.co.za/health-and-welfare-sector-education-and-training-authority-hwseta-vacancies-blog/health-and-welfare-sector-education-and-training-authority-hwseta-vacancies7401869","safety and security, sector education & training authority (sasseta) vacancies":"https://www.govpage.co.za/safety-and-security-sector-education-training-authority-sasseta-vacancies-blog/safety-and-security-sector-education-training-authority-sasseta-vacancies7416213"},H={title:B,blogPosts:F,departments:G},U="govpage-private-sector",z=[{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/afrimat_orig.png",href:"https://www.govpage.co.za/private-sector-jobs/afrimat-is-hiring1467002",title:"AFRIMAT IS HIRING",content:[],postedDate:"15/8/2024",iframe:"",uuid:"gov-0a5ae429-10b3-4cb7-a608-165ab69fd2c2"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/old-khaki_orig.png",href:"https://www.govpage.co.za/private-sector-jobs/old-khakhi-is-hiring",title:"OLD KHAKHI IS HIRING",content:[],postedDate:"5/8/2024",iframe:"",uuid:"gov-c50751ba-8e72-4bcc-bffe-693c85fdf26f"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/four-seasons-hotels-resorts_orig.png",href:"https://www.govpage.co.za/private-sector-jobs/four-seasons-hotel-is-hiring",title:"FOUR SEASONS HOTEL IS HIRING",content:[],postedDate:"5/8/2024",iframe:"",uuid:"gov-b0c34867-bff1-4898-bb77-8557e93839b1"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/271850758-950050092318914-1039599084442007153-n.jpg?1721709808",href:"https://www.govpage.co.za/private-sector-jobs/pedros-is-hiring",title:"PEDROS IS HIRING",content:[],postedDate:"23/7/2024",iframe:"",uuid:"gov-447130d9-83b0-42dd-8764-a229eed0b7d6"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/screenshot-2024-07-22-at-04-45-17_orig.png",href:"https://www.govpage.co.za/private-sector-jobs/sbv-is-hiring",title:"SBV IS HIRING",content:[],postedDate:"22/7/2024",iframe:"",uuid:"gov-05036235-e250-42ef-8a0a-60ebbea291b3"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/woolworths_orig.jpg",href:"https://www.govpage.co.za/private-sector-jobs/woolworths-is-hiring4187031",title:"WOOLWORTHS IS HIRING",content:[],postedDate:"18/7/2024",iframe:"",uuid:"gov-851d4eb6-ea91-49bd-bf24-f2bae0a9bc81"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/vw-group-sa_orig.gif",href:"https://www.govpage.co.za/private-sector-jobs/volkswagen-group-is-hiring",title:"VOLKSWAGEN GROUP IS HIRING",content:[],postedDate:"15/7/2024",iframe:"",uuid:"gov-eab96761-2356-44c9-8ddf-c54307ca7e13"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/published/gold-fields-logo-svg.png?1716762063",href:"https://www.govpage.co.za/private-sector-jobs/gold-fields-is-hiring",title:"GOLD FIELDS IS HIRING",content:[],postedDate:"27/5/2024",iframe:"",uuid:"gov-91b15c8d-942f-4b5f-a856-9144b06c403a"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/glencore_orig.jpg",href:"https://www.govpage.co.za/private-sector-jobs/glencore-is-hiring5185584",title:"GLENCORE IS HIRING",content:[],postedDate:"23/5/2024",iframe:"",uuid:"gov-91058894-151f-4217-8c94-910f3f5c9e7d"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/de-beers-group_orig.png",href:"https://www.govpage.co.za/private-sector-jobs/de-beers-group-is-hiring6012171",title:"DE BEERS GROUP IS HIRING",content:[],postedDate:"8/7/2024",iframe:"",uuid:"gov-cc1eb1a0-9a4a-4801-b822-fc6fb19ee771"},{imgSrc:"https://www.govpage.co.za/uploads/2/4/0/5/24052997/clicks-group-limited_orig.png",href:"https://www.govpage.co.za/private-sector-jobs/clicks-group-limited-is-hiring5039000",title:"CLICKS GROUP LIMITED IS HIRING",content:[],postedDate:"4/7/2024",iframe:"",uuid:"gov-b5b9f5a7-0f2e-42f8-84f4-f450b8033bf7"}],W={},Y={"afrimat is hiring":"https://www.govpage.co.za/private-sector-jobs/afrimat-is-hiring1467002","old khakhi is hiring":"https://www.govpage.co.za/private-sector-jobs/old-khakhi-is-hiring","four seasons hotel is hiring":"https://www.govpage.co.za/private-sector-jobs/four-seasons-hotel-is-hiring","pedros is hiring":"https://www.govpage.co.za/private-sector-jobs/pedros-is-hiring","sbv is hiring":"https://www.govpage.co.za/private-sector-jobs/sbv-is-hiring","woolworths is hiring":"https://www.govpage.co.za/private-sector-jobs/woolworths-is-hiring4187031","volkswagen group is hiring":"https://www.govpage.co.za/private-sector-jobs/volkswagen-group-is-hiring","gold fields is hiring":"https://www.govpage.co.za/private-sector-jobs/gold-fields-is-hiring","glencore is hiring":"https://www.govpage.co.za/private-sector-jobs/glencore-is-hiring5185584","de beers group is hiring":"https://www.govpage.co.za/private-sector-jobs/de-beers-group-is-hiring6012171","clicks group limited is hiring":"https://www.govpage.co.za/private-sector-jobs/clicks-group-limited-is-hiring5039000","netcare is hiring":"https://www.govpage.co.za/private-sector-jobs/netcare-is-hiring8517825","tsogo sun is hiring":"https://www.govpage.co.za/private-sector-jobs/june-21st-2024","heineken beverages is hiring":"https://www.govpage.co.za/private-sector-jobs/heineken-beverages-is-hiring6377091","omoda is hiring":"https://www.govpage.co.za/private-sector-jobs/omoda-is-hiring","tiger brands is hiring":"https://www.govpage.co.za/private-sector-jobs/tiger-brands-is-hiring8362853","old mutual is hiring":"https://www.govpage.co.za/private-sector-jobs/old-mutual-is-hiring4538730","unilever is hiring":"https://www.govpage.co.za/private-sector-jobs/unilever-is-hiring4756500","takealot is hiring":"https://www.govpage.co.za/private-sector-jobs/takealot-is-hiring8119691","nestle is hiring":"https://www.govpage.co.za/private-sector-jobs/nestle-is-hiring2197750","bat south africa is hiring":"https://www.govpage.co.za/private-sector-jobs/bat-south-africa-is-hiring6247942","spitz is hiring":"https://www.govpage.co.za/private-sector-jobs/spitz-is-hiring5937277","discovery is hiring":"https://www.govpage.co.za/private-sector-jobs/discovery-is-hiring8553767"},_={title:U,blogPosts:z,departments:W,businesses:Y},m=6;function Z(){const[t,i]=c.useState(1),[s]=y(5e3),[e,r]=c.useState(null);c.useEffect(()=>{if(e){const o=document.querySelector(".modal a.btn.btn-primary");o&&o.remove()}},[e]);const a=w(T,M,O,j,H,_),l=Math.ceil(a.length/m),p=a.slice((t-1)*m,t*m),u=o=>{i(o)},b=o=>{r(o)},h=()=>{r(null)};return n.createElement("div",{id:"posts"},p.map(o=>o.type==="pdf"?n.createElement(f,{key:o.id,pdfFile:o.url,isLoaded:s}):n.createElement(J,{key:o.id,post:o,onPostClick:b})),n.createElement(v,{currentPage:t,totalPages:l,onPageChange:u}),e&&n.createElement("div",{className:"modal",onClick:h},n.createElement("div",{className:"modal-content",onClick:o=>o.stopPropagation()},n.createElement("span",{className:"close",onClick:h},"×"),n.createElement("div",{className:"modal-body"},n.createElement("img",{src:e.imgSrc||e.iconLink,alt:"company logo"}),n.createElement("h2",null,e.title||e.jobTitle),n.createElement("div",{className:"details",dangerouslySetInnerHTML:{__html:e!=null&&e.details?e.details:A((e==null?void 0:e.content)||"")}}),e.apply&&n.createElement("a",{href:e==null?void 0:e.apply,target:"_blank",rel:"noopener noreferrer",className:"apply"},"Apply"),e.href&&n.createElement("a",{href:e==null?void 0:e.href,target:"_blank",rel:"noopener noreferrer",className:"source-btn"},"Original Source")))))}function J({post:t,onPostClick:i}){return C([t],i)}export{Z as default};
