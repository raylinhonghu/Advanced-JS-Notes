let anObject = {
	name: 'bob',
  age: 20,
  friends: ['john', 'kim', 'peter'],
  getName: function(){
  	return this.name;
  }
}

for(let key in anObject){
	console.log(key); // name,age,firend,getName
}
