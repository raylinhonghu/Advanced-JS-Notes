
/* let timeoutID = window.setTimeout( function, milliseconds) */
let tID

$('#setTimeout').click(()=>{
  tID = setTimeout(()=>{
    console.log('greetings from setTimeout');
  },5000);
})

$('#cancelTimeout').click(()=>{
	clearTimeout(tID);
})

/* setInterval */
/* clearInterval */
