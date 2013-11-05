var exec = require("child_process").exec;

var start = function() {
  console.log("start");

  var sleep = function(milli_seconds) {
    var start_time = new Date().getTime();
    while(new Date().getTime() < start_time + milli_seconds);
  }
  sleep(10000);
  return "Hello Start";
}

var upload = function() {
  console.log("upload");
  return "Hello Upload";
}
exports.start = start;
exports.upload = upload;
