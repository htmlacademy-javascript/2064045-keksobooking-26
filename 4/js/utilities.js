/**
 * Вернет случайное число в диапазоне `from`, `to`.
 * @param {number} from Положительное число.
 * @param {number} to Положительное число >= `from`.
 * @param {number} fractionDigits Максимальное кол-во знаков после точки.
 */
export const getNumberInRange = (from, to, fractionDigits = 5) => {
  const range = [from, to];

  if (!range.every(Number.isFinite)) {
    throw new Error(`Нечисловой диапазон: ${range}`);
  }
  if (from > to || from < 0 || to < 0) {
    throw new Error(`Неподдерживаемый диапазон: ${range}`);
  }
  if (!Number.isInteger(fractionDigits)) {
    throw new Error(`Неверно задан параметр fractionDigits: ${fractionDigits}`);
  }
  const value = (to - from) * Math.random() + from;
  return Number(value.toFixed(fractionDigits));
};

/**
 * Вернет целое число в диапазоне `from` `to`.
 * @param {number} from Целое положительное число.
 * @param {number} to Положительное целое число >= `from`.
 */
export const getIntegerInRange = (from, to) => {
  const range = [from, to];

  if (!range.every(Number.isInteger)) {
    throw new Error(`Не все числа диапазона являются целыми: ${range}`);
  }
  return getNumberInRange(from, to, 0);
};

/**
 * Вернёт случайный элемент массива.
 * @template Item
 * @param {Item[]} items
 */
export const getItemFromArray = (items) => {
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
export const getItemsFromArray = (items) => {
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
