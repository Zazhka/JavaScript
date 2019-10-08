describe ("truncate(str, maxlength)", function() {

    it("Verify that return full string if length less than maxlength", function() {
        assert.equal(truncate("Test string", 20), "Test string");
    });

    it("Verify that truncate string and add …", function() {
        assert.equal(truncate("Test string", 10), "Test stri…");
    });

});