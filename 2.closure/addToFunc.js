/* "Closures are nothing but FUNCTIONS WITH PRESERVED DATA" */
var addTo = function(passed){

  var add = function(inner){
  	return passed + inner;
  };

  return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

 /* closure is 3 */
console.dir(addThree);
/*  closure is 4 */
console.dir(addFour);

console.log(addThree(1));
console.log(addFour(1));
