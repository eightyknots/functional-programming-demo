const questions = [
  'Q1: Total MCU US Gross: ',
  'Q2: Average Gross By Studio:\n',
  'Q3: Earliest Disney-produced Film:\n',
  'Q4: Every Avengers movie gross more than last?:\n',
  'Q5: Films by descending daily gross:\n',
  'Q6: Actor/Actress film count if more than single appearance:\n'
];

if (process.argv.length < 3) {
  console.error('Needs a question to run!');
  process.exit(1);
}

const questionNumber = parseInt(process.argv[2]);
const dir = (!process.argv[3]) ? 'project' : 'solutions/project';
const filmData = require('./data/mcu').sort(() => Math.random() - 0.5);
const solution = require(`./${dir}/question${questionNumber}`).solution(filmData);

console.log(`Running Q${questionNumber}...\n`);
console.log(questions[questionNumber - 1], solution);
