function solve(input) {
    var word = input[0].toLowerCase();
    var temp = input[1].toLowerCase();
    var reg = new RegExp(word, 'g');
    var count = (temp.match(reg)).length;
    return count;
}
