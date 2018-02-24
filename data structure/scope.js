

// if a variable is declared outside of the function scope,
// it can be accessed within the function
// because scope is a global variable

function showcase1(){
  return scope;
}

var scope = "hi";
console.log(showcase1()); // hi
console.log(scope); //hi



function showcase2(){
  // local scope
  var scope = "local";
  return scope;
}

var scope = "hi";
console.log(showcase2());//local
console.log(scope);// hi


function showcase3(){
  // local variable with global scope
  scope = "local";
  return scope;
}

var scope = "hi";
console.log(showcase2());//local
console.log(scope);// local
