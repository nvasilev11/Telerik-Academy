function biggest(input) {

    var firstNum = +input[0];
    var secondNum = +input[1];
    var thirdNum = +input[2];
    var fourthNum = +input[3];
    var fifthNum = +input[4];

    if (firstNum > secondNum && firstNum > thirdNum && firstNum > fourthNum && firstNum > fifthNum) {
        console.log(firstNum);
    } else if (secondNum > firstNum && secondNum > thirdNum && secondNum > fourthNum && secondNum > fifthNum) {
        console.log(secondNum);
    } else if (thirdNum > firstNum && thirdNum > secondNum && thirdNum > fourthNum && thirdNum > fifthNum) {
        console.log(thirdNum);
    } else if (fourthNum > firstNum && fourthNum > secondNum && fourthNum > thirdNum && fourthNum > fifthNum) {
        console.log(fourthNum);
    } else {
        console.log(fifthNum);
    }
}
