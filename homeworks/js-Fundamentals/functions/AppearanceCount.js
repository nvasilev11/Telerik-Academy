function solve(input) {

    var len = +input[0],
        number = +input[2],
        array = input[1].split(' '),
        counter = 0;

    function count(number) {
        counter = 0;
        for (var i = 0; i < len; i += 1) {
            if (+array[i] === number) {
                counter++;
            }
        }
        return counter;
    }
    console.log(count(number));
}
