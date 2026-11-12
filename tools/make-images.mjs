// Generates icons and Open Graph images. Needs Playwright (dev only): node tools/make-images.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const tpl = readFileSync(join(ROOT, "src/template.html"), "utf8");
const birdSrc = tpl.slice(tpl.indexOf("function bird(o){"), tpl.indexOf("function mountBirds"));
const mark = readFileSync(join(ROOT, "assets/kakadu-mark.svg"), "utf8");
mkdirSync(join(ROOT, "assets"), { recursive: true });

const FONT = `font-family:"Inter Display","Inter",system-ui,sans-serif`;
const page = (body, w, h, bg = "transparent") => `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}html,body{margin:0;width:${w}px;height:${h}px;background:${bg};${FONT}}
.bird{width:100%;height:auto;display:block;overflow:visible}</style></head><body>${body}
<script>var BID=0,NAVY="#071827";${birdSrc}
document.querySelectorAll("[data-b]").forEach(function(e){e.innerHTML=bird(JSON.parse(e.getAttribute("data-b")));});</script></body></html>`;

const OG = {
  uz: { t: 'Ingliz tilida <span class="hl">erkin</span> gapir.', s: "AI ustoz · Speaking · IELTS · CEFR", c: "O‘zbek va rus tilida tushuntiradi" },
  ru: { t: 'Говори по‑английски <span class="hl">свободно</span>.', s: "AI-наставник · Speaking · IELTS · CEFR", c: "Объясняет на узбекском и русском" },
  en: { t: 'Speak English <span class="hl">freely</span>.', s: "AI tutor · Speaking · IELTS · CEFR", c: "Explains in Uzbek and Russian" }
};
const ogHtml = (L) => `<div style="position:relative;width:1200px;height:630px;background:#071827;overflow:hidden;color:#E8F6F4">
<div style="position:absolute;inset:0;background-image:radial-gradient(rgba(25,194,176,.18) 2px,transparent 2px);background-size:30px 30px;-webkit-mask-image:radial-gradient(circle at 80% 50%,#000,transparent 65%)"></div>
<div style="position:absolute;right:-40px;top:40px;width:600px;height:600px;border-radius:50%;border:2px solid rgba(25,194,176,.18)"></div>
<div style="position:absolute;right:40px;top:70px;width:470px" data-b='{"emo":"talk","acc":["headphones"],"tail":1}'></div>
<div style="position:absolute;left:72px;top:64px;right:520px;display:flex;flex-direction:column;gap:26px">
 <div style="display:flex;align-items:center;gap:14px"><div style="width:58px">${mark}</div><b style="font-size:40px;letter-spacing:-.04em;font-weight:900;color:#fff">kakadu<span style="color:#FF8E6E">.</span></b><span style="margin-left:6px;font-size:22px;font-weight:700;color:#19C2B0">english</span></div>
 <div style="font-size:${L === "ru" ? 70 : 78}px;line-height:1.02;font-weight:900;letter-spacing:-.035em;color:#fff">${OG[L].t}</div>
 <div style="font-size:27px;font-weight:700;color:#BFEDE6">${OG[L].s}</div>
 <div style="display:flex;gap:12px;flex-wrap:wrap">
  <span style="background:#19C2B0;color:#071827;font-weight:800;font-size:22px;padding:12px 22px;border-radius:999px">kakaduenglish.uz</span>
  <span style="background:#12293D;color:#E8F6F4;font-weight:700;font-size:21px;padding:12px 20px;border-radius:999px">${OG[L].c}</span>
 </div>
</div>
<style>.hl{position:relative;z-index:0;white-space:nowrap}.hl:after{content:"";position:absolute;left:-.06em;right:-.06em;bottom:.04em;height:.34em;background:#F5B82E;border-radius:.18em;z-index:-1;transform:skewX(-8deg)}</style>
</div>`;

const b = await chromium.launch();
async function shot(html, w, h, out, bg) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.setContent(page(html, w, h, bg));
  await p.waitForTimeout(150);
  await p.screenshot({ path: join(ROOT, out), omitBackground: bg === "transparent" });
  await p.close();
  console.log("wrote", out);
}
for (const L of ["uz", "ru", "en"]) await shot(ogHtml(L), 1200, 630, `assets/og-${L}.png`, "#071827");
const tile = (bg, pad) => `<div style="width:100%;height:100%;background:${bg};display:grid;place-items:center"><div style="width:${100 - pad * 2}%">${mark}</div></div>`;
await shot(tile("#E8F6F4", 8), 180, 180, "assets/apple-touch-icon.png", "#E8F6F4");
await shot(tile("#E8F6F4", 6), 192, 192, "assets/icon-192.png", "#E8F6F4");
await shot(tile("#E8F6F4", 6), 512, 512, "assets/icon-512.png", "#E8F6F4");
await shot(tile("#071827", 16), 512, 512, "assets/icon-maskable-512.png", "#071827");
await shot(`<div style="width:512px">${mark}</div>`, 512, 512, "assets/logo-512.png", "transparent");
for (const s of [16, 32, 48]) await shot(`<div style="width:${s}px">${mark}</div>`, s, s, `assets/_fav-${s}.png`, "transparent");
await b.close();
