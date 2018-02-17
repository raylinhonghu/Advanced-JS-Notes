var myArr = [{
	num: 5,
  str: 'apple'
},
{
	num: 7,
  str: 'cabbage'
},
{
	num: 1,
  str: 'banana'
}];

myArr.sort(function(a,b){
	if(a.num < b.num){
  	return -1;
  }else if (a.num > b.num){
  	return 1;
  }
});

console.log(myArr);
