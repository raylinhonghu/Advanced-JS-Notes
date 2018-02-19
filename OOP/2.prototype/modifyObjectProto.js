let Car = function(color){
	// public var
	this.color = color;

  // own method
  this.getColor = function(){
  	return this.color;
  };

  // proto method
  Car.prototype.getCColor = function(){
  	return this.color;
  }
};

// modify master method
Object.prototype.toString = function(){
	return `color is ${this.color}`;
}

let redCar = new Car('red');

console.log(redCar.getColor());
console.log(redCar.getCColor());
console.log(redCar.toString());
