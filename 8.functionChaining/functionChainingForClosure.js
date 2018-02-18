var obj = function(){
	// closure variable
	var i = 0;

  var add = function(j){
  	i += j;
    return this;
  };
  var sub = function(j){
    i -= j;
    return this;
  };
  var print = function(j){
		console.log(i);
  };

  // pass function as object
	return {add:add, sub:sub, print:print};
};

// no need new
var x = obj();
/* console.log(x.add(3)); */
x.add(3).sub(2).print();
