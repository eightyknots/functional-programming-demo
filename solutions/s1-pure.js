const assert = require('assert').strict;

let input = 4;

// Do not edit above this line. Make this function pure.

const squared = function (input) {
  return input * input;
};

// Do not edit below this line.

let output = squared(input);

console.log('Exercise 1: Pure functions - squared(4) =', squared(4));
assert.equal(output, 16);
assert.equal(input, 4);
