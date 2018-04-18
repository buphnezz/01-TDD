'use strict';

const greet = require('../lib/greet');  

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('should return Null when no string', () => {
      expect(greet.hi(null)).toBeNull();
    })
  })
})

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('Should return hello world', () => {
      expect(greet.hi('world')).toEqual('Hello, world!');
    })
  })
});