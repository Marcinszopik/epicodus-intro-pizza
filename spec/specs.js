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
  it('has a method for determining the cost of the Pizza', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    testPizza.addMeat("pepperoni");
    testPizza.addMeat("sausage");
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(13);
    testPizza.cheese = "extra";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(14);
    testPizza.pizzaSize = "large";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(16);
    testPizza.pizzaSize = "extra large";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(18);
    testPizza.pizzaSize = "small";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(12);
  });
});
