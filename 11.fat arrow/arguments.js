var x = function(){
  console.log(arguments[0])
};

var y = (...n) => {
  console.log(n[0]);
};

x(1,2,3);
y(1,2,3);
