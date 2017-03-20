function numberWord(input) {
    var number = +input[0];

    if (number >= 0 && number <= 9 && number === parseInt(number)) {
        switch (number) {
            case 0:
                console.log('zero');
                break;
            case 1:
                console.log('one');
                break;
            case 2:
                console.log('two');
                break;
            case 3:
                console.log('three');
                break;
            case 4:
                console.log('four');
                break;
            case 5:
                console.log('five');
                break;
            case 6:
                console.log('six');
                break;
            case 7:
                console.log('seven');
                break;
            case 8:
                console.log('eight');
                break;
            case 9:
                console.log('nine');
                break;
            default:
                break;
        }
    } else {
        console.log('not a digit');
    }
}
