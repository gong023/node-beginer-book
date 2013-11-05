var http = require("http"),
  url = require("url");

var start = function(route, handle) {
  var onRequest = function(request, response) {
    var path_name = url.parse(request.url).pathname;
    route(handle, path_name, response, request);
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start
