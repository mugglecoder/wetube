import express from "express";
<<<<<<< HEAD
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin
} from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);
=======
import router from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  postLogin,
  getLogin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(router.join, getJoin);
globalRouter.post(router.join, postJoin);
globalRouter.get(router.login, getLogin);
globalRouter.post(router.login, postLogin);

globalRouter.get(router.home, home);
globalRouter.get(router.search, search);
globalRouter.get(router.logout, logout);
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2

export default globalRouter;
