let str1 = 'hello\n' +
'world';

let str2 = `hello
world`;

console.log(str1);
console.log(str2);

let one = 1; let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;

let tagged = function(strArray, ...vals){
	console.log(strArray);
  console.log(vals);
}

//internationalization
tagged`adding ${one} and ${two} gives me ${one + two}`;

/* repeat/includes/endswith/startwith */

let raw = String.raw`Not a newline:\n`;
console.log(raw);
