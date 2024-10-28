const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

const usermodel = mongoose.model("user", userschema);
module.exports = usermodel;
