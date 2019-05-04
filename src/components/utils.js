/**
 * Если value входит в диапазон между max и min, возвращает value,
 * иначе возвращает max или min
 * @param {number} value - значение
 * @param {number} max - максимальное значение
 * @param {number} min - минимальное значение
 */
export const between = (value, max, min) =>
  Math.max(min, Math.min(value, max))