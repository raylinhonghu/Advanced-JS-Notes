// for assigning the value in an array to another in javascript
// it is passed by reference
// if the original copy gets changed
// the copied version will also change


//shallow copy
var array = [];
for (var i = 0; i < 3; i ++){
  array[i] = i + 1;
}
var array2 = array;

console.log(array2);
array[0] = 88;
console.log(array2);


// deep copy
var array = [];
for (var i = 0; i < 3; i ++){
  array[i] = i + 1;
}

function copy(arr1, arr2){
  for(var i = 0; i < arr1.length; i++){
    arr2[i] = arr1[i];
  }
}

var array2 = [];
copy(array1, array2);

console.log(array2);
array[0] = 88;
console.log(array2);
