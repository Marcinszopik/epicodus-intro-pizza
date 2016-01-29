describe('Pizza', function() {
  it('creates a Pizza object with the correct properties', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    expect(testPizza.pizzaSize).to.equal("medium");
    expect(testPizza.cheese).to.equal("regular");
    expect(testPizza.meatToppings).to.eql([]);
    expect(testPizza.vegToppings).to.eql([]);
  });
  it('has a method for adding a meat topping', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addMeat("pepperoni");
    testPizza.addMeat("sausage");
    expect(testPizza.meatToppings[0]).to.equal("pepperoni");
    expect(testPizza.meatToppings[1]).to.equal("sausage");
  });
  it('has a method for adding a veggie topping', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    expect(testPizza.vegToppings[0]).to.equal("green peppers");
    expect(testPizza.vegToppings[1]).to.equal("onions");
  });
});
