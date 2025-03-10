'' const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
});

// Create a new product
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect('/products');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
});

// Create a new product
router.post('/', async (req, res) => {
  const newProduct = 

}
