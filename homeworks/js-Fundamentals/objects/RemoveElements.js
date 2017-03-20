function solve(args) {

    var target = args[0],
        arr = args.splice(1),
        len = arr.length,
        newArray = [];

    remElement(arr, target);

    printArray(newArray);

    function remElement(array, target) {
        for (var i = 0; i < len; i++) {
            if (target !== array[i]) {
                newArray.push(array[i]);
            }
        }
    }

    function printArray(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}
