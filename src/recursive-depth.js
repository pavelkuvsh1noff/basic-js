const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let depthArr = 1;
    arr.forEach(item => {
      if(Array.isArray(item)){
        let memDepthArr = this.calculateDepth(item);
        memDepthArr++
        if(depthArr < memDepthArr) depthArr = memDepthArr
      }
    });
    return depthArr;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
