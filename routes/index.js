const router = require("express").Router();
var express = require('express');
var cookieParser = require('cookie-parser'); // module for parsing cookies
var app = express();
app.use(cookieParser());
router.get("/", async (req, res) => {
    res.render("index");
});

module.exports = router;