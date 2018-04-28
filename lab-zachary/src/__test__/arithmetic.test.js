'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('should return Null when no number exists', () => {
      expect(arithmetic.add(null)).toBeNull();
    });
    describe('arithmetic.numIsPresent', () => {
      test('Should return a number', () => {
        expect(arithmetic.numIsPresent('number')).toEqual(2);
      });
      describe('arithmetic.sub', () => {
        test('Should return the result of num1 - num2', () => {
          expect(arithmetic.sub(4, 2)).toEqual(2);
        });
      });
    });
  });
});
