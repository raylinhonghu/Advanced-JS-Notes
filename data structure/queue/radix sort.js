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
function redixSort(arr,digit){
  for(var i = 0;i<arr.length;i++){
    if(digit == 1){
      arrQueue[arr[i]%10].enqueue[i];
    }else{
      arrQueue[Math.floor(arr[i]/10)].enqueue[i];
    }
  }
}

function collect(queues,){
  for(var i = 0 ; i < queues.length; i++){
    while(queues[i].length!=0){
      queues[i].dequeue().length--;
    }
  }
}
