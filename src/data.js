// src/data.js

// --- SOCIAL LINKS & CONTACTS ---
export const socialLinks = {
  whatsapp: "https://wa.me/79916818492",
  telegram: "https://t.me/switchleveler",
  hh: "https://hh.ru/resume/b94af167ff049031c70039ed1f746c61797571",
  email: "Shastovsckiy@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniil-shastovsckiy-a195b4301", // Замени на актуальную, если есть
  github: "https://github.com/Dan1elShastovsckiy",
  phoneDisplay: "+7 (991) 681-84-92"
};

// Обновленный и расширенный стек технологий
const techStack = [
  // Core SEO & Strategy
  "Technical SEO", "International SEO", "E-E-A-T Strategy", "Enterprise SEO",
  "Semantic Core", "Link Building", "ASO (App Store)", "Local SEO",
  
  // Analytics & Tools
  "Google Analytics 4", "GSC & Yandex Metrica", "Screaming Frog", "Ahrefs/Semrush",
  "Data Analysis", "Log File Analysis", "Looker Studio",
  
  // Development & Automation (Твоя киллер-фича)
  "Python (FastAPI/Pandas)", "React.js & Next.js", "SQL & BigQuery", "Automation Scripts",
  "Docker & Git", "HTML5/CSS3", "Regex",
  
  // Management
  "Team Leadership", "Agile/Scrum", "Product Management"
];

// --- SEO TEXTS FOR HOMEPAGE ---
const seoTextRu = {
  title: "Senior SEO-специалист и Full-stack разработчик (Python/React)",
  text: `
    <p class="mb-2">
      Меня зовут <strong>Даниил Шастовский</strong>. Я — Senior SEO-специалист и Team Lead с 8-летним опытом, обладающий навыками Full-stack разработки. Это редкое сочетание позволяет мне видеть проект "под капотом": я не просто нахожу технические ошибки, но и понимаю архитектуру React/Next.js приложений, могу самостоятельно внедрить правки или написать скрипт автоматизации на Python.
    </p>
    
    <p class="mb-2">
      Моя карьера прошла путь от разработки сайтов до управления SEO-отделами в крупных агентствах (Zum Punkt) и ведения Enterprise-проектов (экосистема Сбера, Leroy Merlin, Askona). Я создаю собственные SaaS-продукты для SEO, что подтверждает мое продуктовое видение.
    </p>

    <h3 class="text-lg font-bold text-gray-900 mt-4 mb-2">Мой подход к работе:</h3>
    <ul class="list-disc pl-5 space-y-1 mb-4">
      <li><strong>Data-Driven SEO:</strong> Принимаю решения только на основе данных. Использую SQL, BigQuery и Python (Pandas) для анализа больших массивов семантики и логов.</li>
      <li><strong>Автоматизация и AI:</strong> Внедряю нейросети (LLM) для генерации контента и кластеризации запросов. Пишу кастомные парсеры и скрипты мониторинга, которые экономят сотни часов ручной работы.</li>
      <li><strong>Technical SEO для SPA:</strong> Глубоко понимаю проблемы рендеринга (CSR/SSR) в JS-фреймворках и умею их решать для Google и Яндекса.</li>
    </ul>

    <h3 class="text-lg font-bold text-gray-900 mt-4 mb-2">Ключевые компетенции:</h3>
    <ul class="list-disc pl-5 space-y-1">
      <li>Комплексное продвижение в высококонкурентных нишах (Fintech, eCommerce, Medical) в России, США, ОАЭ и Европе.</li>
      <li>Разработка стратегий E-E-A-T для YMYL тематик (медицина, финансы).</li>
      <li>Восстановление сайтов после фильтров (Core Updates), взломов и технических сбоев.</li>
      <li>Построение PBN-сетей и многоуровневых (Tier) ссылочных стратегий для западных рынков.</li>
      <li>Разработка технических заданий, которые разработчики понимают с первого раза.</li>
    </ul>
  `
};

const seoTextEn = {
  title: "Senior SEO Specialist & Full-stack Developer (Python/React)",
  text: `
    <p class="mb-2">
      My name is <strong>Daniil Shastovskiy</strong>. I am a Senior SEO Specialist and Team Lead with nearly 8 years of experience, distinguished by a strong background in Full-stack development. This unique hybrid skillset allows me to look "under the hood" of any project: I don't just identify technical issues; I understand the architecture of React/Next.js applications and can implement fixes or write automation scripts myself.
    </p>
    
    <p class="mb-2">
      My career spans from web development to leading SEO departments in top agencies and managing Enterprise accounts (Sber ecosystem, Leroy Merlin, Askona). I build my own SEO SaaS products, which demonstrates my product-oriented mindset and ability to deliver scalable solutions.
    </p>

    <h3 class="text-lg font-bold text-gray-900 mt-4 mb-2">My Approach:</h3>
    <ul class="list-disc pl-5 space-y-1 mb-4">
      <li><strong>Data-Driven SEO:</strong> Decisions backed by hard data. I leverage SQL, BigQuery, and Python (Pandas) to analyze massive datasets and server logs.</li>
      <li><strong>Automation & AI:</strong> I integrate LLMs for content generation and query clustering. I write custom parsers (FastAPI) to automate routine tasks, saving hundreds of work hours.</li>
      <li><strong>Technical SEO for JS Frameworks:</strong> Expert knowledge in solving rendering issues (CSR/SSR) for Single Page Applications (SPA) to ensure perfect indexability.</li>
    </ul>

    <h3 class="text-lg font-bold text-gray-900 mt-4 mb-2">Key Competencies:</h3>
    <ul class="list-disc pl-5 space-y-1">
      <li>Comprehensive SEO strategy for high-competition niches (Fintech, eCommerce, Medical) in the US, UAE, and Europe.</li>
      <li>E-E-A-T Strategy development for YMYL sectors.</li>
      <li>Recovery from Core Update penalties, hacks, and technical failures.</li>
      <li>Advanced Link Building strategies (Tiered link building, PBNs) for global markets.</li>
      <li>Creating technical specifications that developers understand immediately.</li>
    </ul>
  `
};

// --- MAIN CONTENT EXPORT ---
export const content = {
  // ================= ENGLISH VERSION =================
  en: {
    nav: { resume: "Resume", projects: "Projects", contact: "Contact", hire: "Hire Me" },
    personalInfo: {
      name: "Daniil Shastovsky",
      title: "Senior SEO Analyst / Head of SEO Department",
      location: "Remote (Worldwide)",
      about: "Results-oriented Senior SEO Specialist & Team Lead with nearly 8 years of experience. I combine deep technical SEO expertise (Python, FastAPI, SQL) with strategic leadership. Open to offers for individual projects or Senior roles.",
      skills: techStack,
      heroBtn: "Download CV"
    },
    headers: {
      skills: "Technical Proficiency",
      experience: "Work Experience",
      projects: "Featured Projects",
      contact: "Let's Work Together",
      modalTitle: "Contact Me",
      modalSubtitle: "I usually respond within 1 hour via Telegram/WhatsApp.",
      techStack: "Tech Stack",
      keyResults: "Key Results",
      contactSectionTitle: "Get in Touch",
      contactSectionSubtitle: "I usually respond within 1 hour via Telegram/WhatsApp.",
      orEmail: "Or email"
    },
    seoSection: seoTextEn,
    experience: [
      {
        company: "Zum Punkt",
        role: "Senior SEO Specialist / Group Head",
        period: "Jan 2023 – Dec 2025",
        description: "Managing a team of SEO specialists(total 10 spec. junior/middle lvl). Leading SEO strategy for 3 major enterprise accounts (including Sber ecosystem). Spearheaded AI integration into SEO workflows using Python scripts, reducing manual workload by 30%.",
      },
      {
        company: "Molinos",
        role: "Middle SEO Specialist",
        period: "Feb 2022 – Dec 2022",
        description: "Managed SEO for top-tier retailers (Leroy Merlin, Sportmaster). Implemented massive content strategies and conducted deep technical audits for new clients.",
      },
      {
        company: "Zharkov SEO Agency",
        role: "SEO Specialist",
        period: "Jun 2021 – Feb 2022",
        description: "Managed 8+ clients simultaneously. Successfully recovered sites from penalties and grew organic traffic for European pharmacy projects by 75%.",
      }
    ],
    projects: [
      {
        id: "seo-control",
        title: "SEO Control SaaS",
        category: "Development & SEO",
        image: "/assets/portfolio/seocontrol_logo.webp",
        shortDesc: "Proprietary SaaS tool for automated SEO monitoring (Python + React).",
        contentBlocks: [
          { type: 'text', content: "A self-developed SaaS product to automate SEO monitoring. The service aggregates data from Yandex.Webmaster, Metrica, and Google Search Console, builds unified reports, and alerts on errors." },
          { type: 'image', src: "/assets/portfolio/seocontrol_demo.gif", caption: "Dashboard Demo" },
          { type: 'text', content: "Tech stack: Python (FastAPI), React, Docker, PostgreSQL." }
        ],
        stack: ["Python", "FastAPI", "React", "Docker", "PostgreSQL"],
        link: "https://seocontrol.shastovsky.ru/",
        result: "Automated reporting for 50+ projects, reducing routine check time by 90%."
      },
      {
        id: "genotek",
        title: "Genotek.ru",
        category: "Medical / eCommerce",
        image: "/assets/portfolio/genotek_logo.webp",
        shortDesc: "Genetic testing service. +42% organic traffic growth.",
        contentBlocks: [
          { type: 'text', content: "Long-term project management focusing on organic growth. Implemented a comprehensive content strategy for genetic testing queries and optimized E-E-A-T factors." },
          { type: 'image', src: "/assets/portfolio/genotek_metrics1.webp", caption: "Yearly Traffic Dynamics" },
          { type: 'image', src: "/assets/portfolio/genotek_metrics2.webp", caption: "Keyword Distribution" },
          { type: 'image', src: "/assets/portfolio/genotek_metrics3.webp", caption: "User Engagement" }
        ],
        stack: ["SEO Strategy", "Content Marketing", "Technical Audit"],
        result: "Achieved +42% organic traffic growth YoY and reached Top-3 for key genetic testing keywords."
      },
      {
        id: "vitateka",
        title: "Vitateka.ee",
        category: "eCommerce (Europe)",
        image: "/assets/portfolio/vitateka_logo.webp",
        shortDesc: "European pharmacy. Traffic recovery after hack (+75% growth).",
        contentBlocks: [
          { type: 'text', content: "Key task: Rehabilitation of a European online pharmacy project after a hacking incident. Performed deep technical audit, link mass cleanup, and implemented a new regional strategy." },
          { type: 'image', src: "/assets/portfolio/vitateka_metrics1.webp", caption: "Recovery after cleanup" },
          { type: 'image', src: "/assets/portfolio/vitateka_metrics2.webp", caption: "Traffic Comparison YoY" }
        ],
        stack: ["Recovery Strategy", "Technical SEO", "International SEO"],
        result: "Improved average position by 35% across Europe. Organic traffic grew by 75% compared to the pre-crisis period."
      },
      {
        id: "credistory",
        title: "Credistory.ru",
        category: "Fintech",
        image: "/assets/portfolio/credistory_logo.webp",
        shortDesc: "Fintech blog. +55% month-over-month growth.",
        contentBlocks: [
          { type: 'text', content: "Developing and implementing a content strategy for a financial history service. Focused on capturing high-intent informational queries (YMYL)." },
          { type: 'image', src: "/assets/portfolio/credistory_metrics1.webp", caption: "Visibility Growth" },
          { type: 'image', src: "/assets/portfolio/credistory_metrics2.webp", caption: "Monthly Traffic Growth" }
        ],
        stack: ["Content Strategy", "Fintech SEO", "On-page Optimization"],
        result: "Impressive organic traffic growth of +55% month-over-month throughout the year."
      },
      {
        id: "maple-tattoo",
        title: "Maple Tattoo Supply CA",
        category: "eCommerce (Canada)",
        image: "/assets/portfolio/maple_logo.webp",
        shortDesc: "Canadian store launch from scratch.",
        contentBlocks: [
          { type: 'text', content: "Comprehensive preparation and launch of SEO promotion for a Canadian online store (Shopify). From zero to sales." },
          { type: 'image', src: "/assets/portfolio/maple_metrics1.webp", caption: "Impressions Growth" },
          { type: 'image', src: "/assets/portfolio/maple_metrics2.webp", caption: "Traffic & CTR" },
          { type: 'image', src: "/assets/portfolio/maple_metrics3.webp", caption: "Keyword Rankings" }
        ],
        stack: ["English SEO", "Shopify/Woo", "Launch Strategy"],
        result: "Completed full technical setup and initial optimization strategy for the Canadian market."
      },
      {
        id: "rsk-factory",
        title: "RSK Factory",
        category: "Manufacturing",
        image: "/assets/portfolio/rsk_factory_logo.webp",
        shortDesc: "Custom furniture factory. +63% traffic increase.",
        contentBlocks: [
          { type: 'text', content: "Unique project for custom furniture manufacturing. Focused on expanding the semantic core to capture long-tail queries." },
          { type: 'image', src: "/assets/portfolio/rsk_factory_metrics1.webp", caption: "Keyword Visibility Growth" }
        ],
        stack: ["Semantic Core", "Conversion Rate Optimization"],
        result: "Semantic core in Top-10 grew by 27%, organic traffic increased by 63% in one year."
      },
      {
        id: "shastovsky-app",
        title: "Flutter Portfolio/Blog App",
        category: "Mobile Dev",
        image: "/assets/portfolio/shastovsky_logo.webp",
        shortDesc: "Personal blog and portfolio project developed on Flutter.",
        contentBlocks: [
          { type: 'text', content: "This website/app is my personal project developed from scratch using Flutter to demonstrate mobile development skills. The source code is open for review." },
          { type: 'image', src: "/assets/portfolio/shastovsky_in1.webp", caption: "App Interface" },
          { type: 'image', src: "/assets/portfolio/shastovsky_in2.webp", caption: "Responsive Design" }
        ],
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://shastovsky.ru/",
        githubLink: "https://github.com/Dan1elShastovsckiy/shastovskyapp/",
        result: "Published open-source code on GitHub demonstrating clean architecture."
      },
      {
        id: "leroy-merlin",
        title: "LeroyMerlin.ru",
        category: "Enterprise Retail",
        image: "/assets/portfolio/leroymerlin_logo.webp",
        shortDesc: "DIY Retailer. Massive content strategy implementation.",
        contentBlocks: [
            { type: 'text', content: "Worked as a Middle SEO specialist in a large internal team. The key task was implementing a massive content strategy to displace competitors in the DIY sector." }
        ],
        stack: ["Enterprise SEO", "Large Scale", "Team Collaboration"],
        result: "Significant increase in visibility for non-branded queries across thousands of SKUs."
      },
      {
        id: "sportmaster",
        title: "Sportmaster.ru",
        category: "eCommerce",
        image: "/assets/portfolio/sportmaster_logo.webp",
        shortDesc: "Sports retailer. +35% online sales growth.",
        contentBlocks: [
            { type: 'text', content: "Contributed to +35% online sales growth in major cities. Responsible for blog content planning and site structure reorganization to improve user flow and indexing." }
        ],
        stack: ["eCommerce SEO", "Structure Optimization", "Analytics"],
        result: "Traffic growth and improved behavioral factors leading to a 35% sales increase."
      },
      {
        id: "iek-group",
        title: "IEK Group",
        category: "B2B / Industrial",
        image: "/assets/portfolio/iek_logo.webp",
        shortDesc: "Electrical equipment manufacturer. Stable growth in B2B.",
        contentBlocks: [
            { type: 'text', content: "Worked on the project as part of an agency team. The goal was to ensure stable growth in a conservative B2B niche." }
        ],
        stack: ["B2B SEO", "Agency Work", "Technical Optimization"],
        result: "Achieved systematic improvement of all key SEO metrics."
      },
      {
        id: "weitnauer",
        title: "Weitnauer",
        category: "Brand / eCommerce",
        image: "/assets/portfolio/weitnauer_logo.webp",
        shortDesc: "Swiss brand. From Zero to Top-10.",
        contentBlocks: [
            { type: 'text', content: "Took over the Swiss brand project and conducted a full audit and initial strategy within a short time frame." }
        ],
        stack: ["Launch Strategy", "Audit", "International SEO"],
        result: "Project grew from zero to Top-3 and Top-10 in key regions rapidly."
      },
      {
        id: "askona",
        title: "Askona.ru",
        category: "eCommerce / Furniture",
        image: "/assets/portfolio/askona_logo.webp",
        shortDesc: "Market leader in sleep products. Stable growth.",
        contentBlocks: [
            { type: 'text', content: "One of the most complex and competitive projects. Worked on mitigating seasonal demand drops and fighting for top positions against major aggregators." }
        ],
        stack: ["Competitive Strategy", "Seasonality Management", "Bitrix"],
        result: "Stable quarter-over-quarter growth, successfully mitigating seasonal drops."
      },
      {
        id: "sber-vmeste",
        title: "SberVmeste",
        category: "Charity / Ecosystem",
        image: "/assets/portfolio/vmeste_sber_logo.webp",
        shortDesc: "Charity platform. Maximizing visibility.",
        contentBlocks: [
            { type: 'text', content: "A vital social project where the main goal is to ensure help finds those in need. All SEO work is aimed at maximizing site visibility." }
        ],
        stack: ["Social Impact", "Visibility", "Ecosystem"],
        result: "High visibility for donation pages and charitable foundations."
      },
      {
        id: "sber-sova",
        title: "SberSova",
        category: "EdTech / Fintech",
        image: "/assets/portfolio/sbersova_logo.webp",
        shortDesc: "Investment courses platform. Successful dynamics.",
        contentBlocks: [
            { type: 'text', content: "Large platform with courses and a blog about investments. Despite the project's youth and fierce competition, we show very successful annual dynamics." }
        ],
        stack: ["EdTech SEO", "Content Marketing", "Competitive Analysis"],
        result: "Strong YoY growth in a highly competitive fintech education niche."
      }
    ]
  },

  // ================= RUSSIAN VERSION =================
  ru: {
    nav: { resume: "Резюме", projects: "Проекты", contact: "Контакты", hire: "Нанять меня" },
    personalInfo: {
      name: "Даниил Шастовский",
      title: "Senior SEO Analyst / Руководитель отдела SEO",
      location: "Удаленно (Весь мир)",
      about: "Нацеленный на результат Senior SEO-специалист и тимлид с опытом работы почти 8 лет. Сочетаю глубокую техническую экспертизу (Python, FastAPI, SQL) со стратегическим управлением. Открыт к предложениям по отдельным проектам.",
      skills: techStack,
      heroBtn: "Скачать резюме"
    },
    headers: {
      skills: "Ключевые навыки",
      experience: "Опыт работы",
      projects: "Мои проекты",
      contact: "Давайте сотрудничать",
      modalTitle: "Связаться со мной",
      modalSubtitle: "Обычно отвечаю в течении 1 часа в Телеграм/Ватсап.",
      techStack: "Стек технологий",
      keyResults: "Результаты",
      contactSectionTitle: "Связаться со мной",
      contactSectionSubtitle: "Обычно отвечаю в течение 1 часа в Телеграм/Ватсап.",
      orEmail: "Или на почту"
    },
    seoSection: seoTextRu,
    experience: [
      {
        company: "Zum Punkt",
        role: "Senior SEO-специалист / Group Head",
        period: "Янв 2023 — Дек 2025",
        description: "Руководил командой SEO специалистов(всего 10 специалистов Junior/Middle уровня). Полностью отвечал за 3-5 крупных проектов (включая экосистему Сбера). Внедряю ИИ-технологии в продвижение, пишу скрипты на Python для автоматизации.",
      },
      {
        company: "Molinos",
        role: "Middle SEO",
        period: "Фев 2022 — Дек 2022",
        description: "Работа над задачами продвижения крупных ритейлеров (Leroy Merlin, Sportmaster). Составление тех. заданий, масштабных стратегий и обучение сотрудников.",
      },
      {
        company: "Zharkov SEO Agency",
        role: "SEO-специалист",
        period: "Июнь 2021 — Фев 2022",
        description: "Ведение 8+ проектов. Успешный опыт вывода сайтов из-под фильтров и рост трафика европейской интернет-аптеки на 75%.",
      }
    ],
    projects: [
      {
        id: "seo-control",
        title: "SaaS сервис SEO Control",
        category: "Разработка & SEO",
        image: "/assets/portfolio/seocontrol_logo.webp",
        shortDesc: "Собственный SaaS-продукт для автоматизации SEO-мониторинга (Python + React).",
        contentBlocks: [
          { type: 'text', content: "Собственный SaaS-продукт для автоматизации SEO-мониторинга. Стек: Python (FastAPI), React, Docker, PostgreSQL. Сервис агрегирует данные из Яндекс.Вебмастера, Метрики и Google Search Console, строит единые отчеты и уведомляет об ошибках." },
          { type: 'image', src: "/assets/portfolio/seocontrol_demo.gif", caption: "Демонстрация дашборда" },
          { type: 'text', content: "Сервис автоматически проверяет 50+ параметров ежедневно и шлет алерты в Telegram." }
        ],
        stack: ["Python", "FastAPI", "React", "Docker", "PostgreSQL"],
        link: "https://seocontrol.shastovsky.ru/",
        result: "Автоматизация отчетности для 50+ проектов, сокращение рутины на 90%."
      },
      {
        id: "genotek",
        title: "SEO для Genotek.ru",
        category: "Медицина / eCommerce",
        image: "/assets/portfolio/genotek_logo.webp",
        shortDesc: "Генетические тесты. Рост органики +42% за год.",
        contentBlocks: [
          { type: 'text', content: "Проект вел длительное время. Основной задачей был кратный рост органического трафика по коммерческим и информационным запросам, связанным с генетикой и ДНК-тестами." },
          { type: 'image', src: "/assets/portfolio/genotek_metrics1.webp", caption: "Динамика поискового трафика за год" },
          { type: 'text', content: "Мы провели глубокую кластеризацию семантического ядра и создали сотни посадочных страниц под узкие медицинские интенты. Это позволило охватить низкочастотный трафик." },
          { type: 'image', src: "/assets/portfolio/genotek_metrics2.webp", caption: "Распределение запросов по ТОПам" },
          { type: 'image', src: "/assets/portfolio/genotek_metrics3.webp", caption: "Метрики вовлеченности аудитории" }
        ],
        stack: ["SEO Стратегия", "Контент-маркетинг", "Тех. аудит"],
        result: "Рост органического трафика на 42% и вывод ВЧ запросов в ТОП-3."
      },
      {
        id: "vitateka",
        title: "SEO для Vitateka.ee",
        category: "eCommerce (Европа)",
        image: "/assets/portfolio/vitateka_logo.webp",
        shortDesc: "Европейская аптека. +75% трафика после взлома.",
        contentBlocks: [
          { type: 'text', content: "Ключевая задача: реабилитация европейского проекта интернет-аптеки после взлома. Сайт потерял позиции из-за инъекций вредоносного кода." },
          { type: 'image', src: "/assets/portfolio/vitateka_metrics1.webp", caption: "Восстановление позиций после чистки" },
          { type: 'text', content: "За год работы средняя позиция по целевым запросам была улучшена на 35% по всем регионам Европы." },
          { type: 'image', src: "/assets/portfolio/vitateka_metrics2.webp", caption: "Сравнение трафика год к году" }
        ],
        stack: ["Восстановление", "Техническое SEO", "International SEO"],
        result: "Рост органического трафика на 75% по сравнению с докризисным периодом."
      },
      {
        id: "credistory",
        title: "SEO для блога Credistory.ru",
        category: "Финтех",
        image: "/assets/portfolio/credistory_logo.webp",
        shortDesc: "Финтех блог. +55% рост ежемесячно.",
        contentBlocks: [
          { type: 'text', content: "Результат: впечатляющий рост органического трафика на +55% к каждому месяцу в течение года. Ключевым фактором успеха стала разработка и реализация контент-стратегии (YMYL)." },
          { type: 'image', src: "/assets/portfolio/credistory_metrics1.webp", caption: "Рост видимости в поисковых системах" },
          { type: 'image', src: "/assets/portfolio/credistory_metrics2.webp", caption: "Динамика трафика по месяцам" }
        ],
        stack: ["Контент-стратегия", "Финтех", "On-page"],
        result: "Впечатляющий рост органики на 55% MoM (от месяца к месяцу)."
      },
      {
        id: "maple-tattoo",
        title: "SEO для Maple Tattoo Supply",
        category: "eCommerce (Канада)",
        image: "/assets/portfolio/maple_logo.webp",
        shortDesc: "Запуск магазина в Канаде с нуля.",
        contentBlocks: [
          { type: 'text', content: "Комплексная подготовка и запуск SEO-продвижения для канадского интернет-магазина с нуля. Работа велась на Shopify." },
          { type: 'image', src: "/assets/portfolio/maple_metrics1.webp", caption: "Рост показов в Google Canada" },
          { type: 'image', src: "/assets/portfolio/maple_metrics2.webp", caption: "Динамика кликов и CTR" },
          { type: 'image', src: "/assets/portfolio/maple_metrics3.webp", caption: "Позиции по ключевым словам" }
        ],
        stack: ["English SEO", "Shopify/Woo", "Launch Strategy"],
        result: "Выполнен полный комплекс работ по базовой оптимизации."
      },
      {
        id: "rsk-factory",
        title: "SEO для rsk-factory.ru",
        category: "Производство",
        image: "/assets/portfolio/rsk_factory_logo.webp",
        shortDesc: "Фабрика мебели. +63% трафика.",
        contentBlocks: [
          { type: 'text', content: "Уникальный проект по созданию кастомной мебели. Результаты за год совместной работы: рост семантического ядра в ТОП-10 на 27%, увеличение переходов на 63%." },
          { type: 'image', src: "/assets/portfolio/rsk_factory_metrics1.webp", caption: "Рост видимости запросов" }
        ],
        stack: ["Семантика", "Конверсия", "Коммерческие факторы"],
        result: "Рост семантического ядра в ТОП-10 на 27%, рост трафика на 63%."
      },
      {
        id: "shastovsky-app",
        title: "Flutter приложение-блог",
        category: "Mobile Dev",
        image: "/assets/portfolio/shastovsky_logo.webp",
        shortDesc: "Личный проект, разработанный на Flutter.",
        contentBlocks: [
          { type: 'text', content: "Этот сайт/приложение - мой личный проект, разработанный с нуля на Flutter. Исходный код проекта доступен на GitHub для демонстрации навыков мобильной разработки." },
          { type: 'image', src: "/assets/portfolio/shastovsky_in1.webp", caption: "Интерфейс приложения" },
          { type: 'image', src: "/assets/portfolio/shastovsky_in2.webp", caption: "Адаптивная верстка" }
        ],
        stack: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://shastovsky.ru/",
        githubLink: "https://github.com/Dan1elShastovsckiy/shastovskyapp/",
        result: "Исходный код опубликован на GitHub."
      },
      {
        id: "leroy-merlin",
        title: "SEO для Leroymerlin.ru",
        category: "Enterprise Ритейл",
        image: "/assets/portfolio/leroymerlin_logo.webp",
        shortDesc: "DIY Ритейл. Масштабная контент-стратегия.",
        contentBlocks: [
            { type: 'text', content: "Работал в качестве Middle SEO-специалиста в большой внутренней команде проекта. Ключевой задачей была реализация масштабной контент-стратегии с целью вытеснения конкурентов из выдачи." }
        ],
        stack: ["Enterprise SEO", "Large Scale", "Командная работа"],
        result: "Значительный рост видимости по информационным и коммерческим запросам."
      },
      {
        id: "sportmaster",
        title: "SEO для sportmaster.ru",
        category: "eCommerce",
        image: "/assets/portfolio/sportmaster_logo.webp",
        shortDesc: "Спорттовары. +35% к онлайн-продажам.",
        contentBlocks: [
            { type: 'text', content: "В качестве Middle SEO-специалиста в составе сильной команды внес свой вклад в рост онлайн-продаж на +35% в крупнейших городах. Зоны ответственности: контент-планирование для блога, участие в реорганизации структуры сайта." }
        ],
        stack: ["eCommerce SEO", "Структура сайта", "Аналитика"],
        result: "Рост онлайн-продаж на 35% в ключевых регионах."
      },
      {
        id: "iek-group",
        title: "SEO для iek.ru",
        category: "B2B / Промышленность",
        image: "/assets/portfolio/iek_logo.webp",
        shortDesc: "Электрооборудование. Стабильный рост в B2B.",
        contentBlocks: [
            { type: 'text', content: "Работал над проектом в составе команды агентства. Нашей задачей было обеспечение стабильного роста в консервативной B2B-нише. Добились планомерного улучшения всех ключевых SEO-показателей." }
        ],
        stack: ["B2B SEO", "Агентство", "Техническая оптимизация"],
        result: "Планомерное улучшение всех ключевых SEO-показателей."
      },
      {
        id: "weitnauer",
        title: "SEO для weitnauer.com",
        category: "Бренд / eCommerce",
        image: "/assets/portfolio/weitnauer_logo.webp",
        shortDesc: "Швейцарский бренд. С нуля до ТОП-10.",
        contentBlocks: [
            { type: 'text', content: "Принял проект швейцарского бренда и за короткий срок провел полный аудит и составил стартовую стратегию. Проект вырос с нуля до ТОП-3 и ТОП-10 в ключевых регионах." }
        ],
        stack: ["Запуск с нуля", "Аудит", "International SEO"],
        result: "Вывод проекта с нуля до ТОП-3 и ТОП-10 в ключевых регионах."
      },
      {
        id: "askona",
        title: "SEO для askona.ru",
        category: "eCommerce / Мебель",
        image: "/assets/portfolio/askona_logo.webp",
        shortDesc: "Лидер рынка товаров для сна. Рост вопреки сезонности.",
        contentBlocks: [
            { type: 'text', content: "Один из самых сложных и конкурентных проектов. В условиях высочайшей конкуренции проект показывает стабильный рост показателей от квартала к кварталу, нивелируя даже сезонные падения спроса." }
        ],
        stack: ["Конкурентная стратегия", "Сезонность", "Bitrix"],
        result: "Стабильный рост показателей квартал к кварталу."
      },
      {
        id: "sber-vmeste",
        title: "SEO для vmeste.sber.ru",
        category: "Благотворительность",
        image: "/assets/portfolio/vmeste_sber_logo.webp",
        shortDesc: "Платформа Сбера. Максимизация видимости добра.",
        contentBlocks: [
            { type: 'text', content: "Очень важный и добрый проект, где главная цель — сделать так, чтобы помощь всегда находила тех, кто в ней нуждается. Вся работа по SEO направлена на максимальное увеличение видимости сайта." }
        ],
        stack: ["Social Impact", "Visibility", "Экосистема"],
        result: "Высокая видимость страниц фондов и сборов."
      },
      {
        id: "sber-sova",
        title: "SEO для sbersova.ru",
        category: "EdTech / Финтех",
        image: "/assets/portfolio/sbersova_logo.webp",
        shortDesc: "Курсы по инвестициям. Успешная динамика.",
        contentBlocks: [
            { type: 'text', content: "Большая платформа с курсами и блогом по инвестициям. Несмотря на молодость проекта и жесточайшую конкуренцию, мы показываем очень успешную годовую динамику." }
        ],
        stack: ["EdTech SEO", "Контент-маркетинг", "Анализ конкурентов"],
        result: "Успешная годовая динамика роста в высококонкурентной нише."
      }
    ]
  }
};