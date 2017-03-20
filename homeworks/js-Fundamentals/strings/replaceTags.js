function solve(args) {

    var str = args[0],
        result = replaceTags(str);

    console.log(result);

    function replaceTags(string) {

        var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;

        return string.replace(regex, function(tag, url, content) {
            return '[' + content + '](' + url + ')';
        });
    }
}
