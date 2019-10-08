function Calculator() {

    this.read = function () {
        this.a = +prompt("Enter first int", "");
        this.b = +prompt("Enter second int", "");
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    }
}

let calculator = new Calculator();

calculator.read();
alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());