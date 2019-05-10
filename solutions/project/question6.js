// Q6: Which actor(s) have appeared in more than one film? Order them in descending order of number of appearances.

exports.solution = function(filmData) {
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
      sortedActors.push({ name: actor, count: actorList[actor] });
    }
  }

  return sortedActors.sort((a, b) => {
    return b.count - a.count;
  }).reduce((obj, actorHash) => {
    obj[actorHash.name] = actorHash.count;
    return obj;
  }, {});
};
