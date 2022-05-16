const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

// compute sum of numbers in array
const sum = function (numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, num) => total * num, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (n) {
  if (n === 0) return 1;

  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
