var http = require("http");

function onRequest(request, response) {
    console.log('Request received.');
    response.WriteHead(200, {"Content-Type": 'text/plain'});
    response.write("Hello World!");
    response.end();

}

http.createServer(onRequest).listen(1488);

console.log("Server has started.");