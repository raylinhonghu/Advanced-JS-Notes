let cleanRoom = function(){
	return new Promise(function(resolve, reject){
  	resolve('Cleaned The Room ');
  });
};

let removeGarbage = function(p){
	return new Promise(function(resolve, reject){
  	resolve('Garbage Removed ' + p);
  });
};

let winIcecream = function(p){
	return new Promise(function(resolve, reject){
  	resolve('won Icecream ' + p);
  });
};

cleanRoom().then(function(resolveRoom){
	return removeGarbage(resolveRoom);
}).then(function(resolveGarbage){
	return winIcecream(resolveGarbage);
}).then(function(resolveIce){
	console.log('DONE: ' + resolveIce);
});
