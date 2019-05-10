// Q5: Up to today, what is the average gross per day of each MCU film in descending order?
const sortBy = require('./question2').sortBy;

exports.solution = function(filmData) {
  return sortBy(filmData.map((film) => {
    const daysSinceRelease = diffDays(new Date(film.releaseDate), new Date('2019-05-10'));
    return {
      name: film.name,
      dailyUsGross: film.usGross / daysSinceRelease
    }
  }), 'dailyUsGross', true);
};

// Hint: You will want these :)
const endDate = new Date('2019-05-10');
const diffDays = (firstDate, secondDate) => Math.ceil(Math.abs((firstDate.getTime() - secondDate.getTime()) / (24 * 60 * 60 * 1000)));
