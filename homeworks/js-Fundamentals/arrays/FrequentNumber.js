function solve(input) {
    var modeMap = {};
    var maxEl = input[0],
        maxCount = 1;
    for (var i = 0; i < input.length; i++) {
        var el = input[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    console.log(+maxEl + ' (' + maxCount + ' times)');;
}
