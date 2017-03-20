function solve(input) {

var x = +input[0],
  	y = +input[1],
  	result,
 	radius = Math.sqrt((x -1) * (x -1) + (y - 1) * (y - 1));


if (radius <= 1.5) {
        result = "inside circle";
    }
    else{
        result = "outside circle";
    }
  
if ((x >= -1 && x <= 5) && (y <= 1 && y >= -1))
        {
            result += " inside rectangle";
        }
        else 
        {
            result += " outside rectangle";
        }

        console.log(result);
}
