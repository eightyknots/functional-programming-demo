const assert = require('assert').strict;

const numArray = [1, 2, 3, 5, 12, 46, 59, 102];

let answer;

// Replace the following for loop with a filter() implementation.
// Do not change above this line.

answer = [];
for (let cur = 0; cur < numArray.length; cur++) {
  if (numArray[cur] % 2 === 0) {
    answer.push(numArray[cur]);
  }
}

// Do not edit below this line.

console.log('Exercise 2: Practice .filter():', answer);

assert.deepEqual(answer, [2, 12, 46, 102]);
