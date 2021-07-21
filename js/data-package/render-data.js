import {
  pluralize
} from '../utils/pluralize.js';

const houseTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const getHouseTypes = (offerType) => houseTypes[offerType];

const roomForms = ['комната', 'комнаты', 'комнат'];
const guestForms = ['гостя', 'гостей', 'гостей'];

const fragment = document.createDocumentFragment();

export const renderData = (ad) => {
  const adsDataTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerElement = adsDataTemplate.cloneNode(true);

  const removeHiddenFrom = (selector, htmlClass = 'hidden') => {
    offerElement.querySelector(selector).classList.remove(htmlClass);
  };

  const setContent = (selector, content, attribute = 'textContent') => {
    offerElement.querySelector(selector)[attribute] = content;
  };

  if (ad.avatar.length) {
    removeHiddenFrom('.popup__avatar');
    setContent('.popup__avatar', ad.avatar, 'src');
  }

  if (ad.title.length) {
    removeHiddenFrom('.popup__title');
    setContent('.popup__title', ad.title);
  }

  if (ad.address.length) {
    removeHiddenFrom('.popup__text--address');
    setContent('.popup__title', ad.address);
  }

  if (ad.price) {
    removeHiddenFrom('.popup__text--price');
    setContent('.popup__text--price', `${ad.price} ₽/ночь`);
  }

  if (ad.type.length) {
    removeHiddenFrom('.popup__type');
    setContent('.popup__type', getHouseTypes(ad.type));
  }

  setContent('.popup__text--capacity', `${pluralize(ad.rooms, roomForms)} для ${pluralize(ad.guests, guestForms)}`);
  setContent('.popup__text--time', `Заезд после ${ad.checkin}, выезд до ${ad.checkout}`);

  if (ad.description && ad.description.length) {
    removeHiddenFrom('.popup__description');
    setContent('.popup__description', ad.description);
  }

  // output of photos
  if (ad.photos && ad.photos.length) {
    const photosBlock = offerElement.querySelector('.popup__photos');
    const photoElement = photosBlock.querySelector('.popup__photo');
    photosBlock.classList.remove('hidden');
    photosBlock.removeChild(photoElement);

    for (let index = 0; index < ad.photos.length; index++) {
      const newPhotoElement = photoElement.cloneNode(true);
      newPhotoElement.src = ad.photos[index];
      fragment.appendChild(newPhotoElement);
    }
    photosBlock.appendChild(fragment);
  }

  if (ad.features && ad.features.length) {
    const featuresList = offerElement.querySelector('.popup__features');
    featuresList.classList.remove('hidden');
    // clear the features list
    featuresList.innerHTML = '';
    // add new features
    for (let index = 0; index < ad.features.length; index++) {
      const featureNewElement = document.createElement('li');
      featureNewElement.classList.add('popup__feature');
      featureNewElement.classList.add(`popup__feature--${ad.features[index]}`);
      fragment.appendChild(featureNewElement);
    }
    featuresList.appendChild(fragment);
  }
  return offerElement;
};
