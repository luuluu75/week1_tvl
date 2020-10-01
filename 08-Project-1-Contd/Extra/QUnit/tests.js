QUnit.module("greet", function () {
  QUnit.test("greet an Australian person", function (assert) {
    assert.equal(greet(), "g'day");
  });
  QUnit.test("greet a Star Wars fan", function (assert) {
    assert.equal(greet("star-wars"), "hello there");
  });
});
