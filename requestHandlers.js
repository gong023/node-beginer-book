var exec = require("child_process").exec;

var start = function() {
  console.log("start");

  var content = "empty";
  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
  });
  return content;
}

var upload = function() {
  console.log("upload");
  return "Hello Upload";
}
exports.start = start;
exports.upload = upload;
