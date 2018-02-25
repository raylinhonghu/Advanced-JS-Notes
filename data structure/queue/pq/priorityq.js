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
  var priority = this.dataStore[0].code;
  var pos = 0;
  for(var i = 1;i<this.length; i++){
    if(this.dataStore[i].code < priority){
      pos = i;
      priority = this.dataStore[i].code;
    }
  }
  return this.dataStore.splice(pos,1);
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

function Patient(name, code){
  this.name = name;
  this.code = code;
}
