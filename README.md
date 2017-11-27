# RESEARCH
 How to make a request from the server

### what npm modules are available


+ ***HTTP Request***

  The HTTP Request submits an HTTP GET request

  For example:

  ```
  const request = require('request');

  request('http://stackabuse.com', function(err, res,   body) {  
      console.log(body);
      });

  ```

  The code above submits an HTTP GET request to stackabuse.com and then prints the returned HTML to the screen.
