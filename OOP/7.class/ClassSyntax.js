class Car {
	constructor(color) {
  	this.color = color;
  }
  /* no comma */
  drive() {
  	console.log("dring");
  }
}

let redCar = new Car('red');
console.dir(Car); // Car + Object
console.dir(typeof(Car)); // function

/* similarly */
let Car = (function(){
	let _car = function(color){
  	this.color = color;
   }
   _car.prototype.drive = function(){
    	console.log('driving');
   }
    return _car;
})();
