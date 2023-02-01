const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739,
};
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// flightNum=flight;
const flightNum = flight;
const passenger = jonas;
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000);
}
newPassport(jonas);
checkIn(flight, jonas);