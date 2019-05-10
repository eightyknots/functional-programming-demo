// Q5: Up to today, what is the average gross per day of each MCU film in descending order?
const sortBy = require('./question2').sortBy;

exports.solution = function (filmData) {
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

exports.answer = [{name: 'Avengers: Endgame', dailyUsGross: 45141961.14285714},
  {name: 'Captain Marvel', dailyUsGross: 6683455.253968254},
  {
    name: 'Avengers: Infinity War',
    dailyUsGross: 1795808.1534391535
  },
  {name: 'Black Panther', dailyUsGross: 1562632.9598214286},
  {name: 'Ant-Man And The Wasp', dailyUsGross: 703405},
  {name: 'Thor: Ragnarok', dailyUsGross: 569725.6582278481},
  {
    name: 'Guardians of the Galaxy Vol. 2',
    dailyUsGross: 530357.9605442177
  },
  {name: 'Spider-Man: Homecoming', dailyUsGross: 497323.125},
  {
    name: 'Captain America: Civil War',
    dailyUsGross: 374733.1028466483
  },
  {
    name: 'Avengers: Age of Ultron',
    dailyUsGross: 312248.88979591837
  },
  {name: 'Doctor Strange', dailyUsGross: 253698.93129770993},
  {
    name: 'Marvel\'s The Avengers',
    dailyUsGross: 243309.09836065574
  },
  {
    name: 'Guardians of the Galaxy',
    dailyUsGross: 191151.23350545036
  },
  {name: 'Iron Man 3', dailyUsGross: 186084.61965423112},
  {
    name: 'Captain America: The Winter Soldier',
    dailyUsGross: 139509.4371643394
  },
  {name: 'Ant-Man', dailyUsGross: 129362.64393395549},
  {
    name: 'Thor: The Dark World',
    dailyUsGross: 102718.83524141363
  },
  {name: 'Iron Man 2', dailyUsGross: 94964.53829787234},
  {name: 'Iron Man', dailyUsGross: 79108.59652173913},
  {
    name: 'Captain America: The First Avenger',
    dailyUsGross: 62005.79326079326
  },
  {name: 'Thor', dailyUsGross: 61869.65960355434},
  {name: 'The Incredible Hulk', dailyUsGross: 33845.5719307055}];
