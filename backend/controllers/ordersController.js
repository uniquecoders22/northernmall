const { Order } = require("../models/orders");



exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(202).json({
      succes: true,
      counts: products.length,
      data: orders,
    });
  } catch (error) {
    res.status(202).json({
      succes: false,
      error: error.message,
    });
  }
};

exports.getAOrder = async (req, res) => {
  try {
    const order = await order.findById(req.params.id);
    res.status(200).json({
      succes: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: error.message,
    });
  }
};
