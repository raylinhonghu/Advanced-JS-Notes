/* for array in javascript, searched item in the array
  will be changed to strings, because in js object, the
  property name must be strings.*/

var numbers = [];
var numbers = [1,2,3,4];
print(numbers.length);

// array constructor
var numbers = new Array(); // length 0
var numbers = new Array(1,2,3,4); // length 5
var numbers = new Array(10); // length 10
print(isArray(numbers));
