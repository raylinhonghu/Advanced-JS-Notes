var obj = function(){

	this.i = 0;
  this.add = function(i){
  	this.i += i;
    return this;
  };
  this.sub = function(i){
    this.i -= i;
    return this;
  };
  this.print = function(i){
    console.log(this.i);
  };
};

var x = new obj();
/* console.log(x.add(3)); */
x.add(3).sub(2).print();
