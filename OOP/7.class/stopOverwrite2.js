let readOnly = function(target, key, descriptor){
  descriptor.writable = false;
  return descriptor;
}

class Car {
	constructor(color){
  	this.color = color;
  }

  @readOnly
  getColor(){
    return this.color;
  }
}

const redCar = new Car('red');

// overwrites
redCar.getColor = function(){
	return "blah blah";
}

console.log(redCar.getColor());
