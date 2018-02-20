var increment = function(i){
	return i + 1;
}
increment(i);


/* immediately invoke syntax */
(function(i){
	return i +1;
})(j)

/* no return */
!function(){
}();

/* private methods */
(function($){
	$(this).addClass('MyClass');
})(window.JQuery);
