'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bwm = new Car('BWM', 120);
const mercedes = new Car('Mescedes', 95);

bwm.accelerate();
bwm.accelerate();
bwm.brake();
bwm.accelerate();

/*-----------CODING 2---------------------- */

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };
    accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };
    get speedUS() {
        return this.speed / 1.6;
    };
    set speedUS(speed) {
        this.speed = speed * 1.6;
    };
};
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

/*-----------CODING 3---------------------- */

const CarEl = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
CarEl.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

CarEl.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(CarEl.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
