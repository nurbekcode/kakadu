# Kakadu English — landing sahifa

**kakaduenglish.uz** saytining kodi. Kakadu English ingliz tilini o‘rgatish platformasi bo‘lib, sayt uch tilda ishlaydi va har til o‘z manzilida turadi:

| Til | Manzil | Fayl |
|---|---|---|
| O‘zbekcha (asosiy) | `https://kakaduenglish.uz/` | `index.html` |
| Русский | `https://kakaduenglish.uz/ru/` | `ru/index.html` |
| English | `https://kakaduenglish.uz/en/` | `en/index.html` |

Bundan tashqari har bir tilda 4 tadan SEO qo‘llanma sahifasi bor (jami 12 ta):

| Mavzu | UZ | RU | EN |
|---|---|---|---|
| Onlayn kurs | `/ingliz-tili-onlayn/` | `/ru/angliyskiy-onlayn/` | `/en/online-english-course/` |
| IELTS | `/ielts/` | `/ru/ielts/` | `/en/ielts-preparation/` |
| Speaking | `/speaking/` | `/ru/razgovornyy-angliyskiy/` | `/en/english-speaking-practice/` |
| Noldan o‘rganish | `/ingliz-tilini-noldan-organish/` | `/ru/angliyskiy-s-nulya/` | `/en/learn-english-from-zero/` |

## Tuzilishi

```
src/template.html        yagona manba: dizayn, matnlar (3 tilda), JavaScript
tools/build.mjs          shablondan til sahifalari, qo‘llanmalar, sitemap.xml va llms.txt ni yaratadi
tools/topics.mjs         qo‘llanma sahifalari matni (3 tilda) — yangi maqola shu yerga qo‘shiladi
src/guide.css            qo‘llanma sahifalari dizayni (yorug‘ va qorong‘i rejim)
tools/make-images.mjs    ikonkalar va OG rasmlarni yaratadi (Playwright kerak)
index.html, ru/, en/     tayyor sahifalar (build natijasi, tahrir qilinmaydi)
assets/                  logotip, favicon, ilova ikonkalari, OG rasmlar
robots.txt, sitemap.xml  qidiruv tizimlari uchun
site.webmanifest         telefon ekraniga o‘rnatish (PWA) ma’lumotlari
llms.txt                 AI qidiruv tizimlari uchun qisqa ma’lumot
CNAME                    GitHub Pages uchun domen
404.html                 topilmagan sahifa
```

Kutubxona va bog‘liqliklar yo‘q. Istalgan statik hostingda ishlaydi.

## O‘zgartirish tartibi

1. Faqat `src/template.html` ni tahrir qiling.
2. `node tools/build.mjs` ni ishga tushiring, u uchta sahifani va `sitemap.xml` ni qayta yaratadi.
3. Commit va push qiling.

| Nima | `src/template.html` ichida |
|---|---|
| Platforma (ikkinchi sayt) havolasi | `var PLATFORM_URL = "#";` |
| Matnlar va tarjimalar | `var T = { kalit: [uz, ru, en] }` |
| Tariflar | `var PLANS` |
| FAQ (JSON-LD ga ham avtomatik tushadi) | `var FAQ` |
| Demo suhbatlar / mini test / so‘zlar | `var SCEN`, `var QUIZ`, `var WORDS` |
| SEO sarlavha, tavsif, kalit so‘zlar | `tools/build.mjs` → `META` |

## SEO

Har bir til sahifasida quyidagilar bor:

- `<title>`, `description`, `keywords` (lotin, kirill va xato yozilgan variantlar bilan)
- `canonical` va `hreflang` (uz, ru, en, x-default), shunda Google har bir tilni to‘g‘ri auditoriyaga ko‘rsatadi
- Open Graph va Twitter Card: Telegram, Instagram yoki Facebook'da ulashilganda chiqadigan rasm (`assets/og-uz.png` va boshqalar)
- JSON-LD strukturali ma’lumotlar: `Organization`, `EducationalOrganization`, `WebSite`, `WebPage`, `WebApplication` (bepul tarif), `FAQPage`
- Butun matn HTML ichida tayyor holda turadi, shuning uchun qidiruv tizimlari uni JavaScript'siz ham o‘qiydi
- “Kakadu English haqida” bo‘limi kalit so‘zlarni tabiiy matn ichida beradi
- `sitemap.xml` (hreflang bilan), `robots.txt`, `site.webmanifest`, favicon va ilova ikonkalari, `llms.txt`

### Ishga tushirgandan keyin bajariladigan ishlar

1. **Google Search Console** (search.google.com/search-console): `kakaduenglish.uz` ni **Domain** sifatida qo‘shing va DNS TXT yozuvi orqali tasdiqlang. Keyin **Sitemaps** bo‘limiga `https://kakaduenglish.uz/sitemap.xml` ni yuboring va har uch sahifa uchun **URL Inspection → Request indexing** bosing.
2. **Yandex Webmaster** (webmaster.yandex.ru): saytni qo‘shing, tasdiq meta-tegini `tools/build.mjs` dagi izoh o‘rniga qo‘ying va sitemap'ni yuboring. Rus tilidagi qidiruvlar uchun bu muhim.
3. **Bing Webmaster Tools**: Search Console'dan import qiling.
4. **Google Business Profile**: “Kakadu English” nomi bilan onlayn ta’lim xizmati sifatida ro‘yxatdan o‘ting.
5. **Havolalar (backlink)**: Telegram kanal, Instagram, YouTube va o‘zbek ta’lim kataloglaridan `kakaduenglish.uz` ga havola qo‘ying. Ijtimoiy tarmoq profillari tayyor bo‘lgach, ularni JSON-LD dagi `sameAs` ga qo‘shing.
6. **Kontent**: “IELTS Speaking savollari”, “ingliz tilini noldan o‘rganish” kabi mavzularda `/blog/` maqolalari umumiy so‘rovlar bo‘yicha o‘sishning eng kuchli yo‘li.

“kakadu english” kabi brend so‘rovlari bo‘yicha sayt indekslangandan keyin odatda tez birinchi o‘ringa chiqadi. “ingliz tili o‘rganish”, “IELTS” kabi umumiy so‘rovlarda raqobat kuchli. U yerda yuqoriga chiqish uchun vaqt, maqolalar va havolalar kerak bo‘ladi.

## Domenni ulash (GitHub Pages)

1. Repo → **Settings → Pages**: Source = `main` branch, `/ (root)`. Custom domain = `kakaduenglish.uz` (`CNAME` fayli tayyor).
2. Domen panelida (.uz registrator) DNS yozuvlari:

| Tur | Nom | Qiymat |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<github-login>.github.io` |

3. DNS ishlagach, **Enforce HTTPS** ni yoqing.

## Dark rejim

Saytda yorug‘ va qorong‘i rejim bor. Birinchi kirishda foydalanuvchi qurilmasidagi sozlama qo‘llanadi, menyudagi oy/quyosh tugmasi bilan almashtiriladi va tanlov eslab qolinadi. Ranglar `src/template.html` boshidagi `:root` (yorug‘) va `:root[data-theme="dark"]` (qorong‘i) bloklarida.

## Brend

- Ranglar (Deep Lagoon): `#071827` navy, `#0F7F76` deep teal, `#19C2B0` lagoon, `#FF8E6E` coral, `#F5B82E` oltin toj, `#E8F6F4` foam, `#FFF4EA` sand
- Shriftlar: Unbounded (sarlavhalar), Manrope (matn), Caveat (mascot gaplari), Sora (logotip yozuvi)
- Mascot: `bird({emo, acc, bg, shape})`
  - Emotsiyalar: `idle`, `talk`, `happy`, `wink`, `wow`, `love`, `think`, `sad`, `sleepy`, `cool`, `star`
  - Aksessuarlar: `headphones`, `cap`, `glasses`, `shades`, `book`, `trophy`, `mic`, `globe`, `pencil`, `bow`

Tariflar narxi, liga jadvalidagi ismlar va ijtimoiy tarmoq havolalari hozircha namuna.
