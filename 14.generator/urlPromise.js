function request(url){
	return new Promise(function(resolve, reject){
  	makeAjaxCall(url, function(err, text){
    	if(err) reject(err);
      else resolve(text);
    });
  });
};

function *generator(){
	yield request('url1');
  yield request('url2');
}
