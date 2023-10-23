export  function setupNavigation(element){
    element.innerHTML = `
        <img  loading="lazy" src="../../../public/assets/icons/2.jpg" alt="website logo" id="logo"/>
        <nav>    
            <ul>
                <li>
                    <a href="#headline" title="about"> about </a>
                </li>
                <li>
                    <a href="#contact" title="contact"> 
                    <img class="img-icon"  loading="lazy" src="../../../public/assets/contact.png" atl="contact image"/>
                    </a>
                </li>
                <li>
                    <button id="install-app" title="install PWA">
                        install
                    </button>
                </li>
                <li>
                <details>
                    <summary>vacancies</summary>
                    <a href="#pvt-job-board">Private</a>
                    <a href="#private-companies">Companies</a>
                    <a href="#public-sector">Public</a>
                </details>
                </li>
                
            </ul>
        </nav>`;
        
}