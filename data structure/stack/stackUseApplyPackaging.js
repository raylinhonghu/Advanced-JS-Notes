function Stack(){
    this._data = [];
}
Stack.prototype={
    constructor:Stack,
    push:function (a){
        Array.prototype.push.apply(this._data,arguments);
    },
    pop:function (){
        Array.prototype.pop.apply(this._data,arguments);
    },
    size:function(){ return this._data.length;},
    clear:function(){ this._data.length=0;}
}

var x = new Stack();
x.push(1);
x.push(22);
x.push(44);
x.push(133);
console.log(x);
x.pop(133);
console.log(x.size());
x.clear();
