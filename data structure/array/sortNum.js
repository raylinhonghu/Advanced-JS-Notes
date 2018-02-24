function compare(num1, num2){
  // negtive value goes to the begining of array
  return num1 - num2;
}

var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums);
