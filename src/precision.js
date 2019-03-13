/**
 * Round the number to the desired precision
 * @param {string|float|int} a - Number to round
 */
export default a => +(Number.parseFloat(a).toPrecision(6));
