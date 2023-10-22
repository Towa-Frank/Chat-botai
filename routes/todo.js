const router = require("express").Router();
const Chat = require("../models/Chat");
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var moment = require("moment")



var { Configuration, OpenAIApi } = require('openai')
var dotenv = require('dotenv')

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY
})

const openai = new OpenAIApi(configuration)

app.use(bodyParser.json());


router.post("/add/todo", async (req, res) => {

  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: req.body.todo
      }
    ]
  })

  if (chatCompletion) {
    const newChat = new Chat({ name: req.cookies["username"], todo: req.body.todo, date: moment().format("MMMM Do YYYY, h:mm:ss a") });
    newChat
      .save()
      .then(() => {
        const chatMessage = new Chat({ name: `bot-${req.cookies["username"]}`, todo: chatCompletion.data.choices[0].message.content, date: moment().format("MMMM Do YYYY, h:mm:ss a") });
        chatMessage
          .save().then(() => {
            res.redirect("/chat");
          })
      })
      .catch((err) => {
        console.log(err);
      });


  }

});

router.post("/add/username", (req, res) => {
  const { username } = req.body;
  console.log(req.body.username)
  res.cookie("username", req.body.username, { httpOnly: true });
  res.redirect("/chat");
});

module.exports = router;
