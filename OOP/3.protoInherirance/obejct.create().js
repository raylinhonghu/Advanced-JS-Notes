/* console.dir(Object) */
/* __proto__ is a creator and point to that object prototype */

/* syntax: Object.create(prototypeObject, propertyObject) */
const myObject = Object.create(Object.prototype);

const myLiteral = {};

const noProto = Object.create(null);

console.dir(myObject);
console.dir(Object);
console.dir(noProto);
