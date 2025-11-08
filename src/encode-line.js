const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let strArr = str.split('');
  let count = 1;
  let encodeStr = '';

  for (let i = 0; i < strArr.length; i++){
    if(strArr[i] === strArr[i + 1]) count++;
    if(strArr[i] !== strArr[i + 1]){
      if(count === 1) encodeStr += strArr[i];
      if(count !== 1) encodeStr += String(count) + strArr[i];
      count = 1;
    }
  }

  return encodeStr;
}
module.exports = {
  encodeLine
};
