const mongoose = require("mongoose");

const { model, Schema } = mongoose;

exports.Order = model(
  "Order",
  new Schema({
    name: String,
    price: Number,
    image: String,
    quantity:Number,
    
  })
);
