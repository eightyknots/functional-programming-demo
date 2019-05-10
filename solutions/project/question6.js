// Q6: Which actor(s) have appeared in more than one film? Order them in descending order of number of appearances.

exports.solution = function (filmData) {
  const actorList = filmData
    .reduce((actorList, film) => {
      film.actors.forEach((actor) => {
        if (!actorList[actor]) {
          actorList[actor] = 0
        }
        actorList[actor]++;
      });
      return actorList;
    }, {});

  const sortedActors = [];

  for (const actor in actorList) {
    if (actorList[actor] > 1) {
      sortedActors.push({name: actor, count: actorList[actor]});
    }
  }

  return sortedActors.sort((a, b) => {
    return b.count - a.count;
  }).reduce((obj, actorHash) => {
    obj[actorHash.name] = actorHash.count;
    return obj;
  }, {});
};

exports.answer = {
  'Robert Downey, Jr.': 9,
  'Chris Hemsworth': 7,
  'Chris Evans': 6,
  'Scarlett Johansson': 6,
  'Mark Ruffalo': 5,
  'Clark Gregg': 5,
  'Don Cheadle': 4,
  'Jeremy Renner': 4,
  'Tom Hiddleston': 4,
  'Samuel L. Jackson': 4,
  'Paul Rudd': 4,
  'Sebastian Stan': 3,
  'Gwyneth Paltrow': 3,
  'Karen Gillan': 3,
  'Anthony Mackie': 3,
  'Elizabeth Olsen': 3,
  'Paul Bettany': 3,
  'Benedict Cumberbatch': 3,
  'Idris Elba': 3,
  'Anthony Hopkins': 3,
  'Chadwick Boseman': 3,
  'Michael Douglas': 2,
  'Michael Rooker': 2,
  'Winston Duke': 2,
  'Zoe Saldana': 2,
  'Dave Bautista': 2,
  'Vin Diesel': 2,
  'Bradley Cooper': 2,
  'Tom Holland': 2,
  'Hayley Atwell': 2,
  'Jon Favreau': 2,
  'John Slattery': 2,
  'Josh Brolin': 2,
  'Djimon Hounsou': 2,
  'Evangeline Lilly': 2,
  'Cobie Smulders': 2,
  'Michael Pena': 2,
  'Natalie Portman': 2,
  'Bobby Cannavale': 2,
  'T.I.': 2,
  'Stellan Skarsgard': 2,
  'Kat Dennings': 2,
  'Ray Stevenson': 2,
  'Brie Larson': 2,
  'Lee Pace': 2,
  'Chris Pratt': 2
};
