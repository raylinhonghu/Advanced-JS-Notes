// Factory pattern
var peopleFactory = function(name,age,state){

	var temp = {};
  /* var temp = new Object; */

	temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function(){
  	console.log(this.name + "," + this.age +"," + this.state);
  };

  return temp;
};

var person1 = peopleFactory('john',23,'CA');
var person2 = peopleFactory('Mary',21,'NY');

person1.printPerson();
person2.printPerson();
