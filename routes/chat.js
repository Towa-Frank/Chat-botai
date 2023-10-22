const router = require("express").Router();
const Chat = require("../models/Chat");

const express = require("express");

const app = express();
app.locals.moment = require('moment');

router.get("/chat", async (req, res) => {
  const chatS = await Chat.find()
  let result = chatS.map(a => a.date);
  console.log(result)

  // res.render("redirect");
  // res.json(JSON.stringify({ todo: chatS, names: req.cookies['username'] }))
  // res.send({ todo: chatS, names: req.cookies['username'] })
  res.render("chat", { todo: chatS, names: req.cookies['username'] });
  // var username = req.cookies('username')
  // res.render("index", { user : username })
});

module.exports = router;