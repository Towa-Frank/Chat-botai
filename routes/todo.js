const router = require("express").Router();
const Chat = require("../models/Chat");
const storage = require("node-sessionstorage");

router.post("/add/todo", (req, res) => {
  const { todo } = req.body;
  const newChat = new Chat({ name: req.cookies["username"], todo: todo });
  newChat
    .save()
    .then(() => {
      console.log("Success added todo");
      res.redirect("/chat");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/add/username", (req, res) => {
  const { username } = req.body;
  // storage.setItem("username", username);
  // console.log("Username : ", storage.getItem("username"));
  // res.redirect("/chat");
  res.cookie("username", username, { httpOnly: true });
  res.redirect("/chat");
});

module.exports = router;
