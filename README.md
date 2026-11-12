# Kakadu — landing sahifa

Kakadu ingliz tili platformasining informatsion sayti. Sayt uch tilda ishlaydi: o‘zbek (asosiy), rus va ingliz.

## Tuzilishi

```
index.html              butun sayt: HTML, CSS va JavaScript bitta faylda
assets/kakadu-mark.svg  logotip belgisi (vektor)
```

Hech qanday kutubxona yoki build jarayoni yo‘q. `index.html` ni brauzerda ochish yoki istalgan statik hostingga (GitHub Pages, Vercel, Netlify, Cloudflare Pages) qo‘yish kifoya.

## Sozlash

| Nima | Qayerda |
|---|---|
| Platforma (ikkinchi sayt) havolasi | `index.html` → `var PLATFORM_URL = "#";` |
| Matnlar va tarjimalar | `index.html` → `var T = { ... }` (har kalit: `[uz, ru, en]`) |
| Tariflar va narxlar | `var PLANS = [ ... ]` |
| FAQ | `var FAQ = [ ... ]` |
| Demo suhbatlar | `var SCEN = [ ... ]` |
| Mini test savollari | `var QUIZ = [ ... ]` |
| So‘z kartochkalari | `var WORDS = [ ... ]` |

`PLATFORM_URL` hozircha `"#"`, shu sababli “Platformaga kirish” tugmalari “tez orada” xabarini ko‘rsatadi.

## Brend

- Ranglar (Deep Lagoon): `#071827` navy, `#0F7F76` deep teal, `#19C2B0` lagoon, `#FF8E6E` coral, `#F5B82E` oltin toj, `#E8F6F4` foam, `#FFF4EA` sand
- Shriftlar: Unbounded (sarlavhalar), Manrope (matn), Caveat (mascot gaplari), Sora (logotip yozuvi)
- Mascot: `bird({emo, acc, bg, shape})` funksiyasi kod orqali chizadi.
  - Emotsiyalar: `idle`, `talk`, `happy`, `wink`, `wow`, `love`, `think`, `sad`, `sleepy`, `cool`, `star`
  - Aksessuarlar: `headphones`, `cap`, `glasses`, `shades`, `book`, `trophy`, `mic`, `globe`, `pencil`, `bow`

## Eslatma

Tariflar narxi, liga jadvalidagi ismlar va ijtimoiy tarmoq havolalari hozircha namuna sifatida qo‘yilgan.
