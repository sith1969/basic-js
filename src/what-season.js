const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(date)) {throw new Error;}
  let mounth = date.getMonth();
  if (mounth >= 0 && mounth <= 1 || mounth == 11) { return 'winter' }
    else if (mounth >= 2 && mounth <= 4) { return 'spring' }
    else if (mounth >= 5 && mounth <= 7) { return 'summer' }
    else {return 'autumn' }
};
