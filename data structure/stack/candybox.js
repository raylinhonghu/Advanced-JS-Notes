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

function randomCandy(num){
  var arr = [];
  for(var i = 0; i<num; i++){
    var r = Math.random()*99
    console.log(r)
    if(r < 33){
      arr.push("red");
    }else if (r <= 66){
      arr.push("yello");
    }else if (r > 66){
      arr.push("white");
    }
  }
  return arr;
}

var candy = randomCandy(10);
console.log(candy);

function pickCandy(arr){
  var stack = new stack();
  for(var i = 0; i < arr.length; i ++){
    if(arr[i] != "yello"){
      stack.push(arr[i]);
    }
  }
  return stack.dataStore;
}
console.log(pickCandy(candy));
