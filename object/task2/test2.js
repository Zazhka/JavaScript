describe("isEmpty", function () {

    it ("Возвращает true на пустой объект", function () {
       assert.isTrue(isEmpty({}));
    });

    it ("Возвращает false на непустой объект", function () {
        assert.isFalse(isEmpty({name: "John"}));
    })
});