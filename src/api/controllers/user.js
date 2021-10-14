import User from "../model/user.js";

export const handleAuth = (req, res, next) => {
  let userInfo = req.body;
  if (!userInfo) {
    throw new Error("Invalid user info");
  }
  const user = new User({
    name: userInfo.name,
    occupation: userInfo.occupation,
  });
  user.save().then((usr) => {
    res.json(user);
  });
};
