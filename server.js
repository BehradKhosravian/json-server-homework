// JSON Server module
const jsonServer = require("json-server");
const cors = require("cors"); // Import the cors middleware
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS for all requests
server.use(middlewares);

server.use(router);
// Listen to port
server.listen(3002, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
