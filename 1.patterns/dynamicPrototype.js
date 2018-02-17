var peopleDynamicProto = function(name, age, state){

  this.age = age;
  this.name = name;
  this.state = state;

  // if can find this function,
  // we create this function in prototype space
  if(typeof this.printPerson !== 'function'){
  	peopleDynamicProto.prototype.printPerson = function(){
      console.log(this.name + ","+ this.age +  ","+ this.city);
    };
  }
};



var person1 = new peopleDynamicProto();
person1.name = 'john';
person1.city = 'CA';
person1.age = 23;

console.log('age' in person1);
console.log(person1.hasOwnProperty('name'));
console.log(person1.hasOwnProperty('printPerson'));
