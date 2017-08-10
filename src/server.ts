var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 3010, IP defaults to 127.0.0.1
server.listen(3010);
/* tslint:disable-next-line */
console.log('Running a GraphQL API server at localhost:3010');
