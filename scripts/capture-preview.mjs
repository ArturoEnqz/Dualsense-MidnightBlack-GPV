import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1000, height: 820 },
  deviceScaleFactor: 2,
});
await page.goto("http://127.0.0.1:43145/skin/preview.html", {
  waitUntil: "networkidle",
});
await page.evaluate(() => {
  document.body.style.background = "#0a0c12";
});
await page.waitForTimeout(1000);
await page.screenshot({ path: "/workspace/skin/preview.png" });
await page.screenshot({ path: "/workspace/public/skin/preview.png" });
await page.screenshot({
  path: "/opt/cursor/artifacts/screenshots/skin_preview_dark.png",
});

const page2 = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await page2.goto("http://127.0.0.1:43145/", { waitUntil: "networkidle" });
await page2.waitForTimeout(1400);
await page2.screenshot({
  path: "/opt/cursor/artifacts/screenshots/landing_hero_desktop.png",
});

const page3 = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
});
await page3.goto("http://127.0.0.1:43145/", { waitUntil: "networkidle" });
await page3.waitForTimeout(1200);
await page3.screenshot({
  path: "/opt/cursor/artifacts/screenshots/landing_hero_mobile.png",
});

await browser.close();
console.log("ok");
