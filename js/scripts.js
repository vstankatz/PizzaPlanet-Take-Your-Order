function Pizza(size, meats, cheeses, veggies, delivery) {
  this.size = size,
  this.meats = meats,
  this.cheeses = cheeses,
  this.veggies = veggies,
  this.delivery = delivery,
  this.price = 0
}

Pizza.prototype.orderUp = function(size, meats, cheeses, veggies, delivery) {
  if (size === "small"){
    this.price = 7
  } else if (size === "regular") {
    this.price = 12
  } else if (size === "jumbo") {
    this.price = 20
  } else {
    alert("Please Pick a Size.")
  }
  veggies.forEach(function(veggie) {
    this.price += .50
  });
  meats.forEach(function(meat) {
    this.price += 1.50
  });
  cheeses.forEach(function(cheese) {
    this.price += 1
  });
  if (delivery === "delivery") {
    this.price += 5
  }
}

var newPizza = new Pizza ()

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("select#size").val();
    var inputMeats = $("input:checkbox[name=meatType]:checked").val();
    var inputCheeses = $("input:checkbox[name=cheeseType]:checked").val();
    var inputVeggies = $("input:checkbox[name=veggieType]:checked").val();
    var inputDelivery = $("select#orderType").val();

    newPizza.orderUp(inputSize, inputMeats, inputCheeses, inputVeggies, inputDelivery);
  })
})
