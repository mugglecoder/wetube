<<<<<<< HEAD
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);
=======
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = (req, res) =>
  console.log(`❤️  Listening server on http://localhost:${PORT}`);
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2

app.listen(PORT, handleListening);
