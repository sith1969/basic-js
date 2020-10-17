const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;
 
  
  let transArray = [];
  let discard = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === "--discard-next") {
      discard.push(++i);
    }

    else if (arr[i] === "--double-prev") {
      if (i > 0 && discard.includes(i - 1) === false) {
        transArray.push(arr[i - 1]);
      }
    }

    else if (arr[i] === "--discard-prev") {
      if (transArray.length > 0 && discard.includes(i - 1) === false) {
        transArray.pop();
        discard.push(i - 1);
      }
    }

    else if (arr[i] === "--double-next") {
      if (++i < arr.length) {
        transArray.push(arr[i]);
        transArray.push(arr[i]);
      }
    }

    else {
      transArray.push(arr[i]);
    }

  }

   return transArray;
};
