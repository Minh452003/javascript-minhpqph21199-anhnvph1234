// const scoreDol = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDol, scoreKoalas);

// if (scoreDol > scoreKoalas) {
//     console.log('Dolphine win the trophy');
// } else if (scoreKoalas > scoreDol) {
//     console.log('Koalas win the trophy');
// } else if (scoreDol == scoreKoalas) {
//     console.log('Both win the trophy');
// }

// BONUS 1

const scoreDol = (97 + 100 + 101) / 3;
const scoreKoalas = (95 + 99 + 104) / 3;
console.log(scoreDol, scoreKoalas);

if (scoreDol > scoreKoalas && scoreDol >= 100) {
    console.log('Dolphine win the trophy');
} else if (scoreKoalas > scoreDol && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDol == scoreKoalas && scoreDol >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}