var sentence = 'the quick brown fox jumped over the lazy dog';
var words = sentence.split(' ');

// for in is bad for arrays
for (x in words){
  console.log(words[x]);
}

for (var i = 0; i < words.length; i ++){
  console.log(words[i]);
}
''
