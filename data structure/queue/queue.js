function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
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

function enqueue(v){
  this.dataStore.push(v);
}

function dequeue(){
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
q.enqueue("ray");
q.enqueue("mike");
q.enqueue("coco");
q.enqueue("lilian");
console.log(q.toString());
console.log(q.front());
console.log(q.back());
q.dequeue();
console.log(q.toString());
console.log(q.front());
