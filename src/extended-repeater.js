const CustomError = require("../extensions/custom-error");


module.exports = function repeater(str, options) {
  this.repeatTimes = options.repeatTimes;
  if (options.repeatTimes !== undefined){
    this.repeatTimes =options.repeatTimes;
  } else {this.repeatTimes =1;}
  
  this.separator = options.separator;
  if (options.separator !== undefined){
    this.separator =String(options.separator);
  } else {this.separator ='+';}

  this.addition = options.addition;
  if (options.addition !== undefined){
    this.addition =String(options.addition);
  } else {this.addition ='';}

  this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  this.additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '+';
  
  let newSeparator='';
  
  for (let i = 0; i < this.repeatTimes; i++) {
      newSeparator += String(str);
      for (let j = 0; j < this.additionRepeatTimes; j++) {
          newSeparator += this.addition;      
          j < (this.additionRepeatTimes-1) ? newSeparator += this.additionSeparator : 0;
          // if (j < (this.additionRepeatTimes-1)){
          //   newSeparator += this.additionSeparator
          // }else {newSeparator=0;}
      }
      i < (this.repeatTimes - 1) ? newSeparator += this.separator : 0;
  }

  return newSeparator;
};