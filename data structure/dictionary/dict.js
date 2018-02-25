function Dictionary(){
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key,val){
  this.dataStore[key] = val;
}

function find(key){
  return this.dataStore[key];
}

function remove(key){
  delete this.dataStore[key];
}

function showAll(){
  for (var x in this.dataStore){
  	/* console.dir(x)  keys*/
    console.log( x + " ==>  " + this.dataStore[x] );
  }
}

function count(){
  var count = 0;
  for(var num in this.dataStore){
    count ++;
  }
  return count;
}

function clear(){
  for(var num in this.dataStore){
    delete this.dataStore[num];
  }
}


var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");

console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();

pbook.clear();
console.log("Number of entries: " + pbook.count());
