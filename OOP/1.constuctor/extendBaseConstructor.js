/* base constructor */

let Mammal = function(legs){
	this.legs = legs;
};

Mammal.prototype = {
	walk(){
  	return "walking";
  },
  sleep(){
  	return "sleeping";
  }
};

/* bat constructor */
let Bat = function(legs, isVegetarian){
	/* call to get parent property */
	/* Mammal.call(this, legs); */
  this.legs = legs;
  this.isVegetarian = isVegetarian;
};

/* this will wipe down Bat constructor */
Bat.prototype = Object.create(Mammal.prototype);
/* set back bat constructor to Bat */
Bat.prototype.constructor = Bat;

Bat.prototype.fly = function(){
	return "flying";
};

let fruitbBat = new Bat(3,true);
console.dir(fruitbBat);
/*
console.dir(fruitbBat.sleep());
console.dir(fruitbBat.fly()); */
