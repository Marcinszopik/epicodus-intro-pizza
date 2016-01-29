// ================================
//     Business Logic
// ================================

// Pizza Constructor, represents a single pizza
function Pizza(pizzaSize, cheese) {
  this.pizzaSize = pizzaSize;
  this.cheese = cheese;
  this.meatToppings = [];
  this.vegToppings = [];
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

var nextDiv = function(toHide, toShow) {
  $(toHide).hide();
  $(toShow).show();
}
var createCustomerOrder = function() {
  var customerName = $('#customer-name').val();
  var customerAddress = $('#customer-street').val() + ', ' + $('#customer-city').val() + ', ' + $('#customer-zip-code').val();
  var customerPhone = $('#customer-phone').val();
  var customerCashCredit = $('input[name="cash-credit"]:checked').val();

  return new Order(customerName, customerAddress, customerPhone, customerCashCredit);
}
var createPizza = function() {
  var pizzaSize = $('input[name="pie-size"]:checked').val();
  var cheese = $('input[name="cheese-options"]:checked').val();
  var newPizza = new Pizza(pizzaSize, cheese);
  $('input[name="meat-toppings"]:checked').each(function() {
    newPizza.addMeat($(this).val());
  });
  var vegToppings = [];
  $('input[name="veg-toppings"]:checked').each(function() {
    newPizza.addVeg($(this).val());
  });
  resetPizzaForm();
  return newPizza;
}
var resetPizzaForm = function() {
  $('input[name="pie-size"]:checked').attr("checked", false);
  $('input[value="medium"]').prop("checked", true);
  $('input[name="cheese-options"]:checked').attr("checked", false);
  $('input[value="regular"]').prop("checked", true);
  $('input[name="meat-toppings"]:checked').attr("checked", false);
  $('input[name="veg-toppings"]:checked').attr("checked", false);
}
var populatePizzaList = function(pizza) {
  $('.pizza-list').append('<div class="pizza">' +
                            '<h4><span class="pizza-list-size">'+pizza.pizzaSize+'</span></h4>' +
                            '<p>Cheese: <span class="pizza-list-cheese">'+pizza.cheese+'</span></p>' +
                            '<p>Meat toppings: </p>' +
                            '<ul class="pizza-list-meat-toppings"></ul>' +
                            '<p>Veggie toppings: </p>' +
                            '<ul class="pizza-list-veg-toppings"></ul>' +
                          '</div>');
  pizza.meatToppings.forEach(function(meatTopping) {
    $('.pizza-list .pizza-list-meat-toppings').last().append('<li>'+meatTopping+'</li>');
  });
  pizza.vegToppings.forEach(function(vegTopping) {
    $('.pizza-list .pizza-list-veg-toppings').last().append('<li>'+vegTopping+'</li>');
  });
}

$(document).ready(function() {
  var customerOrder = new Order();

  // event handler for begin ordering button
  $('.launch-order button').click(function() {
    nextDiv('.launch-order', '.order-information-input');
  });

  // event handler for customer information submit
  $('.order-information-input form').submit(function(event) {
    event.preventDefault();
    customerOrder = createCustomerOrder();
    nextDiv('.order-information-input', '.order-pizza-input');
  });

  // event handler for add pizza
  $('.order-pizza-input form').submit(function(event) {
    event.preventDefault();
    var thisPizza = createPizza();
    customerOrder.addPizza(thisPizza);
    populatePizzaList(thisPizza);
    nextDiv('.order-pizza-input', '.order-summary');
  });

  // event handler for add another pizza
  $('#add-another-pizza').click(function(event) {
    event.preventDefault();
    nextDiv('.order-summary', '.order-pizza-input');
  });
  // event handler for checkout order
  $('#checkout-order').click(function(event) {
    event.preventDefault();
    nextDiv('.order-summary', '.checked-out');
  });
  // event handler for new order/reset site
  $('#new-order').click(function(event) {
    event.preventDefault();
    nextDiv('.checked-out', '.launch-order');
  });

});
