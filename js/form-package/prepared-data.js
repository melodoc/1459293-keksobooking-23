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
  minCharacters: 'Минимальное количество символов:',
  maxCharacters: 'Превышен лимит допустимых символов на:',
  maxPrice: 'Максимальная цена за ночь не должна превышать ',
  roomsCount: 'Выборано некоррекное количество гостей',
};

const housesType = [{
  type: 'flat',
  price: 1000,
},
{
  type: 'bungalow',
  price: 0,
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
  housesType,
  settingInitialMap,
  mainMarkerSetting,
  similarMarkerSetting,
  SIMILAR_OFFER_COUNT,
  ANY_VALUE,
  RADIX,
  TIMEOUT
};
