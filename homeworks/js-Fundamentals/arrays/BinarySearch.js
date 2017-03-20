function solve(args) {

    var length = args.splice(0, 1),
        array = args.splice(0, length),
        x = args,
  		min = 0,
        max = length - 1,
        result = -1,
        mid;

    while (min <= max) {
        mid = min + (max - min) / 2;
        mid = Math.floor(mid);

      	if (+array[mid] > x) {
            max = mid - 1;
        } else if (+array[mid] < x) {
            min = mid + 1;
        } else {
            result = mid;
            break;
        }
    }

	console.log(result);
}
