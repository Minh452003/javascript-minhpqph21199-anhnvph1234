const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const question = new Map([
    ['question', 'What is the best'],
    [1, 'c'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    ['true', 'Correct!'],
    [false, 'Try again!'],
]);
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
for (const [key, value] of question) {
    if (typeof key === 'number')
        console.log(`Answer ${key}: ${value}`);
};

const Answer = Number(prompt('Your answer: '));
console.log(Answer);
console.log(question.get(question.get('correct') === Answer));

const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === Answer));
console.log([...question]);