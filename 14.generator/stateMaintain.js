/* generator maintain the state
	 while calling the next */

function *infiniteMaker(){
	let i=0;
  while(true){
  	yield i;
    i++;
  }
}

let iterator = infiniteMaker();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
