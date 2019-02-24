<<<<<<< HEAD
import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
=======
import routes from "../routes";

//Join //////////////////////////////////////
export const getJoin = (req, res) => {
  res.render("Join", { pageName: "Join" });
};

export const postJoin = (req, res) => {
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
<<<<<<< HEAD
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do: Log user in``
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
=======
    res.render("Join", { pageName: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

//Log in //////////////////////////////////////
export const getLogin = (req, res) => {
  res.render("Login", { pageName: "Login" });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

//////////////////////////////////////
export const logout = (req, res) => {
  res.redirect(routes.home);
};

//////////////////////////////////////
export const users = (req, res) => res.render("Users", { pageName: "Users" });

//////////////////////////////////////
export const UserDtail = (req, res) =>
  res.render("UserDetail", { pageName: "UserDetail" });

//////////////////////////////////////
export const editProfile = (req, res) =>
  res.render("editProfile", { pageName: "editProfile" });

//////////////////////////////////////
export const changePassword = (req, res) =>
  res.render("changepassword", { pageName: "change-password" });
>>>>>>> b3c1e9728956591cf4a3e1f97f1d17fdc4fe44c2
