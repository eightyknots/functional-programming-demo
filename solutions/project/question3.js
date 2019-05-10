// Q3: Which movie was the first Disney-produced (i.e. Buena Vista) film?
const sortBy = require('./question2').sortBy;

exports.solution = function(filmData) {
  return sortBy(filmData, 'releaseDate')
    .filter((film) => (film.studio === 'Buena Vista'))
    .reduce((earliest, film) => {
      return (!earliest.releaseDate || earliest.releaseDate < film.releaseDate) ? earliest : film;
    });
};
