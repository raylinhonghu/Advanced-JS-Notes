var x = new Object();
var Pizza = {
	crust:'thin',
  toppings: 3,
  hasBacon: true,
  howManyToppings: function(){
  	return this.toppings;
  }

};

Pizza.price = '12$';
delete(Pizza.crust);
console.log(Pizza);
