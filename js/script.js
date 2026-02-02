// script.js - ОБНОВЛЕННЫЙ ДЛЯ РАБОТЫ С JSON

// Глобальные переменные
let currentLang = 'uk';
let siteContent = null;

// 1. Функция для корректировки ширины фиксированного элемента
function adjustElementWidth() {
  const fixedElement = document.querySelector('#fixed-element');
  if (!fixedElement) return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  fixedElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
}

// 2. Загрузка контента из JSON
async function loadSiteContent() {
  try {
    const response = await fetch('/content.json?v=' + Date.now());
    siteContent = await response.json();

    // Получаем сохраненный язык или используем украинский по умолчанию
    currentLang = localStorage.getItem('language') || 'uk';

    // Переводим страницу
    translatePage(currentLang);

    // Инициализируем остальные функции
    initLanguageSelector();
    initNavigation();
    initWhatsAppLinks();

  } catch (error) {
    console.error('Ошибка загрузки контента:', error);
    loadFallbackContent();
  }
}

// 3. Перевод страницы
function translatePage(lang) {
  if (!siteContent || !siteContent.content[lang]) return;

  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;

  const content = siteContent.content[lang];
  const showPrices = siteContent.settings.showPrices;

  // Обновляем элементы с data-key
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    const keys = key.split('.');

    let value = content;
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        value = null;
        break;
      }
    }

    if (value !== null && value !== undefined) {
      element.textContent = value;
    }
  });

  // Обновляем услуги
  updateServices(content, showPrices);

  // Обновляем язык в селекторе
  updateCurrentLanguageText(lang);
}

// 4. Обновление услуг
function updateServices(content, showPrices) {
  const services = content.services;
  if (!services) return;

  // Для каждой услуги
  for (let i = 1; i <= 6; i++) {
    const serviceKey = `service${i}`;
    const service = services[serviceKey];
    if (!service) continue;

    // Находим контейнер услуги
    const serviceContainer = document.querySelector(`[data-service="${serviceKey}"]`);
    if (!serviceContainer) continue;

    // Обновляем заголовок и описание
    const titleElement = serviceContainer.querySelector('.service-title');
    const descElement = serviceContainer.querySelector('.service-desc');

    if (titleElement) titleElement.textContent = service.title;
    if (descElement) descElement.textContent = service.description;

    // Обновляем цены
    const priceContainer = serviceContainer.querySelector('.price-container');
    if (priceContainer) {
      priceContainer.innerHTML = '';

      if (showPrices[serviceKey] && service.prices && service.prices.length > 0) {
        service.prices.forEach(price => {
          const priceElement = document.createElement('p');
          priceElement.className = 'mb-3 font-normal text-gray-700 dark:text-gray-700';
          priceElement.textContent = price;
          priceContainer.appendChild(priceElement);
        });
      }
    }
  }
}

// 5. Инициализация WhatsApp ссылок
function initWhatsAppLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes('wa.me')) {
      link.addEventListener('click', function (e) {
        if (!siteContent) return;

        const serviceMatch = this.closest('[data-service]');
        if (serviceMatch) {
          const serviceKey = serviceMatch.getAttribute('data-service');
          const langContent = siteContent.content[currentLang];
          const service = langContent.services[serviceKey];

          if (service && service.whatsappMessage) {
            const encodedMessage = encodeURIComponent(service.whatsappMessage);
            const newHref = `https://wa.me/16315075646?text=${encodedMessage}&type=phone_number&app_absent=0`;
            this.setAttribute('href', newHref);
          }
        }
      });
    }
  });
}

// 6. Обновление текста текущего языка
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

// 7. Инициализация выпадающего списка языков
function initLanguageSelector() {
  const dropdownButton = document.getElementById('language-dropdown-button');
  const dropdownMenu = document.getElementById('language-dropdown-menu');
  const languageOptions = document.querySelectorAll('.language-option');

  if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (e) {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  if (languageOptions.length > 0) {
    languageOptions.forEach(option => {
      option.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        translatePage(lang);

        if (dropdownMenu) {
          dropdownMenu.classList.add('hidden');
        }
      });
    });
  }
}

// 8. Инициализация навигации
function initNavigation() {
  const burgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const navbar = document.getElementById('navbar-default');

  if (burgerButton && navbar) {
    burgerButton.addEventListener('click', function () {
      navbar.classList.toggle('hidden');
    });
  }

  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        if (window.innerWidth < 768 && navbar) {
          navbar.classList.add('hidden');
        }

        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 9. Fallback контент
function loadFallbackContent() {
  console.log('Загружаем fallback контент');
  // Можно добавить статический контент на случай ошибки
  currentLang = 'uk';
  translatePage(currentLang);
}

// 10. Обработчики событий
window.addEventListener('resize', adjustElementWidth);
window.addEventListener('load', adjustElementWidth);

// 11. Автоопределение языка браузера
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;

  if (!localStorage.getItem('language')) {
    if (browserLang.startsWith('ru')) {
      translatePage('ru');
    } else if (browserLang.startsWith('en')) {
      translatePage('en');
    }
  }
}

// 12. Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {
  adjustElementWidth();
  loadSiteContent();
  detectBrowserLanguage();
});