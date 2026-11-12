// Kakadu English — static build: src/template.html → index.html, ru/index.html, en/index.html
// Run: node tools/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://kakaduenglish.uz";
const LASTMOD = "2026-11-12";
const tpl = readFileSync(join(ROOT, "src/template.html"), "utf8");

// --- pull the i18n dictionary and FAQ straight from the page script (single source of truth)
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

const META = {
  uz: {
    title: "Kakadu English — ingliz tilini AI bilan o‘rganing | IELTS va Speaking",
    desc: "Kakadu English — ingliz tilini o‘zbek tilida tushuntiradigan AI ustoz, jonli speaking suhbatlar, IELTS va CEFR tayyorgarligi. Ingliz tilini onlayn, noldan va bepul boshlang.",
    ogAlt: "Kakadu English — Ingliz tilida erkin gapir",
    keywords: [
      "kakadu", "kakadu english", "kakaduenglish", "kakaduenglish.uz", "kakadu uz", "kakadu ingliz tili",
      "ingliz tili", "ingliz tilini o‘rganish", "ingliz tilini organish", "ingliz tili urganish", "ingliz tilini urganish", "inglis tili",
      "ingliz tili onlayn", "onlayn ingliz tili", "ingliz tili kursi", "ingliz tili kurslari", "ingliz tili platforma", "inglizcha platforma",
      "ingliz tili dasturi", "ingliz tili ilova", "ingliz tilini noldan o‘rganish", "ingliz tili o‘zbekcha", "uzbekcha ingliz tili",
      "ingliz tilida gapirish", "speaking", "speaking programma", "speaking dastur", "english speaking", "IELTS", "IELTS english",
      "IELTS tayyorgarlik", "IELTS speaking", "IELTS kurs", "CEFR", "multilevel", "AI ustoz", "sun’iy intellekt ingliz tili",
      "ingliz tili grammatikasi", "talaffuz", "инглиз тили", "инглиз тилини ўрганиш", "инглиз тили курслари"
    ],
    kw: ["Ingliz tilini noldan o‘rganish", "Onlayn ingliz tili kursi", "IELTS Speaking tayyorgarlik", "CEFR Multilevel", "Ingliz tilida gapirish", "AI bilan ingliz tili", "Ingliz tili grammatikasi", "Talaffuzni yaxshilash", "Speaking dasturi", "Ingliz tili o‘zbek tilida"]
  },
  ru: {
    title: "Kakadu English — английский язык онлайн с AI | IELTS и разговорный",
    desc: "Kakadu English — изучение английского с AI-наставником, живые разговоры, подготовка к IELTS и CEFR. Объяснения на узбекском и русском. Начните бесплатно.",
    ogAlt: "Kakadu English — Говори по-английски свободно",
    keywords: [
      "kakadu", "kakadu english", "какаду", "какаду инглиш", "kakaduenglish.uz",
      "английский язык", "изучение английского", "учить английский", "английский онлайн", "английский язык онлайн",
      "курсы английского", "курсы английского Ташкент", "английский в Узбекистане", "английский с нуля", "разговорный английский",
      "разговорная практика английский", "английский с AI", "AI репетитор английского", "IELTS", "подготовка к IELTS", "IELTS speaking",
      "CEFR", "multilevel", "грамматика английского", "произношение английский", "приложение для английского"
    ],
    kw: ["Английский с нуля", "Онлайн-курс английского", "Подготовка к IELTS Speaking", "CEFR Multilevel", "Разговорный английский", "Английский с AI", "Грамматика английского", "Произношение", "Английский в Ташкенте", "Английский для узбекистанцев"]
  },
  en: {
    title: "Kakadu English — Learn English with AI | IELTS & Speaking Practice",
    desc: "Kakadu English: an AI English tutor that explains in Uzbek and Russian, live speaking practice, IELTS and CEFR preparation. Start learning English online for free.",
    ogAlt: "Kakadu English — Speak English freely",
    keywords: [
      "kakadu", "kakadu english", "kakaduenglish", "learn english", "learn english online", "learn english uzbekistan",
      "english for uzbek speakers", "english course uzbekistan", "english speaking practice", "speaking practice app", "AI english tutor",
      "IELTS", "IELTS preparation", "IELTS speaking", "IELTS english", "CEFR", "CEFR multilevel", "english grammar", "pronunciation practice"
    ],
    kw: ["English from scratch", "Online English course", "IELTS Speaking prep", "CEFR Multilevel", "Spoken English", "English with AI", "English grammar", "Pronunciation", "Speaking practice app", "English for Uzbek speakers"]
  }
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const attr = (s) => esc(s).replace(/"/g, "&quot;");

function head(L) {
  const m = META[L], url = SITE + PATH[L], i = LANGS.indexOf(L);
  const og = `${SITE}/assets/og-${L}.png`;
  const alt = LANGS.map((x) => `<link rel="alternate" hreflang="${x}" href="${SITE + PATH[x]}">`).join("\n");
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": SITE + "/#org",
        name: "Kakadu English",
        alternateName: ["Kakadu", "KakaduEnglish", "Какаду", "Kakadu English Uzbekistan"],
        url: SITE + "/",
        logo: { "@type": "ImageObject", url: SITE + "/assets/logo-512.png", width: 512, height: 512 },
        slogan: [T.ft_tag[0].split(".")[0], "Говори по-английски свободно", "Speak English freely"][i],
        description: m.desc,
        areaServed: { "@type": "Country", name: "Uzbekistan" },
        knowsLanguage: ["uz", "ru", "en"],
        address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" }
      },
      {
        "@type": "WebSite",
        "@id": SITE + "/#website",
        url: SITE + "/",
        name: "Kakadu English",
        alternateName: "Kakadu",
        inLanguage: ["uz", "ru", "en"],
        publisher: { "@id": SITE + "/#org" }
      },
      {
        "@type": "WebPage",
        "@id": url + "#webpage",
        url,
        name: m.title,
        description: m.desc,
        inLanguage: L,
        isPartOf: { "@id": SITE + "/#website" },
        about: { "@id": SITE + "/#org" },
        primaryImageOfPage: { "@type": "ImageObject", url: og, width: 1200, height: 630 },
        dateModified: LASTMOD
      },
      {
        "@type": "WebApplication",
        "@id": SITE + "/#app",
        name: "Kakadu English",
        url: SITE + "/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, iOS, Android",
        inLanguage: ["uz", "ru", "en"],
        description: m.desc,
        featureList: ["f1t", "f2t", "f3t", "f4t", "f5t", "f6t", "f7t", "f8t", "f9t", "f10t", "f11t"].map((k) => T[k][i]),
        offers: { "@type": "Offer", price: "0", priceCurrency: "UZS", name: "Start" },
        publisher: { "@id": SITE + "/#org" }
      },
      {
        "@type": "FAQPage",
        "@id": url + "#faq",
        inLanguage: L,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q[i],
          acceptedAnswer: { "@type": "Answer", text: f.a[i] }
        }))
      }
    ]
  };
  return `<title>${esc(m.title)}</title>
<meta name="description" content="${attr(m.desc)}">
<meta name="keywords" content="${attr(m.keywords.join(", "))}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="author" content="Kakadu English">
<meta name="application-name" content="Kakadu English">
<meta name="apple-mobile-web-app-title" content="Kakadu">
<meta name="theme-color" content="#071827">
<meta name="format-detection" content="telephone=no">
<meta name="geo.region" content="UZ">
<meta name="geo.placename" content="Tashkent">
<meta name="google-site-verification" content="yDbpE8b2NKL7N6SnoGI1_rDbVHd7smA4ui9PysfAonc">
<!-- Yandex Webmaster tasdiq kodi: <meta name="yandex-verification" content="KOD"> -->
<link rel="canonical" href="${url}">
${alt}
<link rel="alternate" hreflang="x-default" href="${SITE}/">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:site_name" content="Kakadu English">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${attr(m.title)}">
<meta property="og:description" content="${attr(m.desc)}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(m.ogAlt)}">
<meta property="og:locale" content="${LOCALE[L]}">
${LANGS.filter((x) => x !== L).map((x) => `<meta property="og:locale:alternate" content="${LOCALE[x]}">`).join("\n")}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(m.title)}">
<meta name="twitter:description" content="${attr(m.desc)}">
<meta name="twitter:image" content="${og}">
<meta name="twitter:image:alt" content="${attr(m.ogAlt)}">
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
}

function page(L) {
  const i = LANGS.indexOf(L);
  let h = tpl.replace("{{HEAD}}", head(L)).replace(/\{\{LANG\}\}/g, L);
  // bake visible text for this language so crawlers see it without JavaScript
  h = h.replace(/(<([a-z0-9]+)\b[^>]*\sdata-t="([a-z0-9_]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (all, open, tag, key, inner, close) => (T[key] ? open + esc(T[key][i]) + close : all));
  h = h.replace(/(<([a-z0-9]+)\b[^>]*\sdata-th="([a-z0-9_]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (all, open, tag, key, inner, close) => (T[key] ? open + T[key][i] + close : all));
  h = h.replace("{{KW}}", META[L].kw.map((k) => `<li>${esc(k)}</li>`).join(""));
  h = h.replace('<div id="faqList"></div>', '<div id="faqList">' + FAQ.map((f, n) =>
    `<details${n === 0 ? " open" : ""}><summary>${esc(f.q[i])}<span class="pl"></span></summary><p>${esc(f.a[i])}</p></details>`).join("") + "</div>");
  return h;
}

for (const L of LANGS) {
  const out = join(ROOT, PATH[L], "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(L));
  console.log("wrote", PATH[L] + "index.html");
}

// sitemap with hreflang alternates
const alts = LANGS.map((x) => `    <xhtml:link rel="alternate" hreflang="${x}" href="${SITE + PATH[x]}"/>`).join("\n") +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;
writeFileSync(join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map((L) => `  <url>
    <loc>${SITE + PATH[L]}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${L === "uz" ? "1.0" : "0.9"}</priority>
${alts}
  </url>`).join("\n")}
</urlset>
`);
console.log("wrote sitemap.xml");
