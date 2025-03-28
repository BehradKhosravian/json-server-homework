// JSON Server module
const jsonServer = require("json-server");
const cors = require("cors"); // Import the cors middleware
const helmet = require("helmet"); // Import the helmet middleware
const server = jsonServer.create();

const fs = require("fs");
const path = require("path");
const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router("db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS for all requests

// Disable CSP using helmet
server.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP
  })
);

server.use(middlewares);
server.use(router);

// Listen to port
server.listen(3002, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
