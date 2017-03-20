function solve(input) {
    var a = input[0],
        b = input[1];
    for (var i = 0; i < Math.min(a.length, b.length); i += 1) {
        if (a[i] > b[i]) {
            result = ">";
        }
        if (a[i] < b[i]) {
            result = "<";
        }
        if (a[i] === b[i]) {
            result = "=";
        }
    }
    if ((a.length != b.length) && (result == "=")) {
        a.length > b.length ? ">" : "<";
    }
    console.log(result);
}
