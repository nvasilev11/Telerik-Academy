function solve(input) {

    var number = +input[0],
        result = "";

    for (var index = 1; index <= number; index += 1) {

        result += index + " ";
    }
    console.log(result);
}
