const { Order } = require("../models/orders");

exports.addOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      succes: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(202).json({
      succes: true,
      counts: orders.length,
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
