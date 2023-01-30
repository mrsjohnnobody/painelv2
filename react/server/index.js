const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(cors());

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });

  socket.emit("data", "hello from the server!");
});

server.listen(3001, () => {
  console.log("server started at http://localhost:3001");
});
