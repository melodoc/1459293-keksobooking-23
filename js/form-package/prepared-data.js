const MAX_PRICE_VALUE = 1000000;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const guestNumberRoomMap = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validationText = {
  minCharacters: 'Minimum characters:',
  maxCharacters: 'Exceeded character limit on:',
  maxPrice: 'Max price per month must not exceed ',
  roomsCount: 'Incorrect number of guests selected',
};

const offersDescription = {
  room: {
    ru: 'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
    en: 'A room in a three-room apartment, suitable for young travelers.',
  },
  roomSimple: {
    ru: 'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
    en: 'Small apartment. Food is around the corner. Shops 24 hours. No internet',
  },
  funnyOne: {
    ru: 'Хейтеров просьба не беспокоить.',
    en: 'A magnificent apartment right in the center near the park. Suitable for everyone who likes to walk near the sightseeing.',
  },
  funnyOther: {
    ru: 'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
    en: 'A magnificent apartment right in the center near the park. Suitable for everyone who likes to walk near the sightseeing.',
  },
  palace: {
    ru: 'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    en: 'A wonderful palace in the ancient center of the city',
  },
  apartmentSmall: {
    ru: 'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
    en: 'Small clean apartment on the edge of the park. Without internet',
  },
  apartment: {
    ru: 'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
    en: 'Apartment on the first floor. The neighbors are quiet.',
  },
  studio: {
    ru: 'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
    en: 'Magnificent studio apartment in the center of Tokyo. Suitable for both tourists and businessmen. The apartment is fully equipped and freshly renovated.',
  },
  loft: {
    ru: 'Маленькая квартирка на чердаке. Для самых не требовательных.',
    en: 'A small apartment in the attic. For the most undemanding.',
  },
  hotel: {
    ru: 'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
    en: 'A hotel for connoisseurs of history. Feel like a hero from the past.',
  },
  hostel: {
    ru: 'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
    en: 'One of the best hostels for soulful communication. We have dinner together and play "Mafia" in the evenings, cook delicious food. Daily housekeeping, free Wi-Fi, clean linens.',
  },
  apartmentBig: {
    ru: 'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
    en: 'It\'s beautiful, light and cozy. There is a place to accommodate a company of 5 people. Free coffee and biscuits.',
  },
  default: {
    ru: 'Трёхкомнатная квартира в старинном центре города.',
    en: 'Three-room apartment in the ancient center of the city.',
  },
};

const housesType = [{
  type: 'flat',
  price: 1000,
},
{
  type: 'bungalow',
  price: 10000,
},
{
  type: 'hotel',
  price: 3000,
},
{
  type: 'house',
  price: 5000,
},
{
  type: 'palace',
  price: 10000,
},
];

const settingInitialMap = {
  LAT:35.68171,
  LNG:139.75388,
  ZOOM: 10,
};

const mainMarkerSetting = {
  WIDTH: 52,
  HEIGHT: 52,
  URL: './img/main-pin.svg',
};

const similarMarkerSetting = {
  WIDTH: 40,
  HEIGHT: 40,
  URL: './img/pin.svg',
};

const SIMILAR_OFFER_COUNT = 10;

const ANY_VALUE = 'any';

const RADIX = 10;

const TIMEOUT = 500;

export {
  MAX_PRICE_VALUE,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  guestNumberRoomMap,
  validationText,
  offersDescription,
  housesType,
  settingInitialMap,
  mainMarkerSetting,
  similarMarkerSetting,
  SIMILAR_OFFER_COUNT,
  ANY_VALUE,
  RADIX,
  TIMEOUT
};
