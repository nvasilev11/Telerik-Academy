function name(args) {
    
    var number = +args[0];
    
    var isPrime = true;

    if (number > 1) {
        for(var i = 2; i <= Math.sqrt(number) ; i += 1) {
        
        if ((number % i) === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
    }
    else{
        console.log("false");
    }
}
