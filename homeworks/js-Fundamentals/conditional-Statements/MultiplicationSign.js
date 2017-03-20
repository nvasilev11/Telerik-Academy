function solve(input) {
    var a = +input[0],
        b = +input[1],
        c = +input[2],
        result = a * b * c;
    if (result > 0) {
        console.log('+');
    } else if (result === 0) {
        console.log('0');
    } else {
        console.log('-');
    }


}
