// ================================
//     Business Logic
// ================================

// Pizza Constructor, represents a single pizza
function Pizza(pizzaSize, cheese, meatToppings, vegToppings) {
  this.pizzaSize = pizzaSize;
  this.cheese = cheese;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
  // this.cost (created in the refreshCost method)
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
Order.prototype.addPizza = function(pizza) {
  pizza.refreshCost();
  this.pizzas.push(pizza);
}
Order.prototype.removePizza = function(pizzaNumber) {
  this.pizzas.splice(pizzaNumber-1,1);
}
Order.prototype.determineTotalCost = function() {
  var totalCost = 0;
  this.pizzas.forEach(function(pizza) {
    totalCost += pizza.cost;
  });
  this.totalCost = totalCost;
}


// ================================
//     User Interface Logic
// ================================



$(document).ready(function() {
  var customerOrder = new Order();

  // event handler for begin ordering button
  $('.launch-order button').click(function() {
    alert("button works");
  });
  // event handler for customer information submit
  $('.order-information-input form').submit(function(event) {
    event.preventDefault();
    alert("button works");
  });
  // event handler for add pizza
  $('.order-pizza-input form').submit(function(event) {
    event.preventDefault();
    alert("button works");
  });
  // event handler for add another pizza
  $('#add-another-pizza').click(function(event) {
    event.preventDefault();
    alert("button works");
  });
  // event handler for checkout order
  $('#checkout-order').click(function(event) {
    event.preventDefault();
    alert("button works");
  });
  // event handler for new order/reset site
  // $('').submit(function(event) {
  //   event.preventDefault();
  //   alert("button works");
  // });



});
