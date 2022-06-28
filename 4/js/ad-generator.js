import './ad.js';
import {
  getItemFromArray,
  getItemsFromArray,
  getNumberInRange,
  getIntegerInRange
} from'./utilities.js';

/**
 * Варианты видов жилья.
 */
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

/**
 * Часы заезда и выезда.
 */
const CHECK_HOURS = ['12:00', '13:00', '14:00'];

/**
 * Диапазон количества комнат.
 */
const ROOMS_RANGE = [1, 10];

/**
 * Диапазон количества гостей.
 */
const GUESTS_RANGE = [1, 10];

/**
 * Диапазон цены.
 */
const PRICE_RANGE = [0, 10000];

/**
 * Варианты удобств.
 */
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

/**
 * Варианты описаний.
 */
const DESCRIPTIONS = [
  'Номер с видом на море',
  'Номер без окон, но с форточкой',
  'Бунгало в уединенном месте'
];

/**
 * Варианты заголовков.
 */
const TITLES = [
  'Лучшие номера для наших постояльцев',
  'Бунгало для молодоженов',
  'Номера для больших семей с животными'
];

/**
 * Варианты фотографий.
 */
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

/**
 * Диапазон широты.
 */
const LAT_RANGE = [35.65000, 35.70000];

/**
 * Диапазон долготы.
 */
const LNG_RANGE = [139.70000, 139.80000];

/**
 * Сгенерирует объявление.
 * @param {number} id Число от 1 до 10.
 * @returns {Ad}
 */
const generateAd = (id) => {
  /** @type AdAuthor */
  const author = {
    avatar: `img/avatars/user${`${id}`.padStart(2, '0')}.png`,
  };

  /** @type AdLocation */
  const location = {
    lat: getNumberInRange(...LAT_RANGE),
    lng: getNumberInRange(...LNG_RANGE)
  };

  /** @type AdOffer */
  const offer = {
    title: getItemFromArray(TITLES),
    address: `${location.lat}, ${location.lng}`,
    price: getIntegerInRange(...PRICE_RANGE),
    type: getItemFromArray(OFFER_TYPES),
    rooms: getIntegerInRange(...ROOMS_RANGE),
    guests: getIntegerInRange(...GUESTS_RANGE),
    checkin: getItemFromArray(CHECK_HOURS),
    checkout: getItemFromArray(CHECK_HOURS),
    features: getItemsFromArray(FEATURES),
    description: getItemFromArray(DESCRIPTIONS),
    photos: getItemsFromArray(PHOTOS),
  };

  return {author, offer, location};
};

/**
 * Сгенерирует список объявлений.
 * @param {number} length Длина списка.
 */
const generateAds = (length = 10) =>
  Array.from({length}, (item, index) => generateAd(index + 1));

export default generateAds;
