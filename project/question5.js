// Q5: Up to today, what is the average gross per day of each MCU film in descending order?

exports.solution = function(filmData) {
  // Put your answer in here. Return an array of { name: String, dailyUsGross: Number }.
  return;
};

// Hint: You will want these :)
const endDate = new Date('2019-05-10');
const diffDays = (firstDate, secondDate) => Math.ceil(Math.abs((firstDate.getTime() - secondDate.getTime()) / (24 * 60 * 60 * 1000)));
