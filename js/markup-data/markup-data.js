import {
  build
} from '../data-builder/data-builder.js';

const ads = build();

const mapCanvas = document.querySelector('#map-canvas');
const adsDataTemplate = document.querySelector('#card').content.querySelector('.popup');

const fragment = document.createDocumentFragment();
ads.forEach((ad) => {
  const offerElement = adsDataTemplate.cloneNode(true);
  if (ad.author.avatar.length) {
    offerElement.querySelector('.popup__avatar').classList.remove('hidden');
    offerElement.querySelector('.popup__avatar').src = ad.author.avatar;
  }

  if (ad.offer.title.length) {
    offerElement.querySelector('.popup__title').classList.remove('hidden');
    offerElement.querySelector('.popup__title').textContent = ad.offer.title;
  }

  if (ad.offer.address.length) {
    offerElement.querySelector('.popup__text--address').classList.remove('hidden');
    offerElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  }

  if (ad.offer.price) {
    offerElement.querySelector('.popup__text--price').classList.remove('hidden');
    offerElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  }

  if (ad.offer.type.length) {
    offerElement.querySelector('.popup__type').classList.remove('hidden');

    const getHouseTypes = () => {
      switch (ad.offer.type) {
        case 'flat':
          return 'Квартира';
        case 'bungalow':
          return 'Бунгало';
        case 'house':
          return 'Дом';
        case 'palace':
          return 'Дворец';
        case 'hotel':
          return 'Отель';
      }
    };

    offerElement.querySelector('.popup__type').textContent = getHouseTypes();
  }

  offerElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  if (ad.offer.description.length) {
    offerElement.querySelector('.popup__description').classList.remove('hidden');
    offerElement.querySelector('.popup__description').textContent = ad.offer.description;
  }

  // output of photos
  if (ad.offer.photos.length) {
    const photosBlock = offerElement.querySelector('.popup__photos');
    const photoElement = photosBlock.querySelector('.popup__photo');
    photosBlock.classList.remove('hidden');
    photosBlock.removeChild(photoElement);

    for (let index = 0; index < ad.offer.photos.length; index++) {
      const newPhotoElement = photoElement.cloneNode(true);
      newPhotoElement.src = ad.offer.photos[index];
      fragment.appendChild(newPhotoElement);
    }
    photosBlock.appendChild(fragment);
  }

  if (ad.offer.features.length) {
    const featuresList = offerElement.querySelector('.popup__features');
    featuresList.classList.remove('hidden');
    // clear the features list
    featuresList.innerHTML = '';
    // add new features
    for (let index = 0; index < ad.offer.features.length; index++) {
      const featureNewElement = document.createElement('li');
      featureNewElement.classList.add('popup__feature');
      featureNewElement.classList.add(`popup__feature--${ad.offer.features[index]}`);
      fragment.appendChild(featureNewElement);
    }
    featuresList.appendChild(fragment);
  }

  mapCanvas.appendChild(offerElement);
});

export {
  ads
};
