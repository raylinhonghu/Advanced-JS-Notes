function isEven (num){
  return num % 2 == 0;
}
var num2 = [1,3,5,7,9];
var even = num2.every(isEven);
var someEven = num2.some(isEven);

if(even){
  console.log("even!");
}else{
  console.log("not even!");
}

if(someEven){
  console.log("Some even!");
}else{
  console.log(" all odd!");
}
