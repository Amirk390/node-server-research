const http = require('http');
const handler = require('./handler')
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

http.createServer(handler).listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
