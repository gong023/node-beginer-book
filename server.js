var http = require("http");
var url = require("url");

var start = function(route, handle) {
  var onRequest = function(request, response) {
    var path_name = url.parse(request.url).pathname;

    route(handle, path_name, response);
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start
