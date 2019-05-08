const numArray = [1, 2, 3, 5, 12, 46, 59, 102];
let answer;

// Do not change above this line.
// Replace the following for loop with a filter() implementation.
answer = [];
for (let cur = 0; cur < numArray.length; cur++) {
  if (numArray[cur] % 2 === 0) {
    answer.push(numArray[cur]);
  }
}
