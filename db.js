import mongoose from "mongoose";
import dotenv from "dotenv";
<<<<<<< HEAD

=======
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

<<<<<<< HEAD
const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);
=======
const handleOpen = () => console.log("❤️  Connected to DB");
const handleError = error => console.log(`❤️  Error on DB Connection:${error}`);
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2

db.once("open", handleOpen);
db.on("error", handleError);
