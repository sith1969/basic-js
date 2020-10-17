const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity < 1 || sampleActivity > MODERN_ACTIVITY || typeof sampleActivity != "string") {
    return false;
  } else {
    let mA = Math.log(MODERN_ACTIVITY / +(sampleActivity));
    let kHLP = 0.693 / HALF_LIFE_PERIOD;
    let period = mA / kHLP;
    if (isNaN(period) == true) {
      return false;
    } else {
      return Math.ceil(period);
    }
  }
}