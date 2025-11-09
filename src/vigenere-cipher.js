const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (key.length < message.length) key += key;

    let result = [];
    let messageArr = message.split('');
    let keyArrMem = key.split('').reverse();
    let keyArr = [];

    for (let i = 0; i < messageArr.length; i++){
      if (this.alphabet.includes(messageArr[i])){
        keyArr.push(keyArrMem.pop());
      } else {
        keyArr.push(messageArr[i]);
      }
    }

    for (let i = 0; i < messageArr.length; i++) {
      if (this.alphabet.includes(messageArr[i])) {
        let indexLetterMessage = this.alphabet.indexOf(messageArr[i]);
        let indexLetterKey = this.alphabet.indexOf(keyArr[i]);
        let indexNewLetter = (indexLetterMessage + indexLetterKey) % this.alphabet.length;
        result.push(this.alphabet[indexNewLetter]);
      } else {
        result.push(messageArr[i]);
      }
    }

    if (this.direction === true) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (key.length < message.length) key += key;

    let result = [];
    let messageArr = message.split('');
    let keyArrMem = key.split('').reverse();
    let keyArr = [];

    for (let i = 0; i < messageArr.length; i++){
      if (this.alphabet.includes(messageArr[i])){
        keyArr.push(keyArrMem.pop());
      } else {
        keyArr.push(messageArr[i]);
      }
    }

    for (let i = 0; i < messageArr.length; i++) {
      if (this.alphabet.includes(messageArr[i])) {
        let indexLetterMessage = this.alphabet.indexOf(messageArr[i]);
        let indexLetterKey = this.alphabet.indexOf(keyArr[i]);
        let indexNewLetter = (this.alphabet.length + indexLetterMessage - indexLetterKey) % this.alphabet.length;
        result.push(this.alphabet[indexNewLetter]);
      } else {
        result.push(messageArr[i]);
      }
    }

    if (this.direction === true) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
  
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
