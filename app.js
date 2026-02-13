document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.getElementById('langSwitch');
  const langBtns = document.querySelectorAll('.lang-btn');
  const elements = document.querySelectorAll('[data-i18n]');

  const translations = {
    ru: {
      title: 'Cruvk Guarantor',
      subtitle: 'Гарант сделок • Низкая комиссия • Безопасные сделки',
      successDeals: 'успешных сделок',
      commission: 'комиссия за сделку',
      info: 'Информация',
      contacts: 'Контакты и сообщества',
      dmTitle: 'Личные сообщения',
      dmSub: 'Связь для оформления сделок',
      mainChannel: 'Маркет',
      adapterTitle: 'Market',
      reviews: 'Отзывы',
      reviewsSub: 'Отзывы клиентов',
      how: 'Как проходит сделка',
      step1Title: 'Передача реквизитов',
      step1Text: 'ПРОДАВЕЦ даёт свои реквизиты ПОКУПАТЕЛЮ.',
      step2Title: 'Передача подарка гаранту',
      step2Text: 'После этого ПРОДАВЕЦ передаёт мне NFT-подарок. Я отправляю скрин, что получил его. Продавец тоже фиксирует у себя (скрин/видео).',
      step3Title: 'Оплата и выдача',
      step3Text: 'ПОКУПАТЕЛЬ переводит деньги ПРОДАВЦУ по реквизитам, и только после этого сам покупатель получает NFT-подарок себе.',
      examplePayTitle: 'Пример, как оставлять реквизиты:',
      payPhone: 'Номер телефона/карты',
      payName: 'ФИО',
      payBank: 'Банк',
      exampleCryptoTitle: 'Пример, как оставлять адрес крипты:',
      tonLabel: 'TON —',
      commentTitle: 'Комментарий к переводу',
      commentText: 'Покупателю желательно оставлять комментарий к переводу: «отдал долг» (или похожий), чтобы банк не задержал/не заблокировал платёж.',
      starsTitle: 'Сделка на звёзды',
      starsText: 'Если сделка на телеграм-звёзды — продавцу обязательно указать юзернейм аккаунта, на который присылать звёзды.',
      foot: 'Проверяй юзернейм перед созданием сделки'
    },
    en: {
      title: 'Necropof Guarantor',
      subtitle: 'Secure deals • Low commission • Guaranteed transactions',
      successDeals: 'successful deals',
      commission: 'fee per deal',
      info: 'Information',
      contacts: 'Contacts & communities',
      dmTitle: 'Direct messages',
      dmSub: 'Contact to arrange a deal',
      mainChannel: 'Market',
      adapterTitle: 'Adapter',
      reviews: 'Reviews',
      reviewsSub: 'Client reviews',
      how: 'How a deal works',
      step1Title: 'Seller gives details',
      step1Text: 'The SELLER gives their payment details to the BUYER.',
      step2Title: 'Gift to guarantor',
      step2Text: 'Then the SELLER sends the NFT gift to me. I send a screenshot confirming I got it. The seller also records it (screenshot/video).',
      step3Title: 'Payment and release',
      step3Text: 'The BUYER transfers money to the SELLER using given details, and only after that the buyer receives the NFT gift.',
      examplePayTitle: 'Example: what to send as payment details:',
      payPhone: 'Phone / card number',
      payName: 'Full name',
      payBank: 'Bank',
      exampleCryptoTitle: 'Example: how to send crypto address:',
      tonLabel: 'TON —',
      commentTitle: 'Payment comment',
      commentText: 'The buyer should add a payment note like “paid debt” to avoid bank hold / block.',
      starsTitle: 'Deal for Telegram Stars',
      starsText: 'If the deal is for Telegram Stars, the seller must specify the username of the account to receive the stars.',
      foot: 'Double-check usernames before paying'
    }
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    
    elements.forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    langBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
  }

  langSwitch.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.dataset.lang;
    setLanguage(lang);
  });

  setLanguage('ru');
});