import express from "express";
import router from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(router.home, home);
globalRouter.get(router.search, search);
globalRouter.get(router.join, join);
globalRouter.get(router.login, login);
globalRouter.get(router.logout, logout);

export default globalRouter;
