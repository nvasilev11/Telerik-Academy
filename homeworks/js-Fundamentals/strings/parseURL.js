function solve(input) {

    var url = input[0],
        protocol,
        server,
        resources,
        startIndex;

    if (url.indexOf('://') > -1) {
        protocol = url.split(':/')[0];
        server = url.split('/')[2];
        startIndex = url.indexOf(server) + server.length;
        resources = url.substring(startIndex, url.length);
    }

    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resources);
}
