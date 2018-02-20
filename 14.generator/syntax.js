/* iterator */

var i = [1,2,3,4];

var iterator1 = i[Symbol.iterator]();

console.log(iterator1.next());

/* generator */
function *generator(){
	yield 1;
  yield 2;
  yield 3;
  yield 4;
}

var iterator2 = generator();
console.log(iterator2.next());
