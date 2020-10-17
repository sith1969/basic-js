const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string, key) {
    if (!string || !key) { 
      throw new Error();
    }
  }    
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
