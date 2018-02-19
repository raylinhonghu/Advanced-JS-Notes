/* regular function */
let add = function(n1,n2){
	return n1 + n2;
};

let sum = add(1,2);

/* constructor setting initial value  */
let Car = function(_color){

/*	no public property this.
	  but have inner variable which
	  only can be accessed using these methods */
	this.setColor = function(color){
  	_color = color;
  };

  this.getColor = function(){
  	return _color;
  }
};

let redCar = new Car('red');

console.log(redCar.getColor());
