var obj = {num:2};
/* an object */
var obj2 = {num:5};

/* a function with args */
var addToThis = function(a,b,c){

	return this.num + a + b + c;
};

/* functionName.call(obj, functionArg) */

/* attach the function to this object and runs temporarily */

/* this function was called for this object,
the property of the object was accessed
using this.num */

console.log(addToThis.call(obj,3,2,1));
console.log(addToThis.call(obj2,3,2,1));


var arr = [1,2,3];

console.log(addToThis.apply(obj2,arr));

/* only bind object itself */
var bound = addToThis.bind(obj2);
console.dir(bound);

console.log(bound(1,2,3));
