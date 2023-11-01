import {data as propersonnelData} from "../backend/database/private/Pro-Personnel.js";
import {data as heithaData} from "../backend/database/private/heitha-stuffing-group.js";
import {data as privateSectorData} from "../backend/database/public/govpage-private-sector.js";
import {data as publicSectorData} from "../backend/database/public/govpage-public-sector.js";

export function publicJobs() {
  return publicSectorData;
}

export function privateJobs() {
  return privateSectorData;
}

export function otherPrivateJobs() {
  return [...propersonnelData.blogPosts, ...heithaData.blogPosts];
}
export function propersonnelJobs() {
  return propersonnelData;
}
export function heithaJobs() {
  return heithaData;
}

export const agencyIcons = [
  { src: `../backend/database/${propersonnelData["iconLink"]}`, title: propersonnelData["title"] },
  { src: `../backend/database/${heithaData["iconLink"]}`, title: heithaData["title"] }
];

export const stats = {
  govDep: publicSectorData.blogPosts.length,
  privateComp: privateSectorData.blogPosts.length,
  privateSectorOpenings:
    heithaData.blogPosts.length + propersonnelData.blogPosts.length
};
