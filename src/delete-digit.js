const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringNumber = String(n);
  let numberArr = [];
  let resultArr = [];

  for (let i = 0; i < stringNumber.length; i++) {
    numberArr = stringNumber.split('');
    numberArr.splice(i, 1);
    resultArr.push(numberArr.join(''));
  }

  return Math.max(...resultArr);
}

module.exports = {
  deleteDigit
};
