const { Product } = require("../models/Products");

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      succes: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(202).json({
      succes: true,
      counts: products.length,
      data: products,
    });
  } catch (error) {
    res.status(202).json({
      succes: false,
      error: error.message,
    });
  }
};

exports.getAProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      succes: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      succes: false,
      error: error.message,
    });
  }
};
