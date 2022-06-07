/**
 * возвращает число с плавающей точкой из заданного диапазона
 * @param {number} from
 * @param {number} to
 */
const getFloatInRangeExlusive = (from, to) => {
  if (from > to || from < 0 || to < 0) {
    throw new Error('Неверный диапазон чисел');
  }
  const distance = to - from;
  return Math.random() * distance + from;
};

/**
 * Функция возвращающает случайное целое число из переданного
 *  диапазона включительно.
 * @param {number} from
 * @param {number} to
 */
const getIntegerInRange = (from, to) => {
  const exclusiveFloat = getFloatInRangeExlusive(from, to);
  return Math.round(exclusiveFloat);
};
getIntegerInRange();

/**
 * возврщает случайное число с плавающей
 *  точкой из переданного диапозона включительно
 * @param {number} from
 * @param {number} to
 * @param {number} fractionDigits количество знаков после точки
 */
const getFloatInRange = (from, to, fractionDigits) => {
  if (!Number.isInteger(fractionDigits)) {
    throw new Error('Неверное количество знаков после точки');
  }
  const exclusiveFloat = getFloatInRangeExlusive(from, to);
  const inclusiveFloat = Math.fround(exclusiveFloat);
  const fixedFloatString = inclusiveFloat.toFixed(fractionDigits);
  return Number(fixedFloatString);
};

getFloatInRange(1.11, 1.25, 3);
