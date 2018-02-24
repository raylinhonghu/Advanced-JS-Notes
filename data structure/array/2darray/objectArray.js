function Point (x,y){
  this.x = x;
  this.y = y;
}

function displayPoints(arr){
  for (var i = 0; i < arr.length; i ++){
    console.log(arr[i].x + " , " + arr[i].y);
  }
}

var P1 = new Point(1,2);
var P2 = new Point(3,5);
var P3 = new Point(2,8);
var P4 = new Point(4,4);

var points = [P1,P2,P3,P4];
displayPoints(points);
var P5 = new Point(12,-3);
points.push(P5);
displayPoints(points);
 
