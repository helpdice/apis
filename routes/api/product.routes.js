const express = require('express');
const router = express.Router();

const productController = require('../../controllers/api/product.controller.js');

router.get('/categories', productController.getGstCategory);

router.post('/add-category', productController.addGstCategory);

module.exports = router;