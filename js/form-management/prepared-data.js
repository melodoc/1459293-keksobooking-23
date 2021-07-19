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

export {
  MAX_PRICE_VALUE,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  guestNumberRoomMap,
  validationText,
  housesType
};
