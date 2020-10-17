const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(members) {
  let Name = '';
  if (Array.isArray(members)) {
    
    for (let i of members) {
      if (typeof i === "string") {
          i = i.trim();
          Name = Name + i[0];
    }
    }
    return Name.toUpperCase().split('').sort().join('');
 } else{ return false;}

};