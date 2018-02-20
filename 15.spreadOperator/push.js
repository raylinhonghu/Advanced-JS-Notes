var a = [1,2,3];
var b = [4,5,6];

a.push(...b);

/* equivaelent */
Array.prototype.push.apply(a,b);

console.log(a);
