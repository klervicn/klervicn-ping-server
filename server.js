function createHttpServer (port) {

  var http = require('http');
  var url = require('url');

  var server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var page = url.parse(req.url).pathname;
    res.writeHead(200);
    if (page == '/ping'){
      var date = {pong: Date()};
      res.write(JSON.stringify(date));
    }
    res.end();
  });
  server.listen(port);
}

export default createHttpServer;
