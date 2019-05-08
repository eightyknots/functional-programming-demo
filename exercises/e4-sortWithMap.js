String.prototype.ucfirst = function() {
  return this.split(' ')
    .map((word) => (word.charAt(0) !== '(') ? word.charAt(0).toUpperCase() + word.substring(1) : word)
    .join(' ');
};

const list = ['delta', '(EVA) EVA Airways', '(CPA) Cathay Pacific', 'American',
  '(BAW) British Airways', '(JBU) JetBlue', '(KAL) Korean Air', 'EgyptAir',
  '(DLH) Lufthansa', '(NKS) Spirit Airlines', 'Hainan Airlines', 's7 airlines'
];

// Temporary array to hold positions
const mapped = list.map((element, index) => {
  // TODO: Properly prepare airline name for sorting:
  //  - Remove ICAO codes
  //  - Trim both ends
  const icaoRegex = /^\([a-z]{3}\)/i;
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

console.log(mapped);

// Return sorted elements in the original list
const result = mapped.map((element) => {
  // TODO:
  //  - Return ORIGINAL STRING as in list, but sorted without ICAO code.
  return list[element.index].ucfirst();
});


console.log(result);

