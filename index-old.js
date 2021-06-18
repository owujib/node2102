// import http module
const http = require('http');
const { person, students } = require('./data');
const path = require('path');
const readFileToServer = require('./test');

/**
 * this createserver method carries 2 parameters,
 * 1.) the request object
 * 2.) the response object
 */
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const file = path.join(__dirname, 'public/index.html');
    const data = readFileToServer(file);
    res.write(data.file);
    res.end();
  } else if (req.url === '/api/person') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(person));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 page not found</h1>');
    res.end();
  }
});

const PORT = 5500;

server.listen(PORT, () => {
  console.log(
    `server is running on http://localhost:${PORT} \nreload server to see new file changes `
  );
});
