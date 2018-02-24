function weekTemps(){
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(val){
  this.dataStore.push(val);
  // return this;
}

function average(){
  var t = 0;
  for(var i = 0 ; i < this.dataStore.length; i++){
    t += this.dataStore[i];
  }
  console.log(t/this.dataStore.length);
}

var x = new weekTemps();
x.add(1).add(3).add(6);
console.log(x.average());
