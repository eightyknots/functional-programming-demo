// Q4: Has every Avengers movie grossed more than the last? (Note: Please return a boolean)
const sortBy = require('./question2').sortBy;

exports.solution = function (filmData) {
  const avengersFilms = sortBy(
    filmData.filter((film) => (film.name.match(/avengers/i))),
    'releaseDate'
  );

  const maxGrossingAvengers = avengersFilms.reduce((peakGrossingFilm, currentFilm) => {
    return (!peakGrossingFilm.usGross || currentFilm.usGross > peakGrossingFilm.usGross) ? currentFilm : peakGrossingFilm;
  }, {});

  return (maxGrossingAvengers === avengersFilms[avengersFilms.length - 1]);
};

exports.answer = false;
