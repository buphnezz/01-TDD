'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.hi', () => {
    test('should return Null when no string', () => {
      expect(arithmetic.hi(null)).toBeNull();
    })
  })
})

describe('arithmetic.test.js', () => {
  describe('arithmetic.hi', () => {
    test('Should return a number', () => {
      expect(arithmetic.hi(2)).toEqual(2);
    })
  })
});
