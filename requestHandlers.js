var query_string = require("querystring"),
  formidable = require('formidable'),
  fs = require("fs");

var start = function(response) {
  console.log("start");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

var upload = function(response, request) {
  console.log("upload");

  var form = new formidable.IncomingForm();
  form.parse(request, function(err, fields, files) {
    fs.rename(files.upload.path, "/tmp/test.png", function(err) {
      if (err) {
        fs.unlink("/tmp/test.png");
        fs.rename(files.upload.path, "/tmp/test.png");
      }
    });
    response.writeHead(200, {"content-type":'text/html'});
    response.write('received image: <br/>');
    response.write("<img src='/show' />");
    response.end();
  });
}

var show = function(response) {
  console.log('show');
  fs.readFile('/tmp/test.png', 'binary', function(err, file) {
    if (err) {
      response.writeHead(500, {'content-type':'text/plain'});
      response.write(err + "\n");
      response.end();
    } else {
      response.writeHead(200, {'content-type':'image/png'})
      response.write(file, 'binary');
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
