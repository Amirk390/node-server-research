const fs = require('fs');
const path = require('path');
const req = require('request');

const options = {
  url: "https://picsum.photos/200/300/?random",
  method: "GET"
}

function handler(request, response) {

  let url = request.url;

  if (url === '/') {
    response.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./index.html', function(error, file) {
      if (error) {
        console.log(error);
        fs.writeHead(404, {'content-type': 'text/html'});
        response.end("<h1>FILE NoT fOUnd</h1>");
      }
      else {
        response.end(file);
      }
    })
  }

  else if (url === '/image') {
    req.get(options);
  }
  
  else {
    fs.writeHead(404, {'content-type': 'text/html'});
    response.end("<h1>FILE NoT fOUnd</h1>");
  }
}


module.exports = handler;
