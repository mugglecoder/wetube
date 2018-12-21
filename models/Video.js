import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is requried"
  },
  title: {
    type: String,
    required: "Title URL is requried"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Video", VideoSchema); //이게 Video가 어디에 어떻게 연결이 되는거징?
export default model;
