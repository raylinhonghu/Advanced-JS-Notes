function Queue(){
  this.dataStore = [];
  this.enqueueF = enqueueF;
  this.dequeueF = dequeueF;
  this.enqueueB = enqueueB;
  this.dequeueB = dequeueB;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.clear = clear;
  this.peek = peek;
  this.length = length;
}

function peek(){
  return this.dataStore[0];
}

function enqueueF(v){
  this.dataStore.unshift(v);
}

function dequeueB(){
  this.dataStore.pop()
}

function enqueueB(v){
  this.dataStore.push(v);
}

function dequeueF(){
  this.dataStore.shift()
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length-1];
}

function toString(){
  var str = ""
  for(var i = 0; i < this.dataStore.length ; i++){
    str += this.dataStore[i];
  }
  return str;
}

function clear(){
  for(var i = 0; i < this.dataStore.length ; i++){
    this.dataStore.shift();
  }
}

function length(){
  return this.dataStore.length;
}

function empty(){
  if (this.dataStore.length == 0){
    return true;
  }else{
    return false;
  }
}


var q = new Queue();
q.enqueueB("ray");
q.enqueueB("mike");
q.enqueueB("coco");
q.enqueueB("lilian");
console.log(q.toString());
console.log(q.front());
console.log(q.back());
q.dequeueF();
console.log(q.toString());
console.log(q.front());

q.enqueueF("XXX");
q.enqueueF("YYY");
console.log(q.toString());
q.dequeueB();
q.dequeueB();
console.log(q.toString());
