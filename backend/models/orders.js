const mongoose = require("mongoose");

const { model, Schema } = mongoose;

exports.Order = model(
  "Order",
  new Schema(
    {
      name: String,
      image: String,
      Qnty: Number,
    },
    {
      timestamps: true,
    }
  )
);
