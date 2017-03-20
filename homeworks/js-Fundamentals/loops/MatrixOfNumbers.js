function solve(input) {

    var number = +input[0],
        result = "";

    for (var i = 1; i <= number; i += 1) {
        for (var j = i; j <= i + number - 1; j += 1) {
            result += j + " ";
        }
        result += "\n";
    }
    console.log(result);

}
