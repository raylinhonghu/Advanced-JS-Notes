
function *infiniteMaker(){
	yield 1;
  yield *anotherGenerator();
	/*   return stops generator */
 	return 'hello';
  yield 3;
}

function *anotherGenerator(){
	yield 2;
}

let iterator = infiniteMaker();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());
