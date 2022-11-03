const express = require("express");
const {
  addProduct,
  getAllProducts,
  getAProduct,
} = require("../controllers/productsController");

const router = express.Router();

router.route("/").post(addProduct).get(getAllProducts);
router.route("/:id").get(getAProduct);

module.exports = router;
