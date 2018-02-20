/* baseclass */
var Job = function(){
	this.pays = true;
};

/* prototype method */
Job.prototype.print = function(){
	console.log(this.pays ? 'Please hire me' : 'no thank you');
};


var TechJob = function(title, pays){
	Job.call(this);
  this.title = title;
  this.pays = pays;
};

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

var softJob = new TechJob('js programmer',true);
var softJob2 = new TechJob('vb programmer',false);

console.log(softJob.print());
console.log(softJob2.print());
