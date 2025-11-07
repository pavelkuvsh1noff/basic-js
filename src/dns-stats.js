const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsReverse = [];
  let dns = {};

  domains.forEach(item => {
    domainsReverse.push(item.split('.').reverse().map(elem => '.' + elem));
  })

  domainsReverse.forEach(item => {
    let dnsPart = '';
    item.forEach(elem => {
      dnsPart += elem;
      dns[dnsPart] = (dns[dnsPart] || 0) + 1;
    });
  })

  return dns;
}

module.exports = {
  getDNSStats
};
