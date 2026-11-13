// Kakadu English — static build
//   src/template.html  → index.html, ru/index.html, en/index.html
//   tools/topics.mjs   → 4 guide pages × 3 languages
//   + sitemap.xml, llms.txt, assets/guide.css
// Run: node tools/build.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { TOPICS, GUIDE_LABELS } from "./topics.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://kakaduenglish.uz";
const LASTMOD = "2026-11-13";
const GSC = '<meta name="google-site-verification" content="yDbpE8b2NKL7N6SnoGI1_rDbVHd7smA4ui9PysfAonc">';
const tpl = readFileSync(join(ROOT, "src/template.html"), "utf8");

// --- i18n dictionary and FAQ come straight from the page script (single source of truth)
function grab(start, end) {
  const i = tpl.indexOf(start), j = tpl.indexOf(end, i);
  if (i < 0 || j < 0) throw new Error("marker not found: " + start);
  return tpl.slice(i + start.length - 1, j + 1);
}
const T = new Function("return " + grab("var T={", "};\nfunction t(k)"))();
const FAQ = new Function("return " + grab("var FAQ=[", "];\n\n/* ===== Helpers"))();

const LANGS = ["uz", "ru", "en"];
const PATH = { uz: "/", ru: "/ru/", en: "/en/" };
const LOCALE = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };
const topicPath = (topic, L) => PATH[L] + topic.slug[L] + "/";

const BRAND_KW = ["kakadu", "kakadu english", "kakaduenglish", "kakaduenglish.uz", "kakadu uz", "kakadu english uz", "kakadu ingliz tili", "kakadu ilova", "kakadu platforma", "kakadu ai", "какаду", "какаду инглиш", "kakadu инглиш"];

const META = {
  uz: {
    title: "Kakadu English — ingliz tili onlayn | AI ustoz, IELTS va Speaking kursi",
    desc: "Ingliz tilini onlayn va bepul boshlang: Kakadu English AI ustozi o‘zbek tilida tushuntiradi, har kuni speaking mashq qildiradi, IELTS va CEFR ga tayyorlaydi. A1 dan C1 gacha, telefon yoki kompyuterda.",
    ogAlt: "Kakadu English — Ingliz tilida erkin gapir",
    keywords: [
      ...BRAND_KW,
      "ingliz tili", "ingliz tili onlayn", "onlayn ingliz tili", "ingliz tilini o‘rganish", "ingliz tilini organish", "ingliz tili urganish", "ingliz tilini urganish", "inglis tili", "inglizcha",
      "ingliz tili kursi", "ingliz tili kurslari", "onlayn dars", "onlayn darslar", "ingliz tili darslari", "ingliz tili onlayn dars", "ingliz tili video darslar", "ingliz tili repetitor", "ingliz tili o‘qituvchi",
      "ingliz tili platforma", "inglizcha platforma", "ingliz tili dasturi", "ingliz tili ilova", "ingliz tilini noldan o‘rganish", "ingliz tilini tez o‘rganish", "ingliz tilini mustaqil o‘rganish",
      "ingliz tili o‘zbekcha", "uzbekcha ingliz tili", "ingliz tili grammatikasi", "ingliz tili lug‘at", "ingliz tili test", "ingliz tili daraja testi", "ingliz tili talaffuz",
      "ingliz tilida gapirish", "speaking", "speaking programma", "speaking dastur", "speaking club", "english speaking",
      "IELTS", "IELTS english", "IELTS tayyorgarlik", "IELTS kurs", "IELTS speaking", "IELTS writing", "IELTS mock test", "CEFR", "multilevel", "CEFR multilevel",
      "AI ustoz", "sun’iy intellekt ingliz tili", "ingliz tili Toshkent", "ingliz tili O‘zbekiston",
      "инглиз тили", "инглиз тилини ўрганиш", "инглиз тили курслари", "инглиз тили онлайн"
    ],
    kw: ["Ingliz tilini noldan o‘rganish", "Onlayn ingliz tili kursi", "IELTS Speaking tayyorgarlik", "CEFR Multilevel", "Ingliz tilida gapirish", "AI bilan ingliz tili", "Ingliz tili grammatikasi", "Talaffuzni yaxshilash", "Speaking dasturi", "Ingliz tili o‘zbek tilida"]
  },
  ru: {
    title: "Kakadu English — английский онлайн | AI-репетитор, IELTS и разговорный",
    desc: "Английский онлайн с AI-репетитором: ежедневная разговорная практика, подготовка к IELTS и CEFR, объяснения на русском и узбекском. Уровни A1–C1. Начните бесплатно.",
    ogAlt: "Kakadu English — Говори по-английски свободно",
    keywords: [
      ...BRAND_KW,
      "английский язык", "английский онлайн", "английский язык онлайн", "изучение английского", "учить английский", "выучить английский", "английский с нуля", "английский для начинающих",
      "курсы английского", "онлайн курсы английского", "уроки английского онлайн", "онлайн занятия английский", "репетитор английского", "репетитор английского онлайн", "AI репетитор английского",
      "разговорный английский", "разговорная практика", "speaking", "произношение английский", "грамматика английского", "тест на уровень английского",
      "IELTS", "подготовка к IELTS", "IELTS онлайн", "IELTS speaking", "CEFR", "multilevel",
      "английский Ташкент", "курсы английского Ташкент", "английский в Узбекистане", "приложение для английского"
    ],
    kw: ["Английский с нуля", "Онлайн-курс английского", "Подготовка к IELTS Speaking", "CEFR Multilevel", "Разговорный английский", "Английский с AI", "Грамматика английского", "Произношение", "Английский в Ташкенте", "Английский для узбекистанцев"]
  },
  en: {
    title: "Kakadu English — Learn English Online with an AI Tutor | IELTS & Speaking",
    desc: "Learn English online with Kakadu’s AI tutor: daily speaking practice, IELTS and CEFR prep, explanations in Uzbek and Russian. Levels A1–C1. Start for free.",
    ogAlt: "Kakadu English — Speak English freely",
    keywords: [
      ...BRAND_KW,
      "learn english", "learn english online", "online english course", "english lessons online", "english classes online", "learn english uzbekistan", "english for uzbek speakers",
      "english speaking practice", "speaking practice app", "ai english tutor", "english tutor online", "english from zero", "english for beginners",
      "IELTS", "IELTS preparation", "IELTS speaking", "IELTS writing", "IELTS mock test", "CEFR", "CEFR multilevel", "english grammar", "pronunciation practice"
    ],
    kw: ["English from scratch", "Online English course", "IELTS Speaking prep", "CEFR Multilevel", "Spoken English", "English with AI", "English grammar", "Pronunciation", "Speaking practice app", "English for Uzbek speakers"]
  }
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const attr = (s) => esc(s).replace(/"/g, "&quot;");
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const ORG = {
  "@type": ["Organization", "EducationalOrganization"],
  "@id": SITE + "/#org",
  name: "Kakadu English",
  alternateName: ["Kakadu", "KakaduEnglish", "Kakadu English Uzbekistan", "Какаду", "Какаду Инглиш"],
  url: SITE + "/",
  logo: { "@type": "ImageObject", url: SITE + "/assets/logo-512.png", width: 512, height: 512 },
  image: SITE + "/assets/og-uz.png",
  areaServed: { "@type": "Country", name: "Uzbekistan" },
  knowsLanguage: ["uz", "ru", "en"],
  knowsAbout: ["English language learning", "IELTS preparation", "CEFR Multilevel", "English speaking practice", "English grammar", "Pronunciation"],
  address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" }
};

function sharedHead(L, { title, desc, keywords, url, alternates, ogAlt, type = "website" }) {
  const og = `${SITE}/assets/og-${L}.png`;
  return `<title>${esc(title)}</title>
<meta name="description" content="${attr(desc)}">
<meta name="keywords" content="${attr(keywords.join(", "))}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow">
<meta name="yandex" content="index, follow">
<meta name="author" content="Kakadu English">
<meta name="publisher" content="Kakadu English">
<meta name="application-name" content="Kakadu English">
<meta name="apple-mobile-web-app-title" content="Kakadu">
<meta name="theme-color" content="#071827">
<meta name="format-detection" content="telephone=no">
<meta name="geo.region" content="UZ">
<meta name="geo.placename" content="Tashkent">
<meta name="language" content="${L}">
${GSC}
<!-- Yandex Webmaster tasdiq kodi: <meta name="yandex-verification" content="KOD"> -->
<link rel="canonical" href="${url}">
${alternates.map(([hl, href]) => `<link rel="alternate" hreflang="${hl}" href="${href}">`).join("\n")}
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:site_name" content="Kakadu English">
<meta property="og:type" content="${type}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(ogAlt)}">
<meta property="og:locale" content="${LOCALE[L]}">
${LANGS.filter((x) => x !== L).map((x) => `<meta property="og:locale:alternate" content="${LOCALE[x]}">`).join("\n")}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(title)}">
<meta name="twitter:description" content="${attr(desc)}">
<meta name="twitter:image" content="${og}">
<meta name="twitter:image:alt" content="${attr(ogAlt)}">`;
}

/* ---------- home pages ---------- */
function homeHead(L) {
  const m = META[L], url = SITE + PATH[L], i = LANGS.indexOf(L);
  const alternates = [...LANGS.map((x) => [x, SITE + PATH[x]]), ["x-default", SITE + "/"]];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { ...ORG, description: m.desc, slogan: ["Ingliz tilida erkin gapir", "Говори по-английски свободно", "Speak English freely"][i] },
      { "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: "Kakadu English", alternateName: ["Kakadu", "KakaduEnglish"], inLanguage: ["uz", "ru", "en"], publisher: { "@id": SITE + "/#org" } },
      { "@type": "WebPage", "@id": url + "#webpage", url, name: m.title, description: m.desc, inLanguage: L, isPartOf: { "@id": SITE + "/#website" }, about: { "@id": SITE + "/#org" }, primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/assets/og-${L}.png`, width: 1200, height: 630 }, dateModified: LASTMOD },
      {
        "@type": "WebApplication", "@id": SITE + "/#app", name: "Kakadu English", url: SITE + "/",
        applicationCategory: "EducationalApplication", operatingSystem: "Web, iOS, Android", inLanguage: ["uz", "ru", "en"], description: m.desc,
        featureList: ["f1t", "f2t", "f3t", "f4t", "f5t", "f6t", "f7t", "f8t", "f9t", "f10t", "f11t"].map((k) => T[k][i]),
        offers: { "@type": "Offer", price: "0", priceCurrency: "UZS", name: "Start" }, publisher: { "@id": SITE + "/#org" }
      },
      {
        "@type": "ItemList", "@id": url + "#courses", name: ["Kakadu kurslari", "Курсы Kakadu", "Kakadu courses"][i],
        itemListElement: TOPICS.map((tp, n) => ({
          "@type": "ListItem", position: n + 1,
          item: {
            "@type": "Course", url: SITE + topicPath(tp, L), name: tp[L].h1, description: tp[L].desc, inLanguage: "en",
            provider: { "@id": SITE + "/#org" },
            offers: { "@type": "Offer", category: "Free", price: "0", priceCurrency: "UZS" },
            hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", courseWorkload: "PT15M" }
          }
        }))
      },
      { "@type": "FAQPage", "@id": url + "#faq", inLanguage: L, mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q[i], acceptedAnswer: { "@type": "Answer", text: f.a[i] } })) }
    ]
  };
  return sharedHead(L, { ...m, url, alternates }) + "\n" + ld(graph);
}

function homePage(L) {
  const i = LANGS.indexOf(L);
  let h = tpl.replace("{{HEAD}}", homeHead(L)).replace(/\{\{LANG\}\}/g, L);
  // bake visible text so crawlers see it without JavaScript
  h = h.replace(/(<([a-z0-9]+)\b[^>]*\sdata-t="([a-z0-9_]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (all, open, tag, key, inner, close) => (T[key] ? open + esc(T[key][i]) + close : all));
  h = h.replace(/(<([a-z0-9]+)\b[^>]*\sdata-th="([a-z0-9_]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (all, open, tag, key, inner, close) => (T[key] ? open + T[key][i] + close : all));
  h = h.replace("{{KW}}", META[L].kw.map((k) => `<li>${esc(k)}</li>`).join(""));
  h = h.replace("{{GUIDES}}", TOPICS.map((tp) => `<li><a href="${topicPath(tp, L)}">${esc(tp[L].h1.split(":")[0])}<span aria-hidden="true">→</span></a></li>`).join(""));
  h = h.replace("{{GUIDES_FOOT}}", TOPICS.map((tp) => `<a href="${topicPath(tp, L)}">${esc(tp[L].h1.split(":")[0])}</a>`).join(""));
  h = h.replace('<div id="faqList"></div>', '<div id="faqList">' + FAQ.map((f, n) =>
    `<details${n === 0 ? " open" : ""}><summary>${esc(f.q[i])}<span class="pl"></span></summary><p>${esc(f.a[i])}</p></details>`).join("") + "</div>");
  if (/\{\{[A-Z_]+\}\}/.test(h)) throw new Error("unreplaced placeholder in " + L);
  return h;
}

/* ---------- guide pages ---------- */
const THEME_HEAD = `<meta name="color-scheme" content="light dark">
<script>(function(){try{var t=localStorage.getItem("kakadu-theme");}catch(e){}var dark=t?t==="dark":(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",dark?"dark":"light");})();</script>`;
const SUN = '<svg class="ic sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg class="ic moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"/></svg>';
const THEME_JS = `<script>(function(){var b=document.getElementById("themeBtn");if(!b)return;function s(){var d=document.documentElement.getAttribute("data-theme")==="dark";b.setAttribute("aria-pressed",String(d));}s();b.addEventListener("click",function(){var d=document.documentElement.getAttribute("data-theme")!=="dark";document.documentElement.setAttribute("data-theme",d?"dark":"light");try{localStorage.setItem("kakadu-theme",d?"dark":"light");}catch(e){}s();});})();</script>`;
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;700;800&family=Manrope:wght@400;500;600;700;800&family=Sora:wght@800&display=swap">';

function words(c) {
  return [c.lead, ...c.sections.flatMap((s) => [...(s.p || []), ...(s.ul || [])]), ...c.faq.flatMap((f) => [f.q, f.a])].join(" ").split(/\s+/).length;
}

function guidePage(tp, L) {
  const i = LANGS.indexOf(L), c = tp[L], G = GUIDE_LABELS, url = SITE + topicPath(tp, L), home = PATH[L];
  const alternates = [...LANGS.map((x) => [x, SITE + topicPath(tp, x)]), ["x-default", SITE + topicPath(tp, "uz")]];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ORG,
      {
        "@type": "Article", "@id": url + "#article", mainEntityOfPage: url, headline: c.h1, description: c.desc, inLanguage: L,
        image: `${SITE}/assets/og-${L}.png`, datePublished: "2026-11-13", dateModified: LASTMOD, wordCount: words(c),
        author: { "@id": SITE + "/#org" }, publisher: { "@id": SITE + "/#org" }, keywords: c.kw.join(", ")
      },
      {
        "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Kakadu English", item: SITE + home },
          { "@type": "ListItem", position: 2, name: c.h1.split(":")[0], item: url }
        ]
      },
      { "@type": "FAQPage", "@id": url + "#faq", inLanguage: L, mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    ]
  };
  const head = sharedHead(L, { title: c.title, desc: c.desc, keywords: [...c.kw, "kakadu", "kakadu english"], url, alternates, ogAlt: c.h1, type: "article" });
  const body = c.sections.map((s) =>
    `<h2>${esc(s.h)}</h2>\n` + (s.p || []).map((p) => `<p>${esc(p)}</p>`).join("\n") + (s.ul ? `\n<ul>${s.ul.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "")).join("\n");
  const minutes = Math.max(2, Math.round(words(c) / 180));
  const others = TOPICS.filter((x) => x !== tp);
  return `<!doctype html>
<html lang="${L}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${THEME_HEAD}
${head}
${ld(graph)}
${FONTS}
<link rel="stylesheet" href="/assets/guide.css">
</head>
<body>
<header class="nav"><div class="wrap">
  <a class="logo" href="${home}" aria-label="Kakadu English"><img src="/assets/favicon.svg" alt="" width="36" height="36"><b>kakadu<i>.</i></b></a>
  <nav class="langs" aria-label="Language">${LANGS.map((x) => `<a href="${topicPath(tp, x)}" hreflang="${x}" lang="${x}"${x === L ? ' aria-current="page"' : ""}>${x.toUpperCase()}</a>`).join("")}</nav>
  <button class="theme-btn" type="button" id="themeBtn" aria-label="${attr(T.theme_d[i])}" aria-pressed="false">${SUN}${MOON}</button>
  <a class="btn" href="${home}#start">${esc(G.ctaBtn[i])}</a>
</div></header>
<main class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="${home}">${esc(G.home[i])}</a><span aria-hidden="true">/</span><span>${esc(c.h1.split(":")[0])}</span></nav>
  <div class="layout">
    <article>
      <p class="eyebrow">Kakadu English · ${minutes} ${esc(G.read[i])}</p>
      <h1>${esc(c.h1)}</h1>
      <p class="lead">${esc(c.lead)}</p>
${body}
      <section class="faq"><h2>${esc(G.faq[i])}</h2>
${c.faq.map((f, n) => `<details${n === 0 ? " open" : ""}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("\n")}
      </section>
    </article>
    <aside>
      <div class="cta">
        <img src="/assets/kakadu-mark.svg" alt="Kakadu" width="110" height="110">
        <h2>${esc(G.ctaTitle[i])}</h2>
        <p>${esc(G.ctaText[i])}</p>
        <a class="btn lagoon" href="${home}#start">${esc(G.ctaBtn[i])} →</a>
        <a class="more" href="${home}">${esc(G.toHome[i])}</a>
      </div>
      <nav class="related" aria-label="${attr(G.related[i])}"><h2>${esc(G.related[i])}</h2><ul>${others.map((o) => `<li><a href="${topicPath(o, L)}">${esc(o[L].h1.split(":")[0])}</a></li>`).join("")}</ul></nav>
    </aside>
  </div>
</main>
<footer class="foot"><div class="wrap"><span>© 2026 Kakadu English · kakaduenglish.uz</span><nav><a href="${home}">${esc(G.home[i])}</a>${TOPICS.map((o) => `<a href="${topicPath(o, L)}">${esc(o[L].h1.split(":")[0])}</a>`).join("")}</nav></div></footer>
${THEME_JS}
</body>
</html>
`;
}

/* ---------- write everything ---------- */
const urls = [];
for (const L of LANGS) {
  const out = join(ROOT, PATH[L], "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, homePage(L));
  console.log("wrote", PATH[L] + "index.html");
}
urls.push({ group: LANGS.map((L) => SITE + PATH[L]), pri: ["1.0", "0.9", "0.9"], freq: "weekly" });
for (const tp of TOPICS) {
  for (const L of LANGS) {
    const out = join(ROOT, topicPath(tp, L), "index.html");
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, guidePage(tp, L));
    console.log("wrote", topicPath(tp, L) + "index.html");
  }
  urls.push({ group: LANGS.map((L) => SITE + topicPath(tp, L)), pri: ["0.8", "0.7", "0.7"], freq: "monthly" });
}
copyFileSync(join(ROOT, "src/guide.css"), join(ROOT, "assets/guide.css"));

// sitemap with hreflang alternates per page group
const entries = urls.flatMap(({ group, pri, freq }) => group.map((loc, n) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${pri[n]}</priority>
${group.map((h, k) => `    <xhtml:link rel="alternate" hreflang="${LANGS[k]}" href="${h}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${group[0]}"/>
  </url>`));
writeFileSync(join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`);
console.log("wrote sitemap.xml (" + entries.length + " urls)");

writeFileSync(join(ROOT, "llms.txt"), `# Kakadu English

> Kakadu English (kakaduenglish.uz) — O‘zbekistondagi o‘quvchilar uchun ingliz tilini onlayn o‘rganish platformasi. AI ustoz ovozli suhbat qiladi, xatolarni tuzatadi va o‘zbek yoki rus tilida tushuntiradi. Kakadu English is an online English-learning platform for learners in Uzbekistan with an AI voice tutor that explains in Uzbek and Russian.

- Yo‘nalishlar: AI bilan ovozli suhbat, 10 daqiqalik jonli suhbatlar, shaxsiy o‘quv yo‘li, lug‘at, grammatika, listening va reading, writing (AI tahlili), speaking tahlili, IELTS va CEFR (Multilevel) tayyorgarligi, gamifikatsiya, progress monitoring.
- Darajalar: A1 dan C1 gacha. Tillar: o‘zbek, rus, ingliz. Bepul tarif mavjud.

## Sahifalar
- [O‘zbekcha](${SITE}/)
- [Русский](${SITE}/ru/)
- [English](${SITE}/en/)

## Qo‘llanmalar / Guides
${TOPICS.flatMap((tp) => LANGS.map((L) => `- [${tp[L].h1}](${SITE + topicPath(tp, L)})`)).join("\n")}
`);
console.log("wrote llms.txt");
