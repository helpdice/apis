const express = require('express');
const router = express.Router();
// const auth = require('../../../config/auth');
const countryController = require('../../../../controllers/api/countries/v1/country.controller');

router.get('', countryController.getAllCountries);

module.exports = router;