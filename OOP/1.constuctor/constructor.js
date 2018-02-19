/* regular function */
let add = function(n1,n2){
	return n1 + n2;
};

let sum = add(1,2);

/* constructor setting initial value  */
let Car = function(color){
	if(!new.target) throw 'Car() must be called with new';
	this.color = color;
};

let redCar = new Car('red');
let yellowCar = Car('yellow');
