const http = require("http");
const querystring = require("node:querystring");
//const requestHandler = require("./Narcissistic Numbers/requestHandler.js");
//const requestHandler = require("./Stop gninnipS My sdroW/requestHandler.js");
//const requestHandler = require("./HighAndLow/requestHandler.js");
const requestHandler = require("./MorseCodePartOne/requestHandler.js");

const server = http.createServer((req, res) => {
  var qs = req.url.split("?")[1];
  const query = querystring.parse(qs);

  const response = requestHandler.default(query);

  res.end(response);
});

server.listen(5002, () => {
  console.log("Server listening at port 5002");
});
