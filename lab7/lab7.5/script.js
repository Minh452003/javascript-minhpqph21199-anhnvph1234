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
        return this;
    };
    get speedUS() {
        return this.speed / 1.6;
    };
    set speedUS(speed) {
        this.speed = speed * 1.6;
    };
};
class EVCL extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    };


    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        return this;
    };
    accelerate = function () {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    };
};

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake().chargeBattery().accelerate();

console.log(rivian.speedUS);