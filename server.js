var http = require("http");
var url = require("url");

var start = function(route, handle) {
  var onRequest = function(request, response) {
    var post_data = "";
    var path_name = url.parse(request.url).pathname;

    request.setEncoding("UTF-8");

    request.addListener("data", function(post_data_chunk) {
      post_data += post_data_chunk;
      console.log(post_data);
    });

    request.addListener("end", function() {
      route(handle, path_name, response, post_data);
    });
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start
