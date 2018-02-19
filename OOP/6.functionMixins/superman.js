/* human factory */
const humanFactory = function(obj){
	let isCrying = false;

  return Object.assign({},obj, {
   cry(){
   	isCrying = true;
   },
   isCrying(){
   	return isCrying;
   }
  });
};

const ray = humanFactory({});
console.log(ray);

const flyFactory = function(obj){
	let isFlying = false;

  return Object.assign({},obj, {
  	fly(){
    	isFlying = true;
    },
    isFlying(){
    	return isFlying;
    }
  });
};

const superman = humanFactory(flyFactory({}));
console.log(superman);
