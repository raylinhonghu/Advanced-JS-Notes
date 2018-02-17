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

Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
	console.log('all finished');
})

Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
	console.log('one of them is finished');
})
