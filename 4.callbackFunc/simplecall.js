let x = function(){
	console.log("i am called from insdie a function");
};

let y = function(callback){
	console.log("do something");
  callback();
};

y(x);
