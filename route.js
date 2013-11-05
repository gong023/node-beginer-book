var route = function(handle, path_name) {
  console.log("About to route a request for " + path_name);
  if (typeof handle[path_name] === 'function') {
    handle[path_name]();
  } else {
    console.log("No request handler found for " + path_name);
  }
}

exports.route = route;
