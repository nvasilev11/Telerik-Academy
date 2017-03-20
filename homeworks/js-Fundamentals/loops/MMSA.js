function solve(input) {
    var min = +input[0],
        max = +input[0],
        sum = 0,
        avg = 0;

    for (var i = 0; i < input.length; i += 1) {
        var element = +input[i];

        if (element > max) {
            max = element
        }
        if (element < min) {
            min = element;
        }
        sum += element;
    }
    avg = sum / input.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));

}
