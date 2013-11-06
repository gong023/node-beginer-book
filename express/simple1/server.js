var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  var body = "hello world";
  res.setHeader('content-type', 'text/html');
  res.setHeader('content-length', body.length);
  res.end(body);
});

app.listen(3000);
