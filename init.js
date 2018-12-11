import app from "./app";

const PORT = 4000;

const handleListening = (req, res) =>
  console.log(`⚠️ Listening server on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
