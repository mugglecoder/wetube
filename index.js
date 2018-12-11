import express from "express";
const app = express();

const PORT = 4000;

const handleListening = (req, res) =>
  console.log(`Listening server on http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("welcome home!!");

app.get("/", handleHome);

app.listen(PORT, handleListening);
