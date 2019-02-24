import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
<<<<<<< HEAD
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Tilte is required"
=======
    required: "File URL is requried"
  },
  title: {
    type: String,
    required: "Title URL is requried"
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
<<<<<<< HEAD
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);
=======
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Video", VideoSchema); //이게 Video가 어디에 어떻게 연결이 되는거징?
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
export default model;
