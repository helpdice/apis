const express = require('express');
const router = express.Router();

const currencyController = require('../../../controllers/api/currencies/currency.controller.js');

router.get('/', currencyController.getCurrencies);

module.exports = router;