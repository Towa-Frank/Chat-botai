const router = require("express").Router();
const Chat = require("../models/Chat");
const storage = require("node-sessionstorage");

router.get("/chat", async (req, res) => {
    const ChatS = await Chat.find();
    res.render("chat", { todo: ChatS, name: storage.getItem("username") });
    // var username = req.cookies('username')
    // res.render("index", { user : username })
});

module.exports = router;