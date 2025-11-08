const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  memChain: [],
  getLength() {
    return this.memChain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.memChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let memChainPos = position - 1;
    if(!this.memChain[memChainPos]){
      this.memChain.splice(0);
      throw new Error ("You can\'t remove incorrect link!");
    }
    this.memChain.splice(memChainPos, 1);
    return this;
  },
  reverseChain() {
    this.memChain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.memChain.join('~~');
    this.memChain.splice(0);
    return finalChain;
  }
};

module.exports = {
  chainMaker,
};
