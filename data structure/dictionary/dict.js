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
	var sorted = [];
  for (var x in this.dataStore){
   sorted.push(x);
  }
  sorted.sort();

  for (var i= 0;i<sorted.length; i++){
    console.log( sorted[i] + " ==>  " + this.find(sorted[i]) );
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


/* var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");

console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();

pbook.clear();
console.log("Number of entries: " + pbook.count()); */

var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();
