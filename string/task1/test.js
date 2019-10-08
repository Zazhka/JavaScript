describe ("ucFirst(str)", function() {

    it("Verify that first char is set to upper case", function() {
        assert.equal(ucFirst("вася"), "Вася");
    });

    it("Verify that first char in upper case stays in upper case", function() {
        assert.equal(ucFirst("Петя"), "Петя");
    });

    it("Verify that can handle empty string", function() {
        assert.equal(ucFirst(""), "");
    });

});