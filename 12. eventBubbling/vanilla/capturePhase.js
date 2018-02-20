var p = document.querySelector('#parent');

// default: bubbling phase child => parent
// use capture phase : parent => child
p.addEventListener('click', function(){
	console.log('parent clicked');
}, true);

var c = document.querySelector('#child');

c.addEventListener('click', function(){
	console.log('child clicked');
}, true);
