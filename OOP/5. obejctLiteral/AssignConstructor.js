let c1 = function(x,y,z){
	this.x = x;
  this.y = y;
  this.z = z;
};

let c1 = function(x,y,z){
	Object.assign(this,{x,y,z});
}
