function HashTable(){
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
}

function simpleHash(str){
  var total = 0;
  for(var c = 0; c < str.length; c++){
    total += str.charCodeAt(c);
  }
  return total % this.table.length;
}

// function BetterHash(str){
//   var total = 0;
//   for(var c = 0; c < str.length; c++){
//     total += str.charCodeAt(c);
//   }
//   return total % this.table.length;
// }

function showDistro(){
  console.log(this.table);
}

function put(item){
  this.table[this.simpleHash(item)] = item;
}

function get(item){
  return this.table[this.simpleHash(item)]
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}

hTable.showDistro();
