const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const STR = String(str);
  const DEFAULT_SEPARATOR = '+';
  const DEFAULT_ADDITION_SEPARATOR = '|';

  let memSeparator = DEFAULT_SEPARATOR;
  let memAddSepataor = DEFAULT_ADDITION_SEPARATOR;
  let memSTR = STR;
  let result = "";

  if (options.additionSeparator) memAddSepataor = options.additionSeparator;
  if (options.separator) memSeparator = options.separator;

  if (options.addition !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) memSTR += String(options.addition) + memAddSepataor;
    memSTR += String(options.addition);
  }

  result = memSTR;

  for (let i = 0; i < options.repeatTimes - 1; i++){
    result += (memSeparator + memSTR);
  }

  return result;
}

module.exports = {
  repeater
};
