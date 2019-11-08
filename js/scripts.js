function Pizza(size, delivery) {
  this.size = size,
  this.meats = [],
  this.cheeses = [],
  this.veggies = [],
  this.delivery = delivery,
  this.price = 0
}

Pizza.prototype.orderUp = function(size, delivery) {
  console.log(this.price);
  var veggies = this.veggies;
  var meats = this.meats;
  var cheeses = this.cheeses;
  veggies.forEach(function(veggie) {
    this.price += 1;
    console.log(this.price);
  });
  meats.forEach(function(meat) {
    this.price += 2;
  });
  cheeses.forEach(function(cheese) {
    this.price += 1;
  });
  if (size === "small"){
    this.price += 7
  } else if (size === "regular") {
    this.price += 12
  } else if (size === "jumbo") {
    this.price += 20
  } else {
    alert("Please Pick a Size.")
  }
  if (delivery === "delivery") {
    this.price += 5
  } else {
    return this.price;
    console.log(this.price);

  }
}

var newPizza = new Pizza ()

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("select#size").val();
    var inputMeats = $("input:checkbox[name=meatType]:checked").each(function() {
      var inputMeat = $(this).val();
      newPizza.meats.push(inputMeat);
    });
    var inputCheeses = $("input:checkbox[name=cheeseType]:checked").each(function() {
      var inputCheese = $(this).val();
      newPizza.cheeses.push(inputCheese);
    });
    var inputVeggies = $("input:checkbox[name=veggieType]:checked").each(function() {
      var inputVeggie = $(this).val();
      newPizza.veggies.push(inputVeggie);
    });
    var inputDelivery = $("select#orderType").val();

    newPizza.orderUp(inputSize, inputMeats, inputCheeses, inputVeggies, inputDelivery);
  })
})
