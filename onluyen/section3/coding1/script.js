const calcAvergae = (a, b, c) => (a + b + c) / 3;
console.log(calcAvergae(3, 4, 5));

let scoreDol = calcAvergae(44, 23, 71);
let scoreKoalas = calcAvergae(65, 54, 49);
console.log(scoreDol, scoreKoalas);

const checkWinner = function (avgDol, avgKoalas) {
    if (avgDol >= 2 * avgKoalas) {
        console.log(`Dolphine win (${avgDol}) vs. ${avgKoalas} `);
    } else if (avgKoalas > +2 * avgDol) {
        console.log(`Koalas win (${avgKoalas}) vs. ${avgDol} `);
    } else {
        console.log('No team win...');
    }
}
checkWinner(scoreDol, scoreKoalas);
checkWinner(576, 111);
// 
scoreDol = calcAvergae(85, 54, 41);
scoreKoalas = calcAvergae(23, 34, 27);
console.log(scoreDol, scoreKoalas);
checkWinner(scoreDol, scoreKoalas);
