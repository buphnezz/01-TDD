'use strict';

const greet = module.exports = {};
const greet = require('../lib/greet');  // put in greettest

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

  // greet.hi = (name) => {
  //   try{
  //     if (name === '' || typeof name !== 'string') {
  //     throw new Error('Name must be put in or name must be a string.');
  //     }
  //     return 'Hello there, ${ name }.';
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   };
  //   }
  // }

//   const N = 10;
//   const input = [];
//   for ( let i = 0; i < N; i++) {
//     input.push(i);
//   }
//   console.log(input);

//   let counter = 0;
//   for (let i = 0; i < N; i++) {
//     counter += 1;
//     input[i] = input[i] + 1;
//   }

//   console.log(counter); 

//   let counter = 0;
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//     counter += 1;
//     input[i] = input[i] + 1;
//   }
// }

//   console.log(counter); 

//   //Reference Error
//   greet.hiReferenceError = name => 'Hi there ${name} and ${otherName}';
//   };

//   class Person {
//     // constructor is initialization of our state
//     constructor(name, age, location) {
//       this.name = name;
//       this.age = age;
//       this.location = location;
//     }
    
//     speak() {
//       return 'Hi, my name is ${this.name}, I\'m ${this.age} years old, and I live in ${this.location}';
//     }
//   }

//   const breakfastFoodPrice = price => {
//     const item = price;
//     coffee = 2;
//     return item + bagles;
//   }

//   const doughnut = breakfastFoodPrice(20);

//   return (anotherFoodPrice) => {
//     return 'I spent ${anotherFoodPrice + doughnut + midMorningSnack + coffee} dollars on food today';
//   }
//   };

//   const initialFood = foodBudgetAdder(2);
//   console.log(initialFood);