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

// https://www.cnblogs.com/libin-1/p/5848186.html


function *generator(){
  yield request('url1');
  yield request('url2');
}

// This is an easier version for .then callback?
// Are there any differences between using .then and this method?

// Well it can be a good replacement however. combing
// both together would get you async await.
// Its combination of generators and promises that
// makes async code looks like sync code.﻿
