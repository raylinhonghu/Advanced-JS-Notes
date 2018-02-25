// var movies = read(movie.txt).split("\n");

function createArr(file){
  var arr2 =[]
  var arr = read(file).split("\n");
  for (var i = 0; i < arr.length; i ++){
    arr2.push(arr[i].trim());
  }
  return arr2;
}

var movies = create(movie.txt);

var mv = new List();

for(var i = 0; i < movies.length; i++){
  mv.append(movies[i]);
}

function displayMovie (){
  for(mv.front();mv.currPos < mv.listSize ;mv.next){
    console.log(mv.getElement());
  }
}


function displayMovie (){
  for(mv.front();mv.currPos < mv.listSize ;mv.next){
    if(mv.getElement() instanceof Customer){

    }else{

    }

  }
}
