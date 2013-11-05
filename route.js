var route = function(handle, path_name) {
  console.log("About to route a request for " + path_name);
  if (typeof handle[path_name] === 'function') {
    return handle[path_name]();
  } else {
    console.log("No request handler found for " + path_name);
    return '404 not found';
  }
}

exports.route = route;
