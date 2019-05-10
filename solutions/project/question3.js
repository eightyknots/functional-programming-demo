// Q3: Which movie was the first Disney-produced (i.e. Buena Vista) film?
const sortBy = require('./question2').sortBy;

exports.solution = function (filmData) {
  return sortBy(filmData, 'releaseDate')
    .filter((film) => (film.studio === 'Buena Vista'))
    .reduce((earliest, film) => {
      return (!earliest.releaseDate || earliest.releaseDate < film.releaseDate) ? earliest : film;
    });
};

exports.answer = {
  name: 'Marvel\'s The Avengers',
  usGross: 623357910,
  releaseDate: '2012-05-04',
  studio: 'Buena Vista',
  actors:
    ['Robert Downey, Jr.',
      'Chris Hemsworth',
      'Chris Evans',
      'Jeremy Renner',
      'Mark Ruffalo',
      'Scarlett Johansson',
      'Clark Gregg',
      'Samuel L. Jackson',
      'Cobie Smulders',
      'Tom Hiddleston']
};
