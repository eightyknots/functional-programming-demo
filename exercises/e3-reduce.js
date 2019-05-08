const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 21 },
  { name: 'Daenerys', age: 22 }
];

const groupByAge = (accumulator, currentValue) => {

};

const peopleByAge = people.reduce(groupByAge, {});
