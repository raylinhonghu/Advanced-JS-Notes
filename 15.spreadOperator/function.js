/* n is an array */
var x = function(){
	var args = Array.prototype.slice.call(arguments, 0);
  var args = [].slice.call(arguments, 0);
	console.log(args);
};

/* n is an array */
var y = function(a,b,c,...n){
	console.log(n);
};

x(1,2,3,4);
y(1,2,3,4);
