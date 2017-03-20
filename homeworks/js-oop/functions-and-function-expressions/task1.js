function() {
    return function(sum) {
        var i,
            len = sum.length;
        for (i = 0; i < len; i += 1) {
            if (isNaN(Number(sum[i]))) {
                throw '';
            }
        }
        if (!len) {
            return null;
        }
        return sum.reduce(function(a, b) {
            return (+a) + (+b);
        }, 0);
    }
}
