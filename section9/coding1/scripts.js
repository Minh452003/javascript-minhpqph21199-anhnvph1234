// const weightHong = 68;
// const heightHong = 1.69;
// const weightNa = 70;
// const heightNa = 1.89;

// const BMIhong = (weightHong / heightHong) ** 2;
// const BMIna = (weightNa / heightNa) ** 2;
// console.log("BMI của Hồng: " + BMIhong, "BMI của Na: ");

// //
// const age = 20;
// if (age > 18) {
//     console.log(`Bạn đã ${age} nên đã đủ tuổi vào bar`);
// } else {
//     console.log(`Bạn chưa đủ tuổi`);
// }

// // Ép kiểu
// const year = 1990;
// console.log(typeof year);
// const myName = "Hồng Hoa";
// console.log(typeof myName);
// console.log("23" - "10" - 9);

// const myAge = "40";
// console.log(typeof myAge);
// console.log(typeof Number(myAge));

// //
// function myInfo(birthYear) {
//     return 2023 - birthYear;
// }
// const myCurrenAge = myInfo(1990);
// console.log(myCurrenAge);


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');