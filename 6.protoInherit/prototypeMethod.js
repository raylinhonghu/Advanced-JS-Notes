/* constructor */
var X = function(j){
	/* set defaults */
	this.i = 0;
  this.j = j;

  /* method */
  this.getJ = function(){
  	return this,j;
  };

  X.prototype.getJPJ = function(){
  	return this.j+this.j;
  };
};

/* two separate objects */
var x1 = new X(1);
var x2 = new X(2);

console.log(x1.getJ()+","+ x2.getJ());
console.log(x1.getJPJ()+","+ x2.getJPJ());
