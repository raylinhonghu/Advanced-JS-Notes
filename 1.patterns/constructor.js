var peopleConstructor = function(name,age,state){

  // this name is a property of function peopleConstructor
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function(){
  	console.log(this.name + "," + this.age + "," +this.state);
  };

};

// we are not return an obj so we need constructor way: new
// creating object from peopleConstructor
var person1 = new peopleConstructor("josn",22,"CA");
var person2 = new peopleConstructor("mary",21,"22");

person1.printPerson();
person2.printPerson();

// the function are created many times, its redundant 
