function solve(input) {

    var a = +input[0],
        b = +input[1],
        c;

    if (a > b) {
        c = b;
        b = a;
        a = c;
    }
    console.log(a + " " + b);
}
