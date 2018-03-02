// no repeatition item
// no order

function Set(){
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.difference = difference;
  this.subset = subset;
  this.show = show;
  this.find = find;
  this.contains = contains;
}

function add(item){
  if (this.dataStore.indexOf(item)<0){
    this.dataStore.push(item);
    return true;
  }else{
    return false;
  }

}

function find(item){
  // for(var i = 0; i < this.size; i++){
  //   if(this.dataStore[i] == item){
  //     return i;
  //   }
  // }
  // return false;
  return this.dataStore.indexOf(item);
}

function remove(item){
  var pos = this.find(item);
  if(pos > -1){
    this.dataStore.splice(pos,1);
    return true;
  }else{
    return false;
  }
}

function size(){
  return this.dataStore.length;
}

function contains(val){
  if(this.dataStore.indexOf(val) > -1){
    return true;
  }else{
    return false;
  }
}

function union(set){
  var tempSet = new Set();
  for(var i = 0; i < this.size(); i++){
    tempSet.add(this.dataStore[i]);
  }
  for( i = 0; i < set.size(); i++){
    if(!tempSet.contains(set.dataStore[i])){
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

function intersect(set){
  var tempSet = new Set();
  for(var i = 0; i < set.size; i++){
    if(tempSet.contains(set.dataStore[i])){
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

function difference(set){
  var tempSet = new Set();
  for(var i = 0; i < this.dataStore.size; i++){
    if(!set.contains(this.dataStore[i])){
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function subset(set){
  if(this.dataStore.size > set.size){
    return false;
  }else{
    for(var i = 0; i < this.dataStore; i++){
      if(set.contains(this.dataStore[i])){
        return true;
      }else{
        return false;
      }
    }
  }
}

function show(){
  return this.dataStore;
}


var cis = new Set();
cis.add("Mike");
cis.add("Clayton");

cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.dir(it);
