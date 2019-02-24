import express from "express";
<<<<<<< HEAD
import routes from "../routes";
=======
import router from "../routes";
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
import {
  getUpload,
  postUpload,
  videoDetail,
<<<<<<< HEAD
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
=======
  editVideo,
  deleteVideo
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(router.upload, getUpload);
videoRouter.post(router.upload, postUpload);
videoRouter.get(router.videoDetail(), videoDetail);
videoRouter.get(router.editVideo, editVideo);
videoRouter.get(router.deleteVideo, deleteVideo);
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2

export default videoRouter;
