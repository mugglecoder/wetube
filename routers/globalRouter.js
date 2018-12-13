import express from "express";
import router from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  login,
  logout,
  postJoin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(router.join, getJoin);
globalRouter.post(router.join, postJoin);

globalRouter.get(router.home, home);
globalRouter.get(router.search, search);
globalRouter.get(router.login, login);
globalRouter.get(router.logout, logout);

export default globalRouter;
