const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

module.exports = router;
