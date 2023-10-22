
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');


const app = express();
app.locals.moment = require('moment');
const uri =
  "mongodb+srv://franktowa199724:ve4wPqERTPy2xTqO@test.h4dsfi3.mongodb.net/?retryWrites=true&w=majority"
// conenction to mongodb
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser());



// routes       
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/chat"))



// server configurations....
app.listen(8000, () => console.log("Server started listening on port: 3000"));

