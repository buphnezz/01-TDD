'use strict';

const greet = module.exports = {};
const greet = require('src/lib/greet');

greet.hi = (name) => {
  return 'Hello, ${name}!'; };
  if (name === '' || typeof name !== 'string') {
  return -1};


describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('Should return hello world', () => {
      expect(greet.hi('world')).toEqual('hello world');
    })
  })
    });
