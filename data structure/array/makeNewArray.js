var cisDept = ['sisi','ww','xx']
var dmpDept = ['david','ray', 'rick'];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmp.concat(cisDept);


console.log(itDiv.splice(2,3))
// 20:46:11.771 VM1212:1 (3) ["xx", "david", "ray"]
20:46:23.164 console.log(itDiv)
// 20:46:23.163 VM1248:1 (3) ["sisi", "ww", "rick"]


// .push(num)
// .pop()

// .unshift(x,y,...)
// .shift ()

// splice(index, num, substitute)

// .reverse()
// .sort()

var nums = [3,4,5];
var num2 = [0];
nums.unshift(1,2);
console.log(nums);
