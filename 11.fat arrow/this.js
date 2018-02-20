'use strict';

/* NaN */
var x = function(){
	this.val = 1;
  setTimeout(function(){
  	this.val++;
    console.log(this.val);
  },1);
}

/* OK */
/* because arrow function have no its own this */
var x = function(){
	this.val = 1;
  setTimeout(()=>{
  	this.val++;
    console.log(this.val);
  },1);
}

var xx = new x();
