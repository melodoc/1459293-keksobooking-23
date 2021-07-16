const mapCanvas = document.querySelector('#map-canvas');
const adsDataTemplate = document.querySelector('#card').content.querySelector('.popup');

const houseTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const getHouseTypes = (offerType) => houseTypes[offerType];

const fragment = document.createDocumentFragment();

export function renderAds(ads) {
  ads.forEach((ad) => {

    const offerElement = adsDataTemplate.cloneNode(true);

    function removeHiddenFrom(selector, htmlClass = 'hidden') {
      offerElement.querySelector(selector).classList.remove(htmlClass);
    }

    function setContent(selector, content, attribute = 'textContent' ) {
      offerElement.querySelector(selector)[attribute] = content;
    }

    if (ad.author.avatar.length) {
      removeHiddenFrom('.popup__avatar');
      setContent('.popup__avatar', ad.author.avatar, 'src');
    }

    if (ad.offer.title.length) {
      removeHiddenFrom('.popup__title');
      setContent('.popup__title', ad.offer.title);
    }

    if (ad.offer.address.length) {
      removeHiddenFrom('.popup__text--address');
      setContent('.popup__title', ad.offer.address);
    }

    if (ad.offer.price) {
      removeHiddenFrom('.popup__text--price');
      setContent('.popup__text--price', `${ad.offer.price} ₽/ночь`);
    }

    if (ad.offer.type.length) {
      removeHiddenFrom('.popup__type');
      setContent('.popup__type', getHouseTypes(ad.offer.type));
    }

    // plural / singular
    setContent('.popup__text--capacity', `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`);
    setContent('.popup__text--time',`Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`);

    if (ad.offer.description.length) {
      removeHiddenFrom('.popup__description');
      setContent('.popup__description', ad.offer.description);
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
}
