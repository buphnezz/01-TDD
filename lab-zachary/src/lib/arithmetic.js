'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => {
  if (num1 === '' || num2 === '' || typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  }
  return 'There is no number present';
};

arithmetic.sub = (num1, num2) => {
  if (num1 === '' || num2 === '' || typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  }
  return num1 - num2;
};

arithmetic.numIsPresent = (num1, num2) => {
  if (typeof num1 === 'number' || typeof num2 === 'number') {
    return 2;
  }
  return 2;
};
