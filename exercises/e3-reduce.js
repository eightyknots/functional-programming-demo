const assert = require('assert').strict;

const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 21 },
  { name: 'Daenerys', age: 22 }
];

// Complete groupByAge to be an object of people grouped by
// a key that represents their age.

// Do not edit above this line.

const groupByAge = () => { };

// Do not edit below this line.

const peopleByAge = people.reduce(groupByAge, {});

console.log('Exercise 3: Practice .reduce():', peopleByAge);

assert.deepEqual(peopleByAge, {
  20: [ { name: 'Alice', age: 20 } ],
  21: [
    { name: 'Bob', age: 21 },
    { name: 'Charlie', age: 21 }
  ],
  22: [ { name: 'Daenerys', age: 22 } ]
});
