import express from "express";
const app = express();

const PORT = 4000;

const handleListen = () =>
  console.log(`Listening on PORT http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("welcome Home");

app.get("/", handleHome);

app.listen(PORT, handleListen);
