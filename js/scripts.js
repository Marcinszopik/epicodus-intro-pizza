// ================================
//     Business Logic
// ================================

// Pizza Constructor, represents a single pizza
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
Pizza.prototype.refreshCost = function() {
  var cost = 0;
  if (this.pizzaSize === "medium") {
    cost = 9;
  } else if (this.pizzaSize === "small") {
    cost = 7;
  } else if (this.pizzaSize === "large") {
    cost = 11;
  } else if (this.pizzaSize === "extra large") {
    cost = 13;
  }
  this.meatToppings.forEach(function() {
    cost += 1.25;
  });
  this.vegToppings.forEach(function() {
    cost += 0.75;
  });
  if (this.cheese === "extra") {
    cost += 1;
  }
  this.cost = cost;
}

// Order Constructor, represents a customer order containing multiple pizzas
function Order(customerName, customerAddress, customerPhone, customerCashCredit) {
  this.customerName = customerName;
  this.customerAddress = customerAddress;
  this.customerPhone = customerPhone;
  this.customerCashCredit = customerCashCredit;
  this.pizzas = [];
}



// ================================
//     User Interface Logic
// ================================
