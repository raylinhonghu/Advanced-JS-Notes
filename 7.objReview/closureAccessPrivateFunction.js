var Pizza = function(){
	// hidden class
	var crust = 'thin';
  var toppings = 3;

  // public variable
  this.hasBacon = true;

  this.getBacon = function(){
  	return this.hasBacon;
  }

  // access private variable using public method
  this.getCrust = function(){
    return crust;
  }

  // private method
  var getToppings = function(){
  	return toppings;
  }

  // empty obj
  var tmp = {};
  tmp.getToppings = getToppings;
  return tmp;
}

var pizzaA = new Pizza();

console.log(pizzaA.getBacon());
console.log(pizzaA.getCrust());
console.log(pizzaA.getToppings());
