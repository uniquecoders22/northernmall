const { Delivvery } = require("../models/deliverys");

exports.addDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.create(req.body);
    res.status(201).json({
      succes: true,
      data: delivery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllDelivery= async (req, res) => {
  try {
    const delivery = await Delivery.find();
    res.status(202).json({
      succes: true,
      counts: delivery.length,
      data: delivery,
    });
  } catch (error) {
    res.status(202).json({
      succes: false,
      error: error.message,
    });
  }
};

exports.getAdelivery = async (req, res) => {
  try {
    const order = await delivery.findById(req.params.id);
    res.status(200).json({
      succes: true,
      data: delivery,
    });
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: error.message,
    });
  }
};
