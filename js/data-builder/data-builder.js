import { getRandomPositiveInteger } from '../utils/get-random-positive-integer.js';
import { getRandomPositiveFloat } from '../utils/get-random-positive-float.js';


const FILE_PATH = 'img/avatars/user';
const FILE_EXTENSION = '.png';
const EXTREME_TWO_DIGIT_NUMBER = 99;
const ADJECTIVES = ['Lovely', 'Beautiful', 'Huge', 'Family', 'Youth', 'Conceptual'];
const NOUNS = ['Abby apartment', 'Milano Flat', 'Guest-house', 'Hilton bungalow'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTION = ['This town is called: Norubburg',
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
  'The attraction of the city is: first colorful area and first huge park',
];

const TIME = ['12:00', '13:00', '14:00'];

const LAT_RANGE = {
  min: 35.65000,
  max: 35.70000,
};

const LNG_RANGE = {
  min: 139.70000,
  max: 139.80000,
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

/** *
   * Returns array random element
   */
function getRandomArrElem(array) {
  const randomIndex = getRandomIndex(array);
  return `${array[randomIndex]}`;
}

function getRandomArr(array, maxLength) {
  return [...Array(1 + Math.random() * maxLength | 0)].map(() => array[Math.random() * array.length | 0]);
}

/** *
   * Prepare points for the lines, scatters
   * @path file path
   * @id serial number or unique id
   * @extension file extension with dot: .png
   */
function setRandomPath(path, id, extension) {

  const modifiedId = id > EXTREME_TWO_DIGIT_NUMBER  ? id : ((`0${  id}`).slice(-2));
  return `${path}${modifiedId}${extension}`;
}

function getAuthorsValue(serialNumber) {
  return {
    avatar: setRandomPath(FILE_PATH, serialNumber, FILE_EXTENSION),
  };
}

/** *
   * Generates ad title
   */
function getAdTitle() {
  const name = `${getRandomArrElem(ADJECTIVES)  } ${  getRandomArrElem(NOUNS)}`;
  return name;
}

function getlocationsValue() {
  return {
    lat: getRandomPositiveFloat(LAT_RANGE.min, LAT_RANGE.max, 5),
    lng: getRandomPositiveFloat(LNG_RANGE.min, LNG_RANGE.max, 5),
  };
}

/** *
   * Generates ad type
   */
function getAdType() {
  return getRandomArrElem(TYPES);
}

/** *
   * Generates ad checkin / checkout time
   */
function getAdCheckinOutTime() {
  return getRandomArrElem(TIME);
}

/** *
   * Generates ad features
   */
function getAdFeatures() {
  return [...new Set(getRandomArr(FEATURES, getRandomPositiveInteger(4, FEATURES.length - 1)))];
}

/** *
   * Generates ad description
   */
function getAdDescription() {
  return getRandomArrElem(DESCRIPTION);
}

/** *
   * Generates ad photos
   */
function getAdPhotos() {
  return [...new Set(getRandomArr(PHOTOS, getRandomPositiveInteger(1, 3)))];
}

function getOffersValue() {
  return {
    title: getAdTitle(),
    address: getlocationsValue(),
    price: getRandomPositiveInteger(1000, 10000),
    type: getAdType(),
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 10),
    checkin: getAdCheckinOutTime(),
    checkout: getAdCheckinOutTime(),
    features: getAdFeatures(),
    description: getAdDescription(),
    photos: getAdPhotos(),

  };
}

export function build(NUMBER_OF_ADS_NEARBY = 1) {
  const similarAdDescription = [];

  for (let index = 1; index <= NUMBER_OF_ADS_NEARBY; index++) {
    similarAdDescription.push({
      author: getAuthorsValue(index),
      offer: getOffersValue(),
      location: getlocationsValue(),
    });
  }
  return similarAdDescription;
}
