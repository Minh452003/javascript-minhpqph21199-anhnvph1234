const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('steven');
greet('Hello')('Jonas');

const greeArr = greeting => name => console.log(`${greeting} ${name}`);
greeArr('HI')('Jonas');