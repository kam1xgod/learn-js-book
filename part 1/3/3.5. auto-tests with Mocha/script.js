describe("Возводит x в степень n", function() {
  it("5 в степени 1 будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  // Mocha будет запускать только этот блок
  it.only("5 в степени 2 будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}