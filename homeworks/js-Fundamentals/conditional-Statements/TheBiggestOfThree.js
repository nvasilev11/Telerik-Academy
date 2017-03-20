function biggest(input) {

    var a = +input[0];
    var b = +input[1];
    var c = +input[2];

    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    } else {
        console.log(a);
    }
}
