const express = require('express');
const router = express.Router();
// const auth = require('../../../config/auth');
const cityController = require('../../../../controllers/api/countries/v1/city.controller');

router.get('', cityController.getAllCities);

module.exports = router;