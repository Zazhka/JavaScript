describe("multiplyNumeric", function () {

   it ("умножаем все числовые свойства на 2 (из ответа)", function () {
       let menu = {
           width: 200,
           height: 300,
           title: "My menu"
       };

       let result = multiplyNumeric(menu);
        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu")
   });

   it ("Проверка что ничего не возвращает", function () {
       assert.isUndefined( multiplyNumeric({}) );
   });

    // мои неправильные тесты
   xit ("Умножает числовые свойства на 2", function () {
      assert.deepEqual(multiplyNumeric({a: 3, b: 4}), {a: 3*2, b: 4*2} );
   });

   xit ("Проверка свойства на числовой формат", function () {
       assert.deepEqual(multiplyNumeric({a: 3, b: "string"}), {a: 3*2, b: "string"});
   });

});
