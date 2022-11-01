const mongoose = require("mongoose");

exports.connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // userNewUrlParser: true,
    });
    console.log("connection established : " + conn);
  } catch (e) {
    console.log(e);
  }
};
