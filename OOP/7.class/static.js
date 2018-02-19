class Car {
	constructor(color, price){
  	Object.assign(this, {color, price});
  }

	static comparePrice(car1, car2){
  	/* console.dir(this) */;
    return Math.abs(car1.price - car2.price);
  }

  getColor(){
  	return this.color;
  }
}

const redCar = new Car('red',100);
const blueCar = new Car('blue',102);

/* 1. static called on class itself
   2. static method does not go to the prototype
   3. the method remains in class itself */

console.log(Car.comparePrice(redCar,blueCar));
