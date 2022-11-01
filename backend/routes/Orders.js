const express = require("express")

const {
    getAllOrders,
    getAOrder
} = require("../controllers/ordersController");

const router = express.Router();

router.route("./").get(getAllOrders);
router.route("/:id").get(getAOrder);

module.exports = router;
