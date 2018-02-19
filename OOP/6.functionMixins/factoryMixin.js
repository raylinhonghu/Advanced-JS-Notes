let Car = function(color){
	let moving = false;

	return Object.assign({},{
  	color: color,
    drive(){
    	moving = true;
      return this;
    },
    isMoving(){
    	return moving;
    }
  });
};

let redCar = Car('red');
console.log(redCar.drive().isMoving());
