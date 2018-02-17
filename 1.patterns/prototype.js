var peopleProto = function(){
	// empty object
};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function(){
	console.log(this.name + ","+ this.age +  ","+ this.city);
};

var person1 = new peopleProto();
// prototype property are shadowed
// if can not find in created instance it will look for the prototype property
person1.name = 'john';
person1.city = 'CA';
person1.age = 23;


var person2 = new peopleProto();
person1.printPerson();
person2.printPerson();

console.log('age' in person1);
console.log('age' in person2);
console.log(person1.hasOwnProperty('name'));
console.log(person2.hasOwnProperty('name'));

// disadvantage1: cannot create everything in one line
// first created an empty obj then add property to it

// disadvantage2: if you have a property as an object,
// it creates multiple objects from this method, SO, very confusing !!
