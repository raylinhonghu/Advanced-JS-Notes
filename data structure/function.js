// with return value
function factorial(number){
  var product = 1;
  for (var i = number; i >= 1; i --){
    product *= i;
  }
  return product;
}


function curve(arr, amount){
  for(var i=0; i < arr.length; i ++){
    arr[i] += amount
  }
}
var grades = [1,2,3,4];
curve(grades,1);
console.log(grades);


// in javascript function, parameters are passed by value,
// but in javascript it has objects that passed by reference like an array.
