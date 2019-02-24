import express from "express";
<<<<<<< HEAD
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);
=======
import router from "../routes";
import {
  users,
  UserDtail,
  editProfile,
  changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(router.users, users);
userRouter.get(router.editProfile, editProfile);
userRouter.get(router.changePassword, changePassword);
userRouter.get(router.userDetail(), UserDtail);
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2

export default userRouter;
