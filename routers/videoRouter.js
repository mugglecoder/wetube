import express from "express";
import router from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(router.upload, getUpload);
videoRouter.post(router.upload, postUpload);
videoRouter.get(router.videoDetail(), videoDetail);
videoRouter.get(router.editVideo, editVideo);
videoRouter.get(router.deleteVideo, deleteVideo);

export default videoRouter;
