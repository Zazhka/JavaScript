let calculator = {

    read() {
        this.a = +prompt("a?", "");
        this.b = +prompt("b?", "");
    },

    sum() {
        sum = this.a + this.b;
        return sum;
    },

    mul() {
        mul = this.a * this.b;
        return mul;
    }

};

calculator.read();

alert(calculator.sum());
alert(calculator.mul());