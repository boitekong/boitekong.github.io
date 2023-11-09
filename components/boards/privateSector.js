import { otherPrivateJobs, agencyIcons } from "../data.js";

export function setupPrivateSector(element) {
  const h = document.createElement("h3");

  h.textContent =
    "Private Jobs from other companies (which may be smaller or not that famous)";

  const icons = document.createElement("span");

  for (const a of agencyIcons) {
    const img = document.createElement("img");
    img.src = a.src;
    img.title = a.title;
    img.alt = a.title;
    img.classList.add("agency-icon");
    icons.appendChild(img);
  }

  h.classList.add("other-agencies");
  h.appendChild(icons);
  element.appendChild(h);

  const elems = otherPrivateJobs().map((p) => {
    const title = p["jobTitle"],
      div = document.createElement("div");

    div.classList.add("job-post-private");
    div.setAttribute("title", title);

    const search = `http://www.heitha.co.za/jobs/${title
      .trim()
      .toLowerCase()
      .replaceAll(" ", "-")}`;

    div.innerHTML = `
       <h3  class="ellipsis-text">${title}</h3>
       <br/>
       <hr/>

       <br/>

       
        ${
          p.jobSpecFields
            ? `<p class="job-field" style="padding:3px;" title=${p["jobSpecFields"]} >
          ${p["jobSpecFields"]}
          </p>`
            : ""
        }

       ${
         p.province
           ? `<span><p class="province" style="padding:5px;">${p.province}</p></span>`
           : ""
       }

       ${
         p.location
           ? `<span >
              ${
                isObject(p.location)
                  ? `<p class="location" style="padding:3px;">${p.location?.region?.replace(
                      ",",
                      ""
                    )}</p>
              <p class="location" style="padding:3px;">${p.location?.city?.replace(
                ",",
                ""
              )}</p>`
                  : `<p class="location" style="padding:3px;">${p.location}</p>`
              }
           </span>`
           : ""
       }
       <button class="more">more</button>
       `;

    const dialog = document.getElementById("dialog");
    const btn = div.querySelector(".more");

    btn.addEventListener("click", () => {
      dialog.showModal();

      const article = document.getElementById("info");
      article.innerHTML = `
     
       <img loading="lazy" src=${
         "../backend/database/" + p.iconLink
       } alt="agency icon" title="agency icon"/>
      <br/>
      <h3  class="ellipsis-text">${title}</h3>
      <br/>
      <hr/>
      <br/>
      ${
        p.jobSpecFields
          ? `<p><strong class="job-field f" style="padding:3px;" >${p["jobSpecFields"]}</strong></p>`
          : ""
      }
      
      <br/>
      ${
        p.province
          ? `<span><p class="province f" style="padding:5px;">${p.province}</p></span>`
          : ""
      }

     
       ${
         p.location
           ? `<span >
              ${
                isObject(p.location)
                  ? `<p class="location" style="padding:3px;">${p.location?.region?.replace(
                      ",",
                      ""
                    )}</p>
              <p class="location" style="padding:3px;">${p.location?.city?.replace(
                ",",
                ""
              )}</p>`
                  : `<p class="location" style="padding:3px;">${p.location}</p>`
              }
           </span>`
           : ""
       }
      <br/>
      ${
        p.expiryDate
          ? `<p class="expiry-date f" style="width:${p.expiryDate.length}ch; padding:3px;">${p.expiryDate}</p>`
          : ""
      }

      ${
        p.startDate
          ? `<p class="start-date f" style="width:${
              p.startDate.length + 13
            }ch; padding:3px;">start date: ${p.startDate}</p>`
          : ""
      }
      <br/>
       ${
         p.publishedDate
           ? `<p class="start-date" style="width:${
               p.publishedDate.length + 13
             }ch; padding:3px;">${p.publishedDate}</p>
            <br/>`
           : ""
       }

      ${
        p.vacancyType
          ? `<p class="job-type" style="width:${
              p.vacancyType.length + 13
            }ch; padding:3px;" >Vacancy type: ${p.vacancyType}</p>`
          : ""
      }
      <br/>

      <section class="details">${
        Array.isArray(p.details)
          ? p.details.map((p) => p)
          : p.details.replaceAll(/\.(?=[A-Z0-9 ])/g, ".<br/><br/>")
      }</section>
      <br/>
      <section class="options">
          <button id="share" class="apply share" title="share post with friends">
             <img loading="lazy" class="share-button img-icon" src="../../public/assets/share.png" atl="share image"/>
          </button>
        
          <a href=${
            p.apply.includes("heitha") ? search : p.apply
          } target="_blank">
              <button class="source apply">
                apply
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
  privateSectorBoard.classList.add("board");
  privateSectorBoard.appendChild(h);

  const posts = document.createElement("section");

  for (const e of elems) {
    posts.appendChild(e);
  }
  privateSectorBoard.appendChild(posts);
  element.appendChild(privateSectorBoard);
}

function isObject(value) {
  return typeof value === "object" && value !== null;
}
