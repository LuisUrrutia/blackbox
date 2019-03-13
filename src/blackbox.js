/**
 * Check if the secret number is between of two numbers
 * @param {float|int} a - The initial number of the range to search
 * @param {float|int} b - The final number of the range to search
 */
export default (a, b) => {
  const x = Number.parseFloat(SECRET_NUMBER);

  return x >= a && x <= b;
};
