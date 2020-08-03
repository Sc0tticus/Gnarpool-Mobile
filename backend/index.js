const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

io.on("connection", socket => {
  console.log("a user connected :D");
});

