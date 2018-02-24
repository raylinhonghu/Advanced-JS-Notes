function even(num){
  if(num%2 == 0){
    return num;
  }
}
function odd(num){
  if(num%2 != 0){
    return num;
  }
}
var num = []

for(var i = 1; i <= 10; i++){
  num[i] = i;
}

var e = num.filter(even);
var o = num.filter(odd);
console.log(o);
console.log(e);
