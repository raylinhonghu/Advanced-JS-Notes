/* "Closures are nothing but FUNCTIONS WITH PRESERVED DATA" */
/* lexical scoping  */

var passed = 3;

var addTo = function(){
	var inner = 2;
  return inner + passed;
};

console.log(addTo());
console.dir(addTo);
/* var passed = 4; */

console.log(addTo());
console.dir(addTo);
