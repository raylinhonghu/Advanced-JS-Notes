class Car {
	constructor(color){
  	this.color = color;
  }
}

let descriptor = {
	value:function(){
  	return this.color;
  },
  writable: false,
  configurable: true,
  enumerable: true
};

let readOnly = function(target, key, descriptor){
  descriptor.writable = false;
  return descriptor;
}

// changing overwritting status
descriptor = readOnly(Car.prototype, 'getColor', descriptor) || descriptor;
Object.defineProperty(Car.prototype, 'getColor', descriptor);

const redCar = new Car('red');

// overwrites
redCar.getColor = function(){
	return "blah blah";
}

console.log(redCar.getColor());
