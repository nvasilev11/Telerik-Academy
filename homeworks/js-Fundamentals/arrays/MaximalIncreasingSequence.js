function solve(args) {

    var arr = args.splice(1),
        len = args[0],
        count = [+arr[0]],
        temp = [+arr[0]];

        for (var i = 0; i < arr.length; i++) {

            if (+arr[i] > +arr[i - 1]) {
                temp.push(+arr[i]);
            } else {
                temp = [+arr[i]];
            }

            if (temp.length > count.length) {
                count = temp;
            }
        }

    console.log(count.length);
}
