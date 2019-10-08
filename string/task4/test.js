describe ("extractCurrencyValue(str)", function() {

    it("Verify that return full string if length less than maxlength", function() {
        assert.equal(extractCurrencyValue("$120"), 120);
    });

});