// import { getRandomPositiveInteger } from './utils/get-random-positive-integer';


function getRandomPositiveInteger(first, second) {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


function getRandomPositiveFloat (first, second, digits = 1) {
  const lower = Math.min(Math.abs(first), Math.abs(second));
  const upper = Math.max(Math.abs(first), Math.abs(second));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const FILE_PATH = 'img/avatars/user';
const FILE_EXTENSION = '.png';

class AdDataBuilder {
  constructor(similarAdDescription = [], NUMBER_OF_ADS_NEARBY = 10) {
    this.similarAdDescription = similarAdDescription;
    this.NUMBER_OF_ADS_NEARBY = NUMBER_OF_ADS_NEARBY;
  }

  build() {
    for (let index = 1; index <= this.NUMBER_OF_ADS_NEARBY; index++) {
      this.similarAdDescription.push({
        author: this.getAuthorsValue(index),
        offer: this.getOffersValue(),
        locaion: this.getLocaionsValue(),
      });
    }


    return this.similarAdDescription;
  }

  getAuthorsValue(serialNumber) {
    return {
      avatar: this.setRandomPath(FILE_PATH, serialNumber, FILE_EXTENSION),
    };
  }

  /** *
   * Prepare points for the lines, scatters
   * @path file path
   * @id serial number or unique id
   * @extension file extension with dot: .png
   */
  setRandomPath(path, id, extension) {
    const EXTREME_TWO_DIGIT_NUMBER = 99;
    const modifiedId = (`0${  id}`).slice(-2);
    return id > EXTREME_TWO_DIGIT_NUMBER ? `${path}${id}${extension}` : `${path}${modifiedId}${extension}`;
  }

  getOffersValue() {
    return {
      offer: {
        title: this.getAdTitle(),
        address: this.getLocaionsValue(),
        price: getRandomPositiveInteger(1000, 10000),
        type: this.setAdType(),
        rooms: getRandomPositiveInteger(1, 10),
        guests: getRandomPositiveInteger(1, 10),
        checkin: this.getAdCheckinOutTime(),
        checkout: this.getAdCheckinOutTime(),
        features: this.getAdFeatures(),
        description: this.getAdDescription(),
        photos: this.getAdPhotos(),
      },
    };

  }

  /** *
   * Generates ad title
   */
  getAdTitle() {
    const adjectives = ['Lovely', 'Beautiful', 'Huge', 'Family', 'Youth', 'Conceptual'];
    const nouns = ['Abby apartment', 'Milano Flat', 'Guest-house', 'Hilton bungalow'];

    const randomAdjectives = this.getRandomArrElem(adjectives);
    const randomNoun = this.getRandomArrElem(nouns);
    const name = `${adjectives[randomAdjectives]  } ${  nouns[randomNoun]}`;
    return name;
  }

  /** *
   * Generates ad type
   */
  setAdType() {
    const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

    const randomType = this.getRandomArrElem(types);
    const name = `${types[randomType]}`;
    return name;
  }


  /** *
   * Generates ad features
   */
  getAdFeatures() {
    const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    return [...new Set(this.getRandomArr(features, getRandomPositiveInteger(1, features.length - 1)))];
  }

  /** *
   * Generates ad photos
   */
  getAdPhotos() {
    const photos = [ 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

    return this.getRandomArr(photos, getRandomPositiveInteger(1, 100));
  }

  /** *
   * Generates ad description
   */
  getAdDescription() {
    const description = [ 'This town is called: Norubburg',
      'It was built: in the west',
      'Traditional city food: fish',
      'The given temperature in the city: + 26 ℃',
      'It was founded: 2600 years ago',
      'Date of foundation by days and months: February 2nd',
      'Feature of the city: the richest people live in this city',
      'The area is: 1400 km²',
      'Population: 360,000 inhabitants',
      'Number of buildings: 310.000',
      'The mayors name is: Radmir Lvovich Shchedrin',
      'The attraction of the city is: first colorful area and first huge park'];

    const randomType = this.getRandomArrElem(description);
    const name = `${description[randomType]}`;
    return name;
  }

  /** *
   * Generates ad checkin / checkout time
   */
  getAdCheckinOutTime() {
    const time = ['12:00', '13:00', '14:00'];
    const randomType = this.getRandomArrElem(time);
    const name = `${time[randomType]}`;
    return name;
  }

  getRandomArr (source, maxLength) {
    return [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);
  }

  getRandomArrElem (source) {
    return Math.floor(Math.random() * source.length);
  }

  getLocaionsValue() {
    return {
      location: {
        lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
        lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
      },
    };
  }

}

const adv = new AdDataBuilder();
const data = adv.build();

// eslint-disable-next-line no-console
console.info(data);
