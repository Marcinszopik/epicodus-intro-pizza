function Pizza(pizzaSize, cheese, meatToppings, vegToppings) {
  this.pizzaSize = pizzaSize;
  this.cheese = cheese;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
}
Pizza.prototype.addMeat = function(meat) {
  this.meatToppings.push(meat);
}
Pizza.prototype.addVeg = function(veggie) {
  this.vegToppings.push(veggie);
}
