describe ("checkSpam(str)", function() {

    it("Verify that return true if string contains viagra", function() {
        assert.isTrue(checkSpam("Test viagra string"));
    });

    it("Verify that return true if string contains xxx", function() {
        assert.isTrue(checkSpam("Test viagra string"));
    });

    it("Verify that return false if string don't contain viagra", function() {
        assert.isFalse(checkSpam("Test string"));
    });

    it("Verify that doesn't depend on different ", function() {
        assert.isTrue(checkSpam("Test ViAgRa string"));
    });   

});