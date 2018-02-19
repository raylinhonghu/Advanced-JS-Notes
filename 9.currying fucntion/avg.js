'use strict'
var avg = function(...n){
	let tot=0;
  for(let i=0; i<n.length; i+=1){
  	tot += n[i];
  }
  return tot/n.length;
};

/* n and m are array */
var spiceUp = function(fn, ...n){
	return function(...m){
  	/* another array */
  	return fn.apply(this, n.concat(m));
  }
};

var doAvg = spiceUp(avg, 1,2,3);
console.log(doAvg(4,5,6));
