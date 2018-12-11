const express = require("express");
const app = express();

const PORT = 4000;

function handleListen() {
  console.log(`Listening on PORT http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("welcome Home");
}

app.get("/", handleHome);

app.listen(PORT, handleListen);
