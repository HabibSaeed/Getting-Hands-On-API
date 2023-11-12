const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  full_name: String,
  age: Number,
  gender: String,
});

const UserModel = mongoose.model("myData", schema);

module.exports = UserModel;
