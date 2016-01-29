describe('Pizza', function() {
  it('creates a Pizza object with the correct properties', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    expect(testPizza.pizzaSize).to.equal("medium");
    expect(testPizza.cheese).to.equal("regular");
    expect(testPizza.meatToppings).to.eql([]);
    expect(testPizza.vegToppings).to.eql([]);
  });
});
