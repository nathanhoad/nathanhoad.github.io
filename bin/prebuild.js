import * as fs from "node:fs/promises";
import * as path from "node:path";

try {
  const filename = path.join(path.dirname(import.meta.url), "../src/lib/articles.json").replace("file:", "");
  const contents = await fs.readFile(filename, { encoding: "utf-8" });
  const articles = JSON.parse(contents);

  await buildRSS(articles);
  await buildSitemap(articles);

} catch (err) {
  console.log(err);
}

async function buildRSS(articles) {
  const rssFilename = path.join(path.dirname(import.meta.url), "../static/rss.xml").replace("file:", "")
  const rssContent = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <atom:link href="https://nathanhoad.net/rss.xml" rel="self" type="application/rss+xml" />
    <title>Nathan Hoad</title>
    <link>https://nathanhoad.net</link>
    <description>G'day! I'm Nathan hoad and I'm an independent game developer. Right now I'm working on a classic adventure game about our cat, Coco.</description>
    <language>en</language>
    <lastBuildDate>${dateToRfc822(articles[0].publishedAt)}</lastBuildDate>${articles.map(article => {
    return `
    <item>
      <title>${article.title}</title>
      <link>https://nathanhoad.net${article.path}</link>
      <guid isPermaLink='true'>https://nathanhoad.net${article.path}</guid>
      <description>${article.description}..</description>
      <pubDate>${dateToRfc822(article.publishedAt)}</pubDate>
    </item>`;
  }).join("")}
  </channel>
</rss>
`.trim();

  await fs.writeFile(rssFilename, rssContent, { encoding: "utf-8" });
}

function dateToRfc822(dateString) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const timeStamp = Date.parse(dateString + " 22:00:00 +1000");
  const date = new Date(timeStamp);

  const day = DAYS[date.getDay()];
  const dayNumber = date.getDate().toString().length < 2 ? "0" + date.getDate() : date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${dayNumber} ${month} ${year} 22:00:00 +1000`;
}

async function buildSitemap(articles) {
  const sitemapFilename = path.join(path.dirname(import.meta.url), "../static/sitemap.xml").replace("file:", "")
  const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  <url>
    <loc>https://nathanhoad.net</loc>
    <priority>0.9</priority>
  </url>${articles.map(article => {
    return `
  <url>
    <loc>https://nathanhoad.net${article.path}</loc>
    <priority>1.0</priority>
  </url>`;
  })}
</urlset>
`.trim();

await fs.writeFile(sitemapFilename, sitemapContent, { encoding: "utf-8" });
}