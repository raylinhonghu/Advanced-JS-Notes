/* Object.setPrototypeOf(destinationObj,sourceObj) */
/* Object literal not constructor */
/* we want to inherit object from object */

/* __proto__ is the creator of this object */

let toyota = {
	drive(){
  	return 'driving toyota';
  }
};

let camry = {
	wifi(){
  	return 'using wifi';
  }
};

Object.setPrototypeOf(camry, toyota);

/* camry.__proto__ = toyota; not suggested */

console.dir(camry);
