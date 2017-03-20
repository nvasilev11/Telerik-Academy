function solve(input) {
    var a = +input[0],
        b = +input[1],
        c = +input[2],
        x1,
        x2,
        d = (b * b) - (4 * a * c); // D;

    if (d > 0) {
        x1 = (-b - Math.sqrt(d)) / (2 * a); // X1
        x2 = (-b + Math.sqrt(d)) / (2 * a); // X2
    } else if (d === 0) {
        x1 = -b / (2 * a);
        return ('x1=x2=' + x1.toFixed(2));
    } else if (d < 0) {
        return ("no real roots");
    }
    return ('x1=' + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
}
