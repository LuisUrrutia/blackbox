import blackbox from './blackbox';
import precision from './precision';

/**
 * Using and aproach like the binary search,
 * it will find the secret number
 * @param {string|float|int} aArg - The initial number of the range to search
 * @param {string|float|int} bArg - The final number of the range to search
 */
const find = (aArg, bArg) => {
  const a = precision(aArg);
  const b = precision(bArg);

  if (Number.isNaN(a) || Number.isNaN(b) || a > b) {
    throw new Error('You provided invalid numbers. Make sure that B is greater than A.');
  }

  // Get the middle number between A and B
  const difference = precision(b - a);
  const half = precision(difference / 2);

  const middle = precision(a + half);

  const firstPart = blackbox(a, middle);
  const secondPart = blackbox(middle, b);

  if (firstPart && secondPart) {
    // If both parts has the secret number, it means that the middle number is the number
    return middle;
  }
  if (firstPart) {
    return find(a, a + half);
  }
  if (secondPart) {
    return find(a + half, b);
  }

  throw new Error('The number isn\'t between the two provided numbers');
};

export default find;
