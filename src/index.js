'use strict'

function faviconURL(u) {
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", u);
  url.searchParams.set("size", "32");
  return url.toString();
}

window.onload = async () => {
  const mostVisitedURLs = await chrome.topSites.get();

  console.log(mostVisitedURLs);

  console.log(mostVisitedURLs.map(site => faviconURL(site.url)));
};
