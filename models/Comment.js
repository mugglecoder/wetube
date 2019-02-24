import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
<<<<<<< HEAD

const model = mongoose.model("Comment", CommentSchema);
export default model;
=======
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
