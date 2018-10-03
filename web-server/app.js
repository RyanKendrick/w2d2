const http = require("http");
const PORT = 8080;

// generates a random alpha numberic string
function generateRandomString() {
  var alphaNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var alphaNumString = "";

  for (var i = 0; i < 6; i++) {
    alphaNumString += alphaNums.charAt(Math.floor(Math.random() * alphaNums.length));
  }

  return alphaNumString;
};

console.log(generateRandomString());

// a function which handles requests and sends response
function requestHandler(request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("Unknown Path");
  }
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});