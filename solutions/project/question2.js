// Q2: What is the average gross per film for each studio? Sort your answer in descending order of US grosses.

exports.solution = function (filmData) {
  const groupedByStudio = groupBy(filmData, 'studio');
  return sortBy(Object.keys(groupedByStudio).map((studio) => {
    const studioFilms = groupedByStudio[studio];
    const studioTotal = studioFilms.reduce((totalGross, film) => {
      return totalGross + film.usGross
    }, 0);
    const averageGross = studioTotal / studioFilms.length;
    return {
      studio,
      averageGross
    };
  }), 'averageGross', true);
};


const sortBy = (array, key, reverse = false) => {
  return array.concat().sort((a, b) => {
    if (a[key] > b[key]) {
      return (reverse ? -1 : 1);
    } else if (a[key] < b[key]) {
      return (reverse ? 1 : -1);
    } else {
      return 0;
    }
  });
};

const groupBy = (array, property) => {
  return array.reduce((acc, film) => {
    const key = film[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(film);
    return acc;
  }, {});
};

exports.sortBy = sortBy;
exports.groupBy = groupBy;

exports.answer = [{studio: 'Buena Vista', averageGross: 404065739.4375},
  {studio: 'Sony', averageGross: 334201140},
  {studio: 'Paramount', averageGross: 247132640.25},
  {studio: 'Universal', averageGross: 134806913}];
