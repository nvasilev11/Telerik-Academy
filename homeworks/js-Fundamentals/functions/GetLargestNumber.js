function solve(input) {

    var numbers = input[0].split(' ');


    function getMax(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    console.log(getMax(+numbers[0], getMax(+numbers[1], +numbers[2])));
}
