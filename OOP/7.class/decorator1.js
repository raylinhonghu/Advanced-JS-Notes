let lipstick = function(color){
	return function(target){
  	target.lips = color;
  }
};

let earrings = function(color){
	return function(target){
  	target.ear = color;
  }
};

@earrings('yellow')
@lipstick('black')
class Girl {

}

console.log(`Her lips are ${Girl.lips}, and earrings're ${Girl.ear}`);
