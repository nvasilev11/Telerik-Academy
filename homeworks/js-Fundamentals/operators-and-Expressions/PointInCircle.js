function solve(input) {

var x = +input[0],
  	y = +input[1],
  	radius = 2,
  	result;
  
  result = Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0)).toFixed(2);
  
  if(result < radius) {
    console.log('yes ' + result);
  
  }else {
  console.log('no ' + result);
  }
}
