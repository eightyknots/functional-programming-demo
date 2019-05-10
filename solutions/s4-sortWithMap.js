const assert = require('assert').strict;

String.prototype.ucfirst = function() {
  return this.split(' ')
    .map((word) => (word.charAt(0) !== '(') ? word.charAt(0).toUpperCase() + word.substring(1) : word)
    .join(' ');
};

const list = ['delta', '(EVA) EVA Airways', '(CPA) Cathay Pacific', 'American',
  '(BAW) British Airways', '(JBU) JetBlue', '(KAL) Korean Air', ' EgyptAir',
  '(DLH) Lufthansa', '(NKS) Spirit Airlines', 'Hainan Airlines', 's7 airlines'
];

const icaoRegex = /^\([a-z]{3}\)/i;

// Do not edit above this line.

// Temporary array to hold positions
const mapped = list.map((element, index) => {
  return {
    value: element.replace(icaoRegex, '').trim().toLowerCase(),
    index
  };
});

mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  } else if (a.value < b.value) {
    return -1;
  } else {
    return 0;
  }
});

// Return sorted elements in the original list
const result = mapped.map((element) => {
  return list[element.index].ucfirst().trim();
});

// Do not edit below this line.

console.log('Exercise 4: Daisy-chained .map() and .sort()', result);

assert.deepEqual(result, [
  'American',
  '(BAW) British Airways',
  '(CPA) Cathay Pacific',
  'Delta',
  'EgyptAir',
  '(EVA) EVA Airways',
  'Hainan Airlines',
  '(JBU) JetBlue',
  '(KAL) Korean Air',
  '(DLH) Lufthansa',
  'S7 Airlines',
  '(NKS) Spirit Airlines'
]);
