function Orders() {
  this.pizzaPie = [],
  this.totalPrice = 0,
  this.currentNumber = 0
}

Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.takeANumber();
  this.pizzaPie.push(pizza);
}

Orders.prototype.takeANumber = function() {
  this.currentNumber +=1;
  return this.currentNumber;
}

Orders.prototype.pickPizza = function(id) {
  for(var i = 0; i < this.pizzaPie.length; i++) {
    if (this.pizzaPie[i]) {
      if (this.pizzaPie[i].id == id) {
        return this.pizzaPie[i];
      }
    }
  };
  return false;
}

// Orders.prototype.tossPizza = function(id) {
//   for(var i = 0; i < this.pizzaPie.length; i++) {
//     if (this.pizzaPie[i]) {
//       if (this.pizzaPie[i].id == id) {
//         delete this.pizzaPie[i];
//       }
//     }
//   };
//   return false;
// }



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
  console.log(Pizza);
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

  console.log(this.price);
    if (delivery === "delivery") {
      this.price += 5;
    } else {
      this.price += 0;
    }
    console.log(this.price);
  return this.price;
}

function displayCurrentOrder(pizzaPiesOrdered) {
  var pizzaList = $("ul#pizzasOrdered");
  var pizzaSize = this.size.value;
  var htmlForPizzaInfo = "";
  pizzaPiesOrdered.pizzaPie.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizzaSize + " |" + "Meats: " + pizza.meats.length + " |" + "Cheeses: " + pizza.cheeses.length + " |" + "Veggies: " + pizza.cheeses.length + " |" + "$" + pizza.price + "</li>"
  });
  pizzaList.html(htmlForPizzaInfo)
};

var orderTime = new Orders();
// var newPizza =  Pizza();



$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var meatsPickedArray = [];
    var cheesesPickedArray = [];
    var veggiesPickedArray = [];
    var inputSize = $("select#size").val();
    var inputMeats = $("input:checkbox[name=meatType]:checked").each(function() {
      var inputMeat = $(this).val();
      meatsPickedArray.push(inputMeat);
    });
    var inputCheeses = $("input:checkbox[name=cheeseType]:checked").each(function() {
      var inputCheese = $(this).val();
      cheesesPickedArray.push(inputCheese);
    });
    var inputVeggies = $("input:checkbox[name=veggieType]:checked").each(function() {
      var inputVeggie = $(this).val();
      veggiesPickedArray.push(inputVeggie);
    });
    var inputDelivery = $("select#orderType").val();

    $("input[type=checkbox]").prop("checked", false);

    // var sizeText = inputSize.value;
    var orderType = inputDelivery.value;
    var meatsPicked = meatsPickedArray.toString();
    console.log(meatsPicked);
    var cheesesPicked = cheesesPickedArray.toString();
    var veggiesPicked = veggiesPickedArray.toString();

    var newPizza = new Pizza(inputSize, meatsPicked, cheesesPicked, veggiesPicked, inputDelivery);

    newPizza.orderUp(inputSize, meatsPicked, cheesesPicked, veggiesPicked, inputDelivery);

    console.log(veggiesPicked);
    orderTime.addPizza(newPizza);
    displayCurrentOrder(orderTime);

  })
})
