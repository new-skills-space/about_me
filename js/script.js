// script.js

// 1. Функция для корректировки ширины фиксированного элемента
function adjustElementWidth() {
  const fixedElement = document.querySelector('#fixed-element');
  if (!fixedElement) return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  fixedElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
}

// 2. Обработчики событий для ширины элемента
window.addEventListener('resize', adjustElementWidth);
window.addEventListener('load', adjustElementWidth);

// 3. Основной код, который выполняется при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {
  // Инициализация ширины фиксированного элемента
  adjustElementWidth();

  // Инициализация Flowbite компонентов (если используется)
  if (typeof Flowbite !== 'undefined') {
    // Здесь можно добавить инициализацию специфических компонентов Flowbite
  }

  // 4. СИСТЕМА ПЕРЕВОДА

  // Определяем переводы
  const translations = {
    uk: {
      // Имя на украинском
      name: "Олена Сідельнікова",

      // Навигация
      services: "Послуги",
      about: "Про мене",
      education: "Освіта і досвід",
      contacts: "Мої контакти",

      // Блок 1
      quote: "«Скільки мов ти знаєш - стільки разів ти людина!»",
      artPerson: "Людина мистецтва",
      mentor: "Наставниця – Викладачка з міжнародним досвідом роботи",
      vision: "Моя бачення: Створити простір, де всі бажаючі можуть всебічно розвиватись завдяки мистецтву слова, мови та спілкування. Простір для самовираження. Де весело, цікаво та професійно!",

      // Блок 2
      service1_title: "Розмовна англійська",
      service1_desc: "Індивідуальний урок з англійської. Тривалість 1 година. Підходить тим у кого рівень pre intermediate, intermediate. Будемо розмовляти на різні теми, будете поповнювати словник активних слів, діставати з памʼяті раніше набутті знання і практикувати їх. Приємний, персоналізований, легкий та цікавий формат для підтримання та розвитку англійської",

      service2_title: "Англійська з особистим запитом",
      service2_desc: "Індивідуальний урок англійської за вашим запитом. Тривалість 1 година. Наприклад: підготувати до співбесіди на англійській або підготувати до конкретної події або роботи на англійській, запит на покращення конкретної теми у граматиці, інше",

      service3_title: "Script reading/speaking",
      service3_desc: "Читання сценаріїв відомих вистав та фільмів англійською мовою по ролях. Читаємо і обговорюємо. Ця програма розрахована на 4 сесії, 1 раз на тиждень по 1 годині. Кожен місяць новий сценарій (історія). Мінімальна кількість людей - 3. Підходить для корисного і веселого проведення часу з друзями, колегам по роботі для team building…Підходить для рівня intermediate",

      service4_title: "Китайська мова з нуля",
      service4_desc: "Підходить для тих, хто хоче почати вчити китайську. Тривалість 1 година. Буду вашим провідником у світ цікавої китайської мови з самих простих, але дуже важливих азів",

      service5_title: "Професійне резюме",
      service5_desc: "Для тих, хто хоче професійно і стильного зарекомендувати себе на ринку праці. Допоможу скоригувати існуюче резюме під конкретну вакансію. Тривалість 30-45хвилин",

      service6_title: "Подарунковий сертифікат",
      service6_desc: "Подаруй корисний сертифікат: урок з англійської або китайської; послуга «Професійне резюме»",
      service6_price: "Ціна в залежності від послуги",

      order_service: "Замовити послугу",

      // WhatsApp сообщения
      whatsapp_service1: "Привіт, Олена! На вашому сайті побачив курс по Розмовна англійська",
      whatsapp_service2: "Привіт, Олена! На вашому сайті побачив курс по Англійська з особистим запитом",
      whatsapp_service3: "Привіт, Олена! На вашому сайті побачив курс по Script reading/speaking",
      whatsapp_service4: "Привіт, Олена! На вашому сайті побачив курс по Китайська мова з нуля",
      whatsapp_service5: "Привіт, Олена! На вашому сайті побачив курс по Професійне резюме",
      whatsapp_service6: "Привіт, Олена! На вашому сайті побачив курс по Подарунковий сертифікат",

      // Блок 3
      aboutText: "Дипломована викладачка і наставниця з англійської та китайської. Маю 8+ років міжнародного досвіду у викладанні іноземних мов дітям та дорослим, людям різного віку та соціального статусу з різними запитами щодо вивчення мов. Я знаю як допомогти тобі почати думати і говорити англійською/китайською. Обожнюю творчість і займаюсь творчістю все своє життя. Зі мною ти оволодієш іноземною мовою і знайдеш бажану для себе роботу!",

      // Блок 4
      education1: "Київський національний лінгвістичний університет 2009-2013",
      education2: "Курс підвищення кваліфікації з китайської мови (Хейлунцзянський університет, м.Харбін) 2012, 2013",
      experience1: "14+ років роботи у міжнародних компаніях",
      experience2: "8+ років досвіду викладання іноземних мов",
      companiesTitle: "Працювала і співпрацювала з такими відомими компаніями як:",

      // Блок 5
      teacher: "Викладачка іноземних мов/Кар'єрний консультант"
    },

    ru: {
      // Имя на русском
      name: "Алёна Сидельникова",

      // Навигация
      services: "Услуги",
      about: "Обо мне",
      education: "Образование и опыт",
      contacts: "Мои контакты",

      // Блок 1
      quote: "«Сколько языков ты знаешь – столько раз ты человек!»",
      artPerson: "Человек искусства",
      mentor: "Наставница – преподаватель с международным опытом работы",
      vision: "Мое видение: Создать пространство, где каждый желающий может всесторонне развиваться благодаря искусству слова, языкам и общению. Пространство для самовыражения, где интересно, безопасно и профессионально.",

      // Блок 2
      service1_title: "Разговорный английский",
      service1_desc: "Индивидуальный урок по английскому языку. Продолжительность 1 час. Подходит для тех, у кого уровень pre intermediate, intermediate. Будем разговаривать на разные темы, пополнять словарный запас активных слов, доставать из памяти ранее полученные знания и практиковать их. Приятный, персонализированный, легкий и интересный формат для поддержания и развития английского",

      service2_title: "Английский с персональным запросом",
      service2_desc: "Индивидуальный урок английского по вашему запросу. Продолжительность 1 час. Например: подготовка к собеседованию на английском или подготовка к конкретному событию или работе на английском, запрос на улучшение конкретной темы в грамматике, другое",

      service3_title: "Чтение сценариев",
      service3_desc: "Чтение сценариев известных спектаклей и фильмов на английском языке по ролям. Читаем и обсуждаем. Эта программа рассчитана на 4 сессии, 1 раз в неделю по 1 часу. Каждый месяц новый сценарий (история). Минимальное количество людей - 3. Подходит для полезного и веселого проведения времени с друзьями, коллегами по работе для тимбилдинга… Подходит для уровня intermediate",

      service4_title: "Китайский язык с нуля",
      service4_desc: "Подходит для тех, кто хочет начать учить китайский. Продолжительность 1 час. Буду вашим проводником в мир интересного китайского языка с самых простых, но очень важных азов",

      service5_title: "Профессиональное резюме",
      service5_desc: "Для тех, кто хочет профессионально и стильно зарекомендовать себя на рынке труда. Помогу скорректировать существующее резюме под конкретную вакансию. Продолжительность 30-45 минут",

      service6_title: "Подарочный сертификат",
      service6_desc: "Подари полезный сертификат: урок английского или китайского; услуга «Профессиональное резюме»",
      service6_price: "Цена в зависимости от услуги",

      order_service: "Заказать услугу",

      // WhatsApp сообщения
      whatsapp_service1: "Привет, Алёна! На вашем сайте увидел курс по Разговорный английский",
      whatsapp_service2: "Привет, Алёна! На вашем сайте увидел курс по Английский с персональным запросом",
      whatsapp_service3: "Привет, Алёна! На вашем сайте увидел курс по Чтение сценариев",
      whatsapp_service4: "Привет, Алёна! На вашем сайте увидел курс по Китайский язык с нуля",
      whatsapp_service5: "Привет, Алёна! На вашем сайте увидел курс по Профессиональное резюме",
      whatsapp_service6: "Привет, Алёна! На вашем сайте увидел курс по Подарочный сертификат",

      // Блок 3
      aboutText: "Дипломированная преподавательница и наставница по изучению иностранных языков. 10+ лет международного опыта работы в преподавании детям и взрослым. TEFL сертифицированный преподаватель. Креативная, общительная и мотивирующая.",

      // Блок 4
      education1: "Киевский Национальный Лингвистический Университет, 2009–2013",
      education2: "Курсы повышения квалификации по китайскому языку, Хейлунцзянский университет, г. Харбин, 2012–2013",
      experience1: "14 лет работы в международных компаниях",
      experience2: "10+ лет преподавания онлайн и офлайн",
      companiesTitle: "Сотрудничество с известными компаниями:",

      // Блок 5
      teacher: "Преподаватель иностранных языков/Карьерный консультант"
    },

    en: {
      // Имя на английском
      name: "Olena Sidelnikova",

      // Навигация
      services: "Services",
      about: "About Me",
      education: "Education and Experience",
      contacts: "My Contacts",

      // Блок 1
      quote: "«The more languages you know, the more human you are!»",
      artPerson: "Art Person",
      mentor: "Mentor – a teacher with international experience",
      vision: "My vision: To create a space where anyone can develop holistically through the art of language, communication, and self-expression. A space where learning is interesting, safe, and professional.",

      // Блок 2
      service1_title: "Conversational English",
      service1_desc: "Individual English lesson. Duration 1 hour. Suitable for those with pre-intermediate, intermediate level. We will talk on various topics, expand your active vocabulary, retrieve previously acquired knowledge from memory and practice it. Pleasant, personalized, easy and interesting format for maintaining and developing English",

      service2_title: "English with personal request",
      service2_desc: "Individual English lesson according to your request. Duration 1 hour. For example: preparation for an interview in English or preparation for a specific event or work in English, request for improvement of a specific topic in grammar, other",

      service3_title: "Script reading/speaking",
      service3_desc: "Reading scripts of famous plays and films in English by roles. We read and discuss. This program is designed for 4 sessions, 1 time per week for 1 hour. Each month a new script (story). Minimum number of people - 3. Suitable for useful and fun time with friends, work colleagues for team building... Suitable for intermediate level",

      service4_title: "Chinese from scratch",
      service4_desc: "Suitable for those who want to start learning Chinese. Duration 1 hour. I will be your guide to the world of interesting Chinese language from the very simple but very important basics",

      service5_title: "Professional resume",
      service5_desc: "For those who want to professionally and stylishly present themselves in the job market. I will help adjust an existing resume for a specific vacancy. Duration 30-45 minutes",

      service6_title: "Gift certificate",
      service6_desc: "Give a useful certificate: English or Chinese lesson; «Professional Resume» service",
      service6_price: "Price depending on the service",

      order_service: "Order service",

      // WhatsApp messages
      whatsapp_service1: "Hello, Olena! On your website I saw the course Conversational English",
      whatsapp_service2: "Hello, Olena! On your website I saw the course English with personal request",
      whatsapp_service3: "Hello, Olena! On your website I saw the course Script reading/speaking",
      whatsapp_service4: "Hello, Olena! On your website I saw the course Chinese from scratch",
      whatsapp_service5: "Hello, Olena! On your website I saw the course Professional resume",
      whatsapp_service6: "Hello, Olena! On your website I saw the course Gift certificate",

      // Блок 3
      aboutText: "Certified teacher and mentor in foreign language learning. 10+ years of international teaching experience with children and adults. TEFL-certified instructor. Creative, communicative, and motivating.",

      // Блок 4
      education1: "Kyiv National Linguistic University, 2009–2013",
      education2: "Advanced Chinese Language Courses, Heilongjiang University, Harbin, 2012–2013",
      experience1: "14 years of experience working in international companies",
      experience2: "10+ years of teaching online and offline",
      companiesTitle: "Collaboration with Well-Known Companies:",

      // Блок 5
      teacher: "Foreign Language Teacher/Career Consultant"
    }
  };

  // Получаем сохраненный язык или используем украинский по умолчанию
  let currentLang = localStorage.getItem('language') || 'uk';

  // Функция для перевода страницы
  function translatePage(lang) {
    // Обновляем текущий язык
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Обновляем атрибут lang у html элемента
    document.documentElement.lang = lang;

    // Обновляем мета-тег Content-Language
    const metaLanguage = document.querySelector('meta[http-equiv="Content-Language"]');
    if (metaLanguage) {
      metaLanguage.content = lang;
    }

    // Получаем все элементы с атрибутом data-key
    const elements = document.querySelectorAll('[data-key]');

    // Проходим по всем элементам и обновляем текст
    elements.forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Обновляем текст кнопки текущего языка
    updateCurrentLanguageText(lang);

    // Обновляем WhatsApp ссылки
    updateWhatsAppLinks(lang);
  }

  // Функция для обновления текста текущего языка в выпадающем меню
  function updateCurrentLanguageText(lang) {
    const currentLanguageSpan = document.getElementById('current-language');
    if (!currentLanguageSpan) return;

    const languageNames = {
      'uk': 'UK',
      'ru': 'RU',
      'en': 'EN'
    };
    currentLanguageSpan.textContent = languageNames[lang] || 'UK';
  }

  // Функция для обновления WhatsApp ссылок
  function updateWhatsAppLinks(lang) {
    // Находим все WhatsApp ссылки
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    // Для каждой ссылки обновляем сообщение в зависимости от языка
    whatsappLinks.forEach(link => {
      const currentHref = link.getAttribute('href');

      // Определяем, какая это услуга по тексту ссылки
      let serviceKey = '';

      if (currentHref.includes('Розмовна+англійська') || currentHref.includes('Conversational+English') || currentHref.includes('Разговорный+английский')) {
        serviceKey = 'whatsapp_service1';
      } else if (currentHref.includes('Англійська+з+особистим+запитом') || currentHref.includes('English+with+personal+request') || currentHref.includes('Английский+с+персональным+запросом')) {
        serviceKey = 'whatsapp_service2';
      } else if (currentHref.includes('Script+reading') || currentHref.includes('Чтение+сценариев')) {
        serviceKey = 'whatsapp_service3';
      } else if (currentHref.includes('Китайська+мова+з+нуля') || currentHref.includes('Chinese+from+scratch') || currentHref.includes('Китайский+язык+с+нуля')) {
        serviceKey = 'whatsapp_service4';
      } else if (currentHref.includes('Професійне+резюме') || currentHref.includes('Professional+resume') || currentHref.includes('Профессиональное+резюме')) {
        serviceKey = 'whatsapp_service5';
      } else if (currentHref.includes('Подарунковий+сертифікат') || currentHref.includes('Gift+certificate') || currentHref.includes('Подарочный+сертификат')) {
        serviceKey = 'whatsapp_service6';
      }

      // Если нашли соответствующую услугу, обновляем ссылку
      if (serviceKey && translations[lang] && translations[lang][serviceKey]) {
        const message = encodeURIComponent(translations[lang][serviceKey]);
        const phoneNumber = '16315075646'; // Номер телефона
        const newHref = `https://wa.me/${phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
        link.setAttribute('href', newHref);
      }
    });
  }

  // Инициализируем перевод при загрузке страницы
  translatePage(currentLang);

  // 5. ВЫПАДАЮЩИЙ СПИСОК ЯЗЫКОВ

  const dropdownButton = document.getElementById('language-dropdown-button');
  const dropdownMenu = document.getElementById('language-dropdown-menu');
  const languageOptions = document.querySelectorAll('.language-option');

  if (dropdownButton && dropdownMenu) {
    // Открытие/закрытие выпадающего меню
    dropdownButton.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function (e) {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  // Обработка выбора языка из списка
  if (languageOptions.length > 0) {
    languageOptions.forEach(option => {
      option.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');

        // Меняем язык
        translatePage(lang);

        // Закрываем меню
        if (dropdownMenu) {
          dropdownMenu.classList.add('hidden');
        }
      });
    });
  }

  // 6. АВТООПРЕДЕЛЕНИЕ ЯЗЫКА БРАУЗЕРА
  function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    // Если язык не сохранен в localStorage, пробуем определить автоматически
    if (!localStorage.getItem('language')) {
      if (browserLang.startsWith('ru')) {
        translatePage('ru');
      } else if (browserLang.startsWith('en')) {
        translatePage('en');
      }
      // Украинский уже установлен по умолчанию
    }
  }

  // Запускаем определение языка браузера
  detectBrowserLanguage();

  // 7. ОБРАБОТКА КНОПКИ БУРГЕР-МЕНЮ (если нужно)
  const burgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const navbar = document.getElementById('navbar-default');

  if (burgerButton && navbar) {
    burgerButton.addEventListener('click', function () {
      navbar.classList.toggle('hidden');
    });
  }

  // 8. ПЛАВНАЯ ПРОКРУТКА ДЛЯ ССЫЛОК ВНУТРИ СТРАНИЦЫ
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Закрываем меню навигации на мобильных устройствах
        if (window.innerWidth < 768 && navbar) {
          navbar.classList.add('hidden');
        }

        // Плавная прокрутка к элементу
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Учитываем высоту навигации
          behavior: 'smooth'
        });
      }
    });
  });
});