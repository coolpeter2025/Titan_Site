import { chromium } from "file:///C:/Users/peter/Documents/Cline/MCP/playwright-server/node_modules/playwright/index.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = "http://localhost:3003";
const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["contact", "/contact"],
  ["locations", "/locations"],
  ["service-location", "/kitchen-remodeling-tampa"],
];
const viewports = [
  { name: "375", width: 375, height: 812 },
  { name: "1440", width: 1440, height: 900 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  for (const [name, route] of routes) {
    await page.goto(base + route, { waitUntil: "networkidle", timeout: 30000 });
    const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientW = await page.evaluate(() => document.documentElement.clientWidth);
    const hs = scrollW > clientW + 1 ? `HSCROLL(${scrollW}>${clientW})` : "ok";
    console.log(`${vp.name} ${name}: ${hs}`);
    await page.screenshot({
      path: path.join(__dirname, `${name}-${vp.name}.png`),
      fullPage: true,
    });
  }
  await ctx.close();
}
await browser.close();
console.log("done");
