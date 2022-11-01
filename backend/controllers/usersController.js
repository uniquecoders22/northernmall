const { User } = require("../models/Users");

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      succes: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


exports.getAUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      succes: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: error.message,
    });
  }
};
