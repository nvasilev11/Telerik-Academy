function solve(input) {
    let array = (input.splice(1)).sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < array.length; i++) {

        console.log(+(array[i]));

    }
}
