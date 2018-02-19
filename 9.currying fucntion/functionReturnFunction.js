
// a is a closure 
var add = function(a){
	return function(b){
  	return a+b;
  }
}

var addToFive = add(5);

console.log(addToFive(1));
