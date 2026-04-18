import { chromium } from "file:///C:/Users/peter/Documents/Cline/MCP/playwright-server/node_modules/playwright/index.mjs";

const shots = [
  { url: "http://localhost:3000/",       w: 1440, h: 900, file: "home-1440.png",  full: true },
  { url: "http://localhost:3000/",       w: 768,  h: 1024, file: "home-768.png",  full: true },
  { url: "http://localhost:3000/",       w: 375,  h: 812, file: "home-375.png",   full: true },
  { url: "http://localhost:3000/about",  w: 1440, h: 900, file: "about-1440.png", full: false },
];

const browser = await chromium.launch();
for (const s of shots) {
  const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h } });
  const page = await ctx.newPage();
  await page.goto(s.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `screenshots-logo-hero/${s.file}`, fullPage: s.full });
  console.log("saved", s.file);
  await ctx.close();
}
await browser.close();
