var counter = (function(){
  var i = 0;

  return {
    get:function(){
      return i;
    },
    set:function(num){
      i = num;
    },
    add:function(num){
      i += num;
    }
  };
})();

console.log(counter.get());
counter.set(3);
counter.add(2);
console.log(counter.get());
