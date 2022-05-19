const findTheOldest = function (people) {
  const oldest = people.reduce((acc, currentVal) => {
    if ('yearOfDeath' in acc && 'yearOfDeath' in currentVal) {
      return acc.yearOfDeath - acc.yearOfBirth >
        currentVal.yearOfDeath - currentVal.yearOfBirth
        ? acc
        : currentVal;
    } else {
      return new Date().getFullYear() - acc.yearOfBirth >
        new Date().getFullYear() - currentVal.yearOfBirth
        ? acc
        : currentVal;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
