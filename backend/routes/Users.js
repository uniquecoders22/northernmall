const express = require("express");
const {
  addUser,
  getAUser,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/register", addUser);
router.route("/:id").get(getAUser);

module.exports = router;
