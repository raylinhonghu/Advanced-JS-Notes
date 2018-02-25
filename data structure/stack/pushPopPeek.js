function Stack(){
  this.top = 0;
  this.dataStore = [];
  this.pop = pop;
  this.peek = peek;
  this.push = push;
  this.length = length;
  this.clear = clear;
}


function push(val){
  this.dataStore[this.top++] = val;
}

function pop(){
  return this.dataStore[--this.top];
}

function peek(){
  return this.dataStore[this.top -1];
}

function length(){
  return this.top;
}

function clear(){
  this.top = 0;
}

var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(4);
stack.push(99);
console.log(stack.dataStore);
stack.peek();
console.log(stack.dataStore);
stack.pop();
console.log(stack.dataStore);
stack.clear();
console.log(stack.dataStore);
stack.push(666);
console.log(stack.dataStore);
