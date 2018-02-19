// extend constructor
const Car = function(color){
	this.color = color;
};

Car.prototype = {
	getColor(){
  	return this.color;
  }
};

const ToyCar = function(){

}

ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();
console.dir(legoCar);
console.dir(legoCar instanceof ToyCar);
console.dir(legoCar instanceof Car);
console.dir(legoCar instanceof Object);
console.dir(ToyCar.prototype.isPrototypeOf(legoCar));
console.dir(Car.prototype.isPrototypeOf(legoCar));
console.dir(Object.prototype.isPrototypeOf(legoCar));
