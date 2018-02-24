Array.matrix = function(row,col,intial){
  var rows = [];

  for(var i = 0; i < row; i++){
    var col = [];
    for(var j = 0; j < col; j++){
      col[j] = initial;
    }
    row[i] = col;
  }
  return rows;
}

////////////////////////////////

var x = [[1,2,7],[3,4,8],[5,6,9]]
