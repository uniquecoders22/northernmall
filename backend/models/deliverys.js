const mongoose = require("mongoose");

const { model, Schema } = mongoose;

exports.Delivery = model(
  "Delivery",
  new Schema(
    {
      firstname: String,
      lastname: String,
      phone: String,
      address: String,
      region: String,
      city:String,
      
    },
    {
      timestamps: true,
    }
  )
);
