function solve(input) {

    var len = +input[0],
        arr = input[1].split(' '),
        counter = 0;

    console.log(printResult(arr));

    function checkNextNumber(array) {
        for (var i = 1; i < len - 1; i += 1) {
            if (+array[i] > +array[i + 1]) {
                return i;
            }
        }
        return -1;
    }

    function checkPrevNumber(array) {
        for (var i = 1; i < len - 1; i += 1) {
            if (+array[i] > +array[i - 1]) {
                return i;
            }
        }
        return counter;
    }

    function printResult(array) {
        for (var i = 1; i < len - 1; i += 1) {
            checkPrevNumber(array[i]);
            checkNextNumber(array[i]);
        }
        return -1;
    }
}
