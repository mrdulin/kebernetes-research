const http = require('http');

const port = 4000;

const handleRequest = (request, response) => {
  console.log(`Received request for URL: ${request.url}`);
  response.writeHead(200, { 'Content-type': 'text/plain' });
  response.end('Hello World!');
};

const www = http.createServer(handleRequest);
www.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
