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
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const HomePage = path.join(__dirname, 'public/index.html');
      const HomePagedata = readFileToServer(HomePage);
      res.write(HomePagedata.file);
      res.end();
      break;

    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const aboutPage = path.join(__dirname, 'public/about.html');
      const aboutPagedata = readFileToServer(aboutPage);
      res.write(aboutPagedata.file);
      res.end();
      break;

    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const contactPage = path.join(__dirname, 'public/contact.html');
      const contactPagedata = readFileToServer(contactPage);
      res.write(contactPagedata.file);
      res.end();
      break;

    case '/api/students':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(students));
      res.end();
      break;

    case '/api/person':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(students));
      res.end();
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>Page not found</h1>');
      res.end();
      break;
  }
});

const PORT = 5500;

server.listen(PORT, () => {
  console.log(
    `server is running on http://localhost:${PORT} \nreload server to see new file changes `
  );
});
