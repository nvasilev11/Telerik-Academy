//regex only
// function solve(input) {
//     var text = input.join(''),
//         result = text.replace(/(\s+(?=<([^<]+)>))/g, '').replace(/(<([^<]+)>)/g, '').replace(/\s\s + /g, '');
//     return result;
// }
// console.log(solve([
//     '<html>',
//     '  <head>',
//     '    <title>Sample site</title>',
//     '  </head>',
//     '  <body>',
//     '    <div>text',
//     '      <div>more text</div>',
//     '      and more...',
//     '    </div>',
//     '    in body',
//     '  </body>',
//     '</html>'
// ]));

//for loop
function solve(args) {

    var regex = /(<([^>]+)>)/ig,
        str = '',
        arr = [];

    for (i in args) {
        str = args[i].replace(regex, '').trim();
        arr.push(str);
    }

    console.log(arr.join(''));
}
