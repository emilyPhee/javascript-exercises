const palindromes = function (str) {
  const filteredStr = str.replace(/[^\w]/g, '');
  const reversed = filteredStr.split('').reverse().join('');

  return filteredStr.toLowerCase() === reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
