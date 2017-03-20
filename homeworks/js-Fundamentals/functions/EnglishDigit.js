function solve(input) {

    var number = input[0],
        arr = number.split(''),
        lastNumber = number % 10;

    function ConvertToWord(number) {
        var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return words[number];
    }
    console.log(ConvertToWord(lastNumber));

}
