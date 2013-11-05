var query_string = require("querystring");

var start = function(response, post_data) {
  console.log("start");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

var upload = function(response, post_data) {
  console.log("upload");

  response.writeHead(200, {"Content-Type":"text/html"});
  response.write("Hello Upload: " + query_string.parse(post_data).text);
  response.end();
}
exports.start = start;
exports.upload = upload;
