var names = ['david','ray', 'rick'];
putstr("ENter a name to search for");
var name = readline();
var position = names.indexOf(name);

if(position >= 0){
  print("found" + name + "at posotion" + position);
}else{
  print("not find");
}

// index
.indexOf()
.lastIndexOf()


// change array to string with separate comma
.toString()
.join()
.join("")
