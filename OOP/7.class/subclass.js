class Mammal {
	constructor(_legs,_name="john doe"){
  	this.legs = _legs;
    this.name = _name;
    this.warmBlooded = true;
  }
  walk(){
 	 return `${this.name} is walking`;
  }
}

class Bat extends Mammal {
	constructor(_legs,_name, _eatsMeat){
  	super(_legs,_name);
    this.eatsMeat = _eatsMeat;
  }
  fly(){
  	return `${this.name} is flying`;
  }
  /* overwrite */
  walk(){
  	let holding = this.eatsMeat ? 'bug' : 'carrot';
    return `${super.walk()} with a ${holding}`;
  }
}

let fruitBat = new Bat(4,'peter',true);
console.log(fruitBat.walk());
