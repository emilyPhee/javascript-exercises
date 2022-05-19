const fibonacci = function (n) {
  let prev = 1;
  let next = 1;
  let total;

  let numArr = [prev, next];

  for (let i = 0; i < n; i++) {
    total = prev + next;
    numArr.push(total);

    prev = next;
    next = total;
  }

  if (n > 0) {
    return numArr.at(n - 1);
  } else {
    return 'OOPS';
  }
};

// Do not edit below this line
module.exports = fibonacci;
