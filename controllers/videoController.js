import { videos } from "../db";
import routes from "../routes";
export const home = (req, res) =>
  res.render("home", { pageName: "Home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("Search", { pageName: "Search", searchingBy, videos });
};

//export const videos = (req, res) =>
//res.render("Videos", { pageName: "Videos" });
export const getUpload = (req, res) =>
  res.render("Upload", { pageName: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(55555));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageName: "Video-detail" });

export const editVideo = (req, res) =>
  res.render("EditVideo", { pageName: "EditVideo" });

export const deleteVideo = (req, res) =>
  res.render("DeleteVideo", { pageName: "DeleteVideo" });
