import express from "express";
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

export default userRouter;
