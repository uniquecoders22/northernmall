const express = require("express");
require("dotenv").config();
const { connectDb } = require("./utils/db");

const productRoute = require("./routes/Products");
const userRoute = require("./routes/Users")
const orderRoute=require("./routes/Orders")

connectDb();

const app = express();


app.get("/", (req, res) => {
  res.send("WELCOME TO NORTHERN MALL");
});



app.use(express.json());

app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server listening on port : " + port));
