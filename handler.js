const fs = require('fs');
const path = require('path');
const request = require('request');
const url = "https://api.unsplash.com/photos/random?client_id=200b4a1dd00e4c89258ce479eccf61ae1e1eb65ca12ef7712f1994cadb579658";

//authorization code 46c897da7262c3ac97db1e0e258db4d9fb7894bb5dc9bd39e4ca2a32202bf5f6

function handler(req, res) {

  let path = req.url;

  if (path === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./index.html', function(error, file) {
      if (error) {
        console.log(error);
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("<h1>FILE NoT fOUnd</h1>");
      }
      else {
        res.end(file);
      }
    })
  }

  else if (path === '/image') {
    let content;
    let image_url;

    request(url, (error, response, body) => {
      content = JSON.parse(body);
      image_url = content.urls.regular;
      console.log(image_url);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`<img src=${image_url}></img>`);
    });
    // console.log(image_url);
  }

  else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.end("<h1>FILE NoT fOUnd</h1>");
  }
}


module.exports = handler;
