const { Router } = require("express");

const cookieParser = require("cookie-parser").Router();

Router.post('/', async (req, res) => {
    const { name, todo } = req.body;
    res.cookie('name',)
});

app.get('/get.cookie', (req, res) => {
    const userCookie = req.cookies.user;
    res.send(`User cookies value : ${userCookie}`)
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('user');
    res.send('Cookie has been deleted');
}); 