let myArray = [1,2,3,4,5];

let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());
