# Functionally-Paired Programming Project

Let's explore a real data set relevant to today's pop culture, the Marvel Cinematic Universe.

This dataset comes from the Box Office Mojo [MCU Franchise US Box Office Gross](https://www.boxofficemojo.com/franchises/chart/?view=main&id=avengers.htm&sort=date&order=DESC&p=.htm) table.
Gross box office receipts are taken up to May 6, 2019.

There are 22 films in the MCU's first-generation, starting with *Iron Man* (2008) through *Avengers: Endgame* (2019).

Data for each film contains:

````typescript
interface MCUFilm {
    name: String;
    usGross: Number;
    releaseDate: String;
    studio: 'Buena Vista' | 'Paramount' | 'Sony' | 'Universal';
    actors: String[];
}
````

## Developing Answers and Running Tests

### Output

Each question is self-contained in `project/questionN.js` and exports a single `solution()` function. You must `return` the answer in this function. 
What you do outside of this function is up to you.

The `solution()` function will be passed the `filmData` object, which the `data/mcu.json` array ***in randomized order***. **If your code depends on the order of the JSON file, you will be wrong.**

Some files include helper functions and other constants you may find useful. It is recommended to not alter those items.

At any point, you can "test" question X by running:

`node run.js X`

## Competition Rules

1. You ***must*** use `.map()`, `.filter()`, `.reduce()`, and/or `.sort()` ***at least once*** in each question
in order for it to be considered "answered correctly".
2. You may export and import helper functions you find useful, or copy and paste.
3. There is no particular shape you need for each answer, however, please make any key/value pairs easily understandable. Practice Common Sense™.
4. If you think part of a question is better solved without using functional programming, that's fine, ***as long as Rule 1 is followed***.
5. I don't care about numbers cast as properly-formatted currency strings.
6. When you would like to submit your answer for each question, have one person raise their hand. Teams will be scored in the order of single-hands raised.
 
## Scoring

Your task is to answer each of the six questions below. Please pair up differently for each question.

Given `n` pairs, scoring for each person is assigned as follows:

* `n` points to each person in the first pair to answer the question correctly
* `n-1` points to each person in the second pair to answer the question correctly
* ... and so on
* `1` point to each person in the last pair to answer the question correctly

## Solutions

Once the training is complete, solutions and answers to all six questions will be posted.

Of course, these are recommended solutions! It's just my interpretation. But the answers are correct (:

You can run the solutions for question X with this command:

`node run.js X 1` (or literally anything as the second argument after X)

## Questions

Please show me your answers to the following six questions.

1. How much has the Marvel Cinematic Universe grossed in the US?
2. What is the average gross per film for each studio? Sort your answer in descending order of US grosses.
3. Which movie was the first Disney-produced (i.e. Buena Vista) film?
4. Has every Avengers movie grossed more than the last? (Note: Please return a boolean)
5. Up to today, what is the average gross per day of each MCU film in descending order?
6. Which actor(s) have appeared in ***more than one*** film? How many films have they been in? Order them in descending order of number of appearances.


