
let toyota = {
	drive(){
  	return 'driving toyota';
  },
  break(){
  	return 'breaking toyota';
  }
};

let camry = {
	drive(){
  	return 'driving camry';
  }
};

// copy: methods with same name gets overwritten
Object.assign(camry, toyota);

// shadow copy
let copyToyota = Object.assign({},toyota);

// add new property to object
Object.assign(toyota, {
	wifi(){
  	return "have wifi";
  }
});

console.dir(toyota);
console.dir(camry.drive());
console.dir(copyToyota.drive());
