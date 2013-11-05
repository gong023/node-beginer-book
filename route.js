var route = function(handle, path_name, response) {
  console.log("About to route a request for " + path_name);
  if (typeof handle[path_name] === 'function') {
    handle[path_name](response);
  } else {
    console.log("No request handler found for " + path_name);

    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
