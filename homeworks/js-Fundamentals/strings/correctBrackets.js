function solve(args) {
    var string = args[0],
        counter = 0;

    for (var i = 0; i < string.length; i += 1) {
        if (string[i] === '(') {
            counter += 1;
        } else if (string[i] === ')') {
            counter -= 1;
        }
    }
    if (!counter) {
        return 'Correct';
    } else {
        return 'Incorrect';
    }
}
