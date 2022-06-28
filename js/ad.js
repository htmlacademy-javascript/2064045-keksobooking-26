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
 * @prop {string[]} features Перечень услуг.
 * @prop {string} description Описание помещений.
 * @prop {string[]} photos Фотографии.
 */

/**
 * Местоположение (географические координаты).
 * @typedef AdLocation
 * @prop {number} lat Широта.
 * @prop {number} lng Долгота.
 */
