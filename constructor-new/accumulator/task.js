function Accumulator(startingValue) {

    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Enter an int:", 0);
    };
}

let accumulator = new Accumulator(3);

accumulator.read();
accumulator.read();
alert(accumulator.value);