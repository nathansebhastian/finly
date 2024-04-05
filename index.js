const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if(url === '/') {
    res.end('Hello From Node.js');
  } else if (url === '/contact') {
    res.end('The Contact Page');
  } else if (url === '/about') {
    res.end('The About Page');
  } else {
    res.writeHead(404)
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
