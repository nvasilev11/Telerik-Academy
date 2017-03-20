function solve(arr) {
    let result = 1,
        prev = +arr[0],
        array = [];
    for (let i = 1; i < arr.length; i++) {

        if (+arr[i] === prev) {

            result++;
            array.push(result);

        } else {

            result = 1;

        }

        prev = +arr[i];
    }
    console.log(Math.max(...array));
}
