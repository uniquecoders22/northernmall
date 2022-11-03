const express = require("express")

const {
    addOrder,
    getAllOrders,
    getAOrder
} = require("../controllers/ordersController");

const router = express.Router();


router.route("/").post(addOrder)
router.route( "/").get(getAllOrders);
router.route("/:id").get(getAOrder);

module.exports = router;
