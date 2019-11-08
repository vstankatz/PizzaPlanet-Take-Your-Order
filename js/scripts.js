function Pizza(size, meats, cheeses, veggies, delivery) {
  this.size = size,
  this.meats = [],
  this.cheeses = [],
  this.veggies = [],
  this.delivery = delivery,
  this.price = 0
}

Pizza.prototype.orderUp = function(size, meats, cheeses, veggies, delivery) {
  console.log(this.price);
  var meats = this.meats;
  var cheeses = this.cheeses;
  var veggies = this.veggies;
  console.log(newPizza);
  if (size === "small"){
    this.price += 7
  } else if (size === "regular") {
    this.price += 12
  } else if (size === "jumbo") {
    this.price += 20
  } else {
    alert("Please Pick a Size.")
  }
  console.log(this.price);
  this.price += (meats.length * 1.50);
  this.price += (cheeses.length * 1);
  this.price += (veggies.length * .50);
  console.log(cheeses);
  console.log(newPizza);
  console.log(this.price);
    if (delivery === "delivery") {
      this.price += 5;
    } else {
      this.price += 0;
    }
    console.log(this.price);
  return this.price;
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
