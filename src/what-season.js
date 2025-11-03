const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth') || date.hasOwnProperty('toString') || Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!');
  if (isNaN(date)) throw new Error('Invalid date!');
  const monthCount = date.getMonth();

  if (monthCount === 0 || monthCount === 1 || monthCount === 11) return "winter";
  if (monthCount === 2 || monthCount === 3 || monthCount === 4) return "spring";
  if (monthCount === 5 || monthCount === 6 || monthCount === 7) return "summer";
  if (monthCount === 8 || monthCount === 9 || monthCount === 10) return "autumn"
}

module.exports = {
  getSeason
};
