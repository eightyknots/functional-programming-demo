// Q1: How much has the Marvel Cinematic Universe grossed in the US?

exports.solution = function (filmData) {
  // Put your answer in here
  return filmData.reduce((acc, film) => {
    acc += film.usGross;
    return acc;
  }, 0);
};

exports.answer = 7922590445;
