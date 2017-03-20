function solve(input) {

    var len = +input[0],
        arr = input[1].split(' '),
        sorted = sort(arr).join(' ');
    console.log(sorted);

    function sort(array) {

        array.sort(function(a, b) {
            return a - b;
        });
        return array;
    }
}
