const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello welcome to my page");
  }
  console.log("no error");
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  console.log("no error");
  res.end(`
  <h1>Oops!</h1> 
  <p>Something went wrong😥</p> 
  <a href="/">Back to home</a>`);
});

server.listen(5000);
