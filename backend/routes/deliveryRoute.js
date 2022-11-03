const express =require("express")
const { addDelivery, getAllDelivery, getAdelivery } = require("../controllers/deliverysController")

const router = express.Router();

router.route("/").post(addDelivery);

router.route("/").get(getAllDelivery);

router.route("/:id").get(getAdelivery);


module.exports = router;
