/* function object */
var Pizza = function(){
	this.crust = 'thin';
  this.toppings = 3;
  this.hasBacon = true;
};

var pizzaA = new Pizza();
var pizzaB = new Pizza();

pizzaA.crust = 'pan';
console.log(pizzaA.crust);

console.log(pizzaA.constructor);
console.log(pizzaA instanceof Pizza);
