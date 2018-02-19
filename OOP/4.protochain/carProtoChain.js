const Car = function(){};

Car.prototype = {
	print(){
  	return " I am a Car";
  }
};

const ToyCar = function(){};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function(){
	return " I am a toy Car";
}

const toyTransformer = function(){};

toyTransformer.prototype = Object.create(ToyCar.prototype);

/* toyTransformer.prototype.print = function(){
  return " I am a toy transformer";
} */

const toyota = new Car();
const legoCar = new ToyCar();
const optimusprime = new toyTransformer();

console.dir(toyota.print());
console.dir(legoCar.print());
console.dir(optimusprime.print());

// every new child object points to __proto__ of its parent
