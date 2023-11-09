import { publicJobs } from "../data.js";

export function setupPubliDepartments(element) {
  const h = document.createElement("h3");
  h.textContent = "Government Departments / Entites with Vacancies";

  element.appendChild(h);

  const elems = publicJobs()["blogPosts"].map((p) => {
    const title = p["title"].replace(/is hiring/gi, ""),
      div = document.createElement("div");

    div.classList.add("job-post");
    div.setAttribute("title", title);

    div.innerHTML = `
        <div class="company-logo">
             <img loading="lazy" src=${p["imgSrc"]} alt="company logo" />
        </div>
        <p class="title">${title}</p>
        `;

    const dialog = document.getElementById("dialog");
    div.addEventListener("click", (e) => {
      dialog.showModal();

      const article = document.getElementById("info");
      article.innerHTML = `
   <img loading="lazy" src=${p.imgSrc} alt=${p.title} title=${title}/>
 
      <br/>
      <hr/>
      <br/>
      ${
        p.postedDate
          ? `<p class="start-date" style="width:${
              p.postedDate.length + 13
            }ch; padding:3px;">posted date: ${p.postedDate}</p>`
          : ""
      }
      <br/>
      <section class="details">
      ${
        p.content.length
          ? p.content.map((c) =>
              c.replaceAll(/\.(?=[A-Z0-9 ])/g, ".<br/><br/>")
            )
          : p.iframe
          ? ` <iframe id="documentFrame" src=${p.iframe} >
          <p  class="details" >&#128542; sorry  Document won't load, you can access it directly here (<a href=${p.href} target="_blank">${p.href}</a>) or click the source button below.</p>
        </iframe>`
          : `<p  class="details">&#128542; sorry  Document won't load, you can access it directly here (<a href=${p.href} target="_blank">${p.href}</a>) or click the source button below.</p>`
      }
      </section>
      <br/>
      <section class="options">
          <button id="share" class="apply share" title="share post with friends">
             <img loading="lazy" class="share-button img-icon" src="../../public/assets/share.png" atl="share image"/>
          </button>
        
          <a href=${p.href} target="_blank">
              <button class="source apply">
                source
              </button>
          </a>
      </section>
      <br/>
  `;
      const shareBtn = article.querySelector("#share");
      shareBtn.addEventListener("click", async () => {
        const shareData = {
          title,
          text: "available job vacancy, might be suitable for you!",
          url: p.href
        };
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.error(err);
        }
      });
    });
    return div;
  });

  const privateSectorBoard = document.createElement("section");
  privateSectorBoard.setAttribute("id", "public-sector");
  privateSectorBoard.classList.add("board");
  privateSectorBoard.appendChild(h);

  const posts = document.createElement("section");
  posts.classList.add("posts");
  for (const e of elems) {
    posts.appendChild(e);
  }
  privateSectorBoard.appendChild(posts);
  element.appendChild(privateSectorBoard);
}
