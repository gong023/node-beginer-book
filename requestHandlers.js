var exec = require("child_process").exec;

var start = function(response) {
  console.log("start");

  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(stdout);
    response.end();
    content = stdout;
  });
}

var upload = function(response) {
  console.log("upload");

  response.writeHead(200, {"Content-Type":"text/html"});
  response.write("Hello Upload");
  response.end();
}
exports.start = start;
exports.upload = upload;
