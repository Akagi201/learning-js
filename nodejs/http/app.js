var http = require('http');

http.createServer(function(req, res){
  res.end('Hello');
}).listen(8011);

console.log("listening on 8011");
