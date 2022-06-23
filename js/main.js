/**
 * Вернет случайное число в диапазоне `from`, `to`.
 * @param {number} from Положительное число.
 * @param {number} to Положительное число >= `from`.
 * @param {number} fractionDigits Максимальное кол-во знаков после точки.
 */
const getNumberInRange = (from, to, fractionDigits = 5) => {
  const range = [from, to];

  if (!range.every(Number.isFinite)) {
    throw new Error(`Нечисловой диапазон: ${range}`);
  }
  if (from > to || from < 0 || to < 0) {
    throw new Error(`Не поддерживаемый диапазон: ${range}`);
  }
  if (!Number.isInteger(fractionDigits)) {
    throw new Error(`Неверно задан параметр fractionDigits: ${fractionDigits}`);
  }
  const value = (to - from) * Math.random() + from;
  return Number(value.toFixed(fractionDigits));
};

/**
 * Вернет целое число в диапазоне `from` `to`.
 * @param {number} from целое положительное число.
 * @param {number} to Положительное число >= `from`.
 */
const getIntegerInRange = (from, to) => {
  const range = [from, to];

  if (!range.every(Number.isInteger)) {
    throw new Error(`Диапазон не содержит целых чисел: ${range}`);
  }
  return getNumberInRange(from, to, 0);
};

/**
 * Вернёт случайный элемент массива.
 * @template Item
 * @param {Item[]} items
 */
const getItemFromArray = (items) => {
  if (!Array.isArray(items)) {
    throw new Error(`Не является массивом: ${items}`);
  }
  const lastIndex = Math.max(0, items.length - 1);
  const index = getIntegerInRange(0, lastIndex);
  return items[index];
};

/**
 * Вернёт случайное количество элементов массива.
 * @template Item
 * @param {Item[]} items
 */
const getItemsFromArray = (items) => {
  if (!Array.isArray(items)) {
    throw new Error(`Не является массивом: ${items}`);
  }
  const edits = [...items];
  let removals = getIntegerInRange(0, items.length);
  while (removals--) {
    const index = getIntegerInRange(0, edits.length - 1);
    edits.splice(index, 1);
  }
  return edits;
};

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

generateAds();

/**
 * Объявление.
 * @typedef Ad
 * @prop {AdAuthor} author
 * @prop {AdOffer} offer
 * @prop {AdLocation} location
 */

/**
 * Автор объявления.
 * @typedef AdAuthor
 * @prop {string} avatar URL-адрес аватара.
 */

/**
 * Детали объявления.
 * @typedef AdOffer
 * @prop {string} title Заголовок.
 * @prop {string} address Адрес предложения.
 * @prop {number} price Стоимость.
 * @prop {string} type Вид жилья.
 * @prop {number} rooms Количество комнат.
 * @prop {number} guests Количество гостей.
 * @prop {string} checkin Время заселения.
 * @prop {string} checkout Время выселения.
 * @prop {string} features Перечень услуг.
 * @prop {string} description Описание помещений.
 * @prop {string} photos Фотографии.
 */

/**
 * Местоположение (географические координаты).
 * @typedef AdLocation
 * @prop {number} lat Широта.
 * @prop {number} lng Долгота.
 */
