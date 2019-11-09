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

Orders.prototype.tossPizza = function(id) {
  for(var i = 0; i < this.pizzaPie.length; i++) {
    if (this.pizzaPie[i]) {
      if (this.pizzaPie[i].id == id) {
        delete this.pizzaPie[i];
      }
    }
  };
  return false;
}



function Pizza(size, meats, cheeses, veggies, delivery) {
  this.size = size,
  this.meats = meats,
  this.cheeses = cheeses,
  this.veggies = veggies,
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

var orderTime = new Orders();

function displayCurrentOrder(pizzaPiesOrdered) {
  var pizzaList = $("ol#pizzasOrdered");
  var htmlForPizzaInfo = "";
  pizzaPiesOrdered.pizzaPie.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " |" + "Meats: " + pizza.meats.length + " |" + "Cheeses: " + pizza.cheeses.length + " |" + "Veggies: " + pizza.cheeses.length + " |" + "$" + pizza.price + "</li>"
  });
  pizzaList.html(htmlForPizzaInfo)
};

function seePizza(pizzaId) {
  console.log("HERE!")
  var seeThisPizza = orderTime.pickPizza(pizzaId);
  var meatList = $("ul#meatDetails");
  var htmlForMeat = "";
  var cheeseList = $("ul#cheeseDetails");
  var htmlForCheese = "";
  var veggieList = $("ul#veggieDetails");
  var htmlForVeggie = "";
  $(".pizzaDetails").show();
  $("#pizzaSizeDetails").html(seeThisPizza.size);
console.log(pizzaId.length);
  console.log(orderTime.pizzaPie.length);
  console.log(seeThisPizza.length);

for (i = 0; i < seeThisPizza.meats.length; i++) {
      console.log(seeThisPizza.meats.length);
      console.log(seeThisPizza.meats[i]);
        htmlForMeat += "<li>" + seeThisPizza.meats[i] + "</li>"
      meatList.html(htmlForMeat);
}

for (i = 0; i < seeThisPizza.cheeses.length; i++) {
      console.log(seeThisPizza.cheeses.length);
      console.log(seeThisPizza.cheeses[i]);
        htmlForCheese += "<li>" + seeThisPizza.cheeses[i] + "</li>"
      cheeseList.html(htmlForCheese);
}

for (i = 0; i < seeThisPizza.veggies.length; i++) {
      console.log(seeThisPizza.veggies.length);
      console.log(seeThisPizza.veggies[i]);
        htmlForVeggie += "<li>" + seeThisPizza.veggies[i] + "</li>"
      veggieList.html(htmlForVeggie);
}



  $("#pizzaPirceDetails").html(seeThisPizza.price);
}

function attachListeners() {
  $("ol#pizzasOrdered").on("click", "li", function() {
    seePizza(this.id);
    // removeEmpty(this.id);
  });
  $("#deleteButton").on("click", ".deleteButton", function() {
    orderTime.tossPizza(this.id);
    $(".pizzaDetails").hide();
    displayCurrentOrder(orderTime);
  });
};

$(document).ready(function() {
  attachListeners();
  $("form#order").submit(function(event) {
    event.preventDefault();
    var meatsPicked = [];
    var cheesesPicked = [];
    var veggiesPicked = [];
    var inputSize = $("select#size").val();
    var inputMeats = $("input:checkbox[name=meatType]:checked").each(function() {
      var inputMeat = $(this).val();
      meatsPicked.push(inputMeat);
    });
    var inputCheeses = $("input:checkbox[name=cheeseType]:checked").each(function() {
      var inputCheese = $(this).val();
      cheesesPicked.push(inputCheese);
    });
    var inputVeggies = $("input:checkbox[name=veggieType]:checked").each(function() {
      var inputVeggie = $(this).val();
      veggiesPicked.push(inputVeggie);
    });
    var inputDelivery = $("select#orderType").val();

    $("input[type=checkbox]").prop("checked", false);

    var sizeText = inputSize.value;
    var orderType = inputDelivery.value;

    var newPizza = new Pizza(inputSize, meatsPicked, cheesesPicked, veggiesPicked, inputDelivery);
    console.log(cheesesPicked);

    newPizza.orderUp(inputSize, meatsPicked, cheesesPicked, veggiesPicked, inputDelivery);
    console.log(veggiesPicked);
    console.log(meatsPicked);

    orderTime.addPizza(newPizza);
    displayCurrentOrder(orderTime);

  })
})
