function solve(input) {
var width = +input[0];
  var height = +input[1];
  
  var area = width * height;
  var perimeter = 2 * (width + height);
  
  console.log((area).toFixed(2) + " " + (perimeter).toFixed(2))
  
}
