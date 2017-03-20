function solve(args) {

    var coords = [{
                x1: +args[0],
                y1: +args[1],
                x2: +args[2],
                y2: +args[3]
            },
            {
                x1: +args[4],
                y1: +args[5],
                x2: +args[6],
                y2: +args[7]
            },
            {
                x1: +args[8],
                y1: +args[9],
                x2: +args[10],
                y2: +args[11]
            }
        ],
        lines = [];

    for (var i = 0; i < 3; i++) {
        getLength(coords[i].x1, coords[i].y1, coords[i].x2, coords[i].y2);
    }

    formTriangle(lines[0], lines[1], lines[2]);

    function getLength(x1, y1, x2, y2) {
        var distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        lines.push(distance);
        console.log(distance.toFixed(2));
    }

    function formTriangle(line1, line2, line3) {
        if ((line1 + line2 > line3) && (line1 + line3 > line2) && (line2 + line3 > line1)) {
            console.log('Triangle can be built');
        } else {
            console.log('Triangle can not be built');
        }
    }
}
