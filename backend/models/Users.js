const mongoose = require("mongoose");

const { model, Schema } = mongoose;

exports.User = model(
  "User",
  new Schema({
    name: String,
    password: String,
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    location: String,
    profile: String,
  })
);

