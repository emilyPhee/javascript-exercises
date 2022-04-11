const removeFromArray = function (numArr, ...args) {
  return numArr.filter(num => !args.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
