// SEO topic guides. Each topic has a page in uz (/slug/), ru (/ru/slug/) and en (/en/slug/).
// Content is real, useful text — search engines rank pages that answer the searcher's question.

export const TOPICS = [
  {
    id: "online",
    slug: { uz: "ingliz-tili-onlayn", ru: "angliyskiy-onlayn", en: "online-english-course" },
    icon: "globe",
    uz: {
      title: "Ingliz tili onlayn kursi — AI ustoz bilan uydan o‘rganing | Kakadu English",
      desc: "Ingliz tilini onlayn o‘rganish: AI ustoz bilan ovozli darslar, o‘zbek tilida tushuntirish, speaking, grammatika va IELTS. Kakadu English onlayn kursini bepul boshlang.",
      kw: ["ingliz tili onlayn", "onlayn ingliz tili kursi", "ingliz tili onlayn darslar", "onlayn dars ingliz tili", "ingliz tili kurslari onlayn", "ingliz tilini uyda o‘rganish", "ingliz tili onlayn bepul", "ingliz tili o‘qituvchi onlayn", "ingliz tili repetitor"],
      h1: "Ingliz tili onlayn kursi: uydan, o‘z vaqtingizda",
      lead: "Onlayn ingliz tili kursi bugun o‘quv markaziga qatnashning to‘liq o‘rnini bosa oladi. Muhimi — har kuni gapirish amaliyoti va xatolaringizni o‘z vaqtida tuzatib boradigan ustoz. Kakadu English aynan shunday onlayn platforma.",
      sections: [
        { h: "Onlayn kursning afzalliklari", ul: ["Yo‘lga vaqt ketmaydi: dars telefon yoki kompyuterda, istalgan joyda", "Jadval sizga moslashadi: ertalab, tushlikda yoki kechasi", "Narxi o‘quv markaziga qaraganda ancha arzon", "AI ustoz charchamaydi va xato qilganingizda kulmaydi"] },
        { h: "Kakadu’da onlayn dars qanday o‘tadi", p: ["Avval 10 daqiqalik daraja testi topshirasiz. Kakadu natijaga qarab shaxsiy reja tuzadi. Har kuni AI ustoz bilan ovozli suhbat qilasiz: u inglizcha savol beradi, siz javob berasiz, xato bo‘lsa — muloyim tuzatadi va qoidani o‘zbek yoki rus tilida tushuntiradi.", "Suhbatdagi yangi so‘zlar lug‘atingizga avtomatik tushadi va unutmasligingiz uchun o‘z vaqtida takrorlanadi. Darajangiz oshgach, dunyo bo‘ylab boshqa o‘quvchilar bilan 10 daqiqalik jonli suhbatlarga o‘tasiz."] },
        { h: "Onlayn kursdan maksimal natija olish uchun", ul: ["Har kuni kamida 15 daqiqa ajrating — muntazamlik davomiylikdan muhimroq", "Quloqchin bilan gapiring, shunda talaffuz tahlili aniqroq bo‘ladi", "Xato qilishdan qo‘rqmang: har bir xato — yangi qoida", "Haftada bir marta progress hisobotingizni ko‘rib chiqing"] }
      ],
      faq: [
        { q: "Onlayn ingliz tili kursi samaralimi?", a: "Ha, agar unda har kuni gapirish amaliyoti va xatolarni tuzatish bo‘lsa. Faqat video ko‘rish yetarli emas — Kakadu’da asosiy vaqt ovozli suhbatga ajratiladi." },
        { q: "Onlayn darslar bepulmi?", a: "Kakadu’ning bepul tarifida kuniga bir necha daqiqa AI suhbat, daraja testi va asosiy darslar bor. Ko‘proq amaliyot uchun pullik tariflar mavjud." },
        { q: "Qanday qurilma kerak?", a: "Brauzerli telefon yoki kompyuter va quloqchin yetarli. Hech narsa o‘rnatish shart emas." }
      ]
    },
    ru: {
      title: "Онлайн-курс английского языка с AI-репетитором | Kakadu English",
      desc: "Английский онлайн: голосовые занятия с AI-репетитором, объяснения на русском и узбекском, разговорная практика, грамматика и IELTS. Начните бесплатно в Kakadu English.",
      kw: ["английский онлайн", "онлайн курс английского", "уроки английского онлайн", "английский язык онлайн занятия", "курсы английского онлайн", "английский дома", "репетитор английского онлайн", "английский онлайн бесплатно"],
      h1: "Онлайн-курс английского: из дома, в удобное время",
      lead: "Сегодня онлайн-курс английского может полностью заменить походы в учебный центр. Главное — ежедневная разговорная практика и наставник, который вовремя исправляет ошибки. Kakadu English — именно такая платформа.",
      sections: [
        { h: "Преимущества онлайн-обучения", ul: ["Не нужно тратить время на дорогу — занятия с телефона или компьютера", "Расписание подстраивается под вас", "Стоимость заметно ниже, чем в учебном центре", "AI-репетитор не устаёт и не смеётся над ошибками"] },
        { h: "Как проходит занятие в Kakadu", p: ["Сначала вы проходите 10-минутный тест уровня, и Kakadu составляет личный план. Каждый день — голосовой разговор с AI: он задаёт вопросы на английском, вы отвечаете, а ошибки он мягко исправляет и объясняет правило на русском или узбекском.", "Новые слова из разговоров сами попадают в ваш словарь и повторяются вовремя. С ростом уровня вы переходите к живым 10-минутным разговорам с учениками со всего мира."] },
        { h: "Как получить максимум от онлайн-курса", ul: ["Занимайтесь каждый день хотя бы 15 минут — регулярность важнее длительности", "Говорите в наушниках, так анализ произношения точнее", "Не бойтесь ошибаться: каждая ошибка — новое правило", "Раз в неделю смотрите отчёт о прогрессе"] }
      ],
      faq: [
        { q: "Эффективен ли онлайн-курс английского?", a: "Да, если в нём есть ежедневная разговорная практика и разбор ошибок. Одних видеоуроков мало — в Kakadu основное время уходит на голосовой разговор." },
        { q: "Онлайн-занятия бесплатные?", a: "В бесплатном тарифе Kakadu есть несколько минут AI-разговора в день, тест уровня и базовые уроки. Для большего объёма практики есть платные тарифы." },
        { q: "Какое устройство нужно?", a: "Достаточно телефона или компьютера с браузером и наушников. Ничего устанавливать не нужно." }
      ]
    },
    en: {
      title: "Online English Course with an AI Tutor | Kakadu English",
      desc: "Learn English online: voice lessons with an AI tutor, explanations in Uzbek and Russian, speaking practice, grammar and IELTS prep. Start Kakadu English for free.",
      kw: ["online english course", "learn english online", "english lessons online", "online english classes uzbekistan", "ai english tutor", "english tutor online", "learn english at home"],
      h1: "Online English course: from home, on your schedule",
      lead: "An online English course can fully replace commuting to a language centre. What matters is daily speaking practice and a tutor who corrects your mistakes on time. Kakadu English is built exactly for that.",
      sections: [
        { h: "Why learn online", ul: ["No commute: lessons on your phone or computer, anywhere", "The schedule adapts to you", "Much cheaper than a language centre", "An AI tutor never gets tired and never laughs at mistakes"] },
        { h: "How a lesson works on Kakadu", p: ["You start with a 10-minute placement test and Kakadu builds your personal plan. Every day you have a voice conversation with the AI: it asks questions in English, you answer, and it gently corrects mistakes and explains the rule in Uzbek or Russian.", "New words from your chats go into your vocabulary automatically and come back for review on time. As your level grows, you move on to 10-minute live chats with learners around the world."] },
        { h: "Getting the most from an online course", ul: ["Practise at least 15 minutes every day: consistency beats long sessions", "Use headphones for more accurate pronunciation feedback", "Don’t fear mistakes: each one is a new rule learned", "Review your progress report once a week"] }
      ],
      faq: [
        { q: "Are online English courses effective?", a: "Yes, when they include daily speaking practice and error correction. Watching videos alone is not enough, so most of your time on Kakadu goes to voice conversation." },
        { q: "Are the online lessons free?", a: "Kakadu’s free plan includes a few minutes of AI chat a day, the placement test and core lessons. Paid plans add more practice." },
        { q: "What device do I need?", a: "A phone or computer with a browser and headphones. Nothing to install." }
      ]
    }
  },
  {
    id: "ielts",
    slug: { uz: "ielts", ru: "ielts", en: "ielts-preparation" },
    icon: "cap",
    uz: {
      title: "IELTS tayyorgarlik onlayn — Speaking, Writing va mock testlar | Kakadu English",
      desc: "IELTS ga onlayn tayyorlaning: AI bilan Speaking mashqi, Writing tekshiruvi, imtihon formatidagi mock testlar va band score bahosi. O‘zbek tilida tushuntirish bilan.",
      kw: ["IELTS", "IELTS tayyorgarlik", "IELTS kurs", "IELTS onlayn", "IELTS speaking", "IELTS writing", "IELTS mock test", "IELTS 7", "IELTS band score", "IELTS uchun ingliz tili", "IELTS Toshkent"],
      h1: "IELTS ga tayyorgarlik: Speaking, Writing va mock testlar",
      lead: "IELTS to‘rt qismdan iborat: Listening, Reading, Writing va Speaking. Ko‘pchilik uchun eng qiyini — Speaking va Writing, chunki ularni mustaqil tekshirish qiyin. Kakadu aynan shu ikki qismda AI yordamida har kuni mashq qilish imkonini beradi.",
      sections: [
        { h: "IELTS tuzilishi qisqacha", ul: ["Listening — taxminan 30 daqiqa, 4 qism, 40 savol", "Reading — 60 daqiqa, 3 matn, 40 savol", "Writing — 60 daqiqa, Task 1 (grafik yoki xat) va Task 2 (esse)", "Speaking — 11–14 daqiqa, 3 qism, imtihonchi bilan suhbat"] },
        { h: "Kakadu bilan Speaking tayyorgarligi", p: ["AI imtihonchi Part 1, Part 2 (cue card) va Part 3 savollarini beradi. Javobingizdan keyin to‘rt mezon bo‘yicha baho olasiz: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy va Pronunciation. Har bir xato o‘zbek tilida tushuntiriladi, yaxshiroq javob varianti ham ko‘rsatiladi."] },
        { h: "Writing va mock testlar", p: ["Task 1 va Task 2 eslaringizni yozasiz, AI esa grammatika, so‘z boyligi va tuzilish bo‘yicha xatolarni belgilab, taxminiy band score beradi. Har hafta imtihon formatidagi mock test topshirib, qaysi qismga ko‘proq e’tibor berish kerakligini ko‘rasiz."] }
      ],
      faq: [
        { q: "IELTS ga qancha vaqtda tayyorlanish mumkin?", a: "Bu boshlang‘ich darajangiz va maqsadli ballga bog‘liq. Odatda bir band ko‘tarilish uchun bir necha oylik muntazam mashq kerak bo‘ladi. Kakadu daraja testi sizga mos rejani ko‘rsatadi." },
        { q: "IELTS Speaking ni uyda mashq qilsa bo‘ladimi?", a: "Ha. Kakadu’da AI imtihonchi bilan haqiqiy format bo‘yicha mashq qilasiz va har javobdan keyin mezonlar bo‘yicha fikr olasiz." },
        { q: "Kakadu bahosi rasmiy IELTS natijasimi?", a: "Yo‘q, bu taxminiy baho. Rasmiy natijani faqat British Council yoki IDP o‘tkazadigan imtihon beradi." }
      ]
    },
    ru: {
      title: "Подготовка к IELTS онлайн — Speaking, Writing, пробные тесты | Kakadu English",
      desc: "Подготовка к IELTS онлайн: тренировка Speaking с AI, проверка Writing, пробные тесты в формате экзамена и оценка band score. Объяснения на русском и узбекском.",
      kw: ["IELTS", "подготовка к IELTS", "IELTS онлайн", "курсы IELTS", "IELTS speaking", "IELTS writing", "пробный тест IELTS", "IELTS Ташкент"],
      h1: "Подготовка к IELTS: Speaking, Writing и пробные тесты",
      lead: "IELTS состоит из четырёх частей: Listening, Reading, Writing и Speaking. Сложнее всего обычно Speaking и Writing — их трудно проверить самостоятельно. Kakadu позволяет тренировать именно эти части каждый день с помощью AI.",
      sections: [
        { h: "Структура IELTS кратко", ul: ["Listening — около 30 минут, 4 части, 40 вопросов", "Reading — 60 минут, 3 текста, 40 вопросов", "Writing — 60 минут, Task 1 (график или письмо) и Task 2 (эссе)", "Speaking — 11–14 минут, 3 части, разговор с экзаменатором"] },
        { h: "Speaking с Kakadu", p: ["AI-экзаменатор задаёт вопросы Part 1, Part 2 (cue card) и Part 3. После ответа вы получаете оценку по четырём критериям: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy и Pronunciation. Каждая ошибка объясняется на русском, плюс пример более сильного ответа."] },
        { h: "Writing и пробные тесты", p: ["Вы пишете эссе Task 1 и Task 2, а AI отмечает ошибки в грамматике, лексике и структуре и даёт примерный band score. Каждую неделю — пробный тест в формате экзамена, чтобы видеть, какой части уделить больше внимания."] }
      ],
      faq: [
        { q: "Сколько времени нужно на подготовку к IELTS?", a: "Зависит от стартового уровня и целевого балла. Обычно на рост на один band уходит несколько месяцев регулярной практики. Тест уровня Kakadu покажет подходящий план." },
        { q: "Можно ли тренировать IELTS Speaking дома?", a: "Да. В Kakadu вы тренируетесь с AI-экзаменатором в реальном формате и получаете разбор по критериям после каждого ответа." },
        { q: "Оценка Kakadu — официальный результат IELTS?", a: "Нет, это примерная оценка. Официальный результат даёт только экзамен British Council или IDP." }
      ]
    },
    en: {
      title: "IELTS Preparation Online — Speaking, Writing & Mock Tests | Kakadu English",
      desc: "Prepare for IELTS online: Speaking practice with an AI examiner, Writing feedback, exam-format mock tests and estimated band scores. Explanations in Uzbek and Russian.",
      kw: ["IELTS preparation", "IELTS online course", "IELTS speaking practice", "IELTS writing feedback", "IELTS mock test", "IELTS uzbekistan", "IELTS band score"],
      h1: "IELTS preparation: Speaking, Writing and mock tests",
      lead: "IELTS has four parts: Listening, Reading, Writing and Speaking. Speaking and Writing are usually the hardest because they are difficult to check on your own. Kakadu lets you practise exactly those parts every day with AI.",
      sections: [
        { h: "IELTS at a glance", ul: ["Listening — about 30 minutes, 4 parts, 40 questions", "Reading — 60 minutes, 3 texts, 40 questions", "Writing — 60 minutes, Task 1 (graph or letter) and Task 2 (essay)", "Speaking — 11–14 minutes, 3 parts, face-to-face with an examiner"] },
        { h: "Speaking practice with Kakadu", p: ["An AI examiner asks Part 1, Part 2 (cue card) and Part 3 questions. After each answer you get feedback on the four criteria: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation. Every mistake is explained in Uzbek or Russian, with a stronger sample answer."] },
        { h: "Writing and mock tests", p: ["You write Task 1 and Task 2 essays; the AI marks grammar, vocabulary and structure issues and gives an estimated band score. A weekly exam-format mock test shows which part needs the most work."] }
      ],
      faq: [
        { q: "How long does IELTS preparation take?", a: "It depends on your starting level and target score. Moving up one band usually takes a few months of regular practice. Kakadu’s placement test suggests a plan." },
        { q: "Can I practise IELTS Speaking at home?", a: "Yes. On Kakadu you practise with an AI examiner in the real format and get criteria-based feedback after every answer." },
        { q: "Is the Kakadu score an official IELTS result?", a: "No, it is an estimate. Only the official British Council or IDP exam gives an IELTS result." }
      ]
    }
  },
  {
    id: "speaking",
    slug: { uz: "speaking", ru: "razgovornyy-angliyskiy", en: "english-speaking-practice" },
    icon: "mic",
    uz: {
      title: "Ingliz tilida gapirishni o‘rganish — speaking amaliyoti AI bilan | Kakadu English",
      desc: "Ingliz tilida erkin gapirishni o‘rganing: AI bilan har kuni ovozli suhbat, talaffuz tahlili va dunyo bo‘ylab suhbatdoshlar. Speaking dasturi o‘zbek tilida tushuntirish bilan.",
      kw: ["speaking", "ingliz tilida gapirish", "ingliz tilida gapirishni o‘rganish", "speaking amaliyoti", "speaking dastur", "speaking programma", "english speaking", "ingliz tili talaffuz", "ingliz tilida erkin gapirish", "speaking club"],
      h1: "Ingliz tilida gapirishni o‘rganish: har kuni speaking amaliyoti",
      lead: "Ko‘pchilik grammatikani biladi, lekin gapirishga kelganda to‘xtab qoladi. Sababi oddiy: gapirish — bu ko‘nikma, uni faqat gapirib o‘rganish mumkin. Kakadu sizga har kuni xavfsiz muhitda gapirish imkonini beradi.",
      sections: [
        { h: "Nega gapirish qiyin?", ul: ["Amaliyot yetishmaydi: darsda gapirishga bir-ikki daqiqa tegadi", "Xato qilishdan va kulgi bo‘lishdan qo‘rqish", "So‘zlar bilinadi, lekin tez esga tushmaydi", "Talaffuzni kim tuzatishini bilmaysiz"] },
        { h: "Kakadu speaking dasturi", p: ["Har kuni AI bilan istalgan mavzuda ovozli suhbat qilasiz: kafe, aeroport, ish suhbati yoki erkin mavzu. AI tushunmagan joyingizni o‘zbekcha tushuntiradi, xatolarni tuzatadi va suhbat oxirida talaffuz, grammatika, ravonlik va so‘z boyligi bo‘yicha baho beradi.", "Ishonch paydo bo‘lgach, darajangizga mos odam bilan 10 daqiqalik jonli suhbatga chiqasiz. Bu speaking club’ning onlayn varianti, faqat istalgan vaqtda."] },
        { h: "Gapirishni tezroq rivojlantirish uchun", ul: ["Kuniga 10–15 daqiqa baland ovozda gapiring", "Yangi so‘zni darhol gapda ishlating", "O‘z ovozingizni yozib, qayta tinglang", "Mukammal gapirishni kutmang — tushunarli gapirish yetarli"] }
      ],
      faq: [
        { q: "Ingliz tilida gapirishni qancha vaqtda o‘rganish mumkin?", a: "Har kuni 15 daqiqa mashq qilsangiz, odatda bir necha hafta ichida gapirish ancha yengillashganini sezasiz. To‘liq ravonlik darajangizga bog‘liq." },
        { q: "Sherigim bo‘lmasa qanday mashq qilaman?", a: "Kakadu’da sherik sifatida AI ustoz har doim tayyor. Keyinchalik platforma sizni boshqa o‘quvchilar bilan juftlaydi." },
        { q: "Talaffuzni ham tuzatadimi?", a: "Ha, har suhbatdan keyin talaffuz bo‘yicha baho va qaysi so‘zlarga e’tibor berish kerakligi ko‘rsatiladi." }
      ]
    },
    ru: {
      title: "Разговорный английский — практика speaking с AI | Kakadu English",
      desc: "Научитесь свободно говорить по-английски: ежедневные голосовые разговоры с AI, анализ произношения и собеседники со всего мира. Объяснения на русском и узбекском.",
      kw: ["разговорный английский", "speaking", "практика английского", "говорить по-английски", "разговорная практика английский", "произношение английский", "разговорный клуб английский"],
      h1: "Разговорный английский: ежедневная практика speaking",
      lead: "Многие знают грамматику, но теряются, когда нужно говорить. Причина проста: говорение — это навык, и учится он только в разговоре. Kakadu даёт возможность говорить каждый день в безопасной обстановке.",
      sections: [
        { h: "Почему говорить трудно?", ul: ["Мало практики: на уроке на разговор остаётся пара минут", "Страх ошибиться и выглядеть смешно", "Слова знакомы, но не вспоминаются быстро", "Некому исправить произношение"] },
        { h: "Программа speaking в Kakadu", p: ["Каждый день — голосовой разговор с AI на любую тему: кафе, аэропорт, собеседование или свободная беседа. AI объясняет непонятное по-русски, исправляет ошибки и в конце оценивает произношение, грамматику, беглость и словарный запас.", "Когда появится уверенность, вы переходите к живым 10-минутным разговорам с собеседником вашего уровня. Это разговорный клуб онлайн — в любое время."] },
        { h: "Как быстрее заговорить", ul: ["Говорите вслух 10–15 минут в день", "Сразу используйте новое слово в предложении", "Записывайте себя и переслушивайте", "Не ждите идеальной речи — достаточно, чтобы вас понимали"] }
      ],
      faq: [
        { q: "За сколько можно научиться говорить по-английски?", a: "При ежедневной практике по 15 минут большинство замечает, что говорить стало легче, уже через несколько недель. Полная беглость зависит от уровня." },
        { q: "Как практиковаться без собеседника?", a: "В Kakadu собеседником всегда готов быть AI-наставник. Позже платформа подберёт вам живых собеседников." },
        { q: "Исправляется ли произношение?", a: "Да, после каждого разговора вы видите оценку произношения и слова, на которые стоит обратить внимание." }
      ]
    },
    en: {
      title: "English Speaking Practice with AI | Kakadu English",
      desc: "Learn to speak English fluently: daily voice conversations with AI, pronunciation feedback and live partners worldwide. Explanations in Uzbek and Russian.",
      kw: ["english speaking practice", "practice speaking english", "speak english fluently", "english conversation practice", "pronunciation practice", "online speaking club"],
      h1: "English speaking practice, every day",
      lead: "Many learners know the grammar but freeze when it’s time to speak. The reason is simple: speaking is a skill, and you only build it by speaking. Kakadu gives you a safe place to speak every day.",
      sections: [
        { h: "Why speaking feels hard", ul: ["Too little practice: a class gives you a minute or two to talk", "Fear of mistakes and looking silly", "You know the words but can’t recall them fast", "No one corrects your pronunciation"] },
        { h: "The Kakadu speaking programme", p: ["Every day you have a voice conversation with the AI on any topic: a café, an airport, a job interview or free talk. It explains what you missed in Uzbek or Russian, corrects mistakes and scores your pronunciation, grammar, fluency and vocabulary at the end.", "Once you feel confident, you move on to 10-minute live chats with a partner at your level. It’s an online speaking club, available any time."] },
        { h: "Speak sooner", ul: ["Speak out loud for 10–15 minutes a day", "Use every new word in a sentence right away", "Record yourself and listen back", "Aim to be understood, not to be perfect"] }
      ],
      faq: [
        { q: "How long does it take to start speaking English?", a: "With 15 minutes of daily practice, most learners notice speaking gets easier within a few weeks. Full fluency depends on your level." },
        { q: "How do I practise without a partner?", a: "On Kakadu the AI tutor is always ready to talk. Later the platform pairs you with real learners." },
        { q: "Does it correct pronunciation?", a: "Yes. After every chat you see a pronunciation score and the words to work on." }
      ]
    }
  },
  {
    id: "zero",
    slug: { uz: "ingliz-tilini-noldan-organish", ru: "angliyskiy-s-nulya", en: "learn-english-from-zero" },
    icon: "route",
    uz: {
      title: "Ingliz tilini noldan o‘rganish — bosqichma-bosqich reja | Kakadu English",
      desc: "Ingliz tilini noldan qanday o‘rganish mumkin? A1 dan B1 gacha aniq reja: birinchi so‘zlar, asosiy grammatika, kundalik gapirish. O‘zbek tilida tushuntiradigan AI ustoz bilan bepul boshlang.",
      kw: ["ingliz tilini noldan o‘rganish", "ingliz tili noldan", "ingliz tilini qanday o‘rganish", "ingliz tilini tez o‘rganish", "ingliz tili boshlang‘ich", "ingliz tili A1", "ingliz tili grammatikasi", "ingliz tili lug‘at", "ingliz tili alifbo", "ingliz tilini mustaqil o‘rganish"],
      h1: "Ingliz tilini noldan o‘rganish: aniq reja",
      lead: "Ingliz tilini noldan boshlash qo‘rqinchli tuyuladi, lekin to‘g‘ri tartib bilan bu juda mumkin. Quyida A1 dan B1 gacha bo‘lgan yo‘l va har bosqichda nima qilish kerakligi yozilgan.",
      sections: [
        { h: "1-bosqich (A1): poydevor", ul: ["Alifbo, o‘qish qoidalari va asosiy tovushlar", "Eng ko‘p ishlatiladigan 300–500 so‘z", "To be, Present Simple, oddiy savollar", "O‘zingiz haqingizda 5–6 gap ayta olish"] },
        { h: "2-bosqich (A2): kundalik muloqot", ul: ["Past Simple — o‘tgan kun haqida gapirish", "Do‘kon, kafe, transportdagi iboralar", "1000–1500 so‘z", "AI bilan har kuni 10 daqiqalik qisqa suhbat"] },
        { h: "3-bosqich (B1): erkinlik", ul: ["Present Perfect, kelasi zamon va shart gaplar", "Fikringizni tushuntirish va sabab keltirish", "Ingliz tilidagi podkast va videolarni tushunish", "Jonli suhbatdoshlar bilan gaplashish"] },
        { h: "Kakadu qanday yordam beradi", p: ["Kakadu sizning darajangizni aniqlaydi va shu tartibda shaxsiy reja tuzadi. Har bir qoida o‘zbek tilida sodda qilib tushuntiriladi, yangi so‘zlar avtomatik takrorlanadi, AI esa birinchi kundanoq siz bilan gaplasha boshlaydi — eng oddiy gaplardan."] }
      ],
      faq: [
        { q: "Ingliz tilini noldan o‘rganish uchun qancha vaqt kerak?", a: "Cambridge baholashicha, B1 darajaga yetish uchun taxminan 350–400 soat yo‘naltirilgan o‘qish kerak. Kuniga 30–60 daqiqa bilan bu odatda 1–1,5 yil degani." },
        { q: "Ingliz tilini mustaqil o‘rganish mumkinmi?", a: "Ha, agar reja, muntazam amaliyot va xatolarni tuzatadigan manba bo‘lsa. Kakadu’da bu vazifani AI ustoz bajaradi." },
        { q: "Grammatikadan boshlash kerakmi yoki gapirishdan?", a: "Ikkalasini birga olib boring: oz grammatika va darhol gapirish. Qoida gapda ishlatilganda yaxshi esda qoladi." }
      ]
    },
    ru: {
      title: "Английский с нуля — пошаговый план | Kakadu English",
      desc: "Как выучить английский с нуля? Чёткий план от A1 до B1: первые слова, базовая грамматика, разговор каждый день. Начните бесплатно с AI-репетитором, который объясняет по-русски.",
      kw: ["английский с нуля", "как выучить английский", "английский для начинающих", "английский A1", "грамматика английского", "выучить английский самостоятельно", "быстро выучить английский"],
      h1: "Английский с нуля: чёткий план",
      lead: "Начинать английский с нуля страшно, но при правильном порядке это вполне реально. Ниже — путь от A1 до B1 и что делать на каждом этапе.",
      sections: [
        { h: "Этап 1 (A1): фундамент", ul: ["Алфавит, правила чтения и основные звуки", "300–500 самых частых слов", "To be, Present Simple, простые вопросы", "Умение сказать о себе 5–6 предложений"] },
        { h: "Этап 2 (A2): бытовое общение", ul: ["Past Simple — рассказ о прошедшем дне", "Фразы для магазина, кафе, транспорта", "1000–1500 слов", "Короткий 10-минутный разговор с AI каждый день"] },
        { h: "Этап 3 (B1): свобода", ul: ["Present Perfect, будущее время и условные предложения", "Умение объяснить мнение и привести причины", "Понимание подкастов и видео на английском", "Разговоры с живыми собеседниками"] },
        { h: "Чем поможет Kakadu", p: ["Kakadu определит ваш уровень и составит личный план в этом порядке. Каждое правило объясняется просто, по-русски, новые слова повторяются автоматически, а AI начинает говорить с вами с первого дня — с самых простых фраз."] }
      ],
      faq: [
        { q: "Сколько времени нужно, чтобы выучить английский с нуля?", a: "По оценке Cambridge, для уровня B1 нужно примерно 350–400 часов направленного обучения. При 30–60 минутах в день это обычно 1–1,5 года." },
        { q: "Можно ли выучить английский самостоятельно?", a: "Да, если есть план, регулярная практика и источник исправления ошибок. В Kakadu эту роль выполняет AI-наставник." },
        { q: "Начинать с грамматики или с разговора?", a: "Совмещайте: немного грамматики и сразу говорение. Правило лучше запоминается, когда используется в речи." }
      ]
    },
    en: {
      title: "Learn English from Zero — a Step-by-Step Plan | Kakadu English",
      desc: "How to learn English from scratch: a clear plan from A1 to B1 with first words, core grammar and daily speaking. Start free with an AI tutor that explains in Uzbek and Russian.",
      kw: ["learn english from zero", "learn english from scratch", "english for beginners", "how to learn english", "english A1", "english grammar basics", "learn english by yourself"],
      h1: "Learn English from zero: a clear plan",
      lead: "Starting English from scratch feels daunting, but with the right order it is very doable. Here is the path from A1 to B1 and what to do at each stage.",
      sections: [
        { h: "Stage 1 (A1): foundations", ul: ["The alphabet, reading rules and key sounds", "The 300–500 most common words", "To be, Present Simple, simple questions", "Saying 5–6 sentences about yourself"] },
        { h: "Stage 2 (A2): everyday conversation", ul: ["Past Simple to talk about your day", "Phrases for shops, cafés and transport", "1,000–1,500 words", "A short 10-minute AI chat every day"] },
        { h: "Stage 3 (B1): freedom", ul: ["Present Perfect, future forms and conditionals", "Explaining your opinion and giving reasons", "Understanding English podcasts and videos", "Talking with live partners"] },
        { h: "How Kakadu helps", p: ["Kakadu finds your level and builds a personal plan in this order. Every rule is explained simply in Uzbek or Russian, new words are reviewed automatically, and the AI starts talking with you from day one, beginning with the simplest phrases."] }
      ],
      faq: [
        { q: "How long does it take to learn English from zero?", a: "Cambridge estimates about 350–400 guided learning hours to reach B1. At 30–60 minutes a day that is usually 1–1.5 years." },
        { q: "Can I learn English by myself?", a: "Yes, with a plan, regular practice and something that corrects your mistakes. On Kakadu the AI tutor plays that role." },
        { q: "Should I start with grammar or speaking?", a: "Do both: a little grammar, then speak right away. Rules stick when you use them." }
      ]
    }
  }
];

export const GUIDE_LABELS = {
  heading: ["Foydali qo‘llanmalar", "Полезные материалы", "Helpful guides"],
  home: ["Bosh sahifa", "Главная", "Home"],
  faq: ["Ko‘p beriladigan savollar", "Частые вопросы", "FAQ"],
  related: ["Boshqa qo‘llanmalar", "Другие материалы", "More guides"],
  ctaTitle: ["Bugunoq Kakadu bilan gaplashing", "Поговорите с Kakadu уже сегодня", "Talk with Kakadu today"],
  ctaText: ["Daraja testini topshiring va AI ustoz bilan birinchi suhbatingizni bepul boshlang.", "Пройдите тест уровня и начните первый разговор с AI-наставником бесплатно.", "Take the placement test and start your first AI conversation for free."],
  ctaBtn: ["Bepul boshlash", "Начать бесплатно", "Start for free"],
  toHome: ["Kakadu haqida batafsil", "Подробнее о Kakadu", "More about Kakadu"],
  updated: ["Yangilangan", "Обновлено", "Updated"],
  read: ["daqiqa o‘qish", "мин чтения", "min read"]
};
