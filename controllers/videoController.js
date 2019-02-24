import routes from "../routes";
<<<<<<< HEAD
import Video from "../models/Video";

// Home

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// Search

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// Upload

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

// Video Detail

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Edit Video

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Delete Video

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
=======
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
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
