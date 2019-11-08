function Pizza(size, meats, cheeses, veggies, delivery) {
  this.size = size,
  this.meats = meats,
  this.cheeses = cheeses,
  this.veggies = veggies,
  this.delivery = delivery,
  this.price = 0
}

Pizza.prototype.orderUp(size, meats, cheeses, veggies, delivery) {
  if (size === small){
    this.price = 7
  } else if (size === regular) {
    this.price = 12
  } else if (size === jumbo) {
    this.price = 20
  } else {
    alert("Please Pick a Size.")
  }
  veggies.forEach(veggie) {
    this.price += .50
  }
  meats.forEach(meat) {
    this.price += 1.50
  }
  cheeses.forEach(cheese) {
    this.price += 1
  }
  if (delivery === true) {
    this.price += 5
  }
}

(document).ready(function() {
  ("form#order").submit(function(event) {
    event.preventDefault();
    
  })
})
