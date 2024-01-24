const discriminantSearch = require("./disc.js");

class Equation {

    rootSearch() {
        const rootArray = [];
        if (this.b % 2 === 0) {
            if (this.disc > 0) {
                const x1 = (-(this.b / 2) + Math.sqrt(this.disc)) / this.a;
                const x2 = (-(this.b / 2) - Math.sqrt(this.disc)) / this.a;
                rootArray[0] = x1;
                rootArray[1] = x2;
                return rootArray;
            } else if (this.disc === 0) {
                const x1 = (-this.b / 2) / this.a;
                rootArray[0] = x1;
                return rootArray;
            } else {
                return "Нет корней";
            }
        } else {
            if (this.disc > 0) {
                const x1 = (-this.b + Math.sqrt(this.disc)) / (2 * this.a);
                const x2 = (-this.b - Math.sqrt(this.disc)) / (2 * this.a);
                rootArray[0] = x1;
                rootArray[1] = x2;
                return rootArray;
            } else if (this.disc === 0) {
                const x1 = -this.b / (2 * this.a);
                rootArray[0] = x1;
                return rootArray;
            } else {
                return "Нет корней";
            }
        }

    }

    getDisc() {
        return this.disc;
    };

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.disc = discriminantSearch(this.a, this.b, this.c);
    }
}

module.exports = Equation;