describe("Calculator", function () {
    let calculator;
    before(function() {
        sinon.stub(window, "prompt")

        prompt.onCall(0).returns("2");
        prompt.onCall(1).returns("3");

        calculator = new Calculator();
        calculator.read();
    });

   it ("When 2 and 3 are entered, the sum is 5", function () {
      assert.equal(calculator.sum(), 5);
   });

   it ("When 2 and 3 are entered, the mul is 6", function () {
       assert.equal(calculator.mul(), 6);
   });

    after(function() {
        prompt.restore();
    });
});