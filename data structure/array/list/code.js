function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  this.contains = contains;
  this.length = length;
  this.append = append;
  this.remove = remove;
  this.find = find;
  this.toString = toString;
  this.clear = clear;
  this.getElement = getElement;
  this.next = next;
  this.prev = prev;
  this.moveTo = moveTo;
  this.currPos = currPos;
  this.front = front;
  this.end = end;

}

function append (item){
  this.dataStore.push(item);
  this.listSize ++;
}

function find(item){
  for(var i = 0; i < this.listSize; i++){
    if (item == this.dataStore[i]){
      return i;
    }
  }
  return -1;
}

function remove(item){
  var position = this.find(item);
  if (position > -1){
    this.dataStore.splice(position,1);
    this.listSize --;
    return true;
  }
  return false;
}


function length(){
  return this.listSize;
}

function toString(){
/* for(var i = 0; i < this.listSize; i++){
    console.log(this.dataStore[i].join());
  } */
	console.log(this.dataStore);
}

// var names = new List();
// names.append(1);
// names.append(13);
// names.append(77);
// names.toString();
//
// names.remove(13);
// names.toString();

function insert(el, after){
  var position = this.find(after);
  if (position > -1){
    this.dataStore.splice(after,0,el);
    this.listSize ++;
    return true;
  }
  return false;
}


function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0 ;
  this.pos = 0;
}


function contains(val){
  for(var i = 0; i < this.listSize; i++){
    if (val == this.dataStore[i]){
      return true;
    }
  }
  return false;
}

function front(){
  this.pos = 0;
}

function end(){
  this.pos = this.listSize-1;
}

function prev(){
  if (this.pos >0){
    this.pos --;
  }
}

function next(){
  if(this.pos < this.listSize-1){
    this.pos ++;
  }
}

function currPos(){
  return this.pos;
}

function moveTo(v){
  this.pos = v;
}

function getElement(){
  return this.dataStore[this.pos];
}

var names = new List();
names.append(1);
names.append(13);
names.append(77);
names.append(111);
names.append(2222);
names.append(8888);
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.prev();
console.log(names.getElement());
