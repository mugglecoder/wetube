export const join = (req, res) => res.render("Join", { pageName: "Join" });

export const login = (req, res) => res.render("Login", { pageName: "Login" });

export const logout = (req, res) =>
  res.render("Logout", { pageName: "Logout" });

export const users = (req, res) => res.render("Users", { pageName: "Users" });

export const UserDtail = (req, res) =>
  res.render("UserDetail", { pageName: "UserDetail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageName: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changepassword", { pageName: "change-password" });
