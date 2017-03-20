function task2(x, y) {
    x = +x;
    y = +y;
    if (isNaN(x) || isNaN(y)) {
        throw 'Error';
    }
    var result = [];

    function isPrime(num) {
        var len = Math.sqrt(num),
            flag = true;
        for (let k = 2; k <= len; k += 1) {
            if (!(num % k)) {
                flag = false;
            }
        }
        return flag;
    }
    for (let i = x; i <= y; i += 1) {
        if (isPrime(i) && i > 1) {
            result.push(i);
        }
    }
    return result;

}
