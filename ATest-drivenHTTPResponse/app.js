const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    const jsonResponseBody = "<html><body><h1>Stavo Preparando Per Un Eservcizio Pesante</h1></body></html>";

    response.end(jsonResponseBody);
  });
}

module.exports = createApp;