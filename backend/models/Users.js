const mongoose = require("mongoose");

const { model, Schema } = mongoose;

exports.User = model(
  "User",
  new Schema(
    {
      name: String,
      password: String,
      confirmpassword: String,
      email: {
        type: String,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

