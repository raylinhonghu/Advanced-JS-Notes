const jsSkill = {
	knowsJS(){
  	return true;
  }
};

const engDegree = {
	hasDegree(){
  	return true;
  }
};

const backendSkill = {
	knowsBackend(){
  	return true;
  }
};

/* compose a js engineer */
const jsEngineer = Object.assign({},jsSkill, engDegree);
const fullstackEngineer = Object.assign({},jsSkill, backendSkill,engDegree);

console.dir(jsEngineer);
console.dir(fullstackEngineer);
