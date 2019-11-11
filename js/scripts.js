function Orders(delivery) {
  this.delivery = delivery,
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

Orders.prototype.priceTotal = function(delivery, subtotal) {

  if (delivery === "delivery") {
    console.log(delivery);
    this.totalPrice += 5;
  } else {
    this.totalPrice +=0;
  };
  return this.totalPrice;
  console.log(this.totalPrice);
}


function Pizza(size, meats, cheeses, veggies) {
  this.size = size,
  this.meats = meats,
  this.cheeses = cheeses,
  this.veggies = veggies,
  this.price = 0
}

Pizza.prototype.orderUp = function(size, meats, cheeses, veggies) {
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



  return this.price;
}

var orderTime = new Orders();


function displayCurrentOrder(pizzaPiesOrdered) {
  var pizzaList = $("ol#pizzasOrdered");
  var htmlForPizzaInfo = "";
  var priceTextStart = $("div.priceSection");
  var htmlForPriceTextStart = "";
  var priceList = $("ul#priceSubtotal");
  var htmlForPriceInfo = "";
  var priceTextEnd = $("div.continueButton");
  var htmlForPriceTextEnd = "";
  if (0 < pizzaPiesOrdered.pizzaPie.length) {
    htmlForPriceTextStart += "<h4>" + "Subtotal" + "</h4>"

    htmlForPriceTextEnd += "<button id='placeOrder'>" + "Continue" + "</button>"
    priceTextStart.html(htmlForPriceTextStart);

    priceTextEnd.html(htmlForPriceTextEnd);
  };
  pizzaPiesOrdered.pizzaPie.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + "<br>" +"Pizza Size: " + pizza.size + " |" + "Meats: " + pizza.meats.length + " |"+ "<br>" + "Cheeses: " + pizza.cheeses.length + " |" + "Veggies: " + pizza.veggies.length + " |"+ "<br>" + "Pizza Price: $" + pizza.price + "</li>" + "<hr>"

    htmlForPriceInfo += "<li>" + "+" + "  " + pizza.price + "<li>"
  });
  console.log(pizzaPiesOrdered.pizzaPie.length);
  pizzaList.html(htmlForPizzaInfo);
  priceList.html(htmlForPriceInfo);
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
  meatList.html("");
  cheeseList.html("");
  veggieList.html("");
  $(".pizzaDetails").show();
  $("#pizzaSizeDetails").html(seeThisPizza.size);

  for (i = 0; i < seeThisPizza.meats.length; i++) {
    htmlForMeat += "<li>" + seeThisPizza.meats[i] + "</li>"
    meatList.html(htmlForMeat);
  }

  for (i = 0; i < seeThisPizza.cheeses.length; i++) {
    htmlForCheese += "<li>" + seeThisPizza.cheeses[i] + "</li>"
    cheeseList.html(htmlForCheese);
  }

  for (i = 0; i < seeThisPizza.veggies.length; i++) {
    htmlForVeggie += "<li>" + seeThisPizza.veggies[i] + "</li>"
    veggieList.html(htmlForVeggie);
    console.log(seeThisPizza.price);
  }


  console.log(seePizza.price);
  $("#pizzaPriceDetails").html(seeThisPizza.price);


  var deleteButton = $("#deleteButton");
  deleteButton.empty();
  deleteButton.append("<button class='deleteButton' id=" + seeThisPizza.id + ">Delete</button>");
};

function subTotal(pizzaPiesOrdered) {
  var subtotal = 0;
  var subtotalEquals = " = ";
  pizzaPiesOrdered.pizzaPie.forEach(function(pizza) {
    subtotal += pizza.price;
  });
subtotalEquals += subtotal;
$("#subtotal").text(subtotalEquals);
orderTime.totalPrice = subtotal;
console.log(orderTime.pizzaPie);
console.log(subtotal);
console.log(orderTime.totalPrice);

};

function displayAllPizzas(pizzaPiesOrdered, delivery) {
  var totalPizzaList = $("ul#allPizzas");
  var htmlForAllPizzas = "";


  pizzaPiesOrdered.pizzaPie.forEach(function(pizza) {
    htmlForAllPizzas += "<li>" +"Pizza Size: " + pizza.size + " |" + "Meats: " + pizza.meats.join(", ") + " |" + "Cheeses: " + pizza.cheeses.join(", ") + " |" + "Veggies: " + pizza.veggies.join(", ") + " |" + "Pizza Price: $" + pizza.price + "</li>" + "<hr>"
    // console.log(pizza.cheeses.split(""));
    console.log(pizza.cheeses.join(", "));
  });
  totalPizzaList.html(htmlForAllPizzas);
  console.log(delivery);
  if (delivery === "delivery") {
    var liLast = document.createElement("li");
    var deliveryText = document.createTextNode("Delivery Fee | $5")
    liLast.append(deliveryText);
    totalPizzaList.append(liLast);
  };
};

function attachListeners() {
  var enter = document.getElementById("enter");
  var modal1 = document.getElementById("checkout");
  var exit = document.getElementById("modal1");
  var modal2 = document.getElementById("receipt");
  var close = document.getElementById("modal2");
  var confirm = document.getElementById("finishOrder");
  var done = document.getElementById("restartOrder");
  $("ol#pizzasOrdered").on("click", "li", function() {
    seePizza(this.id);

  });

  enter.onclick = function() {
  $(".landing").hide();
  $(".welcomeIn").show();  
  }

  $("#deleteButton").on("click", ".deleteButton", function() {
    orderTime.tossPizza(this.id);
    $(".pizzaDetails").hide();
    displayCurrentOrder(orderTime);
    subTotal(orderTime);
  });

  $(".continueButton").on("click", "#placeOrder", function() {
    modal1.style.display = "inline-block"

  });

  exit.onclick = function() {
    modal1.style.display = "none";
    orderTime.totalPrice = 0;
  }

  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
      orderTime.totalPrice = 0;
    }
  }

  close.onclick = function() {
    modal2.style.display = "none";
    orderTime.totalPrice = 0;
  }

  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
      orderTime.totalPrice = 0;
    }
  }

  confirm.onclick = function() {
    modal2.style.display = "none";
    $(".welcomeIn").hide();
    $("#orderComplete").show();
  }

  done.onclick = function() {
    done.style.display = "none";
    location.reload();
  }
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


    $("input[type=checkbox]").prop("checked", false);

    function empty() {
      meatsPicked = [];
      cheesesPicked = [];
      veggiesPicked = [];
    }


    var newPizza = new Pizza(inputSize, meatsPicked, cheesesPicked, veggiesPicked);
    console.log(cheesesPicked);

    newPizza.orderUp(inputSize, meatsPicked, cheesesPicked, veggiesPicked);
    console.log(veggiesPicked);
    console.log(meatsPicked);

    orderTime.addPizza(newPizza);
    // orderTime.subTotal(newPizza)
    displayCurrentOrder(orderTime);
    subTotal(orderTime);
    // empty();
  });
  $("form#checkout").submit(function(event) {
    event.preventDefault();
    var getSubtotal = subTotal(orderTime);
    var inputDelivery = $("select#orderType").val();
    console.log(inputDelivery);
    orderTime.priceTotal(inputDelivery, getSubtotal);
    var finalPrice = orderTime.totalPrice;
    console.log(finalPrice);

    $("#checkout").hide();
    $("#receipt").show();
    $("#priceTotal").text(finalPrice);
    displayAllPizzas(orderTime, inputDelivery);

  });
});
