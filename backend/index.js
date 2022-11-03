const express = require("express");
require("dotenv").config();
const { connectDb } = require("./utils/db");

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const deliveryRoute = require("./routes/deliveryRoute");

connectDb();

const app = express();


app.get("/", (req, res) => {
  res.send("WELCOME TO NORTHERN MALL");
});



app.use(express.json());

app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/deliverys", deliveryRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server listening on port : " + port));
