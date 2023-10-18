const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    todo: {
        type: String,
        require: true,
    },
});

module.exports = new mongoose.model("Chat", ChatSchema);