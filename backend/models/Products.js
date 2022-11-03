const mongoose = require("mongoose");

const { model, Schema } = mongoose;

exports.Product = model(
  "Product",
  new Schema(
    {
      name: String,
      price: Number,
      image: String,
      description: String,
      ratings: {
        type: Number,
        default: 0,
      },
      reviews: [],
    },
    {
      timestamps: true,
    }
  )
);
