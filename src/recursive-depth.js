const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return  1 + arr.reduce((a, b) => Math.max(this.calculateDepth(b), a), 0);
    }else {return 0;}
}
};
