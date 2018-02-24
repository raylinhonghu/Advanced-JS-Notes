// numbers
function curve(grade){
  return grade += 5;
}

var num = [1,2,3,4,5];
var newNum = num.map(curve);

console.log(newNum);


// string
function simplified(word){
  return word[0];
}

var sentence = ["abc","bcd","cde"];
var abb = sentence.map(simplified);
console.log(abb);
