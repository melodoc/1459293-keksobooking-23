const MAX_PRICE_VALUE = 1000000;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const guestNumberRoomMap = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validationText = {
  minCharacters: 'Минимальное количество символов:',
  maxCharacters : 'Превышен лимит допустимых символов на:',
  maxPrice: 'Максимальная цена за ночь не должна превышать ',
  roomsCount: 'Выборано некоррекное количество гостей',
};

const validateTitle = () => {
  const valueLength = title.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`${validationText.minCharacters}${MIN_TITLE_LENGTH - valueLength} `);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`${validationText.maxCharacters}${valueLength - MAX_TITLE_LENGTH}`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};

const validatePrice = () => {
  if (price.value > MAX_PRICE_VALUE) {
    price.setCustomValidity(`${validationText.maxPrice}${MAX_PRICE_VALUE}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const validateRoomsInput = () => {
  capacity.setCustomValidity(guestNumberRoomMap[roomNumber.value].includes(capacity.value) ? '' : `${validationText.roomsCount}`);
  capacity.reportValidity();
};

const onChangeHandlerForm = (evt) => {
  switch (evt.target) {
    case title:
      validateTitle();
      break;
    case price:
      validatePrice();
      break;
    case roomNumber:
    case capacity:
      validateRoomsInput();
      break;
  }
};

adForm.addEventListener('input', onChangeHandlerForm);
